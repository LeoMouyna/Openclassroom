from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^home/$', views.home, name="home_page"),
    url(r'^article/(?P<id_article>\d+)$', views.read_article, name="afficher_article"),
    url(r'^today/$', views.date_actuelle, name="afficher_date"),
    url(r'^calculator/(?P<nombre1>\d+)/(?P<nombre2>\d+)/$', views.addition, name="afficher_calculatrice"),
]