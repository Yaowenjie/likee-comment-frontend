import React from 'react'
import ReactDOM from 'react-dom'
import Board from './component/Board'
import { threads, posts } from './constant/duoshuo.json'
import { assemblePosts } from './util/post'
import { assembleThreads } from './util/thread'

const myPosts = assemblePosts(posts)
const myThreads = assembleThreads(threads, myPosts)

ReactDOM.render(<Board threads={myThreads} />, document.getElementById('message'))