const burger = document.getElementById('burger');
  const panel = document.getElementById('mobilePanel');
  const scrim = document.getElementById('scrim');
  function toggleMenu(){
    burger.classList.toggle('open');
    panel.classList.toggle('open');
    scrim.classList.toggle('open');
  }
  burger.addEventListener('click', toggleMenu);
  scrim.addEventListener('click', toggleMenu);
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', toggleMenu));
