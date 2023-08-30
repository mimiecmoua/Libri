/* Insérer les données des livres sur la page d'accueil */


/* Tri pour les sorties récentes */
let lastReleases = [...books];
lastReleases.sort((a, b) => b.releaseDate + a.releaseDate);

/* Trier les meilleurs ventes */
let bestSales = [...books];
bestSales.sort((a, b) => b.nbSales - a.nbSales);


// On récupère le container HTML dans le DOM grâce à leurs ID
let lastReleasesHtml = document.getElementById("last-releases");
let bestSalesHtml = document.getElementById("best-sales");

// on insère les sorties récentes
insertBooksInHtml(lastReleases, lastReleasesHtml);
// On insère les meilleurs ventes
insertBooksInHtml(bestSales, bestSalesHtml);

/* 2. Afficher la page article au clic d'un livre */

// On récupère les titres de la page d'accueil
const bookTitles = document.getElementsByClassName('home-book-title');

// Pour chaque titre de livre, on associe un événement au clic
for (const bookTitle of bookTitles) {
    // On récupère l' ID du livre à travers data-bookid
    let bookId = bookTitle.dataset.bookid;
    bookTitle.addEventListener('click', () => {
        window.location.href="./article.html?bookid="+bookId+"";
    });
}









