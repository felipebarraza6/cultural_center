# Generated by Django 3.1.4 on 2020-12-28 23:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cultural_info', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='culturalinfo',
            options={'verbose_name_plural': 'Cultural Info'},
        ),
        migrations.RenameField(
            model_name='culturalinfo',
            old_name='mision',
            new_name='mission',
        ),
    ]