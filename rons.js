let android = false
function start(){
  songlistcreature.playlistinit()
  if(window.innerWidth < window.innerHeight){
document.getElementById("ronbtnsongs").style.fontSize = "4em"
document.getElementById("ronbtnbooks").style.fontSize = "4em"
document.getElementById("pagetop").style.fontSize = "8em"
document.getElementById("pagesongs").style.fontSize = "6em"
document.getElementById("table").style.fontSize = "2em"
document.getElementById("zarfnog").style.fontSize = "3em"
document.getElementById("superdiv").style.fontSize = "3em"
document.getElementById("songsearch").style.fontSize = "1.5em"
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

   songlisttodiv: function(div){
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
        tableheadingstyle(tableheading,["Song","Links","Description","ReleaseDate","Length","Beings"])

       list.appendChild(tableheading)
	   for(i=0;i<this.currentsonglist.length;i++){
	    let songrow = document.createElement("tr")

		   let song = document.createElement("td")
		   songrow.appendChild(song)
		   song.innerHTML = this.currentsonglist[i]
		   song.style.color = "rgba(242, 250, 255,1)"
		   song.style.textShadow = "2px 2px 8px rgba(35, 66, 53,1)"
		   song.style.backgroundImage = "radial-gradient(rgba(11, 138, 66,0.7),rgba(109, 212, 99,0.9),rgba(92, 244, 255,1))"


		  let songlinks = document.createElement("td")
		  songlinks.innerHTML = "Links"
		  songlinks.style.color = "White"
           songrow.appendChild(songlinks)

          let songdescription = document.createElement("td")
          songdescription.innerHTML = "Description"
          songdescription.style.color = "White"
          songrow.appendChild(songdescription)

          let songreleasedate = document.createElement("td")
          songreleasedate.innerHTML = "releasedate"
          songreleasedate.style.color = "White"
          songrow.appendChild(songreleasedate)

          let songlength = document.createElement("td")
          songlength.innerHTML = "length"
          songlength.style.color = "White"
          songrow.appendChild(songlength)

          let songbeings = document.createElement("select")
          songbeingsoptionone = document.createElement("option")
          songbeingsoptionone.innerHTML = this.artist
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
	   document.getElementById("pagesongs").scrollIntoView()
	   if(document.getElementById('superdiv').style.display == "none"){
		   document.getElementById('superdiv').style.display = "inline"
	   }
	   else{
		   document.getElementById('superdiv').style.display = "none"
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
	   this.audioplayer = document.getElementById("songform")
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

		songlistcreature.songlisttodiv(document.getElementById("songlist"))
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
		document.getElementById("playlist").innerHTML = ""
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
		document.getElementById("playlist").appendChild(list)
		
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
  
  


