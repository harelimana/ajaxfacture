
$(document).ready(function () {
    var order, articles, newArticles = {};
    var cle_value, cle_index, key, index;
    var price = 0;
    
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
        var sousTot, sousTotal = 0;
        var signe = "";
        var added = true;

        // fonction affichage de commandes

        $('.produit').click(function (e) {
            var article = $('.produit').prop('id');
            console.log(article);
            e.preventDefault();
                switch (article) {
                    case 'article1':
                        qty = calculQte(qty); //appel de calcul de quantité à chaque click sur un produit
                        sousTot = parseInt(articles.article1.prix); //Appel dela fonction de calcul du sous-total
                        sousTotal = calculTot(sousTot, qty);
                        console.log(sousTotal);
                        $('#commande').append('<tr></tr>');
                        for (var key_value in art[key_index]) { // afficher les éléments de l'article
                            $('#commande tr:last').append('<td>' + art[key_index][key_value] + '</td>');
                        }
                        $('#commande tr:last').append('<td>' + qty + '<button id="add" value="+">+</button>' + '<button id="sub" value="-">-</button>' + '</td>'); // compléter l'affichage par la quantité
                        $('#commande tr:last').append('<td>' + sousTot + '</td>'); //compléter l'affichage par le sous-total
                        break;

                    case 'article2':
                        qty = calculQte(qty); //appel de calcul de quantité à chaque click sur un produit
                        sousTot = parseInt(articles.article2.prix);
                        sousTotal = calculTot(sousTot, qty);
                        $('#commande').append('<tr></tr>');
                        for (var key_value in art[key_index]) {
                            $('#commande tr:last').append('<td>' + art[key_index][key_value] + '</td>');
                        }
                        $('#commande tr:last').append('<td>' + qty + '<button id="add" value="+">+</button>' + '<button id="sub" value="-">-</button>' + '</td>');
                        $('#commande tr:last').append('<td>' + sousTot + '</td>');
                        break;
                    case 'article3':
                        qty = calculQte(qty); //appel de calcul de quantité à chaque click sur un produit
                        sousTot = parseInt(articles.article3.prix);
                        sousTotal = calculTot(sousTot, qty);
                        $('#commande').append('<tr></tr>');
                        for (var key_value in art[key_index]) {
                            $('#commande tr:last').append('<td>' + art[key_index][key_value] + '</td>');
                        }
                        $('#commande tr:last').append('<td>' + qty + '<button id="add" value="+">+</button>' + '<button id="sub" value="-">-</button>' + '</td>');
                        $('#commande tr:last').append('<td>' + sousTot + '</td>');
                        break;
                    case 'article4':
                        qty = calculQte(qty); //appel de calcul de quantité à chaque click sur un produit
                        sousTot = parseInt(articles.article4.prix); //Appel dela fonction de calcul du sous-total
                        sousTotal = calculTot(sousTot, qty);
                        console.log(sousTot);
                        $('#commande').append('<tr></tr>');
                        for (var key_value in art[key_index]) {
                            $('#commande tr:last').append('<td>' + art[key_index][key_value] + '</td>');
                        }
                        $('#commande tr:last').append('<td>' + qty + '<button id="add" value="+">+</button>' + '<button id="sub" value="-">-</button>' + '</td>');
                        $('#commande tr:last').append('<td>' + sousTot + '</td>');
                        break;
                    default:
                        break;
                }

            // module augmentation et diminution d'articles commandés => ligne 108-115

            signe = $('td #add').val();
            console.log(signe);
            signe = $('td #sub').val();
            console.log(signe);


            /* ================================ */
          /*  qty = modificationQuantite(signe, qty); */

        });
        return;
    }

// fonction de modification de la quantite article commandee

    function modificationQuantite(signe, qty) {
        var s = signe; //local variable for signe
        var quantite = qty; //local variable for qty
        // var quantite = 0;
        switch (s) {
            case '+':
                quantite = quantite + 1;
            case '-':
                quantite = quantite - 1;
        }
        //  $('#commande tr:last').append('<td>' + quantite + '<button id="add" value="+">+</button>' + '<button id="sub" value="-">-</button>' + '</td>');
        return quantite;
    }

// fonction de calcul de la quantite article commandee

    function calculQte(qty) {
        var q = qty; // q et qty sont les quantités de la commande
        q = q + 1;
        return q;
    } 
// fonction de calcul de la somme sous-totale article commandee

    function calculTot(sousTot, qty) {
        var q = qty;
        var p = sousTot; // p et prix sont les prix unit. de l'article
        var st = sousTot * q;
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
