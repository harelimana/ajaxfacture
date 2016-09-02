
$(document).ready(function () {
    var order, articles = {};
    var cle_value, cle_index;
    $('#lire').click(function (e) {
        e.preventDefault();

        $.post('articles.php', function (data) {
            var articles = JSON.parse(data);

            console.log(articles); // si l'objet est bien là !
            if (typeof articles !== 'object') {
                $('#error').text('erreur d\'estraction');

            } else {
                $('#articles').append('<tr>');

                for (var cle_index in articles) {
                    $('#articles').append('<tr></tr>');
                    for (var cle_value in articles[cle_index]) {
                        $('#articles tr:last').append('<td>' + articles[cle_index][cle_value] + '</td>');

                    }
                    $('#articles td:last').append('<span class="blanc"><button class="btn" id="cle_index">Ajouter</button>');
                    console.log(cle_index); // voir ce qui risque de ne pas se passer
                }

            }
        });
    });

    $('#cle_index').click(function (e) {
        $this = $(this);
        e.preventDefault();
        $('#commande td:last').append('<td>' + articles[cle_index][cle_value] + '</td>');
        //      var ajoute = $this.val(articles[cle_index][cle_value]);
        //     console.log(ajoute);
        //   }
        //   var qty;
        //  var price;
        //  var name;

    });
});
