const dodger = document.getElementById('dodger');

// Set initial position if not already set
if (!dodger.style.left) {
  dodger.style.left = '0px';
}

function moveDodgerLeft() {
  let left = parseInt(dodger.style.left);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let left = parseInt(dodger.style.left);
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

