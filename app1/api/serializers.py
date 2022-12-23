from rest_framework import serializers
from app1.models import Card


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('pk', 'color', 'price')


class CardDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('pk', 'color', 'price', 'created_date')
