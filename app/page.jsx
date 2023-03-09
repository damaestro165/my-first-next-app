import Movie from './Movie';

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();
  const movies = res.results;

  return (
    <main>
      <div className='grid gap-10 grid-cols-fluid '>
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </main>
  );
}
