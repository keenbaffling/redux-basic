import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/posts/actions';
import './posts.scss';
import PostList from '../../components/posts/postList';

const { fetchPosts } = actions;

class Posts extends Component {
  static defaultProps = {
    isLoading: '',
    error: '',
    posts: []
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { isLoading, posts } = this.props;

    return (
      <div className="posts">
        {isLoading && posts.length <= 0 ? (
          <div>Loading...</div>
        ) : (
          <PostList posts={posts} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.Posts.get('isLoading'),
    posts: state.Posts.get('items'),
    error: state.Posts.get('error')
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
