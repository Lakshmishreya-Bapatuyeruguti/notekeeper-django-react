from django.urls import path
from  .views import create_note,all_notes,update_note,delete_note,all_notes_by_owner
urlpatterns = [
    path('', all_notes, name='all-notes'),
    path('create/', create_note, name='create-note'),
    path('update/<int:pk>/', update_note, name='update-note'),
    path('delete/<int:pk>/', delete_note, name='delete-note'),
    path('ownernotes',all_notes_by_owner, name='Owner wise-note'),
]
