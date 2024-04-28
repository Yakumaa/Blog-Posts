from django.urls import path
from . import views

urlpatterns = [
    path("blog/", views.blog_post_list),
    path("blog-create/", views.blog_post_create),
    path("blog/<int:pk>/", views.blog_post_update),
]