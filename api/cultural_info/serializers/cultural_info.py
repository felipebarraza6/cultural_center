# DRF
from rest_framework import serializers

# Models
from api.cultural_info.models import CulturalInfo


class CultureInfoList(serializers.ModelSerializer):
    class Meta:
        model = CulturalInfo
        fields = '__all__'
        fields = (
            'about',
            'mission',
            'facebook',
            'instagram',
            'youtube',
            'twitter',
            'telegram'
        )