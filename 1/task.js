document.querySelectorAll('.dropdown').forEach(dropdown => {
  const value = dropdown.querySelector('.dropdown__value');
  const list = dropdown.querySelector('.dropdown__list');

  value.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
  });

  dropdown.querySelectorAll('.dropdown__item').forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      value.textContent = item.textContent.trim();
      list.classList.remove('dropdown__list_active');
    });
  });
});

// Опционально, закрывать дропдаун при клике вне его
document.addEventListener('click', (event) => {
  document.querySelectorAll('.dropdown__list.dropdown__list_active').forEach(activeList => {
    if (!activeList.parentElement.contains(event.target)) {
      activeList.classList.remove('dropdown__list_active');
    }
  });
});
