webpackJsonp([265],{1305:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(41),o=a.n(n),i=a(573);t.default={directives:{TransferDom:i.a},components:{XDialog:o.a},data:function(){return document.title="更多特色",{}}}},1409:function(e,t,a){(e.exports=a(168)()).push([e.i,".mildcase{background:#fff}.mildcase h3{height:33px;line-height:33px;text-indent:15px;font-size:13px;font-weight:400;color:#999}.mildcase img{display:block;width:100%}.dialog-module{font-family:Helvetica Neue,Helvetica,STHeiTi,sans-serif}.dialog-module .dialog-header{height:50px;line-height:60px;font-size:18px;font-weight:400;color:#222;overflow:hidden}.dialog-module .dialog-body{max-height:320px;padding-bottom:5px;overflow-y:auto}.dialog-module .dialog-body p{padding:0 10px;text-align:left;font-size:16px;color:#666;word-wrap:break-word}.dialog-module .dialog-footer{color:#4b8ffb;font-weight:600;border-radius:0;padding:10px 15px;font-size:17px;vertical-align:middle}","",{version:3,sources:["/Users/zjw/gitlab/dbj_cdn_test/m_ebao_cdn_test/src/views/insurService/traffic/product.vue"],names:[],mappings:"AACA,UACE,eAAkB,CACnB,AACD,aACE,YAAa,AACb,iBAAkB,AAClB,iBAAkB,AAClB,eAAgB,AAChB,gBAAiB,AACjB,UAAY,CACb,AACD,cACE,cAAe,AACf,UAAY,CACb,AACD,eACE,uDAA8D,CAC/D,AACD,8BACE,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,gBAAiB,AACjB,WAAY,AACZ,eAAiB,CAClB,AACD,4BACE,iBAAkB,AAClB,mBAAoB,AACpB,eAAiB,CAClB,AACD,8BACE,eAAgB,AAChB,gBAAiB,AACjB,eAAgB,AAChB,WAAY,AACZ,oBAAsB,CACvB,AACD,8BACE,cAAe,AACf,gBAAiB,AACjB,gBAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,qBAAuB,CACxB",file:"product.vue",sourcesContent:['\n.mildcase {\n  background: white;\n}\n.mildcase h3 {\n  height: 33px;\n  line-height: 33px;\n  text-indent: 15px;\n  font-size: 13px;\n  font-weight: 400;\n  color: #999;\n}\n.mildcase img {\n  display: block;\n  width: 100%;\n}\n.dialog-module {\n  font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;\n}\n.dialog-module .dialog-header {\n  height: 50px;\n  line-height: 60px;\n  font-size: 18px;\n  font-weight: 400;\n  color: #222;\n  overflow: hidden;\n}\n.dialog-module .dialog-body {\n  max-height: 320px;\n  padding-bottom: 5px;\n  overflow-y: auto;\n}\n.dialog-module .dialog-body p {\n  padding: 0 10px;\n  text-align: left;\n  font-size: 16px;\n  color: #666;\n  word-wrap: break-word;\n}\n.dialog-module .dialog-footer {\n  color: #4B8FFB;\n  font-weight: 600;\n  border-radius: 0;\n  padding: 10px 15px;\n  font-size: 17px;\n  vertical-align: middle;\n}\n'],sourceRoot:""}])},1760:function(e,t,a){var n=a(1409);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(169)("5f841189",n,!0)},2119:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mildcase"},[a("h3",[e._v("保障特色")]),e._v(" "),a("img",{attrs:{src:"//cdn-test.qsebao.com/static/images/traffic/traffic_01.jpg"}}),e._v(" "),a("img",{attrs:{src:"//cdn-test.qsebao.com/static/images/traffic/traffic_02.jpg"}}),e._v(" "),a("img",{attrs:{src:"//cdn-test.qsebao.com/static/images/traffic/traffic_03.jpg"}}),e._v(" "),a("img",{attrs:{src:"//cdn-test.qsebao.com/static/images/traffic/traffic_04.jpg"}}),e._v(" "),a("br"),a("br")])}]}},417:function(e,t,a){a(1760);var n=a(3)(a(1305),a(2119),null,null);e.exports=n.exports},573:function(e,t,a){"use strict";var n=a(68),A=a.n(n);function d(e){return void 0===e&&(e=document.body),!0===e?document.body:e instanceof window.Node?e:document.querySelector(e)}var o={inserted:function(e,t,a){var n=t.value;e.className=e.className?e.className+" v-transfer-dom":"v-transfer-dom";var o=e.parentNode,i=document.createComment(""),r=!1;!1!==n&&(o.replaceChild(i,e),d(n).appendChild(e),r=!0),e.__transferDomData||(e.__transferDomData={parentNode:o,home:i,target:d(n),hasMovedOut:r})},componentUpdated:function(e,t){var a=t.value,n=e.__transferDomData,o=n.parentNode,i=n.home,r=n.hasMovedOut;!r&&a?(o.replaceChild(i,e),d(a).appendChild(e),e.__transferDomData=A()({},e.__transferDomData,{hasMovedOut:!0,target:d(a)})):r&&!1===a?(o.replaceChild(e,i),e.__transferDomData=A()({},e.__transferDomData,{hasMovedOut:!1,target:d(a)})):a&&d(a).appendChild(e)},unbind:function(e,t){e.className=e.className.replace("v-transfer-dom",""),!0===e.__transferDomData.hasMovedOut&&e.__transferDomData.parentNode&&e.__transferDomData.parentNode.appendChild(e),e.__transferDomData=null}};t.a=o}});