import { VideoDetailFragment } from '../../generated/graphql';

type Props = {
  result: VideoDetailFragment;
};

export const VideoDetail = ({ result }: Props) => {
  return <>{JSON.stringify(result)}</>;
};
