<?php

$error_login_user = "";
$error_login_password = "";

$login_username = "";
$login_password = "";

if(isset($_POST['login'])) {

	$login_username = mysqli_real_escape_string($conn, $_POST['login_username']);
	$login_password = mysqli_real_escape_string($conn, $_POST['login_password']);
	
	if(!isset($_POST['login_username']) || empty($_POST['login_username'])) {
		$error_login_user = 'Please enter a username';
	}

	else if(!isset($_POST['login_password']) || empty($_POST['login_password'])) {
		$error_login_password = 'Please enter a password';
	}

	else {
		$query = "SELECT * FROM users WHERE username='$login_username'";

		$result = mysqli_query($conn, $query);

		if(mysqli_num_rows($result) == 1) {
			
			$data = mysqli_fetch_assoc($result);
			
			if(password_verify($login_password, $data['password'])) {
				
				session_start();
				$_SESSION['loggedin'] = true;
				$_SESSION['username'] = $login_username;
				$_SESSION['user_id'] = $data['id'];

				header("Location: game.php");

				exit();
			}
			
			else {
				$error_login_password = 'Incorrect password or username';
			}
		}

		else {
			$error_login_password = 'Incorrect password or username';
		}
	}
}

?>




