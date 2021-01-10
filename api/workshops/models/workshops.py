"""Workshops Models."""

# Django
from django.db import models

# Utilities
from api.utils.models import CoreModel


class Category(CoreModel):
    name = models.CharField(max_length=80, blank=False, null=False)
    icon = models.ImageField()

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class Workshops(CoreModel):
    name = models.CharField(max_length=120, blank=False, null=False)
    category = models.ForeignKey(Category, related_name='category_workshop', on_delete=models.CASCADE)
    principal_image = models.ImageField()
    name_monitor = models.CharField(max_length=120, blank=False, null=False)
    date = models.DateTimeField()
    description = models.TextField(max_length=240, blank=False, null=False)

    is_active = models.BooleanField(default=True)
    capacity_persons = models.IntegerField()
    required_materials = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = 'Workshops'

    def __str__(self):
        return self.name


class Materials(CoreModel):
    workshops = models.ForeignKey(Workshops, related_name='workshops_materials', on_delete=models.CASCADE)
    name = models.CharField(max_length=120, blank=False, null=False)
    description = models.TextField(max_length=320, blank=False, null=False)
    image = models.ImageField(blank=True,null=True)
    quantity = models.IntegerField()

    class Meta:
        verbose_name_plural = 'Materials'

    def __str__(self):
        return self.name