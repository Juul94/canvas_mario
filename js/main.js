
/**************************************************/


// VARIABLES          



let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

let maze = [
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
	[2,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2],
	[2,0,2,2,0,2,0,0,0,2,0,0,0,2,0,2,2,0,0,2],
	[2,0,0,0,0,2,0,2,2,2,2,2,2,2,2,0,2,0,0,2],
	[2,2,0,2,0,2,2,2,0,0,0,0,0,0,2,0,2,2,0,2],
	[2,0,0,2,0,0,0,2,2,0,2,2,2,0,2,0,0,0,0,2],
	[2,2,2,2,2,2,0,2,0,0,2,0,0,0,2,0,2,2,2,2],
	[2,0,0,0,0,2,0,2,0,2,2,2,2,0,2,0,0,0,0,2],
	[2,0,0,2,0,2,0,2,0,0,0,2,0,0,2,0,0,2,0,2],
	[2,0,0,2,0,0,0,2,2,2,0,2,0,2,2,2,2,2,0,2],
	[2,2,0,2,2,2,2,2,0,0,0,2,0,0,0,2,0,0,0,2],
	[2,0,0,2,0,0,0,2,0,2,2,2,2,2,0,2,2,0,2,2],
	[2,0,2,2,0,2,0,2,0,2,0,0,0,2,0,3,2,0,5,2],
	[2,0,0,0,0,2,0,2,0,2,0,2,0,2,2,2,2,2,2,2],
	[2,0,2,2,2,2,0,2,0,0,0,2,0,2,0,0,0,0,0,2],
	[2,2,2,0,0,0,0,2,2,2,2,2,0,0,0,2,2,2,0,2],
	[2,0,0,0,2,2,2,2,0,0,0,2,2,0,0,2,0,0,0,2],
	[2,0,2,2,2,0,0,0,0,2,0,0,2,2,0,2,0,2,2,2],
	[2,0,0,0,0,0,0,2,0,0,2,0,4,2,0,2,0,0,-1,2],
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

var x = 0;
var y = 0;

var tileSize = 25;
var tilePosition = 25;

var player = -1;
// var playerStartPos = {y:9,x:9};

var player_img = new Image();
player_img.src = 'img/mario.jpg';

var player_img_left = new Image();
player_img_left.src = 'img/mario_left.jpg';

var player_img_right = new Image();
player_img_right.src = 'img/mario_right.jpg';

var wall_img = new Image();
wall_img.src = 'img/walls.png';

var grass_img = new Image();
grass_img.src = 'img/grass.jpg';

var tp_img = new Image();
tp_img.src = 'img/tp.jpg';

var finish_img = new Image();
finish_img.src = 'img/finish.jpg';


/**************************************************/


// GRID FUNCTION


function grid() {
	
	for(y = 0; y < maze.length; y++) {

		for(x = 0; x < maze[y].length; x++) {

			if(maze[y][x] === -1) {
				// PLAYER COORDINATES
				player = {y,x};
				
				// PLAYERS POSITION IN CONSIDE
				// console.log(player.y + " " + player.x);

				context.drawImage(player_img, y * tilePosition, x * tilePosition, tileSize, tileSize);
			}
			
			else if(maze[y][x] === 0) {
				context.drawImage(grass_img, y * tilePosition, x * tilePosition, tileSize, tileSize);
			}

			else if(maze[y][x] === 2) {
				context.drawImage(wall_img, y * tilePosition, x * tilePosition, tileSize, tileSize);
			}

			else if(maze[y][x] === 3) {
				context.drawImage(tp_img, y * tilePosition, x * tilePosition, tileSize, tileSize);
			}
			
			else if(maze[y][x] === 4) {
				context.drawImage(tp_img, y * tilePosition, x * tilePosition, tileSize, tileSize);
			}
			
			else if(maze[y][x] === 5) {
				context.drawImage(finish_img, y * tilePosition, x * tilePosition, tileSize, tileSize);
			}
		}
	}
}


/**************************************************/


// TIME FUNCTIONS: STARTS AND CALCULATE THE TIME WHEN MOVING 1'ST MOVE


var interval_time = 0;
var time_score = 0;

function startTimer() {

	startTimer = function(){};
	
	var minutesLabel = document.getElementById("minutes");
	var secondsLabel = document.getElementById("seconds");
	var totalSeconds = 0;
	
	interval_time = setInterval(setTime, 1000);

	function setTime() {
		++totalSeconds;
		
		secondsLabel.innerHTML = pad(totalSeconds % 60);
		minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
	}
	
	function pad(val) {
		
		var valString = val + "";
		
		if (valString.length < 2) {
			return "0" + valString;
		}
		
		else {
			return valString;
		}
	}
}


/**************************************************/


// KEY EVENTS (WHEN PRESSING ARROW KEYS)


window.addEventListener('keydown', function (event) {
	
	// SHOWING THE keyCodes
	// console.log(event.keyCode);
	
	switch(event.keyCode) {
			
		// KEY: LEFT
		case 37:
			// IF: FIELD IS AVAILABLE
			if(maze[player.y - 1][player.x] === 0) {
				
				// CHANGE DIRECTION OF MARIO (SWITCHING SRC ON IMG)
				player_img.src = player_img_left.src;

				// PLAYERS NEW POSITION
                maze[player.y - 1][player.x] = -1; 
				
				// PLAYERS OLD POSITION
                maze[player.y][player.x] = 0; 
				
				var audio_move = new Audio('sound/move.mp3');
				audio_move.volume = 0.1;
				audio_move.play();
				
				grid();
			}
			
			// IF: FIELD ISN'T AVAIABLE = RESET PLAYERS POSITION 
			else if(maze[player.y - 1][player.x] === 2) {
				
				// STOPS THE TIMER
				clearInterval(interval_time);
				
				var audio_loose = new Audio('sound/loose.mp3');
				audio_loose.play();
				
				audio_loose.onended = function () {
					window.location.reload();
				};
			}

		break;
		
		// KEY: UP
		case 38:
			// IF: FIELD IS AVAILABLE
			if(maze[player.y][player.x - 1] === 0) {
				
				// PLAYERS NEW POSITION
                maze[player.y][player.x - 1] = -1; 
				
				// PLAYERS OLD POSITION
                maze[player.y][player.x] = 0;
				
				// STARTS THE TIMER AND ONLY RUN 1 TIME
				startTimer();

				var audio_move2 = new Audio('sound/move.mp3');
				audio_move2.volume = 0.1;
				audio_move2.play();
				
				grid();
			}
			
			// IF: FIELD ISN'T AVAIABLE = RESET PLAYERS POSITION 
			else if(maze[player.y ][player.x - 1] === 2) {
				
				// STOPS THE TIMER
				clearInterval(interval_time);

				var audio_loose2 = new Audio('sound/loose.mp3');
				audio_loose2.play();
				
				audio_loose2.onended = function () {
					window.location.reload();
				};
			}
			
		break;

		// KEY RIGHT
		case 39:
			// IF: FIELD IS AVAILABLE
			if(maze[player.y + 1][player.x] === 0) {
				
				// CHANGE DIRECTION OF MARIO (SWITCHING SRC ON IMG)
				player_img.src = player_img_right.src;
				
				// PLAYERS NEW POSITION
                maze[player.y + 1][player.x] = -1;
				
				// PLAYERS OLD POSITION
                maze[player.y][player.x] = 0;

				var audio_move3 = new Audio('sound/move.mp3');
				audio_move3.volume = 0.1
				audio_move3.play();
				
				grid();
			}
			
			// IF: FIELD ISN'T AVAIABLE = RESET PLAYERS POSITION  
			else if(maze[player.y + 1][player.x] === 2) {
				
				// STOPS THE TIMER
				clearInterval(interval_time);
				
				var audio_loose3 = new Audio('sound/loose.mp3');
				audio_loose3.play();
				
				audio_loose3.onended = function () {
					window.location.reload();
				};
			}

		break;
		
		// KEY DOWN
		case 40:
			// IF: FIELD IS AVAILABLE
			if(maze[player.y][player.x + 1] === 0) {
				
				// PLAYERS NEW POSITION
                maze[player.y][player.x + 1] = -1; 
				
				// PLAYERS OLD POSITION
                maze[player.y][player.x] = 0; 

				var audio_move4 = new Audio('sound/move.mp3');
				audio_move4.volume = 0.1
				audio_move4.play();
				
				grid();
			}
			
			// IF: FIELD ISN'T AVAIABLE = RESET PLAYERS POSITION 
			else if(maze[player.y ][player.x + 1] === 2) {
				
				// STOPS THE TIMER
				clearInterval(interval_time);

				var audio_loose4 = new Audio('sound/loose.mp3');
				audio_loose4.play();
				
				audio_loose4.onended = function () {
					window.location.reload();
				};
			}
				
			// TP: CENTER TO RIGHT (18 11)
			else if(maze[player.y ][player.x + 1] === 3) {
				
				// PLAYERS OLD POSITION
				maze[player.y][player.x] = 0;
				
				// PLAYERS NEW POSITION
				maze[player.y = 18][player.x = 11] = -1;
				
				var audio_tp = new Audio('sound/tp.mp3');
				audio_tp.play();
				
				grid();
			}
			
			// TP: RIGHT TO CENTER (12 14)
			else if(maze[player.y ][player.x + 1] === 4) {
				
				// PLAYERS OLD POSITION
				maze[player.y][player.x] = 0;
				
				// PLAYERS NEW POSITION
				maze[player.y = 12][player.x = 14] = -1;
				
				var audio_tp2 = new Audio('sound/tp.mp3');
				audio_tp2.play();
				
				grid();
			}
						
			// IF: "HITTING" THE GOAL/BLACK BLOCK --> WIN
			else if(maze[player.y][player.x + 1] === 5) {
				
				// STOPS THE TIMER
				clearInterval(interval_time);
				
				var audio_win = new Audio('sound/win.mp3');
				get_time_for_db();
				audio_win.play();
				
				// TRICKER MODAL
				launchModal();
				
				// RESET GAME BUTTON (IN MODAL)
				var reset_game = document.getElementById('reset_game');
				
				$(reset_game).click(function() {
					window.location.reload();
				});
			}
			
		break;
		
		default:
		break;
	}
		
 });

grid();

window.addEventListener("load", grid);


/**************************************************/


// BACKGROUND MUSIC


function bgMusic() {
	var audio_bgMusic = new Audio('sound/bgmusic.mp3');
	audio_bgMusic.play();
}

//bgMusic();


/**************************************************/


// SAVING THE TIME OF THE GAME WHEN THE USER WINS
// WE CALL/USE THIS FUNCTION BEFORE WE PLAY THE audio_win IS PLAYING
// (BECAUSE WHEN THE SOUND FILE IS FINISHED IT REFRESH THE PAGE)


function get_time_for_db() {
	
	// SHOWING OUT THE TIME IN THE 2 LABELS IN THE HTML
	var seconds = document.getElementById("seconds").innerText;
	var minutes = document.getElementById("minutes").innerText;
	
	// CONVERTS JSON DATA/VALUE TO A STRING -->
	// IN OUR CASE THE MINUTES AND SECONDS
	var json_upload = "json_data=" + JSON.stringify({minutes:minutes, seconds:seconds});
	
	// INTERACT WITH SERVERS: RETRIEVE DATA FROM URL WITHOUT HAVING TO DO A PAGE REFRESH -->
	// IN OUR CASE: WE GET OUR DATA AND SEND IT TO THE DB SO WE CAN USE IT IN PHP
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
	
	// WE POST THE DATA INTO THE saving_time.php FILE
	// THIS FILE IS WHERE WE INSERT THE DATA INTO OUR DB (scoreboard DB)
	xmlhttp.open("POST", "inc/saving_time.php");
	
	// SETS THE VALUE OF AN HTTP REQUEST
	xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	// SENDS THE REQUEST TO THE SERVER
	xmlhttp.send(json_upload);
	
	// SENDS THE DATA (SCORE) INTO THE ID final_score TO DISPLAY IT WHEN WINNING GAME
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){ 
			document.getElementById("final_score").innerHTML = xmlhttp.responseText;
		} 
	} 
}


/**************************************************/


// MODAL - PREVENT USERS FROM BEING ABLE TO CLOSE THE MODAL


function launchModal() {
	$('#myModal').modal({
		backdrop: 'static'
	});
}


