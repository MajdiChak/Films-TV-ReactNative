import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {getPopularMovies} from '../services/services';

const Home = () => {
  const [movie, setMovie] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPopularMovies()
      .then(movies => {
        setMovie(movies[0]);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <View>
      {error ? (
        <Text style={{color: 'red'}}>erreur de serveur</Text>
      ) : (
        <View style={{borderColor: 'green', borderWidth: 1}}>
          <Text>Title hy: {movie.original_title} </Text>
          <Text>vote : {movie.vote_average} </Text>
        </View>
      )}
    </View>
  );
};

export default Home;
