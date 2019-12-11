<!doctype html>

<?php 
	include('config/db.php');
	include('inc/not-logged-in.php'); 
?>

<html>
	
<head>
	<meta charset="utf-8">
	<title>Canvas</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="css/game.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
</head>

<body>
	
	<div class="container">

		<div class="canvas_container">
			
			<canvas id="canvas" width="500" height="500"></canvas>

			<div id="timer">

				<div class="current_timer">
					<img src="img/timer.png" alt="Stopwatch" class="timer_icon">
					<div class="time_current_time"><label id="minutes">00</label>:<label id="seconds">00</label></div>
				</div><!-- col-md-6 -->

				<?php

				$query = "SELECT * FROM scoreboard WHERE user_id='".$_SESSION['user_id']."' ORDER BY scoreboard.time DESC LIMIT 1";

				$result = mysqli_query($conn, $query);

				if(mysqli_num_rows($result) > 0) {

					while($row = mysqli_fetch_assoc($result)) {
					?>

					<div class="recent_time">
						<span class="recent_time_span">Recent time:</span>
						<!-- <div class="time_recent_time"><label id="minutes">00</label>:<label id="seconds">00</label></div> -->
						<div class="time_recent_time"><?php echo $row['timeofgame'] ?></div>
					</div><!-- col-md-6 -->

				<?php }
				}

				else { ?>

					<div class="recent_time">
						<span class="recent_time_span">Recent time:</span>
						<div class="time_recent_time">None</div>
					</div><!-- col-md-6 -->

				<?php
				}
				?>

			</div><!-- timer -->
			
		</div><!-- canvas_container -->

		<div id="username">
			<h2>Welcome</h2>
			<h1><?php echo $_SESSION['username'] ?></h1>
			<a href="inc/signout.php" class="logout_btn">Sign out</a>
			
			<div class="scoreboard">
				<table class="table" cellspacing="0" cellpadding="0">
					
					<thead>
						<h3>HIGHSCORE - TOP 5</h3>
					</thead>
					
					<thead>
						<tr>
							<th scope="col">Rank</th>
							<th scope="col">Username</th>
							<th scope="col">Score</th>
							<th scope="col">Date</th>
						</tr>
					</thead>
					
					<tbody>
						
					<?php
	
					$counter = 1;
	
					$query_scoreboard = "SELECT scoreboard.user_id, scoreboard.timeofgame, scoreboard.time, users.id, users.username FROM scoreboard 
					INNER JOIN users ON scoreboard.user_id = users.id
					ORDER BY scoreboard.timeofgame ASC LIMIT 5";

					$query_scoreboard = mysqli_query($conn, $query_scoreboard);

					while($row_scoreboard = mysqli_fetch_assoc($query_scoreboard)) {
					?>
					
					<tr>
						<td><?php echo $counter ?></td>
						<td class="username"><?php echo $row_scoreboard['username'] ?></td>
						<td><?php echo $row_scoreboard['timeofgame'] ?></td>
						<td><?php echo $row_scoreboard['time'] ?></td>
					</tr>

					<?php 
						$counter++;
					} ?>
						
					</tbody>
				</table>
			</div><!-- col-md-6 -->
		</div><!-- username -->
	</div><!-- container -->

	<!-- MODAL BELOW -->
	<div class="bs-example">
		<!-- Modal HTML -->
		<div id="myModal" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">

					<div class="modal-header">
						<h4 class="modal-title text-center">Congratulations!</h4>
					</div>
					
					<div class="modal-body">
						<p class="text-center">You've now completed the Mario Maze</p>
						<h5>Your time was:</h5>
						<h3 class="final_score" id="final_score"></h1>
					</div>

					<div class="modal-footer">
						<button type="button" id="reset_game" class="btn btn-primary">Try again</button>
					</div>

				</div>
			</div>
		</div>
	</div>
	
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
	<script src="js/main.js"></script>
	
</body>
</html>