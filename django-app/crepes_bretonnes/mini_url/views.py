from django.shortcuts import render, redirect, get_object_or_404
from django.views import generic
from django.core.urlresolvers import reverse_lazy

from .forms import Mini_urlForm
from .models import Mini_url



def listURL(request):

    urls = Mini_url.objects.order_by('-access_number')

    return render(request, 'mini_url/listURL.html', locals())


def addURL(request):

    if request.method == "POST":
        form = Mini_urlForm(request.POST)

        if form.is_valid():
            url = form.save()
            return redirect('home_url')

    else:
        form = Mini_urlForm()

    return render(request, 'mini_url/addURL.html', locals())


class CreateURL(generic.CreateView):
    model = Mini_url
    template_name = "mini_url/addURL.html"
    form_class = Mini_urlForm
    success_url = reverse_lazy('home_url')


def redirectURL(request, code):
    url_object = get_object_or_404(Mini_url, code=code)
    url_object.access_number += 1
    url_object.save()

    return redirect(url_object.url, permanent=True)#Dire que la redirection est permanante
