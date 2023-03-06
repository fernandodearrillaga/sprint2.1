let carrito = Array();
let manzanas = {
    nombre: "Manzanas",
    precio: 1
    
}
let platanos = {
    nombre: "Plátanos",
    precio: 2
}
let naranjas = {
    nombre: "Naranjas",
    precio: 1.5
}
let enVenta = [manzanas, platanos, naranjas];
    


document.getElementById("mostrarCarrito").onclick = () =>{
    //const carritoDiv = document.createElement("div");
    //const h1= document.createElement("h1");
    //const textNode = document.createTextNode("Carrito");
    //h1.appendChild(textNode);
    //carritoDiv.appendChild(h1);
    //document.getElementById("carritoDiv").appendChild(h1);
    console.log("Mostrar el carrito");
    //document.getElementById("carritoDiv").style.display="block";
    var x = document.getElementById("carritoDiv");
    if (x.style.display !="block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}
//console.log(document.getElementsByClassName("add").length);
for (let i = 0; i < document.getElementsByClassName("add").length; i++) { //al pulsar el boton añadir al carrito

    document.getElementsByClassName("add")[i].onclick = () =>{
        if (document.getElementsByClassName("cantidad")[i].value>0){
            //console.log(i);
            //console.log("ok");
            const table = document.getElementById("carrito");
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            const precioUnidad = document.createElement("td");
            const cantidad = document.createElement("td");
            const totalProducto = document.createElement("td");
            const tdBotonBorrar =document.createElement("td");
            const botonBorrar =document.createElement("button");
            const trTotal =document.createElement("tr");
            const tdTotal =document.createElement("td");
            const precioTotal =document.createElement("td");
            let suma=0;
            
            carrito.push(enVenta[i]);

            td.append(enVenta[i].nombre);
            tr.append(td);

            document.getElementById("carritoDiv").appendChild(tr);
            precioUnidad.append(enVenta[i].precio);
            tr.append(precioUnidad);

            //document.getElementById("carritoDiv").appendChild(tr);
            cantidad.append(document.getElementsByClassName("cantidad")[i].value);
            tr.append(cantidad);

            totalProducto.append(document.getElementsByClassName("cantidad")[i].value*enVenta[i].precio);
            tr.append(totalProducto);

            botonBorrar.className="Borrar";
            botonBorrar.addEventListener('click', () =>{
                event.target.parentElement.parentElement.remove();
                sumado();
                actualizarCantidad();
                
                
            });
            botonBorrar.append("Borrar");
            tdBotonBorrar.append(botonBorrar);
            tr.append(tdBotonBorrar);

            table.append(tr);

            //td.append("0");
            tdTotal.append("Total");
            trTotal.append(tdTotal);
            trTotal.append(document.createElement("td"));
            trTotal.append(document.createElement("td"));
            precioTotal.append(suma);
            trTotal.append(precioTotal);
            table.append(trTotal);
            
            //console.log(trTotal.parentElement.childElementCount);
            //console.log(document.getElementsByTagName("table")[0].lastChild.previousSibling.lastChild.textContent);
            //console.log(document.getElementsByTagName("table")[0].lastChild.lastChild.textContent);

            if (document.getElementsByTagName("table")[0].childNodes.length>4){
                document.getElementsByTagName("table")[0].lastChild.previousSibling.previousSibling.remove();
            }
            function sumado() {
                suma=0;
                console.log(document.getElementById("carrito").getElementsByTagName("tr").length);
                for (let j = 1; j < document.getElementById("carrito").getElementsByTagName("tr").length-1; j++) {
                
                    console.log(parseFloat(document.getElementsByTagName("table")[0].children[j].childNodes[3].textContent));
                    suma += parseFloat(document.getElementsByTagName("table")[0].children[j].childNodes[3].textContent);
                    console.log(suma);
                    console.log(document.getElementById("carrito").lastElementChild.getElementsByTagName("td")[3]);
                    document.getElementById("carrito").lastElementChild.getElementsByTagName("td")[3].firstChild.remove();
                    document.getElementById("carrito").lastElementChild.getElementsByTagName("td")[3].append(suma);
                    //precioTotal.textContent=suma;
                }
                
                console.log(precioTotal.textContent);
            }
            sumado();
            actualizarCantidad();
            console.log(precioTotal.textContent);
            console.log(trTotal.parentElement.childElementCount-2);
            function actualizarCantidad() {
                console.log(document.getElementById("carrito").getElementsByTagName("tr").length-2);
                document.getElementById("cantidadEnCarrito").append(document.getElementById("carrito").getElementsByTagName("tr").length-2);
                console.log(document.getElementById("cantidadEnCarrito").childNodes.length);
                //if (document.getElementById("carrito").getElementsByTagName("tr").length-2>1) {
                    document.getElementById("cantidadEnCarrito").textContent=document.getElementById("carrito").getElementsByTagName("tr").length-2;
               // }
                
            }
            
            //document.getElementById("cantidadEnCarrito").firstChild.remove();
            //document.getElementById("cantidadEnCarrito").append(trTotal.parentElement.childElementCount-2);
            //document.getElementById("cantidadEnCarrito").textContent=trTotal.parentElement.childElementCount-2;
            
            console.log(carrito);

        }
        
        

    }
    
}




//document.getElementsByTagName("button")[0].onclick = ()=>{
    //console.log(manzanas.nombre);
   /* const tr = document.createElement("tr");
    const td = document.createElement("td");
    const precioUnidad = document.createElement("td");*/
    
    /*const textNode = document.getElementsByTagName("button")[0].parentElement.childNodes[0];
    const clone = textNode.cloneNode(true);*/
    
  /*  td.append(enVenta[0].nombre);
    tr.append(td);
    
    document.getElementById("carritoDiv").appendChild(tr);
    precioUnidad.append(enVenta[0].precio);
    tr.append(precioUnidad);
    
    manzanas.cantidad+=parseInt(document.getElementsByTagName("input")[0].value);
    if (!carrito.manzanas) {
        
    }
    carrito.push(manzanas);
    console.log(carrito.length);
    console.log(carrito);*/
    
    /*h1.appendChild(textNode);
    document.getElementById("carritoDiv").appendChild(h1);*/
/*
    let articulo=document.getElementsByTagName("button")[0].parentElement.childNodes[0];
    document.getElementById("carritoDiv").appendChild(articulo);
    console.log(document.getElementsByTagName("button")[0].parentElement.childNodes[0]);*/
//}

