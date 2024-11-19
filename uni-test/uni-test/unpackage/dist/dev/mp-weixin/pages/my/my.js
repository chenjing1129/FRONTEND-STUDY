"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "my",
  setup(__props) {
    function navigateToSetting(setting) {
      common_vendor.index.showToast({ title: `跳转到${setting}` });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => navigateToSetting("账户设置")),
        b: common_vendor.o(($event) => navigateToSetting("帮助与反馈")),
        c: common_vendor.o(($event) => navigateToSetting("关于"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f1ef635"]]);
wx.createPage(MiniProgramPage);
