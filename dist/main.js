(()=>{"use strict";let t=[],e=0;function n(t,n,l){this.title=t,this.description=n,this.id=e,this.tasks=l}let l=document.getElementById("projectsContainer");document.getElementById("projectSubmitBtn").addEventListener("click",(()=>{(function(l){l.preventDefault();let i=new n(titleInput.value,descInput.value,[]);e++,t.push(i),formContainer.style.display="",titleInput.value="",descInput.value="",console.log(t[0],t[1],t[2])})(event),function(){let n=document.createElement("div"),i=e-1;n.textContent=t[t.length-1].title,n.className="project",n.setAttribute("data-id",i),n.addEventListener("click",(()=>function(e){document.getElementById("nameDisplay").textContent=t[e].title}(i))),l.append(n)}()})),document.getElementById("projectBtn").addEventListener("click",(()=>function(){const t=document.getElementById("formContainer");""==t.style.display?t.style.display="flex":"flex"==t.style.display&&(t.style.display="")}()))})();