
// async function getCombos() {
//   const response = await fetch("./data/colors.json");
//   const colors = await response.json();
//   const output = []

//   colors.colors.forEach(item => {
//     item.combinations.forEach(combo => {
//       let existingCombo = output.find(x => x.combo === combo);
//       if (!existingCombo) {
//         existingCombo = { combo, colors: [] };
//         output.push(existingCombo);
//       }
//       existingCombo.colors.push(item.hex);
//     });
//   });

//   const filted = output.filter(combo => combo.colors.length == 3)

//   return filted
// }

// const combos = await getCombos();
// console.log(combos);


document.body.firstElementChild.tabIndex = 1

const currentPage = window.location.pathname;
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  const href = link.getAttribute("href");
  
  if (currentPage.endsWith(href)) {
    link.classList.add("active");
  }
});



//js for dark and light modes...
var darkMode = document.getElementById("dark-mode");
var body_el = document.getElementById("container-div")


// Check local storage for the theme state
var theme = localStorage.getItem('theme');
if (theme === 'dark') {
  darkMode.classList.add('dark-mode');
  darkMode.classList.remove('light-mode');
  body_el.classList.remove('light');
  body_el.classList.add('dark');
  document.documentElement.style.setProperty("--background-color", "#161618");

  var tooltips = document.querySelectorAll('.tooltip');
  for (var i = 0; i < tooltips.length; i++) {
    tooltips[i].classList.add('tooltip-dark');
  }
 
} 

darkMode.addEventListener("click", function() {
darkMode.classList.toggle("light-mode");
darkMode.classList.toggle("dark-mode");
body_el.classList.toggle("light");
body_el.classList.toggle("dark");


// Save the state of the theme to local storage
if (body_el.classList.contains('dark')) {
localStorage.setItem('theme', 'dark');

var tooltips = document.querySelectorAll('.tooltip');
for (var i = 0; i < tooltips.length; i++) {
  tooltips[i].classList.add('tooltip-dark');
}
document.documentElement.style.setProperty("--background-color", "#161618");

} else {
localStorage.removeItem('theme');
var tooltips = document.querySelectorAll('.tooltip');
  for (var i = 0; i < tooltips.length; i++) {
    tooltips[i].classList.remove('tooltip-dark');
  }
  document.documentElement.style.setProperty("--background-color", "#ecedee");
}
});


var tiptextEl = document.getElementById('welp')

body_el.addEventListener('touchstart', function(){
  console.log('');  
});



if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Version') != -1) {

  var posts = document.getElementsByClassName("posts");
  var projs = document.getElementsByClassName('proj-container');
  
  if(posts[0]){
    posts[0].style.height = 'auto';
    posts[0].style.gap = '12px'
  }

  if(projs[0]){
    projs[0].style.height = 'auto';  
    projs[0].style.gap = '12px'
  }
  
}

if (navigator.userAgent.match(/iPhone/i) && navigator.userAgent.match(/Safari/i)) {
  // The user is using an iPhone with Safari
  body_el.style.cursor = 'pointer'

} 


//prolly will need an active class and some sort of id system or something...

/* deals with tooltip action */
// .tiptext  .tooltip:after, .tooltip:before {
// 	visibility:hidden;
// 	opacity:0;
//   transform: translate3d(0,12px,0);
//   transition: all .35s ease-in-out;
//   transition-delay:.85s;
// }

// .tiptext:hover  .tooltip:after, .tooltip:before {
// 	visibility:visible;
// 	opacity:1;
//   transform: translate3d(0,0,0);
//   transition: all .35s ease-in-out;
// }

// .tiptext .tooltip {
// 	visibility:hidden;
// 	opacity:0;
//   transform: translate3d(0,12px,0);
//   transition: all .35s ease-in-out;
//   transition-delay:.85s;
// }

// .tiptext:hover .tooltip {
// 	visibility:visible;
// 	opacity:1;
//   transform: translate3d(0,0,0);
//   transition: all .35s ease-in-out;

// }


// going to work like this
// on mobile tapping on the playpoint will trigger the tooltip 
// tapping elsewhere will cause it to go away and hide...

// how that happens
//determine what triggers the visible vs inviisible
//then just edit that shit, the hover is kinda irrlevant...


// function setTheme(theme) {
//   if (theme === 'dark') {
//     document.documentElement.style.setProperty('--hover-color', '#00FFFFFF');
//   } else {
//     document.documentElement.style.setProperty('--hover-color', '#D3D3D3');
//   }
// }

// const button = document.getElementById("theme-btn");
// const body = document.querySelector("body");




// const combo_obj = combos[Math.floor(Math.random() * combos.length)]
// const color_arr = combo_obj.colors

// document.documentElement.style.setProperty('--callout-color', color_arr[0]);
// document.documentElement.style.setProperty('--text-color', color_arr[1]);
// document.documentElement.style.setProperty('--background-color', color_arr[2]);
 

// button.addEventListener("click", () => {

//   const combo_obj = combos[Math.floor(Math.random() * combos.length)]
//   const color_arr = combo_obj.colors

//   document.documentElement.style.setProperty('--callout-color', color_arr[0]);
//   document.documentElement.style.setProperty('--text-color', color_arr[1]);
//   document.documentElement.style.setProperty('--background-color', color_arr[2]);

//   console.log('using combo', combo_obj);
    
//   });

// //for phones etc...
 
// button.addEventListener("touchstart", () => {

//   const combo_obj = combos[Math.floor(Math.random() * combos.length)]
//   const color_arr = combo_obj.colors

//   document.documentElement.style.setProperty('--callout-color', color_arr[0]);
//   document.documentElement.style.setProperty('--text-color', color_arr[1]);
//   document.documentElement.style.setProperty('--background-color', color_arr[2]);

    
//   });



//   function hexToHSL(hex) {
//     var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

//     var r = parseInt(result[1], 16);
//     var g = parseInt(result[2], 16);
//     var b = parseInt(result[3], 16);

//     r /= 255, g /= 255, b /= 255;
//     var max = Math.max(r, g, b), min = Math.min(r, g, b);
//     var h, s, l = (max + min) / 2;

//     if(max == min){
//         h = s = 0; // achromatic
//     } else {
//         var d = max - min;
//         s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
//         switch(max) {
//             case r: h = (g - b) / d + (g < b ? 6 : 0); break;
//             case g: h = (b - r) / d + 2; break;
//             case b: h = (r - g) / d + 4; break;
//         }
//         h /= 6;
//     }

//     s = s*100;
//     s = Math.round(s);
//     l = l*100;
//     l = Math.round(l);
//     h = Math.round(360*h);
    
//     var colorInHSL = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';

//     console.log(colorInHSL);
//   }

//   hexToHSL('#ffb3f0')



