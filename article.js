/* On récupère les arguments passés dans l'url (ici bookid)*/ 

let params = window.location.search; // renvoie "?bookid=985"
let bookIdUrl = params.slice(8);
console.log(bookIdUrl);

/* On insère dans la page html les infos du livre dont on a récupérer l'id*/