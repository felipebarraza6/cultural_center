
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from django.conf.urls import include


urlpatterns = [

    path('admin/', admin.site.urls),
    path('api/', include(('api.cultural_info.router', 'cultural_info'), namespace='cultural_info')),
    path('api/', include(('api.users.router', 'users'), namespace='users')),
    path('api/', include(('api.feedback.router', 'feedback'), namespace='feedback')),
    path('api/', include(('api.workshops.router', 'workshops'), namespace='workshops')),
    path('api/', include(('api.events.router', 'events'), namespace='events')),
    path('api/', include(('api.bookings.router', 'bookings'), namespace='bookings')),
    path('api/', include(('api.blog_news.router', 'posts'), namespace='posts')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
