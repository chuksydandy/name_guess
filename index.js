function whoIsPaying (names) {
    var numberOfPeople = names.lenght;
    var randomPosition = Math.floor(Math.random() * numberOfPeople)
    var randomPerson = names[randomPosition];
    return names + " is paying for lunch today!";
}
var names = ["chuks", "john", "mike", "jude", "nkem"];
var people = names.length;
var pick = Math.floor(Math.random() * people) //pick a name from the array list
var initial =names[pick].slice(0,1).toLocaleUpperCase();
var restOfPick = names[pick].slice(1,names.lenght).toLowerCase();
var conName = initial + restOfPick;
conName = whoIsPaying(conName);