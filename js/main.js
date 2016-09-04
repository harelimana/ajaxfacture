
$(document).ready(function () {
    var order, articles = {};
    var cle_value, cle_index;
    $('#lire').click(function (e) {
        e.preventDefault();

        $.post('articles.php', function (data) {
            var articles = JSON.parse(data);
            console.log(articles); // voir si l'objet est bien là !
            if (typeof articles !== 'object') {
                $('#error').text('erreur d\'estraction');

            } else {

                for (var cle_index in articles) {
                    $('#articles').append('<tr id="' + cle_index + '">');
                    for (var cle_value in articles[cle_index]) {
                        $('#articles tr:last').append('<td>' + articles[cle_index][cle_value] + '</td>');
                    }
                    $('#articles td:last').append('<span class="blanc"><button class="btn produit" id="' + cle_index + '">Ajouter</button>');
                    // console.log(cle_index); // voir ce qui risque de ne pas se passer
                }
                var commandes = remplirTableCommande(articles, cle_index, cle_value);
            }
        });
    });

    function remplirTableCommande(articles, cle_index, cle_value) {
        //variables
        var art = articles; //occurrence d'objets article
        var key_index = cle_index; // index de l'objet article qui va de 1 à 4
        var key_value = cle_value; // les proprietes de l'objet article
        var qty = 0;
        var prix = 0;
        var sousTot = 0;

        // fonction affichage de commandes

        $('.produit').click(function (e) {
            var article = $(".produit").prop('id');
            e.preventDefault();

            switch (article) {
                case 'article1':
                    qty = calculQte(qty); //appel de calcul de quantité à chaque click sur un produit
                    sousTot = calculTot(art['article1']['prix']); //Appel dela fonction de calcul du sous-total
                    $('#commande').append('<tr></tr>');
                    for (var key_value in art[key_index]) { // afficher les éléments de l'article
                        $('#commande tr:last').append('<td>' + art[key_index][key_value] + '</td>');
                    }
                    $('#commande tr:last').append('<td>' + qty + '<button id="add">+</button>' + '<button id="sub">-</button>' + '</td>'); // compléter l'affichage par la quantité
                    $('#commande tr:last').append('<td>' + sousTot + '</td>'); //compléter l'affichage par le sous-total
                    break;

                case 'article2':
                    qty = calculQte(qty); //appel de calcul de quantité à chaque click sur un produit
                    sousTot = calculTot(art['article2']['prix']);
                    $('#commande').append('<tr></tr>');
                    for (var key_value in art[key_index]) {
                        $('#commande tr:last').append('<td>' + art[key_index][key_value] + '</td>');
                    }
                    $('#commande tr:last').append('<td>' + qty + '</td>');
                    $('#commande tr:last').append('<td>' + sousTot + '</td>');
                    break;
                case 'article3':
                    qty = calculQte(qty); //appel de calcul de quantité à chaque click sur un produit
                    sousTot = calculTot(art['article3']['prix']);
                    $('#commande').append('<tr></tr>');
                    for (var key_value in art[key_index]) {
                        $('#commande tr:last').append('<td>' + art[key_index][key_value] + '</td>');
                    }
                    $('#commande tr:last').append('<td>' + qty + '<button >' + '</td>');
                    $('#commande tr:last').append('<td>' + sousTot + '</td>');
                    break;
                case 'article4':
                    qty = calculQte(qty); //appel de calcul de quantité à chaque click sur un produit
                    sousTot = calculTot(art['article4']['prix']); //Appel dela fonction de calcul du sous-total
                    $('#commande').append('<tr></tr>');
                    for (var key_value in art[key_index]) {
                        $('#commande tr:last').append('<td>' + art[key_index][key_value] + '</td>');
                    }
                    $('#commande tr:last').append('<td>' + qty + '</td>');
                    $('#commande tr:last').append('<td>' + sousTot + '</td>');
                    break;
                default:
                    break;
            }

        });
        return;
    }
    
    function modificationQuantite() {

    }
    
    function calculQte(qty) {
        var q = qty; // q et qty sont les quantités de la commande
        q = q + 1;
        return q;
    }

    function calculTot(prix) {
        var p = prix; // p et prix sont les prix unit. de l'article
        var st = st + p;
        return st;
    }

    function diminutionQte(qty) {
        var q = qty; // q et qty sont les quantités de la commande
        q = q - 1; // //diminution de qty pour l'article dont la qty diminue
        return q;
    }

    function diminutionSousTot(prix) {
        var p = prix; // p et prix sont les prix unit. de l'article
        var st = st - p; //diminution du sousTot pour l'article dont la qty diminue
        return st;
    }
});
