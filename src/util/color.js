import {getFirstPY} from './pinyin'
import colorMap from '../constant/colorMap.json'

export const getColorByStr = (str) => {
  const firstLetter = getFirstPY(str)[0]
  return firstLetter ? colorMap[firstLetter.charAt(0).toUpperCase()] : colorMap[str.charAt(0).toUpperCase()]
}