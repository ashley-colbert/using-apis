
//this creates an event listener that waits for the button with the class btn to be clicked then loads the function loadAPI 

document.querySelector(".btn").addEventListener("click", loadAPI);

//this is the loadAPI function that uses the event listener above to load the breeds from the api listed into an option element in coded in teh index.html page.

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

//this loadImages function that takes the breed and numImages perameters and loads the images to a div with the id images in the index.html page. 

function loadImages(breed, numImages) {
  // The if statement in the beginning creates and error message if you input a number less than 1 or greater than 100. 
  if (numImages < 1 || numImages > 100) {
    errorMessage.innerHTML = "Please enter a number between 1-100";
    setTimeout(() => {
      errorMessage.innerHTML = "";
    }, 5000);
    return;
  }
  const imagesDiv = document.querySelector("#images");
  // The while replaces the contends of the images div each time a new dog is selected. 
  while (imagesDiv.firstChild) {
    imagesDiv.removeChild(imagesDiv.firstChild);
  }

  // this will fetch the picture located at the api listed, it identifies the breeds from the option element on the index.html page, adds the breed variable that is defined in the loadAPI function, and the numImages is added at the end.  This variable is defined below in the change event listener to determine how many pictures of each breed will be loaded.

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

    //this event listener takes the number of images the user requests on the index.html page and creates a numImages variable which is then added to the fetch request above and determines how many pictures will be added to the webpage. 

    document.querySelector("#dog-breeds").addEventListener("change", function () {
        const numImages = document.querySelector("#num-dogs").value;
        loadImages(this.value, numImages);
      });
    });
}



