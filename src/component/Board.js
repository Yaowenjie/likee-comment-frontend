import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Thread from './Thread'

class Board extends Component {
  constructor(props) {
    super(props)
  }

  assembleThreads (threads) {
    let result = []
    threads.forEach((thread, index) => {
      result.push(<Thread key={index} data={thread} />)
    })
    return result
  }

  render() {
    return (
      <div>
        {this.assembleThreads(this.props.threads)}
      </div>
    )
  }
}

Board.PropTypes = {
  threads: PropTypes.shape({}).isRequired
}

export default Board