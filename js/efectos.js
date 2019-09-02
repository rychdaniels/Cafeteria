$(document).ready(function(){
// ----Efecto menu
    // Por cada elemento del menu
    $('.menu a').each(function(index,elemento){
        $(this).css({//Le aplicaremos los siguientes efectos css
            'top':'-200px'//Colocaremos los elementos arribo
        });

        // Despues haremos una animacion
        $(this).animate({
            'top':'0'//Ahora su posicion sera 0
        },2000 + (index * 500));//Esto es lo que durara la animcion para cada elemento
    });

// ----Efecto header
    // Si la pantalla del usuario es mayor 800
    if( $(window).width() > 800 ){
        $('header .textos').css({//Modificaremos los textos en el header
            opacity: 0, //Tendra opacidad cero, es decir no se vera.
            marginTop: 0//No tendra margen superior
        });

        //Cuando acabe lo anterior, haremos la animacion
        $('header .textos').animate({
            opacity: 1,//Cambiamos la opacidad
            marginTop: '-52px'//Y el margen superior
        }, 1500);//La animacion durará 1.5 seg
    }

// ----Scroll elementos menu
    // Variables que guardan la posicion del scroll
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click',function(e){//Evento para el enlace de acerca-de
        e.preventDefault();//Para que no se mande el formulario
        $('html, body').animate({//Esta es la animacion que se ejecutara al presionar el enlace
            scrollTop: acercaDe-100//Al presionar el enlace nos llevara hasta esta parte de la pagina
        }, 500);//La animacion durará 0.5 segundos
    });
    
    $('#btn-menu').on('click',function(e){//Evento para el enlace de menu
        e.preventDefault();//Para que no se mande el formulario
        $('html, body').animate({//Esta es la animacion que se ejecutara al presionar el enlace
            scrollTop: menu//Al presionar el enlace nos llevara hasta esta parte de la pagina
        }, 500);//La animacion durará 0.5 segundos
    });

    $('#btn-galeria').on('click',function(e){//Evento para el enlace de galeria
        e.preventDefault();//Para que no se mande el formulario
        $('html, body').animate({//Esta es la animacion que se ejecutara al presionar el enlace
            scrollTop: galeria-50//Al presionar el enlace nos llevara hasta esta parte de la pagina
        }, 500);//La animacion durará 0.5 segundos
    });
    
    $('#btn-ubicacion').on('click',function(e){//Evento para el enlace de ubicacion
        e.preventDefault();//Para que no se mande el formulario
        $('html, body').animate({//Esta es la animacion que se ejecutara al presionar el enlace
            scrollTop: ubicacion//Al presionar el enlace nos llevara hasta esta parte de la pagina
        }, 500);//La animacion durará 0.5 segundos
    });

});