$(document).ready(function(){
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
            },
            error: function (richiesta, stato, errori) {
                alert("E' avvenuto un errore. " + errore);
            }
        }
    );

    $('#scelta option').click(function(){
        var genere = $(this).html();
        console.log(genere);

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
