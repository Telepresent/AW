var $jscomp = $jscomp || {};
$jscomp.scope = {}, $jscomp.arrayIteratorImpl = function(t) {
    var e = 0;
    return function() {
        return e < t.length ? {
            done: !1,
            value: t[e++]
        } : {
            done: !0
        }
    }
}, $jscomp.arrayIterator = function(t) {
    return {
        next: $jscomp.arrayIteratorImpl(t)
    }
}, $jscomp.makeIterator = function(t) {
    var e = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
    return e ? e.call(t) : $jscomp.arrayIterator(t)
}, $jscomp.getGlobal = function(t) {
    return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, r) {
    t != Array.prototype && t != Object.prototype && (t[e] = r.value)
}, $jscomp.polyfill = function(t, e, r, n) {
    if (e) {
        for (r = $jscomp.global, t = t.split("."), n = 0; n < t.length - 1; n++) {
            var o = t[n];
            o in r || (r[o] = {}), r = r[o]
        }(e = e(n = r[t = t[t.length - 1]])) != n && null != e && $jscomp.defineProperty(r, t, {
            configurable: !0,
            writable: !0,
            value: e
        })
    }
}, $jscomp.FORCE_POLYFILL_PROMISE = !1, $jscomp.polyfill("Promise", (function(t) {
    function e() {
        this.batch_ = null
    }

    function r(t) {
        return t instanceof o ? t : new o((function(e, r) {
            e(t)
        }))
    }
    if (t && !$jscomp.FORCE_POLYFILL_PROMISE) return t;
    e.prototype.asyncExecute = function(t) {
        if (null == this.batch_) {
            this.batch_ = [];
            var e = this;
            this.asyncExecuteFunction((function() {
                e.executeBatch_()
            }))
        }
        this.batch_.push(t)
    };
    var n = $jscomp.global.setTimeout;
    e.prototype.asyncExecuteFunction = function(t) {
        n(t, 0)
    }, e.prototype.executeBatch_ = function() {
        for (; this.batch_ && this.batch_.length;) {
            var t = this.batch_;
            this.batch_ = [];
            for (var e = 0; e < t.length; ++e) {
                var r = t[e];
                t[e] = null;
                try {
                    r()
                } catch (t) {
                    this.asyncThrow_(t)
                }
            }
        }
        this.batch_ = null
    }, e.prototype.asyncThrow_ = function(t) {
        this.asyncExecuteFunction((function() {
            throw t
        }))
    };
    var o = function(t) {
        this.state_ = 0, this.result_ = void 0, this.onSettledCallbacks_ = [];
        var e = this.createResolveAndReject_();
        try {
            t(e.resolve, e.reject)
        } catch (t) {
            e.reject(t)
        }
    };
    o.prototype.createResolveAndReject_ = function() {
        function t(t) {
            return function(n) {
                r || (r = !0, t.call(e, n))
            }
        }
        var e = this,
            r = !1;
        return {
            resolve: t(this.resolveTo_),
            reject: t(this.reject_)
        }
    }, o.prototype.resolveTo_ = function(t) {
        if (t === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (t instanceof o) this.settleSameAsPromise_(t);
        else {
            t: switch (typeof t) {
                case "object":
                    var e = null != t;
                    break t;
                case "function":
                    e = !0;
                    break t;
                default:
                    e = !1
            }
            e ? this.resolveToNonPromiseObj_(t) : this.fulfill_(t)
        }
    }, o.prototype.resolveToNonPromiseObj_ = function(t) {
        var e = void 0;
        try {
            e = t.then
        } catch (t) {
            return void this.reject_(t)
        }
        "function" == typeof e ? this.settleSameAsThenable_(e, t) : this.fulfill_(t)
    }, o.prototype.reject_ = function(t) {
        this.settle_(2, t)
    }, o.prototype.fulfill_ = function(t) {
        this.settle_(1, t)
    }, o.prototype.settle_ = function(t, e) {
        if (0 != this.state_) throw Error("Cannot settle(" + t + ", " + e + "): Promise already settled in state" + this.state_);
        this.state_ = t, this.result_ = e, this.executeOnSettledCallbacks_()
    }, o.prototype.executeOnSettledCallbacks_ = function() {
        if (null != this.onSettledCallbacks_) {
            for (var t = 0; t < this.onSettledCallbacks_.length; ++t) _.asyncExecute(this.onSettledCallbacks_[t]);
            this.onSettledCallbacks_ = null
        }
    };
    var _ = new e;
    return o.prototype.settleSameAsPromise_ = function(t) {
        var e = this.createResolveAndReject_();
        t.callWhenSettled_(e.resolve, e.reject)
    }, o.prototype.settleSameAsThenable_ = function(t, e) {
        var r = this.createResolveAndReject_();
        try {
            t.call(e, r.resolve, r.reject)
        } catch (t) {
            r.reject(t)
        }
    }, o.prototype.then = function(t, e) {
        function r(t, e) {
            return "function" == typeof t ? function(e) {
                try {
                    n(t(e))
                } catch (t) {
                    _(t)
                }
            } : e
        }
        var n, _, i = new o((function(t, e) {
            n = t, _ = e
        }));
        return this.callWhenSettled_(r(t, n), r(e, _)), i
    }, o.prototype.catch = function(t) {
        return this.then(void 0, t)
    }, o.prototype.callWhenSettled_ = function(t, e) {
        function r() {
            switch (n.state_) {
                case 1:
                    t(n.result_);
                    break;
                case 2:
                    e(n.result_);
                    break;
                default:
                    throw Error("Unexpected state: " + n.state_)
            }
        }
        var n = this;
        null == this.onSettledCallbacks_ ? _.asyncExecute(r) : this.onSettledCallbacks_.push(r)
    }, o.resolve = r, o.reject = function(t) {
        return new o((function(e, r) {
            r(t)
        }))
    }, o.race = function(t) {
        return new o((function(e, n) {
            for (var o = $jscomp.makeIterator(t), _ = o.next(); !_.done; _ = o.next()) r(_.value).callWhenSettled_(e, n)
        }))
    }, o.all = function(t) {
        var e = $jscomp.makeIterator(t),
            n = e.next();
        return n.done ? r([]) : new o((function(t, o) {
            function _(e) {
                return function(r) {
                    i[e] = r, 0 == --p && t(i)
                }
            }
            var i = [],
                p = 0;
            do {
                i.push(void 0), p++, r(n.value).callWhenSettled_(_(i.length - 1), o), n = e.next()
            } while (!n.done)
        }))
    }, o
}), "es6", "es3");
var DracoDecoderModule = function() {
    var t = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0;
    return "undefined" != typeof __filename && (t = t || __filename),
        function(e) {
            function r(t, e) {
                t || a("Assertion failed: " + e)
            }

            function n(t, e, r) {
                var n = e + r;
                for (r = e; t[r] && !(r >= n);) ++r;
                if (16 < r - e && t.subarray && ot) return ot.decode(t.subarray(e, r));
                for (n = ""; e < r;) {
                    var o = t[e++];
                    if (128 & o) {
                        var _ = 63 & t[e++];
                        if (192 == (224 & o)) n += String.fromCharCode((31 & o) << 6 | _);
                        else {
                            var i = 63 & t[e++];
                            65536 > (o = 224 == (240 & o) ? (15 & o) << 12 | _ << 6 | i : (7 & o) << 18 | _ << 12 | i << 6 | 63 & t[e++]) ? n += String.fromCharCode(o) : (o -= 65536, n += String.fromCharCode(55296 | o >> 10, 56320 | 1023 & o))
                        }
                    } else n += String.fromCharCode(o)
                }
                return n
            }

            function o(t, e) {
                return t ? n(it, t, e) : ""
            }

            function _(t, e) {
                return 0 < t % e && (t += e - t % e), t
            }

            function i(t) {
                ut = t, w.HEAP8 = _t = new Int8Array(t), w.HEAP16 = new Int16Array(t), w.HEAP32 = pt = new Int32Array(t), w.HEAPU8 = it = new Uint8Array(t), w.HEAPU16 = new Uint16Array(t), w.HEAPU32 = new Uint32Array(t), w.HEAPF32 = new Float32Array(t), w.HEAPF64 = new Float64Array(t)
            }

            function p(t) {
                for (; 0 < t.length;) {
                    var e = t.shift();
                    if ("function" == typeof e) e();
                    else {
                        var r = e.func;
                        "number" == typeof r ? void 0 === e.arg ? w.dynCall_v(r) : w.dynCall_vi(r, e.arg) : r(void 0 === e.arg ? null : e.arg)
                    }
                }
            }

            function a(t) {
                throw w.onAbort && w.onAbort(t), J(t += ""), tt(t), nt = !0, new WebAssembly.RuntimeError("abort(" + t + "). Build with -s ASSERTIONS=1 for more info.")
            }

            function u(t) {
                return String.prototype.startsWith ? t.startsWith("data:application/octet-stream;base64,") : 0 === t.indexOf("data:application/octet-stream;base64,")
            }

            function c() {
                try {
                    if (X) return new Uint8Array(X);
                    if (Z) return Z(ht);
                    throw "both async and sync fetching of the wasm failed"
                } catch (t) {
                    a(t)
                }
            }

            function s() {
                if (!s.strings) {
                    var t, e = {
                        USER: "web_user",
                        LOGNAME: "web_user",
                        PATH: "/",
                        PWD: "/",
                        HOME: "/home/web_user",
                        LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                        _: W
                    };
                    for (t in Tt) e[t] = Tt[t];
                    var r = [];
                    for (t in e) r.push(t + "=" + e[t]);
                    s.strings = r
                }
                return s.strings
            }

            function l(t) {
                function e() {
                    if (!_n && (_n = !0, !nt)) {
                        if (ft = !0, p(st), p(lt), w.onRuntimeInitialized && w.onRuntimeInitialized(), w.postRun)
                            for ("function" == typeof w.postRun && (w.postRun = [w.postRun]); w.postRun.length;) yt.unshift(w.postRun.shift());
                        p(yt)
                    }
                }
                if (!(0 < mt)) {
                    if (w.preRun)
                        for ("function" == typeof w.preRun && (w.preRun = [w.preRun]); w.preRun.length;) ct.unshift(w.preRun.shift());
                    p(ct), 0 < mt || (w.setStatus ? (w.setStatus("Running..."), setTimeout((function() {
                        setTimeout((function() {
                            w.setStatus("")
                        }), 1), e()
                    }), 1)) : e())
                }
            }

            function y() {}

            function f(t) {
                return (t || y).__cache__
            }

            function m(t, e) {
                var r = f(e),
                    n = r[t];
                return n || ((n = Object.create((e || y).prototype)).ptr = t, r[t] = n)
            }

            function d(t) {
                if ("string" == typeof t) {
                    for (var e = 0, r = 0; r < t.length; ++r) {
                        var n = t.charCodeAt(r);
                        55296 <= n && 57343 >= n && (n = 65536 + ((1023 & n) << 10) | 1023 & t.charCodeAt(++r)), 127 >= n ? ++e : e = 2047 >= n ? e + 2 : 65535 >= n ? e + 3 : e + 4
                    }
                    if (r = 0, 0 < (n = (e = Array(e + 1)).length)) {
                        n = r + n - 1;
                        for (var o = 0; o < t.length; ++o) {
                            var _ = t.charCodeAt(o);
                            if (55296 <= _ && 57343 >= _ && (_ = 65536 + ((1023 & _) << 10) | 1023 & t.charCodeAt(++o)), 127 >= _) {
                                if (r >= n) break;
                                e[r++] = _
                            } else {
                                if (2047 >= _) {
                                    if (r + 1 >= n) break;
                                    e[r++] = 192 | _ >> 6
                                } else {
                                    if (65535 >= _) {
                                        if (r + 2 >= n) break;
                                        e[r++] = 224 | _ >> 12
                                    } else {
                                        if (r + 3 >= n) break;
                                        e[r++] = 240 | _ >> 18, e[r++] = 128 | _ >> 12 & 63
                                    }
                                    e[r++] = 128 | _ >> 6 & 63
                                }
                                e[r++] = 128 | 63 & _
                            }
                        }
                        e[r] = 0
                    }
                    t = an.alloc(e, _t), an.copy(e, _t, t)
                }
                return t
            }

            function b() {
                throw "cannot construct a Status, no constructor in IDL"
            }

            function A() {
                this.ptr = Pt(), f(A)[this.ptr] = this
            }

            function h() {
                this.ptr = Nt(), f(h)[this.ptr] = this
            }

            function T() {
                this.ptr = wt(), f(T)[this.ptr] = this
            }

            function D() {
                this.ptr = Bt(), f(D)[this.ptr] = this
            }

            function I() {
                this.ptr = $t(), f(I)[this.ptr] = this
            }

            function v() {
                this.ptr = Yt(), f(v)[this.ptr] = this
            }

            function G() {
                this.ptr = ie(), f(G)[this.ptr] = this
            }

            function j() {
                this.ptr = ue(), f(j)[this.ptr] = this
            }

            function E() {
                this.ptr = me(), f(E)[this.ptr] = this
            }

            function O() {
                this.ptr = he(), f(O)[this.ptr] = this
            }

            function R() {
                this.ptr = Re(), f(R)[this.ptr] = this
            }

            function P() {
                this.ptr = Me(), f(P)[this.ptr] = this
            }

            function g() {
                this.ptr = Ce(), f(g)[this.ptr] = this
            }

            function S() {
                this.ptr = ze(), f(S)[this.ptr] = this
            }

            function M() {
                this.ptr = Be(), f(M)[this.ptr] = this
            }

            function N() {
                this.ptr = fr(), f(N)[this.ptr] = this
            }

            function U() {
                throw "cannot construct a VoidPtr, no constructor in IDL"
            }

            function F() {
                this.ptr = Tr(), f(F)[this.ptr] = this
            }

            function C() {
                this.ptr = Gr(), f(C)[this.ptr] = this
            }
            var w = void 0 !== (e = e || {}) ? e : {},
                z = !1,
                L = !1;
            w.onRuntimeInitialized = function() {
                z = !0, L && "function" == typeof w.onModuleLoaded && w.onModuleLoaded(w)
            }, w.onModuleParsed = function() {
                L = !0, z && "function" == typeof w.onModuleLoaded && w.onModuleLoaded(w)
            }, w.isVersionSupported = function(t) {
                return "string" == typeof t && !(2 > (t = t.split(".")).length || 3 < t.length) && (1 == t[0] && 0 <= t[1] && 3 >= t[1] || !(0 != t[0] || 10 < t[1]))
            };
            var V, B = {};
            for (V in w) w.hasOwnProperty(V) && (B[V] = w[V]);
            var k, x, Q, $, W = "./this.program";
            Q = "object" == typeof window, $ = "function" == typeof importScripts, k = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node && !Q && !$, x = !Q && !k && !$;
            var H, q, Y = "";
            if (k) {
                Y = __dirname + "/";
                var K = function(t, e) {
                        return H || (H = require("fs")), q || (q = require("path")), t = q.normalize(t), H.readFileSync(t, e ? null : "utf8")
                    },
                    Z = function(t) {
                        return (t = K(t, !0)).buffer || (t = new Uint8Array(t)), r(t.buffer), t
                    };
                1 < process.argv.length && (W = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), process.on("uncaughtException", (function(t) {
                    throw t
                })), process.on("unhandledRejection", a), w.inspect = function() {
                    return "[Emscripten Module object]"
                }
            } else x ? ("undefined" != typeof read && (K = function(t) {
                return read(t)
            }), Z = function(t) {
                return "function" == typeof readbuffer ? new Uint8Array(readbuffer(t)) : (r("object" == typeof(t = read(t, "binary"))), t)
            }, "undefined" != typeof print && ("undefined" == typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" != typeof printErr ? printErr : print)) : (Q || $) && ($ ? Y = self.location.href : document.currentScript && (Y = document.currentScript.src), t && (Y = t), Y = 0 !== Y.indexOf("blob:") ? Y.substr(0, Y.lastIndexOf("/") + 1) : "", K = function(t) {
                var e = new XMLHttpRequest;
                return e.open("GET", t, !1), e.send(null), e.responseText
            }, $ && (Z = function(t) {
                var e = new XMLHttpRequest;
                return e.open("GET", t, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response)
            }));
            var X, J = w.print || console.log.bind(console),
                tt = w.printErr || console.warn.bind(console);
            for (V in B) B.hasOwnProperty(V) && (w[V] = B[V]);
            B = null, w.thisProgram && (W = w.thisProgram), w.wasmBinary && (X = w.wasmBinary), "object" != typeof WebAssembly && tt("no native wasm support detected");
            var et, rt = new WebAssembly.Table({
                    initial: 381,
                    maximum: 381,
                    element: "anyfunc"
                }),
                nt = !1,
                ot = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
            "undefined" != typeof TextDecoder && new TextDecoder("utf-16le");
            var _t, it, pt, at = w.TOTAL_MEMORY || 16777216;
            if (et = w.wasmMemory ? w.wasmMemory : new WebAssembly.Memory({
                    initial: at / 65536
                })) var ut = et.buffer;
            at = ut.byteLength, i(ut), pt[4604] = 5261456;
            var ct = [],
                st = [],
                lt = [],
                yt = [],
                ft = !1,
                mt = 0,
                dt = null,
                bt = null;
            w.preloadedImages = {}, w.preloadedAudios = {};
            var At, ht = "draco_decoder.wasm";
            u(ht) || (At = ht, ht = w.locateFile ? w.locateFile(At, Y) : Y + At), st.push({
                func: function() {
                    Gt()
                }
            });
            var Tt = {},
                Dt = {
                    buffers: [null, [],
                        []
                    ],
                    printChar: function(t, e) {
                        var r = Dt.buffers[t];
                        0 === e || 10 === e ? ((1 === t ? J : tt)(n(r, 0)), r.length = 0) : r.push(e)
                    },
                    varargs: 0,
                    get: function(t) {
                        return Dt.varargs += 4, pt[Dt.varargs - 4 >> 2]
                    },
                    getStr: function() {
                        return o(Dt.get())
                    },
                    get64: function() {
                        var t = Dt.get();
                        return Dt.get(), t
                    },
                    getZero: function() {
                        Dt.get()
                    }
                },
                It = {
                    __cxa_allocate_exception: function(t) {
                        return pn(t)
                    },
                    __cxa_throw: function(t, e, r) {
                        throw "uncaught_exception" in on ? on.uncaught_exceptions++ : on.uncaught_exceptions = 1, t
                    },
                    abort: function() {
                        a()
                    },
                    emscripten_get_sbrk_ptr: function() {
                        return 18416
                    },
                    emscripten_memcpy_big: function(t, e, r) {
                        it.set(it.subarray(e, e + r), t)
                    },
                    emscripten_resize_heap: function(t) {
                        if (2147418112 < t) return !1;
                        for (var e = Math.max(_t.length, 16777216); e < t;) e = 536870912 >= e ? _(2 * e, 65536) : Math.min(_((3 * e + 2147483648) / 4, 65536), 2147418112);
                        t: {
                            try {
                                et.grow(e - ut.byteLength + 65535 >> 16), i(et.buffer);
                                var r = 1;
                                break t
                            } catch (t) {}
                            r = void 0
                        }
                        return !!r
                    },
                    environ_get: function(t, e) {
                        var r = 0;
                        return s().forEach((function(n, o) {
                            var _ = e + r;
                            for (o = pt[t + 4 * o >> 2] = _, _ = 0; _ < n.length; ++_) _t[o++ >> 0] = n.charCodeAt(_);
                            _t[o >> 0] = 0, r += n.length + 1
                        })), 0
                    },
                    environ_sizes_get: function(t, e) {
                        var r = s();
                        pt[t >> 2] = r.length;
                        var n = 0;
                        return r.forEach((function(t) {
                            n += t.length + 1
                        })), pt[e >> 2] = n, 0
                    },
                    fd_close: function(t) {
                        return 0
                    },
                    fd_seek: function(t, e, r, n, o) {
                        return 0
                    },
                    fd_write: function(t, e, r, n) {
                        try {
                            for (var o = 0, _ = 0; _ < r; _++) {
                                for (var i = pt[e + 8 * _ >> 2], p = pt[e + (8 * _ + 4) >> 2], u = 0; u < p; u++) Dt.printChar(t, it[i + u]);
                                o += p
                            }
                            return pt[n >> 2] = o, 0
                        } catch (t) {
                            return "undefined" != typeof FS && t instanceof FS.ErrnoError || a(t), t.errno
                        }
                    },
                    memory: et,
                    setTempRet0: function(t) {},
                    table: rt
                },
                vt = function() {
                    function t(t, e) {
                        w.asm = t.exports, mt--, w.monitorRunDependencies && w.monitorRunDependencies(mt), 0 == mt && (null !== dt && (clearInterval(dt), dt = null), bt && (t = bt, bt = null, t()))
                    }

                    function e(e) {
                        t(e.instance)
                    }

                    function r(t) {
                        return (X || !Q && !$ || "function" != typeof fetch ? new Promise((function(t, e) {
                            t(c())
                        })) : fetch(ht, {
                            credentials: "same-origin"
                        }).then((function(t) {
                            if (!t.ok) throw "failed to load wasm binary file at '" + ht + "'";
                            return t.arrayBuffer()
                        })).catch((function() {
                            return c()
                        }))).then((function(t) {
                            return WebAssembly.instantiate(t, n)
                        })).then(t, (function(t) {
                            tt("failed to asynchronously prepare wasm: " + t), a(t)
                        }))
                    }
                    var n = {
                        env: It,
                        wasi_unstable: It
                    };
                    if (mt++, w.monitorRunDependencies && w.monitorRunDependencies(mt), w.instantiateWasm) try {
                        return w.instantiateWasm(n, t)
                    } catch (t) {
                        return tt("Module.instantiateWasm callback failed with error: " + t), !1
                    }
                    return function() {
                        if (X || "function" != typeof WebAssembly.instantiateStreaming || u(ht) || "function" != typeof fetch) return r(e);
                        fetch(ht, {
                            credentials: "same-origin"
                        }).then((function(t) {
                            return WebAssembly.instantiateStreaming(t, n).then(e, (function(t) {
                                tt("wasm streaming compile failed: " + t), tt("falling back to ArrayBuffer instantiation"), r(e)
                            }))
                        }))
                    }(), {}
                }();
            w.asm = vt;
            var Gt = w.___wasm_call_ctors = function() {
                    return w.asm.__wasm_call_ctors.apply(null, arguments)
                },
                jt = w._emscripten_bind_Status_code_0 = function() {
                    return w.asm.emscripten_bind_Status_code_0.apply(null, arguments)
                },
                Et = w._emscripten_bind_Status_ok_0 = function() {
                    return w.asm.emscripten_bind_Status_ok_0.apply(null, arguments)
                },
                Ot = w._emscripten_bind_Status_error_msg_0 = function() {
                    return w.asm.emscripten_bind_Status_error_msg_0.apply(null, arguments)
                },
                Rt = w._emscripten_bind_Status___destroy___0 = function() {
                    return w.asm.emscripten_bind_Status___destroy___0.apply(null, arguments)
                },
                Pt = w._emscripten_bind_DracoUInt16Array_DracoUInt16Array_0 = function() {
                    return w.asm.emscripten_bind_DracoUInt16Array_DracoUInt16Array_0.apply(null, arguments)
                },
                gt = w._emscripten_bind_DracoUInt16Array_GetValue_1 = function() {
                    return w.asm.emscripten_bind_DracoUInt16Array_GetValue_1.apply(null, arguments)
                },
                St = w._emscripten_bind_DracoUInt16Array_size_0 = function() {
                    return w.asm.emscripten_bind_DracoUInt16Array_size_0.apply(null, arguments)
                },
                Mt = w._emscripten_bind_DracoUInt16Array___destroy___0 = function() {
                    return w.asm.emscripten_bind_DracoUInt16Array___destroy___0.apply(null, arguments)
                },
                Nt = w._emscripten_bind_PointCloud_PointCloud_0 = function() {
                    return w.asm.emscripten_bind_PointCloud_PointCloud_0.apply(null, arguments)
                },
                Ut = w._emscripten_bind_PointCloud_num_attributes_0 = function() {
                    return w.asm.emscripten_bind_PointCloud_num_attributes_0.apply(null, arguments)
                },
                Ft = w._emscripten_bind_PointCloud_num_points_0 = function() {
                    return w.asm.emscripten_bind_PointCloud_num_points_0.apply(null, arguments)
                },
                Ct = w._emscripten_bind_PointCloud___destroy___0 = function() {
                    return w.asm.emscripten_bind_PointCloud___destroy___0.apply(null, arguments)
                },
                wt = w._emscripten_bind_DracoUInt8Array_DracoUInt8Array_0 = function() {
                    return w.asm.emscripten_bind_DracoUInt8Array_DracoUInt8Array_0.apply(null, arguments)
                },
                zt = w._emscripten_bind_DracoUInt8Array_GetValue_1 = function() {
                    return w.asm.emscripten_bind_DracoUInt8Array_GetValue_1.apply(null, arguments)
                },
                Lt = w._emscripten_bind_DracoUInt8Array_size_0 = function() {
                    return w.asm.emscripten_bind_DracoUInt8Array_size_0.apply(null, arguments)
                },
                Vt = w._emscripten_bind_DracoUInt8Array___destroy___0 = function() {
                    return w.asm.emscripten_bind_DracoUInt8Array___destroy___0.apply(null, arguments)
                },
                Bt = w._emscripten_bind_DracoUInt32Array_DracoUInt32Array_0 = function() {
                    return w.asm.emscripten_bind_DracoUInt32Array_DracoUInt32Array_0.apply(null, arguments)
                },
                kt = w._emscripten_bind_DracoUInt32Array_GetValue_1 = function() {
                    return w.asm.emscripten_bind_DracoUInt32Array_GetValue_1.apply(null, arguments)
                },
                xt = w._emscripten_bind_DracoUInt32Array_size_0 = function() {
                    return w.asm.emscripten_bind_DracoUInt32Array_size_0.apply(null, arguments)
                },
                Qt = w._emscripten_bind_DracoUInt32Array___destroy___0 = function() {
                    return w.asm.emscripten_bind_DracoUInt32Array___destroy___0.apply(null, arguments)
                },
                $t = w._emscripten_bind_AttributeOctahedronTransform_AttributeOctahedronTransform_0 = function() {
                    return w.asm.emscripten_bind_AttributeOctahedronTransform_AttributeOctahedronTransform_0.apply(null, arguments)
                },
                Wt = w._emscripten_bind_AttributeOctahedronTransform_InitFromAttribute_1 = function() {
                    return w.asm.emscripten_bind_AttributeOctahedronTransform_InitFromAttribute_1.apply(null, arguments)
                },
                Ht = w._emscripten_bind_AttributeOctahedronTransform_quantization_bits_0 = function() {
                    return w.asm.emscripten_bind_AttributeOctahedronTransform_quantization_bits_0.apply(null, arguments)
                },
                qt = w._emscripten_bind_AttributeOctahedronTransform___destroy___0 = function() {
                    return w.asm.emscripten_bind_AttributeOctahedronTransform___destroy___0.apply(null, arguments)
                },
                Yt = w._emscripten_bind_PointAttribute_PointAttribute_0 = function() {
                    return w.asm.emscripten_bind_PointAttribute_PointAttribute_0.apply(null, arguments)
                },
                Kt = w._emscripten_bind_PointAttribute_size_0 = function() {
                    return w.asm.emscripten_bind_PointAttribute_size_0.apply(null, arguments)
                },
                Zt = w._emscripten_bind_PointAttribute_GetAttributeTransformData_0 = function() {
                    return w.asm.emscripten_bind_PointAttribute_GetAttributeTransformData_0.apply(null, arguments)
                },
                Xt = w._emscripten_bind_PointAttribute_attribute_type_0 = function() {
                    return w.asm.emscripten_bind_PointAttribute_attribute_type_0.apply(null, arguments)
                },
                Jt = w._emscripten_bind_PointAttribute_data_type_0 = function() {
                    return w.asm.emscripten_bind_PointAttribute_data_type_0.apply(null, arguments)
                },
                te = w._emscripten_bind_PointAttribute_num_components_0 = function() {
                    return w.asm.emscripten_bind_PointAttribute_num_components_0.apply(null, arguments)
                },
                ee = w._emscripten_bind_PointAttribute_normalized_0 = function() {
                    return w.asm.emscripten_bind_PointAttribute_normalized_0.apply(null, arguments)
                },
                re = w._emscripten_bind_PointAttribute_byte_stride_0 = function() {
                    return w.asm.emscripten_bind_PointAttribute_byte_stride_0.apply(null, arguments)
                },
                ne = w._emscripten_bind_PointAttribute_byte_offset_0 = function() {
                    return w.asm.emscripten_bind_PointAttribute_byte_offset_0.apply(null, arguments)
                },
                oe = w._emscripten_bind_PointAttribute_unique_id_0 = function() {
                    return w.asm.emscripten_bind_PointAttribute_unique_id_0.apply(null, arguments)
                },
                _e = w._emscripten_bind_PointAttribute___destroy___0 = function() {
                    return w.asm.emscripten_bind_PointAttribute___destroy___0.apply(null, arguments)
                },
                ie = w._emscripten_bind_AttributeTransformData_AttributeTransformData_0 = function() {
                    return w.asm.emscripten_bind_AttributeTransformData_AttributeTransformData_0.apply(null, arguments)
                },
                pe = w._emscripten_bind_AttributeTransformData_transform_type_0 = function() {
                    return w.asm.emscripten_bind_AttributeTransformData_transform_type_0.apply(null, arguments)
                },
                ae = w._emscripten_bind_AttributeTransformData___destroy___0 = function() {
                    return w.asm.emscripten_bind_AttributeTransformData___destroy___0.apply(null, arguments)
                },
                ue = w._emscripten_bind_AttributeQuantizationTransform_AttributeQuantizationTransform_0 = function() {
                    return w.asm.emscripten_bind_AttributeQuantizationTransform_AttributeQuantizationTransform_0.apply(null, arguments)
                },
                ce = w._emscripten_bind_AttributeQuantizationTransform_InitFromAttribute_1 = function() {
                    return w.asm.emscripten_bind_AttributeQuantizationTransform_InitFromAttribute_1.apply(null, arguments)
                },
                se = w._emscripten_bind_AttributeQuantizationTransform_quantization_bits_0 = function() {
                    return w.asm.emscripten_bind_AttributeQuantizationTransform_quantization_bits_0.apply(null, arguments)
                },
                le = w._emscripten_bind_AttributeQuantizationTransform_min_value_1 = function() {
                    return w.asm.emscripten_bind_AttributeQuantizationTransform_min_value_1.apply(null, arguments)
                },
                ye = w._emscripten_bind_AttributeQuantizationTransform_range_0 = function() {
                    return w.asm.emscripten_bind_AttributeQuantizationTransform_range_0.apply(null, arguments)
                },
                fe = w._emscripten_bind_AttributeQuantizationTransform___destroy___0 = function() {
                    return w.asm.emscripten_bind_AttributeQuantizationTransform___destroy___0.apply(null, arguments)
                },
                me = w._emscripten_bind_DracoInt8Array_DracoInt8Array_0 = function() {
                    return w.asm.emscripten_bind_DracoInt8Array_DracoInt8Array_0.apply(null, arguments)
                },
                de = w._emscripten_bind_DracoInt8Array_GetValue_1 = function() {
                    return w.asm.emscripten_bind_DracoInt8Array_GetValue_1.apply(null, arguments)
                },
                be = w._emscripten_bind_DracoInt8Array_size_0 = function() {
                    return w.asm.emscripten_bind_DracoInt8Array_size_0.apply(null, arguments)
                },
                Ae = w._emscripten_bind_DracoInt8Array___destroy___0 = function() {
                    return w.asm.emscripten_bind_DracoInt8Array___destroy___0.apply(null, arguments)
                },
                he = w._emscripten_bind_MetadataQuerier_MetadataQuerier_0 = function() {
                    return w.asm.emscripten_bind_MetadataQuerier_MetadataQuerier_0.apply(null, arguments)
                },
                Te = w._emscripten_bind_MetadataQuerier_HasEntry_2 = function() {
                    return w.asm.emscripten_bind_MetadataQuerier_HasEntry_2.apply(null, arguments)
                },
                De = w._emscripten_bind_MetadataQuerier_GetIntEntry_2 = function() {
                    return w.asm.emscripten_bind_MetadataQuerier_GetIntEntry_2.apply(null, arguments)
                },
                Ie = w._emscripten_bind_MetadataQuerier_GetIntEntryArray_3 = function() {
                    return w.asm.emscripten_bind_MetadataQuerier_GetIntEntryArray_3.apply(null, arguments)
                },
                ve = w._emscripten_bind_MetadataQuerier_GetDoubleEntry_2 = function() {
                    return w.asm.emscripten_bind_MetadataQuerier_GetDoubleEntry_2.apply(null, arguments)
                },
                Ge = w._emscripten_bind_MetadataQuerier_GetStringEntry_2 = function() {
                    return w.asm.emscripten_bind_MetadataQuerier_GetStringEntry_2.apply(null, arguments)
                },
                je = w._emscripten_bind_MetadataQuerier_NumEntries_1 = function() {
                    return w.asm.emscripten_bind_MetadataQuerier_NumEntries_1.apply(null, arguments)
                },
                Ee = w._emscripten_bind_MetadataQuerier_GetEntryName_2 = function() {
                    return w.asm.emscripten_bind_MetadataQuerier_GetEntryName_2.apply(null, arguments)
                },
                Oe = w._emscripten_bind_MetadataQuerier___destroy___0 = function() {
                    return w.asm.emscripten_bind_MetadataQuerier___destroy___0.apply(null, arguments)
                },
                Re = w._emscripten_bind_DracoInt16Array_DracoInt16Array_0 = function() {
                    return w.asm.emscripten_bind_DracoInt16Array_DracoInt16Array_0.apply(null, arguments)
                },
                Pe = w._emscripten_bind_DracoInt16Array_GetValue_1 = function() {
                    return w.asm.emscripten_bind_DracoInt16Array_GetValue_1.apply(null, arguments)
                },
                ge = w._emscripten_bind_DracoInt16Array_size_0 = function() {
                    return w.asm.emscripten_bind_DracoInt16Array_size_0.apply(null, arguments)
                },
                Se = w._emscripten_bind_DracoInt16Array___destroy___0 = function() {
                    return w.asm.emscripten_bind_DracoInt16Array___destroy___0.apply(null, arguments)
                },
                Me = w._emscripten_bind_DracoFloat32Array_DracoFloat32Array_0 = function() {
                    return w.asm.emscripten_bind_DracoFloat32Array_DracoFloat32Array_0.apply(null, arguments)
                },
                Ne = w._emscripten_bind_DracoFloat32Array_GetValue_1 = function() {
                    return w.asm.emscripten_bind_DracoFloat32Array_GetValue_1.apply(null, arguments)
                },
                Ue = w._emscripten_bind_DracoFloat32Array_size_0 = function() {
                    return w.asm.emscripten_bind_DracoFloat32Array_size_0.apply(null, arguments)
                },
                Fe = w._emscripten_bind_DracoFloat32Array___destroy___0 = function() {
                    return w.asm.emscripten_bind_DracoFloat32Array___destroy___0.apply(null, arguments)
                },
                Ce = w._emscripten_bind_GeometryAttribute_GeometryAttribute_0 = function() {
                    return w.asm.emscripten_bind_GeometryAttribute_GeometryAttribute_0.apply(null, arguments)
                },
                we = w._emscripten_bind_GeometryAttribute___destroy___0 = function() {
                    return w.asm.emscripten_bind_GeometryAttribute___destroy___0.apply(null, arguments)
                },
                ze = w._emscripten_bind_DecoderBuffer_DecoderBuffer_0 = function() {
                    return w.asm.emscripten_bind_DecoderBuffer_DecoderBuffer_0.apply(null, arguments)
                },
                Le = w._emscripten_bind_DecoderBuffer_Init_2 = function() {
                    return w.asm.emscripten_bind_DecoderBuffer_Init_2.apply(null, arguments)
                },
                Ve = w._emscripten_bind_DecoderBuffer___destroy___0 = function() {
                    return w.asm.emscripten_bind_DecoderBuffer___destroy___0.apply(null, arguments)
                },
                Be = w._emscripten_bind_Decoder_Decoder_0 = function() {
                    return w.asm.emscripten_bind_Decoder_Decoder_0.apply(null, arguments)
                },
                ke = w._emscripten_bind_Decoder_GetEncodedGeometryType_1 = function() {
                    return w.asm.emscripten_bind_Decoder_GetEncodedGeometryType_1.apply(null, arguments)
                },
                xe = w._emscripten_bind_Decoder_DecodeBufferToPointCloud_2 = function() {
                    return w.asm.emscripten_bind_Decoder_DecodeBufferToPointCloud_2.apply(null, arguments)
                },
                Qe = w._emscripten_bind_Decoder_DecodeBufferToMesh_2 = function() {
                    return w.asm.emscripten_bind_Decoder_DecodeBufferToMesh_2.apply(null, arguments)
                },
                $e = w._emscripten_bind_Decoder_GetAttributeId_2 = function() {
                    return w.asm.emscripten_bind_Decoder_GetAttributeId_2.apply(null, arguments)
                },
                We = w._emscripten_bind_Decoder_GetAttributeIdByName_2 = function() {
                    return w.asm.emscripten_bind_Decoder_GetAttributeIdByName_2.apply(null, arguments)
                },
                He = w._emscripten_bind_Decoder_GetAttributeIdByMetadataEntry_3 = function() {
                    return w.asm.emscripten_bind_Decoder_GetAttributeIdByMetadataEntry_3.apply(null, arguments)
                },
                qe = w._emscripten_bind_Decoder_GetAttribute_2 = function() {
                    return w.asm.emscripten_bind_Decoder_GetAttribute_2.apply(null, arguments)
                },
                Ye = w._emscripten_bind_Decoder_GetAttributeByUniqueId_2 = function() {
                    return w.asm.emscripten_bind_Decoder_GetAttributeByUniqueId_2.apply(null, arguments)
                },
                Ke = w._emscripten_bind_Decoder_GetMetadata_1 = function() {
                    return w.asm.emscripten_bind_Decoder_GetMetadata_1.apply(null, arguments)
                },
                Ze = w._emscripten_bind_Decoder_GetAttributeMetadata_2 = function() {
                    return w.asm.emscripten_bind_Decoder_GetAttributeMetadata_2.apply(null, arguments)
                },
                Xe = w._emscripten_bind_Decoder_GetFaceFromMesh_3 = function() {
                    return w.asm.emscripten_bind_Decoder_GetFaceFromMesh_3.apply(null, arguments)
                },
                Je = w._emscripten_bind_Decoder_GetTriangleStripsFromMesh_2 = function() {
                    return w.asm.emscripten_bind_Decoder_GetTriangleStripsFromMesh_2.apply(null, arguments)
                },
                tr = w._emscripten_bind_Decoder_GetTrianglesUInt16Array_3 = function() {
                    return w.asm.emscripten_bind_Decoder_GetTrianglesUInt16Array_3.apply(null, arguments)
                },
                er = w._emscripten_bind_Decoder_GetTrianglesUInt32Array_3 = function() {
                    return w.asm.emscripten_bind_Decoder_GetTrianglesUInt32Array_3.apply(null, arguments)
                },
                rr = w._emscripten_bind_Decoder_GetAttributeFloat_3 = function() {
                    return w.asm.emscripten_bind_Decoder_GetAttributeFloat_3.apply(null, arguments)
                },
                nr = w._emscripten_bind_Decoder_GetAttributeFloatForAllPoints_3 = function() {
                    return w.asm.emscripten_bind_Decoder_GetAttributeFloatForAllPoints_3.apply(null, arguments)
                },
                or = w._emscripten_bind_Decoder_GetAttributeIntForAllPoints_3 = function() {
                    return w.asm.emscripten_bind_Decoder_GetAttributeIntForAllPoints_3.apply(null, arguments)
                },
                _r = w._emscripten_bind_Decoder_GetAttributeInt8ForAllPoints_3 = function() {
                    return w.asm.emscripten_bind_Decoder_GetAttributeInt8ForAllPoints_3.apply(null, arguments)
                },
                ir = w._emscripten_bind_Decoder_GetAttributeUInt8ForAllPoints_3 = function() {
                    return w.asm.emscripten_bind_Decoder_GetAttributeUInt8ForAllPoints_3.apply(null, arguments)
                },
                pr = w._emscripten_bind_Decoder_GetAttributeInt16ForAllPoints_3 = function() {
                    return w.asm.emscripten_bind_Decoder_GetAttributeInt16ForAllPoints_3.apply(null, arguments)
                },
                ar = w._emscripten_bind_Decoder_GetAttributeUInt16ForAllPoints_3 = function() {
                    return w.asm.emscripten_bind_Decoder_GetAttributeUInt16ForAllPoints_3.apply(null, arguments)
                },
                ur = w._emscripten_bind_Decoder_GetAttributeInt32ForAllPoints_3 = function() {
                    return w.asm.emscripten_bind_Decoder_GetAttributeInt32ForAllPoints_3.apply(null, arguments)
                },
                cr = w._emscripten_bind_Decoder_GetAttributeUInt32ForAllPoints_3 = function() {
                    return w.asm.emscripten_bind_Decoder_GetAttributeUInt32ForAllPoints_3.apply(null, arguments)
                },
                sr = w._emscripten_bind_Decoder_GetAttributeDataArrayForAllPoints_5 = function() {
                    return w.asm.emscripten_bind_Decoder_GetAttributeDataArrayForAllPoints_5.apply(null, arguments)
                },
                lr = w._emscripten_bind_Decoder_SkipAttributeTransform_1 = function() {
                    return w.asm.emscripten_bind_Decoder_SkipAttributeTransform_1.apply(null, arguments)
                },
                yr = w._emscripten_bind_Decoder___destroy___0 = function() {
                    return w.asm.emscripten_bind_Decoder___destroy___0.apply(null, arguments)
                },
                fr = w._emscripten_bind_Mesh_Mesh_0 = function() {
                    return w.asm.emscripten_bind_Mesh_Mesh_0.apply(null, arguments)
                },
                mr = w._emscripten_bind_Mesh_num_faces_0 = function() {
                    return w.asm.emscripten_bind_Mesh_num_faces_0.apply(null, arguments)
                },
                dr = w._emscripten_bind_Mesh_num_attributes_0 = function() {
                    return w.asm.emscripten_bind_Mesh_num_attributes_0.apply(null, arguments)
                },
                br = w._emscripten_bind_Mesh_num_points_0 = function() {
                    return w.asm.emscripten_bind_Mesh_num_points_0.apply(null, arguments)
                },
                Ar = w._emscripten_bind_Mesh___destroy___0 = function() {
                    return w.asm.emscripten_bind_Mesh___destroy___0.apply(null, arguments)
                },
                hr = w._emscripten_bind_VoidPtr___destroy___0 = function() {
                    return w.asm.emscripten_bind_VoidPtr___destroy___0.apply(null, arguments)
                },
                Tr = w._emscripten_bind_DracoInt32Array_DracoInt32Array_0 = function() {
                    return w.asm.emscripten_bind_DracoInt32Array_DracoInt32Array_0.apply(null, arguments)
                },
                Dr = w._emscripten_bind_DracoInt32Array_GetValue_1 = function() {
                    return w.asm.emscripten_bind_DracoInt32Array_GetValue_1.apply(null, arguments)
                },
                Ir = w._emscripten_bind_DracoInt32Array_size_0 = function() {
                    return w.asm.emscripten_bind_DracoInt32Array_size_0.apply(null, arguments)
                },
                vr = w._emscripten_bind_DracoInt32Array___destroy___0 = function() {
                    return w.asm.emscripten_bind_DracoInt32Array___destroy___0.apply(null, arguments)
                },
                Gr = w._emscripten_bind_Metadata_Metadata_0 = function() {
                    return w.asm.emscripten_bind_Metadata_Metadata_0.apply(null, arguments)
                },
                jr = w._emscripten_bind_Metadata___destroy___0 = function() {
                    return w.asm.emscripten_bind_Metadata___destroy___0.apply(null, arguments)
                },
                Er = w._emscripten_enum_draco_StatusCode_OK = function() {
                    return w.asm.emscripten_enum_draco_StatusCode_OK.apply(null, arguments)
                },
                Or = w._emscripten_enum_draco_StatusCode_DRACO_ERROR = function() {
                    return w.asm.emscripten_enum_draco_StatusCode_DRACO_ERROR.apply(null, arguments)
                },
                Rr = w._emscripten_enum_draco_StatusCode_IO_ERROR = function() {
                    return w.asm.emscripten_enum_draco_StatusCode_IO_ERROR.apply(null, arguments)
                },
                Pr = w._emscripten_enum_draco_StatusCode_INVALID_PARAMETER = function() {
                    return w.asm.emscripten_enum_draco_StatusCode_INVALID_PARAMETER.apply(null, arguments)
                },
                gr = w._emscripten_enum_draco_StatusCode_UNSUPPORTED_VERSION = function() {
                    return w.asm.emscripten_enum_draco_StatusCode_UNSUPPORTED_VERSION.apply(null, arguments)
                },
                Sr = w._emscripten_enum_draco_StatusCode_UNKNOWN_VERSION = function() {
                    return w.asm.emscripten_enum_draco_StatusCode_UNKNOWN_VERSION.apply(null, arguments)
                },
                Mr = w._emscripten_enum_draco_DataType_DT_INVALID = function() {
                    return w.asm.emscripten_enum_draco_DataType_DT_INVALID.apply(null, arguments)
                },
                Nr = w._emscripten_enum_draco_DataType_DT_INT8 = function() {
                    return w.asm.emscripten_enum_draco_DataType_DT_INT8.apply(null, arguments)
                },
                Ur = w._emscripten_enum_draco_DataType_DT_UINT8 = function() {
                    return w.asm.emscripten_enum_draco_DataType_DT_UINT8.apply(null, arguments)
                },
                Fr = w._emscripten_enum_draco_DataType_DT_INT16 = function() {
                    return w.asm.emscripten_enum_draco_DataType_DT_INT16.apply(null, arguments)
                },
                Cr = w._emscripten_enum_draco_DataType_DT_UINT16 = function() {
                    return w.asm.emscripten_enum_draco_DataType_DT_UINT16.apply(null, arguments)
                },
                wr = w._emscripten_enum_draco_DataType_DT_INT32 = function() {
                    return w.asm.emscripten_enum_draco_DataType_DT_INT32.apply(null, arguments)
                },
                zr = w._emscripten_enum_draco_DataType_DT_UINT32 = function() {
                    return w.asm.emscripten_enum_draco_DataType_DT_UINT32.apply(null, arguments)
                },
                Lr = w._emscripten_enum_draco_DataType_DT_INT64 = function() {
                    return w.asm.emscripten_enum_draco_DataType_DT_INT64.apply(null, arguments)
                },
                Vr = w._emscripten_enum_draco_DataType_DT_UINT64 = function() {
                    return w.asm.emscripten_enum_draco_DataType_DT_UINT64.apply(null, arguments)
                },
                Br = w._emscripten_enum_draco_DataType_DT_FLOAT32 = function() {
                    return w.asm.emscripten_enum_draco_DataType_DT_FLOAT32.apply(null, arguments)
                },
                kr = w._emscripten_enum_draco_DataType_DT_FLOAT64 = function() {
                    return w.asm.emscripten_enum_draco_DataType_DT_FLOAT64.apply(null, arguments)
                },
                xr = w._emscripten_enum_draco_DataType_DT_BOOL = function() {
                    return w.asm.emscripten_enum_draco_DataType_DT_BOOL.apply(null, arguments)
                },
                Qr = w._emscripten_enum_draco_DataType_DT_TYPES_COUNT = function() {
                    return w.asm.emscripten_enum_draco_DataType_DT_TYPES_COUNT.apply(null, arguments)
                },
                $r = w._emscripten_enum_draco_EncodedGeometryType_INVALID_GEOMETRY_TYPE = function() {
                    return w.asm.emscripten_enum_draco_EncodedGeometryType_INVALID_GEOMETRY_TYPE.apply(null, arguments)
                },
                Wr = w._emscripten_enum_draco_EncodedGeometryType_POINT_CLOUD = function() {
                    return w.asm.emscripten_enum_draco_EncodedGeometryType_POINT_CLOUD.apply(null, arguments)
                },
                Hr = w._emscripten_enum_draco_EncodedGeometryType_TRIANGULAR_MESH = function() {
                    return w.asm.emscripten_enum_draco_EncodedGeometryType_TRIANGULAR_MESH.apply(null, arguments)
                },
                qr = w._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_INVALID_TRANSFORM = function() {
                    return w.asm.emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_INVALID_TRANSFORM.apply(null, arguments)
                },
                Yr = w._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_NO_TRANSFORM = function() {
                    return w.asm.emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_NO_TRANSFORM.apply(null, arguments)
                },
                Kr = w._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_QUANTIZATION_TRANSFORM = function() {
                    return w.asm.emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_QUANTIZATION_TRANSFORM.apply(null, arguments)
                },
                Zr = w._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_OCTAHEDRON_TRANSFORM = function() {
                    return w.asm.emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_OCTAHEDRON_TRANSFORM.apply(null, arguments)
                },
                Xr = w._emscripten_enum_draco_GeometryAttribute_Type_INVALID = function() {
                    return w.asm.emscripten_enum_draco_GeometryAttribute_Type_INVALID.apply(null, arguments)
                },
                Jr = w._emscripten_enum_draco_GeometryAttribute_Type_POSITION = function() {
                    return w.asm.emscripten_enum_draco_GeometryAttribute_Type_POSITION.apply(null, arguments)
                },
                tn = w._emscripten_enum_draco_GeometryAttribute_Type_NORMAL = function() {
                    return w.asm.emscripten_enum_draco_GeometryAttribute_Type_NORMAL.apply(null, arguments)
                },
                en = w._emscripten_enum_draco_GeometryAttribute_Type_COLOR = function() {
                    return w.asm.emscripten_enum_draco_GeometryAttribute_Type_COLOR.apply(null, arguments)
                },
                rn = w._emscripten_enum_draco_GeometryAttribute_Type_TEX_COORD = function() {
                    return w.asm.emscripten_enum_draco_GeometryAttribute_Type_TEX_COORD.apply(null, arguments)
                },
                nn = w._emscripten_enum_draco_GeometryAttribute_Type_GENERIC = function() {
                    return w.asm.emscripten_enum_draco_GeometryAttribute_Type_GENERIC.apply(null, arguments)
                };
            w._setThrew = function() {
                return w.asm.setThrew.apply(null, arguments)
            };
            var on = w.__ZSt18uncaught_exceptionv = function() {
                return w.asm._ZSt18uncaught_exceptionv.apply(null, arguments)
            };
            w._free = function() {
                return w.asm.free.apply(null, arguments)
            };
            var _n, pn = w._malloc = function() {
                return w.asm.malloc.apply(null, arguments)
            };
            if (w.stackSave = function() {
                    return w.asm.stackSave.apply(null, arguments)
                }, w.stackAlloc = function() {
                    return w.asm.stackAlloc.apply(null, arguments)
                }, w.stackRestore = function() {
                    return w.asm.stackRestore.apply(null, arguments)
                }, w.__growWasmMemory = function() {
                    return w.asm.__growWasmMemory.apply(null, arguments)
                }, w.dynCall_ii = function() {
                    return w.asm.dynCall_ii.apply(null, arguments)
                }, w.dynCall_vi = function() {
                    return w.asm.dynCall_vi.apply(null, arguments)
                }, w.dynCall_iii = function() {
                    return w.asm.dynCall_iii.apply(null, arguments)
                }, w.dynCall_vii = function() {
                    return w.asm.dynCall_vii.apply(null, arguments)
                }, w.dynCall_iiii = function() {
                    return w.asm.dynCall_iiii.apply(null, arguments)
                }, w.dynCall_v = function() {
                    return w.asm.dynCall_v.apply(null, arguments)
                }, w.dynCall_viii = function() {
                    return w.asm.dynCall_viii.apply(null, arguments)
                }, w.dynCall_viiii = function() {
                    return w.asm.dynCall_viiii.apply(null, arguments)
                }, w.dynCall_iiiiiii = function() {
                    return w.asm.dynCall_iiiiiii.apply(null, arguments)
                }, w.dynCall_iidiiii = function() {
                    return w.asm.dynCall_iidiiii.apply(null, arguments)
                }, w.dynCall_jiji = function() {
                    return w.asm.dynCall_jiji.apply(null, arguments)
                }, w.dynCall_viiiiii = function() {
                    return w.asm.dynCall_viiiiii.apply(null, arguments)
                }, w.dynCall_viiiii = function() {
                    return w.asm.dynCall_viiiii.apply(null, arguments)
                }, w.asm = vt, w.then = function(t) {
                    if (_n) t(w);
                    else {
                        var e = w.onRuntimeInitialized;
                        w.onRuntimeInitialized = function() {
                            e && e(), t(w)
                        }
                    }
                    return w
                }, bt = function t() {
                    _n || l(), _n || (bt = t)
                }, w.run = l, w.preInit)
                for ("function" == typeof w.preInit && (w.preInit = [w.preInit]); 0 < w.preInit.length;) w.preInit.pop()();
            l(), y.prototype = Object.create(y.prototype), y.prototype.constructor = y, y.prototype.__class__ = y, y.__cache__ = {}, w.WrapperObject = y, w.getCache = f, w.wrapPointer = m, w.castObject = function(t, e) {
                return m(t.ptr, e)
            }, w.NULL = m(0), w.destroy = function(t) {
                if (!t.__destroy__) throw "Error: Cannot destroy object. (Did you create it yourself?)";
                t.__destroy__(), delete f(t.__class__)[t.ptr]
            }, w.compare = function(t, e) {
                return t.ptr === e.ptr
            }, w.getPointer = function(t) {
                return t.ptr
            }, w.getClass = function(t) {
                return t.__class__
            };
            var an = {
                buffer: 0,
                size: 0,
                pos: 0,
                temps: [],
                needed: 0,
                prepare: function() {
                    if (an.needed) {
                        for (var t = 0; t < an.temps.length; t++) w._free(an.temps[t]);
                        an.temps.length = 0, w._free(an.buffer), an.buffer = 0, an.size += an.needed, an.needed = 0
                    }
                    an.buffer || (an.size += 128, an.buffer = w._malloc(an.size), r(an.buffer)), an.pos = 0
                },
                alloc: function(t, e) {
                    return r(an.buffer), t = 7 + (t = t.length * e.BYTES_PER_ELEMENT) & -8, an.pos + t >= an.size ? (r(0 < t), an.needed += t, e = w._malloc(t), an.temps.push(e)) : (e = an.buffer + an.pos, an.pos += t), e
                },
                copy: function(t, e, r) {
                    switch (e.BYTES_PER_ELEMENT) {
                        case 2:
                            r >>= 1;
                            break;
                        case 4:
                            r >>= 2;
                            break;
                        case 8:
                            r >>= 3
                    }
                    for (var n = 0; n < t.length; n++) e[r + n] = t[n]
                }
            };
            return b.prototype = Object.create(y.prototype), b.prototype.constructor = b, b.prototype.__class__ = b, b.__cache__ = {}, w.Status = b, b.prototype.code = b.prototype.code = function() {
                    return jt(this.ptr)
                }, b.prototype.ok = b.prototype.ok = function() {
                    return !!Et(this.ptr)
                }, b.prototype.error_msg = b.prototype.error_msg = function() {
                    return o(Ot(this.ptr))
                }, b.prototype.__destroy__ = b.prototype.__destroy__ = function() {
                    Rt(this.ptr)
                }, A.prototype = Object.create(y.prototype), A.prototype.constructor = A, A.prototype.__class__ = A, A.__cache__ = {}, w.DracoUInt16Array = A, A.prototype.GetValue = A.prototype.GetValue = function(t) {
                    var e = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), gt(e, t)
                }, A.prototype.size = A.prototype.size = function() {
                    return St(this.ptr)
                }, A.prototype.__destroy__ = A.prototype.__destroy__ = function() {
                    Mt(this.ptr)
                }, h.prototype = Object.create(y.prototype), h.prototype.constructor = h, h.prototype.__class__ = h, h.__cache__ = {}, w.PointCloud = h, h.prototype.num_attributes = h.prototype.num_attributes = function() {
                    return Ut(this.ptr)
                }, h.prototype.num_points = h.prototype.num_points = function() {
                    return Ft(this.ptr)
                }, h.prototype.__destroy__ = h.prototype.__destroy__ = function() {
                    Ct(this.ptr)
                }, T.prototype = Object.create(y.prototype), T.prototype.constructor = T, T.prototype.__class__ = T, T.__cache__ = {}, w.DracoUInt8Array = T, T.prototype.GetValue = T.prototype.GetValue = function(t) {
                    var e = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), zt(e, t)
                }, T.prototype.size = T.prototype.size = function() {
                    return Lt(this.ptr)
                }, T.prototype.__destroy__ = T.prototype.__destroy__ = function() {
                    Vt(this.ptr)
                }, D.prototype = Object.create(y.prototype), D.prototype.constructor = D, D.prototype.__class__ = D, D.__cache__ = {}, w.DracoUInt32Array = D, D.prototype.GetValue = D.prototype.GetValue = function(t) {
                    var e = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), kt(e, t)
                }, D.prototype.size = D.prototype.size = function() {
                    return xt(this.ptr)
                }, D.prototype.__destroy__ = D.prototype.__destroy__ = function() {
                    Qt(this.ptr)
                }, I.prototype = Object.create(y.prototype), I.prototype.constructor = I, I.prototype.__class__ = I, I.__cache__ = {}, w.AttributeOctahedronTransform = I, I.prototype.InitFromAttribute = I.prototype.InitFromAttribute = function(t) {
                    var e = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), !!Wt(e, t)
                }, I.prototype.quantization_bits = I.prototype.quantization_bits = function() {
                    return Ht(this.ptr)
                }, I.prototype.__destroy__ = I.prototype.__destroy__ = function() {
                    qt(this.ptr)
                }, v.prototype = Object.create(y.prototype), v.prototype.constructor = v, v.prototype.__class__ = v, v.__cache__ = {}, w.PointAttribute = v, v.prototype.size = v.prototype.size = function() {
                    return Kt(this.ptr)
                }, v.prototype.GetAttributeTransformData = v.prototype.GetAttributeTransformData = function() {
                    return m(Zt(this.ptr), G)
                }, v.prototype.attribute_type = v.prototype.attribute_type = function() {
                    return Xt(this.ptr)
                }, v.prototype.data_type = v.prototype.data_type = function() {
                    return Jt(this.ptr)
                }, v.prototype.num_components = v.prototype.num_components = function() {
                    return te(this.ptr)
                }, v.prototype.normalized = v.prototype.normalized = function() {
                    return !!ee(this.ptr)
                }, v.prototype.byte_stride = v.prototype.byte_stride = function() {
                    return re(this.ptr)
                }, v.prototype.byte_offset = v.prototype.byte_offset = function() {
                    return ne(this.ptr)
                }, v.prototype.unique_id = v.prototype.unique_id = function() {
                    return oe(this.ptr)
                }, v.prototype.__destroy__ = v.prototype.__destroy__ = function() {
                    _e(this.ptr)
                }, G.prototype = Object.create(y.prototype), G.prototype.constructor = G, G.prototype.__class__ = G, G.__cache__ = {}, w.AttributeTransformData = G, G.prototype.transform_type = G.prototype.transform_type = function() {
                    return pe(this.ptr)
                }, G.prototype.__destroy__ = G.prototype.__destroy__ = function() {
                    ae(this.ptr)
                }, j.prototype = Object.create(y.prototype), j.prototype.constructor = j, j.prototype.__class__ = j, j.__cache__ = {}, w.AttributeQuantizationTransform = j, j.prototype.InitFromAttribute = j.prototype.InitFromAttribute = function(t) {
                    var e = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), !!ce(e, t)
                }, j.prototype.quantization_bits = j.prototype.quantization_bits = function() {
                    return se(this.ptr)
                }, j.prototype.min_value = j.prototype.min_value = function(t) {
                    var e = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), le(e, t)
                }, j.prototype.range = j.prototype.range = function() {
                    return ye(this.ptr)
                }, j.prototype.__destroy__ = j.prototype.__destroy__ = function() {
                    fe(this.ptr)
                }, E.prototype = Object.create(y.prototype), E.prototype.constructor = E, E.prototype.__class__ = E, E.__cache__ = {}, w.DracoInt8Array = E, E.prototype.GetValue = E.prototype.GetValue = function(t) {
                    var e = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), de(e, t)
                }, E.prototype.size = E.prototype.size = function() {
                    return be(this.ptr)
                }, E.prototype.__destroy__ = E.prototype.__destroy__ = function() {
                    Ae(this.ptr)
                }, O.prototype = Object.create(y.prototype), O.prototype.constructor = O, O.prototype.__class__ = O, O.__cache__ = {}, w.MetadataQuerier = O, O.prototype.HasEntry = O.prototype.HasEntry = function(t, e) {
                    var r = this.ptr;
                    return an.prepare(), t && "object" == typeof t && (t = t.ptr), e = e && "object" == typeof e ? e.ptr : d(e), !!Te(r, t, e)
                }, O.prototype.GetIntEntry = O.prototype.GetIntEntry = function(t, e) {
                    var r = this.ptr;
                    return an.prepare(), t && "object" == typeof t && (t = t.ptr), e = e && "object" == typeof e ? e.ptr : d(e), De(r, t, e)
                }, O.prototype.GetIntEntryArray = O.prototype.GetIntEntryArray = function(t, e, r) {
                    var n = this.ptr;
                    an.prepare(), t && "object" == typeof t && (t = t.ptr), e = e && "object" == typeof e ? e.ptr : d(e), r && "object" == typeof r && (r = r.ptr), Ie(n, t, e, r)
                }, O.prototype.GetDoubleEntry = O.prototype.GetDoubleEntry = function(t, e) {
                    var r = this.ptr;
                    return an.prepare(), t && "object" == typeof t && (t = t.ptr), e = e && "object" == typeof e ? e.ptr : d(e), ve(r, t, e)
                }, O.prototype.GetStringEntry = O.prototype.GetStringEntry = function(t, e) {
                    var r = this.ptr;
                    return an.prepare(), t && "object" == typeof t && (t = t.ptr), e = e && "object" == typeof e ? e.ptr : d(e), o(Ge(r, t, e))
                }, O.prototype.NumEntries = O.prototype.NumEntries = function(t) {
                    var e = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), je(e, t)
                }, O.prototype.GetEntryName = O.prototype.GetEntryName = function(t, e) {
                    var r = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), o(Ee(r, t, e))
                }, O.prototype.__destroy__ = O.prototype.__destroy__ = function() {
                    Oe(this.ptr)
                }, R.prototype = Object.create(y.prototype), R.prototype.constructor = R, R.prototype.__class__ = R, R.__cache__ = {}, w.DracoInt16Array = R, R.prototype.GetValue = R.prototype.GetValue = function(t) {
                    var e = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), Pe(e, t)
                }, R.prototype.size = R.prototype.size = function() {
                    return ge(this.ptr)
                }, R.prototype.__destroy__ = R.prototype.__destroy__ = function() {
                    Se(this.ptr)
                }, P.prototype = Object.create(y.prototype), P.prototype.constructor = P, P.prototype.__class__ = P, P.__cache__ = {}, w.DracoFloat32Array = P, P.prototype.GetValue = P.prototype.GetValue = function(t) {
                    var e = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), Ne(e, t)
                }, P.prototype.size = P.prototype.size = function() {
                    return Ue(this.ptr)
                }, P.prototype.__destroy__ = P.prototype.__destroy__ = function() {
                    Fe(this.ptr)
                }, g.prototype = Object.create(y.prototype), g.prototype.constructor = g, g.prototype.__class__ = g, g.__cache__ = {}, w.GeometryAttribute = g, g.prototype.__destroy__ = g.prototype.__destroy__ = function() {
                    we(this.ptr)
                }, S.prototype = Object.create(y.prototype), S.prototype.constructor = S, S.prototype.__class__ = S, S.__cache__ = {}, w.DecoderBuffer = S, S.prototype.Init = S.prototype.Init = function(t, e) {
                    var r = this.ptr;
                    if (an.prepare(), "object" == typeof t && "object" == typeof t) {
                        var n = an.alloc(t, _t);
                        an.copy(t, _t, n), t = n
                    }
                    e && "object" == typeof e && (e = e.ptr), Le(r, t, e)
                }, S.prototype.__destroy__ = S.prototype.__destroy__ = function() {
                    Ve(this.ptr)
                }, M.prototype = Object.create(y.prototype), M.prototype.constructor = M, M.prototype.__class__ = M, M.__cache__ = {}, w.Decoder = M, M.prototype.GetEncodedGeometryType = M.prototype.GetEncodedGeometryType = function(t) {
                    var e = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), ke(e, t)
                }, M.prototype.DecodeBufferToPointCloud = M.prototype.DecodeBufferToPointCloud = function(t, e) {
                    var r = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), m(xe(r, t, e), b)
                }, M.prototype.DecodeBufferToMesh = M.prototype.DecodeBufferToMesh = function(t, e) {
                    var r = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), m(Qe(r, t, e), b)
                }, M.prototype.GetAttributeId = M.prototype.GetAttributeId = function(t, e) {
                    var r = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), $e(r, t, e)
                }, M.prototype.GetAttributeIdByName = M.prototype.GetAttributeIdByName = function(t, e) {
                    var r = this.ptr;
                    return an.prepare(), t && "object" == typeof t && (t = t.ptr), e = e && "object" == typeof e ? e.ptr : d(e), We(r, t, e)
                }, M.prototype.GetAttributeIdByMetadataEntry = M.prototype.GetAttributeIdByMetadataEntry = function(t, e, r) {
                    var n = this.ptr;
                    return an.prepare(), t && "object" == typeof t && (t = t.ptr), e = e && "object" == typeof e ? e.ptr : d(e), r = r && "object" == typeof r ? r.ptr : d(r), He(n, t, e, r)
                }, M.prototype.GetAttribute = M.prototype.GetAttribute = function(t, e) {
                    var r = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), m(qe(r, t, e), v)
                }, M.prototype.GetAttributeByUniqueId = M.prototype.GetAttributeByUniqueId = function(t, e) {
                    var r = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), m(Ye(r, t, e), v)
                }, M.prototype.GetMetadata = M.prototype.GetMetadata = function(t) {
                    var e = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), m(Ke(e, t), C)
                }, M.prototype.GetAttributeMetadata = M.prototype.GetAttributeMetadata = function(t, e) {
                    var r = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), m(Ze(r, t, e), C)
                }, M.prototype.GetFaceFromMesh = M.prototype.GetFaceFromMesh = function(t, e, r) {
                    var n = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), r && "object" == typeof r && (r = r.ptr), !!Xe(n, t, e, r)
                }, M.prototype.GetTriangleStripsFromMesh = M.prototype.GetTriangleStripsFromMesh = function(t, e) {
                    var r = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), Je(r, t, e)
                }, M.prototype.GetTrianglesUInt16Array = M.prototype.GetTrianglesUInt16Array = function(t, e, r) {
                    var n = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), r && "object" == typeof r && (r = r.ptr), !!tr(n, t, e, r)
                }, M.prototype.GetTrianglesUInt32Array = M.prototype.GetTrianglesUInt32Array = function(t, e, r) {
                    var n = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), r && "object" == typeof r && (r = r.ptr), !!er(n, t, e, r)
                }, M.prototype.GetAttributeFloat = M.prototype.GetAttributeFloat = function(t, e, r) {
                    var n = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), r && "object" == typeof r && (r = r.ptr), !!rr(n, t, e, r)
                }, M.prototype.GetAttributeFloatForAllPoints = M.prototype.GetAttributeFloatForAllPoints = function(t, e, r) {
                    var n = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), r && "object" == typeof r && (r = r.ptr), !!nr(n, t, e, r)
                }, M.prototype.GetAttributeIntForAllPoints = M.prototype.GetAttributeIntForAllPoints = function(t, e, r) {
                    var n = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), r && "object" == typeof r && (r = r.ptr), !!or(n, t, e, r)
                }, M.prototype.GetAttributeInt8ForAllPoints = M.prototype.GetAttributeInt8ForAllPoints = function(t, e, r) {
                    var n = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), r && "object" == typeof r && (r = r.ptr), !!_r(n, t, e, r)
                }, M.prototype.GetAttributeUInt8ForAllPoints = M.prototype.GetAttributeUInt8ForAllPoints = function(t, e, r) {
                    var n = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), r && "object" == typeof r && (r = r.ptr), !!ir(n, t, e, r)
                }, M.prototype.GetAttributeInt16ForAllPoints = M.prototype.GetAttributeInt16ForAllPoints = function(t, e, r) {
                    var n = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), r && "object" == typeof r && (r = r.ptr), !!pr(n, t, e, r)
                }, M.prototype.GetAttributeUInt16ForAllPoints = M.prototype.GetAttributeUInt16ForAllPoints = function(t, e, r) {
                    var n = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), r && "object" == typeof r && (r = r.ptr), !!ar(n, t, e, r)
                }, M.prototype.GetAttributeInt32ForAllPoints = M.prototype.GetAttributeInt32ForAllPoints = function(t, e, r) {
                    var n = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), r && "object" == typeof r && (r = r.ptr), !!ur(n, t, e, r)
                }, M.prototype.GetAttributeUInt32ForAllPoints = M.prototype.GetAttributeUInt32ForAllPoints = function(t, e, r) {
                    var n = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), r && "object" == typeof r && (r = r.ptr), !!cr(n, t, e, r)
                }, M.prototype.GetAttributeDataArrayForAllPoints = M.prototype.GetAttributeDataArrayForAllPoints = function(t, e, r, n, o) {
                    var _ = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), r && "object" == typeof r && (r = r.ptr), n && "object" == typeof n && (n = n.ptr), o && "object" == typeof o && (o = o.ptr), !!sr(_, t, e, r, n, o)
                }, M.prototype.SkipAttributeTransform = M.prototype.SkipAttributeTransform = function(t) {
                    var e = this.ptr;
                    t && "object" == typeof t && (t = t.ptr), lr(e, t)
                }, M.prototype.__destroy__ = M.prototype.__destroy__ = function() {
                    yr(this.ptr)
                }, N.prototype = Object.create(y.prototype), N.prototype.constructor = N, N.prototype.__class__ = N, N.__cache__ = {}, w.Mesh = N, N.prototype.num_faces = N.prototype.num_faces = function() {
                    return mr(this.ptr)
                }, N.prototype.num_attributes = N.prototype.num_attributes = function() {
                    return dr(this.ptr)
                }, N.prototype.num_points = N.prototype.num_points = function() {
                    return br(this.ptr)
                }, N.prototype.__destroy__ = N.prototype.__destroy__ = function() {
                    Ar(this.ptr)
                }, U.prototype = Object.create(y.prototype), U.prototype.constructor = U, U.prototype.__class__ = U, U.__cache__ = {}, w.VoidPtr = U, U.prototype.__destroy__ = U.prototype.__destroy__ = function() {
                    hr(this.ptr)
                }, F.prototype = Object.create(y.prototype), F.prototype.constructor = F, F.prototype.__class__ = F, F.__cache__ = {}, w.DracoInt32Array = F, F.prototype.GetValue = F.prototype.GetValue = function(t) {
                    var e = this.ptr;
                    return t && "object" == typeof t && (t = t.ptr), Dr(e, t)
                }, F.prototype.size = F.prototype.size = function() {
                    return Ir(this.ptr)
                }, F.prototype.__destroy__ = F.prototype.__destroy__ = function() {
                    vr(this.ptr)
                }, C.prototype = Object.create(y.prototype), C.prototype.constructor = C, C.prototype.__class__ = C, C.__cache__ = {}, w.Metadata = C, C.prototype.__destroy__ = C.prototype.__destroy__ = function() {
                    jr(this.ptr)
                },
                function() {
                    function t() {
                        w.OK = Er(), w.DRACO_ERROR = Or(), w.IO_ERROR = Rr(), w.INVALID_PARAMETER = Pr(), w.UNSUPPORTED_VERSION = gr(), w.UNKNOWN_VERSION = Sr(), w.DT_INVALID = Mr(), w.DT_INT8 = Nr(), w.DT_UINT8 = Ur(), w.DT_INT16 = Fr(), w.DT_UINT16 = Cr(), w.DT_INT32 = wr(), w.DT_UINT32 = zr(), w.DT_INT64 = Lr(), w.DT_UINT64 = Vr(), w.DT_FLOAT32 = Br(), w.DT_FLOAT64 = kr(), w.DT_BOOL = xr(), w.DT_TYPES_COUNT = Qr(), w.INVALID_GEOMETRY_TYPE = $r(), w.POINT_CLOUD = Wr(), w.TRIANGULAR_MESH = Hr(), w.ATTRIBUTE_INVALID_TRANSFORM = qr(), w.ATTRIBUTE_NO_TRANSFORM = Yr(), w.ATTRIBUTE_QUANTIZATION_TRANSFORM = Kr(), w.ATTRIBUTE_OCTAHEDRON_TRANSFORM = Zr(), w.INVALID = Xr(), w.POSITION = Jr(), w.NORMAL = tn(), w.COLOR = en(), w.TEX_COORD = rn(), w.GENERIC = nn()
                    }
                    ft ? t() : lt.unshift(t)
                }(), "function" == typeof w.onModuleParsed && w.onModuleParsed(), e
        }
}();
"object" == typeof exports && "object" == typeof module ? module.exports = DracoDecoderModule : "function" == typeof define && define.amd ? define([], (function() {
    return DracoDecoderModule
})) : "object" == typeof exports && (exports.DracoDecoderModule = DracoDecoderModule);