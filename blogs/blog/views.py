from django.shortcuts import get_object_or_404
from .models import Blog
from .serializers import BlogSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import json

# Create your views here.
@api_view(['GET'])
def blog_post_list(request):
  blog_posts = Blog.objects.all().order_by('-date')
  serializer = BlogSerializer(blog_posts, many=True)
  return Response(serializer.data)

@api_view(['POST'])
def blog_post_create(request):
    if request.method == 'POST':
        # Print entire request.body for debugging
        print(request.body)
        print(request.headers.get('Content-Type'))

        # Parse JSON data from request.body
        try:
            data = json.loads(request.body)
            title = data.get('title')
            content = data.get('content')

            # Print title and content for debugging
            print('Title:', title)
            print('Content:', content)

            if title and content:
                blog_post = Blog.objects.create(
                    title=title,
                    content=content
                )
                serializer = BlogSerializer(blog_post)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response({'error': 'Title and content are required.'}, status=status.HTTP_400_BAD_REQUEST)
        except json.JSONDecodeError as e:
            return Response({'error': 'Invalid JSON data.'}, status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['PUT'])
def blog_post_update(request, pk):
    blog_post = get_object_or_404(Blog, pk=pk)

    if request.method == 'PUT':
        try:
            data = json.loads(request.body)
            title = data.get('title')
            content = data.get('content')

            if title and content:
                blog_post.title = title
                blog_post.content = content
                blog_post.save()
                serializer = BlogSerializer(blog_post)
                return Response(serializer.data)
            else:
                return Response({'error': 'Title and content are required.'}, status=status.HTTP_400_BAD_REQUEST)
        except json.JSONDecodeError:
            return Response({'error': 'Invalid JSON data.'}, status=status.HTTP_400_BAD_REQUEST)

    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['DELETE'])
def blog_post_delete(request, pk):
    blog_post = get_object_or_404(Blog, pk=pk)
    blog_post.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)