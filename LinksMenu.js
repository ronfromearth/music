


		//   Linx.create(div,[{path:"https://music.apple.com/us/artist/ron-elliott/1684419140",name:"Apple Music"},{path:"https://open.spotify.com/artist/0FR79GSEXeuei7SGy94IZd",name:"Spotify"},{path:"https://www.soundclick.com/artist/default.cfm?bandID=1409337&content=songs",name:"Soundclick"}],song.style.left,song.style.top,song.style.bottom,song.style.right)



let Linx = {
 links: [],
 linksbutton: null,
 linksdiv: null,
 linksselect: null,
 linksselectoptions: [],
 create: function(links){
    this.links = links
    this.linksdiv = document.createElement("div")
    this.linksselect = document.createElement("select")
    this.linksdiv.appendChild(this.linksselect)
    for(i = 0;i < this.links.length; i++){
        this.linksselectoptions[i] = document.createElement("option")
        this.linksselectoptions[i].innerHTML = this.links[i].name
        this.linksselectoptions[i].value = this.links[i].name
        this.linksselectoptions[i].style.color = "White"
        this.linksselectoptions[i].style.backgroundColor = "rgba(0,0,0,0.3)"
        this.linksselect.appendChild(this.linksselectoptions[i])
    }
        this.linksdiv.style.position = "absolute"
        this.linksselect.style.position = "absolute"
        this.linksselect.style.backgroundColor = "rgba(0,0,0,0.3)"
        this.linksselect.style.color = "White"
        this.linksselect.style.textAlign = "center"
        this.linksselect.style.marginLeft = "auto"
        this.linksselect.style.marginRight = "auto"
        return this.linksdiv
 }



            //initial styling options







}

let Link = {
    ico: "",
    name: "",
    path: "",
}


/*
		  let thang = new XMLHttpRequest()
	   thang.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
	this.responseText
	}
	   thang.open("GET","songlist.txt",true)
	   thang.send()
   }
*/
