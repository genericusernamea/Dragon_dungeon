var Game.Console = {
 throwError: function(type, msg){
    console.log(type + msg);
 },
 type: function(int){
    if(int == 1 || int == 0){
        return "Error: ";
    }else if(int == 2){
        return "Warning: ";
    }else if(int == 3){
        return "Message: ";
    }
 }
}
Game.Console.sendMessage = function(msg){
    Game.Console.throwError(Game.Console.type(3),msg);
}
Game.Console.sendError = function(msg){
    Game.Console.throwError(Game.Console.type(1),msg);
}
Game.Console.sendWarning = function(msg){
    Game.Console.throwError(Game.Console.type(2),msg);
}