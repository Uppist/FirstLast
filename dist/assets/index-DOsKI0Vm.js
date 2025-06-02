/** @format */

(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) g(d);
  new MutationObserver((d) => {
    for (const m of d)
      if (m.type === "childList")
        for (const S of m.addedNodes)
          S.tagName === "LINK" && S.rel === "modulepreload" && g(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(d) {
    const m = {};
    return (
      d.integrity && (m.integrity = d.integrity),
      d.referrerPolicy && (m.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : d.crossOrigin === "anonymous"
        ? (m.credentials = "omit")
        : (m.credentials = "same-origin"),
      m
    );
  }
  function g(d) {
    if (d.ep) return;
    d.ep = !0;
    const m = s(d);
    fetch(d.href, m);
  }
})();
var eu = { exports: {} },
  Pr = {},
  tu = { exports: {} },
  b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var c1;
function V2() {
  if (c1) return b;
  c1 = 1;
  var o = Symbol.for("react.element"),
    c = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    g = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    m = Symbol.for("react.provider"),
    S = Symbol.for("react.context"),
    _ = Symbol.for("react.forward_ref"),
    w = Symbol.for("react.suspense"),
    k = Symbol.for("react.memo"),
    z = Symbol.for("react.lazy"),
    B = Symbol.iterator;
  function L(v) {
    return v === null || typeof v != "object"
      ? null
      : ((v = (B && v[B]) || v["@@iterator"]),
        typeof v == "function" ? v : null);
  }
  var W = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    M = Object.assign,
    F = {};
  function D(v, N, q) {
    (this.props = v),
      (this.context = N),
      (this.refs = F),
      (this.updater = q || W);
  }
  (D.prototype.isReactComponent = {}),
    (D.prototype.setState = function (v, N) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, v, N, "setState");
    }),
    (D.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    });
  function H() {}
  H.prototype = D.prototype;
  function G(v, N, q) {
    (this.props = v),
      (this.context = N),
      (this.refs = F),
      (this.updater = q || W);
  }
  var J = (G.prototype = new H());
  (J.constructor = G), M(J, D.prototype), (J.isPureReactComponent = !0);
  var ee = Array.isArray,
    se = Object.prototype.hasOwnProperty,
    ye = { current: null },
    me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _e(v, N, q) {
    var te,
      re = {},
      le = null,
      ae = null;
    if (N != null)
      for (te in (N.ref !== void 0 && (ae = N.ref),
      N.key !== void 0 && (le = "" + N.key),
      N))
        se.call(N, te) && !me.hasOwnProperty(te) && (re[te] = N[te]);
    var oe = arguments.length - 2;
    if (oe === 1) re.children = q;
    else if (1 < oe) {
      for (var pe = Array(oe), Ge = 0; Ge < oe; Ge++)
        pe[Ge] = arguments[Ge + 2];
      re.children = pe;
    }
    if (v && v.defaultProps)
      for (te in ((oe = v.defaultProps), oe))
        re[te] === void 0 && (re[te] = oe[te]);
    return {
      $$typeof: o,
      type: v,
      key: le,
      ref: ae,
      props: re,
      _owner: ye.current,
    };
  }
  function Ce(v, N) {
    return {
      $$typeof: o,
      type: v.type,
      key: N,
      ref: v.ref,
      props: v.props,
      _owner: v._owner,
    };
  }
  function Pe(v) {
    return typeof v == "object" && v !== null && v.$$typeof === o;
  }
  function mt(v) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      v.replace(/[=:]/g, function (q) {
        return N[q];
      })
    );
  }
  var vt = /\/+/g;
  function Xe(v, N) {
    return typeof v == "object" && v !== null && v.key != null
      ? mt("" + v.key)
      : N.toString(36);
  }
  function ut(v, N, q, te, re) {
    var le = typeof v;
    (le === "undefined" || le === "boolean") && (v = null);
    var ae = !1;
    if (v === null) ae = !0;
    else
      switch (le) {
        case "string":
        case "number":
          ae = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case o:
            case c:
              ae = !0;
          }
      }
    if (ae)
      return (
        (ae = v),
        (re = re(ae)),
        (v = te === "" ? "." + Xe(ae, 0) : te),
        ee(re)
          ? ((q = ""),
            v != null && (q = v.replace(vt, "$&/") + "/"),
            ut(re, N, q, "", function (Ge) {
              return Ge;
            }))
          : re != null &&
            (Pe(re) &&
              (re = Ce(
                re,
                q +
                  (!re.key || (ae && ae.key === re.key)
                    ? ""
                    : ("" + re.key).replace(vt, "$&/") + "/") +
                  v
              )),
            N.push(re)),
        1
      );
    if (((ae = 0), (te = te === "" ? "." : te + ":"), ee(v)))
      for (var oe = 0; oe < v.length; oe++) {
        le = v[oe];
        var pe = te + Xe(le, oe);
        ae += ut(le, N, q, pe, re);
      }
    else if (((pe = L(v)), typeof pe == "function"))
      for (v = pe.call(v), oe = 0; !(le = v.next()).done; )
        (le = le.value), (pe = te + Xe(le, oe++)), (ae += ut(le, N, q, pe, re));
    else if (le === "object")
      throw (
        ((N = String(v)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(v).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ae;
  }
  function gt(v, N, q) {
    if (v == null) return v;
    var te = [],
      re = 0;
    return (
      ut(v, te, "", "", function (le) {
        return N.call(q, le, re++);
      }),
      te
    );
  }
  function Ue(v) {
    if (v._status === -1) {
      var N = v._result;
      (N = N()),
        N.then(
          function (q) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = q));
          },
          function (q) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = q));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = N));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var we = { current: null },
    V = { transition: null },
    K = {
      ReactCurrentDispatcher: we,
      ReactCurrentBatchConfig: V,
      ReactCurrentOwner: ye,
    };
  function A() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (b.Children = {
      map: gt,
      forEach: function (v, N, q) {
        gt(
          v,
          function () {
            N.apply(this, arguments);
          },
          q
        );
      },
      count: function (v) {
        var N = 0;
        return (
          gt(v, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (v) {
        return (
          gt(v, function (N) {
            return N;
          }) || []
        );
      },
      only: function (v) {
        if (!Pe(v))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return v;
      },
    }),
    (b.Component = D),
    (b.Fragment = s),
    (b.Profiler = d),
    (b.PureComponent = G),
    (b.StrictMode = g),
    (b.Suspense = w),
    (b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K),
    (b.act = A),
    (b.cloneElement = function (v, N, q) {
      if (v == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            v +
            "."
        );
      var te = M({}, v.props),
        re = v.key,
        le = v.ref,
        ae = v._owner;
      if (N != null) {
        if (
          (N.ref !== void 0 && ((le = N.ref), (ae = ye.current)),
          N.key !== void 0 && (re = "" + N.key),
          v.type && v.type.defaultProps)
        )
          var oe = v.type.defaultProps;
        for (pe in N)
          se.call(N, pe) &&
            !me.hasOwnProperty(pe) &&
            (te[pe] = N[pe] === void 0 && oe !== void 0 ? oe[pe] : N[pe]);
      }
      var pe = arguments.length - 2;
      if (pe === 1) te.children = q;
      else if (1 < pe) {
        oe = Array(pe);
        for (var Ge = 0; Ge < pe; Ge++) oe[Ge] = arguments[Ge + 2];
        te.children = oe;
      }
      return {
        $$typeof: o,
        type: v.type,
        key: re,
        ref: le,
        props: te,
        _owner: ae,
      };
    }),
    (b.createContext = function (v) {
      return (
        (v = {
          $$typeof: S,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (v.Provider = { $$typeof: m, _context: v }),
        (v.Consumer = v)
      );
    }),
    (b.createElement = _e),
    (b.createFactory = function (v) {
      var N = _e.bind(null, v);
      return (N.type = v), N;
    }),
    (b.createRef = function () {
      return { current: null };
    }),
    (b.forwardRef = function (v) {
      return { $$typeof: _, render: v };
    }),
    (b.isValidElement = Pe),
    (b.lazy = function (v) {
      return { $$typeof: z, _payload: { _status: -1, _result: v }, _init: Ue };
    }),
    (b.memo = function (v, N) {
      return { $$typeof: k, type: v, compare: N === void 0 ? null : N };
    }),
    (b.startTransition = function (v) {
      var N = V.transition;
      V.transition = {};
      try {
        v();
      } finally {
        V.transition = N;
      }
    }),
    (b.unstable_act = A),
    (b.useCallback = function (v, N) {
      return we.current.useCallback(v, N);
    }),
    (b.useContext = function (v) {
      return we.current.useContext(v);
    }),
    (b.useDebugValue = function () {}),
    (b.useDeferredValue = function (v) {
      return we.current.useDeferredValue(v);
    }),
    (b.useEffect = function (v, N) {
      return we.current.useEffect(v, N);
    }),
    (b.useId = function () {
      return we.current.useId();
    }),
    (b.useImperativeHandle = function (v, N, q) {
      return we.current.useImperativeHandle(v, N, q);
    }),
    (b.useInsertionEffect = function (v, N) {
      return we.current.useInsertionEffect(v, N);
    }),
    (b.useLayoutEffect = function (v, N) {
      return we.current.useLayoutEffect(v, N);
    }),
    (b.useMemo = function (v, N) {
      return we.current.useMemo(v, N);
    }),
    (b.useReducer = function (v, N, q) {
      return we.current.useReducer(v, N, q);
    }),
    (b.useRef = function (v) {
      return we.current.useRef(v);
    }),
    (b.useState = function (v) {
      return we.current.useState(v);
    }),
    (b.useSyncExternalStore = function (v, N, q) {
      return we.current.useSyncExternalStore(v, N, q);
    }),
    (b.useTransition = function () {
      return we.current.useTransition();
    }),
    (b.version = "18.3.1"),
    b
  );
}
var f1;
function cu() {
  return f1 || ((f1 = 1), (tu.exports = V2())), tu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var d1;
function D2() {
  if (d1) return Pr;
  d1 = 1;
  var o = cu(),
    c = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    g = Object.prototype.hasOwnProperty,
    d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(_, w, k) {
    var z,
      B = {},
      L = null,
      W = null;
    k !== void 0 && (L = "" + k),
      w.key !== void 0 && (L = "" + w.key),
      w.ref !== void 0 && (W = w.ref);
    for (z in w) g.call(w, z) && !m.hasOwnProperty(z) && (B[z] = w[z]);
    if (_ && _.defaultProps)
      for (z in ((w = _.defaultProps), w)) B[z] === void 0 && (B[z] = w[z]);
    return {
      $$typeof: c,
      type: _,
      key: L,
      ref: W,
      props: B,
      _owner: d.current,
    };
  }
  return (Pr.Fragment = s), (Pr.jsx = S), (Pr.jsxs = S), Pr;
}
var p1;
function O2() {
  return p1 || ((p1 = 1), (eu.exports = D2())), eu.exports;
}
var a = O2(),
  E = cu(),
  Yl = {},
  nu = { exports: {} },
  Ke = {},
  ru = { exports: {} },
  lu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var h1;
function I2() {
  return (
    h1 ||
      ((h1 = 1),
      (function (o) {
        function c(V, K) {
          var A = V.length;
          V.push(K);
          e: for (; 0 < A; ) {
            var v = (A - 1) >>> 1,
              N = V[v];
            if (0 < d(N, K)) (V[v] = K), (V[A] = N), (A = v);
            else break e;
          }
        }
        function s(V) {
          return V.length === 0 ? null : V[0];
        }
        function g(V) {
          if (V.length === 0) return null;
          var K = V[0],
            A = V.pop();
          if (A !== K) {
            V[0] = A;
            e: for (var v = 0, N = V.length, q = N >>> 1; v < q; ) {
              var te = 2 * (v + 1) - 1,
                re = V[te],
                le = te + 1,
                ae = V[le];
              if (0 > d(re, A))
                le < N && 0 > d(ae, re)
                  ? ((V[v] = ae), (V[le] = A), (v = le))
                  : ((V[v] = re), (V[te] = A), (v = te));
              else if (le < N && 0 > d(ae, A))
                (V[v] = ae), (V[le] = A), (v = le);
              else break e;
            }
          }
          return K;
        }
        function d(V, K) {
          var A = V.sortIndex - K.sortIndex;
          return A !== 0 ? A : V.id - K.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var m = performance;
          o.unstable_now = function () {
            return m.now();
          };
        } else {
          var S = Date,
            _ = S.now();
          o.unstable_now = function () {
            return S.now() - _;
          };
        }
        var w = [],
          k = [],
          z = 1,
          B = null,
          L = 3,
          W = !1,
          M = !1,
          F = !1,
          D = typeof setTimeout == "function" ? setTimeout : null,
          H = typeof clearTimeout == "function" ? clearTimeout : null,
          G = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function J(V) {
          for (var K = s(k); K !== null; ) {
            if (K.callback === null) g(k);
            else if (K.startTime <= V)
              g(k), (K.sortIndex = K.expirationTime), c(w, K);
            else break;
            K = s(k);
          }
        }
        function ee(V) {
          if (((F = !1), J(V), !M))
            if (s(w) !== null) (M = !0), Ue(se);
            else {
              var K = s(k);
              K !== null && we(ee, K.startTime - V);
            }
        }
        function se(V, K) {
          (M = !1), F && ((F = !1), H(_e), (_e = -1)), (W = !0);
          var A = L;
          try {
            for (
              J(K), B = s(w);
              B !== null && (!(B.expirationTime > K) || (V && !mt()));

            ) {
              var v = B.callback;
              if (typeof v == "function") {
                (B.callback = null), (L = B.priorityLevel);
                var N = v(B.expirationTime <= K);
                (K = o.unstable_now()),
                  typeof N == "function"
                    ? (B.callback = N)
                    : B === s(w) && g(w),
                  J(K);
              } else g(w);
              B = s(w);
            }
            if (B !== null) var q = !0;
            else {
              var te = s(k);
              te !== null && we(ee, te.startTime - K), (q = !1);
            }
            return q;
          } finally {
            (B = null), (L = A), (W = !1);
          }
        }
        var ye = !1,
          me = null,
          _e = -1,
          Ce = 5,
          Pe = -1;
        function mt() {
          return !(o.unstable_now() - Pe < Ce);
        }
        function vt() {
          if (me !== null) {
            var V = o.unstable_now();
            Pe = V;
            var K = !0;
            try {
              K = me(!0, V);
            } finally {
              K ? Xe() : ((ye = !1), (me = null));
            }
          } else ye = !1;
        }
        var Xe;
        if (typeof G == "function")
          Xe = function () {
            G(vt);
          };
        else if (typeof MessageChannel < "u") {
          var ut = new MessageChannel(),
            gt = ut.port2;
          (ut.port1.onmessage = vt),
            (Xe = function () {
              gt.postMessage(null);
            });
        } else
          Xe = function () {
            D(vt, 0);
          };
        function Ue(V) {
          (me = V), ye || ((ye = !0), Xe());
        }
        function we(V, K) {
          _e = D(function () {
            V(o.unstable_now());
          }, K);
        }
        (o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (V) {
            V.callback = null;
          }),
          (o.unstable_continueExecution = function () {
            M || W || ((M = !0), Ue(se));
          }),
          (o.unstable_forceFrameRate = function (V) {
            0 > V || 125 < V
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Ce = 0 < V ? Math.floor(1e3 / V) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return L;
          }),
          (o.unstable_getFirstCallbackNode = function () {
            return s(w);
          }),
          (o.unstable_next = function (V) {
            switch (L) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = L;
            }
            var A = L;
            L = K;
            try {
              return V();
            } finally {
              L = A;
            }
          }),
          (o.unstable_pauseExecution = function () {}),
          (o.unstable_requestPaint = function () {}),
          (o.unstable_runWithPriority = function (V, K) {
            switch (V) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                V = 3;
            }
            var A = L;
            L = V;
            try {
              return K();
            } finally {
              L = A;
            }
          }),
          (o.unstable_scheduleCallback = function (V, K, A) {
            var v = o.unstable_now();
            switch (
              (typeof A == "object" && A !== null
                ? ((A = A.delay),
                  (A = typeof A == "number" && 0 < A ? v + A : v))
                : (A = v),
              V)
            ) {
              case 1:
                var N = -1;
                break;
              case 2:
                N = 250;
                break;
              case 5:
                N = 1073741823;
                break;
              case 4:
                N = 1e4;
                break;
              default:
                N = 5e3;
            }
            return (
              (N = A + N),
              (V = {
                id: z++,
                callback: K,
                priorityLevel: V,
                startTime: A,
                expirationTime: N,
                sortIndex: -1,
              }),
              A > v
                ? ((V.sortIndex = A),
                  c(k, V),
                  s(w) === null &&
                    V === s(k) &&
                    (F ? (H(_e), (_e = -1)) : (F = !0), we(ee, A - v)))
                : ((V.sortIndex = N), c(w, V), M || W || ((M = !0), Ue(se))),
              V
            );
          }),
          (o.unstable_shouldYield = mt),
          (o.unstable_wrapCallback = function (V) {
            var K = L;
            return function () {
              var A = L;
              L = K;
              try {
                return V.apply(this, arguments);
              } finally {
                L = A;
              }
            };
          });
      })(lu)),
    lu
  );
}
var m1;
function A2() {
  return m1 || ((m1 = 1), (ru.exports = I2())), ru.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var v1;
function U2() {
  if (v1) return Ke;
  v1 = 1;
  var o = cu(),
    c = A2();
  function s(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var g = new Set(),
    d = {};
  function m(e, t) {
    S(e, t), S(e + "Capture", t);
  }
  function S(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) g.add(t[e]);
  }
  var _ = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    w = Object.prototype.hasOwnProperty,
    k =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    z = {},
    B = {};
  function L(e) {
    return w.call(B, e)
      ? !0
      : w.call(z, e)
      ? !1
      : k.test(e)
      ? (B[e] = !0)
      : ((z[e] = !0), !1);
  }
  function W(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function M(e, t, n, r) {
    if (t === null || typeof t > "u" || W(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function F(e, t, n, r, l, i, u) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = u);
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      D[e] = new F(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      D[t] = new F(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      D[e] = new F(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      D[e] = new F(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        D[e] = new F(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      D[e] = new F(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      D[e] = new F(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      D[e] = new F(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      D[e] = new F(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var H = /[\-:]([a-z])/g;
  function G(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(H, G);
      D[t] = new F(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(H, G);
        D[t] = new F(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(H, G);
      D[t] = new F(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      D[e] = new F(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (D.xlinkHref = new F(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      D[e] = new F(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function J(e, t, n, r) {
    var l = D.hasOwnProperty(t) ? D[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (M(t, n, l, r) && (n = null),
      r || l === null
        ? L(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ee = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    se = Symbol.for("react.element"),
    ye = Symbol.for("react.portal"),
    me = Symbol.for("react.fragment"),
    _e = Symbol.for("react.strict_mode"),
    Ce = Symbol.for("react.profiler"),
    Pe = Symbol.for("react.provider"),
    mt = Symbol.for("react.context"),
    vt = Symbol.for("react.forward_ref"),
    Xe = Symbol.for("react.suspense"),
    ut = Symbol.for("react.suspense_list"),
    gt = Symbol.for("react.memo"),
    Ue = Symbol.for("react.lazy"),
    we = Symbol.for("react.offscreen"),
    V = Symbol.iterator;
  function K(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (V && e[V]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var A = Object.assign,
    v;
  function N(e) {
    if (v === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        v = (t && t[1]) || "";
      }
    return (
      `
` +
      v +
      e
    );
  }
  var q = !1;
  function te(e, t) {
    if (!e || q) return "";
    q = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (x) {
            var r = x;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (x) {
            r = x;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (x) {
          r = x;
        }
        e();
      }
    } catch (x) {
      if (x && r && typeof x.stack == "string") {
        for (
          var l = x.stack.split(`
`),
            i = r.stack.split(`
`),
            u = l.length - 1,
            f = i.length - 1;
          1 <= u && 0 <= f && l[u] !== i[f];

        )
          f--;
        for (; 1 <= u && 0 <= f; u--, f--)
          if (l[u] !== i[f]) {
            if (u !== 1 || f !== 1)
              do
                if ((u--, f--, 0 > f || l[u] !== i[f])) {
                  var p =
                    `
` + l[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      p.includes("<anonymous>") &&
                      (p = p.replace("<anonymous>", e.displayName)),
                    p
                  );
                }
              while (1 <= u && 0 <= f);
            break;
          }
      }
    } finally {
      (q = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? N(e) : "";
  }
  function re(e) {
    switch (e.tag) {
      case 5:
        return N(e.type);
      case 16:
        return N("Lazy");
      case 13:
        return N("Suspense");
      case 19:
        return N("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = te(e.type, !1)), e;
      case 11:
        return (e = te(e.type.render, !1)), e;
      case 1:
        return (e = te(e.type, !0)), e;
      default:
        return "";
    }
  }
  function le(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case me:
        return "Fragment";
      case ye:
        return "Portal";
      case Ce:
        return "Profiler";
      case _e:
        return "StrictMode";
      case Xe:
        return "Suspense";
      case ut:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case mt:
          return (e.displayName || "Context") + ".Consumer";
        case Pe:
          return (e._context.displayName || "Context") + ".Provider";
        case vt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case gt:
          return (
            (t = e.displayName || null), t !== null ? t : le(e.type) || "Memo"
          );
        case Ue:
          (t = e._payload), (e = e._init);
          try {
            return le(e(t));
          } catch {}
      }
    return null;
  }
  function ae(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return le(t);
      case 8:
        return t === _e ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function oe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function pe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ge(e) {
    var t = pe(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            (r = "" + u), i.call(this, u);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = "" + u;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Vr(e) {
    e._valueTracker || (e._valueTracker = Ge(e));
  }
  function vu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = pe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Dr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function oi(e, t) {
    var n = t.checked;
    return A({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function gu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = oe(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function yu(e, t) {
    (t = t.checked), t != null && J(e, "checked", t, !1);
  }
  function ui(e, t) {
    yu(e, t);
    var n = oe(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? si(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && si(e, t.type, oe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Cu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function si(e, t, n) {
    (t !== "number" || Dr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Wn = Array.isArray;
  function yn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + oe(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ai(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return A({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function wu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(s(92));
        if (Wn(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: oe(n) };
  }
  function xu(e, t) {
    var n = oe(t.value),
      r = oe(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function ku(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Su(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ci(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Su(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Or,
    _u = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Or = Or || document.createElement("div"),
            Or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Or.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Zn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Qn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    A1 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Qn).forEach(function (e) {
    A1.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qn[t] = Qn[e]);
    });
  });
  function Eu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Qn.hasOwnProperty(e) && Qn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Lu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Eu(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var U1 = A(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function fi(e, t) {
    if (t) {
      if (U1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function di(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var pi = null;
  function hi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var mi = null,
    Cn = null,
    wn = null;
  function ju(e) {
    if ((e = hr(e))) {
      if (typeof mi != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = sl(t)), mi(e.stateNode, e.type, t));
    }
  }
  function Nu(e) {
    Cn ? (wn ? wn.push(e) : (wn = [e])) : (Cn = e);
  }
  function Pu() {
    if (Cn) {
      var e = Cn,
        t = wn;
      if (((wn = Cn = null), ju(e), t)) for (e = 0; e < t.length; e++) ju(t[e]);
    }
  }
  function Ru(e, t) {
    return e(t);
  }
  function Mu() {}
  var vi = !1;
  function Hu(e, t, n) {
    if (vi) return e(t, n);
    vi = !0;
    try {
      return Ru(e, t, n);
    } finally {
      (vi = !1), (Cn !== null || wn !== null) && (Mu(), Pu());
    }
  }
  function Yn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = sl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var gi = !1;
  if (_)
    try {
      var Kn = {};
      Object.defineProperty(Kn, "passive", {
        get: function () {
          gi = !0;
        },
      }),
        window.addEventListener("test", Kn, Kn),
        window.removeEventListener("test", Kn, Kn);
    } catch {
      gi = !1;
    }
  function $1(e, t, n, r, l, i, u, f, p) {
    var x = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, x);
    } catch (P) {
      this.onError(P);
    }
  }
  var Xn = !1,
    Ir = null,
    Ar = !1,
    yi = null,
    W1 = {
      onError: function (e) {
        (Xn = !0), (Ir = e);
      },
    };
  function Z1(e, t, n, r, l, i, u, f, p) {
    (Xn = !1), (Ir = null), $1.apply(W1, arguments);
  }
  function Q1(e, t, n, r, l, i, u, f, p) {
    if ((Z1.apply(this, arguments), Xn)) {
      if (Xn) {
        var x = Ir;
        (Xn = !1), (Ir = null);
      } else throw Error(s(198));
      Ar || ((Ar = !0), (yi = x));
    }
  }
  function rn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Tu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function zu(e) {
    if (rn(e) !== e) throw Error(s(188));
  }
  function Y1(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = rn(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return zu(l), e;
          if (i === r) return zu(l), t;
          i = i.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) (n = l), (r = i);
      else {
        for (var u = !1, f = l.child; f; ) {
          if (f === n) {
            (u = !0), (n = l), (r = i);
            break;
          }
          if (f === r) {
            (u = !0), (r = l), (n = i);
            break;
          }
          f = f.sibling;
        }
        if (!u) {
          for (f = i.child; f; ) {
            if (f === n) {
              (u = !0), (n = i), (r = l);
              break;
            }
            if (f === r) {
              (u = !0), (r = i), (n = l);
              break;
            }
            f = f.sibling;
          }
          if (!u) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function Bu(e) {
    return (e = Y1(e)), e !== null ? Fu(e) : null;
  }
  function Fu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Fu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Vu = c.unstable_scheduleCallback,
    Du = c.unstable_cancelCallback,
    K1 = c.unstable_shouldYield,
    X1 = c.unstable_requestPaint,
    ke = c.unstable_now,
    G1 = c.unstable_getCurrentPriorityLevel,
    Ci = c.unstable_ImmediatePriority,
    Ou = c.unstable_UserBlockingPriority,
    Ur = c.unstable_NormalPriority,
    J1 = c.unstable_LowPriority,
    Iu = c.unstable_IdlePriority,
    $r = null,
    yt = null;
  function q1(e) {
    if (yt && typeof yt.onCommitFiberRoot == "function")
      try {
        yt.onCommitFiberRoot($r, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var st = Math.clz32 ? Math.clz32 : tc,
    b1 = Math.log,
    ec = Math.LN2;
  function tc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((b1(e) / ec) | 0)) | 0;
  }
  var Wr = 64,
    Zr = 4194304;
  function Gn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Qr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var f = u & ~l;
      f !== 0 ? (r = Gn(f)) : ((i &= u), i !== 0 && (r = Gn(i)));
    } else (u = n & ~l), u !== 0 ? (r = Gn(u)) : i !== 0 && (r = Gn(i));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - st(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function nc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function rc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var u = 31 - st(i),
        f = 1 << u,
        p = l[u];
      p === -1
        ? (!(f & n) || f & r) && (l[u] = nc(f, t))
        : p <= t && (e.expiredLanes |= f),
        (i &= ~f);
    }
  }
  function wi(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Au() {
    var e = Wr;
    return (Wr <<= 1), !(Wr & 4194240) && (Wr = 64), e;
  }
  function xi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Jn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - st(t)),
      (e[t] = n);
  }
  function lc(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - st(n),
        i = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
    }
  }
  function ki(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - st(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var ue = 0;
  function Uu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var $u,
    Si,
    Wu,
    Zu,
    Qu,
    _i = !1,
    Yr = [],
    Vt = null,
    Dt = null,
    Ot = null,
    qn = new Map(),
    bn = new Map(),
    It = [],
    ic =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Yu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vt = null;
        break;
      case "dragenter":
      case "dragleave":
        Dt = null;
        break;
      case "mouseover":
      case "mouseout":
        Ot = null;
        break;
      case "pointerover":
      case "pointerout":
        qn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bn.delete(t.pointerId);
    }
  }
  function er(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = hr(t)), t !== null && Si(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function oc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Vt = er(Vt, e, t, n, r, l)), !0;
      case "dragenter":
        return (Dt = er(Dt, e, t, n, r, l)), !0;
      case "mouseover":
        return (Ot = er(Ot, e, t, n, r, l)), !0;
      case "pointerover":
        var i = l.pointerId;
        return qn.set(i, er(qn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (i = l.pointerId), bn.set(i, er(bn.get(i) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function Ku(e) {
    var t = ln(e.target);
    if (t !== null) {
      var n = rn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Tu(n)), t !== null)) {
            (e.blockedOn = t),
              Qu(e.priority, function () {
                Wu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Kr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Li(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (pi = r), n.target.dispatchEvent(r), (pi = null);
      } else return (t = hr(n)), t !== null && Si(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Xu(e, t, n) {
    Kr(e) && n.delete(t);
  }
  function uc() {
    (_i = !1),
      Vt !== null && Kr(Vt) && (Vt = null),
      Dt !== null && Kr(Dt) && (Dt = null),
      Ot !== null && Kr(Ot) && (Ot = null),
      qn.forEach(Xu),
      bn.forEach(Xu);
  }
  function tr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      _i ||
        ((_i = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, uc)));
  }
  function nr(e) {
    function t(l) {
      return tr(l, e);
    }
    if (0 < Yr.length) {
      tr(Yr[0], e);
      for (var n = 1; n < Yr.length; n++) {
        var r = Yr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Vt !== null && tr(Vt, e),
        Dt !== null && tr(Dt, e),
        Ot !== null && tr(Ot, e),
        qn.forEach(t),
        bn.forEach(t),
        n = 0;
      n < It.length;
      n++
    )
      (r = It[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < It.length && ((n = It[0]), n.blockedOn === null); )
      Ku(n), n.blockedOn === null && It.shift();
  }
  var xn = ee.ReactCurrentBatchConfig,
    Xr = !0;
  function sc(e, t, n, r) {
    var l = ue,
      i = xn.transition;
    xn.transition = null;
    try {
      (ue = 1), Ei(e, t, n, r);
    } finally {
      (ue = l), (xn.transition = i);
    }
  }
  function ac(e, t, n, r) {
    var l = ue,
      i = xn.transition;
    xn.transition = null;
    try {
      (ue = 4), Ei(e, t, n, r);
    } finally {
      (ue = l), (xn.transition = i);
    }
  }
  function Ei(e, t, n, r) {
    if (Xr) {
      var l = Li(e, t, n, r);
      if (l === null) $i(e, t, r, Gr, n), Yu(e, r);
      else if (oc(l, e, t, n, r)) r.stopPropagation();
      else if ((Yu(e, r), t & 4 && -1 < ic.indexOf(e))) {
        for (; l !== null; ) {
          var i = hr(l);
          if (
            (i !== null && $u(i),
            (i = Li(e, t, n, r)),
            i === null && $i(e, t, r, Gr, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else $i(e, t, r, null, n);
    }
  }
  var Gr = null;
  function Li(e, t, n, r) {
    if (((Gr = null), (e = hi(r)), (e = ln(e)), e !== null))
      if (((t = rn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Tu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Gr = e), null;
  }
  function Gu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (G1()) {
          case Ci:
            return 1;
          case Ou:
            return 4;
          case Ur:
          case J1:
            return 16;
          case Iu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var At = null,
    ji = null,
    Jr = null;
  function Ju() {
    if (Jr) return Jr;
    var e,
      t = ji,
      n = t.length,
      r,
      l = "value" in At ? At.value : At.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[i - r]; r++);
    return (Jr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function qr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function br() {
    return !0;
  }
  function qu() {
    return !1;
  }
  function Je(e) {
    function t(n, r, l, i, u) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null);
      for (var f in e)
        e.hasOwnProperty(f) && ((n = e[f]), (this[f] = n ? n(i) : i[f]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? br
          : qu),
        (this.isPropagationStopped = qu),
        this
      );
    }
    return (
      A(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = br));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = br));
        },
        persist: function () {},
        isPersistent: br,
      }),
      t
    );
  }
  var kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ni = Je(kn),
    rr = A({}, kn, { view: 0, detail: 0 }),
    cc = Je(rr),
    Pi,
    Ri,
    lr,
    el = A({}, rr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Hi,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== lr &&
              (lr && e.type === "mousemove"
                ? ((Pi = e.screenX - lr.screenX), (Ri = e.screenY - lr.screenY))
                : (Ri = Pi = 0),
              (lr = e)),
            Pi);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ri;
      },
    }),
    bu = Je(el),
    fc = A({}, el, { dataTransfer: 0 }),
    dc = Je(fc),
    pc = A({}, rr, { relatedTarget: 0 }),
    Mi = Je(pc),
    hc = A({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mc = Je(hc),
    vc = A({}, kn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    gc = Je(vc),
    yc = A({}, kn, { data: 0 }),
    es = Je(yc),
    Cc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    wc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    xc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function kc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = xc[e])
      ? !!t[e]
      : !1;
  }
  function Hi() {
    return kc;
  }
  var Sc = A({}, rr, {
      key: function (e) {
        if (e.key) {
          var t = Cc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = qr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? wc[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Hi,
      charCode: function (e) {
        return e.type === "keypress" ? qr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? qr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    _c = Je(Sc),
    Ec = A({}, el, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ts = Je(Ec),
    Lc = A({}, rr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Hi,
    }),
    jc = Je(Lc),
    Nc = A({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pc = Je(Nc),
    Rc = A({}, el, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Mc = Je(Rc),
    Hc = [9, 13, 27, 32],
    Ti = _ && "CompositionEvent" in window,
    ir = null;
  _ && "documentMode" in document && (ir = document.documentMode);
  var Tc = _ && "TextEvent" in window && !ir,
    ns = _ && (!Ti || (ir && 8 < ir && 11 >= ir)),
    rs = " ",
    ls = !1;
  function is(e, t) {
    switch (e) {
      case "keyup":
        return Hc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function os(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Sn = !1;
  function zc(e, t) {
    switch (e) {
      case "compositionend":
        return os(t);
      case "keypress":
        return t.which !== 32 ? null : ((ls = !0), rs);
      case "textInput":
        return (e = t.data), e === rs && ls ? null : e;
      default:
        return null;
    }
  }
  function Bc(e, t) {
    if (Sn)
      return e === "compositionend" || (!Ti && is(e, t))
        ? ((e = Ju()), (Jr = ji = At = null), (Sn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ns && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Fc = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function us(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Fc[e.type] : t === "textarea";
  }
  function ss(e, t, n, r) {
    Nu(r),
      (t = il(t, "onChange")),
      0 < t.length &&
        ((n = new Ni("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var or = null,
    ur = null;
  function Vc(e) {
    Ls(e, 0);
  }
  function tl(e) {
    var t = Nn(e);
    if (vu(t)) return e;
  }
  function Dc(e, t) {
    if (e === "change") return t;
  }
  var as = !1;
  if (_) {
    var zi;
    if (_) {
      var Bi = "oninput" in document;
      if (!Bi) {
        var cs = document.createElement("div");
        cs.setAttribute("oninput", "return;"),
          (Bi = typeof cs.oninput == "function");
      }
      zi = Bi;
    } else zi = !1;
    as = zi && (!document.documentMode || 9 < document.documentMode);
  }
  function fs() {
    or && (or.detachEvent("onpropertychange", ds), (ur = or = null));
  }
  function ds(e) {
    if (e.propertyName === "value" && tl(ur)) {
      var t = [];
      ss(t, ur, e, hi(e)), Hu(Vc, t);
    }
  }
  function Oc(e, t, n) {
    e === "focusin"
      ? (fs(), (or = t), (ur = n), or.attachEvent("onpropertychange", ds))
      : e === "focusout" && fs();
  }
  function Ic(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return tl(ur);
  }
  function Ac(e, t) {
    if (e === "click") return tl(t);
  }
  function Uc(e, t) {
    if (e === "input" || e === "change") return tl(t);
  }
  function $c(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var at = typeof Object.is == "function" ? Object.is : $c;
  function sr(e, t) {
    if (at(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!w.call(t, l) || !at(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ps(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function hs(e, t) {
    var n = ps(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ps(n);
    }
  }
  function ms(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? ms(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function vs() {
    for (var e = window, t = Dr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Dr(e.document);
    }
    return t;
  }
  function Fi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Wc(e) {
    var t = vs(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      ms(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Fi(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          (r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = hs(n, i));
          var u = hs(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Zc = _ && "documentMode" in document && 11 >= document.documentMode,
    _n = null,
    Vi = null,
    ar = null,
    Di = !1;
  function gs(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Di ||
      _n == null ||
      _n !== Dr(r) ||
      ((r = _n),
      "selectionStart" in r && Fi(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ar && sr(ar, r)) ||
        ((ar = r),
        (r = il(Vi, "onSelect")),
        0 < r.length &&
          ((t = new Ni("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = _n))));
  }
  function nl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var En = {
      animationend: nl("Animation", "AnimationEnd"),
      animationiteration: nl("Animation", "AnimationIteration"),
      animationstart: nl("Animation", "AnimationStart"),
      transitionend: nl("Transition", "TransitionEnd"),
    },
    Oi = {},
    ys = {};
  _ &&
    ((ys = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete En.animationend.animation,
      delete En.animationiteration.animation,
      delete En.animationstart.animation),
    "TransitionEvent" in window || delete En.transitionend.transition);
  function rl(e) {
    if (Oi[e]) return Oi[e];
    if (!En[e]) return e;
    var t = En[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ys) return (Oi[e] = t[n]);
    return e;
  }
  var Cs = rl("animationend"),
    ws = rl("animationiteration"),
    xs = rl("animationstart"),
    ks = rl("transitionend"),
    Ss = new Map(),
    _s =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Ut(e, t) {
    Ss.set(e, t), m(t, [e]);
  }
  for (var Ii = 0; Ii < _s.length; Ii++) {
    var Ai = _s[Ii],
      Qc = Ai.toLowerCase(),
      Yc = Ai[0].toUpperCase() + Ai.slice(1);
    Ut(Qc, "on" + Yc);
  }
  Ut(Cs, "onAnimationEnd"),
    Ut(ws, "onAnimationIteration"),
    Ut(xs, "onAnimationStart"),
    Ut("dblclick", "onDoubleClick"),
    Ut("focusin", "onFocus"),
    Ut("focusout", "onBlur"),
    Ut(ks, "onTransitionEnd"),
    S("onMouseEnter", ["mouseout", "mouseover"]),
    S("onMouseLeave", ["mouseout", "mouseover"]),
    S("onPointerEnter", ["pointerout", "pointerover"]),
    S("onPointerLeave", ["pointerout", "pointerover"]),
    m(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    m(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    m(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    m(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    m(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var cr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Kc = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(cr)
    );
  function Es(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Q1(r, t, void 0, e), (e.currentTarget = null);
  }
  function Ls(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var f = r[u],
              p = f.instance,
              x = f.currentTarget;
            if (((f = f.listener), p !== i && l.isPropagationStopped()))
              break e;
            Es(l, f, x), (i = p);
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((f = r[u]),
              (p = f.instance),
              (x = f.currentTarget),
              (f = f.listener),
              p !== i && l.isPropagationStopped())
            )
              break e;
            Es(l, f, x), (i = p);
          }
      }
    }
    if (Ar) throw ((e = yi), (Ar = !1), (yi = null), e);
  }
  function fe(e, t) {
    var n = t[Xi];
    n === void 0 && (n = t[Xi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (js(t, e, 2, !1), n.add(r));
  }
  function Ui(e, t, n) {
    var r = 0;
    t && (r |= 4), js(n, e, r, t);
  }
  var ll = "_reactListening" + Math.random().toString(36).slice(2);
  function fr(e) {
    if (!e[ll]) {
      (e[ll] = !0),
        g.forEach(function (n) {
          n !== "selectionchange" && (Kc.has(n) || Ui(n, !1, e), Ui(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ll] || ((t[ll] = !0), Ui("selectionchange", !1, t));
    }
  }
  function js(e, t, n, r) {
    switch (Gu(t)) {
      case 1:
        var l = sc;
        break;
      case 4:
        l = ac;
        break;
      default:
        l = Ei;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !gi ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function $i(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var f = r.stateNode.containerInfo;
          if (f === l || (f.nodeType === 8 && f.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var p = u.tag;
              if (
                (p === 3 || p === 4) &&
                ((p = u.stateNode.containerInfo),
                p === l || (p.nodeType === 8 && p.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; f !== null; ) {
            if (((u = ln(f)), u === null)) return;
            if (((p = u.tag), p === 5 || p === 6)) {
              r = i = u;
              continue e;
            }
            f = f.parentNode;
          }
        }
        r = r.return;
      }
    Hu(function () {
      var x = i,
        P = hi(n),
        R = [];
      e: {
        var j = Ss.get(e);
        if (j !== void 0) {
          var O = Ni,
            U = e;
          switch (e) {
            case "keypress":
              if (qr(n) === 0) break e;
            case "keydown":
            case "keyup":
              O = _c;
              break;
            case "focusin":
              (U = "focus"), (O = Mi);
              break;
            case "focusout":
              (U = "blur"), (O = Mi);
              break;
            case "beforeblur":
            case "afterblur":
              O = Mi;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = bu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = dc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = jc;
              break;
            case Cs:
            case ws:
            case xs:
              O = mc;
              break;
            case ks:
              O = Pc;
              break;
            case "scroll":
              O = cc;
              break;
            case "wheel":
              O = Mc;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = gc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = ts;
          }
          var $ = (t & 4) !== 0,
            Se = !$ && e === "scroll",
            y = $ ? (j !== null ? j + "Capture" : null) : j;
          $ = [];
          for (var h = x, C; h !== null; ) {
            C = h;
            var T = C.stateNode;
            if (
              (C.tag === 5 &&
                T !== null &&
                ((C = T),
                y !== null &&
                  ((T = Yn(h, y)), T != null && $.push(dr(h, T, C)))),
              Se)
            )
              break;
            h = h.return;
          }
          0 < $.length &&
            ((j = new O(j, U, null, n, P)), R.push({ event: j, listeners: $ }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((j = e === "mouseover" || e === "pointerover"),
            (O = e === "mouseout" || e === "pointerout"),
            j &&
              n !== pi &&
              (U = n.relatedTarget || n.fromElement) &&
              (ln(U) || U[Lt]))
          )
            break e;
          if (
            (O || j) &&
            ((j =
              P.window === P
                ? P
                : (j = P.ownerDocument)
                ? j.defaultView || j.parentWindow
                : window),
            O
              ? ((U = n.relatedTarget || n.toElement),
                (O = x),
                (U = U ? ln(U) : null),
                U !== null &&
                  ((Se = rn(U)), U !== Se || (U.tag !== 5 && U.tag !== 6)) &&
                  (U = null))
              : ((O = null), (U = x)),
            O !== U)
          ) {
            if (
              (($ = bu),
              (T = "onMouseLeave"),
              (y = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                (($ = ts),
                (T = "onPointerLeave"),
                (y = "onPointerEnter"),
                (h = "pointer")),
              (Se = O == null ? j : Nn(O)),
              (C = U == null ? j : Nn(U)),
              (j = new $(T, h + "leave", O, n, P)),
              (j.target = Se),
              (j.relatedTarget = C),
              (T = null),
              ln(P) === x &&
                (($ = new $(y, h + "enter", U, n, P)),
                ($.target = C),
                ($.relatedTarget = Se),
                (T = $)),
              (Se = T),
              O && U)
            )
              t: {
                for ($ = O, y = U, h = 0, C = $; C; C = Ln(C)) h++;
                for (C = 0, T = y; T; T = Ln(T)) C++;
                for (; 0 < h - C; ) ($ = Ln($)), h--;
                for (; 0 < C - h; ) (y = Ln(y)), C--;
                for (; h--; ) {
                  if ($ === y || (y !== null && $ === y.alternate)) break t;
                  ($ = Ln($)), (y = Ln(y));
                }
                $ = null;
              }
            else $ = null;
            O !== null && Ns(R, j, O, $, !1),
              U !== null && Se !== null && Ns(R, Se, U, $, !0);
          }
        }
        e: {
          if (
            ((j = x ? Nn(x) : window),
            (O = j.nodeName && j.nodeName.toLowerCase()),
            O === "select" || (O === "input" && j.type === "file"))
          )
            var Z = Dc;
          else if (us(j))
            if (as) Z = Uc;
            else {
              Z = Ic;
              var Q = Oc;
            }
          else
            (O = j.nodeName) &&
              O.toLowerCase() === "input" &&
              (j.type === "checkbox" || j.type === "radio") &&
              (Z = Ac);
          if (Z && (Z = Z(e, x))) {
            ss(R, Z, n, P);
            break e;
          }
          Q && Q(e, j, x),
            e === "focusout" &&
              (Q = j._wrapperState) &&
              Q.controlled &&
              j.type === "number" &&
              si(j, "number", j.value);
        }
        switch (((Q = x ? Nn(x) : window), e)) {
          case "focusin":
            (us(Q) || Q.contentEditable === "true") &&
              ((_n = Q), (Vi = x), (ar = null));
            break;
          case "focusout":
            ar = Vi = _n = null;
            break;
          case "mousedown":
            Di = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Di = !1), gs(R, n, P);
            break;
          case "selectionchange":
            if (Zc) break;
          case "keydown":
          case "keyup":
            gs(R, n, P);
        }
        var Y;
        if (Ti)
          e: {
            switch (e) {
              case "compositionstart":
                var X = "onCompositionStart";
                break e;
              case "compositionend":
                X = "onCompositionEnd";
                break e;
              case "compositionupdate":
                X = "onCompositionUpdate";
                break e;
            }
            X = void 0;
          }
        else
          Sn
            ? is(e, n) && (X = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (X = "onCompositionStart");
        X &&
          (ns &&
            n.locale !== "ko" &&
            (Sn || X !== "onCompositionStart"
              ? X === "onCompositionEnd" && Sn && (Y = Ju())
              : ((At = P),
                (ji = "value" in At ? At.value : At.textContent),
                (Sn = !0))),
          (Q = il(x, X)),
          0 < Q.length &&
            ((X = new es(X, e, null, n, P)),
            R.push({ event: X, listeners: Q }),
            Y ? (X.data = Y) : ((Y = os(n)), Y !== null && (X.data = Y)))),
          (Y = Tc ? zc(e, n) : Bc(e, n)) &&
            ((x = il(x, "onBeforeInput")),
            0 < x.length &&
              ((P = new es("onBeforeInput", "beforeinput", null, n, P)),
              R.push({ event: P, listeners: x }),
              (P.data = Y)));
      }
      Ls(R, t);
    });
  }
  function dr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function il(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Yn(e, n)),
        i != null && r.unshift(dr(e, i, l)),
        (i = Yn(e, t)),
        i != null && r.push(dr(e, i, l))),
        (e = e.return);
    }
    return r;
  }
  function Ln(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ns(e, t, n, r, l) {
    for (var i = t._reactName, u = []; n !== null && n !== r; ) {
      var f = n,
        p = f.alternate,
        x = f.stateNode;
      if (p !== null && p === r) break;
      f.tag === 5 &&
        x !== null &&
        ((f = x),
        l
          ? ((p = Yn(n, i)), p != null && u.unshift(dr(n, p, f)))
          : l || ((p = Yn(n, i)), p != null && u.push(dr(n, p, f)))),
        (n = n.return);
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Xc = /\r\n?/g,
    Gc = /\u0000|\uFFFD/g;
  function Ps(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Xc,
        `
`
      )
      .replace(Gc, "");
  }
  function ol(e, t, n) {
    if (((t = Ps(t)), Ps(e) !== t && n)) throw Error(s(425));
  }
  function ul() {}
  var Wi = null,
    Zi = null;
  function Qi(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Yi = typeof setTimeout == "function" ? setTimeout : void 0,
    Jc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Rs = typeof Promise == "function" ? Promise : void 0,
    qc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Rs < "u"
        ? function (e) {
            return Rs.resolve(null).then(e).catch(bc);
          }
        : Yi;
  function bc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ki(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), nr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    nr(t);
  }
  function $t(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ms(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var jn = Math.random().toString(36).slice(2),
    Ct = "__reactFiber$" + jn,
    pr = "__reactProps$" + jn,
    Lt = "__reactContainer$" + jn,
    Xi = "__reactEvents$" + jn,
    e2 = "__reactListeners$" + jn,
    t2 = "__reactHandles$" + jn;
  function ln(e) {
    var t = e[Ct];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Lt] || n[Ct])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ms(e); e !== null; ) {
            if ((n = e[Ct])) return n;
            e = Ms(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function hr(e) {
    return (
      (e = e[Ct] || e[Lt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Nn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function sl(e) {
    return e[pr] || null;
  }
  var Gi = [],
    Pn = -1;
  function Wt(e) {
    return { current: e };
  }
  function de(e) {
    0 > Pn || ((e.current = Gi[Pn]), (Gi[Pn] = null), Pn--);
  }
  function ce(e, t) {
    Pn++, (Gi[Pn] = e.current), (e.current = t);
  }
  var Zt = {},
    Fe = Wt(Zt),
    $e = Wt(!1),
    on = Zt;
  function Rn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Zt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function We(e) {
    return (e = e.childContextTypes), e != null;
  }
  function al() {
    de($e), de(Fe);
  }
  function Hs(e, t, n) {
    if (Fe.current !== Zt) throw Error(s(168));
    ce(Fe, t), ce($e, n);
  }
  function Ts(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(s(108, ae(e) || "Unknown", l));
    return A({}, n, r);
  }
  function cl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Zt),
      (on = Fe.current),
      ce(Fe, e),
      ce($e, $e.current),
      !0
    );
  }
  function zs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n
      ? ((e = Ts(e, t, on)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        de($e),
        de(Fe),
        ce(Fe, e))
      : de($e),
      ce($e, n);
  }
  var jt = null,
    fl = !1,
    Ji = !1;
  function Bs(e) {
    jt === null ? (jt = [e]) : jt.push(e);
  }
  function n2(e) {
    (fl = !0), Bs(e);
  }
  function Qt() {
    if (!Ji && jt !== null) {
      Ji = !0;
      var e = 0,
        t = ue;
      try {
        var n = jt;
        for (ue = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (jt = null), (fl = !1);
      } catch (l) {
        throw (jt !== null && (jt = jt.slice(e + 1)), Vu(Ci, Qt), l);
      } finally {
        (ue = t), (Ji = !1);
      }
    }
    return null;
  }
  var Mn = [],
    Hn = 0,
    dl = null,
    pl = 0,
    tt = [],
    nt = 0,
    un = null,
    Nt = 1,
    Pt = "";
  function sn(e, t) {
    (Mn[Hn++] = pl), (Mn[Hn++] = dl), (dl = e), (pl = t);
  }
  function Fs(e, t, n) {
    (tt[nt++] = Nt), (tt[nt++] = Pt), (tt[nt++] = un), (un = e);
    var r = Nt;
    e = Pt;
    var l = 32 - st(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - st(t) + l;
    if (30 < i) {
      var u = l - (l % 5);
      (i = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (Nt = (1 << (32 - st(t) + l)) | (n << l) | r),
        (Pt = i + e);
    } else (Nt = (1 << i) | (n << l) | r), (Pt = e);
  }
  function qi(e) {
    e.return !== null && (sn(e, 1), Fs(e, 1, 0));
  }
  function bi(e) {
    for (; e === dl; )
      (dl = Mn[--Hn]), (Mn[Hn] = null), (pl = Mn[--Hn]), (Mn[Hn] = null);
    for (; e === un; )
      (un = tt[--nt]),
        (tt[nt] = null),
        (Pt = tt[--nt]),
        (tt[nt] = null),
        (Nt = tt[--nt]),
        (tt[nt] = null);
  }
  var qe = null,
    be = null,
    he = !1,
    ct = null;
  function Vs(e, t) {
    var n = ot(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Ds(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (qe = e), (be = $t(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (qe = e), (be = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = un !== null ? { id: Nt, overflow: Pt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = ot(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (qe = e),
              (be = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function eo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function to(e) {
    if (he) {
      var t = be;
      if (t) {
        var n = t;
        if (!Ds(e, t)) {
          if (eo(e)) throw Error(s(418));
          t = $t(n.nextSibling);
          var r = qe;
          t && Ds(e, t)
            ? Vs(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (he = !1), (qe = e));
        }
      } else {
        if (eo(e)) throw Error(s(418));
        (e.flags = (e.flags & -4097) | 2), (he = !1), (qe = e);
      }
    }
  }
  function Os(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    qe = e;
  }
  function hl(e) {
    if (e !== qe) return !1;
    if (!he) return Os(e), (he = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Qi(e.type, e.memoizedProps))),
      t && (t = be))
    ) {
      if (eo(e)) throw (Is(), Error(s(418)));
      for (; t; ) Vs(e, t), (t = $t(t.nextSibling));
    }
    if ((Os(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                be = $t(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        be = null;
      }
    } else be = qe ? $t(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Is() {
    for (var e = be; e; ) e = $t(e.nextSibling);
  }
  function Tn() {
    (be = qe = null), (he = !1);
  }
  function no(e) {
    ct === null ? (ct = [e]) : ct.push(e);
  }
  var r2 = ee.ReactCurrentBatchConfig;
  function mr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var l = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (u) {
              var f = l.refs;
              u === null ? delete f[i] : (f[i] = u);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function ml(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        s(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function As(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Us(e) {
    function t(y, h) {
      if (e) {
        var C = y.deletions;
        C === null ? ((y.deletions = [h]), (y.flags |= 16)) : C.push(h);
      }
    }
    function n(y, h) {
      if (!e) return null;
      for (; h !== null; ) t(y, h), (h = h.sibling);
      return null;
    }
    function r(y, h) {
      for (y = new Map(); h !== null; )
        h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
      return y;
    }
    function l(y, h) {
      return (y = en(y, h)), (y.index = 0), (y.sibling = null), y;
    }
    function i(y, h, C) {
      return (
        (y.index = C),
        e
          ? ((C = y.alternate),
            C !== null
              ? ((C = C.index), C < h ? ((y.flags |= 2), h) : C)
              : ((y.flags |= 2), h))
          : ((y.flags |= 1048576), h)
      );
    }
    function u(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function f(y, h, C, T) {
      return h === null || h.tag !== 6
        ? ((h = Ko(C, y.mode, T)), (h.return = y), h)
        : ((h = l(h, C)), (h.return = y), h);
    }
    function p(y, h, C, T) {
      var Z = C.type;
      return Z === me
        ? P(y, h, C.props.children, T, C.key)
        : h !== null &&
          (h.elementType === Z ||
            (typeof Z == "object" &&
              Z !== null &&
              Z.$$typeof === Ue &&
              As(Z) === h.type))
        ? ((T = l(h, C.props)), (T.ref = mr(y, h, C)), (T.return = y), T)
        : ((T = Ol(C.type, C.key, C.props, null, y.mode, T)),
          (T.ref = mr(y, h, C)),
          (T.return = y),
          T);
    }
    function x(y, h, C, T) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== C.containerInfo ||
        h.stateNode.implementation !== C.implementation
        ? ((h = Xo(C, y.mode, T)), (h.return = y), h)
        : ((h = l(h, C.children || [])), (h.return = y), h);
    }
    function P(y, h, C, T, Z) {
      return h === null || h.tag !== 7
        ? ((h = vn(C, y.mode, T, Z)), (h.return = y), h)
        : ((h = l(h, C)), (h.return = y), h);
    }
    function R(y, h, C) {
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return (h = Ko("" + h, y.mode, C)), (h.return = y), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case se:
            return (
              (C = Ol(h.type, h.key, h.props, null, y.mode, C)),
              (C.ref = mr(y, null, h)),
              (C.return = y),
              C
            );
          case ye:
            return (h = Xo(h, y.mode, C)), (h.return = y), h;
          case Ue:
            var T = h._init;
            return R(y, T(h._payload), C);
        }
        if (Wn(h) || K(h))
          return (h = vn(h, y.mode, C, null)), (h.return = y), h;
        ml(y, h);
      }
      return null;
    }
    function j(y, h, C, T) {
      var Z = h !== null ? h.key : null;
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return Z !== null ? null : f(y, h, "" + C, T);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case se:
            return C.key === Z ? p(y, h, C, T) : null;
          case ye:
            return C.key === Z ? x(y, h, C, T) : null;
          case Ue:
            return (Z = C._init), j(y, h, Z(C._payload), T);
        }
        if (Wn(C) || K(C)) return Z !== null ? null : P(y, h, C, T, null);
        ml(y, C);
      }
      return null;
    }
    function O(y, h, C, T, Z) {
      if ((typeof T == "string" && T !== "") || typeof T == "number")
        return (y = y.get(C) || null), f(h, y, "" + T, Z);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case se:
            return (
              (y = y.get(T.key === null ? C : T.key) || null), p(h, y, T, Z)
            );
          case ye:
            return (
              (y = y.get(T.key === null ? C : T.key) || null), x(h, y, T, Z)
            );
          case Ue:
            var Q = T._init;
            return O(y, h, C, Q(T._payload), Z);
        }
        if (Wn(T) || K(T)) return (y = y.get(C) || null), P(h, y, T, Z, null);
        ml(h, T);
      }
      return null;
    }
    function U(y, h, C, T) {
      for (
        var Z = null, Q = null, Y = h, X = (h = 0), He = null;
        Y !== null && X < C.length;
        X++
      ) {
        Y.index > X ? ((He = Y), (Y = null)) : (He = Y.sibling);
        var ie = j(y, Y, C[X], T);
        if (ie === null) {
          Y === null && (Y = He);
          break;
        }
        e && Y && ie.alternate === null && t(y, Y),
          (h = i(ie, h, X)),
          Q === null ? (Z = ie) : (Q.sibling = ie),
          (Q = ie),
          (Y = He);
      }
      if (X === C.length) return n(y, Y), he && sn(y, X), Z;
      if (Y === null) {
        for (; X < C.length; X++)
          (Y = R(y, C[X], T)),
            Y !== null &&
              ((h = i(Y, h, X)),
              Q === null ? (Z = Y) : (Q.sibling = Y),
              (Q = Y));
        return he && sn(y, X), Z;
      }
      for (Y = r(y, Y); X < C.length; X++)
        (He = O(Y, y, X, C[X], T)),
          He !== null &&
            (e &&
              He.alternate !== null &&
              Y.delete(He.key === null ? X : He.key),
            (h = i(He, h, X)),
            Q === null ? (Z = He) : (Q.sibling = He),
            (Q = He));
      return (
        e &&
          Y.forEach(function (tn) {
            return t(y, tn);
          }),
        he && sn(y, X),
        Z
      );
    }
    function $(y, h, C, T) {
      var Z = K(C);
      if (typeof Z != "function") throw Error(s(150));
      if (((C = Z.call(C)), C == null)) throw Error(s(151));
      for (
        var Q = (Z = null), Y = h, X = (h = 0), He = null, ie = C.next();
        Y !== null && !ie.done;
        X++, ie = C.next()
      ) {
        Y.index > X ? ((He = Y), (Y = null)) : (He = Y.sibling);
        var tn = j(y, Y, ie.value, T);
        if (tn === null) {
          Y === null && (Y = He);
          break;
        }
        e && Y && tn.alternate === null && t(y, Y),
          (h = i(tn, h, X)),
          Q === null ? (Z = tn) : (Q.sibling = tn),
          (Q = tn),
          (Y = He);
      }
      if (ie.done) return n(y, Y), he && sn(y, X), Z;
      if (Y === null) {
        for (; !ie.done; X++, ie = C.next())
          (ie = R(y, ie.value, T)),
            ie !== null &&
              ((h = i(ie, h, X)),
              Q === null ? (Z = ie) : (Q.sibling = ie),
              (Q = ie));
        return he && sn(y, X), Z;
      }
      for (Y = r(y, Y); !ie.done; X++, ie = C.next())
        (ie = O(Y, y, X, ie.value, T)),
          ie !== null &&
            (e &&
              ie.alternate !== null &&
              Y.delete(ie.key === null ? X : ie.key),
            (h = i(ie, h, X)),
            Q === null ? (Z = ie) : (Q.sibling = ie),
            (Q = ie));
      return (
        e &&
          Y.forEach(function (F2) {
            return t(y, F2);
          }),
        he && sn(y, X),
        Z
      );
    }
    function Se(y, h, C, T) {
      if (
        (typeof C == "object" &&
          C !== null &&
          C.type === me &&
          C.key === null &&
          (C = C.props.children),
        typeof C == "object" && C !== null)
      ) {
        switch (C.$$typeof) {
          case se:
            e: {
              for (var Z = C.key, Q = h; Q !== null; ) {
                if (Q.key === Z) {
                  if (((Z = C.type), Z === me)) {
                    if (Q.tag === 7) {
                      n(y, Q.sibling),
                        (h = l(Q, C.props.children)),
                        (h.return = y),
                        (y = h);
                      break e;
                    }
                  } else if (
                    Q.elementType === Z ||
                    (typeof Z == "object" &&
                      Z !== null &&
                      Z.$$typeof === Ue &&
                      As(Z) === Q.type)
                  ) {
                    n(y, Q.sibling),
                      (h = l(Q, C.props)),
                      (h.ref = mr(y, Q, C)),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                  n(y, Q);
                  break;
                } else t(y, Q);
                Q = Q.sibling;
              }
              C.type === me
                ? ((h = vn(C.props.children, y.mode, T, C.key)),
                  (h.return = y),
                  (y = h))
                : ((T = Ol(C.type, C.key, C.props, null, y.mode, T)),
                  (T.ref = mr(y, h, C)),
                  (T.return = y),
                  (y = T));
            }
            return u(y);
          case ye:
            e: {
              for (Q = C.key; h !== null; ) {
                if (h.key === Q)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === C.containerInfo &&
                    h.stateNode.implementation === C.implementation
                  ) {
                    n(y, h.sibling),
                      (h = l(h, C.children || [])),
                      (h.return = y),
                      (y = h);
                    break e;
                  } else {
                    n(y, h);
                    break;
                  }
                else t(y, h);
                h = h.sibling;
              }
              (h = Xo(C, y.mode, T)), (h.return = y), (y = h);
            }
            return u(y);
          case Ue:
            return (Q = C._init), Se(y, h, Q(C._payload), T);
        }
        if (Wn(C)) return U(y, h, C, T);
        if (K(C)) return $(y, h, C, T);
        ml(y, C);
      }
      return (typeof C == "string" && C !== "") || typeof C == "number"
        ? ((C = "" + C),
          h !== null && h.tag === 6
            ? (n(y, h.sibling), (h = l(h, C)), (h.return = y), (y = h))
            : (n(y, h), (h = Ko(C, y.mode, T)), (h.return = y), (y = h)),
          u(y))
        : n(y, h);
    }
    return Se;
  }
  var zn = Us(!0),
    $s = Us(!1),
    vl = Wt(null),
    gl = null,
    Bn = null,
    ro = null;
  function lo() {
    ro = Bn = gl = null;
  }
  function io(e) {
    var t = vl.current;
    de(vl), (e._currentValue = t);
  }
  function oo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Fn(e, t) {
    (gl = e),
      (ro = Bn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Ze = !0), (e.firstContext = null));
  }
  function rt(e) {
    var t = e._currentValue;
    if (ro !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
        if (gl === null) throw Error(s(308));
        (Bn = e), (gl.dependencies = { lanes: 0, firstContext: e });
      } else Bn = Bn.next = e;
    return t;
  }
  var an = null;
  function uo(e) {
    an === null ? (an = [e]) : an.push(e);
  }
  function Ws(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), uo(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Rt(e, r)
    );
  }
  function Rt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Yt = !1;
  function so(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Zs(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Mt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Kt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ne & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Rt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), uo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Rt(e, n)
    );
  }
  function yl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ki(e, n);
    }
  }
  function Qs(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (l = i = u) : (i = i.next = u), (n = n.next);
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Cl(e, t, n, r) {
    var l = e.updateQueue;
    Yt = !1;
    var i = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      f = l.shared.pending;
    if (f !== null) {
      l.shared.pending = null;
      var p = f,
        x = p.next;
      (p.next = null), u === null ? (i = x) : (u.next = x), (u = p);
      var P = e.alternate;
      P !== null &&
        ((P = P.updateQueue),
        (f = P.lastBaseUpdate),
        f !== u &&
          (f === null ? (P.firstBaseUpdate = x) : (f.next = x),
          (P.lastBaseUpdate = p)));
    }
    if (i !== null) {
      var R = l.baseState;
      (u = 0), (P = x = p = null), (f = i);
      do {
        var j = f.lane,
          O = f.eventTime;
        if ((r & j) === j) {
          P !== null &&
            (P = P.next =
              {
                eventTime: O,
                lane: 0,
                tag: f.tag,
                payload: f.payload,
                callback: f.callback,
                next: null,
              });
          e: {
            var U = e,
              $ = f;
            switch (((j = t), (O = n), $.tag)) {
              case 1:
                if (((U = $.payload), typeof U == "function")) {
                  R = U.call(O, R, j);
                  break e;
                }
                R = U;
                break e;
              case 3:
                U.flags = (U.flags & -65537) | 128;
              case 0:
                if (
                  ((U = $.payload),
                  (j = typeof U == "function" ? U.call(O, R, j) : U),
                  j == null)
                )
                  break e;
                R = A({}, R, j);
                break e;
              case 2:
                Yt = !0;
            }
          }
          f.callback !== null &&
            f.lane !== 0 &&
            ((e.flags |= 64),
            (j = l.effects),
            j === null ? (l.effects = [f]) : j.push(f));
        } else
          (O = {
            eventTime: O,
            lane: j,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            P === null ? ((x = P = O), (p = R)) : (P = P.next = O),
            (u |= j);
        if (((f = f.next), f === null)) {
          if (((f = l.shared.pending), f === null)) break;
          (j = f),
            (f = j.next),
            (j.next = null),
            (l.lastBaseUpdate = j),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (P === null && (p = R),
        (l.baseState = p),
        (l.firstBaseUpdate = x),
        (l.lastBaseUpdate = P),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (u |= l.lane), (l = l.next);
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      (dn |= u), (e.lanes = u), (e.memoizedState = R);
    }
  }
  function Ys(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(s(191, l));
          l.call(r);
        }
      }
  }
  var vr = {},
    wt = Wt(vr),
    gr = Wt(vr),
    yr = Wt(vr);
  function cn(e) {
    if (e === vr) throw Error(s(174));
    return e;
  }
  function ao(e, t) {
    switch ((ce(yr, t), ce(gr, e), ce(wt, vr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ci(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ci(t, e));
    }
    de(wt), ce(wt, t);
  }
  function Vn() {
    de(wt), de(gr), de(yr);
  }
  function Ks(e) {
    cn(yr.current);
    var t = cn(wt.current),
      n = ci(t, e.type);
    t !== n && (ce(gr, e), ce(wt, n));
  }
  function co(e) {
    gr.current === e && (de(wt), de(gr));
  }
  var ve = Wt(0);
  function wl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var fo = [];
  function po() {
    for (var e = 0; e < fo.length; e++)
      fo[e]._workInProgressVersionPrimary = null;
    fo.length = 0;
  }
  var xl = ee.ReactCurrentDispatcher,
    ho = ee.ReactCurrentBatchConfig,
    fn = 0,
    ge = null,
    Le = null,
    Re = null,
    kl = !1,
    Cr = !1,
    wr = 0,
    l2 = 0;
  function Ve() {
    throw Error(s(321));
  }
  function mo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!at(e[n], t[n])) return !1;
    return !0;
  }
  function vo(e, t, n, r, l, i) {
    if (
      ((fn = i),
      (ge = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (xl.current = e === null || e.memoizedState === null ? s2 : a2),
      (e = n(r, l)),
      Cr)
    ) {
      i = 0;
      do {
        if (((Cr = !1), (wr = 0), 25 <= i)) throw Error(s(301));
        (i += 1),
          (Re = Le = null),
          (t.updateQueue = null),
          (xl.current = c2),
          (e = n(r, l));
      } while (Cr);
    }
    if (
      ((xl.current = El),
      (t = Le !== null && Le.next !== null),
      (fn = 0),
      (Re = Le = ge = null),
      (kl = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function go() {
    var e = wr !== 0;
    return (wr = 0), e;
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Re === null ? (ge.memoizedState = Re = e) : (Re = Re.next = e), Re;
  }
  function lt() {
    if (Le === null) {
      var e = ge.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = Re === null ? ge.memoizedState : Re.next;
    if (t !== null) (Re = t), (Le = e);
    else {
      if (e === null) throw Error(s(310));
      (Le = e),
        (e = {
          memoizedState: Le.memoizedState,
          baseState: Le.baseState,
          baseQueue: Le.baseQueue,
          queue: Le.queue,
          next: null,
        }),
        Re === null ? (ge.memoizedState = Re = e) : (Re = Re.next = e);
    }
    return Re;
  }
  function xr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function yo(e) {
    var t = lt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Le,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var u = l.next;
        (l.next = i.next), (i.next = u);
      }
      (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
      (i = l.next), (r = r.baseState);
      var f = (u = null),
        p = null,
        x = i;
      do {
        var P = x.lane;
        if ((fn & P) === P)
          p !== null &&
            (p = p.next =
              {
                lane: 0,
                action: x.action,
                hasEagerState: x.hasEagerState,
                eagerState: x.eagerState,
                next: null,
              }),
            (r = x.hasEagerState ? x.eagerState : e(r, x.action));
        else {
          var R = {
            lane: P,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null,
          };
          p === null ? ((f = p = R), (u = r)) : (p = p.next = R),
            (ge.lanes |= P),
            (dn |= P);
        }
        x = x.next;
      } while (x !== null && x !== i);
      p === null ? (u = r) : (p.next = f),
        at(r, t.memoizedState) || (Ze = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = p),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (i = l.lane), (ge.lanes |= i), (dn |= i), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Co(e) {
    var t = lt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do (i = e(i, u.action)), (u = u.next);
      while (u !== l);
      at(i, t.memoizedState) || (Ze = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function Xs() {}
  function Gs(e, t) {
    var n = ge,
      r = lt(),
      l = t(),
      i = !at(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Ze = !0)),
      (r = r.queue),
      wo(bs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (Re !== null && Re.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        kr(9, qs.bind(null, n, r, l, t), void 0, null),
        Me === null)
      )
        throw Error(s(349));
      fn & 30 || Js(n, t, l);
    }
    return l;
  }
  function Js(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ge.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ge.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function qs(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), ea(t) && ta(e);
  }
  function bs(e, t, n) {
    return n(function () {
      ea(t) && ta(e);
    });
  }
  function ea(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !at(e, n);
    } catch {
      return !0;
    }
  }
  function ta(e) {
    var t = Rt(e, 1);
    t !== null && ht(t, e, 1, -1);
  }
  function na(e) {
    var t = xt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = u2.bind(null, ge, e)),
      [t.memoizedState, e]
    );
  }
  function kr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ge.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ge.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ra() {
    return lt().memoizedState;
  }
  function Sl(e, t, n, r) {
    var l = xt();
    (ge.flags |= e),
      (l.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function _l(e, t, n, r) {
    var l = lt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Le !== null) {
      var u = Le.memoizedState;
      if (((i = u.destroy), r !== null && mo(r, u.deps))) {
        l.memoizedState = kr(t, n, i, r);
        return;
      }
    }
    (ge.flags |= e), (l.memoizedState = kr(1 | t, n, i, r));
  }
  function la(e, t) {
    return Sl(8390656, 8, e, t);
  }
  function wo(e, t) {
    return _l(2048, 8, e, t);
  }
  function ia(e, t) {
    return _l(4, 2, e, t);
  }
  function oa(e, t) {
    return _l(4, 4, e, t);
  }
  function ua(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function sa(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), _l(4, 4, ua.bind(null, t, e), n)
    );
  }
  function xo() {}
  function aa(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && mo(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function ca(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && mo(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function fa(e, t, n) {
    return fn & 21
      ? (at(n, t) ||
          ((n = Au()), (ge.lanes |= n), (dn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n));
  }
  function i2(e, t) {
    var n = ue;
    (ue = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = ho.transition;
    ho.transition = {};
    try {
      e(!1), t();
    } finally {
      (ue = n), (ho.transition = r);
    }
  }
  function da() {
    return lt().memoizedState;
  }
  function o2(e, t, n) {
    var r = qt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      pa(e))
    )
      ha(t, n);
    else if (((n = Ws(e, t, n, r)), n !== null)) {
      var l = Ae();
      ht(n, e, r, l), ma(n, t, r);
    }
  }
  function u2(e, t, n) {
    var r = qt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (pa(e)) ha(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var u = t.lastRenderedState,
            f = i(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = f), at(f, u))) {
            var p = t.interleaved;
            p === null
              ? ((l.next = l), uo(t))
              : ((l.next = p.next), (p.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = Ws(e, t, l, r)),
        n !== null && ((l = Ae()), ht(n, e, r, l), ma(n, t, r));
    }
  }
  function pa(e) {
    var t = e.alternate;
    return e === ge || (t !== null && t === ge);
  }
  function ha(e, t) {
    Cr = kl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function ma(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ki(e, n);
    }
  }
  var El = {
      readContext: rt,
      useCallback: Ve,
      useContext: Ve,
      useEffect: Ve,
      useImperativeHandle: Ve,
      useInsertionEffect: Ve,
      useLayoutEffect: Ve,
      useMemo: Ve,
      useReducer: Ve,
      useRef: Ve,
      useState: Ve,
      useDebugValue: Ve,
      useDeferredValue: Ve,
      useTransition: Ve,
      useMutableSource: Ve,
      useSyncExternalStore: Ve,
      useId: Ve,
      unstable_isNewReconciler: !1,
    },
    s2 = {
      readContext: rt,
      useCallback: function (e, t) {
        return (xt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: rt,
      useEffect: la,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Sl(4194308, 4, ua.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Sl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Sl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = xt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = xt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = o2.bind(null, ge, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = xt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: na,
      useDebugValue: xo,
      useDeferredValue: function (e) {
        return (xt().memoizedState = e);
      },
      useTransition: function () {
        var e = na(!1),
          t = e[0];
        return (e = i2.bind(null, e[1])), (xt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ge,
          l = xt();
        if (he) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Me === null)) throw Error(s(349));
          fn & 30 || Js(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          la(bs.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          kr(9, qs.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = xt(),
          t = Me.identifierPrefix;
        if (he) {
          var n = Pt,
            r = Nt;
          (n = (r & ~(1 << (32 - st(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = wr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = l2++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    a2 = {
      readContext: rt,
      useCallback: aa,
      useContext: rt,
      useEffect: wo,
      useImperativeHandle: sa,
      useInsertionEffect: ia,
      useLayoutEffect: oa,
      useMemo: ca,
      useReducer: yo,
      useRef: ra,
      useState: function () {
        return yo(xr);
      },
      useDebugValue: xo,
      useDeferredValue: function (e) {
        var t = lt();
        return fa(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = yo(xr)[0],
          t = lt().memoizedState;
        return [e, t];
      },
      useMutableSource: Xs,
      useSyncExternalStore: Gs,
      useId: da,
      unstable_isNewReconciler: !1,
    },
    c2 = {
      readContext: rt,
      useCallback: aa,
      useContext: rt,
      useEffect: wo,
      useImperativeHandle: sa,
      useInsertionEffect: ia,
      useLayoutEffect: oa,
      useMemo: ca,
      useReducer: Co,
      useRef: ra,
      useState: function () {
        return Co(xr);
      },
      useDebugValue: xo,
      useDeferredValue: function (e) {
        var t = lt();
        return Le === null ? (t.memoizedState = e) : fa(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = Co(xr)[0],
          t = lt().memoizedState;
        return [e, t];
      },
      useMutableSource: Xs,
      useSyncExternalStore: Gs,
      useId: da,
      unstable_isNewReconciler: !1,
    };
  function ft(e, t) {
    if (e && e.defaultProps) {
      (t = A({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ko(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : A({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ll = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? rn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ae(),
        l = qt(e),
        i = Mt(r, l);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = Kt(e, i, l)),
        t !== null && (ht(t, e, l, r), yl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ae(),
        l = qt(e),
        i = Mt(r, l);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Kt(e, i, l)),
        t !== null && (ht(t, e, l, r), yl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ae(),
        r = qt(e),
        l = Mt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Kt(e, l, r)),
        t !== null && (ht(t, e, r, n), yl(t, e, r));
    },
  };
  function va(e, t, n, r, l, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, u)
        : t.prototype && t.prototype.isPureReactComponent
        ? !sr(n, r) || !sr(l, i)
        : !0
    );
  }
  function ga(e, t, n) {
    var r = !1,
      l = Zt,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = rt(i))
        : ((l = We(t) ? on : Fe.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Rn(e, l) : Zt)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ll),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function ya(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Ll.enqueueReplaceState(t, t.state, null);
  }
  function So(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), so(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (l.context = rt(i))
      : ((i = We(t) ? on : Fe.current), (l.context = Rn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (ko(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Ll.enqueueReplaceState(l, l.state, null),
        Cl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Dn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += re(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function _o(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Eo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var f2 = typeof WeakMap == "function" ? WeakMap : Map;
  function Ca(e, t, n) {
    (n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Tl || ((Tl = !0), (Io = r)), Eo(e, t);
      }),
      n
    );
  }
  function wa(e, t, n) {
    (n = Mt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Eo(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          Eo(e, t),
            typeof r != "function" &&
              (Gt === null ? (Gt = new Set([this])) : Gt.add(this));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : "",
          });
        }),
      n
    );
  }
  function xa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new f2();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = E2.bind(null, e, t, n)), t.then(e, e));
  }
  function ka(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Sa(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Mt(-1, 1)), (t.tag = 2), Kt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var d2 = ee.ReactCurrentOwner,
    Ze = !1;
  function Ie(e, t, n, r) {
    t.child = e === null ? $s(t, null, n, r) : zn(t, e.child, n, r);
  }
  function _a(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      Fn(t, l),
      (r = vo(e, t, n, r, i, l)),
      (n = go()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Ht(e, t, l))
        : (he && n && qi(t), (t.flags |= 1), Ie(e, t, r, l), t.child)
    );
  }
  function Ea(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !Yo(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), La(e, t, i, r, l))
        : ((e = Ol(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & l))) {
      var u = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : sr), n(u, r) && e.ref === t.ref)
      )
        return Ht(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = en(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function La(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (sr(i, r) && e.ref === t.ref)
        if (((Ze = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          e.flags & 131072 && (Ze = !0);
        else return (t.lanes = e.lanes), Ht(e, t, l);
    }
    return Lo(e, t, n, r, l);
  }
  function ja(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ce(In, et),
          (et |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ce(In, et),
            (et |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          ce(In, et),
          (et |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ce(In, et),
        (et |= r);
    return Ie(e, t, l, n), t.child;
  }
  function Na(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Lo(e, t, n, r, l) {
    var i = We(n) ? on : Fe.current;
    return (
      (i = Rn(t, i)),
      Fn(t, l),
      (n = vo(e, t, n, r, i, l)),
      (r = go()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Ht(e, t, l))
        : (he && r && qi(t), (t.flags |= 1), Ie(e, t, n, l), t.child)
    );
  }
  function Pa(e, t, n, r, l) {
    if (We(n)) {
      var i = !0;
      cl(t);
    } else i = !1;
    if ((Fn(t, l), t.stateNode === null))
      Nl(e, t), ga(t, n, r), So(t, n, r, l), (r = !0);
    else if (e === null) {
      var u = t.stateNode,
        f = t.memoizedProps;
      u.props = f;
      var p = u.context,
        x = n.contextType;
      typeof x == "object" && x !== null
        ? (x = rt(x))
        : ((x = We(n) ? on : Fe.current), (x = Rn(t, x)));
      var P = n.getDerivedStateFromProps,
        R =
          typeof P == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function";
      R ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((f !== r || p !== x) && ya(t, u, r, x)),
        (Yt = !1);
      var j = t.memoizedState;
      (u.state = j),
        Cl(t, r, u, l),
        (p = t.memoizedState),
        f !== r || j !== p || $e.current || Yt
          ? (typeof P == "function" && (ko(t, n, P, r), (p = t.memoizedState)),
            (f = Yt || va(t, n, f, r, j, p, x))
              ? (R ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (u.props = r),
            (u.state = p),
            (u.context = x),
            (r = f))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (u = t.stateNode),
        Zs(e, t),
        (f = t.memoizedProps),
        (x = t.type === t.elementType ? f : ft(t.type, f)),
        (u.props = x),
        (R = t.pendingProps),
        (j = u.context),
        (p = n.contextType),
        typeof p == "object" && p !== null
          ? (p = rt(p))
          : ((p = We(n) ? on : Fe.current), (p = Rn(t, p)));
      var O = n.getDerivedStateFromProps;
      (P =
        typeof O == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((f !== R || j !== p) && ya(t, u, r, p)),
        (Yt = !1),
        (j = t.memoizedState),
        (u.state = j),
        Cl(t, r, u, l);
      var U = t.memoizedState;
      f !== R || j !== U || $e.current || Yt
        ? (typeof O == "function" && (ko(t, n, O, r), (U = t.memoizedState)),
          (x = Yt || va(t, n, x, r, j, U, p) || !1)
            ? (P ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(r, U, p),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, U, p)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (f === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (f === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = U)),
          (u.props = r),
          (u.state = U),
          (u.context = p),
          (r = x))
        : (typeof u.componentDidUpdate != "function" ||
            (f === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (f === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return jo(e, t, n, r, i, l);
  }
  function jo(e, t, n, r, l, i) {
    Na(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && zs(t, n, !1), Ht(e, t, i);
    (r = t.stateNode), (d2.current = t);
    var f =
      u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = zn(t, e.child, null, i)), (t.child = zn(t, null, f, i)))
        : Ie(e, t, f, i),
      (t.memoizedState = r.state),
      l && zs(t, n, !0),
      t.child
    );
  }
  function Ra(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Hs(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Hs(e, t.context, !1),
      ao(e, t.containerInfo);
  }
  function Ma(e, t, n, r, l) {
    return Tn(), no(l), (t.flags |= 256), Ie(e, t, n, r), t.child;
  }
  var No = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Po(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ha(e, t, n) {
    var r = t.pendingProps,
      l = ve.current,
      i = !1,
      u = (t.flags & 128) !== 0,
      f;
    if (
      ((f = u) ||
        (f = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      f
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ce(ve, l & 1),
      e === null)
    )
      return (
        to(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((u = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (u = { mode: "hidden", children: u }),
                !(r & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = u))
                  : (i = Il(u, r, 0, null)),
                (e = vn(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = Po(n)),
                (t.memoizedState = No),
                e)
              : Ro(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((f = l.dehydrated), f !== null)))
      return p2(e, t, u, r, f, l, n);
    if (i) {
      (i = r.fallback), (u = t.mode), (l = e.child), (f = l.sibling);
      var p = { mode: "hidden", children: r.children };
      return (
        !(u & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = p),
            (t.deletions = null))
          : ((r = en(l, p)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        f !== null ? (i = en(f, i)) : ((i = vn(i, u, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? Po(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (i.memoizedState = u),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = No),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = en(i, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Ro(e, t) {
    return (
      (t = Il({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function jl(e, t, n, r) {
    return (
      r !== null && no(r),
      zn(t, e.child, null, n),
      (e = Ro(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function p2(e, t, n, r, l, i, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = _o(Error(s(422)))), jl(e, t, u, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = Il({ mode: "visible", children: r.children }, l, 0, null)),
          (i = vn(i, l, u, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && zn(t, e.child, null, u),
          (t.child.memoizedState = Po(u)),
          (t.memoizedState = No),
          i);
    if (!(t.mode & 1)) return jl(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var f = r.dgst;
      return (
        (r = f), (i = Error(s(419))), (r = _o(i, r, void 0)), jl(e, t, u, r)
      );
    }
    if (((f = (u & e.childLanes) !== 0), Ze || f)) {
      if (((r = Me), r !== null)) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | u) ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), Rt(e, l), ht(r, e, l, -1));
      }
      return Qo(), (r = _o(Error(s(421)))), jl(e, t, u, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = L2.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (be = $t(l.nextSibling)),
        (qe = t),
        (he = !0),
        (ct = null),
        e !== null &&
          ((tt[nt++] = Nt),
          (tt[nt++] = Pt),
          (tt[nt++] = un),
          (Nt = e.id),
          (Pt = e.overflow),
          (un = t)),
        (t = Ro(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ta(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), oo(e.return, t, n);
  }
  function Mo(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function za(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Ie(e, t, r.children, n), (r = ve.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ta(e, n, t);
          else if (e.tag === 19) Ta(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((ce(ve, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && wl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Mo(t, !1, l, n, i);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && wl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          Mo(t, !0, n, null, i);
          break;
        case "together":
          Mo(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Nl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ht(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (dn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = en(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function h2(e, t, n) {
    switch (t.tag) {
      case 3:
        Ra(t), Tn();
        break;
      case 5:
        Ks(t);
        break;
      case 1:
        We(t.type) && cl(t);
        break;
      case 4:
        ao(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        ce(vl, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ce(ve, ve.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Ha(e, t, n)
            : (ce(ve, ve.current & 1),
              (e = Ht(e, t, n)),
              e !== null ? e.sibling : null);
        ce(ve, ve.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return za(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ce(ve, ve.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), ja(e, t, n);
    }
    return Ht(e, t, n);
  }
  var Ba, Ho, Fa, Va;
  (Ba = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Ho = function () {}),
    (Fa = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), cn(wt.current);
        var i = null;
        switch (n) {
          case "input":
            (l = oi(e, l)), (r = oi(e, r)), (i = []);
            break;
          case "select":
            (l = A({}, l, { value: void 0 })),
              (r = A({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (l = ai(e, l)), (r = ai(e, r)), (i = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = ul);
        }
        fi(n, r);
        var u;
        n = null;
        for (x in l)
          if (!r.hasOwnProperty(x) && l.hasOwnProperty(x) && l[x] != null)
            if (x === "style") {
              var f = l[x];
              for (u in f) f.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              x !== "dangerouslySetInnerHTML" &&
                x !== "children" &&
                x !== "suppressContentEditableWarning" &&
                x !== "suppressHydrationWarning" &&
                x !== "autoFocus" &&
                (d.hasOwnProperty(x)
                  ? i || (i = [])
                  : (i = i || []).push(x, null));
        for (x in r) {
          var p = r[x];
          if (
            ((f = l != null ? l[x] : void 0),
            r.hasOwnProperty(x) && p !== f && (p != null || f != null))
          )
            if (x === "style")
              if (f) {
                for (u in f)
                  !f.hasOwnProperty(u) ||
                    (p && p.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in p)
                  p.hasOwnProperty(u) &&
                    f[u] !== p[u] &&
                    (n || (n = {}), (n[u] = p[u]));
              } else n || (i || (i = []), i.push(x, n)), (n = p);
            else
              x === "dangerouslySetInnerHTML"
                ? ((p = p ? p.__html : void 0),
                  (f = f ? f.__html : void 0),
                  p != null && f !== p && (i = i || []).push(x, p))
                : x === "children"
                ? (typeof p != "string" && typeof p != "number") ||
                  (i = i || []).push(x, "" + p)
                : x !== "suppressContentEditableWarning" &&
                  x !== "suppressHydrationWarning" &&
                  (d.hasOwnProperty(x)
                    ? (p != null && x === "onScroll" && fe("scroll", e),
                      i || f === p || (i = []))
                    : (i = i || []).push(x, p));
        }
        n && (i = i || []).push("style", n);
        var x = i;
        (t.updateQueue = x) && (t.flags |= 4);
      }
    }),
    (Va = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Sr(e, t) {
    if (!he)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function De(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function m2(e, t, n) {
    var r = t.pendingProps;
    switch ((bi(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return De(t), null;
      case 1:
        return We(t.type) && al(), De(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Vn(),
          de($e),
          de(Fe),
          po(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (hl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), ct !== null && ($o(ct), (ct = null)))),
          Ho(e, t),
          De(t),
          null
        );
      case 5:
        co(t);
        var l = cn(yr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Fa(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return De(t), null;
          }
          if (((e = cn(wt.current)), hl(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[Ct] = t), (r[pr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                fe("cancel", r), fe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < cr.length; l++) fe(cr[l], r);
                break;
              case "source":
                fe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", r), fe("load", r);
                break;
              case "details":
                fe("toggle", r);
                break;
              case "input":
                gu(r, i), fe("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  fe("invalid", r);
                break;
              case "textarea":
                wu(r, i), fe("invalid", r);
            }
            fi(n, i), (l = null);
            for (var u in i)
              if (i.hasOwnProperty(u)) {
                var f = i[u];
                u === "children"
                  ? typeof f == "string"
                    ? r.textContent !== f &&
                      (i.suppressHydrationWarning !== !0 &&
                        ol(r.textContent, f, e),
                      (l = ["children", f]))
                    : typeof f == "number" &&
                      r.textContent !== "" + f &&
                      (i.suppressHydrationWarning !== !0 &&
                        ol(r.textContent, f, e),
                      (l = ["children", "" + f]))
                  : d.hasOwnProperty(u) &&
                    f != null &&
                    u === "onScroll" &&
                    fe("scroll", r);
              }
            switch (n) {
              case "input":
                Vr(r), Cu(r, i, !0);
                break;
              case "textarea":
                Vr(r), ku(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = ul);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Su(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = u.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = u.createElement(n, { is: r.is }))
                  : ((e = u.createElement(n)),
                    n === "select" &&
                      ((u = e),
                      r.multiple
                        ? (u.multiple = !0)
                        : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[Ct] = t),
              (e[pr] = r),
              Ba(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((u = di(n, r)), n)) {
                case "dialog":
                  fe("cancel", e), fe("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  fe("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < cr.length; l++) fe(cr[l], e);
                  l = r;
                  break;
                case "source":
                  fe("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  fe("error", e), fe("load", e), (l = r);
                  break;
                case "details":
                  fe("toggle", e), (l = r);
                  break;
                case "input":
                  gu(e, r), (l = oi(e, r)), fe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = A({}, r, { value: void 0 })),
                    fe("invalid", e);
                  break;
                case "textarea":
                  wu(e, r), (l = ai(e, r)), fe("invalid", e);
                  break;
                default:
                  l = r;
              }
              fi(n, l), (f = l);
              for (i in f)
                if (f.hasOwnProperty(i)) {
                  var p = f[i];
                  i === "style"
                    ? Lu(e, p)
                    : i === "dangerouslySetInnerHTML"
                    ? ((p = p ? p.__html : void 0), p != null && _u(e, p))
                    : i === "children"
                    ? typeof p == "string"
                      ? (n !== "textarea" || p !== "") && Zn(e, p)
                      : typeof p == "number" && Zn(e, "" + p)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (d.hasOwnProperty(i)
                        ? p != null && i === "onScroll" && fe("scroll", e)
                        : p != null && J(e, i, p, u));
                }
              switch (n) {
                case "input":
                  Vr(e), Cu(e, r, !1);
                  break;
                case "textarea":
                  Vr(e), ku(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + oe(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? yn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        yn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = ul);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return De(t), null;
      case 6:
        if (e && t.stateNode != null) Va(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (((n = cn(yr.current)), cn(wt.current), hl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Ct] = t),
              (i = r.nodeValue !== n) && ((e = qe), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ol(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ol(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Ct] = t),
              (t.stateNode = r);
        }
        return De(t), null;
      case 13:
        if (
          (de(ve),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (he && be !== null && t.mode & 1 && !(t.flags & 128))
            Is(), Tn(), (t.flags |= 98560), (i = !1);
          else if (((i = hl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(s(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(s(317));
              i[Ct] = t;
            } else
              Tn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            De(t), (i = !1);
          } else ct !== null && ($o(ct), (ct = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ve.current & 1 ? je === 0 && (je = 3) : Qo())),
            t.updateQueue !== null && (t.flags |= 4),
            De(t),
            null);
      case 4:
        return (
          Vn(),
          Ho(e, t),
          e === null && fr(t.stateNode.containerInfo),
          De(t),
          null
        );
      case 10:
        return io(t.type._context), De(t), null;
      case 17:
        return We(t.type) && al(), De(t), null;
      case 19:
        if ((de(ve), (i = t.memoizedState), i === null)) return De(t), null;
        if (((r = (t.flags & 128) !== 0), (u = i.rendering), u === null))
          if (r) Sr(i, !1);
          else {
            if (je !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((u = wl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Sr(i, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (u = i.alternate),
                      u === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = u.childLanes),
                          (i.lanes = u.lanes),
                          (i.child = u.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = u.memoizedProps),
                          (i.memoizedState = u.memoizedState),
                          (i.updateQueue = u.updateQueue),
                          (i.type = u.type),
                          (e = u.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return ce(ve, (ve.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              ke() > An &&
              ((t.flags |= 128), (r = !0), Sr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = wl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Sr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !u.alternate &&
                  !he)
              )
                return De(t), null;
            } else
              2 * ke() - i.renderingStartTime > An &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Sr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = i.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (i.last = u));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ke()),
            (t.sibling = null),
            (n = ve.current),
            ce(ve, r ? (n & 1) | 2 : n & 1),
            t)
          : (De(t), null);
      case 22:
      case 23:
        return (
          Zo(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? et & 1073741824 &&
              (De(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : De(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function v2(e, t) {
    switch ((bi(t), t.tag)) {
      case 1:
        return (
          We(t.type) && al(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Vn(),
          de($e),
          de(Fe),
          po(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return co(t), null;
      case 13:
        if (
          (de(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Tn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return de(ve), null;
      case 4:
        return Vn(), null;
      case 10:
        return io(t.type._context), null;
      case 22:
      case 23:
        return Zo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Pl = !1,
    Oe = !1,
    g2 = typeof WeakSet == "function" ? WeakSet : Set,
    I = null;
  function On(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          xe(e, t, r);
        }
      else n.current = null;
  }
  function To(e, t, n) {
    try {
      n();
    } catch (r) {
      xe(e, t, r);
    }
  }
  var Da = !1;
  function y2(e, t) {
    if (((Wi = Xr), (e = vs()), Fi(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              f = -1,
              p = -1,
              x = 0,
              P = 0,
              R = e,
              j = null;
            t: for (;;) {
              for (
                var O;
                R !== n || (l !== 0 && R.nodeType !== 3) || (f = u + l),
                  R !== i || (r !== 0 && R.nodeType !== 3) || (p = u + r),
                  R.nodeType === 3 && (u += R.nodeValue.length),
                  (O = R.firstChild) !== null;

              )
                (j = R), (R = O);
              for (;;) {
                if (R === e) break t;
                if (
                  (j === n && ++x === l && (f = u),
                  j === i && ++P === r && (p = u),
                  (O = R.nextSibling) !== null)
                )
                  break;
                (R = j), (j = R.parentNode);
              }
              R = O;
            }
            n = f === -1 || p === -1 ? null : { start: f, end: p };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Zi = { focusedElem: e, selectionRange: n }, Xr = !1, I = t;
      I !== null;

    )
      if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (I = e);
      else
        for (; I !== null; ) {
          t = I;
          try {
            var U = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (U !== null) {
                    var $ = U.memoizedProps,
                      Se = U.memoizedState,
                      y = t.stateNode,
                      h = y.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? $ : ft(t.type, $),
                        Se
                      );
                    y.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var C = t.stateNode.containerInfo;
                  C.nodeType === 1
                    ? (C.textContent = "")
                    : C.nodeType === 9 &&
                      C.documentElement &&
                      C.removeChild(C.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (T) {
            xe(t, t.return, T);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (I = e);
            break;
          }
          I = t.return;
        }
    return (U = Da), (Da = !1), U;
  }
  function _r(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          (l.destroy = void 0), i !== void 0 && To(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Rl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function zo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Oa(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Oa(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Ct],
          delete t[pr],
          delete t[Xi],
          delete t[e2],
          delete t[t2])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Ia(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Aa(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ia(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Bo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ul));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Bo(e, t, n), e = e.sibling; e !== null; )
        Bo(e, t, n), (e = e.sibling);
  }
  function Fo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Fo(e, t, n), e = e.sibling; e !== null; )
        Fo(e, t, n), (e = e.sibling);
  }
  var ze = null,
    dt = !1;
  function Xt(e, t, n) {
    for (n = n.child; n !== null; ) Ua(e, t, n), (n = n.sibling);
  }
  function Ua(e, t, n) {
    if (yt && typeof yt.onCommitFiberUnmount == "function")
      try {
        yt.onCommitFiberUnmount($r, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Oe || On(n, t);
      case 6:
        var r = ze,
          l = dt;
        (ze = null),
          Xt(e, t, n),
          (ze = r),
          (dt = l),
          ze !== null &&
            (dt
              ? ((e = ze),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ze.removeChild(n.stateNode));
        break;
      case 18:
        ze !== null &&
          (dt
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8
                ? Ki(e.parentNode, n)
                : e.nodeType === 1 && Ki(e, n),
              nr(e))
            : Ki(ze, n.stateNode));
        break;
      case 4:
        (r = ze),
          (l = dt),
          (ze = n.stateNode.containerInfo),
          (dt = !0),
          Xt(e, t, n),
          (ze = r),
          (dt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Oe &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              u = i.destroy;
            (i = i.tag),
              u !== void 0 && (i & 2 || i & 4) && To(n, t, u),
              (l = l.next);
          } while (l !== r);
        }
        Xt(e, t, n);
        break;
      case 1:
        if (
          !Oe &&
          (On(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (f) {
            xe(n, t, f);
          }
        Xt(e, t, n);
        break;
      case 21:
        Xt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Oe = (r = Oe) || n.memoizedState !== null), Xt(e, t, n), (Oe = r))
          : Xt(e, t, n);
        break;
      default:
        Xt(e, t, n);
    }
  }
  function $a(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new g2()),
        t.forEach(function (r) {
          var l = j2.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function pt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            u = t,
            f = u;
          e: for (; f !== null; ) {
            switch (f.tag) {
              case 5:
                (ze = f.stateNode), (dt = !1);
                break e;
              case 3:
                (ze = f.stateNode.containerInfo), (dt = !0);
                break e;
              case 4:
                (ze = f.stateNode.containerInfo), (dt = !0);
                break e;
            }
            f = f.return;
          }
          if (ze === null) throw Error(s(160));
          Ua(i, u, l), (ze = null), (dt = !1);
          var p = l.alternate;
          p !== null && (p.return = null), (l.return = null);
        } catch (x) {
          xe(l, t, x);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Wa(t, e), (t = t.sibling);
  }
  function Wa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((pt(t, e), kt(e), r & 4)) {
          try {
            _r(3, e, e.return), Rl(3, e);
          } catch ($) {
            xe(e, e.return, $);
          }
          try {
            _r(5, e, e.return);
          } catch ($) {
            xe(e, e.return, $);
          }
        }
        break;
      case 1:
        pt(t, e), kt(e), r & 512 && n !== null && On(n, n.return);
        break;
      case 5:
        if (
          (pt(t, e),
          kt(e),
          r & 512 && n !== null && On(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Zn(l, "");
          } catch ($) {
            xe(e, e.return, $);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            u = n !== null ? n.memoizedProps : i,
            f = e.type,
            p = e.updateQueue;
          if (((e.updateQueue = null), p !== null))
            try {
              f === "input" && i.type === "radio" && i.name != null && yu(l, i),
                di(f, u);
              var x = di(f, i);
              for (u = 0; u < p.length; u += 2) {
                var P = p[u],
                  R = p[u + 1];
                P === "style"
                  ? Lu(l, R)
                  : P === "dangerouslySetInnerHTML"
                  ? _u(l, R)
                  : P === "children"
                  ? Zn(l, R)
                  : J(l, P, R, x);
              }
              switch (f) {
                case "input":
                  ui(l, i);
                  break;
                case "textarea":
                  xu(l, i);
                  break;
                case "select":
                  var j = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var O = i.value;
                  O != null
                    ? yn(l, !!i.multiple, O, !1)
                    : j !== !!i.multiple &&
                      (i.defaultValue != null
                        ? yn(l, !!i.multiple, i.defaultValue, !0)
                        : yn(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[pr] = i;
            } catch ($) {
              xe(e, e.return, $);
            }
        }
        break;
      case 6:
        if ((pt(t, e), kt(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (l = e.stateNode), (i = e.memoizedProps);
          try {
            l.nodeValue = i;
          } catch ($) {
            xe(e, e.return, $);
          }
        }
        break;
      case 3:
        if (
          (pt(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            nr(t.containerInfo);
          } catch ($) {
            xe(e, e.return, $);
          }
        break;
      case 4:
        pt(t, e), kt(e);
        break;
      case 13:
        pt(t, e),
          kt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Oo = ke())),
          r & 4 && $a(e);
        break;
      case 22:
        if (
          ((P = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Oe = (x = Oe) || P), pt(t, e), (Oe = x)) : pt(t, e),
          kt(e),
          r & 8192)
        ) {
          if (
            ((x = e.memoizedState !== null),
            (e.stateNode.isHidden = x) && !P && e.mode & 1)
          )
            for (I = e, P = e.child; P !== null; ) {
              for (R = I = P; I !== null; ) {
                switch (((j = I), (O = j.child), j.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    _r(4, j, j.return);
                    break;
                  case 1:
                    On(j, j.return);
                    var U = j.stateNode;
                    if (typeof U.componentWillUnmount == "function") {
                      (r = j), (n = j.return);
                      try {
                        (t = r),
                          (U.props = t.memoizedProps),
                          (U.state = t.memoizedState),
                          U.componentWillUnmount();
                      } catch ($) {
                        xe(r, n, $);
                      }
                    }
                    break;
                  case 5:
                    On(j, j.return);
                    break;
                  case 22:
                    if (j.memoizedState !== null) {
                      Ya(R);
                      continue;
                    }
                }
                O !== null ? ((O.return = j), (I = O)) : Ya(R);
              }
              P = P.sibling;
            }
          e: for (P = null, R = e; ; ) {
            if (R.tag === 5) {
              if (P === null) {
                P = R;
                try {
                  (l = R.stateNode),
                    x
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((f = R.stateNode),
                        (p = R.memoizedProps.style),
                        (u =
                          p != null && p.hasOwnProperty("display")
                            ? p.display
                            : null),
                        (f.style.display = Eu("display", u)));
                } catch ($) {
                  xe(e, e.return, $);
                }
              }
            } else if (R.tag === 6) {
              if (P === null)
                try {
                  R.stateNode.nodeValue = x ? "" : R.memoizedProps;
                } catch ($) {
                  xe(e, e.return, $);
                }
            } else if (
              ((R.tag !== 22 && R.tag !== 23) ||
                R.memoizedState === null ||
                R === e) &&
              R.child !== null
            ) {
              (R.child.return = R), (R = R.child);
              continue;
            }
            if (R === e) break e;
            for (; R.sibling === null; ) {
              if (R.return === null || R.return === e) break e;
              P === R && (P = null), (R = R.return);
            }
            P === R && (P = null),
              (R.sibling.return = R.return),
              (R = R.sibling);
          }
        }
        break;
      case 19:
        pt(t, e), kt(e), r & 4 && $a(e);
        break;
      case 21:
        break;
      default:
        pt(t, e), kt(e);
    }
  }
  function kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ia(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Zn(l, ""), (r.flags &= -33));
            var i = Aa(e);
            Fo(e, i, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              f = Aa(e);
            Bo(e, f, u);
            break;
          default:
            throw Error(s(161));
        }
      } catch (p) {
        xe(e, e.return, p);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function C2(e, t, n) {
    (I = e), Za(e);
  }
  function Za(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null; ) {
      var l = I,
        i = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || Pl;
        if (!u) {
          var f = l.alternate,
            p = (f !== null && f.memoizedState !== null) || Oe;
          f = Pl;
          var x = Oe;
          if (((Pl = u), (Oe = p) && !x))
            for (I = l; I !== null; )
              (u = I),
                (p = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? Ka(l)
                  : p !== null
                  ? ((p.return = u), (I = p))
                  : Ka(l);
          for (; i !== null; ) (I = i), Za(i), (i = i.sibling);
          (I = l), (Pl = f), (Oe = x);
        }
        Qa(e);
      } else
        l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (I = i)) : Qa(e);
    }
  }
  function Qa(e) {
    for (; I !== null; ) {
      var t = I;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Oe || Rl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Oe)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ft(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var i = t.updateQueue;
                i !== null && Ys(t, i, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Ys(t, u, n);
                }
                break;
              case 5:
                var f = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = f;
                  var p = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      p.autoFocus && n.focus();
                      break;
                    case "img":
                      p.src && (n.src = p.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var x = t.alternate;
                  if (x !== null) {
                    var P = x.memoizedState;
                    if (P !== null) {
                      var R = P.dehydrated;
                      R !== null && nr(R);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          Oe || (t.flags & 512 && zo(t));
        } catch (j) {
          xe(t, t.return, j);
        }
      }
      if (t === e) {
        I = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (I = n);
        break;
      }
      I = t.return;
    }
  }
  function Ya(e) {
    for (; I !== null; ) {
      var t = I;
      if (t === e) {
        I = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (I = n);
        break;
      }
      I = t.return;
    }
  }
  function Ka(e) {
    for (; I !== null; ) {
      var t = I;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Rl(4, t);
            } catch (p) {
              xe(t, n, p);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (p) {
                xe(t, l, p);
              }
            }
            var i = t.return;
            try {
              zo(t);
            } catch (p) {
              xe(t, i, p);
            }
            break;
          case 5:
            var u = t.return;
            try {
              zo(t);
            } catch (p) {
              xe(t, u, p);
            }
        }
      } catch (p) {
        xe(t, t.return, p);
      }
      if (t === e) {
        I = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        (f.return = t.return), (I = f);
        break;
      }
      I = t.return;
    }
  }
  var w2 = Math.ceil,
    Ml = ee.ReactCurrentDispatcher,
    Vo = ee.ReactCurrentOwner,
    it = ee.ReactCurrentBatchConfig,
    ne = 0,
    Me = null,
    Ee = null,
    Be = 0,
    et = 0,
    In = Wt(0),
    je = 0,
    Er = null,
    dn = 0,
    Hl = 0,
    Do = 0,
    Lr = null,
    Qe = null,
    Oo = 0,
    An = 1 / 0,
    Tt = null,
    Tl = !1,
    Io = null,
    Gt = null,
    zl = !1,
    Jt = null,
    Bl = 0,
    jr = 0,
    Ao = null,
    Fl = -1,
    Vl = 0;
  function Ae() {
    return ne & 6 ? ke() : Fl !== -1 ? Fl : (Fl = ke());
  }
  function qt(e) {
    return e.mode & 1
      ? ne & 2 && Be !== 0
        ? Be & -Be
        : r2.transition !== null
        ? (Vl === 0 && (Vl = Au()), Vl)
        : ((e = ue),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Gu(e.type))),
          e)
      : 1;
  }
  function ht(e, t, n, r) {
    if (50 < jr) throw ((jr = 0), (Ao = null), Error(s(185)));
    Jn(e, n, r),
      (!(ne & 2) || e !== Me) &&
        (e === Me && (!(ne & 2) && (Hl |= n), je === 4 && bt(e, Be)),
        Ye(e, r),
        n === 1 &&
          ne === 0 &&
          !(t.mode & 1) &&
          ((An = ke() + 500), fl && Qt()));
  }
  function Ye(e, t) {
    var n = e.callbackNode;
    rc(e, t);
    var r = Qr(e, e === Me ? Be : 0);
    if (r === 0)
      n !== null && Du(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Du(n), t === 1))
        e.tag === 0 ? n2(Ga.bind(null, e)) : Bs(Ga.bind(null, e)),
          qc(function () {
            !(ne & 6) && Qt();
          }),
          (n = null);
      else {
        switch (Uu(r)) {
          case 1:
            n = Ci;
            break;
          case 4:
            n = Ou;
            break;
          case 16:
            n = Ur;
            break;
          case 536870912:
            n = Iu;
            break;
          default:
            n = Ur;
        }
        n = l1(n, Xa.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Xa(e, t) {
    if (((Fl = -1), (Vl = 0), ne & 6)) throw Error(s(327));
    var n = e.callbackNode;
    if (Un() && e.callbackNode !== n) return null;
    var r = Qr(e, e === Me ? Be : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Dl(e, r);
    else {
      t = r;
      var l = ne;
      ne |= 2;
      var i = qa();
      (Me !== e || Be !== t) && ((Tt = null), (An = ke() + 500), hn(e, t));
      do
        try {
          S2();
          break;
        } catch (f) {
          Ja(e, f);
        }
      while (!0);
      lo(),
        (Ml.current = i),
        (ne = l),
        Ee !== null ? (t = 0) : ((Me = null), (Be = 0), (t = je));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = wi(e)), l !== 0 && ((r = l), (t = Uo(e, l)))),
        t === 1)
      )
        throw ((n = Er), hn(e, 0), bt(e, r), Ye(e, ke()), n);
      if (t === 6) bt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !x2(l) &&
            ((t = Dl(e, r)),
            t === 2 && ((i = wi(e)), i !== 0 && ((r = i), (t = Uo(e, i)))),
            t === 1))
        )
          throw ((n = Er), hn(e, 0), bt(e, r), Ye(e, ke()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            mn(e, Qe, Tt);
            break;
          case 3:
            if (
              (bt(e, r),
              (r & 130023424) === r && ((t = Oo + 500 - ke()), 10 < t))
            ) {
              if (Qr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Ae(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Yi(mn.bind(null, e, Qe, Tt), t);
              break;
            }
            mn(e, Qe, Tt);
            break;
          case 4:
            if ((bt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - st(r);
              (i = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~i);
            }
            if (
              ((r = l),
              (r = ke() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * w2(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Yi(mn.bind(null, e, Qe, Tt), r);
              break;
            }
            mn(e, Qe, Tt);
            break;
          case 5:
            mn(e, Qe, Tt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return Ye(e, ke()), e.callbackNode === n ? Xa.bind(null, e) : null;
  }
  function Uo(e, t) {
    var n = Lr;
    return (
      e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
      (e = Dl(e, t)),
      e !== 2 && ((t = Qe), (Qe = n), t !== null && $o(t)),
      e
    );
  }
  function $o(e) {
    Qe === null ? (Qe = e) : Qe.push.apply(Qe, e);
  }
  function x2(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!at(i(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function bt(e, t) {
    for (
      t &= ~Do,
        t &= ~Hl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - st(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Ga(e) {
    if (ne & 6) throw Error(s(327));
    Un();
    var t = Qr(e, 0);
    if (!(t & 1)) return Ye(e, ke()), null;
    var n = Dl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = wi(e);
      r !== 0 && ((t = r), (n = Uo(e, r)));
    }
    if (n === 1) throw ((n = Er), hn(e, 0), bt(e, t), Ye(e, ke()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      mn(e, Qe, Tt),
      Ye(e, ke()),
      null
    );
  }
  function Wo(e, t) {
    var n = ne;
    ne |= 1;
    try {
      return e(t);
    } finally {
      (ne = n), ne === 0 && ((An = ke() + 500), fl && Qt());
    }
  }
  function pn(e) {
    Jt !== null && Jt.tag === 0 && !(ne & 6) && Un();
    var t = ne;
    ne |= 1;
    var n = it.transition,
      r = ue;
    try {
      if (((it.transition = null), (ue = 1), e)) return e();
    } finally {
      (ue = r), (it.transition = n), (ne = t), !(ne & 6) && Qt();
    }
  }
  function Zo() {
    (et = In.current), de(In);
  }
  function hn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Jc(n)), Ee !== null))
      for (n = Ee.return; n !== null; ) {
        var r = n;
        switch ((bi(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && al();
            break;
          case 3:
            Vn(), de($e), de(Fe), po();
            break;
          case 5:
            co(r);
            break;
          case 4:
            Vn();
            break;
          case 13:
            de(ve);
            break;
          case 19:
            de(ve);
            break;
          case 10:
            io(r.type._context);
            break;
          case 22:
          case 23:
            Zo();
        }
        n = n.return;
      }
    if (
      ((Me = e),
      (Ee = e = en(e.current, null)),
      (Be = et = t),
      (je = 0),
      (Er = null),
      (Do = Hl = dn = 0),
      (Qe = Lr = null),
      an !== null)
    ) {
      for (t = 0; t < an.length; t++)
        if (((n = an[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var u = i.next;
            (i.next = l), (r.next = u);
          }
          n.pending = r;
        }
      an = null;
    }
    return e;
  }
  function Ja(e, t) {
    do {
      var n = Ee;
      try {
        if ((lo(), (xl.current = El), kl)) {
          for (var r = ge.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          kl = !1;
        }
        if (
          ((fn = 0),
          (Re = Le = ge = null),
          (Cr = !1),
          (wr = 0),
          (Vo.current = null),
          n === null || n.return === null)
        ) {
          (je = 1), (Er = t), (Ee = null);
          break;
        }
        e: {
          var i = e,
            u = n.return,
            f = n,
            p = t;
          if (
            ((t = Be),
            (f.flags |= 32768),
            p !== null && typeof p == "object" && typeof p.then == "function")
          ) {
            var x = p,
              P = f,
              R = P.tag;
            if (!(P.mode & 1) && (R === 0 || R === 11 || R === 15)) {
              var j = P.alternate;
              j
                ? ((P.updateQueue = j.updateQueue),
                  (P.memoizedState = j.memoizedState),
                  (P.lanes = j.lanes))
                : ((P.updateQueue = null), (P.memoizedState = null));
            }
            var O = ka(u);
            if (O !== null) {
              (O.flags &= -257),
                Sa(O, u, f, i, t),
                O.mode & 1 && xa(i, x, t),
                (t = O),
                (p = x);
              var U = t.updateQueue;
              if (U === null) {
                var $ = new Set();
                $.add(p), (t.updateQueue = $);
              } else U.add(p);
              break e;
            } else {
              if (!(t & 1)) {
                xa(i, x, t), Qo();
                break e;
              }
              p = Error(s(426));
            }
          } else if (he && f.mode & 1) {
            var Se = ka(u);
            if (Se !== null) {
              !(Se.flags & 65536) && (Se.flags |= 256),
                Sa(Se, u, f, i, t),
                no(Dn(p, f));
              break e;
            }
          }
          (i = p = Dn(p, f)),
            je !== 4 && (je = 2),
            Lr === null ? (Lr = [i]) : Lr.push(i),
            (i = u);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = Ca(i, p, t);
                Qs(i, y);
                break e;
              case 1:
                f = p;
                var h = i.type,
                  C = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof h.getDerivedStateFromError == "function" ||
                    (C !== null &&
                      typeof C.componentDidCatch == "function" &&
                      (Gt === null || !Gt.has(C))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var T = wa(i, f, t);
                  Qs(i, T);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        e1(n);
      } catch (Z) {
        (t = Z), Ee === n && n !== null && (Ee = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function qa() {
    var e = Ml.current;
    return (Ml.current = El), e === null ? El : e;
  }
  function Qo() {
    (je === 0 || je === 3 || je === 2) && (je = 4),
      Me === null || (!(dn & 268435455) && !(Hl & 268435455)) || bt(Me, Be);
  }
  function Dl(e, t) {
    var n = ne;
    ne |= 2;
    var r = qa();
    (Me !== e || Be !== t) && ((Tt = null), hn(e, t));
    do
      try {
        k2();
        break;
      } catch (l) {
        Ja(e, l);
      }
    while (!0);
    if ((lo(), (ne = n), (Ml.current = r), Ee !== null)) throw Error(s(261));
    return (Me = null), (Be = 0), je;
  }
  function k2() {
    for (; Ee !== null; ) ba(Ee);
  }
  function S2() {
    for (; Ee !== null && !K1(); ) ba(Ee);
  }
  function ba(e) {
    var t = r1(e.alternate, e, et);
    (e.memoizedProps = e.pendingProps),
      t === null ? e1(e) : (Ee = t),
      (Vo.current = null);
  }
  function e1(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = v2(n, t)), n !== null)) {
          (n.flags &= 32767), (Ee = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (je = 6), (Ee = null);
          return;
        }
      } else if (((n = m2(n, t, et)), n !== null)) {
        Ee = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ee = t;
        return;
      }
      Ee = t = e;
    } while (t !== null);
    je === 0 && (je = 5);
  }
  function mn(e, t, n) {
    var r = ue,
      l = it.transition;
    try {
      (it.transition = null), (ue = 1), _2(e, t, n, r);
    } finally {
      (it.transition = l), (ue = r);
    }
    return null;
  }
  function _2(e, t, n, r) {
    do Un();
    while (Jt !== null);
    if (ne & 6) throw Error(s(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (lc(e, i),
      e === Me && ((Ee = Me = null), (Be = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        zl ||
        ((zl = !0),
        l1(Ur, function () {
          return Un(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = it.transition), (it.transition = null);
      var u = ue;
      ue = 1;
      var f = ne;
      (ne |= 4),
        (Vo.current = null),
        y2(e, n),
        Wa(n, e),
        Wc(Zi),
        (Xr = !!Wi),
        (Zi = Wi = null),
        (e.current = n),
        C2(n),
        X1(),
        (ne = f),
        (ue = u),
        (it.transition = i);
    } else e.current = n;
    if (
      (zl && ((zl = !1), (Jt = e), (Bl = l)),
      (i = e.pendingLanes),
      i === 0 && (Gt = null),
      q1(n.stateNode),
      Ye(e, ke()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Tl) throw ((Tl = !1), (e = Io), (Io = null), e);
    return (
      Bl & 1 && e.tag !== 0 && Un(),
      (i = e.pendingLanes),
      i & 1 ? (e === Ao ? jr++ : ((jr = 0), (Ao = e))) : (jr = 0),
      Qt(),
      null
    );
  }
  function Un() {
    if (Jt !== null) {
      var e = Uu(Bl),
        t = it.transition,
        n = ue;
      try {
        if (((it.transition = null), (ue = 16 > e ? 16 : e), Jt === null))
          var r = !1;
        else {
          if (((e = Jt), (Jt = null), (Bl = 0), ne & 6)) throw Error(s(331));
          var l = ne;
          for (ne |= 4, I = e.current; I !== null; ) {
            var i = I,
              u = i.child;
            if (I.flags & 16) {
              var f = i.deletions;
              if (f !== null) {
                for (var p = 0; p < f.length; p++) {
                  var x = f[p];
                  for (I = x; I !== null; ) {
                    var P = I;
                    switch (P.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _r(8, P, i);
                    }
                    var R = P.child;
                    if (R !== null) (R.return = P), (I = R);
                    else
                      for (; I !== null; ) {
                        P = I;
                        var j = P.sibling,
                          O = P.return;
                        if ((Oa(P), P === x)) {
                          I = null;
                          break;
                        }
                        if (j !== null) {
                          (j.return = O), (I = j);
                          break;
                        }
                        I = O;
                      }
                  }
                }
                var U = i.alternate;
                if (U !== null) {
                  var $ = U.child;
                  if ($ !== null) {
                    U.child = null;
                    do {
                      var Se = $.sibling;
                      ($.sibling = null), ($ = Se);
                    } while ($ !== null);
                  }
                }
                I = i;
              }
            }
            if (i.subtreeFlags & 2064 && u !== null) (u.return = i), (I = u);
            else
              e: for (; I !== null; ) {
                if (((i = I), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _r(9, i, i.return);
                  }
                var y = i.sibling;
                if (y !== null) {
                  (y.return = i.return), (I = y);
                  break e;
                }
                I = i.return;
              }
          }
          var h = e.current;
          for (I = h; I !== null; ) {
            u = I;
            var C = u.child;
            if (u.subtreeFlags & 2064 && C !== null) (C.return = u), (I = C);
            else
              e: for (u = h; I !== null; ) {
                if (((f = I), f.flags & 2048))
                  try {
                    switch (f.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rl(9, f);
                    }
                  } catch (Z) {
                    xe(f, f.return, Z);
                  }
                if (f === u) {
                  I = null;
                  break e;
                }
                var T = f.sibling;
                if (T !== null) {
                  (T.return = f.return), (I = T);
                  break e;
                }
                I = f.return;
              }
          }
          if (
            ((ne = l),
            Qt(),
            yt && typeof yt.onPostCommitFiberRoot == "function")
          )
            try {
              yt.onPostCommitFiberRoot($r, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ue = n), (it.transition = t);
      }
    }
    return !1;
  }
  function t1(e, t, n) {
    (t = Dn(n, t)),
      (t = Ca(e, t, 1)),
      (e = Kt(e, t, 1)),
      (t = Ae()),
      e !== null && (Jn(e, 1, t), Ye(e, t));
  }
  function xe(e, t, n) {
    if (e.tag === 3) t1(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          t1(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Gt === null || !Gt.has(r)))
          ) {
            (e = Dn(n, e)),
              (e = wa(t, e, 1)),
              (t = Kt(t, e, 1)),
              (e = Ae()),
              t !== null && (Jn(t, 1, e), Ye(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function E2(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ae()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Me === e &&
        (Be & n) === n &&
        (je === 4 || (je === 3 && (Be & 130023424) === Be && 500 > ke() - Oo)
          ? hn(e, 0)
          : (Do |= n)),
      Ye(e, t);
  }
  function n1(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Zr), (Zr <<= 1), !(Zr & 130023424) && (Zr = 4194304))
        : (t = 1));
    var n = Ae();
    (e = Rt(e, t)), e !== null && (Jn(e, t, n), Ye(e, n));
  }
  function L2(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), n1(e, n);
  }
  function j2(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), n1(e, n);
  }
  var r1;
  r1 = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || $e.current) Ze = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Ze = !1), h2(e, t, n);
        Ze = !!(e.flags & 131072);
      }
    else (Ze = !1), he && t.flags & 1048576 && Fs(t, pl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Nl(e, t), (e = t.pendingProps);
        var l = Rn(t, Fe.current);
        Fn(t, n), (l = vo(null, t, r, e, l, n));
        var i = go();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              We(r) ? ((i = !0), cl(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              so(t),
              (l.updater = Ll),
              (t.stateNode = l),
              (l._reactInternals = t),
              So(t, r, e, n),
              (t = jo(null, t, r, !0, i, n)))
            : ((t.tag = 0), he && i && qi(t), Ie(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Nl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = P2(r)),
            (e = ft(r, e)),
            l)
          ) {
            case 0:
              t = Lo(null, t, r, e, n);
              break e;
            case 1:
              t = Pa(null, t, r, e, n);
              break e;
            case 11:
              t = _a(null, t, r, e, n);
              break e;
            case 14:
              t = Ea(null, t, r, ft(r.type, e), n);
              break e;
          }
          throw Error(s(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ft(r, l)),
          Lo(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ft(r, l)),
          Pa(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ra(t), e === null)) throw Error(s(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            Zs(e, t),
            Cl(t, r, null, n);
          var u = t.memoizedState;
          if (((r = u.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (l = Dn(Error(s(423)), t)), (t = Ma(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Dn(Error(s(424)), t)), (t = Ma(e, t, r, n, l));
              break e;
            } else
              for (
                be = $t(t.stateNode.containerInfo.firstChild),
                  qe = t,
                  he = !0,
                  ct = null,
                  n = $s(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Tn(), r === l)) {
              t = Ht(e, t, n);
              break e;
            }
            Ie(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ks(t),
          e === null && to(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (u = l.children),
          Qi(r, l) ? (u = null) : i !== null && Qi(r, i) && (t.flags |= 32),
          Na(e, t),
          Ie(e, t, u, n),
          t.child
        );
      case 6:
        return e === null && to(t), null;
      case 13:
        return Ha(e, t, n);
      case 4:
        return (
          ao(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = zn(t, null, r, n)) : Ie(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ft(r, l)),
          _a(e, t, r, l, n)
        );
      case 7:
        return Ie(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ie(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ie(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (u = l.value),
            ce(vl, r._currentValue),
            (r._currentValue = u),
            i !== null)
          )
            if (at(i.value, u)) {
              if (i.children === l.children && !$e.current) {
                t = Ht(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var f = i.dependencies;
                if (f !== null) {
                  u = i.child;
                  for (var p = f.firstContext; p !== null; ) {
                    if (p.context === r) {
                      if (i.tag === 1) {
                        (p = Mt(-1, n & -n)), (p.tag = 2);
                        var x = i.updateQueue;
                        if (x !== null) {
                          x = x.shared;
                          var P = x.pending;
                          P === null
                            ? (p.next = p)
                            : ((p.next = P.next), (P.next = p)),
                            (x.pending = p);
                        }
                      }
                      (i.lanes |= n),
                        (p = i.alternate),
                        p !== null && (p.lanes |= n),
                        oo(i.return, n, t),
                        (f.lanes |= n);
                      break;
                    }
                    p = p.next;
                  }
                } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((u = i.return), u === null)) throw Error(s(341));
                  (u.lanes |= n),
                    (f = u.alternate),
                    f !== null && (f.lanes |= n),
                    oo(u, n, t),
                    (u = i.sibling);
                } else u = i.child;
                if (u !== null) u.return = i;
                else
                  for (u = i; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((i = u.sibling), i !== null)) {
                      (i.return = u.return), (u = i);
                      break;
                    }
                    u = u.return;
                  }
                i = u;
              }
          Ie(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Fn(t, n),
          (l = rt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ie(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = ft(r, t.pendingProps)),
          (l = ft(r.type, l)),
          Ea(e, t, r, l, n)
        );
      case 15:
        return La(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ft(r, l)),
          Nl(e, t),
          (t.tag = 1),
          We(r) ? ((e = !0), cl(t)) : (e = !1),
          Fn(t, n),
          ga(t, r, l),
          So(t, r, l, n),
          jo(null, t, r, !0, e, n)
        );
      case 19:
        return za(e, t, n);
      case 22:
        return ja(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function l1(e, t) {
    return Vu(e, t);
  }
  function N2(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ot(e, t, n, r) {
    return new N2(e, t, n, r);
  }
  function Yo(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function P2(e) {
    if (typeof e == "function") return Yo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === vt)) return 11;
      if (e === gt) return 14;
    }
    return 2;
  }
  function en(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ot(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ol(e, t, n, r, l, i) {
    var u = 2;
    if (((r = e), typeof e == "function")) Yo(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case me:
          return vn(n.children, l, i, t);
        case _e:
          (u = 8), (l |= 8);
          break;
        case Ce:
          return (
            (e = ot(12, n, t, l | 2)), (e.elementType = Ce), (e.lanes = i), e
          );
        case Xe:
          return (e = ot(13, n, t, l)), (e.elementType = Xe), (e.lanes = i), e;
        case ut:
          return (e = ot(19, n, t, l)), (e.elementType = ut), (e.lanes = i), e;
        case we:
          return Il(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Pe:
                u = 10;
                break e;
              case mt:
                u = 9;
                break e;
              case vt:
                u = 11;
                break e;
              case gt:
                u = 14;
                break e;
              case Ue:
                (u = 16), (r = null);
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = ot(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function vn(e, t, n, r) {
    return (e = ot(7, e, r, t)), (e.lanes = n), e;
  }
  function Il(e, t, n, r) {
    return (
      (e = ot(22, e, r, t)),
      (e.elementType = we),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ko(e, t, n) {
    return (e = ot(6, e, null, t)), (e.lanes = n), e;
  }
  function Xo(e, t, n) {
    return (
      (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function R2(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = xi(0)),
      (this.expirationTimes = xi(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = xi(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Go(e, t, n, r, l, i, u, f, p) {
    return (
      (e = new R2(e, t, n, f, p)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = ot(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      so(i),
      e
    );
  }
  function M2(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ye,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function i1(e) {
    if (!e) return Zt;
    e = e._reactInternals;
    e: {
      if (rn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (We(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (We(n)) return Ts(e, n, t);
    }
    return t;
  }
  function o1(e, t, n, r, l, i, u, f, p) {
    return (
      (e = Go(n, r, !0, e, l, i, u, f, p)),
      (e.context = i1(null)),
      (n = e.current),
      (r = Ae()),
      (l = qt(n)),
      (i = Mt(r, l)),
      (i.callback = t ?? null),
      Kt(n, i, l),
      (e.current.lanes = l),
      Jn(e, l, r),
      Ye(e, r),
      e
    );
  }
  function Al(e, t, n, r) {
    var l = t.current,
      i = Ae(),
      u = qt(l);
    return (
      (n = i1(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Mt(i, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Kt(l, t, u)),
      e !== null && (ht(e, l, u, i), yl(e, l, u)),
      u
    );
  }
  function Ul(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function u1(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Jo(e, t) {
    u1(e, t), (e = e.alternate) && u1(e, t);
  }
  function H2() {
    return null;
  }
  var s1 =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function qo(e) {
    this._internalRoot = e;
  }
  ($l.prototype.render = qo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Al(e, t, null, null);
    }),
    ($l.prototype.unmount = qo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          pn(function () {
            Al(null, e, null, null);
          }),
            (t[Lt] = null);
        }
      });
  function $l(e) {
    this._internalRoot = e;
  }
  $l.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Zu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++);
      It.splice(n, 0, e), n === 0 && Ku(e);
    }
  };
  function bo(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Wl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function a1() {}
  function T2(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var x = Ul(u);
          i.call(x);
        };
      }
      var u = o1(t, r, e, 0, null, !1, !1, "", a1);
      return (
        (e._reactRootContainer = u),
        (e[Lt] = u.current),
        fr(e.nodeType === 8 ? e.parentNode : e),
        pn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var f = r;
      r = function () {
        var x = Ul(p);
        f.call(x);
      };
    }
    var p = Go(e, 0, !1, null, null, !1, !1, "", a1);
    return (
      (e._reactRootContainer = p),
      (e[Lt] = p.current),
      fr(e.nodeType === 8 ? e.parentNode : e),
      pn(function () {
        Al(t, p, n, r);
      }),
      p
    );
  }
  function Zl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var u = i;
      if (typeof l == "function") {
        var f = l;
        l = function () {
          var p = Ul(u);
          f.call(p);
        };
      }
      Al(t, u, e, l);
    } else u = T2(n, t, e, l, r);
    return Ul(u);
  }
  ($u = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Gn(t.pendingLanes);
          n !== 0 &&
            (ki(t, n | 1), Ye(t, ke()), !(ne & 6) && ((An = ke() + 500), Qt()));
        }
        break;
      case 13:
        pn(function () {
          var r = Rt(e, 1);
          if (r !== null) {
            var l = Ae();
            ht(r, e, 1, l);
          }
        }),
          Jo(e, 1);
    }
  }),
    (Si = function (e) {
      if (e.tag === 13) {
        var t = Rt(e, 134217728);
        if (t !== null) {
          var n = Ae();
          ht(t, e, 134217728, n);
        }
        Jo(e, 134217728);
      }
    }),
    (Wu = function (e) {
      if (e.tag === 13) {
        var t = qt(e),
          n = Rt(e, t);
        if (n !== null) {
          var r = Ae();
          ht(n, e, t, r);
        }
        Jo(e, t);
      }
    }),
    (Zu = function () {
      return ue;
    }),
    (Qu = function (e, t) {
      var n = ue;
      try {
        return (ue = e), t();
      } finally {
        ue = n;
      }
    }),
    (mi = function (e, t, n) {
      switch (t) {
        case "input":
          if ((ui(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = sl(r);
                if (!l) throw Error(s(90));
                vu(r), ui(r, l);
              }
            }
          }
          break;
        case "textarea":
          xu(e, n);
          break;
        case "select":
          (t = n.value), t != null && yn(e, !!n.multiple, t, !1);
      }
    }),
    (Ru = Wo),
    (Mu = pn);
  var z2 = { usingClientEntryPoint: !1, Events: [hr, Nn, sl, Nu, Pu, Wo] },
    Nr = {
      findFiberByHostInstance: ln,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    B2 = {
      bundleType: Nr.bundleType,
      version: Nr.version,
      rendererPackageName: Nr.rendererPackageName,
      rendererConfig: Nr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ee.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Bu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Nr.findFiberByHostInstance || H2,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ql.isDisabled && Ql.supportsFiber)
      try {
        ($r = Ql.inject(B2)), (yt = Ql);
      } catch {}
  }
  return (
    (Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z2),
    (Ke.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!bo(t)) throw Error(s(200));
      return M2(e, t, null, n);
    }),
    (Ke.createRoot = function (e, t) {
      if (!bo(e)) throw Error(s(299));
      var n = !1,
        r = "",
        l = s1;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Go(e, 1, !1, null, null, n, !1, r, l)),
        (e[Lt] = t.current),
        fr(e.nodeType === 8 ? e.parentNode : e),
        new qo(t)
      );
    }),
    (Ke.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return (e = Bu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ke.flushSync = function (e) {
      return pn(e);
    }),
    (Ke.hydrate = function (e, t, n) {
      if (!Wl(t)) throw Error(s(200));
      return Zl(null, e, t, !0, n);
    }),
    (Ke.hydrateRoot = function (e, t, n) {
      if (!bo(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        u = s1;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = o1(t, null, e, 1, n ?? null, l, !1, i, u)),
        (e[Lt] = t.current),
        fr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new $l(t);
    }),
    (Ke.render = function (e, t, n) {
      if (!Wl(t)) throw Error(s(200));
      return Zl(null, e, t, !1, n);
    }),
    (Ke.unmountComponentAtNode = function (e) {
      if (!Wl(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (pn(function () {
            Zl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Lt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ke.unstable_batchedUpdates = Wo),
    (Ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Wl(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Zl(e, t, n, !1, r);
    }),
    (Ke.version = "18.3.1-next-f1338f8080-20240426"),
    Ke
  );
}
var g1;
function $2() {
  if (g1) return nu.exports;
  g1 = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (c) {
        console.error(c);
      }
  }
  return o(), (nu.exports = U2()), nu.exports;
}
var y1;
function W2() {
  if (y1) return Yl;
  y1 = 1;
  var o = $2();
  return (Yl.createRoot = o.createRoot), (Yl.hydrateRoot = o.hydrateRoot), Yl;
}
var Z2 = W2();
const Q2 = "_firstsection_12umi_7",
  Y2 = "_logo_12umi_23",
  K2 = "_nav_12umi_33",
  X2 = "_navul_12umi_49",
  G2 = "_list_12umi_73",
  J2 = "_lists_12umi_87",
  q2 = "_listcontact_12umi_101",
  b2 = "_flmobile_12umi_121",
  e0 = "_listmenu_12umi_129",
  t0 = "_sidebar_12umi_137",
  n0 = "_fllogo_12umi_159",
  r0 = "_active_12umi_235",
  l0 = "_imageclose_12umi_261",
  i0 = "_sidebarmenu_12umi_277",
  o0 = "_sidebarlist_12umi_295",
  u0 = "_sidebarcontact_12umi_323",
  Te = {
    firstsection: Q2,
    logo: Y2,
    nav: K2,
    navul: X2,
    list: G2,
    lists: J2,
    listcontact: q2,
    flmobile: b2,
    listmenu: e0,
    sidebar: t0,
    fllogo: n0,
    active: r0,
    "fade-out": "_fade-out_12umi_249",
    imageclose: l0,
    sidebarmenu: i0,
    sidebarlist: o0,
    sidebarcontact: u0,
  };
function su() {
  return a.jsx(a.Fragment, {
    children: a.jsxs("svg", {
      className: Te.logo,
      width: "417",
      height: "167",
      viewBox: "0 0 417 167",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        a.jsxs("g", {
          "clip-path": "url(#clip0_16_370)",
          children: [
            a.jsx("path", {
              d: "M54.35 47.9V47.13C54.35 42.85 51.68 40.13 47.35 39.94H34.86V61.26H44.58C45.4035 61.2737 46.2213 61.1208 46.9843 60.8104C47.7472 60.5001 48.4395 60.0386 49.0196 59.4539C49.5996 58.8692 50.0555 58.1732 50.3597 57.4078C50.664 56.6424 50.8103 55.8234 50.79 55V54.37H51.51V71.28H50.79V70.64C50.8128 69.823 50.6712 69.0098 50.3736 68.2487C50.076 67.4875 49.6285 66.794 49.0576 66.2091C48.4868 65.6243 47.8042 65.1601 47.0505 64.8442C46.2968 64.5282 45.4872 64.367 44.67 64.37H34.87V82.77C34.891 83.9999 35.3943 85.1724 36.2716 86.0347C37.1489 86.897 38.3299 87.3802 39.56 87.38H40.49V88.11H18.24V87.38H19.16C20.3911 87.3802 21.5731 86.8974 22.452 86.0354C23.3309 85.1733 23.8364 84.0008 23.86 82.77V41.91C23.8029 40.7137 23.2805 39.5871 22.4042 38.7706C21.528 37.9542 20.3673 37.5125 19.17 37.54H18.25V36.81H46.34C49.3042 36.7741 52.249 36.3265 55.09 35.48V47.91L54.35 47.9Z",
              fill: "#C1977F",
            }),
            a.jsx("path", {
              d: "M88.5099 96.4401C86.2299 103.71 81.5099 108.26 74.1599 108.26H64.5399V65.4401C64.5635 64.2092 65.0691 63.0368 65.948 62.1747C66.8268 61.3127 68.0088 60.8299 69.2399 60.8301H70.1699V60.1001H57.4599L53.5499 72.7701V106.05C53.5264 107.279 53.0222 108.45 52.1455 109.312C51.2688 110.174 50.0893 110.658 48.8599 110.66H47.9299V111.39H85.8599L89.2399 96.3901L88.5099 96.4401Z",
              fill: "#C1977F",
            }),
            a.jsx("path", {
              d: "M66.1728 30.9068L42.1589 108.82L42.7801 109.012L66.794 31.0983L66.1728 30.9068Z",
              fill: "#C1977F",
            }),
            a.jsx("path", {
              d: "M50.26 0C36.9351 0.0158788 24.1605 5.31621 14.7384 14.7384C5.31621 24.1605 0.0158788 36.9351 0 50.26L0 116.19C0 129.52 5.29523 142.304 14.7208 151.729C24.1464 161.155 36.9302 166.45 50.26 166.45C63.5898 166.45 76.3736 161.155 85.7992 151.729C95.2248 142.304 100.52 129.52 100.52 116.19V50.26C100.507 36.9343 95.2073 24.1581 85.7846 14.7354C76.3619 5.31272 63.5857 0.013237 50.26 0ZM78.91 140.41C75.608 141.015 72.363 141.898 69.21 143.05C67.2499 142.482 65.2413 142.097 63.21 141.9L63.85 141.62C68.9914 139.257 74.4537 137.666 80.06 136.9C84.5349 136.235 89.0564 135.934 93.58 136C93.03 137.2 92.44 138.36 91.79 139.5C87.4762 139.327 83.1566 139.632 78.91 140.41ZM90.78 141.24C90.06 142.4 89.3 143.54 88.48 144.63C84.6913 144.287 80.8767 144.892 77.38 146.39C75.6172 145.483 73.8004 144.685 71.94 144C78.0201 142.031 84.3915 141.115 90.78 141.29V141.24ZM79.78 135.19C74.0365 135.966 68.4394 137.587 63.17 140C61.5108 140.801 59.7798 141.444 58 141.92C57.43 141.98 56.87 142.05 56.31 142.14L55.88 142.23C54.9458 142.282 54.0089 142.252 53.08 142.14C47.54 141.49 44.08 138.76 40.47 135.86C36.47 132.66 32.28 129.36 25.21 129.1C21.262 129.016 17.3296 129.621 13.59 130.89C11.0103 131.85 8.57425 133.159 6.35 134.78C5.72291 133.303 5.17218 131.794 4.7 130.26C7.39477 128.656 10.2719 127.38 13.27 126.46C17.4156 125.281 21.7102 124.708 26.02 124.76C33.26 125.05 37.37 128.25 41.34 131.35C45.14 134.35 49.06 137.35 55.53 137.79C55.96 137.79 56.37 137.79 56.77 137.79C59.84 137.79 61.77 136.98 64.49 135.79C68.677 133.974 73.0309 132.571 77.49 131.6L78.49 131.39C84.2831 130.119 90.1749 129.35 96.1 129.09C95.6047 130.828 95.0139 132.537 94.33 134.21C89.4708 134.116 84.6125 134.444 79.81 135.19H79.78ZM22.78 136.89C27.7054 135.601 32.8372 135.298 37.88 136C38.39 136.39 38.88 136.8 39.41 137.2C42.69 139.81 46.08 142.5 51.06 143.54C49.42 144.12 47.83 144.8 46.26 145.54C40.9386 141.572 34.325 139.738 27.72 140.4C22.4919 140.993 17.5623 143.143 13.57 146.57C12.5001 145.27 11.4988 143.915 10.57 142.51C14.2962 139.94 18.4415 138.038 22.82 136.89H22.78ZM9.58 141.05C8.65898 139.544 7.82106 137.988 7.07 136.39C9.24533 134.771 11.6391 133.468 14.18 132.52C17.7278 131.353 21.4454 130.785 25.18 130.84C28.7058 130.938 32.1315 132.034 35.06 134C26.029 133.427 17.068 135.91 9.62 141.05H9.58ZM42 129.64C43.3263 129.823 44.6616 129.933 46 129.97C50.3154 129.997 54.6037 129.287 58.68 127.87C62.01 126.87 64.89 125.98 68.48 126.49C71.4818 126.975 74.3126 128.21 76.71 130.08C72.2865 131.075 67.9647 132.478 63.8 134.27C60.8 135.52 59.06 136.27 55.63 136.05C49.7 135.68 46.15 132.91 42.4 129.98L42 129.64ZM2.61 50.26C2.79136 37.7407 7.89193 25.7955 16.8093 17.0064C25.7266 8.21736 37.7444 3.29034 50.265 3.29034C62.7856 3.29034 74.8034 8.21736 83.7207 17.0064C92.6381 25.7955 97.7386 37.7407 97.92 50.26V116.19C97.9164 119.974 97.4632 123.743 96.57 127.42C90.6434 127.66 84.7467 128.39 78.94 129.6C76.069 127.07 72.5453 125.396 68.77 124.77C64.77 124.21 61.6 125.18 58.22 126.21C54.3201 127.576 50.2121 128.253 46.08 128.21C43.8007 128.16 41.5323 127.879 39.31 127.37L39.26 127.57C35.4515 124.737 30.8647 123.141 26.12 123C21.6152 122.934 17.1257 123.541 12.8 124.8C9.8142 125.718 6.94244 126.973 4.24 128.54C3.15665 124.513 2.6086 120.36 2.61 116.19V50.26ZM14.71 147.88C18.7934 144.351 23.9387 142.288 29.3287 142.018C34.7188 141.748 40.0445 143.287 44.46 146.39L43.46 146.88C41.98 147.59 40.52 148.28 39.06 148.88C35.924 147.205 32.4151 146.352 28.8603 146.399C25.3054 146.446 21.8204 147.393 18.73 149.15L17.36 149.93L18.75 150.68C20.1893 151.447 21.7084 152.054 23.28 152.49C24.9842 152.956 26.7432 153.191 28.51 153.19C34.19 153.19 39.26 150.77 44.2 148.41C48.03 146.58 51.98 144.7 56.2 143.91C56.8997 143.855 57.5947 143.752 58.28 143.6C65.6 142.88 73.69 145.49 82.35 151.36C81.1383 152.468 79.8699 153.513 78.55 154.49C72.93 150.3 67.29 148.17 61.76 148.17H61.7C57.01 148.17 53.49 149.68 49.4 151.4C44.6884 153.554 39.7218 155.1 34.62 156C31.5995 156.515 28.5437 156.796 25.48 156.84C21.4711 154.396 17.8425 151.377 14.71 147.88ZM36.85 149.8C32.69 151.36 28.46 152.15 23.7 150.8C22.8063 150.555 21.9308 150.247 21.08 149.88C23.5494 148.742 26.2323 148.143 28.951 148.12C31.6697 148.098 34.3622 148.653 36.85 149.75V149.8ZM77 155.59C75.5899 156.553 74.1277 157.438 72.62 158.24C69.3888 156.006 65.6331 154.648 61.72 154.3C57.8 154.02 54.93 155 51.29 156.25C48.6396 157.191 45.9428 157.995 43.21 158.66C39.5957 159.513 35.9161 160.062 32.21 160.3C30.8908 159.765 29.5991 159.164 28.34 158.5C30.5278 158.364 32.7072 158.117 34.87 157.76C40.1183 156.826 45.2261 155.226 50.07 153C54.14 151.28 57.36 149.92 61.7 149.91C66.75 150 71.88 151.85 77 155.59ZM50.22 163.85C45.4047 163.852 40.6169 163.124 36.02 161.69C38.5728 161.384 41.1067 160.936 43.61 160.35C46.3994 159.68 49.1501 158.859 51.85 157.89C55.44 156.66 58.03 155.78 61.59 156.03C64.8733 156.317 68.0392 157.391 70.82 159.16C64.394 162.254 57.3522 163.857 50.22 163.85ZM83.59 150.18C82.15 149.187 80.7267 148.287 79.32 147.48C81.8285 146.594 84.4817 146.191 87.14 146.29C86.041 147.649 84.8693 148.948 83.63 150.18H83.59Z",
              fill: "#C1977F",
            }),
            a.jsx("path", {
              d: "M142.9 47.5001H140.39V69.0001H142.7C149.613 69.0001 154.117 68.5701 156.21 67.7101H156.34V71.7101H156.21C153.937 70.6768 149.433 70.1601 142.7 70.1601H140.39V93.1601H133.82V46.3401H159.69L160.52 50.3401H160.4C154.762 48.4407 148.85 47.4813 142.9 47.5001Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M167.86 52.8999L163.48 48.5299L167.86 44.1499L172.23 48.5299L167.86 52.8999ZM164.86 93.1799V59.9999L170.65 58.2699H170.91V93.1799H164.86Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M198 58.76L196.2 63.52C195.088 63.0137 193.881 62.7512 192.66 62.75C190.969 62.7526 189.327 63.3153 187.99 64.35C186.518 65.4759 185.357 66.9595 184.62 68.66V93.18H178.5V60L184.23 58.27H184.49V66.8C185.475 64.3934 187.018 62.2548 188.99 60.56C190.668 59.1431 192.794 58.3671 194.99 58.37C196.006 58.3758 197.017 58.5068 198 58.76Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M198.74 90.0901L199.74 86.8101C201.174 88.5543 202.984 89.9521 205.034 90.8993C207.084 91.8464 209.322 92.3184 211.58 92.2801C213.758 92.3875 215.907 91.7373 217.66 90.4401C218.387 89.8876 218.973 89.1712 219.371 88.3493C219.769 87.5274 219.968 86.6231 219.95 85.7101C219.94 84.9198 219.766 84.1402 219.439 83.4207C219.112 82.7011 218.639 82.0574 218.05 81.5301C216.172 80.1809 214.129 79.0785 211.97 78.2501L209.33 77.1601C207.624 76.4522 205.955 75.6579 204.33 74.7801C201.07 72.7801 199.44 70.1701 199.44 66.8601C199.42 65.5525 199.71 64.2587 200.287 63.0852C200.864 61.9117 201.712 60.892 202.76 60.1101C205.253 58.2587 208.308 57.3261 211.41 57.4701C215.293 57.3717 219.133 58.3032 222.54 60.1701L221.64 63.1701C220.26 61.6736 218.59 60.4737 216.732 59.6434C214.873 58.813 212.865 58.3696 210.83 58.3401C208.898 58.2257 206.99 58.8154 205.46 60.0001C204.824 60.5015 204.312 61.1433 203.965 61.8754C203.618 62.6075 203.445 63.41 203.46 64.2201C203.438 65.3964 203.851 66.5393 204.62 67.4301C205.298 68.2067 206.103 68.8627 207 69.3701C208.473 70.136 209.985 70.8236 211.53 71.4301L214.11 72.5201C215.792 73.1782 217.426 73.9534 219 74.8401C222.333 76.8401 224 79.5634 224 83.0101C224.03 84.4249 223.726 85.8269 223.113 87.1022C222.499 88.3776 221.594 89.4903 220.47 90.3501C218.11 92.2301 214.913 93.1734 210.88 93.1801C208.634 93.1731 206.397 92.891 204.22 92.3401C202.28 91.9034 200.427 91.1427 198.74 90.0901Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M247.83 89.3801L248.34 90.1501C245.706 92.0246 242.572 93.0693 239.34 93.1501C233.76 93.1501 230.97 90.2101 230.97 84.3301V59.6601H226V58.5601L230.7 58.2401L236.81 47.3101H237.06V58.2401H248.06L247.22 59.6601H237.08V84.2301C237.058 85.8425 237.368 87.4424 237.99 88.9301C238.663 90.3101 240.1 91.0001 242.3 91.0001C244.255 90.961 246.163 90.4019 247.83 89.3801Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M286.38 85.24L289.97 88.24V93.15H289.8L284.2 88.41C281.533 91.2833 277.867 92.72 273.2 92.72C270.486 92.8316 267.812 92.0364 265.6 90.46C264.65 89.7791 263.88 88.8768 263.357 87.8313C262.835 86.7858 262.575 85.6286 262.6 84.46C262.6 80.7 264.933 77.8533 269.6 75.92C267.13 73.39 265.89 70.85 265.89 68.32C265.868 67.2898 266.068 66.2669 266.477 65.3212C266.886 64.3754 267.494 63.5291 268.26 62.84C269.823 61.3767 271.899 60.5865 274.04 60.64C276.076 60.5927 278.061 61.2815 279.63 62.58C280.366 63.1441 280.961 63.8711 281.369 64.7039C281.777 65.5367 281.986 66.4527 281.98 67.38C282.006 68.2293 281.84 69.0734 281.494 69.8493C281.147 70.6252 280.63 71.3126 279.98 71.86C278.596 73.0259 276.981 73.8848 275.24 74.38L274.77 73.96C277.67 72.6267 279.12 70.5333 279.12 67.68C279.205 65.9912 278.676 64.3288 277.63 63C277.172 62.4247 276.587 61.963 275.921 61.6508C275.255 61.3386 274.525 61.1843 273.79 61.2C273.068 61.1674 272.349 61.3053 271.691 61.6023C271.032 61.8994 270.453 62.3474 270 62.91C269.124 63.9804 268.656 65.327 268.68 66.71C268.676 68.151 269.139 69.5546 270 70.71C271.17 72.1974 272.513 73.5402 274 74.71L285.91 84.79C286.76 82.8069 287.182 80.6672 287.15 78.51C287.112 76.6875 286.628 74.902 285.74 73.31L287.83 72.49H288V77.66C288.049 80.2775 287.495 82.8711 286.38 85.24ZM283.69 88L272.38 78.44C271.55 77.76 270.76 77.06 269.99 76.35C268.806 77.0575 267.839 78.0753 267.192 79.2933C266.545 80.5113 266.243 81.883 266.32 83.26C266.274 84.3655 266.457 85.4686 266.858 86.4997C267.26 87.5307 267.871 88.4673 268.653 89.2501C269.435 90.033 270.37 90.6452 271.401 91.0479C272.432 91.4507 273.535 91.6352 274.64 91.59C276.314 91.6461 277.982 91.3563 279.539 90.7386C281.097 90.1209 282.51 89.1886 283.69 88Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M331.06 88.3501H331.18L330 93.1801H307.57V46.3401H314.14V92.0001H315.36C320.791 91.8935 326.139 90.6501 331.06 88.3501Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M364.32 90.9999V91.3799C362.738 92.4171 360.892 92.9793 359 92.9999C355.87 92.9999 354.17 91.4199 353.92 88.2399C350.756 91.3996 346.481 93.1944 342.01 93.2399C339.623 93.3436 337.284 92.5438 335.46 90.9999C334.65 90.2856 334.009 89.3999 333.583 88.4071C333.158 87.4143 332.959 86.3392 333 85.2599C332.993 83.8374 333.342 82.4358 334.017 81.1833C334.691 79.9307 335.669 78.8672 336.86 78.0899C339.43 76.2199 342.99 75.0899 347.54 74.5799L351.4 74.1999L353.84 73.9999V70.3399C353.84 66.7799 353.197 64.1132 351.91 62.3399C350.623 60.5666 348.523 59.6866 345.61 59.6999C342.046 59.8025 338.636 61.1791 336 63.5799L335.42 62.8699C337.136 61.2097 339.125 59.8567 341.3 58.8699C343.425 58.0013 345.704 57.5694 348 57.5999C356 57.5999 360 61.6532 360 69.7599V86.2299C359.897 87.5586 360.074 88.894 360.52 90.1499C360.86 90.7999 361.74 91.1499 363.16 91.1499C363.22 91.1199 363.63 91.0799 364.32 90.9999ZM353.83 86.9999V74.9999C348.81 75.5599 345.09 76.5366 342.67 77.9299C341.526 78.527 340.575 79.4354 339.926 80.5501C339.276 81.6649 338.955 82.9406 339 84.2299C338.943 85.1204 339.068 86.0131 339.367 86.8537C339.667 87.6944 340.134 88.4654 340.74 89.1199C341.343 89.706 342.059 90.1627 342.845 90.462C343.631 90.7612 344.47 90.8966 345.31 90.8599C348.33 90.8599 351.17 89.5732 353.83 86.9999Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M366.31 90.0901L367.31 86.8101C368.743 88.553 370.552 89.95 372.6 90.8971C374.648 91.8441 376.884 92.3169 379.14 92.2801C381.318 92.3875 383.467 91.7373 385.22 90.4401C385.949 89.8893 386.537 89.1732 386.935 88.3509C387.333 87.5286 387.53 86.6235 387.51 85.7101C387.502 84.9195 387.328 84.1393 387.001 83.4195C386.674 82.6997 386.2 82.0562 385.61 81.5301C383.732 80.1809 381.689 79.0785 379.53 78.2501L376.89 77.1601C375.31 76.5101 373.63 75.7201 371.89 74.7801C368.63 72.7801 367 70.1701 367 66.8601C366.98 65.5525 367.27 64.2587 367.847 63.0852C368.424 61.9117 369.272 60.892 370.32 60.1101C372.813 58.2587 375.869 57.3261 378.97 57.4701C382.853 57.3717 386.694 58.3032 390.1 60.1701L389.2 63.1701C387.82 61.6736 386.15 60.4737 384.292 59.6434C382.433 58.813 380.425 58.3696 378.39 58.3401C376.451 58.2207 374.536 58.8108 373 60.0001C372.365 60.503 371.855 61.1452 371.508 61.8769C371.161 62.6087 370.988 63.4104 371 64.2201C370.979 65.3964 371.392 66.5393 372.16 67.4301C372.83 68.2005 373.624 68.8529 374.51 69.3601C375.984 70.124 377.496 70.8116 379.04 71.4201L381.62 72.5101C383.302 73.1682 384.936 73.9434 386.51 74.8301C389.843 76.8301 391.51 79.5534 391.51 83.0001C391.539 84.4157 391.234 85.8183 390.618 87.0937C390.003 88.3691 389.096 89.4813 387.97 90.3401C385.61 92.2201 382.413 93.1634 378.38 93.1701C376.134 93.1631 373.897 92.881 371.72 92.3301C369.805 91.8891 367.976 91.1321 366.31 90.0901Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M415.4 89.3801L415.91 90.1501C413.276 92.0246 410.142 93.0693 406.91 93.1501C401.33 93.1501 398.54 90.2101 398.54 84.3301V59.6601H393.54V58.5601L398.24 58.2401L404.35 47.3101H404.61V58.2401H415.61L414.77 59.6601H404.66V84.2301C404.64 85.8414 404.946 87.4403 405.56 88.9301C406.227 90.2967 407.663 90.9834 409.87 90.9901C411.824 90.957 413.734 90.401 415.4 89.3801Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M133.84 107.06H135.24L138.63 120H138.75L142.14 107.11H143.72L147.12 120H147.23L150.63 107.11H152L147.89 122.11H146.43L143 109.34H142.91L139.43 122.05H138L133.84 107.06Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M159 107.06H167.69V108.29H160.37V113.93H167.23V115.16H160.37V120.82H167.84V122.05H159V107.06Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M175.64 107.06H177V120.82H184.14V122.05H175.63L175.64 107.06Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M191.69 107.06H193.06V120.82H200.2V122.05H191.69V107.06Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M219.41 122.05H218.07L209.22 109.5H209.1V122.05H207.74V107.05H209.06L217.94 119.61H218.06V107.06H219.41V122.05Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M227.84 107.06H236.53V108.29H229.21V113.93H236.07V115.16H229.21V120.82H236.68V122.05H227.84V107.06Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M249.09 108.08C247 108.08 245.56 109.26 245.56 110.87C245.56 112.48 247.09 113.19 248.56 113.6L250.14 114.05C252.04 114.58 254.21 115.58 254.21 118.05C254.21 120.52 252.26 122.28 249.01 122.28C245.96 122.28 244.01 120.65 243.86 118.28H245.27C245.41 120.06 247 121.03 249.01 121.03C251.25 121.03 252.89 119.82 252.89 118.03C252.89 116.5 251.61 115.81 249.75 115.27L247.96 114.74C245.61 114.05 244.25 112.84 244.25 110.91C244.25 108.5 246.38 106.84 249.15 106.84C251.92 106.84 253.9 108.52 254 110.84H252.68C252.49 109.14 251.07 108.08 249.09 108.08Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M266.51 108.08C264.42 108.08 262.98 109.26 262.98 110.87C262.98 112.48 264.51 113.19 265.98 113.6L267.56 114.05C269.47 114.58 271.63 115.58 271.63 118.05C271.63 120.52 269.69 122.28 266.44 122.28C263.38 122.28 261.44 120.65 261.29 118.28H262.69C262.84 120.06 264.42 121.03 266.44 121.03C268.68 121.03 270.31 119.82 270.31 118.03C270.31 116.5 269.03 115.81 267.18 115.27L265.38 114.74C263.03 114.05 261.67 112.84 261.67 110.91C261.67 108.5 263.8 106.84 266.57 106.84C269.34 106.84 271.32 108.52 271.43 110.84H270.1C269.91 109.14 268.49 108.08 266.51 108.08Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M300 111.74C299.781 110.702 299.204 109.773 298.371 109.115C297.538 108.458 296.501 108.113 295.44 108.14C292.6 108.14 290.29 110.4 290.29 114.55C290.29 118.7 292.6 120.96 295.44 120.96C296.502 120.992 297.541 120.648 298.375 119.99C299.209 119.331 299.784 118.4 300 117.36H301.37C301.141 118.755 300.413 120.019 299.323 120.918C298.232 121.817 296.853 122.291 295.44 122.25C291.65 122.25 288.96 119.25 288.96 114.55C288.96 109.85 291.65 106.86 295.44 106.86C296.851 106.819 298.23 107.291 299.32 108.188C300.41 109.085 301.138 110.347 301.37 111.74H300Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M314.84 122.25C311.05 122.25 308.36 119.25 308.36 114.55C308.36 109.85 311.05 106.86 314.84 106.86C318.63 106.86 321.32 109.86 321.32 114.55C321.32 119.24 318.63 122.25 314.84 122.25ZM314.84 108.14C311.9 108.14 309.69 110.51 309.69 114.55C309.69 118.59 311.87 120.96 314.84 120.96C317.81 120.96 320 118.58 319.99 114.55C319.98 110.52 317.79 108.14 314.84 108.14Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M330.66 107.06L336.1 120.06H336.23L341.67 107.06H343.25V122.06H342V110H341.88L336.88 122.1H335.63L330.49 110H330.37V122.1H329.08V107.1L330.66 107.06Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M351.68 107.06H356.52C359.71 107.06 361.34 109.06 361.34 111.69C361.34 114.32 359.71 116.32 356.54 116.32H353.05V122.05H351.68V107.06ZM356.5 115.06C357.402 115.06 358.266 114.702 358.904 114.064C359.542 113.427 359.9 112.562 359.9 111.66C359.9 110.758 359.542 109.894 358.904 109.256C358.266 108.618 357.402 108.26 356.5 108.26H353.07V115.06H356.5Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M366.09 122.05L371.54 107.05H373L378.45 122.05H377L375.4 117.53H369.1L367.5 122.05H366.09ZM375 116.3L372.34 108.84H372.24L369.58 116.3H375Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M397.15 122.05H395.82L387 109.5H386.89V122.05H385.52V107.05H386.84L395.72 119.61H395.84V107.06H397.19L397.15 122.05Z",
              fill: "#2B2B2B",
            }),
            a.jsx("path", {
              d: "M405.76 107.06L410.2 114.17H410.33L414.77 107.06H416.35L410.95 115.56V122.05H409.58V115.56L404.18 107.06H405.76Z",
              fill: "#2B2B2B",
            }),
          ],
        }),
        a.jsx("defs", {
          children: a.jsx("clipPath", {
            id: "clip0_16_370",
            children: a.jsx("rect", {
              width: "416.35",
              height: "166.45",
              fill: "white",
            }),
          }),
        }),
      ],
    }),
  });
}
function s0({
  scrollToSection: o,
  aboutRef: c,
  serviceRef: s,
  contactRef: g,
  homeRef: d,
}) {
  const [m, S] = E.useState(!1);
  function _() {
    S(!0);
  }
  function w() {
    S(!1);
  }
  return a.jsx("header", {
    className: Te.firstsection,
    children: a.jsxs("nav", {
      className: Te.nav,
      children: [
        a.jsx(su, {}),
        a.jsxs("ul", {
          className: Te.navul,
          children: [
            a.jsx("li", {
              className: Te.list,
              onClick: () => o(d),
              children: "Home",
            }),
            a.jsx("li", {
              className: Te.lists,
              onClick: () => o(c),
              children: "About Us",
            }),
            a.jsx("li", {
              className: Te.lists,
              onClick: () => o(s),
              children: "Our Services",
            }),
            a.jsx("li", {
              className: Te.listcontact,
              onClick: () => o(g),
              children: "Contact Us",
            }),
            a.jsx("li", {
              className: Te.listmenu,
              onClick: _,
              children: a.jsx("a", {
                className: "dropdown",
                children: a.jsxs("svg", {
                  width: "27",
                  height: "26",
                  viewBox: "0 0 27 26",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    a.jsx("path", {
                      d: "M5.41882 18.4188L20.5915 18.4188",
                      stroke: "#2B2B2B",
                      strokeWidth: "2.16753",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    a.jsx("path", {
                      d: "M5.41882 13H20.5915",
                      stroke: "#2B2B2B",
                      strokeWidth: "2.16753",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    a.jsx("path", {
                      d: "M5.41882 7.58118L14.0889 7.58119",
                      stroke: "#2B2B2B",
                      strokeWidth: "2.16753",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        a.jsxs("div", {
          className: `${Te.sidebar} ${m ? Te.active : Te["fade-out"]}`,
          children: [
            a.jsxs("div", {
              className: Te.imageclose,
              children: [
                a.jsx(su, {}),
                a.jsx("a", {
                  className: "dropdown-close",
                  onClick: w,
                  children: a.jsx("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: a.jsx("path", {
                      d: "M6.758 17.243L12.001 12M17.244 6.757L12 12M12 12L6.758 6.757M12.001 12L17.244 17.243",
                      stroke: "#2B2B2B",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  }),
                }),
              ],
            }),
            a.jsxs("ul", {
              className: Te.sidebarmenu,
              children: [
                a.jsx("li", {
                  className: Te.sidebarlist,
                  onClick: () => {
                    o(d), w();
                  },
                  children: "Home",
                }),
                a.jsx("hr", {}),
                a.jsx("li", {
                  className: Te.sidebarlist,
                  onClick: () => {
                    o(c), w();
                  },
                  children: "About Us",
                }),
                a.jsx("hr", {}),
                a.jsx("li", {
                  className: Te.sidebarlist,
                  onClick: () => {
                    o(s), w();
                  },
                  children: "Our Services",
                }),
                a.jsx("hr", {}),
                a.jsx("li", {
                  className: Te.sidebarcontact,
                  onClick: () => {
                    o(g), w();
                  },
                  children: "Contact Us",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const a0 = "./assets/image1-DEicDa6E.png",
  c0 = "./assets/image1-BSMY6Ah8.png",
  f0 = "_background_m708u_9",
  d0 = "_empower_m708u_17",
  p0 = "_mobileimg_m708u_125",
  h0 = "_desktopimg_m708u_135",
  Kl = { background: f0, empower: d0, mobileimg: p0, desktopimg: h0 };
function m0({ aboutRef: o, scrollToSection: c }) {
  return a.jsx("section", {
    className: Kl.background,
    children: a.jsxs("div", {
      className: Kl.empower,
      children: [
        a.jsxs("div", {
          children: [
            a.jsx("div", {
              children: a.jsx("label", {
                children:
                  " Empowering People for Productivity through Wellness.",
              }),
            }),
            a.jsx("button", { onClick: () => c(o), children: "Get Started" }),
          ],
        }),
        a.jsx("img", { className: Kl.desktopimg, src: a0, alt: "image" }),
        a.jsx("img", { className: Kl.mobileimg, src: c0, alt: "image" }),
      ],
    }),
  });
}
const v0 = "_about_1uwc6_9",
  g0 = "_mobileimg_1uwc6_63",
  y0 = "_desktopimg_1uwc6_73",
  iu = { about: v0, mobileimg: g0, desktopimg: y0 },
  C0 = "./assets/aboutus-DFEXfrLs.png",
  w0 = "./assets/about-BUXhcldZ.png";
function x0() {
  return a.jsxs("section", {
    className: iu.about,
    children: [
      a.jsx("img", { className: iu.desktopimg, src: C0, alt: "" }),
      a.jsx("img", { className: iu.mobileimg, src: w0, alt: "" }),
      a.jsxs("div", {
        children: [
          a.jsxs("h2", {
            children: ["About ", a.jsx("label", { children: "Us" })],
          }),
          a.jsx("span", {
            children:
              "First and Last Wellness is one of its kind committed to empowering systems for productivity, one life at a time. Our goal is to enlighten and equip organizations with best practices with promote employee welfare and in turn contribute to productivity.",
          }),
        ],
      }),
    ],
  });
}
const k0 = "_background_1jlws_9",
  S0 = "_mission_1jlws_15",
  C1 = { background: k0, mission: S0 },
  _0 = "./assets/image1-BTa888uR.png";
function E0() {
  return a.jsx("section", {
    className: C1.background,
    children: a.jsxs("div", {
      className: C1.mission,
      children: [
        a.jsxs("div", {
          children: [
            a.jsxs("h2", {
              children: ["Our ", a.jsx("label", { children: "Mission" })],
            }),
            a.jsxs("span", {
              children: [
                "Our mission is to bridge the gap between productivity and well-being by offering a wellness platform tailored especially to corporate clients through evidence-based practices, accessible resources, health plan auditing/consulting and real-time progress tracking.",
                a.jsx("br", {}),
                " This would place in the hands of people, the enablement to take control of their lives, manage their health, reduce stress, and live with a sense of greater purpose.",
              ],
            }),
          ],
        }),
        a.jsx("img", { src: _0, alt: "" }),
      ],
    }),
  });
}
const L0 = "_service_11bs5_9",
  j0 = "_servicecontainer_11bs5_53",
  N0 = "_container_11bs5_67",
  P0 = "_services_11bs5_91",
  Xl = { service: L0, servicecontainer: j0, container: N0, services: P0 },
  R0 = [
    {
      image: "./assets/desktop/Services/image1.png",
      Title: "Health Risk Assessments (HRAs)",
      Text: "Nature(individual health risk assessment) vs Nurture (Environment/organization health risk assessment)",
      book: "Book Now",
    },
    {
      image: "./assets/desktop/Services/image2.png",
      Title: "Mental Health and Stress Management",
      Text: "Empowering employees with tools and support to manage stress and enhance mental well-being",
      book: "Book Now",
    },
    {
      image: "./assets/desktop/Services/image3.png",
      Title: "Physical Fitness Programs",
      Text: "Inspiring employees to embrace active lifestyles through tailored fitness programs for improved health and energy.",
      book: "Book Now",
    },
    {
      image: "./assets/desktop/Services/image4.png",
      Title: "Nutrition and Wellness Coaching",
      Text: "Guiding employees toward healthier choices with personalized nutrition and wellness support.",
      book: "Book Now",
    },
    {
      image: "./assets/desktop/Services/image5.png",
      Title: "Workplace Ergonomics",
      Text: "Creating comfortable, efficient work spaces to enhance productivity and well-being.",
      book: "Book Now",
    },
    {
      image: "./assets/desktop/Services/image6.png",
      Title: "Employee Engagement Programs",
      Text: "Wellness challenges, team-buildingactivities, mindset bootcamps",
      book: "Book Now",
    },
    {
      image: "./assets/desktop/Services/image7.png",
      Title: "Organizational Wellness Consultation With Managers",
      Text: "For profitable working relationships, both horizontally and vertically.",
      book: "Book Now",
    },
    {
      image: "./assets/desktop/Services/image8.png",
      Title: "Liaison to Advanced Certified Therapy",
      Text: "Connecting employees to specialized therapy services for comprehensive mental health support when necessary.",
      book: "Book Now",
    },
  ];
function M0({ scrollToSection: o, contactRef: c }) {
  return a.jsxs("section", {
    className: Xl.service,
    children: [
      a.jsxs("h2", {
        children: ["Our ", a.jsx("label", { children: "Services" })],
      }),
      a.jsx("div", {
        className: Xl.servicecontainer,
        children: R0.map((s) =>
          a.jsxs("div", {
            className: Xl.container,
            children: [
              a.jsx("img", { src: s.image, alt: "" }),
              a.jsxs("div", {
                className: Xl.services,
                children: [
                  a.jsxs("div", {
                    children: [
                      " ",
                      a.jsx("h3", { children: s.Title }),
                      a.jsx("hr", {}),
                      a.jsx("span", { children: s.Text }),
                    ],
                  }),
                  a.jsx("button", { onClick: () => o(c), children: s.book }),
                ],
              }),
            ],
          })
        ),
      }),
    ],
  });
}
const H0 = "./assets/client1-BvlBikCh.png",
  T0 = "./assets/client2-D2WdRdTn.png",
  z0 = "./assets/client3-DBX-U6Ih.png",
  B0 = "_client_o6mvk_9",
  F0 = "_image1_o6mvk_93",
  V0 = "_image2_o6mvk_101",
  Gl = { client: B0, image1: F0, image2: V0 };
function D0() {
  return a.jsxs("section", {
    className: Gl.client,
    children: [
      a.jsxs("h2", {
        children: ["Our ", a.jsx("label", { children: "Clientele" })],
      }),
      a.jsxs("div", {
        children: [
          a.jsx("img", { className: Gl.image1, src: H0, alt: "" }),
          a.jsx("img", { className: Gl.image2, src: T0, alt: "" }),
          a.jsx("img", { className: Gl.image1, src: z0, alt: "" }),
        ],
      }),
    ],
  });
}
const O0 = "_background_ps3vd_9",
  I0 = "_unlock_ps3vd_17",
  A0 = "_mobile_ps3vd_75",
  U0 = "_desktopimg_ps3vd_85",
  Jl = { background: O0, unlock: I0, mobile: A0, desktopimg: U0 },
  $0 = "./assets/Image-BjA3MDKW.png",
  W0 = "./assets/image1-7asvHGuQ.png";
function Z0({ contactRef: o, scrollToSection: c }) {
  return a.jsx("section", {
    className: Jl.background,
    children: a.jsxs("div", {
      className: Jl.unlock,
      children: [
        a.jsxs("div", {
          children: [
            a.jsx("h2", {
              children: "Ready to Elevate Your Team's Health and Well-Being?",
            }),
            a.jsx("button", { onClick: () => c(o), children: "Contact Us" }),
          ],
        }),
        a.jsx("img", { className: Jl.desktopimg, src: $0, alt: "" }),
        a.jsx("img", { className: Jl.mobile, src: W0, alt: "" }),
      ],
    }),
  });
}
const Q0 = "./assets/image1-DeY1Fcku.png",
  Y0 = "./assets/choose-u9hyaw1P.png",
  K0 = "_choose_19t4t_9",
  X0 = "_choosemobile_19t4t_21",
  G0 = "_chooseimg_19t4t_103",
  J0 = "_li_19t4t_137",
  q0 = "_standalone_19t4t_145",
  b0 = "_standalone3_19t4t_159",
  nn = {
    choose: K0,
    choosemobile: X0,
    chooseimg: G0,
    li: J0,
    standalone: q0,
    standalone3: b0,
  };
function ef() {
  return a.jsxs("section", {
    className: nn.choose,
    children: [
      a.jsx("img", { className: nn.chooseimg, src: Q0, alt: "" }),
      a.jsx("img", { className: nn.choosemobile, src: Y0, alt: "" }),
      a.jsxs("div", {
        children: [
          a.jsx("h2", { children: "Why You Should Choose Us:" }),
          a.jsxs("ul", {
            children: [
              a.jsxs("li", {
                className: nn.li,
                children: [
                  a.jsx("span", {
                    children: "Health plan auditing and consulting",
                  }),
                  ": we consult for Human Resource teams, helping to conduct checks and audits on health plans/health insurance, for the purpose of accessing the best possible care for better outcomes. You could look at us as the “Man on the inside”.",
                ],
              }),
              a.jsxs("li", {
                className: nn.li,
                children: [
                  a.jsx("span", { children: "Workplace Ergonomics" }),
                  ": we conduct assessment and provide needed information on best practices to promote a space that is safe and efficient to interact in.",
                ],
              }),
              a.jsxs("li", {
                className: nn.standalone,
                children: [
                  a.jsx("span", {
                    children: "Comprehensive Wellness solutions",
                  }),
                  ": we offer personalized wellness strategies to individuals and teams looking to work smarter and healthier. This is done through wellness workshops, wellness retreats, mindset bootcamps, biometric screenings, etc.",
                ],
              }),
              a.jsxs("li", {
                className: nn.standalone,
                children: [
                  a.jsx("span", { children: "Health Information" }),
                  ": we stay up to date on health trends and disseminate information via a newsletter to our clients.",
                ],
              }),
              a.jsxs("li", {
                className: nn.standalone3,
                children: [
                  a.jsx("span", { children: "Point of Liaison" }),
                  ": we act as a form of liaison between clients and health care specialists such as clinical psychologists, psychiatrists, immunizations, nutritionists, etc.",
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const tf = "_footer_1dmhp_9",
  nf = "_uppist_1dmhp_29",
  rf = "_logo_1dmhp_39",
  lf = "_details_1dmhp_49",
  of = "_location_1dmhp_71",
  uf = "_days_1dmhp_129",
  sf = "_footer2_1dmhp_177",
  af = "_quicks_1dmhp_203",
  cf = "_connect_1dmhp_217",
  St = {
    footer: tf,
    uppist: nf,
    logo: rf,
    details: lf,
    location: of,
    days: uf,
    footer2: sf,
    quicks: af,
    connect: cf,
  },
  ff =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAOCAYAAACSJWqFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOZSURBVHgB7VdbThpRGD4gGqMvdAUdH0y8ptMVdFiBsAJxBeAKlBWoK1BWIKzAYQVM4vXN6QqcPpjIvd83/X9ynAIWiiZN+icn58z579cDxiRgZ2fH297efjQzwsbGhrO1tXXpum7WfCDA5ivoLSbvcXeMdW6mhLSZMywvL0fpdNq8vLx8aGDmDRkzZwiCIMJWMP84xIFBGZ6kUqkiz4PBoGYTsDUWFhbOgXeBi7Au7u7uKsSh7Y7wXQQuS77FxcVDBoat2O/3vfv7++/KD3JH6Bg4c3t7u4YSP8VdEyuP+zyuQ+wFyA9s3eQV24Y48LrgI87F8rHGVijoHLYajh51wLZD2FaTFmtA5oXSgq4JP3JpOofvfLfb/Xpzc/MJQn7YQmkYDGoQ1+v1csCXOT84i3Bffn5+Vr6qVItRR2x+BoI6NCjiKJ05xjrDHUSk6vKtQbmCE8Stie4r6iYO7UpHq+QD7sDWOQKYlAppqQu855QD+XXc7ysRfeJOP9LMOFbl4eEhFPywYpgVZgQRPeY3aWBovd1uM5Ax/crKCjNtEBx/nFHg8ZWf++bm5mdFQndVeUEXwNAvPCNr1B0ysxZviEQwYKywAI6eWrhgjH7q8FWH8rRaLQ9yeOci0J7Q7cOGKs9sJafT6YwUisiy9LNShkMAc0Rjdnd3D3AuAc+WqtglqcBKggF7OPqgi7PDFjNvAKrAhX43oTtCwLTSQjM7RGxrVgaqhBXkmV/tyC6IxwQDE2UyGceMiDgDAAERopwbJf36+prZrEnZN7GHCJhvXjsYQHFJHAzZEubPIJSq+I0esjxs38zskIVvIQ/Ya2xRBMiHvlCrmq1UpeHKge89PcugC9BSR3q3vr7OEo9ngJ5FWJyFpAXsYZkTOawDq2UnwtLSEoPuou3KekedIpN2edLqRlrBGSeLD4fyykyNNIHqI/w+YSyUJwOjTzkgwfDEF4Olz8gpAQeb4MvyooQYXAXMGFbJCbIXT33g6joPjFXmwDWwLkGnd3zZanzZWI1cSgt5kWaSZQ7Hc0gaeUsMusyqAucF7GHJN0VuXF364iWCQn0NDnLaSppk1ULHGWRf6ix8BY7jTPxBRvwomnH3Cny6NVsEZhl3g2l+GU/S8ZbdNth22MBfzMk5+q5AQ6DwyTYImS79zV+OeQKDKol6RMvmbdzcf/nawHnCqY8yZjvEZY5SNlMM4HeF1dXVIja+lGfWGPgPk+An+xRDqC9GHz4AAAAASUVORK5CYII=";
function df() {
  return a.jsx(a.Fragment, {
    children: a.jsxs("svg", {
      className: St.uppist,
      width: "472",
      height: "138",
      viewBox: "0 0 472 138",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        a.jsxs("g", {
          "clip-path": "url(#clip0_16_344)",
          children: [
            a.jsx("path", {
              d: "M429.67 103.51C453.048 103.51 472 85.8657 472 64.1002C472 42.3346 453.048 24.6902 429.67 24.6902C406.292 24.6902 387.34 42.3346 387.34 64.1002C387.34 85.8657 406.292 103.51 429.67 103.51Z",
              fill: "#F89A1C",
            }),
            a.jsx("path", {
              d: "M429.75 61.7402C427.661 62.4977 425.393 62.6092 423.24 62.0602C420.912 61.455 418.858 60.0806 417.41 58.1602C419.146 59.6568 421.197 60.7436 423.41 61.3402C425.475 61.8992 427.631 62.0352 429.75 61.7402Z",
              fill: "#561D5E",
            }),
            a.jsx("path", {
              d: "M438.88 55.05L418.17 58.3301C421.771 60.4511 425.827 61.6819 430 61.92C428.783 65.7001 428.979 69.7931 430.55 73.4401L438.88 55.05Z",
              fill: "#561D5E",
            }),
            a.jsx("path", {
              d: "M430 61.9202C428.609 63.693 427.871 65.8911 427.911 68.1443C427.951 70.3974 428.767 72.5679 430.22 74.2902C429.246 72.3805 428.72 70.2739 428.682 68.1306C428.644 65.9872 429.095 63.8633 430 61.9202Z",
              fill: "#561D5E",
            }),
            a.jsx("path", {
              d: "M415.73 74.0002C413.641 74.7577 411.373 74.8692 409.22 74.3202C406.894 73.7169 404.84 72.3463 403.39 70.4302C405.077 71.8644 407.05 72.9242 409.177 73.5397C411.304 74.1551 413.538 74.312 415.73 74.0002Z",
              fill: "#561D5E",
            }),
            a.jsx("path", {
              d: "M424.86 67.28L404.15 70.55C407.736 72.6735 411.779 73.9079 415.94 74.15C414.724 77.9302 414.92 82.0229 416.49 85.67L424.86 67.28Z",
              fill: "#561D5E",
            }),
            a.jsx("path", {
              d: "M415.94 74.1501C414.549 75.923 413.811 78.1211 413.851 80.3743C413.891 82.6274 414.707 84.7979 416.16 86.5201C415.186 84.6104 414.66 82.5039 414.622 80.3605C414.584 78.2172 415.034 76.0933 415.94 74.1501Z",
              fill: "#561D5E",
            }),
            a.jsx("path", {
              d: "M444.2 49.58C442.115 50.3398 439.849 50.4514 437.7 49.9C435.371 49.2926 433.313 47.9188 431.86 46C433.615 47.4961 435.682 48.5824 437.91 49.18C439.959 49.7291 442.097 49.865 444.2 49.58Z",
              fill: "#561D5E",
            }),
            a.jsx("path", {
              d: "M453.33 42.9001L432.62 46.1701C434.555 47.3113 436.629 48.1986 438.79 48.8101C440.623 49.3416 442.507 49.6768 444.41 49.8101C443.217 53.5829 443.427 57.6596 445 61.2901L453.33 42.9001Z",
              fill: "#561D5E",
            }),
            a.jsx("path", {
              d: "M444.41 49.77C443.018 51.5405 442.279 53.7373 442.319 55.9892C442.36 58.2411 443.176 60.4102 444.63 62.13C443.656 60.2221 443.13 58.1172 443.092 55.9754C443.054 53.8337 443.505 51.7114 444.41 49.77Z",
              fill: "#561D5E",
            }),
            a.jsx("path", {
              d: "M64.251 85.4371C57.8783 91.0031 49.5697 93.7861 39.325 93.7861C29.0803 93.7861 20.7717 91.0031 14.399 85.4371C8.02633 79.8711 4.84 72.5708 4.84 63.5361V7.15009H29.04V60.8741C29.04 67.1661 32.4683 70.3121 39.325 70.3121C46.1817 70.3121 49.61 67.1661 49.61 60.8741V7.15009H73.81V63.5361C73.81 72.5708 70.6237 79.8711 64.251 85.4371ZM122.136 29.6561C130.284 29.6561 136.939 32.6811 142.101 38.7311C147.264 44.7811 149.845 52.4041 149.845 61.6001C149.845 70.7961 147.264 78.4191 142.101 84.4691C136.939 90.5191 130.284 93.5441 122.136 93.5441C115.199 93.5441 109.794 91.1644 105.922 86.4051V116.05H83.5373V31.3501H105.922V36.7951C109.794 32.0358 115.199 29.6561 122.136 29.6561ZM108.826 69.7071C110.843 71.8851 113.465 72.9741 116.691 72.9741C119.918 72.9741 122.499 71.8851 124.435 69.7071C126.452 67.5291 127.46 64.8268 127.46 61.6001C127.46 58.3734 126.452 55.6711 124.435 53.4931C122.499 51.3151 119.918 50.2261 116.691 50.2261C113.465 50.2261 110.843 51.3151 108.826 53.4931C106.89 55.6711 105.922 58.3734 105.922 61.6001C105.922 64.8268 106.89 67.5291 108.826 69.7071ZM195.516 29.6561C203.663 29.6561 210.318 32.6811 215.481 38.7311C220.644 44.7811 223.225 52.4041 223.225 61.6001C223.225 70.7961 220.644 78.4191 215.481 84.4691C210.318 90.5191 203.663 93.5441 195.516 93.5441C188.579 93.5441 183.174 91.1644 179.302 86.4051V116.05H156.917V31.3501H179.302V36.7951C183.174 32.0358 188.579 29.6561 195.516 29.6561ZM182.206 69.7071C184.223 71.8851 186.844 72.9741 190.071 72.9741C193.298 72.9741 195.879 71.8851 197.815 69.7071C199.832 67.5291 200.84 64.8268 200.84 61.6001C200.84 58.3734 199.832 55.6711 197.815 53.4931C195.879 51.3151 193.298 50.2261 190.071 50.2261C186.844 50.2261 184.223 51.3151 182.206 53.4931C180.27 55.6711 179.302 58.3734 179.302 61.6001C179.302 64.8268 180.27 67.5291 182.206 69.7071ZM241.55 26.7521C238.162 26.7521 235.218 25.5421 232.717 23.1221C230.297 20.6214 229.087 17.7174 229.087 14.4101C229.087 11.1028 230.297 8.23909 232.717 5.81909C235.218 3.31843 238.162 2.06809 241.55 2.06809C244.857 2.06809 247.721 3.31843 250.141 5.81909C252.642 8.23909 253.892 11.1028 253.892 14.4101C253.892 17.7174 252.642 20.6214 250.141 23.1221C247.721 25.5421 244.857 26.7521 241.55 26.7521ZM230.297 91.8501V31.3501H252.682V91.8501H230.297ZM283.978 49.1371C283.978 50.1051 284.704 50.8714 286.156 51.4361C287.689 52.0008 289.585 52.4444 291.843 52.7671C294.102 53.0091 296.522 53.5334 299.103 54.3401C301.685 55.1468 304.105 56.1551 306.363 57.3651C308.622 58.5751 310.477 60.5111 311.929 63.1731C313.462 65.7544 314.228 68.9004 314.228 72.6111C314.228 76.4831 313.341 79.8711 311.566 82.7751C309.872 85.6791 307.614 87.8571 304.79 89.3091C301.967 90.7611 299.063 91.8098 296.078 92.4551C293.174 93.1811 290.149 93.5441 287.003 93.5441C272.403 93.5441 262.965 88.7444 258.689 79.1451L278.17 70.4331C279.703 74.5471 282.567 76.6041 286.761 76.6041C289.504 76.6041 290.875 75.7168 290.875 73.9421C290.875 72.8934 289.867 72.0464 287.85 71.4011C285.834 70.7558 283.414 70.1104 280.59 69.4651C277.767 68.7391 274.903 67.8114 271.999 66.6821C269.176 65.4721 266.756 63.4958 264.739 60.7531C262.723 58.0104 261.714 54.5821 261.714 50.4681C261.714 43.8534 264.215 38.7311 269.216 35.1011C274.298 31.4711 280.147 29.6561 286.761 29.6561C299.991 29.6561 308.743 34.7784 313.018 45.0231L294.505 51.6781C293.053 48.2901 290.795 46.5961 287.729 46.5961C285.229 46.5961 283.978 47.4431 283.978 49.1371ZM359.086 52.6461H346.381V65.7141C346.381 67.7308 346.865 69.2231 347.833 70.1911C348.801 71.1591 350.213 71.7238 352.068 71.8851C354.004 71.9658 356.344 71.9254 359.086 71.7641V91.8501C346.422 93.6248 337.387 92.5358 331.982 88.5831C326.658 84.6304 323.996 77.4108 323.996 66.9241V52.6461H315.526V31.3501H323.996V21.0651L346.381 14.4101V31.3501H359.086V52.6461Z",
              fill: "#561D5E",
            }),
          ],
        }),
        a.jsx("defs", {
          children: a.jsx("clipPath", {
            id: "clip0_16_344",
            children: a.jsx("rect", {
              width: "472",
              height: "137.21",
              fill: "white",
            }),
          }),
        }),
      ],
    }),
  });
}
var Rr = {},
  w1;
function pf() {
  if (w1) return Rr;
  (w1 = 1),
    Object.defineProperty(Rr, "__esModule", { value: !0 }),
    (Rr.parse = S),
    (Rr.serialize = k);
  const o = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    c = /^[\u0021-\u003A\u003C-\u007E]*$/,
    s =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    g = /^[\u0020-\u003A\u003D-\u007E]*$/,
    d = Object.prototype.toString,
    m = (() => {
      const L = function () {};
      return (L.prototype = Object.create(null)), L;
    })();
  function S(L, W) {
    const M = new m(),
      F = L.length;
    if (F < 2) return M;
    const D = (W == null ? void 0 : W.decode) || z;
    let H = 0;
    do {
      const G = L.indexOf("=", H);
      if (G === -1) break;
      const J = L.indexOf(";", H),
        ee = J === -1 ? F : J;
      if (G > ee) {
        H = L.lastIndexOf(";", G - 1) + 1;
        continue;
      }
      const se = _(L, H, G),
        ye = w(L, G, se),
        me = L.slice(se, ye);
      if (M[me] === void 0) {
        let _e = _(L, G + 1, ee),
          Ce = w(L, ee, _e);
        const Pe = D(L.slice(_e, Ce));
        M[me] = Pe;
      }
      H = ee + 1;
    } while (H < F);
    return M;
  }
  function _(L, W, M) {
    do {
      const F = L.charCodeAt(W);
      if (F !== 32 && F !== 9) return W;
    } while (++W < M);
    return M;
  }
  function w(L, W, M) {
    for (; W > M; ) {
      const F = L.charCodeAt(--W);
      if (F !== 32 && F !== 9) return W + 1;
    }
    return M;
  }
  function k(L, W, M) {
    const F = (M == null ? void 0 : M.encode) || encodeURIComponent;
    if (!o.test(L)) throw new TypeError(`argument name is invalid: ${L}`);
    const D = F(W);
    if (!c.test(D)) throw new TypeError(`argument val is invalid: ${W}`);
    let H = L + "=" + D;
    if (!M) return H;
    if (M.maxAge !== void 0) {
      if (!Number.isInteger(M.maxAge))
        throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);
      H += "; Max-Age=" + M.maxAge;
    }
    if (M.domain) {
      if (!s.test(M.domain))
        throw new TypeError(`option domain is invalid: ${M.domain}`);
      H += "; Domain=" + M.domain;
    }
    if (M.path) {
      if (!g.test(M.path))
        throw new TypeError(`option path is invalid: ${M.path}`);
      H += "; Path=" + M.path;
    }
    if (M.expires) {
      if (!B(M.expires) || !Number.isFinite(M.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${M.expires}`);
      H += "; Expires=" + M.expires.toUTCString();
    }
    if (
      (M.httpOnly && (H += "; HttpOnly"),
      M.secure && (H += "; Secure"),
      M.partitioned && (H += "; Partitioned"),
      M.priority)
    )
      switch (
        typeof M.priority == "string" ? M.priority.toLowerCase() : void 0
      ) {
        case "low":
          H += "; Priority=Low";
          break;
        case "medium":
          H += "; Priority=Medium";
          break;
        case "high":
          H += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${M.priority}`);
      }
    if (M.sameSite)
      switch (
        typeof M.sameSite == "string" ? M.sameSite.toLowerCase() : M.sameSite
      ) {
        case !0:
        case "strict":
          H += "; SameSite=Strict";
          break;
        case "lax":
          H += "; SameSite=Lax";
          break;
        case "none":
          H += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${M.sameSite}`);
      }
    return H;
  }
  function z(L) {
    if (L.indexOf("%") === -1) return L;
    try {
      return decodeURIComponent(L);
    } catch {
      return L;
    }
  }
  function B(L) {
    return d.call(L) === "[object Date]";
  }
  return Rr;
}
pf();
var x1 = "popstate";
function hf(o = {}) {
  function c(g, d) {
    let { pathname: m, search: S, hash: _ } = g.location;
    return au(
      "",
      { pathname: m, search: S, hash: _ },
      (d.state && d.state.usr) || null,
      (d.state && d.state.key) || "default"
    );
  }
  function s(g, d) {
    return typeof d == "string" ? d : Tr(d);
  }
  return vf(c, s, null, o);
}
function Ne(o, c) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(c);
}
function _t(o, c) {
  if (!o) {
    typeof console < "u" && console.warn(c);
    try {
      throw new Error(c);
    } catch {}
  }
}
function mf() {
  return Math.random().toString(36).substring(2, 10);
}
function k1(o, c) {
  return { usr: o.state, key: o.key, idx: c };
}
function au(o, c, s = null, g) {
  return {
    pathname: typeof o == "string" ? o : o.pathname,
    search: "",
    hash: "",
    ...(typeof c == "string" ? zr(c) : c),
    state: s,
    key: (c && c.key) || g || mf(),
  };
}
function Tr({ pathname: o = "/", search: c = "", hash: s = "" }) {
  return (
    c && c !== "?" && (o += c.charAt(0) === "?" ? c : "?" + c),
    s && s !== "#" && (o += s.charAt(0) === "#" ? s : "#" + s),
    o
  );
}
function zr(o) {
  let c = {};
  if (o) {
    let s = o.indexOf("#");
    s >= 0 && ((c.hash = o.substring(s)), (o = o.substring(0, s)));
    let g = o.indexOf("?");
    g >= 0 && ((c.search = o.substring(g)), (o = o.substring(0, g))),
      o && (c.pathname = o);
  }
  return c;
}
function vf(o, c, s, g = {}) {
  let { window: d = document.defaultView, v5Compat: m = !1 } = g,
    S = d.history,
    _ = "POP",
    w = null,
    k = z();
  k == null && ((k = 0), S.replaceState({ ...S.state, idx: k }, ""));
  function z() {
    return (S.state || { idx: null }).idx;
  }
  function B() {
    _ = "POP";
    let D = z(),
      H = D == null ? null : D - k;
    (k = D), w && w({ action: _, location: F.location, delta: H });
  }
  function L(D, H) {
    _ = "PUSH";
    let G = au(F.location, D, H);
    k = z() + 1;
    let J = k1(G, k),
      ee = F.createHref(G);
    try {
      S.pushState(J, "", ee);
    } catch (se) {
      if (se instanceof DOMException && se.name === "DataCloneError") throw se;
      d.location.assign(ee);
    }
    m && w && w({ action: _, location: F.location, delta: 1 });
  }
  function W(D, H) {
    _ = "REPLACE";
    let G = au(F.location, D, H);
    k = z();
    let J = k1(G, k),
      ee = F.createHref(G);
    S.replaceState(J, "", ee),
      m && w && w({ action: _, location: F.location, delta: 0 });
  }
  function M(D) {
    return gf(D);
  }
  let F = {
    get action() {
      return _;
    },
    get location() {
      return o(d, S);
    },
    listen(D) {
      if (w) throw new Error("A history only accepts one active listener");
      return (
        d.addEventListener(x1, B),
        (w = D),
        () => {
          d.removeEventListener(x1, B), (w = null);
        }
      );
    },
    createHref(D) {
      return c(d, D);
    },
    createURL: M,
    encodeLocation(D) {
      let H = M(D);
      return { pathname: H.pathname, search: H.search, hash: H.hash };
    },
    push: L,
    replace: W,
    go(D) {
      return S.go(D);
    },
  };
  return F;
}
function gf(o, c = !1) {
  let s = "http://localhost";
  typeof window < "u" &&
    (s =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Ne(s, "No window.location.(origin|href) available to create URL");
  let g = typeof o == "string" ? o : Tr(o);
  return (
    (g = g.replace(/ $/, "%20")),
    !c && g.startsWith("//") && (g = s + g),
    new URL(g, s)
  );
}
function L1(o, c, s = "/") {
  return yf(o, c, s, !1);
}
function yf(o, c, s, g) {
  let d = typeof c == "string" ? zr(c) : c,
    m = Bt(d.pathname || "/", s);
  if (m == null) return null;
  let S = j1(o);
  Cf(S);
  let _ = null;
  for (let w = 0; _ == null && w < S.length; ++w) {
    let k = Rf(m);
    _ = Nf(S[w], k, g);
  }
  return _;
}
function j1(o, c = [], s = [], g = "") {
  let d = (m, S, _) => {
    let w = {
      relativePath: _ === void 0 ? m.path || "" : _,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: S,
      route: m,
    };
    w.relativePath.startsWith("/") &&
      (Ne(
        w.relativePath.startsWith(g),
        `Absolute route path "${w.relativePath}" nested under path "${g}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (w.relativePath = w.relativePath.slice(g.length)));
    let k = zt([g, w.relativePath]),
      z = s.concat(w);
    m.children &&
      m.children.length > 0 &&
      (Ne(
        m.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${k}".`
      ),
      j1(m.children, c, z, k)),
      !(m.path == null && !m.index) &&
        c.push({ path: k, score: Lf(k, m.index), routesMeta: z });
  };
  return (
    o.forEach((m, S) => {
      var _;
      if (m.path === "" || !((_ = m.path) != null && _.includes("?"))) d(m, S);
      else for (let w of N1(m.path)) d(m, S, w);
    }),
    c
  );
}
function N1(o) {
  let c = o.split("/");
  if (c.length === 0) return [];
  let [s, ...g] = c,
    d = s.endsWith("?"),
    m = s.replace(/\?$/, "");
  if (g.length === 0) return d ? [m, ""] : [m];
  let S = N1(g.join("/")),
    _ = [];
  return (
    _.push(...S.map((w) => (w === "" ? m : [m, w].join("/")))),
    d && _.push(...S),
    _.map((w) => (o.startsWith("/") && w === "" ? "/" : w))
  );
}
function Cf(o) {
  o.sort((c, s) =>
    c.score !== s.score
      ? s.score - c.score
      : jf(
          c.routesMeta.map((g) => g.childrenIndex),
          s.routesMeta.map((g) => g.childrenIndex)
        )
  );
}
var wf = /^:[\w-]+$/,
  xf = 3,
  kf = 2,
  Sf = 1,
  _f = 10,
  Ef = -2,
  S1 = (o) => o === "*";
function Lf(o, c) {
  let s = o.split("/"),
    g = s.length;
  return (
    s.some(S1) && (g += Ef),
    c && (g += kf),
    s
      .filter((d) => !S1(d))
      .reduce((d, m) => d + (wf.test(m) ? xf : m === "" ? Sf : _f), g)
  );
}
function jf(o, c) {
  return o.length === c.length && o.slice(0, -1).every((g, d) => g === c[d])
    ? o[o.length - 1] - c[c.length - 1]
    : 0;
}
function Nf(o, c, s = !1) {
  let { routesMeta: g } = o,
    d = {},
    m = "/",
    S = [];
  for (let _ = 0; _ < g.length; ++_) {
    let w = g[_],
      k = _ === g.length - 1,
      z = m === "/" ? c : c.slice(m.length) || "/",
      B = ti(
        { path: w.relativePath, caseSensitive: w.caseSensitive, end: k },
        z
      ),
      L = w.route;
    if (
      (!B &&
        k &&
        s &&
        !g[g.length - 1].route.index &&
        (B = ti(
          { path: w.relativePath, caseSensitive: w.caseSensitive, end: !1 },
          z
        )),
      !B)
    )
      return null;
    Object.assign(d, B.params),
      S.push({
        params: d,
        pathname: zt([m, B.pathname]),
        pathnameBase: zf(zt([m, B.pathnameBase])),
        route: L,
      }),
      B.pathnameBase !== "/" && (m = zt([m, B.pathnameBase]));
  }
  return S;
}
function ti(o, c) {
  typeof o == "string" && (o = { path: o, caseSensitive: !1, end: !0 });
  let [s, g] = Pf(o.path, o.caseSensitive, o.end),
    d = c.match(s);
  if (!d) return null;
  let m = d[0],
    S = m.replace(/(.)\/+$/, "$1"),
    _ = d.slice(1);
  return {
    params: g.reduce((k, { paramName: z, isOptional: B }, L) => {
      if (z === "*") {
        let M = _[L] || "";
        S = m.slice(0, m.length - M.length).replace(/(.)\/+$/, "$1");
      }
      const W = _[L];
      return (
        B && !W ? (k[z] = void 0) : (k[z] = (W || "").replace(/%2F/g, "/")), k
      );
    }, {}),
    pathname: m,
    pathnameBase: S,
    pattern: o,
  };
}
function Pf(o, c = !1, s = !0) {
  _t(
    o === "*" || !o.endsWith("*") || o.endsWith("/*"),
    `Route path "${o}" will be treated as if it were "${o.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let g = [],
    d =
      "^" +
      o
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (S, _, w) => (
            g.push({ paramName: _, isOptional: w != null }),
            w ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    o.endsWith("*")
      ? (g.push({ paramName: "*" }),
        (d += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
      ? (d += "\\/*$")
      : o !== "" && o !== "/" && (d += "(?:(?=\\/|$))"),
    [new RegExp(d, c ? void 0 : "i"), g]
  );
}
function Rf(o) {
  try {
    return o
      .split("/")
      .map((c) => decodeURIComponent(c).replace(/\//g, "%2F"))
      .join("/");
  } catch (c) {
    return (
      _t(
        !1,
        `The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`
      ),
      o
    );
  }
}
function Bt(o, c) {
  if (c === "/") return o;
  if (!o.toLowerCase().startsWith(c.toLowerCase())) return null;
  let s = c.endsWith("/") ? c.length - 1 : c.length,
    g = o.charAt(s);
  return g && g !== "/" ? null : o.slice(s) || "/";
}
function Mf(o, c = "/") {
  let {
    pathname: s,
    search: g = "",
    hash: d = "",
  } = typeof o == "string" ? zr(o) : o;
  return {
    pathname: s ? (s.startsWith("/") ? s : Hf(s, c)) : c,
    search: Bf(g),
    hash: Ff(d),
  };
}
function Hf(o, c) {
  let s = c.replace(/\/+$/, "").split("/");
  return (
    o.split("/").forEach((d) => {
      d === ".." ? s.length > 1 && s.pop() : d !== "." && s.push(d);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function ou(o, c, s, g) {
  return `Cannot include a '${o}' character in a manually specified \`to.${c}\` field [${JSON.stringify(
    g
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Tf(o) {
  return o.filter(
    (c, s) => s === 0 || (c.route.path && c.route.path.length > 0)
  );
}
function P1(o) {
  let c = Tf(o);
  return c.map((s, g) => (g === c.length - 1 ? s.pathname : s.pathnameBase));
}
function R1(o, c, s, g = !1) {
  let d;
  typeof o == "string"
    ? (d = zr(o))
    : ((d = { ...o }),
      Ne(
        !d.pathname || !d.pathname.includes("?"),
        ou("?", "pathname", "search", d)
      ),
      Ne(
        !d.pathname || !d.pathname.includes("#"),
        ou("#", "pathname", "hash", d)
      ),
      Ne(!d.search || !d.search.includes("#"), ou("#", "search", "hash", d)));
  let m = o === "" || d.pathname === "",
    S = m ? "/" : d.pathname,
    _;
  if (S == null) _ = s;
  else {
    let B = c.length - 1;
    if (!g && S.startsWith("..")) {
      let L = S.split("/");
      for (; L[0] === ".."; ) L.shift(), (B -= 1);
      d.pathname = L.join("/");
    }
    _ = B >= 0 ? c[B] : "/";
  }
  let w = Mf(d, _),
    k = S && S !== "/" && S.endsWith("/"),
    z = (m || S === ".") && s.endsWith("/");
  return !w.pathname.endsWith("/") && (k || z) && (w.pathname += "/"), w;
}
var zt = (o) => o.join("/").replace(/\/\/+/g, "/"),
  zf = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Bf = (o) => (!o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o),
  Ff = (o) => (!o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o);
function Vf(o) {
  return (
    o != null &&
    typeof o.status == "number" &&
    typeof o.statusText == "string" &&
    typeof o.internal == "boolean" &&
    "data" in o
  );
}
var M1 = ["POST", "PUT", "PATCH", "DELETE"];
new Set(M1);
var Df = ["GET", ...M1];
new Set(Df);
var $n = E.createContext(null);
$n.displayName = "DataRouter";
var ni = E.createContext(null);
ni.displayName = "DataRouterState";
var H1 = E.createContext({ isTransitioning: !1 });
H1.displayName = "ViewTransition";
var Of = E.createContext(new Map());
Of.displayName = "Fetchers";
var If = E.createContext(null);
If.displayName = "Await";
var Et = E.createContext(null);
Et.displayName = "Navigation";
var ri = E.createContext(null);
ri.displayName = "Location";
var Ft = E.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ft.displayName = "Route";
var fu = E.createContext(null);
fu.displayName = "RouteError";
function Af(o, { relative: c } = {}) {
  Ne(
    Br(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: g } = E.useContext(Et),
    { hash: d, pathname: m, search: S } = Fr(o, { relative: c }),
    _ = m;
  return (
    s !== "/" && (_ = m === "/" ? s : zt([s, m])),
    g.createHref({ pathname: _, search: S, hash: d })
  );
}
function Br() {
  return E.useContext(ri) != null;
}
function gn() {
  return (
    Ne(
      Br(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    E.useContext(ri).location
  );
}
var T1 =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function z1(o) {
  E.useContext(Et).static || E.useLayoutEffect(o);
}
function Uf() {
  let { isDataRoute: o } = E.useContext(Ft);
  return o ? td() : $f();
}
function $f() {
  Ne(
    Br(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let o = E.useContext($n),
    { basename: c, navigator: s } = E.useContext(Et),
    { matches: g } = E.useContext(Ft),
    { pathname: d } = gn(),
    m = JSON.stringify(P1(g)),
    S = E.useRef(!1);
  return (
    z1(() => {
      S.current = !0;
    }),
    E.useCallback(
      (w, k = {}) => {
        if ((_t(S.current, T1), !S.current)) return;
        if (typeof w == "number") {
          s.go(w);
          return;
        }
        let z = R1(w, JSON.parse(m), d, k.relative === "path");
        o == null &&
          c !== "/" &&
          (z.pathname = z.pathname === "/" ? c : zt([c, z.pathname])),
          (k.replace ? s.replace : s.push)(z, k.state, k);
      },
      [c, s, m, d, o]
    )
  );
}
E.createContext(null);
function Fr(o, { relative: c } = {}) {
  let { matches: s } = E.useContext(Ft),
    { pathname: g } = gn(),
    d = JSON.stringify(P1(s));
  return E.useMemo(() => R1(o, JSON.parse(d), g, c === "path"), [o, d, g, c]);
}
function Wf(o, c, s, g) {
  Ne(
    Br(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = E.useContext(Et),
    { matches: m } = E.useContext(Ft),
    S = m[m.length - 1],
    _ = S ? S.params : {},
    w = S ? S.pathname : "/",
    k = S ? S.pathnameBase : "/",
    z = S && S.route;
  {
    let H = (z && z.path) || "";
    B1(
      w,
      !z || H.endsWith("*") || H.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${
        H === "/" ? "*" : `${H}/*`
      }">.`
    );
  }
  let B = gn(),
    L;
  L = B;
  let W = L.pathname || "/",
    M = W;
  if (k !== "/") {
    let H = k.replace(/^\//, "").split("/");
    M = "/" + W.replace(/^\//, "").split("/").slice(H.length).join("/");
  }
  let F = L1(o, { pathname: M });
  return (
    _t(
      z || F != null,
      `No routes matched location "${L.pathname}${L.search}${L.hash}" `
    ),
    _t(
      F == null ||
        F[F.length - 1].route.element !== void 0 ||
        F[F.length - 1].route.Component !== void 0 ||
        F[F.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    Xf(
      F &&
        F.map((H) =>
          Object.assign({}, H, {
            params: Object.assign({}, _, H.params),
            pathname: zt([
              k,
              d.encodeLocation
                ? d.encodeLocation(H.pathname).pathname
                : H.pathname,
            ]),
            pathnameBase:
              H.pathnameBase === "/"
                ? k
                : zt([
                    k,
                    d.encodeLocation
                      ? d.encodeLocation(H.pathnameBase).pathname
                      : H.pathnameBase,
                  ]),
          })
        ),
      m,
      s,
      g
    )
  );
}
function Zf() {
  let o = ed(),
    c = Vf(o)
      ? `${o.status} ${o.statusText}`
      : o instanceof Error
      ? o.message
      : JSON.stringify(o),
    s = o instanceof Error ? o.stack : null,
    g = "rgba(200,200,200, 0.5)",
    d = { padding: "0.5rem", backgroundColor: g },
    m = { padding: "2px 4px", backgroundColor: g },
    S = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", o),
    (S = E.createElement(
      E.Fragment,
      null,
      E.createElement("p", null, "💿 Hey developer 👋"),
      E.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        E.createElement("code", { style: m }, "ErrorBoundary"),
        " or",
        " ",
        E.createElement("code", { style: m }, "errorElement"),
        " prop on your route."
      )
    )),
    E.createElement(
      E.Fragment,
      null,
      E.createElement("h2", null, "Unexpected Application Error!"),
      E.createElement("h3", { style: { fontStyle: "italic" } }, c),
      s ? E.createElement("pre", { style: d }, s) : null,
      S
    )
  );
}
var Qf = E.createElement(Zf, null),
  Yf = class extends E.Component {
    constructor(o) {
      super(o),
        (this.state = {
          location: o.location,
          revalidation: o.revalidation,
          error: o.error,
        });
    }
    static getDerivedStateFromError(o) {
      return { error: o };
    }
    static getDerivedStateFromProps(o, c) {
      return c.location !== o.location ||
        (c.revalidation !== "idle" && o.revalidation === "idle")
        ? { error: o.error, location: o.location, revalidation: o.revalidation }
        : {
            error: o.error !== void 0 ? o.error : c.error,
            location: c.location,
            revalidation: o.revalidation || c.revalidation,
          };
    }
    componentDidCatch(o, c) {
      console.error(
        "React Router caught the following error during render",
        o,
        c
      );
    }
    render() {
      return this.state.error !== void 0
        ? E.createElement(
            Ft.Provider,
            { value: this.props.routeContext },
            E.createElement(fu.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Kf({ routeContext: o, match: c, children: s }) {
  let g = E.useContext($n);
  return (
    g &&
      g.static &&
      g.staticContext &&
      (c.route.errorElement || c.route.ErrorBoundary) &&
      (g.staticContext._deepestRenderedBoundaryId = c.route.id),
    E.createElement(Ft.Provider, { value: o }, s)
  );
}
function Xf(o, c = [], s = null, g = null) {
  if (o == null) {
    if (!s) return null;
    if (s.errors) o = s.matches;
    else if (c.length === 0 && !s.initialized && s.matches.length > 0)
      o = s.matches;
    else return null;
  }
  let d = o,
    m = s == null ? void 0 : s.errors;
  if (m != null) {
    let w = d.findIndex(
      (k) => k.route.id && (m == null ? void 0 : m[k.route.id]) !== void 0
    );
    Ne(
      w >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ),
      (d = d.slice(0, Math.min(d.length, w + 1)));
  }
  let S = !1,
    _ = -1;
  if (s)
    for (let w = 0; w < d.length; w++) {
      let k = d[w];
      if (
        ((k.route.HydrateFallback || k.route.hydrateFallbackElement) && (_ = w),
        k.route.id)
      ) {
        let { loaderData: z, errors: B } = s,
          L =
            k.route.loader &&
            !z.hasOwnProperty(k.route.id) &&
            (!B || B[k.route.id] === void 0);
        if (k.route.lazy || L) {
          (S = !0), _ >= 0 ? (d = d.slice(0, _ + 1)) : (d = [d[0]]);
          break;
        }
      }
    }
  return d.reduceRight((w, k, z) => {
    let B,
      L = !1,
      W = null,
      M = null;
    s &&
      ((B = m && k.route.id ? m[k.route.id] : void 0),
      (W = k.route.errorElement || Qf),
      S &&
        (_ < 0 && z === 0
          ? (B1(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (L = !0),
            (M = null))
          : _ === z &&
            ((L = !0), (M = k.route.hydrateFallbackElement || null))));
    let F = c.concat(d.slice(0, z + 1)),
      D = () => {
        let H;
        return (
          B
            ? (H = W)
            : L
            ? (H = M)
            : k.route.Component
            ? (H = E.createElement(k.route.Component, null))
            : k.route.element
            ? (H = k.route.element)
            : (H = w),
          E.createElement(Kf, {
            match: k,
            routeContext: { outlet: w, matches: F, isDataRoute: s != null },
            children: H,
          })
        );
      };
    return s && (k.route.ErrorBoundary || k.route.errorElement || z === 0)
      ? E.createElement(Yf, {
          location: s.location,
          revalidation: s.revalidation,
          component: W,
          error: B,
          children: D(),
          routeContext: { outlet: null, matches: F, isDataRoute: !0 },
        })
      : D();
  }, null);
}
function du(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Gf(o) {
  let c = E.useContext($n);
  return Ne(c, du(o)), c;
}
function Jf(o) {
  let c = E.useContext(ni);
  return Ne(c, du(o)), c;
}
function qf(o) {
  let c = E.useContext(Ft);
  return Ne(c, du(o)), c;
}
function pu(o) {
  let c = qf(o),
    s = c.matches[c.matches.length - 1];
  return (
    Ne(
      s.route.id,
      `${o} can only be used on routes that contain a unique "id"`
    ),
    s.route.id
  );
}
function bf() {
  return pu("useRouteId");
}
function ed() {
  var g;
  let o = E.useContext(fu),
    c = Jf("useRouteError"),
    s = pu("useRouteError");
  return o !== void 0 ? o : (g = c.errors) == null ? void 0 : g[s];
}
function td() {
  let { router: o } = Gf("useNavigate"),
    c = pu("useNavigate"),
    s = E.useRef(!1);
  return (
    z1(() => {
      s.current = !0;
    }),
    E.useCallback(
      async (d, m = {}) => {
        _t(s.current, T1),
          s.current &&
            (typeof d == "number"
              ? o.navigate(d)
              : await o.navigate(d, { fromRouteId: c, ...m }));
      },
      [o, c]
    )
  );
}
var _1 = {};
function B1(o, c, s) {
  !c && !_1[o] && ((_1[o] = !0), _t(!1, s));
}
E.memo(nd);
function nd({ routes: o, future: c, state: s }) {
  return Wf(o, void 0, s, c);
}
function rd({
  basename: o = "/",
  children: c = null,
  location: s,
  navigationType: g = "POP",
  navigator: d,
  static: m = !1,
}) {
  Ne(
    !Br(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let S = o.replace(/^\/*/, "/"),
    _ = E.useMemo(
      () => ({ basename: S, navigator: d, static: m, future: {} }),
      [S, d, m]
    );
  typeof s == "string" && (s = zr(s));
  let {
      pathname: w = "/",
      search: k = "",
      hash: z = "",
      state: B = null,
      key: L = "default",
    } = s,
    W = E.useMemo(() => {
      let M = Bt(w, S);
      return M == null
        ? null
        : {
            location: { pathname: M, search: k, hash: z, state: B, key: L },
            navigationType: g,
          };
    }, [S, w, k, z, B, L, g]);
  return (
    _t(
      W != null,
      `<Router basename="${S}"> is not able to match the URL "${w}${k}${z}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    W == null
      ? null
      : E.createElement(
          Et.Provider,
          { value: _ },
          E.createElement(ri.Provider, { children: c, value: W })
        )
  );
}
var bl = "get",
  ei = "application/x-www-form-urlencoded";
function li(o) {
  return o != null && typeof o.tagName == "string";
}
function ld(o) {
  return li(o) && o.tagName.toLowerCase() === "button";
}
function id(o) {
  return li(o) && o.tagName.toLowerCase() === "form";
}
function od(o) {
  return li(o) && o.tagName.toLowerCase() === "input";
}
function ud(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function sd(o, c) {
  return o.button === 0 && (!c || c === "_self") && !ud(o);
}
var ql = null;
function ad() {
  if (ql === null)
    try {
      new FormData(document.createElement("form"), 0), (ql = !1);
    } catch {
      ql = !0;
    }
  return ql;
}
var cd = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function uu(o) {
  return o != null && !cd.has(o)
    ? (_t(
        !1,
        `"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ei}"`
      ),
      null)
    : o;
}
function fd(o, c) {
  let s, g, d, m, S;
  if (id(o)) {
    let _ = o.getAttribute("action");
    (g = _ ? Bt(_, c) : null),
      (s = o.getAttribute("method") || bl),
      (d = uu(o.getAttribute("enctype")) || ei),
      (m = new FormData(o));
  } else if (ld(o) || (od(o) && (o.type === "submit" || o.type === "image"))) {
    let _ = o.form;
    if (_ == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let w = o.getAttribute("formaction") || _.getAttribute("action");
    if (
      ((g = w ? Bt(w, c) : null),
      (s = o.getAttribute("formmethod") || _.getAttribute("method") || bl),
      (d =
        uu(o.getAttribute("formenctype")) ||
        uu(_.getAttribute("enctype")) ||
        ei),
      (m = new FormData(_, o)),
      !ad())
    ) {
      let { name: k, type: z, value: B } = o;
      if (z === "image") {
        let L = k ? `${k}.` : "";
        m.append(`${L}x`, "0"), m.append(`${L}y`, "0");
      } else k && m.append(k, B);
    }
  } else {
    if (li(o))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (s = bl), (g = null), (d = ei), (S = o);
  }
  return (
    m && d === "text/plain" && ((S = m), (m = void 0)),
    { action: g, method: s.toLowerCase(), encType: d, formData: m, body: S }
  );
}
function hu(o, c) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(c);
}
async function dd(o, c) {
  if (o.id in c) return c[o.id];
  try {
    let s = await import(o.module);
    return (c[o.id] = s), s;
  } catch (s) {
    return (
      console.error(
        `Error loading route module \`${o.module}\`, reloading page...`
      ),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function pd(o) {
  return o == null
    ? !1
    : o.href == null
    ? o.rel === "preload" &&
      typeof o.imageSrcSet == "string" &&
      typeof o.imageSizes == "string"
    : typeof o.rel == "string" && typeof o.href == "string";
}
async function hd(o, c, s) {
  let g = await Promise.all(
    o.map(async (d) => {
      let m = c.routes[d.route.id];
      if (m) {
        let S = await dd(m, s);
        return S.links ? S.links() : [];
      }
      return [];
    })
  );
  return yd(
    g
      .flat(1)
      .filter(pd)
      .filter((d) => d.rel === "stylesheet" || d.rel === "preload")
      .map((d) =>
        d.rel === "stylesheet"
          ? { ...d, rel: "prefetch", as: "style" }
          : { ...d, rel: "prefetch" }
      )
  );
}
function E1(o, c, s, g, d, m) {
  let S = (w, k) => (s[k] ? w.route.id !== s[k].route.id : !0),
    _ = (w, k) => {
      var z;
      return (
        s[k].pathname !== w.pathname ||
        (((z = s[k].route.path) == null ? void 0 : z.endsWith("*")) &&
          s[k].params["*"] !== w.params["*"])
      );
    };
  return m === "assets"
    ? c.filter((w, k) => S(w, k) || _(w, k))
    : m === "data"
    ? c.filter((w, k) => {
        var B;
        let z = g.routes[w.route.id];
        if (!z || !z.hasLoader) return !1;
        if (S(w, k) || _(w, k)) return !0;
        if (w.route.shouldRevalidate) {
          let L = w.route.shouldRevalidate({
            currentUrl: new URL(d.pathname + d.search + d.hash, window.origin),
            currentParams: ((B = s[0]) == null ? void 0 : B.params) || {},
            nextUrl: new URL(o, window.origin),
            nextParams: w.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof L == "boolean") return L;
        }
        return !0;
      })
    : [];
}
function md(o, c, { includeHydrateFallback: s } = {}) {
  return vd(
    o
      .map((g) => {
        let d = c.routes[g.route.id];
        if (!d) return [];
        let m = [d.module];
        return (
          d.clientActionModule && (m = m.concat(d.clientActionModule)),
          d.clientLoaderModule && (m = m.concat(d.clientLoaderModule)),
          s &&
            d.hydrateFallbackModule &&
            (m = m.concat(d.hydrateFallbackModule)),
          d.imports && (m = m.concat(d.imports)),
          m
        );
      })
      .flat(1)
  );
}
function vd(o) {
  return [...new Set(o)];
}
function gd(o) {
  let c = {},
    s = Object.keys(o).sort();
  for (let g of s) c[g] = o[g];
  return c;
}
function yd(o, c) {
  let s = new Set();
  return (
    new Set(c),
    o.reduce((g, d) => {
      let m = JSON.stringify(gd(d));
      return s.has(m) || (s.add(m), g.push({ key: m, link: d })), g;
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Cd = new Set([100, 101, 204, 205]);
function wd(o, c) {
  let s =
    typeof o == "string"
      ? new URL(
          o,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : o;
  return (
    s.pathname === "/"
      ? (s.pathname = "_root.data")
      : c && Bt(s.pathname, c) === "/"
      ? (s.pathname = `${c.replace(/\/$/, "")}/_root.data`)
      : (s.pathname = `${s.pathname.replace(/\/$/, "")}.data`),
    s
  );
}
function F1() {
  let o = E.useContext($n);
  return (
    hu(
      o,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    o
  );
}
function xd() {
  let o = E.useContext(ni);
  return (
    hu(
      o,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    o
  );
}
var mu = E.createContext(void 0);
mu.displayName = "FrameworkContext";
function V1() {
  let o = E.useContext(mu);
  return (
    hu(o, "You must render this element inside a <HydratedRouter> element"), o
  );
}
function kd(o, c) {
  let s = E.useContext(mu),
    [g, d] = E.useState(!1),
    [m, S] = E.useState(!1),
    {
      onFocus: _,
      onBlur: w,
      onMouseEnter: k,
      onMouseLeave: z,
      onTouchStart: B,
    } = c,
    L = E.useRef(null);
  E.useEffect(() => {
    if ((o === "render" && S(!0), o === "viewport")) {
      let F = (H) => {
          H.forEach((G) => {
            S(G.isIntersecting);
          });
        },
        D = new IntersectionObserver(F, { threshold: 0.5 });
      return (
        L.current && D.observe(L.current),
        () => {
          D.disconnect();
        }
      );
    }
  }, [o]),
    E.useEffect(() => {
      if (g) {
        let F = setTimeout(() => {
          S(!0);
        }, 100);
        return () => {
          clearTimeout(F);
        };
      }
    }, [g]);
  let W = () => {
      d(!0);
    },
    M = () => {
      d(!1), S(!1);
    };
  return s
    ? o !== "intent"
      ? [m, L, {}]
      : [
          m,
          L,
          {
            onFocus: Mr(_, W),
            onBlur: Mr(w, M),
            onMouseEnter: Mr(k, W),
            onMouseLeave: Mr(z, M),
            onTouchStart: Mr(B, W),
          },
        ]
    : [!1, L, {}];
}
function Mr(o, c) {
  return (s) => {
    o && o(s), s.defaultPrevented || c(s);
  };
}
function Sd({ page: o, ...c }) {
  let { router: s } = F1(),
    g = E.useMemo(() => L1(s.routes, o, s.basename), [s.routes, o, s.basename]);
  return g ? E.createElement(Ed, { page: o, matches: g, ...c }) : null;
}
function _d(o) {
  let { manifest: c, routeModules: s } = V1(),
    [g, d] = E.useState([]);
  return (
    E.useEffect(() => {
      let m = !1;
      return (
        hd(o, c, s).then((S) => {
          m || d(S);
        }),
        () => {
          m = !0;
        }
      );
    }, [o, c, s]),
    g
  );
}
function Ed({ page: o, matches: c, ...s }) {
  let g = gn(),
    { manifest: d, routeModules: m } = V1(),
    { basename: S } = F1(),
    { loaderData: _, matches: w } = xd(),
    k = E.useMemo(() => E1(o, c, w, d, g, "data"), [o, c, w, d, g]),
    z = E.useMemo(() => E1(o, c, w, d, g, "assets"), [o, c, w, d, g]),
    B = E.useMemo(() => {
      if (o === g.pathname + g.search + g.hash) return [];
      let M = new Set(),
        F = !1;
      if (
        (c.forEach((H) => {
          var J;
          let G = d.routes[H.route.id];
          !G ||
            !G.hasLoader ||
            ((!k.some((ee) => ee.route.id === H.route.id) &&
              H.route.id in _ &&
              (J = m[H.route.id]) != null &&
              J.shouldRevalidate) ||
            G.hasClientLoader
              ? (F = !0)
              : M.add(H.route.id));
        }),
        M.size === 0)
      )
        return [];
      let D = wd(o, S);
      return (
        F &&
          M.size > 0 &&
          D.searchParams.set(
            "_routes",
            c
              .filter((H) => M.has(H.route.id))
              .map((H) => H.route.id)
              .join(",")
          ),
        [D.pathname + D.search]
      );
    }, [S, _, g, d, k, c, o, m]),
    L = E.useMemo(() => md(z, d), [z, d]),
    W = _d(z);
  return E.createElement(
    E.Fragment,
    null,
    B.map((M) =>
      E.createElement("link", {
        key: M,
        rel: "prefetch",
        as: "fetch",
        href: M,
        ...s,
      })
    ),
    L.map((M) =>
      E.createElement("link", { key: M, rel: "modulepreload", href: M, ...s })
    ),
    W.map(({ key: M, link: F }) => E.createElement("link", { key: M, ...F }))
  );
}
function Ld(...o) {
  return (c) => {
    o.forEach((s) => {
      typeof s == "function" ? s(c) : s != null && (s.current = c);
    });
  };
}
var D1 =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  D1 && (window.__reactRouterVersion = "7.6.1");
} catch {}
function jd({ basename: o, children: c, window: s }) {
  let g = E.useRef();
  g.current == null && (g.current = hf({ window: s, v5Compat: !0 }));
  let d = g.current,
    [m, S] = E.useState({ action: d.action, location: d.location }),
    _ = E.useCallback(
      (w) => {
        E.startTransition(() => S(w));
      },
      [S]
    );
  return (
    E.useLayoutEffect(() => d.listen(_), [d, _]),
    E.createElement(rd, {
      basename: o,
      children: c,
      location: m.location,
      navigationType: m.action,
      navigator: d,
    })
  );
}
var O1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ii = E.forwardRef(function (
    {
      onClick: c,
      discover: s = "render",
      prefetch: g = "none",
      relative: d,
      reloadDocument: m,
      replace: S,
      state: _,
      target: w,
      to: k,
      preventScrollReset: z,
      viewTransition: B,
      ...L
    },
    W
  ) {
    let { basename: M } = E.useContext(Et),
      F = typeof k == "string" && O1.test(k),
      D,
      H = !1;
    if (typeof k == "string" && F && ((D = k), D1))
      try {
        let Ce = new URL(window.location.href),
          Pe = k.startsWith("//") ? new URL(Ce.protocol + k) : new URL(k),
          mt = Bt(Pe.pathname, M);
        Pe.origin === Ce.origin && mt != null
          ? (k = mt + Pe.search + Pe.hash)
          : (H = !0);
      } catch {
        _t(
          !1,
          `<Link to="${k}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let G = Af(k, { relative: d }),
      [J, ee, se] = kd(g, L),
      ye = Md(k, {
        replace: S,
        state: _,
        target: w,
        preventScrollReset: z,
        relative: d,
        viewTransition: B,
      });
    function me(Ce) {
      c && c(Ce), Ce.defaultPrevented || ye(Ce);
    }
    let _e = E.createElement("a", {
      ...L,
      ...se,
      href: D || G,
      onClick: H || m ? c : me,
      ref: Ld(W, ee),
      target: w,
      "data-discover": !F && s === "render" ? "true" : void 0,
    });
    return J && !F
      ? E.createElement(E.Fragment, null, _e, E.createElement(Sd, { page: G }))
      : _e;
  });
ii.displayName = "Link";
var Nd = E.forwardRef(function (
  {
    "aria-current": c = "page",
    caseSensitive: s = !1,
    className: g = "",
    end: d = !1,
    style: m,
    to: S,
    viewTransition: _,
    children: w,
    ...k
  },
  z
) {
  let B = Fr(S, { relative: k.relative }),
    L = gn(),
    W = E.useContext(ni),
    { navigator: M, basename: F } = E.useContext(Et),
    D = W != null && Fd(B) && _ === !0,
    H = M.encodeLocation ? M.encodeLocation(B).pathname : B.pathname,
    G = L.pathname,
    J =
      W && W.navigation && W.navigation.location
        ? W.navigation.location.pathname
        : null;
  s ||
    ((G = G.toLowerCase()),
    (J = J ? J.toLowerCase() : null),
    (H = H.toLowerCase())),
    J && F && (J = Bt(J, F) || J);
  const ee = H !== "/" && H.endsWith("/") ? H.length - 1 : H.length;
  let se = G === H || (!d && G.startsWith(H) && G.charAt(ee) === "/"),
    ye =
      J != null &&
      (J === H || (!d && J.startsWith(H) && J.charAt(H.length) === "/")),
    me = { isActive: se, isPending: ye, isTransitioning: D },
    _e = se ? c : void 0,
    Ce;
  typeof g == "function"
    ? (Ce = g(me))
    : (Ce = [
        g,
        se ? "active" : null,
        ye ? "pending" : null,
        D ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Pe = typeof m == "function" ? m(me) : m;
  return E.createElement(
    ii,
    {
      ...k,
      "aria-current": _e,
      className: Ce,
      ref: z,
      style: Pe,
      to: S,
      viewTransition: _,
    },
    typeof w == "function" ? w(me) : w
  );
});
Nd.displayName = "NavLink";
var Pd = E.forwardRef(
  (
    {
      discover: o = "render",
      fetcherKey: c,
      navigate: s,
      reloadDocument: g,
      replace: d,
      state: m,
      method: S = bl,
      action: _,
      onSubmit: w,
      relative: k,
      preventScrollReset: z,
      viewTransition: B,
      ...L
    },
    W
  ) => {
    let M = zd(),
      F = Bd(_, { relative: k }),
      D = S.toLowerCase() === "get" ? "get" : "post",
      H = typeof _ == "string" && O1.test(_),
      G = (J) => {
        if ((w && w(J), J.defaultPrevented)) return;
        J.preventDefault();
        let ee = J.nativeEvent.submitter,
          se = (ee == null ? void 0 : ee.getAttribute("formmethod")) || S;
        M(ee || J.currentTarget, {
          fetcherKey: c,
          method: se,
          navigate: s,
          replace: d,
          state: m,
          relative: k,
          preventScrollReset: z,
          viewTransition: B,
        });
      };
    return E.createElement("form", {
      ref: W,
      method: D,
      action: F,
      onSubmit: g ? w : G,
      ...L,
      "data-discover": !H && o === "render" ? "true" : void 0,
    });
  }
);
Pd.displayName = "Form";
function Rd(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function I1(o) {
  let c = E.useContext($n);
  return Ne(c, Rd(o)), c;
}
function Md(
  o,
  {
    target: c,
    replace: s,
    state: g,
    preventScrollReset: d,
    relative: m,
    viewTransition: S,
  } = {}
) {
  let _ = Uf(),
    w = gn(),
    k = Fr(o, { relative: m });
  return E.useCallback(
    (z) => {
      if (sd(z, c)) {
        z.preventDefault();
        let B = s !== void 0 ? s : Tr(w) === Tr(k);
        _(o, {
          replace: B,
          state: g,
          preventScrollReset: d,
          relative: m,
          viewTransition: S,
        });
      }
    },
    [w, _, k, s, g, c, o, d, m, S]
  );
}
var Hd = 0,
  Td = () => `__${String(++Hd)}__`;
function zd() {
  let { router: o } = I1("useSubmit"),
    { basename: c } = E.useContext(Et),
    s = bf();
  return E.useCallback(
    async (g, d = {}) => {
      let { action: m, method: S, encType: _, formData: w, body: k } = fd(g, c);
      if (d.navigate === !1) {
        let z = d.fetcherKey || Td();
        await o.fetch(z, s, d.action || m, {
          preventScrollReset: d.preventScrollReset,
          formData: w,
          body: k,
          formMethod: d.method || S,
          formEncType: d.encType || _,
          flushSync: d.flushSync,
        });
      } else
        await o.navigate(d.action || m, {
          preventScrollReset: d.preventScrollReset,
          formData: w,
          body: k,
          formMethod: d.method || S,
          formEncType: d.encType || _,
          replace: d.replace,
          state: d.state,
          fromRouteId: s,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition,
        });
    },
    [o, c, s]
  );
}
function Bd(o, { relative: c } = {}) {
  let { basename: s } = E.useContext(Et),
    g = E.useContext(Ft);
  Ne(g, "useFormAction must be used inside a RouteContext");
  let [d] = g.matches.slice(-1),
    m = { ...Fr(o || ".", { relative: c }) },
    S = gn();
  if (o == null) {
    m.search = S.search;
    let _ = new URLSearchParams(m.search),
      w = _.getAll("index");
    if (w.some((z) => z === "")) {
      _.delete("index"),
        w.filter((B) => B).forEach((B) => _.append("index", B));
      let z = _.toString();
      m.search = z ? `?${z}` : "";
    }
  }
  return (
    (!o || o === ".") &&
      d.route.index &&
      (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (m.pathname = m.pathname === "/" ? s : zt([s, m.pathname])),
    Tr(m)
  );
}
function Fd(o, c = {}) {
  let s = E.useContext(H1);
  Ne(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: g } = I1("useViewTransitionState"),
    d = Fr(o, { relative: c.relative });
  if (!s.isTransitioning) return !1;
  let m = Bt(s.currentLocation.pathname, g) || s.currentLocation.pathname,
    S = Bt(s.nextLocation.pathname, g) || s.nextLocation.pathname;
  return ti(d.pathname, S) != null || ti(d.pathname, m) != null;
}
[...Cd];
function Vd({ scrollToSection: o, aboutRef: c, serviceRef: s }) {
  return a.jsxs("footer", {
    className: St.footer,
    children: [
      a.jsxs("div", {
        className: St.details,
        children: [
          a.jsxs("div", {
            children: [
              a.jsxs("svg", {
                width: "24",
                height: "33",
                viewBox: "0 0 24 33",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  a.jsx("g", {
                    "clip-path": "url(#clip0_2_374)",
                    children: a.jsx("path", {
                      d: "M23.9993 12.5C23.9993 21.228 13.8455 31.482 13.4138 31.9142C13.0386 32.2892 12.5299 32.4999 11.9995 32.4999C11.4691 32.4999 10.9604 32.2892 10.5853 31.9142C10.153 31.4817 -0.000732422 21.228 -0.000732422 12.5C-0.000732422 9.3174 1.26355 6.26515 3.51399 4.01472C5.76442 1.76428 8.81667 0.5 11.9993 0.5C15.1819 0.5 18.2341 1.76428 20.4845 4.01472C22.735 6.26515 23.9993 9.3174 23.9993 12.5ZM11.9993 18.5C13.186 18.5 14.346 18.1481 15.3327 17.4888C16.3194 16.8295 17.0884 15.8925 17.5425 14.7961C17.9967 13.6997 18.1155 12.4933 17.884 11.3295C17.6525 10.1656 17.081 9.09647 16.2419 8.25736C15.4028 7.41824 14.3337 6.8468 13.1698 6.61529C12.0059 6.38378 10.7995 6.5026 9.70317 6.95672C8.60681 7.41085 7.66974 8.17988 7.01045 9.16658C6.35116 10.1533 5.99927 11.3133 5.99927 12.5C5.99923 13.2879 6.15441 14.0682 6.45592 14.7961C6.75744 15.5241 7.1994 16.1856 7.75655 16.7427C8.31371 17.2999 8.97516 17.7418 9.70313 18.0433C10.4311 18.3449 11.2113 18.5 11.9993 18.5Z",
                      fill: "#AE4C29",
                    }),
                  }),
                  a.jsx("defs", {
                    children: a.jsx("clipPath", {
                      id: "clip0_2_374",
                      children: a.jsx("rect", {
                        width: "24",
                        height: "32",
                        fill: "white",
                        transform: "translate(-0.000732422 0.5)",
                      }),
                    }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: St.location,
                children: [
                  a.jsx("h2", { children: "Location" }),
                  a.jsx("span", { children: "Lagos,Nigeria" }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            children: [
              a.jsxs("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  a.jsxs("g", {
                    "clip-path": "url(#clip0_2_382)",
                    children: [
                      a.jsx("path", {
                        d: "M2.99927 8.25V9.75H1.49927C1.30036 9.75 1.10959 9.67098 0.968937 9.53033C0.828285 9.38968 0.749268 9.19891 0.749268 9C0.749268 8.80109 0.828285 8.61032 0.968937 8.46967C1.10959 8.32902 1.30036 8.25 1.49927 8.25H2.99927ZM2.99927 11.25V12.75H1.49927C1.30036 12.75 1.10959 12.671 0.968937 12.5303C0.828285 12.3897 0.749268 12.1989 0.749268 12C0.749268 11.8011 0.828285 11.6103 0.968937 11.4697C1.10959 11.329 1.30036 11.25 1.49927 11.25H2.99927ZM2.99927 14.25V15.75H1.49927C1.30036 15.75 1.10959 15.671 0.968937 15.5303C0.828285 15.3897 0.749268 15.1989 0.749268 15C0.749268 14.8011 0.828285 14.6103 0.968937 14.4697C1.10959 14.329 1.30036 14.25 1.49927 14.25H2.99927Z",
                        fill: "#F2F1F2",
                      }),
                      a.jsx("path", {
                        d: "M20.9993 0H4.49927C3.90253 0 3.33023 0.237053 2.90828 0.65901C2.48632 1.08097 2.24927 1.65326 2.24927 2.25V8.25H4.49927C4.69818 8.25 4.88895 8.32902 5.0296 8.46967C5.17025 8.61032 5.24927 8.80109 5.24927 9C5.24927 9.19891 5.17025 9.38968 5.0296 9.53033C4.88895 9.67098 4.69818 9.75 4.49927 9.75H2.24927V11.25H4.49927C4.69818 11.25 4.88895 11.329 5.0296 11.4697C5.17025 11.6103 5.24927 11.8011 5.24927 12C5.24927 12.1989 5.17025 12.3897 5.0296 12.5303C4.88895 12.671 4.69818 12.75 4.49927 12.75H2.24927V14.25H4.49927C4.69818 14.25 4.88895 14.329 5.0296 14.4697C5.17025 14.6103 5.24927 14.8011 5.24927 15C5.24927 15.1989 5.17025 15.3897 5.0296 15.5303C4.88895 15.671 4.69818 15.75 4.49927 15.75H2.24927V21.75C2.24927 22.3467 2.48632 22.919 2.90828 23.341C3.33023 23.7629 3.90253 24 4.49927 24H20.9993C21.596 24 22.1683 23.7629 22.5903 23.341C23.0122 22.919 23.2493 22.3467 23.2493 21.75V2.25C23.2493 1.65326 23.0122 1.08097 22.5903 0.65901C22.1683 0.237053 21.596 0 20.9993 0V0ZM12.7493 7.125C13.1201 7.125 13.4826 7.23497 13.791 7.44099C14.0993 7.64702 14.3396 7.93986 14.4815 8.28247C14.6235 8.62508 14.6606 9.00208 14.5882 9.3658C14.5159 9.72951 14.3373 10.0636 14.0751 10.3258C13.8129 10.588 13.4788 10.7666 13.1151 10.839C12.7513 10.9113 12.3743 10.8742 12.0317 10.7323C11.6891 10.5904 11.3963 10.35 11.1903 10.0417C10.9842 9.73335 10.8743 9.37084 10.8743 9C10.8743 8.50272 11.0718 8.02581 11.4234 7.67417C11.7751 7.32254 12.252 7.125 12.7493 7.125ZM16.8743 16.5C16.8743 16.5995 16.8348 16.6948 16.7644 16.7652C16.6941 16.8355 16.5987 16.875 16.4993 16.875H8.99927C8.89981 16.875 8.80443 16.8355 8.7341 16.7652C8.66378 16.6948 8.62427 16.5995 8.62427 16.5V15.75C8.62625 14.8555 8.98246 13.9982 9.61497 13.3657C10.2475 12.7332 11.1048 12.377 11.9993 12.375H13.4993C14.3938 12.377 15.2511 12.7332 15.8836 13.3657C16.5161 13.9982 16.8723 14.8555 16.8743 15.75V16.5Z",
                        fill: "#AE4C29",
                      }),
                    ],
                  }),
                  a.jsx("defs", {
                    children: a.jsx("clipPath", {
                      id: "clip0_2_382",
                      children: a.jsx("rect", {
                        width: "24",
                        height: "24",
                        fill: "white",
                        transform: "translate(-0.000732422)",
                      }),
                    }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: St.location,
                children: [
                  a.jsx("h2", { children: "Contact" }),
                  a.jsxs("span", {
                    children: [
                      a.jsx("p", { children: "Email" }),
                      ": mavis@firstandlastwellnesscompany.com.ng",
                    ],
                  }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            children: [
              a.jsx("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: a.jsx("path", {
                  d: "M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85383C4.07979 4.06253 2.66989 5.78049 1.83733 7.79048C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7886C11.9878 23.2131 14.1995 22.9952 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C23 9.08262 21.8411 6.28473 19.7782 4.22183C17.7153 2.15893 14.9174 1 12 1ZM16 13H12C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V6C11 5.73478 11.1054 5.48043 11.2929 5.29289C11.4804 5.10536 11.7348 5 12 5C12.2652 5 12.5196 5.10536 12.7071 5.29289C12.8946 5.48043 13 5.73478 13 6V11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13Z",
                  fill: "#AE4C29",
                }),
              }),
              a.jsxs("div", {
                className: St.location,
                children: [
                  a.jsx("h2", { children: "Work hours" }),
                  a.jsxs("span", {
                    className: St.days,
                    children: [
                      "Monday to Friday ",
                      a.jsx("label", { children: "8am - 4pm" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      a.jsx("hr", {}),
      a.jsxs("div", {
        className: St.footer2,
        children: [
          a.jsxs("div", {
            children: [
              a.jsx(su, {}),
              a.jsx("h2", {
                children:
                  "Empowering organizations with holistic wellness solutions for a healthier, more productive workforce.",
              }),
            ],
          }),
          a.jsxs("div", {
            className: St.quicks,
            children: [
              a.jsx("label", { children: "Quick Links" }),
              a.jsxs("ul", {
                children: [
                  a.jsx("li", { onClick: () => o(c), children: "About us" }),
                  a.jsx("li", {
                    onClick: () => o(s),
                    children: "Our Services",
                  }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: St.connect,
            children: [
              a.jsx("label", { children: "Connect with us" }),
              a.jsxs("div", {
                children: [
                  a.jsxs("svg", {
                    width: "36",
                    height: "36",
                    viewBox: "0 0 36 36",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      a.jsxs("g", {
                        "clip-path": "url(#clip0_2_399)",
                        children: [
                          a.jsx("path", {
                            d: "M31.4993 36H4.49927C2.01527 36 -0.000732422 33.984 -0.000732422 31.5V4.5C-0.000732422 2.016 2.01527 0 4.49927 0H31.4993C33.9833 0 35.9993 2.016 35.9993 4.5V31.5C35.9993 33.984 33.9833 36 31.4993 36Z",
                            fill: "#AE4C29",
                          }),
                          a.jsx("path", {
                            d: "M35.9993 17.9999C35.9993 8.05878 27.9404 -8.7738e-05 17.9993 -8.7738e-05C8.05814 -8.7738e-05 -0.000732422 8.05878 -0.000732422 17.9999C-0.000732422 26.9842 6.58161 34.4309 15.1868 35.7812V23.203H10.6165V17.9999H15.1868V14.0343C15.1868 9.52304 17.874 7.03116 21.9856 7.03116C23.955 7.03116 26.0149 7.38273 26.0149 7.38273V11.8124H23.7451C21.5091 11.8124 20.8118 13.1999 20.8118 14.6234V17.9999H25.804L25.0059 23.203H20.8118V35.7812C29.4169 34.4309 35.9993 26.9842 35.9993 17.9999Z",
                            fill: "#AE4C29",
                          }),
                          a.jsx("path", {
                            d: "M25.0059 23.2031L25.804 18H20.8118V14.6235C20.8118 13.2 21.5091 11.8125 23.7451 11.8125H26.0149V7.38281C26.0149 7.38281 23.955 7.03125 21.9856 7.03125C17.874 7.03125 15.1868 9.52313 15.1868 14.0344V18H10.6165V23.2031H15.1868V35.7813C16.1032 35.9251 17.0425 36 17.9993 36C18.9561 36 19.8954 35.9251 20.8118 35.7813V23.2031H25.0059Z",
                            fill: "white",
                          }),
                        ],
                      }),
                      a.jsx("defs", {
                        children: a.jsx("clipPath", {
                          id: "clip0_2_399",
                          children: a.jsx("rect", {
                            width: "36",
                            height: "36",
                            fill: "white",
                            transform: "translate(-0.000732422)",
                          }),
                        }),
                      }),
                    ],
                  }),
                  a.jsxs("svg", {
                    width: "36",
                    height: "36",
                    viewBox: "0 0 36 36",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      a.jsxs("g", {
                        "clip-path": "url(#clip0_2_405)",
                        children: [
                          a.jsx("path", {
                            d: "M31.4993 36H4.49927C2.01527 36 -0.000732422 33.984 -0.000732422 31.5V4.5C-0.000732422 2.016 2.01527 0 4.49927 0H31.4993C33.9833 0 35.9993 2.016 35.9993 4.5V31.5C35.9993 33.984 33.9833 36 31.4993 36Z",
                            fill: "#AE4C29",
                          }),
                          a.jsx("path", {
                            d: "M24.3808 8H27.753L20.3488 16.4871L28.9993 28H22.2109L16.896 21.0037L10.8113 28H7.43912L15.2832 18.9225L6.99927 8H13.9563L18.758 14.3911L24.3808 8ZM23.2005 26.0074H25.0699L12.9739 9.91882H10.9653L23.2005 26.0074Z",
                            fill: "white",
                          }),
                        ],
                      }),
                      a.jsx("defs", {
                        children: a.jsx("clipPath", {
                          id: "clip0_2_405",
                          children: a.jsx("rect", {
                            width: "36",
                            height: "36",
                            fill: "white",
                            transform: "translate(-0.000732422)",
                          }),
                        }),
                      }),
                    ],
                  }),
                  a.jsxs("svg", {
                    width: "36",
                    height: "36",
                    viewBox: "0 0 36 36",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      a.jsxs("g", {
                        "clip-path": "url(#clip0_2_410)",
                        children: [
                          a.jsx("rect", {
                            x: "-0.000732422",
                            width: "36",
                            height: "36",
                            rx: "5",
                            fill: "#561D5E",
                          }),
                          a.jsxs("g", {
                            "clip-path": "url(#clip1_2_410)",
                            children: [
                              a.jsx("rect", {
                                x: "-0.000732422",
                                width: "36",
                                height: "36",
                                rx: "5",
                                fill: "#AE4C29",
                              }),
                              a.jsx("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M28.9993 29H24.7993V21.651C24.7993 19.635 23.9099 18.5103 22.315 18.5103C20.5793 18.5103 19.5493 19.6823 19.5493 21.651V29H15.3493V15.35H19.5493V16.885C19.5493 16.885 20.867 14.5728 23.8364 14.5728C26.8069 14.5728 28.9993 16.3854 28.9993 20.136V29ZM10.5634 13.1669C9.14692 13.1669 7.99927 12.0099 7.99927 10.583C7.99927 9.15706 9.14692 8 10.5634 8C11.9788 8 13.1264 9.15706 13.1264 10.583C13.1275 12.0099 11.9788 13.1669 10.5634 13.1669ZM7.99927 29H13.2493V15.35H7.99927V29Z",
                                fill: "white",
                              }),
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("defs", {
                        children: [
                          a.jsx("clipPath", {
                            id: "clip0_2_410",
                            children: a.jsx("rect", {
                              x: "-0.000732422",
                              width: "36",
                              height: "36",
                              rx: "5",
                              fill: "white",
                            }),
                          }),
                          a.jsx("clipPath", {
                            id: "clip1_2_410",
                            children: a.jsx("rect", {
                              width: "36",
                              height: "36",
                              fill: "white",
                              transform: "translate(-0.000732422)",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs("svg", {
                    width: "36",
                    height: "36",
                    viewBox: "0 0 36 36",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      a.jsx("rect", {
                        x: "-0.000732422",
                        width: "36",
                        height: "36",
                        rx: "5",
                        fill: "#AE4C29",
                      }),
                      a.jsx("path", {
                        d: "M18.0005 4.5C14.3341 4.5 13.874 4.51603 12.434 4.58157C10.9968 4.64738 10.0158 4.87492 9.15738 5.20878C8.26946 5.55361 7.51627 6.01487 6.76588 6.76556C6.01494 7.51597 5.55368 8.26918 5.20774 9.15685C4.87305 10.0155 4.64524 10.9969 4.58055 12.4335C4.51614 13.8736 4.49927 14.334 4.49927 18.0005C4.49927 21.6671 4.51558 22.1258 4.58083 23.5659C4.64693 25.0031 4.87446 25.9842 5.20803 26.8426C5.55312 27.7305 6.01438 28.4837 6.76504 29.2341C7.51514 29.9851 8.26834 30.4475 9.15569 30.7923C10.0146 31.1262 10.9959 31.3537 12.4328 31.4195C13.8729 31.4851 14.3327 31.5011 17.9988 31.5011C21.6655 31.5011 22.1243 31.4851 23.5643 31.4195C25.0015 31.3537 25.9836 31.1262 26.8426 30.7923C27.7302 30.4475 28.4823 29.9851 29.2324 29.2341C29.9833 28.4837 30.4446 27.7305 30.7905 26.8428C31.1224 25.9842 31.3502 25.0028 31.4177 23.5662C31.4824 22.1261 31.4993 21.6671 31.4993 18.0005C31.4993 14.334 31.4824 13.8739 31.4177 12.4338C31.3502 10.9966 31.1224 10.0155 30.7905 9.15713C30.4446 8.26918 29.9833 7.51597 29.2324 6.76556C28.4814 6.01459 27.7305 5.55332 26.8417 5.20878C25.9811 4.87492 24.9995 4.64738 23.5623 4.58157C22.1223 4.51603 21.6639 4.5 17.9963 4.5H18.0005ZM16.7895 6.93291C17.1489 6.93235 17.55 6.93291 18.0005 6.93291C21.6051 6.93291 22.0323 6.94585 23.4557 7.01054C24.772 7.07073 25.4864 7.29068 25.9622 7.47547C26.5922 7.72016 27.0414 8.01267 27.5136 8.48519C27.9861 8.95771 28.2786 9.40773 28.5239 10.0378C28.7087 10.5131 28.9289 11.2275 28.9888 12.5438C29.0535 13.967 29.0676 14.3945 29.0676 17.9975C29.0676 21.6004 29.0535 22.0279 28.9888 23.4511C28.9286 24.7674 28.7087 25.4818 28.5239 25.9572C28.2792 26.5872 27.9861 27.0358 27.5136 27.508C27.0411 27.9805 26.5925 28.2731 25.9622 28.5178C25.4869 28.7034 24.772 28.9228 23.4557 28.983C22.0326 29.0477 21.6051 29.0617 18.0005 29.0617C14.3957 29.0617 13.9685 29.0477 12.5454 28.983C11.2291 28.9222 10.5147 28.7023 10.0385 28.5175C9.40854 28.2728 8.95853 27.9803 8.48603 27.5077C8.01352 27.0352 7.72102 26.5863 7.47577 25.956C7.29098 25.4807 7.07076 24.7663 7.01086 23.45C6.94617 22.0268 6.93323 21.5993 6.93323 17.9941C6.93323 14.3889 6.94617 13.9636 7.01086 12.5404C7.07104 11.2241 7.29098 10.5097 7.47577 10.0338C7.72046 9.40379 8.01352 8.95377 8.48603 8.48126C8.95853 8.00874 9.40854 7.71622 10.0385 7.47096C10.5144 7.28533 11.2291 7.06595 12.5454 7.00548C13.7907 6.94922 14.2734 6.93235 16.7895 6.92954V6.93291ZM25.2068 9.17456C24.3124 9.17456 23.5868 9.89938 23.5868 10.7941C23.5868 11.6885 24.3124 12.4141 25.2068 12.4141C26.1012 12.4141 26.8268 11.6885 26.8268 10.7941C26.8268 9.89966 26.1012 9.174 25.2068 9.174V9.17456ZM18.0005 11.0675C14.1718 11.0675 11.0676 14.1717 11.0676 18.0005C11.0676 21.8294 14.1718 24.9322 18.0005 24.9322C21.8292 24.9322 24.9323 21.8294 24.9323 18.0005C24.9323 14.1717 21.8289 11.0675 18.0003 11.0675H18.0005ZM18.0005 13.5004C20.4857 13.5004 22.5006 15.515 22.5006 18.0005C22.5006 20.4858 20.4857 22.5007 18.0005 22.5007C15.5151 22.5007 13.5005 20.4858 13.5005 18.0005C13.5005 15.515 15.5151 13.5004 18.0005 13.5004Z",
                        fill: "white",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      a.jsx("label", {
        children: "© First and Last Wellness Company 2025. All rights reserved",
      }),
      a.jsxs("span", {
        children: [
          a.jsx("img", { src: ff, alt: "" }),
          a.jsx(ii, { to: "https://www.uppist.xyz/", children: a.jsx(df, {}) }),
        ],
      }),
    ],
  });
}
const Dd = "_bio_1rt6b_5",
  Od = "_bioContainer_1rt6b_15",
  Id = "_bioContent_1rt6b_27",
  Ad = "_bioText_1rt6b_39",
  Ud = "_text_1rt6b_51",
  Hr = { bio: Dd, bioContainer: Od, bioContent: Id, bioText: Ad, text: Ud },
  $d = "./assets/bio-BeLkJpBK.png";
function Wd() {
  return a.jsx("div", {
    className: Hr.bio,
    children: a.jsx("div", {
      className: Hr.bioContainer,
      children: a.jsxs("div", {
        className: Hr.bioContent,
        children: [
          a.jsxs("div", {
            className: Hr.bioText,
            children: [
              a.jsxs("div", {
                className: Hr.text,
                children: [
                  a.jsx("h2", { children: "Meet Our Founder" }),
                  a.jsxs("p", {
                    children: [
                      a.jsx("span", { children: "Mavis Izegbune" }),
                      " is a Nurse Health Coach and Wellness Consultant. She has over a decade combined experience in Clinical Nursing, Public health, Case Management, Therapy and Counseling, and Occupational health Consulting. She has a degree in Nursing from the prestigious University of Lagos, Nigeria and did a course in Psychology from the aforementioned institution. She also has a certification in Entrepreneurial Studies from the Covenant Capital Business School, and has worked with individuals and notable organizations to achieve their overall health and productivity goal.",
                    ],
                  }),
                  a.jsxs("p", {
                    children: [
                      a.jsx("br", {}),
                      a.jsx("br", {}),
                      " Furthermore, she has a deep seated desire to empower people to take control of their health and health outcomes, thereby reducing hospital visits and stay. She also seeks to empower systems for productivity, one life at a time by equipping both individuals and organizations with the right tools to build resilience against the odds, as well as adopt a mindset for excellence.",
                    ],
                  }),
                ],
              }),
              a.jsx("img", { src: $d, alt: "" }),
            ],
          }),
          a.jsxs("p", {
            children: [
              "Mavis is the",
              " ",
              a.jsx("span", {
                children:
                  "Founder of First and Last Wellness, Ten Times Fruits",
              }),
              "  ",
              "and ",
              a.jsx("span", { children: "LOOD;" }),
              " all of which are designed to promote an optimum state of well-being.",
            ],
          }),
          a.jsx(ii, {
            to: "https://calendly.com/mavisizegbunebookings",
            children: a.jsx("button", { children: "Book a session with me" }),
          }),
        ],
      }),
    }),
  });
}
function Zd() {
  const o = E.useRef(null),
    c = E.useRef(null),
    s = E.useRef(null),
    g = E.useRef(null),
    d = (m) => {
      m != null &&
        m.current &&
        window.scrollTo({ top: m.current.offsetTop, behavior: "smooth" });
    };
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(s0, {
        aboutRef: o,
        serviceRef: c,
        contactRef: s,
        homeRef: g,
        scrollToSection: d,
      }),
      a.jsx("div", {
        ref: g,
        children: a.jsx(m0, { aboutRef: o, scrollToSection: d }),
      }),
      a.jsx("div", { ref: o, children: a.jsx(x0, {}) }),
      a.jsx(E0, {}),
      a.jsx("div", {
        ref: c,
        children: a.jsx(M0, { contactRef: s, scrollToSection: d }),
      }),
      a.jsx(D0, {}),
      a.jsx(Z0, { contactRef: s, scrollToSection: d }),
      a.jsx(ef, {}),
      a.jsx(Wd, {}),
      a.jsx("div", {
        ref: s,
        children: a.jsx(Vd, { aboutRef: o, serviceRef: c, scrollToSection: d }),
      }),
    ],
  });
}
Z2.createRoot(document.getElementById("root")).render(
  a.jsx(jd, { children: a.jsx(Zd, {}) })
);
