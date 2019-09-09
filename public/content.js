chrome.runtime.onMessage.addListener(request => {
  if (request.type === 'showPremium') {
    const pTags = document.getElementsByTagName('p').removeAttribute('class', 'style')
    
    return pTags.map(tag => {
      return tag.removeAttribute('class')
    }).map(classRemovedTag => {
      return classRemovedTag.removeAttribute('style')
    })
  }
})