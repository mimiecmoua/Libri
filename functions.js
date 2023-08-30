/* Insérer les livres sur la page d'accueil HTML */

const insertBooksInHomePage = (booksList, htmlContainer) => {
    // On boucle 8 fois (car on affiche 8 éléments) 
for(let i=0; i<8; i++) {
    // Est-ce que le livre a du stock?
    let dispo = booksList[i].nbStock > 0 ? "book-available" : "book-unavailable";
    // On insère le HTML dans le container, avec les données du livre
    htmlContainer.innerHTML +=`
    <article class="book-item">
    <div class="home-book-img"><a href="/"><img src="${booksList[i].cover}" /></a></div>
    <div class="home-book-title" data-bookid="${booksList[i].id}">${booksList[i].title}</div>
    <div class="home-book-author">${booksList[i].author}</div>
    <div class="home-book-price"><span class="dispo ${dispo}"></span>${booksList[i].price} €</div>
    <button class="book-add-cart ${dispo}" data-bookid="${booksList[i].id}">Ajouter</button>
    <div class="home-book-stock ${dispo}"><a href="/">Etre informé du retour en stock</a></div>
    </article>
    `;
    }
}

/* Fait passer les infos d'un livre dans l'url*/

const bookIdInUrl = (bookId, page) => {
    window.location.href="./"+page+".html?bookid="+bookId;
}
/* Insérer les livres sur la page article HTML */

const insertBookInfosInArticlePage = (bookInfo, htmlContainer) => {
    // On insére le HTML dans le container, avec les données du livre
    htmlContainer.innerHTML+=`
    <div class="book-spotlight-left">
        <img src="${bookInfo.cover}" />
    </div>
    <div class="book-spotlight-right">
        <div class="book-spotlight-right-title">${bookInfo.title}</div>
        <div class="book-spotlight-right-author"> De  <a href="/">${bookInfo.author}</a> - ${bookInfo.category}</div>
        <div class="book-spotlight-right-note"><img src="./images/etoile.png" /><img src="./images/etoile.png" /><img src="./images/etoile.png" /><img src="./images/etoile.png" /><img src="./images/etoile.png" /></div>
        <div class="book-spotlight-right-desc">
            <div class="book-spotlight-right-desc-title">Description</div>
            Le destin de Jean Valjean, forçat échappé du bagne, 
            est bouleversé par sa rencontre avec Fantine. 
            Mourante et sans le sou, celle-ci lui demande de prendre 
            soin de Cosette, sa fille confiée aux Thénardier. 
            Ce couple d'aubergistes, malhonnête et sans scrupules, 
            exploitent la fillette jusqu'à ce que Jean Valjean tienne 
            sa promesse et l'adopte. Cosette devient alors sa raison de vivre. 
            Mais son passé le rattrape et l'inspecteur Javert le traque...
        </div>
        <div class="book-spotlight-right-btn">
            <button class="book-add-cart">Ajouter au panier</button>
        </div>
</div>
 `;
}