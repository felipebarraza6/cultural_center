# DRF 
from rest_framework import serializers

# Models
from api.bookings.models import Booking, FastBook


class BookingModel(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Booking
        fields = '__all__'

class FastBookModel(serializers.ModelSerializer):
    class Meta:
        model = FastBook
        fields = '__all__'