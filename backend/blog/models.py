from django.db import models
from account.models import CustomUser
# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    body = models.TextField()
    image_cover = models.FileField(upload_to="thoughts", default="")
    likes = models.IntegerField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title + " | " + str(self.author)


class Image(models.Model):
    file = models.FileField(upload_to="thoughts", default="")
