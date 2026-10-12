Page({
  data: {
    taskName: "示范田喷洒任务",
    taskId: "DEMO-001",
    status: "作业中（模拟）",
    progress: 68,
    sprayedArea: 32.6,
    totalArea: 48,
    battery: 72,
    connection: "模拟在线",
    sprayStatus: "模拟喷洒中",

    // 演示坐标：上海市中心附近，并非无人机位置
    latitude: 31.2304,
    longitude: 121.4737,

    markers: [{
      id: 1,
      latitude: 31.2304,
      longitude: 121.4737,
      title: "演示位置（非真实无人机）",
      callout: {
        content: "模拟位置",
        display: "ALWAYS"
      }
    }],

    lastUpdate: ""
  },

  onLoad() {
    this.updateTime()
  },

  updateTime() {
    const now = new Date()
    const time = now.toLocaleTimeString("zh-CN", {
      hour12: false
    })
    this.setData({ lastUpdate: time })
  },

  refreshDemo() {
    this.updateTime()
    wx.showToast({
      title: "已刷新演示数据",
      icon: "success"
    })
  },

  onPullDownRefresh() {
    this.refreshDemo()
    wx.stopPullDownRefresh()
  }
})
