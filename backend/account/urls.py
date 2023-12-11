from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# router.register(r"auth", views.User, "user_model")
router.register(r'register', views.UserRegistrationViewSet, basename='register')

urlpatterns = [
    path("", include(router.urls)),
]
