const q=s=>document.querySelector(s), qa=s=>[...document.querySelectorAll(s)];
const menu=q('.menu-toggle'), links=q('.nav-links'); if(menu) menu.onclick=()=>links.classList.toggle('open');
qa('.nav-links a').forEach(a=>a.onclick=()=>links.classList.remove('open'));
const drawer=q('#cartDrawer'),scrim=q('#scrim'); function cart(open){drawer?.classList.toggle('open',open);scrim?.classList.toggle('show',open);drawer?.setAttribute('aria-hidden',String(!open))}
q('.cart-button')?.addEventListener('click',()=>cart(true));q('#closeCart')?.addEventListener('click',()=>cart(false));scrim?.addEventListener('click',()=>cart(false));
let items=[];qa('.add-cart').forEach(b=>b.addEventListener('click',()=>{items.push(b.dataset.product);q('#cartCount').textContent=items.length;q('#cartItems').innerHTML=items.map(x=>`<p>${x}</p>`).join('');cart(true)}));
q('#customForm')?.addEventListener('submit',e=>{e.preventDefault();q('#formNote').textContent='Looks good — the form is ready to connect to email or checkout when the business is ready.'});
