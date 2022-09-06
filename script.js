const img = document.querySelector('.main-img img');
const toggleBtn = document.querySelector('.toggle');
const toggleText = document.querySelectorAll('.toggle-text');

/* Toggle variable */
let bool = true;

toggleBtn.addEventListener('click', () => {
   /* changes image and text content with toggle variable */
   if (bool === true) {
      /* changes image into light */
      img.src = "/images/cup-light.png";
      /* changes text content */
      toggleText.forEach(text => {
         text.innerText = "White ";
      });
      
      bool = false;
   } else {
      /* Changes image into dark */
      img.src = "/images/cup-dark.png";
      /* Changes text content */
      toggleText.forEach(text => {
         text.innerText = "Blvck ";
      });
      bool = true;
   }
   /* Toggles Theme */
   document.body.classList.toggle('light-theme');
   toggleBtn.firstElementChild.classList.toggle('fa-sun');
})