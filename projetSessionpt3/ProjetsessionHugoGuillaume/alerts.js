const images = document.querySelectorAll("img"); 
images.forEach((images , index) => {
  images.addEventListener("mouseover", function () {
     alert("Check out this cool product!")
  });
});