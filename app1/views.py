from django.shortcuts import render, reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.views import View
from app1.models import *
# Create your views here.
def hello_world_view(request):
    return HttpResponse("Hello world")

def greet_view(request, user_name):
    return HttpResponse(f"Hello {user_name}")

def get_cards(request, cards_count):
    colors = ["red", "green", "blue"]
    selected_colors = colors[:cards_count]
    return render(request, "cards.html", {"colors": selected_colors})

class AddCard(View):
  def get(self, request):
      return  render(request, "create_card.html" )
  def post(self, request):
      color = request.POST.get('color')
      price = request.POST.get('price')
      print(color, price)
      card = Card(color = color, price= float(price))
      card.save()
      return HttpResponseRedirect(reverse("list-cards"))

def list_cards(request):
      cards = Card.objects.all()
      return render(request, "list_cards.html",{"cards":cards})

def one_card(request, card_id):
      card = Card.objects.get(id = card_id)
      return render(request, "one_card.html", {"card": card})


def delete_card(request, card_id):
    card = Card.objects.get(id=card_id)
    card.delete()
    return HttpResponse("card deleted")

class AddUser(View):
  def get(self, request):
      return render(request, "create_users.html" )
  def post(self, request):
      username = request.POST.get('username')
      password = request.POST.get('password')
      email = request.POST.get('email')
      print(username, password, email)
      user = User(username=username, password=password, email=email)
      user.save()
      return HttpResponseRedirect(reverse("list-cards"))