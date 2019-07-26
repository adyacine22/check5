function italic(){
    bold=document.getElementById("textarea")
    if(bold.style.fontStyle != "italic"){
      bold.style.fontStyle = "italic"    
    }
    else{
        bold.style.fontStyle = "normal";
    }
    }
    function bolde(){
        bold=document.getElementById("textarea");
        if (bold.style.fontWeight==""){
            
            bold.style.fontWeight="bold";
        }
        else {
            bold.style.fontWeight="";
        }
    }
    function underlin(){
        bold=document.getElementById("textarea");
        if (bold.style.textDecoration==""){
            
            bold.style.textDecoration="underline";
        }
        else {
            bold.style.textDecoration="";
        }
    }

    function handleSize (){
        bold=document.getElementById("textarea");
        bold.style.fontSize = document.getElementById('sizeStyle').value

    }
    function police(){
        bold=document.getElementById("textarea")
        bold.style.fontFamily= document.getElementById('Police').value
    }
$(document).ready(function(){
   $(".pic1").mouseover(function(){
       $(".btn1").show()
     
   })
   $(".pic1").mouseleave(function(){
    $(".btn1").hide()
})
   $(".pic2").mouseover(function(){
       $(".btn2").show()
     
   })
   $(".pic2").mouseleave(function(){
    $(".btn2").hide()
})
   $(".pic3").mouseover(function(){
       $(".btn3").show()
     
   })
   $(".pic3").mouseleave(function(){
    $(".btn3").hide()
})
   $(".pic4").mouseover(function(){
       $(".btn4").show()
     
   })
   $(".pic4").mouseleave(function(){
    $(".btn4").hide()
})
   $(".pic5").mouseover(function(){
       $(".btn5").show()
     
   })
   $(".pic5").mouseleave(function(){
    $(".btn5").hide()
})
   $(".pic6").mouseover(function(){
       $(".btn6").show()
     
   })
   $(".pic6").mouseleave(function(){
    $(".btn6").hide()
})
   $(".pic7").mouseover(function(){
       $(".btn7").show()
     
   })
   $(".pic7").mouseleave(function(){
    $(".btn7").hide()
})
   $(".pic8").mouseover(function(){
       $(".btn8").show()
     
   })
   $(".pic8").mouseleave(function(){
    $(".btn8").hide()
})
   $(".pic9").mouseover(function(){
       $(".btn9").show()
     
   })
   $(".pic9").mouseleave(function(){
    $(".btn9").hide()
})

})
