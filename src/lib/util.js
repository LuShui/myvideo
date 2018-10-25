let Base = ''
if (process.env.NODE_ENV === 'development') {
  Base = '/api'
}
const untly = {
  VIDEO_CATE_URI: Base + '/public/index.php/index/index/cate_type', // 通过分类获取视频
  VIDEO_BANN_URI: Base + '/public/index.php/index/index/banner_hot', // 获取首页数据
  VIDEO_HOTS_URI: Base + '/public/index.php/index/index/curr_hot', // 获取分页的今日更新
  VIDEO_DETIL_URI: Base + '/public/index.php/index/index/videoinfo' // 获取视频详情信息

}
export default untly
