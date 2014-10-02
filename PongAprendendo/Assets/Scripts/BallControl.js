#pragma strict

var ballSpeed : float = 100;

function Start () {
	yield WaitForSeconds (1);
	moveBall();
}

function OnCollisionEnter2D (colInfo : Collision2D) {
	
	if (colInfo.collider.tag == "Player") {
	
	}
	
}

function restart(){
	rigidbody2D.velocity.y = 0;
	rigidbody2D.velocity.x = 0;
	transform.position.x = 0;
	transform.position.y = 0;
	
	yield WaitForSeconds (1);
	moveBall();
	

}


function moveBall () {

	var rn = Random.Range(0, 2);
	if (rn <= 0.5){
		rigidbody2D.AddForce (new Vector2 (ballSpeed, 10));
	}
	else {
		rigidbody2D.AddForce (new Vector2 (-ballSpeed, -10));
	}
}