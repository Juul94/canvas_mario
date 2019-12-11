<?php

$reg_username = "";
$reg_password = "";
$reg_password2 = "";

$error_reg_user = "";
$error_reg_pass = "";
$error_reg_pass2 = "";

if(isset($_POST['create'])) {
	
	$success = false;
	
	$reg_username = mysqli_real_escape_string($conn, $_POST['reg_username']);
	$reg_password = mysqli_real_escape_string($conn, $_POST['reg_password']);
	$reg_password2 = mysqli_real_escape_string($conn, $_POST['reg_password2']);
	
	$hash = password_hash($reg_password, PASSWORD_DEFAULT);
	
	//////////     USERNAME VALIDATION
	
	// CHECKING IF USERNAME ALREADY EXIST
	$query_user = "SELECT username FROM users WHERE username='$reg_username'";

	$result_user = mysqli_query($conn, $query_user);

	if(mysqli_num_rows($result_user) > 0) {
		$error_reg_user = 'Username already taken';
		
		return false;
	} 
	
	// CHECKING IF USERNAME INPUT IS EMPTY
	if(!isset($_POST['reg_username']) || empty($_POST['reg_username'])) {
		$error_reg_user = 'Please enter a username';
	}
	
	// CHECKING IF USERNAME CONTAIN SPACES
	else if(preg_match('/\s/', $reg_username)) {
		$error_reg_user = 'Spaces are not allowed';
	}
	
	// CHECKING IF USERNAME CONTAIN SPECIAL CHARACTERS
	else if(!preg_match('/^[a-zA-Z0-9]{4,}$/', $reg_username)) {
		$error_reg_user = 'Use at least 4 letters';
	}
	
	//////////     PASSWORD VALIDATION

	// CHECKING IF PASSWORD INPUT IS EMPTY
	else if(!isset($_POST['reg_password']) || empty($_POST['reg_password'])) {
		$error_reg_pass = 'Please enter a password';
	}
	
	// CHECKING IF PASSWORD CONTAIN SPACES
	else if(preg_match('/\s/', $reg_password)) {
		$error_reg_pass = 'Spaces are not allowed!';
	}
	
	// CHECKING IF PASSWORD CONTAIN SPECIAL CHARACTERS
	else if(!preg_match('/^[a-zA-Z0-9]{3,}$/', $reg_password)) {
		$error_reg_pass = 'Use at least 3 letters';
	}
	
	// CHECKING IF PASSWORD REPEAT INPUT IS EMPTY
	else if(!isset($_POST['reg_password2']) || empty($_POST['reg_password2'])) {
		$error_reg_pass2 = 'Please enter password again';
	}
	
	// CHECKING IF PASSWORD AND PASSWORD REPEAT IS NOT MATCHING
	else if($reg_password != $reg_password2) {
		$error_reg_pass2 = 'Password doesnt match';
	}
	
	//////////     EXECUTE QUERY (INSERT)
	
	else {
		$query = "INSERT INTO users (username, password) VALUES ('$reg_username', '$hash')";

		if(mysqli_query($conn, $query)) {
			
			session_start();
			$_SESSION['loggedin'] = true;
			$_SESSION['username'] = $reg_username;
			$_SESSION['user_id'] = $data['id'];

			header("Location: game.php");

			exit();
		}
	}
}

?>



