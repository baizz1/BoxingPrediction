// 模拟电影数据
const movies = [
    {
        id: 1,
        title: '电影名称1',
        poster: 'movie1.jpg',
        plot: '这是电影1的剧情简介。',
        predictedRating: 8.5
    },
    {
        id: 2,
        title: '电影名称2',
        poster: 'movie2.jpg',
        plot: '这是电影2的剧情简介。',
        predictedRating: 7.8
    },
    {
        id: 3,
        title: '电影名称3',
        poster: 'movie3.jpg',
        plot: '这是电影3的剧情简介。',
        predictedRating: 8.2
    }
];

function showMovieDetails(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        const detailsSection = document.getElementById('movie - details - section');
        detailsSection.style.display = 'flex';
        document.getElementById('movie - details - poster').src = movie.poster;
        document.getElementById('movie - details - title').textContent = movie.title;
        document.getElementById('movie - details - plot').textContent = movie.plot;
        document.getElementById('movie - details - predicted - rating').textContent = movie.predictedRating;
    }
}

function closeMovieDetails() {
    const detailsSection = document.getElementById('movie - details - section');
    detailsSection.style.display = 'none';
}