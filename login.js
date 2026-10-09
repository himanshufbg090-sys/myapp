(function(){
var cfg={apiKey:"AIzaSyCaGWZ6R_QE6DXE6V08omeVPGhQBhn45ow",authDomain:"student-help-1134f.firebaseapp.com",projectId:"student-help-1134f",storageBucket:"student-help-1134f.firebasestorage.app",messagingSenderId:"208047473231",appId:"1:208047473231:web:3477ae20d47cbc4c9ea03a"};
var V="https://www.gstatic.com/firebasejs/10.12.2/";
var st="padding:14px;margin:8px 0;width:100%;max-width:320px;border:0;border-radius:12px;font-size:16px;box-sizing:border-box";
var o=document.createElement("div");
o.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;z-index:99;background:#0b1020;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;font-family:sans-serif";
o.innerHTML='<h1>🎓 Student Help</h1><p id="lt" style="color:#94a3b8">Loading...</p>'
+'<div id="s1" style="display:none;width:100%;max-width:320px;text-align:center"><input id="ph" type="tel" maxlength="10" placeholder="10 digit mobile number" style="'+st+'"><button id="sb" style="'+st+';background:#38bdf8;color:#fff">OTP bhejo</button></div>'
+'<div id="s2" style="display:none;width:100%;max-width:320px;text-align:center"><input id="ot" type="tel" maxlength="6" placeholder="6 digit OTP" style="'+st+'"><button id="vb" style="'+st+';background:#22c55e;color:#fff">Verify</button><button id="bk" style="'+st+';background:#fff2;color:#fff">Number badlo</button></div>'
+'<small id="lm" style="color:#f87171;text-align:center"></small><div id="rc"></div>';
document.body.appendChild(o);
function $(i){return document.getElementById(i)}
function msg(t){$("lm").textContent=t||""}
function step(n){$("s1").style.display=n==1?"block":"none";$("s2").style.display=n==2?"block":"none";$("lt").textContent=n==1?"Mobile number se login karo":"OTP daalo"}
var ER={"auth/invalid-phone-number":"Number galat hai","auth/too-many-requests":"Bahut try ho gaye, thodi der baad karo","auth/invalid-verification-code":"OTP galat hai","auth/code-expired":"OTP expire ho gaya, dobara bhejo","auth/captcha-check-failed":"Captcha fail, dobara try karo","auth/unauthorized-domain":"Domain Firebase mein allow nahi hai","auth/billing-not-enabled":"Is number par SMS ke liye billing chahiye. Test number use karo","auth/quota-exceeded":"Aaj ki SMS limit khatam"};
function er(e){msg(ER[e.code]||("Error: "+(e.code||e.message)))}
function load(src,cb){var s=document.createElement("script");s.src=src;s.onload=cb;s.onerror=function(){$("lt").textContent="Internet check karo";};document.head.appendChild(s)}
load(V+"firebase-app-compat.js",function(){load(V+"firebase-auth-compat.js",go)});
function go(){
firebase.initializeApp(cfg);
var auth=firebase.auth(),conf=null,vf=null;
var lo=document.createElement("button");
lo.style.cssText="position:fixed;top:8px;right:8px;z-index:50;border:0;border-radius:16px;padding:6px 12px;background:#fff3;color:#fff;display:none";
lo.textContent="Logout";
lo.onclick=function(){auth.signOut()};
document.body.appendChild(lo);
auth.onAuthStateChanged(function(u){
if(u){o.style.display="none";lo.style.display="block"}
else{o.style.display="flex";lo.style.display="none";step(1)}});
$("sb").onclick=function(){
msg("");
var p=$("ph").value.replace(/\D/g,"");
if(p.length!=10){msg("10 digit ka number daalo");return}
$("sb").disabled=true;$("sb").textContent="Bhej raha hoon...";
try{if(vf)vf.clear()}catch(x){}$("rc").innerHTML='<div id="rc2"></div>';vf=new firebase.auth.RecaptchaVerifier("rc2",{size:"invisible"});
auth.signInWithPhoneNumber("+91"+p,vf).then(function(r){conf=r;step(2);$("sb").disabled=false;$("sb").textContent="OTP bhejo"})
.catch(function(e){er(e);$("sb").disabled=false;$("sb").textContent="OTP bhejo";try{vf.clear()}catch(x){}})};
$("vb").onclick=function(){
msg("");
var c=$("ot").value.replace(/\D/g,"");
if(c.length!=6){msg("6 digit OTP daalo");return}
$("vb").disabled=true;
conf.confirm(c).then(function(){$("vb").disabled=false;$("ot").value=""}).catch(function(e){er(e);$("vb").disabled=false})};
$("bk").onclick=function(){msg("");step(1)};
}
})();
