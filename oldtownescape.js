  const toggleBtn = document.querySelector('.toggle_btn');
  const toggleBtnIcon = document.querySelector('.toggle_btn i');
  const dropDown = document.querySelector('.dropdown');

  toggleBtn.onclick = function () {
      dropDown.classList.toggle('open');
      const isOpen = dropDown.classList.contains('open');

      toggleBtnIcon.classList = isOpen
      ? 'bx bx-x'
      : 'bx bx-menu'
  }

  let angle = 0;
    const color1 = '#ffa500';
    const color2 = '#FFE4B5';

  function updateGradient() {
    document.body.style.backgroundImage =
      `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    angle = (angle + 1) % 360;
    requestAnimationFrame(updateGradient);
  }

  updateGradient();

  document.getElementById('hero-cta').onclick = function() {
    window.location.href = 'foglalas.html';
  };

  document.getElementById('cta').onclick = function() {
    window.location.href = 'foglalas.html';
  };

  const items = document.querySelectorAll('.item');
  let current = 0;
  const intervalTime = 4000;
  
  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }
  
  function nextSlide() {
    current = (current + 1) % items.length;
    showSlide(current);
  }
  
  showSlide(current);
  setInterval(nextSlide, intervalTime);


  const viewingButtons = document.querySelectorAll('#viewing');

  viewingButtons.forEach(function(button) {
    button.onclick = function() {
      window.location.href = 'szallas.html';
    };
  });
  