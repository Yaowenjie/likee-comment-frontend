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
        { (data.post && data.post.length !== 0) && (<span className={styles.amount}><span className={styles.number}>{data.post.length}</span>条评论</span>) }
        <span className={styles.prompt}>该评论数据迁移自<b>多说</b>，更多评论功能敬请期待</span>
        {/*{ (data.likes !== 0) && (<span>{data.likes}</span>) }*/}
        {data.post && this.assemblePosts(data.post)}
        <form className={styles.commentForm} action="">
          <span className={styles.commentNote}>站主比较懒，放弃了完成提交功能，想留言请使用gitment或者diqus，也可以移步github或者gmail。</span>
          {/*<div>*/}
            {/*<input type="text" name="name" placeholder="大名、昵称或者代号" className={styles.name}/> <br/>*/}
          {/*</div>*/}
          {/*<div>*/}
            {/*<textarea rows="3" cols="30" placeholder="站主比较懒，提交功能还没有做，想留言请移步github或者gmail，敬请期待后续功能改善。" className={styles.message}></textarea>*/}
          {/*</div>*/}
          {/*<button type='submit'>提交</button>*/}
        </form>
      </div>
    )
  }
}

Thread.PropTypes = {
  data: PropTypes.object.isRequired
}

export default Thread
