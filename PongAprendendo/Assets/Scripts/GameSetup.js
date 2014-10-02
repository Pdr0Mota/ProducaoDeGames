#pragma strict

var mainCam : Camera;
var topWall : BoxCollider2D;
var botWall : BoxCollider2D;
var leftWall : BoxCollider2D;
var rightWall : BoxCollider2D;

var Player01 : Transform;
var Player02 : Transform;

function Update () {

	// Move cada parede para o limite respectivo
	// Cima
	topWall.size = new Vector2(mainCam.ScreenToWorldPoint (new  Vector3(Screen.width*2f, 0f, 0f)).x, 1f);
	topWall.center = new Vector2(0f, mainCam.ScreenToWorldPoint (new Vector3(0f, Screen.height, 0f)).y + 0.5f);
	
	// bot
	botWall.size = new Vector2(mainCam.ScreenToWorldPoint (new  Vector3(Screen.width*2f, 0f, 0f)).x, 1f);
	botWall.center = new Vector2(0f, mainCam.ScreenToWorldPoint (new Vector3(0f, 0f, 0f)).y - 0.5f);
	
	// left
	leftWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint (new  Vector3(0f, Screen.height*2f, 0f)).y);
	leftWall.center = new Vector2(mainCam.ScreenToWorldPoint (new Vector3(0f, 0f, 0f)).x - 0.5f, 0f);
	
	// right 
	rightWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint (new  Vector3(0f, Screen.height*2f, 0f)).y);
	rightWall.center = new Vector2(mainCam.ScreenToWorldPoint (new Vector3(Screen.width, 0f, 0f)).x + 0.5f, 0f);
	
	
	Player01.position.x = mainCam.ScreenToWorldPoint (new Vector3 (75f, 0f, 0f)).x;
	Player02.position.x = mainCam.ScreenToWorldPoint (new Vector3 (Screen.width - 75f, 0f, 0f)).x; 
	
	
	
	
}