import React, {Component} from "react"
import PropTypes from 'prop-types'

import './Message.less'

class Message extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {author, date, content} = this.props
    return (
      <div className="main">
        <img src="http://q.qlogo.cn/qqapp/100229475/45930EFEC169CA93E35A4D4ADAE480AC/100" alt="竹影清风" className="avator"/>
        <div className="info">
          <div className="head">
            <span className="name">{author}</span>
            <span className="date">{date}</span>
          </div>
          <div className="content">{content}</div>
        </div>
      </div>
    )
  }
}

Message.PropTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Message