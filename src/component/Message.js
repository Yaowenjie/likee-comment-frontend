import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Reply from './Reply'
import Avator from './Avator'
import {getColorByStr} from '../util/color'

import styles from './Message.less'

class Message extends Component {
  constructor(props) {
    super(props)
  }

  assembleReply(replys) {
    if (replys && replys.length > 0) {
      let result = []
      replys.forEach((reply, index) => {
        result.push(<Reply key={index} reply={reply} />)
      })
      return result
    }
  }

  render() {
    const {author, date, content, reply} = this.props
    return (
      <div className={styles.main}>
        <Avator letter={author.charAt(0)} size={45} color={getColorByStr(author)} />
        {/*<img src='http://q.qlogo.cn/qqapp/100229475/45930EFEC169CA93E35A4D4ADAE480AC/100' alt='竹影清风' className={styles.avator} />*/}
        <div className={styles.info}>
          <div className={styles.head}>
            <span className={styles.name}>{author}</span>
            <span className={styles.date}>{date}</span>
          </div>
          <div className={styles.content}>
            {content}
          </div>
          {this.assembleReply(reply)}
        </div>
      </div>
    )
  }
}

Message.PropTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  reply: PropTypes.object
}

export default Message