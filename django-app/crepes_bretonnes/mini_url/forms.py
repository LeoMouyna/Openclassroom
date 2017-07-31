from django import forms
from mini_url.models import Mini_url


class Mini_urlForm(forms.ModelForm):
    class Meta:
        model = Mini_url
        fields = ('url', 'pseudo')
