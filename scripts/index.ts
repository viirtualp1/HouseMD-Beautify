function removeDescription() {
  const descriptionElement = document.querySelector(
    'span[itemprop=description]',
  )
  descriptionElement.remove()

  const titles = document.querySelectorAll('.entry-title-h2')
  titles[2].remove()
}

function setPlayerToFullWidth() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.remove()

  const content: HTMLDivElement = document.querySelector('.content')
  content.style.width = 'auto'
}

function removePageLink() {
  const branding: HTMLLinkElement = document.querySelector('.branding')
  branding.removeAttribute('href')
}

window.onload = () => {
  removeDescription()
  setPlayerToFullWidth()
  removePageLink()
}
