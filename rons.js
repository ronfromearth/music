

 let e = {
    start: function(){
    this.div = document.createElement("div")
    document.body.appendChild(this.div)
    this.div.style.backgroundImage = "url(background.png)"
    DeepJS.ele.lo(this.div,0,0,1,1)
    this.div.style.backgroundAttachment = "fixed"
    this.div.style.backgroundRepeat = "repeat"

        songlistcreature.init()
        songlistcreature.div.style.display = "block"
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

        artist: "Ron Elliott",

        songfolder: "songs",
        songindex: "songlist.txt",
        songlist: [],
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
                init: function(){
                songlistcreature.checkcircuit = setInterval(function(){songlistcreature.update()},20)
                 songlistcreature.div.style.display = "none"
                DeepJS.ele.lo(songlistcreature.div,0,0,1,1)
                songlistcreature.div.style.position = "fixed"
                document.body.appendChild(songlistcreature.div)
                songlistcreature.div.style.backgroundColor = "black"
                songlistcreature.div.style.borderColor = "White"
                songlistcreature.div.style.borderRadius = "15px"
                songlistcreature.div.style.borderStyle = "double"
                 songlistcreature.divpretty = document.createElement("div")
                    DeepJS.ele.lo(songlistcreature.divpretty,1/18,1/36,16/18,34/36)
                    songlistcreature.div.appendChild(songlistcreature.divpretty)
                    songlistcreature.divpretty.style.backgroundColor = "rgba(211,211,255,0.1)"
                    songlistcreature.divpretty.style.borderStyle = "solid"
                    songlistcreature.divpretty.style.borderWidth = "3px"
                    songlistcreature.divpretty.style.borderRadius = "7px"
                    songlistcreature.divpretty.style.borderColor = "white"
                 DeepJS.ele.lo(songlistcreature.divtitle,1/9,1/18,7/9,2/18)
                songlistcreature.div.appendChild(songlistcreature.divtitle)
                songlistcreature.divtitle.innerHTML = songlistcreature.artist
                 songlistcreature.divtitle.style.margin = "auto"
                songlistcreature.divtitle.style.color = "White"
                songlistcreature.divtitle.style.borderColor = "White"
                songlistcreature.divtitle.style.borderWidth = "7px"
                songlistcreature.divtitle.style.borderStyle = "double"
                songlistcreature.divtitle.style.borderRadius = "17px"
                songlistcreature.divtitle.style.textAlign = "center"
                songlistcreature.divtitle.style.align = "center"
                songlistcreature.divtitle.style.fontSize = "2.7em"
                 DeepJS.ele.lo(songlistcreature.divmenubutton,1/9,1/18,1/9,1/18)
                songlistcreature.div.appendChild(songlistcreature.divmenubutton)
                 DeepJS.ele.lo(songlistcreature.menu,1/2,0,1/4,1)
                 songlistcreature.menu.style.position = "fixed"
                 songlistcreature.menu.display = "none"
                 document.body.appendChild(songlistcreature.menu)
                 DeepJS.ele.lo(songlistcreature.divsongsearch,1/9,3/18,7/9,1/18)
                  songlistcreature.div.appendChild(songlistcreature.divsongsearch)
                  songlistcreature.divsongsearch.style.color = "White"
                  songlistcreature.divsongsearch.style.backgroundColor = "Black"
                  songlistcreature.divsongsearch.placeholder = "search"
                  songlistcreature.divsongsearch.style.textAlign = "center"
                  songlistcreature.divsongsearch.oninput = function(){
                  songlistcreature.divsongs.innerHTML = ""
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
                                   songlistcreature.divsongs.style.borderColor = "White"
                                   songlistcreature.divsongs.style.borderWidth = "3px"
                                   songlistcreature.divsongs.style.borderStyle = "double"
                                   songlistcreature.divsongs.style.borderRadius = "7px"
                 DeepJS.ele.lo(songlistcreature.divaudioplayer,1/9,10/18,7/9,1/18)
                   songlistcreature.div.appendChild(songlistcreature.divaudioplayer)
                   songlistcreature.divaudioplayer.controls = false
                   songlistcreature.divaudioplayer.autoplay = true
                   songlistcreature.divaudioplayer.onended = function(){
                   songlistcreature.playliston = songlistcreature.playliston + 1
                   if(songlistcreature.playliston > songlistcreature.playlist.length-1){songlistcreature.playliston = 0}
                   songlistcreature.play(songlistcreature.playliston)
                   }
                   songlistcreature.divaudioplayer.onready = function(){songlistcreature.divaudioplayer.play()}
                 songlistcreature.timemarkerholder = document.createElement("div")
                                      DeepJS.ele.lo(songlistcreature.timemarkerholder,1/9,10/18,7/9,1/18)
                                      songlistcreature.div.appendChild(songlistcreature.timemarkerholder)
                 songlistcreature.timemarker = document.createElement("div")
                   songlistcreature.timemarker.style.position = "absolute"
                   songlistcreature.timemarker.style.left = "0"
                   songlistcreature.timemarker.style.right = "100%"
                   songlistcreature.timemarker.style.top = "0"
                   songlistcreature.timemarker.style.bottom = "0"
                   songlistcreature.timemarkerholder.appendChild(songlistcreature.timemarker)
                   songlistcreature.timemarker.style.backgroundColor = "rgba(152, 245, 153, 0.7)"
                   songlistcreature.timemarker.style.borderColor = "White"
                   songlistcreature.timemarker.style.borderWidth = "1px"
                   songlistcreature.timemarker.style.borderStyle = "solid"
                   songlistcreature.timemarker.style.borderRadius = "7px"
                 songlistcreature.divtrackname = document.createElement("div")
                                        DeepJS.ele.lo(songlistcreature.divtrackname,1/9,10/18,7/9,1/18)
                                                         songlistcreature.div.appendChild(songlistcreature.divtrackname)
                                                         songlistcreature.divtrackname.style.color = "White"
                                                         songlistcreature.divtrackname.style.textSize = "1.2em"
                                                         songlistcreature.divtrackname.style.borderColor = "White"
                                                         songlistcreature.divtrackname.style.borderWidth = "1px"
                                                         songlistcreature.divtrackname.style.borderStyle = "solid"
                                                         songlistcreature.divtrackname.style.borderRadius = "7px"
                                                         songlistcreature.divtrackname.style.textAlign = "center"
                                                         songlistcreature.divtrackname.style.userSelect = "none"
                                                         songlistcreature.divtrackname.onmouseup = function(e){
                                                            songlistcreature.divaudioplayer.currentTime = Math.round((e.layerX / songlistcreature.divtrackname.getBoundingClientRect().width) * songlistcreature.divaudioplayer.duration)
                                                         }
                 DeepJS.ele.lo(songlistcreature.divplaylist,2/9,11/18,6/9,6/18)
                   songlistcreature.div.appendChild(songlistcreature.divplaylist)
                   songlistcreature.divplaylist.style.borderColor = "White"
                   songlistcreature.divplaylist.style.borderWidth = "7px"
                   songlistcreature.divplaylist.style.borderStyle = "double"
                   songlistcreature.divplaylist.style.borderRadius = "17px"
                   songlistcreature.divplaylist.style.overflow = "scroll"
                 songlistcreature.divplaylist.menubar = document.createElement("div")
                                DeepJS.ele.lo(songlistcreature.divplaylist.menubar,1/9,11/18,1/9,6/18)
                                songlistcreature.div.appendChild(songlistcreature.divplaylist.menubar)
                                songlistcreature.divplaylist.menubar.style.backgroundImage = "linear-gradient(to top, rgba(38, 19, 71, 0.7),rgba(213, 230, 165, 0.7))"
                                songlistcreature.divplaylist.menubar.style.borderStyle = "double"
                                songlistcreature.divplaylist.menubar.style.borderColor = "White"
                                songlistcreature.divplaylist.menubar.style.borderWidth = "7px"
                                songlistcreature.divplaylist.menubar.style.borderRadius = "7px"
                 songlistcreature.divplaylist.menubar.btnplay = document.createElement("div")
                                            DeepJS.ele.lo(songlistcreature.divplaylist.menubar.btnplay,0,0,1,1/6)
                                            songlistcreature.divplaylist.menubar.appendChild(songlistcreature.divplaylist.menubar.btnplay)
                                            songlistcreature.divplaylist.menubar.btnplay.style.borderStyle = "solid"
                                            songlistcreature.divplaylist.menubar.btnplay.style.borderColor = "white"
                                            songlistcreature.divplaylist.menubar.btnplay.style.borderRadius = "7px"
                                            songlistcreature.divplaylist.menubar.btnplay.style.userSelect = "none"
                                            songlistcreature.divplaylist.menubar.btnplay.style.backgroundColor = "rgba(255,255,255,0.8)"
                                            songlistcreature.divplaylist.menubar.btnplay.style.color = "Black"
                                            songlistcreature.divplaylist.menubar.btnplay.innerHTML = "Play"
                                            songlistcreature.divplaylist.menubar.btnplay.onclick = function(){
                                                if(songlistcreature.divaudioplayer.paused == true){
                                                songlistcreature.divaudioplayer.play()
                                                songlistcreature.playing = true
                                                songlistcreature.divtrackname.style.color = "Green"
                                                songlistcreature.divplaylist.menubar.btnplay.style.backgroundColor = "rgba(66, 255, 95, 1)"
                                                }else{
                                                songlistcreature.divaudioplayer.pause()
                                                songlistcreature.playing = false
                                                songlistcreature.divtrackname.style.color = "White"
                                                songlistcreature.divplaylist.menubar.btnplay.style.backgroundColor = "rgba(255, 255, 255, 1)"
                                                }
                                            }
                 songlistcreature.divplaylist.menubar.btnshuffle = document.createElement("div")
                                                                                        DeepJS.ele.lo(songlistcreature.divplaylist.menubar.btnshuffle,0,1/6,1,1/6)
                                                                                        songlistcreature.divplaylist.menubar.appendChild(songlistcreature.divplaylist.menubar.btnshuffle)
                                                                                        songlistcreature.divplaylist.menubar.btnshuffle.style.borderStyle = "solid"
                                                                                        songlistcreature.divplaylist.menubar.btnshuffle.style.borderColor = "white"
                                                                                        songlistcreature.divplaylist.menubar.btnshuffle.style.borderRadius = "7px"
                                                                                        songlistcreature.divplaylist.menubar.btnshuffle.style.backgroundColor = "rgba(255,255,255,0.8)"
                                                                                        songlistcreature.divplaylist.menubar.btnshuffle.style.color = "Black"
                                                                                        songlistcreature.divplaylist.menubar.btnshuffle.innerHTML = "Shuffle"
                 songlistcreature.divplaylist.menubar.btnloop = document.createElement("div")
                                                                                        DeepJS.ele.lo(songlistcreature.divplaylist.menubar.btnloop,0,2/6,1,1/6)
                                                                                        songlistcreature.divplaylist.menubar.appendChild(songlistcreature.divplaylist.menubar.btnloop)
                                                                                        songlistcreature.divplaylist.menubar.btnloop.style.borderStyle = "solid"
                                                                                        songlistcreature.divplaylist.menubar.btnloop.style.borderColor = "white"
                                                                                        songlistcreature.divplaylist.menubar.btnloop.style.borderRadius = "7px"
                                                                                        songlistcreature.divplaylist.menubar.btnloop.style.backgroundColor = "rgba(255,255,255,0.8)"
                                                                                        songlistcreature.divplaylist.menubar.btnloop.style.color = "Black"
                                                                                        songlistcreature.divplaylist.menubar.btnloop.innerHTML = "Loop"
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
                                                            this.div.style.color = "White"
                                                            this.div.style.borderColor = "Black"
                                                            this.div.style.borderStyle = "solid"
                                                            this.div.style.borderWidth = "7px"
                                                            this.div.onclick = function(){
                                                            songlistcreature.addtoplaylist(this.name,this.extension)}.bind(this)
                                                            },
                                                    }
                                                    song.init()
                                                    songlistcreature.divsongs.appendChild(song.div)
                },

            addtoplaylist: function(hemstring,extension){
                let hem = document.createElement("div")
                DeepJS.ele.lo(hem,0,(songlistcreature.playlist.length)*(1/7),1,1/7)
                hem.innerHTML = hemstring
                hem.style.color = "White"
                hem.style.userSelect = "none"
                hem.style.backgroundColor = "rgba(255,255,255,0.2)"
                hem.style.borderColor = "White"
                hem.style.borderWidth = "3px"
                hem.style.borderStyle = "double"
                hem.extension = extension
                songlistcreature.playlist.push(hem)
                songlistcreature.divplaylist.appendChild(hem)
                    if(songlistcreature.playlist.length == 1){
                        songlistcreature.play(0)
                    }
            },

                play: function(playlistnumber){
                    songlistcreature.divtrackname.style.color = "Green"
                    songlistcreature.divplaylist.menubar.btnplay.style.backgroundColor = "rgba(66, 255, 95, 1)"
                    songlistcreature.divtrackname.innerHTML = songlistcreature.playlist[playlistnumber].innerHTML
                    songlistcreature.divaudioplayer.src = "songs/"+songlistcreature.playlist[playlistnumber].innerHTML + songlistcreature.playlist[playlistnumber].extension
                    songlistcreature.divaudioplayer.play()
                    songlistcreature.playing = true
                },

       }