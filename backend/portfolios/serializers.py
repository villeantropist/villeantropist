from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Portfolio
from django.contrib.auth.password_validation import validate_password


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=15,)
    password = serializers.CharField(max_length=15, write_only=True)


class UpdateUserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=15, required=True)
    email = serializers.CharField(max_length=35, required=True)

    password = serializers.CharField(max_length=15,
                                     write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(max_length=15,
                                      write_only=True, required=True)

    class Meta:
        model = User
        fields = ["username", "email", "facebook", "fiverr", "git", "linkedin",
                  "phone", "upwork", "x", "youtube", "password", "password2"]

    def validate_username(_self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Username already in use")
        return value

    # validates only the email. if you remove "_email", it will validate all fields
    def validate_email(_self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already in use")
        return value

    def validate(self, data):
        if data["password"] != data["password2"]:
            raise serializers.ValidationError(
                {"password2": "Passwords do not match"})
        return data

    def update(self, instance, validated_data):
        instance.set_username(validated_data["username"])
        instance.set_email(validated_data["email"])
        instance.set_password(validated_data["password"])
        instance.set_facebook(validated_data["facebook"])
        instance.set_fiverr(validated_data["fiverr"])
        instance.set_git(validated_data["git"])
        instance.set_linkedin(validated_data["linkedin"])
        instance.set_phone(validated_data["phone"])
        instance.set_upwork(validated_data["upwork"])
        instance.set_x(validated_data["x"])
        instance.set_youtube(validated_data["youtube"])
        instance.save()
        return instance


class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = ["id",  "image", "title",
                  "body", "tags", "git", "youtube", "x"]
        extra_kwargs = {"authors": {"read_only": True}}


# class OfferSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Offer
#         fields = ["id", "domain_name", "current_price", "offer_price",
#                   "customer_mail", "content"]
