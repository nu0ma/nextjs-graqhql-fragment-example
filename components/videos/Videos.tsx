import { AllVideosFragment } from '../../generated/graphql';
import { VideoDetail } from './VideoDetail';

type Props = {
  result: AllVideosFragment;
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
