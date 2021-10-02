import AsyncStorage from '@react-native-async-storage/async-storage';

// Buscar os filmes salvos;
export async function getMoviesSave(key) {
  const myMovies = await AsyncStorage.getItem(key);

  let moviesSave = JSON.parse(myMovies) || [];

  return moviesSave;
};

// Salvar um novo filme;
export async function saveMovie(key, newMovie) {
  let moviesStored = await getMoviesSave(key);

  // se tiver algum filme salvo com esse mesmo ID / ou duplicado precisamos ignorar;
  const hasMovie = moviesStored.some((item) => item.id === newMovie.id);

  if (hasMovie) {
    console.log('Esse filme já existe na sua lista');
    return;
  };

  moviesStored.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
  console.log('Filme salvo com sucesso');
};
