import LastFM from 'last-fm'

browser.tabs.query({
    currentWindow:true,
    active: true
}, function (tab) {
    browser.tabs.sendMessage(tab[0].id, {
        text: ''
    }).then(function (response) {
        title = response.title
        str = response.str

        document.getElementById('title').innerText = `タイトルは${title}`
        document.getElementById('str').innerText = `selection is ${str}`
    })
})



const auth = new LastFM('6365215872671c325787a220ef38ae1c')

auth.trackSearch({q:'the greatest'},(err,data)=>{
    if(err)console.error(err)
    else console.log(data.result[0])
})