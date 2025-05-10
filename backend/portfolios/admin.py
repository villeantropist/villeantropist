from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import CustomUser as User
from .models import Portfolio
from django.utils import timezone


# Helper function to calculate days since creation


def days_since_creation(posted_on):
    return (timezone.now() - posted_on).days if posted_on else "N/A"


def truncated_content(content):
    return content[:29] + '...' if content and len(content) > 30 else content


class CustomUserAdmin(BaseUserAdmin):
    model = User
    list_display = ("username", "image", "email", "facebook", "fiverr", "git", "linkedin",
                    "phone", "upwork", "x", "youtube", "last_login")
    list_filter = ('is_staff', 'is_superuser', 'is_active')

    # Override default BaseUserAdmin fieldset of default User
    fieldsets = (
        ('Details', {'fields': ["username", "image", "email", "facebook", "fiverr", "git", "linkedin",
                                "phone", "upwork", "x", "youtube"]}),
        ('Permissions', {'fields': ['is_active', 'is_staff',
         'is_superuser', 'user_permissions', 'groups']}),
    )


class PortfolioAdmin(admin.ModelAdmin):
    model = Portfolio
    search_fields = ["title", "description", "url", "git", "x", "youtube", "facebook",
                     "last_modified", "posted_on", "status"]
    list_filter = ("last_modified", "posted_on", "status")
    list_display = ("title", "image", "description",
                    "body", "url", "git", "x", "youtube", "facebook", "last_modified", "posted_on", "status")

    # Override default BaseUserAdmin fieldset
    # fieldsets = (
    #     ('Details', {'fields': ["title", "description", "url", "git", "x", "youtube", "facebook",
    #                   "status",]}),
    # )

    actions = [
        'make_selected_Portfolio(s)_to_be_Active',
        'make_selected_Portfolio(s)_to_be_Inactive',
    ]

    def truncated_url(self, Portfolio):
        return truncated_content(Portfolio.url)
    truncated_url.short_description = 'url'

    def truncated_email(self, Portfolio):
        return truncated_content(Portfolio.email)
    truncated_email.short_description = 'email'

    def truncated_content(self, Portfolio):
        return truncated_content(Portfolio.body)
    truncated_content.short_description = 'body'

    def formatted_days_since_creation(self, Portfolio):
        return days_since_creation(Portfolio.posted_on)
    formatted_days_since_creation.short_description = 'Days Since Posted'

    def make_selected_Portfolios_to_be_Active(self, request, queryset):
        count = queryset.update(status=True)
        self.message_user(
            request, '{} Portfolio active successfully.'.format(count))
    make_selected_Portfolios_to_be_Active.short_description = 'Mark Portfolios as Active'

    def make_selected_Portfolios_to_be_Inactive(self, request, queryset):
        count = queryset.update(status=False)
        self.message_user(request,
                          '{} Portfolio Inactive successfully.'.format(count))
    make_selected_Portfolios_to_be_Inactive.short_description = 'Mark Portfolios as Inactive'


admin.site.register(User, CustomUserAdmin)
admin.site.register(Portfolio, PortfolioAdmin)
