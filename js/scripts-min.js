(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _isMobile = require("./modules/isMobile");

var _initialVariables = require("./modules/initialVariables");

var _loading = require("./modules/loading");

// import axios from 'axios'
// import { scrollTo } from "./modules/scrollSmooth";
// import { activeMenu, toggleMenu } from "./modules/active-menu";
(0, _isMobile.setMobileClass)(_initialVariables.dd, 'mobile', 'desktop'); // activeMenu();

var loadingEle = document.getElementById('loading');
addEventListener('load', function () {
  (0, _initialVariables.cssScrollBarWidth)();
  if (loadingEle) (0, _loading.loading)(loadingEle, 500);
});
addEventListener('resize', function () {
  (0, _initialVariables.cssScrollBarWidth)();
  (0, _isMobile.setMobileClass)(_initialVariables.dd, 'mobile', 'desktop');
});

var setCurrentYear = function setCurrentYear(ele) {
  ele.innerText = new Date().getFullYear();
};

var currentYearElement = (0, _initialVariables.id)('currentYear');
if (currentYearElement) setCurrentYear(currentYearElement);
var veryMob = (0, _isMobile.verifyMobile)();
/* 
  <video class="video_background" autoplay="autoplay" loop="loop" id="video_background" preload="auto" muted="muted" volume="0">
        <source src="./media/473287184.mp4" type="video/mp4">
      </video>
*/

if (!(0, _isMobile.verifyMobile)()) {
  var player = document.getElementById('player');
  player.innerHTML = "\n    <video class=\"video_background\" autoplay=\"autoplay\" loop=\"loop\" id=\"video_background\" preload=\"auto\" muted=\"muted\" volume=\"0\">\n      <source src=\"media/473287184.mp4\" type=\"video/mp4\">\n    </video>\n  ";
}

var bottonModalshow = _initialVariables.d.getElementById('showModal');

var modalClose = _initialVariables.d.getElementById('closemodal');

var modalForm = _initialVariables.d.getElementById('modalForm');

var reset = modalForm.querySelector('.cancel');
modalForm.addEventListener('reset', function (e) {
  // alert('reset')
  modalForm.classList.remove('show');
});
bottonModalshow.addEventListener('click', function (e) {
  e.preventDefault();
  modalForm.classList.add('show');
});
modalClose.addEventListener('click', function (e) {
  reset.click();
});
modalForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var _target = e.target;
  var data = new FormData(_target);
  var url = _target.action;
  var method = _target.method;
  var authOptions = {
    method: method,
    body: data
  };
  fetch(url, authOptions).then(function (res) {
    return res.json();
  }).then(function (data) {
    return resDraw(data, false);
  })["catch"](function (err) {
    return resDraw(err, true);
  });
});

var resDraw = function resDraw(data, err) {
  var mContainer = _initialVariables.d.getElementById('modalFormContainer');

  var mContainerClone = mContainer.querySelector('form').cloneNode(true);
  console.log(mContainerClone);
  mContainer.classList.add('hide');

  if (!err && !data.error) {
    setTimeout(function () {
      mContainer.innerHTML = "<h2>Cargando</h2>";
    }, 300);
    mContainer.classList.remove('hide');
  } else {
    console.log(data, err);
  }
};

},{"./modules/initialVariables":2,"./modules/isMobile":3,"./modules/loading":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssScrollBarWidth = exports.body = exports.all = exports.q = exports.id = exports.dd = exports.dir = exports.log = exports.c = exports.w = exports.d = void 0;
var d = document,
    w = window,
    c = console,
    log = console.log,
    dir = console.dir,
    dd = document.documentElement,
    id = document.getElementById.bind(document),
    q = document.querySelector.bind(document),
    all = document.querySelectorAll.bind(document),
    body = document.body;
exports.body = body;
exports.all = all;
exports.q = q;
exports.id = id;
exports.dd = dd;
exports.dir = dir;
exports.log = log;
exports.c = c;
exports.w = w;
exports.d = d;

var getScrollBarWidth = function getScrollBarWidth() {
  return window.innerWidth - document.documentElement.getBoundingClientRect().width;
}; // funcion para asignar ese valor a una variable css


var cssScrollBarWidth = function cssScrollBarWidth() {
  return document.documentElement.style.setProperty("--scrollbar", "".concat(getScrollBarWidth(), "px"));
};

exports.cssScrollBarWidth = cssScrollBarWidth;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMobileClass = exports.verifyMobile = exports.isMobile = void 0;
var isMobile = {
  mobilecheck: function mobilecheck() {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));
  }
};
exports.isMobile = isMobile;

var verifyMobile = function verifyMobile() {
  return isMobile.mobilecheck();
};

exports.verifyMobile = verifyMobile;

var setMobileClass = function setMobileClass(ele, classNameMobile, classNameDesktop) {
  if (verifyMobile()) {
    ele.classList.add(classNameMobile);
    ele.classList.remove(classNameDesktop);
  } else {
    ele.classList.remove(classNameMobile);
    ele.classList.add(classNameDesktop);
  }
};

exports.setMobileClass = setMobileClass;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loading = void 0;

var loading = function loading(ele, time) {
  ele.style.transition = "opacity ".concat(time, "ms");
  ele.style.opacity = "0";
  setTimeout(function () {
    ele.remove();
  }, time);
};

exports.loading = loading;

},{}]},{},[1]);

//# sourceMappingURL=scripts-min.js.map
