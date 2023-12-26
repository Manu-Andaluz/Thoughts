from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
# Create your models here.


class CustomUser(AbstractUser):
    username = models.CharField(_("username"), max_length=150, unique=True)

    def __str__(self):
        return self.username
