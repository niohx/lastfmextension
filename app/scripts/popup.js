import LastFM from 'last-fm'

browser.tabs.query({
    currentWindow:true,
    active: true
}, function (tab) {
    browser.tabs.sendMessage(tab[0].id, {
        text: ''
    }).then(function (response) {
        const title = response.title
        const str = response.str
        document.getElementById('title').innerText = `選んだアーティストは${str}`
        searchSimilarArtist(str)

        }

    )
})

function searchSimilarArtist(artist){
  //authentificate
  const auth = new LastFM('6365215872671c325787a220ef38ae1c')
  console.log(artist)
  //return artist similar to given name
  const data = {isFound:false,result:"ea"}
  auth.artistSimilar({name:artist},(err,data)=>{
    if(err){
      data.isFound=false
      data.result=err
      console.log(data)
    }
    else {
      data.isFound = true
      data.result = data
      console.log(data)
      document.getElementById('artist').innerHTML = `<div>${data.artist[0].name}</div>`
      }
  })}
