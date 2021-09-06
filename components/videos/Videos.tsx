import { GetAllVideoFragment } from '../../generated/graphql';
import { VideoDetail } from './VideoDetail';

type Props = {
  result: GetAllVideoFragment;
};

export const Videos = ({ result }: Props) => {
  return (
    <>
      {result.videos.map((v) => (
        <div key={v.id}>
          <VideoDetail result={v} />
        </div>
      ))}
    </>
  );
};
