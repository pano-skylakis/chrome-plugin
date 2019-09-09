chrome.runtime.onMessage.addListener(request => {
  if (request.type === 'showPremium') {
    const pTags = document.getElementsByTagName('p')
    

    for (let i = 0; i < pTags.length; i ++) {
      return pTags[i].removeAttribute('class')
    }
  //   return pTags.map(tag => {
  //     return tag.removeAttribute('class')
  //   }).map(classRemovedTag => {
  //     return classRemovedTag.removeAttribute('style')
  //   })
  }
})