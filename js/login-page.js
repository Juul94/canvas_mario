/****************************************/

// LOGIN / REGISTER SWITCH (TOGGLE) FUNCTION



$('.message a').click(function() {
	$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


/****************************************/

// SIGNIN STYLING ON ERROR



var label_login_username = document.getElementById('label_login_user');
var label_login_password = document.getElementById('label_login_password');

var input_login_username = document.getElementById('input_login_user');
var input_login_password = document.getElementById('input_login_pass');

if (label_login_username.textContent != "") {

	// ADDING A RED LABEL TEXT + RED BORDER ON INPUT FIELDS IF THEY'RE EMPTY
	label_login_username.style.display = "block";

	// REMOVES THE LABELS IF THEY'RE EMPTY (OTHERWHISE THEY ADD SOME SPACE BETWEEN THE INPUT FIELDS)
	input_login_username.style.border = "1px solid red";
}

else {
	label_login_username.style.display = "none";
	input_login_username.style.border = "none";
}

if (label_login_password.textContent != "") {
	label_login_password.style.display = "block";
	input_login_password.style.border = "1px solid red";
	input_login_username.style.border = "1px solid red";
}

else {
	label_login_password.style.display = "none";
	input_login_password.style.border = "none";
}

// REGISTER STYLING ON ERROR

var label_reg_username = document.getElementById('label_reg_user');
var label_reg_password = document.getElementById('label_reg_password');
var label_reg_password2 = document.getElementById('label_reg_password2');

var input_reg_username = document.getElementById('input_reg_user');
var input_reg_password = document.getElementById('input_reg_password');
var input_reg_password2 = document.getElementById('input_reg_password2');

if (label_reg_username.textContent != "") {
	label_reg_username.style.display = "block";
	input_reg_username.style.border = "1px solid red";
}

else {
	label_reg_username.style.display = "none";
	input_reg_username.style.border = "none";
}

if (label_reg_password.textContent != "") {
	label_reg_password.style.display = "block";
	input_reg_password.style.border = "1px solid red";
}

else {
	label_reg_password.style.display = "none";
	input_reg_password.style.border = "none";
}

if (label_reg_password2.textContent != "") {
	label_reg_password2.style.display = "block";
	input_reg_password2.style.border = "1px solid red";
}

else {
	label_reg_password2.style.display = "none";
	input_reg_password2.style.border = "none";
}


/****************************************/

// CHECK IF URL CONTAINS #signin OR #register AND SHOWS THE FORM WHICH IS CORRECT FOR THE HASHTAG



if(window.location.hash) {

	var hash = window.location.hash.substring(1);

	if(hash == 'signin') {
		document.getElementById('login-form').style.display = 'block';
		document.getElementById('register-form').style.display = 'none';
	}

	else {
		document.getElementById('login-form').style.display = 'none';
		document.getElementById('register-form').style.display = 'block';
	}
	
}


/****************************************/

// SHOWS THE EYE ICON ON LOGIN AND REGISTER PAGE TO LET USERS SHOW AND HIDE THEIR PASSWORD AS THEY WANT



$(document).ready(function(){
	
	var div_login = document.getElementById('show_hide_login');
	div_login.style.backgroundImage = "url('img/show_pass_icon_open.png')";
	
	var div_reg = document.getElementById('show_hide_reg');
	div_reg.style.backgroundImage = "url('img/show_pass_icon_open.png')";
	
	var div_reg_rep = document.getElementById('show_hide_reg_rep');
	div_reg_rep.style.backgroundImage = "url('img/show_pass_icon_open.png')";
	
});


////////// LOGIN

// IF INPUT FIELD IS type="text" IT CHANGES IT TO type="password"
function showPW_login() {

	var pw_input_login = document.getElementById('input_login_pass');
	var div_login = document.getElementById('show_hide_login');

	if(pw_input_login.type == 'text') {
		pw_input_login.type = 'password';	
		div_login.style.backgroundImage = "url('img/show_pass_icon_open.png')";
	}

	else {
		pw_input_login.type = 'text';
		div_login.style.backgroundImage = "url('img/show_pass_icon_close.png')";
	}
}


////////// REGISTER: PASSWORD

function showPW_register() {

	var pw_input_reg = document.getElementById('input_reg_password');
	var div_reg = document.getElementById('show_hide_reg');

	if(pw_input_reg.type == 'text') {
		pw_input_reg.type = 'password';	
		div_reg.style.backgroundImage = "url('img/show_pass_icon_open.png')";
	}

	else {
		pw_input_reg.type = 'text';
		div_reg.style.backgroundImage = "url('img/show_pass_icon_close.png')";
	}
}


////////// REGISTER: PASSWORD REPEAT

function showPW_register_rep() {

	var pw_input_reg_rep = document.getElementById('input_reg_password2');
	var div_reg_rep = document.getElementById('show_hide_reg_rep');

	if(pw_input_reg_rep.type == 'text') {
		pw_input_reg_rep.type = 'password';	
		div_reg_rep.style.backgroundImage = "url('img/show_pass_icon_open.png')";
	}

	else {
		pw_input_reg_rep.type = 'text';
		div_reg_rep.style.backgroundImage = "url('img/show_pass_icon_close.png')";
	}
}


/****************************************/



