class Settings{
  constructor() {
    this.enableSound = true;
    this.enableCheats = false;
  }
  get SoundEnabled(){
      return this.enableSound;
  }
  get CheatsEnabled(){
      return this.enableCheats;
  }
  Sound(bool){
      this.enableSound = bool;
  }
  Cheats(bool){
      this.enableCheats = bool;
  }
  UpdateSettings(key, value){
    if(key === "Sound" || key === "sound"){
        if(value === true || value === false){
			this.enableSound = value;
            console.log("Written to settings!");
        }else{
            console.log("Invalid value: " + value + ". Sound setting requests a bool (true or false)");
        }
    }else if(key === "Cheat" || key === "cheat" || key === "Cheats" || key === "cheats"){
        if(value === true || value === false){
            this.enableCheats = value;
        }else{
            console.log("Invalid value: " + value + ". Cheats setting requests a bool (true or false)");
        }
    }else{
        console.log("Error!: key doesnt exist.");
    }
  }
}

//Initalize Settings
var SettingsInfo = new Settings();
Game.Settings = {};
Game.Settings.getClass = SettingsInfo;
Game.Settings.Sound = SettingsInfo.SoundEnabled;
Game.Settings.Cheats = SettingsInfo.CheatsEnabled;
