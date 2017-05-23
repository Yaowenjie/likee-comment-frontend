import React, {Component} from "react"
import PropTypes from 'prop-types'
import Message from "./Message"

class Board extends Component {
  constructor(props) {
    super(props)
  }

  assembleMessages (posts) {
    let result = []
    posts.forEach((post, index) => {
      result.push(<Message key={index} author={post.author_name} date={post.created_at} content={post.message} reply="dfjdk"/>)
    })
    return result
  }

  render() {
    return (
      <div>
        {this.assembleMessages(this.props.posts)}
      </div>
    )
  }
}

Board.PropTypes = {
  posts: PropTypes.shape({}).isRequired
}

export default Board