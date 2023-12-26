from rest_framework import viewsets
from rest_framework.response import Response
from .models import Post, Image
from .serializers import PostSerializer, ImageSerializer
from django.http import JsonResponse
from rest_framework.decorators import action
from account.models import CustomUser
# Create your views here.
# def home(request):
#     return render(request, 'home.html',{})


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.all().order_by("-created")

    @action(detail=False, methods=["get"], url_path="by-author")
    def get_by_author(self, request):
        author_name = request.query_params.get("author")

        if not author_name:
            return Response({"error": "Author name is required"})

        try:
            author = CustomUser.objects.get(username=author_name)
        except CustomUser.DoesNotExits:
            return Response({"error": "User does not exits"})

        all_posts = Post.objects.filter(author=author)
        serializer = self.get_serializer(all_posts, many=True)

        return Response(serializer.data)


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
        serializer_data["image_url"] = image_url

        return JsonResponse({"link": serializer_data["image_url"]})
