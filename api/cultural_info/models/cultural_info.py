"""Cultural Info Models."""

# Django
from django.db import models

# Utilities
from api.utils.models import CoreModel


class CulturalInfo(CoreModel):
    logo = models.ImageField()
    about = models.TextField(max_length=2000, blank=False, null=False)
    mission = models.TextField(max_length=2000, blank=False, null=False)
    # Url Fields    
    facebook = models.URLField(max_length=250, blank=False, null=False)
    instagram = models.URLField(max_length=250, blank=False, null=False)
    youtube = models.URLField(max_length=250, blank=False, null=False)    
    twitter = models.URLField(max_length=250, blank=False, null=False)    
    telegram = models.URLField(max_length=2500, blank=False, null=False)

    class Meta:
        verbose_name_plural = 'Cultural Info'

    def __str__(self):
        return str(self.id)