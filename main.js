document.getElementById('y').textContent=new Date().getFullYear();
const g=document.getElementById('project-grid');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
fetch('projects.json').then(r=>r.json()).then(list=>{g.innerHTML=list.map(p=>`<article class="card">${p.status?`<span class="tag">${esc(p.status)}</span>`:''}<h3>${esc(p.title)}</h3><p>${esc(p.description)}</p>${p.link?`<a href="${esc(p.link)}" rel="noopener">View →</a>`:''}</article>`).join('')}).catch(()=>{g.innerHTML='<p class="muted">Projects coming soon.</p>'});
