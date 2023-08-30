/* Insérer les livres sur la page d'accueil HTML */

const insertBooksInHtml = (booksList, htmlContainer) => {
    // On boucle 8 fois (car on affiche 8 éléments) 
for(let i=0; i<8; i++) {
    // Est-ce que le livre a du stock?
    let dispo = booksList[i].nbStock > 0 ? "book-available" : "book-unavailable";
    // On insère le HTML dans le container, avec les données du livre
    htmlContainer.innerHTML +=`
    <article class="book-item">
    <div class="home-book-img"><a href="/"><img src="${booksList[i].cover}"/></a></div>
    <div class="home-book-title" data-bookid="${booksList[i].id}">${booksList[i].title}</div>
    <div class="home-book-author">${booksList[i].author}</div>
    <div class="home-book-price"><span class="dispo ${dispo}"></span>${booksList[i].price} €</div>
    <button class="home-book-cart ${dispo}">Ajouter</button>
    <div class="home-book-stock ${dispo}"><a href="/">Etre informé du retour en stock</a></div>
    </article>
    `;
    }
}

/* Fait passer les infos d'un livre dans l'url*/

const bookIdInUrl = (bookId) => {
    console.log(bookId);
}