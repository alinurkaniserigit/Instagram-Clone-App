import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { gql } from 'apollo-boost';

import ProfilePresenter from './ProfilePresenter';

const GET_USER = gql`
  query seeUser($userName: String!) {
    seeUser(userName: $userName) {
      id
      avatar
      userName
      fullName
      isFollowing
      isSelf
      bio
      followingCount
      followersCount
      postsCount
      posts {
        id
        files {
          url
        }
        likeCount
        commentCount
      }
    }
  }
`;

export const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;

const ProfileContainer = () => {
  const navigate = useNavigate();
  const { userName } = useParams();

  const { data, loading } = useQuery(GET_USER, { variables: { userName } });
  const [logOut] = useMutation(LOG_OUT);

  return (
    <ProfilePresenter loading={loading} logOut={logOut} data={data} navigate={navigate} />
  );
};

export default ProfileContainer;
