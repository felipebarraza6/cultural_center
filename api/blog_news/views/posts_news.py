"""Workshops views."""

# Django REST Framework
from rest_framework import mixins, status, viewsets, generics
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
# Permissions
from rest_framework.permissions import (	
	IsAuthenticated,
    AllowAny
)

# Serializers
from api.blog_news.serializers import PostModel


# Models
from api.blog_news.models import Post

#Filterss
from django_filters import rest_framework as filters


class BlogViewSet(viewsets.GenericViewSet,
                mixins.ListModelMixin,
                mixins.RetrieveModelMixin):
    
    queryset = Post.objects.all()    
    lookup_field = 'id'
    filter_backends = (filters.DjangoFilterBackend,)

    permission_classes = [AllowAny]

    def get_serializer_class(self):        
        return PostModel

