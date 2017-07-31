from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^home/$', views.listURL, name="home_page"),
    url(r'^(?P<code>\.*)/$', views.redirectURL, name="redirection"),
    url(r'^new/$', views.addURL, name="add_url"),
]