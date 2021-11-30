(() => {
  const yearEl = document.getElementById('year')
  const currentYear = new Date().getFullYear()
  yearEl.textContent = String(currentYear)

  const btnNavEl = document.querySelector('.btn-mobile-nav')
  const headerEl = document.querySelector('.header')

  btnNavEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open')
  })
})()
