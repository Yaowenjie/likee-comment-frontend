import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

import styles from './Thread.less'

class Thread extends Component {
  constructor(props) {
    super(props)
  }

  assemblePosts (posts) {
    let result = []
    posts.forEach((post, index) => {
      result.push(<Message key={index} author={post.author.name} date={post.created_at} content={post.message} reply={post.reply} />)
    })
    return result
  }

  render() {
    const { data } = this.props
    return (
      <div className={styles.main}>
        {/*<span className={styles.title}>{data.title}</span>*/}
        <span className={styles.amount}>{ (data.post.length !== 0) && (data.post.length + '条评论') }</span>
        { (data.likes !== 0) && (<span>{data.likes}</span>) }
        {this.assemblePosts(data.post)}
      </div>
    )
  }
}

Thread.PropTypes = {
  data: PropTypes.object.isRequired
}

export default Thread