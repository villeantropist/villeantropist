
from .serializers import PortfolioSerializer, LoginUserSerializer, UpdateUserSerializer
from portfolios.models import Portfolio, CustomUser as User
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.shortcuts import render

# Create your views here.


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }

########## User ##########


class LoginUserView(APIView):
    def post(self, request):
        serializer = LoginUserSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(username=serializer.validated_data["username"],
                                password1=serializer.validated_data["password1"])
            if user:
                tokens = get_tokens_for_user(user)
                return Response(tokens)
            return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateUserView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UpdateUserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return User.objects.filter(username=user)

    def put(self, request, pk):
        print(request.data)
        serializer = UpdateUserSerializer(
            request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"detail": "Profile Updated"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


########## Portfolio ##########

# view for admin for listing a queryset or creating a model instance
class PortfolioCreateView(generics.ListCreateAPIView):
    serializer_class = PortfolioSerializer
    permission_classes = [IsAuthenticated]
    queryset = Portfolio.objects.all()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

# view for all users for seeing a list of all instance
class PortfolioListView(generics.ListAPIView):
    serializer_class = PortfolioSerializer
    permission_classes = [AllowAny]
    queryset = Portfolio.objects.filter(status=True)

# view for all users for retrieving a model instance
class PortfolioDetail(generics.RetrieveAPIView):
    serializer_class = PortfolioSerializer
    permission_classes = [AllowAny]
    queryset = Portfolio.objects.filter(status=True)

# view for admin for retrieving, updating or deleting a model instance
class PortfolioRetrieve(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PortfolioSerializer
    permission_classes = [IsAuthenticated]
    queryset = Portfolio.objects.all()

# view for admin for deleting a model instance
# class PortfolioDelete(generics.DestroyAPIView):
#     permission_classes = [IsAuthenticated]
#     queryset = Portfolio.objects.all()
