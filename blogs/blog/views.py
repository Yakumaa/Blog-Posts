from django.shortcuts import render
from django.http import JsonResponse
from .models import Blog
from .serializers import BlogSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def blog_post_list(request):
  blog_posts = Blog.objects.all()
  serializer = BlogSerializer(blog_posts, many=True)
  return Response(serializer.data)

@api_view(['POST'])
def blog_post_create(request):
  serializer = BlogSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=201)
  return Response(serializer.errors, status=400)
