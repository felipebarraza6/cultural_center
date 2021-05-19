from django.contrib import admin

# Register your models here.
from .models import Booking, FastBook

admin.site.register(Booking)
admin.site.register(FastBook)