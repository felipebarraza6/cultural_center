from django.contrib import admin

# Models
from .models import Category ,Post, ImageGallery

# Register your models here.
admin.site.register(Category)
admin.site.register(Post)
admin.site.register(ImageGallery)