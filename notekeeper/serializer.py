from rest_framework import serializers
from .models import Notes

class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Notes
        fields=("id","owner","title","description","created_at","updated_at")