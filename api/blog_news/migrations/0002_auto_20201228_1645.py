# Generated by Django 3.1.4 on 2020-12-28 19:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog_news', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name_plural': 'categories'},
        ),
        migrations.AlterModelOptions(
            name='imagegallery',
            options={'verbose_name_plural': 'images galleries'},
        ),
        migrations.AlterModelOptions(
            name='post',
            options={'verbose_name_plural': 'posts'},
        ),
    ]
