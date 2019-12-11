<?php

	ob_start();

	$conn = mysqli_connect('localhost', 'root', '', 'canvas');

	if(mysqli_connect_errno()) {
		echo 'Failed to connect to MySQL ' . mysqli_connect_errno();
	}

?>


