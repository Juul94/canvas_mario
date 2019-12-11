<?php

	// IF ARE NOT LOGGED IN (OR HAVING A SESSION) = REDIRECT TO LOGIN PAGE

	session_start();

	if(isset($_SESSION['loggedin']) != true) {
		header("location: index.php");
	}

?>


