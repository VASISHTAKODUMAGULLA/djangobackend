# Generated by Django 4.1.4 on 2022-12-20 12:35

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0002_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='created_date',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2022, 12, 20, 12, 35, 11, 156342, tzinfo=datetime.timezone.utc)),
            preserve_default=False,
        ),
    ]
