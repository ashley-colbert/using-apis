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

  if (numImages < 1 || numImages > 100) {
    errorMessage.innerHTML = "Please enter a number between 1-100";
    setTimeout(() => {
      errorMessage.innerHTML = "";
    }, 5000);

    return;
  }

  const imagesDiv = document.querySelector("#images");
  while (imagesDiv.firstChild) {
    imagesDiv.removeChild(imagesDiv.firstChild);
  }

  fetch(`https://dog.ceo/api/breed/${breed}/images/random/${numImages}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let output = "";
      data.message.forEach((imageURL) => {
        output += `<img src="${imageURL}">`;
        document.querySelector("#images").innerHTML = output;
      });
    });
}

document.querySelector("#dog-breeds").addEventListener("change", function () {
  const numImages = document.querySelector("#num-dogs").value;
  loadImages(this.value, numImages);
});

