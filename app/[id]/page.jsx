import Image from 'next/image';

export default async function MovieDetail({ params }) {
  const movie = params.id;
  const imagePath = 'https://image.tmdb.org/t/p/original';
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <div>
      <div>
        <h2 className="'text-4xl">{res.title}</h2>
        <h2 className="'text-lg">{res.release_date}</h2>
        <h2 className=''>Runtime: {res.runtime} minutes</h2>
        <h2 className='bg-green-600 inline-block my-2 p-2 rounded-md text-white text-xs'>
          {res.status}
        </h2>
      </div>
      <Image
        src={imagePath + res.poster_path}
        alt={res.title}
        width={700}
        height={200}
      />
      <p className='my-5'>{res.overview}</p>
    </div>
  );
}
