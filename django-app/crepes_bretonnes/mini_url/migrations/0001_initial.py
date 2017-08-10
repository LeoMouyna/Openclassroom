# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-07-31 14:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Mini_url',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.URLField(unique=True, verbose_name='URL to reduce')),
                ('code', models.CharField(max_length=6, unique=True)),
                ('date', models.DateField(auto_now_add=True)),
                ('pseudo', models.CharField(max_length=40, null=True, verbose_name='Shortcut creator')),
                ('access_number', models.IntegerField(default=0, help_text='One redirection  = one access', verbose_name='Access number for the shortcut')),
            ],
        ),
    ]