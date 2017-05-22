import React, {Component} from "react"

import './Message.less'

class Message extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="main">
          <img src="http://q.qlogo.cn/qqapp/100229475/45930EFEC169CA93E35A4D4ADAE480AC/100" alt="竹影清风" className="avator"/>
          <div className="info">
            <div className="head"><span className="name">姓名</span><span className="date">2017/04/16</span></div>
            <div className="content">这是一段评论,好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长的评论</div>
          </div>

        </div>
        <div className="main">
          <img src="http://q.qlogo.cn/qqapp/100229475/45930EFEC169CA93E35A4D4ADAE480AC/100" alt="竹影清风" className="avator"/>
          <div className="content">这是一段评论,好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长好长的评论</div>
        </div>
      </div>
    )
  }
}

export default Message