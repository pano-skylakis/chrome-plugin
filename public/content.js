chrome.runtime.onMessage.addListener(request => {
  if (request.type === 'showPremium') {
    const pTags = document.getElementsByTagName(p)
    console.log(pTags)
  }
})