# Generated by Django 4.2.6 on 2023-10-14 00:10

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('navigation', '0003_route'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tracker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pincode', models.CharField(max_length=10)),
                ('location', django.contrib.gis.db.models.fields.PointField(srid=4326)),
                ('time', models.DateTimeField()),
            ],
        ),
        migrations.DeleteModel(
            name='LandMark',
        ),
        migrations.DeleteModel(
            name='Marker',
        ),
        migrations.RenameField(
            model_name='route',
            old_name='coordinates',
            new_name='route',
        ),
        migrations.RemoveField(
            model_name='route',
            name='name',
        ),
        migrations.AddField(
            model_name='route',
            name='description',
            field=models.TextField(default='NoNameRoute'),
        ),
        migrations.AddField(
            model_name='route',
            name='duration_in_days',
            field=models.PositiveIntegerField(default=4),
        ),
    ]