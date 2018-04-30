//単純にメッセージが来たらそこにレスポンスを返すだけ
browser.runtime.onMessage.addListener(function(msg,sender,sendResponse){
    title = document.title
    str = document.getSelection().toString()
    console.log(str)
    sendResponse({title:title,str:str})
})
