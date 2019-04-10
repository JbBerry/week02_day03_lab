class Cinema{

  constructor(films) {
    this.films = films;
  };

  findFilmByTitle(filmTitle){
    return this.films.filter(function(film){
      return film.title === filmTitle;
    });
  };

  findFilmByGenre(filmGenre){
    return this.films.filter(function(film){
      return film.genre === filmGenre;
    });
  };

  yearHasFilm(filmYear){
    return this.films.some(function(film){
      return film.year === filmYear;
    });
  };

  findFilmsByLength(filmLength){
    return this.films.filter(function(film){
      return film.length >=filmLength;
    });
  };

  calculateTotalRuntime(){
    return this.films.reduce(function(total,film){
      return total + film.length;
    },0);
  };

  findFilmByProperty(property, value){
    return this.films.filter(function(film){
      return film[property] === value;
    });
  };
}

module.exports = Cinema;
