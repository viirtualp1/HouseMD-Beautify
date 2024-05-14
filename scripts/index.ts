function removeDescription() {
  const descriptionElement = document.querySelector(
    'span[itemprop=description]',
  )

  if (descriptionElement) {
    descriptionElement.remove()
  }

  const titles = document.querySelectorAll('.entry-title-h2')

  if (titles.length > 2) {
    // The title of the "Description" block has an index of 2
    titles[2].remove()
  }
}

function setPlayerToFullWidth() {
  const sidebar = document.querySelector('.sidebar')

  if (sidebar) {
    sidebar.remove()
  }

  const content: HTMLDivElement = document.querySelector('.content')

  if (!content) {
    return
  }

  content.style.width = 'auto'
}

function removePageLink() {
  const branding: HTMLLinkElement = document.querySelector('.branding')

  if (!branding) {
    return
  }

  branding.removeAttribute('href')
}

window.onload = () => {
  removeDescription()
  setPlayerToFullWidth()
  removePageLink()
}
