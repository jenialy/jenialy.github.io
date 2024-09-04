let alicePoints = 0;
let jamesPoints = 0;
const resetThreshold = 50;
const positiveSound = document.getElementById('positive-sound');
const negativeSound = document.getElementById('negative-sound');

function updatePoints(child, value) {
  if (child === 'alice') {
    alicePoints += value;
    document.getElementById('alice-points').textContent = alicePoints;
  } else if (child === 'james') {
    jamesPoints += value;
    document.getElementById('james-points').textContent = jamesPoints;
  }

  if (value > 0) {
    positiveSound.play();
  } else if (value < 0) {
    negativeSound.play();
  }

  checkReset();
}

function checkReset() {
  if (alicePoints >= resetThreshold || jamesPoints >= resetThreshold) {
    alicePoints = 0;
    jamesPoints = 0;
    document.getElementById('alice-points').textContent = alicePoints;
    document.getElementById('james-points').textContent = jamesPoints;
    document.getElementById('reset-info').textContent = 'Points have been reset.';
  } else {
    document.getElementById('reset-info').textContent = '';
  }
}