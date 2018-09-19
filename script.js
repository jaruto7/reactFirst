var movies = [
    {
        id: 1,
        title: 'Chory Piotter',
        desc: 'Film o czarodzieju wytrenowanym w jeden księżyc.',
        image: './images/harry-potter-saga.jpeg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny - Afrika, mumbata, i te sprawy...',
        image: './images/the-lion-king.jpg'
    },
    {
        id: 3,
        title: 'Jason Bourne: Identity',
        desc: 'Super tajny agent wyszkolony na zabójcę który w wyniku pewnego incydentu doznał amnezji...',
        image: './images/bourne-identity.jpg'
    },
    {
        id: 4,
        title: 'Batman: Begins',
        desc: 'Super tajny człowiek nietoperz walczący ze złem w Gotham...',
        image: './images/batman-begins.png'
    },
    {
        id: 5,
        title: 'Good Will Hunting',
        desc: 'Chłopak geniusz z problemami natury psychicznej na kozetce u psychologa...',
        image: './images/good-will-hunting.jpg'
    }
];

var moviesElements = movies.map( function( movie ) {
    return React.createElement( 'li', { key: movie.id },
        React.createElement( 'h2', {}, movie.title ),
        React.createElement( 'p', {}, movie.desc ),
        // Ustawienie atrybutu "src" w propsach aby zapobiec blednemu wyswietlaniu strony
        React.createElement( 'img', { src: movie.image } )
    );
});

var element = 
    React.createElement( 'div', {},
        React.createElement( 'h1', {}, 'Lista filmów' ),
        React.createElement( 'ul', {}, moviesElements )
    );

    ReactDOM.render( element, document.getElementById('app'));


