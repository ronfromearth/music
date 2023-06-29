
        let DeepJS = {

                ele: {
                     lo: function(hem,x,y,w,h){
                        hem.style.position = "absolute"
                        hem.style.left = DeepJS.conversion.percentstring(x)
                        hem.style.right = DeepJS.conversion.percentstring(1-(x+w))
                        hem.style.top = DeepJS.conversion.percentstring(y)
                        hem.style.bottom = DeepJS.conversion.percentstring(1-(y+h))
                        },
                },

                conversion: {
                    percentstring: function(ratio){
                        return Math.round(ratio*100).toString()+"%"
                    },
                },

                files: {
                      find: function(place,functorio){
                       let thang = new XMLHttpRequest()
                       	   thang.onreadystatechange = function(){
                       	if(this.readyState == 4 && this.status == 200){
                       	    functorio(this.responseText)
                       	    }
                       	    }
                       	    thang.open("GET",place)
                       	    thang.send()
                       	},
                },


        }