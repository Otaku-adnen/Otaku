function filterAnimes() {
    const genre = document.getElementById('genre').value;
    const season = document.getElementById('season').value;
    const animes = document.querySelectorAll('.anime-list-grid li');

    animes.forEach(anime => {
        const animeGenre = anime.getAttribute('data-genre');
        const animeSeason = anime.getAttribute('data-season');
        
        
        if ((genre === 'all' || animeGenre === genre) && (season === 'all' || animeSeason === season)) {
            anime.style.display = '';
        } else {
            anime.style.display = 'none';
        }
    });
}
