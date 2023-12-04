document.querySelector(".btn").addEventListener("click", loadAPI);

function loadAPI() {
  fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let output = "";
    data.forEach((breed) => {
      output += `<option value="${breed}">${breed}</option>`;
    });
    document.querySelector("#dog-breeds").innerHTML = output;
  });
}

function loadImages(breed, numImages) {
  const imagesDiv = document.querySelector("#images");
  while (imagesDiv.firstChild) {
    imagesDiv.removeChild(imagesDiv.firstChild);
  }
  if (numImages < 1 || numImages > 100)  {
    alert('Please enter a number between 1-100')
    return;
  }
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/${numImages -1}`) 
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let output = "";
    data.forEach((value) => {
      output += `<div class="imagesDiv"><div>`
    });
    document.querySelector("#images").innerHTML = output;
  });
}


// function loadImages(breed, numImages) {
//   const imagesDiv = document.querySelector("#images");
//   if (numImages < 1 || numImages > 100)  {
//     errorMessage.innerHTML = "Please enter a number between 1-100";
//     setTimeout(() => {
//       errorMessage.innerHTML = "";
//     }, 5000);
//     return;
//   }

//   while (imagesDiv.firstChild) {
//     imagesDiv.removeChild(imagesDiv.firstChild);
//   }
  
//   fetch(`https://dog.ceo/api/breed/${breed}/images/random/${numImages} `) 
//   .then((response) => {
//    return response.json();
//   })
//   .then((data) => {
//     data.message.forEach(imageURL => {
//       const img = document.createElement('img');
//       img.src = imageURL;
//       // document.querySelector("#images");//.appendChild(img);
//     });
//   });
// }

// document.querySelector("#dog-breeds").addEventListener("change", function() {
//   const numImages = document.querySelector("#num-dogs").value;
//   loadImages(this.value, numImages);
// });