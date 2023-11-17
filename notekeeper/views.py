from .models import Notes
from .serializer import NotesSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework import status
from django.db import transaction
from django.db.models import Count

# api for viewing all notes
@api_view(['GET'])
def all_notes(request):
    try:
        notes = Notes.objects.all()
        serializer = NotesSerializer(notes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    except Exception as e:
        return Response( status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
# api for creating note

@api_view(['POST'])
def create_note(request):
    serializer = NotesSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#  api for updating note by id
@api_view(['PUT'])
def update_note(request, pk):
    note = Notes.objects.filter(pk=pk).first()
    if note is None:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = NotesSerializer(instance=note, partial =True, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#api for deleting note by id
@api_view(['DELETE'])
def delete_note(request, pk):
    try:
        with transaction.atomic():
            note = Notes.objects.get(pk=pk)
            note.delete()
    except Notes.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    return Response(status=status.HTTP_204_NO_CONTENT)
    
# Fetch the detailed notes for each owner
 
@api_view(['GET'])
def all_notes_by_owner(request):
    try:
    
        queryset = Notes.objects.values('owner').annotate(note_count=Count('id'))

        
        for entry in queryset:
            notes = Notes.objects.filter(owner=entry['owner']).values('id', 'title', 'created_at', 'updated_at')
            if notes.exists():
                entry['notes'] = notes
            else:
                entry['notes'] = []      
        return Response(queryset, status=status.HTTP_200_OK)

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return Response({"error": "Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)