
const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".primary-nav");
if(menuButton&&nav){
  menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));});
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");}));
}
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());

const revealItems=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}});
  },{threshold:.12});
  revealItems.forEach(item=>observer.observe(item));
}else{revealItems.forEach(item=>item.classList.add("visible"));}

const form=document.querySelector(".premium-form");
const status=document.querySelector(".form-status");
if(form){
  form.addEventListener("submit",async event=>{
    const action=form.getAttribute("action")||"";
    event.preventDefault();
    if(action.includes("REPLACE_WITH_FORM_ID")){
      status.textContent="The form is ready, but it still needs your Formspree form ID before publication.";
      status.scrollIntoView({behavior:"smooth",block:"nearest"});
      return;
    }
    status.textContent="Sending…";
    try{
      const response=await fetch(action,{method:"POST",body:new FormData(form),headers:{Accept:"application/json"}});
      if(response.ok){form.reset();status.textContent="Thank you. Your manuscript inquiry has been sent.";}
      else{status.textContent="The form could not be sent. Please review the fields and try again.";}
    }catch(error){status.textContent="The form could not be sent. Please check your connection and try again.";}
  });
}
