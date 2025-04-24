export default {
  go: (data) => {
    // console.log(222);
    if (data == '') {
      uni.showToast({
        title: '待开发',
        icon: 'none'
      })
    } else {
      uni.navigateTo({
        url: data
      })
    }
  }
}