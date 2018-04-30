<<<<<<< HEAD
import LastFM from 'last-fm'
import {
    subscribe,
    createStore
} from 'redux'

browser.tabs.query({
    currentWindow: true,
    active: true
}, function (tab) {
    browser.tabs.sendMessage(tab[0].id, {
        text: ''
    }).then(function (response) {
        const str = response.str
        document.getElementById('title').innerText = `you have selected ${str}`
        searchSimilarArtist(str)

    })
})


<<<<<<< HEAD
async function searchSimilarArtist(artist) {
=======


function searchSimilarArtist(artist) {
>>>>>>> 2ac0775dd7a5f34bf5a94cdfbdbcf787b4e9fbc1
    //authentificate
    const auth = new LastFM('6365215872671c325787a220ef38ae1c')
    // for debug:console.log(artist)
    //return artist similar to given name

    auth.artistSimilar({
        name: artist,
        limit: 20
    }, (err, data) => {
        if (err) {
            console.error(err)
        } else {
            data.isFound = true
            console.log(data)
            console.log(data.artist[0].image[1]['#text'])
            let html = ""
            for (var i = 0; i < 10; i++) {
                html += `<br /><div><img src = ${data.artist[i].image[1]['#text']}>${data.artist[i].name}</div>`
            }
            console.log(html)
            document.getElementById('artist').innerHTML = html
        }


    })


=======
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
>>>>>>> without_last-fm
}
