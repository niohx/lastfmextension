//初期値の設定、選んだアーティストと似ているアーティスト

console.log('background start!')

//まずはAPIを叩くFunctionを作る。asyncなやつ
async function getSimilarArtist(artist) {
  var state = {
    artist_name: artist,
    status: "none",
    similar_artist: "",
  }
  const api_key = '6365215872671c325787a220ef38ae1c'
  var url = `http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artist}&api_key=${api_key}&limit=10&format=json`
  fetch(url).then(async(response) => 　{
    var results = await response.json()
    state.status = "fetched"
    state.similar_artist = results.similarartists.artist
    //console.log(state)
    //最後にmessageをpopupに送る
    browser.runtime.sendMessage({
      artist: artist,
      state: state
    })
  })
}

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  //現在のタブを取得する
  browser.tabs.query({
    currentWindow: true,
    active: true
  }, function(tab) {
    browser.tabs.sendMessage(tab[0].id, {
      text: ''
    }).then(function(response) {
      getSimilarArtist(response.str)
    })

  })
})
