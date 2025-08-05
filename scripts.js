// Загрузка списка аниме
db.collection("anime").get().then(querySnapshot => {
    const container = document.getElementById('anime-list');
    querySnapshot.forEach(doc => {
        const anime = doc.data();
        const animeCard = `
            <div class="anime-card" data-id="${doc.id}">
                <img src="${anime.poster}" alt="${anime.title}">
                <h3>${anime.title}</h3>
                <p>${anime.year} · ${anime.genre.join(', ')}</p>
            </div>
        `;
        container.innerHTML += animeCard;
    });

    // Переход на страницу аниме
    document.querySelectorAll('.anime-card').forEach(card => {
        card.addEventListener('click', () => {
            const animeId = card.getAttribute('data-id');
            window.location.href = `anime.html?id=${animeId}`;
        });
    });
});
