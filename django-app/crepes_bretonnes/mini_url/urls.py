from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^home/$', views.ListURL.as_view(), name="home_url"),
    url(r'^(?P<code>.{6})/$', views.redirectURL, name="redirection"),
    url(r'^update/(?P<code>.{6})/$', views.UpdateURL.as_view(), name="update_url"),
    url(r'^new/$', views.CreateURL.as_view(), name="add_url"),
]