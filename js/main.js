// js customizavel

$(".ttp").tooltip();

$(".btnjs").button();

$("#troca-estado").click(function(){
    var btn = $(this);
    btn.button("loading");
    
    
    setTimeout(function(){
        btn.button("reset");
        
    }, 3000);
});

// efeito transição menu

    $(document).on('click', 'a[href^="#"]', function(e) { 
        // target element id 
        var id = $(this).attr('href'); 

        // target element 
        var $id = $(id); 
        if ($id.length === 0) { 
        return; 
        } 

        // prevent standard hash navigation (avoid blinking in IE) 
        e.preventDefault(); 

        // top position relative to the document 
        var pos = $(id).offset().top; 

        // animated top scrolling 
        $('body, html').animate({scrollTop: pos}); 
});


// SETA PARA IR PARA O MENU QUANDO A TELA ROLA

$( window ).scroll(function() {
    nScrollPosition = $( window ).scrollTop();
    if(nScrollPosition>=700){
         $( ".seta" ).css( "display", "block" );
    }else{
         $( ".seta" ).css( "display", "none" );
    }
});

