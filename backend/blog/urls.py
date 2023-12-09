from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# router.register(r"home", views.home, "home")
router.register(r"all_posts", views.PostViewSet, "post_model")
router.register(r"image", views.ImageViewSet, "image_model")

urlpatterns = [
    path("", include(router.urls)),
]
