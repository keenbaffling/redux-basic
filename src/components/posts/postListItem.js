import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({ item }) => (
  <li className="posts__item" key={item.id}>
    <Link to={`/posts/${item.id}`}>{item.title}</Link>
  </li>
);

export default PostListItem;
