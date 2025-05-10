from django.urls import path
from . import views

urlpatterns = [
    path("portfolio/", views.PortfolioList.as_view(), name="portfolio-list"),
    path("portfolio/create/", views.PortfolioCreate.as_view(),
         name="portfolio-create"),
    path("portfolio/<int:pk>/", views.PortfolioDetail.as_view(),
         name="detail-portfolio"),
    path("portfolio/retrieve/<int:pk>/",
         views.PortfolioRetrieve.as_view(), name="portfolio-list"),
    path("portfolio/delete/<int:pk>/", views.PortfolioDelete.as_view(),
         name="delete-portfolio"),
]
