# To generate a new secret key:
# >>> import random, string
# >>> "".join([random.choice(string.printable) for _ in range(24)])
import os

SECRET_KEY = '<aj\\)GNe.JI>!b\rfSg3(:5:r'

FB_APP_ID = 1899554586974130

basedir = os.path.abspath(os.path.dirname(__file__))
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db')