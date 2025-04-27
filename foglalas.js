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

  document.addEventListener('DOMContentLoaded', function () {
      const popup = document.getElementById('popup');
      const form = document.getElementById('booking-form');
      const closeBtn = document.getElementById('close-popup');
      const checkinInput = document.getElementById('checkin');
      const checkoutInput = document.getElementById('checkout');
      const errorMsg = document.getElementById('error-msg');
  
      checkinInput.addEventListener('change', function () {
        const checkinDate = new Date(checkinInput.value);
  
        if (checkinInput.value) {
          const nextDay = new Date(checkinDate);
          nextDay.setDate(checkinDate.getDate() + 1);
          const nextDayISO = nextDay.toISOString().split('T')[0];
          checkoutInput.min = nextDayISO;
  
          if (checkoutInput.value && new Date(checkoutInput.value) < nextDay) {
            checkoutInput.value = '';
          }
        } else {
          checkoutInput.min = '';
        }
      });
  
      form.addEventListener('submit', function(e) {
        e.preventDefault();
  
        const checkinDate = new Date(checkinInput.value);
        const checkoutDate = new Date(checkoutInput.value);
  
        if (checkoutDate <= checkinDate) {
          if (errorMsg) {
            errorMsg.textContent = 'A távozás dátumának későbbinek kell lennie, mint az érkezés dátuma.';
            errorMsg.style.display = 'block';
          } else {
            alert('Hiba: A távozás dátumának későbbinek kell lennie, mint az érkezés dátuma.');
          }
          return;
        }
  
        if (errorMsg) {
          errorMsg.style.display = 'none';
        }
  
        popup.style.display = 'block';
        setTimeout(() => {
          popup.classList.remove('hide');
          popup.classList.add('show');
        }, 10);
      });
  
      closeBtn.addEventListener('click', function () {
        popup.classList.remove('show');
        popup.classList.add('hide');
  
        setTimeout(() => {
          popup.style.display = 'none';
        }, 400);
      });
    });
  