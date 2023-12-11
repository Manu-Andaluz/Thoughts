from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import UserSerializer
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from rest_framework import status
from django.shortcuts import get_object_or_404
# Create your views here.

class UserRegistrationViewSet(viewsets.ViewSet):
    serializer_class = UserSerializer

    @action(detail=False, methods=['post'])
    def register(self, request):
        #import pdb; pdb.set_trace()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username=request.data['username'])
            user.set_password(request.data['password'])
            user.save()
            token = Token.objects.create(user=user)
            return Response({'token': token.key, 'user': serializer.data})
        return Response(serializer.errors, status=status.HTTP_200_OK)
    
    @action(detail=False, methods=['post'])
    def login(self,request):
        user = get_object_or_404(User, username=request.data['username'])
        if not user.check_password(request.data['password']):
            return Response("Not found", status=status.HTTP_404_NOT_FOUND)
        token, created = Token.objects.get_or_create(user=user)
        serializer = self.serializer_class(user)
        return Response({'token': token.key, 'user': serializer.data})
