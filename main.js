$(document).ready(function(){
    //recupera gli album dall'API e fa append nell'HTML
    $.ajax(
        {
            url: "https://flynn.boolean.careers/exercises/api/array/music",
            method: "GET",
            success: function (risposta) {
                // console.log(risposta);

                var source = $("#entry-template").html();
                var template = Handlebars.compile(source);

                for (var i = 0; i < risposta.response.length; i++){
                    var context = risposta.response[i];
                    var html = template(context);
                    $('.cds-container').append(html);
                };
                insertSelect(risposta);
            },
            error: function (richiesta, stato, errori) {
                alert("E' avvenuto un errore. " + errore);
            }
        }
    );

    $('#scelta').click(function(){
        var genere = $(this).val();
        //nascondo tutti gli elementi
        //visualizzo gli elementi con la classe selezionata
        if(genere == 'All') {
            $('.cd').show();
        } else {
            $('.cd').hide();
            $('.cd.' + genere).show();
        }
    });
});

// FUNZIONI //

function insertSelect(data){
    var source = $("#template-select").html();
    var template = Handlebars.compile(source);
    //creo un array vuoto
    var arrayGenere = [];

    for (var i = 0; i < data.response.length; i++){
        var genere = data.response[i].genre;
        // SE il genere non è contenuto nell'array, push
        if(!arrayGenere.includes(genere)){
            arrayGenere.push(genere);
            var context = {
                genre: genere,
            };
            var html = template(context);
            $('#scelta').append(html);
        }
    }
}
