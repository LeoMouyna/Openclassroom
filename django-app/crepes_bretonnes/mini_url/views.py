from django.shortcuts import render, redirect, get_object_or_404
from django.views import generic
from django.core.urlresolvers import reverse_lazy
from django.http import HttpResponseRedirect

from .forms import Mini_urlForm
from .models import Mini_url


class ListURL(generic.ListView):
    model = Mini_url
    template_name = "mini_url/listURL.html"
    context_object_name = "urls"
    ordering = "-access_number"


class CreateURL(generic.CreateView):
    model = Mini_url
    template_name = "mini_url/addURL.html"
    form_class = Mini_urlForm
    success_url = reverse_lazy('home_url')


class UpdateURL(generic.UpdateView):
    model = Mini_url
    template_name = "mini_url/addURL.html"
    form_class = Mini_urlForm
    success_url = reverse_lazy('home_url')

    def get_object(self):
        return Mini_url.objects.get(code=self.kwargs['code'])


def redirectURL(request, code):
    url_object = get_object_or_404(Mini_url, code=code)
    url_object.access_number += 1
    url_object.save()

    return redirect(url_object.url, permanent=True)#Dire que la redirection est permanante
