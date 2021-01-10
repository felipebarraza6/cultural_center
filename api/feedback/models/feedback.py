"""Feedback Models."""

# Django
from django.db import models

# Utilities
from api.utils.models import CoreModel


class Feedback(CoreModel):
    user = models.ForeignKey('users.User', related_name='feedback_user', on_delete=models.CASCADE)
    subject = models.CharField(max_length=120, blank=False, null=False)
    message = models.TextField(max_length=450, blank=False, null=False)

    def __str__(self):
        self.user