<!doctype html>

<?php 
	include('inc/logged-in.php'); 
	include('config/db.php');
	include('inc/login-db.php');
	include('inc/register-db.php');
?>

<html>
	
<head>
	<meta charset="utf-8">
	<title>Login - Mario Maze</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="css/login.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<script src="https://kit.fontawesome.com/302b93559e.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
</head>

<body id="login_page">
	
	<img src="img/mario_maze.png" alt="Mario Maze" class="mario_maze_banner" draggable="false">
	
	<div class="login-page">
		<div class="form">

			<form class="register-form" id="register-form" method="post">
				
				<input type="text" class="input_style" name="reg_username" id="input_reg_user" placeholder="Username" value="<?php echo $reg_username;?>"/>

				<label id="label_reg_user" class="error_msg"><?php echo $error_reg_user; ?></label>
				<div class="pw_box">
					<input type="password" class="input_style" name="reg_password" id="input_reg_password" placeholder="Password" value="<?php echo $reg_password;?>"/>
					<a href="#register">
						<div class="show_hide" id="show_hide_reg" onClick="showPW_register()"></div>
					</a>
				</div><!-- pw_box -->
				<label id="label_reg_password" class="error_msg"><?php echo $error_reg_pass; ?></label>
				
				<div class="pw_box">
					<input type="password" class="input_style" name="reg_password2" id="input_reg_password2" placeholder="Repeat Password" value="<?php echo $reg_password2;?>"/>
					<a href="#register">
						<div class="show_hide" id="show_hide_reg_rep" onClick="showPW_register_rep()"></div>
					</a>
				</div><!-- pw_box -->
				<label id="label_reg_password2" class="error_msg"><?php echo $error_reg_pass2; ?></label>
				
				<input type="submit" name="create" value="Create" class="btn_submit"></input>
			
				<p class="message">Already registered? <a href="index.php#signin">Sign In</a></p>
			</form><!-- register-form -->

			<form class="login-form" id="login-form" method="post">
				
				<input type="text" class="input_style" name="login_username" placeholder="Username" id="input_login_user" value="<?php echo $login_username;?>"/>
				<label id="label_login_user" class="error_msg"><?php echo $error_login_user; ?></label>
				
				<div class="pw_box">
					<input type="password" class="input_style" name="login_password" placeholder="Password" id="input_login_pass" value="<?php echo $login_password;?>"/>
					<a href="#">
						<div class="show_hide" id="show_hide_login" onClick="showPW_login()"></div>
					</a>
				</div><!-- pw_box -->
				<label id="label_login_password" class="error_msg"><?php echo $error_login_password; ?></label>
				
				<input type="submit" name="login" value="Login" class="btn_submit"></input>
		
				<p class="message">Not registered? <a href="index.php#register">Create an account</a></p>
			</form><!-- login-form -->

		</div><!-- form -->
	</div><!-- login-page -->

	<img src="img/login_mario.png" alt="The one and only Mario" class="mario_login_img" draggable="false">
	<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
	<script src="js/login-page.js"></script>

</body>
</html>

