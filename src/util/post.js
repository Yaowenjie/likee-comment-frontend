import {parseDate} from './time'

const getReplys = (id, posts) => {
  let replys = []
  posts.forEach(post => {
    if (post.parents && id == post.parents[0]) {
      replys.push({
        "author": post.author_name,
        "created_at": parseDate(post.created_at),
        "message": post.message
      })
    }
  })
  return replys
}


export const assemblePosts = (posts) => {
  let result = []
  posts.forEach(post => {
    if (!post.parents) {
      result.push({
        "id": Number(post.post_id),
        "thread": post.thread_id,
        "message": post.message,
        "created_at": parseDate(post.created_at),
        "likes": post.likes,
        "author": {
          "id": post.author_id,
          "email": post.author_email,
          "name": post.author_name,
          "url": post.author_url,
        },
        "reply": getReplys(post.post_id, posts)
      })
    }
  })
  return result
}