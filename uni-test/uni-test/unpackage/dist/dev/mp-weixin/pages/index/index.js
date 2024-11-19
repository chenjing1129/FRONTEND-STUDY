"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const recentFiles = common_vendor.ref([
      { name: "文件1.pdf", date: "2024-11-01" },
      { name: "照片.jpg", date: "2024-11-02" },
      { name: "视频.mp4", date: "2024-11-03" }
    ]);
    function navigateTo(category) {
      common_vendor.index.showToast({ title: `点击了${category}` });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => navigateTo("照片")),
        b: common_vendor.o(($event) => navigateTo("文件")),
        c: common_vendor.o(($event) => navigateTo("视频")),
        d: common_vendor.o(($event) => navigateTo("收藏")),
        e: common_vendor.o(($event) => navigateTo("回收站")),
        f: common_vendor.o(($event) => navigateTo("上传")),
        g: common_vendor.f(recentFiles.value, (file, index, i0) => {
          return {
            a: common_vendor.t(file.name),
            b: common_vendor.t(file.date),
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
