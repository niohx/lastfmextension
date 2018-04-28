import LastFM from 'last-fm'

browser.tabs.query({
    currentWindow: true,
    active: true
}, function (tab) {
    browser.tabs.sendMessage(tab[0].id, {
        text: ''
    }).then(function (response) {
            const title = response.title
            const str = response.str
            document.getElementById('title').innerText = `you have selected ${str}`
            searchSimilarArtist(str)

        }.then(data => {
            let html = ""
            for (var i = 0; i < 10; i++) {
                html += `<br /><div>${data.artist[i].name}</div>`
            }
            console.log(html)
            document.getElementById('artist').innerHTML = html
        })

    )
})

function searchSimilarArtist(artist) {
    //authentificate
    const auth = new LastFM('6365215872671c325787a220ef38ae1c')
    // for debug:console.log(artist)
    //return artist similar to given name
    const data = {
        isFound: false,
        result: "ea"
    }
    auth.artistSimilar({
        name: artist
    }, (err, data) => {
        if (err) {
            data.isFound = false
            data.result = err
            return data
        } else {
            data.isFound = true
            data.result = data
            return data
            //for debug:console.log(data)
            /*let html = ""
            for (var i = 0; i < 10; i++) {
                html += `<br /><div>${data.artist[i].name}</div>`
            }
            console.log(html)
            document.getElementById('artist').innerHTML = html */
        }
        
        return resolve(data)
    })
}
