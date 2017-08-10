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
        return get_object_or_404(Mini_url, code=self.kwargs['code'])

    """On peut effecuer des actions avant l'enregistrement en base de l'objet"""
    """def form_valid(self, form):
        self.object = form.save()
        # Envoi d'un message à l'utilisateur
        messages.success(self.request, "Votre profil a été mis à jour avec succès.")
        return HttpResponseRedirect(self.get_success_url())"""


def redirectURL(request, code):
    url_object = get_object_or_404(Mini_url, code=code)
    url_object.access_number += 1
    url_object.save()

    return redirect(url_object.url, permanent=True)#Dire que la redirection est permanante
