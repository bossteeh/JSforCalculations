/* ASSIGNMENT

Write a program with javascript to calculate the number of seconds in a week 
then display your  answer on the html webpage */



const seconds = 60
const hour = 60 * seconds;
const day = 24 * hour;
const week = day * 7
console.log(week)
document.getElementById("secondsInAWeek").innerHTML = week;

