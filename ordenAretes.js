var productosAretes= {
    "productos":[
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo" 
            },
    
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo"    
            },
        
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo" 
            },
    
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo"    
            },
     
                {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo" 
            },
    
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo"    
            },
        
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo" 
            },
    
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo"    
            },
    
            
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo" 
            },
        
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo"    
            },
            
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo" 
            },
        
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo"    
            },
    
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo" 
            },
            
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo"    
            },
                
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo" 
            },
            
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo"    
            },
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo"    
            },
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo" 
            },
                
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo"    
            },
                     
        {
            "nombre":"Aretes amor",
            "precio": "55.000",
            "color": "Rojo"    
            }    

                                      
    ]  
};

productosAretes.productos.map( (item) => {
    document.getElementById('productos').innerHTML += `<div class="producto">
<div>
    <img class="producto_img" src="./ARETES/arete1.jpg" alt="">
</div>

<div class="nombrePrecioInfo">
    <p class="nombrePrecioInfo_nombre">`+ item.nombre + `</p>
    <p class="nombrePrecioInfo_precio"> <strong>$`+ item.precio +`</strong></p>
</div>
</div>`
});

for (let index = 0; index < productosAretes.productos.length; index++) {

console.log("pinta");
}