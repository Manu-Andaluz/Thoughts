from rest_framework import viewsets
from rest_framework.response import Response
from .models import Post, Image
from .serializers import PostSerializer, ImageSerializer
from django.http import JsonResponse
# Create your views here.
# def home(request):
#     return render(request, 'home.html',{})

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.all()

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

    def perform_create(self, serializer):
        instance = serializer.save()
        # Get the image URL from Cloudinary
        image_url = instance.file.url
        # import pdb; pdb.set_trace()
        # Add the image URL to the response data
        serializer_data = serializer.data
        serializer_data['image_url'] = image_url

        return JsonResponse({'link': serializer_data['image_url']})