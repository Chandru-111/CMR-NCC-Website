from django.shortcuts import render, redirect
from .models import OneO, OneS, TwoO, TwoS, ThreeO, ThreeS  # Import your models
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LoginView
from django.contrib.auth.forms import AuthenticationForm

@login_required
def mark_attendance_view(request):
    if request.method == 'POST':
        # Step 1: Handle the table selection
        if 'table_name' in request.POST:
            table_name = request.POST.get('table_name')
            # Save the table name in the session
            request.session['table_name'] = table_name
            
            # Fetch records based on the selected table
            if table_name == 'OneS':
                records = OneS.objects.all()
            elif table_name == 'OneO':
                records = OneO.objects.all()
            elif table_name == 'TwoS':
                records = TwoS.objects.all()
            elif table_name == 'TwoO':
                records = TwoO.objects.all()
            elif table_name == 'ThreeS':
                records = ThreeS.objects.all()
            elif table_name == 'ThreeO':
                records = ThreeO.objects.all()
            else:
                records = []

            # List of columns to select from
            columns = ['nov_1', 'nov_2', 'nov_3', 'nov_4']

            return render(request, 'attendance/mark_attendance_step2.html', {
                'records': records,
                'table_name': table_name,
                'columns': columns,
            })

        # Handle attendance submissions (Step 2)
        attendance_data = request.POST.getlist('attendance')
        selected_column = request.POST.get('column_name')  # Get selected column from form

        for record in attendance_data:
            record_id, attendance_value = record.split('-')  # record format: 'id-attendance_value'
            record_id = int(record_id)  # Get the actual ID

            # Update attendance based on the selected table
            table_name = request.session.get('table_name')  # Get the table name from session
            if table_name == 'OneS':
                record = OneS.objects.get(id=record_id)
            elif table_name == 'OneO':
                record = OneO.objects.get(id=record_id)
            elif table_name == 'TwoS':
                record = TwoS.objects.get(id=record_id)
            elif table_name == 'TwoO':
                record = TwoO.objects.get(id=record_id)
            elif table_name == 'ThreeS':
                record = ThreeS.objects.get(id=record_id)
            elif table_name == 'ThreeO':
                record = ThreeO.objects.get(id=record_id)
            else:
                record = None
            
            if record:  # Ensure the record exists
                # Assign attendance value to the selected day
                if selected_column == 'nov_1':
                    record.nov_1 = attendance_value
                elif selected_column == 'nov_2':
                    record.nov_2 = attendance_value
                elif selected_column == 'nov_3':
                    record.nov_3 = attendance_value
                elif selected_column == 'nov_4':
                    record.nov_4 = attendance_value
                
                record.save()  # Save the updated record

        return redirect('success_url')  # Replace with your actual success URL

    # If not a POST request, render the first step
    tables = ['OneO', 'OneS', 'TwoO', 'TwoS', 'ThreeO', 'ThreeS']
    return render(request, 'attendance/mark_attendance_step1.html', {'tables': tables})

def success_view(request):
    return render(request, 'attendance/success.html')
@login_required
def view_percentage(request):
    # Ensure only staff users can access the page
    if not request.user.is_staff:
        return redirect('view_percentage_login')  # Redirect to the login page if not staff

    if request.method == 'POST':
        # Get the selected table name
        table_name = request.POST.get('table_name')
        
        # Fetch records based on the selected table
        if table_name == 'OneO':
            records = OneO.objects.all()
        elif table_name == 'OneS':
            records = OneS.objects.all()
        elif table_name == 'TwoO':
            records = TwoO.objects.all()
        elif table_name == 'TwoS':
            records = TwoS.objects.all()
        elif table_name == 'ThreeO':
            records = ThreeO.objects.all()
        elif table_name == 'ThreeS':
            records = ThreeS.objects.all()
        else:
            records = []

        return render(request, 'attendance/view_percentage.html', {
            'records': records,
            'table_name': table_name,
        })

    # Render the initial selection form for the tables
    tables = ['OneO', 'OneS', 'TwoO', 'TwoS', 'ThreeO', 'ThreeS']
    return render(request, 'attendance/select_table.html', {'tables': tables})
from django.contrib.auth import authenticate, login

from django.contrib import messages

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Authenticate user
        user = authenticate(request, username=username, password=password)

        if user is not None:
            if user.is_staff:  # Ensure that only staff users are allowed
                login(request, user)
                return redirect('/mark-attendance/')  # Redirect to the attendance page after login
            else:
                messages.error(request, "You do not have permission to access this site.")
                return redirect('/login/')  # Redirect back to login if user is not staff
        else:
            messages.error(request, "Invalid credentials")
            return redirect('/login/')  # Redirect back to login if authentication fails

    return render(request, 'login.html')  # Render the login page
class StaffLoginView(LoginView):
    template_name = 'attendance/login.html'  # Specify your login template

    def form_valid(self, form):
        user = form.get_user()
        if user.is_staff:
            return super().form_valid(form)
        else:
            messages.error(self.request, "You do not have permission to access this site.")
            return redirect('login')  # Redirect to login page if user is not staff
        

class ViewPercentageLoginView(LoginView):
    template_name = 'attendance/view_percentage_login.html'

@login_required
def custom_redirect_view(request):
    if request.user.is_staff:
        return redirect('/view-percentage/')
    else:
        return redirect('/mark-attendance/')
    
def custom_login(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)

            # Redirect based on whether the user is staff or not
            if user.is_staff:
                return redirect('/select-page/')  # Redirect staff to the selection page
            else:
                return redirect('/view-percentage/')  # Non-staff users are redirected directly to view percentage page
    else:
        form = AuthenticationForm()

    return render(request, 'attendance/login.html', {'form': form})
def select_page(request):
    if request.user.is_staff:
        # Staff users see both options
        return render(request, 'attendance/select_page.html', {'is_staff': True})
    else:
        # Non-staff users only see the option for view-percentage
        return render(request, 'attendance/select_page.html', {'is_staff': False})