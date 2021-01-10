# Generated by Django 3.1.4 on 2020-12-28 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CulturalInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='modified at')),
                ('logo', models.ImageField(upload_to='')),
                ('about', models.TextField(max_length=2000)),
                ('mision', models.TextField(max_length=2000)),
                ('facebook', models.URLField(max_length=250)),
                ('instagram', models.URLField(max_length=250)),
                ('youtube', models.URLField(max_length=250)),
                ('twitter', models.URLField(max_length=250)),
                ('telegram', models.URLField(max_length=2500)),
            ],
            options={
                'ordering': ['-created', '-modified'],
                'get_latest_by': 'created',
                'abstract': False,
            },
        ),
    ]
