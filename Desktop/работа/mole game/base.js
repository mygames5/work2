(() => {
  let playing = true;
  let activeHole = 1;

  const getHole = index => document.getElementById(`hole${index}`);
  const deactivateHole = index => getHole(index).className = 'hole';
  const activateHole = index => getHole(index).className = 'hole hole_has-mole';

  function next() {
    if (!playing) return;
    deactivateHole(activeHole);
    activeHole = Math.floor(1 + Math.random() * 9);
    activateHole(activeHole);
    setTimeout(next, 800);
  }

  next();
})();
