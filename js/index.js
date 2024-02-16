fetch("https://fakestoreapi.com/products/")
    .then(response => response.json()) //Convertir la data a JSON
    .then(data => {
        let fila = '<tr><th>title</th><th>price</th><th>description</th><th>category</th><th>image</th></tr>'
        for (let producto of data) {
            fila += `<tr><td>${producto.title}</td>
                         <td>${producto.price}</td>
                        <td>${producto.description}</td>
                        <td>${producto.category}</td>
                        <td><div class="card mb-2" style="width: 6rem;"><img src="${producto.image}" class="card-img-top" alt="Avatar"></td></tr>`
                        
        }
        document.getElementById("tabla").innerHTML = fila
    })