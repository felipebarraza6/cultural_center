"""Feedback views."""

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
from api.feedback.serializers import FeedBackModel

# Models
from api.feedback.models import Feedback

#Filters
from django_filters import rest_framework as filters


class FeedbackViewSet(viewsets.GenericViewSet,
                        mixins.ListModelMixin,
                        mixins.CreateModelMixin):

    queryset = Feedback.objects.all()
    lookup_field = 'id'
    filter_backends = (filters.DjangoFilterBackend,)

    permission_classes = [IsAuthenticated,]

    def get_serializer_class(self):        
        return FeedBackModel