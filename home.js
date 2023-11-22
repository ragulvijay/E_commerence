
$(".image-slider1").owlCarousel({
  margin:10,
  loop:true,
  autoplay:true,
  responsive:{
        0:{
            items:1
        },
        600:{
            items:3.5,
            merge:true,
                                
        },
        1000:{
            items:3
        }
  }
});

$(".image-slider-data").owlCarousel({
    margin:10,
    loop:true,
    autoplay:true,
    responsive:{
          0:{
              items:1
          },
          750:{
            items:3
          },
          600:{
              items:4,
              merge:true,
                                  
          },
          1000:{
              items:5
          }
    }
  });




var button=document.getElementById("subbutton")
var sub=document.querySelector(".sub-menu")

button.addEventListener("click",function(event){
    event.preventDefault()
    sub.style.display="block"
    


    
    
})



