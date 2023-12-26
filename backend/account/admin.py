from django.contrib import admin

from account.models import CustomUser
# from .models import User
# Register your models here.

# admin.site.register(User)
admin.site.register(CustomUser)
