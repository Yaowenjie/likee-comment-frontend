import {getColorByStr} from '../../src/util/color'
import chai from 'chai'
import colorMap from '../../src/constant/colorMap.json'

const expect = chai.expect

describe('color', () => {
  describe('#getColorByStr()', () => {
    it('should return correct color value when char is A', () => {
      const char = 'A'
      const color = colorMap.A
      expect(getColorByStr(char)).to.equal(color)
    })

    it('should return correct color value when char is b', () => {
      const str = 'bad man'
      const color = colorMap.B
      expect(getColorByStr(str)).to.equal(color)
    })

    it('should return correct color value when char is 竹', () => {
      const str = '竹影清风'
      const color = colorMap.Z
      expect(getColorByStr(str)).to.equal(color)
    })

    it('should return correct color value when char is 姚', () => {
      const str = '姚'
      const color = colorMap.Y
      expect(getColorByStr(str)).to.equal(color)
    })
  })
})
