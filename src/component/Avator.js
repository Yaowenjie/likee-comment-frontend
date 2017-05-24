import React, {Component} from 'react'
import PropTypes from 'prop-types'

import styles from './Avator.less'

class Avator extends Component {
  constructor(props) {
    super(props)
  }

  assembleStyle (size, color) {
    let letterStyle = {}
    if (size) {
      letterStyle.width = size
      letterStyle.height = size
      letterStyle.fontSize = size * 0.618
    }
    if (color) {
      letterStyle.backgroundColor = color
    }
    return letterStyle
  }

  render() {
    const { letter, size, color } = this.props
    return (
      <div style={this.assembleStyle(size, color)} className={styles.main}>
        <div className={styles.letter}>
          {letter.toUpperCase()}
        </div>
      </div>
    )
  }
}

Avator.PropTypes = {
  letter: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
}

export default Avator