
$.get("http://localhost:3000/clientes", function(data, status){
    for (i = 0; i < data.length; i++) {
        $('#registros').append("<p>" + 
        "<strong>código:</strong> "           +data[i].id   +"<br>"+
        "<strong>Nome: </strong>"             +data[i].nome +"<br>"+
        "<strong>Data entrada:</strong> "     +data[i].dataEntrada  +"<br>"+ 
        "<strong>Observação:</strong> "       +data[i].obs +"<br>"+
        "<strong>E-mail:</strong> "           +data[i].email +"<br>"+
        "<strong>Data Saída:</strong> "       +data[i].dataSaida +"<br>"+ 
        "<strong>Qtd adultos:</strong> "      +data[i].adultos +"<br>"+
        "<strong>Qtd crianças:</strong> "     +data[i].criancas +"<br>"+
            "</p>");
           
    }
});     

