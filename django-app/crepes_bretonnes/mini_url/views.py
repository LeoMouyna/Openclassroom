from django.shortcuts import render, redirect, get_object_or_404
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


def redirectURL(request, code):
    url_object = get_object_or_404(Mini_url, code=code)
    url_object.access_number += 1
    url_object.save()

    return redirect(url_object.url, permanent=True)#Dire que la redirection est permanante
