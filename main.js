
var $car = document.querySelector('.car');

window.addEventListener('keydown', handleInput);

function handleInput(event) {
  if (!event.key.includes('Arrow') && event.code !== 'Space') return;

  if (event.key.includes('Arrow')) rotateCar(event.key);
}

function rotateCar(dir) {
  if (dir.includes('Up')) $car.className = 'car turn-north';
  else if (dir.includes('Down')) $car.className = 'car turn-south';
  else if (dir.includes('Left')) $car.className = 'car turn-left';
  else $car.className = 'car turn-right';
}
