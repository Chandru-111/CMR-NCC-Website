from django.shortcuts import render, redirect
from .models import OneO, OneS, TwoO, TwoS, ThreeO, ThreeS  # Import your models

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
def view_percentage(request):
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

    # Render the initial selection form
    tables = ['OneO', 'OneS', 'TwoO', 'TwoS', 'ThreeO', 'ThreeS']
    return render(request, 'attendance/select_table.html', {'tables': tables})