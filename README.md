# lastfmextension

search similar artist　via [last.fm](https://www.last.fm)

## Install

you can install via [Firefox addon-store](https://addons.mozilla.org/en-US/firefox/addon/search-similar-artist/)





## メモ用

最終的に必要なStateの姿はこんな感じじゃなかろうか

```
{
  selectedArtist:"you",
  asked:true/false
  isFetching:true/false,
  
  similarArtist[
  { name:"sia"
    img:"https://~"
  },
  { name:"~"
    img:""
    },
    ...
  ]
}

```

## action

どういう種類のActionが必要になるか。

```

//問い合わせに必要なAction
'REQUEST_START'
'REQUEST_PENDING'
'REQUEST_FETCHED'



```
