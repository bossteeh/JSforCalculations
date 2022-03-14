/* ASSIGNMENT

Write a program with javascript to calculate the number of seconds in a week 
then display your  answer on the html webpage */



let seconds = 60
let hour = 60 * seconds;
let day = 24 * hour;
let week = day * 7
console.log(week)
document.getElementById("secondsInAWeek").innerHTML = week;
