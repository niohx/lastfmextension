console.log('popupped!')

//background scriptにリクエストを送る。
browser.runtime.sendMessage({text:''},function(response){
  document.getElementById('title').innerText = `you have selected ${response.artist}`
})


browser.runtime.onMessage.addListener(function(request,sender,sendResponse){
  console.log(request)
  render(request)
  sendResponse({text:'message received'})
})

function render(request){
  const similar_artist = request.state.similar_artist
  console.log(similar_artist)
  document.getElementById('title').innerText = `you have selected ${request.artist}`
  let html = ''
  for (key in similar_artist){
    html += `<br /><div><img src = ${similar_artist[key].image[1]['#text']}>${similar_artist[key].name}</div>`
  }
  document.getElementById('artist').innerHTML=html
}
