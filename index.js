var arrLang = {
    'en': {
        'about': 'About me',
        'projects': 'Projects',
        'email': 'Email',
        'github-projects': 'My projects',
        'hero-p': 'With pleasure and interest write Software in the programming language',
        'hero-github': 'My Github',
        'who-i-am-h2': '> Who I am? | Egor Klimenko',
        'about-me': 'Klimenko Egor Konstantinovich. I write Software in the programming language Golang.',
        'work': 'Rest API, GRPC Service, Web Backend - with all this I’m working on.',
        'why-golang-h2': '> Why Golang?',
        'why-golang-p': 'Golang is ideal for Software Engineering due to its high performance, simplicity and scalability, which allows you to create reliable and effective services.',
        'grpc': 'GRPC Auth Service',
        'website': 'Website for making reservations',
        'rest': 'Rest API, that generates password by requirements',
        'more-projects': 'More projects',
    },
    'ru': {
        'about': 'Обо мне',
        'projects': 'Проекты',
        'email': 'Почта',
        'github-projects': 'Мои проекты',
        'hero-p': 'С удовольствием и интересом пишу ПО на языке программирования',
        'hero-github': 'Мой Github',
        'who-i-am-h2': '> Кто я? | Егор Клименко',
        'about-me': 'Клименко Егор Константинович. Пишу ПО на языке программирования Golang.',
        'work': 'Rest API, GRPC Service, Web Backend - со всем этим я работаю',
        'why-golang-h2': '> Почему Golang?',
        'why-golang-p': 'Golang идеально подходит для Software Engineering благодаря своей высокой производительности, простоте и масштабируемости, что позволяет создавать надежные и эффективные сервисы.',
        'grpc': 'GRPC сервис авторизации',
        'website': 'Веб-сайт для бронирования номера в отеле',
        'rest': 'Rest API, которое генерирует пароль по заданным требованиям',
        'more-projects': 'Больше проектов',
    },
};

$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        $('.lang').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});