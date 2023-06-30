//images for buttons
//size autoplayers
//singlelinetext?


 let e = {
    artist: null,

    start: function(artist){
    if(innerWidth < innerHeight){
    this.androidmode = true
    }else{
    this.androidmode = false
    }
    this.artist = artist
    this.div = document.createElement("div")
    DeepJS.ele.lo(this.div,0,0,1,1)
    document.body.appendChild(this.div)
    this.div.style.backgroundImage = "url(background.png)"
    this.div.style.backgroundAttachment = "fixed"
    this.div.style.backgroundRepeat = "repeat"
        songlistcreature.init(artist)
        songlistcreature.div.style.display = "block"
        DeepJS.ele.lo(songlistcreature.div,3/4,0,1/4,1)
        this.title = document.createElement("div")
            DeepJS.ele.lo(this.title,1/8,1/18,4/8,3/18)
            this.div.appendChild(this.title)
            this.title.innerHTML = artist
            this.title.style.textAlign = "center"
            this.title.style.fontSize = "4em"
            this.title.style.display = "flex"
            this.title.style.alignItems = "center"
            this.title.style.justifyContent = "center"
            this.title.style.color = "White"
            this.title.style.backgroundColor = "rgba(255,255,255,0.1)"
            this.title.style.borderRadius = "17px"
        this.text = document.createElement("div")
         DeepJS.ele.lo(this.text,0.5/8,5/18,5/8,10/18)
         this.div.appendChild(this.text)
           this.text.style.color = "White"
            this.text.style.fontSize = "1.1em"
            this.text.style.borderRadius = "17px"
            this.text.style.backgroundColor = "rgba(255,255,255,0.1)"
            this.text.style.paddingLeft = "17px"
            this.text.style.paddingTop = "12px"
            DeepJS.files.find("artisttext.txt",function(words){
                e.text.innerHTML = words
            })
        },

  }



  let songlistcreature = {

        div: document.createElement("div"),
        divtitle: document.createElement("div"),
        divmenubutton: document.createElement("div"),
                    menu: document.createElement("div"),
        divsongsearch: document.createElement("input"),
        divsongs: document.createElement("div"),
        divaudioplayer: document.createElement("audio"),
        divplaylist: document.createElement("div"),

        artist: null,
        colorprimary: "White",
        looping: false,
        songfolder: "songs",
        songindex: "songlist.txt",
        songlist: [],
        songlistsongs: [],
        songs: [],
        playlist: [],
        playliston: 0,
        playing: false,
        checkcircuit: null,
        update: function(){
                    if(songlistcreature.playing == true){
                    songlistcreature.timemarker.style.width = DeepJS.conversion.percentstring(songlistcreature.divaudioplayer.currentTime / songlistcreature.divaudioplayer.duration)
                    }
                },
                init: function(artist){
                this.artist = artist
                songlistcreature.checkcircuit = setInterval(function(){songlistcreature.update()},20)
                 songlistcreature.div.style.display = "none"
                DeepJS.ele.lo(songlistcreature.div,0,0,1,1)
                songlistcreature.div.style.position = "fixed"
                document.body.appendChild(songlistcreature.div)
                songlistcreature.div.style.backgroundColor = "black"
                songlistcreature.div.style.borderColor = songlistcreature.colorprimary
                songlistcreature.div.style.borderRadius = "15px"
                songlistcreature.div.style.borderStyle = "double"
                 songlistcreature.divpretty = document.createElement("div")
                    DeepJS.ele.lo(songlistcreature.divpretty,1/18,1/36,16/18,34/36)
                    songlistcreature.div.appendChild(songlistcreature.divpretty)
                    songlistcreature.divpretty.style.backgroundColor = "rgba(211,211,255,0.1)"
                    songlistcreature.divpretty.style.borderStyle = "solid"
                    songlistcreature.divpretty.style.borderWidth = "3px"
                    songlistcreature.divpretty.style.borderRadius = "7px"
                    songlistcreature.divpretty.style.borderColor = songlistcreature.colorprimary
                 DeepJS.ele.lo(songlistcreature.divtitle,1/9,1/18,7/9,2/18)
                songlistcreature.div.appendChild(songlistcreature.divtitle)
                songlistcreature.divtitle.innerHTML = songlistcreature.artist
                 songlistcreature.divtitle.style.margin = "auto"
                songlistcreature.divtitle.style.color = songlistcreature.colorprimary
                songlistcreature.divtitle.style.borderColor = songlistcreature.colorprimary
                songlistcreature.divtitle.style.borderWidth = "3px"
                songlistcreature.divtitle.style.borderStyle = "double"
                songlistcreature.divtitle.style.borderTopLeftRadius = "7px"
                songlistcreature.divtitle.style.borderTopRightRadius = "7px"
                songlistcreature.divtitle.style.textAlign = "center"
                songlistcreature.divtitle.style.align = "center"
                songlistcreature.divtitle.style.display = "flex"
                songlistcreature.divtitle.style.justifyContent= "center"
                songlistcreature.divtitle.style.alignItems= "center"
                songlistcreature.divtitle.style.fontSize = "1.5em"
                 DeepJS.ele.lo(songlistcreature.divsongsearch,1/9,3/18,7/9,1/18)
                  songlistcreature.div.appendChild(songlistcreature.divsongsearch)
                  songlistcreature.divsongsearch.style.color = songlistcreature.colorprimary
                  songlistcreature.divsongsearch.style.backgroundColor = "Black"
                  songlistcreature.divsongsearch.placeholder = "search"
                  songlistcreature.divsongsearch.style.borderRightStyle = "double"
                  songlistcreature.divsongsearch.style.borderRightWidth = "3px"
                  songlistcreature.divsongsearch.style.borderRightColor = songlistcreature.colorprimary
                    songlistcreature.divsongsearch.style.borderLeftStyle = "double"
                    songlistcreature.divsongsearch.style.borderLeftWidth = "3px"
                    songlistcreature.divsongsearch.style.borderLeftColor = songlistcreature.colorprimary
                  songlistcreature.divsongsearch.style.textAlign = "center"
                  songlistcreature.divsongsearch.oninput = function(){
                  songlistcreature.divsongs.innerHTML = ""
                  songlistcreature.songlistsongs = []
                  	  for(this.eee = 0; this.eee < songlistcreature.songlist.length; this.eee++){
                        if(songlistcreature.songlist[this.eee].toUpperCase().indexOf(songlistcreature.divsongsearch.value.toUpperCase()) != -1){
                        songlistcreature.songlistaddsong(songlistcreature.songlist[this.eee])
                        }
                  	  }
                    }
                 DeepJS.ele.lo(songlistcreature.divsongs,1/9,4/18,7/9,6/18)
                   songlistcreature.div.appendChild(songlistcreature.divsongs)
                                   songlistcreature.divsongs.style.overflow = "scroll"
                                   songlistcreature.divsongs.style.userSelect = "none"
                                   songlistcreature.divsongs.style.backgroundColor = "Black"
                  songlistcreature.divsongs.style.borderRightStyle = "double"
                  songlistcreature.divsongs.style.borderRightWidth = "3px"
                  songlistcreature.divsongs.style.borderRightColor = songlistcreature.colorprimary
                    songlistcreature.divsongs.style.borderLeftStyle = "double"
                    songlistcreature.divsongs.style.borderLeftWidth = "3px"
                    songlistcreature.divsongs.style.borderLeftColor = songlistcreature.colorprimary
                 DeepJS.ele.lo(songlistcreature.divaudioplayer,1/9,10/18,7/9,1/18)
                   songlistcreature.div.appendChild(songlistcreature.divaudioplayer)
                   songlistcreature.divaudioplayer.controls = false
                   songlistcreature.divaudioplayer.autoplay = true
                   songlistcreature.divaudioplayer.onended = function(){
                        if(songlistcreature.looping == true){songlistcreature.play(0)}
                        else{
                   songlistcreature.playliston = songlistcreature.playliston + 1
                   if(songlistcreature.playliston > songlistcreature.playlist.length-1){songlistcreature.playliston = 0}
                   songlistcreature.play(songlistcreature.playliston)
                   }}
                   songlistcreature.divaudioplayer.onready = function(){songlistcreature.divaudioplayer.play()}
                 songlistcreature.timemarkerholder = document.createElement("div")
                                      DeepJS.ele.lo(songlistcreature.timemarkerholder,1/9,10/18,7/9,1/18)
                                      songlistcreature.div.appendChild(songlistcreature.timemarkerholder)
                                                        songlistcreature.timemarkerholder.style.borderRightStyle = "double"
                                                        songlistcreature.timemarkerholder.style.borderRightWidth = "3px"
                                                        songlistcreature.timemarkerholder.style.borderRightColor = songlistcreature.colorprimary
                                                          songlistcreature.timemarkerholder.style.borderLeftStyle = "double"
                                                          songlistcreature.timemarkerholder.style.borderLeftWidth = "3px"
                                                          songlistcreature.timemarkerholder.style.borderLeftColor = songlistcreature.colorprimary
                                                                                                                    songlistcreature.timemarkerholder.style.borderBottomStyle = "double"
                                                                                                                    songlistcreature.timemarkerholder.style.borderBottomWidth = "3px"
                                                                                                                    songlistcreature.timemarkerholder.style.borderBottomColor = "White"
                 songlistcreature.timemarker = document.createElement("div")
                   songlistcreature.timemarker.style.position = "absolute"
                   songlistcreature.timemarker.style.left = "0"
                   songlistcreature.timemarker.style.right = "100%"
                   songlistcreature.timemarker.style.top = "0"
                   songlistcreature.timemarker.style.bottom = "0"
                   songlistcreature.timemarkerholder.appendChild(songlistcreature.timemarker)
                   songlistcreature.timemarker.style.backgroundColor = "rgba(152, 245, 153, 0.7)"
                 songlistcreature.divtrackname = document.createElement("div")
                                        DeepJS.ele.lo(songlistcreature.divtrackname,1/9,10/18,7/9,1/18)
                                                         songlistcreature.div.appendChild(songlistcreature.divtrackname)
                                                         songlistcreature.divtrackname.style.color = songlistcreature.colorprimary
                                                         songlistcreature.divtrackname.style.textSize = "1.2em"
                                                         songlistcreature.divtrackname.style.textAlign = "center"
                                                         songlistcreature.divtrackname.style.userSelect = "none"
                                                         songlistcreature.divtrackname.onmouseup = function(e){
                                                            songlistcreature.divaudioplayer.currentTime = Math.round((e.layerX / songlistcreature.divtrackname.getBoundingClientRect().width) * songlistcreature.divaudioplayer.duration)
                                                         }
                 DeepJS.ele.lo(songlistcreature.divplaylist,2/9,11/18,6/9,6/18)
                   songlistcreature.div.appendChild(songlistcreature.divplaylist)
                                                           songlistcreature.divplaylist.style.borderRightStyle = "double"
                                                           songlistcreature.divplaylist.style.borderRightWidth = "3px"
                                                           songlistcreature.divplaylist.style.borderRightColor = songlistcreature.colorprimary
                                                             songlistcreature.divplaylist.style.borderLeftStyle = "double"
                                                             songlistcreature.divplaylist.style.borderLeftWidth = "3px"
                                                             songlistcreature.divplaylist.style.borderLeftColor = songlistcreature.colorprimary
                                                                                                                          songlistcreature.divplaylist.style.borderBottomStyle = "double"
                                                                                                                          songlistcreature.divplaylist.style.borderBottomWidth = "3px"
                                                                                                                          songlistcreature.divplaylist.style.borderBottomColor = "White"
                                                             songlistcreature.divplaylist.style.borderBottomRightRadius = "7px"
                   songlistcreature.divplaylist.style.overflow = "scroll"
                 songlistcreature.divplaylist.menubar = document.createElement("div")
                                DeepJS.ele.lo(songlistcreature.divplaylist.menubar,1/9,11/18,1/9,6/18)
                                songlistcreature.div.appendChild(songlistcreature.divplaylist.menubar)
                                songlistcreature.divplaylist.menubar.style.backgroundColor = "Black"
                                songlistcreature.divplaylist.menubar.style.borderBottomStyle = "double"
                                                             songlistcreature.divplaylist.menubar.style.borderBottomWidth = "3px"
                                                             songlistcreature.divplaylist.menubar.style.borderBottomColor = songlistcreature.colorprimary
                                                             songlistcreature.divplaylist.menubar.style.borderLeftStyle = "double"
                                                             songlistcreature.divplaylist.menubar.style.borderLeftWidth = "3px"
                                                             songlistcreature.divplaylist.menubar.style.borderLeftColor = songlistcreature.colorprimary
                                                             songlistcreature.divplaylist.menubar.style.borderBottomLeftRadius = "7px"
                  songlistcreature.divplaylist.menubar.btnplay = document.createElement("div")
                                            DeepJS.ele.lo(songlistcreature.divplaylist.menubar.btnplay,0,0,1,1/6)
                                            songlistcreature.divplaylist.menubar.appendChild(songlistcreature.divplaylist.menubar.btnplay)
                                            songlistcreature.divplaylist.menubar.btnplay.style.borderStyle = "solid"
                                            songlistcreature.divplaylist.menubar.btnplay.style.borderColor = songlistcreature.colorprimary
                                            songlistcreature.divplaylist.menubar.btnplay.style.borderRadius = "7px"
                                            songlistcreature.divplaylist.menubar.btnplay.style.userSelect = "none"
                                            songlistcreature.divplaylist.menubar.btnplay.style.backgroundImage = "url(icons/Pause.png)"
                                            songlistcreature.divplaylist.menubar.btnplay.style.backgroundSize = "100% auto"
                                            songlistcreature.divplaylist.menubar.btnplay.style.color = songlistcreature.colorprimary
                                            songlistcreature.divplaylist.menubar.btnplay.onclick = function(){
                                                if(songlistcreature.divaudioplayer.paused == true){
                                                songlistcreature.divaudioplayer.play()
                                                songlistcreature.divplaylist.menubar.btnplay.style.backgroundImage = "url(icons/Pause.png)"
                                                songlistcreature.playing = true

                                                }else{
                                                songlistcreature.divaudioplayer.pause()
                                                songlistcreature.divplaylist.menubar.btnplay.style.backgroundImage = "url(icons/Play.png)"
                                                songlistcreature.playing = false
                                                songlistcreature.divtrackname.style.color = songlistcreature.colorprimary

                                                }
                                            }
                 songlistcreature.divplaylist.menubar.btnshuffle = document.createElement("div")
                                                                                        DeepJS.ele.lo(songlistcreature.divplaylist.menubar.btnshuffle,0,1/6,1,1/6)
                                                                                        songlistcreature.divplaylist.menubar.appendChild(songlistcreature.divplaylist.menubar.btnshuffle)
                                                                                        songlistcreature.divplaylist.menubar.btnshuffle.style.borderStyle = "solid"
                                                                                        songlistcreature.divplaylist.menubar.btnshuffle.style.borderColor = songlistcreature.colorprimary
                                                                                        songlistcreature.divplaylist.menubar.btnshuffle.style.borderRadius = "7px"
                                            songlistcreature.divplaylist.menubar.btnshuffle.style.backgroundImage = "url(icons/Shuffle.png)"
                                            songlistcreature.divplaylist.menubar.btnshuffle.style.backgroundSize = "100% auto"
                                                                                        songlistcreature.divplaylist.menubar.btnshuffle.style.color = "Black"
                                                                                        songlistcreature.divplaylist.menubar.btnshuffle.style.userSelect = "none"
                                                                                        songlistcreature.divplaylist.menubar.btnshuffle.onclick = function(){
                                                                                        songlistcreature.divplaylist.menubar.btnshuffle.style.backgroundImage = "url(icons/ShuffleClick.png)"
                                                                                        songlistcreature.shufflefifty()

                                                                                        }
                 songlistcreature.divplaylist.menubar.btnloop = document.createElement("div")
                                                                                        DeepJS.ele.lo(songlistcreature.divplaylist.menubar.btnloop,0,2/6,1,1/6)
                                                                                        songlistcreature.divplaylist.menubar.appendChild(songlistcreature.divplaylist.menubar.btnloop)
                                                                                        songlistcreature.divplaylist.menubar.btnloop.style.backgroundImage = "url(icons/LoopOff.png)"
                                                                                        songlistcreature.divplaylist.menubar.btnloop.style.backgroundSize = "100% auto"
                                                                                        songlistcreature.divplaylist.menubar.btnloop.style.borderStyle = "solid"
                                                                                        songlistcreature.divplaylist.menubar.btnloop.style.borderColor = songlistcreature.colorprimary
                                                                                        songlistcreature.divplaylist.menubar.btnloop.style.borderRadius = "7px"
                                                                                        songlistcreature.divplaylist.menubar.btnloop.style.color = "Black"
                                                                                        songlistcreature.divplaylist.menubar.btnloop.onclick = function(){
                                                                                            if(songlistcreature.looping == false){
                                                                                            songlistcreature.looping = true
                                                                                            songlistcreature.divplaylist.menubar.btnloop.style.backgroundImage = "url(icons/LoopOn.png)"
                                                                                            }else{
                                                                                            songlistcreature.looping = false
                                                                                            songlistcreature.divplaylist.menubar.btnloop.style.backgroundImage = "url(icons/LoopOff.png)"
                                                                                            }
                                                                                        }
//smell of plants just getting first rain
                    DeepJS.files.find(songlistcreature.songindex, function(foundstring){
                        songlistcreature.songlist = foundstring.split("~~~")
                            for(songlistcreature.yy = 0; songlistcreature.yy < songlistcreature.songlist.length; songlistcreature.yy++){
                              songlistcreature.songlistaddsong(songlistcreature.songlist[songlistcreature.yy])
                            }
                    })


                },

                songlistaddsong: function(hemsongname){
                    let song = {
                          name: hemsongname.substring(0,hemsongname.indexOf(".")),
                          extension: hemsongname.substring(hemsongname.indexOf("."),hemsongname.length),
                          div: document.createElement("div"),
                          number: songlistcreature.divsongs.children.length,
                                                        init: function(){
                                                            this.div.style.position = "absolute"
                                                            this.div.style.left = "0"
                                                            this.div.style.right = "0"
                                                            this.div.style.top = DeepJS.conversion.percentstring(this.number*1/7)
                                                            this.div.style.bottom = DeepJS.conversion.percentstring(6/7-(this.number*1/7))
                                                            this.div.innerHTML = this.name
                                                            this.div.style.color = songlistcreature.colorprimary
                                                            this.div.style.borderColor = "Black"
                                                            this.div.style.borderStyle = "solid"
                                                            this.div.style.borderWidth = "7px"
                                                            this.div.onclick = function(){
                                                            songlistcreature.addtoplaylist(this.name,this.extension)}.bind(this)
                                                            songlistcreature.songlistsongs.push(this)
                                                            },
                                                    }

                                                    song.init()
                                                    songlistcreature.divsongs.appendChild(song.div)
                },

            addtoplaylist: function(hemstring,extension){
                let hem = document.createElement("div")
                DeepJS.ele.lo(hem,0,(songlistcreature.playlist.length)*(1/7),1,1/7)
                hem.innerHTML = hemstring
                hem.number = songlistcreature.playlist.length
                hem.style.color = songlistcreature.colorprimary
                hem.style.userSelect = "none"
                hem.style.backgroundColor = "rgba(255,255,255,0.1)"
                hem.style.borderColor = songlistcreature.colorprimary
                hem.style.borderWidth = "3px"
                hem.style.borderStyle = "double"
                hem.extension = extension
                hem.onclick = function(){songlistcreature.play(hem.number)}
                songlistcreature.playlist.push(hem)
                songlistcreature.divplaylist.appendChild(hem)
                    if(songlistcreature.playlist.length == 1){
                        songlistcreature.play(0)
                    }
            },

                play: function(playlistnumber){
                    songlistcreature.divtrackname.style.color = "Green"
                    songlistcreature.divtrackname.innerHTML = songlistcreature.playlist[playlistnumber].innerHTML
                    songlistcreature.divaudioplayer.src = "songs/"+songlistcreature.playlist[playlistnumber].innerHTML + songlistcreature.playlist[playlistnumber].extension
                    songlistcreature.divaudioplayer.play()
                    songlistcreature.playing = true
                    songlistcreature.divplaylist.menubar.btnplay.backgroundImage = "url(icons/Pause.png)"
                    for(this.uuuuu = 0; this.uuuuu < songlistcreature.playlist.length; this.uuuuu++){songlistcreature.playlist[this.uuuuu].style.color = "White"}
                    songlistcreature.playlist[playlistnumber].style.color = "Green"
                },

                shufflefifty: function(){

                    this.intervals = 0
                        this.interval = setInterval(function(){
                        var number = Math.floor(Math.random() * songlistcreature.songlistsongs.length )
                        songlistcreature.intervals++
                        var selected = songlistcreature.songlistsongs[number]
                                                       songlistcreature.addtoplaylist(selected.name,selected.extension)
                                                       if(songlistcreature.intervals > 50){
                                                        songlistcreature.divplaylist.menubar.btnshuffle.style.backgroundImage = "url(icons/Shuffle.png)"
                                                       clearInterval(songlistcreature.interval)
                                                       songlistcreature.intervals = 0
                                                       }
                        },20)},


                page: function(who){
                                                this.artist = who
                                              this.div = document.createElement("div")
                                              document.body.appendChild(this.div)
                                              DeepJS.ele.lo(this.div,0,0,1,1)

                                                  songlistcreature.init(who)
                                                  songlistcreature.div.style.display = "block"
                                                  },

       }