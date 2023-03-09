import Link from 'next/link';
import Image from 'next/image';

export default function movie({ movie }) {
  const imagePath = 'https://image.tmdb.org/t/p/original';
  const { title, id, poster_path, release_date } = movie;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          alt={title}
          width={500}
          height={500}
        />
      </Link>
    </div>
  );
}
