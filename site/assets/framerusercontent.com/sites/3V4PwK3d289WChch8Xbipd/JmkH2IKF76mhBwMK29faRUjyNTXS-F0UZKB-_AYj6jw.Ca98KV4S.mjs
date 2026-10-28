import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";async function t(e,t,i){let a=r[e],o=a?await a(t,i):void 0,s={bodyEnd:[],bodyStart:[],headEnd:[],headStart:[]};for(let t of n){if(t.pageIds&&!t.pageIds.has(e))continue;let n=t.code(o);n&&s[t.placement].push({...t,code:n})}return s}var n,r,i,a;e((()=>{n=[{code:e=>`<script>
const EMOJIS = [
  "𓋹","𓂀","𓆣","𓇳","𓊽","𓆙","𓅓","𓁹","𓃭","𓅱","🇪🇬",
  "𓋹","𓂀","𓆣","𓇳","𓊽","𓆙","𓅓","𓁹","𓃭","𓅱","🇪🇬",
  "𓋹","𓂀","𓆣","𓇳","𓊽","𓆙","𓅓","𓁹","𓃭","𓅱","🇪🇬",
  "𓋹","𓂀","𓆣","𓇳","𓊽","𓆙","𓅓","𓁹","𓃭","𓅱","🇪🇬",
  "𓋹","𓂀","𓆣","𓇳","𓊽","𓆙","𓅓","𓁹","𓃭","𓅱","🇪🇬",
  "𓋹","𓂀","𓆣","𓇳","𓊽","𓆙","𓅓","𓁹","𓃭","𓅱","🇪🇬",
  "𓀀","𓀁","𓀂","𓀃","𓀄","𓀅","𓀆","𓀇","𓀈","𓀉",
  "𓀊","𓀋","𓀌","𓀍","𓀎","𓀏","𓀐","𓀑","𓀒","𓀓",
  "𓀔","𓀕","𓀖","𓀗","𓀘","𓀙","𓀚","𓀛","𓀜","𓀝",
  "𓀞","𓀟","𓀠","𓀡","𓀢","𓀣","𓀤","𓀥","𓀦","𓀧",
  "𓀨","𓀩","𓀪","𓀫","𓀬","𓀭","𓀮","𓀯","𓀰","𓀱",
  "𓀲","𓀳","𓀴","𓀵","𓀶","𓀷","𓀸","𓀹","𓀺","𓀻",
  "𓀼","𓀽","𓀾","𓀿","𓁀","𓁁","𓁂","𓁃","𓁄","𓁅",
  "𓁆","𓁇","𓁈","𓁉","𓁊","𓁋","𓁌","𓁍","𓁎","𓁏",
  "𓁐","𓁑","𓁒","𓁓","𓁔","𓁕","𓁖","𓁗","𓁘","𓁙",
  "𓋹","𓂀","𓆣","𓊽","𓆙","𓅓","𓁹","𓃭","𓅱",
  "𓁚","𓁛","𓁜","𓁝","𓁞","𓁟","𓁠","𓁡","𓁢","𓁣",
  "𓋹","𓂀","𓆣","𓆙","𓅓","𓁹","𓃭","𓅱",
  "𓁤","𓁥","𓁦","𓁧","𓁨","𓁩","𓁪","𓁫","𓁬","𓁭",
  "𓁮","𓁯","𓁰","𓁱","𓁲","𓁳","𓁴","𓁵","𓁶","𓁷",
  "𓁸","𓁹","𓁺","𓁻","𓁼","𓁽","𓁾","𓁿","𓂁","𓂂",
  "𓂃","𓂄","𓂅","𓂆","𓂇","𓂈","𓂉","𓂊","𓂋","𓂌",
  "𓂍","𓂎","𓂏","𓂐","𓂑","𓂒","𓂓","𓂔","𓂕","𓂖",
  "𓋹","𓂀","𓆣","𓆙","𓅓","𓁹","𓃭","𓅱",
  "𓂗","𓂘","𓂙","𓂚","𓂛","𓂜","𓂝","𓂞","𓂟","𓂠",
  "𓂡","𓂢","𓂣","𓂤","𓂥","𓂦","𓂧","𓂨","𓂩","𓂪",
  "𓂫","𓂬","𓂭","𓂮","𓂯","𓂰","𓂱","𓂲","𓂳","𓂴",
  "𓂵","𓂶","𓂷","𓂸","𓂹","𓂺","𓂻","𓂼","𓂽","𓂾",
  "𓂿","𓃀","𓃁","𓃂","𓃃","𓃄","𓃅","𓃆","𓃇","𓃈",
  "𓃉","𓃊","𓃋","𓃌","𓃍","𓃎","𓃏","𓃐","𓃑","𓃒",
  "𓃓","𓃔","𓃕","𓃖","𓃗","𓃘","𓃙","𓃚","𓃛","𓃜",
  "𓃝","𓃞","𓃟","𓃠","𓃡","𓃢","𓃣","𓃤","𓃥","𓃦",
  "𓋹","𓂀","𓆣","𓇳","𓊽","𓆙","𓅓","𓁹","𓃭","𓅱","🇪🇬",
  "𓃧","𓃨","𓃩","𓃪","𓃫","𓃬","𓃭","𓃮","𓃯","𓃰",
  "𓃱","𓃲","𓃳","𓃴","𓃵","𓃶","𓃷","𓃸","𓃹","𓃺",
  "𓃻","𓃼","𓃽","𓃾","𓃿","𓄀","𓄁","𓄂","𓄃","𓄄",
  "𓄅","𓄆","𓄇","𓄈","𓄉","𓄊","𓄋","𓄌","𓄍","𓄎",
  "𓋹","𓂀","𓆣","𓇳","𓊽","𓆙","𓅓","𓁹","𓃭","𓅱",
  "𓄏","𓄐","𓄑","𓄒","𓄓","𓄔","𓄕","𓄖","𓄗","𓄘",
  "𓄙","𓄚","𓄛","𓄜","𓄝","𓄞","𓄟","𓄠","𓄡","𓄢",
  "𓄣","𓄤","𓄥","𓄦","𓄧","𓄨","𓄩","𓄪","𓄫"
]
const LINGER = 600
const BLUR_DURATION = 200
const randomEmoji = () => EMOJIS[Math.floor(Math.random() * EMOJIS.length)]

function initEmojiScramble(el) {
  if (el.dataset.scrambleInit) return
  el.dataset.scrambleInit = "true"

  const cs = getComputedStyle(el)
  let lh = cs.lineHeight
  if (lh === "normal") lh = parseFloat(cs.fontSize) * 1.2 + "px"

  el.style.minHeight = el.offsetHeight + "px"

  const wrapChar = ch => \`<span data-orig="\${ch}" style="display:inline-block;line-height:\${lh};transition:filter .2s ease,opacity .2s ease,font-size .2s ease;">\${ch}</span>\`

  const wrapText = txt => txt.split(/(\\s+)/).map(p => {
    if (p === "") return ""
    if (/^\\s+$/.test(p)) return p
    return \`<span style="display:inline-block;white-space:nowrap">\${[...p].map(wrapChar).join("")}</span>\`
  }).join("")

  el.innerHTML = [...el.childNodes].map(n => {
    if (n.nodeType === 3) return wrapText(n.textContent)
    if (n.nodeName === "BR") return "<br>"
    return n.outerHTML || ""
  }).join("")

  el.querySelectorAll("[data-orig]").forEach(s => {
    let iv, lt, bt, sc = false

    const start = () => {
      clearTimeout(bt)
      if (sc) return
      s.style.filter = "blur(6px)"
      s.style.opacity = "0.4"
      bt = setTimeout(() => {
        s.textContent = randomEmoji()
        s.style.filter = "blur(0px)"
        s.style.opacity = "1"
        s.style.fontSize = "0.72em"
        sc = true
        iv = setInterval(() => { s.textContent = randomEmoji() }, 120)
      }, BLUR_DURATION)
    }

    const stop = () => {
      clearInterval(iv)
      iv = null
      sc = false
      s.style.filter = "blur(6px)"
      s.style.opacity = "0.4"
      bt = setTimeout(() => {
        s.textContent = s.dataset.orig
        s.style.filter = "blur(0px)"
        s.style.opacity = "1"
        s.style.fontSize = "1em"
      }, BLUR_DURATION)
    }

    s.addEventListener("mouseenter", () => { clearTimeout(lt); lt = null; start() })
    s.addEventListener("mouseleave", () => { lt = setTimeout(stop, LINGER) })
  })
}

const initAll = () => document.querySelectorAll("h1").forEach(initEmojiScramble)

const boot = () => {
  initAll()
  new MutationObserver(initAll).observe(document.body, { childList: true, subtree: true })
}

if (document.body) boot()
else document.addEventListener("DOMContentLoaded", boot)
<\/script>`,id:`ZqpbHA641`,loadMode:`always`,name:`H1 animation`,placement:`bodyEnd`},{code:e=>`<script>
(function(){
var F="'Noto Sans Egyptian Hieroglyphics',serif";
var S=["𓋹","𓂀","𓆣","𓇳","𓊽","𓆙","𓅓","𓁹","𓃭","𓅱"];
var C=["#C8960C","#E8B84B","#F0C040","#D4A017","#B8860B","#DAA520","#FFD700","#F5C518","#A0522D","#CD853F","#8B6914","#BFA06A"];
var cv=document.createElement("canvas");
Object.assign(cv.style,{position:"fixed",inset:"0",width:"100vw",height:"100vh",pointerEvents:"none",zIndex:"99999"});
document.body.appendChild(cv);
var cx=cv.getContext("2d");
function rsz(){cv.width=innerWidth;cv.height=innerHeight;}
rsz();addEventListener("resize",rsz);
var pts=[],dn=false,mx=0,my=0,fr=0,lt,uid=0;
var rc=()=>C[Math.random()*C.length|0];
var rs=()=>S[Math.random()*S.length|0];
function burst(x,y,n){
  for(var i=0;i<n;i++){
    var a=(Math.PI*2*i/n)+(Math.random()-.5)*.7,d=18+Math.random()*28,ch=rs();
    pts.push({id:uid++,x,y,dx:Math.cos(a)*d,dy:Math.sin(a)*d-10,col:rc(),sz:16+Math.random()*14,rot:(Math.random()-.5)*40,born:performance.now(),dur:550+Math.random()*300,k:"b",ch,fl:ch==="🇪🇬"});
  }
}
function center(x,y){
  var ch=rs();
  pts.push({id:uid++,x,y,dx:0,dy:0,col:rc(),sz:28+Math.random()*10,rot:0,born:performance.now(),dur:520,k:"c",ch,fl:ch==="🇪🇬"});
}
function draw(p,sx,sy,ds,al){
  cx.save();cx.globalAlpha=Math.max(0,al);cx.translate(sx,sy);cx.rotate(p.rot*Math.PI/180);
  cx.shadowBlur=0;cx.shadowColor="transparent";
  if(p.fl){
    var w=ds*1.5,h=ds,x0=-w/2,y0=-h/2,s=h/3;
    cx.fillStyle="#CE1126";cx.fillRect(x0,y0,w,s);
    cx.fillStyle="#fff";cx.fillRect(x0,y0+s,w,s);
    cx.fillStyle="#000";cx.fillRect(x0,y0+s*2,w,s);
    cx.fillStyle="#C09000";cx.beginPath();cx.arc(0,0,s*.28,0,Math.PI*2);cx.fill();
    cx.strokeStyle="rgba(0,0,0,.25)";cx.lineWidth=.5;cx.strokeRect(x0,y0,w,h);
  }else{
    cx.font=ds+"px "+F;cx.fillStyle=p.col;cx.textAlign="center";cx.textBaseline="middle";
    cx.shadowColor="rgba(200,150,0,.5)";cx.shadowBlur=4;cx.fillText(p.ch,0,0);
  }
  cx.restore();
}
function tick(){
  var now=performance.now();cx.clearRect(0,0,cv.width,cv.height);
  for(var i=pts.length-1;i>=0;i--){
    var p=pts[i],t=(now-p.born)/p.dur;
    if(t>=1){pts.splice(i,1);continue;}
    var sx,sy,sc,al;
    if(p.k==="c"){
      sx=p.x;sy=p.y;sc=t<.35?(t/.35)*1.4:1.4-((t-.35)/.65)*.9;al=t<.6?1:1-(t-.6)/.4;
    }else{
      sx=p.x+p.dx*t;sy=p.y+p.dy*t;
      sc=t<.25?(t/.25)*1.2:t<.7?1.2-((t-.25)/.45)*.25:.95-((t-.7)/.3)*.65;
      al=t<.7?1:1-(t-.7)/.3;p.rot+=.4;
    }
    draw(p,sx,sy,p.sz*sc,al);
  }
  requestAnimationFrame(tick);
}
function loop(){
  if(!dn)return;fr++;burst(mx,my,4);
  if(fr%4===0)center(mx,my);lt=setTimeout(loop,80);
}
function start(x,y){mx=x;my=y;if(dn)return;dn=true;fr=0;center(x,y);loop();}
function move(x,y){mx=x;my=y;}
function stop(){dn=false;clearTimeout(lt);}
document.fonts.ready.then(()=>requestAnimationFrame(tick));
addEventListener("mousedown",e=>start(e.clientX,e.clientY));
addEventListener("mousemove",e=>{if(dn)move(e.clientX,e.clientY);});
addEventListener("mouseup",stop);
addEventListener("touchstart",e=>{var t=e.touches[0];start(t.clientX,t.clientY);},{passive:true});
addEventListener("touchmove",e=>{var t=e.touches[0];move(t.clientX,t.clientY);},{passive:true});
addEventListener("touchend",stop);
})();
<\/script>`,id:`xi38LDKpH`,loadMode:`always`,name:`Mouse Hit Effect`,placement:`bodyEnd`}],r={},i={bodyEnd:[`ZqpbHA641`,`x0otPHmmz`,`fNThRNeqZ`,`xi38LDKpH`,`f6yWtIaNu`],bodyStart:[],headEnd:[`uvHT7t5At`],headStart:[]},a={exports:{getSnippets:{type:`function`,annotations:{framerContractVersion:`1`}},snippetsSorting:{type:`variable`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{a as __FramerMetadata__,t as getSnippets,i as snippetsSorting};
//# sourceMappingURL=JmkH2IKF76mhBwMK29faRUjyNTXS-F0UZKB-_AYj6jw.Ca98KV4S.mjs.map