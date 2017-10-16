const getPosts = (id, posts) => {
  let result = []
  if (posts) {
    posts.forEach(post => {
      if (post.thread && post.thread === id) {
        result.push(post)
      }
    })
  }
  return result
}

export const assembleThreads = (threads , posts) => {
  let result = []
  threads.forEach(thread => {

    result.push({
      'id': Number(thread.thread_id),
      'created_at': thread.created_at,
      'likes': thread.likes,
      'title': thread.title,
      'url': thread.url,
      'key': thread.thread_key,
      'post': getPosts(Number(thread.thread_id), posts)
    })
  })
  return result
}

export const findThreadByKey = (threads, key) => {
  const currentThread = threads.find(thread => thread.key === key)
  return typeof(currentThread) !== 'undefined' && currentThread !== null ? currentThread :
  {
    'likes': 0,
    'title': key,
  }
}