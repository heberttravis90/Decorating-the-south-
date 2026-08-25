const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('show');menuToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('show')));

const cart=[];
const cartDrawer=document.getElementById('cartDrawer');
const scrim=document.getElementById('scrim');
const cartCount=document.getElementById('cartCount');
const cartItems=document.getElementById('cartItems');
function renderCart(){cartCount.textContent=cart.length;cartItems.innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-item"><span>${p}</span><button onclick="removeItem(${i})">Remove</button></div>`).join(''):'<p>Your bag is empty.</p>';}
window.removeItem=i=>{cart.splice(i,1);renderCart();};
function openCart(){cartDrawer.classList.add('open');scrim.classList.add('show');cartDrawer.setAttribute('aria-hidden','false');}
function closeCart(){cartDrawer.classList.remove('open');scrim.classList.remove('show');cartDrawer.setAttribute('aria-hidden','true');}
document.querySelector('.cart-button').addEventListener('click',openCart);
document.getElementById('closeCart').addEventListener('click',closeCart);scrim.addEventListener('click',closeCart);
document.querySelectorAll('.add-cart').forEach(btn=>btn.addEventListener('click',()=>{cart.push(btn.dataset.product);renderCart();openCart();}));

document.getElementById('customForm').addEventListener('submit',e=>{e.preventDefault();const note=document.getElementById('formNote');note.textContent='Request captured for the demo. Next step is connecting this to her real email/order system.';note.style.color='#223128';note.style.fontWeight='700';});
