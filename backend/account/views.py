from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
# from .models import User
from .serializers import UserRegistrationSerializer
from django.http import JsonResponse
# Create your views here.

class UserRegistrationViewSet(viewsets.ViewSet):
    serializer_class = UserRegistrationSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.save())

# class UserViewSet(viewsets.ModelViewSet):
#     serializer_class = UserSerializer

#     def get_queryset(self):
#         return User.objects.all()