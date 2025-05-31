// Данные для заполнения
const actorData = {
    name: 'Сурабалдинова Сауле Алханова',
    birthDate: '19 мая 1970 года',
    birthPlace: 'Талды-Курганская область, Гвардейский район, село Шубар',
    highlights: [
        {
            title: 'Мэри Поппинс современности',
            year: '1970-2024',
            description: 'Главная роль в фильме "Жизнь"'
        },
        {
            title: 'Хранительница семейного очага',
            year: '1990-2024',
            description: 'Создание уютной атмосферы и согревающего тепла'
        },
        {
            title: 'Мастер воспитания',
            year: '1990-2024',
            description: 'Тут будет текст'
        }
    ],
    awards: [
        {
            year: '2024',
            title: 'Оскар',
            description: 'За выдающуюся роль мамы в фильме "Жизнь"'
        },
        {
            year: '2024',
            title: '55 лет в главной роли',
            description: 'Юбилейная награда за преданность профессии'
        }
    ],
    filmography: [
        {
            year: '2024',
            title: 'Мэри Поппинс: Возвращение',
            role: 'Главная роль',
            description: 'Юбилейное выступление'
        },
        {
            year: '1990-2024',
            title: 'Семейная сага',
            role: 'Главная роль',
            description: 'Продолжительная семейная драма'
        }
    ]
};

const movieData = {
    featuredRoles: [
        {
            title: "Мэри Поппинс: Юбилейное возвращение",
            year: "2024",
            rating: "10.0",
            role: "Мэри Поппинс",
            image: "[Постер фильма]"
        },
        {
            title: "Великая Мама",
            year: "1990-2024",
            rating: "10.0",
            role: "Главная роль",
            image: "[Постер фильма]"
        }
    ],
    filmography: [
        {
            year: "2024",
            title: "Мэри Поппинс: Юбилейное возвращение",
            role: "Мэри Поппинс",
            rating: "10.0"
        },
        {
            year: "[Год]",
            title: "[Название фильма]",
            role: "[Роль]",
            rating: "[Рейтинг]"
        }
    ],
    trivia: [
        "[Интересный факт 1]",
        "[Интересный факт 2]",
        "[Интересный факт 3]"
    ],
    reviews: [
        {
            author: "[Имя рецензента]",
            rating: "10/10",
            text: "[Текст отзыва]"
        }
    ]
};

// Заполнение информации на странице
document.addEventListener('DOMContentLoaded', () => {
    // Заполнение основной информации
    document.querySelector('.actor-name').textContent = actorData.name;
    document.querySelector('.birth-info').textContent = `Дата рождения: ${actorData.birthDate}`;
    document.querySelector('.birth-place').textContent = `Место рождения: ${actorData.birthPlace}`;

    // Заполнение главных достижений
    const highlightsGrid = document.querySelector('.highlights-grid');
    actorData.highlights.forEach(highlight => {
        const card = document.createElement('div');
        card.className = 'highlight-card';
        card.innerHTML = `
            <h3>${highlight.title}</h3>
            <p>${highlight.year}</p>
            <p>${highlight.description}</p>
        `;
        highlightsGrid.appendChild(card);
    });

    // Заполнение фильмографии (timeline жизни)
    const timeline = document.querySelector('.timeline');
    actorData.filmography.forEach(event => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <h3>${event.year} - ${event.title}</h3>
            <p>${event.description}</p>
        `;
        timeline.appendChild(timelineItem);
    });

    // Заполнение наград
    const awardsList = document.querySelector('.awards-list');
    actorData.awards.forEach(award => {
        const awardItem = document.createElement('div');
        awardItem.className = 'award-item';
        awardItem.innerHTML = `
            <h3>${award.year} - ${award.title}</h3>
            <p>${award.description}</p>
        `;
        awardsList.appendChild(awardItem);
    });

    // Заполнение фильмографии
    const filmographyList = document.querySelector('.filmography-list');
    if (filmographyList) {
        actorData.filmography.forEach(film => {
            const filmItem = document.createElement('div');
            filmItem.className = 'filmography-item';
            filmItem.innerHTML = `
                <div class="film-year">${film.year}</div>
                <div class="film-info">
                    <div class="film-title">${film.title}</div>
                    <div class="film-role">${film.role}</div>
                    <div class="film-description">${film.description}</div>
                </div>
            `;
            filmographyList.appendChild(filmItem);
        });
    }

    // Анимация рейтинга
    const rating = document.querySelector('.rating');
    if (rating) {
        rating.style.opacity = '0';
        setTimeout(() => {
            rating.style.transition = 'opacity 1s ease-in-out';
            rating.style.opacity = '1';
        }, 500);
    }

    // Эффект при наведении на награды
    const awards = document.querySelectorAll('.award-item');
    awards.forEach(award => {
        award.addEventListener('mouseenter', () => {
            award.style.transform = 'scale(1.05)';
            award.style.transition = 'transform 0.3s ease';
        });
        award.addEventListener('mouseleave', () => {
            award.style.transform = 'scale(1)';
        });
    });

    // Добавление интерактивности к фильмам
    document.querySelectorAll('.film-title').forEach(title => {
        title.style.cursor = 'pointer';
        title.addEventListener('mouseenter', () => {
            title.style.color = '#f5c518';
        });
        title.addEventListener('mouseleave', () => {
            title.style.color = '#5799ef';
        });
    });

    // Tabs functionality
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Photo buttons hover effect
    const buttons = document.querySelectorAll('.photo-button, .quick-links button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = 'rgba(255,255,255,0.2)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = 'rgba(255,255,255,0.1)';
        });
    });

    // Film titles hover effect
    const filmTitles = document.querySelectorAll('.film-info .title');
    filmTitles.forEach(title => {
        title.addEventListener('mouseenter', () => {
            title.style.textDecoration = 'underline';
        });
        title.addEventListener('mouseleave', () => {
            title.style.textDecoration = 'none';
        });
    });

    // Gallery items hover effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#444';
        });
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = '#333';
        });
    });

    // See more bio animation
    const seeMore = document.querySelector('.see-more');
    if (seeMore) {
        seeMore.addEventListener('mouseenter', () => {
            seeMore.style.textDecoration = 'underline';
        });
        seeMore.addEventListener('mouseleave', () => {
            seeMore.style.textDecoration = 'none';
        });
    }

    // Rating box hover animation
    const ratingBox = document.querySelector('.rating-box');
    if (ratingBox) {
        ratingBox.addEventListener('mouseenter', () => {
            ratingBox.style.transform = 'scale(1.02)';
            ratingBox.style.transition = 'transform 0.2s ease';
        });
        ratingBox.addEventListener('mouseleave', () => {
            ratingBox.style.transform = 'scale(1)';
        });
    }

    // Динамическая загрузка данных
    loadFilmography();
    loadTrivia();
    loadReviews();
});

function loadFilmography() {
    const filmographyList = document.querySelector('.filmography-list');
    movieData.filmography.forEach(movie => {
        // Existing filmography items will be updated with real data
    });
}

function loadTrivia() {
    const triviaList = document.querySelector('.trivia-list');
    movieData.trivia.forEach(fact => {
        // Existing trivia items will be updated with real data
    });
}

function loadReviews() {
    const reviewList = document.querySelector('.review-list');
    movieData.reviews.forEach(review => {
        // Existing review items will be updated with real data
    });
}

// Search functionality (заглушка)
const searchInput = document.querySelector('.nav-search input');
if (searchInput) {
    searchInput.addEventListener('focus', () => {
        searchInput.placeholder = 'Поиск отключен в демо-версии';
    });
    searchInput.addEventListener('blur', () => {
        searchInput.placeholder = 'Поиск IMDb';
    });
}