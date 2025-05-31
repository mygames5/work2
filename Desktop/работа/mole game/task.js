(() => {
  let dead = 0;
  let lost = 0;

  function getHole(index) {
    return document.getElementById(`hole${index}`);
  }

  for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
      if (this.classList.contains('hole_has-mole')) {
        dead++;
        document.getElementById('dead').textContent = dead;
        this.classList.remove('hole_has-mole');
      } else {
        lost++;
        document.getElementById('lost').textContent = lost;
      }

      if (dead >= 10) {
        alert('Победа! Убито 10 кротов.');
        dead = 0;
        lost = 0;
        document.getElementById('dead').textContent = dead;
        document.getElementById('lost').textContent = lost;
      }

      if (lost >= 5) {
        alert('Игра окончена! Слишком много промахов.');
        dead = 0;
        lost = 0;
        document.getElementById('dead').textContent = dead;
        document.getElementById('lost').textContent = lost;
      }
    }
  }
})();
