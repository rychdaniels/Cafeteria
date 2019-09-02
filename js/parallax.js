// Parallax es el nombre de la animacion
$(document).ready(function(){
    $(window).scroll(function(){
        // Variable que guardará el ancho de la pantalla
        var windowWidth = $(window).width();
        // Si la ventana es mayor a 800
        if(windowWidth > 800){
            // Con scrollTop() sabremos donde se ubica el scroll
            var scroll = $(window).scrollTop();

            //Est efecto se aplicara al texto del encabezado
            $('header .textos').css({
                // 0px horizontal y vertical 50px
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });
            
            //Est efecto se aplicara al texto que se encuentra en acerca-de
            $('.acerca-de article').css({
                // 0px horizontal y vertical 50px
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });
        }

    });

    // Si hubiera un cambio de pantalla regresamos a los valores iniciales
    $(window).resize(function(){//Con resize detectamos si hay un cambio de tamaño
        var windowWidth = $(window).width();//Guardamos el ancho de la pantalla
        if(windowWidth < 800){//Si el valor es menor a 800
            $('.acerca-de article').css({//Los valores de acer-de los regresamos
                // 0px horizontal y vertical 50px
                'transform': 'translate(0px, 0px)'
            });
        }
    });
});