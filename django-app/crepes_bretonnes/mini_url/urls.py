from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^home/$', views.listURL, name="home_url"),
    url(r'^(?P<code>.{6})/$', views.redirectURL, name="redirection"),
    url(r'^new/$', views.addURL, name="add_url"),
]