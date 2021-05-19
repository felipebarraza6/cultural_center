# Django
from django.db import models

# Utilities
from api.utils.models import CoreModel


class Booking(CoreModel):
    user = models.ForeignKey('users.User', related_name='bookings_user', on_delete=models.CASCADE)
    use_workshops = models.BooleanField(default=False)
    workshop = models.ForeignKey('workshops.Workshops', related_name='booking_wokrshop', on_delete=models.CASCADE, blank=True, null=True)
    use_events = models.BooleanField(default=False)
    event = models.ForeignKey('events.Event', related_name='booking_event', on_delete=models.CASCADE, blank=True, null=True)
    date_book = models.DateTimeField()

    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return str(self.user)

class FastBook(CoreModel):
    user = models.ForeignKey('users.User', related_name='fast_book_user', on_delete=models.CASCADE)
    event_text_title = models.TextField(max_length=400)

    def __str__(self):
        return str(self.user)
