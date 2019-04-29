var _vds = _vds || [];
function __QiSdGetCookie(name) { var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); if (arr = document.cookie.match(reg)) return unescape(arr[2]); else return null; }

function gio(e, t, n, g, i) {
  e[i] = e[i] || function () { (e[i].q = e[i].q || []).push(arguments) },
  n = t.createElement("script"), tag = t.getElementsByTagName("script")[0], n.async = 1, n.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + g, tag.parentNode.insertBefore(n, tag)
  n.onload = n.onreadystatechange = function () {
    if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
      e[i]('init', '882cdac9dfdad964', {});
      e[i]('send');
      n.onload = n.onreadystatechange = null;
    }
  };

}

~function __setQiSdGio() {
  var host = 'https://vip.jisuchou.com'
  var originStr = 'gio' //对应修改
  var hd = document.getElementsByTagName('head')[0]
  if (!__QiSdGetCookie('gr_user_id') || !localStorage.__QiSd || localStorage.__QiSd === 'undefined') {
    setTimeout(function () {
      if (!localStorage.__QiSd) {
        return undefined
      }
    }, 2500);
    var iframe = document.createElement('iframe')
    iframe.src = host + '/identity/uuid-' + originStr + '.html'
    iframe.style = 'display:none'
    hd.appendChild(iframe)
    iframe.onload = function () {
      iframe.contentWindow.postMessage({
        idHost: originStr
      }, host);
      window.addEventListener("message", function (e) {
        // console.log(e)
        if (e.origin === host && e.data.idHost === originStr) {
          document.cookie = 'gr_user_id=' + e.data.__QiSd
          localStorage.__QiSd = e.data.__QiSd
          gio(window, document, "script", "assets.growingio.com/2.1/gio.js", "gio");
          // hd.removeChild(iframe)
        }
      }, false);
    }

  } else {
    gio(window, document, "script", "assets.growingio.com/2.1/gio.js", "gio");
  }
  (function () { // 打点失败，对应4个地方修改
    ReSendGio = window.ReSendGio || (window.ReSendGio = []);
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.crossorigin = "anonymous";
    s.src = 'https://fe.tf.qschou.com/identity/reSendGio.js';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  })()
}()