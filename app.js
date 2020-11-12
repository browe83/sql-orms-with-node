const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movies.db',
});

class Movie extends Sequelize.Model {}
Movie.init({
  title: Sequelize.STRING,
}, { sequelize });

// async IIFE
(async () => {
  // Sync 'Movies' table
  await sequelize.sync({ force: true });

  try {
    // await sequelize.authenticate();
    // console.log('Connection to the database successful!');
    // Instance of the Movie class represents a database row
    const movie = await Movie.create({
      title: 'Toy Story',
    });
    console.log(movie.toJSON());
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();
