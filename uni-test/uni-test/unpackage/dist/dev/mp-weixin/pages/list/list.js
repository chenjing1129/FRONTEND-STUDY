"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "list",
  setup(__props) {
    const uploadQueue = common_vendor.ref([
      { name: "文件A.pdf", status: "上传中..." },
      { name: "照片B.jpg", status: "等待中..." },
      { name: "视频C.mp4", status: "已完成" }
    ]);
    const downloadQueue = common_vendor.ref([
      { name: "文件X.pdf", status: "下载中..." },
      { name: "照片Y.jpg", status: "等待中..." },
      { name: "视频Z.mp4", status: "已完成" }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(uploadQueue.value, (upload, index, i0) => {
          return {
            a: common_vendor.t(upload.name),
            b: common_vendor.t(upload.status),
            c: index
          };
        }),
        b: common_vendor.f(downloadQueue.value, (download, index, i0) => {
          return {
            a: common_vendor.t(download.name),
            b: common_vendor.t(download.status),
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-98a9e0b2"]]);
wx.createPage(MiniProgramPage);
