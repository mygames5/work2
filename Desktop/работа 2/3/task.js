document.querySelectorAll('.tab__navigation').forEach(tabNav => {
  const tabs = tabNav.querySelectorAll('.tab');
  const contents = tabNav.nextElementSibling.querySelectorAll('.tab__content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // убираю активный класс у всех вкладок
      tabs.forEach(t => t.classList.remove('tab_active'));
      // убираю активный класс у всего контента
      contents.forEach(c => c.classList.remove('tab__content_active'));

      // добавляю активный класс на текущую вкладку и её содержимое
      tab.classList.add('tab_active');
      contents[index].classList.add('tab__content_active');
    });
  });
});
