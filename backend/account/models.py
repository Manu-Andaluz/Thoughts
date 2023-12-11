from django.db import models

# Create your models here.

class User(models.Model):
    username = models.TextField(max_length=191)
    password = models.TextField()
    email = models.EmailField(null=True, blank=True)
