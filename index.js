



var random = Math.floor(Math.random() * 100);
console.log(random);
document.getElementById("result").innerHTML = random;
var ans = prompt(`Guess the number my man`);
if (ans == random) {
    document.getElementById("result2").innerHTML = `correct`;
} else {
    document.getElementById("result2").innerHTML = `nah,bro u suck`;
}




