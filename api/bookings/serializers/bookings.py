# DRF 
from rest_framework import serializers

# Models
from api.bookings.models import Booking


class BookingModel(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Booking
        fields = '__all__'