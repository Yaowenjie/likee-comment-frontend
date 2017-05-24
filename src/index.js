import React from "react"
import ReactDOM from "react-dom"
import Board from "./component/Board"
import {posts} from './constant/duoshuo.json'
import {assemblePosts} from './util/post'

ReactDOM.render(<Board posts={assemblePosts(posts)} />, document.getElementById("message"))