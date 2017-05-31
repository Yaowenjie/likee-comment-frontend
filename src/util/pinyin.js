import oMultiDiff from '../constant/oMultiDiff.json'
import {strChineseFirstPY} from '../constant/strChineseFirstPY'

//返回值:拼音首字母串数组
export const getFirstPY = (str) => {
  if (typeof(str) !== 'string')
    throw new Error(-1, '函数makePy需要字符串类型参数!')
  let arrResult = new Array() //保存中间结果的数组
  let i = 0, len = str.length
  for (; i < len; i++) {
  //获得unicode码
    let ch = str.charAt(i)
  //检查该unicode码是否在处理范围之内,在则返回该码对映汉字的拼音首字母,不在则调用其它函数处理
    arrResult.push(checkCh(ch))
  }
  //处理arrResult,返回所有可能的拼音首字母串数组
  return mkRslt(arrResult)
}

function checkCh(ch) {
  const uni = ch.charCodeAt(0)
  //如果不在汉字处理范围之内,返回原字符,也可以调用自己的处理函数
  if (uni > 40869 || uni < 19968)
    return ch
  //检查是否是多音字,是按多音字处理,不是就直接在strChineseFirstPY字符串中找对应的首字母
  return (oMultiDiff[uni] ? oMultiDiff[uni] : (strChineseFirstPY.charAt(uni - 19968)))
}

function mkRslt(arr) {
  let k
  let arrRslt = ['']
  let i = 0, len = arr.length
  for (; i < len; i++) {
    const str = arr[i]
    const strlen = str.length
    if (strlen === 1) {
      for (k = 0; k < arrRslt.length; k++) {
        arrRslt[k] += str
      }
    } else {
      const tmpArr = arrRslt.slice(0)
      arrRslt = []
      for (k = 0; k < strlen; k++) {
        //复制一个相同的arrRslt
        const tmp = tmpArr.slice(0)
        //把当前字符str[k]添加到每个元素末尾
        for (let j = 0; j < tmp.length; j++) {
          tmp[j] += str.charAt(k)
        }
        //把复制并修改后的数组连接到arrRslt上
        arrRslt = arrRslt.concat(tmp)
      }
    }
  }
  return arrRslt
}