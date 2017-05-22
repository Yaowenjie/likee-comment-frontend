import {parseDate} from '../../src/util/time'
import chai from 'chai'

const expect = chai.expect

describe('time', () => {
  describe('#parseDate()', () => {
    it('should return 2016-03-27 when the date string is 2016-03-27T23:26:25+08:00', () => {
      let created_at = '2016-03-27T23:26:25+08:00'
      expect(parseDate(created_at)).to.equal('2016-03-27')
    });

    it('should return 2017-04-14 when the date string is 2017-04-14T13:08:17+08:00', () => {
      let created_at = ' 2017-04-14T13:08:17+08:00 '
      expect(parseDate(created_at)).to.equal('2017-04-14')
    });
  });
});
