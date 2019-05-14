let panels = document.querySelectorAll('.panel');

for (let i = 0; i < 3; i++) {if (window.CP.shouldStopExecution(0)) break;
  let base = 150;
  let duration = 1000;
  let delay = base + duration * i;
  let panel = panels[i];
  setTimeout(() => panel.classList.add('hover'), delay);
  setTimeout(() => panel.classList.remove('hover'), delay + duration * 0.8);
}window.CP.exitedLoop(0);

if (location.href.includes('fullcpgrid')) {
  document.body.style.fontSize = '11px';
}
