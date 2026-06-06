const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

reveals.forEach(element => {

const top = element.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

element.classList.add("active");

}

});

});

const form = document.getElementById("orderForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const phone =
document.getElementById("phone").value;

const kota =
document.getElementById("kota").value;

const quantity =
document.getElementById("quantity").value;

const message =
`Hi Midrand Kota Joint I'd like to make an order.

Name: ${name}
Phone: ${phone}
Order: ${quantity} x ${kota}`;

window.open(
`https://wa.me/27765252631?text=${encodeURIComponent(message)}`
);

});

}
function orderItem(item, price){

   const whatsappNumber = "27765252631";

document.querySelectorAll(".order-btn").forEach(button => {
    button.addEventListener("click", () => {

        const item = button.dataset.item;
        const price = button.dataset.price;

        const message =
`Hi Midrand Kota Joint I'd like to make an order.

Item: ${item}
Price: ${price}`;

        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    });
});
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuToggle && navLinks){
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
