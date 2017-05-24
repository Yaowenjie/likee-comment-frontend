import pinyin from 'chinese-to-pinyin'
import colorMap from '../constant/colorMap.json'

export const getColorByStr = (str) => {
  const firstLetter = pinyin(str, {noTone: true})
  return firstLetter ? colorMap[firstLetter.charAt(0).toUpperCase()] : colorMap[str.charAt(0).toUpperCase()]
}