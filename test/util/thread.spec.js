import {assembleThreads, findThreadByKey} from '../../src/util/thread'
import chai from 'chai'

const expect = chai.expect

describe('thread', () => {
  describe('#assembleThreads()', () => {
    const originThreads = [{
      'site_id': '1290665',
      'thread_id': '6266750315886805762',
      'created_at': '2016-03-27T23:11:49+08:00',
      'updated_at': '2016-03-27T23:11:49+08:00',
      'likes': 0,
      'views': 0,
      'thread_key': '\u8bf7\u5c06\u6b64\u5904\u66ff\u6362\u6210\u6587\u7ae0\u5728\u4f60\u7684\u7ad9\u70b9\u4e2d\u7684ID',
      'title': '\u8bf7\u66ff\u6362\u6210\u6587\u7ae0\u7684\u6807\u9898',
      'url': 'http:\/\/\u8bf7\u66ff\u6362\u6210\u6587\u7ae0\u7684\u7f51\u5740',
      'author_key': '',
      'author_id': 0
    },{
      'site_id': '1290665',
      'thread_id': 6266750962442961666,
      'created_at': '2016-03-27T23:14:20+08:00',
      'updated_at': '2016-03-27T23:14:20+08:00',
      'likes': 1,
      'views': 0,
      'thread_key': '\u8fc7\u53bb\u7684\u4e00\u4e9b\u7167\u7247',
      'title': '\u8fc7\u53bb\u7684\u4e00\u4e9b\u7167\u7247',
      'url': 'http:\/\/\/life%7C%E7%94%9F%E6%B4%BB\/%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87',
      'author_key': '',
      'author_id': 0
    }]

    const originPosts = [
      {
        'id': 6266754078215242497,
        'thread': 6266750962442961666,
        'message': '\u5206\u4e0d\u6e05\u54ea\u5f20\u662f\u54ea\u4e2a\u57ce\u5e02\u7684\u54ea\u513f',
        'created_at': '2016-03-27',
        'likes': 0,
        'author': {
          'id': 6266753930936451841,
          'email': null,
          'name': 'wenjue\u7684\u79cb\u5929',
          'url': 'http:\/\/weibo.com\/2800268732',
        },
        'reply': []
      },
      {
        'id': 6270792570322813697,
        'thread': 6266968087522706177,
        'message': '\u8fd9\u4e2a\u98ce\u683c\u6211\u559c\u6b22\uff0c\u7ed9103\u5206',
        'created_at': '2016-04-07',
        'likes': 0,
        'author': {
          'id': 0,
          'email': 'cuigelasi@gmail.com',
          'name': '\u50ac\u683c\u62c9\u65af',
          'url': null,
        },
        'reply': []
      },
    ]

    it('should assemble threads for original threads', () => {
      const expectedThreads = [{
        'id': 6266750315886805762,
        'created_at': '2016-03-27T23:11:49+08:00',
        'likes': 0,
        'title': '\u8bf7\u66ff\u6362\u6210\u6587\u7ae0\u7684\u6807\u9898',
        'url': 'http:\/\/\u8bf7\u66ff\u6362\u6210\u6587\u7ae0\u7684\u7f51\u5740',
        'key': '\u8bf7\u5c06\u6b64\u5904\u66ff\u6362\u6210\u6587\u7ae0\u5728\u4f60\u7684\u7ad9\u70b9\u4e2d\u7684ID',
        'post': []
      },{
        'id': 6266750962442961666,
        'created_at': '2016-03-27T23:14:20+08:00',
        'likes': 1,
        'title': '\u8fc7\u53bb\u7684\u4e00\u4e9b\u7167\u7247',
        'url': 'http:\/\/\/life%7C%E7%94%9F%E6%B4%BB\/%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87',
        'key': '\u8fc7\u53bb\u7684\u4e00\u4e9b\u7167\u7247',
        'post': []
      }]

      expect(assembleThreads(originThreads, null)).to.eql(expectedThreads)
    })

    it('should assemble threads for threads with posts', () => {
      const expectedThreads = [{
        'id': 6266750315886805762,
        'created_at': '2016-03-27T23:11:49+08:00',
        'likes': 0,
        'title': '\u8bf7\u66ff\u6362\u6210\u6587\u7ae0\u7684\u6807\u9898',
        'url': 'http:\/\/\u8bf7\u66ff\u6362\u6210\u6587\u7ae0\u7684\u7f51\u5740',
        'key': '\u8bf7\u5c06\u6b64\u5904\u66ff\u6362\u6210\u6587\u7ae0\u5728\u4f60\u7684\u7ad9\u70b9\u4e2d\u7684ID',
        'post': []
      },{
        'id': 6266750962442961666,
        'created_at': '2016-03-27T23:14:20+08:00',
        'likes': 1,
        'title': '\u8fc7\u53bb\u7684\u4e00\u4e9b\u7167\u7247',
        'url': 'http:\/\/\/life%7C%E7%94%9F%E6%B4%BB\/%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87',
        'key': '\u8fc7\u53bb\u7684\u4e00\u4e9b\u7167\u7247',
        'post': [{
          'id': 6266754078215242497,
          'thread': 6266750962442961666,
          'message': '\u5206\u4e0d\u6e05\u54ea\u5f20\u662f\u54ea\u4e2a\u57ce\u5e02\u7684\u54ea\u513f',
          'created_at': '2016-03-27',
          'likes': 0,
          'author': {
            'id': 6266753930936451841,
            'email': null,
            'name': 'wenjue\u7684\u79cb\u5929',
            'url': 'http:\/\/weibo.com\/2800268732',
          },
          'reply': []
        }]
      }]

      expect(assembleThreads(originThreads, originPosts)).to.eql(expectedThreads)
    })
  })

  describe('#findThreadByKey()', () => {
    const thread1 = {
      'id': 6266750315886805762,
      'created_at': '2016-03-27T23:11:49+08:00',
      'likes': 0,
      'title': '\u8bf7\u66ff\u6362\u6210\u6587\u7ae0\u7684\u6807\u9898',
      'url': 'http:\/\/\u8bf7\u66ff\u6362\u6210\u6587\u7ae0\u7684\u7f51\u5740',
      'key': '\u8bf7\u5c06\u6b64\u5904\u66ff\u6362\u6210\u6587\u7ae0\u5728\u4f60\u7684\u7ad9\u70b9\u4e2d\u7684ID',
      'post': []
    }
    const thread2 = {
      'id': 6266750962442961666,
      'created_at': '2016-03-27T23:14:20+08:00',
      'likes': 1,
      'title': '\u8fc7\u53bb\u7684\u4e00\u4e9b\u7167\u7247',
      'url': 'http:\/\/\/life%7C%E7%94%9F%E6%B4%BB\/%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87',
      'key': '\u8fc7\u53bb\u7684\u4e00\u4e9b\u7167\u7247',
      'post': []
    }

    const targetThreads = [thread1, thread2]

    it('should find thread1 in threads by key of thread1', () => {
      const thread1Key = '\u8bf7\u5c06\u6b64\u5904\u66ff\u6362\u6210\u6587\u7ae0\u5728\u4f60\u7684\u7ad9\u70b9\u4e2d\u7684ID'
      expect(findThreadByKey(targetThreads, thread1Key)).to.eql(thread1)
    })

    it('should find thread2 in threads by key of thread2', () => {
      const thread2Key = '\u8fc7\u53bb\u7684\u4e00\u4e9b\u7167\u7247'
      expect(findThreadByKey(targetThreads, thread2Key)).to.eql(thread2)
    })

    it('should find undefined in threads by key of nonexisted thread', () => {
      const nonExistedKey = '不存在的key'
      expect(findThreadByKey(targetThreads, nonExistedKey)).to.be.an('undefined')
    })
  })
})
