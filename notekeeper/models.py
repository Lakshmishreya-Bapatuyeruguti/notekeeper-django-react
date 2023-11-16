from django.db import models

# Create your models here.
class Notes(models.Model):
    id=models.AutoField(primary_key=True)
    owner=models.EmailField(max_length=254)
    title=models.CharField(max_length=100)
    description=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)