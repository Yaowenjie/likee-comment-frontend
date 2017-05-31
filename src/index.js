import React from 'react'
import ReactDOM from 'react-dom'
import Board from './component/Board'
import { threads, posts } from './constant/duoshuo.json'
import { assemblePosts } from './util/post'
import { assembleThreads, findThreadByKey } from './util/thread'
import Thread from './component/Thread'

const myPosts = assemblePosts(posts)
const myThreads = assembleThreads(threads, myPosts)

const commentElement = document.getElementById('duoshuo-comment') // for blog
const demoElement = document.getElementById('duoshuo-comment-demo') // for demo page

if (commentElement && commentElement.dataset.threadKey) {
  const currentThread = findThreadByKey(myThreads, commentElement.dataset.threadKey)
  ReactDOM.render(<Thread data={currentThread} />, commentElement)
}

if (demoElement) {
  ReactDOM.render(<Board threads={myThreads} />, demoElement)
}
