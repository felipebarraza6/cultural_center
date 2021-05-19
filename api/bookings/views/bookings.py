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
from api.bookings.serializers import BookingModel, FastBookModel


# Models
from api.bookings.models import Booking, FastBook

#Filters
from django_filters import rest_framework as filters


class BookingViewSet(viewsets.GenericViewSet,
                mixins.CreateModelMixin):
    
    queryset = Booking.objects.all()    
    lookup_field = 'id'
    filter_backends = (filters.DjangoFilterBackend,)

    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):        
        return BookingModel

class FastBookViewSet(viewsets.GenericViewSet,
                mixins.CreateModelMixin):
    
    queryset = FastBook.objects.all()    
    lookup_field = 'id'
    filter_backends = (filters.DjangoFilterBackend,)

    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):        
        return FastBookModel
