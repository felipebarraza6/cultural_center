"""Users Serializers."""

# DRF
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework.validators import UniqueValidator

from django.contrib.auth import password_validation, authenticate
from django.core.validators import RegexValidator

# Models
from api.users.models import User
from api.bookings.models import Booking

# Serializers
from api.bookings.serializers import BookingModel

# Python
from datetime import timedelta


class UserModelSerializer(serializers.ModelSerializer):
    booking = serializers.SerializerMethodField('get_bookings')
    
    def get_bookings(self, OBJ):
        qs = Booking.objects.filter(user=OBJ.id)
        serializer = BookingModel(instance=qs, many=True)
        return serializer.data
    class Meta:
        model = User
        fields = '__all__'


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(min_length=8, max_length=64)

    def validate(self, data):
        user = authenticate(username=data['username'], password=data['password'])
        if not user:
            raise serializers.ValidationError('Credenciales Invalidas')
        self.context['user'] = user
        return data

    def create(self, data):
        token, created = Token.objects.get_or_create(user=self.context['user'])
        return self.context['user'], token.key


class UserCreateSerializer(serializers.Serializer):

    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    username = serializers.CharField(
        min_length=4,
        max_length=20,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    # Password
    password = serializers.CharField(min_length=8, max_length=64)
    password_confirmation = serializers.CharField(min_length=8, max_length=64)
    
    phone_regex = RegexValidator(
		regex=r'\+?1?\d{9,15}$',
		message="Phone number must be entered in the format: +9999999. Up to 15 digits allowed."
	)
    phone_number = serializers.CharField(validators=[phone_regex])

    def validate(self, data):
        """Verify password match."""
        passwd = data['password']
        passwd_conf = data['password_confirmation']
        if passwd != passwd_conf:
            raise serializers.ValidationError("Password don't match.")
        password_validation.validate_password(passwd)
        return data

    def create(self, data):
        """Handle user and profile creation."""
        data.pop('password_confirmation')
        user = User.objects.create_user(**data)
        return user


class ChangePasswordSerializer(serializers.Serializer):
    model = User
    password = serializers.CharField(min_length=8, max_length=64, required=True)
    password_confirmation = serializers.CharField(min_length=8, max_length=64, required=True)

    def validate(self, data):
        password = data['password']
        password_confirmation = data['password_confirmation']
        if password != password_confirmation:
            raise serializers.ValidationError('Las contraseñas no coinciden')
        password_validation.validate_password(password)
        return data