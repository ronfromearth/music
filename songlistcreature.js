//images for buttons//songprogresstextcenter, colorthemes, wordnonwrap
//size autoplayers
//singlelinetext?
//get lighters
//project type picker
 let e = {
    artist: null,

    start: function(artist){
    if(innerWidth < innerHeight){
    this.android = true
    }else{
    this.android = false
    }
    if(this.android == false){
    this.artist = artist
    this.div = document.createElement("div")
    DeepJS.ele.lo(this.div,0,0,1,1)
    document.body.appendChild(this.div)
    this.div.style.backgroundImage = "url(background.png)"
    this.div.style.backgroundAttachment = "fixed"
    this.div.style.backgroundRepeat = "repeat"
        songlistcreature.init(artist)
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

                }
                else{
                    songlistcreature.page(artist)
                }
        },

  }



  let songlistcreature = {
    font: null,
        div: document.createElement("div"),
        divpretty: document.createElement("div"),
        divtitle: document.createElement("div"),
        divsongsearch: document.createElement("input"),
        divsongs: document.createElement("div"),
        divaudioplayer: document.createElement("audio"),
        divplaylist: document.createElement("div"),
        timemarker: document.createElement("div"),
        timemarkerholder: document.createElement("div"),
                         divtrackname: document.createElement("div"),
                         divmenubar: document.createElement("div"),
                         divmenubarbtnplay: document.createElement("div"),
                         divmenubarbtnshuffle: document.createElement("div"),
                         divmenubarbtnloop: document.createElement("div"),
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

                    if(innerWidth < innerHeight){
                    songlistcreature.android = true
                    }else{
                    songlistcreature.android = false
                    }

                songlistcreature.artist = artist

                DeepJS.files.find("fonts/fonts.index",function(text){
                    let textt = text
                    while(textt.indexOf("<Font>") != -1){
                        textt = textt.substring(textt.indexOf("<Font>")+6,textt.indexOf("</Font>"))
                        let fontf = new FontFace(textt,"url(fonts/"+textt+".ttf)")
                        fontf.load().then(function(){document.fonts.add(fontf)}.bind(fontf))
                        textt = textt.substring(0,textt.indexOf("<Font>")) + textt.substring(textt.indexOf("</Font>")+7,textt.length)
                    }
                })


           DeepJS.files.find("color.theme",function(textt){
               if(textt.indexOf("<Background Color>") != -1){
               let text = textt.substring(textt.indexOf("<Background Color>")+18,textt.indexOf("</Background Color>"))

                   if(text.indexOf("<full>") != -1){     songlistcreature.div.style.backgroundColor = text.substring((text.indexOf("<full>")+6),(text.indexOf("</full>")))}
                   if(text.indexOf("<pretty>") != -1){     songlistcreature.divpretty.style.backgroundColor = text.substring((text.indexOf("<pretty>")+8),(text.indexOf("</pretty>")))}
                   if(text.indexOf("<title>") != -1){     songlistcreature.divtitle.style.backgroundColor = text.substring((text.indexOf("<title>")+7),(text.indexOf("</title>")))}
                   if(text.indexOf("<songsearch>") != -1){     songlistcreature.divsongsearch.style.backgroundColor = text.substring((text.indexOf("<songsearch>")+12),(text.indexOf("</songsearch>")))}
                   if(text.indexOf("<songs>") != -1){     songlistcreature.divsongs.style.backgroundColor = text.substring((text.indexOf("<songs>")+7),(text.indexOf("</songs>")))}
                   if(text.indexOf("<playingtrackname>") != -1){     songlistcreature.timemarkerholder.style.backgroundColor = text.substring((text.indexOf("<playingtrackname>")+18),(text.indexOf("</playingtrackname>")))}
                   if(text.indexOf("<playlist>") != -1){     songlistcreature.divplaylist.style.backgroundColor = text.substring((text.indexOf("<playlist>")+10),(text.indexOf("</playlist>")))}
                   if(text.indexOf("<playlistmenubar>") != -1){songlistcreature.divmenubar.style.backgroundColor = text.substring((text.indexOf("<playlistmenubar>")+17),(text.indexOf("</playlistmenubar>")))}
                   if(text.indexOf("<playbutton>") != -1){     songlistcreature.divmenubarbtnplay.style.backgroundColor = text.substring((text.indexOf("<playbutton>")+12),(text.indexOf("</playbutton>")))}
                   if(text.indexOf("<shufflebutton>") != -1){     songlistcreature.divmenubarbtnshuffle.style.backgroundColor = text.substring((text.indexOf("<shufflebutton>")+15),(text.indexOf("</shufflebutton>")))}
                   if(text.indexOf("<loopbutton>") != -1){     songlistcreature.divmenubarbtnloop.style.backgroundColor = text.substring((text.indexOf("<loopbutton>")+12),(text.indexOf("</loopbutton>")))}
                  }

                            if(textt.indexOf("<Text Color>") != -1){  text = textt.substring(textt.indexOf("<Text Color>")+12,textt.indexOf("</Text Color>"))
                     if(text.indexOf("<title>") != -1){     songlistcreature.divtitle.style.color = text.substring((text.indexOf("<title>")+7),(text.indexOf("</title>")))}
                   if(text.indexOf("<songsearch>") != -1){     songlistcreature.divsongsearch.style.color = text.substring((text.indexOf("<songsearch>")+12),(text.indexOf("</songsearch>")))}
                   if(text.indexOf("<songs>") != -1){     songlistcreature.songtextcolor = text.substring((text.indexOf("<songs>")+7),(text.indexOf("</songs>")))}
                   if(text.indexOf("<playingtrackname>") != -1){     songlistcreature.divtrackname.style.color = text.substring((text.indexOf("<playingtrackname>")+18),(text.indexOf("</playingtrackname>")))}
                   if(text.indexOf("<playlist>") != -1){     songlistcreature.playlisttextcolor = text.substring((text.indexOf("<playlist>")+10),(text.indexOf("</playlist>")))}
              }
                                       if(textt.indexOf("<Text Shadow>") != -1){  text = textt.substring(textt.indexOf("<Text Shadow>")+12,textt.indexOf("</Text Shadow>"))
                                   if(text.indexOf("<title>") != -1){     songlistcreature.divtitle.style.textShadow = text.substring((text.indexOf("<title>")+7),(text.indexOf("</title>")))}
                                 if(text.indexOf("<songsearch>") != -1){     songlistcreature.divsongsearch.style.textShadow = text.substring((text.indexOf("<songsearch>")+12),(text.indexOf("</songsearch>")))}
                                 if(text.indexOf("<songs>") != -1){     songlistcreature.songtextshadow = text.substring((text.indexOf("<songs>")+7),(text.indexOf("</songs>")))}
                                 if(text.indexOf("<playingtrackname>") != -1){     songlistcreature.divtrackname.style.textShadow = text.substring((text.indexOf("<playingtrackname>")+18),(text.indexOf("</playingtrackname>")))}
                                 if(text.indexOf("<playlist>") != -1){     songlistcreature.playlisttextshadow = text.substring((text.indexOf("<playlist>")+10),(text.indexOf("</playlist>")))}
                            }
                   if(textt.indexOf("<Text Size>") != -1){   text = textt.substring(textt.indexOf("<Text Size>")+11,textt.indexOf("</Text Size>"))
                   if(text.indexOf("<title>") != -1){     songlistcreature.divtitle.style.fontSize = text.substring((text.indexOf("<title>")+7),(text.indexOf("</title>")))}
                   if(text.indexOf("<songsearch>") != -1){     songlistcreature.divsongsearch.style.fontSize = text.substring((text.indexOf("<songsearch>")+12),(text.indexOf("</songsearch>")))}
                   if(text.indexOf("<songs>") != -1){     songlistcreature.songtextsize = text.substring((text.indexOf("<songs>")+7),(text.indexOf("</songs>")))}
                   if(text.indexOf("<playingtrackname>") != -1){     songlistcreature.divtrackname.style.fontSize = text.substring((text.indexOf("<playingtrackname>")+18),(text.indexOf("</playingtrackname>")))}
                   if(text.indexOf("<playlist>") != -1){     songlistcreature.playlisttextsize = text.substring((text.indexOf("<playlist>")+10),(text.indexOf("</playlist>")))}
             }

                   if(textt.indexOf("<Font>") != -1){
                      text = textt.substring(textt.indexOf("<Font>")+6,textt.indexOf("</Font>"))
                    if(text.indexOf("<title>") != -1){     songlistcreature.divtitle.style.fontFamily = text.substring((text.indexOf("<title>")+7),(text.indexOf("</title>")))}
                   if(text.indexOf("<songsearch>") != -1){     songlistcreature.divsongsearch.style.fontFamily = text.substring((text.indexOf("<songsearch>")+12),(text.indexOf("</songsearch>")))}
                   if(text.indexOf("<songs>") != -1){     songlistcreature.songfont = text.substring((text.indexOf("<songs>")+7),(text.indexOf("</songs>")))}
                   if(text.indexOf("<playingtrackname>") != -1){     songlistcreature.divtrackname.style.fontFamily = text.substring((text.indexOf("<playingtrackname>")+18),(text.indexOf("</playingtrackname>")))}
                   if(text.indexOf("<playlist>") != -1){     songlistcreature.playlistfont = text.substring((text.indexOf("<playlist>")+10),(text.indexOf("</playlist>")))}
            }
                   if(textt.indexOf("<Border Color>") != -1){ songlistcreature.bordercolor = textt.substring(textt.indexOf("<Border Color>")+14,textt.indexOf("</Border Color>"))
                                        }


                     songlistcreature.checkcircuit = setInterval(function(){songlistcreature.update()},20)
                                    songlistcreature.div.style.position = "fixed"
                                    document.body.appendChild(songlistcreature.div)
                                    songlistcreature.div.style.borderColor = songlistcreature.bordercolor
                                    songlistcreature.div.style.borderRadius = "15px"
                                    songlistcreature.div.style.borderStyle = "double"
                                        DeepJS.ele.lo(songlistcreature.divpretty,1/18,1/36,16/18,34/36)
                                        songlistcreature.div.appendChild(songlistcreature.divpretty)
                                        songlistcreature.divpretty.style.borderStyle = "solid"
                                        songlistcreature.divpretty.style.borderWidth = "3px"
                                        songlistcreature.divpretty.style.borderRadius = "7px"

                                        songlistcreature.divpretty.style.borderColor = songlistcreature.bordercolor
                                     DeepJS.ele.lo(songlistcreature.divtitle,1/9,1/18,7/9,2/18)
                                    songlistcreature.div.appendChild(songlistcreature.divtitle)
                                    songlistcreature.divtitle.innerHTML = songlistcreature.artist
                                     songlistcreature.divtitle.style.margin = "auto"
                                    songlistcreature.divtitle.style.borderWidth = "3px"
                                    songlistcreature.divtitle.style.borderStyle = "double"
                                    songlistcreature.divtitle.style.borderTopLeftRadius = "7px"
                                    songlistcreature.divtitle.style.borderTopRightRadius = "7px"
                                    songlistcreature.divtitle.style.textAlign = "center"
                                    songlistcreature.divtitle.style.align = "center"
                                    songlistcreature.divtitle.style.display = "flex"
                                    songlistcreature.divtitle.style.justifyContent= "center"
                                    songlistcreature.divtitle.style.alignItems= "center"
                                    songlistcreature.divtitle.style.borderColor = songlistcreature.bordercolor
                                                                                      if(songlistcreature.android){
                                                                                            songlistcreature.divtitle.style.fontSize = "2.7em"

                                                                                      }
                                     DeepJS.ele.lo(songlistcreature.divsongsearch,1/9,3/18,7/9,1/18)
                                      songlistcreature.div.appendChild(songlistcreature.divsongsearch)
                                      songlistcreature.divsongsearch.placeholder = "search"
                                      songlistcreature.divsongsearch.style.borderRightStyle = "double"
                                      songlistcreature.divsongsearch.style.borderRightWidth = "3px"
                                      songlistcreature.divsongsearch.style.borderLeftStyle = "double"
                                      songlistcreature.divsongsearch.style.borderLeftWidth = "3px"
                                      songlistcreature.divsongsearch.style.borderColor = songlistcreature.bordercolor
                                      songlistcreature.divsongsearch.style.textAlign = "center"
                                       if(songlistcreature.android){songlistcreature.divsongsearch.style.fontSize = "1.9em"}
                                      songlistcreature.divsongsearch.oninput = function(){
                                      songlistcreature.divsongs.innerHTML = ""
                                      songlistcreature.songlistsongs = []
                                      	  for(songlistcreature.eee = 0; songlistcreature.eee < songlistcreature.songlist.length; songlistcreature.eee++){
                                            if(songlistcreature.songlist[songlistcreature.eee].toUpperCase().indexOf(songlistcreature.divsongsearch.value.toUpperCase()) != -1){
                                            songlistcreature.songlistaddsong(songlistcreature.songlist[songlistcreature.eee])
                                            }
                                      	  }
                                        }
                                     DeepJS.ele.lo(songlistcreature.divsongs,1/9,4/18,7/9,6/18)
                                       songlistcreature.div.appendChild(songlistcreature.divsongs)
                                                       songlistcreature.divsongs.style.overflow = "scroll"
                                                       songlistcreature.divsongs.style.userSelect = "none"
                                      songlistcreature.divsongs.style.borderRightStyle = "double"
                                      songlistcreature.divsongs.style.borderRightWidth = "3px"
                                      songlistcreature.divsongs.style.borderRightColor = songlistcreature.bordercolor
                                        songlistcreature.divsongs.style.borderLeftStyle = "double"
                                        songlistcreature.divsongs.style.borderLeftWidth = "3px"
                                        songlistcreature.divsongs.style.borderLeftColor = songlistcreature.bordercolor
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
                                                          DeepJS.ele.lo(songlistcreature.timemarkerholder,1/9,10/18,7/9,1/18)
                                                          songlistcreature.div.appendChild(songlistcreature.timemarkerholder)
                                                                            songlistcreature.timemarkerholder.style.borderRightStyle = "double"
                                                                            songlistcreature.timemarkerholder.style.borderRightWidth = "3px"
                                                                            songlistcreature.timemarkerholder.style.borderRightColor = songlistcreature.bordercolor
                                                                            songlistcreature.timemarkerholder.style.borderBottomStyle = "double"
                                                                            songlistcreature.timemarkerholder.style.borderBottomWidth = "3px"
                                                                            songlistcreature.timemarkerholder.style.borderBottomColor = songlistcreature.bordercolor
                                       songlistcreature.timemarker.style.position = "absolute"
                                       songlistcreature.timemarker.style.left = "0"
                                       songlistcreature.timemarker.style.right = "100%"
                                       songlistcreature.timemarker.style.top = "0"
                                       songlistcreature.timemarker.style.bottom = "0"
                                       songlistcreature.timemarkerholder.appendChild(songlistcreature.timemarker)
                                       songlistcreature.timemarker.style.backgroundColor = "rgba(152, 245, 153, 0.7)"
                                                            DeepJS.ele.lo(songlistcreature.divtrackname,1/9,10/18,7/9,1/18)
                                                                             songlistcreature.div.appendChild(songlistcreature.divtrackname)
                                                                             if(songlistcreature.android){songlistcreature.divtrackname.style.fontSize = "1.9em"}
                                                                             songlistcreature.divtrackname.style.textAlign = "center"
                                                                             songlistcreature.divtrackname.style.userSelect = "none"
                                                                             songlistcreature.divtrackname.style.backgroundColor = "rgba(0,0,0,0)"
                                                                             songlistcreature.divtrackname.style.display = "flex"
                                                                             songlistcreature.divtrackname.style.justifyContent= "center"
                                                                            songlistcreature.divtrackname.style.alignItems= "center"
                                                                          songlistcreature.divtrackname.style.borderColor = songlistcreature.bordercolor
                                                                             songlistcreature.divtrackname.onmouseup = function(e){
                                                                                songlistcreature.divaudioplayer.currentTime = Math.round((e.layerX / songlistcreature.divtrackname.getBoundingClientRect().width) * songlistcreature.divaudioplayer.duration)
                                                                             }
                                     DeepJS.ele.lo(songlistcreature.divplaylist,2/9,11/18,6/9,6/18)
                                       songlistcreature.div.appendChild(songlistcreature.divplaylist)
                                                                               songlistcreature.divplaylist.style.borderWidth = "3px"
                                                                               songlistcreature.divplaylist.style.borderColor = songlistcreature.bordercolor
                                                                                 songlistcreature.divplaylist.style.borderStyle = "double"
                                                                                 songlistcreature.divplaylist.style.borderBottomRightRadius = "7px"
                                       songlistcreature.divplaylist.style.overflow = "scroll"
                                                    DeepJS.ele.lo(songlistcreature.divmenubar,1/9,11/18,1/9,6/18)
                                                    songlistcreature.div.appendChild(songlistcreature.divmenubar)
                                                                                 songlistcreature.divmenubar.style.borderStyle = "double"
                                                                                 songlistcreature.divmenubar.style.borderWidth = "3px"
                                                                                 songlistcreature.divmenubar.style.borderBottomLeftRadius = "7px"
                                                                                 songlistcreature.divmenubar.style.borderColor = songlistcreature.bordercolor
                                                                DeepJS.ele.lo(songlistcreature.divmenubarbtnplay,0,0,1,1/6)
                                                                songlistcreature.divmenubar.appendChild(songlistcreature.divmenubarbtnplay)
                                                                songlistcreature.divmenubarbtnplay.style.borderStyle = "solid"
                                                                songlistcreature.divmenubarbtnplay.style.borderColor = songlistcreature.bordercolor
                                                                songlistcreature.divmenubarbtnplay.style.borderRadius = "7px"
                                                                songlistcreature.divmenubarbtnplay.style.userSelect = "none"
                                                                songlistcreature.divmenubarbtnplay.style.backgroundImage = "url(icons/Pause.png)"
                                                                songlistcreature.divmenubarbtnplay.style.backgroundSize = "100% auto"
                                                                songlistcreature.divmenubarbtnplay.style.backgroundRepeat = "space"
                                                                songlistcreature.divmenubarbtnplay.onclick = function(){
                                                                    if(songlistcreature.divaudioplayer.paused == true){
                                                                    songlistcreature.divaudioplayer.play()
                                                                    songlistcreature.divmenubarbtnplay.style.backgroundImage = "url(icons/Pause.png)"
                                                                    songlistcreature.playing = true

                                                                    }else{
                                                                    songlistcreature.divaudioplayer.pause()
                                                                    songlistcreature.divmenubarbtnplay.style.backgroundImage = "url(icons/Play.png)"
                                                                    songlistcreature.playing = false

                                                                    }
                                                                }

                                                                                                            DeepJS.ele.lo(songlistcreature.divmenubarbtnshuffle,0,1/6,1,1/6)
                                                                                                            songlistcreature.divmenubar.appendChild(songlistcreature.divmenubarbtnshuffle)
                                                                                                            songlistcreature.divmenubarbtnshuffle.style.borderStyle = "solid"
                                                                                                            songlistcreature.divmenubarbtnshuffle.style.borderColor = songlistcreature.bordercolor
                                                                                                            songlistcreature.divmenubarbtnshuffle.style.borderRadius = "7px"
                                                                songlistcreature.divmenubarbtnshuffle.style.backgroundImage = "url(icons/Shuffle.png)"
                                                                songlistcreature.divmenubarbtnshuffle.style.backgroundSize = "100% auto"
                                                                                                            songlistcreature.divmenubarbtnshuffle.style.userSelect = "none"
                                                                                                            songlistcreature.divmenubarbtnshuffle.style.backgroundRepeat = "space"
                                                                                                            songlistcreature.divmenubarbtnshuffle.onclick = function(){
                                                                                                            songlistcreature.divmenubarbtnshuffle.style.backgroundImage = "url(icons/ShuffleClick.png)"
                                                                                                            songlistcreature.shufflefifty()

                                                                                                            }

                                                                                                            DeepJS.ele.lo(songlistcreature.divmenubarbtnloop,0,2/6,1,1/6)
                                                                                                            songlistcreature.divmenubar.appendChild(songlistcreature.divmenubarbtnloop)
                                                                                                            songlistcreature.divmenubarbtnloop.style.backgroundImage = "url(icons/LoopOff.png)"
                                                                                                            songlistcreature.divmenubarbtnloop.style.backgroundSize = "100% auto"
                                                                                                            songlistcreature.divmenubarbtnloop.style.borderStyle = "solid"
                                                                                                            songlistcreature.divmenubarbtnloop.style.borderColor = songlistcreature.bordercolor
                                                                                                            songlistcreature.divmenubarbtnloop.style.borderRadius = "7px"
                                                                                                            songlistcreature.divmenubarbtnloop.style.backgroundRepeat = "space"
                                                                                                            songlistcreature.divmenubarbtnloop.onclick = function(){
                                                                                                                if(songlistcreature.looping == false){
                                                                                                                songlistcreature.looping = true
                                                                                                                songlistcreature.divmenubarbtnloop.style.backgroundImage = "url(icons/LoopOn.png)"
                                                                                                                }else{
                                                                                                                songlistcreature.looping = false
                                                                                                                songlistcreature.divmenubarbtnloop.style.backgroundImage = "url(icons/LoopOff.png)"
                                                                                                                }
                                                                                                            }
                    //smell of plants just getting first rain
                    //listen to music in the music editor
                                        DeepJS.files.find(songlistcreature.songindex, function(foundstring){
                                            songlistcreature.songlist = foundstring.split("~~~")
                                                for(songlistcreature.yy = 0; songlistcreature.yy < songlistcreature.songlist.length; songlistcreature.yy++){
                                                  songlistcreature.songlistaddsong(songlistcreature.songlist[songlistcreature.yy])
                                                }
                                                document.body.appendChild(songlistcreature.div)

                                                                                                  songlistcreature.div.style.display = "block"
                                                                                                  //generate hints and fade hints 10s
                                        })



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
                                                            this.div.style.borderColor = songlistcreature.bordercolor
                                                            if(songlistcreature.android){this.div.style.fontSize = "2em"}
                                                            this.div.style.borderStyle = "solid"
                                                            this.div.style.borderWidth = "1px"
                                                            this.div.style.textShadow = songlistcreature.songtextshadow
                                                            this.div.style.color = songlistcreature.songtextcolor
                                                            this.div.style.fontFamily = songlistcreature.songfont
                                                            this.div.style.fontSize = songlistcreature.songtextsize
                                                            this.div.style.whiteSpace = "nowrap"
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
                hem.style.color = songlistcreature.playlisttextcolor
                hem.style.fontFamily = songlistcreature.playlistfont
                hem.style.fontSize = songlistcreature.playlisttextsize
                hem.style.textShadow = songlistcreature.playlisttextshadow
                hem.style.userSelect = "none"

                hem.style.backgroundColor = "rgba(255,255,255,0)"
                hem.style.borderColor = songlistcreature.bordercolor
                hem.style.borderWidth = "1px"
                hem.style.borderStyle = "double"
                hem.style.whiteSpace = "nowrap"

                if(songlistcreature.android){hem.style.fontSize = "1.7em"}
                hem.extension = extension
                hem.onclick = function(){songlistcreature.play(hem.number)}
                songlistcreature.playlist.push(hem)
                songlistcreature.divplaylist.appendChild(hem)
                    if(songlistcreature.playlist.length == 1){
                        songlistcreature.play(0)
                    }
            },

                play: function(playlistnumber){
                    songlistcreature.divtrackname.innerHTML = songlistcreature.playlist[playlistnumber].innerHTML
                    songlistcreature.divaudioplayer.src = "songs/"+songlistcreature.playlist[playlistnumber].innerHTML + songlistcreature.playlist[playlistnumber].extension
                    songlistcreature.divaudioplayer.play()
                    songlistcreature.playing = true
                    songlistcreature.divmenubarbtnplay.backgroundImage = "url(icons/Pause.png)"
                    for(songlistcreature.uuuuu = 0; songlistcreature.uuuuu < songlistcreature.playlist.length; songlistcreature.uuuuu++){songlistcreature.playlist[songlistcreature.uuuuu].style.textDecoration = "none"}
                    songlistcreature.playlist[playlistnumber].style.textDecoration = "underline"
                },

                shufflefifty: function(){

                    songlistcreature.intervals = 0
                        songlistcreature.interval = setInterval(function(){
                        var number = Math.floor(Math.random() * songlistcreature.songlistsongs.length )
                        songlistcreature.intervals++
                        var selected = songlistcreature.songlistsongs[number]
                                                       songlistcreature.addtoplaylist(selected.name,selected.extension)
                                                       if(songlistcreature.intervals > 50){
                                                        songlistcreature.divmenubarbtnshuffle.style.backgroundImage = "url(icons/Shuffle.png)"
                                                       clearInterval(songlistcreature.interval)
                                                       songlistcreature.intervals = 0
                                                       }
                        },20)},


                page: function(who){
                                         DeepJS.ele.lo(songlistcreature.div,0,0,1,1)
                                            songlistcreature.init(who)
                                            songlistcreature.div.style.backgroundImage = "url(background.png)"
                                                  },

       }