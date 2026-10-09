(function(){
var u=null;try{u=localStorage.getItem("user")}catch(e){}
var st="padding:14px;margin:8px 0;width:100%;max-width:320px;border:0;border-radius:12px;font-size:16px;box-sizing:border-box";
if(u){
var l=document.createElement("button");
l.textContent="Logout";
l.style.cssText="position:fixed;top:8px;right:8px;z-index:50;border:0;border-radius:16px;padding:6px 12px;background:#fff3;color:#fff";
l.onclick=function(){try{localStorage.removeItem("user")}catch(e){}location.reload()};
document.body.appendChild(l);
return}
var o=document.createElement("div");
o.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;z-index:99;background:#0b1020;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;font-family:sans-serif";
o.innerHTML='<h1>🎓 Student Help</h1><p style="color:#94a3b8">Pehle login karo</p><input id="ln" placeholder="Aapka naam" style="'+st+'"><input id="le" placeholder="Email ya mobile number" style="'+st+'"><button id="lb" style="'+st+';background:#38bdf8;color:#fff">Login</button><small id="lm" style="color:#f87171"></small>';
document.body.appendChild(o);
document.getElementById("lb").onclick=function(){
var n=document.getElementById("ln").value.trim();
var e=document.getElementById("le").value.trim();
if(n.length<2||e.length<5){document.getElementById("lm").textContent="Naam aur email/mobile sahi bharo";return}
try{localStorage.setItem("user",JSON.stringify({n:n,e:e}))}catch(x){}
location.reload()};
})();
