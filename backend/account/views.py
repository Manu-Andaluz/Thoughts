from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import CustomUserSerializer, CustomTokenObtainPairSerializer
from .models import CustomUser
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.tokens import RefreshToken
# Create your views here.


class UserRegistrationViewSet(viewsets.ViewSet):
    serializer_class = CustomUserSerializer

    @action(detail=False, methods=["post"])
    def register(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = CustomUser.objects.get(username=request.data["username"])
            user.set_password(request.data["password"])
            user.save()
            token = CustomTokenObtainPairSerializer.get_token(user=user)
            return Response({"token": str(token), "user": serializer.data})
        return Response(serializer.errors, status=status.HTTP_200_OK)

    @action(detail=False, methods=["post"])
    def login(self, request):
        user = get_object_or_404(CustomUser, username=request.data["username"])
        if not user.check_password(request.data["password"]):
            return Response("Not found", status=status.HTTP_404_NOT_FOUND)
        token = CustomTokenObtainPairSerializer.get_token(user=user)
        serializer = self.serializer_class(user)
        return Response({"token": str(token), "user": serializer.data})
