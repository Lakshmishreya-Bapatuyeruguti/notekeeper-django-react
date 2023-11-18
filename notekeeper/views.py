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
        user_param = request.GET.get('owner', None)
        if not user_param:
            return Response([], status=status.HTTP_200_OK)      
        notes = Notes.objects.filter(owner=user_param)
        
        if not notes.exists():
            return Response([], status=status.HTTP_200_OK)
        
        serializer = NotesSerializer(notes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    except Exception as e:
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
# api for creating note

@api_view(['POST'])
def create_note(request):
    try:
        serializer = NotesSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    except Exception as e:
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
#  api for updating note by id
@api_view(['PUT'])
def update_note(request, pk):
    try:
        note = Notes.objects.filter(pk=pk).first()
        if note is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
        serializer = NotesSerializer(instance=note, partial =True, data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    except Exception as e:
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
#api for deleting note by id
@api_view(['DELETE'])
def delete_note(request, pk):
    try:
        with transaction.atomic():
            note = Notes.objects.get(pk=pk)
            note.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        
    except Notes.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    
    
