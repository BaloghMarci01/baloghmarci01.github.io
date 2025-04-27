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

  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.getElementById('mainImage');
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;

  let images = Array.from(thumbnails, img => img.src);

  function setActiveImage(index) {
    if (index === currentIndex) return;

    [images[currentIndex], images[index]] = [images[index], images[currentIndex]];

    updateImages();
  }

  function updateImages() {
    mainImage.src = images[currentIndex];
    thumbnails.forEach((thumb, i) => {
      thumb.src = images[i];
      thumb.classList.toggle('active', i === currentIndex);
    });
  }

  thumbnails.forEach((thumb, i) => {
    thumb.addEventListener('click', () => setActiveImage(i));
  });

  mainImage.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = images[currentIndex];
  });

  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });

  function navigate(dir) {
    currentIndex = (currentIndex + dir + images.length) % images.length;
    modalImage.src = images[currentIndex];
    updateImages();
  }

  prevBtn.addEventListener('click', () => navigate(-1));
  nextBtn.addEventListener('click', () => navigate(1));

  document.getElementById('book').onclick = function() {
    window.location.href = 'foglalas.html';
  };