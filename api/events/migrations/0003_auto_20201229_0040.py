# Generated by Django 3.1.4 on 2020-12-29 03:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_auto_20201228_2004'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='principal_image',
            field=models.ImageField(upload_to=''),
        ),
    ]
