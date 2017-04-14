(function (window) {
  const MyPlugin = {}
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('工具方法, myGlobalMethod()')
    }
    // 2. 添加全局资源
    Vue.directive('my-directive', function (value) {
      this.el.innerHTML = value.length
    })
    // 3. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('实例方法 $myMethod()')
    }
  }

  window.MyPlugin = MyPlugin

})(window)