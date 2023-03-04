let carrito = Array();
let manzanas = {
    nombre: "manzanas",
    precio: 1,
    cantidad: 0
}
let platanos = {
    nombre: "plátanos",
    precio: 2
}
let naranjas = {
    nombre: "naranjas",
    precio: 1.5
}
let enVenta = [manzanas, platanos, naranjas];
    


document.getElementById("carrito").onclick = () =>{
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
document.getElementsByTagName("button")[0].onclick = ()=>{
    //console.log(manzanas.nombre);
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const td2 = document.createElement("td");
    
    /*const textNode = document.getElementsByTagName("button")[0].parentElement.childNodes[0];
    const clone = textNode.cloneNode(true);*/
    
    td.append(enVenta[0].nombre);
    tr.append(td);
    
    document.getElementById("carritoDiv").appendChild(tr);
    td2.append(enVenta[0].precio);
    tr.append(td2);
    
    manzanas.cantidad+=parseInt(document.getElementsByTagName("input")[0].value);
    if (!carrito.manzanas) {
        
    }
    carrito.push(manzanas);
    console.log(carrito.length);
    console.log(carrito);
    
    /*h1.appendChild(textNode);
    document.getElementById("carritoDiv").appendChild(h1);*/
/*
    let articulo=document.getElementsByTagName("button")[0].parentElement.childNodes[0];
    document.getElementById("carritoDiv").appendChild(articulo);
    console.log(document.getElementsByTagName("button")[0].parentElement.childNodes[0]);*/
}

