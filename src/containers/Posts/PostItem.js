import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../redux/posts/actions';

const { fetchPost } = actions;

class PostItem extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    const { item, isLoading, error } = this.props;

    return (
      <div className="post">
        <Link to="/">Back</Link>

        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="post__item">
            <h1>{item.title}</h1>
            <div>{item.body}</div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.Posts.get('item'),
    isLoading: state.Posts.get('isLoading'),
    error: state.Posts.get('error')
  };
};

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostItem);
