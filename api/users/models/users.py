"""Users Models."""

# Django
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator

# Utilities
from api.utils.models import CoreModel


class User(CoreModel, AbstractUser):

    email = models.EmailField(
        'email address',
        unique=True
    )

    phone_regex = RegexValidator(
        regex=r'\+?1?\d{9,15}$',
    )

    phone_number = models.CharField(validators=[phone_regex], max_length=17, unique=True)
    
    REQUIRED_FIELDS = ['email', 'phone_number']

    is_client = models.BooleanField(
        'client',
        default=False
    )

    def __str__(self):
        return self.username
