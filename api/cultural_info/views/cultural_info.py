# Models
from api.cultural_info.models import CulturalInfo
# Serializers
from api.cultural_info.serializers import CultureInfoList

# DRF
from rest_framework import mixins, viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

# Permissions
from rest_framework.permissions import (
    AllowAny, 
)

from django_filters import rest_framework as filters

#Client View Set
class CulturalInfoView(viewsets.GenericViewSet):
    permission_classes = [AllowAny]

    def list(self, request):
        queryset = CulturalInfo.objects.all().first( )
        serializer = CultureInfoList(queryset, many=False)
        return Response(serializer.data)


