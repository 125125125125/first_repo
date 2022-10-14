
var IsValid = false;

$(document).ready(function () {
    LoadEmployees();
});


function CheckValues(data) {
    if ($(data).val().trim() == "") {
        $(data).css('border-color', 'Red');
        IsValid = false;
    }
    else {
        $(data).css('border-color', 'Green');
        IsValid = true;
    }
    return IsValid;
}

function Validate() {
    var IsValidName = CheckValues('#txtName');
    var IsValidEmail = CheckValues('#txtEmail');
    var IsValidContact = CheckValues('#txtContact');
    var IsValidPassword = CheckValues('#txtPassword');
    //if ($('#txtName').val().trim() == "") {
    //    $('#txtName').css('border-color', 'Red');
    //    IsValid = false;
    //}
    //else {
    //    $('#txtName').css('border-color', 'Green');
    //    IsValid = true;
    //}
    //if ($('#txtEmail').val().trim() == "") {
    //    $('#txtEmail').css('border-color', 'Red');
    //    IsValid = false;
    //}
    //else {
    //    $('#txtEmail').css('border-color', 'Green');
    //    IsValid = true;
    //}
    //if ($('#txtContact').val().trim() == "") {
    //    $('#txtEmail').css('border-color', 'Red');
    //    IsValid = false;
    //}
    //else {
    //    $('#txtEmail').css('border-color', 'Green');
    //    IsValid = true;
    //}
    if (IsValidName && IsValidEmail && IsValidContact && IsValidPassword)
        return true;
    else
        return false;
}

function AddEmployee() {
    debugger;
    if (Validate() == true) {
        var Emp = {
            EmpID: $('#txtEmpID').val(),
            Name: $('#txtName').val(),
            Email: $('#txtEmail').val(),
            Contact: $('#txtContact').val(),
            Password: $('#txtPassword').val(),
        };
        $.ajax({
            url: "/Home/AddEmployee/",
            data: JSON.stringify(Emp),
            type: "POST",
            contentType: "application/json;charset=utf-8",
            datatype: "json",
            success: function (result) {
                alert("Data Saved.");
            },
            error: function (result) {
                alert(result.responceText);
            }
        });
    }
    
    
}

function LoadEmployees() {
    $.ajax({
        url: "/Home/EmployeeList/",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        datatype: "json",
        success: function (result) {
            var table = '';
            $.each(result, function (key, item) {
                table += '<tr>'
                table += '<td>' + item.Name + '</td>'
                table += '<td>' + item.Email + '</td>'
                table += '<td>' + item.Contact + '</td>'
                table += '<td>' + item.Password + '</td>'
                table += '<td><a href="" onclick="EditEmp(' + item.EmpID + ')">Edit</a></td>'
                table += '<td><a href="" onclick="DeleteEmp(' + item.EmpID + ')">Delete</a></td>'
                table += '</tr>'
            });
            $('#MyTBody').html(table);
        },
        error: function (result) {
            alert(result.responceText);
        }
    });
}

function EditEmp(EmpID) {
   
}

function DeleteEmp(EmpID) {
    var IsDelete = confirm("Are you sure want to delete this data?");
    if (IsDelete) {
        var Emp = {
            EmpID: EmpID,
        };
        $.ajax({
            url: "/Home/DeleteEmployee/",
            data: JSON.stringify(Emp),
            type: "POST",
            contentType: "application/json;charset=utf-8",
            datatype: "json",
            success: function (result) {
                alert("Data Deleted.");
            },
            error: function (result) {
                alert(result.responceText);
            }
        });
    }
}