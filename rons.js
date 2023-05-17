

function start(){
  songlistcreature.songlisttodiv(document.getElementById("songlist"))
  songlistcreature.playlistinit()
  songlistcreature.songtimecreate(document.getElementById("songtime"))
  }
  function inputchanged(){
	  let songsearch = document.getElementById("songsearch")
	  songlistcreature.currentsonglist = songlistcreature.songlist.filter(containstext)
	  document.getElementById("songlist").innerHTML = ""
	  songlistcreature.songlisttodiv(document.getElementById("songlist"))
  }
  function containstext(song){
	  if(song.indexOf(document.getElementById("songsearch").value) == -1){return false}else{return true}
  }
  
  let songlistcreature = {
	  currentsonglist: ["Off Road","Closer","And, I cry","Ron's Open Up Your Heart","Ron's My Feet","One Life","Ron's Caveman","I Remember","Ron's Jimmy","Ron's Everybody Knows It (33 Miles)","Ron's Radio","Ron's I Believe","Ron's Guns and Roses","Ron's ...some kind of","Hold On","I Get High","Working On It","Age Is Just A Number","American Haze","In His Love","I Don't Need A Bad Thing 2017","angel","...in the thick of it","Dragon Dreams...there was a time","Slow Train","getten' kind of hazy","Not new to Mischief","Take What's Given","Old Man's Story","Right Time","Like a NY...","Searching","24 kt Lady","Hole in the Ground","Corn Cobs","Deal the Cards","Sweet","Feelin' Like Chocolate","Unknown","Let's Play","Select Drive","Fly Away","Over Easy","Give Me Some Old Time","Lost Lamb","3am Blues","Time Given","Clock Ticking","Second Notice","Ghetto-his momma","Old Blues","Tax Time","Cold Trail","February 2020","No Name","Home Cookin","In the Shallows","Follow the Sun","A Song Full of Story","Beautiful Ramble 2","Wonder of it All","Even If","Give Me Something Sweeter 2","Nothing is All You Need","It's All Just a Dream","Cold and Wet","Down at the Camp","Inside of Me","Chain Gang","Believe","Birds and Bees","Dance With Me","No Doubt About It","Quest","Makin Hay","Here It Comes","Progress Isn't Free","Ready For It","...a frame of time","Crazy World","Dirt Under My Nails","This Time Goes Bye","Summer Time","New Day","Find It","Time Zone","Wooden Box","Holyman Revisited","Wild Flower","Wasteland","Firewood","Inside Out","Say No More Z","Missed the Call","Can't Say No More Final","Into the Fire","In These Days","Forever","Underground 0915","Going for a Walk","When the Snow Falls","Butterfly","Not Enough Time","A Man Who Sees It All","The Spirit Inside V2","Still","Broken Road","So blue in blue","Down On Me","When the Night Calls","3 or Better","Missing","Creamed Turkey On Toast","Lost at Walmart","Enjoy the Time You Have","Until It's Gone","One Sky","Difficult Child","Dust in My Eyes","You Lost It All There Was a Trail of Tears","What You Make It","It's Midnight","In the Right Lane","It's Something Like That","South Fork","Ask the Children","When You're Dead","Know You Better","Tin Plates","Anything, But This","It's Almost Christmas","The Goods"],
	  
	  songlist: ["Off Road","Closer","And, I cry","Ron's Open Up Your Heart","Ron's My Feet","One Life","Ron's Caveman","I Remember","Ron's Jimmy","Ron's Everybody Knows It (33 Miles)","Ron's Radio","Ron's I Believe","Ron's Guns and Roses","Ron's ...some kind of","Hold On","I Get High","Working On It","Age Is Just A Number","American Haze","In His Love","I Don't Need A Bad Thing 2017","angel","...in the thick of it","Dragon Dreams...there was a time","Slow Train","getten' kind of hazy","Not new to Mischief","Take What's Given","Old Man's Story","Right Time","Like a NY...","Searching","24 kt Lady","Hole in the Ground","Corn Cobs","Deal the Cards","Sweet","Feelin' Like Chocolate","Unknown","Let's Play","Select Drive","Fly Away","Over Easy","Give Me Some Old Time","Lost Lamb","3am Blues","Time Given","Clock Ticking","Second Notice","Ghetto-his momma","Old Blues","Tax Time","Cold Trail","February 2020","No Name","Home Cookin","In the Shallows","Follow the Sun","A Song Full of Story","Beautiful Ramble 2","Wonder of it All","Even If","Give Me Something Sweeter 2","Nothing is All You Need","It's All Just a Dream","Cold and Wet","Down at the Camp","Inside of Me","Chain Gang","Believe","Birds and Bees","Dance With Me","No Doubt About It","Quest","Makin Hay","Here It Comes","Progress Isn't Free","Ready For It","...a frame of time","Crazy World","Dirt Under My Nails","This Time Goes Bye","Summer Time","New Day","Find It","Time Zone","Wooden Box","Holyman Revisited","Wild Flower","Wasteland","Firewood","Inside Out","Say No More Z","Missed the Call","Can't Say No More Final","Into the Fire","In These Days","Forever","Underground 0915","Going for a Walk","When the Snow Falls","Butterfly","Not Enough Time","A Man Who Sees It All","The Spirit Inside V2","Still","Broken Road","So blue in blue","Down On Me","When the Night Calls","3 or Better","Missing","Creamed Turkey On Toast","Lost at Walmart","Enjoy the Time You Have","Until It's Gone","One Sky","Difficult Child","Dust in My Eyes","You Lost It All There Was a Trail of Tears","What You Make It","It's Midnight","In the Right Lane","It's Something Like That","South Fork","Ask the Children","When You're Dead","Know You Better","Tin Plates","Anything, But This","It's Almost Christmas","The Goods"],
	  
	  allosfavs: ["Underground 0915","Time Given","Ron's I Believe","February 2020","New Day","Old Time Blues","Holyman Revisited","Ron's ...some kind of","Ron's Guns and Roses","I Get High","Down On Me","So blue in blue","Chain Gang"],
	  //still wildflower
	  ronsfavs: [],

   songlisttodiv: function(div){
	   let list = document.createElement("ol")
	   for(i=0;i<this.currentsonglist.length;i++){
		   let song = document.createElement("li")
		   song.innerHTML = this.currentsonglist[i]
		   song.style.color = "White"
		   song.style.backgroundColor = "rgba(255,255,255,0.3)"
		   song.onclick = function(){
			   songlistcreature.songtoplaylist(document.getElementById("playlist"),song.innerHTML)}
		   list.appendChild(song)
	   }
	   div.appendChild(list)
   },
   
   currentplaylist: [],
   playlist: [],
   audioplayer: null,
   audioplayerplaying: false,
   audioplayerlooping: false,
   playingsong: null,
   playingsongnumber: null,
   playingsongduration: null,
   playingsonglocation: null,
   shuffled: false,
   songcheckinterval: null,
   playlistinit: function(){
	   this.audioplayer = document.createElement("AUDIO")
	   this.audioplayer.autoplay = true
	   this.audioplayer.onloadeddata = function(){
		   	   songlistcreature.playingsongduration = songlistcreature.audioplayer.duration
			   if(songlistcreature.songcheckinterval == null){
				   songlistcreature.songcheckinterval = setInterval(songlistcreature.songcheck,300)
			   }
	   }
	   this.audioplayer.onended = function(){
		   if(songlistcreature.audioplayerlooping == false){
			   if(songlistcreature.playingsongnumber > songlistcreature.currentplaylist.length-1){
				   songlistcreature.playsong(songlistcreature.currentplaylist[0])
				   
			   }else{
				   songlistcreature.playsong(songlistcreature.currentplaylist[songlistcreature.playingsongnumber+1])
				   
			   }
		   }
	   }
	   document.getElementById("playpause").onclick = function(){
		   if(songlistcreature.audioplayerplaying == false){
			   if(songlistcreature.currentplaylist.length > 0){
				   if(songlistcreature.playingsongnumber == null){
					   songlistcreature.playsong(songlistcreature.currentplaylist[0])
				   }
				   songlistcreature.audioplayerplaying = true
				   songlistcreature.audioplayer.play()
			   }
		   }else{
			   songlistcreature.audioplayerplaying = false
			   songlistcreature.audioplayer.pause()
		   }
	   }
	   document.getElementById("loop").onclick = function(){
		   if(songlistcreature.audioplayerlooping == false){
			   songlistcreature.audioplayerlooping = true
			   songlistcreature.audioplayer.loop = true
			   document.getElementById("loop").style.color = "Green"
		   }else{
			   songlistcreature.audioplayerlooping = false
			   songlistcreature.audioplayer.loop = false
			   document.getElementById("loop").style.color = "Black"
		   }
	   }
	   document.getElementById("shuffle").onclick = function(){
		  //currentplaylist = shuffledarray(this.currentplaylist)
	   }
	   	   document.getElementById("loop")
		   	   document.getElementById("shuffle")
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
    songtoplaylist: function(div,hsong){
		div.innerHTML = ""
		this.currentplaylist.push(hsong)
		let list = document.createElement("ol")
		for(i=0;i<this.currentplaylist.length;i++){
		   let song = document.createElement("li")
		   song.innerHTML = this.currentplaylist[i]
		   song.style.color = "White"
		   song.style.backgroundColor = "rgba(255,255,255,0.3)"
		   song.onclick = function(){
			   songlistcreature.playsong(song.innerHTML)
		   }
			list.appendChild(song)
		}
		div.appendChild(list)
		
	},
	  	  songcheck: function(){
			  
		  songlistcreature.playingsonglocation = songlistcreature.audioplayer.currentTime
		  document.getElementById("songtime").value = Math.round((songlistcreature.playingsonglocation / songlistcreature.playingsongduration) * 100)

	  },
	  songtimetouch: function(){
		  songlistcreature.audioplayer.currentTime = songlistcreature.playingsongduration * (document.getElementById("songtime").value/100)
	  },
  }
  

  