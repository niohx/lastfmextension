

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
