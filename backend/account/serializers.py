from rest_framework import serializers
# from .models import User
from rest_framework import serializers
from rest_framework_simplejwt.tokens import AccessToken
from django.contrib.auth.models import User


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data.get('email', ''),
        )
        access_token = AccessToken.for_user(user)
        validated_data['token'] = str(access_token)
        return validated_data

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = "__all__"