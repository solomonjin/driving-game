/* global data */

var $car = document.querySelector('.car');

window.addEventListener('keydown', handleInput);

function handleInput(event) {
  if (!event.key.includes('Arrow') && event.code !== 'Space') return;

  if (event.key.includes('Arrow')) rotateCar(event.key);
  else if (!data.inMotion && event.code === 'Space') {
    data.intervalID = setInterval(moveCar, 16);
    data.inMotion = true;
  } else if (data.inMotion && event.code === 'Space') {
    clearInterval(data.intervalID);
    data.inMotion = false;
  }
}

function rotateCar(dir) {
  if (dir.includes('Up')) {
    $car.className = 'car turn-north';
    data.direction = 'up';
  } else if (dir.includes('Down')) {
    $car.className = 'car turn-south';
    data.direction = 'down';
  } else if (dir.includes('Left')) {
    $car.className = 'car turn-left';
    data.direction = 'left';
  } else {
    $car.className = 'car turn-right';
    data.direction = 'right';
  }
}

function moveCar(dir) {
  if (data.direction === 'right') {
    data.location.x += 5;
    $car.style.left = data.location.x + 'px';
  }
}
