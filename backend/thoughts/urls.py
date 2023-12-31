from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("post/", include("blog.urls")),
    path("account/", include("account.urls")),
]
