from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
# from django.contrib.auth.models import User
from django.utils import timezone
from django.utils.safestring import mark_safe


# Create your models here.


class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        if not username:
            raise ValueError('The Username field must be set')
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        return self.create_user(username=username, email=email, password=password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=20, unique=True)
    image = models.ImageField(upload_to="uploads/", blank=True, null=True)
    email = models.EmailField(blank=True, null=True, unique=True)
    facebook = models.CharField(blank=True, null=True, unique=True)
    fiverr = models.CharField(blank=True, null=True, unique=True)
    git = models.CharField(blank=True, null=True, unique=True)
    linkedin = models.CharField(blank=True, null=True, unique=True)
    phone = models.IntegerField(blank=True, null=True, unique=True)
    upwork = models.CharField(blank=True, null=True, unique=True)
    x = models.CharField(blank=True, null=True, unique=True)
    youtube = models.CharField(blank=True, null=True, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    # REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username


class Portfolio(models.Model):
    image = models.ImageField(upload_to="uploads/", blank=True, null=True)
    title = models.CharField(max_length=50)
    description = models.CharField(blank=False, null=False, max_length=350)
    body = models.TextField(blank=False, null=False)
    url = models.URLField(blank=True, null=True, unique=True)
    git = models.CharField(blank=True, null=True, unique=True)
    x = models.CharField(blank=True, null=True, unique=True)
    youtube = models.CharField(
        blank=True, null=True, unique=True)
    facebook = models.CharField(
        blank=True, null=True, unique=True)
    posted_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    # tags = TaggableManager()
    status = models.BooleanField()
    author = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name="portfolios")

    class Meta:
        ordering = ('-last_modified',)
        verbose_name_plural = 'Portfolios'

    def __str__(self):
        portfolio = f"{self.title[:15] + "..."}"
        return portfolio

    def image_tag(self):
        if self.image:
            return mark_safe('<img src="%s" style="width: 35px;  height:35px; border-radius: 0.5rem;" />' % self.image.url)
        else:
            return 'No Image Found'
    image_tag.short_description = 'Image'


# Create your models here.
# class Offer(models.Model):
#     portfolio_name = models.CharField(max_length=150)
#     current_price = models.IntegerField()
#     offer_price = models.IntegerField()
#     customer_mail = models.CharField(max_length=50)
#     content = models.TextField(blank=True, null=True, max_length=300)
#     posted_on = models.DateTimeField(auto_now_add=True)

#     class Meta:
#         ordering = ('-posted_on',)
#         verbose_name_plural = 'Offers'

#     def __str__(self):
#         Offer = f"{self.portfolio_name} - ${self.offer_price} - {self.customer_mail}"
#         return Offer
