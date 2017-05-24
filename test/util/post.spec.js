import {assemblePosts} from '../../src/util/post'
import chai from 'chai'

const expect = chai.expect

describe('post', () => {
  describe('#assemblePosts()', () => {
    const originPosts = [
      {
        "post_id": 6266754078215242497,
        "thread_id": 6266750962442961666,
        "message": "\u5206\u4e0d\u6e05\u54ea\u5f20\u662f\u54ea\u4e2a\u57ce\u5e02\u7684\u54ea\u513f",
        "site_id": "1290665",
        "created_at": "2016-03-27T23:26:25+08:00",
        "updated_at": "1970-01-01T08:00:00+08:00",
        "likes": 0,
        "ip": "14.196.141.33",
        "parents": null,
        "author_id": 6266753930936451841,
        "author_email": null,
        "author_name": "wenjue\u7684\u79cb\u5929",
        "author_url": "http:\/\/weibo.com\/2800268732",
        "author_key": 0,
        "thread_key": "\u8fc7\u53bb\u7684\u4e00\u4e9b\u7167\u7247",
        "post_key": "6266754078215242497"
      },
      {
        "post_id": 6270792570322813697,
        "thread_id": 6266968087522706177,
        "message": "\u8fd9\u4e2a\u98ce\u683c\u6211\u559c\u6b22\uff0c\u7ed9103\u5206",
        "site_id": "1290665",
        "created_at": "2016-04-07T20:37:50+08:00",
        "updated_at": "1970-01-01T08:00:00+08:00",
        "likes": 0,
        "ip": "119.36.85.168",
        "parents": null,
        "author_id": 0,
        "author_email": "cuigelasi@gmail.com",
        "author_name": "\u50ac\u683c\u62c9\u65af",
        "author_url": null,
        "author_key": "0",
        "thread_key": "\u7559\u8a00\u677f",
        "post_key": "6270792570322813697"
      }]

    const postsWithReply = [
      {
        "post_id": 6266754078215242497,
        "thread_id": 6266750962442961666,
        "message": "\u5206\u4e0d\u6e05\u54ea\u5f20\u662f\u54ea\u4e2a\u57ce\u5e02\u7684\u54ea\u513f",
        "site_id": "1290665",
        "created_at": "2016-03-27T23:26:25+08:00",
        "updated_at": "1970-01-01T08:00:00+08:00",
        "likes": 0,
        "ip": "14.196.141.33",
        "parents": null,
        "author_id": 6266753930936451841,
        "author_email": null,
        "author_name": "wenjue\u7684\u79cb\u5929",
        "author_url": "http:\/\/weibo.com\/2800268732",
        "author_key": 0,
        "thread_key": "\u8fc7\u53bb\u7684\u4e00\u4e9b\u7167\u7247",
        "post_key": "6266754078215242497"
      },
      {
        "post_id": "6266754641434772225",
        "thread_id": 6266750962442961666,
        "message": "\u563f\u563f\uff0c\u51ed\u611f\u89c9",
        "site_id": "1290665",
        "created_at": "2016-03-27T23:28:36+08:00",
        "updated_at": "1970-01-01T08:00:00+08:00",
        "likes": 0,
        "ip": "14.196.141.33",
        "parents": [
          6266754078215242497
        ],
        "author_id": 6266747902668833537,
        "author_email": null,
        "author_name": "\u7af9\u5f71\u6e05\u98ce",
        "author_url": null,
        "author_key": null,
        "thread_key": "\u8fc7\u53bb\u7684\u4e00\u4e9b\u7167\u7247",
        "post_key": "6266754641434772225"
      },
      {
        "post_id": 6270792570322813697,
        "thread_id": 6266968087522706177,
        "message": "\u8fd9\u4e2a\u98ce\u683c\u6211\u559c\u6b22\uff0c\u7ed9103\u5206",
        "site_id": "1290665",
        "created_at": "2016-04-07T20:37:50+08:00",
        "updated_at": "1970-01-01T08:00:00+08:00",
        "likes": 0,
        "ip": "119.36.85.168",
        "parents": null,
        "author_id": 0,
        "author_email": "cuigelasi@gmail.com",
        "author_name": "\u50ac\u683c\u62c9\u65af",
        "author_url": null,
        "author_key": "0",
        "thread_key": "\u7559\u8a00\u677f",
        "post_key": "6270792570322813697"
      }]

    it('should assemble posts for posts without reply', () => {
      const expectedPosts = [
        {
          "id": 6266754078215242497,
          "thread": 6266750962442961666,
          "message": "\u5206\u4e0d\u6e05\u54ea\u5f20\u662f\u54ea\u4e2a\u57ce\u5e02\u7684\u54ea\u513f",
          "created_at": "2016-03-27",
          "likes": 0,
          "author": {
            "id": 6266753930936451841,
            "email": null,
            "name": "wenjue\u7684\u79cb\u5929",
            "url": "http:\/\/weibo.com\/2800268732",
          },
          "reply": []
        },
        {
          "id": 6270792570322813697,
          "thread": 6266968087522706177,
          "message": "\u8fd9\u4e2a\u98ce\u683c\u6211\u559c\u6b22\uff0c\u7ed9103\u5206",
          "created_at": "2016-04-07",
          "likes": 0,
          "author": {
            "id": 0,
            "email": "cuigelasi@gmail.com",
            "name": "\u50ac\u683c\u62c9\u65af",
            "url": null,
          },
          "reply": []
        },
      ]

      expect(assemblePosts(originPosts)).to.eql(expectedPosts)
    });


    it('should assemble posts for posts with reply', () => {
      const expectedPosts = [
        {
          "id": 6266754078215242497,
          "thread": 6266750962442961666,
          "message": "\u5206\u4e0d\u6e05\u54ea\u5f20\u662f\u54ea\u4e2a\u57ce\u5e02\u7684\u54ea\u513f",
          "created_at": "2016-03-27",
          "likes": 0,
          "author": {
            "id": 6266753930936451841,
            "email": null,
            "name": "wenjue\u7684\u79cb\u5929",
            "url": "http:\/\/weibo.com\/2800268732",
          },
          "reply": [{
            "author": "\u7af9\u5f71\u6e05\u98ce",
            "created_at": "2016-03-27",
            "message": "\u563f\u563f\uff0c\u51ed\u611f\u89c9"
          }]
        },
        {
          "id": 6270792570322813697,
          "thread": 6266968087522706177,
          "message": "\u8fd9\u4e2a\u98ce\u683c\u6211\u559c\u6b22\uff0c\u7ed9103\u5206",
          "created_at": "2016-04-07",
          "likes": 0,
          "author": {
            "id": 0,
            "email": "cuigelasi@gmail.com",
            "name": "\u50ac\u683c\u62c9\u65af",
            "url": null,
          },
          "reply": []
        },
      ]

      expect(assemblePosts(postsWithReply)).to.eql(expectedPosts)
    });
  });
});
