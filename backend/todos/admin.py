# backend/todos/admin.py
from django.contrib import admin
from .models import Todo

@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'completed', 'created_at')  # Fields to display in the list view
    list_filter = ('completed',)  # Add filters for completed status
    search_fields = ('title',)  # Enable search by title