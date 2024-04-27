from django.shortcuts import render
from django.http import JsonResponse
from .models import Blog
from .serializers import BlogSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import json

# Create your views here.
@api_view(['GET'])
def blog_post_list(request):
  blog_posts = Blog.objects.all()
  serializer = BlogSerializer(blog_posts, many=True)
  return Response(serializer.data)

@api_view(['POST'])
# def blog_post_create(request):
#     if request.method == 'POST':
#         print(request.data)
#         print(request.headers.get('Content-Type'))
#         title = request.body.get('title')
#         print(title)
#         content = request.body.get('content')
#         print(content)

#         if title and content:
#             blog_post = Blog.objects.create(
#                 title=title,
#                 content=content
#             )
#             # serializer = BlogSerializer(blog_post)
#             # return Response(serializer.data, status=status.HTTP_201_CREATED)
#             return Response({'id': blog_post.id, 'title': blog_post.title, 'content': blog_post.content}, status=status.HTTP_201_CREATED)
#         else:
#             return Response({'error': 'Title and content are required.'}, status=status.HTTP_400_BAD_REQUEST)
#     return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

def blog_post_create(request):
    if request.method == 'POST':
        # Print entire request.body for debugging
        print(request.body)

        # Parse JSON data from request.body
        try:
            data = json.loads(request.body)
            title = data.get('newTitle')
            content = data.get('newContent')

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