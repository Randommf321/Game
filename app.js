// if,else -> nuhtsul shalgah
// tentsuu bnu? ih bnu? baga bnu?
var age=15;
// >, <, >=, <=, ==, !=
if(age>=18){
    console.log("Ta nasand hursen baina");
}else{
    console.log("Ta nasand hureegui baina");
}
// 1. 2 тооны их багыг олох код бичнэ үү
// 2. Тоог тэгш эсвэл сондгой эсэхийг олох код бичнэ үү
// 3. Тоог эерэг эсвэл сөрөг эсэхийг олох код бичнэ үү
var number=10,number2=14;
if(number>number2){
console.log(number+ number2+" oos ih baina")
}else(console.log(number2+"is bigger"));
var too=5;
if(too%2==1){
	console.log("Sondgoi too")
}else{
	console.log("Tegsh too") 
};
var numbr=2
if(numbr>0){
	console.log("eyreg");
}else{
console.log("surug")
};
var nas=19;
var huis="eregtei";
if(nas>17 && huis=="eregtei"){
	console.log("nasand hursend,eregtei")
}else{
	console.loG("nasand hureegui,emegtei")
}
var numb=3,numb2=5,numb3=2
if(numb>numb2 && numb>numb3){
	console.log("Numb1 is bigger")
}else if(numb2>numb && numb>numb3){
	console.log("numb2 is bigger");
}else if(numb3>Numb && numb3>numb2){
	console.log("numb3 is bigger");
}else{
	console.log("==");
}
var number=35;
if(number%5==0 || number%2==0){
	console.log(number+"too 5 esvel 2t huvaagdana");
}else{
	console.log(number+"too 5 esvel 2t huvaagdahgu");
}
var score=80;
if (score>=0 && score<=59){
	console.log(score+" F")
}else if (score>=0 && score<=69){
	console.log(score+" D")
}else if (score>=0 && score<=79){
	console.log(score+" D")
}else if (score>=0 && score<=89){
	console.log(score+" B")
}else if (score>=0 && score<=100){
	console.log(score+" A")
}else{
	console.log("invalid number")
}
alert("Your mother asks you to go shopping with her.");
alert("What do you reply?");
var choice = prompt("Sure / I don't feel like going today");

if (choice == "Sure") {
    alert("Your mother receives a call and has to leave quickly.");
    alert("She leaves $10 on the table and says she'll be back by 6 PM.");
    alert("She also asks you to stay at home with your younger brother.");

    var choice2 = prompt("What do you do? Clean the house / Start playing video games");

    if (choice2 == "Clean the house") {
        alert("You spend the next two hours cleaning the house. It's now 4 PM.");
        var postCleanChoice = prompt("What next? Play video games / Check on your brother");

        if (postCleanChoice == "Play video games") {
            alert("You play video games for an hour. It's now 5 PM.");
        } else if (postCleanChoice == "Check on your brother") {
            alert("You check on your brother. He's asleep. It's 4:30 PM.");
        } else {
            console.log("Invalid input. Please refresh.");
        }
    } else if (choice2 == "Start playing video games") {
        alert("You play video games until 3 PM when you hear a noise from your brother's room.");
        alert("You check on him and see that he's just stirring in his sleep.");
    } else {
        console.log("Invalid input. Please refresh.");
    }

    alert("You decide to use the $10 to buy something to eat. You head to the grocery store.");

    var groceryChoice = prompt("What do you buy? Instant noodles / Vegetables / Chips / A Sandwich / A Chocolate bar");

    if (groceryChoice == "Instant noodles") {
        alert("You buy instant noodles for $1. Cooking them takes 5 minutes.");
    } else if (groceryChoice == "Vegetables") {
        alert("You buy vegetables for $3. Cooking takes 20 minutes.");
    } else if (groceryChoice == "Chips") {
        alert("You buy chips for $1.50. You eat them on the way back home.");
    } else if (groceryChoice == "A Sandwich") {
        alert("You buy a sandwich for $2.50. It's quick and filling.");
    } else if (groceryChoice == "A Chocolate bar") {
        alert("You buy a chocolate bar for $1. It's a quick snack.");
    } else {
        console.log("Invalid input. Please refresh.");
    }

    alert("You get back home and finish your meal. It's now 5:30 PM.");
    alert("Your mother returns at 6 PM.");

    if (groceryChoice == "Vegetables") {
        alert("She sees the clean house and healthy meal. She gives you $10 as a reward.");
    } else if (groceryChoice == "Instant noodles" || groceryChoice == "A Sandwich") {
        alert("She notices the effort you put in and gives you an extra $5.");
    } else if (groceryChoice == "Chips" || groceryChoice == "A Chocolate bar") {
        alert("She gives you a small reward of $2.");
    }

    alert("The end. You now have more money to spend.");

} else if (choice == "I don't feel like going today") {
    alert("Your mother sighs and leaves the house, leaving $5 on the table.");
    
    var choiceStayHome = prompt("What do you do now? Watch TV / Take a nap");

    if (choiceStayHome == "Watch TV") {
        alert("You turn on the TV and start watching a show.");
        alert("Time passes. It's now 3 PM.");
        var tvChoice = prompt("Keep watching TV / Check on your brother");

        if (tvChoice == "Keep watching TV") {
            alert("You continue watching TV. Hours go by. It's now 5 PM.");
        } else if (tvChoice == "Check on your brother") {
            alert("You check on your brother. He's playing quietly in his room.");
            alert("You sit with him for a while. It's now 4 PM.");
        } else {
            console.log("Invalid input. Please refresh.");
        }
    } else if (choiceStayHome == "Take a nap") {
        alert("You decide to take a nap.");
        alert("You sleep deeply and wake up at 4 PM.");
        alert("You feel a bit groggy but more rested.");
        var afterNapChoice = prompt("What now? Grab a snack / Check on your brother");

        if (afterNapChoice == "Grab a snack") {
            alert("You head to the kitchen and find something to eat.");
            alert("After eating, you realize it's now 5 PM.");
        } else if (afterNapChoice == "Check on your brother") {
            alert("You check on your brother. He's playing with his toys.");
            alert("You spend some time with him. It's now 4:30 PM.");
        } else {
            console.log("Invalid input. Please refresh.");
        }
    } else {
        console.log("Invalid input. Please refresh.");
    }

    alert("Your mother returns home at 6 PM.");
    alert("She asks how your day was and if everything went okay.");
    alert("You tell her about what you did. She says she’s glad you stayed home.");
    alert("The end. It was a quiet day.");

} else {
    console.log("Invalid input. Please refresh.");
}
