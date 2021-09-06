import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createVideo: Video;
  updateVideo: Video;
  deleteVideo: Video;
  updateTag: Tag;
  deleteTag: Tag;
};


export type MutationCreateVideoArgs = {
  tagId: Scalars['Float'];
  youtubeUrl: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  videos: Array<Video>;
  video: Video;
  findAll?: Maybe<Array<Video>>;
  findOne?: Maybe<Video>;
  tags: Array<Tag>;
  tag: Tag;
};


export type QueryVideoArgs = {
  id: Scalars['Int'];
};


export type QueryFindOneArgs = {
  id: Scalars['Float'];
};


export type QueryTagArgs = {
  id: Scalars['Int'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  name: Scalars['String'];
  inVideos?: Maybe<Array<Video>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['Int'];
  title: Scalars['String'];
  youtubeUrl: Scalars['String'];
  tags?: Maybe<Array<Tag>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type VideoDetailFragment = { __typename?: 'Video', id: number, title: string, createdAt: any, tags?: Maybe<Array<{ __typename?: 'Tag', id: number, name: string, createdAt: any }>> };

export type AllVideosFragment = { __typename?: 'Query', videos: Array<{ __typename?: 'Video', id: number, title: string, createdAt: any, tags?: Maybe<Array<{ __typename?: 'Tag', id: number, name: string, createdAt: any }>> }> };

export type VideosQueryVariables = Exact<{ [key: string]: never; }>;


export type VideosQuery = { __typename?: 'Query', videos: Array<{ __typename?: 'Video', id: number, title: string, createdAt: any, tags?: Maybe<Array<{ __typename?: 'Tag', id: number, name: string, createdAt: any }>> }> };

export const VideoDetailFragmentDoc = gql`
    fragment VideoDetail on Video {
  id
  title
  tags {
    id
    name
    createdAt
  }
  createdAt
}
    `;
export const AllVideosFragmentDoc = gql`
    fragment AllVideos on Query {
  videos {
    ...VideoDetail
  }
}
    ${VideoDetailFragmentDoc}`;
export const VideosDocument = gql`
    query Videos {
  ...AllVideos
}
    ${AllVideosFragmentDoc}`;

/**
 * __useVideosQuery__
 *
 * To run a query within a React component, call `useVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideosQuery({
 *   variables: {
 *   },
 * });
 */
export function useVideosQuery(baseOptions?: Apollo.QueryHookOptions<VideosQuery, VideosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VideosQuery, VideosQueryVariables>(VideosDocument, options);
      }
export function useVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideosQuery, VideosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VideosQuery, VideosQueryVariables>(VideosDocument, options);
        }
export type VideosQueryHookResult = ReturnType<typeof useVideosQuery>;
export type VideosLazyQueryHookResult = ReturnType<typeof useVideosLazyQuery>;
export type VideosQueryResult = Apollo.QueryResult<VideosQuery, VideosQueryVariables>;