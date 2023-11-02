import React from 'react'
import Button from '../Button'

const FollowButton = ({ isFollowing, onClick }) => (
  <Button text={isFollowing ? 'Unfollow' : 'Follow'} onClick={onClick} />
)

export default FollowButton
