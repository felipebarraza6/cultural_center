# DRF
from rest_framework import serializers

# Models
from api.blog_news.models import Category, Post, ImageGallery


class CategoryModel(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class GalleryImage(serializers.ModelSerializer):
    class Meta:
        model = ImageGallery
        fields = '__all__'

class PostModel(serializers.ModelSerializer):
    category = CategoryModel()
    images = serializers.SerializerMethodField('get_images')

    def get_images(self, OBJ):
        qs = ImageGallery.objects.filter(post=OBJ.id)
        serializer = GalleryImage(instance=qs, many=True)
        return serializer.data
    class Meta:
        model = Post
        fields = '__all__'


