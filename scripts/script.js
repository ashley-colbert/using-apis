document.querySelector(".btn").addEventListener("click", loadApi);

function loadApi() {
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(data => {
    let output = "";
    const breeds = Object.keys(data.message);
    breeds.forEach((breed) => {
      output += `<option value="${breed}">${breed}</option>`;
    });
    document.querySelector("#dog-breeds").innerHTML = output;
  })
  .catch(error => console.error('Error:', error));
}

function loadImages(breed, numImages) {
  const imagesDiv = document.querySelector("#images");
  while (imagesDiv.firstChild) {
    imagesDiv.removeChild(imagesDiv.firstChild);
  }
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/${numImages -1}`) 
  .then(response => response.json())
  .then(data => {
    data.message.forEach(imageUrl => {
      const img = document.createElement('img');
      img.src = imageUrl;
      document.querySelector("#images").appendChild(img);
    });
  })
  .catch(error => console.error('Error:', error));
}

var numDogs = "";
document.getElementById("num-dogs").value = numDogs;


document.querySelector("#dog-breeds").addEventListener("change", function() {
  const numImages = document.querySelector("#num-dogs").value;
  loadImages(this.value, numImages);
});

// function loadApi() {
//   const dogs = new XMLHttpRequest();
//   dogs.open("GET", "https://dog.ceo/api/breeds/list/all");
//   dogs.onload = function () {
//     let output = "";
//     const response = JSON.parse(this.responseText);
//     const breeds = Object.keys(response.message);
//     breeds.forEach((dog) => {
//       output += `<option value= "${dog}> ${dog} </option>`;
//     });
//     document.querySelector("#dog-breeds").innerHTML = output;
//   };
//   dogs.send();
// }