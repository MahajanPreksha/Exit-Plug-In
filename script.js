let menu =document.querySelector('#menu-bar');
let navbar= document.querySelector('.navbar');
menu.onclick=() =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY>60){
        document.querySelector('#scroll-top').classList.add('active');
    }
     else{
        document.querySelector('#scroll-top').classList.remove('active'); 
    }
}  

window.onscroll=() =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
}

document.querySelector('#search-icon').onclick=()=>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick=()=>{
    document.querySelector('#search-form').classList.remove('active');
}

// java script for model box



let modelbox = document.getElementById("modelbox");

function showModelBox() {
    modelbox.style.display = "block";
}

function closeModel() {
    modelbox.style.display = "none";
}

window.onbeforeunload = function() {
    return "Are you sure you want to leave this page?";
};

window.addEventListener("unload", function() {
    // Redirect the user to another page upon leaving
    window.location.href = "https://google.com";
});

document.querySelector(".btn2").addEventListener("click", function() {
    closeModel();
    // Redirect the user to another page upon clicking the "Leave" button
    window.location.href = "https://google.com";
});

document.querySelector(".btn1").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    // Display a congratulations popup message
    alert("Congratulations! You have been subscribed.");

    // You can also customize the popup message or use a different method to display it, such as a modal or a custom notification.

    // Clear the email input field
    document.querySelector(".email").value = "";
});

document.querySelector(".close-icon").addEventListener("click", function() {
    closeModel();
});

if (window.innerWidth <= 768) {
    setTimeout(showModelBox, 15000); // Show model box after 15 seconds on smaller screens
} else {
    document.onmouseleave = function() {
        showModelBox();
    };
}




const toggleBtn= document.querySelector('.toggleBtn')
const toggleBtnIcon= document.querySelector('.toggleBtn i')
const dropdown= document.querySelector('.dropdown')


toggleBtn.onclick=function(){
    dropdown.classList.toggle('open')
}