var positionY;
var scrollTop;

var lastPositionX =0;
var compteur = 1;

$( document ).ready(function() {
    //récupérer les dimension de la fenêtre :
    var hauteurFenetre = $(window).width();
    var largeurFenetre = $(window).height();
    scrollTop = $(window).scrollTop(); //récupérer la "quantité" de scroll
    
////vous pouvez rédiger vos modification ici !


/////Ci-dessous la fonction permettant de déclancher des modifications en fonction du scroll
$(window).on( 'scroll', function(){
    scrollTop = $(window).scrollTop(); //création d'une varible contenant la "quantitée de scroll"
 });



$(window).on('mousemove', function(){
    positionY = event.pageY - scrollTop; // corection de la valeur de event.pageY pour qu'elle ne soit pas affectée par le scroll
  })

$( ".tourne" ).on( "click", function() {
    $(this).css({
      'transform' : 'rotate('+60*compteur+'deg)'
    })
    compteur=compteur+1;
  
   })

  $( " .tourne2 " ).on( "click", function() {
    $(" .tourne2 ").css({
      'transform' : 'rotate('+60*compteur+'deg)'
    })
    compteur=compteur+1;
  
   })

$( ".tiny_turn" ).on( "mousemove", function() {

    $(this).css({
    'transform' : 'rotate(' +10*compteur+ 'deg)'
    })
    compteur=compteur+1;
  
   })


$(window).on('scroll', function() {
   // Get current scroll position
   var scrollTop = $(this).scrollTop();
  
   // Calculate the total scrollable height of the document
   var docHeight = $(document).height() - $(window).height();
   
   // Determine a scroll percentage (0 at top, 1 at bottom)
   var scrollPercent = scrollTop / docHeight;
   
   // Map scroll percentage to a degree value (for instance, 0 to 360 degrees)
   var hueRotation = scrollPercent * 360;

   $('.overlay').css({
    'mix-blend-mode': 'darken',
    'filter': 'hue-rotate(' + hueRotation + 'deg)'
  });


});



$(window).on('mousemove',function(){

  var decalY = mapValue(event.pageX, 0, largeurFenetre, 0, 1000);
  $('#l_bbb1').css({
    'left': 336.5-(event.pageX)/4.5, 
    'top' : 15.3- (decalY)/4.5,
  })
  
  $('#l_bbb2').css({
    'left': 800+(event.pageX)/3.75, 
    'top' : -766 +(decalY)/3.75,
  })

  $('#l_bbl1').css({
    'left': -200.8+(event.pageX)/2.75, 
    'top' : -474 +(decalY)/2.75,
  })

  $('#l_bbl2').css({
    'left': -378+(event.pageX)/2.25, 
    'top' : -900 +(decalY)/2,
  })

  $('#l_bbm1').css({
    'left': 2990-(event.pageX)/5.5, 
    'top' : 958 -(decalY)/5.5,
  })

  $('#l_bbs1').css({
    'left': 3222-(event.pageX)/4.5, 
    'top' : 625 -(decalY)/4.5,
  })

//right//

  $('#r_bbb1').css({
    'left': 685+(event.pageX)/3, 
    'top' : 160-(decalY)/3,
  })

  $('#r_bbb2').css({
    'left': 2202+(event.pageX)/3, 
    'top' : 611-(decalY)/3,
  })

  $('#r_bbb3').css({
    'left': 3000-(event.pageX)/12, 
    'top' : 444+(decalY)/7,
  })

  $('#r_bbb4').css({
    'left': 1061-(event.pageX)/5, 
    'top' : -558+(decalY)/5,
  })

  $('#r_bbl1').css({
    'left': 2200-(event.pageX)/9, 
    'top' : -280+(decalY)/7,
  })

  $('#r_bbl2').css({
    'left': 1434-(event.pageX)/5, 
    'top' : 103.7-(decalY)/4,
  })

  $('#r_bbm1').css({
    'left': 2055-(event.pageX)/11, 
    'top' : 63+(decalY)/11,
  })

  $('#r_bbs1').css({
    'left': 1227-(event.pageX)/6, 
    'top' : -269+(decalY)/6,
  })

  $('#r_bbs2').css({
    'left': 2582-(event.pageX)/5.75, 
    'top' : 616-(decalY)/9,
  })
  

});
});


 //////// ///ne rien écrire après ceci//
