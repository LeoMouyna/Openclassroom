from django.db import models


class Mini_url(models.Model):
    url = models.URLField(unique=True, verbose_name="URL to reduce")
    code = models.CharField(max_length=6, unique=True)
    date = models.DateField(auto_now_add=True, auto_now=False)
    pseudo = models.CharField(max_length=40, verbose_name="Shortcut creator", null=True)
    access_number = models.IntegerField(verbose_name="Access number for the shortcut", help_text="One redirection "
                                                                                                 " = one access",
                                        default=0)
