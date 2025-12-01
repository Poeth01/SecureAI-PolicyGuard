/* ================================
   BYLICKILABS – Protection Script
   Version: 1.0
   ================================= */
(() => {
  'use strict';

  const html = document.documentElement;
  const blackout = document.getElementById('blackout');

  const isEditable = (el) => {
    if (!el) return false;
    if (el.isContentEditable) return true;
    const tag = el.tagName?.toLowerCase();
    if (['input','textarea','select'].includes(tag)) return true;
    if (el.getAttribute?.('role') === 'textbox') return true;
    return false;
  };

  const showBlackout = () => blackout?.classList.add('show');
  const hideBlackout = () => blackout?.classList.remove('show');



  // Contextmenu + Selection + Clipboard + Drag
  document.addEventListener('contextmenu', (e) => { if(!isEditable(e.target)){e.preventDefault();} }, {capture:true});
  document.addEventListener('selectstart', (e) => { if(!isEditable(e.target)){e.preventDefault();} }, {capture:true});
  ['copy','cut','paste'].forEach(evt => document.addEventListener(evt, e => { if(!isEditable(e.target)){e.preventDefault();} }, {capture:true}));
  document.addEventListener('dragstart', (e) => { if(!isEditable(e.target)){e.preventDefault();} }, {capture:true});



  // Hotkeys
  const blocked = new Set(['a','c','v','x','s','u','p','i','j']);
  document.addEventListener('keydown', (e) => {
    const k = (e.key||'').toLowerCase();
    if ((e.ctrlKey||e.metaKey) && blocked.has(k) && !isEditable(e.target)) { e.preventDefault(); }
    if (k === 'f12' && !isEditable(e.target)) { e.preventDefault(); }
  }, {capture:true});



  // Anti-Print
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey||e.metaKey) && (e.key||'').toLowerCase() === 'p' && !isEditable(e.target)) { e.preventDefault(); }
  }, {capture:true});
  window.addEventListener('beforeprint', () => { html.classList.add('no-print'); });
  window.addEventListener('afterprint', () => { html.classList.remove('no-print'); });



  // Visibility / Focus
  const enableBlur = () => html.classList.add('sensitive-blur');
  const disableBlur = () => html.classList.remove('sensitive-blur');
  window.addEventListener('blur', enableBlur);
  window.addEventListener('focus', disableBlur);
  document.addEventListener('visibilitychange', () => {
    if(document.hidden){ enableBlur(); showBlackout(); setTimeout(hideBlackout,5000); } else { disableBlur(); hideBlackout(); }
  });
  blackout?.addEventListener('click', hideBlackout);



  // PrintScreen Heuristic
  ['keydown','keyup'].forEach(evt => {
    document.addEventListener(evt, (e) => {
      const k=(e.key||'').toLowerCase();
      if(k==='printscr'||e.keyCode===44||e.code==='PrintScreen'){ e.preventDefault?.(); showBlackout(); setTimeout(hideBlackout,5000); }
    },{capture:true});
  });



  // Watermark aktivieren
  html.classList.add('wm-overlay');

})();



document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
	  //alert("\n🔒 Wirklich?\n\nUnbefugte Versuche sind zwecklos – Sicherheit hat Priorität.\n\nAber...\nEin Versuch war es ja wert 😂 \n\n\n©FullStackHero | 22.08.2025 |");
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'F12') {
    e.preventDefault();
	  //alert("\n🔒 Wirklich?\n\nUnbefugte Versuche sind zwecklos – Sicherheit hat Priorität.\n\nAber...\nEin Versuch war es ja wert 😂 \n\n\n©FullStackHero | 22.08.2025 |");
  }

  if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) {
    e.preventDefault();
	  //alert("\n🔒 Wirklich?\n\nUnbefugte Versuche sind zwecklos – Sicherheit hat Priorität.\n\nAber...\nEin Versuch war es ja wert 😂 \n\n\n©FullStackHero | 22.08.2025 |");
  }

  if (e.ctrlKey && e.key.toLowerCase() === 'u') {
    e.preventDefault();
	  //alert("\n🔒 Wirklich?\n\nUnbefugte Versuche sind zwecklos – Sicherheit hat Priorität.\n\nAber...\nEin Versuch war es ja wert 😂 \n\n\n©FullStackHero | 22.08.2025 |");
  }

  if (e.ctrlKey && e.key.toLowerCase() === 's') {
    e.preventDefault();
	  //alert("\n🔒 Wirklich?\n\nUnbefugte Versuche sind zwecklos – Sicherheit hat Priorität.\n\nAber...\nEin Versuch war es ja wert 😂 \n\n\n©FullStackHero | 22.08.2025 |");
  }
});

(function () {
  let opened = false;

  function devtoolsDetected() {
    if (!opened) {
      opened = true;
	  //alert("\n🔒 Wirklich?\n\nUnbefugte Versuche sind zwecklos – Sicherheit hat Priorität.\n\nAber...\nEin Versuch war es ja wert 😂 \n\n\n©FullStackHero | 22.08.2025 |");

    }
  }



  function detectDevTools() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
      get: function () {
        devtoolsDetected();
      }
    });
    console.log(element);
  }

  function loopDetection() {
    const threshold = 160;
    let start = new Date();
    debugger;
    let end = new Date();
    if (end - start > threshold) {
      devtoolsDetected();
    }
  }

  setInterval(() => {
    detectDevTools();
    loopDetection();
  }, 1000);
})();