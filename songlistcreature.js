//images for buttons//songprogresstextcenter, colorthemes, wordnonwrap
//size autoplayers
//singlelinetext?
//get lighters

 let e = {
    artist: null,

    start: function(artist){
    if(innerWidth < innerHeight){
    this.android = true
    }else{
    this.android = false
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
                    this.android = true
                    }else{
                    this.android = false
                    }
                this.artist = artist    //i have my file recognition in an unusually powerful format
     /*      DeepJS.files.find("color.theme",function(textt){ //colortheme
                //DeepJS is my object, housed in another page, holding deep javascript abilities like file manipulation
                //then .files is the subobject within the DeepJS object
                //then .find is the ability to input two parameters:
                //          the location of the file relative to the user, so if it were "styles/color.theme", it would be, from the perspective of the main website location, in folder "styles" and as file "color.theme"
                // so the location as parameter one
                //and then the second parameter is an entire function, which is this thing we are in now
                //and explains what will happen when the variable 'text' comes in
                //so, behind the scenes, DeepJS.files.find is doing a bunch of lines of code
                //opening up an xmlhttprequest and the various steps required, typically, in javascript to read a file.
                //so back to the point: my file reading is exceptionally powerful
                //because it is intuitive to use and streamlines a normally complicated process
                //in to something i can creatively make file types with and play with
                //i often focus on improving my tools ~and often doing so is rewarding
                let text = textt.substring(textt.indexOf("<Background Color>")+18,textt.indexOf("</Background Color>"))
                        this.div.style.backgroundColor = text.substring((text.indexOf("<full>")+6),(text.indexOf("</full>")))
                        this.prettydiv.style.backgroundColor = text.substring((text.indexOf("<pretty>")+8),(text.indexOf("</pretty>")))
                        this.divtitle.style.backgroundColor = text.substring((text.indexOf("<title>")+7),(text.indexOf("</title>")))
                        this.divsongsearch.style.backgroundColor = text.substring((text.indexOf("<songsearch>")+12),(text.indexOf("</songsearch>")))
                        this.divsongs.style.backgroundColor = text.substring((text.indexOf("<songs>")+7),(text.indexOf("</songs>")))
                        this.divtrackname.style.backgroundColor = text.substring((text.indexOf("<playingtrackname>")+18),(text.indexOf("</playingtrackname>")))
                        this.divplaylist.style.backgroundColor = text.substring((text.indexOf("<playlist>")+10),(text.indexOf("</playlist>")))
                        this.divmenubar.style.backgroundColor = text.substring((text.indexOf("<playlistmenubar>")+17),(text.indexOf("</playlistmenubar>")))
                        this.divmenubarbtnplay.style.backgroundColor = text.substring((text.indexOf("<playbutton>")+12),(text.indexOf("</playbutton>")))
                        this.divmenubarbtnshuffle.style.backgroundColor = text.substring((text.indexOf("<shufflebutton>")+15),(text.indexOf("</shufflebutton>")))
                        this.divmenubarbtnloop.style.backgroundColor = text.substring((text.indexOf("<loopbutton>")+12),(text.indexOf("</loopbutton>")))
                text = textt.substring(textt.indexOf("<Text Color>")+12,textt.indexOf("</Text Color>"))
                        this.div.style.color = text.substring((text.indexOf("<full>")+6),(text.indexOf("</full>")))
                        this.prettydiv.style.color = text.substring((text.indexOf("<pretty>")+8),(text.indexOf("</pretty>")))
                        this.divtitle.style.color = text.substring((text.indexOf("<title>")+7),(text.indexOf("</title>")))
                        this.divsongsearch.style.color = text.substring((text.indexOf("<songsearch>")+12),(text.indexOf("</songsearch>")))
                        this.divsongs.style.color = text.substring((text.indexOf("<songs>")+7),(text.indexOf("</songs>")))
                        this.divtrackname.style.color = text.substring((text.indexOf("<playingtrackname>")+18),(text.indexOf("</playingtrackname>")))
                        this.divplaylist.style.color = text.substring((text.indexOf("<playlist>")+10),(text.indexOf("</playlist>")))
                        this.divmenubar.style.color = text.substring((text.indexOf("<playlistmenubar>")+17),(text.indexOf("</playlistmenubar>")))
                        this.divmenubarbtnplay.style.color = text.substring((text.indexOf("<playbutton>")+12),(text.indexOf("</playbutton>")))
                        this.divmenubarbtnshuffle.style.color = text.substring((text.indexOf("<shufflebutton>")+15),(text.indexOf("</shufflebutton>")))
                        this.divmenubarbtnloop.style.color = text.substring((text.indexOf("<loopbutton>")+12),(text.indexOf("</loopbutton>")))
  text = textt.substring(textt.indexOf("<Text Size>")+11,textt.indexOf("</Text Size>"))
                         this.div.style.fontSize = text.substring((text.indexOf("<full>")+6),(text.indexOf("</full>")))
                         this.prettydiv.style.fontSize = text.substring((text.indexOf("<pretty>")+8),(text.indexOf("</pretty>")))
                         this.divtitle.style.fontSize = text.substring((text.indexOf("<title>")+7),(text.indexOf("</title>")))
                         this.divsongsearch.style.fontSize = text.substring((text.indexOf("<songsearch>")+12),(text.indexOf("</songsearch>")))
                         this.divsongs.style.fontSize = text.substring((text.indexOf("<songs>")+7),(text.indexOf("</songs>")))
                         this.divtrackname.style.fontSize = text.substring((text.indexOf("<playingtrackname>")+18),(text.indexOf("</playingtrackname>")))
                         this.divplaylist.style.fontSize = text.substring((text.indexOf("<playlist>")+10),(text.indexOf("</playlist>")))
                         this.divmenubar.style.fontSize = text.substring((text.indexOf("<playlistmenubar>")+17),(text.indexOf("</playlistmenubar>")))
                         this.divmenubarbtnplay.style.fontSize = text.substring((text.indexOf("<playbutton>")+12),(text.indexOf("</playbutton>")))
                         this.divmenubarbtnshuffle.style.fontSize = text.substring((text.indexOf("<shufflebutton>")+15),(text.indexOf("</shufflebutton>")))
                         this.divmenubarbtnloop.style.fontSize = text.substring((text.indexOf("<loopbutton>")+12),(text.indexOf("</loopbutton>")))
                          text = textt.substring(textt.indexOf("<Font>")+6,textt.indexOf("</Font>"))
                                let font = FontFace(text.substring((text.indexOf("<full>")+6),(text.indexOf("</full>"))),"url(fonts/"+text.substring((text.indexOf("<full>")+6),(text.indexOf("</full>")))+".ttf)")
                                            font.load().then(function(){document.fonts.add(font)}.bind(this))
                                                  this.div.style.fontFamily = text.substring((text.indexOf("<full>")+6),(text.indexOf("</full>")))
                                                  this.prettydiv.style.fontFamily = text.substring((text.indexOf("<pretty>")+8),(text.indexOf("</pretty>")))
                                                  this.divtitle.style.fontFamily = text.substring((text.indexOf("<title>")+7),(text.indexOf("</title>")))
                                                  this.divsongsearch.style.fontFamily = text.substring((text.indexOf("<songsearch>")+12),(text.indexOf("</songsearch>")))
                                                  this.divsongs.style.fontFamily = text.substring((text.indexOf("<songs>")+7),(text.indexOf("</songs>")))
                                                  this.divtrackname.style.fontFamily = text.substring((text.indexOf("<playingtrackname>")+18),(text.indexOf("</playingtrackname>")))
                                                  this.divplaylist.style.fontFamily = text.substring((text.indexOf("<playlist>")+10),(text.indexOf("</playlist>")))
                                                  this.divmenubar.style.fontFamily = text.substring((text.indexOf("<playlistmenubar>")+17),(text.indexOf("</playlistmenubar>")))
                                                  this.divmenubarbtnplay.style.fontFamily = text.substring((text.indexOf("<playbutton>")+12),(text.indexOf("</playbutton>")))
                                                  this.divmenubarbtnshuffle.style.fontFamily = text.substring((text.indexOf("<shufflebutton>")+15),(text.indexOf("</shufflebutton>")))
                                                  this.divmenubarbtnloop.style.fontFamily = text.substring((text.indexOf("<loopbutton>")+12),(text.indexOf("</loopbutton>")))
                text = textt.substring(textt.indexOf("<Border Color>")+14,textt.indexOf("</Border Color>"))
                         this.div.style.fontSize = text.substring((text.indexOf("<full>")+6),(text.indexOf("</full>")))
                         this.prettydiv.style.fontSize = text.substring((text.indexOf("<pretty>")+8),(text.indexOf("</pretty>")))
                         this.divtitle.style.borderTopColor = text.substring((text.indexOf("<main>")+6),(text.indexOf("</main>")))
                         this.divtitle.style.borderLeftColor = text.substring((text.indexOf("<main>")+6),(text.indexOf("</main>")))
                         this.divtitle.style.borderRightColor = text.substring((text.indexOf("<main>")+6),(text.indexOf("</main>")))
                         this.divsongsearch.style.borderLeftColor = text.substring((text.indexOf("<main>")+6),(text.indexOf("</main>")))
                         this.divsongsearch.style.borderRightColor = text.substring((text.indexOf("<main>")+6),(text.indexOf("</main>")))
                         this.divsongs.style.borderLeftColor = text.substring((text.indexOf("<main>")+6),(text.indexOf("</main>")))
                         this.divsongs.style.borderRightColor = text.substring((text.indexOf("<main>")+6),(text.indexOf("</main>")))
                         this.divtrackname.style.borderLeftColor = text.substring((text.indexOf("<main>")+6),(text.indexOf("</main>")))
                         this.divtrackname.style.borderRightColor = text.substring((text.indexOf("<main>")+6),(text.indexOf("</main>")))
                         this.divplaylist.style.borderRightColor = text.substring((text.indexOf("<main>")+6),(text.indexOf("</main>")))
                         this.divmenubar.style.borderLeftColor = text.substring((text.indexOf("<main>")+6),(text.indexOf("</main>")))
                         this.divplaylist.style.borderBottomColor = text.substring((text.indexOf("<main>")+6),(text.indexOf("</main>")))
                         this.divmenubar.style.borderBottomColor = text.substring((text.indexOf("<main>")+6),(text.indexOf("</main>")))
*/


 /*                     this.div
                        this.divtitle
                        this.divmenubutton: document.createElement("div"),
                        this.menu: document.createElement("div"),
                        ivsongsearch: document.createElement("input"),
                        divsongs: document.createElement("div"),
                        //as i add the 'this.' before removing the ': document.create' to get just div and the thing name,
                        //I symbolize in my mind how God connects with good beings
                        //before they lose anything
                        //so they can go through life strong */
                /*        this.divaudioplayer: document.createElement("audio"),
                        this.divplaylist: document.createElement("div"),
                        this.timemarker: document.createElement("div"),
                        this.timemarkerholder: document.createElement("div"), */
                //})
                //speak to people as who they want to be sometimes???
                songlistcreature.checkcircuit = setInterval(function(){songlistcreature.update()},20)
                 songlistcreature.div.style.display = "none"
                DeepJS.ele.lo(songlistcreature.div,0,0,1,1)
                songlistcreature.div.style.position = "fixed"
                document.body.appendChild(songlistcreature.div)
                songlistcreature.div.style.backgroundColor = "black"
                songlistcreature.div.style.borderColor = songlistcreature.colorprimary
                songlistcreature.div.style.borderRadius = "15px"
                songlistcreature.div.style.borderStyle = "double"
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
                   songlistcreature.timemarker.style.position = "absolute"
                   songlistcreature.timemarker.style.left = "0"
                   songlistcreature.timemarker.style.right = "100%"
                   songlistcreature.timemarker.style.top = "0"
                   songlistcreature.timemarker.style.bottom = "0"
                   songlistcreature.timemarkerholder.appendChild(songlistcreature.timemarker)
                   songlistcreature.timemarker.style.backgroundColor = "rgba(152, 245, 153, 0.7)"
                                        DeepJS.ele.lo(songlistcreature.divtrackname,1/9,10/18,7/9,1/18)
                                                         songlistcreature.div.appendChild(songlistcreature.divtrackname)
                                                         songlistcreature.divtrackname.style.color = songlistcreature.colorprimary
                                                         songlistcreature.divtrackname.style.textSize = "1.2em"
                                                         songlistcreature.divtrackname.style.textAlign = "center"
                                                         songlistcreature.divtrackname.style.userSelect = "none"
                                                                         songlistcreature.divtrackname.style.display = "flex"
                                                                         songlistcreature.divtrackname.style.justifyContent= "center"
                                                                         songlistcreature.divtrackname.style.alignItems= "center"
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
                                DeepJS.ele.lo(songlistcreature.divmenubar,1/9,11/18,1/9,6/18)
                                songlistcreature.div.appendChild(songlistcreature.divmenubar)
                                songlistcreature.divmenubar.style.backgroundColor = "Black"
                                songlistcreature.divmenubar.style.borderBottomStyle = "double"
                                                             songlistcreature.divmenubar.style.borderBottomWidth = "3px"
                                                             songlistcreature.divmenubar.style.borderBottomColor = songlistcreature.colorprimary
                                                             songlistcreature.divmenubar.style.borderLeftStyle = "double"
                                                             songlistcreature.divmenubar.style.borderLeftWidth = "3px"
                                                             songlistcreature.divmenubar.style.borderLeftColor = songlistcreature.colorprimary
                                                             songlistcreature.divmenubar.style.borderBottomLeftRadius = "7px"

                                            DeepJS.ele.lo(songlistcreature.divmenubarbtnplay,0,0,1,1/6)
                                            songlistcreature.divmenubar.appendChild(songlistcreature.divmenubarbtnplay)
                                            songlistcreature.divmenubarbtnplay.style.borderStyle = "solid"
                                            songlistcreature.divmenubarbtnplay.style.borderColor = songlistcreature.colorprimary
                                            songlistcreature.divmenubarbtnplay.style.borderRadius = "7px"
                                            songlistcreature.divmenubarbtnplay.style.userSelect = "none"
                                            songlistcreature.divmenubarbtnplay.style.backgroundImage = "url(icons/Pause.png)"
                                            songlistcreature.divmenubarbtnplay.style.backgroundSize = "100% auto"
                                            songlistcreature.divmenubarbtnplay.style.color = songlistcreature.colorprimary
                                            songlistcreature.divmenubarbtnplay.onclick = function(){
                                                if(songlistcreature.divaudioplayer.paused == true){
                                                songlistcreature.divaudioplayer.play()
                                                songlistcreature.divmenubarbtnplay.style.backgroundImage = "url(icons/Pause.png)"
                                                songlistcreature.playing = true

                                                }else{
                                                songlistcreature.divaudioplayer.pause()
                                                songlistcreature.divmenubarbtnplay.style.backgroundImage = "url(icons/Play.png)"
                                                songlistcreature.playing = false
                                                songlistcreature.divtrackname.style.color = songlistcreature.colorprimary

                                                }
                                            }

                                                                                        DeepJS.ele.lo(songlistcreature.divmenubarbtnshuffle,0,1/6,1,1/6)
                                                                                        songlistcreature.divmenubar.appendChild(songlistcreature.divmenubarbtnshuffle)
                                                                                        songlistcreature.divmenubarbtnshuffle.style.borderStyle = "solid"
                                                                                        songlistcreature.divmenubarbtnshuffle.style.borderColor = songlistcreature.colorprimary
                                                                                        songlistcreature.divmenubarbtnshuffle.style.borderRadius = "7px"
                                            songlistcreature.divmenubarbtnshuffle.style.backgroundImage = "url(icons/Shuffle.png)"
                                            songlistcreature.divmenubarbtnshuffle.style.backgroundSize = "100% auto"
                                                                                        songlistcreature.divmenubarbtnshuffle.style.color = "Black"
                                                                                        songlistcreature.divmenubarbtnshuffle.style.userSelect = "none"
                                                                                        songlistcreature.divmenubarbtnshuffle.onclick = function(){
                                                                                        songlistcreature.divmenubarbtnshuffle.style.backgroundImage = "url(icons/ShuffleClick.png)"
                                                                                        songlistcreature.shufflefifty()

                                                                                        }

                                                                                        DeepJS.ele.lo(songlistcreature.divmenubarbtnloop,0,2/6,1,1/6)
                                                                                        songlistcreature.divmenubar.appendChild(songlistcreature.divmenubarbtnloop)
                                                                                        songlistcreature.divmenubarbtnloop.style.backgroundImage = "url(icons/LoopOff.png)"
                                                                                        songlistcreature.divmenubarbtnloop.style.backgroundSize = "100% auto"
                                                                                        songlistcreature.divmenubarbtnloop.style.borderStyle = "solid"
                                                                                        songlistcreature.divmenubarbtnloop.style.borderColor = songlistcreature.colorprimary
                                                                                        songlistcreature.divmenubarbtnloop.style.borderRadius = "7px"
                                                                                        songlistcreature.divmenubarbtnloop.style.color = "Black"
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
                hem.style.whiteSpace = "nowrap"
                if(this.android){}
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
                    songlistcreature.divmenubarbtnplay.backgroundImage = "url(icons/Pause.png)"
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
                                                        songlistcreature.divmenubarbtnshuffle.style.backgroundImage = "url(icons/Shuffle.png)"
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