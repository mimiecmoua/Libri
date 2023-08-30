/* 1. Insérer les données des livres sur la page d'accueil */

 /* tri pour les sorties récentes */
 let lastReleases = [...books];
 lastReleases.sort((a, b) => b.releaseDate - a.releaseDate);

 /* trier les meilleurs ventes */
 let bestSales = [...books];
 bestSales.sort((a, b) => b.nbSales - a.nbSales);

 // On récupère les containers HTML dans le DOM grâce à leurs IDs
 let lastReleasesHtml = document.getElementById("last-releases");
 let bestSalesHtml = document.getElementById("best-sales");


// On insère les sorties récentes
insertBooksInHomePage(lastReleases, lastReleasesHtml);
// On insère les meilleurs ventes
insertBooksInHomePage(bestSales, bestSalesHtml);

/* 2. Afficher la page article au clic d'un livre */

// On récupère les titres de livres de la page d'accueil
const bookTitles = document.getElementsByClassName('home-book-title');


// Pour chaque titre de livre, on associe un événement au clic
for (const bookTitle of bookTitles) {
    // On récupère l' ID du livre à travers data-bookid
    let bookId = bookTitle.dataset.bookid;
    let page = "article";
    bookTitle.addEventListener('click', () => {
        // On appelle la fonction (dans functions.js) qui créé l'url à partir de l'id
        bookIdInUrl(bookId, page);
    });
}

/* Ajout au panier du clic "ajouter au panier" */
let cart = [];
// On récupère les boutons "ajouter au panier" de la page d'accueil
const cartBtns = document.getElementsByClassName('book-add-cart');

for (const cartBtn of cartBtns) {
    // On récupère l'ID du livre à travers data-bookid
    let bookId = cartBtn.dataset.bookid;
    cartBtn.addEventListener('click', () => {
        let bookAdded = false;
        for(cartItem of cart){
            if(cartItem.id === bookId) {
                cartItem.qtt++; // correspond à cartItem.qtt = cartItem.qtt + 1
                bookAdded = true;
                break;
            }
        }
        if(!bookAdded) { // correspond à bookAdded === false
            cart.push({
                id: bookId,
                qtt: 1,
            });
        }
        console.log(cart);
    });
}









