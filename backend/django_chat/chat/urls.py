from django.contrib import admin
from django.urls import path,include
from .views import MessageApiView

urlpatterns = [
      path('messages',MessageApiView.as_view() ),

]