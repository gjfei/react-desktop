import Mock from 'mockjs'
import { param2Obj } from '../utils'
import article from './article'

const mocks = [
	...article
]

const responseFake = (url, type, respond) => {
  function XHR2ExpressReqWrap(respond) {
    return function(options) {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url)
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }
  return Mock.mock(new RegExp(url), type || 'get', XHR2ExpressReqWrap(respond))
}
export default mocks.map(item=>{
  return responseFake(item.url, item.type, item.response)
})
