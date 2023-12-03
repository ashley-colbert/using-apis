
document.querySelector(".btn").addEventListener("click", loadAPI);

function loadAPI() {
  fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let output = "";
    const breeds = Object.keys(data.message);
    breeds.forEach((breed) => {
      output += `<option value="${breed}">${breed}</option>`;
    });
    document.querySelector("#dog-breeds").innerHTML = output;
  });
}

function loadImages(breed, numImages) {
  const imagesDiv = document.querySelector("#images");
  if (numImages < 1 || numImages > 100)  {
    alert("Please enter a number between 1-100");
    throw new Error('Please enter a number between 1-100');
  }
  
  while (imagesDiv.firstChild) {
    imagesDiv.removeChild(imagesDiv.firstChild);
  }
  
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/${numImages -1}`) 
  .then((response) => {
   return response.json();
  })
  .then((data) => {
    data.message.forEach(imageURL => {
      const img = document.createElement('img');
      img.src = imageURL;
      document.querySelector("#images").appendChild(img);
    });
  });
}

var numDogs = "";
document.getElementById("num-dogs").value = numDogs;

document.querySelector("#dog-breeds").addEventListener("change", function() {
  const numImages = document.querySelector("#num-dogs").value;
  loadImages(this.value, numImages);
});

