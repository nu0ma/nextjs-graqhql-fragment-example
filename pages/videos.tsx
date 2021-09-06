import { Videos } from '../components/videos/Videos';
import { useVideosQuery } from '../generated/graphql';

const VideosPage = () => {
  const { data, loading, error } = useVideosQuery();

  if (!data) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;

  return (
    <>
      <Videos result={data} />
    </>
  );
};

export default VideosPage;
