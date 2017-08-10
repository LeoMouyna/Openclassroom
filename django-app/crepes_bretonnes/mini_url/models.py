from django.db import models
import random
import string


class Mini_url(models.Model):
    url = models.URLField(unique=True, verbose_name="URL to reduce")
    code = models.CharField(max_length=6, unique=True)
    date = models.DateField(auto_now_add=True, auto_now=False)
    pseudo = models.CharField(max_length=40, verbose_name="Shortcut creator", null=True, blank=True)
    access_number = models.IntegerField(verbose_name="Access number for the shortcut", help_text="One redirection "
                                                                                                 " = one access",
                                        default=0)

    def __str__(self):
        return "{0} :{1}".format(self.code, self.url)

    def save(self, *args, **kargs):
        if not self.code:
            self.code = self.generate(6)

        super(Mini_url, self).save()

    def generate(self, nb_caracteres):
        caracteres = string.ascii_letters + string.digits
        aleatoire = [random.choice(caracteres) for _ in range(nb_caracteres)]

        return ''.join(aleatoire)

    class Meta:
        verbose_name = "Mini URL"
        verbose_name_plural = "Minis URL"
