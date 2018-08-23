/**
  * Output: returns String
  */
Game.File.getDirectory = function(){
	return "assets/";
};
Game.File.getMapDirectory = function(){
	return Game.File.getDirectory() + "maps/";
};
Game.File.getSoundDirectory = function(){
	return Game.File.getDirectory() + "sound/";
};
Game.File.getImageDirectory = function(){
	return Game.File.getDirectory() + "images/";
};
Game.File.getNodeDirectory = function(){
	return "node_modules/";
};
Game.File.getStorageDirectory = function(){
	return "storage/";
};
Game.File.getItchDirectory = function(){
    return Game.File.getStorageDirectory() + "itch/";
};
Game.File.getDataDirectory = function(){
    return Game.File.getStorageDirectory() + "data/";
};
//Creates the directories not defined manually.
Game.File.CreateDir("storage/");
Game.File.CreateDir("storage/saves/");
Game.File.CreateDir("storage/data/");
Game.File.CreateDir("storage/leveldata/");

//Varables

//Storage Functions
