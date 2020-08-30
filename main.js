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
                var html = template(risposta.response[i]);
                console.log(html);
                $('.cds-container').append(html);
                };
            },
            error: function (richiesta, stato, errori) {
                alert("E' avvenuto un errore. " + errore);
            }
        }
    );
});
