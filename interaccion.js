var imagenGrande = document.querySelector('.anillog');
    var primero = document.querySelector('.Color1');
    var segundo = document.querySelector('.Color2');
    var tercero = document.querySelector('.Color3');
    var cuarto = document.querySelector('.Color4');

    function primer(){
        //console.log(this.getAttribute("src"));
        imagenGrande.setAttribute("src", './imagenes/Anillos/anillo_1.jpg');
        console.log('principal')
    }
    function segundor(){
        //console.log(this.getAttribute("src"));
        imagenGrande.setAttribute("src", './imagenes/Anillos/anillo_5.jpg');
        console.log('principal')
    }
    
    function tercer(){
        //console.log(this.getAttribute("src"));
        imagenGrande.setAttribute("src", './imagenes/Anillos/anillo_3.jpg');
        console.log('principal')
    }
    function cuartor(){
        //console.log(this.getAttribute("src"));
        imagenGrande.setAttribute("src", './imagenes/Anillos/anillo_4.jpg');
        console.log('principal')
    }

    primero.addEventListener('click',primer);
    segundo.addEventListener('click',segundor);
    cuarto.addEventListener('click',cuartor);
    
    tercero.addEventListener('click',tercer);
    