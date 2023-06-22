let android = false
function start(){
    songlistcreature.divinit()
  songlistcreature.playlistinit()
  if(window.innerWidth < window.innerHeight){
android = true
  }
  }
  function inputchanged(){
	  let songsearch = document.getElementById("songsearch")
	  songlistcreature.currentsonglist = songlistcreature.songlist.filter(containstext)
	  document.getElementById("songlist").innerHTML = ""
	  songlistcreature.songlisttodiv(document.getElementById("songlist"))
  }
  function containstext(song){
	  if(song.toUpperCase().indexOf(document.getElementById("songsearch").value.toUpperCase()) == -1){return false}else{return true}
  }

  let songlistcreature = {

        artist: "Ron Elliott",

	  allosfavs: ["Wooden Box","Broken Heart 2017","On This Side of Heaven","Underground 0915","Open Up Your Heart","Ron's I Believe","February 2020","New Day","Old Blues","Holyman Revisited","Ron's ...some kind of","Ron's Guns and Roses","I Get High","Down On Me","So blue in blue","Chain Gang"],
	  //still wildflower
	  ronsfavs: [],

        superdiva: null,
        songlista: null,
        audiocontrolsa: null,
        playlista: null,
        artistnamea: null,
        songsearcha:null,

	  divinit: function(){
	    this.superdiva = document.createElement("div")
	    this.superdiva.style.fontSize = "1.1em"
	    this.superdiva.style.position = "fixed"
	    this.superdiva.style.zPosition = "1"
	    this.superdiva.style.display = "none"
	    this.superdiva.style.backgroundColor = "black"
	    this.superdiva.style.left = "30%"
	    this.superdiva.style.top = "0%"
	    this.superdiva.style.bottom = "0%"
	    this.superdiva.style.right = "0%"

	    this.artistnamea = document.createElement("h1")
	    this.artistnamea.style.fontSize = "3em"
	    this.artistnamea.style.color = "white"
	    this.artistnamea.style.textAlign = "center"
	    this.artistnamea.style.top = "5%"
	    this.artistnamea.style.left = "5%"
	    this.artistnamea.style.right = "5%"
	    this.artistnamea.style.bottom = "85%"
	    this.artistnamea.style.position = "absolute"
	    this.artistnamea.innerHTML = this.artist
        this.superdiva.appendChild(this.artistnamea)

        this.songsearcha = document.createElement("input")
        this.songsearcha.style.fontSize = "1.1em"
        this.songsearcha.style.color = "white"
        this.songsearcha.style.textAlign = "center"
        this.songsearcha.style.left = "0"
        this.songsearcha.style.right = "66%"
        this.songsearcha.style.top = "17%"
        this.songsearcha.oninput = function(){this.inputchanged()}
        this.songsearcha.style.bottom = "75%"
        this.songsearcha.style.position = "absolute"
        this.songsearcha.placeholder = "Search Songs"
        this.superdiva.appendChild(this.songsearcha)

        this.songlista = document.createElement("div")
                this.songlista.style.fontSize = "1.1em"
                this.songlista.style.color = "white"
                this.songlista.style.textAlign = "center"
                this.songlista.style.left = "5%"
                this.songlista.style.right = "5%"
                this.songlista.style.top = "25%"
                this.songlista.style.bottom = "30%"
                this.songlista.style.overflow = "scroll"
                this.songlista.style.position = "absolute"
                this.superdiva.appendChild(this.songlista)

                this.audiocontrolsa = document.createElement("audio")
                this.audiocontrolsa.controls = true
                this.audiocontrolsa.style.left = "5%"
                this.audiocontrolsa.style.right = "5%"
                this.audiocontrolsa.style.top = "70%"
                this.audiocontrolsa.style.bottom = "24%"
                this.audiocontrolsa.style.position = "absolute"
                this.audiocontrolsa.style.minWidth = "100%"
                this.superdiva.appendChild(this.audiocontrolsa)

                this.playlista = document.createElement("div")
                this.playlista.style.left = "5%"
                this.playlista.style.right = "5%"
                this.playlista.style.top = "76%"
                this.playlista.style.bottom = "4%"
                this.playlista.style.position = "absolute"
                this.superdiva.appendChild(this.playlista)
document.body.appendChild(this.superdiva)
	  },


   songlisttodiv: function(){
   let div = this.songlista
	   let list = document.createElement("table")
	   let tableheading = document.createElement("tr")
function tableheadingstyle(parent,names){
for(i = 0; i < names.length; i++){
  let element = document.createElement("td")
    element.innerHTML = names[i]
    element.style.textAlign = "center"
	   element.style.color = "rgba(84, 215, 255,1)"
	   element.style.borderBottomStyle = "double"
       	   element.style.borderBottomColor = "rgba(28, 158, 126,1)"
       	   element.style.borderBottomWidth = "7px"
	   parent.appendChild(element)
}
   }
        tableheadingstyle(tableheading,["Song","Links","Description","ReleaseDate","Length","Artists"])

       list.appendChild(tableheading)
	   for(i=0;i<this.currentsonglist.length;i++){
	    let songrow = document.createElement("tr")

		   let song = document.createElement("td")
		   songrow.appendChild(song)
		   song.innerHTML = this.currentsonglist[i]
		   song.style.color = "rgba(242, 250, 255,1)"
		   song.style.textShadow = "2px 2px 8px rgba(35, 66, 53,1)"
		   song.style.backgroundImage = "radial-gradient(rgba(11, 138, 66,0.3),rgba(109, 212, 99,0.4),rgba(92, 244, 255,0.4))"

		  let songlinks = document.createElement("td")
		  songlinks.innerHTML = ""
		  songlinks.style.color = "rgba(242, 250, 255,1)"
          		   songlinks.style.textShadow = "2px 2px 8px rgba(35, 66, 53,1)"
          		   songlinks.style.backgroundImage = "radial-gradient(rgba(11, 138, 66,0.3),rgba(109, 212, 99,0.4),rgba(92, 244, 255,0.4))"

           songrow.appendChild(songlinks)

          let songdescription = document.createElement("td")
          songdescription.innerHTML = ""
          songdescription.style.color = "rgba(242, 250, 255,1)"
          		   songdescription.style.textShadow = "2px 2px 8px rgba(35, 66, 53,1)"
          		   songdescription.style.backgroundImage = "radial-gradient(rgba(11, 138, 66,0.3),rgba(109, 212, 99,0.4),rgba(92, 244, 255,0.4))"
          songrow.appendChild(songdescription)

          let songreleasedate = document.createElement("td")
          songreleasedate.innerHTML = ""
          songreleasedate.style.color = "rgba(242, 250, 255,1)"
          		   songreleasedate.style.textShadow = "2px 2px 8px rgba(35, 66, 53,1)"
          		   songreleasedate.style.backgroundImage = "radial-gradient(rgba(11, 138, 66,0.3),rgba(109, 212, 99,0.4),rgba(92, 244, 255,0.4))"
          songrow.appendChild(songreleasedate)

          let songlength = document.createElement("td")
          songlength.innerHTML = ""
          songlength.style.color = "rgba(242, 250, 255,1)"
          		   songlength.style.textShadow = "2px 2px 8px rgba(35, 66, 53,1)"
          		   songlength.style.backgroundImage = "radial-gradient(rgba(11, 138, 66,0.3),rgba(109, 212, 99,0.4),rgba(92, 244, 255,0.4))"
          songrow.appendChild(songlength)

          let songbeings = document.createElement("select")
          songbeingsoptionone = document.createElement("option")
          songbeingsoptionone.innerHTML = this.artist
          songbeings.style.color = "rgba(242, 250, 255,1)"
          		   songbeings.style.textShadow = "2px 2px 8px rgba(35, 66, 53,1)"
          		   songbeings.style.backgroundImage = "radial-gradient(rgba(11, 138, 66,0.3),rgba(109, 212, 99,0.4),rgba(92, 244, 255,0.4))"
          songbeings.appendChild(songbeingsoptionone)
          songrow.appendChild(songbeings)

		   song.onclick = function(){songlistcreature.songtoplaylist(song.innerHTML)
		   if(songlistcreature.currentplaylist.length == 1){
			   				   songlistcreature.playsong(song.innerHTML)
		   }
		   }
		   list.appendChild(songrow)
		   
	   }
	   div.appendChild(list)
   },
   
   showsongtoggle: function(){
	   if(this.superdiva.style.display == "none"){
		   this.superdiva.style.display = "inline"
	   }
	   else{
		   this.superdiva.style.display = "none"
	   }
   },
   
   currentplaylist: [],
	  currentsonglist: [],
   playlist: [],
   songlistitems: [],
   audioplayer: null,
   audioplayerplaying: false,
   audioplayerlooping: false,
   playingsong: null,
   playingsongnumber: null,
	  songlistwithmp3: [],
	  songlistwithoutmp3: [],
	  songlist: [],
	  zarfnog: function(thing){
		return thing.substring(0,thing.length-4)
	  },
   playlistinit: function(){
	   this.audioplayer = this.audiocontrolsa
	   this.audioplayer.autoplay = true
		  let thang = new XMLHttpRequest()
	   thang.onreadystatechange = function(){

	if(this.readyState == 4 && this.status == 200){
	songlistcreature.songlistwithmp3 = this.responseText.split("~~~")
		songlistcreature.songlist = songlistcreature.songlistwithmp3.map(songlistcreature.zarfnog)
	songlistcreature.currentsonglist = songlistcreature.songlistwithmp3.map(songlistcreature.zarfnog)



	 				  songlistcreature.audioplayer.onended = function(){
		  				 if(songlistcreature.audioplayerlooping == false){
			 				  if(songlistcreature.playingsongnumber == songlistcreature.currentplaylist.length - 1){
									   songlistcreature.playsong(songlistcreature.currentplaylist[0])
								   }else{
										   songlistcreature.playsong(songlistcreature.currentplaylist[songlistcreature.playingsongnumber+1])
			  								 }
							   }
					   }

		songlistcreature.songlisttodiv()
					}

	   }

	   thang.open("GET","songlist.txt",true)
	   thang.send()
   },
   playsong: function(song){
	   this.audioplayer.pause()
	   this.audioplayer.src = "songs/"+song+".mp3"
	   this.audioplayer.play()
	   this.audioplayer.playing = true
	   this.playingsong = song
	   for(i=0;i<this.currentplaylist.length;i++){
		   if(this.currentplaylist[i] == song){this.playingsongnumber = i}
	   }
   },
    songtoplaylist: function(hsong){
		songlistcreature.songlistitems = []
		this.playlista.innerHTML = ""
		this.currentplaylist.push(hsong)
		let list = document.createElement("ol")
		for(i=0;i<this.currentplaylist.length;i++){
		   let song = document.createElement("li")
		   song.innerHTML = this.currentplaylist[i]
		   song.style.color = "White"
		   song.style.backgroundColor = "rgba(255,255,255,0.3)"
		   song.onclick = function(){songlistcreature.playsong(song.innerHTML)}
		   songlistcreature.songlistitems.push(song)
			list.appendChild(song)
		}
		this.playlista.appendChild(list)
		
	},
  }
  

  
  
  
  
  
  
  let Song = {
	  displayelement: null,
	  playlistplaces: [],
	  url: null,
	  name: null,
	  duration: null,
	  timeposition: null,
	  playshistory: null,
	  looping: false,
	  albumart: null,
	  
	  
	  
	  
  }
  
  


