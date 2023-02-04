console.log("Hello World :)")


var darkMode = document.getElementById("dark-mode");
var body_el = document.getElementById("body-container")



darkMode.addEventListener("click", function() {
  darkMode.classList.toggle("light-mode");
  darkMode.classList.toggle("dark-mode");
  body_el.classList.toggle("light")
  body_el.classList.toggle("dark")
 
}); 

document.querySelector('.tooltip').addEventListener('mouseover', function(){
  this.querySelector('.tooltiptext').style.visibility = 'visible';
});
document.querySelector('.tooltip').addEventListener('mouseout', function(){
  this.querySelector('.tooltiptext').style.visibility = 'hidden';
});


function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.style.setProperty('--hover-color', '#00FFFFFF');
  } else {
    document.documentElement.style.setProperty('--hover-color', '#D3D3D3');
  }
}

// const button = document.getElementById("color-button");
// const body = document.querySelector("body");

// button.addEventListener("click", () => { 
//   fetch("./data/colors.json")
//     .then((response) => response.json()) 
//     .then((colors) => {
//         console.log(colors.colors);
//       const randomColor = colors.colors[Math.floor(Math.random() * colors.colors.length)].hex;
//       body.style.backgroundColor = randomColor;
//       document.getElementById("container").style.color = colors.colors[Math.floor(Math.random() * colors.colors.length)].hex;
//     });
// });
 
// button.addEventListener("touchstart", () => {
//     fetch("./data/colors.json")
//       .then((response) => response.json())
//       .then((colors) => {
//           console.log(colors.colors[Math.floor(Math.random() * colors.colors.length)].hex);
//         const randomColor = colors.colors[Math.floor(Math.random() * colors.colors.length)].hex;
//         body.style.backgroundColor = randomColor;
//       });
//   });



// fetch('./data/colors.json')
//   .then(response => response.json())
//   .then(colors2 => {
//     let combos = []

//     const colors3 = colors2.colors

//     colors3.forEach(color => {
//       color.combinations.forEach(combo => {
//         let existingCombo = combos.find(c => c.combo === combo)
//         if (existingCombo) {
//           existingCombo.colors.push(color.hex)
//         } else {
//           combos.push({ combo, colors: [color.hex] })
//         }
//       })
//     })

//     console.log(combos)

//   })
//   .catch(error => {
//     console.error('Error fetching colors:', error)
//   })
