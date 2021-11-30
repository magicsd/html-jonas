(() => {
  const yearEl = document.getElementById('year')
  const currentYear = new Date().getFullYear()
  yearEl.textContent = String(currentYear)

  const btnNavEl = document.querySelector('.btn-mobile-nav')
  const headerEl = document.querySelector('.header')

  btnNavEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open')
  })

  const allLinks = document.querySelectorAll('a:link')
  allLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault()
      const href = link.getAttribute('href')

      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' })

        return
      }

      if (!href.startsWith('#')) return

      const sectionEl = document.querySelector(href)
      sectionEl.scrollIntoView({ behavior: 'smooth' })

      if (link.classList.contains('main-nav-link')) {
        headerEl.classList.toggle('nav-open')
      }
    })
  })
})()
