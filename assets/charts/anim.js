window.addEventListener('load', function() {
    var animatedBackground = document.getElementById('animatedBackground');
    animatedBackground.style.animation = 'refreshAnimation 2s linear';
  
    var iterationCount = 0;
    animatedBackground.addEventListener('animationiteration', function() {
      iterationCount++;
      if (iterationCount === 1) {
        animatedBackground.style.animationPlayState = 'paused';
      }
    });
  
    // Trigger the animation on page refresh
    if (performance.navigation.type === 1) {
      animatedBackground.style.animationPlayState = 'running';
    }
  });
  