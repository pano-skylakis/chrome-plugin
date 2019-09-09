chrome.runtime.onMessage.addListener(request => {
  if (request.type === 'showPremium') {
    
    getScript()
    getTags()  
  }
})


getScript = () => {
  let scripts = document.getElementsByTagName('script')
  removeScripts(scripts)
}
removeScripts = (scripts) => {
  for(let i = scripts.length -1; i >= 0; i--) {
    scripts[i].parentNode.removeChild(scripts[i])
  }
}


getTags = () => {
  let pTags = document.getElementsByTagName('p')
  removeClassAttribute(pTags)
  removeStyleAttribute(pTags)
}
removeClassAttribute = (pTags) => {
  for(let i = pTags.length - 1; i >= 0; i--) {
    pTags[i].removeAttribute('class')
  }
}
removeStyleAttribute = (pTags) => {
  for(let i = pTags.length - 1; i >= 0; i--) {
    pTags[i].removeAttribute('style')
  }
}