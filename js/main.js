const branches=[
 {n:'Villalobos',a:'Calle Villalobos, Miraflores, La Paz',t:'',m:'Corban Coffee Calle Villalobos Miraflores La Paz',img:'img/interior.jpg'}
];
const menu={
 cafes:[['Espresso','Intenso y aromático',14],['Americano','Suave y largo',16],['Cappuccino','Espresso, leche y espuma',22],['Latte','Cremoso y delicado',22],['Mocaccino','Con chocolate',25],['Corban Special','Receta de la casa',28]],
 frios:[['Frappé de café','Con hielo y crema',28],['Cold Brew','Infusión en frío 12 h',24],['Limonada de menta','Refrescante',18],['Smoothie de frutas','De temporada',24]],
 comida:[['Croissant','Mantequilla o jamón y queso',18],['Sándwich Corban','Pollo, palta y tomate',32],['Cheesecake','Frutos rojos',26],['Brownie','Con helado',24]]
};
const $=s=>document.querySelector(s);
// sucursal
const box=$('#branches');
function renderBranches(){
 box.innerHTML=branches.map(b=>`<article class="branch">
 <div class="img"><img src="${b.img}" alt="Corban Coffee ${b.n}"></div>
 <div class="info"><h4>Sucursal ${b.n}</h4><p>${b.a}<br>Atendemos en la zona de Miraflores, cerca de hospitales, clínicas y universidades.</p>
 <a class="btn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/${encodeURIComponent(b.m)}">Abrir en Google Maps</a></div></article>`).join('');
}
renderBranches();
// menú
function renderMenu(k){
 $('#menuGrid').innerHTML=menu[k].map(i=>`<div class="item"><div><b>${i[0]}</b><small>${i[1]}</small></div><span>Bs ${i[2]}</span></div>`).join('');
}
$('#tabs').onclick=e=>{const b=e.target.closest('button');if(!b)return;
 document.querySelectorAll('#tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderMenu(b.dataset.tab)};
renderMenu('cafes');
// header / burger
const h=$('#header');addEventListener('scroll',()=>h.classList.toggle('solid',scrollY>60));
$('#burger').onclick=()=>$('#nav').classList.toggle('open');
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>$('#nav').classList.remove('open')));
// form
$('#contactForm').onsubmit=e=>{e.preventDefault();$('#formOk').hidden=false;e.target.reset()};
$('#year').textContent=new Date().getFullYear();
