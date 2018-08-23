Game.Script = {};
Game.Script.createScript = function(src){
	var script = document.createElement("script");
	document.body.appendChild(script);
	script.src = src;
};