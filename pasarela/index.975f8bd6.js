function e(t) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(t)
}

function t(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), i.push.apply(i, r)
    }
    return i
}

function i(e) {
    for (var i = 1; i < arguments.length; i++) {
        var r = null != arguments[i] ? arguments[i] : {};
        i % 2 ? t(Object(r), !0).forEach((function(t) {
            p(e, t, r[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
    }
    return e
}

function r() {
    return r = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
        var r = a(e, t);
        if (r) {
            var n = Object.getOwnPropertyDescriptor(r, t);
            return n.get ? n.get.call(arguments.length < 3 ? e : i) : n.value
        }
    }, r.apply(this, arguments)
}

function a(e, t) {
    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)););
    return e
}

function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && o(e, t)
}

function o(e, t) {
    return (o = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function s(e) {
    var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }();
    return function() {
        var i, r = c(e);
        if (t) {
            var a = c(this).constructor;
            i = Reflect.construct(r, arguments, a)
        } else i = r.apply(this, arguments);
        return l(this, i)
    }
}

function l(t, i) {
    if (i && ("object" === e(i) || "function" == typeof i)) return i;
    if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
    return u(t)
}

function u(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function c(e) {
    return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function h(e, t) {
    return function(e) {
        if (Array.isArray(e)) return e
    }(e) || function(e, t) {
        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != i) {
            var r, a, n = [],
                o = !0,
                s = !1;
            try {
                for (i = i.call(e); !(o = (r = i.next()).done) && (n.push(r.value), !t || n.length !== t); o = !0);
            } catch (l) {
                s = !0, a = l
            } finally {
                try {
                    o || null == i.return || i.return()
                } finally {
                    if (s) throw a
                }
            }
            return n
        }
    }(e, t) || g(e, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function d(e) {
    return function(e) {
        if (Array.isArray(e)) return x(e)
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }(e) || g(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function v(e, t) {
    for (var i = 0; i < t.length; i++) {
        var r = t[i];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function m(e, t, i) {
    return t && v(e.prototype, t), i && v(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function f(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function p(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e
}

function _(e, t) {
    var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!i) {
        if (Array.isArray(e) || (i = g(e)) || t && e && "number" == typeof e.length) {
            i && (e = i);
            var r = 0,
                a = function() {};
            return {
                s: a,
                n: function() {
                    return r >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[r++]
                    }
                },
                e: function(e) {
                    throw e
                },
                f: a
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var n, o = !0,
        s = !1;
    return {
        s: function() {
            i = i.call(e)
        },
        n: function() {
            var e = i.next();
            return o = e.done, e
        },
        e: function(e) {
            s = !0, n = e
        },
        f: function() {
            try {
                o || null == i.return || i.return()
            } finally {
                if (s) throw n
            }
        }
    }
}

function g(e, t) {
    if (e) {
        if ("string" == typeof e) return x(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? x(e, t) : void 0
    }
}

function x(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, r = new Array(t); i < t; i++) r[i] = e[i];
    return r
}
import {
    D as y,
    C as T,
    V as b,
    q as S,
    a as w,
    M as k,
    F as C,
    b as L,
    R as A,
    E as M,
    c as I,
    T as D,
    Q as E,
    S as P,
    d as z,
    e as F,
    O as R,
    f as O,
    g as N,
    B as U,
    h as H,
    i as B,
    L as G,
    j as q,
    k as W,
    P as K,
    G as V,
    l as Y,
    m as j,
    n as X,
    o as Z,
    N as Q,
    p as J,
    r as $,
    s as ee,
    t as te,
    u as ie,
    U as re,
    v as ae,
    w as ne,
    x as oe,
    y as se,
    W as le,
    z as ue,
    A as ce,
    H as he,
    I as de,
    J as ve,
    K as me,
    X as fe,
    Y as pe,
    Z as _e,
    _ as ge,
    $ as xe,
    a0 as ye,
    a1 as Te,
    a2 as be,
    a3 as Se,
    a4 as we,
    a5 as ke,
    a6 as Ce,
    a7 as Le,
    a8 as Ae,
    a9 as Me,
    aa as Ie,
    ab as De,
    ac as Ee,
    ad as Pe,
    ae as ze,
    af as Fe,
    ag as Re,
    ah as Oe,
    ai as Ne,
    aj as Ue,
    ak as He,
    al as Be,
    am as Ge,
    an as qe,
    ao as We,
    ap as Ke,
    aq as Ve,
    ar as Ye,
    as as je,
    at as Xe,
    au as Ze,
    av as Qe,
    aw as Je,
    ax as $e,
    ay as et
} from "./vendor.c80e1a0a.js";
! function() {
    var e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        var t, i = _(document.querySelectorAll('link[rel="modulepreload"]'));
        try {
            for (i.s(); !(t = i.n()).done;) r(t.value)
        } catch (a) {
            i.e(a)
        } finally {
            i.f()
        }
        new MutationObserver((function(e) {
            var t, i = _(e);
            try {
                for (i.s(); !(t = i.n()).done;) {
                    var n = t.value;
                    if ("childList" === n.type) {
                        var o, s = _(n.addedNodes);
                        try {
                            for (s.s(); !(o = s.n()).done;) {
                                var l = o.value;
                                "LINK" === l.tagName && "modulepreload" === l.rel && r(l)
                            }
                        } catch (a) {
                            s.e(a)
                        } finally {
                            s.f()
                        }
                    }
                }
            } catch (a) {
                i.e(a)
            } finally {
                i.f()
            }
        })).observe(document, {
            childList: !0,
            subtree: !0
        })
    }

    function r(e) {
        if (!e.ep) {
            e.ep = !0;
            var t = function(e) {
                var t = {};
                return e.integrity && (t.integrity = e.integrity), e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy), "use-credentials" === e.crossorigin ? t.credentials = "include" : "anonymous" === e.crossorigin ? t.credentials = "omit" : t.credentials = "same-origin", t
            }(e);
            fetch(e.href, t)
        }
    }
}();
var tt = new y,
    it = (navigator.userAgent || navigator.vendor).toLowerCase(),
    rt = tt.browser.name,
    at = new(m((function e() {
        f(this, e), p(this, "device", null), p(this, "isMobile", tt.isMobile || tt.isTablet), p(this, "isDesktop", tt.isDesktop), p(this, "isAndroid", Boolean(tt.isAndroid)), p(this, "isIOS", Boolean(tt.isiOS)), p(this, "isMacOS", Boolean(tt.isMacOS)), p(this, "isWindows", Boolean(null !== tt.isWindows.version)), p(this, "isLinux", Boolean(-1 != it.indexOf("linux"))), p(this, "ua", it), p(this, "isEdge", "Microsoft Edge" === rt), p(this, "isIE", "Internet Explorer" === rt), p(this, "isFirefox", "Firefox" === rt), p(this, "isChrome", "Chrome" === rt), p(this, "isOpera", "Opera" === rt), p(this, "isSafari", "Safari" === rt), p(this, "isRetina", window.devicePixelRatio && window.devicePixelRatio >= 1.5), p(this, "devicePixelRatio", window.devicePixelRatio || 1), p(this, "cpuCoreCount", navigator.hardwareConcurrency || 1), p(this, "baseUrl", document.location.origin), p(this, "isIFrame", window.self !== window.top), this.isMobile ? this.device = "mobile" : this.device = "desktop"
    })));
window.browser = at;
var nt = new(function() {
        function e() {
            f(this, e)
        }
        return m(e, [{
            key: "overrideFromQuery",
            value: function(e) {
                if (window.URLSearchParams) {
                    var t = d(new URLSearchParams(window.location.search)).reduce((function(e, t) {
                        var i = h(t, 2),
                            r = i[0],
                            a = i[1];
                        return e[r] = "" === a || a, e
                    }), {});
                    for (var i in t)
                        if (void 0 !== e[i]) {
                            var r = t[i].toString();
                            "boolean" == typeof e[i] ? e[i] = !("0" === r) : "number" == typeof e[i] ? e[i] = parseFloat(r) : "string" == typeof e[i] && (e[i] = r)
                        }
                }
            }
        }]), e
    }()),
    ot = new(m((function e() {
        f(this, e), p(this, "AUDIO_PATH", "assets/audios/"), p(this, "DATA_PATH", "assets/data/"), p(this, "MODEL_PATH", "assets/models/"), p(this, "IMAGE_PATH", "assets/images/"), p(this, "TEXTURE_PATH", "assets/textures/"), p(this, "RENDER_TARGET_FLOAT_TYPE", null), p(this, "DATA_FLOAT_TYPE", null), p(this, "USE_FLOAT_PACKING", !1), p(this, "USE_WEBGL2", !0), p(this, "DPR", Math.min(1.5, at.devicePixelRatio) || 1), p(this, "USE_PIXEL_LIMIT", !0), p(this, "MAX_PIXEL_COUNT", 3686400), p(this, "MAX_MODEL_COUNT", at.isMobile ? 5 : 6), p(this, "LOAD_ALL_STYLE_AT_ONCE", !1), p(this, "CROSS_ORIGINS", {
            "https://example.com/": "anonymous"
        }), p(this, "LOG", !1), p(this, "SKIP_ANIMATION", !1), p(this, "LOOK_DEV_MODE", !1), p(this, "ENABLE_CAMERA_TRAILS", !1), p(this, "LED_EFFECT_TEST_MODE", !1), p(this, "RECORD_MODE", !1), p(this, "TRAIL_DEBUG", "");
        var t = this.MAX_MODEL_COUNT;
        nt.overrideFromQuery(this), this.TRAIL_DEBUG && (this.ENABLE_CAMERA_TRAILS = !0), t !== this.MAX_MODEL_COUNT && history.replaceState(null, null, window.location.pathname)
    })));
window.settings = ot;
var st = new(function() {
        function e() {
            f(this, e), p(this, "isActive", !1), p(this, "selectedStyle", null), p(this, "prevSelectedStyleName", []), p(this, "camera", new T), p(this, "iterations", 0), p(this, "positions", []), p(this, "ppObj", {});
            for (var t = 0; t < 4; t++) this.positions.push(new b)
        }
        return m(e, [{
            key: "preInit",
            value: function() {}
        }, {
            key: "init",
            value: function() {
                var e = this;
                lt.snapshotSignal.add((function(t) {
                    t && e.stopSnapshot()
                }))
            }
        }, {
            key: "startSnapshot",
            value: function() {
                if (!lt.activeSnapshotStyle && (this.ppObj.haloStrength = lt.haloStrength, lt.haloStrength = 0, this.setRandomStyle(), this.selectedStyle)) {
                    lt.activeSnapshotCamera = this.camera, this.isActive = !0;
                    for (var e = 0; e < this.positions.length; e++) {
                        var t = Math.random(),
                            i = .4 * Math.random() + .4,
                            r = 2 * Math.PI * t,
                            a = Math.acos(2 * i - 1),
                            n = 1.8 + 1.2 * Math.random(),
                            o = Math.sin(a) * Math.cos(r) * n,
                            s = Math.cos(a) * n + 1,
                            l = Math.sin(a) * Math.sin(r) * n,
                            u = this.selectedStyle.container.position,
                            c = u.x,
                            h = u.y,
                            d = u.z;
                        this.positions[e].set(c + o, h + s, d + l)
                    }
                    this.changeFrame()
                }
            }
        }, {
            key: "setRandomStyle",
            value: function() {
                var e = lt.activeStyles;
                if (!e) return null;
                do {
                    this.selectedStyle = e[Math.floor(e.length * Math.random())]
                } while (this.selectedStyle.opacity < 1 || this.prevSelectedStyleName.includes(this.selectedStyle.colorName));
                this.prevSelectedStyleName.push(this.selectedStyle.colorName)
            }
        }, {
            key: "changeFrame",
            value: function() {
                var e = this;
                if (!lt.activeSnapshotStyle)
                    if (this.iterations >= 4) this.stopSnapshot();
                    else {
                        this.camera.position.copy(this.positions[this.iterations]);
                        var t = this.selectedStyle.container.position,
                            i = t.x,
                            r = t.y,
                            a = t.z;
                        this.camera.lookAt(i, r + 1, a), lt.currentLookAtPosition.set(i, r + 1, a), setTimeout((function() {
                            return e.changeFrame()
                        }), 350), this.iterations += 1
                    }
            }
        }, {
            key: "stopSnapshot",
            value: function() {
                lt.haloStrength = this.ppObj.haloStrength, this.iterations = 0, lt.activeSnapshotCamera = null, this.isActive = !1, this.selectedStyle = null
            }
        }, {
            key: "resize",
            value: function(e, t) {}
        }, {
            key: "update",
            value: function(e) {}
        }]), e
    }()),
    lt = new(m((function e() {
        f(this, e), p(this, "loader", S.create()), p(this, "percent", 0), p(this, "debugTexture", null), p(this, "_isSupportedDevice", !1), p(this, "_isSupportedBrowser", !1), p(this, "_isSupportedWebGL", !1), p(this, "_isSupportedMobileOrientation", !1), p(this, "_isSupported", !1), p(this, "isAudioActive", !1), p(this, "lastDateTime", 0), p(this, "realTime", 0), p(this, "time", 0), p(this, "deltaTime", 0), p(this, "isStageReady", !1), p(this, "hasInitialized", !1), p(this, "rawWidth", 0), p(this, "rawHeight", 0), p(this, "width", 0), p(this, "height", 0), p(this, "renderer", null), p(this, "scene", null), p(this, "camera", null), p(this, "postprocessing", null), p(this, "resolution", null), p(this, "canvas", null), p(this, "gl", null), p(this, "webglOpts", {
            antialias: !1,
            alpha: !1,
            xrCompatible: !0
        }), p(this, "sharedUniforms", {
            u_resolution: {
                value: null
            },
            u_bgColor: {
                value: null
            },
            u_time: {
                value: 0
            }
        }), p(this, "orbitControl", null), p(this, "cameraLookX", 0), p(this, "cameraLookY", 0), p(this, "cameraLookStrength", .1), p(this, "cameraLookEaseDamp", .075), p(this, "cameraDistance", 5), p(this, "cameraShakePositionStrength", .4), p(this, "cameraShakePositionSpeed", .3), p(this, "cameraShakeRotationStrength", .05), p(this, "cameraShakeRotationSpeed", .3), p(this, "cameraDollyZoomFovOffset", 0), p(this, "smaa", null), p(this, "fxaa", null), p(this, "bokeh", null), p(this, "bloom", null), p(this, "final", null), p(this, "frame", null), p(this, "getNearestColor", null), p(this, "bgColorHex", "#1b191d"), p(this, "bgColor", new w), p(this, "opacity", 0), p(this, "blurRatio", 1), p(this, "bloomAmount", 2.8), p(this, "bloomRadius", .25), p(this, "bloomThreshold", .55), p(this, "bloomSmoothWidth", .75), p(this, "haloWidth", .85), p(this, "haloRGBShift", .03), p(this, "haloStrength", .2), p(this, "vignetteFrom", .3), p(this, "vignetteTo", 1.26), p(this, "vignetteColorHex", "#1b191d"), p(this, "saturation", 1), p(this, "contrast", 0), p(this, "brightness", 0), p(this, "tintColorHex", "#ffffff"), p(this, "tintOpacity", 0), p(this, "fadeWhite", 0), p(this, "fadeBlack", 0), p(this, "isPreloaderFinished", !1), p(this, "bokehAmount", 0), p(this, "bokehFNumber", .15), p(this, "bokehFocusDistance", 4.5), p(this, "bokehFocalLength", .25), p(this, "bokehKFilmHeight", 35), p(this, "activeTrailCamera", null), p(this, "isCameraViewActive", !ot.LOOK_DEV_MODE), p(this, "activeStyles", null), p(this, "snapshotsManager", st), p(this, "ledAnimationSignal", new k), p(this, "currentLookAtPosition", new b), p(this, "styleNameSignal", new k), p(this, "onHoverStyleSignal", new k), p(this, "snapshotSignal", new k), p(this, "exporterSignalInit", new k), p(this, "exporterSignalEnd", new k), p(this, "frameRotation", 0), p(this, "frameWidth", .5), p(this, "frameHeight", .5), p(this, "frameFading", 0), p(this, "frameBgColor", "#333333"), p(this, "frameDetailColor", "#aaaaaa"), p(this, "frameStatus", 0), p(this, "frameActive", !1), p(this, "frameAnimationStatus", 0), p(this, "frameAnimationActive", !1), p(this, "frustum", new C), p(this, "hubScene", null), p(this, "raycaster", null), p(this, "activeSnapshotStyle", null), p(this, "hoverColorpalette", ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900"]), p(this, "loadingFramePercent", 0), p(this, "loadingFramePercent2", 0), p(this, "aboutRatio", 0)
    })));
window.properties = lt;
var ut = new(function() {
        function e() {
            f(this, e), this.onDowned = new k, this.onMoved = new k, this.onUped = new k, this.onClicked = new k, this.onWheeled = new k, this.wasDown = !1, this.isDown = !0, this.downTime = 0, this.downXY = new L, this.downPixelXY = new L, this.hasClicked = !1, this.mouseXY = new L, this.mousePixelXY = new L, this.lastWheelTime = 0, this.wheelDelta = 0, this.downThroughElems = [], this.currThroughElems = [], this.prevThroughElems = [], this.clickThroughElems = [], lt.raycaster = this.raycaster = new A
        }
        return m(e, [{
            key: "preInit",
            value: function() {
                var e = this,
                    t = document;
                t.onmousedown = function(t) {
                    return e._onDown(t)
                }, t.ontouchstart = function(t) {
                    return e._getTouchBound(e._onDown, !0)
                }, t.onmousemove = function(t) {
                    return e._onMove(t)
                }, t.ontouchmove = function(t) {
                    return e._getTouchBound(e._onMove, !0)
                }, t.onmouseup = function(t) {
                    return e._onUp(t)
                }, t.ontouchend = function(t) {
                    return e._getTouchBound(e._onUp, !0)
                }
            }
        }, {
            key: "_onWheel",
            value: function(e) {
                var t = +new Date;
                if (!(t - this._lastWheelTime < 35)) {
                    this._lastWheelTime = t;
                    var i = (e = e || _win.event).wheelDelta;
                    i ? i /= 40 : i = -e.detail, this.wheelDelta += Math.min(3, Math.max(i, -3)), this.onWheeled.dispatch(e.target, this.wheelDelta)
                }
            }
        }, {
            key: "_onDown",
            value: function(e) {
                this.isDown = !0, this.downTime = +new Date, this.prevThroughElems.length = 0, this._setThroughElementsByEvent(e, this.downThroughElems), this._getInputXY(e, this.downXY), this._getInputPixelXY(e, this.downPixelXY), this._onMove(e), this.onDowned.dispatch(e)
            }
        }, {
            key: "_onMove",
            value: function(e) {
                this._getInputXY(e, this.mouseXY), this._getInputPixelXY(e, this.mousePixelXY), this._setThroughElementsByEvent(e, this.currThroughElems), this.onMoved.dispatch(e);
                var t = this.getHoverStyleId();
                t && lt.onHoverStyleSignal.dispatch(t)
            }
        }, {
            key: "_onUp",
            value: function(e) {
                var t = e.clientX - this.downPixelXY.x,
                    i = e.clientY - this.downPixelXY.y;
                Math.sqrt(t * t + i * i) < 40 && +new Date - this.downTime < 300 && (this._setThroughElementsByEvent(e, this.clickThroughElems), this._getInputXY(e, this.mouseXY), this.hasClicked = !0, this.onClicked.dispatch(e)), this.isDown = !1, this.onUped.dispatch(e)
            }
        }, {
            key: "getHoverStyleId",
            value: function() {
                if (lt.activeStyles) {
                    var e, t, i, r;
                    this.raycaster.setFromCamera(this.mouseXY, lt.camera);
                    var a = this.raycaster.intersectObjects(lt.activeStyles.map((function(e) {
                        return e.container
                    })), !0);
                    return null == a || null === (e = a[0]) || void 0 === e || null === (t = e.object) || void 0 === t || null === (i = t.parent) || void 0 === i || null === (r = i.userData) || void 0 === r ? void 0 : r.id
                }
                return null
            }
        }, {
            key: "_getTouchBound",
            value: function(e, t) {
                return function(i) {
                    t && i.usePreventDefault(), e.call(this, i.changedTouches[0] || i.touches[0])
                }
            }
        }, {
            key: "_getInputXY",
            value: function(e, t) {
                return t.set(e.clientX / window.innerWidth * 2 - 1, 1 - e.clientY / window.innerHeight * 2), t
            }
        }, {
            key: "_getInputPixelXY",
            value: function(e, t) {
                t.set(e.clientX, e.clientY)
            }
        }, {
            key: "_setThroughElementsByEvent",
            value: function(e, t) {
                var i = e.target;
                for (t.length = 0; i.parentNode;) t.push(i), i = i.parentNode
            }
        }, {
            key: "hasThroughElem",
            value: function(e, t) {
                for (var i = this[t + "ThroughElems"] || this.currThroughElems, r = i.length; r--;)
                    if (i[r] === elem) return !0;
                return !1
            }
        }, {
            key: "hasThroughElemWithClass",
            value: function(e, t) {
                for (var i = this[t + "ThroughElems"] || this.currThroughElems, r = i.length; r--;)
                    if (i[r].classList.contains(e)) return i[r];
                return null
            }
        }, {
            key: "update",
            value: function(e) {
                this.prevThroughElems.length = 0, this.prevThroughElems.concat(this.currThroughElems), this.wheelDelta = 0
            }
        }]), e
    }()),
    ct = new(function() {
        function e() {
            f(this, e)
        }
        return m(e, [{
            key: "linear",
            value: function(e) {
                return e
            }
        }, {
            key: "quadIn",
            value: function(e) {
                return e * e
            }
        }, {
            key: "quadOut",
            value: function(e) {
                return e * (2 - e)
            }
        }, {
            key: "quadInOut",
            value: function(e) {
                return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
            }
        }, {
            key: "cubicIn",
            value: function(e) {
                return e * e * e
            }
        }, {
            key: "cubicOut",
            value: function(e) {
                return --e * e * e + 1
            }
        }, {
            key: "cubicInOut",
            value: function(e) {
                return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
            }
        }, {
            key: "quartIn",
            value: function(e) {
                return e * e * e * e
            }
        }, {
            key: "quartOut",
            value: function(e) {
                return 1 - --e * e * e * e
            }
        }, {
            key: "quartInOut",
            value: function(e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
            }
        }, {
            key: "quintIn",
            value: function(e) {
                return e * e * e * e * e
            }
        }, {
            key: "quintOut",
            value: function(e) {
                return --e * e * e * e * e + 1
            }
        }, {
            key: "quintInOut",
            value: function(e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
            }
        }, {
            key: "sineIn",
            value: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            }
        }, {
            key: "sineOut",
            value: function(e) {
                return Math.sin(e * Math.PI / 2)
            }
        }, {
            key: "sineInOut",
            value: function(e) {
                return .5 * (1 - Math.cos(Math.PI * e))
            }
        }, {
            key: "expoIn",
            value: function(e) {
                return 0 === e ? 0 : Math.pow(1024, e - 1)
            }
        }, {
            key: "expoOut",
            value: function(e) {
                return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
            }
        }, {
            key: "expoInOut",
            value: function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            }
        }, {
            key: "circIn",
            value: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            }
        }, {
            key: "circOut",
            value: function(e) {
                return Math.sqrt(1 - --e * e)
            }
        }, {
            key: "circInOut",
            value: function(e) {
                return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }
        }, {
            key: "elasticIn",
            value: function(e) {
                var t, i = .1;
                return 0 === e ? 0 : 1 === e ? 1 : (!i || i < 1 ? (i = 1, t = .1) : t = .4 * Math.asin(1 / i) / (2 * Math.PI), -i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / .4))
            }
        }, {
            key: "elasticOut",
            value: function(e) {
                var t, i = .1;
                return 0 === e ? 0 : 1 === e ? 1 : (!i || i < 1 ? (i = 1, t = .1) : t = .4 * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * e) * Math.sin(2 * (e - t) * Math.PI / .4) + 1)
            }
        }, {
            key: "elasticInOut",
            value: function(e) {
                var t, i = .1;
                return 0 === e ? 0 : 1 === e ? 1 : (!i || i < 1 ? (i = 1, t = .1) : t = .4 * Math.asin(1 / i) / (2 * Math.PI), (e *= 2) < 1 ? -.5 * i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / .4) : i * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / .4) * .5 + 1)
            }
        }, {
            key: "backIn",
            value: function(e) {
                var t = 1.70158;
                return e * e * ((t + 1) * e - t)
            }
        }, {
            key: "backOut",
            value: function(e) {
                var t = 1.70158;
                return --e * e * ((t + 1) * e + t) + 1
            }
        }, {
            key: "backInOut",
            value: function(e) {
                var t = 2.5949095;
                return (e *= 2) < 1 ? .5 * e * e * ((t + 1) * e - t) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
            }
        }, {
            key: "bounceIn",
            value: function(e) {
                return 1 - basic.Bounce.Out(1 - e)
            }
        }, {
            key: "bounceOut",
            value: function(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }
        }, {
            key: "bounceInOut",
            value: function(e) {
                return e < .5 ? .5 * basic.Bounce.In(2 * e) : .5 * basic.Bounce.Out(2 * e - 1) + .5
            }
        }]), e
    }()),
    ht = {
        type: "change"
    },
    dt = {
        type: "start"
    },
    vt = {
        type: "end"
    },
    mt = function(e) {
        n(i, M);
        var t = s(i);

        function i(e, r) {
            var a;
            f(this, i);
            var n, o, s, l, c, h, d = u(a = t.call(this));
            void 0 === r && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), r === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), a.object = e, a.domElement = r, a.domElement.style.touchAction = "none", a.enabled = !0, a.target = new b, a.minDistance = 0, a.maxDistance = 1 / 0, a.minZoom = 0, a.maxZoom = 1 / 0, a.minPolarAngle = 0, a.maxPolarAngle = Math.PI, a.minAzimuthAngle = -1 / 0, a.maxAzimuthAngle = 1 / 0, a.enableDamping = !1, a.dampingFactor = .05, a.enableZoom = !0, a.zoomSpeed = 1, a.enableRotate = !0, a.rotateSpeed = 1, a.enablePan = !0, a.panSpeed = 1, a.screenSpacePanning = !0, a.keyPanSpeed = 7, a.autoRotate = !1, a.autoRotateSpeed = 2, a.keys = {
                LEFT: "ArrowLeft",
                UP: "ArrowUp",
                RIGHT: "ArrowRight",
                BOTTOM: "ArrowDown"
            }, a.mouseButtons = {
                LEFT: I.ROTATE,
                MIDDLE: I.DOLLY,
                RIGHT: I.PAN
            }, a.touches = {
                ONE: D.ROTATE,
                TWO: D.DOLLY_PAN
            }, a.target0 = a.target.clone(), a.position0 = a.object.position.clone(), a.zoom0 = a.object.zoom, a._domElementKeyEvents = null, a.getPolarAngle = function() {
                return _.phi
            }, a.getAzimuthalAngle = function() {
                return _.theta
            }, a.getDistance = function() {
                return this.object.position.distanceTo(this.target)
            }, a.listenToKeyEvents = function(e) {
                e.addEventListener("keydown", se), this._domElementKeyEvents = e
            }, a.saveState = function() {
                d.target0.copy(d.target), d.position0.copy(d.object.position), d.zoom0 = d.object.zoom
            }, a.reset = function() {
                d.target.copy(d.target0), d.object.position.copy(d.position0), d.object.zoom = d.zoom0, d.object.updateProjectionMatrix(), d.dispatchEvent(ht), d.update(), m = v.NONE
            }, a.update = (n = new b, o = (new E).setFromUnitVectors(e.up, new b(0, 1, 0)), s = o.clone().invert(), l = new b, c = new E, h = 2 * Math.PI, function() {
                var e = d.object.position;
                n.copy(e).sub(d.target), n.applyQuaternion(o), _.setFromVector3(n), d.autoRotate && m === v.NONE && H(2 * Math.PI / 60 / 60 * d.autoRotateSpeed), d.enableDamping ? (_.theta += g.theta * d.dampingFactor, _.phi += g.phi * d.dampingFactor) : (_.theta += g.theta, _.phi += g.phi);
                var t = d.minAzimuthAngle,
                    i = d.maxAzimuthAngle;
                return isFinite(t) && isFinite(i) && (t < -Math.PI ? t += h : t > Math.PI && (t -= h), i < -Math.PI ? i += h : i > Math.PI && (i -= h), _.theta = t <= i ? Math.max(t, Math.min(i, _.theta)) : _.theta > (t + i) / 2 ? Math.max(t, _.theta) : Math.min(i, _.theta)), _.phi = Math.max(d.minPolarAngle, Math.min(d.maxPolarAngle, _.phi)), _.makeSafe(), _.radius *= x, _.radius = Math.max(d.minDistance, Math.min(d.maxDistance, _.radius)), !0 === d.enableDamping ? d.target.addScaledVector(y, d.dampingFactor) : d.target.add(y), n.setFromSpherical(_), n.applyQuaternion(s), e.copy(d.target).add(n), d.object.lookAt(d.target), !0 === d.enableDamping ? (g.theta *= 1 - d.dampingFactor, g.phi *= 1 - d.dampingFactor, y.multiplyScalar(1 - d.dampingFactor)) : (g.set(0, 0, 0), y.set(0, 0, 0)), x = 1, !!(T || l.distanceToSquared(d.object.position) > p || 8 * (1 - c.dot(d.object.quaternion)) > p) && (d.dispatchEvent(ht), l.copy(d.object.position), c.copy(d.object.quaternion), T = !1, !0)
            }), a.dispose = function() {
                d.domElement.removeEventListener("contextmenu", le), d.domElement.removeEventListener("pointerdown", ie), d.domElement.removeEventListener("pointercancel", ne), d.domElement.removeEventListener("wheel", oe), d.domElement.removeEventListener("pointermove", re), d.domElement.removeEventListener("pointerup", ae), null !== d._domElementKeyEvents && d._domElementKeyEvents.removeEventListener("keydown", se)
            };
            var v = {
                    NONE: -1,
                    ROTATE: 0,
                    DOLLY: 1,
                    PAN: 2,
                    TOUCH_ROTATE: 3,
                    TOUCH_PAN: 4,
                    TOUCH_DOLLY_PAN: 5,
                    TOUCH_DOLLY_ROTATE: 6
                },
                m = v.NONE,
                p = 1e-6,
                _ = new P,
                g = new P,
                x = 1,
                y = new b,
                T = !1,
                S = new L,
                w = new L,
                k = new L,
                C = new L,
                A = new L,
                M = new L,
                z = new L,
                F = new L,
                R = new L,
                O = [],
                N = {};

            function U() {
                return Math.pow(.95, d.zoomSpeed)
            }

            function H(e) {
                g.theta -= e
            }

            function B(e) {
                g.phi -= e
            }
            var G, q = (G = new b, function(e, t) {
                    G.setFromMatrixColumn(t, 0), G.multiplyScalar(-e), y.add(G)
                }),
                W = function() {
                    var e = new b;
                    return function(t, i) {
                        !0 === d.screenSpacePanning ? e.setFromMatrixColumn(i, 1) : (e.setFromMatrixColumn(i, 0), e.crossVectors(d.object.up, e)), e.multiplyScalar(t), y.add(e)
                    }
                }(),
                K = function() {
                    var e = new b;
                    return function(t, i) {
                        var r = d.domElement;
                        if (d.object.isPerspectiveCamera) {
                            var a = d.object.position;
                            e.copy(a).sub(d.target);
                            var n = e.length();
                            n *= Math.tan(d.object.fov / 2 * Math.PI / 180), q(2 * t * n / r.clientHeight, d.object.matrix), W(2 * i * n / r.clientHeight, d.object.matrix)
                        } else d.object.isOrthographicCamera ? (q(t * (d.object.right - d.object.left) / d.object.zoom / r.clientWidth, d.object.matrix), W(i * (d.object.top - d.object.bottom) / d.object.zoom / r.clientHeight, d.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), d.enablePan = !1)
                    }
                }();

            function V(e) {
                d.object.isPerspectiveCamera ? x /= e : d.object.isOrthographicCamera ? (d.object.zoom = Math.max(d.minZoom, Math.min(d.maxZoom, d.object.zoom * e)), d.object.updateProjectionMatrix(), T = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), d.enableZoom = !1)
            }

            function Y(e) {
                d.object.isPerspectiveCamera ? x *= e : d.object.isOrthographicCamera ? (d.object.zoom = Math.max(d.minZoom, Math.min(d.maxZoom, d.object.zoom / e)), d.object.updateProjectionMatrix(), T = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), d.enableZoom = !1)
            }

            function j(e) {
                S.set(e.clientX, e.clientY)
            }

            function X(e) {
                C.set(e.clientX, e.clientY)
            }

            function Z() {
                if (1 === O.length) S.set(O[0].pageX, O[0].pageY);
                else {
                    var e = .5 * (O[0].pageX + O[1].pageX),
                        t = .5 * (O[0].pageY + O[1].pageY);
                    S.set(e, t)
                }
            }

            function Q() {
                if (1 === O.length) C.set(O[0].pageX, O[0].pageY);
                else {
                    var e = .5 * (O[0].pageX + O[1].pageX),
                        t = .5 * (O[0].pageY + O[1].pageY);
                    C.set(e, t)
                }
            }

            function J() {
                var e = O[0].pageX - O[1].pageX,
                    t = O[0].pageY - O[1].pageY,
                    i = Math.sqrt(e * e + t * t);
                z.set(0, i)
            }

            function $(e) {
                if (1 == O.length) w.set(e.pageX, e.pageY);
                else {
                    var t = he(e),
                        i = .5 * (e.pageX + t.x),
                        r = .5 * (e.pageY + t.y);
                    w.set(i, r)
                }
                k.subVectors(w, S).multiplyScalar(d.rotateSpeed);
                var a = d.domElement;
                H(2 * Math.PI * k.x / a.clientHeight), B(2 * Math.PI * k.y / a.clientHeight), S.copy(w)
            }

            function ee(e) {
                if (1 === O.length) A.set(e.pageX, e.pageY);
                else {
                    var t = he(e),
                        i = .5 * (e.pageX + t.x),
                        r = .5 * (e.pageY + t.y);
                    A.set(i, r)
                }
                M.subVectors(A, C).multiplyScalar(d.panSpeed), K(M.x, M.y), C.copy(A)
            }

            function te(e) {
                var t = he(e),
                    i = e.pageX - t.x,
                    r = e.pageY - t.y,
                    a = Math.sqrt(i * i + r * r);
                F.set(0, a), R.set(0, Math.pow(F.y / z.y, d.zoomSpeed)), V(R.y), z.copy(F)
            }

            function ie(e) {
                !1 !== d.enabled && (0 === O.length && (d.domElement.setPointerCapture(e.pointerId), d.domElement.addEventListener("pointermove", re), d.domElement.addEventListener("pointerup", ae)), function(e) {
                    O.push(e)
                }(e), "touch" === e.pointerType ? function(e) {
                    switch (ce(e), O.length) {
                        case 1:
                            switch (d.touches.ONE) {
                                case D.ROTATE:
                                    if (!1 === d.enableRotate) return;
                                    Z(), m = v.TOUCH_ROTATE;
                                    break;
                                case D.PAN:
                                    if (!1 === d.enablePan) return;
                                    Q(), m = v.TOUCH_PAN;
                                    break;
                                default:
                                    m = v.NONE
                            }
                            break;
                        case 2:
                            switch (d.touches.TWO) {
                                case D.DOLLY_PAN:
                                    if (!1 === d.enableZoom && !1 === d.enablePan) return;
                                    d.enableZoom && J(), d.enablePan && Q(), m = v.TOUCH_DOLLY_PAN;
                                    break;
                                case D.DOLLY_ROTATE:
                                    if (!1 === d.enableZoom && !1 === d.enableRotate) return;
                                    d.enableZoom && J(), d.enableRotate && Z(), m = v.TOUCH_DOLLY_ROTATE;
                                    break;
                                default:
                                    m = v.NONE
                            }
                            break;
                        default:
                            m = v.NONE
                    }
                    m !== v.NONE && d.dispatchEvent(dt)
                }(e) : function(e) {
                    var t;
                    switch (e.button) {
                        case 0:
                            t = d.mouseButtons.LEFT;
                            break;
                        case 1:
                            t = d.mouseButtons.MIDDLE;
                            break;
                        case 2:
                            t = d.mouseButtons.RIGHT;
                            break;
                        default:
                            t = -1
                    }
                    switch (t) {
                        case I.DOLLY:
                            if (!1 === d.enableZoom) return;
                            ! function(e) {
                                z.set(e.clientX, e.clientY)
                            }(e), m = v.DOLLY;
                            break;
                        case I.ROTATE:
                            if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                if (!1 === d.enablePan) return;
                                X(e), m = v.PAN
                            } else {
                                if (!1 === d.enableRotate) return;
                                j(e), m = v.ROTATE
                            }
                            break;
                        case I.PAN:
                            if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                if (!1 === d.enableRotate) return;
                                j(e), m = v.ROTATE
                            } else {
                                if (!1 === d.enablePan) return;
                                X(e), m = v.PAN
                            }
                            break;
                        default:
                            m = v.NONE
                    }
                    m !== v.NONE && d.dispatchEvent(dt)
                }(e))
            }

            function re(e) {
                !1 !== d.enabled && ("touch" === e.pointerType ? function(e) {
                    switch (ce(e), m) {
                        case v.TOUCH_ROTATE:
                            if (!1 === d.enableRotate) return;
                            $(e), d.update();
                            break;
                        case v.TOUCH_PAN:
                            if (!1 === d.enablePan) return;
                            ee(e), d.update();
                            break;
                        case v.TOUCH_DOLLY_PAN:
                            if (!1 === d.enableZoom && !1 === d.enablePan) return;
                            ! function(e) {
                                d.enableZoom && te(e), d.enablePan && ee(e)
                            }(e), d.update();
                            break;
                        case v.TOUCH_DOLLY_ROTATE:
                            if (!1 === d.enableZoom && !1 === d.enableRotate) return;
                            ! function(e) {
                                d.enableZoom && te(e), d.enableRotate && $(e)
                            }(e), d.update();
                            break;
                        default:
                            m = v.NONE
                    }
                }(e) : function(e) {
                    if (!1 !== d.enabled) switch (m) {
                        case v.ROTATE:
                            if (!1 === d.enableRotate) return;
                            ! function(e) {
                                w.set(e.clientX, e.clientY), k.subVectors(w, S).multiplyScalar(d.rotateSpeed);
                                var t = d.domElement;
                                H(2 * Math.PI * k.x / t.clientHeight), B(2 * Math.PI * k.y / t.clientHeight), S.copy(w), d.update()
                            }(e);
                            break;
                        case v.DOLLY:
                            if (!1 === d.enableZoom) return;
                            ! function(e) {
                                F.set(e.clientX, e.clientY), R.subVectors(F, z), R.y > 0 ? V(U()) : R.y < 0 && Y(U()), z.copy(F), d.update()
                            }(e);
                            break;
                        case v.PAN:
                            if (!1 === d.enablePan) return;
                            ! function(e) {
                                A.set(e.clientX, e.clientY), M.subVectors(A, C).multiplyScalar(d.panSpeed), K(M.x, M.y), C.copy(A), d.update()
                            }(e)
                    }
                }(e))
            }

            function ae(e) {
                ue(e), 0 === O.length && (d.domElement.releasePointerCapture(e.pointerId), d.domElement.removeEventListener("pointermove", re), d.domElement.removeEventListener("pointerup", ae)), d.dispatchEvent(vt), m = v.NONE
            }

            function ne(e) {
                ue(e)
            }

            function oe(e) {
                !1 !== d.enabled && !1 !== d.enableZoom && m === v.NONE && (d.dispatchEvent(dt), function(e) {
                    e.deltaY < 0 ? Y(U()) : e.deltaY > 0 && V(U()), d.update()
                }(e), d.dispatchEvent(vt))
            }

            function se(e) {
                !1 !== d.enabled && !1 !== d.enablePan && function(e) {
                    var t = !1;
                    switch (e.code) {
                        case d.keys.UP:
                            K(0, d.keyPanSpeed), t = !0;
                            break;
                        case d.keys.BOTTOM:
                            K(0, -d.keyPanSpeed), t = !0;
                            break;
                        case d.keys.LEFT:
                            K(d.keyPanSpeed, 0), t = !0;
                            break;
                        case d.keys.RIGHT:
                            K(-d.keyPanSpeed, 0), t = !0
                    }
                    t && (e.preventDefault(), d.update())
                }(e)
            }

            function le(e) {
                !1 !== d.enabled && e.preventDefault()
            }

            function ue(e) {
                delete N[e.pointerId];
                for (var t = 0; t < O.length; t++)
                    if (O[t].pointerId == e.pointerId) return void O.splice(t, 1)
            }

            function ce(e) {
                var t = N[e.pointerId];
                void 0 === t && (t = new L, N[e.pointerId] = t), t.set(e.pageX, e.pageY)
            }

            function he(e) {
                var t = e.pointerId === O[0].pointerId ? O[1] : O[0];
                return N[t.pointerId]
            }
            return d.domElement.addEventListener("contextmenu", le), d.domElement.addEventListener("pointerdown", ie), d.domElement.addEventListener("pointercancel", ne), d.domElement.addEventListener("wheel", oe), a.update(), a
        }
        return m(i)
    }(),
    ft = new(function() {
        function e() {
            f(this, e), this.PI = Math.PI, this.PI2 = 2 * this.PI, this.HALF_PI = .5 * this.PI, this.DEG2RAD = this.PI / 180, this.RAD2DEG = 180 / this.PI
        }
        return m(e, [{
            key: "step",
            value: function(e, t) {
                return t < e ? 0 : 1
            }
        }, {
            key: "clamp",
            value: function(e, t, i) {
                return e < t ? t : e > i ? i : e
            }
        }, {
            key: "mix",
            value: function(e, t, i) {
                return e + (t - e) * i
            }
        }, {
            key: "cMix",
            value: function(e, t, i) {
                return e + (t - e) * this.clamp(i, 0, 1)
            }
        }, {
            key: "unMix",
            value: function(e, t, i) {
                return (i - e) / (t - e)
            }
        }, {
            key: "cUnMix",
            value: function(e, t, i) {
                return this.clamp((i - e) / (t - e), 0, 1)
            }
        }, {
            key: "saturate",
            value: function(e) {
                return this.clamp(e, 0, 1)
            }
        }, {
            key: "fit",
            value: function(e, t, i, r, a, n) {
                return e = this.cUnMix(t, i, e), n && (e = n(e)), r + e * (a - r)
            }
        }, {
            key: "loop",
            value: function(e, t, i) {
                return i -= t, ((e -= t) < 0 ? (i - Math.abs(e) % i) % i : e % i) + t
            }
        }, {
            key: "normalize",
            value: function(e, t, i) {
                return Math.max(0, Math.min(1, e - t / i - t))
            }
        }, {
            key: "smoothstep",
            value: function(e, t, i) {
                return (i = this.cUnMix(e, t, i)) * i * (3 - 2 * i)
            }
        }, {
            key: "fract",
            value: function(e) {
                return e - Math.floor(e)
            }
        }, {
            key: "hash",
            value: function(e) {
                return this.fract(43758.5453123 * Math.sin(e))
            }
        }, {
            key: "hash2",
            value: function(e, t) {
                return this.fract(43758.5453 * Math.sin(12.9898 * e + 4.1414 * t))
            }
        }, {
            key: "sign",
            value: function(e) {
                return e ? e < 0 ? -1 : 1 : 0
            }
        }, {
            key: "isPowerOfTwo",
            value: function(e) {
                return (e & -e) === e
            }
        }, {
            key: "powerTwoCeilingBase",
            value: function(e) {
                return Math.ceil(Math.log(e) / Math.log(2))
            }
        }, {
            key: "powerTwoCeiling",
            value: function(e) {
                return this.isPowerOfTwo(e) ? e : 1 << this.powerTwoCeilingBase(e)
            }
        }, {
            key: "powerTwoFloorBase",
            value: function(e) {
                return Math.floor(Math.log(e) / Math.log(2))
            }
        }, {
            key: "powerTwoFloor",
            value: function(e) {
                return this.isPowerOfTwo(e) ? e : 1 << this.powerTwoFloorBase(e)
            }
        }, {
            key: "latLngBearing",
            value: function(e, t, i, r) {
                var a = Math.sin(r - t) * Math.cos(i),
                    n = Math.cos(e) * Math.sin(i) - Math.sin(e) * Math.cos(i) * Math.cos(r - t);
                return Math.atan2(a, n)
            }
        }, {
            key: "distanceTo",
            value: function(e, t) {
                return Math.sqrt(e * e + t * t)
            }
        }, {
            key: "distanceSqrTo",
            value: function(e, t) {
                return e * e + t * t
            }
        }, {
            key: "distanceTo3",
            value: function(e, t, i) {
                return Math.sqrt(e * e + t * t + i * i)
            }
        }, {
            key: "distanceSqrTo3",
            value: function(e, t, i) {
                return e * e + t * t + i * i
            }
        }, {
            key: "latLngDistance",
            value: function(e, t, i, r) {
                var a = Math.sin((i - e) / 2),
                    n = Math.sin((r - t) / 2),
                    o = a * a + Math.cos(e) * Math.cos(i) * n * n;
                return 2 * Math.atan2(Math.sqrt(o), Math.sqrt(1 - o))
            }
        }, {
            key: "cubicBezier",
            value: function(e, t, i, r, a) {
                var n = 3 * (t - e),
                    o = 3 * (i - t) - n,
                    s = a * a;
                return s * a * (r - e - n - o) + o * s + n * a + e
            }
        }, {
            key: "cubicBezierFn",
            value: function(e, t, i, r) {
                var a = 3 * (t - e),
                    n = 3 * (i - t) - a,
                    o = r - e - a - n;
                return function(t) {
                    var i = t * t;
                    return o * (i * t) + n * i + a * t + e
                }
            }
        }, {
            key: "normalizeAngle",
            value: function(e) {
                return (e = (e += this.PI) < 0 ? this.PI2 - Math.abs(e % PI2) : e % this.PI2) - this.PI
            }
        }, {
            key: "closestAngleTo",
            value: function(e, t) {
                return e + this.normalizeAngle(t - e)
            }
        }, {
            key: "lerp",
            value: function(e, t, i) {
                return e * (1 - i) + t * i
            }
        }]), e
    }()),
    pt = function() {
        function e() {
            f(this, e), p(this, "_scale", 1), p(this, "_amplitude", 1), p(this, "_r", []);
            for (var t = 0; t < e.MAX_VERTICES; ++t) this._r.push(Math.random() - .5)
        }
        return m(e, [{
            key: "getVal",
            value: function(t) {
                var i = t * this._scale,
                    r = Math.floor(i),
                    a = i - r,
                    n = a * a * (3 - 2 * a),
                    o = r & e.MAX_VERTICES_MASK,
                    s = o + 1 & e.MAX_VERTICES_MASK;
                return ft.lerp(this._r[o], this._r[s], n) * this._amplitude
            }
        }, {
            key: "amplitude",
            get: function() {
                return this._amplitude
            },
            set: function(e) {
                this._amplitude = e
            }
        }, {
            key: "scale",
            get: function() {
                return this._scale
            },
            set: function(e) {
                this._scale = e
            }
        }]), e
    }();
p(pt, "MAX_VERTICES", 256), p(pt, "MAX_VERTICES_MASK", pt.MAX_VERTICES - 1);
var _t = new z,
    gt = new b,
    xt = function() {
        function e() {
            f(this, e), p(this, "_position", new b), p(this, "_rotation", new E), p(this, "_scale", new b(1, 1, 1)), p(this, "_matrix", new F), p(this, "_enablePositionNoise", !0), p(this, "_enableRotationNoise", !0), p(this, "_positionFrequency", .25), p(this, "_rotationFrequency", .25), p(this, "_positionAmplitude", .3), p(this, "_rotationAmplitude", .003), p(this, "_positionScale", new b(1, 1, 1)), p(this, "_rotationScale", new b(1, 1, 0)), p(this, "_positionFractalLevel", 3), p(this, "_rotationFractalLevel", 3), p(this, "_times", new Float32Array(6)), p(this, "_noise", new pt), this.rehash()
        }
        return m(e, [{
            key: "rehash",
            value: function() {
                for (var e = 0; e < 6; e++) this._times[e] = -1e4 * Math.random()
            }
        }, {
            key: "_fbm",
            value: function(e, t) {
                for (var i = 0, r = .5, a = 0; a < t; a++) i += r * this._noise.getVal(e), e *= 2, r *= .5;
                return i
            }
        }, {
            key: "update",
            value: function(t) {
                var i = void 0 === t ? 1e3 / 60 : t;
                if (this._enablePositionNoise) {
                    for (var r = 0; r < 3; r++) this._times[r] += this._positionFrequency * i;
                    gt.set(this._fbm(this._times[0], this._positionFractalLevel), this._fbm(this._times[1], this._positionFractalLevel), this._fbm(this._times[2], this._positionFractalLevel)), gt.multiply(this._positionScale), gt.multiplyScalar(this._positionAmplitude * e.FBM_NORM), this._position.copy(gt)
                }
                if (this._enableRotationNoise) {
                    for (var a = 0; a < 3; a++) this._times[a + 3] += this._rotationFrequency * i;
                    gt.set(this._fbm(this._times[3], this._rotationFractalLevel), this._fbm(this._times[4], this._rotationFractalLevel), this._fbm(this._times[5], this._rotationFractalLevel)), gt.multiply(this._rotationScale), gt.multiplyScalar(this._rotationAmplitude * e.FBM_NORM), _t.set(gt.x, gt.y, gt.z), this._rotation.setFromEuler(_t)
                }
                this._matrix.compose(this._position, this._rotation, this._scale)
            }
        }, {
            key: "positionAmplitude",
            get: function() {
                return this._positionAmplitude
            },
            set: function(e) {
                this._positionAmplitude = e
            }
        }, {
            key: "positionFrequency",
            get: function() {
                return this._positionFrequency
            },
            set: function(e) {
                this._positionFrequency = e
            }
        }, {
            key: "rotationAmplitude",
            get: function() {
                return this._rotationAmplitude
            },
            set: function(e) {
                this._rotationAmplitude = e
            }
        }, {
            key: "rotationFrequency",
            get: function() {
                return this._rotationFrequency
            },
            set: function(e) {
                this._rotationFrequency = e
            }
        }, {
            key: "matrix",
            get: function() {
                return this._matrix
            },
            set: function(e) {
                this._matrix = e
            }
        }]), e
    }();
p(xt, "FBM_NORM", 1 / .75);
var yt, Tt = function() {
        function e(t, i, r, a) {
            f(this, e), this.coords = t, this.isLookAt = i, this.container = new R, this.point = new b, this.positions = [], this.meshInit = null, this.meshEnd = null, this.useControl = r, this.controlInit = null, this.controlMid = null, this.controlEnd = null, this.onChangeCallback = a
        }
        return m(e, [{
            key: "preInit",
            value: function() {}
        }, {
            key: "init",
            value: function() {
                var e, t, i;
                this.meshInit = new O(new N(this.useControl ? .15 : .05, 8)), this.meshMid = new O(new N(this.useControl ? .15 : .05, 8)), this.meshEnd = new O(new N(this.useControl ? .15 : .05, 8)), this.meshInit.material.color.set("green"), this.meshMid.material.color.set("yellow"), this.meshEnd.material.color.set("red"), (e = this.meshInit.position).set.apply(e, d(this.coords[0])), (t = this.meshMid.position).set.apply(t, d(this.coords[1])), (i = this.meshEnd.position).set.apply(i, d(this.coords[2])), this.useControl && (this.addControl(this.meshInit, this.controlInit), this.addControl(this.meshMid, this.controlMid), this.addControl(this.meshEnd, this.controlEnd)), this.positions.push(this.meshInit.position), this.positions.push(this.meshMid.position), this.positions.push(this.meshEnd.position);
                var r = new U;
                r.setAttribute("position", new H(new Float32Array(300), 3)), this.curve = new B(this.positions), this.curve.curveType = "catmullrom", this.curve.mesh = new G(r, new q({
                    color: this.isLookAt ? 255 : 16711680
                })), this.updateSplineOutline(), this.container.add(this.meshInit), this.useControl && this.container.add(this.meshMid), this.container.add(this.meshEnd), this.container.add(this.curve.mesh)
            }
        }, {
            key: "addControl",
            value: function(e, t) {
                var i = this;
                (t = new W(lt.camera, lt.renderer.domElement)).setSize(.3), t.attach(e), t.addEventListener("dragging-changed", (function(e) {
                    var t = !e.value;
                    lt.orbitControl.enabled = t, t && i.onChangeCallback && i.onChangeCallback()
                })), t.addEventListener("objectChange", (function() {
                    return i.updateSplineOutline()
                })), lt.scene.add(t)
            }
        }, {
            key: "updateSplineOutline",
            value: function() {
                for (var e = this.curve.mesh.geometry.attributes.position, t = 0; t < 100; t++) {
                    var i = t / 99;
                    this.curve.getPoint(i, this.point), e.setXYZ(t, this.point.x, this.point.y, this.point.z)
                }
                e.needsUpdate = !0
            }
        }, {
            key: "resize",
            value: function(e, t) {}
        }, {
            key: "update",
            value: function(e) {}
        }]), e
    }(),
    bt = new b,
    St = new b,
    wt = new E,
    kt = new F,
    Ct = function() {
        function e(t) {
            var i = t.id,
                r = t.duration,
                a = t.coords,
                n = t.lookAtCoords,
                o = t.ease,
                s = t.hasSnapshots;
            f(this, e), this.id = i, this.coords = a, this.lookAtCoords = n, this.container = new R, this.camera = new K, this.positionTrail = null, this.lookAtTrail = null, this.quaternionArray = new Float32Array(400), this.useControl = ot.TRAIL_DEBUG === this.id, this.isActive = !1, this.frame = 0, this.ratio = 0, this.duration = r, this.totalSegments = 99, this.ease = o || "linear", this.snapshotsNum = this.duration > 1e3 ? 2 : 1, this.hasSnapshots = s, this.snapshotsCount = 0
        }
        return m(e, [{
            key: "preInit",
            value: function() {
                var e = this;
                this.positionTrail = new Tt(this.coords, !1, this.useControl, (function() {
                    return e.updatedQuaternionArray()
                })), this.lookAtTrail = new Tt(this.lookAtCoords, !0, this.useControl, (function() {
                    return e.updatedQuaternionArray()
                })), this.positionTrail.preInit(), this.lookAtTrail.preInit()
            }
        }, {
            key: "init",
            value: function() {
                this.positionTrail.init(), this.lookAtTrail.init(), this.useControl && (this.container.add(this.positionTrail.container), this.container.add(this.lookAtTrail.container)), this.addGui(), this.updatedQuaternionArray()
            }
        }, {
            key: "updatedQuaternionArray",
            value: function() {
                for (var e = this.positionTrail.curve.mesh.geometry.attributes.position.array, t = this.lookAtTrail.curve.mesh.geometry.attributes.position.array, i = 0; i <= this.totalSegments; i++) bt.fromArray(e, 3 * i), St.fromArray(t, 3 * i), kt.lookAt(bt, St, this.camera.up), wt.setFromRotationMatrix(kt), wt.toArray(this.quaternionArray, 4 * i)
            }
        }, {
            key: "addGui",
            value: function() {
                var e = this;
                if (this.useControl) {
                    var t = {
                            logPositions: function() {
                                console.log(JSON.stringify({
                                    id: e.id,
                                    duration: e.duration,
                                    ease: e.ease,
                                    coords: [e.positionTrail.meshInit.position.toArray(), e.positionTrail.meshMid.position.toArray(), e.positionTrail.meshEnd.position.toArray()],
                                    lookAtCoords: [e.lookAtTrail.meshInit.position.toArray(), e.lookAtTrail.meshMid.position.toArray(), e.lookAtTrail.meshEnd.position.toArray()]
                                }, null) + ",")
                            },
                            startCameraAnimation: function() {
                                return e.startAnimation()
                            },
                            stopCameraAnimation: function() {
                                return e.stopAnimation()
                            }
                        },
                        i = new V;
                    i.add(t, "startCameraAnimation"), i.add(t, "stopCameraAnimation"), i.add(t, "logPositions"), i.open()
                }
            }
        }, {
            key: "startAnimation",
            value: function() {
                lt.activeTrailCamera = this.camera, this.frame = 0, this.ratio = 0, this.isActive = !0
            }
        }, {
            key: "stopAnimation",
            value: function() {
                this.snapshotsCount = 0, this.isActive = !1, lt.activeTrailCamera = null
            }
        }, {
            key: "resize",
            value: function(e, t) {
                this.positionTrail.resize(e, t), this.lookAtTrail.resize(e, t)
            }
        }, {
            key: "update",
            value: function(e) {
                if (this.isActive) {
                    this.positionTrail.update(e), this.lookAtTrail.update(e), this.ratio = Y(ct[this.ease](this.frame / this.duration), 0, 1), this.hasSnapshots && !lt.snapshotsManager.isActive && this.ratio > (this.snapshotsCount + 1) / (this.snapshotsNum + 1) && (this.snapshotsCount += 1, lt.snapshotsManager.startSnapshot());
                    var t = this.totalSegments * this.ratio,
                        i = Math.floor(t),
                        r = Math.ceil(t),
                        a = t % 1,
                        n = this.positionTrail.curve.mesh.geometry.attributes.position.array,
                        o = this.lookAtTrail.curve.mesh.geometry.attributes.position.array;
                    bt.fromArray(n, 3 * r), wt.fromArray(this.quaternionArray, 4 * r), this.camera.position.fromArray(n, 3 * i).lerp(bt, a), this.camera.quaternion.fromArray(this.quaternionArray, 4 * i).slerp(wt, a), this.camera.updateMatrix(), 1 === this.ratio && this.stopAnimation(), bt.fromArray(o, 3 * r), lt.currentLookAtPosition.fromArray(o, 3 * i).lerp(bt, a), this.frame += 60 * e
                }
            }
        }]), e
    }(),
    Lt = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            f(this, e), this.trailsData = t, this.trails = [], this.activeTrailIndex = 0, this.container = new R, this.isLoopable = i, this.hasFinished = !1, ot.TRAIL_DEBUG && (this.trailsData = this.trailsData.filter((function(e) {
                return e.id === ot.TRAIL_DEBUG
            })), this.isLoopable = !0)
        }
        return m(e, [{
            key: "preInit",
            value: function() {
                this.trails = this.trailsData.map((function(e) {
                    return new Ct(e)
                })), this.trails.forEach((function(e) {
                    return e.preInit()
                }))
            }
        }, {
            key: "init",
            value: function() {
                var e = this;
                this.trails.forEach((function(t) {
                    t.init(), e.container.add(t.container)
                }))
            }
        }, {
            key: "startAnimation",
            value: function() {
                this.trails[this.activeTrailIndex].startAnimation(), this.trails[this.activeTrailIndex].update(0)
            }
        }, {
            key: "nextTrail",
            value: function() {
                this.activeTrailIndex += 1, this.isLoopable && (this.activeTrailIndex %= this.trails.length), this.activeTrailIndex === this.trails.length ? this.hasFinished = !0 : this.startAnimation(), this.update(0)
            }
        }, {
            key: "resize",
            value: function(e, t) {
                this.trails.forEach((function(i) {
                    return i.resize(e, t)
                }))
            }
        }, {
            key: "update",
            value: function(e) {
                if (!(this.hasFinished || properties.frameStatus > 0)) {
                    var t = this.trails[this.activeTrailIndex];
                    t && (t.update(e), 1 !== t.ratio || t.isActive || this.nextTrail())
                }
            }
        }]), e
    }(),
    At = window,
    Mt = At.DeviceOrientationEvent,
    It = null,
    Dt = {},
    Et = 0,
    Pt = new b(0, 0, 1),
    zt = new z,
    Ft = new E,
    Rt = new E(-Math.sqrt(.5), 0, 0, Math.sqrt(.5)),
    Ot = Math.PI / 180,
    Nt = function(e) {
        Dt = e
    },
    Ut = function() {
        Et = At.orientation || 0
    },
    Ht = [{
        id: "init2",
        duration: 480,
        ease: "cubicInOut",
        coords: [
            [0, 2, -7.313774503121889],
            [0, 2, -7.313774503121889],
            [0, 2, -7.313774503121889]
        ],
        lookAtCoords: [
            [0, 2, -8.25],
            [0, 2, -8.25],
            [0, 2, -8.25]
        ]
    }],
    Bt = [{
        id: "test4",
        duration: 700,
        ease: "linear",
        hasSnapshots: !0,
        coords: [
            [3, 2, -8.742589568428794],
            [3, 2, -2.525538902368559],
            [3, 2, 2.346839739617362]
        ],
        lookAtCoords: [
            [0, 2, -8.745903470331928],
            [0, 2, -2.509416695749591],
            [0, 2, 2.3478580039180645]
        ]
    }, {
        id: "test0",
        duration: 1200,
        ease: "linear",
        hasSnapshots: !0,
        coords: [
            [-4.72428050413869, 4.914819885586767, 14.574042994058777],
            [-2.723801199555579, 2, 0],
            [-5.201039340242705, 6.16753470132946, -12.8261744377916]
        ],
        lookAtCoords: [
            [0, 2, 4],
            [0, 2, 6.46591285319987],
            [0, 2, -2.303737281438475]
        ]
    }, {
        id: "test5",
        duration: 1200,
        hasSnapshots: !0,
        ease: "linear",
        coords: [
            [-.9420305115804748, 2, 14.574042994058777],
            [-.8399265017728577, 1.4840564725913676, 2.2741488621629227],
            [-.7529642040805467, 2, -9.981748827546701]
        ],
        lookAtCoords: [
            [0, 2, -2.9569090301554106],
            [0, 2, -3.801688254955641],
            [0, 2, -6.826511572248067]
        ]
    }, {
        id: "test1",
        duration: 800,
        ease: "cubicInOut",
        hasSnapshots: !0,
        coords: [
            [5.5527002039455144, 1.3508620617970422, .2669896892434471],
            [.288957747354007, 1.100082750512498, .6132916019878917],
            [-5.45835345976636, 1.3711996876373052, 1.5536730636402096]
        ],
        lookAtCoords: [
            [2, 2, 4],
            [0, 2, 3],
            [4, 2, 2]
        ]
    }, {
        id: "test2",
        duration: 1e3,
        hasSnapshots: !0,
        ease: "cubicOut",
        coords: [
            [4, 4.025132883540882, 0],
            [0, 3.980593948748846, -2.89072839559872],
            [-4, 3.984956200924139, 0]
        ],
        lookAtCoords: [
            [0, 4, 7.770156900464922],
            [0, 2, 3.2942284457342716],
            [0, 2.0227816376603647, -7.8546774485294]
        ]
    }, {
        id: "test7",
        duration: 1500,
        ease: "linear",
        hasSnapshots: !0,
        coords: [
            [4.099006642721604, 9.807033527709452, -5.392509721878993],
            [.288957747354007, 6.169690577809903, 13.656610161990125],
            [-4.8220388158627845, 1.7133498414903228, -6.5097972116639164]
        ],
        lookAtCoords: [
            [.9977761977668371, 5.29219115631928, 10.004581564413728],
            [0, 1.8045051608933793, 3],
            [.10151598381824989, 2, -9.977691583888845]
        ]
    }, {
        id: "test3",
        duration: 1200,
        ease: "linear",
        hasSnapshots: !0,
        coords: [
            [.9420305115804748, 2, 14.574042994058777],
            [.8399265017728577, 1.4840564725913676, 2.2741488621629227],
            [.7529642040805467, 2, -9.981748827546701]
        ],
        lookAtCoords: [
            [0, 2, -2.9569090301554106],
            [0, 2, -3.801688254955641],
            [0, 2, -6.826511572248067]
        ]
    }, {
        id: "test6",
        duration: 800,
        ease: "linear",
        hasSnapshots: !0,
        coords: [
            [5.5527002039455144, 9.807033527709452, .2669896892434471],
            [.288957747354007, 7.492924634320706, .6132916019878917],
            [-9.419019692066623, 6.543229993717969, 1.1828988961936728]
        ],
        lookAtCoords: [
            [-2.313310665355025, 5.092043331110995, 10.004581564413728],
            [0, 2, 3],
            [2.563416531433141, 2, -5.42704267796735]
        ]
    }].filter((function(e) {
        return !("test4" === e.id && at.isMobile)
    })),
    Gt = new(function() {
        function e() {
            f(this, e)
        }
        return m(e, [{
            key: "preInit",
            value: function(e) {
                var t, i = this;
                this.DEFAULT_CAMERA_POSITION = new b(4, 3, 10), this.DEFAULT_LOOKAT_POSITION = new b(0, 1.6, 0), this._q = new E, this._e = new z, this._v1 = new b, this._v2 = new b, this._tempMat4 = new F, this._stylePosition = new b, this._camera = lt.camera, this._camera.position.copy(this.DEFAULT_CAMERA_POSITION), this._prevCameraPosition = this._camera.position.clone(), this._brownianMotion = new xt, this._quickSnapshotCamera = this._camera.clone(), this._trailCamera = this._camera.clone(), this._frameCamera = this._camera.clone(), this._orbitCamera = this._camera.clone(), this._orbitFrameCamera = this._camera.clone(), this._orbitControls = new mt(this._orbitCamera, lt.canvas), this._orbitControlsFrame = new mt(this._orbitFrameCamera, lt.canvas), this._orbitControls.enableDamping = this._orbitControlsFrame.enableDamping = !0, this._orbitControls.minPolarAngle = this._orbitControlsFrame.minPolarAngle = .1, this._orbitControls.maxPolarAngle = this._orbitControlsFrame.maxPolarAngle = Math.PI / 2 + .05, this._orbitControls.minDistance = this._orbitControlsFrame.minDistance = .5, this._orbitControls.maxDistance = this._orbitControlsFrame.maxDistance = 12, this._orbitControls.target0.copy(this.DEFAULT_LOOKAT_POSITION), this._orbitControlsFrame.target0.copy(this.DEFAULT_LOOKAT_POSITION), this._orbitControls.reset(), this._orbitControlsFrame.reset(), lt.orbitControl = this._orbitControls, this._lookAtMesh = null, this._isTrailAnimation = !1, this.initCameraTrails = new Lt(Ht), this.cameraTrails = new Lt(Bt, !0), this.trailStep = 0, this.initCameraTrails.preInit(), this.cameraTrails.preInit(), lt.scene.add(this.initCameraTrails.container), lt.scene.add(this.cameraTrails.container), at.isMobile && (this._deviceOrientationCamera = new T, this._baseDeviceControlQuaternion = new E, this._targetDeviceControlQuaternion = new E, this._hasDeviceOrientationControlValues = !1, t = this._deviceOrientationCamera, (It = t).rotation.reorder("YXZ"), Ut(), Mt && "function" == typeof Mt.requestPermission ? Mt.requestPermission().then((function(e) {
                    "granted" == e && (At.addEventListener("orientationchange", Ut, !1), At.addEventListener("deviceorientation", Nt, !1))
                })).catch((function() {})) : (At.addEventListener("orientationchange", Ut, !1), At.addEventListener("deviceorientation", Nt, !1))), lt.snapshotSignal.add((function(e) {
                    e && (e.sphere.getWorldPosition(i._stylePosition), i._stylePosition.y -= .5, i._orbitControlsFrame.object.position.copy(i._stylePosition), i._orbitControlsFrame.object.translateZ(2.5), i._orbitControlsFrame.target.copy(i._stylePosition))
                }))
            }
        }, {
            key: "init",
            value: function() {
                this.initCameraTrails.init(), this.cameraTrails.init()
            }
        }, {
            key: "resize",
            value: function(e, t) {
                this.initCameraTrails.resize(e, t), this.cameraTrails.resize(e, t)
            }
        }, {
            key: "update",
            value: function(e) {
                this._camera.matrix.identity(), this._camera.matrix.decompose(this._camera.position, this._camera.quaternion, this._camera.scale), this._camera.position.copy(this.DEFAULT_CAMERA_POSITION), this._orbitControls.enabled = !0, this._orbitControlsFrame.enabled = !0, this._orbitControlsFrame.minDistance = 1, this._orbitControlsFrame.maxDistance = 5, this._orbitControls.update(), this._orbitControlsFrame.update(), this._orbitCamera.updateMatrix(), this._orbitFrameCamera.updateMatrix(), this._orbitCamera.matrix.decompose(this._camera.position, this._camera.quaternion, this._camera.scale), this._v1.set(0, 0, -1).applyQuaternion(this._camera.quaternion);
                var t = this._v2.copy(this._orbitControls.target).sub(this._camera.position).dot(this._v1);
                lt.hasInitialized && (this.initCameraTrails.update(e), this.cameraTrails.update(e), ot.TRAIL_DEBUG || (0 === this.trailStep && (this.initCameraTrails.startAnimation(), this.trailStep = 1), 1 === this.trailStep && this.initCameraTrails.hasFinished && (this.cameraTrails.startAnimation(), this.trailStep = 2))), lt.activeTrailCamera && (this._trailCamera.position.copy(lt.activeTrailCamera.position), this._trailCamera.quaternion.copy(lt.activeTrailCamera.quaternion), this._quickSnapshotCamera.position.copy(lt.snapshotsManager.camera.position), this._quickSnapshotCamera.quaternion.copy(lt.snapshotsManager.camera.quaternion));
                var i = ct.cubicInOut(lt.frameStatus);
                this._orbitFrameCamera.matrix.decompose(this._frameCamera.position, this._frameCamera.quaternion, this._frameCamera.scale), this._camera.position.lerp(this._trailCamera.position, lt.activeTrailCamera && lt.isCameraViewActive ? 1 : 0), this._camera.position.lerp(this._quickSnapshotCamera.position, lt.snapshotsManager.isActive && lt.isCameraViewActive ? 1 : 0), this._camera.position.lerp(this._frameCamera.position, i), this._camera.quaternion.slerp(this._trailCamera.quaternion, lt.activeTrailCamera && lt.isCameraViewActive ? 1 : 0), this._camera.quaternion.slerp(this._quickSnapshotCamera.quaternion, lt.snapshotsManager.isActive && lt.isCameraViewActive ? 1 : 0), this._camera.quaternion.slerp(this._frameCamera.quaternion, i), this._camera.fov = lt.isCameraViewActive && lt.snapshotsManager.isActive ? 30 : 75, lt.isCameraViewActive ? (this._v1.set(0, 0, -1).applyQuaternion(this._camera.quaternion), this._v2.copy(lt.currentLookAtPosition).sub(this._camera.position), t = this._v1.dot(this._v2), lt.bokehFocusDistance = t, lt.bokehAmount = lt.snapshotsManager.isActive ? .5 : 1, lt.bokehAmount *= 1 - i) : lt.bokehAmount = 0;
                var r = this._camera.fov;
                this._camera.fov = r + lt.cameraDollyZoomFovOffset;
                var a = t;
                a = a * Math.tan(r / 360 * Math.PI / 2) / Math.tan(this._camera.fov / 360 * Math.PI / 2) - a, this._camera.translateZ(a), lt.cameraDollyZoomFovOffset *= .98, this._camera.updateProjectionMatrix(), this._camera.fov = r, at.isMobile && function() {
                    if (Dt) {
                        var e = Dt.alpha ? Dt.alpha * Ot : 0,
                            t = Dt.beta ? Dt.beta * Ot : 0,
                            i = Dt.gamma ? Dt.gamma * Ot : 0,
                            r = Et ? Et * Ot : 0;
                        return zt.set(t, e, -i, "YXZ"), It.quaternion.setFromEuler(zt), It.quaternion.multiply(Rt), It.quaternion.multiply(Ft.setFromAxisAngle(Pt, -r)), Dt.alpha && Dt.beta && Dt.gamma
                    }
                }() ? (this._hasDeviceOrientationControlValues || (this._targetDeviceControlQuaternion.copy(this._deviceOrientationCamera.quaternion), this._baseDeviceControlQuaternion.copy(this._deviceOrientationCamera.quaternion)), this._targetDeviceControlQuaternion.slerp(this._deviceOrientationCamera.quaternion, .05), this._baseDeviceControlQuaternion.slerp(this._targetDeviceControlQuaternion, .05), this._q.copy(this._baseDeviceControlQuaternion).invert().multiply(this._targetDeviceControlQuaternion), this._hasDeviceOrientationControlValues = !0, this._camera.quaternion.multiply(this._q)) : (this._camera.translateZ(-1 * t), lt.cameraLookX += (ut.mouseXY.y * lt.cameraLookStrength - lt.cameraLookX) * lt.cameraLookEaseDamp, lt.cameraLookY += (-ut.mouseXY.x * lt.cameraLookStrength - lt.cameraLookY) * lt.cameraLookEaseDamp, this._e.set((1 - lt.frameStatus) * lt.cameraLookX, (1 - lt.frameStatus) * lt.cameraLookY, 0), this._q.setFromEuler(this._e), this._camera.quaternion.multiply(this._q), this._camera.translateZ(t)), this._camera.matrix.compose(this._camera.position, this._camera.quaternion, this._camera.scale), this._brownianMotion.positionAmplitude = lt.cameraShakePositionStrength, this._brownianMotion.positionFrequency = lt.cameraShakePositionSpeed, this._brownianMotion.rotationAmplitude = lt.cameraShakeRotationStrength, this._brownianMotion.rotationFrequency = lt.cameraShakeRotationSpeed, this._brownianMotion.update(e), this._camera.matrix.multiply(this._brownianMotion.matrix), this._camera.matrix.decompose(this._camera.position, this._camera.quaternion, this._camera.scale), this._v1.set(0, 0, -1).applyQuaternion(this._camera.quaternion), lt.cameraDistance = this._v2.copy(this._orbitControls.target).sub(this._camera.position).dot(this._v1), this._camera.position.x = ft.clamp(this._camera.position.x, -11, 11), this._camera.position.z = ft.clamp(this._camera.position.z, -14, 14), this._camera.updateMatrix(), this._camera.updateMatrixWorld(), this._tempMat4.copy(this._camera.matrixWorld).invert(), this._camera.matrixWorldInverse.copy(this._tempMat4), lt.frustum.setFromProjectionMatrix(this._tempMat4.multiplyMatrices(this._camera.projectionMatrix, this._camera.matrixWorldInverse)), lt.isCameraViewActive ? (this._v1.set(0, 0, -1).applyQuaternion(this._camera.quaternion), this._v2.copy(lt.currentLookAtPosition).sub(this._camera.position), t = this._v1.dot(this._v2) - .25, lt.bokehFocusDistance = t, lt.bokehAmount = lt.snapshotsManager.isActive ? .5 : 1, lt.bokehAmount *= 1 - i) : lt.bokehAmount = 0
            }
        }]), e
    }()),
    qt = "#define GLSLIFY 1\nattribute vec2 position;varying vec2 v_uv;void main(){v_uv=position*0.5+0.5;gl_Position=vec4(position,0.0,1.0);}",
    Wt = "#define GLSLIFY 1\nuniform sampler2D u_texture;varying vec2 v_uv;void main(){gl_FragColor=texture2D(u_texture,v_uv);}",
    Kt = new(function() {
        function e() {
            f(this, e), p(this, "renderer", void 0), p(this, "quadGeom", void 0), p(this, "triGeom", void 0), p(this, "floatType", void 0), p(this, "precisionPrefix", void 0), p(this, "precisionPrefix2", void 0), p(this, "vertexShader", void 0), p(this, "scene", void 0), p(this, "camera", void 0), p(this, "tri", void 0), p(this, "copyMaterial", void 0), p(this, "uvCopyMaterial", void 0), p(this, "clearMaterial", void 0), p(this, "debugScene", void 0), p(this, "debugMesh", void 0), p(this, "debugMaterial", void 0)
        }
        return m(e, [{
            key: "init",
            value: function(e, t) {
                this.renderer = e, this.floatType = t, this.scene = new j, this.camera = new T, this.camera.position.z = 1, this.triGeom = new U, this.triGeom.setAttribute("position", new H(new Float32Array([-1, -1, 0, 4, -1, 0, -1, 4, 0]), 3)), this.quadGeom = new X(2, 2), this.tri = new O(this.triGeom), this.tri.frustumCulled = !1, this.scene.add(this.tri), this.precisionPrefix = "precision ".concat(this.renderer.capabilities.precision, " float;\n"), this.precisionPrefix2 = "#version 300 es\n\t\t\tprecision ".concat(this.renderer.capabilities.precision, " float;\n\t\t\tprecision ").concat(this.renderer.capabilities.precision, " int;\n\t\t\t#define IS_WEBGL2 true\n\t\t"), this.renderer.capabilities.isWebGL2 ? (this.vertexPrefix = "".concat(this.precisionPrefix2, "\n\t\t\t\tprecision mediump sampler2DArray;\n\t\t\t\t#define attribute in\n\t\t\t\t#define varying out\n\t\t\t\t#define texture2D texture\n\t\t\t"), this.fragmentPrefix = "".concat(this.precisionPrefix2, "\n\t\t\t\t#define varying in\n\t\t\t\tout highp vec4 pc_fragColor;\n\t\t\t\t#define gl_FragColor pc_fragColor\n\t\t\t\t#define gl_FragDepthEXT gl_FragDepth\n\t\t\t\t#define texture2D texture\n\t\t\t\t#define textureCube texture\n\t\t\t\t#define texture2DProj textureProj\n\t\t\t\t#define texture2DLodEXT textureLod\n\t\t\t\t#define texture2DProjLodEXT textureProjLod\n\t\t\t\t#define textureCubeLodEXT textureLod\n\t\t\t\t#define texture2DGradEXT textureGrad\n\t\t\t\t#define texture2DProjGradEXT textureProjGrad\n\t\t\t\t#define textureCubeGradEXT textureGrad\n\t\t\t")) : (this.vertexPrefix = this.precisionPrefix, this.fragmentPrefix = this.precisionPrefix), this.vertexShader = this.precisionPrefix + qt, this.copyMaterial = new Z({
                    uniforms: {
                        u_texture: {
                            value: null
                        }
                    },
                    vertexShader: this.vertexShader,
                    fragmentShader: this.precisionPrefix + Wt,
                    depthTest: !1,
                    depthWrite: !1,
                    blending: Q
                }), this.uvCopyMaterial = new Z({
                    uniforms: {
                        u_texture: {
                            value: null
                        }
                    },
                    vertexShader: this.precisionPrefix + "#define GLSLIFY 1\nattribute vec2 position;attribute vec2 uv;varying vec2 v_uv;void main(){v_uv=uv;gl_Position=vec4(position,0.0,1.0);}",
                    fragmentShader: this.precisionPrefix + Wt,
                    depthTest: !1,
                    depthWrite: !1,
                    blending: Q
                }), this.clearMaterial = new Z({
                    uniforms: {
                        u_color: {
                            value: new J(1, 1, 1, 1)
                        }
                    },
                    vertexShader: this.vertexShader,
                    fragmentShader: this.precisionPrefix + "#define GLSLIFY 1\nuniform vec4 u_color;varying vec2 v_uv;void main(){gl_FragColor=u_color;}",
                    depthTest: !1,
                    depthWrite: !1,
                    blending: Q
                });
                var i = new X(1, 1);
                i.translate(.5, -.5, 0), this.debugMaterial = new Z({
                    uniforms: {
                        u_texture: {
                            value: null
                        },
                        u_transform: {
                            value: new J(0, 0, 1, 1)
                        }
                    },
                    vertexShader: this.precisionPrefix + "#define GLSLIFY 1\nattribute vec3 position;attribute vec2 uv;uniform vec4 u_transform;varying vec2 v_uv;void main(){v_uv=uv;gl_Position=vec4(position.xy*u_transform.zw+u_transform.xy,0.0,1.0);}",
                    fragmentShader: this.precisionPrefix + Wt,
                    depthTest: !1,
                    depthWrite: !1,
                    blending: Q
                }), this.debugMesh = new O(i, this.debugMaterial), this.debugScene = new j, this.debugScene.frustumCulled = !1, this.debugScene.add(this.debugMesh)
            }
        }, {
            key: "copy",
            value: function(e, t) {
                var i = this.copyMaterial;
                i && (i.uniforms.u_texture.value = e, this.render(i, t))
            }
        }, {
            key: "uvCopy",
            value: function(e, t) {
                var i = this.uvCopyMaterial;
                i && (i.uniforms.u_texture.value = e, this.render(i, t))
            }
        }, {
            key: "render",
            value: function(e, t) {
                this.tri && this.renderer && this.scene && this.camera && (this.tri.material = e, t && this.renderer.setRenderTarget(t), this.renderer.render(this.scene, this.camera), t && this.renderer.setRenderTarget(null))
            }
        }, {
            key: "renderGeometry",
            value: function(e, t, i) {
                this.tri && this.triGeom && (this.tri.geometry = e, this.render(t, i), this.tri.geometry = this.triGeom)
            }
        }, {
            key: "renderMesh",
            value: function(e, t) {
                this.tri && this.renderer && this.scene && this.camera && (this.tri.visible = !1, this.scene.add(e), t && this.renderer.setRenderTarget(t || null), this.renderer.render(this.scene, this.camera), t && this.renderer.setRenderTarget(null), this.scene.remove(e), this.tri.visible = !0)
            }
        }, {
            key: "debugTo",
            value: function(e, t, i, r, a) {
                if (this.renderer && this.debugMaterial && this.debugScene && this.camera) {
                    t = t || e.width || (e.image ? e.image.width : 200) || 200, i = i || e.height || (e.image ? e.image.height : 200) || 200, r = r || 0, a = a || 0;
                    var n = this.renderer.getSize(new L);
                    r = r / n.width * 2 - 1, a = 1 - a / n.height * 2, t = t / n.width * 2, i = i / n.height * 2, this.debugMaterial.uniforms.u_texture.value = e, this.debugMaterial.uniforms.u_transform.value.set(r, a, t, i);
                    var o = this.getColorState();
                    this.renderer.autoClearColor = !1, this.renderer.setRenderTarget(null), this.renderer.render(this.debugScene, this.camera), this.setColorState(o)
                }
            }
        }, {
            key: "parseDefines",
            value: function(e) {
                var t = "";
                for (var i in e) {
                    var r = e[i];
                    t += !0 === r ? "#define ".concat(i, "\n") : "#define ".concat(i, " ").concat(r, "\n")
                }
                return t
            }
        }, {
            key: "clearColor",
            value: function(e, t, i, r, a) {
                this.clearMaterial && (this.clearMaterial.uniforms.u_color.value.set(e, t, i, r), this.clearMaterial.transparent = r < 1, this.clearMaterial.blending = r < 1 ? $ : Q, this.render(this.clearMaterial, a), this.clearMaterial.transparent = !1, this.clearMaterial.blending = Q)
            }
        }, {
            key: "getColorState",
            value: function() {
                if (!this.renderer) return {
                    autoClear: !0,
                    autoClearColor: !0,
                    autoClearStencil: !0,
                    autoClearDepth: !0,
                    clearColor: 0,
                    clearAlpha: 1
                };
                var e = new w;
                return this.renderer.getClearColor(e), {
                    autoClear: this.renderer.autoClear,
                    autoClearColor: this.renderer.autoClearColor,
                    autoClearStencil: this.renderer.autoClearStencil,
                    autoClearDepth: this.renderer.autoClearDepth,
                    clearColor: e.getHex(),
                    clearAlpha: this.renderer.getClearAlpha()
                }
            }
        }, {
            key: "setColorState",
            value: function(e) {
                this.renderer && (this.renderer.setClearColor(e.clearColor, e.clearAlpha), this.renderer.autoClear = e.autoClear, this.renderer.autoClearColor = e.autoClearColor, this.renderer.autoClearStencil = e.autoClearStencil, this.renderer.autoClearDepth = e.autoClearDepth)
            }
        }, {
            key: "createDataTexture",
            value: function(e, t, i) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    n = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                return new ee(e, t, i, n ? te : ie, r ? this.floatType : re, ae, ne, ne, a ? oe : se, a ? oe : se, 0)
            }
        }, {
            key: "createRenderTarget",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                return new le(e, t, {
                    wrapS: ne,
                    wrapT: ne,
                    magFilter: r ? oe : se,
                    minFilter: r ? oe : se,
                    format: i ? te : ie,
                    type: a ? this.floatType : re,
                    anisotropy: 0,
                    encoding: ue,
                    depthBuffer: !1,
                    stencilBuffer: !1
                })
            }
        }, {
            key: "createMultisampleRenderTarget",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                return this.renderer && this.renderer.capabilities.isWebGL2 ? new ce(e, t, {
                    wrapS: ne,
                    wrapT: ne,
                    magFilter: r ? oe : se,
                    minFilter: r ? oe : se,
                    format: i ? te : ie,
                    type: a ? this.floatType : re,
                    anisotropy: 0,
                    encoding: ue,
                    depthBuffer: !1,
                    stencilBuffer: !1
                }) : this.createRenderTarget(e, t, i, r, a)
            }
        }]), e
    }()),
    Vt = function() {
        function e() {
            f(this, e), p(this, "width", 1), p(this, "height", 1), p(this, "scene", null), p(this, "camera", null), p(this, "resolution", new L(0, 0)), p(this, "texelSize", new L(0, 0)), p(this, "aspect", new L(1, 1)), p(this, "onBeforeSceneRendered", new k), p(this, "onAfterSceneRendered", new k), p(this, "onAfterRendered", new k), p(this, "sceneRenderTarget", null), p(this, "fromRenderTarget", null), p(this, "toRenderTarget", null), p(this, "useDepthTexture", !0), p(this, "depthTexture", null), p(this, "fromTexture", null), p(this, "toTexture", null), p(this, "sceneTexture", null), p(this, "mesh", null), p(this, "queue", []), p(this, "sharedUniforms", {}), p(this, "geom", void 0), p(this, "hasSizeChanged", !0)
        }
        return m(e, [{
            key: "init",
            value: function(e) {
                if (Object.assign(this, e), yt ? this.geom = yt : (this.geom = yt = new U, this.geom.setAttribute("position", new H(new Float32Array([-1, -1, 0, 4, -1, 0, -1, 4, 0]), 3)), this.geom.setAttribute("a_uvClamp", new H(new Float32Array([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1]), 4))), this.sceneRenderTarget = Kt.createMultisampleRenderTarget(1, 1, !0), this.sceneRenderTarget.depthBuffer = !0, this.fromRenderTarget = Kt.createRenderTarget(1, 1, !0), this.toRenderTarget = this.fromRenderTarget.clone(), this.useDepthTexture = !!this.useDepthTexture && Kt.renderer && (Kt.renderer.capabilities.isWebGL2 || Kt.renderer.extensions.get("WEBGL_depth_texture")), this.fromTexture = this.fromRenderTarget.texture, this.toTexture = this.toRenderTarget.texture, this.sceneTexture = this.sceneRenderTarget.texture, this.mesh = new O, this.sharedUniforms = Object.assign(this.sharedUniforms, {
                        u_sceneTexture: {
                            value: this.sceneRenderTarget.texture
                        },
                        u_sceneDepthTexture: {
                            value: null
                        },
                        u_cameraNear: {
                            value: 0
                        },
                        u_cameraFar: {
                            value: 1
                        },
                        u_cameraFovRad: {
                            value: 1
                        },
                        u_resolution: {
                            value: this.resolution
                        },
                        u_texelSize: {
                            value: this.texelSize
                        },
                        u_aspect: {
                            value: this.aspect
                        }
                    }), this.useDepthTexture && Kt.renderer) {
                    var t = new he(this.resolution.width, this.resolution.height);
                    t.type = de, Kt.renderer.capabilities.isWebGL2 && (t.type = ve), t.minFilter = oe, t.magFilter = oe, Kt.renderer.capabilities.isWebGL2 || (t.format = me, t.type = fe), this.sceneRenderTarget.depthTexture = t, this.depthTexture = this.sharedUniforms.u_sceneDepthTexture.value = t
                }
            }
        }, {
            key: "swap",
            value: function() {
                var e = this.fromRenderTarget;
                this.fromRenderTarget = this.toRenderTarget, this.toRenderTarget = e, this.fromTexture = this.fromRenderTarget.texture, this.toTexture = this.toRenderTarget.texture
            }
        }, {
            key: "setSize",
            value: function(e, t) {
                if (this.width !== e || this.height !== t) {
                    this.hasSizeChanged = !0, this.width = e, this.height = t, this.resolution.set(e, t), this.texelSize.set(1 / e, 1 / t);
                    var i = t / Math.sqrt(e * e + t * t);
                    this.aspect.set(e / t * i, i), this.sceneRenderTarget.setSize(e, t), this.fromRenderTarget.setSize(e, t), this.toRenderTarget.setSize(e, t)
                }
            }
        }, {
            key: "dispose",
            value: function() {
                this.fromRenderTarget && this.fromRenderTarget.dispose(), this.toRenderTarget && this.toRenderTarget.dispose(), this.sceneRenderTarget && this.sceneRenderTarget.dispose()
            }
        }, {
            key: "_filterQueue",
            value: function(e) {
                return e.enabled && e.needsRender()
            }
        }, {
            key: "renderMaterial",
            value: function(e, t) {
                this.mesh.material = e, Kt.renderMesh(this.mesh, t)
            }
        }, {
            key: "render",
            value: function(e, t, i) {
                if (Kt.renderer) {
                    this.scene = e, this.camera = t, this.mesh.geometry = this.geom;
                    var r = this.queue.filter(this._filterQueue),
                        a = this.sharedUniforms;
                    if (a.u_sceneTexture.value = this.sceneRenderTarget.texture, a.u_cameraNear.value = t.near, a.u_cameraFar.value = t.far, a.u_cameraFovRad.value = t.fov / 180 * Math.PI, this.onBeforeSceneRendered.dispatch(), r.length) {
                        Kt.renderer.setRenderTarget(this.sceneRenderTarget), Kt.renderer.render(e, t), Kt.renderer.setRenderTarget(null), Kt.copy(this.sceneRenderTarget.texture, this.fromRenderTarget), this.onAfterSceneRendered.dispatch(this.sceneRenderTarget);
                        var n = Kt.getColorState();
                        Kt.renderer.autoClear = !1;
                        for (var o = 0, s = r.length; o < s; o++) {
                            var l = o === s - 1 && i,
                                u = r[o];
                            u.setPostprocessing(this), u.render(this, l)
                        }
                        Kt.setColorState(n)
                    } else Kt.renderer.render(e, t), this.onAfterSceneRendered.dispatch();
                    this.onAfterRendered.dispatch(), this.hasSizeChanged = !1
                }
            }
        }]), e
    }(),
    Yt = function() {
        function e() {
            f(this, e), p(this, "sharedUniforms", {}), p(this, "enabled", !0), p(this, "material", null)
        }
        return m(e, [{
            key: "init",
            value: function(e) {
                Object.assign(this, e)
            }
        }, {
            key: "createRawShaderMaterial",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return e = Object.assign({
                    depthTest: !1,
                    depthWrite: !1,
                    blending: Q,
                    vertexShader: qt,
                    fragmentShader: Wt
                }, e), t && (e.vertexShader = Kt.precisionPrefix + e.vertexShader, e.fragmentShader = Kt.precisionPrefix + e.fragmentShader), new Z(e)
            }
        }, {
            key: "needsRender",
            value: function() {
                return this.enabled
            }
        }, {
            key: "setPostprocessing",
            value: function(e) {}
        }, {
            key: "render",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.material.uniforms.u_texture && (this.material.uniforms.u_texture.value = e.fromTexture), Kt.render(this.material, t ? null : e.toRenderTarget), e.swap()
            }
        }]), e
    }(),
    jt = function(e) {
        n(i, Yt);
        var t = s(i);

        function i() {
            var e;
            f(this, i);
            for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
            return p(u(e = t.call.apply(t, [this].concat(a))), "edgesRenderTarget", null), p(u(e), "weightsRenderTarget", null), p(u(e), "edgesMaterial", null), p(u(e), "weightsMaterial", null), e
        }
        return m(i, [{
            key: "init",
            value: function(e) {
                Object.assign(this, {
                    sharedUniforms: {
                        u_areaTexture: {
                            value: null
                        },
                        u_searchTexture: {
                            value: null
                        }
                    }
                }, e), r(c(i.prototype), "init", this).call(this), this.weightsRenderTarget = Kt.createRenderTarget(1, 1, !0), this.edgesRenderTarget = Kt.createRenderTarget(1, 1), this.edgesMaterial = new Z({
                    uniforms: {
                        u_texture: {
                            value: null
                        },
                        u_texelSize: null
                    },
                    vertexShader: Kt.precisionPrefix + "#define GLSLIFY 1\nattribute vec3 position;uniform vec2 u_texelSize;varying vec2 v_uv;varying vec4 v_offsets[3];void SMAAEdgeDetectionVS(vec2 texcoord){v_offsets[0]=texcoord.xyxy+u_texelSize.xyxy*vec4(-1.0,0.0,0.0,1.0);v_offsets[1]=texcoord.xyxy+u_texelSize.xyxy*vec4(1.0,0.0,0.0,-1.0);v_offsets[2]=texcoord.xyxy+u_texelSize.xyxy*vec4(-2.0,0.0,0.0,2.0);}void main(){v_uv=position.xy*0.5+0.5;SMAAEdgeDetectionVS(v_uv);gl_Position=vec4(position,1.0);}",
                    fragmentShader: Kt.precisionPrefix + "#define GLSLIFY 1\nuniform sampler2D u_texture;varying vec2 v_uv;varying vec4 v_offsets[3];vec4 SMAAColorEdgeDetectionPS(vec2 texcoord,vec4 offset[3],sampler2D colorTex){vec2 threshold=vec2(SMAA_THRESHOLD,SMAA_THRESHOLD);vec4 delta;vec3 C=texture2D(colorTex,texcoord).rgb;vec3 Cleft=texture2D(colorTex,offset[0].xy).rgb;vec3 t=abs(C-Cleft);delta.x=max(max(t.r,t.g),t.b);vec3 Ctop=texture2D(colorTex,offset[0].zw).rgb;t=abs(C-Ctop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0,1.0))==0.0)discard;vec3 Cright=texture2D(colorTex,offset[1].xy).rgb;t=abs(C-Cright);delta.z=max(max(t.r,t.g),t.b);vec3 Cbottom=texture2D(colorTex,offset[1].zw).rgb;t=abs(C-Cbottom);delta.w=max(max(t.r,t.g),t.b);float maxDelta=max(max(max(delta.x,delta.y),delta.z),delta.w);vec3 Cleftleft=texture2D(colorTex,offset[2].xy).rgb;t=abs(C-Cleftleft);delta.z=max(max(t.r,t.g),t.b);vec3 Ctoptop=texture2D(colorTex,offset[2].zw).rgb;t=abs(C-Ctoptop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(max(maxDelta,delta.z),delta.w);edges.xy*=step(0.5*maxDelta,delta.xy);return vec4(edges,0.0,0.0);}void main(){gl_FragColor=SMAAColorEdgeDetectionPS(v_uv,v_offsets,u_texture);}",
                    defines: {
                        SMAA_THRESHOLD: "0.1"
                    },
                    blending: Q,
                    depthTest: !1,
                    depthWrite: !1
                }), this.weightsMaterial = new Z({
                    uniforms: {
                        u_edgesTexture: {
                            value: this.edgesRenderTarget.texture
                        },
                        u_areaTexture: this.sharedUniforms.u_areaTexture,
                        u_searchTexture: this.sharedUniforms.u_searchTexture,
                        u_texelSize: null
                    },
                    vertexShader: Kt.precisionPrefix + "#define GLSLIFY 1\nattribute vec3 position;uniform vec2 u_texelSize;varying vec2 v_uv;varying vec4 v_offsets[3];varying vec2 v_pixcoord;void SMAABlendingWeightCalculationVS(vec2 texcoord){v_pixcoord=texcoord/u_texelSize;v_offsets[0]=texcoord.xyxy+u_texelSize.xyxy*vec4(-0.25,0.125,1.25,0.125);v_offsets[1]=texcoord.xyxy+u_texelSize.xyxy*vec4(-0.125,0.25,-0.125,-1.25);v_offsets[2]=vec4(v_offsets[0].xz,v_offsets[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*u_texelSize.xxyy*float(SMAA_MAX_SEARCH_STEPS);}void main(){v_uv=position.xy*0.5+0.5;SMAABlendingWeightCalculationVS(v_uv);gl_Position=vec4(position,1.0);}",
                    fragmentShader: Kt.precisionPrefix + "#define GLSLIFY 1\n#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * u_texelSize, 0.0 )\nuniform sampler2D u_edgesTexture;uniform sampler2D u_areaTexture;uniform sampler2D u_searchTexture;uniform vec2 u_texelSize;varying vec2 v_uv;varying vec4 v_offsets[3];varying vec2 v_pixcoord;vec2 round(vec2 x){return sign(x)*floor(abs(x)+0.5);}float SMAASearchLength(sampler2D searchTex,vec2 e,float bias,float scale){e.r=bias+e.r*scale;return 255.0*texture2D(searchTex,e,0.0).r;}float SMAASearchXLeft(sampler2D edgesTex,sampler2D searchTex,vec2 texcoord,float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<SMAA_MAX_SEARCH_STEPS;i++){e=texture2D(edgesTex,texcoord,0.0).rg;texcoord-=vec2(2.0,0.0)*u_texelSize;if(!(texcoord.x>end&&e.g>0.8281&&e.r==0.0))break;}texcoord.x+=0.25*u_texelSize.x;texcoord.x+=u_texelSize.x;texcoord.x+=2.0*u_texelSize.x;texcoord.x-=u_texelSize.x*SMAASearchLength(searchTex,e,0.0,0.5);return texcoord.x;}float SMAASearchXRight(sampler2D edgesTex,sampler2D searchTex,vec2 texcoord,float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<SMAA_MAX_SEARCH_STEPS;i++){e=texture2D(edgesTex,texcoord,0.0).rg;texcoord+=vec2(2.0,0.0)*u_texelSize;if(!(texcoord.x<end&&e.g>0.8281&&e.r==0.0))break;}texcoord.x-=0.25*u_texelSize.x;texcoord.x-=u_texelSize.x;texcoord.x-=2.0*u_texelSize.x;texcoord.x+=u_texelSize.x*SMAASearchLength(searchTex,e,0.5,0.5);return texcoord.x;}float SMAASearchYUp(sampler2D edgesTex,sampler2D searchTex,vec2 texcoord,float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<SMAA_MAX_SEARCH_STEPS;i++){e=texture2D(edgesTex,texcoord,0.0).rg;texcoord+=vec2(0.0,2.0)*u_texelSize;if(!(texcoord.y>end&&e.r>0.8281&&e.g==0.0))break;}texcoord.y-=0.25*u_texelSize.y;texcoord.y-=u_texelSize.y;texcoord.y-=2.0*u_texelSize.y;texcoord.y+=u_texelSize.y*SMAASearchLength(searchTex,e.gr,0.0,0.5);return texcoord.y;}float SMAASearchYDown(sampler2D edgesTex,sampler2D searchTex,vec2 texcoord,float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<SMAA_MAX_SEARCH_STEPS;i++){e=texture2D(edgesTex,texcoord,0.0).rg;texcoord-=vec2(0.0,2.0)*u_texelSize;if(!(texcoord.y<end&&e.r>0.8281&&e.g==0.0))break;}texcoord.y+=0.25*u_texelSize.y;texcoord.y+=u_texelSize.y;texcoord.y+=2.0*u_texelSize.y;texcoord.y-=u_texelSize.y*SMAASearchLength(searchTex,e.gr,0.5,0.5);return texcoord.y;}vec2 SMAAArea(sampler2D areaTex,vec2 dist,float e1,float e2,float offset){vec2 texcoord=float(SMAA_AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texcoord=SMAA_AREATEX_PIXEL_SIZE*texcoord+(0.5*SMAA_AREATEX_PIXEL_SIZE);texcoord.y+=SMAA_AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTex,texcoord,0.0).rg;}vec4 SMAABlendingWeightCalculationPS(vec2 texcoord,vec2 pixcoord,vec4 offset[3],sampler2D edgesTex,sampler2D areaTex,sampler2D searchTex,ivec4 subsampleIndices){vec4 weights=vec4(0.0,0.0,0.0,0.0);vec2 e=texture2D(edgesTex,texcoord).rg;if(e.g>0.0){vec2 d;vec2 coords;coords.x=SMAASearchXLeft(edgesTex,searchTex,offset[0].xy,offset[2].x);coords.y=offset[1].y;d.x=coords.x;float e1=texture2D(edgesTex,coords,0.0).r;coords.x=SMAASearchXRight(edgesTex,searchTex,offset[0].zw,offset[2].y);d.y=coords.x;d=d/u_texelSize.x-pixcoord.x;vec2 sqrt_d=sqrt(abs(d));coords.y-=1.0*u_texelSize.y;float e2=SMAASampleLevelZeroOffset(edgesTex,coords,ivec2(1,0)).r;weights.rg=SMAAArea(areaTex,sqrt_d,e1,e2,float(subsampleIndices.y));}if(e.r>0.0){vec2 d;vec2 coords;coords.y=SMAASearchYUp(edgesTex,searchTex,offset[1].xy,offset[2].z);coords.x=offset[0].x;d.x=coords.y;float e1=texture2D(edgesTex,coords,0.0).g;coords.y=SMAASearchYDown(edgesTex,searchTex,offset[1].zw,offset[2].w);d.y=coords.y;d=d/u_texelSize.y-pixcoord.y;vec2 sqrt_d=sqrt(abs(d));coords.y-=1.0*u_texelSize.y;float e2=SMAASampleLevelZeroOffset(edgesTex,coords,ivec2(0,1)).g;weights.ba=SMAAArea(areaTex,sqrt_d,e1,e2,float(subsampleIndices.x));}return weights;}void main(){gl_FragColor=SMAABlendingWeightCalculationPS(v_uv,v_pixcoord,v_offsets,u_edgesTexture,u_areaTexture,u_searchTexture,ivec4(0.0));}",
                    defines: {
                        SMAA_MAX_SEARCH_STEPS: "8",
                        SMAA_AREATEX_MAX_DISTANCE: "16",
                        SMAA_AREATEX_PIXEL_SIZE: "( 1.0 / vec2( 160.0, 560.0 ) )",
                        SMAA_AREATEX_SUBTEX_SIZE: "( 1.0 / 7.0 )"
                    },
                    transparent: !0,
                    blending: Q,
                    depthTest: !1,
                    depthWrite: !1
                }), this.material = this.createRawShaderMaterial({
                    uniforms: {
                        u_texture: {
                            value: null
                        },
                        u_weightsTexture: {
                            value: this.weightsRenderTarget.texture
                        },
                        u_texelSize: null
                    },
                    vertexShader: Kt.precisionPrefix + "#define GLSLIFY 1\nattribute vec3 position;uniform vec2 u_texelSize;varying vec2 v_uv;varying vec4 v_offsets[2];void SMAANeighborhoodBlendingVS(vec2 texcoord){v_offsets[0]=texcoord.xyxy+u_texelSize.xyxy*vec4(-1.0,0.0,0.0,1.0);v_offsets[1]=texcoord.xyxy+u_texelSize.xyxy*vec4(1.0,0.0,0.0,-1.0);}void main(){v_uv=position.xy*0.5+0.5;SMAANeighborhoodBlendingVS(v_uv);gl_Position=vec4(position,1.0);}",
                    fragmentShader: Kt.precisionPrefix + "#define GLSLIFY 1\nuniform sampler2D u_weightsTexture;uniform sampler2D u_texture;uniform vec2 u_texelSize;varying vec2 v_uv;varying vec4 v_offsets[2];vec4 SMAANeighborhoodBlendingPS(vec2 texcoord,vec4 offset[2],sampler2D colorTex,sampler2D blendTex){vec4 a;a.xz=texture2D(blendTex,texcoord).xz;a.y=texture2D(blendTex,offset[1].zw).g;a.w=texture2D(blendTex,offset[1].xy).a;if(dot(a,vec4(1.0,1.0,1.0,1.0))<1e-5){return texture2D(colorTex,texcoord,0.0);}else{vec2 offset;offset.x=a.a>a.b ? a.a :-a.b;offset.y=a.g>a.r ?-a.g : a.r;if(abs(offset.x)>abs(offset.y)){offset.y=0.0;}else{offset.x=0.0;}vec4 C=texture2D(colorTex,texcoord,0.0);texcoord+=sign(offset)*u_texelSize;vec4 Cop=texture2D(colorTex,texcoord,0.0);float s=abs(offset.x)>abs(offset.y)? abs(offset.x): abs(offset.y);C.xyz=pow(abs(C.xyz),vec3(2.2));Cop.xyz=pow(abs(Cop.xyz),vec3(2.2));vec4 mixed=mix(C,Cop,s);mixed.xyz=pow(abs(mixed.xyz),vec3(1.0/2.2));return mixed;}}void main(){gl_FragColor=SMAANeighborhoodBlendingPS(v_uv,v_offsets,u_texture,u_weightsTexture);}"
                })
            }
        }, {
            key: "setTextures",
            value: function(e, t) {
                var i = this.sharedUniforms.u_areaTexture.value = this._createTexture(e);
                i.format = ie, i.minFilter = se;
                var r = this.sharedUniforms.u_searchTexture.value = this._createTexture(t);
                r.magFilter = oe, r.minFilter = oe
            }
        }, {
            key: "updateTextures",
            value: function() {
                this.sharedUniforms.u_areaTexture.value.needsUpdate = !0, this.sharedUniforms.u_searchTexture.value.needsUpdate = !0
            }
        }, {
            key: "setPostprocessing",
            value: function(e) {
                r(c(i.prototype), "setPostprocessing", this).call(this, e);
                var t = e.width,
                    a = e.height;
                this.edgesRenderTarget.setSize(t, a), this.weightsRenderTarget.setSize(t, a)
            }
        }, {
            key: "dispose",
            value: function() {
                this.edgesRenderTarget && this.edgesRenderTarget.dispose(), this.weightsRenderTarget && this.weightsRenderTarget.dispose()
            }
        }, {
            key: "needsRender",
            value: function() {
                return !this.sharedUniforms.u_areaTexture.value.needsUpdate
            }
        }, {
            key: "render",
            value: function(e, t) {
                var a = Kt.getColorState();
                this.sharedUniforms.u_searchTexture.value || console.warn("You need to use Smaa.setImages() to set the smaa textures manually and assign to this class.");
                var n = Kt.renderer;
                n && (n.autoClear = !0, n.setClearColor(0, 0)), this.edgesMaterial.uniforms.u_texelSize = this.weightsMaterial.uniforms.u_texelSize = this.material.uniforms.u_texelSize = e.sharedUniforms.u_texelSize, this.edgesMaterial.uniforms.u_texture.value = e.fromTexture, e.renderMaterial(this.edgesMaterial, this.edgesRenderTarget), e.renderMaterial(this.weightsMaterial, this.weightsRenderTarget), Kt.setColorState(a), this.material.uniforms.u_texture.value = e.fromTexture, r(c(i.prototype), "render", this).call(this, e, t)
            }
        }, {
            key: "_createTexture",
            value: function(e) {
                var t = new pe(e);
                return t.generateMipmaps = !1, t.flipY = !1, t
            }
        }]), i
    }(),
    Xt = function(e) {
        n(i, Yt);
        var t = s(i);

        function i() {
            var e;
            f(this, i);
            for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
            return p(u(e = t.call.apply(t, [this].concat(a))), "ITERATION", 5), p(u(e), "amount", 1), p(u(e), "radius", 0), p(u(e), "threshold", .1), p(u(e), "smoothWidth", 1), p(u(e), "haloWidth", .8), p(u(e), "haloRGBShift", .03), p(u(e), "haloStrength", .21), p(u(e), "highPassMaterial", void 0), p(u(e), "highPassRenderTarget", void 0), p(u(e), "renderTargetsHorizontal", []), p(u(e), "renderTargetsVertical", []), p(u(e), "blurMaterials", []), p(u(e), "directionX", new L(1, 0)), p(u(e), "directionY", new L(0, 1)), e
        }
        return m(i, [{
            key: "init",
            value: function(e) {
                Object.assign(this, e), r(c(i.prototype), "init", this).call(this), this.highPassRenderTarget = Kt.createRenderTarget(1, 1, !0), this.highPassMaterial = this.createRawShaderMaterial({
                    uniforms: {
                        u_texture: {
                            value: null
                        },
                        u_luminosityThreshold: {
                            value: 1
                        },
                        u_smoothWidth: {
                            value: 1
                        },
                        u_haloWidth: {
                            value: 1
                        },
                        u_haloRGBShift: {
                            value: 1
                        },
                        u_haloStrength: {
                            value: 1
                        },
                        u_texelSize: null,
                        u_aspect: null
                    },
                    fragmentShader: "#define GLSLIFY 1\nuniform sampler2D u_texture;uniform float u_luminosityThreshold;uniform float u_smoothWidth;\n#ifdef USE_HALO\nuniform vec2 u_texelSize;uniform vec2 u_aspect;uniform float u_haloWidth;uniform float u_haloRGBShift;uniform float u_haloStrength;\n#endif\nvarying vec2 v_uv;void main(){vec4 texel=texture2D(u_texture,v_uv);vec3 luma=vec3(0.299,0.587,0.114);float v=dot(texel.xyz,luma);vec4 outputColor=vec4(0.0,0.0,0.0,1.0);float alpha=smoothstep(u_luminosityThreshold,u_luminosityThreshold+u_smoothWidth,v);outputColor=mix(outputColor,texel,alpha);gl_FragColor=vec4(outputColor.rgb,1.0);\n#ifdef USE_HALO\nvec2 toCenter=(v_uv-0.5)*u_aspect;vec2 ghostUv=1.0-(toCenter+0.5);vec2 ghostVec=(vec2(0.5)-ghostUv);vec2 direction=normalize(ghostVec);vec2 haloVec=direction*u_haloWidth;vec3 distortion=vec3(-u_texelSize.x,0.0,u_texelSize.x)*u_haloRGBShift;vec2 uv=ghostUv+haloVec;gl_FragColor.rgb+=vec3(texture2D(u_texture,uv+direction*distortion.r).r,texture2D(u_texture,uv+direction*distortion.g).g,texture2D(u_texture,uv+direction*distortion.b).b)*u_haloStrength*smoothstep(0.2,0.5,length(v_uv-0.5));\n#endif\n}"
                });
                for (var t = 0; t < this.ITERATION; t++) {
                    this.renderTargetsHorizontal.push(this.highPassRenderTarget.clone()), this.renderTargetsVertical.push(this.highPassRenderTarget.clone());
                    var a = 3 + 2 * t;
                    this.blurMaterials[t] = this.createRawShaderMaterial({
                        uniforms: {
                            u_texture: {
                                value: null
                            },
                            u_resolution: {
                                value: new L
                            },
                            u_direction: {
                                value: null
                            }
                        },
                        fragmentShader: "#define GLSLIFY 1\nvarying vec2 v_uv;uniform sampler2D u_texture;uniform vec2 u_resolution;uniform vec2 u_direction;float gaussianPdf(in float x,in float sigma){return 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;}void main(){vec2 invSize=1.0/u_resolution;float fSigma=float(SIGMA);float weightSum=gaussianPdf(0.0,fSigma);vec3 diffuseSum=texture2D(u_texture,v_uv).rgb*weightSum;for(int i=1;i<KERNEL_RADIUS;i++){float x=float(i);float w=gaussianPdf(x,fSigma);vec2 uvOffset=u_direction*invSize*x;vec3 sample1=texture2D(u_texture,v_uv+uvOffset).rgb;vec3 sample2=texture2D(u_texture,v_uv-uvOffset).rgb;diffuseSum+=(sample1+sample2)*w;weightSum+=2.0*w;}gl_FragColor=vec4(diffuseSum/weightSum,1.0);}",
                        defines: {
                            KERNEL_RADIUS: a,
                            SIGMA: a
                        }
                    })
                }
                this.material = this.createRawShaderMaterial({
                    uniforms: {
                        u_texture: {
                            value: null
                        },
                        u_bloomStrength: {
                            value: 1
                        },
                        u_bloomWeights: {
                            value: []
                        }
                    },
                    fragmentShader: "#define GLSLIFY 1\nvarying vec2 v_uv;uniform sampler2D u_texture;uniform sampler2D u_blurTexture0;\n#if ITERATION > 1\nuniform sampler2D u_blurTexture1;\n#endif\n#if ITERATION > 2\nuniform sampler2D u_blurTexture2;\n#endif\n#if ITERATION > 3\nuniform sampler2D u_blurTexture3;\n#endif\n#if ITERATION > 4\nuniform sampler2D u_blurTexture4;\n#endif\nuniform float u_bloomWeights[ITERATION];\n#include <common>\nvec3 dithering(vec3 color){float grid_position=rand(gl_FragCoord.xy);vec3 dither_shift_RGB=vec3(0.25/255.0,-0.25/255.0,0.25/255.0);dither_shift_RGB=mix(2.0*dither_shift_RGB,-2.0*dither_shift_RGB,grid_position);return color+dither_shift_RGB;}void main(){vec4 c=texture2D(u_texture,v_uv);vec3 luma=vec3(0.299,0.587,0.114);float v=dot(c.xyz,luma);float a=1.0-v;gl_FragColor=c+(u_bloomWeights[0]*texture2D(u_blurTexture0,v_uv)\n#if ITERATION > 1\n+u_bloomWeights[1]*texture2D(u_blurTexture1,v_uv)\n#endif\n#if ITERATION > 2\n+u_bloomWeights[2]*texture2D(u_blurTexture2,v_uv)\n#endif\n#if ITERATION > 3\n+u_bloomWeights[3]*texture2D(u_blurTexture3,v_uv)\n#endif\n#if ITERATION > 4\n+u_bloomWeights[4]*texture2D(u_blurTexture4,v_uv)\n#endif\n)*a;gl_FragColor.rgb=dithering(gl_FragColor.rgb);gl_FragColor.a=c.a;}",
                    blending: Q,
                    defines: {
                        ITERATION: this.ITERATION
                    }
                });
                for (var n = 0; n < this.ITERATION; n++) this.material.uniforms["u_blurTexture" + n] = {
                    value: this.renderTargetsVertical[n].texture
                }
            }
        }, {
            key: "setPostprocessing",
            value: function(e) {
                r(c(i.prototype), "setPostprocessing", this).call(this, e);
                var t = e.width,
                    a = e.height,
                    n = Math.ceil(t / 2),
                    o = Math.ceil(a / 2);
                this.highPassRenderTarget.setSize(n, o);
                for (var s = 0; s < this.ITERATION; s++) this.renderTargetsHorizontal[s].setSize(n, o), this.renderTargetsVertical[s].setSize(n, o), this.blurMaterials[s].uniforms.u_resolution.value.set(n, o), n = Math.ceil(n / 2), o = Math.ceil(o / 2)
            }
        }, {
            key: "dispose",
            value: function() {
                this.highPassRenderTarget && this.highPassRenderTarget.dispose();
                for (var e = 0; e < this.ITERATION; e++) this.renderTargetsHorizontal[e] && this.renderTargetsHorizontal[e].dispose(), this.renderTargetsVertical[e] && this.renderTargetsVertical[e].dispose()
            }
        }, {
            key: "needsRender",
            value: function() {
                return !!this.amount
            }
        }, {
            key: "render",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.highPassMaterial.uniforms.u_texture.value = e.fromTexture, this.highPassMaterial.uniforms.u_luminosityThreshold.value = this.threshold, this.highPassMaterial.uniforms.u_smoothWidth.value = this.smoothWidth, this.highPassMaterial.uniforms.u_haloWidth.value = this.haloWidth, this.highPassMaterial.uniforms.u_haloRGBShift.value = this.haloRGBShift * e.width, this.highPassMaterial.uniforms.u_haloStrength.value = this.haloStrength, this.highPassMaterial.uniforms.u_texelSize = e.sharedUniforms.u_texelSize, this.highPassMaterial.uniforms.u_aspect = e.sharedUniforms.u_aspect;
                var a = this.haloStrength > 0;
                this.highPassMaterial.defines.USE_HALO !== a && (this.highPassMaterial.defines.USE_HALO = a, this.highPassMaterial.needsUpdate = !0), e.renderMaterial(this.highPassMaterial, this.highPassRenderTarget);
                for (var n = this.highPassRenderTarget, o = 0; o < this.ITERATION; o++) {
                    var s = this.blurMaterials[o];
                    s.uniforms.u_texture.value = n.texture, s.uniforms.u_direction.value = this.directionX, e.renderMaterial(s, this.renderTargetsHorizontal[o]), s.uniforms.u_texture.value = this.renderTargetsHorizontal[o].texture, s.uniforms.u_direction.value = this.directionY, e.renderMaterial(s, this.renderTargetsVertical[o]), n = this.renderTargetsVertical[o]
                }
                this.material.uniforms.u_texture.value = e.fromTexture;
                for (var l = 0; l < this.ITERATION; l++) {
                    var u = (this.ITERATION - l) / this.ITERATION;
                    this.material.uniforms.u_bloomWeights.value[l] = this.amount * (u + (1.2 - 2 * u) * this.radius) / Math.pow(2, this.ITERATION - l - 1)
                }
                r(c(i.prototype), "render", this).call(this, e, t)
            }
        }]), i
    }(),
    Zt = new(function() {
        function e() {
            f(this, e), p(this, "material", null), p(this, "renderTarget", null)
        }
        return m(e, [{
            key: "getBlur9Material",
            value: function() {
                var e = Kt.MAX_VARYING_VECTORS > 8;
                return this.blur9Material || (this.blur9Material = new Z({
                    uniforms: {
                        u_texture: {
                            value: null
                        },
                        u_delta: {
                            value: new L
                        }
                    },
                    vertexShader: e ? Kt.precisionPrefix + "#define GLSLIFY 1\nattribute vec3 position;uniform vec2 u_delta;varying vec2 v_uv[9];void main(){vec2 uv=position.xy*0.5+0.5;v_uv[0]=uv;vec2 delta=u_delta;v_uv[1]=uv-delta;v_uv[2]=uv+delta;delta+=u_delta;v_uv[3]=uv-delta;v_uv[4]=uv+delta;delta+=u_delta;v_uv[5]=uv-delta;v_uv[6]=uv+delta;delta+=u_delta;v_uv[7]=uv-delta;v_uv[8]=uv+delta;gl_Position=vec4(position,1.0);}" : Kt.vertexShader,
                    fragmentShader: Kt.precisionPrefix + (e ? "#define GLSLIFY 1\nuniform sampler2D u_texture;varying vec2 v_uv[9];void main(){vec4 color=texture2D(u_texture,v_uv[0])*0.1633;color+=texture2D(u_texture,v_uv[1])*0.1531;color+=texture2D(u_texture,v_uv[2])*0.1531;color+=texture2D(u_texture,v_uv[3])*0.12245;color+=texture2D(u_texture,v_uv[4])*0.12245;color+=texture2D(u_texture,v_uv[5])*0.0918;color+=texture2D(u_texture,v_uv[6])*0.0918;color+=texture2D(u_texture,v_uv[7])*0.051;color+=texture2D(u_texture,v_uv[8])*0.051;gl_FragColor=color;}" : "#define GLSLIFY 1\nuniform sampler2D u_texture;uniform vec2 u_delta;varying vec2 v_uv;void main(){vec4 color=texture2D(u_texture,v_uv)*0.1633;vec2 delta=u_delta;color+=texture2D(u_texture,v_uv-delta)*0.1531;color+=texture2D(u_texture,v_uv+delta)*0.1531;delta+=u_delta;color+=texture2D(u_texture,v_uv-delta)*0.12245;color+=texture2D(u_texture,v_uv+delta)*0.12245;delta+=u_delta;color+=texture2D(u_texture,v_uv-delta)*0.0918;color+=texture2D(u_texture,v_uv+delta)*0.0918;delta+=u_delta;color+=texture2D(u_texture,v_uv-delta)*0.051;color+=texture2D(u_texture,v_uv+delta)*0.051;gl_FragColor=color;}"),
                    blending: Q
                })), this.blur9Material
            }
        }, {
            key: "blur",
            value: function(e, t, i, r, a, n) {
                var o = Math.ceil(i.width * t) || 0,
                    s = Math.ceil(i.height * t) || 0;
                this.material || (this.material = this.getBlur9Material()), r || (this.renderTarget = Kt.createRenderTarget(1, 1), r = this.renderTarget), r.setSize(o, s), a ? n || a.setSize(i.width, i.height) : a = i, this.material.uniforms.u_texture.value = i.texture || i, this.material.uniforms.u_delta.value.set(e / o * .25, 0), Kt.render(this.material, r), this.material.uniforms.u_texture.value = r.texture || r, this.material.uniforms.u_delta.value.set(0, e / s * .25), Kt.render(this.material, a)
            }
        }]), e
    }()),
    Qt = function(e) {
        n(i, Yt);
        var t = s(i);

        function i() {
            var e;
            f(this, i);
            for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
            return p(u(e = t.call.apply(t, [this].concat(a))), "vignetteFrom", .6), p(u(e), "vignetteTo", 1.6), p(u(e), "vignetteAspect", new L), p(u(e), "vignetteColor", new w), p(u(e), "saturation", 1), p(u(e), "contrast", 0), p(u(e), "brightness", 1), p(u(e), "tintColor", new w), p(u(e), "tintOpacity", 1), p(u(e), "bgColor", new w), p(u(e), "opacity", 1), p(u(e), "blurRatio", 1), p(u(e), "transitionRatio", 1), p(u(e), "transitionDirection", 1), e
        }
        return m(i, [{
            key: "init",
            value: function(e) {
                Object.assign(this, e), r(c(i.prototype), "init", this).call(this), this.material = this.createRawShaderMaterial({
                    uniforms: {
                        u_resolution: {
                            value: new L
                        },
                        u_texture: {
                            value: null
                        },
                        u_vignetteFrom: {
                            value: 0
                        },
                        u_vignetteTo: {
                            value: 0
                        },
                        u_vignetteAspect: {
                            value: this.vignetteAspect
                        },
                        u_vignetteColor: {
                            value: this.vignetteColor
                        },
                        u_saturation: {
                            value: 0
                        },
                        u_contrast: {
                            value: 0
                        },
                        u_brightness: {
                            value: 0
                        },
                        u_tintColor: {
                            value: this.tintColor
                        },
                        u_tintOpacity: {
                            value: 0
                        },
                        u_bgColor: {
                            value: this.bgColor
                        },
                        u_opacity: {
                            value: 0
                        },
                        u_ditherSeed: {
                            value: 0
                        },
                        u_fadeWhite: {
                            value: 0
                        },
                        u_fadeBlack: {
                            value: 0
                        }
                    },
                    fragmentShader: "#define GLSLIFY 1\nvarying vec2 v_uv;uniform sampler2D u_texture;uniform vec3 u_bgColor;uniform float u_opacity;uniform float u_vignetteFrom;uniform float u_vignetteTo;uniform vec2 u_vignetteAspect;uniform vec3 u_vignetteColor;uniform float u_saturation;uniform float u_contrast;uniform float u_brightness;uniform vec3 u_tintColor;uniform float u_tintOpacity;uniform float u_ditherSeed;uniform float u_fadeWhite;uniform float u_fadeBlack;float hash13(vec3 p3){p3=fract(p3*.1031);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);}vec3 screen(vec3 cb,vec3 cs){return cb+cs-(cb*cs);}vec3 colorDodge(vec3 cb,vec3 cs){return mix(min(vec3(1.0),cb/(1.0-cs)),vec3(1.0),step(vec3(1.0),cs));}void main(){vec2 uv=v_uv;vec4 color4=texture2D(u_texture,uv);vec3 color=color4.rgb;float luma=dot(color,vec3(0.299,0.587,0.114));color=mix(vec3(luma),color,1.0+u_saturation);color=0.5+(1.0+u_contrast)*(color-0.5);color+=u_brightness;color=mix(color,screen(colorDodge(color,u_tintColor),u_tintColor),u_tintOpacity);float d=length((uv-0.5)*u_vignetteAspect)*2.0;color=mix(color,u_vignetteColor,smoothstep(u_vignetteFrom,u_vignetteTo,d));gl_FragColor=vec4(mix(u_bgColor,color,u_opacity)+hash13(vec3(gl_FragCoord.xy,u_ditherSeed))/255.0,1.0);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),u_fadeWhite);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(0.0),u_fadeBlack);}"
                }), this.blurRenderTarget = Kt.createRenderTarget(1, 1)
            }
        }, {
            key: "render",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    a = e.width,
                    n = e.height,
                    o = this.material.uniforms;
                o.u_vignetteFrom.value = this.vignetteFrom, o.u_vignetteTo.value = this.vignetteTo;
                var s = n / Math.sqrt(a * a + n * n);
                if (this.vignetteAspect.set(a / n * s, s), o.u_saturation.value = this.saturation - 1, o.u_brightness.value = this.brightness - 1, o.u_tintOpacity.value = this.tintOpacity, o.u_opacity.value = this.opacity, o.u_fadeWhite.value = lt.fadeWhite, o.u_fadeBlack.value = lt.fadeBlack, o.u_contrast.value = this.contrast, o.u_ditherSeed.value = 1e3 * Math.random(), o.u_resolution.value.copy(e.resolution), this.material.uniforms.u_texture.value = e.fromTexture, e.renderMaterial(this.material, e.toRenderTarget), this.blurRatio > 0) {
                    var l = this.blurRatio / e.camera.zoom * n / 500;
                    Zt.blur(2 * l, .5, e.toRenderTarget), Zt.blur(4 * l, .25, e.toRenderTarget), Zt.blur(8 * l, .25, e.toRenderTarget)
                }
                r(c(i.prototype), "render", this).call(this, e, t)
            }
        }]), i
    }(),
    Jt = function(e) {
        n(i, Yt);
        var t = s(i);

        function i() {
            var e;
            f(this, i);
            for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
            return p(u(e = t.call.apply(t, [this].concat(a))), "amount", 1), p(u(e), "fNumber", .07), p(u(e), "focusDistance", 5), p(u(e), "useCameraFov", !1), p(u(e), "focalLength", .463), p(u(e), "kFilmHeight", 36), p(u(e), "quality", 1), p(u(e), "_prevQuality", -1), p(u(e), "useFloatTexture", !1), p(u(e), "_prevUseFloatTexture", null), p(u(e), "useAdditionalBlur", !0), p(u(e), "_halfWidth", 0), p(u(e), "_halfHeight", 0), e
        }
        return m(i, [{
            key: "init",
            value: function(e) {
                Object.assign(this, {
                    sharedUniforms: {
                        u_depthTexture: {
                            value: null
                        },
                        u_texelSize: {
                            value: null
                        },
                        u_focusDistance: {
                            value: 0
                        },
                        u_fNumber: {
                            value: 0
                        },
                        u_lensCoeff: {
                            value: 0
                        },
                        u_maxCoC: {
                            value: 0
                        },
                        u_rcpMaxCoC: {
                            value: 0
                        },
                        u_rcpAspect: {
                            value: 0
                        },
                        u_cameraNear: {
                            value: 0
                        },
                        u_cameraFar: {
                            value: 0
                        },
                        u_amount: {
                            value: 0
                        },
                        u_halfTexelSize: {
                            value: new L
                        }
                    }
                }, e), r(c(i.prototype), "init", this).call(this), this.rt2 = Kt.createRenderTarget(1, 1, !0), this.rt3 = Kt.createRenderTarget(1, 1, !0), this.cocMaterial = this.createRawShaderMaterial({
                    uniforms: {
                        u_texture: {
                            value: null
                        },
                        u_hashNoise: {
                            value: 0
                        },
                        u_depthTexture: this.sharedUniforms.u_depthTexture,
                        u_texelSize: this.sharedUniforms.u_texelSize,
                        u_focusDistance: this.sharedUniforms.u_focusDistance,
                        u_lensCoeff: this.sharedUniforms.u_lensCoeff,
                        u_maxCoC: this.sharedUniforms.u_maxCoC,
                        u_rcpMaxCoC: this.sharedUniforms.u_rcpMaxCoC,
                        u_cameraNear: this.sharedUniforms.u_cameraNear,
                        u_cameraFar: this.sharedUniforms.u_cameraFar
                    },
                    fragmentShader: "#define GLSLIFY 1\nuniform sampler2D u_texture;uniform sampler2D u_depthTexture;uniform vec2 u_texelSize;uniform float u_focusDistance;uniform float u_lensCoeff;uniform float u_maxCoC;uniform float u_rcpMaxCoC;uniform float u_cameraNear;uniform float u_cameraFar;varying vec2 v_uv;float max3(vec3 xyz){return max(xyz.x,max(xyz.y,xyz.z));}\n#ifndef USE_FLOAT\nuniform float u_hashNoise;float hash13(vec3 p3){p3=fract(p3*.1031);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);}\n#endif\nfloat getViewZ(vec2 uv){float depth=texture2D(u_depthTexture,uv).r*2.0-1.0;return 2.0*u_cameraNear*u_cameraFar/(u_cameraFar+u_cameraNear-depth*(u_cameraFar-u_cameraNear));}void main(){vec3 duv=u_texelSize.xyx*vec3(0.5,0.5,-0.5);vec3 c0=texture2D(u_texture,v_uv-duv.xy).rgb;vec3 c1=texture2D(u_texture,v_uv-duv.zy).rgb;vec3 c2=texture2D(u_texture,v_uv+duv.zy).rgb;vec3 c3=texture2D(u_texture,v_uv+duv.xy).rgb;vec2 uvAlt=v_uv;float d0=getViewZ(uvAlt-duv.xy);float d1=getViewZ(uvAlt-duv.zy);float d2=getViewZ(uvAlt+duv.zy);float d3=getViewZ(uvAlt+duv.xy);vec4 depths=vec4(d0,d1,d2,d3);float focusDistance=u_focusDistance;vec4 cocs=(depths-focusDistance)*u_lensCoeff/depths;cocs=clamp(cocs,-u_maxCoC,u_maxCoC);vec4 weights=clamp(abs(cocs)*u_rcpMaxCoC,vec4(0.0),vec4(1.0));weights.x*=1.0/(max3(c0)+1.0);weights.y*=1.0/(max3(c1)+1.0);weights.z*=1.0/(max3(c2)+1.0);weights.w*=1.0/(max3(c3)+1.0);vec3 avg=c0*weights.x+c1*weights.y+c2*weights.z+c3*weights.w;avg/=dot(weights,vec4(1.0));float coc=dot(cocs,vec4(0.25));avg*=smoothstep(0.0,u_texelSize.y*2.0,abs(coc));gl_FragColor=vec4(avg,coc);\n#ifndef USE_FLOAT\ngl_FragColor=sign(gl_FragColor)*sqrt(abs(gl_FragColor));gl_FragColor=gl_FragColor*0.5+0.5+hash13(vec3(gl_FragCoord.xy,u_hashNoise))/255.0;\n#endif\n}"
                }), this.simMaterial = this.createRawShaderMaterial({
                    uniforms: {
                        u_cocTexture: {
                            value: null
                        },
                        u_cocTexelSize: this.sharedUniforms.u_halfTexelSize,
                        u_rcpAspect: this.sharedUniforms.u_rcpAspect,
                        u_maxCoC: this.sharedUniforms.u_maxCoC
                    },
                    fragmentShader: "#define GLSLIFY 1\n#if QUALITY == 0\nconst int kSampleCount=16;vec2 kDiskKernel[kSampleCount];void initKernel(){kDiskKernel[0]=vec2(0.0,0.0);kDiskKernel[1]=vec2(0.54545456,0.0);kDiskKernel[2]=vec2(0.16855472,0.5187581);kDiskKernel[3]=vec2(-0.44128203,0.3206101);kDiskKernel[4]=vec2(-0.44128197,-0.3206102);kDiskKernel[5]=vec2(0.1685548,-0.5187581);kDiskKernel[6]=vec2(1.0,0.0);kDiskKernel[7]=vec2(0.809017,0.58778524);kDiskKernel[8]=vec2(0.30901697,0.95105654);kDiskKernel[9]=vec2(-0.30901703,0.9510565);kDiskKernel[10]=vec2(-0.80901706,0.5877852);kDiskKernel[11]=vec2(-1.0,0.0);kDiskKernel[12]=vec2(-0.80901694,-0.58778536);kDiskKernel[13]=vec2(-0.30901664,-0.9510566);kDiskKernel[14]=vec2(0.30901712,-0.9510565);kDiskKernel[15]=vec2(0.80901694,-0.5877853);}\n#endif\n#if QUALITY == 1\nconst int kSampleCount=22;vec2 kDiskKernel[kSampleCount];void initKernel(){kDiskKernel[0]=vec2(0.0,0.0);kDiskKernel[1]=vec2(0.53333336,0.0);kDiskKernel[2]=vec2(0.3325279,0.4169768);kDiskKernel[3]=vec2(-0.11867785,0.5199616);kDiskKernel[4]=vec2(-0.48051673,0.2314047);kDiskKernel[5]=vec2(-0.48051673,-0.23140468);kDiskKernel[6]=vec2(-0.11867763,-0.51996166);kDiskKernel[7]=vec2(0.33252785,-0.4169769);kDiskKernel[8]=vec2(1.0,0.0);kDiskKernel[9]=vec2(0.90096885,0.43388376);kDiskKernel[10]=vec2(0.6234898,0.7818315);kDiskKernel[11]=vec2(0.22252098,0.9749279);kDiskKernel[12]=vec2(-0.22252095,0.9749279);kDiskKernel[13]=vec2(-0.62349,0.7818314);kDiskKernel[14]=vec2(-0.90096885,0.43388382);kDiskKernel[15]=vec2(-1.0,0.0);kDiskKernel[16]=vec2(-0.90096885,-0.43388376);kDiskKernel[17]=vec2(-0.6234896,-0.7818316);kDiskKernel[18]=vec2(-0.22252055,-0.974928);kDiskKernel[19]=vec2(0.2225215,-0.9749278);kDiskKernel[20]=vec2(0.6234897,-0.7818316);kDiskKernel[21]=vec2(0.90096885,-0.43388376);}\n#endif\n#if QUALITY == 2\nconst int kSampleCount=43;vec2 kDiskKernel[kSampleCount];void initKernel(){kDiskKernel[0]=vec2(0.0,0.0);kDiskKernel[1]=vec2(0.36363637,0.0);kDiskKernel[2]=vec2(0.22672357,0.28430238);kDiskKernel[3]=vec2(-0.08091671,0.35451925);kDiskKernel[4]=vec2(-0.32762504,0.15777594);kDiskKernel[5]=vec2(-0.32762504,-0.15777591);kDiskKernel[6]=vec2(-0.08091656,-0.35451928);kDiskKernel[7]=vec2(0.22672352,-0.2843024);kDiskKernel[8]=vec2(0.6818182,0.0);kDiskKernel[9]=vec2(0.614297,0.29582983);kDiskKernel[10]=vec2(0.42510667,0.5330669);kDiskKernel[11]=vec2(0.15171885,0.6647236);kDiskKernel[12]=vec2(-0.15171883,0.6647236);kDiskKernel[13]=vec2(-0.4251068,0.53306687);kDiskKernel[14]=vec2(-0.614297,0.29582986);kDiskKernel[15]=vec2(-0.6818182,0);kDiskKernel[16]=vec2(-0.614297,-0.29582983);kDiskKernel[17]=vec2(-0.42510656,-0.53306705);kDiskKernel[18]=vec2(-0.15171856,-0.66472363);kDiskKernel[19]=vec2(0.1517192,-0.6647235);kDiskKernel[20]=vec2(0.4251066,-0.53306705);kDiskKernel[21]=vec2(0.614297,-0.29582983);kDiskKernel[22]=vec2(1.0,0.0);kDiskKernel[23]=vec2(0.9555728,0.2947552);kDiskKernel[24]=vec2(0.82623875,0.5633201);kDiskKernel[25]=vec2(0.6234898,0.7818315);kDiskKernel[26]=vec2(0.36534098,0.93087375);kDiskKernel[27]=vec2(0.07473,0.9972038);kDiskKernel[28]=vec2(-0.22252095,0.9749279);kDiskKernel[29]=vec2(-0.50000006,0.8660254);kDiskKernel[30]=vec2(-0.73305196,0.6801727);kDiskKernel[31]=vec2(-0.90096885,0.43388382);kDiskKernel[32]=vec2(-0.98883086,0.14904208);kDiskKernel[33]=vec2(-0.9888308,-0.14904249);kDiskKernel[34]=vec2(-0.90096885,-0.43388376);kDiskKernel[35]=vec2(-0.73305184,-0.6801728);kDiskKernel[36]=vec2(-0.4999999,-0.86602545);kDiskKernel[37]=vec2(-0.222521,-0.9749279);kDiskKernel[38]=vec2(0.07473029,-0.99720377);kDiskKernel[39]=vec2(0.36534148,-0.9308736);kDiskKernel[40]=vec2(0.6234897,-0.7818316);kDiskKernel[41]=vec2(0.8262388,-0.56332);kDiskKernel[42]=vec2(0.9555729,-0.29475483);}\n#endif\n#if QUALITY == 3\nconst int kSampleCount=71;vec2 kDiskKernel[kSampleCount];void initKernel(){kDiskKernel[0]=vec2(0,0);kDiskKernel[1]=vec2(0.2758621,0.0);kDiskKernel[2]=vec2(0.1719972,0.21567768);kDiskKernel[3]=vec2(-0.061385095,0.26894566);kDiskKernel[4]=vec2(-0.24854316,0.1196921);kDiskKernel[5]=vec2(-0.24854316,-0.11969208);kDiskKernel[6]=vec2(-0.061384983,-0.2689457);kDiskKernel[7]=vec2(0.17199717,-0.21567771);kDiskKernel[8]=vec2(0.51724136,0.0);kDiskKernel[9]=vec2(0.46601835,0.22442262);kDiskKernel[10]=vec2(0.32249472,0.40439558);kDiskKernel[11]=vec2(0.11509705,0.50427306);kDiskKernel[12]=vec2(-0.11509704,0.50427306);kDiskKernel[13]=vec2(-0.3224948,0.40439552);kDiskKernel[14]=vec2(-0.46601835,0.22442265);kDiskKernel[15]=vec2(-0.51724136,0.0);kDiskKernel[16]=vec2(-0.46601835,-0.22442262);kDiskKernel[17]=vec2(-0.32249463,-0.40439564);kDiskKernel[18]=vec2(-0.11509683,-0.5042731);kDiskKernel[19]=vec2(0.11509732,-0.504273);kDiskKernel[20]=vec2(0.32249466,-0.40439564);kDiskKernel[21]=vec2(0.46601835,-0.22442262);kDiskKernel[22]=vec2(0.7586207,0.0);kDiskKernel[23]=vec2(0.7249173,0.22360738);kDiskKernel[24]=vec2(0.6268018,0.4273463);kDiskKernel[25]=vec2(0.47299224,0.59311354);kDiskKernel[26]=vec2(0.27715522,0.7061801);kDiskKernel[27]=vec2(0.056691725,0.75649947);kDiskKernel[28]=vec2(-0.168809,0.7396005);kDiskKernel[29]=vec2(-0.3793104,0.65698475);kDiskKernel[30]=vec2(-0.55610836,0.51599306);kDiskKernel[31]=vec2(-0.6834936,0.32915324);kDiskKernel[32]=vec2(-0.7501475,0.113066405);kDiskKernel[33]=vec2(-0.7501475,-0.11306671);kDiskKernel[34]=vec2(-0.6834936,-0.32915318);kDiskKernel[35]=vec2(-0.5561083,-0.5159932);kDiskKernel[36]=vec2(-0.37931028,-0.6569848);kDiskKernel[37]=vec2(-0.16880904,-0.7396005);kDiskKernel[38]=vec2(0.056691945,-0.7564994);kDiskKernel[39]=vec2(0.2771556,-0.7061799);kDiskKernel[40]=vec2(0.47299215,-0.59311366);kDiskKernel[41]=vec2(0.62680185,-0.4273462);kDiskKernel[42]=vec2(0.72491735,-0.22360711);kDiskKernel[43]=vec2(1.0,0.0);kDiskKernel[44]=vec2(0.9749279,0.22252093);kDiskKernel[45]=vec2(0.90096885,0.43388376);kDiskKernel[46]=vec2(0.7818315,0.6234898);kDiskKernel[47]=vec2(0.6234898,0.7818315);kDiskKernel[48]=vec2(0.43388364,0.9009689);kDiskKernel[49]=vec2(0.22252098,0.9749279);kDiskKernel[50]=vec2(0.0,1.0);kDiskKernel[51]=vec2(-0.22252095,0.9749279);kDiskKernel[52]=vec2(-0.43388385,0.90096885);kDiskKernel[53]=vec2(-0.62349,0.7818314);kDiskKernel[54]=vec2(-0.7818317,0.62348956);kDiskKernel[55]=vec2(-0.90096885,0.43388382);kDiskKernel[56]=vec2(-0.9749279,0.22252093);kDiskKernel[57]=vec2(-1.0,0.0);kDiskKernel[58]=vec2(-0.9749279,-0.22252087);kDiskKernel[59]=vec2(-0.90096885,-0.43388376);kDiskKernel[60]=vec2(-0.7818314,-0.6234899);kDiskKernel[61]=vec2(-0.6234896,-0.7818316);kDiskKernel[62]=vec2(-0.43388346,-0.900969);kDiskKernel[63]=vec2(-0.22252055,-0.974928);kDiskKernel[64]=vec2(0.0,-1.0);kDiskKernel[65]=vec2(0.2225215,-0.9749278);kDiskKernel[66]=vec2(0.4338835,-0.90096897);kDiskKernel[67]=vec2(0.6234897,-0.7818316);kDiskKernel[68]=vec2(0.78183144,-0.62348986);kDiskKernel[69]=vec2(0.90096885,-0.43388376);kDiskKernel[70]=vec2(0.9749279,-0.22252086);}\n#endif\nuniform sampler2D u_cocTexture;uniform vec2 u_cocTexelSize;uniform float u_rcpAspect;uniform float u_maxCoC;varying vec2 v_uv;void main(){initKernel();vec4 samp0=texture2D(u_cocTexture,v_uv);\n#ifndef USE_FLOAT\nsamp0=samp0*2.0-1.0;samp0=sign(samp0)*samp0*samp0;\n#endif\nvec4 bgAcc=vec4(0.0);vec4 fgAcc=vec4(0.0);for(int si=0;si<kSampleCount;si++){vec2 disp=kDiskKernel[si]*u_maxCoC;float dist=length(disp);vec2 duv=vec2(disp.x*u_rcpAspect,disp.y);vec4 samp=texture2D(u_cocTexture,v_uv+duv);\n#ifndef USE_FLOAT\nsamp=samp*2.0-1.0;samp=sign(samp)*samp*samp;\n#endif\nfloat bgCoC=max(min(samp0.a,samp.a),0.0);float margin=u_cocTexelSize.y*2.0;float bgWeight=clamp((bgCoC-dist+margin)/margin,0.0,1.0);float fgWeight=clamp((-samp.a-dist+margin)/margin,0.0,1.0);fgWeight*=step(u_cocTexelSize.y,-samp.a);bgAcc+=vec4(samp.rgb,1.0)*bgWeight;fgAcc+=vec4(samp.rgb,1.0)*fgWeight;}bgAcc.rgb/=bgAcc.a+step(bgAcc.a,0.0);fgAcc.rgb/=fgAcc.a+step(fgAcc.a,0.0);bgAcc.a=smoothstep(u_cocTexelSize.y,u_cocTexelSize.y*2.0,samp0.a);fgAcc.a*=3.14159265359/float(kSampleCount);vec3 rgb=vec3(0.0);rgb=mix(rgb,bgAcc.rgb,clamp(bgAcc.a,0.0,1.0));rgb=mix(rgb,fgAcc.rgb,clamp(fgAcc.a,0.0,1.0));float alpha=(1.0-clamp(bgAcc.a,0.0,1.0))*(1.0-clamp(fgAcc.a,0.0,1.0));gl_FragColor=vec4(rgb,alpha);}"
                }), this.blurMaterial = this.createRawShaderMaterial({
                    uniforms: {
                        u_bokehTexture: {
                            value: null
                        },
                        u_bokehTexelSize: this.sharedUniforms.u_halfTexelSize
                    },
                    fragmentShader: "#define GLSLIFY 1\nuniform sampler2D u_bokehTexture;uniform vec2 u_bokehTexelSize;varying vec2 v_uv;void main(){vec4 duv=u_bokehTexelSize.xyxy*vec4(1.0,1.0,-1.0,0.0);vec4 acc;acc=texture2D(u_bokehTexture,v_uv-duv.xy);acc+=texture2D(u_bokehTexture,v_uv-duv.wy)*2.0;acc+=texture2D(u_bokehTexture,v_uv-duv.zy);acc+=texture2D(u_bokehTexture,v_uv+duv.zw)*2.0;acc+=texture2D(u_bokehTexture,v_uv)*4.0;acc+=texture2D(u_bokehTexture,v_uv+duv.xw)*2.0;acc+=texture2D(u_bokehTexture,v_uv+duv.zy);acc+=texture2D(u_bokehTexture,v_uv+duv.wy)*2.0;acc+=texture2D(u_bokehTexture,v_uv+duv.xy);gl_FragColor=acc*0.0625;}"
                }), this.material = this.createRawShaderMaterial({
                    uniforms: {
                        u_texture: {
                            value: null
                        },
                        u_blurTexture: {
                            value: null
                        },
                        u_amount: this.sharedUniforms.u_amount
                    },
                    fragmentShader: Kt.precisionPrefix + "#define GLSLIFY 1\nvarying vec2 v_uv;uniform sampler2D u_texture;uniform sampler2D u_blurTexture;uniform float u_amount;void main(){vec4 cs=texture2D(u_texture,v_uv);vec4 cb=texture2D(u_blurTexture,v_uv);vec3 rgb=cs.rgb*cb.a+cb.rgb;gl_FragColor=mix(cs,vec4(rgb,cs.a),u_amount);}"
                })
            }
        }, {
            key: "dispose",
            value: function() {
                this.rt1 && this.rt1.dispose(), this.rt2.dispose(), this.rt3.dispose()
            }
        }, {
            key: "needsRender",
            value: function() {
                return this.amount > 0
            }
        }, {
            key: "_calculateFocalLength",
            value: function(e, t) {
                return .5 * t / Math.tan(.5 * e)
            }
        }, {
            key: "_calculateMaxCoCRadius",
            value: function(e, t) {
                var i = 4 * t + 6;
                return Math.min(.05, i / e)
            }
        }, {
            key: "setPostprocessing",
            value: function(e) {
                r(c(i.prototype), "setPostprocessing", this).call(this, e);
                var t = e.width,
                    a = e.height,
                    n = Math.ceil(t / 2),
                    o = Math.ceil(a / 2);
                this._halfWidth = n, this._halfHeight = o, this.rt1 && this.rt1.setSize(n, o), this.rt2.setSize(n, o), this.rt3.setSize(n, o), this.sharedUniforms.u_halfTexelSize.value.set(1 / n, 1 / o)
            }
        }, {
            key: "render",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    a = this._prevQuality !== this.quality,
                    n = this._prevUseFloatTexture !== this.useFloatTexture,
                    o = this.useCameraFov ? this._calculateFocalLength(e.sharedUniforms.u_cameraFovRad.value, e.camera.getFilmHeight()) : this.focalLength,
                    s = this.focusDistance,
                    l = this.fNumber,
                    u = o * o / (l * (s - o) * this.kFilmHeight * 2),
                    h = this._calculateMaxCoCRadius(e.height, this.quality);
                this.sharedUniforms.u_amount.value = this.amount, this.sharedUniforms.u_texelSize.value = e.sharedUniforms.u_texelSize.value, this.sharedUniforms.u_depthTexture.value = e.sharedUniforms.u_sceneDepthTexture.value, this.sharedUniforms.u_cameraNear.value = e.sharedUniforms.u_cameraNear.value, this.sharedUniforms.u_cameraFar.value = e.sharedUniforms.u_cameraFar.value, this.sharedUniforms.u_focusDistance.value = s, this.sharedUniforms.u_fNumber.value = l, this.sharedUniforms.u_lensCoeff.value = u, this.sharedUniforms.u_maxCoC.value = h, this.sharedUniforms.u_rcpMaxCoC.value = 1 / h, this.sharedUniforms.u_rcpAspect.value = e.height / e.width, n && (this.rt1 && this.rt1.dispose(), this.rt1 = Kt.createRenderTarget(this._halfWidth, this._halfHeight, !0, !1, this.useFloatTexture)), e.fromTexture.minFilter = e.fromTexture.magFilter = oe, n && (this.cocMaterial.defines.USE_FLOAT = this.useFloatTexture, this.cocMaterial.needsUpdate = !0), this.cocMaterial.uniforms.u_hashNoise.value = (this.cocMaterial.uniforms.u_hashNoise.value + 1.2415) % 100, this.cocMaterial.uniforms.u_texture.value = e.fromTexture, e.renderMaterial(this.cocMaterial, this.rt1), e.fromTexture.minFilter = e.fromTexture.magFilter = se, this.simMaterial.defines.QUALITY = this.quality, this.simMaterial.uniforms.u_cocTexture.value = this.rt1.texture, a && (this.simMaterial.needsUpdate = !0), n && (this.simMaterial.defines.USE_FLOAT = this.useFloatTexture, this.simMaterial.needsUpdate = !0), e.renderMaterial(this.simMaterial, this.rt2), this.useAdditionalBlur && (this.blurMaterial.uniforms.u_bokehTexture.value = this.rt2.texture, e.renderMaterial(this.blurMaterial, this.rt3)), this.material.uniforms.u_blurTexture.value = this.useAdditionalBlur ? this.rt3.texture : this.rt2.texture, this._prevQuality = this.quality, this._prevUseFloatTexture = this.useFloatTexture, r(c(i.prototype), "render", this).call(this, e, t, e.fromTexture)
            }
        }]), i
    }(),
    $t = new w,
    ei = function(e) {
        n(i, Yt);
        var t = s(i);

        function i() {
            var e;
            f(this, i);
            for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
            return p(u(e = t.call.apply(t, [this].concat(a))), "circleCount", 8), p(u(e), "ratio", 1), p(u(e), "frameRenderTarget", null), p(u(e), "camera", null), p(u(e), "scene", null), p(u(e), "width", 1), p(u(e), "height", 1), p(u(e), "styleName", ""), e
        }
        return m(i, [{
            key: "init",
            value: function(e) {
                var t = this;
                Object.assign(this, e), r(c(i.prototype), "init", this).call(this), this.frameRenderTarget = Kt.createRenderTarget(1, 1), this.material = this.createRawShaderMaterial({
                    uniforms: {
                        u_aspect: null,
                        u_texture: {
                            value: null
                        },
                        u_styleNameOpacity: {
                            value: 0
                        },
                        u_styleNameTexture: {
                            value: null
                        },
                        u_frameTexture: {
                            value: this.frameRenderTarget.texture
                        },
                        u_frameAspect: {
                            value: new L(1, 1.75)
                        },
                        u_rotation: {
                            value: 0
                        },
                        u_maskEdge: {
                            value: 0
                        },
                        u_forceRatio: {
                            value: 0
                        }
                    }
                }), this.material.vertexShader = Kt.vertexPrefix + qt, this.material.fragmentShader = Kt.fragmentPrefix + "#define GLSLIFY 1\nuniform float u_maskEdge;uniform float u_rotation;uniform float u_styleNameOpacity;uniform float u_forceRatio;uniform vec2 u_aspect;uniform vec2 u_frameAspect;uniform sampler2D u_texture;uniform sampler2D u_frameTexture;uniform sampler2D u_styleNameTexture;varying vec2 v_uv;vec2 rotate(vec2 v,float a){float s=sin(a);float c=cos(a);mat2 m=mat2(c,-s,s,c);return m*v;}void main(){vec4 color=texture2D(u_texture,v_uv);vec4 frameColor=texture2D(u_frameTexture,v_uv);vec4 styleName=texture2D(u_styleNameTexture,v_uv);float nameMask=step(0.3,v_uv.y)-step(0.7,v_uv.y);float logosMask=1.0-nameMask;float rotation=u_rotation;vec2 maskSides=abs(rotate((v_uv-0.5)*u_aspect,rotation))*(u_aspect.x/u_aspect.y>1.0 ? u_frameAspect : u_frameAspect.yx);float mask=max(maskSides.x,maskSides.y);float maskEdge=u_maskEdge;mask=min(1.0-smoothstep(maskEdge-fwidth(mask),maskEdge,mask),1.0-u_forceRatio);vec3 logos=u_styleNameOpacity*styleName.rgb*(1.0-mask)*logosMask;vec3 name=u_styleNameOpacity*styleName.rgb*nameMask;color=mix(frameColor,color,mask);color.rgb=mix(color.rgb,logos,logos.r);color.rgb=mix(color.rgb,name,name.r);color.rgb=clamp(color.rgb,vec3(0.0),vec3(1.0));gl_FragColor=color;}", this.material.extensions.derivatives = !0, this.gradientMaterial = this.createRawShaderMaterial({
                    uniforms: {
                        u_aspect: null,
                        u_time: lt.sharedUniforms.u_time,
                        u_outerColor: {
                            value: new w(16777215)
                        },
                        u_innerColor: {
                            value: new w(0)
                        }
                    },
                    fragmentShader: "#define GLSLIFY 1\nuniform vec3 u_outerColor;uniform vec3 u_innerColor;uniform vec2 u_aspect;uniform float u_time;varying vec2 v_uv;vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}vec3 hash33(vec3 p3){p3=fract(p3*vec3(.1031,.1030,.0973));p3+=dot(p3,p3.yxz+33.33);return fract((p3.xxy+p3.yxx)*p3.zyx);}void main(){vec2 toCenter=(v_uv-0.5)*2.0*u_aspect;float dist=length(toCenter);vec2 noiseUv=gl_FragCoord.xy*0.2;float noiseTime=u_time*0.6;float grain=smoothstep(0.0,0.42,(snoise(vec3(noiseUv+13.0,noiseTime-10.0))+snoise(vec3(noiseUv*vec2(-1.5,1.5)+41.,noiseTime-5.0)))*0.25+0.5);vec3 color=mix(u_innerColor,u_outerColor,dist*grain)*(grain*0.25+0.75);gl_FragColor=vec4(color+hash33(vec3(gl_FragCoord.xy,u_time))/255.0,1.0);}"
                });
                var a = new X(1, 1),
                    n = new _e;
                for (var o in a.attributes) n.setAttribute(o, a.attributes[o]);
                n.setIndex(a.index);
                for (var s = new Float32Array(this.circleCount), l = 0; l < this.circleCount; l++) s[l] = l;
                n.setAttribute("a_instanceId", new ge(s, 1)), this.circles = new O(n, new xe({
                    uniforms: {
                        u_seed: {
                            value: Math.random()
                        },
                        u_aspect: null,
                        u_time: lt.sharedUniforms.u_time,
                        u_color: {
                            value: new w(16777215)
                        }
                    },
                    vertexShader: "#define GLSLIFY 1\nattribute float a_instanceId;uniform vec2 u_aspect;uniform float u_time;uniform float u_seed;varying vec2 v_uv;varying float v_type;varying vec4 v_rands2;vec4 hash41(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec2 rotate(vec2 v,float a){float s=sin(a);float c=cos(a);mat2 m=mat2(c,-s,s,c);return m*v;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}float mod289(float x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}float permute(float x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float taylorInvSqrt(float r){return 1.79284291400159-0.85373472095314*r;}vec4 grad4(float j,vec4 ip){const vec4 ones=vec4(1.0,1.0,1.0,-1.0);vec4 p,s;p.xyz=floor(fract(vec3(j)*ip.xyz)*7.0)*ip.z-1.0;p.w=1.5-dot(abs(p.xyz),ones.xyz);s=vec4(lessThan(p,vec4(0.0)));p.xyz=p.xyz+(s.xyz*2.0-1.0)*s.www;return p;}\n#define F4 0.309016994374947451\nfloat snoise(vec4 v){const vec4 C=vec4(0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);vec4 i=floor(v+dot(v,vec4(F4)));vec4 x0=v-i+dot(i,C.xxxx);vec4 i0;vec3 isX=step(x0.yzw,x0.xxx);vec3 isYZ=step(x0.zww,x0.yyz);i0.x=isX.x+isX.y+isX.z;i0.yzw=1.0-isX;i0.y+=isYZ.x+isYZ.y;i0.zw+=1.0-isYZ.xy;i0.z+=isYZ.z;i0.w+=1.0-isYZ.z;vec4 i3=clamp(i0,0.0,1.0);vec4 i2=clamp(i0-1.0,0.0,1.0);vec4 i1=clamp(i0-2.0,0.0,1.0);vec4 x1=x0-i1+C.xxxx;vec4 x2=x0-i2+C.yyyy;vec4 x3=x0-i3+C.zzzz;vec4 x4=x0+C.wwww;i=mod289(i);float j0=permute(permute(permute(permute(i.w)+i.z)+i.y)+i.x);vec4 j1=permute(permute(permute(permute(i.w+vec4(i1.w,i2.w,i3.w,1.0))+i.z+vec4(i1.z,i2.z,i3.z,1.0))+i.y+vec4(i1.y,i2.y,i3.y,1.0))+i.x+vec4(i1.x,i2.x,i3.x,1.0));vec4 ip=vec4(1.0/294.0,1.0/49.0,1.0/7.0,0.0);vec4 p0=grad4(j0,ip);vec4 p1=grad4(j1.x,ip);vec4 p2=grad4(j1.y,ip);vec4 p3=grad4(j1.z,ip);vec4 p4=grad4(j1.w,ip);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;p4*=taylorInvSqrt(dot(p4,p4));vec3 m0=max(0.6-vec3(dot(x0,x0),dot(x1,x1),dot(x2,x2)),0.0);vec2 m1=max(0.6-vec2(dot(x3,x3),dot(x4,x4)),0.0);m0=m0*m0;m1=m1*m1;return 49.0*(dot(m0*m0,vec3(dot(p0,x0),dot(p1,x1),dot(p2,x2)))+dot(m1*m1,vec2(dot(p3,x3),dot(p4,x4))));}void main(){vec4 rand1s=hash41(a_instanceId+u_seed*21.5126+0.2724);vec4 rand2s=hash41(a_instanceId+u_seed*62.5126+2.253);v_rands2=rand2s;vec2 pos=rotate(position.xy,rand1s.y*6.2831853+(rand1s.z-0.5)*u_time*2.2)*mix(0.2,0.4,rand1s.x);float angle=(a_instanceId+u_seed)*6.2831853*0.3;pos+=vec2(cos(angle),sin(angle))*(2.+a_instanceId)*0.125;pos+=vec2(snoise(vec4(a_instanceId,0.0,rand2s.z,u_time*0.1)),snoise(vec4(a_instanceId,10.0,rand2s.z,u_time*0.1)))*0.1;gl_Position=vec4(pos/u_aspect,0.0,1.0);v_type=mod(a_instanceId,2.0);v_uv=uv;}",
                    fragmentShader: "#define GLSLIFY 1\nuniform vec3 u_color;varying vec4 v_rands2;varying vec2 v_uv;varying float v_type;float hash12(vec2 p){vec3 p3=fract(vec3(p.xyx)*.1031);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);}void main(){float toCenter=length(v_uv-0.5)*2.0;float alpha=1.0-smoothstep(1.0-fwidth(toCenter),1.0,toCenter);vec3 color=u_color;if(v_type>0.5){alpha*=smoothstep(0.992-fwidth(toCenter),0.992,toCenter)*0.75;}else{alpha*=clamp(pow(v_uv.y,1.0+v_rands2.y)+v_rands2.x-0.5,0.0,1.0);}gl_FragColor=vec4(color,alpha+(hash12(gl_FragCoord.xy)-0.5)/255.0);}",
                    transparent: !0,
                    extensions: {
                        derivatives: !0
                    }
                })), this.circles.frustumCulled = !1, this.styleNameCanvas = document.createElement("canvas"), this.styleNameCtx = this.styleNameCanvas.getContext("2d"), this.styleNameTexture = new ye(this.styleNameCanvas), lt.snapshotSignal.add((function(e) {
                    e && (t.styleName = e.colorName, t.renderStyleName())
                }))
            }
        }, {
            key: "renderStyleName",
            value: function() {
                var e = at.isMobile;
                this.styleNameCanvas.width = this.width, this.styleNameCanvas.height = this.height, this.styleNameCtx.fillStyle = "#000000", this.styleNameCtx.fillRect(0, 0, this.styleNameCanvas.width, this.styleNameCanvas.height), this.styleNameCtx.font = "".concat(e ? 50 : 100, "px Gilda Display"), this.styleNameCtx.fillStyle = "rgba(255, 255, 255, 1)", this.styleNameCtx.textBaseline = "middle", this.styleNameCtx.textAlign = "center", this.styleNameCtx.fillText(this.styleName, .5 * this.styleNameCanvas.width, .5 * this.styleNameCanvas.height), this.styleNameCtx.font = "".concat(e ? 30 : 40, "px Gilda Display"), this.styleNameCtx.textAlign = "left", this.styleNameCtx.fillText("INFINITE PASSERELLA", .05 * this.styleNameCanvas.width, this.styleNameCanvas.height * (e ? .05 : .08)), this.styleNameCtx.font = "".concat(e ? 18 : 30, "px Gilda Display"), this.styleNameCtx.textAlign = "right", this.styleNameCtx.fillText("made with ❤️ by Lusion", .95 * this.styleNameCanvas.width, this.styleNameCanvas.height * (e ? .95 : .92)), this.styleNameTexture.minFilter = se, this.styleNameTexture.needsUpdate = !0
            }
        }, {
            key: "resize",
            value: function() {
                this.width = lt.postprocessing.width, this.height = lt.postprocessing.height, this.renderStyleName()
            }
        }, {
            key: "needsRender",
            value: function() {
                return 0 == this.ratio && (this.circles.material.uniforms.u_seed.value = Math.random()), this.enabled && (this.ratio > 0 || lt.aboutRatio > 0)
            }
        }, {
            key: "render",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = lt.loadingFramePercent,
                    r = lt.loadingFramePercent2,
                    a = i + r < 2,
                    n = ct.expoInOut(i),
                    o = ct.cubicInOut(r),
                    s = .2 * n + .8 * o;
                this.width = e.width, this.height = e.height, lt.frameStatus += (lt.frameActive ? 1 : -1) * lt.deltaTime / 1.5, lt.frameStatus = ft.clamp(lt.frameStatus, 0, 1), lt.frameAnimationStatus += (lt.frameAnimationActive ? 1 : -1) * lt.deltaTime, lt.frameAnimationStatus = ft.clamp(lt.frameAnimationStatus, 0, 1);
                var l = a ? 1 - s : ct.cubicInOut(lt.frameStatus),
                    u = a ? 1 - s : ct.expoInOut(lt.frameAnimationStatus);
                this.frameRenderTarget.setSize(this.width, this.height), this.material.uniforms.u_aspect = e.sharedUniforms.u_aspect, this.material.uniforms.u_rotation.value = n * (lt.frameRotation + 2 * Math.PI), this.material.uniforms.u_maskEdge.value = a ? s : 1 - .75 * u, this.material.uniforms.u_texture.value = e.fromTexture, this.material.uniforms.u_styleNameTexture.value = this.styleNameTexture, this.material.uniforms.u_styleNameOpacity.value = (a ? 0 : l) * (1 - lt.aboutRatio), this.gradientMaterial.uniforms.u_aspect = e.sharedUniforms.u_aspect, this.gradientMaterial.uniforms.u_outerColor.value.set(lt.frameBgColor), this.circles.material.uniforms.u_aspect = e.sharedUniforms.u_aspect, this.circles.material.uniforms.u_color.value.set(lt.frameDetailColor), this.circles.material.uniforms.u_color.value.offsetHSL(0, .5, .5), this.material.uniforms.u_forceRatio.value = lt.aboutRatio, lt.aboutRatio > 0 && ($t.setStyle("#333333"), this.gradientMaterial.uniforms.u_outerColor.value.copy($t), $t.setStyle("#000000"), this.circles.material.uniforms.u_color.value.copy($t)), Kt.render(this.gradientMaterial, this.frameRenderTarget), Kt.renderMesh(this.circles, this.frameRenderTarget), e.renderMaterial(this.material, e.toRenderTarget), e.swap(), Kt.copy(e.fromTexture, t ? null : e.toRenderTarget)
            }
        }]), i
    }(),
    ti = new(function() {
        function e() {
            f(this, e)
        }
        return m(e, [{
            key: "glslifyStrip",
            value: function(e) {
                return e.replace(/#define\sGLSLIFY\s./, "")
            }
        }, {
            key: "addChunk",
            value: function(e, t) {
                Te[e] = this.glslifyStrip(t)
            }
        }, {
            key: "_wrapInclude",
            value: function(e) {
                return "#include <" + e + ">"
            }
        }, {
            key: "_replaceString",
            value: function(e, t, i, r) {
                if (r) {
                    var a = e.lastIndexOf(t);
                    return -1 === a ? e : e.substring(0, a) + i + e.substring(a + t.length)
                }
                var n = e.indexOf(t);
                return -1 === n ? e : e.substring(0, n) + i + e.substring(n + t.length)
            }
        }, {
            key: "insertBefore",
            value: function(e, t, i, r) {
                return i = "\n" + this.glslifyStrip(i) + "\n" + t, this._replaceString(e, t, i, r)
            }
        }, {
            key: "insertAfter",
            value: function(e, t, i, r) {
                return i = t + "\n" + this.glslifyStrip(i) + "\n", this._replaceString(e, t, i, r)
            }
        }, {
            key: "replace",
            value: function(e, t, i, r) {
                return i = "\n" + this.glslifyStrip(i) + "\n", this._replaceString(e, t, i, r)
            }
        }]), e
    }()),
    ii = new(function() {
        function e() {
            f(this, e), p(this, "blackTexture", void 0), p(this, "whiteTexture", void 0), p(this, "transparentTexture", void 0)
        }
        return m(e, [{
            key: "init",
            value: function() {
                this.blackTexture = this._createPixelTexture([0, 0, 0, 1]), this.whiteTexture = this._createPixelTexture([1, 1, 1, 1]), this.transparentTexture = this._createPixelTexture([0, 0, 0, 0])
            }
        }, {
            key: "_createPixelTexture",
            value: function(e) {
                var t = new ee(new Uint8Array(e), 256, 256);
                return t.format = te, t
            }
        }]), e
    }()),
    ri = lt.loader.ITEM_CLASSES.xhr,
    ai = function(e) {
        n(a, ri);
        var t = s(a);

        function a(e, r) {
            return f(this, a), t.call(this, e, i(i({}, r), {}, {
                responseType: "arraybuffer"
            }))
        }
        return m(a, [{
            key: "retrieve",
            value: function() {
                return !1
            }
        }, {
            key: "_onLoad",
            value: function() {
                if (!this.content) {
                    for (var e = this.xmlhttp.response, t = new Uint32Array(e, 0, 1)[0], i = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(e, 4, t))), n = i.vertexCount, o = i.indexCount, s = 4 + t, l = new U, u = i.attributes, h = 0, d = u.length; h < d; h++) {
                        var v = u[h],
                            m = v.id,
                            f = "indices" === m ? o : n,
                            p = v.componentSize,
                            _ = window[v.storageType],
                            g = new _(e, s, f * p),
                            x = _.BYTES_PER_ELEMENT,
                            y = void 0;
                        if (v.needsPack) {
                            var T = v.packedComponents,
                                b = T.length,
                                S = 1 << 8 * x,
                                w = 0 === v.storageType.indexOf("Int") ? .5 * S : 0,
                                k = 1 / S;
                            y = new Float32Array(f * p);
                            for (var C = 0, L = 0; C < f; C++)
                                for (var A = 0; A < b; A++) {
                                    var M = T[A];
                                    y[L] = (g[L] + w) * k * M.delta + M.from, L++
                                }
                        } else y = g;
                        "indices" === m ? l.setIndex(new H(y, 1)) : l.setAttribute(m, new H(y, p)), s += f * p * x
                    }
                    this.content = l
                }
                this.xmlhttp = void 0, r(c(a.prototype), "_onLoad", this).call(this, this)
            }
        }]), a
    }();
ai.type = "buf", ai.extensions = ["buf"], ai.responseType = "arraybuffer";
var ni = lt.loader.ITEM_CLASSES.image,
    oi = function(e) {
        n(i, ni);
        var t = s(i);

        function i(e, r) {
            var a;
            f(this, i);
            var n = r.content || new pe(new Image);
            switch (r.content = n.image, n.minFilter = r.minFilter || be, n.minFilter) {
                case ke:
                case we:
                case Se:
                case be:
                    n.generateMipmaps = !0, n.anisotropy = r.anisotropy || lt.renderer.capabilities.getMaxAnisotropy();
                    break;
                default:
                    n.generateMipmaps = !1
            }
            return n.flipY = void 0 === r.flipY || r.flipY, r.wrap ? n.wrapS = n.wrapT = r.wrap : (r.wrapS && (n.wrapS = r.wrapS), r.wrapT && (n.wrapT = r.wrapT)), (a = t.call(this, e, r)).content = n, a
        }
        return m(i, [{
            key: "retrieve",
            value: function() {
                return !1
            }
        }, {
            key: "load",
            value: function() {
                this.isStartLoaded = !0;
                var e = this.content.image;
                e.onload = this.boundOnLoad, e.src = this.url
            }
        }, {
            key: "_onLoad",
            value: function() {
                delete this.content.image.onload, this.width = this.content.image.width, this.height = this.content.image.height, this.content.needsUpdate = !0, ot.RECORD_MODE && lt.renderer.initTexture(this.content), this.onPost ? this.onPost.call(this, this.content, this.onPostLoadingSignal) : this._onLoadComplete()
            }
        }]), i
    }();
oi.type = "texture", oi.extensions = [];
var si = new(function() {
        function e() {
            f(this, e), p(this, "offset", new L), p(this, "sharedUniforms", {
                u_glPositionOffset: {
                    value: null
                }
            })
        }
        return m(e, [{
            key: "init",
            value: function() {
                this.sharedUniforms.u_glPositionOffset.value = this.offset, ti.addChunk("glPositionOffset", "#define GLSLIFY 1\nuniform vec2 u_glPositionOffset;vec4 glPositionOffset(vec4 glPosition){return glPosition+vec4(u_glPositionOffset*glPosition.w,0.0,0.0);}")
            }
        }, {
            key: "setOffset",
            value: function(e, t) {
                return this.offset.set(e, t)
            }
        }]), e
    }()),
    li = new(function() {
        function e() {
            f(this, e)
        }
        return m(e, [{
            key: "prePreInit",
            value: function() {
                this.checkSupport(), at.isMobile && this.watchMobileOrientation()
            }
        }, {
            key: "checkSupport",
            value: function() {
                lt._isSupportedDevice = !0, lt._isSupportedBrowser = (at.isChrome || at.isSafari || at.isEdge || at.isFirefox || at.isOpera) && !at.isIE, lt._isSupportedWebGL = this.checkSupportWebGL(), lt._isSupported = lt._isSupportedDevice && lt._isSupportedBrowser && lt._isSupportedWebGL, ot.LOG && (console.group("[checkSupport]"), console.log("isSupportedDevice", lt._isSupportedDevice), console.log("isSupportedBrowser", lt._isSupportedBrowser), console.log("isSupportedWebGL", lt._isSupportedWebGL), console.log("isSupported", lt._isSupported), console.groupEnd())
            }
        }, {
            key: "checkSupportWebGL",
            value: function() {
                if (!(lt.canvas instanceof HTMLCanvasElement)) return !1;
                if (ot.USE_WEBGL2 && window.WebGL2RenderingContext) try {
                    return lt.gl = lt.canvas.getContext("webgl2", lt.webglOpts), ot.RENDER_TARGET_FLOAT_TYPE = Ce, ot.DATA_FLOAT_TYPE = Ce, !0
                } catch (t) {
                    return console.error(t), !1
                }
                if (ot.USE_WEBGL2 = !1, window.WebGLRenderingContext) try {
                    var e = lt.gl = lt.canvas.getContext("webgl", lt.webglOpts) || lt.canvas.getContext("experimental-webgl", lt.webglOpts);
                    return (e.getExtension("OES_texture_float") || e.getExtension("OES_texture_half_float")) && e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS) ? (ot.RENDER_TARGET_FLOAT_TYPE = at.isIOS || !e.getExtension("OES_texture_float") ? Le : Ce, ot.DATA_FLOAT_TYPE = Ce, !0) : (ot.USE_FLOAT_PACKING = !0, ot.RENDER_TARGET_FLOAT_TYPE = ot.DATA_FLOAT_TYPE = re, !1)
                } catch (t) {
                    return console.error(t), !1
                }
                return !1
            }
        }, {
            key: "watchMobileOrientation",
            value: function() {
                var e = this,
                    t = window.matchMedia("(orientation: portrait)"),
                    i = function(t) {
                        var i = t.matches ? "portrait" : "landscape";
                        "portrait" === i ? lt._isSupportedMobileOrientation = !0 : "landscape" === i && (lt._isSupportedMobileOrientation = !1), lt._isSupported && !lt._isSupportedMobileOrientation ? e._addNotSupported("orientation") : e._removeNotSupported("orientation")
                    };
                i(t), t.addEventListener("change", (function(e) {
                    i(e)
                }))
            }
        }, {
            key: "notSupported",
            value: function() {
                lt._isSupportedDevice ? lt._isSupportedBrowser ? lt._isSupportedWebGL || this._addNotSupported("webgl") : this._addNotSupported("browser") : this._addNotSupported("device")
            }
        }, {
            key: "_removeNotSupported",
            value: function(e) {
                lt._isSupported && document.documentElement.classList.remove("not-supported"), e && document.documentElement.classList.remove("not-supported--".concat(e))
            }
        }, {
            key: "_addNotSupported",
            value: function(e) {
                console.error("NOT SUPPORTED: ".concat(e.toUpperCase())), document.documentElement.classList.add("not-supported"), e && document.documentElement.classList.add("not-supported--".concat(e))
            }
        }]), e
    }()),
    ui = new(function() {
        function e() {
            f(this, e), p(this, "bgmVolume", 1), p(this, "_volume", 0), p(this, "_bgm", null), p(this, "_audios", {}), p(this, "_audioBtn", void 0), p(this, "_audioBars", void 0), p(this, "_audioBarTime", 0), p(this, "_audioBarRatio", 0), p(this, "_tapCount", 0), p(this, "_hoverCount", 0), p(this, "_changeCount", 0), p(this, "_boundBodyClick", null), p(this, "_boundAudioBtnClick", null), p(this, "BGM_ID", "Stylish-Electronic-Agressive--Techno-House_AdobeStock_413924450")
        }
        return m(e, [{
            key: "init",
            value: function() {
                this._bgm = this._createAudio(this.BGM_ID, !0), this._audioBars = document.querySelectorAll(".audio__bar"), at.isMobile || (this._bgm.volume = 0), this._boundBodyClick = this._onBodyClick.bind(this), document.body.addEventListener("click", this._boundBodyClick), this._audioBtn = document.querySelector(".header-more--audio"), this._boundAudioBtnClick = this._onAudioBtnClick.bind(this), this._audioBtn.addEventListener("click", this._boundAudioBtnClick), at.isMobile
            }
        }, {
            key: "playBgm",
            value: function(e) {
                var t = this._audios[e];
                t !== this._bgm && (this._bgm && this._bgm.pause(), this._bgm = t, this._bgm.muted = !1, this._bgm.play()), at.isMobile || (this._bgm.volume = this.bgmVolume)
            }
        }, {
            key: "playTap",
            value: function() {
                this._tapCount++
            }
        }, {
            key: "playHover",
            value: function() {
                this._hoverCount++, play("hoverthis._" + this._hoverCount % 2)
            }
        }, {
            key: "playChange",
            value: function() {
                this._changeCount++, play("changethis._" + this._changeCount % 2)
            }
        }, {
            key: "_onBodyClick",
            value: function(e) {
                document.body.removeEventListener("click", this._boundBodyClick), this._onAudioBtnClick(), lt.isAudioActive = !0, this.playBgm(this.BGM_ID), this._bgm.muted = !1, this._bgm.play()
            }
        }, {
            key: "_createAudio",
            value: function(e, t) {
                var i = this._audios[e];
                return i || ((i = new Audio(ot.AUDIO_PATH + "/" + e + ".mp3")).loop = !!t, i.autoplay = !1, this._audios[e] = i), i
            }
        }, {
            key: "play",
            value: function(e) {
                if (lt.isAudioActive) {
                    var t = this._audios[e];
                    t.currentTime = 0, t.play()
                }
            }
        }, {
            key: "setAudioBtnVisibility",
            value: function(e) {
                this._audioBtn.style.opacity = e ? 1 : 0, this._audioBtn.style.pointerEvents = e ? "auto" : "none"
            }
        }, {
            key: "_onAudioBtnClick",
            value: function() {
                lt.isAudioActive = !lt.isAudioActive
            }
        }, {
            key: "_onAudioBtnRollover",
            value: function() {
                playHover()
            }
        }, {
            key: "update",
            value: function(e) {
                this._bgm && (at.isMobile ? this._bgm.muted == lt.isAudioActive && (this._bgm.muted = !lt.isAudioActive) : (this._volume = ft.clamp(this._volume + (lt.isAudioActive ? e : -e), 0, 1), this._bgm.volume = this.bgmVolume * this._volume));
                var t = ft.clamp(this._audioBarRatio + (lt.isAudioActive ? 3 * e : -e), 0, 1);
                if (t > 0 || t !== this._audioBarRatio) {
                    this._audioBarRatio = t, this._audioBarTime += 6 * e;
                    for (var i = 0; i < this._audioBars.length; i++) this._audioBars[i].style.transform = "translate3d(0, 0, 0) scale3d(1, " + ((3 + 11 * (.5 * Math.sin(this._audioBarTime + 23.2512 * i) + .5) * t) / 14).toFixed(4) + ",1)"
                }
            }
        }]), e
    }()),
    ci = function(e, t) {
        var i = document.createElement("span");
        return i.textContent = e, i.style.setProperty("--index", t), i
    },
    hi = new(function() {
        function e() {
            f(this, e), this.callBack, this.percent = 0, this.targetPercent = 0
        }
        return m(e, [{
            key: "preInit",
            value: function(e) {
                var t = this;
                this.elContainer = document.getElementById("page--preloader"), this._elPreloaderPercent = document.getElementById("preloader-percentage"), this._elPreloaderBar = document.querySelector("#preloader-bar--loader"), this._elPreloaderExplanation = document.getElementById("preloader-explanation"), this.callBack = e, this.show(), lt.loader.start((function(e) {
                    t.targetPercent = e
                }))
            }
        }, {
            key: "init",
            value: function() {}
        }, {
            key: "show",
            value: function() {
                this.elContainer && this.elContainer.classList.add("is-active")
            }
        }, {
            key: "hide",
            value: function() {
                this.elContainer && this.elContainer.classList.remove("is-active")
            }
        }, {
            key: "resize",
            value: function(e, t) {}
        }, {
            key: "update",
            value: function(e) {
                !0 !== lt.isPreloaderFinished && (!0 === ot.SKIP_ANIMATION ? this.percent = this.targetPercent : this.percent = Math.min(this.targetPercent, ft.clamp(this.percent + .5 * e * (this.targetPercent > this.percent ? 1 : 0), 0, 1)), this._elPreloaderPercent && (this._elPreloaderPercent.innerHTML = ~~(100 * this.percent) + " %"), this._elPreloaderBar && (this._elPreloaderBar.style.transform = "scaleX(".concat(this.percent, ")")), this.percent >= 1 && (this._elPreloaderExplanation.innerText = "Experience is loaded", this.hasPreloaderFinished()))
            }
        }, {
            key: "hasPreloaderFinished",
            value: function() {
                lt.isPreloaderFinished = !0, this.hide(), this.callBack()
            }
        }]), e
    }()),
    di = function() {
        function e() {
            f(this, e), p(this, "_btn", void 0), p(this, "_btnCircleLeft", void 0), p(this, "_btnCircleRight", void 0), p(this, "_btnHoverCircle", void 0), p(this, "_btnBg", void 0), p(this, "_btnLabel", void 0), p(this, "_tlFadeIn", Ae.timeline({
                paused: !0
            })), p(this, "_tlHover", Ae.timeline({
                paused: !0
            })), p(this, "_tlFadeOut", Ae.timeline({
                paused: !0
            }))
        }
        return m(e, [{
            key: "preInit",
            value: function(e, t) {
                var i = this;
                this._btn = e, this._btnCircleLeft = this._btn.querySelector(".circle-left"), this._btnCircleRight = this._btn.querySelector(".circle-right"), this._btnHoverCircle = this._btn.querySelector(".hoverCircle"), this._btnBg = this._btn.querySelector(".btn--bg"), this._btnLabel = this._btn.querySelector(".btn--label__masked"), this._state = {
                    animationComplete: !1
                }, this._btn.addEventListener("mouseenter", (function() {
                    return i._onMouseEnter()
                }), !1), this._btn.addEventListener("mouseleave", (function() {
                    return i._onMouseLeave()
                }), !1), this._btn.addEventListener("touchstart", (function() {
                    return i._onMouseEnter()
                }), !1), this._btn.addEventListener("touchend", (function() {
                    return i._onMouseLeave()
                }), !1), this._btn.addEventListener("click", (function(e) {
                    return i._onMouseClick(e, t)
                }), !1)
            }
        }, {
            key: "init",
            value: function() {
                this._fadeInAnimation(), this._hoverAnimation(), this._fadeOutAnimation()
            }
        }, {
            key: "_fadeInAnimation",
            value: function() {
                this._tlFadeIn.to(this._btn, {
                    pointerEvents: "auto",
                    display: "inline-block",
                    opacity: 1
                }).fromTo(this._btnCircleLeft, {
                    translateX: "-50%"
                }, {
                    translateX: "-105%",
                    duration: 1,
                    ease: "Sine.easeIn"
                }, 0).fromTo(this._btnCircleRight, {
                    translateX: "-50%"
                }, {
                    translateX: "105%",
                    duration: 1,
                    ease: "Sine.easeIn"
                }, 0).fromTo(this._btnBg, {
                    scale: 0
                }, {
                    scale: 1,
                    duration: .8,
                    ease: "Expo.easeInOut"
                }, .2).fromTo(this._btnLabel, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: .4,
                    ease: "Sine.easeIn"
                }, .3)
            }
        }, {
            key: "_hoverAnimation",
            value: function() {
                this._tlHover.set(this._btnHoverCircle, {
                    translateX: "-200%"
                }).fromTo(this._btnHoverCircle, {
                    translateX: "-100%"
                }, {
                    translateX: "0%",
                    duration: .5,
                    ease: "Power2.easeInOut"
                })
            }
        }, {
            key: "_fadeOutAnimation",
            value: function() {
                this._tlFadeOut.to(this._btn, {
                    opacity: 0
                })
            }
        }, {
            key: "_show",
            value: function() {
                this._tlFadeIn.kill(), this._tlFadeIn.restart()
            }
        }, {
            key: "_hide",
            value: function() {
                this._tlFadeOut.restart(), this._btn.style.pointerEvents = "none"
            }
        }, {
            key: "_onMouseClick",
            value: function(e, t) {
                t(e)
            }
        }, {
            key: "_onMouseEnter",
            value: function() {
                this._tlHover.kill(), this._tlHover.restart()
            }
        }, {
            key: "_onMouseLeave",
            value: function() {
                this._tlHover.reverse()
            }
        }, {
            key: "update",
            value: function() {}
        }, {
            key: "resize",
            value: function() {}
        }]), e
    }(),
    vi = new(function() {
        function e() {
            f(this, e), p(this, "_domEl", null), p(this, "_snapshotBtn", void 0), p(this, "_closeButtonEl", void 0), p(this, "_time", 0), p(this, "_isExporting", !1), p(this, "_tlFadeIn", Ae.timeline({
                paused: !0
            })), p(this, "_tlFocus", Ae.timeline({
                paused: !0,
                yoyo: -1,
                repeat: 1e3
            })), p(this, "isActive", !1), p(this, "activeRatio", 0), p(this, "activeTime", 0)
        }
        return m(e, [{
            key: "preInit",
            value: function() {}
        }, {
            key: "init",
            value: function() {
                var e = this;
                this._domEl = document.getElementById("snapshot"), this._snapshotFrame = this._domEl.querySelector("#snapshot-frame"), this._snapshotFrameContent = this._domEl.querySelector("#snapshot-frame--content"), this._snapshotFrameCorners = Array.from(this._domEl.querySelectorAll(".camera-corner")), this._snapshotFrameIconContent = this._domEl.querySelector(".camera--icon--content"), this._snapshotFrameBatteryCharges = Array.from(this._domEl.querySelectorAll(".battery-charge"));
                var t = document.getElementById("snapshot-take--picture-btn");
                this._snapshotBtn = new di, this._snapshotBtn.preInit(t, (function() {
                    lt.frameAnimationActive = !0
                })), this._snapshotBtn.init();
                var i = document.getElementById("snapshot-exit--close-btn");
                this._snapshotCloseBtn = new di, this._snapshotCloseBtn.preInit(i, (function() {
                    lt.snapshotSignal.dispatch(null)
                })), this._snapshotCloseBtn.init(), lt.exporterSignalEnd.add((function() {
                    lt.frameAnimationActive = !1
                })), lt.snapshotSignal.add((function(t) {
                    if (t) {
                        var i = Math.floor(Math.random() * t.colorPalette.length);
                        lt.frameBgColor = t.colorPalette[i], lt.frameDetailColor = t.colorPalette[(i + 1) % t.colorPalette.length], e.show(), lt.frameActive = !0, lt.frameStatus = 1e-4, lt.activeSnapshotStyle = t, lt.frameRotation = 2 * (Math.random() - .5) * .25
                    } else e.hide(), lt.frameActive = !1, lt.activeSnapshotStyle = null
                }))
            }
        }, {
            key: "show",
            value: function() {
                this.isActive = !0, this._snapshotBtn._show(), this._snapshotCloseBtn._show()
            }
        }, {
            key: "hide",
            value: function() {
                this.isActive = !1, this._snapshotBtn._hide(), this._snapshotCloseBtn._hide()
            }
        }, {
            key: "update",
            value: function(e) {
                var t = this;
                if (this.activeRatio = ft.saturate(this.activeRatio + (!0 === this.isActive ? 1 : -1) * (2 * e)), this.activeTime = Math.max(0, this.activeRatio > 0 ? this.activeTime + e : 0), lt.hasInitialized) {
                    this._domEl.style.opacity = ft.saturate(2 * this.activeRatio), this._snapshotFrameIconContent.style.transform = "translate3d(0, ".concat(20 * (1 - this.activeRatio), "px, 0)"), this._snapshotFrameCorners.forEach((function(e, i) {
                        e.style.transform = "scale(".concat(t.activeRatio, ")")
                    }));
                    var i = this._snapshotFrameBatteryCharges.length;
                    this._snapshotFrameBatteryCharges[i - 1].style.opacity = this.activeRatio * (.5 * Math.sin(lt.realTime * Math.PI * 2 + 3) + .5), this._snapshotFrameBatteryCharges.forEach((function(e, r) {
                        var a = 1 - ft.saturate(ft.fit(t.activeRatio, r / i, r / i + 1 / i, 0, 1));
                        e.style.transform = "translate3d(".concat(10 * a * (1 - t.activeRatio), "px, -50%, 0)")
                    }))
                }
                1 === lt.frameAnimationStatus ? (this._time += e, this._time = ft.clamp(this._time, 0, 1), lt.tintOpacity = .5 * Math.max(0, -Math.sin(2 * Math.PI * ct.cubicInOut(this._time))), 1 !== this._time || this._isExporting || (this._isExporting = !0, lt.exporterSignalInit.dispatch())) : (lt.tintOpacity = 0, this._isExporting = !1, this._time = 0)
            }
        }]), e
    }()),
    mi = new(function() {
        function e() {
            var t = this;
            f(this, e), this._cameraViewBtn = document.getElementById("camera-view"), this._orbitViewBtn = document.getElementById("orbit-view"), this._ledLightsBtn = document.getElementById("led-lights"), this._cameraViewBtn.addEventListener("click", (function() {
                return t.enableCameraView()
            })), this._orbitViewBtn.addEventListener("click", (function() {
                return t.enableOrbitView()
            }))
        }
        return m(e, [{
            key: "preInit",
            value: function() {
                var e = this;
                lt.isCameraViewActive ? this.enableCameraView() : this.enableOrbitView(), lt.snapshotSignal.add((function(t) {
                    t ? e.hideCameraButtons() : e.showCameraButtons()
                }))
            }
        }, {
            key: "init",
            value: function() {}
        }, {
            key: "enableCameraView",
            value: function() {
                lt.isCameraViewActive = !0, this._cameraViewBtn.classList.add("active"), this._orbitViewBtn.classList.remove("active")
            }
        }, {
            key: "enableOrbitView",
            value: function() {
                lt.isCameraViewActive = !1, this._cameraViewBtn.classList.remove("active"), this._orbitViewBtn.classList.add("active")
            }
        }, {
            key: "showCameraButtons",
            value: function() {
                this._cameraViewBtn.style.display = "unset", this._orbitViewBtn.style.display = "unset", this._ledLightsBtn.style.display = "unset"
            }
        }, {
            key: "hideCameraButtons",
            value: function() {
                this._cameraViewBtn.style.display = "none", this._orbitViewBtn.style.display = "none", this._ledLightsBtn.style.display = "none"
            }
        }, {
            key: "resize",
            value: function(e, t) {}
        }, {
            key: "update",
            value: function(e) {}
        }]), e
    }()),
    fi = function() {
        function e() {
            f(this, e), p(this, "_about", void 0), p(this, "_aboutCloseBtn", void 0), p(this, "_aboutStar", void 0), p(this, "_aboutExploreBtn", void 0), p(this, "_aboutExploreBtnArrow", void 0), p(this, "_aboutExploreBtnText", void 0), p(this, "_hiddenTimeout", void 0), p(this, "_tlFadeIn", Ae.timeline({
                paused: !0
            })), p(this, "_tlFadeOut", Ae.timeline({
                paused: !0
            })), p(this, "_tlHover", Ae.timeline({
                paused: !0
            }))
        }
        return m(e, [{
            key: "preInit",
            value: function() {
                var e = this;
                this._about = document.getElementById("about"), this._aboutCloseBtn = document.getElementById("about-exit--close-btn"), this._aboutStar = document.getElementById("about-star"), this._aboutExploreBtn = document.querySelector(".explore-btn"), this._aboutExploreBtnArrow = document.querySelector(".explore-btn--arrow"), this._aboutExploreBtnText = document.querySelector(".explore-btn--text"), this._aboutExploreBtn.addEventListener("mouseenter", (function() {
                    return e._onMouseEnter()
                }), !1), this._aboutExploreBtn.addEventListener("mouseleave", (function() {
                    return e._onMouseLeave()
                }), !1), this._aboutCloseBtn.addEventListener("click", (function() {
                    return e._hide()
                }), !1)
            }
        }, {
            key: "_show",
            value: function() {
                clearTimeout(this._hiddenTimeout), this._about.style.display = "block", this._about.style.pointerEvents = "auto", this._tlFadeIn.set(this._aboutStar, {
                    y: -40
                }).to(this._about, {
                    opacity: 1
                }).to(this._aboutStar, {
                    y: 0,
                    duration: .3,
                    ease: "Power3.EaseInOut"
                }).fromTo(this._aboutExploreBtn, {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0
                }), this._tlFadeIn.play()
            }
        }, {
            key: "_hide",
            value: function() {
                var e = this;
                clearTimeout(this._hiddenTimeout), this._about.style.pointerEvents = "none", this._tlFadeOut.to(this._aboutStar, {
                    y: -40,
                    duration: .3,
                    ease: "Power3.EaseInOut"
                }).to(this._about, {
                    opacity: 0
                }), this._tlFadeOut.play(), this._hiddenTimeout = setTimeout((function() {
                    e._about.style.display = "none"
                }), 2e3)
            }
        }, {
            key: "_onClickClose",
            value: function(e) {}
        }, {
            key: "_onMouseEnter",
            value: function() {
                this._tlHover.to(this._aboutExploreBtnArrow, {
                    x: 30,
                    duration: 1
                }, 0).to(this._aboutExploreBtnText, {
                    x: 35,
                    duration: .85
                }, .2), this._tlHover.play()
            }
        }, {
            key: "_onMouseLeave",
            value: function() {
                this._tlHover.pause(), this._tlHover.reverse()
            }
        }, {
            key: "update",
            value: function() {
                lt.aboutRatio = +this._about.style.opacity
            }
        }, {
            key: "resize",
            value: function() {}
        }]), e
    }(),
    pi = new(function() {
        function e() {
            f(this, e), p(this, "_about", void 0), this._ui = document.getElementById("ui"), this._header = document.querySelector("header"), this._headerMore = document.querySelector(".header-more"), this._menu = document.getElementById("menu"), this._menuItems = document.querySelectorAll(".menu-element"), this._audioBtn = document.getElementById("audio-btn"), this._introTitle = document.getElementById("intro"), this._ledBtn = document.getElementById("led-lights"), this._ledBtn.addEventListener("click", (function() {
                return lt.ledAnimationSignal.dispatch()
            })), this._aboutBtn = document.querySelector(".header-more--about"), this.tlFadeIn = Ae.timeline({
                paused: !0
            })
        }
        return m(e, [{
            key: "preInit",
            value: function(e) {
                this._about = new fi, hi.preInit((function() {
                    e()
                })), mi.preInit(), this._about.preInit(), document.querySelectorAll("[split-by]").forEach((function(e) {
                    var t = e.getAttribute("split-by"),
                        i = null,
                        r = [],
                        a = 0;
                    if (e.innerHTML = e.innerHTML.replace(/<a.+?<\/a>/g, (function(e) {
                            var t = "%" + a++ + "%";
                            return r[r.length] = e, t
                        })), "letter" === t ? i = d(e.innerText).map(ci) : "word" === t && (i = e.innerText.split(" ").map(ci)), i) {
                        var n;
                        (n = e.firstChild).replaceWith.apply(n, d(i));
                        for (var o = e.innerHTML, s = 0; s < a; s++) o = o.replace("%" + s + "%", r[s]);
                        e.innerHTML = o
                    }
                }))
            }
        }, {
            key: "init",
            value: function() {
                var e = this;
                vi.init(), hi.init(), mi.init(), this.show(), this._aboutBtn.addEventListener("click", (function() {
                    return e._about._show()
                }), !1)
            }
        }, {
            key: "show",
            value: function() {
                this._menu.style.display = "flex", this.tlFadeIn.fromTo(this._header, {
                    opacity: 0,
                    y: -200
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 1.6,
                    ease: "Expo.easeInOut",
                    delay: 4
                }).to(this._headerMore, {
                    pointerEvents: "auto"
                }).to(this._introTitle, {
                    opacity: 1,
                    duration: 8,
                    ease: "Power3.easeInOut",
                    scaleX: .96
                }).fromTo(this._menuItems, {
                    y: -50,
                    ease: "cubicInOut"
                }, {
                    y: 0,
                    opacity: 1,
                    pointerEvents: "auto",
                    stagger: {
                        each: .2
                    }
                }, 4.1).to(this._audioBtn, {
                    opacity: 1,
                    ease: "cubicInOut"
                }).to(this._aboutBtn, {
                    pointerEvents: "auto"
                }).to(this._introTitle, {
                    opacity: 0
                }), this.tlFadeIn.play()
            }
        }, {
            key: "resize",
            value: function(e, t) {
                hi.resize(e, t)
            }
        }, {
            key: "update",
            value: function(e) {
                hi.update(e), vi.update(e), this._about.update(e)
            }
        }]), e
    }()),
    _i = new(function() {
        function e() {
            f(this, e), p(this, "outRenderTarget", null), p(this, "outMaterial", null), p(this, "canvas", null), p(this, "ctx", null), p(this, "width", 0), p(this, "height", 0), p(this, "exporterProgress", 0), p(this, "totalFrames", 1), p(this, "currentFrame", 0), p(this, "isExporting", !1), p(this, "isExportingImage", !1), p(this, "buffer", new Uint8Array), p(this, "imageData", null)
        }
        return m(e, [{
            key: "preInit",
            value: function() {
                var e = this;
                this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.outRenderTarget = Kt.createRenderTarget(1, 1, !0), this.outMaterial = new Z({
                    uniforms: {
                        u_texture: {
                            value: null
                        }
                    },
                    vertexShader: "".concat(Kt.precisionPrefix).concat("#define GLSLIFY 1\nattribute vec3 position;varying vec2 v_uv;void main(){v_uv=position.xy*0.5+0.5;v_uv.y=1.0-v_uv.y;gl_Position=vec4(position,1.0);}"),
                    fragmentShader: "".concat(Kt.precisionPrefix).concat("#define GLSLIFY 1\nuniform sampler2D u_texture;varying vec2 v_uv;void main(){gl_FragColor=texture2D(u_texture,v_uv);}"),
                    depthTest: !1,
                    depthWrite: !1,
                    blending: Q
                }), lt.exporterSignalInit.add((function() {
                    e.exportImage()
                })), lt.exporterSignalEnd.add((function(t) {
                    e.isExporting = !1, e.isExportingImage = !1;
                    var i = t;
                    ot.RECORD_MODE || Me(i, "Infinite Passerella - Lusion", "image/png")
                }))
            }
        }, {
            key: "init",
            value: function() {}
        }, {
            key: "exportImage",
            value: function() {
                this.width = lt.width, this.height = lt.height, this.outRenderTarget.setSize(lt.width, lt.height), this.exporterProgress = 0, this.totalFrames = 1, this.currentFrame = 0, this.isExporting = !0, this.isExportingImage = !0, this.isExportingImage && (this.exporterProgress = 1, this.outMaterial.uniforms.u_texture.value = lt.postprocessing.fromRenderTarget.texture, Kt.render(this.outMaterial, this.outRenderTarget), this.canvas.width === this.width && this.canvas.height === this.height || (this.canvas.width = this.width, this.canvas.height = this.height, this.imageData = this.ctx.getImageData(0, 0, this.width, this.height), this.buffer = new Uint8Array(this.imageData.data.length)), Kt.renderer.readRenderTargetPixels(this.outRenderTarget, 0, 0, this.width, this.height, this.buffer), this.imageData.data.set(this.buffer), this.ctx.putImageData(this.imageData, 0, 0), this.canvas.toBlob((function(e) {
                    lt.exporterSignalEnd.dispatch(e)
                })))
            }
        }, {
            key: "update",
            value: function(e) {}
        }]), e
    }()),
    gi = function() {
        function e() {
            f(this, e), p(this, "tmpRenderTarget", null), p(this, "fixedMaxMipmapLevel", 14), p(this, "maxMipmapLevel", 0), p(this, "textureSize", new L), p(this, "levelCount", 15)
        }
        return m(e, [{
            key: "init",
            value: function(e) {
                Object.assign(this, e), ti.addChunk("lodMipmapSample", "#define GLSLIFY 1\nvec2 getMipUv(vec2 uv,float lod,vec2 mipmapTextureSize){vec2 textureSize=mipmapTextureSize*vec2(0.666666667,1.0);float isNonZeroLod=step(0.5,lod);vec2 xy=vec2(isNonZeroLod*textureSize.x/mipmapTextureSize.x,1.0-1.0/pow(2.0,max(0.0,lod-1.0)));vec2 wh=(max(vec2(1.0),floor(textureSize/pow(2.0,lod))));return xy+(0.5+uv*(wh-1.0))/mipmapTextureSize;}vec2 getMipUv(vec2 uv,float lod,vec2 mipmapTextureSize,out vec4 clampRect){vec2 textureSize=mipmapTextureSize*vec2(0.666666667,1.0);float isNonZeroLod=step(0.5,lod);vec2 xy=vec2(isNonZeroLod*textureSize.x/mipmapTextureSize.x,1.0-1.0/pow(2.0,max(0.0,lod-1.0)));vec2 wh=(max(vec2(1.0),floor(textureSize/pow(2.0,lod))));vec2 halfTexelSize=0.5/mipmapTextureSize;clampRect=vec4(xy+halfTexelSize,xy+(wh-1.0)/mipmapTextureSize);return xy+(0.5+uv*(wh-1.0))/mipmapTextureSize;}vec4 lodMipmapSampleNearestCubic(sampler2D tex,vec2 uv,float lod,vec2 mipmapTextureSize){vec4 clampRect;uv=getMipUv(uv,lod,mipmapTextureSize,clampRect);return textureBicubic(tex,uv,mipmapTextureSize,clampRect);}vec4 lodMipmapSampleNearest(sampler2D tex,vec2 uv,float lod,vec2 mipmapTextureSize){return texture2D(tex,getMipUv(uv,lod,mipmapTextureSize));}vec4 lodMipmapSampleCubic(sampler2D tex,vec2 uv,float lod,vec2 mipmapTextureSize){float lodFloor=floor(lod);float lodCeil=lodFloor+1.0;float lodFract=lod-lodFloor;vec4 loClamp,hiClamp;vec2 loUv=getMipUv(uv,lodFloor,mipmapTextureSize,loClamp);vec2 hiUv=getMipUv(uv,lodCeil,mipmapTextureSize,hiClamp);return mix(textureBicubic(tex,loUv,mipmapTextureSize,loClamp),textureBicubic(tex,hiUv,mipmapTextureSize,hiClamp),lodFract);}vec4 lodMipmapSample(sampler2D tex,vec2 uv,float lod,vec2 mipmapTextureSize){float lodFloor=floor(lod);float lodCeil=lodFloor+1.0;float lodFract=lod-lodFloor;return mix(texture2D(tex,getMipUv(uv,lodFloor,mipmapTextureSize)),texture2D(tex,getMipUv(uv,lodCeil,mipmapTextureSize)),lodFract);}"), this.tmpRenderTarget = Kt.createRenderTarget(1, 1, !0), this.geometry = this._createGeometry(this.levelCount), this.oddGeometry = this._createGeometry(this.levelCount)
            }
        }, {
            key: "_createGeometry",
            value: function(e) {
                var t = new Float32Array(6 * e * 2),
                    i = new Float32Array(6 * e * 3),
                    r = new U;
                return r.setAttribute("position", new H(i, 3)), r.setAttribute("uv", new H(t, 2)), r
            }
        }, {
            key: "resize",
            value: function(e, t, i, r) {
                var a = ft.powerTwoFloorBase(t);
                this.maxMipmapLevel = Math.min(a, this.fixedMaxMipmapLevel), this.tmpRenderTarget.setSize(i, r), this.textureSize.set(i, r);
                for (var n = this.geometry.attributes.position.array, o = this.geometry.attributes.uv.array, s = 0, l = 0, u = a; l < u; l++) {
                    var c = (l > 0 ? e : 0) / i,
                        h = (r - (r >> Math.max(0, l - 1))) / r,
                        d = Math.max(1, e >> l) / i,
                        v = Math.max(1, t >> l) / r;
                    o[s + 0] = c, o[s + 1] = h + v, o[s + 2] = c, o[s + 3] = h, o[s + 4] = c + d, o[s + 5] = h + v, o[s + 6] = c + d, o[s + 7] = h + v, o[s + 8] = c, o[s + 9] = h, o[s + 10] = c + d, o[s + 11] = h, s += 12
                }
                var m = this.oddGeometry.attributes.uv.array,
                    f = this.oddGeometry.attributes.position.array;
                s = 0;
                for (var p = 0, _ = 0, g = 0, x = 0, y = a - 1; x < y; x++) n[p + 0] = 2 * o[s + 12] - 1, n[p + 1] = 2 * o[s + 13] - 1, n[p + 3] = 2 * o[s + 14] - 1, n[p + 4] = 2 * o[s + 15] - 1, n[p + 6] = 2 * o[s + 16] - 1, n[p + 7] = 2 * o[s + 17] - 1, n[p + 9] = 2 * o[s + 18] - 1, n[p + 10] = 2 * o[s + 19] - 1, n[p + 12] = 2 * o[s + 20] - 1, n[p + 13] = 2 * o[s + 21] - 1, n[p + 15] = 2 * o[s + 22] - 1, n[p + 16] = 2 * o[s + 23] - 1, (x + 1) % 2 && (f[g + 0] = 2 * (m[_ + 0] = o[s + 12]) - 1, f[g + 1] = 2 * (m[_ + 1] = o[s + 13]) - 1, f[g + 3] = 2 * (m[_ + 2] = o[s + 14]) - 1, f[g + 4] = 2 * (m[_ + 3] = o[s + 15]) - 1, f[g + 6] = 2 * (m[_ + 4] = o[s + 16]) - 1, f[g + 7] = 2 * (m[_ + 5] = o[s + 17]) - 1, f[g + 9] = 2 * (m[_ + 6] = o[s + 18]) - 1, f[g + 10] = 2 * (m[_ + 7] = o[s + 19]) - 1, f[g + 12] = 2 * (m[_ + 8] = o[s + 20]) - 1, f[g + 13] = 2 * (m[_ + 9] = o[s + 21]) - 1, f[g + 15] = 2 * (m[_ + 10] = o[s + 22]) - 1, f[g + 16] = 2 * (m[_ + 11] = o[s + 23]) - 1, _ += 12, g += 18), s += 12, p += 18;
                this.geometry.attributes.uv.needsUpdate = !0, this.geometry.attributes.position.needsUpdate = !0, this.oddGeometry.attributes.uv.needsUpdate = !0, this.oddGeometry.attributes.position.needsUpdate = !0
            }
        }, {
            key: "render",
            value: function(e) {
                var t = Kt.getColorState(),
                    i = Kt.uvCopyMaterial;
                this.textureSize.x == e.width && this.textureSize.y == e.height || (e.setSize(e.width, e.height), this.resize(Math.round(e.width / 3 * 2), e.height, e.width, e.height)), Kt.renderer.autoClear = !1;
                for (var r = e, a = this.tmpRenderTarget, n = 0, o = 0, s = this.maxMipmapLevel - 1; o < s; o++) {
                    i.uniforms.u_texture.value = r.texture, this.geometry.drawRange.start = 6 * o, this.geometry.drawRange.count = 6, Kt.renderGeometry(this.geometry, i, a), a === this.tmpRenderTarget && n++;
                    var l = a;
                    a = r, r = l
                }
                this.oddGeometry.drawRange.start = 0, this.oddGeometry.drawRange.count = 6 * n, i.uniforms.u_texture.value = this.tmpRenderTarget.texture, Kt.renderGeometry(this.oddGeometry, i, e), Kt.setColorState(t)
            }
        }]), e
    }(),
    xi = "#define GLSLIFY 1\nuniform vec2 u_ledTextureSize;uniform float u_ledTime;uniform vec3 u_color1;uniform vec3 u_color2;vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}float checkersTexture(in vec3 p){vec3 q=floor(p);return mod(q.x+q.y+q.z,2.0);}varying vec2 v_uv;void main(){vec2 uv=vec2(v_uv.x*u_ledTextureSize.x/u_ledTextureSize.y,v_uv.y)*15.0;float noise=snoise(vec3(uv,u_ledTime));float edgeTest=abs(noise-0.3);noise=smoothstep(0.3-fwidth(edgeTest),0.3,edgeTest);gl_FragColor=vec4(mix(u_color1,u_color2,noise),1.0);}",
    yi = function() {
        function e() {
            f(this, e), p(this, "id", ""), p(this, "scene", null), p(this, "camera", null), p(this, "material", null), p(this, "uniforms", {}), p(this, "vertexShader", ""), p(this, "fragmentShader", ""), p(this, "opacity", 1), p(this, "needsDerivative", !1), p(this, "hsl", {}), p(this, "colors", ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900"]), p(this, "currentColorBg", new w("#e0e4cc")), p(this, "currentColor1", new w("#69d2e7")), p(this, "currentColor2", new w("#fa6900")), p(this, "currentStyleId", ""), p(this, "changeTimeSum", 10), p(this, "CHANGE_TIME", 1)
        }
        return m(e, [{
            key: "preInit",
            value: function(e) {
                var t = this;
                Object.assign(this, e), this.fragmentShader && (this.material = new Z({
                    uniforms: this.uniforms,
                    vertexShader: Kt.vertexPrefix + (this.vertexShader || qt),
                    fragmentShader: Kt.fragmentPrefix + (ot.USE_WEBGL2 ? "" : "\n#extension GL_OES_standard_derivatives : enable\n") + this.fragmentShader,
                    depthTest: !1,
                    depthWrite: !1
                }), this.material.uniforms.u_ledTextureSize = Ci.sharedUniforms.u_ledTextureSize, this.material.uniforms.u_ledTime = Ci.sharedUniforms.u_ledTime, this.material.uniforms.u_opacity = {
                    value: this.opacity
                }), lt.onHoverStyleSignal.add((function(e) {
                    e !== t.currentStyleId && (t.changeTimeSum = t.CHANGE_TIME, t.currentStyleId = e)
                }))
            }
        }, {
            key: "init",
            value: function() {}
        }, {
            key: "change",
            value: function() {}
        }, {
            key: "changeColor",
            value: function() {
                this.colors = lt.hoverColorpalette;
                var e = ~~(this.colors.length * Math.random()),
                    t = (e + 2) % this.colors.length,
                    i = (t + 2) % this.colors.length;
                this.currentColorBg.set(this.colors[e]), this.currentColorBg.getHSL(this.hsl), this.currentColorBg.setHSL(this.hsl.h, .5, this.hsl.l), this.currentColor1.set(this.colors[t]), this.currentColor1.getHSL(this.hsl), this.currentColor1.setHSL(this.hsl.h, .5, this.hsl.l), this.currentColor2.set(this.colors[i]), this.currentColor2.getHSL(this.hsl), this.currentColor2.setHSL(this.hsl.h, .5, this.hsl.l)
            }
        }, {
            key: "update",
            value: function(e, t) {
                this.changeTimeSum += e, this.changeTimeSum > this.CHANGE_TIME && (this.changeColor(), this.changeTimeSum %= this.CHANGE_TIME)
            }
        }]), e
    }(),
    Ti = new(function(e) {
        n(i, yi);
        var t = s(i);

        function i() {
            var e;
            f(this, i);
            for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
            return p(u(e = t.call.apply(t, [this].concat(a))), "id", "ledEffectSimplexNoise"), p(u(e), "fragmentShader", xi), p(u(e), "uniforms", {
                u_color1: {
                    value: null
                },
                u_color2: {
                    value: null
                }
            }), e
        }
        return m(i, [{
            key: "preInit",
            value: function(e) {
                Object.assign(this, e), this.uniforms.u_color1.value = this.currentColor1, this.uniforms.u_color2.value = this.currentColor2, this.CHANGE_TIME = .5, r(c(i.prototype), "preInit", this).call(this)
            }
        }, {
            key: "init",
            value: function() {
                r(c(i.prototype), "init", this).call(this)
            }
        }, {
            key: "update",
            value: function(e, t) {
                r(c(i.prototype), "update", this).call(this, e, t)
            }
        }]), i
    }()),
    bi = new(function(e) {
        n(i, yi);
        var t = s(i);

        function i() {
            var e;
            f(this, i);
            for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
            return p(u(e = t.call.apply(t, [this].concat(a))), "id", "ledEffectShader2"), p(u(e), "camera", null), p(u(e), "scene", null), p(u(e), "spheres", null), p(u(e), "INSTANCE_COUNT", 64), e
        }
        return m(i, [{
            key: "preInit",
            value: function(e) {
                Object.assign(this, e), this.camera = new Ie(.5 * -Ci.WIDTH, .5 * Ci.WIDTH, .5 * Ci.HEIGHT, .5 * -Ci.HEIGHT, .01, 30), this.camera.position.z = 5, this.scene = new j, this.scene.background = this.currentColorBg;
                var t = new De(1, 1, 1),
                    a = new _e;
                for (var n in t.attributes) a.setAttribute(n, t.attributes[n]);
                a.index = t.index;
                for (var o = new Float32Array(3 * this.INSTANCE_COUNT), s = new Float32Array(3 * this.INSTANCE_COUNT), l = new Float32Array(this.INSTANCE_COUNT), u = new Float32Array(this.INSTANCE_COUNT), h = new Float32Array(this.INSTANCE_COUNT), d = new b, v = 0, m = 0; v < this.INSTANCE_COUNT; v++) o[m + 0] = (Math.random() - .5) * (Ci.WIDTH + .8), o[m + 1] = (Math.random() - .5) * (Ci.HEIGHT + 1), o[m + 2] = 3 - v / (this.INSTANCE_COUNT - 1) * 26, h[v] = 1.5 * (.5 + .5 * Math.random()), u[v] = 15 * (.3 + .7 * Math.random()), l[v] = v % 2, d.set(Math.random() - .5, Math.random() - .5, Math.random() - .5).normalize().toArray(s, m), m += 3;
                a.setAttribute("instancePos", new ge(o, 3)), a.setAttribute("instanceAxis", new ge(s, 3)), a.setAttribute("instanceSize", new ge(h, 1)), a.setAttribute("instanceSpeed", new ge(u, 1)), a.setAttribute("instanceColorIndex", new ge(l, 1));
                var f = new Ee({
                    roughness: .5
                });
                Te.ledEffectBoxesTransform = "#define GLSLIFY 1\nattribute vec3 instancePos;attribute vec3 instanceAxis;attribute float instanceSize;attribute float instanceSpeed;uniform vec2 u_ledSize;uniform float u_ledTime;vec4 getQ(vec3 axis,float angle){return vec4(axis.xyz*sin(angle),cos(angle));}vec3 qrotate(vec4 q,vec3 v){return v+2.0*cross(q.xyz,cross(q.xyz,v)+q.w*v);}void ledEffectBoxesTransform(inout vec3 pos){vec3 offset=instancePos;offset.y+=(u_ledSize.y+1.0+u_ledTime*instanceSpeed)*0.5;offset.y=mod(offset.y,u_ledSize.y+1.0)-(u_ledSize.y+1.0)*0.5;vec4 q=getQ(instanceAxis,u_ledTime*instanceSpeed*0.2);pos=qrotate(q,pos)*instanceSize+offset;}void ledEffectBoxesTransform(inout vec3 pos,inout vec3 nor){vec3 offset=instancePos;offset.y+=(u_ledSize.y+1.0+u_ledTime*instanceSpeed)*0.5;offset.y=mod(offset.y,u_ledSize.y+1.0)-(u_ledSize.y+1.0)*0.5;vec4 q=getQ(instanceAxis,u_ledTime*instanceSpeed*0.2);pos=qrotate(q,pos)*instanceSize+offset;nor=qrotate(q,nor);}", f.type = "ShaderMaterial", f.vertexShader = "#define GLSLIFY 1\n#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\nvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#include <ledEffectBoxesTransform>\nattribute float instanceColorIndex;varying vec3 v_localPosition;varying vec3 v_color;uniform vec3 u_color1;uniform vec3 u_color2;void main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\nv_localPosition=position;v_color=instanceColorIndex>0.5 ? u_color1 : u_color2;ledEffectBoxesTransform(transformed,transformedNormal);\n#include <normal_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n#ifdef USE_TRANSMISSION\nvWorldPosition=worldPosition.xyz;\n#endif\n}", f.fragmentShader = "#define GLSLIFY 1\n#define STANDARD\n#ifdef PHYSICAL\n#define IOR\n#define SPECULAR\n#endif\nuniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;\n#ifdef IOR\nuniform float ior;\n#endif\n#ifdef SPECULAR\nuniform float specularIntensity;uniform vec3 specularTint;\n#ifdef USE_SPECULARINTENSITYMAP\nuniform sampler2D specularIntensityMap;\n#endif\n#ifdef USE_SPECULARTINTMAP\nuniform sampler2D specularTintMap;\n#endif\n#endif\n#ifdef USE_CLEARCOAT\nuniform float clearcoat;uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\nuniform vec3 sheenTint;\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nuniform float u_ledTime;varying vec3 v_localPosition;varying vec3 v_color;void main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\nfloat pattern=step(0.75,fract((v_localPosition.x+v_localPosition.y+v_localPosition.z)*2.0+fract(u_ledTime)));diffuseColor=vec4(mix(v_color,vec3(1.0),pattern),1.0);\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <roughnessmap_fragment>\n#include <metalnessmap_fragment>\nmetalnessFactor=pattern*0.2;\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <clearcoat_normal_fragment_begin>\n#include <clearcoat_normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_physical_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 totalDiffuse=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse;vec3 totalSpecular=reflectedLight.directSpecular+reflectedLight.indirectSpecular;\n#include <transmission_fragment>\nvec3 outgoingLight=totalDiffuse+totalSpecular+totalEmissiveRadiance;\n#ifdef USE_CLEARCOAT\nfloat dotNVcc=saturate(dot(geometry.clearcoatNormal,geometry.viewDir));vec3 Fcc=F_Schlick(material.clearcoatF0,material.clearcoatF90,dotNVcc);outgoingLight=outgoingLight*(1.0-clearcoat*Fcc)+clearcoatSpecular*clearcoat;\n#endif\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}", f.uniforms = Pe.merge([ze.standard.uniforms]), f.uniforms.u_ledSize = Ci.sharedUniforms.u_ledSize, f.uniforms.u_ledTime = Ci.sharedUniforms.u_ledTime, f.uniforms.u_color1 = {
                    value: this.currentColor1
                }, f.uniforms.u_color2 = {
                    value: this.currentColor2
                };
                var p = new Fe;
                p.type = "ShaderMaterial", p.depthPacking = Re, p.vertexShader = "#define GLSLIFY 1\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\n#include <ledEffectBoxesTransform>\nvoid main(){\n#include <uv_vertex>\n#include <skinbase_vertex>\n#ifdef USE_DISPLACEMENTMAP\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinnormal_vertex>\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\nledEffectBoxesTransform(transformed);\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvHighPrecisionZW=gl_Position.zw;}", p.fragmentShader = ze.depth.fragmentShader, p.uniforms = Pe.merge([ze.depth.uniforms]), p.uniforms.u_ledSize = Ci.sharedUniforms.u_ledSize, p.uniforms.u_ledTime = Ci.sharedUniforms.u_ledTime, p.uniforms.u_color1 = f.uniforms.u_color1, p.uniforms.u_color2 = f.uniforms.u_color2, this.spheres = new O(a, f), this.spheres.customDepthMaterial = p, this.spheres.castShadow = !0, this.spheres.receiveShadow = !0;
                var _ = new Oe(16777215, .2);
                _.position.set(-6, 6, 10), _.castShadow = !0, _.shadow.camera.left = -5, _.shadow.camera.right = 5, _.shadow.camera.top = 10, _.shadow.camera.bottom = -10, _.shadow.camera.near = .1, _.shadow.camera.far = 100, this.scene.add(_);
                var g = new Oe(16777215, .2);
                g.position.set(3, -3, 10), g.castShadow = !0, g.shadow.camera.left = -5, g.shadow.camera.right = 5, g.shadow.camera.top = 10, g.shadow.camera.bottom = -10, g.shadow.camera.near = .1, g.shadow.camera.far = 100, this.scene.add(g);
                var x = new Ne(16777215, .65);
                this.scene.add(x), this.scene.add(this.spheres), r(c(i.prototype), "preInit", this).call(this)
            }
        }, {
            key: "init",
            value: function() {
                r(c(i.prototype), "init", this).call(this)
            }
        }, {
            key: "change",
            value: function() {}
        }, {
            key: "update",
            value: function(e, t) {
                r(c(i.prototype), "update", this).call(this, e, t)
            }
        }]), i
    }()),
    Si = new(function(e) {
        n(i, yi);
        var t = s(i);

        function i() {
            var e;
            f(this, i);
            for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
            return p(u(e = t.call.apply(t, [this].concat(a))), "id", "ledEffectEmojis"), p(u(e), "camera", null), p(u(e), "scene", null), p(u(e), "mesh", null), p(u(e), "INSTANCE_COUNT", 128), e
        }
        return m(i, [{
            key: "preInit",
            value: function(e) {
                Object.assign(this, e), this.camera = new Ie(.5 * -Ci.WIDTH, .5 * Ci.WIDTH, .5 * Ci.HEIGHT, .5 * -Ci.HEIGHT, .01, 30), this.camera.position.z = 5, this.scene = new j, this.scene.background = this.currentColorBg;
                var t = new X(1, 1),
                    a = new _e;
                for (var n in t.attributes) a.setAttribute(n, t.attributes[n]);
                a.index = t.index;
                for (var o = new Float32Array(3 * this.INSTANCE_COUNT), s = new Float32Array(this.INSTANCE_COUNT), l = new Float32Array(this.INSTANCE_COUNT), u = new Float32Array(this.INSTANCE_COUNT), h = 0, d = 0; h < this.INSTANCE_COUNT; h++) o[d + 0] = (Math.random() - .5) * (Ci.WIDTH + .8), o[d + 1] = (Math.random() - .5) * (Ci.HEIGHT + 1), o[d + 2] = 3 - 26 * (1 - h / (this.INSTANCE_COUNT - 1)), l[h] = 1.5 * (.5 + .5 * Math.random()), s[h] = 15 * (.3 + .7 * Math.random()) * (Math.random() > .5 ? 1 : -1), u[h] = h % 8, d += 3;
                a.setAttribute("instancePos", new ge(o, 3)), a.setAttribute("instanceSize", new ge(l, 1)), a.setAttribute("instanceSpeed", new ge(s, 1)), a.setAttribute("emojiIndex", new ge(u, 1));
                var v = new xe({
                    uniforms: {
                        u_texture: {
                            value: lt.loader.add(settings.TEXTURE_PATH + "emojis.webp", p({
                                type: "image"
                            }, "type", "texture")).content
                        },
                        u_ledSize: Ci.sharedUniforms.u_ledSize,
                        u_ledTime: Ci.sharedUniforms.u_ledTime
                    },
                    vertexShader: "#define GLSLIFY 1\nattribute vec3 instancePos;attribute float instanceSize;attribute float instanceSpeed;attribute float emojiIndex;varying vec2 v_uv;uniform vec2 u_ledSize;uniform float u_ledTime;vec4 getQ(vec3 axis,float angle){return vec4(axis.xyz*sin(angle),cos(angle));}vec3 qrotate(vec4 q,vec3 v){return v+2.0*cross(q.xyz,cross(q.xyz,v)+q.w*v);}void main(){vec3 pos=position;vec3 offset=instancePos;offset.y+=(u_ledSize.y+1.0+u_ledTime*abs(instanceSpeed))*0.5;offset.y=mod(offset.y,u_ledSize.y+1.0)-(u_ledSize.y+1.0)*0.5;vec4 q=getQ(vec3(0.0,0.0,1.0),u_ledTime*instanceSpeed*0.2);pos=qrotate(q,pos)*instanceSize+offset;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);v_uv=(uv+vec2(mod(emojiIndex,2.0),floor(emojiIndex/2.0)))*vec2(0.5,0.25);}",
                    fragmentShader: "#define GLSLIFY 1\nuniform sampler2D u_texture;varying vec2 v_uv;\n#include <textureBicubic>\nvoid main(){gl_FragColor=textureBicubic(u_texture,v_uv,vec2(128.0,256.0));}",
                    blending: Ue,
                    blendEquation: He,
                    blendSrc: Be,
                    blendDst: Ge,
                    blendEquationAlpha: He,
                    blendSrcAlpha: qe,
                    blendDstAlpha: We
                });
                this.mesh = new O(a, v), this.scene.add(this.mesh), r(c(i.prototype), "preInit", this).call(this)
            }
        }, {
            key: "init",
            value: function() {
                r(c(i.prototype), "init", this).call(this)
            }
        }, {
            key: "change",
            value: function() {}
        }, {
            key: "update",
            value: function(e, t) {
                r(c(i.prototype), "update", this).call(this, e, t)
            }
        }]), i
    }()),
    wi = new(function(e) {
        n(i, yi);
        var t = s(i);

        function i() {
            var e;
            f(this, i);
            for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
            return p(u(e = t.call.apply(t, [this].concat(a))), "id", "ledEffectShader1"), p(u(e), "camera", null), p(u(e), "scene", null), p(u(e), "spheres", null), p(u(e), "INSTANCE_COUNT", 65), p(u(e), "WIDTH", 2), p(u(e), "HEIGHT", .5), e
        }
        return m(i, [{
            key: "preInit",
            value: function(e) {
                Object.assign(this, e), this.camera = new Ie(.5 * -Ci.WIDTH, .5 * Ci.WIDTH, .5 * Ci.HEIGHT, .5 * -Ci.HEIGHT, .01, 30), this.camera.position.z = 5, this.scene = new j, this.scene.background = this.currentColorBg;
                var t = new De(this.WIDTH, this.HEIGHT, .5 * this.HEIGHT),
                    a = new _e;
                for (var n in t.attributes) a.setAttribute(n, t.attributes[n]);
                a.index = t.index;
                for (var o = new Float32Array(3 * this.INSTANCE_COUNT), s = new Float32Array(this.INSTANCE_COUNT), l = new Float32Array(this.INSTANCE_COUNT), u = 0, h = 0; u < this.INSTANCE_COUNT; u++) o[h + 0] = 0, o[h + 1] = this.HEIGHT * (u - .5) - Ci.HEIGHT / 2, o[h + 2] = 0, s[u] = u, l[u] = 1 * Math.PI * u / this.INSTANCE_COUNT, h += 3;
                a.setAttribute("instancePos", new ge(o, 3)), a.setAttribute("instanceId", new ge(s, 1)), a.setAttribute("instanceDelay", new ge(l, 1));
                var d = new Ee({
                    metalness: 0,
                    roughness: 1
                });
                Te.ledEffectSceneShaderTestTransform = "#define GLSLIFY 1\nattribute float instanceId;attribute vec3 instancePos;attribute float instanceDelay;uniform vec2 u_ledSize;uniform float u_ledTime;varying float vInstanceId;varying vec2 vUv;varying vec3 vWorldNormal;mat4 rotationMatrix(vec3 axis,float angle){axis=normalize(axis);float s=sin(angle);float c=cos(angle);float oc=1.0-c;return mat4(oc*axis.x*axis.x+c,oc*axis.x*axis.y-axis.z*s,oc*axis.z*axis.x+axis.y*s,0.0,oc*axis.x*axis.y+axis.z*s,oc*axis.y*axis.y+c,oc*axis.y*axis.z-axis.x*s,0.0,oc*axis.z*axis.x-axis.y*s,oc*axis.y*axis.z+axis.x*s,oc*axis.z*axis.z+c,0.0,0.0,0.0,0.0,1.0);}vec3 ledEffectSceneShaderTestTransform(vec3 pos){vec3 offset=instancePos;float time=u_ledTime*ITERATIONS+instanceDelay;float period=ITERATIONS*2.0*PI;time=mod(time,period)/period;time=abs(2.0*fract(time)-1.0);time=smoothstep(0.2,0.8,time);time*=time;mat4 m=rotationMatrix(vec3(1.0,0.0,0.0),PI*time);pos*=0.5+0.5*(1.0-sin(time*PI));pos.y*=0.5+0.5*(1.0+cos((u_ledTime+instanceDelay)*5.333));offset.xy+=0.5*sin((2.0*time*PI));return(m*vec4(pos,1.0)).xyz+offset;}", d.type = "ShaderMaterial", d.vertexShader = "#define GLSLIFY 1\n#define ITERATIONS 3.0\n#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\nvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#include <ledEffectSceneShaderTestTransform>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\ntransformed=ledEffectSceneShaderTestTransform(transformed);\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n#ifdef USE_TRANSMISSION\nvWorldPosition=worldPosition.xyz;\n#endif\nvInstanceId=instanceId;vUv=uv;}", d.fragmentShader = "#define GLSLIFY 1\n#define STANDARD\n#ifdef PHYSICAL\n#define IOR\n#define SPECULAR\n#endif\nuniform sampler2D u_patternTextureFront;uniform sampler2D u_patternTextureBack;uniform vec3 u_color0;uniform vec3 u_color1;uniform vec3 u_patternIndexFront;uniform vec3 u_patternIndexBack;varying float vInstanceId;varying vec2 vUv;uniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;\n#ifdef IOR\nuniform float ior;\n#endif\n#ifdef SPECULAR\nuniform float specularIntensity;uniform vec3 specularTint;\n#ifdef USE_SPECULARINTENSITYMAP\nuniform sampler2D specularIntensityMap;\n#endif\n#ifdef USE_SPECULARTINTMAP\nuniform sampler2D specularTintMap;\n#endif\n#endif\n#ifdef USE_CLEARCOAT\nuniform float clearcoat;uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\nuniform vec3 sheenTint;\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nbool isTop=vNormal.z>0.0;bool isDepth=vNormal.z==0.0;vec3 baseColor=isTop ? u_color0 : u_color1;vec4 diffuseColor=isDepth ? vec4(vec3(0.3),opacity): vec4(baseColor,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <roughnessmap_fragment>\n#include <metalnessmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <clearcoat_normal_fragment_begin>\n#include <clearcoat_normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_physical_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 totalDiffuse=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse;vec3 totalSpecular=reflectedLight.directSpecular+reflectedLight.indirectSpecular;\n#include <transmission_fragment>\nvec3 outgoingLight=totalDiffuse+totalSpecular+totalEmissiveRadiance;\n#ifdef USE_CLEARCOAT\nfloat dotNVcc=saturate(dot(geometry.clearcoatNormal,geometry.viewDir));vec3 Fcc=F_Schlick(material.clearcoatF0,material.clearcoatF90,dotNVcc);outgoingLight=outgoingLight*(1.0-clearcoat*Fcc)+clearcoatSpecular*clearcoat;\n#endif\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}", d.uniforms = Pe.merge([ze.standard.uniforms]), d.uniforms.u_ledSize = Ci.sharedUniforms.u_ledSize, d.uniforms.u_ledTime = {
                    value: 0
                }, d.uniforms.u_color0 = {
                    value: this.currentColor1
                }, d.uniforms.u_color1 = {
                    value: this.currentColor2
                }, this.spheres = new O(a, d), this.scene.add(this.spheres);
                var v = new Oe(16777215, .2);
                v.position.set(-6, 6, 10), this.scene.add(v);
                var m = new Ne(16777215, 1);
                this.scene.add(m), r(c(i.prototype), "preInit", this).call(this)
            }
        }, {
            key: "init",
            value: function() {
                r(c(i.prototype), "init", this).call(this)
            }
        }, {
            key: "update",
            value: function(e, t) {
                this.spheres.material.opacity = this.opacity, this.spheres.material.uniforms.u_ledTime.value -= e, r(c(i.prototype), "update", this).call(this, e, t)
            }
        }]), i
    }()),
    ki = new(function(e) {
        n(i, yi);
        var t = s(i);

        function i() {
            var e;
            f(this, i);
            for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
            return p(u(e = t.call.apply(t, [this].concat(a))), "id", "ledEffectShader3"), p(u(e), "camera", null), p(u(e), "scene", null), p(u(e), "boxes", null), e
        }
        return m(i, [{
            key: "preInit",
            value: function(e) {
                Object.assign(this, e), r(c(i.prototype), "preInit", this).call(this), this.camera = new K(45, Ci.WIDTH / Ci.HEIGHT, .1, 300), this.camera.position.z = 155, this.scene = new j, this.scene.background = this.currentColorBg;
                var t = new De(1, 1, 1),
                    a = new _e;
                for (var n in t.attributes) a.setAttribute(n, t.attributes[n]);
                a.index = t.index;
                for (var o = 4 * Ci.WIDTH, s = 4 * Ci.HEIGHT, l = o * s, u = new Float32Array(3 * l), h = 0, d = 0; h < l; h++, d += 3) u[d + 0] = h % o - .5 * o + .5, u[d + 1] = ~~(h / o) - .5 * s + .5;
                a.setAttribute("instancePos", new ge(u, 3));
                var v = new xe({
                    uniforms: {
                        u_posToUvOffset: {
                            value: new L(0, 0)
                        },
                        u_posToUvScale: {
                            value: new L(0, 0)
                        },
                        u_color1: {
                            value: this.currentColor1
                        },
                        u_color2: {
                            value: this.currentColor2
                        },
                        u_ledTime: Ci.sharedUniforms.u_ledTime
                    },
                    vertexShader: "#define GLSLIFY 1\nattribute vec3 instancePos;uniform vec3 u_color1;uniform vec3 u_color2;uniform float u_ledTime;varying vec3 v_viewPosition;varying vec3 v_viewNormal;varying vec3 v_color;vec4 hash44(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 getQ(vec3 axis,float angle){return vec4(axis.xyz*sin(angle),cos(angle));}vec3 qrotate(vec4 q,vec3 v){return v+2.0*cross(q.xyz,cross(q.xyz,v)+q.w*v);}void main(){vec4 rand1s=hash44(vec4(instancePos,0.0));vec4 rand2s=hash44(vec4(instancePos,100.0));vec4 q1=getQ(normalize(rand1s.xyz-0.5),0.05+sin(u_ledTime*10.0+rand1s.w*6.2831853)*0.05);vec3 pos=qrotate(q1,position)+instancePos;vec3 nor=normalMatrix*qrotate(q1,normal);v_viewNormal=nor;v_color=mix(u_color1,u_color2,fract(u_ledTime*-0.3+instancePos.y*0.03+rand2s.w*0.1));vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;gl_Position=projectionMatrix*mvPosition;}",
                    fragmentShader: "#define GLSLIFY 1\nvarying vec3 v_viewPosition;varying vec3 v_viewNormal;varying vec3 v_color;void main(){vec3 viewNormal=normalize(v_viewNormal);float halfDiff=dot(viewNormal,vec3(0.5773))*0.5+0.5;gl_FragColor=vec4(v_color*halfDiff,1.0);}"
                });
                this.mesh = new O(a, v), this.scene.add(this.mesh), this.CHANGE_TIME = 1
            }
        }, {
            key: "init",
            value: function() {
                r(c(i.prototype), "init", this).call(this)
            }
        }, {
            key: "update",
            value: function(e, t) {
                r(c(i.prototype), "update", this).call(this, e, t)
            }
        }]), i
    }()),
    Ci = new(function() {
        function e() {
            f(this, e), p(this, "container", void 0), p(this, "currentEffect", null), p(this, "effectList", [Si, Ti, wi, bi, ki]), p(this, "effects", {}), p(this, "time", 0), p(this, "WIDTH", 2), p(this, "HEIGHT", 32), p(this, "PIXEL_DENSITY", at.isMobile ? 32 : 128), p(this, "TEXTURE_WIDTH", 0), p(this, "TEXTURE_HEIGHT", 0), p(this, "_m1", new F), p(this, "_m2", new F), p(this, "sharedUniforms", {
                u_ledSize: {
                    value: new L
                },
                u_ledTextureSize: {
                    value: new L
                },
                u_ledTime: {
                    value: 0
                },
                u_ledPulseRatio: {
                    value: 0
                },
                u_areaLightLodTexture: {
                    value: null
                },
                u_areaLightLodTextureSize: {
                    value: new L
                },
                u_areaLightLodTextureMaxLod: {
                    value: 0
                },
                u_areaLightLtc1: {
                    value: null
                },
                u_areaLightLtc2: {
                    value: null
                },
                u_areaLightHalfWidth: {
                    value: new b
                },
                u_areaLightHalfHeight: {
                    value: new b
                },
                u_areaLightPosition: {
                    value: new b
                },
                u_areaLightIntensity: {
                    value: 1
                }
            })
        }
        return m(e, [{
            key: "addPulseData",
            value: function(e) {}
        }, {
            key: "preInit",
            value: function() {
                var e = this,
                    t = this.TEXTURE_WIDTH = this.WIDTH * this.PIXEL_DENSITY,
                    i = this.TEXTURE_HEIGHT = this.HEIGHT * this.PIXEL_DENSITY;
                this.mipmapper = new gi, this.mipmapper.init(), this.renderTarget = Kt.createMultisampleRenderTarget(t, i), this.renderTarget.depthBuffer = !0, this.lodRenderTarget = Kt.createRenderTarget(1.5 * t, i), this.mipmapper.resize(t, i, this.lodRenderTarget.width, this.lodRenderTarget.height), this.sharedUniforms.u_areaLightLodTexture.value = this.lodRenderTarget.texture, this.sharedUniforms.u_areaLightLodTextureSize.value.set(this.lodRenderTarget.width, this.lodRenderTarget.height), this.sharedUniforms.u_areaLightLodTextureMaxLod.value = this.mipmapper.maxMipmapLevel, this.sharedUniforms.u_ledSize.value.set(this.WIDTH, this.HEIGHT), this.sharedUniforms.u_ledTextureSize.value.set(t, i), this.sharedUniforms.u_areaLightPosition.value.set(0, .8, 0), this.sharedUniforms.u_areaLightHalfWidth.value.set(.5 * this.WIDTH, 0, 0), this.sharedUniforms.u_areaLightHalfHeight.value.set(0, 0, .5 * this.HEIGHT), ot.LED_EFFECT_TEST_MODE && (lt.debugTexture = this.lodRenderTarget.texture), lt.loader.add(ot.MODEL_PATH + "ltc_mats.buf", {
                    type: "xhr",
                    responseType: "arraybuffer",
                    weight: 128,
                    onLoad: function(t) {
                        var i = Kt.createDataTexture(new Float32Array(t, 0, 16384), 64, 64, !0, !1, !0),
                            r = Kt.createDataTexture(new Float32Array(t, 65536, 16384), 64, 64, !0, !1, !0);
                        e.sharedUniforms.u_areaLightLtc1.value = i, e.sharedUniforms.u_areaLightLtc2.value = r
                    }
                }), ti.addChunk("textureArealight", "#define GLSLIFY 1\nuniform sampler2D u_areaLightLtc1;uniform sampler2D u_areaLightLtc2;float LTC_ClippedSphereFormFactor(const in vec3 f){float l=length(f);return max((l*l+f.z)/(l+1.0),0.0);}vec3 LTC_EdgeVectorFormFactor(const in vec3 v1,const in vec3 v2){float x=dot(v1,v2);float y=abs(x);float a=0.8543985+(0.4965155+0.0145206*y)*y;float b=3.4175940+(4.1616724+y)*y;float v=a/b;float theta_sintheta=(x>0.0)? v : 0.5*inversesqrt(max(1.0-x*x,1e-7))-v;return cross(v1,v2)*theta_sintheta;}vec3 FetchDiffuseFilteredTexture(sampler2D texLightFiltered,float lodMax,vec2 lodTextureSize,float lodDistMultiplier,float roughness,vec3 p1_,vec3 p2_,vec3 p3_,vec3 p4_){vec3 V1=p2_-p1_;vec3 V2=p4_-p1_;vec3 planeOrtho=(cross(V1,V2));float planeAreaSquared=dot(planeOrtho,planeOrtho);float planeDistxPlaneArea=dot(planeOrtho,p1_);vec3 P=planeDistxPlaneArea*planeOrtho/planeAreaSquared-p1_;float dot_V1_V2=dot(V1,V2);float inv_dot_V1_V1=1.0/dot(V1,V1);vec3 V2_=V2-V1*dot_V1_V2*inv_dot_V1_V1;vec2 Puv;Puv.y=dot(V2_,P)/dot(V2_,V2_);Puv.x=dot(V1,P)*inv_dot_V1_V1-dot_V1_V2*inv_dot_V1_V1*Puv.y;float d=abs(planeDistxPlaneArea)/pow(planeAreaSquared,0.75);float lod=min(lodMax,log(d*lodDistMultiplier+1.0)*roughness);vec2 uv=clamp(Puv,vec2(0.0),vec2(1.0));uv.y=1.0-uv.y;return lodMipmapSampleCubic(texLightFiltered,uv,lod,lodTextureSize).rgb;}mat3 transposeMat3(const in mat3 m){mat3 tmp;tmp[0]=vec3(m[0].x,m[1].x,m[2].x);tmp[1]=vec3(m[0].y,m[1].y,m[2].y);tmp[2]=vec3(m[0].z,m[1].z,m[2].z);return tmp;}vec3 LTC_Evaluate(sampler2D texLightFiltered,float lodMax,vec2 lodTextureSize,float lodDistMultiplier,float roughness,const in vec3 N,const in vec3 V,const in vec3 P,const in mat3 mInv,const in vec3 rectCoords[4]){vec3 v1=rectCoords[1]-rectCoords[0];vec3 v2=rectCoords[3]-rectCoords[0];vec3 lightNormal=cross(v1,v2);if(dot(lightNormal,P-rectCoords[0])<0.0)return vec3(0.0);vec3 T1,T2;T1=normalize(V-N*dot(V,N));T2=-cross(N,T1);mat3 mat=mInv*transposeMat3(mat3(T1,T2,N));vec3 coords[4];coords[0]=mat*(rectCoords[0]-P);coords[1]=mat*(rectCoords[1]-P);coords[2]=mat*(rectCoords[2]-P);coords[3]=mat*(rectCoords[3]-P);vec3 textureLight=FetchDiffuseFilteredTexture(texLightFiltered,lodMax,lodTextureSize,lodDistMultiplier,roughness,coords[0],coords[1],coords[2],coords[3]);coords[0]=normalize(coords[0]);coords[1]=normalize(coords[1]);coords[2]=normalize(coords[2]);coords[3]=normalize(coords[3]);vec3 vectorFormFactor=vec3(0.0);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[0],coords[1]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[1],coords[2]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[2],coords[3]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[3],coords[0]);float result=LTC_ClippedSphereFormFactor(vectorFormFactor);return vec3(result)*textureLight;}vec2 LTC_Uv(const in vec3 N,const in vec3 V,const in float roughness){const float LUT_SIZE=64.0;const float LUT_SCALE=(LUT_SIZE-1.0)/LUT_SIZE;const float LUT_BIAS=0.5/LUT_SIZE;float dotNV=clamp(dot(N,V),0.0,1.0);vec2 uv=vec2(roughness,sqrt(1.0-dotNV));uv=uv*LUT_SCALE+LUT_BIAS;return uv;}void calcTextureArealight(out vec3 diff,out vec3 spec,sampler2D texLightFiltered,vec2 lodTextureSize,float lodMax,float lodDistMultiplier,const in vec3 lightPos,const in vec3 lightHalfWidth,const in vec3 lightHalfHeight,const in vec3 diffuseColor,const in vec3 specularColor,const in float roughness,const in vec3 N,const in vec3 V,const in vec3 P){vec3 rectCoords[4];rectCoords[0]=lightPos+lightHalfWidth-lightHalfHeight;rectCoords[1]=lightPos-lightHalfWidth-lightHalfHeight;rectCoords[2]=lightPos-lightHalfWidth+lightHalfHeight;rectCoords[3]=lightPos+lightHalfWidth+lightHalfHeight;vec2 uv=LTC_Uv(N,V,roughness);vec4 t1=texture2D(u_areaLightLtc1,uv);vec4 t2=texture2D(u_areaLightLtc2,uv);mat3 mInv=mat3(vec3(t1.x,0,t1.y),vec3(0,1,0),vec3(t1.z,0,t1.w));vec3 fresnel=(specularColor*t2.x+(vec3(1.0)-specularColor)*t2.y);diff=diffuseColor*LTC_Evaluate(texLightFiltered,lodMax,lodTextureSize,lodDistMultiplier,0.9,N,V,P,mat3(1.0),rectCoords);spec=fresnel*LTC_Evaluate(texLightFiltered,lodMax,lodTextureSize,lodDistMultiplier,roughness,N,V,P,mInv,rectCoords);}");
                for (var r = 0, a = this.effectList.length; r < a; r++) {
                    var n = this.effectList[r];
                    this.effects[n.id] = n, n.preInit()
                }
            }
        }, {
            key: "init",
            value: function() {
                for (var e = 0, t = this.effectList.length; e < t; e++) this.effectList[e].init()
            }
        }, {
            key: "resize",
            value: function(e, t) {}
        }, {
            key: "changeEffect",
            value: function(e) {
                this.currentEffect = e, this.time = 0, this.currentEffect.change()
            }
        }, {
            key: "update",
            value: function(e) {
                if (this.currentEffect) {
                    this.sharedUniforms.u_ledPulseRatio.value = (this.sharedUniforms.u_ledPulseRatio.value + e) % 1, this.time += e, this.sharedUniforms.u_ledTime.value = this.time, this.currentEffect.update(e, this.time);
                    var t = Kt.renderer,
                        i = this.lodRenderTarget;
                    this.currentEffect.camera && this.currentEffect.scene ? (t.shadowMap.enabled = !0, t.setRenderTarget(this.renderTarget), t.render(this.currentEffect.scene, this.currentEffect.camera), t.setRenderTarget(this.lodRenderTarget), t.setViewport(0, 0, 2 * i.width / 3, i.height), Kt.tri.material = Kt.copyMaterial, Kt.copyMaterial.uniforms.u_texture.value = this.renderTarget.texture, t.render(Kt.scene, Kt.camera), t.shadowMap.enabled = !1) : (t.setRenderTarget(this.lodRenderTarget), t.setViewport(0, 0, 2 * i.width / 3, i.height), Kt.tri.material = this.currentEffect.material, t.render(Kt.scene, Kt.camera)), this.mipmapper.render(i), t.setViewport(0, 0, lt.width, lt.height)
                }
            }
        }]), e
    }()),
    Li = new(function() {
        function e() {
            f(this, e), p(this, "container", null), p(this, "mesh", null), p(this, "spotlightMesh", null), p(this, "doorMesh", null), p(this, "texture", null), p(this, "doorLightIntensity", 1), p(this, "time", 0), p(this, "hsl", {}), p(this, "sharedUniforms", {
                u_doorLightIntensity: {
                    value: 1
                },
                u_spotlightsColor: {
                    value: new w
                },
                u_spotlightsIntensity: {
                    value: 1
                }
            }), this.container = new R
        }
        return m(e, [{
            key: "preInit",
            value: function() {
                var e = this;
                lt.loader.add(ot.MODEL_PATH + "stage.buf", {
                    onLoad: function(t) {
                        return e._onModelLoad(t)
                    }
                }), lt.loader.add(ot.MODEL_PATH + "spotlights.buf", {
                    onLoad: function(t) {
                        return e._onSpotlightModelLoad(t)
                    }
                }), this.infoTexture = lt.loader.add(ot.TEXTURE_PATH + "floor.webp", {
                    type: "texture",
                    weight: 519
                }).content, this.infoTexture.wrapS = this.infoTexture.wrapT = Ke, this.texture = lt.loader.add(ot.TEXTURE_PATH + "stage.webp", p({
                    type: "image"
                }, "type", "texture")).content, this._createDoors()
            }
        }, {
            key: "_onModelLoad",
            value: function(e) {
                this.mesh = new O(e, new xe({
                    uniforms: {
                        u_texture: {
                            value: this.texture
                        },
                        u_infoTexture: {
                            value: this.infoTexture
                        },
                        u_areaLightLodTexture: Ci.sharedUniforms.u_areaLightLodTexture,
                        u_areaLightLodTextureSize: Ci.sharedUniforms.u_areaLightLodTextureSize,
                        u_areaLightLodTextureMaxLod: Ci.sharedUniforms.u_areaLightLodTextureMaxLod,
                        u_areaLightLtc1: Ci.sharedUniforms.u_areaLightLtc1,
                        u_areaLightLtc2: Ci.sharedUniforms.u_areaLightLtc2,
                        u_areaLightHalfWidth: Ci.sharedUniforms.u_areaLightHalfWidth,
                        u_areaLightHalfHeight: Ci.sharedUniforms.u_areaLightHalfHeight,
                        u_areaLightPosition: Ci.sharedUniforms.u_areaLightPosition,
                        u_areaLightIntensity: Ci.sharedUniforms.u_areaLightIntensity,
                        u_doorLightIntensity: this.sharedUniforms.u_doorLightIntensity,
                        u_spotlightsColor: this.sharedUniforms.u_spotlightsColor,
                        u_spotlightsIntensity: this.sharedUniforms.u_spotlightsIntensity
                    },
                    vertexShader: "#define GLSLIFY 1\nvarying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec2 v_uv;void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);v_worldPosition=vec4(modelMatrix*vec4(position,1.0)).xyz;v_worldNormal=normal;v_uv=uv;}",
                    fragmentShader: "#define GLSLIFY 1\nuniform sampler2D u_texture;uniform sampler2D u_infoTexture;uniform float u_doorLightIntensity;uniform sampler2D u_areaLightLodTexture;uniform vec2 u_areaLightLodTextureSize;uniform float u_areaLightLodTextureMaxLod;uniform vec3 u_areaLightHalfWidth;uniform vec3 u_areaLightHalfHeight;uniform vec3 u_areaLightPosition;uniform float u_areaLightIntensity;uniform vec3 u_spotlightsColor;uniform float u_spotlightsIntensity;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec2 v_uv;\n#include <textureBicubic>\n#include <lodMipmapSample>\nvec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}float mod289(float x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}float permute(float x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float taylorInvSqrt(float r){return 1.79284291400159-0.85373472095314*r;}vec4 grad4(float j,vec4 ip){const vec4 ones=vec4(1.0,1.0,1.0,-1.0);vec4 p,s;p.xyz=floor(fract(vec3(j)*ip.xyz)*7.0)*ip.z-1.0;p.w=1.5-dot(abs(p.xyz),ones.xyz);s=vec4(lessThan(p,vec4(0.0)));p.xyz=p.xyz+(s.xyz*2.0-1.0)*s.www;return p;}\n#define F4 0.309016994374947451\nfloat snoise(vec4 v){const vec4 C=vec4(0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);vec4 i=floor(v+dot(v,vec4(F4)));vec4 x0=v-i+dot(i,C.xxxx);vec4 i0;vec3 isX=step(x0.yzw,x0.xxx);vec3 isYZ=step(x0.zww,x0.yyz);i0.x=isX.x+isX.y+isX.z;i0.yzw=1.0-isX;i0.y+=isYZ.x+isYZ.y;i0.zw+=1.0-isYZ.xy;i0.z+=isYZ.z;i0.w+=1.0-isYZ.z;vec4 i3=clamp(i0,0.0,1.0);vec4 i2=clamp(i0-1.0,0.0,1.0);vec4 i1=clamp(i0-2.0,0.0,1.0);vec4 x1=x0-i1+C.xxxx;vec4 x2=x0-i2+C.yyyy;vec4 x3=x0-i3+C.zzzz;vec4 x4=x0+C.wwww;i=mod289(i);float j0=permute(permute(permute(permute(i.w)+i.z)+i.y)+i.x);vec4 j1=permute(permute(permute(permute(i.w+vec4(i1.w,i2.w,i3.w,1.0))+i.z+vec4(i1.z,i2.z,i3.z,1.0))+i.y+vec4(i1.y,i2.y,i3.y,1.0))+i.x+vec4(i1.x,i2.x,i3.x,1.0));vec4 ip=vec4(1.0/294.0,1.0/49.0,1.0/7.0,0.0);vec4 p0=grad4(j0,ip);vec4 p1=grad4(j1.x,ip);vec4 p2=grad4(j1.y,ip);vec4 p3=grad4(j1.z,ip);vec4 p4=grad4(j1.w,ip);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;p4*=taylorInvSqrt(dot(p4,p4));vec3 m0=max(0.6-vec3(dot(x0,x0),dot(x1,x1),dot(x2,x2)),0.0);vec2 m1=max(0.6-vec2(dot(x3,x3),dot(x4,x4)),0.0);m0=m0*m0;m1=m1*m1;return 49.0*(dot(m0*m0,vec3(dot(p0,x0),dot(p1,x1),dot(p2,x2)))+dot(m1*m1,vec2(dot(p3,x3),dot(p4,x4))));}void main(){vec3 color=vec3(0.0);vec3 lightMap=texture2D(u_texture,v_uv).rgb;vec3 info=(texture2D(u_infoTexture,v_uv*12.0).rgb+texture2D(u_infoTexture,v_uv*2.7+0.5).bgr)*0.5;vec3 ambient=lodMipmapSample(u_areaLightLodTexture,vec2(0.5,0.5),floor(u_areaLightLodTextureMaxLod*0.9-info.r*2.0),u_areaLightLodTextureSize).rgb*u_areaLightIntensity;color=lightMap.g*ambient;vec3 doorLight=vec3(1.0)*lightMap.r*u_doorLightIntensity*0.75;vec3 spotlights=lightMap.b*u_spotlightsColor*u_spotlightsIntensity*0.5;color+=doorLight+spotlights;color=color*0.25+color*color*(info.r+0.75);gl_FragColor=vec4(color*(v_worldPosition.y>0.001 ? 0.75 : 0.35),1.0);}"
                })), Ci.addPulseData(this.mesh.material), this.container.add(this.mesh)
            }
        }, {
            key: "_onSpotlightModelLoad",
            value: function(e) {
                this.spotlightMesh = new O(e, new xe({
                    uniforms: {
                        u_spotlightsColor: this.sharedUniforms.u_spotlightsColor,
                        u_spotlightsIntensity: this.sharedUniforms.u_spotlightsIntensity
                    },
                    vertexShader: "#define GLSLIFY 1\nattribute float intensity;varying vec3 v_viewPosition;varying vec3 v_viewNormal;varying float v_intensity;void main(){vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;v_viewPosition=mvPosition.xyz;v_viewNormal=normalMatrix*normal;v_intensity=intensity;}",
                    fragmentShader: "#define GLSLIFY 1\nuniform vec3 u_spotlightsColor;uniform float u_spotlightsIntensity;varying vec3 v_viewPosition;varying vec3 v_viewNormal;varying float v_intensity;void main(){vec3 spotlights=u_spotlightsColor+0.15;vec3 viewNormal=normalize(v_viewNormal);vec3 viewDir=normalize(v_viewPosition);float f=max(0.0,-dot(viewDir,viewNormal));float intensity=v_intensity*mix(f*f,v_intensity>0.999 ? 1.0 : f,smoothstep(0.0,1.0,v_intensity));intensity*=intensity*u_spotlightsIntensity;gl_FragColor=vec4(spotlights*intensity/(1.0-intensity+0.001)*0.25,1.0);}",
                    depthWrite: !1,
                    transparent: !0,
                    blending: Ue,
                    blendEquation: He,
                    blendSrc: We,
                    blendDst: We,
                    blendEquationAlpha: He,
                    blendSrcAlpha: qe,
                    blendDstAlpha: We
                })), this.container.add(this.spotlightMesh)
            }
        }, {
            key: "_createDoors",
            value: function() {
                var e = new X(1.9965, 6.70303);
                e.translate(0, 4.151515, .5 * -Ci.HEIGHT), e.rotateY(Math.PI);
                var t = new _e;
                for (var i in e.attributes) t.setAttribute(i, e.attributes[i]);
                t.index = e.index, t.setAttribute("side", new ge(new Int8Array([-1, 1]), 1)), this.doorMesh = new O(t, new xe({
                    uniforms: {
                        u_areaLightLodTexture: Ci.sharedUniforms.u_areaLightLodTexture,
                        u_areaLightLodTextureSize: Ci.sharedUniforms.u_areaLightLodTextureSize,
                        u_areaLightLodTextureMaxLod: Ci.sharedUniforms.u_areaLightLodTextureMaxLod,
                        u_areaLightLtc1: Ci.sharedUniforms.u_areaLightLtc1,
                        u_areaLightLtc2: Ci.sharedUniforms.u_areaLightLtc2,
                        u_areaLightHalfWidth: Ci.sharedUniforms.u_areaLightHalfWidth,
                        u_areaLightHalfHeight: Ci.sharedUniforms.u_areaLightHalfHeight,
                        u_areaLightPosition: Ci.sharedUniforms.u_areaLightPosition,
                        u_areaLightIntensity: Ci.sharedUniforms.u_areaLightIntensity,
                        u_doorLightIntensity: this.sharedUniforms.u_doorLightIntensity
                    },
                    vertexShader: "#define GLSLIFY 1\nattribute float side;varying vec3 v_worldPosition;varying vec2 v_uv;void main(){vec3 pos=position;pos.xz*=side;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);v_uv=v_worldPosition.z<0.0 ? vec2(uv.x,1.0-uv.y): vec2(1.0-uv.x,uv.y);}",
                    fragmentShader: "#define GLSLIFY 1\nuniform sampler2D u_areaLightLodTexture;uniform vec2 u_areaLightLodTextureSize;uniform float u_areaLightLodTextureMaxLod;uniform vec3 u_areaLightHalfWidth;uniform vec3 u_areaLightHalfHeight;uniform vec3 u_areaLightPosition;uniform float u_areaLightIntensity;uniform float u_doorLightIntensity;varying vec3 v_worldPosition;varying vec2 v_uv;\n#include <textureBicubic>\n#include <lodMipmapSample>\nvoid main(){float delta=pow((v_worldPosition.y-0.8),0.5);vec2 ledUv=vec2(v_uv.x,sqrt(v_uv.y));vec3 ledLight=lodMipmapSampleCubic(u_areaLightLodTexture,ledUv,min(10.0,delta*3.0),u_areaLightLodTextureSize).rgb*u_areaLightIntensity*smoothstep(2.0,0.0,delta)*0.5;vec3 dir=normalize(v_worldPosition-cameraPosition);vec2 uv=vec2(0.5,max(0.0,dir.y));vec3 doorLight=u_doorLightIntensity*vec3(1.1);gl_FragColor=vec4(ledLight+doorLight,1.0);}"
                })), this.doorMesh.frustumCulled = !1, Ci.addPulseData(this.doorMesh.material), this.container.add(this.doorMesh)
            }
        }, {
            key: "init",
            value: function() {}
        }, {
            key: "resize",
            value: function(e, t) {}
        }, {
            key: "update",
            value: function(e) {
                if (this.time += e, this.sharedUniforms.u_doorLightIntensity.value = .3 * Math.sin(15 * this.time + 5 * Math.cos(3.51 * this.time + 5.123)) + .7, Math.random() > .98) {
                    var t = ~~(lt.hoverColorpalette.length * Math.random());
                    this.sharedUniforms.u_spotlightsColor.value.set(lt.hoverColorpalette[t]), this.sharedUniforms.u_spotlightsColor.value.getHSL(this.hsl), this.sharedUniforms.u_spotlightsColor.value.setHSL(this.hsl.h, 1, .5)
                }
                this.sharedUniforms.u_spotlightsIntensity.value = .5 * Math.sin(14 * this.time + 6.123 * Math.cos(3.51 * this.time + 35.42)) + .5
            }
        }]), e
    }()),
    Ai = new(function() {
        function e() {
            f(this, e), p(this, "container", null), p(this, "mesh", null), this.container = new R
        }
        return m(e, [{
            key: "preInit",
            value: function() {
                var e = this;
                lt.loader.add(ot.MODEL_PATH + "crowd.buf", {
                    onLoad: function(t) {
                        return e._onModelLoad(t)
                    }
                })
            }
        }, {
            key: "_onModelLoad",
            value: function(e) {
                this.mesh = new O(e, new xe({
                    uniforms: {
                        u_areaLightLodTexture: Ci.sharedUniforms.u_areaLightLodTexture,
                        u_areaLightLodTextureSize: Ci.sharedUniforms.u_areaLightLodTextureSize,
                        u_areaLightLodTextureMaxLod: Ci.sharedUniforms.u_areaLightLodTextureMaxLod,
                        u_areaLightLtc1: Ci.sharedUniforms.u_areaLightLtc1,
                        u_areaLightLtc2: Ci.sharedUniforms.u_areaLightLtc2,
                        u_areaLightHalfWidth: Ci.sharedUniforms.u_areaLightHalfWidth,
                        u_areaLightHalfHeight: Ci.sharedUniforms.u_areaLightHalfHeight,
                        u_areaLightPosition: Ci.sharedUniforms.u_areaLightPosition,
                        u_areaLightIntensity: Ci.sharedUniforms.u_areaLightIntensity,
                        u_doorLightIntensity: Li.sharedUniforms.u_doorLightIntensity,
                        u_spotlightsColor: Li.sharedUniforms.u_spotlightsColor,
                        u_spotlightsIntensity: Li.sharedUniforms.u_spotlightsIntensity,
                        u_time: {
                            value: 0
                        }
                    },
                    vertexShader: "#define GLSLIFY 1\nattribute vec4 lights;attribute vec2 spotlights;attribute float id;attribute vec3 position2;attribute vec3 normal2;uniform sampler2D u_areaLightLodTexture;uniform vec2 u_areaLightLodTextureSize;uniform float u_areaLightLodTextureMaxLod;uniform vec3 u_areaLightHalfWidth;uniform vec3 u_areaLightHalfHeight;uniform vec3 u_areaLightPosition;uniform float u_areaLightIntensity;uniform float u_doorLightIntensity;uniform vec3 u_spotlightsColor;uniform float u_spotlightsIntensity;uniform float u_time;varying vec3 v_light3;varying vec3 v_color;varying vec3 v_worldNormal;varying vec3 v_worldPosition;\n#include <textureBicubic>\n#include <lodMipmapSample>\nvoid main(){float r=id/96.0;float ratio=max(0.0,mod(u_time*(0.4*r+0.2)+r*1.8,1.8)-0.8);ratio=cos(ratio*6.2831853)*0.5+0.5;vec3 pos=mix(position,position2,ratio);vec3 nor=normalize(mix(normal,normal2,ratio));vec3 light3=mix(vec3(lights.xy,spotlights.x),vec3(lights.zw,spotlights.y),ratio);gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);vec3 worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;vec2 ambientUv=clamp(((worldPosition.xz-u_areaLightPosition.xz)/vec2(u_areaLightHalfWidth.x,u_areaLightHalfHeight.z))*0.5+0.5,vec2(0.0),vec2(1.0));ambientUv.y=1.0-ambientUv.y;vec3 ambient=lodMipmapSample(u_areaLightLodTexture,ambientUv,u_areaLightLodTextureMaxLod*0.6,u_areaLightLodTextureSize).rgb*u_areaLightIntensity;v_worldNormal=nor;vec3 dir1=normalize(vec3(0.0,4.16152,24.0)-worldPosition);vec2 uv1=vec2(0.5,max(0.0,dir1.y));vec3 dir2=normalize(vec3(0.0,4.16152,-24.0)-worldPosition);vec2 uv2=vec2(0.5,max(0.0,dir2.y));v_color=light3.x*ambient+light3.y*u_doorLightIntensity*0.4+light3.z*u_spotlightsColor*0.75;v_worldPosition=worldPosition;v_light3=light3;}",
                    fragmentShader: "#define GLSLIFY 1\nvarying vec3 v_light3;varying vec3 v_color;varying vec3 v_worldNormal;varying vec3 v_worldPosition;uniform sampler2D u_areaLightLodTexture;uniform vec2 u_areaLightLodTextureSize;float plaIntersect(in vec3 ro,in vec3 rd,in vec4 p){return-(dot(ro,p.xyz)+p.w)/dot(rd,p.xyz);}void main(){vec3 color=v_color;vec3 rayOri=v_worldPosition;vec3 rayDir=reflect(normalize(v_worldPosition-cameraPosition),normalize(v_worldNormal));vec3 hitFloor=rayOri+rayDir*plaIntersect(rayOri,rayDir,vec4(0.0,1.0,0.0,0.8));vec2 hitUv=hitFloor.xz/vec2(2.0,32.0)+0.5;color+=texture2D(u_areaLightLodTexture,vec2(hitUv.x*0.666667,hitUv.y)).rgb*step(max(abs(hitUv.x-0.5),abs(hitUv.y-0.5)),0.5)*max(0.0,-rayDir.y)*0.25*(1.0-color)*step(0.8,v_worldPosition.y)*smoothstep(8.0,1.0,abs(v_worldPosition.x))*v_light3.x;gl_FragColor=vec4(color,1.0);}"
                })), Ci.addPulseData(this.mesh.material), this.container.add(this.mesh)
            }
        }, {
            key: "init",
            value: function() {}
        }, {
            key: "resize",
            value: function(e, t) {}
        }, {
            key: "update",
            value: function(e) {
                this.mesh && (this.mesh.material.uniforms.u_time.value += e)
            }
        }]), e
    }()),
    Mi = function() {
        function e() {
            f(this, e), p(this, "container", null), p(this, "partGeometry", null), p(this, "mesh", null), p(this, "material", null), p(this, "baseColorHex", ""), p(this, "patternColorHex", "")
        }
        return m(e, [{
            key: "init",
            value: function(e) {
                Object.assign(this, e), this.container = new R
            }
        }, {
            key: "setPartGeometry",
            value: function(e) {
                this.partGeometry = e, this.mesh || (this.mesh = new O(e.geometry, this.material = new xe({
                    uniforms: {
                        u_positionAOTexture: {
                            value: null
                        },
                        u_normalAOTexture: {
                            value: null
                        },
                        u_animationTextureSize: {
                            value: null
                        },
                        u_animationDataIndexOffsetFrom: {
                            value: 0
                        },
                        u_animationDataIndexOffsetTo: {
                            value: 0
                        },
                        u_animationDataIndexOffsetBlendRatio: {
                            value: 0
                        },
                        u_areaLightLodTexture: Ci.sharedUniforms.u_areaLightLodTexture,
                        u_areaLightLodTextureSize: Ci.sharedUniforms.u_areaLightLodTextureSize,
                        u_areaLightLodTextureMaxLod: Ci.sharedUniforms.u_areaLightLodTextureMaxLod,
                        u_areaLightLtc1: Ci.sharedUniforms.u_areaLightLtc1,
                        u_areaLightLtc2: Ci.sharedUniforms.u_areaLightLtc2,
                        u_areaLightHalfWidth: Ci.sharedUniforms.u_areaLightHalfWidth,
                        u_areaLightHalfHeight: Ci.sharedUniforms.u_areaLightHalfHeight,
                        u_areaLightPosition: Ci.sharedUniforms.u_areaLightPosition,
                        u_areaLightIntensity: Ci.sharedUniforms.u_areaLightIntensity,
                        u_patternTexture: null,
                        u_patternChannelMixer: null,
                        u_patternScale: null,
                        u_baseColor: {
                            value: new w
                        },
                        u_patternColor: {
                            value: new w
                        },
                        u_baseRoughness: null,
                        u_patternRoughness: null,
                        u_doorLightIntensity: Li.sharedUniforms.u_doorLightIntensity,
                        u_spotlightsColor: Li.sharedUniforms.u_spotlightsColor,
                        u_spotlightsIntensity: Li.sharedUniforms.u_spotlightsIntensity,
                        u_opacity: null,
                        u_time: null
                    },
                    vertexShader: "#define GLSLIFY 1\nuniform sampler2D u_positionAOTexture;uniform sampler2D u_normalAOTexture;uniform vec2 u_animationTextureSize;uniform float u_animationDataIndexOffsetFrom;uniform float u_animationDataIndexOffsetTo;uniform float u_animationDataIndexOffsetBlendRatio;uniform float u_opacity;uniform float u_time;varying vec3 v_worldPosition;varying vec3 v_viewNormal;varying vec2 v_uv;varying vec2 v_aos;varying float v_glitch;float hash13(vec3 p3){p3=fract(p3*.1031);p3+=dot(p3,p3.zyx+31.32);return fract((p3.x+p3.y)*p3.z);}void main(){float pid=position.z;float pid0=pid+u_animationDataIndexOffsetFrom;float pid1=pid+u_animationDataIndexOffsetTo;vec2 animationUv0=vec2(mod(pid0,u_animationTextureSize.x)+0.5,floor(pid0/u_animationTextureSize.x)+0.5)/u_animationTextureSize;vec2 animationUv1=vec2(mod(pid1,u_animationTextureSize.x)+0.5,floor(pid1/u_animationTextureSize.x)+0.5)/u_animationTextureSize;vec4 posAo=mix(texture2D(u_positionAOTexture,animationUv0),texture2D(u_positionAOTexture,animationUv1),u_animationDataIndexOffsetBlendRatio);vec4 norAo=mix(texture2D(u_normalAOTexture,animationUv0),texture2D(u_normalAOTexture,animationUv1),u_animationDataIndexOffsetBlendRatio);vec3 pos=posAo.xyz;vec3 nor=normalize(norAo.xyz);float glitch=hash13(vec3(floor(pos.xy*3.0+(1.0-u_opacity)*10.0),floor(u_time*50.0)/50.0))*2.0-1.0;glitch=glitch*glitch*glitch*(1.0-u_opacity);pos.z+=glitch*0.5;v_glitch=abs(glitch);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);gl_Position=projectionMatrix*mvPosition;v_viewNormal=normalMatrix*nor;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_uv=position.xy;v_aos=vec2(posAo.w,norAo.w)*0.75+0.25;}",
                    fragmentShader: "#define GLSLIFY 1\nuniform sampler2D u_patternTexture;uniform vec3 u_patternChannelMixer;uniform float u_patternScale;uniform vec3 u_baseColor;uniform vec3 u_patternColor;uniform float u_doorLightIntensity;uniform sampler2D u_areaLightLodTexture;uniform vec2 u_areaLightLodTextureSize;uniform float u_areaLightLodTextureMaxLod;uniform vec3 u_areaLightHalfWidth;uniform vec3 u_areaLightHalfHeight;uniform vec3 u_areaLightPosition;uniform float u_areaLightIntensity;uniform float u_baseRoughness;uniform float u_patternRoughness;uniform vec3 u_spotlightsColor;uniform float u_spotlightsIntensity;varying vec3 v_worldPosition;varying vec3 v_viewNormal;varying vec2 v_uv;varying vec2 v_aos;varying float v_glitch;vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}\n#include <textureBicubic>\n#include <lodMipmapSample>\n#include <textureArealight>\nvoid main(){float faceDirection=gl_FrontFacing ? 1.0 :-1.0;float ao=gl_FrontFacing ? v_aos.x : v_aos.y;vec3 viewNormal=normalize(v_viewNormal)*faceDirection;vec3 worldNormal=inverseTransformDirection(viewNormal,viewMatrix);float pattern=dot(texture2D(u_patternTexture,v_uv).rgb,u_patternChannelMixer);vec3 albedo=mix(u_baseColor,u_patternColor,pattern);float metalness=pattern*0.5;vec3 diffuseColor=albedo*(1.0-metalness);vec3 specularColor=mix(vec3(0.04),albedo,metalness);vec3 diff=vec3(0.0);vec3 spec=vec3(0.0);float lodDistMultiplier=1024.0;float roughness=mix(u_baseRoughness,u_patternRoughness,pattern);calcTextureArealight(diff,spec,u_areaLightLodTexture,u_areaLightLodTextureSize,u_areaLightLodTextureMaxLod,lodDistMultiplier,u_areaLightPosition,u_areaLightHalfWidth,u_areaLightHalfHeight,diffuseColor,specularColor,roughness,worldNormal,normalize(cameraPosition-v_worldPosition),v_worldPosition);vec3 color=(diff*ao*ao+spec*ao)*u_areaLightIntensity*1.5;color+=albedo*ao*u_spotlightsColor*u_spotlightsIntensity*max(0.0,worldNormal.y)*1.0/-(v_worldPosition.y-7.0)*0.75;color+=albedo*ao*u_doorLightIntensity*abs(worldNormal.z)*0.25*(1.0-roughness*0.5);color+=smoothstep(2.0,0.0,u_areaLightHalfHeight.z-abs(v_worldPosition.z));gl_FragColor=vec4(color*(1.0+pattern)*(v_glitch*2.0+1.0),1.0);}",
                    side: Ve
                })), this.container.add(this.mesh)), Ci.addPulseData(this.material), this.mesh.geometry = e.geometry, this.material.uniforms.u_positionAOTexture.value = e.positionAOTexture, this.material.uniforms.u_normalAOTexture.value = e.normalAOTexture, this.material.uniforms.u_animationTextureSize.value = e.animationTextureSize
            }
        }, {
            key: "setStyle",
            value: function(e) {
                Object.assign(this.material.uniforms, e.sharedUniforms), this.material.uniforms.u_baseColor.value.setStyle(this.baseColorHex), this.material.uniforms.u_patternColor.value.setStyle(this.patternColorHex)
            }
        }, {
            key: "update",
            value: function(e, t) {
                var i = t * this.partGeometry.fps % this.partGeometry.frameCount,
                    r = Math.floor(i),
                    a = Math.ceil(i) % this.partGeometry.frameCount,
                    n = i % 1;
                this.material.uniforms.u_animationDataIndexOffsetFrom.value = r * this.partGeometry.vertexCount, this.material.uniforms.u_animationDataIndexOffsetTo.value = a * this.partGeometry.vertexCount, this.material.uniforms.u_animationDataIndexOffsetBlendRatio.value = n
            }
        }]), e
    }(),
    Ii = function() {
        function e() {
            f(this, e), p(this, "partId", ""), p(this, "type", ""), p(this, "geometry", null), p(this, "isLoaded", !1), p(this, "positionAOTexture", null), p(this, "normalAOTexture", null), p(this, "animationTextureSize", new L), p(this, "frameCount", 0), p(this, "vertexCount", 0), p(this, "vertexFrameCount", 0), p(this, "textureWidth", 0), p(this, "textureHeight", 0), p(this, "fps", 60)
        }
        return m(e, [{
            key: "preInit",
            value: function(e) {
                Object.assign(this, e)
            }
        }, {
            key: "load",
            value: function(e) {
                var t = this;
                lt.loader[e ? "add" : "load"](ot.MODEL_PATH + "styles/" + this.partId + ".buf", {
                    noCache: !0,
                    onLoad: function(e) {
                        return t._onGeometryLoad(e)
                    }
                }), lt.loader[e ? "add" : "load"](ot.MODEL_PATH + "styles/" + this.partId + "_animation.buf", {
                    noCache: !0,
                    onLoad: function(e) {
                        return t._onAnimationLoad(e)
                    }
                })
            }
        }, {
            key: "_onGeometryLoad",
            value: function(e) {
                this.geometry = e;
                for (var t = e.attributes.position.array, i = this.vertexCount = t.length / 3, r = 0, a = 2; r < i; r++) t[a] = r, a += 3;
                this.frameCount = this.vertexFrameCount / this.vertexCount, this.isLoaded = !!this.vertexFrameCount, e.boundingSphere = new Ye(new b(0, 1.2, 0), 1.2)
            }
        }, {
            key: "_onAnimationLoad",
            value: function(e) {
                for (var t = e.attributes.position.array, i = e.attributes.normal.array, r = e.attributes.frontAO.array, a = e.attributes.backAO.array, n = this.vertexFrameCount = r.length, o = this.textureWidth = Math.ceil(Math.sqrt(n)), s = this.textureHeight = Math.ceil(n / o), l = o * s, u = new Float32Array(4 * l), c = new Float32Array(4 * l), h = 0, d = 0, v = 0; h < n; h++) u[v + 0] = t[d + 0], u[v + 1] = t[d + 1], u[v + 2] = t[d + 2], u[v + 3] = r[h], c[v + 0] = i[d + 0], c[v + 1] = i[d + 1], c[v + 2] = i[d + 2], c[v + 3] = a[h], d += 3, v += 4;
                this.animationTextureSize.set(o, s), this.positionAOTexture = Kt.createDataTexture(u, o, s, !0), this.normalAOTexture = Kt.createDataTexture(c, o, s, !0), this.frameCount = this.vertexFrameCount / this.vertexCount, this.isLoaded = !!this.vertexCount
            }
        }]), e
    }(),
    Di = {
        fullBody: [{
            partId: "hero",
            fps: 60 / 9,
            preload: !0
        }, {
            partId: "one_piece",
            fps: 60 / 9,
            noHandWear: !0
        }, {
            partId: "full_balloons",
            fps: 60 / 9,
            noHandWear: !0
        }],
        hat: [{
            partId: "hat1",
            fps: 60 / 9
        }, {
            partId: "hat2",
            fps: 60 / 9
        }, {
            partId: "hat3",
            fps: 60 / 9
        }, {
            partId: "hat4",
            fps: 60 / 9
        }, {
            partId: "glasses",
            fps: 60 / 9
        }],
        top: [{
            partId: "top1",
            fps: 60 / 9
        }, {
            partId: "top2",
            fps: 60 / 9
        }, {
            partId: "top3",
            fps: 60 / 9
        }, {
            partId: "top4",
            fps: 60 / 9
        }, {
            partId: "top5",
            fps: 60 / 9
        }, {
            partId: "top6",
            fps: 60 / 9
        }],
        bottom: [{
            partId: "bottom1",
            fps: 60 / 9,
            noHandWear: !0
        }, {
            partId: "bottom2",
            fps: 60 / 9,
            noHandWear: !0
        }, {
            partId: "bottom3",
            fps: 60 / 9,
            noHandWear: !0
        }, {
            partId: "bottom4",
            fps: 60 / 9
        }, {
            partId: "bottom5",
            fps: 60 / 9
        }, {
            partId: "bottom6",
            fps: 60 / 9
        }],
        shoes: [{
            partId: "shoes1",
            fps: 60 / 9
        }, {
            partId: "shoes2",
            fps: 60 / 9,
            preload: !0
        }, {
            partId: "shoes3",
            fps: 60 / 9
        }, {
            partId: "shoes4",
            fps: 60 / 9
        }],
        handWear: [{
            partId: "handWear1",
            fps: 60 / 9,
            preload: !0
        }, {
            partId: "handWear2",
            fps: 60 / 9
        }, {
            partId: "handWear3",
            fps: 60 / 9
        }, {
            partId: "handWear4",
            fps: 60 / 9
        }, {
            partId: "handWear5",
            fps: 60 / 9
        }]
    },
    Ei = new(function() {
        function e() {
            f(this, e), p(this, "activeListMap", {}), p(this, "inactiveListMap", {}), p(this, "_partGeometries", {}), p(this, "_partGeometryListTypeMap", {})
        }
        return m(e, [{
            key: "preInit",
            value: function() {
                for (var e in Di)
                    for (var t = Di[e], i = this._partGeometryListTypeMap[e] = [], r = 0; r < t.length; r++) {
                        var a = t[r],
                            n = a.partId;
                        a.type = e, this.activeListMap[n] = [], this.inactiveListMap[n] = [];
                        var o = new Ii;
                        o.preInit(a), (ot.LOAD_ALL_STYLE_AT_ONCE || o.preload) && o.load(!0), this._partGeometries[n] = o, i.push(o)
                    }
            }
        }, {
            key: "init",
            value: function() {
                for (var e in this._partGeometries) {
                    var t = this._partGeometries[e];
                    t.isLoaded || t.load()
                }
            }
        }, {
            key: "getLoadedGeometryList",
            value: function(e) {
                return this._partGeometryListTypeMap[e].filter((function(e) {
                    return e.isLoaded
                }))
            }
        }, {
            key: "get",
            value: function(e) {
                var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = this.activeListMap[e],
                    a = this.inactiveListMap[e];
                a.length ? t = a.pop() : (t = new Mi).init(), Object.assign(t, i);
                var n = this._partGeometries[e];
                return t.setPartGeometry(n), r.push(t), t
            }
        }, {
            key: "recycle",
            value: function(e) {
                var t = e.partGeometry.partId,
                    i = this.activeListMap[t],
                    r = this.inactiveListMap[t];
                e.container.parent && e.container.parent.remove(e.container);
                var a = i.indexOf(e);
                a > -1 && (i.splice(a, 1), r.push(e))
            }
        }]), e
    }()),
    Pi = function() {
        function e(t, i, r) {
            f(this, e), this.x = t, this.y = i, this.radius = 100, this.color = "#ffffff55", this.time = 0, this.delay = r ? 0 : .2, this.finished = !1, this.isFilled = r
        }
        return m(e, [{
            key: "update",
            value: function(e, t) {
                (!this.finished || e < 0) && (this.time += 4 * e, this.time = Math.max(0, this.time));
                var i = Math.min(1, Math.max(0, this.time - this.delay));
                this.finished = 1 === i, t.beginPath(), t.arc(this.x, this.y, i * this.radius, 0, 2 * Math.PI), t.closePath(), this.isFilled ? (t.fillStyle = this.color, t.fill()) : (t.strokeStyle = this.color, t.stroke())
            }
        }, {
            key: "reset",
            value: function() {
                this.time = 0, this.finished = !1
            }
        }]), e
    }(),
    zi = function() {
        function e(t, i) {
            f(this, e), this.x = t, this.y = i, this.radius = 50, this.color = "#FFFFFF", this.time = 0, this.realTime = 0, this.delay = .4, this.finished = !1
        }
        return m(e, [{
            key: "update",
            value: function(e, t, i) {
                (!this.finished || e < 0) && (this.time += 4 * e, this.time = Math.max(0, this.time)), this.realTime += Math.abs(e);
                var r = Math.min(1, Math.max(0, this.time - this.delay)),
                    a = this.radius * (i ? 1 : .5 * Math.sin(.5 * Math.PI * (this.realTime % 1)));
                this.finished = 1 === r, t.beginPath(), t.arc(this.x, this.y, r * a, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = i ? this.color : "#ffffff55", t.stroke()
            }
        }, {
            key: "reset",
            value: function() {
                this.time = 0, this.finished = !1
            }
        }]), e
    }(),
    Fi = function() {
        function e(t, i) {
            f(this, e), this.x = t, this.y = i, this.radius = 6, this.color = "#FFFFFF", this.time = 0, this.delay = .5, this.time = 0, this.finished = !1
        }
        return m(e, [{
            key: "update",
            value: function(e, t) {
                (!this.finished || e < 0) && (this.time += 4 * e, this.time = Math.max(0, this.time));
                var i = Math.min(1, Math.max(0, this.time - this.delay));
                this.finished = 1 === i, t.beginPath(), t.arc(this.x, this.y, i * this.radius, 0, 2 * Math.PI), t.closePath(), t.fillStyle = this.color, t.fill()
            }
        }, {
            key: "reset",
            value: function() {
                this.time = 0, this.finished = !1
            }
        }]), e
    }(),
    Ri = function() {
        function e(t, i, r) {
            f(this, e), this.x = t, this.y = i, this.lineLength = 120 * (r ? -1 : 1), this.color = "#FFFFFF", this.time = 0, this.delay = .4, this.finished = !1
        }
        return m(e, [{
            key: "update",
            value: function(e, t) {
                (!this.finished || e < 0) && (this.time += 4 * e, this.time = Math.max(0, this.time));
                var i = Math.min(1, Math.max(0, this.time - this.delay));
                this.finished = 1 === i, t.beginPath(), t.moveTo(this.x, this.y), t.lineTo(this.x + i * this.lineLength, this.y), t.stroke()
            }
        }, {
            key: "reset",
            value: function() {
                this.time = 0, this.finished = !1
            }
        }]), e
    }(),
    Oi = function() {
        function e(t, i, r) {
            f(this, e), this.x = t, this.y = i, this.lineLength = 250 * (r ? -1 : 1), this.color = "#FFFFFF", this.time = 0, this.delay = 1, this.finished = !1
        }
        return m(e, [{
            key: "update",
            value: function(e, t) {
                (!this.finished || e < 0) && (this.time += 4 * e, this.time = Math.max(0, this.time));
                var i = Math.min(1, Math.max(0, this.time - this.delay));
                this.finished = 1 === i, t.beginPath(), t.moveTo(this.x, this.y), t.lineTo(this.x + i * this.lineLength, this.y), t.stroke()
            }
        }, {
            key: "reset",
            value: function() {
                this.time = 0, this.finished = !1
            }
        }]), e
    }(),
    Ni = function() {
        function e(t, i) {
            f(this, e), this.x = t, this.y = i, this.time = 0, this.delay = 1.3, this.label = "", this.finished = !1
        }
        return m(e, [{
            key: "update",
            value: function(e, t) {
                (!this.finished || e < 0) && (this.time += 4 * e, this.time = Math.max(0, this.time));
                var i = Math.min(1, Math.max(0, this.time - this.delay));
                this.finished = 1 === i, t.font = "40px robotoregular", t.textAlign = "left", t.textBaseline = "top", t.fillStyle = "rgba(255, 255, 255, ".concat(i, ")"), t.fillText(this.label, this.x, this.y)
            }
        }, {
            key: "reset",
            value: function() {
                this.time = 0, this.finished = !1
            }
        }]), e
    }(),
    Ui = function() {
        function e(t) {
            var i = this;
            f(this, e), p(this, "time", 0), p(this, "canvas", null), p(this, "context", null), p(this, "texture", null), p(this, "material", null), p(this, "container", null), p(this, "leftSide", !1), p(this, "externalCircle", null), p(this, "externalCircleFilled", null), p(this, "innerCircle", null), p(this, "point", null), p(this, "firstLine", null), p(this, "secondLine", null), p(this, "text", null), p(this, "texture", null), p(this, "material", null), p(this, "sprite", null), p(this, "needsDrawing", !0), p(this, "forwardAnimation", !0), p(this, "isHover", !1), p(this, "styleObj", null), this.leftSide = t, this.canvas = document.createElement("canvas"), this.canvas.width = 512, this.canvas.height = Math.round(337.92), this.context = this.canvas.getContext("2d"), this.canvas.classList.add("tooltipSprite"), document.body.appendChild(this.canvas), this.canvas.addEventListener("click", (function() {
                i.text.label && lt.snapshotSignal.dispatch(i.styleObj)
            })), this.canvas.onmouseenter = function() {
                i.isHover = !0
            }, this.canvas.onmouseleave = function() {
                i.isHover = !1
            }, this.tempVec3 = new b;
            var r = this.leftSide ? -1 : 1,
                a = this.leftSide ? .8 : .2;
            this.externalCircle = new Pi(this.canvas.width * a, .5 * this.canvas.height), this.externalCircleFilled = new Pi(this.canvas.width * a, .5 * this.canvas.height, !0), this.innerCircle = new zi(this.canvas.width * a, .5 * this.canvas.height), this.point = new Fi(this.canvas.width * a, .5 * this.canvas.height), this.firstLine = new Ri(this.canvas.width * a + 10 * r, .5 * this.canvas.height, this.leftSide), this.secondLine = new Oi(this.firstLine.x + 10 * r + this.firstLine.lineLength, this.firstLine.y, this.leftSide), this.text = new Ni(this.secondLine.x + 10, this.secondLine.y + 20)
        }
        return m(e, [{
            key: "update",
            value: function(e, t, i, r) {
                if (!(lt.loadingFramePercent + lt.loadingFramePercent2 < 2))
                    if (this.text.label !== i.colorName && (this.styleObj = i, this.text.label = this.styleObj.colorName, this.externalCircle.reset(), this.externalCircleFilled.reset(), this.innerCircle.reset(), this.point.reset(), this.firstLine.reset(), this.secondLine.reset(), this.text.reset(), this.context.clearRect(0, 0, canvas.width, canvas.height)), this.tempVec3.copy(t), 0 != lt.aboutRatio || lt.activeSnapshotStyle || !lt.frustum.containsPoint(this.tempVec3) || lt.snapshotsManager.isActive && lt.isCameraViewActive) this.canvas.style.display = "none";
                    else {
                        this.canvas.style.display = "initial", this.tempVec3.project(lt.camera);
                        var a = (.5 * this.tempVec3.x + .5) * lt.rawWidth,
                            n = (-.5 * this.tempVec3.y + .5) * lt.rawHeight;
                        this.canvas.style.transform = "translate(-39%, -50%) translate(".concat(a, "px,").concat(n, "px) scale(0.3)"), this.context.clearRect(0, 0, canvas.width, canvas.height), this.context.lineWidth = 6, this.context.save(), this.context.scale(.75, .75), this.innerCircle.update(lt.deltaTime, this.context, r), this.point.update(lt.deltaTime, this.context), this.externalCircle.update(e, this.context), this.firstLine.update(e, this.context), this.secondLine.update(e, this.context), this.externalCircleFilled.update(lt.deltaTime * (this.isHover && r ? 1 : -1), this.context), this.text.update(e, this.context), this.context.restore(), this.canvas.style.pointerEvents = r ? "all" : "none", this.isHover && r ? this.canvas.classList.contains("active") || this.canvas.classList.add("active") : this.canvas.classList.contains("active") && this.canvas.classList.remove("active")
                    }
            }
        }]), e
    }(),
    Hi = function() {
        function e() {
            f(this, e), p(this, "time", 0), p(this, "speed", 1), p(this, "frameIndex", 0), p(this, "opacity", 1), p(this, "container", null), p(this, "colorPalette", null), p(this, "colorName", ""), p(this, "partList", []), p(this, "sharedUniforms", {}), p(this, "tempVec3A", new b), p(this, "tempVec3B", new b), p(this, "sphere", new O(new je(.35, 32, 32), new Xe({
                color: "red"
            }))), p(this, "box", new O(new De(.5, 1.8, .5), new Xe({
                color: "red"
            }))), p(this, "sprite", null), p(this, "isSpriteActive", !1)
        }
        return m(e, [{
            key: "init",
            value: function(e) {
                var t = this;
                Object.assign(this, e), this.container = new R, this.sphere.position.y += 1.5, this.box.position.y += .9, this.sphere.visible = !1, this.box.visible = !1, this.container.add(this.sphere), this.container.add(this.box), this.sharedUniforms.u_patternTexture = {
                    value: null
                }, this.sharedUniforms.u_patternChannelMixer = {
                    value: new b
                }, this.sharedUniforms.u_patternScale = {
                    value: 1
                }, this.sharedUniforms.u_baseRoughness = {
                    value: .6
                }, this.sharedUniforms.u_patternRoughness = {
                    value: .05
                }, this.sharedUniforms.u_opacity = {
                    value: .5
                }, this.sharedUniforms.u_time = {
                    value: 0
                }, this.sprite = new Ui, lt.onHoverStyleSignal.add((function(e) {
                    t.isSpriteActive = e === t.colorName
                }))
            }
        }, {
            key: "setPattern",
            value: function(e, t, i, r) {
                this.sharedUniforms.u_patternTexture.value = e, this.sharedUniforms.u_patternChannelMixer.value.set(+(0 == t), +(1 == t), +(2 == t)), this.sharedUniforms.u_patternScale.value = i, this.colorPalette = r
            }
        }, {
            key: "addPart",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = this.colorPalette.length,
                    r = ~~(Math.random() * i);
                if (t.baseColorHex = this.colorPalette[r], t.patternColorHex = this.colorPalette[(r + 1) % i], t.needsColorName) {
                    var a = lt.getNearestColor(t.baseColorHex);
                    this.colorName = a[Math.floor(Math.random() * a.length)]
                }
                var n = Ei.get(e, t);
                n.setStyle(this), this.partList.push(n), this.container.add(n.container)
            }
        }, {
            key: "recycle",
            value: function() {
                this.container.parent && this.container.parent.remove(this.container);
                for (var e = 0; e < this.partList.length; e++) {
                    var t = this.partList[e];
                    Ei.recycle(t)
                }
                this.partList.length = 0
            }
        }, {
            key: "update",
            value: function(e) {
                this.container.userData.id = this.colorName;
                var t = Math.sign(this.opacity - this.sharedUniforms.u_opacity.value),
                    i = 0;
                if (this.isSpriteActive ? (this.opacity > .9 && (i = 1), t < 0 && (i = -1)) : i = -1, i *= e, !lt.snapshotsManager.isActive || !lt.isCameraViewActive) {
                    this.time += e * this.speed, this.sharedUniforms.u_time.value = this.time, this.sharedUniforms.u_opacity.value = this.opacity;
                    for (var r = 0; r < this.partList.length; r++) this.partList[r].update(e, this.time)
                }
                this.sphere.getWorldPosition(this.tempVec3B), this.tempVec3A.copy(lt.camera.position).sub(this.tempVec3B).normalize().multiplyScalar(.35), this.tempVec3B.add(this.tempVec3A), this.sprite.update(i, this.tempVec3B, this, this.isSpriteActive && i > 0)
            }
        }]), e
    }(),
    Bi = new(function() {
        function e() {
            f(this, e), p(this, "container", void 0), p(this, "colorPaletteList", void 0), p(this, "isFirstOne", !0), p(this, "activeList", []), p(this, "inactiveList", []), p(this, "patternTextureList", []), p(this, "colorPaletteList", [
                ["#BEBDBF", "#989799", "#FEFCFF", "#F9F7FA", "#E4E3E6"]
            ])
        }
        return m(e, [{
            key: "preInit",
            value: function() {
                var e = this;
                Ei.preInit();
                for (var t = 0; t < 3; t++) this.patternTextureList[t] = lt.loader.add(ot.TEXTURE_PATH + "patterns/pattern_set_" + t + ".webp", {
                    type: "texture",
                    wrap: Ke
                }).content;
                lt.loader.add(ot.DATA_PATH + "200.json", {
                    onLoad: function(t) {
                        e.colorPaletteList = t
                    }
                })
            }
        }, {
            key: "init",
            value: function() {
                Ei.init()
            }
        }, {
            key: "resize",
            value: function(e, t) {}
        }, {
            key: "get",
            value: function() {
                var e, t = this.activeList,
                    i = this.inactiveList;
                i.length ? e = i.pop() : (e = new Hi).init(), e.time = Math.random();
                var r = this.colorPaletteList[~~(Math.random() * this.colorPaletteList.length)],
                    a = ~~(3 * Math.random() * 3);
                e.setPattern(this.patternTextureList[~~(a / 3)], a % 3, 1, r), lt.hoverColorpalette = r;
                var n = !1,
                    o = !1;
                if (!this.isFirstOne && Math.random() > .2) {
                    var s = Ei.getLoadedGeometryList("top"),
                        l = Ei.getLoadedGeometryList("bottom");
                    if (s.length && l.length) {
                        var u = s[~~(Math.random() * s.length)],
                            c = u.partId,
                            h = l[~~(Math.random() * l.length)],
                            d = h.partId;
                        o = (o = o || u.noHandWear) || h.noHandWear, e.addPart(c, {
                            needsColorName: !0
                        }), e.addPart(d), n = !0
                    }
                }
                if (!n) {
                    var v = Ei.getLoadedGeometryList("fullBody"),
                        m = v[~~(Math.random() * v.length)],
                        f = m.partId;
                    o = o || m.noHandWear, this.isFirstOne && (f = "hero"), e.addPart(f, {
                        needsColorName: !0
                    })
                }
                var p = Ei.getLoadedGeometryList("hat");
                if (p.length && Math.random() > .25) {
                    var _ = p[~~(Math.random() * p.length)].partId;
                    e.addPart(_)
                }
                var g = Ei.getLoadedGeometryList("shoes");
                if (this.isFirstOne || Math.random() > .25) {
                    var x = g[~~(Math.random() * g.length)].partId;
                    e.addPart(x)
                }
                var y = Ei.getLoadedGeometryList("handWear");
                if (!o && (this.isFirstOne || Math.random() > .25)) {
                    var T = y[~~(Math.random() * y.length)].partId;
                    e.addPart(T)
                }
                return t.push(e), this.isFirstOne = !1, e
            }
        }, {
            key: "recycle",
            value: function(e) {
                var t = this.activeList.indexOf(e);
                t > -1 && (this.activeList.splice(t, 1), this.inactiveList.push(e), e.recycle())
            }
        }]), e
    }()),
    Gi = new b(0, .8, -16.612865009896005),
    qi = new b(0, .8, 16.470919683011267),
    Wi = new b;
Wi.subVectors(qi, Gi), Wi.divideScalar(30);
var Ki = new b;
new Ze, new Qe, new Je(new b(0, 1, 0), 0);
var Vi = new(function() {
        function e() {
            f(this, e), p(this, "container", new R), p(this, "frame", 0), p(this, "relativeIndex", 0), p(this, "activeStyles", []), p(this, "isInitAnimationEnded", !1)
        }
        return m(e, [{
            key: "preInit",
            value: function() {
                Bi.preInit()
            }
        }, {
            key: "init",
            value: function() {
                Bi.init(), lt.activeStyles = this.activeStyles, this.addStyle()
            }
        }, {
            key: "addStyle",
            value: function() {
                var e = Bi.get();
                e.frameIndex = 0, this.activeStyles.push(e), e.container.position.copy(Gi), this.container.add(e.container), lt.styleNameSignal.dispatch(e.colorName)
            }
        }, {
            key: "removeStyle",
            value: function(e) {
                Bi.recycle(e)
            }
        }, {
            key: "checkOrder",
            value: function() {
                var e = this.frame % 30,
                    t = Math.floor(ot.MAX_MODEL_COUNT * e / 30);
                if (this.relativeIndex !== t) {
                    if (this.relativeIndex = t, this.activeStyles.length === ot.MAX_MODEL_COUNT) {
                        var i = this.activeStyles.shift();
                        this.removeStyle(i)
                    }
                    this.addStyle()
                }
            }
        }, {
            key: "resize",
            value: function(e, t) {}
        }, {
            key: "update",
            value: function(e) {
                var t = !(lt.activeSnapshotStyle || lt.snapshotsManager.isActive && lt.isCameraViewActive);
                t && (this.frame += e, this.checkOrder()), this.activeStyles.forEach((function(i) {
                    i && (t && (i.container.position.copy(Gi), Ki.copy(Wi), Ki.multiplyScalar(i.frameIndex), i.container.position.add(Ki), i.frameIndex += e, i.opacity = ft.smoothstep(15, 12, Math.abs(i.frameIndex - 15))), i.update(e))
                }))
            }
        }]), e
    }()),
    Yi = new(function() {
        function e() {
            f(this, e), p(this, "container", null), p(this, "mipmapper", null), p(this, "textureSize", null), p(this, "renderTarget", null), p(this, "textureMatrix", null), p(this, "meshTransformMatrix4", null), p(this, "m4", null), p(this, "clipBias", null), p(this, "mirrorCamera", null), p(this, "mirrorPlane", null), p(this, "normal", null), p(this, "mirrorWorldPosition", null), p(this, "cameraWorldPosition", null), p(this, "rotationMatrix", null), p(this, "lookAtPosition", null), p(this, "clipPlane", null), p(this, "eye", null), p(this, "view", null), p(this, "target", null), p(this, "q", null), p(this, "infoTexture", null), p(this, "_v3", new b)
        }
        return m(e, [{
            key: "preInit",
            value: function() {
                this.container = new R, this.infoTexture = lt.loader.add(ot.TEXTURE_PATH + "floor.webp", {
                    type: "texture",
                    weight: 519
                }).content, this.infoTexture.wrapS = this.infoTexture.wrapT = Ke
            }
        }, {
            key: "init",
            value: function() {
                this.mipmapper = new gi, this.mipmapper.init(), this.textureSize = new L, this.renderTarget = Kt.createRenderTarget(1, 1), this.renderTarget.depthBuffer = !0, this.textureMatrix = new F, this.meshTransformMatrix4 = new F, this.m4 = new F, this.clipBias = 0, this.mirrorCamera = new K, this.mirrorPlane = new Je, this.normal = new b, this.mirrorWorldPosition = new b, this.cameraWorldPosition = new b, this.rotationMatrix = new F, this.lookAtPosition = new b, this.clipPlane = new J, this.eye = new b, this.view = new b, this.target = new b, this.q = new J, this.geometry = new X(2, 32), this.geometry.rotateX(-.5 * Math.PI), this.geometry.translate(0, .8, 0), this.mesh = new O(this.geometry, new xe({
                    uniforms: {
                        u_infoTexture: {
                            value: this.infoTexture
                        },
                        u_textureMatrix: {
                            value: this.textureMatrix
                        },
                        u_textureSize: {
                            value: this.textureSize
                        },
                        u_mipmapTextureSize: {
                            value: this.mipmapper.textureSize
                        },
                        u_mipmapTexture: {
                            value: this.renderTarget.texture
                        },
                        u_mipmapMaxLod: {
                            value: 1
                        },
                        u_randSeed: {
                            value: 0
                        },
                        u_noiseTime: {
                            value: 0
                        },
                        u_modelsPos0: {
                            value: new b(-1, -1, -1)
                        },
                        u_modelsPos1: {
                            value: new b(-1, -1, -1)
                        },
                        u_areaLightLodTexture: Ci.sharedUniforms.u_areaLightLodTexture,
                        u_areaLightLodTextureSize: Ci.sharedUniforms.u_areaLightLodTextureSize,
                        u_areaLightIntensity: Ci.sharedUniforms.u_areaLightIntensity
                    },
                    vertexShader: "#define GLSLIFY 1\nuniform mat4 u_textureMatrix;varying vec3 v_worldPosition;varying vec4 v_reflectionTextureUv;varying vec2 v_uv;varying vec2 v_infoUv;varying vec2 v_infoUv2;void main(){vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;vec3 worldPosition=(modelMatrix*vec4(position,1.0)).xyz;v_reflectionTextureUv=u_textureMatrix*vec4(worldPosition,1.0);v_uv=uv;v_infoUv=worldPosition.xz*0.2;v_infoUv2=worldPosition.xz*0.39+0.321;v_worldPosition=worldPosition;}",
                    fragmentShader: "#define GLSLIFY 1\nuniform sampler2D u_infoTexture;uniform sampler2D u_aoTexture;uniform sampler2D u_areaLightLodTexture;uniform vec2 u_areaLightLodTextureSize;uniform float u_areaLightIntensity;uniform sampler2D u_mipmapTexture;uniform vec2 u_textureSize;uniform vec2 u_mipmapTextureSize;uniform float u_mipmapMaxLod;uniform float u_noiseTime;uniform vec3 u_modelsPos0;uniform vec3 u_modelsPos1;\n#include <textureBicubic>\n#include <lodMipmapSample>\nvarying vec3 v_worldPosition;varying vec4 v_reflectionTextureUv;varying vec2 v_uv;varying vec2 v_infoUv;varying vec2 v_infoUv2;\n#define roughLodSample lodMipmapSampleCubic\nvoid main(){vec2 reflectionUv=v_reflectionTextureUv.xy/v_reflectionTextureUv.w;float lodRatio=u_mipmapMaxLod/12.0;float lodMultiplier=1.0;float baseLod=0.0;vec3 color=lodMipmapSampleCubic(u_mipmapTexture,reflectionUv,baseLod*lodRatio,u_mipmapTextureSize).rgb;vec3 info;vec3 blury;info=texture2D(u_infoTexture,v_infoUv).rgb;blury=roughLodSample(u_mipmapTexture,reflectionUv+info.br/128.0*lodMultiplier,(info.r*info.g*8.0*lodMultiplier+baseLod)*lodRatio,u_mipmapTextureSize).rgb;color=mix(color,blury,clamp((info.g-0.25)*5.0,0.0,1.0));info=texture2D(u_infoTexture,v_infoUv2).rgb;blury=roughLodSample(u_mipmapTexture,reflectionUv,(info.r*5.0*lodMultiplier+baseLod)*lodRatio,u_mipmapTextureSize).rgb;color=mix(color,blury,clamp((info.b-0.3)*7.0,0.0,1.0));vec3 ledColor=lodMipmapSampleCubic(u_areaLightLodTexture,v_uv,length(fwidth(v_uv*vec2(u_areaLightLodTextureSize.x/u_areaLightLodTextureSize.y,1.0)))*u_mipmapMaxLod*40.0,u_areaLightLodTextureSize).rgb*u_areaLightIntensity*0.9;float luma=min(1.0,dot(ledColor,vec3(0.299,0.587,0.114)));gl_FragColor=vec4(color*mix(0.75,1.0,info.g)*(1.0-luma)+ledColor,1.0);}",
                    extensions: {
                        derivatives: !0
                    }
                })), this.mesh.userData.skipReflection = !0, this.container.add(this.mesh), this.mesh.onBeforeRender = this._onBeforeSceneRender.bind(this), this.meshTransformMatrix4.makeRotationX(-.5 * Math.PI), this.m4.makeTranslation(0, .8, 0), this.meshTransformMatrix4.premultiply(this.m4)
            }
        }, {
            key: "resize",
            value: function(e, t) {
                if (this.textureSize) {
                    var i = at.isMobile ? .5 : 1;
                    e = 2 * Math.ceil(e * i / 2), t = 2 * Math.ceil(t * i / 2), e = ft.powerTwoFloor(e), t = ft.powerTwoFloor(t), lt.renderer.xr.isPresenting && (e = 2 * Math.ceil(e / 4)), this.textureSize.set(e, t), this.renderTarget.setSize(1.5 * this.textureSize.x, this.textureSize.y), this.mipmapper.resize(this.textureSize.x, this.textureSize.y, this.renderTarget.width, this.renderTarget.height), this.mesh.material.uniforms.u_mipmapMaxLod.value = this.mipmapper.maxMipmapLevel
                }
            }
        }, {
            key: "_onBeforeSceneRender",
            value: function(e, t, i) {
                if (this.textureSize) {
                    if ("recursion" in i.userData) {
                        if (i.userData.recursion === recursion) return;
                        i.userData.recursion++
                    }
                    if (this.mirrorWorldPosition.setFromMatrixPosition(this.meshTransformMatrix4), this.cameraWorldPosition.setFromMatrixPosition(i.matrixWorld), this.rotationMatrix.extractRotation(this.meshTransformMatrix4), this.normal.set(0, 0, 1), this.normal.applyMatrix4(this.rotationMatrix), this.view.subVectors(this.mirrorWorldPosition, this.cameraWorldPosition), !(this.view.dot(this.normal) > 0)) {
                        this.view.reflect(this.normal).negate(), this.view.add(this.mirrorWorldPosition), this.rotationMatrix.extractRotation(i.matrixWorld), this.lookAtPosition.set(0, 0, -1), this.lookAtPosition.applyMatrix4(this.rotationMatrix), this.lookAtPosition.add(this.cameraWorldPosition), this.target.subVectors(this.mirrorWorldPosition, this.lookAtPosition), this.target.reflect(this.normal).negate(), this.target.add(this.mirrorWorldPosition), this.mirrorCamera.position.copy(this.view), this.mirrorCamera.up.set(0, 1, 0), this.mirrorCamera.up.applyMatrix4(this.rotationMatrix), this.mirrorCamera.up.reflect(this.normal), this.mirrorCamera.lookAt(this.target), this.mirrorCamera.near = i.near, this.mirrorCamera.far = i.far, this.mirrorCamera.updateMatrixWorld(), this.mirrorCamera.projectionMatrix.copy(i.projectionMatrix), this.textureMatrix.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), this.textureMatrix.multiply(this.mirrorCamera.projectionMatrix), this.textureMatrix.multiply(this.mirrorCamera.matrixWorldInverse), this.textureMatrix.multiply(this.mesh.matrixWorld), this.mirrorPlane.setFromNormalAndCoplanarPoint(this.normal, this.mirrorWorldPosition), this.mirrorPlane.applyMatrix4(this.mirrorCamera.matrixWorldInverse), this.clipPlane.set(this.mirrorPlane.normal.x, this.mirrorPlane.normal.y, this.mirrorPlane.normal.z, this.mirrorPlane.constant);
                        var r = this.mirrorCamera.projectionMatrix;
                        this.q.x = (Math.sign(this.clipPlane.x) + r.elements[8]) / r.elements[0], this.q.y = (Math.sign(this.clipPlane.y) + r.elements[9]) / r.elements[5], this.q.z = -1, this.q.w = (1 + r.elements[10]) / r.elements[14], this.clipPlane.multiplyScalar(2 / this.clipPlane.dot(this.q)), r.elements[2] = this.clipPlane.x, r.elements[6] = this.clipPlane.y, r.elements[10] = this.clipPlane.z + 1 - this.clipBias, r.elements[14] = this.clipPlane.w, this.eye.setFromMatrixPosition(i.matrixWorld);
                        var a = e.getRenderTarget(),
                            n = e.xr.enabled,
                            o = e.shadowMap.autoUpdate;
                        e.xr.enabled = !1, e.shadowMap.autoUpdate = !1, e.setRenderTarget(this.renderTarget), e.setViewport(0, 0, this.textureSize.x, this.textureSize.y), lt.renderer.xr.isPresenting ? (e.setScissor(0, 0, lt.width, lt.height), e.setScissorTest(!1)) : (e.setScissor(0, 0, this.textureSize.x, this.textureSize.y), e.setScissorTest(!0)), lt.scene.traverse(this._traverseBeforeRender), e.render(t, this.mirrorCamera), e.setRenderTarget(null), e.setViewport(0, 0, lt.width, lt.height), lt.renderer.xr.isPresenting || e.setScissor(0, 0, lt.width, lt.height), this.mipmapper.render(this.renderTarget), e.xr.enabled = n, e.shadowMap.autoUpdate = o, e.setRenderTarget(a), e.setViewport(0, 0, lt.width, lt.height), e.setScissorTest(!1);
                        var s = i.viewport;
                        void 0 !== s && e.state.viewport(s), lt.scene.traverse(this._traverseAfterRender), this.mesh.material.uniforms.u_randSeed.value = 1e3 * Math.random()
                    }
                }
            }
        }, {
            key: "_traverseBeforeRender",
            value: function(e) {
                e.userData.skipReflection ? (e.userData.isVisible = e.visible, e.visible = !1) : e.material && e.material.uniforms && e.material.uniforms.u_isReflection && (e.material.uniforms.u_isReflection.value = 1)
            }
        }, {
            key: "_traverseAfterRender",
            value: function(e) {
                e.userData.skipReflection ? e.visible = e.userData.isVisible : e.material && e.material.uniforms && e.material.uniforms.u_isReflection && (e.material.uniforms.u_isReflection.value = 0)
            }
        }, {
            key: "update",
            value: function(e) {}
        }]), e
    }()),
    ji = new(function() {
        function e() {
            f(this, e), p(this, "container", void 0), p(this, "ledTimeoutId", void 0), p(this, "ledVisualIndex", 0), this.container = new R
        }
        return m(e, [{
            key: "preInit",
            value: function() {
                Ci.preInit(), Vi.preInit(), this.container.add(Vi.container), Li.preInit(), this.container.add(Li.container), Yi.preInit(), this.container.add(Yi.container), Ai.preInit(), this.container.add(Ai.container), _i.preInit(), lt.snapshotsManager.preInit()
            }
        }, {
            key: "init",
            value: function() {
                var e = this;
                Ci.init(), Vi.init(), Li.init(), Yi.init(), Ai.init(), _i.init(), this.changeLedVisual(), lt.ledAnimationSignal.add((function() {
                    return e.changeLedVisual()
                })), lt.snapshotsManager.init()
            }
        }, {
            key: "changeLedVisual",
            value: function() {
                var e = this;
                this.ledTimeoutId && clearTimeout(this.ledTimeoutId), Ci.changeEffect(Ci.effectList[this.ledVisualIndex]), this.ledVisualIndex += 1, this.ledVisualIndex %= Ci.effectList.length, this.ledTimeoutId = setTimeout((function() {
                    return e.changeLedVisual()
                }), 1e4)
            }
        }, {
            key: "resize",
            value: function(e, t) {
                Ci.resize(e, t), Vi.resize(e, t), Li.resize(e, t), Yi.resize(e, t), Ai.resize(e, t)
            }
        }, {
            key: "update",
            value: function(e) {
                lt.fadeWhite = $e(lt.fadeWhite, 0, .2), lt.fadeBlack = $e(lt.fadeBlack, 0, .05), Vi.update(e), lt.snapshotsManager.isActive && lt.isCameraViewActive || (Ci.update(e), Li.update(e), Yi.update(e), Ai.update(e), _i.update(e))
            }
        }]), e
    }()),
    Xi = function() {
        function e(t) {
            var i = t.canvas;
            f(this, e), lt.canvas = i instanceof HTMLCanvasElement ? i : null, this.raf = null, this.isLoadingStageFinished = !1, this.prePreInit()
        }
        return m(e, [{
            key: "prePreInit",
            value: function() {
                document.querySelector("body").style.display = "block", li.prePreInit(), !0 === lt._isSupported ? this.preInit() : li.notSupported()
            }
        }, {
            key: "preInit",
            value: function() {
                for (var e = this, t = 0, i = Object.entries(ot.CROSS_ORIGINS); t < i.length; t++) {
                    var r = h(i[t], 2),
                        a = r[0],
                        n = r[1];
                    lt.loader.setCrossOrigin(a, n)
                }
                lt.loader.register(ai), lt.loader.register(oi), this.preInitStage(), ui.init(), lt.loader.add(ot.DATA_PATH + "colornames_new.json", {
                    onLoad: function(e) {
                        lt.getNearestColor = function(e) {
                            var t = Object.keys(e),
                                i = new w,
                                r = new w;
                            return function(a) {
                                var n = t.reduce((function(e, t) {
                                    i.set(t), r.set(a);
                                    var n = Math.sqrt(Math.pow(i.r - r.r, 2) + Math.pow(i.g - r.g, 2) + Math.pow(i.b - r.b, 2));
                                    return n < e.distance && (e.distance = n, e.color = t), e
                                }), {
                                    color: "#ffffff",
                                    distance: 9999
                                });
                                return e[n.color]
                            }
                        }(e)
                    }
                }), !0 === lt.isStageReady && (ut.preInit(), ji.preInit(), pi.preInit((function() {
                    e.init()
                })), lt.lastDateTime = +new Date / 1e3, (window.visualViewport || window).addEventListener("resize", (function(t) {
                    return e._onResize(t)
                })), this._onResize(), this._loop())
            }
        }, {
            key: "preInitStage",
            value: function() {
                lt.width = window.innerWidth, lt.height = window.innerHeight, lt.renderer = new et({
                    canvas: lt.canvas,
                    context: lt.gl
                }), lt.scene = new j, lt.camera = new K(75, 1, .05, 100), lt.camera.position.z = 5, lt.scene.add(lt.camera), lt.sharedUniforms.u_resolution.value = lt.resolution = new L, lt.sharedUniforms.u_bgColor.value = lt.bgColor = new w, Kt.init(lt.renderer, ot.RENDER_TARGET_FLOAT_TYPE), ii.init(), ti.addChunk("textureBicubic", "#define GLSLIFY 1\nvec4 cubic(float v){vec4 n=vec4(1.0,2.0,3.0,4.0)-v;vec4 s=n*n*n;float x=s.x;float y=s.y-4.0*s.x;float z=s.z-4.0*s.y+6.0*s.x;float w=6.0-x-y-z;return vec4(x,y,z,w);}vec4 textureBicubic(sampler2D t,vec2 texCoords,vec2 textureSize){vec2 invTexSize=1.0/textureSize;texCoords=texCoords*textureSize-0.5;vec2 fxy=fract(texCoords);texCoords-=fxy;vec4 xcubic=cubic(fxy.x);vec4 ycubic=cubic(fxy.y);vec4 c=texCoords.xxyy+vec2(-0.5,1.5).xyxy;vec4 s=vec4(xcubic.xz+xcubic.yw,ycubic.xz+ycubic.yw);vec4 offset=c+vec4(xcubic.yw,ycubic.yw)/s;offset*=invTexSize.xxyy;vec4 sample0=texture2D(t,offset.xz);vec4 sample1=texture2D(t,offset.yz);vec4 sample2=texture2D(t,offset.xw);vec4 sample3=texture2D(t,offset.yw);float sx=s.x/(s.x+s.y);float sy=s.z/(s.z+s.w);return mix(mix(sample3,sample2,sx),mix(sample1,sample0,sx),sy);}vec4 textureBicubic(sampler2D t,vec2 texCoords,vec2 textureSize,vec4 clampRect){vec2 invTexSize=1.0/textureSize;texCoords=texCoords*textureSize-0.5;vec2 fxy=fract(texCoords);texCoords-=fxy;vec4 xcubic=cubic(fxy.x);vec4 ycubic=cubic(fxy.y);vec4 c=texCoords.xxyy+vec2(-0.5,1.5).xyxy;vec4 s=vec4(xcubic.xz+xcubic.yw,ycubic.xz+ycubic.yw);vec4 offset=c+vec4(xcubic.yw,ycubic.yw)/s;offset*=invTexSize.xxyy;vec4 sample0=texture2D(t,clamp(offset.xz,clampRect.xy,clampRect.zw));vec4 sample1=texture2D(t,clamp(offset.yz,clampRect.xy,clampRect.zw));vec4 sample2=texture2D(t,clamp(offset.xw,clampRect.xy,clampRect.zw));vec4 sample3=texture2D(t,clamp(offset.yw,clampRect.xy,clampRect.zw));float sx=s.x/(s.x+s.y);float sy=s.z/(s.z+s.w);return mix(mix(sample3,sample2,sx),mix(sample1,sample0,sx),sy);}"), lt.postprocessing = new Vt, lt.postprocessing.init({
                    scene: lt.scene,
                    camera: lt.camera
                }), si.init(), ot.USE_WEBGL2 || (lt.smaa = new jt, lt.smaa.init(), lt.smaa.setTextures(lt.loader.add(ot.TEXTURE_PATH + "smaa-area.png", {
                    weight: 32
                }).content, lt.loader.add(ot.TEXTURE_PATH + "smaa-search.png", {
                    weight: .1
                }).content), lt.postprocessing.queue.push(lt.smaa)), lt.bokeh = new Jt, lt.postprocessing.useDepthTexture && !at.isMobile && (lt.bokeh.init(), lt.postprocessing.queue.push(lt.bokeh)), lt.bloom = new Xt, lt.bloom.init(), lt.postprocessing.queue.push(lt.bloom), lt.final = new Qt, lt.final.init(), lt.postprocessing.queue.push(lt.final), lt.frame = new ei, lt.frame.init(), lt.postprocessing.queue.push(lt.frame), Gt.preInit(), lt.isStageReady = !0
            }
        }, {
            key: "init",
            value: function() {
                this.isLoadingStageFinished = !0, lt.smaa && lt.smaa.updateTextures(), document.documentElement.classList.add("is-ready"), document.documentElement.classList.add("is-".concat(at.device)), Gt.init(), ji.init(), pi.init(), lt.scene.add(ji.container), this.resize(lt.rawWidth, lt.rawHeight), lt.hasInitialized = !0
            }
        }, {
            key: "_onResize",
            value: function(e) {
                var t = window.innerWidth,
                    i = window.innerHeight,
                    r = t * ot.DPR,
                    a = i * ot.DPR;
                if (r * a > ot.MAX_PIXEL_COUNT && !0 === ot.USE_PIXEL_LIMIT) {
                    var n = r / a;
                    a = Math.sqrt(ot.MAX_PIXEL_COUNT / n), r = Math.ceil(a * n), a = Math.ceil(a)
                }
                lt.rawWidth = t, lt.rawHeight = i, lt.width = r, lt.height = a, this.resize()
            }
        }, {
            key: "resize",
            value: function() {
                document.documentElement.style.setProperty("--vh", .01 * lt.rawHeight + "px"), lt.resolution.set(lt.width, lt.height), lt.renderer.setSize(lt.width, lt.height), lt.canvas.width = lt.width, lt.canvas.height = lt.height, lt.canvas.style.width = "".concat(lt.rawWidth, "px"), lt.canvas.style.height = "".concat(lt.rawHeight, "px"), lt.camera.aspect = lt.width / lt.height, lt.camera.updateProjectionMatrix(), lt.postprocessing.setSize(lt.width, lt.height), lt.frame.resize(lt.width, lt.height), pi.resize(lt.rawWidth, lt.rawHeight), ji.resize(lt.width, lt.height)
            }
        }, {
            key: "_loop",
            value: function() {
                var e = +new Date / 1e3;
                lt.realTime += e - lt.lastDateTime;
                var t = Math.min(4 / 60, e - lt.lastDateTime) || 0;
                lt.lastDateTime = e, lt.deltaTime = t, lt.time += t, lt.sharedUniforms.u_time.value = lt.time, this.render(t), this.raf = window.requestAnimationFrame(this._loop.bind(this))
            }
        }, {
            key: "render",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                Gt.update(e), pi.update(e), this.isLoadingStageFinished && (lt.opacity = Math.min(lt.opacity + e / 2, 1), lt.blurRatio = Math.max(lt.blurRatio - e, 0), lt.brightness = Math.min(lt.brightness + e / 1.5, 1), ji.update(e), lt.loadingFramePercent += .4 * e, lt.loadingFramePercent = ft.clamp(lt.loadingFramePercent, 0, 1), 1 === lt.loadingFramePercent && (lt.loadingFramePercent2 += .18 * e, lt.loadingFramePercent2 = ft.clamp(lt.loadingFramePercent2, 0, 1))), lt.canvas.style.zIndex = lt.aboutRatio > 0 ? 900 : 0, lt.renderer.setClearColor(lt.bgColor, 1), lt.bgColor.setStyle(lt.bgColorHex), lt.bloom.amount = lt.bloomAmount, lt.bloom.radius = lt.bloomRadius, lt.bloom.threshold = lt.bloomThreshold, lt.bloom.smoothWidth = lt.bloomSmoothWidth, lt.bloom.haloWidth = lt.haloWidth, lt.bloom.haloRGBShift = lt.haloRGBShift, lt.bloom.haloStrength = lt.haloStrength, lt.final.vignetteFrom = lt.vignetteFrom, lt.final.vignetteTo = lt.vignetteTo - .3 * lt.frameStatus, lt.final.vignetteColor.setStyle(lt.vignetteColorHex), lt.final.saturation = lt.saturation, lt.final.contrast = lt.contrast, lt.final.brightness = lt.brightness, lt.final.tintColor.setStyle(lt.tintColorHex), lt.final.tintOpacity = lt.tintOpacity, lt.final.bgColor.setStyle(lt.bgColorHex), lt.final.opacity = lt.opacity, lt.final.blurRatio = lt.blurRatio, lt.bokeh.amount = lt.bokehAmount, lt.bokeh.fNumber = lt.bokehFNumber, lt.bokeh.focusDistance = lt.bokehFocusDistance, lt.bokeh.focalLength = lt.bokehFocalLength, lt.bokeh.kFilmHeight = lt.bokehKFilmHeight, lt.scene.matrixAutoUpdate = !1, lt.scene.updateMatrixWorld(!0), lt.postprocessing.render(lt.scene, lt.camera, !0), ui.update(e), lt.debugTexture && Kt.debugTo(lt.debugTexture)
            }
        }]), e
    }();
window.App = new Xi({
    canvas: document.getElementById("canvas")
});