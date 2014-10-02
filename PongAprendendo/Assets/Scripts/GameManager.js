#pragma strict

static var pScore1 : int = 0;
static var pScore2 : int = 0;

var layout : GUISkin;



static function Score (wallName : String) {
	if (wallName == "rightWall"){
		pScore1 += 1;
	}
	else if (wallName == "leftWall"){
		pScore2 += 1;
	}
	Debug.Log ("P1 = " + pScore1);
	Debug.Log ("P2 = " + pScore2);
	
	
}

function OnGUI(){
	GUI.skin = layout;
	GUI.Label (new Rect (Screen.width/2-150, 20, 100, 100), "" + pScore1);
	GUI.Label (new Rect (Screen.width/2+150, 20, 100, 100), "" + pScore2);
}