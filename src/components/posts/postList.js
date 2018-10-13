import React from 'react';
import PostListItem from './postListItem';

const PostList = ({ posts }) => (
  <ul className="posts__list">
    {posts.map(item => (
      <PostListItem item={item} key={item.id} />
    ))}
  </ul>
);

export default PostList;
