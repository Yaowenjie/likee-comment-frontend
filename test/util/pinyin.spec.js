import {getFirstPY} from '../../src/util/pinyin'
import chai from 'chai'

const expect = chai.expect

describe('pinyin', () => {
  describe('#getFirstPY()', () => {
    it('should return A when str is 啊', () => {
      const input = '啊'
      const expectedLetter = 'A'
      expect(getFirstPY(input)).to.contains(expectedLetter)
    })

    it('should return A & E when str is 阿', () => {
      const input = '阿'
      const expectedLetter = ['A', 'E']
      expect(getFirstPY(input)).to.eql(expectedLetter)
    })

    it('should return C when str is 测试', () => {
      const input = '测试'
      const expectedLetter = ['CS']
      expect(getFirstPY(input)).to.eql(expectedLetter)
    })
  })
})
