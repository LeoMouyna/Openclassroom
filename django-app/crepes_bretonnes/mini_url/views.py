from django.shortcuts import render, redirect
from mini_url.forms import Mini_urlForm
from mini_url.models import Mini_url
import random
import string


def generer(nb_caracteres):
    caracteres = string.ascii_letters + string.digits
    aleatoire = [random.choice(caracteres) for _ in range(nb_caracteres)]

    return ''.join(aleatoire)


def addURL(request):

    form = Mini_urlForm(request.POST or None)

    if form.is_valid():
        url = form.save(commit=False)
        url.code = generer(6)
        url.save()

    return render(request, 'mini_url/addURL.html', locals())


def listURL(request):

    urls = Mini_url.objects.order_by('access_number')

    return render(request, 'mini_url/listURL.html', locals())


def redirectURL(request, code):
    url_object = Mini_url.objects.get(code=code)
    url_object.access_number += 1
    url_object.save()
    return redirect(url_object.url)
