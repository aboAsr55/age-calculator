
let currentDate = new Date()


let btn = document.getElementById("btn");
let toggle = document.getElementById("toggle");
let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year');

let dd = document.querySelector('.res1');
let mm = document.querySelector('.res2');
let yy = document.querySelector('.res3');
let hh = document.querySelector('.res4');
let container = document.querySelector('.container');
let body = document.querySelector('body');


let currentDay = currentDate.getDate();
let currentMonth = 1 + currentDate.getMonth();
let currentYear = currentDate.getFullYear();


toggle.onclick = function() {
let h = true;
  container.classList.toggle("dark");
  body.classList.toggle("dark");
  if(container.classList.contains("dark")){
    toggle.style.color = "#222";
    toggle.style.backgroundColor = "#fff";
    toggle.innerHTML = "light mood";
    body.style.backgroundColor = "#ff6868"
  } else {
    toggle.style.color = "#fff";
    toggle.style.backgroundColor = "#222";
    toggle.innerHTML = "dark mood";
    body.style.backgroundColor = "#ffff"
  } 
}

btn.onclick = function() {
  
  if(day.value != "" && month.value != "" && year.value !=""){
    
    if(month.value <= 0 || month.value > 12 || day.value <= 0 || day.value > 31 || year.value <= 1000 || year.value > currentYear){
      window.alert("please enter a valid month number");
      clearData();
    }else{
      dayCheck();
      monthCheck();
      yearCheck();
    }
  }
  else {
    window.alert("invalid data")
  }
  day.value = "";
  month.value = "";
  year.value = "";
}
function dayCheck(){
  if(day.value > currentDay){
    currentDay = currentDay + 30;
    currentMonth = currentMonth - 1;  
    dd.innerHTML = (currentDay - day.value) + " "+'days';
    day.value <= 31
  }else {
    dd.innerHTML = (currentDay - day.value) + " "+'days';
  }
}
function monthCheck(){
  if(month.value > currentMonth ){
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1; 
    mm.innerHTML = (currentMonth - month.value) + " "+'months'; 
    
  }else{
    mm.innerHTML = (currentMonth - month.value) + " "+'months';
  }
}
function yearCheck() {
  if(year.value > currentYear){
    window.alert("invalid year")
  }else {
    yy.innerHTML = (currentYear - year.value) + " "+'years';
  }

}
function clearData(){
  dd.innerHTML = "";
  mm.innerHTML ="";
  yy.innerHTML = "";
}
















































































// function data(){
//   let newYear = new Date('1 jan 2024');

// let currentYear = new Date();

//   let days = Math.floor((newYear - currentYear) / 1000 /60/60/24);
//   let hours = Math.floor((newYear - currentYear) / 1000 /60/60)
//   let minutes = Math.floor((newYear - currentYear) / 1000 /60);
//   let seconds = Math.floor((newYear - currentYear) / 1000);

//   document.querySelector('.day').textContent = days
//   document.querySelector('.hour').textContent = hours
//   document.querySelector('.minute').textContent = minutes
//   document.querySelector('.second').textContent = seconds
// }
// data()
// // setInterval(function(){
// //   setTimeout(data(), 1000)
// // },1000)

// setTimeout(() =>{
//   setInterval(data,1000)
// }, 1000)