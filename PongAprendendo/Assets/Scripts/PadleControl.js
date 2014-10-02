#pragma strict

var up : KeyCode;
var down : KeyCode;
var speed : float = 7;

function Update () {

	if (Input.GetKey(up)){
		rigidbody2D.velocity.y = speed;
	}
	
	else if (Input.GetKey(down)){
		rigidbody2D.velocity.y = -speed;
	}
	
	else {
	 	rigidbody2D.velocity.y = 0;
	}
}	
