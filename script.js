fillform();

function fillform() {
    if (typeof (localStorage.getItem('name')) != 'undefined') {
        document.getElementById('fname').value = localStorage.getItem('name');
        document.getElementById('femail').value = localStorage.getItem('email');
        document.getElementById('fphone').value = localStorage.getItem('phone');
        document.getElementById('fId').value = localStorage.getItem('id');
        // document.getElementById('hostel').value = localStorage.getItem('hostel');
        var s = document.getElementsByName('size');
        for(let item of s){
            if(item.value == localStorage.getItem('size'))
                item.checked = true;
        }

        var h = document.getElementById('hostel');
        for(var i=0;i< 11 ; i++){
            if(h.options[i].text == localStorage.getItem('hostel'))
                h.options[i].selected = true;
        }

        var c = document.getElementById('terms');
        c.checked = true;
    }
}



function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('form-error')[0].innerHTML = error;
}

function clearErrors() {
    errors = document.getElementsByClassName("form-error")
    for (let item of errors) {
        item.innerHTML = "";
    }
}

console.log

function validateForm() {
    clearErrors();
    var a = true;
    var name = document.getElementById('fname').value;
    var email = document.getElementById('femail').value;
    var phone = document.getElementById('fphone').value;
    var id = document.getElementById('fId').value;
    var hostel = document.getElementById('hostel').value;
    var sizes = document.getElementsByName('size')
    for (let item of sizes) {
        if (item.checked) {
            sizes = item.value;
            break;
        }
    }

    if (name.length < 3) {
        seterror('name', '*name too short');
        a = false;
    }
    if (email.length < 10) {
        seterror('email', "*email too short")
        a = false;
    }
    if (hostel == 'none') {
        seterror('hostel-select', "*select your hostel");
        a = false;
    }

    if (a) {
        console.log(name);
        console.log(email);
        console.log(phone);
        console.log(id);
        console.log(hostel);
        console.log(sizes);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('id', id);
        localStorage.setItem('hostel', hostel);
        localStorage.setItem('size', sizes);
        var userdata = {
            name: name,
            email: email,
            phone: phone,
            id: id,
            hostel: hostel,
            size: sizes
        };
        localStorage.setItem('user',JSON.stringify(userdata));
        alert("Response Successfully Submitted!");
        $.post("https://www.foo.com/",userdata , console.log(userdata));
    }
    return a;

}