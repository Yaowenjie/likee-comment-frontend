import React from "react"
import ReactDOM from "react-dom"
import Board from "./component/Board"
import {posts} from './constant/duoshuo.json'

ReactDOM.render(<Board posts={posts} />, document.getElementById("message"))