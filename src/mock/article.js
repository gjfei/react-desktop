import Mock from 'mockjs'

const classifyList = []
for (let i = 0; i < 5; i++) {
  classifyList.push(Mock.mock({
    id: '@increment',
    name: '@ctitle(5,10)',
    type: 'folder',
    iconUrl: Mock.Random.image('50x50', '#4A7BF7', '#FFF', 'icon')
  }))
}
export default [
  {
    url: 'article/classify',
    type: 'get',
    response: config => {
      const classifyId = config.query ? config.query.classifyId : ''
      let mockList = []
      if (classifyId) {
        mockList = classifyList.filter(item => item.id === +classifyId)
      } else {
        mockList = classifyList
      }
      return {
        code: 200,
        obj: mockList
      }
    }
  }
]

