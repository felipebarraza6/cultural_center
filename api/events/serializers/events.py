# DRF
from rest_framework import serializers

# Models
from api.events.models import Event, Category


class CategoryModel(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class EventModel(serializers.ModelSerializer):
    category = CategoryModel()
    class Meta:
        model = Event
        fields = '__all__'