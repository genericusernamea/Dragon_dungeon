Game.File = {};
Game.File.Create = function(directory, data){
fs.writeFile(directory,data, (err) => {
	if (err) throw err;
	console.log("Made " + data + " in " + directory);
});
};
Game.File.CreateDir = function(directory){
	fs.mkdir(directory, 511, function(err) {
			if (err) throw err;
	});
};
Game.File.ReadFile = function(directory){
	fs.readFile(directory, (err, data) => {
		if (err) throw err;
		console.log(data);
});
};
Game.File.Exists = function(directory){
    fs.exists(directory,(exists) =>{
        if (exists){
            //if file exists
            return true;
        }else{
            //if file dont exist
            return false;
        }
    })
};
Game.File.ReadFileAsString = function(directory){
	fs.readFile(directory, "utf8", (err, data) => {
		if (err) throw err;
		console.log(data);
});
};