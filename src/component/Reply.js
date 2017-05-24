import React, {Component} from "react"
import PropTypes from 'prop-types'
import Avator from './Avator'

import styles from './Reply.less'

class Reply extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.main}>
        <Avator letter="T" size={40} color={"#a3d4b3"} />
        {/*<img src="http://q.qlogo.cn/qqapp/100229475/45930EFEC169CA93E35A4D4ADAE480AC/100" alt="竹影清风" className={styles.avator}/>*/}
        <div className={styles.info}>
          <div className={styles.head}>
            <span className={styles.name}>作者</span>
            <span className={styles.date}>2017/12/20</span>
          </div>
          <div className={styles.content}>
            这是一段针对该段的回复
          </div>
        </div>
      </div>
    )
  }
}

Reply.PropTypes = {
  reply: PropTypes.object.isRequired
}

export default Reply