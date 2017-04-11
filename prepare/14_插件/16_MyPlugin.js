/**
 * Created by xfzhang on 2016/8/25.
 */
MyPlugin = {};
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    alert('Vue myGlobalMethod()');
  }
  // 2. 添加全局资源
  Vue.directive('my-directive', {
    update: function (value) {
      this.el.innerHTML = "MyPlugin my-directive " + value
    }
  });
  // 3. 添加实例方法
  Vue.prototype.$myMethod = function () {
    alert('vue $myMethod()');
  }
};