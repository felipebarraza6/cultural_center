"""Blogs News Models."""

# Django
from django.db import models

# Utilities
from api.utils.models import CoreModel

class Category(CoreModel):
    name = models.CharField(max_length=120, null=False, blank=False)
    
    class Meta:
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name

class Post(CoreModel):
    title = models.CharField(max_length=50, null=False, blank=False)
    description = models.TextField(max_length=1200)
    principal_image = models.ImageField(null=True, blank=True)
    category = models.ForeignKey(Category, related_name='category_post', on_delete=models.PROTECT)

    class Meta:
        verbose_name_plural = 'posts'

    def __str__(self):
        return self.title


class ImageGallery(CoreModel):
    post = models.ForeignKey(Post, related_name='image_gallery_for_post', on_delete=models.CASCADE)
    image = models.ImageField()
    alt_decription = models.CharField(max_length=70, null=False, blank=False)

    class Meta:
        verbose_name_plural = 'images galleries'

    def __str__(self):
        return str(self.post)
