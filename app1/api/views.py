from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

from app1.models import Card
from app1.api.serializers import CardSerializer, CardDetailSerializer


class CardListAPI(APIView):
    def get(self, request):
        """
        Return a list of all the cards
        """
        cards = Card.objects.all()
        serializer = CardSerializer(cards, many=True)
        return Response(serializer.data)

    def post(self, request):
        """
        Create a new Card
        """
        serializer = CardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)


class CardSetPagination(PageNumberPagination):
    page_size = 2
    page_size_query_param = 'page_size'
    max_page_size = 10


class CardListPageAPI(GenericAPIView):
    pagination_class = CardSetPagination

    def get(self, request):
        """
        Return a list of cards with pagination.
        """
        cards = Card.objects.all()

        page = self.paginate_queryset(cards)
        if page:
            # queryset is not empty
            serializer = CardSerializer(page, many=True)
            data = serializer.data
        else:
            # queryset is empty
            data = []
        return self.get_paginated_response(data)

    def post(self, request):
        """
        Create a new Card
        """
        serializer = CardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)


class CardDetail(APIView):
    def get(self, request, pk):
        """
        Get the details for a specific Card based on the primary key i.e., id
        """
        item = get_object_or_404(Card, pk=pk)
        serializer = CardDetailSerializer(item)
        return Response(serializer.data)

    def put(self, request, pk):
        """
        Update a specific Card based on the primary key i.e., id
        """
        item = get_object_or_404(Card, pk=pk)
        data = request.data
        # print(request.data)
        serializer = CardDetailSerializer(item, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        """
        Delete a specific Card based on the primary key i.e., id
        """
        item = get_object_or_404(Card, pk=pk)
        item.delete()
        return Response({"message": "card deleted"})
