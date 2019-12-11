<?php

session_start();

include('../config/db.php');

if(isset($_SESSION['loggedin']) == true) {

	// JSON OBJECT - DECODING SO WE CAN USE THE DATA IN A POST FOR PHP
	$data = json_decode($_POST['json_data']);

	// CONVERTING OUR MIN AND SEC DATA INTO EACH VARIABLES
	$seconds = $data->seconds;
	$minutes = $data->minutes;
	
	// 1 VARIABLE TO SHOW THE MIN AND SEC TOGETHER
	$total_time = $minutes . ' min ' . $seconds . ' sec';
	
	$username = $_SESSION['username'];
	
	$query_user = "SELECT id FROM users WHERE username='$username'";
	
	$result_user = mysqli_query($conn, $query_user);
	$data = mysqli_fetch_assoc($result_user);
	
	$user_id = $data['id'];
	
	if ($user_id > 0) {
		
		$query = "INSERT INTO scoreboard (user_id, timeofgame, time) VALUES ('$user_id', '$total_time', NOW())";
		
		if(mysqli_query($conn, $query)) {
			echo $total_time;
		}
	}
}

?>