let Base = ''
if (process.env.NODE_ENV === 'development') {
  Base = '/api'
}
const untly = {
  VIDEO_CATE_URI: Base + '/index/index/cate_type', // 通过分类获取视频
  VIDEO_BANN_URI: Base + '/index/index/banner_hot', // 获取首页数据
  VIDEO_HOTS_URI: Base + '/index/index/curr_hot' // 获取分页的今日更新
}
export default untly
