let Nav = document.getElementById('navbarSupportedContent');
let Menu_Button = document.querySelector('.menu_button');
let Remove_Nav_Class = document.querySelector('.remove_nav_class');
let Body = document.querySelector('.div');

let ImgSize = document.querySelector('.Img_size_area');

Menu_Button.addEventListener('click', () => {
  Nav.classList.add('add_nav');
  console.log("HI");
});

Remove_Nav_Class.addEventListener('click', () => {
  Nav.classList.remove('add_nav');
  
});

ImgSize
// console.log(Body);
ImgSize.addEventListener('resize', () => {

})

