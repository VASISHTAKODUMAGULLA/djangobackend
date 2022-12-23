"""djangobackend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from app1.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('helloworld/', hello_world_view),
    path('greet/<str:user_name>/', greet_view),
    path('cards/<int:cards_count>/', get_cards),
    path('addcard/', AddCard.as_view(), name="add-card"),
    path('adduser/', AddUser.as_view(), name="add-user"),
    path('listcards/', list_cards, name="list-cards"),
    path('onecard/<int:card_id>/', one_card),
    path('deletecard/<int:card_id>/', delete_card),
    path('api/', include('app1.api.urls')),
    path('shop/', TemplateView.as_view(template_name='index.html')),
    path('', TemplateView.as_view(template_name='home.html'))

]
