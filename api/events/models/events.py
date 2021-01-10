# Django
from django.db import models

# Utilities
from api.utils.models import CoreModel


class Category(CoreModel):
    name = models.CharField(max_length=120)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name

class Event(CoreModel):
    category = models.ForeignKey(Category, related_name='category_event', on_delete=models.PROTECT)
    name = models.CharField(max_length=60, blank=False, null=False)
    date = models.DateTimeField()    
    principal_image = models.ImageField()
    description = models.TextField(max_length=250)
    is_transmision = models.BooleanField(default=False)    
    link_transmision = models.URLField(blank=True, null=True)
    limit_persons = models.BooleanField(default=False)
    quantity_persons = models.IntegerField(null=True, blank=True)
    address = models.CharField(max_length=300, blank=True, null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
