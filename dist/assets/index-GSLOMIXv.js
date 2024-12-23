/** @format */

(function () {
  const V = document.createElement("link").relList;
  if (V && V.supports && V.supports("modulepreload")) return;
  for (const R of document.querySelectorAll('link[rel="modulepreload"]')) ae(R);
  new MutationObserver((R) => {
    for (const A of R)
      if (A.type === "childList")
        for (const oe of A.addedNodes)
          oe.tagName === "LINK" && oe.rel === "modulepreload" && ae(oe);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(R) {
    const A = {};
    return (
      R.integrity && (A.integrity = R.integrity),
      R.referrerPolicy && (A.referrerPolicy = R.referrerPolicy),
      R.crossOrigin === "use-credentials"
        ? (A.credentials = "include")
        : R.crossOrigin === "anonymous"
        ? (A.credentials = "omit")
        : (A.credentials = "same-origin"),
      A
    );
  }
  function ae(R) {
    if (R.ep) return;
    R.ep = !0;
    const A = m(R);
    fetch(R.href, A);
  }
})();
var Ho = { exports: {} },
  kr = {},
  zo = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vs;
function O2() {
  if (Vs) return B;
  Vs = 1;
  var j = Symbol.for("react.element"),
    V = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    ae = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    A = Symbol.for("react.provider"),
    oe = Symbol.for("react.context"),
    ce = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    je = Symbol.for("react.memo"),
    we = Symbol.for("react.lazy"),
    te = Symbol.iterator;
  function J(f) {
    return f === null || typeof f != "object"
      ? null
      : ((f = (te && f[te]) || f["@@iterator"]),
        typeof f == "function" ? f : null);
  }
  var We = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Qe = Object.assign,
    q = {};
  function $(f, g, T) {
    (this.props = f),
      (this.context = g),
      (this.refs = q),
      (this.updater = T || We);
  }
  ($.prototype.isReactComponent = {}),
    ($.prototype.setState = function (f, g) {
      if (typeof f != "object" && typeof f != "function" && f != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, f, g, "setState");
    }),
    ($.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, "forceUpdate");
    });
  function yt() {}
  yt.prototype = $.prototype;
  function at(f, g, T) {
    (this.props = f),
      (this.context = g),
      (this.refs = q),
      (this.updater = T || We);
  }
  var be = (at.prototype = new yt());
  (be.constructor = at), Qe(be, $.prototype), (be.isPureReactComponent = !0);
  var ke = Array.isArray,
    et = Object.prototype.hasOwnProperty,
    Le = { current: null },
    Pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $e(f, g, T) {
    var F,
      I = {},
      U = null,
      Y = null;
    if (g != null)
      for (F in (g.ref !== void 0 && (Y = g.ref),
      g.key !== void 0 && (U = "" + g.key),
      g))
        et.call(g, F) && !Pe.hasOwnProperty(F) && (I[F] = g[F]);
    var W = arguments.length - 2;
    if (W === 1) I.children = T;
    else if (1 < W) {
      for (var b = Array(W), Oe = 0; Oe < W; Oe++) b[Oe] = arguments[Oe + 2];
      I.children = b;
    }
    if (f && f.defaultProps)
      for (F in ((W = f.defaultProps), W)) I[F] === void 0 && (I[F] = W[F]);
    return {
      $$typeof: j,
      type: f,
      key: U,
      ref: Y,
      props: I,
      _owner: Le.current,
    };
  }
  function Nt(f, g) {
    return {
      $$typeof: j,
      type: f.type,
      key: g,
      ref: f.ref,
      props: f.props,
      _owner: f._owner,
    };
  }
  function Ct(f) {
    return typeof f == "object" && f !== null && f.$$typeof === j;
  }
  function Xt(f) {
    var g = { "=": "=0", ":": "=2" };
    return (
      "$" +
      f.replace(/[=:]/g, function (T) {
        return g[T];
      })
    );
  }
  var ct = /\/+/g;
  function De(f, g) {
    return typeof f == "object" && f !== null && f.key != null
      ? Xt("" + f.key)
      : g.toString(36);
  }
  function tt(f, g, T, F, I) {
    var U = typeof f;
    (U === "undefined" || U === "boolean") && (f = null);
    var Y = !1;
    if (f === null) Y = !0;
    else
      switch (U) {
        case "string":
        case "number":
          Y = !0;
          break;
        case "object":
          switch (f.$$typeof) {
            case j:
            case V:
              Y = !0;
          }
      }
    if (Y)
      return (
        (Y = f),
        (I = I(Y)),
        (f = F === "" ? "." + De(Y, 0) : F),
        ke(I)
          ? ((T = ""),
            f != null && (T = f.replace(ct, "$&/") + "/"),
            tt(I, g, T, "", function (Oe) {
              return Oe;
            }))
          : I != null &&
            (Ct(I) &&
              (I = Nt(
                I,
                T +
                  (!I.key || (Y && Y.key === I.key)
                    ? ""
                    : ("" + I.key).replace(ct, "$&/") + "/") +
                  f
              )),
            g.push(I)),
        1
      );
    if (((Y = 0), (F = F === "" ? "." : F + ":"), ke(f)))
      for (var W = 0; W < f.length; W++) {
        U = f[W];
        var b = F + De(U, W);
        Y += tt(U, g, T, b, I);
      }
    else if (((b = J(f)), typeof b == "function"))
      for (f = b.call(f), W = 0; !(U = f.next()).done; )
        (U = U.value), (b = F + De(U, W++)), (Y += tt(U, g, T, b, I));
    else if (U === "object")
      throw (
        ((g = String(f)),
        Error(
          "Objects are not valid as a React child (found: " +
            (g === "[object Object]"
              ? "object with keys {" + Object.keys(f).join(", ") + "}"
              : g) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return Y;
  }
  function ft(f, g, T) {
    if (f == null) return f;
    var F = [],
      I = 0;
    return (
      tt(f, F, "", "", function (U) {
        return g.call(T, U, I++);
      }),
      F
    );
  }
  function He(f) {
    if (f._status === -1) {
      var g = f._result;
      (g = g()),
        g.then(
          function (T) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = T));
          },
          function (T) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = T));
          }
        ),
        f._status === -1 && ((f._status = 0), (f._result = g));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var le = { current: null },
    k = { transition: null },
    H = {
      ReactCurrentDispatcher: le,
      ReactCurrentBatchConfig: k,
      ReactCurrentOwner: Le,
    };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (B.Children = {
      map: ft,
      forEach: function (f, g, T) {
        ft(
          f,
          function () {
            g.apply(this, arguments);
          },
          T
        );
      },
      count: function (f) {
        var g = 0;
        return (
          ft(f, function () {
            g++;
          }),
          g
        );
      },
      toArray: function (f) {
        return (
          ft(f, function (g) {
            return g;
          }) || []
        );
      },
      only: function (f) {
        if (!Ct(f))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return f;
      },
    }),
    (B.Component = $),
    (B.Fragment = m),
    (B.Profiler = R),
    (B.PureComponent = at),
    (B.StrictMode = ae),
    (B.Suspense = D),
    (B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H),
    (B.act = _),
    (B.cloneElement = function (f, g, T) {
      if (f == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            f +
            "."
        );
      var F = Qe({}, f.props),
        I = f.key,
        U = f.ref,
        Y = f._owner;
      if (g != null) {
        if (
          (g.ref !== void 0 && ((U = g.ref), (Y = Le.current)),
          g.key !== void 0 && (I = "" + g.key),
          f.type && f.type.defaultProps)
        )
          var W = f.type.defaultProps;
        for (b in g)
          et.call(g, b) &&
            !Pe.hasOwnProperty(b) &&
            (F[b] = g[b] === void 0 && W !== void 0 ? W[b] : g[b]);
      }
      var b = arguments.length - 2;
      if (b === 1) F.children = T;
      else if (1 < b) {
        W = Array(b);
        for (var Oe = 0; Oe < b; Oe++) W[Oe] = arguments[Oe + 2];
        F.children = W;
      }
      return { $$typeof: j, type: f.type, key: I, ref: U, props: F, _owner: Y };
    }),
    (B.createContext = function (f) {
      return (
        (f = {
          $$typeof: oe,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (f.Provider = { $$typeof: A, _context: f }),
        (f.Consumer = f)
      );
    }),
    (B.createElement = $e),
    (B.createFactory = function (f) {
      var g = $e.bind(null, f);
      return (g.type = f), g;
    }),
    (B.createRef = function () {
      return { current: null };
    }),
    (B.forwardRef = function (f) {
      return { $$typeof: ce, render: f };
    }),
    (B.isValidElement = Ct),
    (B.lazy = function (f) {
      return { $$typeof: we, _payload: { _status: -1, _result: f }, _init: He };
    }),
    (B.memo = function (f, g) {
      return { $$typeof: je, type: f, compare: g === void 0 ? null : g };
    }),
    (B.startTransition = function (f) {
      var g = k.transition;
      k.transition = {};
      try {
        f();
      } finally {
        k.transition = g;
      }
    }),
    (B.unstable_act = _),
    (B.useCallback = function (f, g) {
      return le.current.useCallback(f, g);
    }),
    (B.useContext = function (f) {
      return le.current.useContext(f);
    }),
    (B.useDebugValue = function () {}),
    (B.useDeferredValue = function (f) {
      return le.current.useDeferredValue(f);
    }),
    (B.useEffect = function (f, g) {
      return le.current.useEffect(f, g);
    }),
    (B.useId = function () {
      return le.current.useId();
    }),
    (B.useImperativeHandle = function (f, g, T) {
      return le.current.useImperativeHandle(f, g, T);
    }),
    (B.useInsertionEffect = function (f, g) {
      return le.current.useInsertionEffect(f, g);
    }),
    (B.useLayoutEffect = function (f, g) {
      return le.current.useLayoutEffect(f, g);
    }),
    (B.useMemo = function (f, g) {
      return le.current.useMemo(f, g);
    }),
    (B.useReducer = function (f, g, T) {
      return le.current.useReducer(f, g, T);
    }),
    (B.useRef = function (f) {
      return le.current.useRef(f);
    }),
    (B.useState = function (f) {
      return le.current.useState(f);
    }),
    (B.useSyncExternalStore = function (f, g, T) {
      return le.current.useSyncExternalStore(f, g, T);
    }),
    (B.useTransition = function () {
      return le.current.useTransition();
    }),
    (B.version = "18.3.1"),
    B
  );
}
var Ts;
function Do() {
  return Ts || ((Ts = 1), (zo.exports = O2())), zo.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rs;
function A2() {
  if (Rs) return kr;
  Rs = 1;
  var j = Do(),
    V = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    ae = Object.prototype.hasOwnProperty,
    R = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function oe(ce, D, je) {
    var we,
      te = {},
      J = null,
      We = null;
    je !== void 0 && (J = "" + je),
      D.key !== void 0 && (J = "" + D.key),
      D.ref !== void 0 && (We = D.ref);
    for (we in D) ae.call(D, we) && !A.hasOwnProperty(we) && (te[we] = D[we]);
    if (ce && ce.defaultProps)
      for (we in ((D = ce.defaultProps), D))
        te[we] === void 0 && (te[we] = D[we]);
    return {
      $$typeof: V,
      type: ce,
      key: J,
      ref: We,
      props: te,
      _owner: R.current,
    };
  }
  return (kr.Fragment = m), (kr.jsx = oe), (kr.jsxs = oe), kr;
}
var Bs;
function I2() {
  return Bs || ((Bs = 1), (Ho.exports = A2())), Ho.exports;
}
var s = I2(),
  Rn = Do(),
  zl = {},
  Vo = { exports: {} },
  Fe = {},
  To = { exports: {} },
  Ro = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fs;
function U2() {
  return (
    Fs ||
      ((Fs = 1),
      (function (j) {
        function V(k, H) {
          var _ = k.length;
          k.push(H);
          e: for (; 0 < _; ) {
            var f = (_ - 1) >>> 1,
              g = k[f];
            if (0 < R(g, H)) (k[f] = H), (k[_] = g), (_ = f);
            else break e;
          }
        }
        function m(k) {
          return k.length === 0 ? null : k[0];
        }
        function ae(k) {
          if (k.length === 0) return null;
          var H = k[0],
            _ = k.pop();
          if (_ !== H) {
            k[0] = _;
            e: for (var f = 0, g = k.length, T = g >>> 1; f < T; ) {
              var F = 2 * (f + 1) - 1,
                I = k[F],
                U = F + 1,
                Y = k[U];
              if (0 > R(I, _))
                U < g && 0 > R(Y, I)
                  ? ((k[f] = Y), (k[U] = _), (f = U))
                  : ((k[f] = I), (k[F] = _), (f = F));
              else if (U < g && 0 > R(Y, _)) (k[f] = Y), (k[U] = _), (f = U);
              else break e;
            }
          }
          return H;
        }
        function R(k, H) {
          var _ = k.sortIndex - H.sortIndex;
          return _ !== 0 ? _ : k.id - H.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var A = performance;
          j.unstable_now = function () {
            return A.now();
          };
        } else {
          var oe = Date,
            ce = oe.now();
          j.unstable_now = function () {
            return oe.now() - ce;
          };
        }
        var D = [],
          je = [],
          we = 1,
          te = null,
          J = 3,
          We = !1,
          Qe = !1,
          q = !1,
          $ = typeof setTimeout == "function" ? setTimeout : null,
          yt = typeof clearTimeout == "function" ? clearTimeout : null,
          at = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function be(k) {
          for (var H = m(je); H !== null; ) {
            if (H.callback === null) ae(je);
            else if (H.startTime <= k)
              ae(je), (H.sortIndex = H.expirationTime), V(D, H);
            else break;
            H = m(je);
          }
        }
        function ke(k) {
          if (((q = !1), be(k), !Qe))
            if (m(D) !== null) (Qe = !0), He(et);
            else {
              var H = m(je);
              H !== null && le(ke, H.startTime - k);
            }
        }
        function et(k, H) {
          (Qe = !1), q && ((q = !1), yt($e), ($e = -1)), (We = !0);
          var _ = J;
          try {
            for (
              be(H), te = m(D);
              te !== null && (!(te.expirationTime > H) || (k && !Xt()));

            ) {
              var f = te.callback;
              if (typeof f == "function") {
                (te.callback = null), (J = te.priorityLevel);
                var g = f(te.expirationTime <= H);
                (H = j.unstable_now()),
                  typeof g == "function"
                    ? (te.callback = g)
                    : te === m(D) && ae(D),
                  be(H);
              } else ae(D);
              te = m(D);
            }
            if (te !== null) var T = !0;
            else {
              var F = m(je);
              F !== null && le(ke, F.startTime - H), (T = !1);
            }
            return T;
          } finally {
            (te = null), (J = _), (We = !1);
          }
        }
        var Le = !1,
          Pe = null,
          $e = -1,
          Nt = 5,
          Ct = -1;
        function Xt() {
          return !(j.unstable_now() - Ct < Nt);
        }
        function ct() {
          if (Pe !== null) {
            var k = j.unstable_now();
            Ct = k;
            var H = !0;
            try {
              H = Pe(!0, k);
            } finally {
              H ? De() : ((Le = !1), (Pe = null));
            }
          } else Le = !1;
        }
        var De;
        if (typeof at == "function")
          De = function () {
            at(ct);
          };
        else if (typeof MessageChannel < "u") {
          var tt = new MessageChannel(),
            ft = tt.port2;
          (tt.port1.onmessage = ct),
            (De = function () {
              ft.postMessage(null);
            });
        } else
          De = function () {
            $(ct, 0);
          };
        function He(k) {
          (Pe = k), Le || ((Le = !0), De());
        }
        function le(k, H) {
          $e = $(function () {
            k(j.unstable_now());
          }, H);
        }
        (j.unstable_IdlePriority = 5),
          (j.unstable_ImmediatePriority = 1),
          (j.unstable_LowPriority = 4),
          (j.unstable_NormalPriority = 3),
          (j.unstable_Profiling = null),
          (j.unstable_UserBlockingPriority = 2),
          (j.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (j.unstable_continueExecution = function () {
            Qe || We || ((Qe = !0), He(et));
          }),
          (j.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Nt = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (j.unstable_getCurrentPriorityLevel = function () {
            return J;
          }),
          (j.unstable_getFirstCallbackNode = function () {
            return m(D);
          }),
          (j.unstable_next = function (k) {
            switch (J) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = J;
            }
            var _ = J;
            J = H;
            try {
              return k();
            } finally {
              J = _;
            }
          }),
          (j.unstable_pauseExecution = function () {}),
          (j.unstable_requestPaint = function () {}),
          (j.unstable_runWithPriority = function (k, H) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var _ = J;
            J = k;
            try {
              return H();
            } finally {
              J = _;
            }
          }),
          (j.unstable_scheduleCallback = function (k, H, _) {
            var f = j.unstable_now();
            switch (
              (typeof _ == "object" && _ !== null
                ? ((_ = _.delay),
                  (_ = typeof _ == "number" && 0 < _ ? f + _ : f))
                : (_ = f),
              k)
            ) {
              case 1:
                var g = -1;
                break;
              case 2:
                g = 250;
                break;
              case 5:
                g = 1073741823;
                break;
              case 4:
                g = 1e4;
                break;
              default:
                g = 5e3;
            }
            return (
              (g = _ + g),
              (k = {
                id: we++,
                callback: H,
                priorityLevel: k,
                startTime: _,
                expirationTime: g,
                sortIndex: -1,
              }),
              _ > f
                ? ((k.sortIndex = _),
                  V(je, k),
                  m(D) === null &&
                    k === m(je) &&
                    (q ? (yt($e), ($e = -1)) : (q = !0), le(ke, _ - f)))
                : ((k.sortIndex = g), V(D, k), Qe || We || ((Qe = !0), He(et))),
              k
            );
          }),
          (j.unstable_shouldYield = Xt),
          (j.unstable_wrapCallback = function (k) {
            var H = J;
            return function () {
              var _ = J;
              J = H;
              try {
                return k.apply(this, arguments);
              } finally {
                J = _;
              }
            };
          });
      })(Ro)),
    Ro
  );
}
var Ds;
function Z2() {
  return Ds || ((Ds = 1), (To.exports = U2())), To.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Os;
function W2() {
  if (Os) return Fe;
  Os = 1;
  var j = Do(),
    V = Z2();
  function m(e) {
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
  var ae = new Set(),
    R = {};
  function A(e, t) {
    oe(e, t), oe(e + "Capture", t);
  }
  function oe(e, t) {
    for (R[e] = t, e = 0; e < t.length; e++) ae.add(t[e]);
  }
  var ce = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    D = Object.prototype.hasOwnProperty,
    je =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    we = {},
    te = {};
  function J(e) {
    return D.call(te, e)
      ? !0
      : D.call(we, e)
      ? !1
      : je.test(e)
      ? (te[e] = !0)
      : ((we[e] = !0), !1);
  }
  function We(e, t, n, r) {
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
  function Qe(e, t, n, r) {
    if (t === null || typeof t > "u" || We(e, t, n, r)) return !0;
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
  function q(e, t, n, r, l, i, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o);
  }
  var $ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      $[e] = new q(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      $[t] = new q(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      $[e] = new q(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      $[e] = new q(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        $[e] = new q(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      $[e] = new q(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      $[e] = new q(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      $[e] = new q(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      $[e] = new q(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var yt = /[\-:]([a-z])/g;
  function at(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(yt, at);
      $[t] = new q(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(yt, at);
        $[t] = new q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(yt, at);
      $[t] = new q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      $[e] = new q(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    ($.xlinkHref = new q(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      $[e] = new q(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function be(e, t, n, r) {
    var l = $.hasOwnProperty(t) ? $[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Qe(t, n, l, r) && (n = null),
      r || l === null
        ? J(t) &&
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
  var ke = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    et = Symbol.for("react.element"),
    Le = Symbol.for("react.portal"),
    Pe = Symbol.for("react.fragment"),
    $e = Symbol.for("react.strict_mode"),
    Nt = Symbol.for("react.profiler"),
    Ct = Symbol.for("react.provider"),
    Xt = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    De = Symbol.for("react.suspense"),
    tt = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    He = Symbol.for("react.lazy"),
    le = Symbol.for("react.offscreen"),
    k = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (k && e[k]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var _ = Object.assign,
    f;
  function g(e) {
    if (f === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        f = (t && t[1]) || "";
      }
    return (
      `
` +
      f +
      e
    );
  }
  var T = !1;
  function F(e, t) {
    if (!e || T) return "";
    T = !0;
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
          } catch (h) {
            var r = h;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (h) {
            r = h;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (h) {
          r = h;
        }
        e();
      }
    } catch (h) {
      if (h && r && typeof h.stack == "string") {
        for (
          var l = h.stack.split(`
`),
            i = r.stack.split(`
`),
            o = l.length - 1,
            u = i.length - 1;
          1 <= o && 0 <= u && l[o] !== i[u];

        )
          u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (l[o] !== i[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || l[o] !== i[u])) {
                  var a =
                    `
` + l[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      a.includes("<anonymous>") &&
                      (a = a.replace("<anonymous>", e.displayName)),
                    a
                  );
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      (T = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? g(e) : "";
  }
  function I(e) {
    switch (e.tag) {
      case 5:
        return g(e.type);
      case 16:
        return g("Lazy");
      case 13:
        return g("Suspense");
      case 19:
        return g("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = F(e.type, !1)), e;
      case 11:
        return (e = F(e.type.render, !1)), e;
      case 1:
        return (e = F(e.type, !0)), e;
      default:
        return "";
    }
  }
  function U(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Pe:
        return "Fragment";
      case Le:
        return "Portal";
      case Nt:
        return "Profiler";
      case $e:
        return "StrictMode";
      case De:
        return "Suspense";
      case tt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Xt:
          return (e.displayName || "Context") + ".Consumer";
        case Ct:
          return (e._context.displayName || "Context") + ".Provider";
        case ct:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ft:
          return (
            (t = e.displayName || null), t !== null ? t : U(e.type) || "Memo"
          );
        case He:
          (t = e._payload), (e = e._init);
          try {
            return U(e(t));
          } catch {}
      }
    return null;
  }
  function Y(e) {
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
        return U(t);
      case 8:
        return t === $e ? "StrictMode" : "Mode";
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
  function W(e) {
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
  function b(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Oe(e) {
    var t = b(e) ? "checked" : "value",
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
          set: function (o) {
            (r = "" + o), i.call(this, o);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function xr(e) {
    e._valueTracker || (e._valueTracker = Oe(e));
  }
  function Oo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = b(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Sr(e) {
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
  function Fl(e, t) {
    var n = t.checked;
    return _({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ao(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = W(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Io(e, t) {
    (t = t.checked), t != null && be(e, "checked", t, !1);
  }
  function Dl(e, t) {
    Io(e, t);
    var n = W(t.value),
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
      ? Ol(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ol(e, t.type, W(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Uo(e, t, n) {
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
  function Ol(e, t, n) {
    (t !== "number" || Sr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Bn = Array.isArray;
  function cn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + W(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Al(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return _({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Zo(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(m(92));
        if (Bn(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: W(n) };
  }
  function Wo(e, t) {
    var n = W(t.value),
      r = W(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Qo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function $o(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Il(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? $o(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var _r,
    Yo = (function (e) {
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
          _r = _r || document.createElement("div"),
            _r.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = _r.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Fn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dn = {
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
    Zs = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dn).forEach(function (e) {
    Zs.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dn[t] = Dn[e]);
    });
  });
  function Ko(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Dn.hasOwnProperty(e) && Dn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Xo(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Ko(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Ws = _(
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
  function Ul(e, t) {
    if (t) {
      if (Ws[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(m(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(m(62));
    }
  }
  function Zl(e, t) {
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
  var Wl = null;
  function Ql(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var $l = null,
    fn = null,
    dn = null;
  function Go(e) {
    if ((e = or(e))) {
      if (typeof $l != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Yr(t)), $l(e.stateNode, e.type, t));
    }
  }
  function Jo(e) {
    fn ? (dn ? dn.push(e) : (dn = [e])) : (fn = e);
  }
  function qo() {
    if (fn) {
      var e = fn,
        t = dn;
      if (((dn = fn = null), Go(e), t)) for (e = 0; e < t.length; e++) Go(t[e]);
    }
  }
  function bo(e, t) {
    return e(t);
  }
  function e1() {}
  var Yl = !1;
  function t1(e, t, n) {
    if (Yl) return e(t, n);
    Yl = !0;
    try {
      return bo(e, t, n);
    } finally {
      (Yl = !1), (fn !== null || dn !== null) && (e1(), qo());
    }
  }
  function On(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Yr(n);
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
    if (n && typeof n != "function") throw Error(m(231, t, typeof n));
    return n;
  }
  var Kl = !1;
  if (ce)
    try {
      var An = {};
      Object.defineProperty(An, "passive", {
        get: function () {
          Kl = !0;
        },
      }),
        window.addEventListener("test", An, An),
        window.removeEventListener("test", An, An);
    } catch {
      Kl = !1;
    }
  function Qs(e, t, n, r, l, i, o, u, a) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (y) {
      this.onError(y);
    }
  }
  var In = !1,
    Er = null,
    jr = !1,
    Xl = null,
    $s = {
      onError: function (e) {
        (In = !0), (Er = e);
      },
    };
  function Ys(e, t, n, r, l, i, o, u, a) {
    (In = !1), (Er = null), Qs.apply($s, arguments);
  }
  function Ks(e, t, n, r, l, i, o, u, a) {
    if ((Ys.apply(this, arguments), In)) {
      if (In) {
        var h = Er;
        (In = !1), (Er = null);
      } else throw Error(m(198));
      jr || ((jr = !0), (Xl = h));
    }
  }
  function Gt(e) {
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
  function n1(e) {
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
  function r1(e) {
    if (Gt(e) !== e) throw Error(m(188));
  }
  function Xs(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Gt(e)), t === null)) throw Error(m(188));
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
          if (i === n) return r1(l), e;
          if (i === r) return r1(l), t;
          i = i.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) (n = l), (r = i);
      else {
        for (var o = !1, u = l.child; u; ) {
          if (u === n) {
            (o = !0), (n = l), (r = i);
            break;
          }
          if (u === r) {
            (o = !0), (r = l), (n = i);
            break;
          }
          u = u.sibling;
        }
        if (!o) {
          for (u = i.child; u; ) {
            if (u === n) {
              (o = !0), (n = i), (r = l);
              break;
            }
            if (u === r) {
              (o = !0), (r = i), (n = l);
              break;
            }
            u = u.sibling;
          }
          if (!o) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function l1(e) {
    return (e = Xs(e)), e !== null ? i1(e) : null;
  }
  function i1(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = i1(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var o1 = V.unstable_scheduleCallback,
    u1 = V.unstable_cancelCallback,
    Gs = V.unstable_shouldYield,
    Js = V.unstable_requestPaint,
    ue = V.unstable_now,
    qs = V.unstable_getCurrentPriorityLevel,
    Gl = V.unstable_ImmediatePriority,
    s1 = V.unstable_UserBlockingPriority,
    Lr = V.unstable_NormalPriority,
    bs = V.unstable_LowPriority,
    a1 = V.unstable_IdlePriority,
    Nr = null,
    dt = null;
  function ea(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
      try {
        dt.onCommitFiberRoot(Nr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : ra,
    ta = Math.log,
    na = Math.LN2;
  function ra(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ta(e) / na) | 0)) | 0;
  }
  var Mr = 64,
    Pr = 4194304;
  function Un(e) {
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
  function Hr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? (r = Un(u)) : ((i &= o), i !== 0 && (r = Un(i)));
    } else (o = n & ~l), o !== 0 ? (r = Un(o)) : i !== 0 && (r = Un(i));
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
        (n = 31 - nt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function la(e, t) {
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
  function ia(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var o = 31 - nt(i),
        u = 1 << o,
        a = l[o];
      a === -1
        ? (!(u & n) || u & r) && (l[o] = la(u, t))
        : a <= t && (e.expiredLanes |= u),
        (i &= ~u);
    }
  }
  function Jl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function c1() {
    var e = Mr;
    return (Mr <<= 1), !(Mr & 4194240) && (Mr = 64), e;
  }
  function ql(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Zn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - nt(t)),
      (e[t] = n);
  }
  function oa(e, t) {
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
      var l = 31 - nt(n),
        i = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
    }
  }
  function bl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - nt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var Q = 0;
  function f1(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var d1,
    ei,
    p1,
    h1,
    m1,
    ti = !1,
    zr = [],
    Mt = null,
    Pt = null,
    Ht = null,
    Wn = new Map(),
    Qn = new Map(),
    zt = [],
    ua =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function v1(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Mt = null;
        break;
      case "dragenter":
      case "dragleave":
        Pt = null;
        break;
      case "mouseover":
      case "mouseout":
        Ht = null;
        break;
      case "pointerover":
      case "pointerout":
        Wn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qn.delete(t.pointerId);
    }
  }
  function $n(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = or(t)), t !== null && ei(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function sa(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Mt = $n(Mt, e, t, n, r, l)), !0;
      case "dragenter":
        return (Pt = $n(Pt, e, t, n, r, l)), !0;
      case "mouseover":
        return (Ht = $n(Ht, e, t, n, r, l)), !0;
      case "pointerover":
        var i = l.pointerId;
        return Wn.set(i, $n(Wn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (i = l.pointerId), Qn.set(i, $n(Qn.get(i) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function g1(e) {
    var t = Jt(e.target);
    if (t !== null) {
      var n = Gt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = n1(n)), t !== null)) {
            (e.blockedOn = t),
              m1(e.priority, function () {
                p1(n);
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
  function Vr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ri(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Wl = r), n.target.dispatchEvent(r), (Wl = null);
      } else return (t = or(n)), t !== null && ei(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function y1(e, t, n) {
    Vr(e) && n.delete(t);
  }
  function aa() {
    (ti = !1),
      Mt !== null && Vr(Mt) && (Mt = null),
      Pt !== null && Vr(Pt) && (Pt = null),
      Ht !== null && Vr(Ht) && (Ht = null),
      Wn.forEach(y1),
      Qn.forEach(y1);
  }
  function Yn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ti ||
        ((ti = !0),
        V.unstable_scheduleCallback(V.unstable_NormalPriority, aa)));
  }
  function Kn(e) {
    function t(l) {
      return Yn(l, e);
    }
    if (0 < zr.length) {
      Yn(zr[0], e);
      for (var n = 1; n < zr.length; n++) {
        var r = zr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Mt !== null && Yn(Mt, e),
        Pt !== null && Yn(Pt, e),
        Ht !== null && Yn(Ht, e),
        Wn.forEach(t),
        Qn.forEach(t),
        n = 0;
      n < zt.length;
      n++
    )
      (r = zt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < zt.length && ((n = zt[0]), n.blockedOn === null); )
      g1(n), n.blockedOn === null && zt.shift();
  }
  var pn = ke.ReactCurrentBatchConfig,
    Tr = !0;
  function ca(e, t, n, r) {
    var l = Q,
      i = pn.transition;
    pn.transition = null;
    try {
      (Q = 1), ni(e, t, n, r);
    } finally {
      (Q = l), (pn.transition = i);
    }
  }
  function fa(e, t, n, r) {
    var l = Q,
      i = pn.transition;
    pn.transition = null;
    try {
      (Q = 4), ni(e, t, n, r);
    } finally {
      (Q = l), (pn.transition = i);
    }
  }
  function ni(e, t, n, r) {
    if (Tr) {
      var l = ri(e, t, n, r);
      if (l === null) wi(e, t, r, Rr, n), v1(e, r);
      else if (sa(l, e, t, n, r)) r.stopPropagation();
      else if ((v1(e, r), t & 4 && -1 < ua.indexOf(e))) {
        for (; l !== null; ) {
          var i = or(l);
          if (
            (i !== null && d1(i),
            (i = ri(e, t, n, r)),
            i === null && wi(e, t, r, Rr, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else wi(e, t, r, null, n);
    }
  }
  var Rr = null;
  function ri(e, t, n, r) {
    if (((Rr = null), (e = Ql(r)), (e = Jt(e)), e !== null))
      if (((t = Gt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = n1(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Rr = e), null;
  }
  function C1(e) {
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
        switch (qs()) {
          case Gl:
            return 1;
          case s1:
            return 4;
          case Lr:
          case bs:
            return 16;
          case a1:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Vt = null,
    li = null,
    Br = null;
  function w1() {
    if (Br) return Br;
    var e,
      t = li,
      n = t.length,
      r,
      l = "value" in Vt ? Vt.value : Vt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Br = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Fr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Dr() {
    return !0;
  }
  function k1() {
    return !1;
  }
  function Ae(e) {
    function t(n, r, l, i, o) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null);
      for (var u in e)
        e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Dr
          : k1),
        (this.isPropagationStopped = k1),
        this
      );
    }
    return (
      _(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Dr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Dr));
        },
        persist: function () {},
        isPersistent: Dr,
      }),
      t
    );
  }
  var hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ii = Ae(hn),
    Xn = _({}, hn, { view: 0, detail: 0 }),
    da = Ae(Xn),
    oi,
    ui,
    Gn,
    Or = _({}, Xn, {
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
      getModifierState: ai,
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
          : (e !== Gn &&
              (Gn && e.type === "mousemove"
                ? ((oi = e.screenX - Gn.screenX), (ui = e.screenY - Gn.screenY))
                : (ui = oi = 0),
              (Gn = e)),
            oi);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ui;
      },
    }),
    x1 = Ae(Or),
    pa = _({}, Or, { dataTransfer: 0 }),
    ha = Ae(pa),
    ma = _({}, Xn, { relatedTarget: 0 }),
    si = Ae(ma),
    va = _({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ga = Ae(va),
    ya = _({}, hn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ca = Ae(ya),
    wa = _({}, hn, { data: 0 }),
    S1 = Ae(wa),
    ka = {
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
    xa = {
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
    Sa = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function _a(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Sa[e])
      ? !!t[e]
      : !1;
  }
  function ai() {
    return _a;
  }
  var Ea = _({}, Xn, {
      key: function (e) {
        if (e.key) {
          var t = ka[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Fr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? xa[e.keyCode] || "Unidentified"
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
      getModifierState: ai,
      charCode: function (e) {
        return e.type === "keypress" ? Fr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Fr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    ja = Ae(Ea),
    La = _({}, Or, {
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
    _1 = Ae(La),
    Na = _({}, Xn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ai,
    }),
    Ma = Ae(Na),
    Pa = _({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ha = Ae(Pa),
    za = _({}, Or, {
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
    Va = Ae(za),
    Ta = [9, 13, 27, 32],
    ci = ce && "CompositionEvent" in window,
    Jn = null;
  ce && "documentMode" in document && (Jn = document.documentMode);
  var Ra = ce && "TextEvent" in window && !Jn,
    E1 = ce && (!ci || (Jn && 8 < Jn && 11 >= Jn)),
    j1 = " ",
    L1 = !1;
  function N1(e, t) {
    switch (e) {
      case "keyup":
        return Ta.indexOf(t.keyCode) !== -1;
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
  function M1(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var mn = !1;
  function Ba(e, t) {
    switch (e) {
      case "compositionend":
        return M1(t);
      case "keypress":
        return t.which !== 32 ? null : ((L1 = !0), j1);
      case "textInput":
        return (e = t.data), e === j1 && L1 ? null : e;
      default:
        return null;
    }
  }
  function Fa(e, t) {
    if (mn)
      return e === "compositionend" || (!ci && N1(e, t))
        ? ((e = w1()), (Br = li = Vt = null), (mn = !1), e)
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
        return E1 && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Da = {
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
  function P1(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Da[e.type] : t === "textarea";
  }
  function H1(e, t, n, r) {
    Jo(r),
      (t = Wr(t, "onChange")),
      0 < t.length &&
        ((n = new ii("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var qn = null,
    bn = null;
  function Oa(e) {
    X1(e, 0);
  }
  function Ar(e) {
    var t = wn(e);
    if (Oo(t)) return e;
  }
  function Aa(e, t) {
    if (e === "change") return t;
  }
  var z1 = !1;
  if (ce) {
    var fi;
    if (ce) {
      var di = "oninput" in document;
      if (!di) {
        var V1 = document.createElement("div");
        V1.setAttribute("oninput", "return;"),
          (di = typeof V1.oninput == "function");
      }
      fi = di;
    } else fi = !1;
    z1 = fi && (!document.documentMode || 9 < document.documentMode);
  }
  function T1() {
    qn && (qn.detachEvent("onpropertychange", R1), (bn = qn = null));
  }
  function R1(e) {
    if (e.propertyName === "value" && Ar(bn)) {
      var t = [];
      H1(t, bn, e, Ql(e)), t1(Oa, t);
    }
  }
  function Ia(e, t, n) {
    e === "focusin"
      ? (T1(), (qn = t), (bn = n), qn.attachEvent("onpropertychange", R1))
      : e === "focusout" && T1();
  }
  function Ua(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ar(bn);
  }
  function Za(e, t) {
    if (e === "click") return Ar(t);
  }
  function Wa(e, t) {
    if (e === "input" || e === "change") return Ar(t);
  }
  function Qa(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var rt = typeof Object.is == "function" ? Object.is : Qa;
  function er(e, t) {
    if (rt(e, t)) return !0;
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
      if (!D.call(t, l) || !rt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function B1(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function F1(e, t) {
    var n = B1(e);
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
      n = B1(n);
    }
  }
  function D1(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? D1(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function O1() {
    for (var e = window, t = Sr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Sr(e.document);
    }
    return t;
  }
  function pi(e) {
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
  function $a(e) {
    var t = O1(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      D1(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && pi(n)) {
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
            (l = F1(n, i));
          var o = F1(n, r);
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
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
  var Ya = ce && "documentMode" in document && 11 >= document.documentMode,
    vn = null,
    hi = null,
    tr = null,
    mi = !1;
  function A1(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    mi ||
      vn == null ||
      vn !== Sr(r) ||
      ((r = vn),
      "selectionStart" in r && pi(r)
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
      (tr && er(tr, r)) ||
        ((tr = r),
        (r = Wr(hi, "onSelect")),
        0 < r.length &&
          ((t = new ii("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = vn))));
  }
  function Ir(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var gn = {
      animationend: Ir("Animation", "AnimationEnd"),
      animationiteration: Ir("Animation", "AnimationIteration"),
      animationstart: Ir("Animation", "AnimationStart"),
      transitionend: Ir("Transition", "TransitionEnd"),
    },
    vi = {},
    I1 = {};
  ce &&
    ((I1 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete gn.animationend.animation,
      delete gn.animationiteration.animation,
      delete gn.animationstart.animation),
    "TransitionEvent" in window || delete gn.transitionend.transition);
  function Ur(e) {
    if (vi[e]) return vi[e];
    if (!gn[e]) return e;
    var t = gn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in I1) return (vi[e] = t[n]);
    return e;
  }
  var U1 = Ur("animationend"),
    Z1 = Ur("animationiteration"),
    W1 = Ur("animationstart"),
    Q1 = Ur("transitionend"),
    $1 = new Map(),
    Y1 =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Tt(e, t) {
    $1.set(e, t), A(t, [e]);
  }
  for (var gi = 0; gi < Y1.length; gi++) {
    var yi = Y1[gi],
      Ka = yi.toLowerCase(),
      Xa = yi[0].toUpperCase() + yi.slice(1);
    Tt(Ka, "on" + Xa);
  }
  Tt(U1, "onAnimationEnd"),
    Tt(Z1, "onAnimationIteration"),
    Tt(W1, "onAnimationStart"),
    Tt("dblclick", "onDoubleClick"),
    Tt("focusin", "onFocus"),
    Tt("focusout", "onBlur"),
    Tt(Q1, "onTransitionEnd"),
    oe("onMouseEnter", ["mouseout", "mouseover"]),
    oe("onMouseLeave", ["mouseout", "mouseover"]),
    oe("onPointerEnter", ["pointerout", "pointerover"]),
    oe("onPointerLeave", ["pointerout", "pointerover"]),
    A(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    A(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    A("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    A(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    A(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    A(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var nr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Ga = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(nr)
    );
  function K1(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Ks(r, t, void 0, e), (e.currentTarget = null);
  }
  function X1(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var u = r[o],
              a = u.instance,
              h = u.currentTarget;
            if (((u = u.listener), a !== i && l.isPropagationStopped()))
              break e;
            K1(l, u, h), (i = a);
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((u = r[o]),
              (a = u.instance),
              (h = u.currentTarget),
              (u = u.listener),
              a !== i && l.isPropagationStopped())
            )
              break e;
            K1(l, u, h), (i = a);
          }
      }
    }
    if (jr) throw ((e = Xl), (jr = !1), (Xl = null), e);
  }
  function X(e, t) {
    var n = t[ji];
    n === void 0 && (n = t[ji] = new Set());
    var r = e + "__bubble";
    n.has(r) || (G1(t, e, 2, !1), n.add(r));
  }
  function Ci(e, t, n) {
    var r = 0;
    t && (r |= 4), G1(n, e, r, t);
  }
  var Zr = "_reactListening" + Math.random().toString(36).slice(2);
  function rr(e) {
    if (!e[Zr]) {
      (e[Zr] = !0),
        ae.forEach(function (n) {
          n !== "selectionchange" && (Ga.has(n) || Ci(n, !1, e), Ci(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Zr] || ((t[Zr] = !0), Ci("selectionchange", !1, t));
    }
  }
  function G1(e, t, n, r) {
    switch (C1(t)) {
      case 1:
        var l = ca;
        break;
      case 4:
        l = fa;
        break;
      default:
        l = ni;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !Kl ||
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
  function wi(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var a = o.tag;
              if (
                (a === 3 || a === 4) &&
                ((a = o.stateNode.containerInfo),
                a === l || (a.nodeType === 8 && a.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; u !== null; ) {
            if (((o = Jt(u)), o === null)) return;
            if (((a = o.tag), a === 5 || a === 6)) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    t1(function () {
      var h = i,
        y = Ql(n),
        C = [];
      e: {
        var v = $1.get(e);
        if (v !== void 0) {
          var x = ii,
            E = e;
          switch (e) {
            case "keypress":
              if (Fr(n) === 0) break e;
            case "keydown":
            case "keyup":
              x = ja;
              break;
            case "focusin":
              (E = "focus"), (x = si);
              break;
            case "focusout":
              (E = "blur"), (x = si);
              break;
            case "beforeblur":
            case "afterblur":
              x = si;
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
              x = x1;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = ha;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = Ma;
              break;
            case U1:
            case Z1:
            case W1:
              x = ga;
              break;
            case Q1:
              x = Ha;
              break;
            case "scroll":
              x = da;
              break;
            case "wheel":
              x = Va;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = Ca;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = _1;
          }
          var L = (t & 4) !== 0,
            se = !L && e === "scroll",
            d = L ? (v !== null ? v + "Capture" : null) : v;
          L = [];
          for (var c = h, p; c !== null; ) {
            p = c;
            var w = p.stateNode;
            if (
              (p.tag === 5 &&
                w !== null &&
                ((p = w),
                d !== null &&
                  ((w = On(c, d)), w != null && L.push(lr(c, w, p)))),
              se)
            )
              break;
            c = c.return;
          }
          0 < L.length &&
            ((v = new x(v, E, null, n, y)), C.push({ event: v, listeners: L }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (x = e === "mouseout" || e === "pointerout"),
            v &&
              n !== Wl &&
              (E = n.relatedTarget || n.fromElement) &&
              (Jt(E) || E[wt]))
          )
            break e;
          if (
            (x || v) &&
            ((v =
              y.window === y
                ? y
                : (v = y.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
            x
              ? ((E = n.relatedTarget || n.toElement),
                (x = h),
                (E = E ? Jt(E) : null),
                E !== null &&
                  ((se = Gt(E)), E !== se || (E.tag !== 5 && E.tag !== 6)) &&
                  (E = null))
              : ((x = null), (E = h)),
            x !== E)
          ) {
            if (
              ((L = x1),
              (w = "onMouseLeave"),
              (d = "onMouseEnter"),
              (c = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((L = _1),
                (w = "onPointerLeave"),
                (d = "onPointerEnter"),
                (c = "pointer")),
              (se = x == null ? v : wn(x)),
              (p = E == null ? v : wn(E)),
              (v = new L(w, c + "leave", x, n, y)),
              (v.target = se),
              (v.relatedTarget = p),
              (w = null),
              Jt(y) === h &&
                ((L = new L(d, c + "enter", E, n, y)),
                (L.target = p),
                (L.relatedTarget = se),
                (w = L)),
              (se = w),
              x && E)
            )
              t: {
                for (L = x, d = E, c = 0, p = L; p; p = yn(p)) c++;
                for (p = 0, w = d; w; w = yn(w)) p++;
                for (; 0 < c - p; ) (L = yn(L)), c--;
                for (; 0 < p - c; ) (d = yn(d)), p--;
                for (; c--; ) {
                  if (L === d || (d !== null && L === d.alternate)) break t;
                  (L = yn(L)), (d = yn(d));
                }
                L = null;
              }
            else L = null;
            x !== null && J1(C, v, x, L, !1),
              E !== null && se !== null && J1(C, se, E, L, !0);
          }
        }
        e: {
          if (
            ((v = h ? wn(h) : window),
            (x = v.nodeName && v.nodeName.toLowerCase()),
            x === "select" || (x === "input" && v.type === "file"))
          )
            var N = Aa;
          else if (P1(v))
            if (z1) N = Wa;
            else {
              N = Ua;
              var M = Ia;
            }
          else
            (x = v.nodeName) &&
              x.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (N = Za);
          if (N && (N = N(e, h))) {
            H1(C, N, n, y);
            break e;
          }
          M && M(e, v, h),
            e === "focusout" &&
              (M = v._wrapperState) &&
              M.controlled &&
              v.type === "number" &&
              Ol(v, "number", v.value);
        }
        switch (((M = h ? wn(h) : window), e)) {
          case "focusin":
            (P1(M) || M.contentEditable === "true") &&
              ((vn = M), (hi = h), (tr = null));
            break;
          case "focusout":
            tr = hi = vn = null;
            break;
          case "mousedown":
            mi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (mi = !1), A1(C, n, y);
            break;
          case "selectionchange":
            if (Ya) break;
          case "keydown":
          case "keyup":
            A1(C, n, y);
        }
        var P;
        if (ci)
          e: {
            switch (e) {
              case "compositionstart":
                var z = "onCompositionStart";
                break e;
              case "compositionend":
                z = "onCompositionEnd";
                break e;
              case "compositionupdate":
                z = "onCompositionUpdate";
                break e;
            }
            z = void 0;
          }
        else
          mn
            ? N1(e, n) && (z = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (z = "onCompositionStart");
        z &&
          (E1 &&
            n.locale !== "ko" &&
            (mn || z !== "onCompositionStart"
              ? z === "onCompositionEnd" && mn && (P = w1())
              : ((Vt = y),
                (li = "value" in Vt ? Vt.value : Vt.textContent),
                (mn = !0))),
          (M = Wr(h, z)),
          0 < M.length &&
            ((z = new S1(z, e, null, n, y)),
            C.push({ event: z, listeners: M }),
            P ? (z.data = P) : ((P = M1(n)), P !== null && (z.data = P)))),
          (P = Ra ? Ba(e, n) : Fa(e, n)) &&
            ((h = Wr(h, "onBeforeInput")),
            0 < h.length &&
              ((y = new S1("onBeforeInput", "beforeinput", null, n, y)),
              C.push({ event: y, listeners: h }),
              (y.data = P)));
      }
      X1(C, t);
    });
  }
  function lr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Wr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = On(e, n)),
        i != null && r.unshift(lr(e, i, l)),
        (i = On(e, t)),
        i != null && r.push(lr(e, i, l))),
        (e = e.return);
    }
    return r;
  }
  function yn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function J1(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var u = n,
        a = u.alternate,
        h = u.stateNode;
      if (a !== null && a === r) break;
      u.tag === 5 &&
        h !== null &&
        ((u = h),
        l
          ? ((a = On(n, i)), a != null && o.unshift(lr(n, a, u)))
          : l || ((a = On(n, i)), a != null && o.push(lr(n, a, u)))),
        (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Ja = /\r\n?/g,
    qa = /\u0000|\uFFFD/g;
  function q1(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ja,
        `
`
      )
      .replace(qa, "");
  }
  function Qr(e, t, n) {
    if (((t = q1(t)), q1(e) !== t && n)) throw Error(m(425));
  }
  function $r() {}
  var ki = null,
    xi = null;
  function Si(e, t) {
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
  var _i = typeof setTimeout == "function" ? setTimeout : void 0,
    ba = typeof clearTimeout == "function" ? clearTimeout : void 0,
    b1 = typeof Promise == "function" ? Promise : void 0,
    e2 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof b1 < "u"
        ? function (e) {
            return b1.resolve(null).then(e).catch(t2);
          }
        : _i;
  function t2(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ei(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), Kn(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Kn(t);
  }
  function Rt(e) {
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
  function eu(e) {
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
  var Cn = Math.random().toString(36).slice(2),
    pt = "__reactFiber$" + Cn,
    ir = "__reactProps$" + Cn,
    wt = "__reactContainer$" + Cn,
    ji = "__reactEvents$" + Cn,
    n2 = "__reactListeners$" + Cn,
    r2 = "__reactHandles$" + Cn;
  function Jt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[wt] || n[pt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = eu(e); e !== null; ) {
            if ((n = e[pt])) return n;
            e = eu(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function or(e) {
    return (
      (e = e[pt] || e[wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Yr(e) {
    return e[ir] || null;
  }
  var Li = [],
    kn = -1;
  function Bt(e) {
    return { current: e };
  }
  function G(e) {
    0 > kn || ((e.current = Li[kn]), (Li[kn] = null), kn--);
  }
  function K(e, t) {
    kn++, (Li[kn] = e.current), (e.current = t);
  }
  var Ft = {},
    xe = Bt(Ft),
    ze = Bt(!1),
    qt = Ft;
  function xn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
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
  function Ve(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Kr() {
    G(ze), G(xe);
  }
  function tu(e, t, n) {
    if (xe.current !== Ft) throw Error(m(168));
    K(xe, t), K(ze, n);
  }
  function nu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, Y(e) || "Unknown", l));
    return _({}, n, r);
  }
  function Xr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ft),
      (qt = xe.current),
      K(xe, e),
      K(ze, ze.current),
      !0
    );
  }
  function ru(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    n
      ? ((e = nu(e, t, qt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        G(ze),
        G(xe),
        K(xe, e))
      : G(ze),
      K(ze, n);
  }
  var kt = null,
    Gr = !1,
    Ni = !1;
  function lu(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  function l2(e) {
    (Gr = !0), lu(e);
  }
  function Dt() {
    if (!Ni && kt !== null) {
      Ni = !0;
      var e = 0,
        t = Q;
      try {
        var n = kt;
        for (Q = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (kt = null), (Gr = !1);
      } catch (l) {
        throw (kt !== null && (kt = kt.slice(e + 1)), o1(Gl, Dt), l);
      } finally {
        (Q = t), (Ni = !1);
      }
    }
    return null;
  }
  var Sn = [],
    _n = 0,
    Jr = null,
    qr = 0,
    Ye = [],
    Ke = 0,
    bt = null,
    xt = 1,
    St = "";
  function en(e, t) {
    (Sn[_n++] = qr), (Sn[_n++] = Jr), (Jr = e), (qr = t);
  }
  function iu(e, t, n) {
    (Ye[Ke++] = xt), (Ye[Ke++] = St), (Ye[Ke++] = bt), (bt = e);
    var r = xt;
    e = St;
    var l = 32 - nt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - nt(t) + l;
    if (30 < i) {
      var o = l - (l % 5);
      (i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (xt = (1 << (32 - nt(t) + l)) | (n << l) | r),
        (St = i + e);
    } else (xt = (1 << i) | (n << l) | r), (St = e);
  }
  function Mi(e) {
    e.return !== null && (en(e, 1), iu(e, 1, 0));
  }
  function Pi(e) {
    for (; e === Jr; )
      (Jr = Sn[--_n]), (Sn[_n] = null), (qr = Sn[--_n]), (Sn[_n] = null);
    for (; e === bt; )
      (bt = Ye[--Ke]),
        (Ye[Ke] = null),
        (St = Ye[--Ke]),
        (Ye[Ke] = null),
        (xt = Ye[--Ke]),
        (Ye[Ke] = null);
  }
  var Ie = null,
    Ue = null,
    ee = !1,
    lt = null;
  function ou(e, t) {
    var n = qe(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function uu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ie = e), (Ue = Rt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ie = e), (Ue = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = bt !== null ? { id: xt, overflow: St } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = qe(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ie = e),
              (Ue = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Hi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function zi(e) {
    if (ee) {
      var t = Ue;
      if (t) {
        var n = t;
        if (!uu(e, t)) {
          if (Hi(e)) throw Error(m(418));
          t = Rt(n.nextSibling);
          var r = Ie;
          t && uu(e, t)
            ? ou(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ie = e));
        }
      } else {
        if (Hi(e)) throw Error(m(418));
        (e.flags = (e.flags & -4097) | 2), (ee = !1), (Ie = e);
      }
    }
  }
  function su(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ie = e;
  }
  function br(e) {
    if (e !== Ie) return !1;
    if (!ee) return su(e), (ee = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Si(e.type, e.memoizedProps))),
      t && (t = Ue))
    ) {
      if (Hi(e)) throw (au(), Error(m(418)));
      for (; t; ) ou(e, t), (t = Rt(t.nextSibling));
    }
    if ((su(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ue = Rt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ue = null;
      }
    } else Ue = Ie ? Rt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function au() {
    for (var e = Ue; e; ) e = Rt(e.nextSibling);
  }
  function En() {
    (Ue = Ie = null), (ee = !1);
  }
  function Vi(e) {
    lt === null ? (lt = [e]) : lt.push(e);
  }
  var i2 = ke.ReactCurrentBatchConfig;
  function ur(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (o) {
              var u = l.refs;
              o === null ? delete u[i] : (u[i] = o);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!n._owner) throw Error(m(290, e));
    }
    return e;
  }
  function el(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        m(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function cu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function fu(e) {
    function t(d, c) {
      if (e) {
        var p = d.deletions;
        p === null ? ((d.deletions = [c]), (d.flags |= 16)) : p.push(c);
      }
    }
    function n(d, c) {
      if (!e) return null;
      for (; c !== null; ) t(d, c), (c = c.sibling);
      return null;
    }
    function r(d, c) {
      for (d = new Map(); c !== null; )
        c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
      return d;
    }
    function l(d, c) {
      return (d = $t(d, c)), (d.index = 0), (d.sibling = null), d;
    }
    function i(d, c, p) {
      return (
        (d.index = p),
        e
          ? ((p = d.alternate),
            p !== null
              ? ((p = p.index), p < c ? ((d.flags |= 2), c) : p)
              : ((d.flags |= 2), c))
          : ((d.flags |= 1048576), c)
      );
    }
    function o(d) {
      return e && d.alternate === null && (d.flags |= 2), d;
    }
    function u(d, c, p, w) {
      return c === null || c.tag !== 6
        ? ((c = Eo(p, d.mode, w)), (c.return = d), c)
        : ((c = l(c, p)), (c.return = d), c);
    }
    function a(d, c, p, w) {
      var N = p.type;
      return N === Pe
        ? y(d, c, p.props.children, w, p.key)
        : c !== null &&
          (c.elementType === N ||
            (typeof N == "object" &&
              N !== null &&
              N.$$typeof === He &&
              cu(N) === c.type))
        ? ((w = l(c, p.props)), (w.ref = ur(d, c, p)), (w.return = d), w)
        : ((w = _l(p.type, p.key, p.props, null, d.mode, w)),
          (w.ref = ur(d, c, p)),
          (w.return = d),
          w);
    }
    function h(d, c, p, w) {
      return c === null ||
        c.tag !== 4 ||
        c.stateNode.containerInfo !== p.containerInfo ||
        c.stateNode.implementation !== p.implementation
        ? ((c = jo(p, d.mode, w)), (c.return = d), c)
        : ((c = l(c, p.children || [])), (c.return = d), c);
    }
    function y(d, c, p, w, N) {
      return c === null || c.tag !== 7
        ? ((c = an(p, d.mode, w, N)), (c.return = d), c)
        : ((c = l(c, p)), (c.return = d), c);
    }
    function C(d, c, p) {
      if ((typeof c == "string" && c !== "") || typeof c == "number")
        return (c = Eo("" + c, d.mode, p)), (c.return = d), c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case et:
            return (
              (p = _l(c.type, c.key, c.props, null, d.mode, p)),
              (p.ref = ur(d, null, c)),
              (p.return = d),
              p
            );
          case Le:
            return (c = jo(c, d.mode, p)), (c.return = d), c;
          case He:
            var w = c._init;
            return C(d, w(c._payload), p);
        }
        if (Bn(c) || H(c))
          return (c = an(c, d.mode, p, null)), (c.return = d), c;
        el(d, c);
      }
      return null;
    }
    function v(d, c, p, w) {
      var N = c !== null ? c.key : null;
      if ((typeof p == "string" && p !== "") || typeof p == "number")
        return N !== null ? null : u(d, c, "" + p, w);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case et:
            return p.key === N ? a(d, c, p, w) : null;
          case Le:
            return p.key === N ? h(d, c, p, w) : null;
          case He:
            return (N = p._init), v(d, c, N(p._payload), w);
        }
        if (Bn(p) || H(p)) return N !== null ? null : y(d, c, p, w, null);
        el(d, p);
      }
      return null;
    }
    function x(d, c, p, w, N) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (d = d.get(p) || null), u(c, d, "" + w, N);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case et:
            return (
              (d = d.get(w.key === null ? p : w.key) || null), a(c, d, w, N)
            );
          case Le:
            return (
              (d = d.get(w.key === null ? p : w.key) || null), h(c, d, w, N)
            );
          case He:
            var M = w._init;
            return x(d, c, p, M(w._payload), N);
        }
        if (Bn(w) || H(w)) return (d = d.get(p) || null), y(c, d, w, N, null);
        el(c, w);
      }
      return null;
    }
    function E(d, c, p, w) {
      for (
        var N = null, M = null, P = c, z = (c = 0), ve = null;
        P !== null && z < p.length;
        z++
      ) {
        P.index > z ? ((ve = P), (P = null)) : (ve = P.sibling);
        var Z = v(d, P, p[z], w);
        if (Z === null) {
          P === null && (P = ve);
          break;
        }
        e && P && Z.alternate === null && t(d, P),
          (c = i(Z, c, z)),
          M === null ? (N = Z) : (M.sibling = Z),
          (M = Z),
          (P = ve);
      }
      if (z === p.length) return n(d, P), ee && en(d, z), N;
      if (P === null) {
        for (; z < p.length; z++)
          (P = C(d, p[z], w)),
            P !== null &&
              ((c = i(P, c, z)),
              M === null ? (N = P) : (M.sibling = P),
              (M = P));
        return ee && en(d, z), N;
      }
      for (P = r(d, P); z < p.length; z++)
        (ve = x(P, d, z, p[z], w)),
          ve !== null &&
            (e &&
              ve.alternate !== null &&
              P.delete(ve.key === null ? z : ve.key),
            (c = i(ve, c, z)),
            M === null ? (N = ve) : (M.sibling = ve),
            (M = ve));
      return (
        e &&
          P.forEach(function (Yt) {
            return t(d, Yt);
          }),
        ee && en(d, z),
        N
      );
    }
    function L(d, c, p, w) {
      var N = H(p);
      if (typeof N != "function") throw Error(m(150));
      if (((p = N.call(p)), p == null)) throw Error(m(151));
      for (
        var M = (N = null), P = c, z = (c = 0), ve = null, Z = p.next();
        P !== null && !Z.done;
        z++, Z = p.next()
      ) {
        P.index > z ? ((ve = P), (P = null)) : (ve = P.sibling);
        var Yt = v(d, P, Z.value, w);
        if (Yt === null) {
          P === null && (P = ve);
          break;
        }
        e && P && Yt.alternate === null && t(d, P),
          (c = i(Yt, c, z)),
          M === null ? (N = Yt) : (M.sibling = Yt),
          (M = Yt),
          (P = ve);
      }
      if (Z.done) return n(d, P), ee && en(d, z), N;
      if (P === null) {
        for (; !Z.done; z++, Z = p.next())
          (Z = C(d, Z.value, w)),
            Z !== null &&
              ((c = i(Z, c, z)),
              M === null ? (N = Z) : (M.sibling = Z),
              (M = Z));
        return ee && en(d, z), N;
      }
      for (P = r(d, P); !Z.done; z++, Z = p.next())
        (Z = x(P, d, z, Z.value, w)),
          Z !== null &&
            (e && Z.alternate !== null && P.delete(Z.key === null ? z : Z.key),
            (c = i(Z, c, z)),
            M === null ? (N = Z) : (M.sibling = Z),
            (M = Z));
      return (
        e &&
          P.forEach(function (D2) {
            return t(d, D2);
          }),
        ee && en(d, z),
        N
      );
    }
    function se(d, c, p, w) {
      if (
        (typeof p == "object" &&
          p !== null &&
          p.type === Pe &&
          p.key === null &&
          (p = p.props.children),
        typeof p == "object" && p !== null)
      ) {
        switch (p.$$typeof) {
          case et:
            e: {
              for (var N = p.key, M = c; M !== null; ) {
                if (M.key === N) {
                  if (((N = p.type), N === Pe)) {
                    if (M.tag === 7) {
                      n(d, M.sibling),
                        (c = l(M, p.props.children)),
                        (c.return = d),
                        (d = c);
                      break e;
                    }
                  } else if (
                    M.elementType === N ||
                    (typeof N == "object" &&
                      N !== null &&
                      N.$$typeof === He &&
                      cu(N) === M.type)
                  ) {
                    n(d, M.sibling),
                      (c = l(M, p.props)),
                      (c.ref = ur(d, M, p)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                  n(d, M);
                  break;
                } else t(d, M);
                M = M.sibling;
              }
              p.type === Pe
                ? ((c = an(p.props.children, d.mode, w, p.key)),
                  (c.return = d),
                  (d = c))
                : ((w = _l(p.type, p.key, p.props, null, d.mode, w)),
                  (w.ref = ur(d, c, p)),
                  (w.return = d),
                  (d = w));
            }
            return o(d);
          case Le:
            e: {
              for (M = p.key; c !== null; ) {
                if (c.key === M)
                  if (
                    c.tag === 4 &&
                    c.stateNode.containerInfo === p.containerInfo &&
                    c.stateNode.implementation === p.implementation
                  ) {
                    n(d, c.sibling),
                      (c = l(c, p.children || [])),
                      (c.return = d),
                      (d = c);
                    break e;
                  } else {
                    n(d, c);
                    break;
                  }
                else t(d, c);
                c = c.sibling;
              }
              (c = jo(p, d.mode, w)), (c.return = d), (d = c);
            }
            return o(d);
          case He:
            return (M = p._init), se(d, c, M(p._payload), w);
        }
        if (Bn(p)) return E(d, c, p, w);
        if (H(p)) return L(d, c, p, w);
        el(d, p);
      }
      return (typeof p == "string" && p !== "") || typeof p == "number"
        ? ((p = "" + p),
          c !== null && c.tag === 6
            ? (n(d, c.sibling), (c = l(c, p)), (c.return = d), (d = c))
            : (n(d, c), (c = Eo(p, d.mode, w)), (c.return = d), (d = c)),
          o(d))
        : n(d, c);
    }
    return se;
  }
  var jn = fu(!0),
    du = fu(!1),
    tl = Bt(null),
    nl = null,
    Ln = null,
    Ti = null;
  function Ri() {
    Ti = Ln = nl = null;
  }
  function Bi(e) {
    var t = tl.current;
    G(tl), (e._currentValue = t);
  }
  function Fi(e, t, n) {
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
  function Nn(e, t) {
    (nl = e),
      (Ti = Ln = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Te = !0), (e.firstContext = null));
  }
  function Xe(e) {
    var t = e._currentValue;
    if (Ti !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Ln === null)) {
        if (nl === null) throw Error(m(308));
        (Ln = e), (nl.dependencies = { lanes: 0, firstContext: e });
      } else Ln = Ln.next = e;
    return t;
  }
  var tn = null;
  function Di(e) {
    tn === null ? (tn = [e]) : tn.push(e);
  }
  function pu(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Di(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      _t(e, r)
    );
  }
  function _t(e, t) {
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
  var Ot = !1;
  function Oi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function hu(e, t) {
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
  function Et(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function At(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), O & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        _t(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Di(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      _t(e, n)
    );
  }
  function rl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), bl(e, n);
    }
  }
  function mu(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
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
  function ll(e, t, n, r) {
    var l = e.updateQueue;
    Ot = !1;
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var a = u,
        h = a.next;
      (a.next = null), o === null ? (i = h) : (o.next = h), (o = a);
      var y = e.alternate;
      y !== null &&
        ((y = y.updateQueue),
        (u = y.lastBaseUpdate),
        u !== o &&
          (u === null ? (y.firstBaseUpdate = h) : (u.next = h),
          (y.lastBaseUpdate = a)));
    }
    if (i !== null) {
      var C = l.baseState;
      (o = 0), (y = h = a = null), (u = i);
      do {
        var v = u.lane,
          x = u.eventTime;
        if ((r & v) === v) {
          y !== null &&
            (y = y.next =
              {
                eventTime: x,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var E = e,
              L = u;
            switch (((v = t), (x = n), L.tag)) {
              case 1:
                if (((E = L.payload), typeof E == "function")) {
                  C = E.call(x, C, v);
                  break e;
                }
                C = E;
                break e;
              case 3:
                E.flags = (E.flags & -65537) | 128;
              case 0:
                if (
                  ((E = L.payload),
                  (v = typeof E == "function" ? E.call(x, C, v) : E),
                  v == null)
                )
                  break e;
                C = _({}, C, v);
                break e;
              case 2:
                Ot = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64),
            (v = l.effects),
            v === null ? (l.effects = [u]) : v.push(u));
        } else
          (x = {
            eventTime: x,
            lane: v,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            y === null ? ((h = y = x), (a = C)) : (y = y.next = x),
            (o |= v);
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          (v = u),
            (u = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (y === null && (a = C),
        (l.baseState = a),
        (l.firstBaseUpdate = h),
        (l.lastBaseUpdate = y),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (o |= l.lane), (l = l.next);
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      (ln |= o), (e.lanes = o), (e.memoizedState = C);
    }
  }
  function vu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var sr = {},
    ht = Bt(sr),
    ar = Bt(sr),
    cr = Bt(sr);
  function nn(e) {
    if (e === sr) throw Error(m(174));
    return e;
  }
  function Ai(e, t) {
    switch ((K(cr, t), K(ar, e), K(ht, sr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Il(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Il(t, e));
    }
    G(ht), K(ht, t);
  }
  function Mn() {
    G(ht), G(ar), G(cr);
  }
  function gu(e) {
    nn(cr.current);
    var t = nn(ht.current),
      n = Il(t, e.type);
    t !== n && (K(ar, e), K(ht, n));
  }
  function Ii(e) {
    ar.current === e && (G(ht), G(ar));
  }
  var ne = Bt(0);
  function il(e) {
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
  var Ui = [];
  function Zi() {
    for (var e = 0; e < Ui.length; e++)
      Ui[e]._workInProgressVersionPrimary = null;
    Ui.length = 0;
  }
  var ol = ke.ReactCurrentDispatcher,
    Wi = ke.ReactCurrentBatchConfig,
    rn = 0,
    re = null,
    de = null,
    he = null,
    ul = !1,
    fr = !1,
    dr = 0,
    o2 = 0;
  function Se() {
    throw Error(m(321));
  }
  function Qi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!rt(e[n], t[n])) return !1;
    return !0;
  }
  function $i(e, t, n, r, l, i) {
    if (
      ((rn = i),
      (re = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ol.current = e === null || e.memoizedState === null ? c2 : f2),
      (e = n(r, l)),
      fr)
    ) {
      i = 0;
      do {
        if (((fr = !1), (dr = 0), 25 <= i)) throw Error(m(301));
        (i += 1),
          (he = de = null),
          (t.updateQueue = null),
          (ol.current = d2),
          (e = n(r, l));
      } while (fr);
    }
    if (
      ((ol.current = cl),
      (t = de !== null && de.next !== null),
      (rn = 0),
      (he = de = re = null),
      (ul = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Yi() {
    var e = dr !== 0;
    return (dr = 0), e;
  }
  function mt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return he === null ? (re.memoizedState = he = e) : (he = he.next = e), he;
  }
  function Ge() {
    if (de === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = de.next;
    var t = he === null ? re.memoizedState : he.next;
    if (t !== null) (he = t), (de = e);
    else {
      if (e === null) throw Error(m(310));
      (de = e),
        (e = {
          memoizedState: de.memoizedState,
          baseState: de.baseState,
          baseQueue: de.baseQueue,
          queue: de.queue,
          next: null,
        }),
        he === null ? (re.memoizedState = he = e) : (he = he.next = e);
    }
    return he;
  }
  function pr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ki(e) {
    var t = Ge(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = de,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        (l.next = i.next), (i.next = o);
      }
      (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
      (i = l.next), (r = r.baseState);
      var u = (o = null),
        a = null,
        h = i;
      do {
        var y = h.lane;
        if ((rn & y) === y)
          a !== null &&
            (a = a.next =
              {
                lane: 0,
                action: h.action,
                hasEagerState: h.hasEagerState,
                eagerState: h.eagerState,
                next: null,
              }),
            (r = h.hasEagerState ? h.eagerState : e(r, h.action));
        else {
          var C = {
            lane: y,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          };
          a === null ? ((u = a = C), (o = r)) : (a = a.next = C),
            (re.lanes |= y),
            (ln |= y);
        }
        h = h.next;
      } while (h !== null && h !== i);
      a === null ? (o = r) : (a.next = u),
        rt(r, t.memoizedState) || (Te = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = a),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (i = l.lane), (re.lanes |= i), (ln |= i), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Xi(e) {
    var t = Ge(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do (i = e(i, o.action)), (o = o.next);
      while (o !== l);
      rt(i, t.memoizedState) || (Te = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function yu() {}
  function Cu(e, t) {
    var n = re,
      r = Ge(),
      l = t(),
      i = !rt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Te = !0)),
      (r = r.queue),
      Gi(xu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (he !== null && he.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        hr(9, ku.bind(null, n, r, l, t), void 0, null),
        me === null)
      )
        throw Error(m(349));
      rn & 30 || wu(n, t, l);
    }
    return l;
  }
  function wu(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (re.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function ku(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Su(t) && _u(e);
  }
  function xu(e, t, n) {
    return n(function () {
      Su(t) && _u(e);
    });
  }
  function Su(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !rt(e, n);
    } catch {
      return !0;
    }
  }
  function _u(e) {
    var t = _t(e, 1);
    t !== null && st(t, e, 1, -1);
  }
  function Eu(e) {
    var t = mt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = a2.bind(null, re, e)),
      [t.memoizedState, e]
    );
  }
  function hr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (re.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ju() {
    return Ge().memoizedState;
  }
  function sl(e, t, n, r) {
    var l = mt();
    (re.flags |= e),
      (l.memoizedState = hr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function al(e, t, n, r) {
    var l = Ge();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (de !== null) {
      var o = de.memoizedState;
      if (((i = o.destroy), r !== null && Qi(r, o.deps))) {
        l.memoizedState = hr(t, n, i, r);
        return;
      }
    }
    (re.flags |= e), (l.memoizedState = hr(1 | t, n, i, r));
  }
  function Lu(e, t) {
    return sl(8390656, 8, e, t);
  }
  function Gi(e, t) {
    return al(2048, 8, e, t);
  }
  function Nu(e, t) {
    return al(4, 2, e, t);
  }
  function Mu(e, t) {
    return al(4, 4, e, t);
  }
  function Pu(e, t) {
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
  function Hu(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), al(4, 4, Pu.bind(null, t, e), n)
    );
  }
  function Ji() {}
  function zu(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qi(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Vu(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Tu(e, t, n) {
    return rn & 21
      ? (rt(n, t) ||
          ((n = c1()), (re.lanes |= n), (ln |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n));
  }
  function u2(e, t) {
    var n = Q;
    (Q = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Wi.transition;
    Wi.transition = {};
    try {
      e(!1), t();
    } finally {
      (Q = n), (Wi.transition = r);
    }
  }
  function Ru() {
    return Ge().memoizedState;
  }
  function s2(e, t, n) {
    var r = Wt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Bu(e))
    )
      Fu(t, n);
    else if (((n = pu(e, t, n, r)), n !== null)) {
      var l = Me();
      st(n, e, r, l), Du(n, t, r);
    }
  }
  function a2(e, t, n) {
    var r = Wt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Bu(e)) Fu(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var o = t.lastRenderedState,
            u = i(o, n);
          if (((l.hasEagerState = !0), (l.eagerState = u), rt(u, o))) {
            var a = t.interleaved;
            a === null
              ? ((l.next = l), Di(t))
              : ((l.next = a.next), (a.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = pu(e, t, l, r)),
        n !== null && ((l = Me()), st(n, e, r, l), Du(n, t, r));
    }
  }
  function Bu(e) {
    var t = e.alternate;
    return e === re || (t !== null && t === re);
  }
  function Fu(e, t) {
    fr = ul = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Du(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), bl(e, n);
    }
  }
  var cl = {
      readContext: Xe,
      useCallback: Se,
      useContext: Se,
      useEffect: Se,
      useImperativeHandle: Se,
      useInsertionEffect: Se,
      useLayoutEffect: Se,
      useMemo: Se,
      useReducer: Se,
      useRef: Se,
      useState: Se,
      useDebugValue: Se,
      useDeferredValue: Se,
      useTransition: Se,
      useMutableSource: Se,
      useSyncExternalStore: Se,
      useId: Se,
      unstable_isNewReconciler: !1,
    },
    c2 = {
      readContext: Xe,
      useCallback: function (e, t) {
        return (mt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Xe,
      useEffect: Lu,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          sl(4194308, 4, Pu.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return sl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return sl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = mt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = mt();
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
          (e = e.dispatch = s2.bind(null, re, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = mt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Eu,
      useDebugValue: Ji,
      useDeferredValue: function (e) {
        return (mt().memoizedState = e);
      },
      useTransition: function () {
        var e = Eu(!1),
          t = e[0];
        return (e = u2.bind(null, e[1])), (mt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = re,
          l = mt();
        if (ee) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), me === null)) throw Error(m(349));
          rn & 30 || wu(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          Lu(xu.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          hr(9, ku.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = mt(),
          t = me.identifierPrefix;
        if (ee) {
          var n = St,
            r = xt;
          (n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = dr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = o2++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    f2 = {
      readContext: Xe,
      useCallback: zu,
      useContext: Xe,
      useEffect: Gi,
      useImperativeHandle: Hu,
      useInsertionEffect: Nu,
      useLayoutEffect: Mu,
      useMemo: Vu,
      useReducer: Ki,
      useRef: ju,
      useState: function () {
        return Ki(pr);
      },
      useDebugValue: Ji,
      useDeferredValue: function (e) {
        var t = Ge();
        return Tu(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Ki(pr)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: yu,
      useSyncExternalStore: Cu,
      useId: Ru,
      unstable_isNewReconciler: !1,
    },
    d2 = {
      readContext: Xe,
      useCallback: zu,
      useContext: Xe,
      useEffect: Gi,
      useImperativeHandle: Hu,
      useInsertionEffect: Nu,
      useLayoutEffect: Mu,
      useMemo: Vu,
      useReducer: Xi,
      useRef: ju,
      useState: function () {
        return Xi(pr);
      },
      useDebugValue: Ji,
      useDeferredValue: function (e) {
        var t = Ge();
        return de === null ? (t.memoizedState = e) : Tu(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Xi(pr)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: yu,
      useSyncExternalStore: Cu,
      useId: Ru,
      unstable_isNewReconciler: !1,
    };
  function it(e, t) {
    if (e && e.defaultProps) {
      (t = _({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function qi(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : _({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var fl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Gt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Me(),
        l = Wt(e),
        i = Et(r, l);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = At(e, i, l)),
        t !== null && (st(t, e, l, r), rl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Me(),
        l = Wt(e),
        i = Et(r, l);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = At(e, i, l)),
        t !== null && (st(t, e, l, r), rl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Me(),
        r = Wt(e),
        l = Et(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = At(e, l, r)),
        t !== null && (st(t, e, r, n), rl(t, e, r));
    },
  };
  function Ou(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
        ? !er(n, r) || !er(l, i)
        : !0
    );
  }
  function Au(e, t, n) {
    var r = !1,
      l = Ft,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Xe(i))
        : ((l = Ve(t) ? qt : xe.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? xn(e, l) : Ft)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = fl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Iu(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && fl.enqueueReplaceState(t, t.state, null);
  }
  function bi(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Oi(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (l.context = Xe(i))
      : ((i = Ve(t) ? qt : xe.current), (l.context = xn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (qi(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && fl.enqueueReplaceState(l, l.state, null),
        ll(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Pn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += I(r)), (r = r.return);
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
  function eo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function to(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var p2 = typeof WeakMap == "function" ? WeakMap : Map;
  function Uu(e, t, n) {
    (n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        yl || ((yl = !0), (go = r)), to(e, t);
      }),
      n
    );
  }
  function Zu(e, t, n) {
    (n = Et(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          to(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          to(e, t),
            typeof r != "function" &&
              (Ut === null ? (Ut = new Set([this])) : Ut.add(this));
          var o = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      n
    );
  }
  function Wu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new p2();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = L2.bind(null, e, t, n)), t.then(e, e));
  }
  function Qu(e) {
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
  function $u(e, t, n, r, l) {
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
                : ((t = Et(-1, 1)), (t.tag = 2), At(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var h2 = ke.ReactCurrentOwner,
    Te = !1;
  function Ne(e, t, n, r) {
    t.child = e === null ? du(t, null, n, r) : jn(t, e.child, n, r);
  }
  function Yu(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      Nn(t, l),
      (r = $i(e, t, n, r, i, l)),
      (n = Yi()),
      e !== null && !Te
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          jt(e, t, l))
        : (ee && n && Mi(t), (t.flags |= 1), Ne(e, t, r, l), t.child)
    );
  }
  function Ku(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !_o(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Xu(e, t, i, r, l))
        : ((e = _l(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & l))) {
      var o = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : er), n(o, r) && e.ref === t.ref)
      )
        return jt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = $t(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Xu(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (er(i, r) && e.ref === t.ref)
        if (((Te = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          e.flags & 131072 && (Te = !0);
        else return (t.lanes = e.lanes), jt(e, t, l);
    }
    return no(e, t, n, r, l);
  }
  function Gu(e, t, n) {
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
          K(zn, Ze),
          (Ze |= n);
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
            K(zn, Ze),
            (Ze |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          K(zn, Ze),
          (Ze |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        K(zn, Ze),
        (Ze |= r);
    return Ne(e, t, l, n), t.child;
  }
  function Ju(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function no(e, t, n, r, l) {
    var i = Ve(n) ? qt : xe.current;
    return (
      (i = xn(t, i)),
      Nn(t, l),
      (n = $i(e, t, n, r, i, l)),
      (r = Yi()),
      e !== null && !Te
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          jt(e, t, l))
        : (ee && r && Mi(t), (t.flags |= 1), Ne(e, t, n, l), t.child)
    );
  }
  function qu(e, t, n, r, l) {
    if (Ve(n)) {
      var i = !0;
      Xr(t);
    } else i = !1;
    if ((Nn(t, l), t.stateNode === null))
      pl(e, t), Au(t, n, r), bi(t, n, r, l), (r = !0);
    else if (e === null) {
      var o = t.stateNode,
        u = t.memoizedProps;
      o.props = u;
      var a = o.context,
        h = n.contextType;
      typeof h == "object" && h !== null
        ? (h = Xe(h))
        : ((h = Ve(n) ? qt : xe.current), (h = xn(t, h)));
      var y = n.getDerivedStateFromProps,
        C =
          typeof y == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      C ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== r || a !== h) && Iu(t, o, r, h)),
        (Ot = !1);
      var v = t.memoizedState;
      (o.state = v),
        ll(t, r, o, l),
        (a = t.memoizedState),
        u !== r || v !== a || ze.current || Ot
          ? (typeof y == "function" && (qi(t, n, y, r), (a = t.memoizedState)),
            (u = Ot || Ou(t, n, u, r, v, a, h))
              ? (C ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = a)),
            (o.props = r),
            (o.state = a),
            (o.context = h),
            (r = u))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (o = t.stateNode),
        hu(e, t),
        (u = t.memoizedProps),
        (h = t.type === t.elementType ? u : it(t.type, u)),
        (o.props = h),
        (C = t.pendingProps),
        (v = o.context),
        (a = n.contextType),
        typeof a == "object" && a !== null
          ? (a = Xe(a))
          : ((a = Ve(n) ? qt : xe.current), (a = xn(t, a)));
      var x = n.getDerivedStateFromProps;
      (y =
        typeof x == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== C || v !== a) && Iu(t, o, r, a)),
        (Ot = !1),
        (v = t.memoizedState),
        (o.state = v),
        ll(t, r, o, l);
      var E = t.memoizedState;
      u !== C || v !== E || ze.current || Ot
        ? (typeof x == "function" && (qi(t, n, x, r), (E = t.memoizedState)),
          (h = Ot || Ou(t, n, h, r, v, E, a) || !1)
            ? (y ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, E, a),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, E, a)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (u === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = E)),
          (o.props = r),
          (o.state = E),
          (o.context = a),
          (r = h))
        : (typeof o.componentDidUpdate != "function" ||
            (u === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return ro(e, t, n, r, i, l);
  }
  function ro(e, t, n, r, l, i) {
    Ju(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && ru(t, n, !1), jt(e, t, i);
    (r = t.stateNode), (h2.current = t);
    var u =
      o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = jn(t, e.child, null, i)), (t.child = jn(t, null, u, i)))
        : Ne(e, t, u, i),
      (t.memoizedState = r.state),
      l && ru(t, n, !0),
      t.child
    );
  }
  function bu(e) {
    var t = e.stateNode;
    t.pendingContext
      ? tu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && tu(e, t.context, !1),
      Ai(e, t.containerInfo);
  }
  function es(e, t, n, r, l) {
    return En(), Vi(l), (t.flags |= 256), Ne(e, t, n, r), t.child;
  }
  var lo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function io(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ts(e, t, n) {
    var r = t.pendingProps,
      l = ne.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      u;
    if (
      ((u = o) ||
        (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      K(ne, l & 1),
      e === null)
    )
      return (
        zi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((o = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (o = { mode: "hidden", children: o }),
                !(r & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = o))
                  : (i = El(o, r, 0, null)),
                (e = an(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = io(n)),
                (t.memoizedState = lo),
                e)
              : oo(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return m2(e, t, o, r, u, l, n);
    if (i) {
      (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
      var a = { mode: "hidden", children: r.children };
      return (
        !(o & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = a),
            (t.deletions = null))
          : ((r = $t(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (i = $t(u, i)) : ((i = an(i, o, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? io(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = lo),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = $t(i, { mode: "visible", children: r.children })),
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
  function oo(e, t) {
    return (
      (t = El({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function dl(e, t, n, r) {
    return (
      r !== null && Vi(r),
      jn(t, e.child, null, n),
      (e = oo(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function m2(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = eo(Error(m(422)))), dl(e, t, o, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = El({ mode: "visible", children: r.children }, l, 0, null)),
          (i = an(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && jn(t, e.child, null, o),
          (t.child.memoizedState = io(o)),
          (t.memoizedState = lo),
          i);
    if (!(t.mode & 1)) return dl(e, t, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (
        (r = u), (i = Error(m(419))), (r = eo(i, r, void 0)), dl(e, t, o, r)
      );
    }
    if (((u = (o & e.childLanes) !== 0), Te || u)) {
      if (((r = me), r !== null)) {
        switch (o & -o) {
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
        (l = l & (r.suspendedLanes | o) ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), _t(e, l), st(r, e, l, -1));
      }
      return So(), (r = eo(Error(m(421)))), dl(e, t, o, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = N2.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (Ue = Rt(l.nextSibling)),
        (Ie = t),
        (ee = !0),
        (lt = null),
        e !== null &&
          ((Ye[Ke++] = xt),
          (Ye[Ke++] = St),
          (Ye[Ke++] = bt),
          (xt = e.id),
          (St = e.overflow),
          (bt = t)),
        (t = oo(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function ns(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Fi(e.return, t, n);
  }
  function uo(e, t, n, r, l) {
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
  function rs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Ne(e, t, r.children, n), (r = ne.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ns(e, n, t);
          else if (e.tag === 19) ns(e, n, t);
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
    if ((K(ne, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && il(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            uo(t, !1, l, n, i);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && il(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          uo(t, !0, n, null, i);
          break;
        case "together":
          uo(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function pl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function jt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ln |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (
        e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = $t(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function v2(e, t, n) {
    switch (t.tag) {
      case 3:
        bu(t), En();
        break;
      case 5:
        gu(t);
        break;
      case 1:
        Ve(t.type) && Xr(t);
        break;
      case 4:
        Ai(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        K(tl, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (K(ne, ne.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? ts(e, t, n)
            : (K(ne, ne.current & 1),
              (e = jt(e, t, n)),
              e !== null ? e.sibling : null);
        K(ne, ne.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return rs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          K(ne, ne.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Gu(e, t, n);
    }
    return jt(e, t, n);
  }
  var ls, so, is, os;
  (ls = function (e, t) {
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
    (so = function () {}),
    (is = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), nn(ht.current);
        var i = null;
        switch (n) {
          case "input":
            (l = Fl(e, l)), (r = Fl(e, r)), (i = []);
            break;
          case "select":
            (l = _({}, l, { value: void 0 })),
              (r = _({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (l = Al(e, l)), (r = Al(e, r)), (i = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = $r);
        }
        Ul(n, r);
        var o;
        n = null;
        for (h in l)
          if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null)
            if (h === "style") {
              var u = l[h];
              for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              h !== "dangerouslySetInnerHTML" &&
                h !== "children" &&
                h !== "suppressContentEditableWarning" &&
                h !== "suppressHydrationWarning" &&
                h !== "autoFocus" &&
                (R.hasOwnProperty(h)
                  ? i || (i = [])
                  : (i = i || []).push(h, null));
        for (h in r) {
          var a = r[h];
          if (
            ((u = l != null ? l[h] : void 0),
            r.hasOwnProperty(h) && a !== u && (a != null || u != null))
          )
            if (h === "style")
              if (u) {
                for (o in u)
                  !u.hasOwnProperty(o) ||
                    (a && a.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in a)
                  a.hasOwnProperty(o) &&
                    u[o] !== a[o] &&
                    (n || (n = {}), (n[o] = a[o]));
              } else n || (i || (i = []), i.push(h, n)), (n = a);
            else
              h === "dangerouslySetInnerHTML"
                ? ((a = a ? a.__html : void 0),
                  (u = u ? u.__html : void 0),
                  a != null && u !== a && (i = i || []).push(h, a))
                : h === "children"
                ? (typeof a != "string" && typeof a != "number") ||
                  (i = i || []).push(h, "" + a)
                : h !== "suppressContentEditableWarning" &&
                  h !== "suppressHydrationWarning" &&
                  (R.hasOwnProperty(h)
                    ? (a != null && h === "onScroll" && X("scroll", e),
                      i || u === a || (i = []))
                    : (i = i || []).push(h, a));
        }
        n && (i = i || []).push("style", n);
        var h = i;
        (t.updateQueue = h) && (t.flags |= 4);
      }
    }),
    (os = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function mr(e, t) {
    if (!ee)
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
  function _e(e) {
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
  function g2(e, t, n) {
    var r = t.pendingProps;
    switch ((Pi(t), t.tag)) {
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
        return _e(t), null;
      case 1:
        return Ve(t.type) && Kr(), _e(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Mn(),
          G(ze),
          G(xe),
          Zi(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (br(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), lt !== null && (wo(lt), (lt = null)))),
          so(e, t),
          _e(t),
          null
        );
      case 5:
        Ii(t);
        var l = nn(cr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          is(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return _e(t), null;
          }
          if (((e = nn(ht.current)), br(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[pt] = t), (r[ir] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                X("cancel", r), X("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < nr.length; l++) X(nr[l], r);
                break;
              case "source":
                X("error", r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", r), X("load", r);
                break;
              case "details":
                X("toggle", r);
                break;
              case "input":
                Ao(r, i), X("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  X("invalid", r);
                break;
              case "textarea":
                Zo(r, i), X("invalid", r);
            }
            Ul(n, i), (l = null);
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var u = i[o];
                o === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (i.suppressHydrationWarning !== !0 &&
                        Qr(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (i.suppressHydrationWarning !== !0 &&
                        Qr(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : R.hasOwnProperty(o) &&
                    u != null &&
                    o === "onScroll" &&
                    X("scroll", r);
              }
            switch (n) {
              case "input":
                xr(r), Uo(r, i, !0);
                break;
              case "textarea":
                xr(r), Qo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = $r);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = $o(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[pt] = t),
              (e[ir] = r),
              ls(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((o = Zl(n, r)), n)) {
                case "dialog":
                  X("cancel", e), X("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  X("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < nr.length; l++) X(nr[l], e);
                  l = r;
                  break;
                case "source":
                  X("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  X("error", e), X("load", e), (l = r);
                  break;
                case "details":
                  X("toggle", e), (l = r);
                  break;
                case "input":
                  Ao(e, r), (l = Fl(e, r)), X("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = _({}, r, { value: void 0 })),
                    X("invalid", e);
                  break;
                case "textarea":
                  Zo(e, r), (l = Al(e, r)), X("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ul(n, l), (u = l);
              for (i in u)
                if (u.hasOwnProperty(i)) {
                  var a = u[i];
                  i === "style"
                    ? Xo(e, a)
                    : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Yo(e, a))
                    : i === "children"
                    ? typeof a == "string"
                      ? (n !== "textarea" || a !== "") && Fn(e, a)
                      : typeof a == "number" && Fn(e, "" + a)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (R.hasOwnProperty(i)
                        ? a != null && i === "onScroll" && X("scroll", e)
                        : a != null && be(e, i, a, o));
                }
              switch (n) {
                case "input":
                  xr(e), Uo(e, r, !1);
                  break;
                case "textarea":
                  xr(e), Qo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + W(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? cn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        cn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = $r);
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
        return _e(t), null;
      case 6:
        if (e && t.stateNode != null) os(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = nn(cr.current)), nn(ht.current), br(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (i = r.nodeValue !== n) && ((e = Ie), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Qr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Qr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[pt] = t),
              (t.stateNode = r);
        }
        return _e(t), null;
      case 13:
        if (
          (G(ne),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ee && Ue !== null && t.mode & 1 && !(t.flags & 128))
            au(), En(), (t.flags |= 98560), (i = !1);
          else if (((i = br(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(m(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(m(317));
              i[pt] = t;
            } else
              En(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            _e(t), (i = !1);
          } else lt !== null && (wo(lt), (lt = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ne.current & 1 ? pe === 0 && (pe = 3) : So())),
            t.updateQueue !== null && (t.flags |= 4),
            _e(t),
            null);
      case 4:
        return (
          Mn(),
          so(e, t),
          e === null && rr(t.stateNode.containerInfo),
          _e(t),
          null
        );
      case 10:
        return Bi(t.type._context), _e(t), null;
      case 17:
        return Ve(t.type) && Kr(), _e(t), null;
      case 19:
        if ((G(ne), (i = t.memoizedState), i === null)) return _e(t), null;
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) mr(i, !1);
          else {
            if (pe !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((o = il(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      mr(i, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (o = i.alternate),
                      o === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = o.childLanes),
                          (i.lanes = o.lanes),
                          (i.child = o.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = o.memoizedProps),
                          (i.memoizedState = o.memoizedState),
                          (i.updateQueue = o.updateQueue),
                          (i.type = o.type),
                          (e = o.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return K(ne, (ne.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              ue() > Vn &&
              ((t.flags |= 128), (r = !0), mr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = il(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                mr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !o.alternate &&
                  !ee)
              )
                return _e(t), null;
            } else
              2 * ue() - i.renderingStartTime > Vn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), mr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = i.last),
              n !== null ? (n.sibling = o) : (t.child = o),
              (i.last = o));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ue()),
            (t.sibling = null),
            (n = ne.current),
            K(ne, r ? (n & 1) | 2 : n & 1),
            t)
          : (_e(t), null);
      case 22:
      case 23:
        return (
          xo(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? Ze & 1073741824 &&
              (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : _e(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function y2(e, t) {
    switch ((Pi(t), t.tag)) {
      case 1:
        return (
          Ve(t.type) && Kr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Mn(),
          G(ze),
          G(xe),
          Zi(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Ii(t), null;
      case 13:
        if (
          (G(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(m(340));
          En();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return G(ne), null;
      case 4:
        return Mn(), null;
      case 10:
        return Bi(t.type._context), null;
      case 22:
      case 23:
        return xo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hl = !1,
    Ee = !1,
    C2 = typeof WeakSet == "function" ? WeakSet : Set,
    S = null;
  function Hn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ie(e, t, r);
        }
      else n.current = null;
  }
  function ao(e, t, n) {
    try {
      n();
    } catch (r) {
      ie(e, t, r);
    }
  }
  var us = !1;
  function w2(e, t) {
    if (((ki = Tr), (e = O1()), pi(e))) {
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
            var o = 0,
              u = -1,
              a = -1,
              h = 0,
              y = 0,
              C = e,
              v = null;
            t: for (;;) {
              for (
                var x;
                C !== n || (l !== 0 && C.nodeType !== 3) || (u = o + l),
                  C !== i || (r !== 0 && C.nodeType !== 3) || (a = o + r),
                  C.nodeType === 3 && (o += C.nodeValue.length),
                  (x = C.firstChild) !== null;

              )
                (v = C), (C = x);
              for (;;) {
                if (C === e) break t;
                if (
                  (v === n && ++h === l && (u = o),
                  v === i && ++y === r && (a = o),
                  (x = C.nextSibling) !== null)
                )
                  break;
                (C = v), (v = C.parentNode);
              }
              C = x;
            }
            n = u === -1 || a === -1 ? null : { start: u, end: a };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      xi = { focusedElem: e, selectionRange: n }, Tr = !1, S = t;
      S !== null;

    )
      if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (S = e);
      else
        for (; S !== null; ) {
          t = S;
          try {
            var E = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (E !== null) {
                    var L = E.memoizedProps,
                      se = E.memoizedState,
                      d = t.stateNode,
                      c = d.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? L : it(t.type, L),
                        se
                      );
                    d.__reactInternalSnapshotBeforeUpdate = c;
                  }
                  break;
                case 3:
                  var p = t.stateNode.containerInfo;
                  p.nodeType === 1
                    ? (p.textContent = "")
                    : p.nodeType === 9 &&
                      p.documentElement &&
                      p.removeChild(p.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (w) {
            ie(t, t.return, w);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (S = e);
            break;
          }
          S = t.return;
        }
    return (E = us), (us = !1), E;
  }
  function vr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          (l.destroy = void 0), i !== void 0 && ao(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ml(e, t) {
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
  function co(e) {
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
  function ss(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), ss(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[pt],
          delete t[ir],
          delete t[ji],
          delete t[n2],
          delete t[r2])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function as(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function cs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || as(e.return)) return null;
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
  function fo(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = $r));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (fo(e, t, n), e = e.sibling; e !== null; )
        fo(e, t, n), (e = e.sibling);
  }
  function po(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (po(e, t, n), e = e.sibling; e !== null; )
        po(e, t, n), (e = e.sibling);
  }
  var ye = null,
    ot = !1;
  function It(e, t, n) {
    for (n = n.child; n !== null; ) fs(e, t, n), (n = n.sibling);
  }
  function fs(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Nr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ee || Hn(n, t);
      case 6:
        var r = ye,
          l = ot;
        (ye = null),
          It(e, t, n),
          (ye = r),
          (ot = l),
          ye !== null &&
            (ot
              ? ((e = ye),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ye.removeChild(n.stateNode));
        break;
      case 18:
        ye !== null &&
          (ot
            ? ((e = ye),
              (n = n.stateNode),
              e.nodeType === 8
                ? Ei(e.parentNode, n)
                : e.nodeType === 1 && Ei(e, n),
              Kn(e))
            : Ei(ye, n.stateNode));
        break;
      case 4:
        (r = ye),
          (l = ot),
          (ye = n.stateNode.containerInfo),
          (ot = !0),
          It(e, t, n),
          (ye = r),
          (ot = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ee &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              o = i.destroy;
            (i = i.tag),
              o !== void 0 && (i & 2 || i & 4) && ao(n, t, o),
              (l = l.next);
          } while (l !== r);
        }
        It(e, t, n);
        break;
      case 1:
        if (
          !Ee &&
          (Hn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (u) {
            ie(n, t, u);
          }
        It(e, t, n);
        break;
      case 21:
        It(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ee = (r = Ee) || n.memoizedState !== null), It(e, t, n), (Ee = r))
          : It(e, t, n);
        break;
      default:
        It(e, t, n);
    }
  }
  function ds(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new C2()),
        t.forEach(function (r) {
          var l = M2.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function ut(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            o = t,
            u = o;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                (ye = u.stateNode), (ot = !1);
                break e;
              case 3:
                (ye = u.stateNode.containerInfo), (ot = !0);
                break e;
              case 4:
                (ye = u.stateNode.containerInfo), (ot = !0);
                break e;
            }
            u = u.return;
          }
          if (ye === null) throw Error(m(160));
          fs(i, o, l), (ye = null), (ot = !1);
          var a = l.alternate;
          a !== null && (a.return = null), (l.return = null);
        } catch (h) {
          ie(l, t, h);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) ps(t, e), (t = t.sibling);
  }
  function ps(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ut(t, e), vt(e), r & 4)) {
          try {
            vr(3, e, e.return), ml(3, e);
          } catch (L) {
            ie(e, e.return, L);
          }
          try {
            vr(5, e, e.return);
          } catch (L) {
            ie(e, e.return, L);
          }
        }
        break;
      case 1:
        ut(t, e), vt(e), r & 512 && n !== null && Hn(n, n.return);
        break;
      case 5:
        if (
          (ut(t, e),
          vt(e),
          r & 512 && n !== null && Hn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Fn(l, "");
          } catch (L) {
            ie(e, e.return, L);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            u = e.type,
            a = e.updateQueue;
          if (((e.updateQueue = null), a !== null))
            try {
              u === "input" && i.type === "radio" && i.name != null && Io(l, i),
                Zl(u, o);
              var h = Zl(u, i);
              for (o = 0; o < a.length; o += 2) {
                var y = a[o],
                  C = a[o + 1];
                y === "style"
                  ? Xo(l, C)
                  : y === "dangerouslySetInnerHTML"
                  ? Yo(l, C)
                  : y === "children"
                  ? Fn(l, C)
                  : be(l, y, C, h);
              }
              switch (u) {
                case "input":
                  Dl(l, i);
                  break;
                case "textarea":
                  Wo(l, i);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var x = i.value;
                  x != null
                    ? cn(l, !!i.multiple, x, !1)
                    : v !== !!i.multiple &&
                      (i.defaultValue != null
                        ? cn(l, !!i.multiple, i.defaultValue, !0)
                        : cn(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[ir] = i;
            } catch (L) {
              ie(e, e.return, L);
            }
        }
        break;
      case 6:
        if ((ut(t, e), vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          (l = e.stateNode), (i = e.memoizedProps);
          try {
            l.nodeValue = i;
          } catch (L) {
            ie(e, e.return, L);
          }
        }
        break;
      case 3:
        if (
          (ut(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Kn(t.containerInfo);
          } catch (L) {
            ie(e, e.return, L);
          }
        break;
      case 4:
        ut(t, e), vt(e);
        break;
      case 13:
        ut(t, e),
          vt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (vo = ue())),
          r & 4 && ds(e);
        break;
      case 22:
        if (
          ((y = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ee = (h = Ee) || y), ut(t, e), (Ee = h)) : ut(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((h = e.memoizedState !== null),
            (e.stateNode.isHidden = h) && !y && e.mode & 1)
          )
            for (S = e, y = e.child; y !== null; ) {
              for (C = S = y; S !== null; ) {
                switch (((v = S), (x = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    vr(4, v, v.return);
                    break;
                  case 1:
                    Hn(v, v.return);
                    var E = v.stateNode;
                    if (typeof E.componentWillUnmount == "function") {
                      (r = v), (n = v.return);
                      try {
                        (t = r),
                          (E.props = t.memoizedProps),
                          (E.state = t.memoizedState),
                          E.componentWillUnmount();
                      } catch (L) {
                        ie(r, n, L);
                      }
                    }
                    break;
                  case 5:
                    Hn(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      vs(C);
                      continue;
                    }
                }
                x !== null ? ((x.return = v), (S = x)) : vs(C);
              }
              y = y.sibling;
            }
          e: for (y = null, C = e; ; ) {
            if (C.tag === 5) {
              if (y === null) {
                y = C;
                try {
                  (l = C.stateNode),
                    h
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((u = C.stateNode),
                        (a = C.memoizedProps.style),
                        (o =
                          a != null && a.hasOwnProperty("display")
                            ? a.display
                            : null),
                        (u.style.display = Ko("display", o)));
                } catch (L) {
                  ie(e, e.return, L);
                }
              }
            } else if (C.tag === 6) {
              if (y === null)
                try {
                  C.stateNode.nodeValue = h ? "" : C.memoizedProps;
                } catch (L) {
                  ie(e, e.return, L);
                }
            } else if (
              ((C.tag !== 22 && C.tag !== 23) ||
                C.memoizedState === null ||
                C === e) &&
              C.child !== null
            ) {
              (C.child.return = C), (C = C.child);
              continue;
            }
            if (C === e) break e;
            for (; C.sibling === null; ) {
              if (C.return === null || C.return === e) break e;
              y === C && (y = null), (C = C.return);
            }
            y === C && (y = null),
              (C.sibling.return = C.return),
              (C = C.sibling);
          }
        }
        break;
      case 19:
        ut(t, e), vt(e), r & 4 && ds(e);
        break;
      case 21:
        break;
      default:
        ut(t, e), vt(e);
    }
  }
  function vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (as(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Fn(l, ""), (r.flags &= -33));
            var i = cs(e);
            po(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              u = cs(e);
            fo(e, u, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (a) {
        ie(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function k2(e, t, n) {
    (S = e), hs(e);
  }
  function hs(e, t, n) {
    for (var r = (e.mode & 1) !== 0; S !== null; ) {
      var l = S,
        i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || hl;
        if (!o) {
          var u = l.alternate,
            a = (u !== null && u.memoizedState !== null) || Ee;
          u = hl;
          var h = Ee;
          if (((hl = o), (Ee = a) && !h))
            for (S = l; S !== null; )
              (o = S),
                (a = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? gs(l)
                  : a !== null
                  ? ((a.return = o), (S = a))
                  : gs(l);
          for (; i !== null; ) (S = i), hs(i), (i = i.sibling);
          (S = l), (hl = u), (Ee = h);
        }
        ms(e);
      } else
        l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : ms(e);
    }
  }
  function ms(e) {
    for (; S !== null; ) {
      var t = S;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ee || ml(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ee)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : it(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var i = t.updateQueue;
                i !== null && vu(t, i, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  vu(t, o, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
                  var a = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      a.autoFocus && n.focus();
                      break;
                    case "img":
                      a.src && (n.src = a.src);
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
                  var h = t.alternate;
                  if (h !== null) {
                    var y = h.memoizedState;
                    if (y !== null) {
                      var C = y.dehydrated;
                      C !== null && Kn(C);
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
                throw Error(m(163));
            }
          Ee || (t.flags & 512 && co(t));
        } catch (v) {
          ie(t, t.return, v);
        }
      }
      if (t === e) {
        S = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (S = n);
        break;
      }
      S = t.return;
    }
  }
  function vs(e) {
    for (; S !== null; ) {
      var t = S;
      if (t === e) {
        S = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (S = n);
        break;
      }
      S = t.return;
    }
  }
  function gs(e) {
    for (; S !== null; ) {
      var t = S;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ml(4, t);
            } catch (a) {
              ie(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                ie(t, l, a);
              }
            }
            var i = t.return;
            try {
              co(t);
            } catch (a) {
              ie(t, i, a);
            }
            break;
          case 5:
            var o = t.return;
            try {
              co(t);
            } catch (a) {
              ie(t, o, a);
            }
        }
      } catch (a) {
        ie(t, t.return, a);
      }
      if (t === e) {
        S = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        (u.return = t.return), (S = u);
        break;
      }
      S = t.return;
    }
  }
  var x2 = Math.ceil,
    vl = ke.ReactCurrentDispatcher,
    ho = ke.ReactCurrentOwner,
    Je = ke.ReactCurrentBatchConfig,
    O = 0,
    me = null,
    fe = null,
    Ce = 0,
    Ze = 0,
    zn = Bt(0),
    pe = 0,
    gr = null,
    ln = 0,
    gl = 0,
    mo = 0,
    yr = null,
    Re = null,
    vo = 0,
    Vn = 1 / 0,
    Lt = null,
    yl = !1,
    go = null,
    Ut = null,
    Cl = !1,
    Zt = null,
    wl = 0,
    Cr = 0,
    yo = null,
    kl = -1,
    xl = 0;
  function Me() {
    return O & 6 ? ue() : kl !== -1 ? kl : (kl = ue());
  }
  function Wt(e) {
    return e.mode & 1
      ? O & 2 && Ce !== 0
        ? Ce & -Ce
        : i2.transition !== null
        ? (xl === 0 && (xl = c1()), xl)
        : ((e = Q),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : C1(e.type))),
          e)
      : 1;
  }
  function st(e, t, n, r) {
    if (50 < Cr) throw ((Cr = 0), (yo = null), Error(m(185)));
    Zn(e, n, r),
      (!(O & 2) || e !== me) &&
        (e === me && (!(O & 2) && (gl |= n), pe === 4 && Qt(e, Ce)),
        Be(e, r),
        n === 1 && O === 0 && !(t.mode & 1) && ((Vn = ue() + 500), Gr && Dt()));
  }
  function Be(e, t) {
    var n = e.callbackNode;
    ia(e, t);
    var r = Hr(e, e === me ? Ce : 0);
    if (r === 0)
      n !== null && u1(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && u1(n), t === 1))
        e.tag === 0 ? l2(Cs.bind(null, e)) : lu(Cs.bind(null, e)),
          e2(function () {
            !(O & 6) && Dt();
          }),
          (n = null);
      else {
        switch (f1(r)) {
          case 1:
            n = Gl;
            break;
          case 4:
            n = s1;
            break;
          case 16:
            n = Lr;
            break;
          case 536870912:
            n = a1;
            break;
          default:
            n = Lr;
        }
        n = Ls(n, ys.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function ys(e, t) {
    if (((kl = -1), (xl = 0), O & 6)) throw Error(m(327));
    var n = e.callbackNode;
    if (Tn() && e.callbackNode !== n) return null;
    var r = Hr(e, e === me ? Ce : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Sl(e, r);
    else {
      t = r;
      var l = O;
      O |= 2;
      var i = ks();
      (me !== e || Ce !== t) && ((Lt = null), (Vn = ue() + 500), un(e, t));
      do
        try {
          E2();
          break;
        } catch (u) {
          ws(e, u);
        }
      while (!0);
      Ri(),
        (vl.current = i),
        (O = l),
        fe !== null ? (t = 0) : ((me = null), (Ce = 0), (t = pe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Jl(e)), l !== 0 && ((r = l), (t = Co(e, l)))),
        t === 1)
      )
        throw ((n = gr), un(e, 0), Qt(e, r), Be(e, ue()), n);
      if (t === 6) Qt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !S2(l) &&
            ((t = Sl(e, r)),
            t === 2 && ((i = Jl(e)), i !== 0 && ((r = i), (t = Co(e, i)))),
            t === 1))
        )
          throw ((n = gr), un(e, 0), Qt(e, r), Be(e, ue()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            sn(e, Re, Lt);
            break;
          case 3:
            if (
              (Qt(e, r),
              (r & 130023424) === r && ((t = vo + 500 - ue()), 10 < t))
            ) {
              if (Hr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Me(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = _i(sn.bind(null, e, Re, Lt), t);
              break;
            }
            sn(e, Re, Lt);
            break;
          case 4:
            if ((Qt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - nt(r);
              (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
            }
            if (
              ((r = l),
              (r = ue() - r),
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
                  : 1960 * x2(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = _i(sn.bind(null, e, Re, Lt), r);
              break;
            }
            sn(e, Re, Lt);
            break;
          case 5:
            sn(e, Re, Lt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Be(e, ue()), e.callbackNode === n ? ys.bind(null, e) : null;
  }
  function Co(e, t) {
    var n = yr;
    return (
      e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
      (e = Sl(e, t)),
      e !== 2 && ((t = Re), (Re = n), t !== null && wo(t)),
      e
    );
  }
  function wo(e) {
    Re === null ? (Re = e) : Re.push.apply(Re, e);
  }
  function S2(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!rt(i(), l)) return !1;
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
  function Qt(e, t) {
    for (
      t &= ~mo,
        t &= ~gl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - nt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Cs(e) {
    if (O & 6) throw Error(m(327));
    Tn();
    var t = Hr(e, 0);
    if (!(t & 1)) return Be(e, ue()), null;
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Jl(e);
      r !== 0 && ((t = r), (n = Co(e, r)));
    }
    if (n === 1) throw ((n = gr), un(e, 0), Qt(e, t), Be(e, ue()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      sn(e, Re, Lt),
      Be(e, ue()),
      null
    );
  }
  function ko(e, t) {
    var n = O;
    O |= 1;
    try {
      return e(t);
    } finally {
      (O = n), O === 0 && ((Vn = ue() + 500), Gr && Dt());
    }
  }
  function on(e) {
    Zt !== null && Zt.tag === 0 && !(O & 6) && Tn();
    var t = O;
    O |= 1;
    var n = Je.transition,
      r = Q;
    try {
      if (((Je.transition = null), (Q = 1), e)) return e();
    } finally {
      (Q = r), (Je.transition = n), (O = t), !(O & 6) && Dt();
    }
  }
  function xo() {
    (Ze = zn.current), G(zn);
  }
  function un(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), ba(n)), fe !== null))
      for (n = fe.return; n !== null; ) {
        var r = n;
        switch ((Pi(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Kr();
            break;
          case 3:
            Mn(), G(ze), G(xe), Zi();
            break;
          case 5:
            Ii(r);
            break;
          case 4:
            Mn();
            break;
          case 13:
            G(ne);
            break;
          case 19:
            G(ne);
            break;
          case 10:
            Bi(r.type._context);
            break;
          case 22:
          case 23:
            xo();
        }
        n = n.return;
      }
    if (
      ((me = e),
      (fe = e = $t(e.current, null)),
      (Ce = Ze = t),
      (pe = 0),
      (gr = null),
      (mo = gl = ln = 0),
      (Re = yr = null),
      tn !== null)
    ) {
      for (t = 0; t < tn.length; t++)
        if (((n = tn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var o = i.next;
            (i.next = l), (r.next = o);
          }
          n.pending = r;
        }
      tn = null;
    }
    return e;
  }
  function ws(e, t) {
    do {
      var n = fe;
      try {
        if ((Ri(), (ol.current = cl), ul)) {
          for (var r = re.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          ul = !1;
        }
        if (
          ((rn = 0),
          (he = de = re = null),
          (fr = !1),
          (dr = 0),
          (ho.current = null),
          n === null || n.return === null)
        ) {
          (pe = 1), (gr = t), (fe = null);
          break;
        }
        e: {
          var i = e,
            o = n.return,
            u = n,
            a = t;
          if (
            ((t = Ce),
            (u.flags |= 32768),
            a !== null && typeof a == "object" && typeof a.then == "function")
          ) {
            var h = a,
              y = u,
              C = y.tag;
            if (!(y.mode & 1) && (C === 0 || C === 11 || C === 15)) {
              var v = y.alternate;
              v
                ? ((y.updateQueue = v.updateQueue),
                  (y.memoizedState = v.memoizedState),
                  (y.lanes = v.lanes))
                : ((y.updateQueue = null), (y.memoizedState = null));
            }
            var x = Qu(o);
            if (x !== null) {
              (x.flags &= -257),
                $u(x, o, u, i, t),
                x.mode & 1 && Wu(i, h, t),
                (t = x),
                (a = h);
              var E = t.updateQueue;
              if (E === null) {
                var L = new Set();
                L.add(a), (t.updateQueue = L);
              } else E.add(a);
              break e;
            } else {
              if (!(t & 1)) {
                Wu(i, h, t), So();
                break e;
              }
              a = Error(m(426));
            }
          } else if (ee && u.mode & 1) {
            var se = Qu(o);
            if (se !== null) {
              !(se.flags & 65536) && (se.flags |= 256),
                $u(se, o, u, i, t),
                Vi(Pn(a, u));
              break e;
            }
          }
          (i = a = Pn(a, u)),
            pe !== 4 && (pe = 2),
            yr === null ? (yr = [i]) : yr.push(i),
            (i = o);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var d = Uu(i, a, t);
                mu(i, d);
                break e;
              case 1:
                u = a;
                var c = i.type,
                  p = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof c.getDerivedStateFromError == "function" ||
                    (p !== null &&
                      typeof p.componentDidCatch == "function" &&
                      (Ut === null || !Ut.has(p))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var w = Zu(i, u, t);
                  mu(i, w);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Ss(n);
      } catch (N) {
        (t = N), fe === n && n !== null && (fe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ks() {
    var e = vl.current;
    return (vl.current = cl), e === null ? cl : e;
  }
  function So() {
    (pe === 0 || pe === 3 || pe === 2) && (pe = 4),
      me === null || (!(ln & 268435455) && !(gl & 268435455)) || Qt(me, Ce);
  }
  function Sl(e, t) {
    var n = O;
    O |= 2;
    var r = ks();
    (me !== e || Ce !== t) && ((Lt = null), un(e, t));
    do
      try {
        _2();
        break;
      } catch (l) {
        ws(e, l);
      }
    while (!0);
    if ((Ri(), (O = n), (vl.current = r), fe !== null)) throw Error(m(261));
    return (me = null), (Ce = 0), pe;
  }
  function _2() {
    for (; fe !== null; ) xs(fe);
  }
  function E2() {
    for (; fe !== null && !Gs(); ) xs(fe);
  }
  function xs(e) {
    var t = js(e.alternate, e, Ze);
    (e.memoizedProps = e.pendingProps),
      t === null ? Ss(e) : (fe = t),
      (ho.current = null);
  }
  function Ss(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = y2(n, t)), n !== null)) {
          (n.flags &= 32767), (fe = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (pe = 6), (fe = null);
          return;
        }
      } else if (((n = g2(n, t, Ze)), n !== null)) {
        fe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        fe = t;
        return;
      }
      fe = t = e;
    } while (t !== null);
    pe === 0 && (pe = 5);
  }
  function sn(e, t, n) {
    var r = Q,
      l = Je.transition;
    try {
      (Je.transition = null), (Q = 1), j2(e, t, n, r);
    } finally {
      (Je.transition = l), (Q = r);
    }
    return null;
  }
  function j2(e, t, n, r) {
    do Tn();
    while (Zt !== null);
    if (O & 6) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(m(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (oa(e, i),
      e === me && ((fe = me = null), (Ce = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Cl ||
        ((Cl = !0),
        Ls(Lr, function () {
          return Tn(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = Je.transition), (Je.transition = null);
      var o = Q;
      Q = 1;
      var u = O;
      (O |= 4),
        (ho.current = null),
        w2(e, n),
        ps(n, e),
        $a(xi),
        (Tr = !!ki),
        (xi = ki = null),
        (e.current = n),
        k2(n),
        Js(),
        (O = u),
        (Q = o),
        (Je.transition = i);
    } else e.current = n;
    if (
      (Cl && ((Cl = !1), (Zt = e), (wl = l)),
      (i = e.pendingLanes),
      i === 0 && (Ut = null),
      ea(n.stateNode),
      Be(e, ue()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (yl) throw ((yl = !1), (e = go), (go = null), e);
    return (
      wl & 1 && e.tag !== 0 && Tn(),
      (i = e.pendingLanes),
      i & 1 ? (e === yo ? Cr++ : ((Cr = 0), (yo = e))) : (Cr = 0),
      Dt(),
      null
    );
  }
  function Tn() {
    if (Zt !== null) {
      var e = f1(wl),
        t = Je.transition,
        n = Q;
      try {
        if (((Je.transition = null), (Q = 16 > e ? 16 : e), Zt === null))
          var r = !1;
        else {
          if (((e = Zt), (Zt = null), (wl = 0), O & 6)) throw Error(m(331));
          var l = O;
          for (O |= 4, S = e.current; S !== null; ) {
            var i = S,
              o = i.child;
            if (S.flags & 16) {
              var u = i.deletions;
              if (u !== null) {
                for (var a = 0; a < u.length; a++) {
                  var h = u[a];
                  for (S = h; S !== null; ) {
                    var y = S;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vr(8, y, i);
                    }
                    var C = y.child;
                    if (C !== null) (C.return = y), (S = C);
                    else
                      for (; S !== null; ) {
                        y = S;
                        var v = y.sibling,
                          x = y.return;
                        if ((ss(y), y === h)) {
                          S = null;
                          break;
                        }
                        if (v !== null) {
                          (v.return = x), (S = v);
                          break;
                        }
                        S = x;
                      }
                  }
                }
                var E = i.alternate;
                if (E !== null) {
                  var L = E.child;
                  if (L !== null) {
                    E.child = null;
                    do {
                      var se = L.sibling;
                      (L.sibling = null), (L = se);
                    } while (L !== null);
                  }
                }
                S = i;
              }
            }
            if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (S = o);
            else
              e: for (; S !== null; ) {
                if (((i = S), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vr(9, i, i.return);
                  }
                var d = i.sibling;
                if (d !== null) {
                  (d.return = i.return), (S = d);
                  break e;
                }
                S = i.return;
              }
          }
          var c = e.current;
          for (S = c; S !== null; ) {
            o = S;
            var p = o.child;
            if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (S = p);
            else
              e: for (o = c; S !== null; ) {
                if (((u = S), u.flags & 2048))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ml(9, u);
                    }
                  } catch (N) {
                    ie(u, u.return, N);
                  }
                if (u === o) {
                  S = null;
                  break e;
                }
                var w = u.sibling;
                if (w !== null) {
                  (w.return = u.return), (S = w);
                  break e;
                }
                S = u.return;
              }
          }
          if (
            ((O = l), Dt(), dt && typeof dt.onPostCommitFiberRoot == "function")
          )
            try {
              dt.onPostCommitFiberRoot(Nr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (Q = n), (Je.transition = t);
      }
    }
    return !1;
  }
  function _s(e, t, n) {
    (t = Pn(n, t)),
      (t = Uu(e, t, 1)),
      (e = At(e, t, 1)),
      (t = Me()),
      e !== null && (Zn(e, 1, t), Be(e, t));
  }
  function ie(e, t, n) {
    if (e.tag === 3) _s(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          _s(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Ut === null || !Ut.has(r)))
          ) {
            (e = Pn(n, e)),
              (e = Zu(t, e, 1)),
              (t = At(t, e, 1)),
              (e = Me()),
              t !== null && (Zn(t, 1, e), Be(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function L2(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Me()),
      (e.pingedLanes |= e.suspendedLanes & n),
      me === e &&
        (Ce & n) === n &&
        (pe === 4 || (pe === 3 && (Ce & 130023424) === Ce && 500 > ue() - vo)
          ? un(e, 0)
          : (mo |= n)),
      Be(e, t);
  }
  function Es(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Pr), (Pr <<= 1), !(Pr & 130023424) && (Pr = 4194304))
        : (t = 1));
    var n = Me();
    (e = _t(e, t)), e !== null && (Zn(e, t, n), Be(e, n));
  }
  function N2(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Es(e, n);
  }
  function M2(e, t) {
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
        throw Error(m(314));
    }
    r !== null && r.delete(t), Es(e, n);
  }
  var js;
  js = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || ze.current) Te = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Te = !1), v2(e, t, n);
        Te = !!(e.flags & 131072);
      }
    else (Te = !1), ee && t.flags & 1048576 && iu(t, qr, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        pl(e, t), (e = t.pendingProps);
        var l = xn(t, xe.current);
        Nn(t, n), (l = $i(null, t, r, e, l, n));
        var i = Yi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ve(r) ? ((i = !0), Xr(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Oi(t),
              (l.updater = fl),
              (t.stateNode = l),
              (l._reactInternals = t),
              bi(t, r, e, n),
              (t = ro(null, t, r, !0, i, n)))
            : ((t.tag = 0), ee && i && Mi(t), Ne(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (pl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = H2(r)),
            (e = it(r, e)),
            l)
          ) {
            case 0:
              t = no(null, t, r, e, n);
              break e;
            case 1:
              t = qu(null, t, r, e, n);
              break e;
            case 11:
              t = Yu(null, t, r, e, n);
              break e;
            case 14:
              t = Ku(null, t, r, it(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          no(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          qu(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((bu(t), e === null)) throw Error(m(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            hu(e, t),
            ll(t, r, null, n);
          var o = t.memoizedState;
          if (((r = o.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (l = Pn(Error(m(423)), t)), (t = es(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Pn(Error(m(424)), t)), (t = es(e, t, r, n, l));
              break e;
            } else
              for (
                Ue = Rt(t.stateNode.containerInfo.firstChild),
                  Ie = t,
                  ee = !0,
                  lt = null,
                  n = du(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((En(), r === l)) {
              t = jt(e, t, n);
              break e;
            }
            Ne(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          gu(t),
          e === null && zi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          Si(r, l) ? (o = null) : i !== null && Si(r, i) && (t.flags |= 32),
          Ju(e, t),
          Ne(e, t, o, n),
          t.child
        );
      case 6:
        return e === null && zi(t), null;
      case 13:
        return ts(e, t, n);
      case 4:
        return (
          Ai(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = jn(t, null, r, n)) : Ne(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          Yu(e, t, r, l, n)
        );
      case 7:
        return Ne(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ne(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ne(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            K(tl, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (rt(i.value, o)) {
              if (i.children === l.children && !ze.current) {
                t = jt(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var u = i.dependencies;
                if (u !== null) {
                  o = i.child;
                  for (var a = u.firstContext; a !== null; ) {
                    if (a.context === r) {
                      if (i.tag === 1) {
                        (a = Et(-1, n & -n)), (a.tag = 2);
                        var h = i.updateQueue;
                        if (h !== null) {
                          h = h.shared;
                          var y = h.pending;
                          y === null
                            ? (a.next = a)
                            : ((a.next = y.next), (y.next = a)),
                            (h.pending = a);
                        }
                      }
                      (i.lanes |= n),
                        (a = i.alternate),
                        a !== null && (a.lanes |= n),
                        Fi(i.return, n, t),
                        (u.lanes |= n);
                      break;
                    }
                    a = a.next;
                  }
                } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((o = i.return), o === null)) throw Error(m(341));
                  (o.lanes |= n),
                    (u = o.alternate),
                    u !== null && (u.lanes |= n),
                    Fi(o, n, t),
                    (o = i.sibling);
                } else o = i.child;
                if (o !== null) o.return = i;
                else
                  for (o = i; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((i = o.sibling), i !== null)) {
                      (i.return = o.return), (o = i);
                      break;
                    }
                    o = o.return;
                  }
                i = o;
              }
          Ne(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Nn(t, n),
          (l = Xe(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ne(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = it(r, t.pendingProps)),
          (l = it(r.type, l)),
          Ku(e, t, r, l, n)
        );
      case 15:
        return Xu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          pl(e, t),
          (t.tag = 1),
          Ve(r) ? ((e = !0), Xr(t)) : (e = !1),
          Nn(t, n),
          Au(t, r, l),
          bi(t, r, l, n),
          ro(null, t, r, !0, e, n)
        );
      case 19:
        return rs(e, t, n);
      case 22:
        return Gu(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function Ls(e, t) {
    return o1(e, t);
  }
  function P2(e, t, n, r) {
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
  function qe(e, t, n, r) {
    return new P2(e, t, n, r);
  }
  function _o(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function H2(e) {
    if (typeof e == "function") return _o(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ct)) return 11;
      if (e === ft) return 14;
    }
    return 2;
  }
  function $t(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = qe(e.tag, t, e.key, e.mode)),
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
  function _l(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) _o(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case Pe:
          return an(n.children, l, i, t);
        case $e:
          (o = 8), (l |= 8);
          break;
        case Nt:
          return (
            (e = qe(12, n, t, l | 2)), (e.elementType = Nt), (e.lanes = i), e
          );
        case De:
          return (e = qe(13, n, t, l)), (e.elementType = De), (e.lanes = i), e;
        case tt:
          return (e = qe(19, n, t, l)), (e.elementType = tt), (e.lanes = i), e;
        case le:
          return El(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ct:
                o = 10;
                break e;
              case Xt:
                o = 9;
                break e;
              case ct:
                o = 11;
                break e;
              case ft:
                o = 14;
                break e;
              case He:
                (o = 16), (r = null);
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = qe(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function an(e, t, n, r) {
    return (e = qe(7, e, r, t)), (e.lanes = n), e;
  }
  function El(e, t, n, r) {
    return (
      (e = qe(22, e, r, t)),
      (e.elementType = le),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Eo(e, t, n) {
    return (e = qe(6, e, null, t)), (e.lanes = n), e;
  }
  function jo(e, t, n) {
    return (
      (t = qe(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function z2(e, t, n, r, l) {
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
      (this.eventTimes = ql(0)),
      (this.expirationTimes = ql(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ql(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Lo(e, t, n, r, l, i, o, u, a) {
    return (
      (e = new z2(e, t, n, u, a)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = qe(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Oi(i),
      e
    );
  }
  function V2(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Le,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Ns(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
      if (Gt(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ve(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ve(n)) return nu(e, n, t);
    }
    return t;
  }
  function Ms(e, t, n, r, l, i, o, u, a) {
    return (
      (e = Lo(n, r, !0, e, l, i, o, u, a)),
      (e.context = Ns(null)),
      (n = e.current),
      (r = Me()),
      (l = Wt(n)),
      (i = Et(r, l)),
      (i.callback = t ?? null),
      At(n, i, l),
      (e.current.lanes = l),
      Zn(e, l, r),
      Be(e, r),
      e
    );
  }
  function jl(e, t, n, r) {
    var l = t.current,
      i = Me(),
      o = Wt(l);
    return (
      (n = Ns(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Et(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = At(l, t, o)),
      e !== null && (st(e, l, o, i), rl(e, l, o)),
      o
    );
  }
  function Ll(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ps(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function No(e, t) {
    Ps(e, t), (e = e.alternate) && Ps(e, t);
  }
  function T2() {
    return null;
  }
  var Hs =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Mo(e) {
    this._internalRoot = e;
  }
  (Nl.prototype.render = Mo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      jl(e, t, null, null);
    }),
    (Nl.prototype.unmount = Mo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          on(function () {
            jl(null, e, null, null);
          }),
            (t[wt] = null);
        }
      });
  function Nl(e) {
    this._internalRoot = e;
  }
  Nl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = h1();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
      zt.splice(n, 0, e), n === 0 && g1(e);
    }
  };
  function Po(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ml(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function zs() {}
  function R2(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var h = Ll(o);
          i.call(h);
        };
      }
      var o = Ms(t, r, e, 0, null, !1, !1, "", zs);
      return (
        (e._reactRootContainer = o),
        (e[wt] = o.current),
        rr(e.nodeType === 8 ? e.parentNode : e),
        on(),
        o
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var h = Ll(a);
        u.call(h);
      };
    }
    var a = Lo(e, 0, !1, null, null, !1, !1, "", zs);
    return (
      (e._reactRootContainer = a),
      (e[wt] = a.current),
      rr(e.nodeType === 8 ? e.parentNode : e),
      on(function () {
        jl(t, a, n, r);
      }),
      a
    );
  }
  function Pl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var a = Ll(o);
          u.call(a);
        };
      }
      jl(t, o, e, l);
    } else o = R2(n, t, e, l, r);
    return Ll(o);
  }
  (d1 = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Un(t.pendingLanes);
          n !== 0 &&
            (bl(t, n | 1), Be(t, ue()), !(O & 6) && ((Vn = ue() + 500), Dt()));
        }
        break;
      case 13:
        on(function () {
          var r = _t(e, 1);
          if (r !== null) {
            var l = Me();
            st(r, e, 1, l);
          }
        }),
          No(e, 1);
    }
  }),
    (ei = function (e) {
      if (e.tag === 13) {
        var t = _t(e, 134217728);
        if (t !== null) {
          var n = Me();
          st(t, e, 134217728, n);
        }
        No(e, 134217728);
      }
    }),
    (p1 = function (e) {
      if (e.tag === 13) {
        var t = Wt(e),
          n = _t(e, t);
        if (n !== null) {
          var r = Me();
          st(n, e, t, r);
        }
        No(e, t);
      }
    }),
    (h1 = function () {
      return Q;
    }),
    (m1 = function (e, t) {
      var n = Q;
      try {
        return (Q = e), t();
      } finally {
        Q = n;
      }
    }),
    ($l = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Dl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
                var l = Yr(r);
                if (!l) throw Error(m(90));
                Oo(r), Dl(r, l);
              }
            }
          }
          break;
        case "textarea":
          Wo(e, n);
          break;
        case "select":
          (t = n.value), t != null && cn(e, !!n.multiple, t, !1);
      }
    }),
    (bo = ko),
    (e1 = on);
  var B2 = { usingClientEntryPoint: !1, Events: [or, wn, Yr, Jo, qo, ko] },
    wr = {
      findFiberByHostInstance: Jt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    F2 = {
      bundleType: wr.bundleType,
      version: wr.version,
      rendererPackageName: wr.rendererPackageName,
      rendererConfig: wr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ke.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = l1(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: wr.findFiberByHostInstance || T2,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hl.isDisabled && Hl.supportsFiber)
      try {
        (Nr = Hl.inject(F2)), (dt = Hl);
      } catch {}
  }
  return (
    (Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B2),
    (Fe.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Po(t)) throw Error(m(200));
      return V2(e, t, null, n);
    }),
    (Fe.createRoot = function (e, t) {
      if (!Po(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = Hs;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Lo(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        rr(e.nodeType === 8 ? e.parentNode : e),
        new Mo(t)
      );
    }),
    (Fe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return (e = l1(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Fe.flushSync = function (e) {
      return on(e);
    }),
    (Fe.hydrate = function (e, t, n) {
      if (!Ml(t)) throw Error(m(200));
      return Pl(null, e, t, !0, n);
    }),
    (Fe.hydrateRoot = function (e, t, n) {
      if (!Po(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = Hs;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = Ms(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[wt] = t.current),
        rr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Nl(t);
    }),
    (Fe.render = function (e, t, n) {
      if (!Ml(t)) throw Error(m(200));
      return Pl(null, e, t, !1, n);
    }),
    (Fe.unmountComponentAtNode = function (e) {
      if (!Ml(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (on(function () {
            Pl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[wt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Fe.unstable_batchedUpdates = ko),
    (Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ml(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return Pl(e, t, n, !1, r);
    }),
    (Fe.version = "18.3.1-next-f1338f8080-20240426"),
    Fe
  );
}
var As;
function Q2() {
  if (As) return Vo.exports;
  As = 1;
  function j() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j);
      } catch (V) {
        console.error(V);
      }
  }
  return j(), (Vo.exports = W2()), Vo.exports;
}
var Is;
function $2() {
  if (Is) return zl;
  Is = 1;
  var j = Q2();
  return (zl.createRoot = j.createRoot), (zl.hydrateRoot = j.hydrateRoot), zl;
}
var Y2 = $2();
const K2 = "_firstsection_12umi_7",
  X2 = "_logo_12umi_23",
  G2 = "_nav_12umi_33",
  J2 = "_navul_12umi_49",
  q2 = "_list_12umi_73",
  b2 = "_lists_12umi_87",
  ec = "_listcontact_12umi_101",
  tc = "_flmobile_12umi_121",
  nc = "_listmenu_12umi_129",
  rc = "_sidebar_12umi_137",
  lc = "_fllogo_12umi_159",
  ic = "_active_12umi_235",
  oc = "_imageclose_12umi_261",
  uc = "_sidebarmenu_12umi_277",
  sc = "_sidebarlist_12umi_295",
  ac = "_sidebarcontact_12umi_323",
  ge = {
    firstsection: K2,
    logo: X2,
    nav: G2,
    navul: J2,
    list: q2,
    lists: b2,
    listcontact: ec,
    flmobile: tc,
    listmenu: nc,
    sidebar: rc,
    fllogo: lc,
    active: ic,
    "fade-out": "_fade-out_12umi_249",
    imageclose: oc,
    sidebarmenu: uc,
    sidebarlist: sc,
    sidebarcontact: ac,
  };
function Fo() {
  return s.jsx(s.Fragment, {
    children: s.jsxs("svg", {
      className: ge.logo,
      width: "417",
      height: "167",
      viewBox: "0 0 417 167",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        s.jsxs("g", {
          "clip-path": "url(#clip0_16_370)",
          children: [
            s.jsx("path", {
              d: "M54.35 47.9V47.13C54.35 42.85 51.68 40.13 47.35 39.94H34.86V61.26H44.58C45.4035 61.2737 46.2213 61.1208 46.9843 60.8104C47.7472 60.5001 48.4395 60.0386 49.0196 59.4539C49.5996 58.8692 50.0555 58.1732 50.3597 57.4078C50.664 56.6424 50.8103 55.8234 50.79 55V54.37H51.51V71.28H50.79V70.64C50.8128 69.823 50.6712 69.0098 50.3736 68.2487C50.076 67.4875 49.6285 66.794 49.0576 66.2091C48.4868 65.6243 47.8042 65.1601 47.0505 64.8442C46.2968 64.5282 45.4872 64.367 44.67 64.37H34.87V82.77C34.891 83.9999 35.3943 85.1724 36.2716 86.0347C37.1489 86.897 38.3299 87.3802 39.56 87.38H40.49V88.11H18.24V87.38H19.16C20.3911 87.3802 21.5731 86.8974 22.452 86.0354C23.3309 85.1733 23.8364 84.0008 23.86 82.77V41.91C23.8029 40.7137 23.2805 39.5871 22.4042 38.7706C21.528 37.9542 20.3673 37.5125 19.17 37.54H18.25V36.81H46.34C49.3042 36.7741 52.249 36.3265 55.09 35.48V47.91L54.35 47.9Z",
              fill: "#C1977F",
            }),
            s.jsx("path", {
              d: "M88.5099 96.4401C86.2299 103.71 81.5099 108.26 74.1599 108.26H64.5399V65.4401C64.5635 64.2092 65.0691 63.0368 65.948 62.1747C66.8268 61.3127 68.0088 60.8299 69.2399 60.8301H70.1699V60.1001H57.4599L53.5499 72.7701V106.05C53.5264 107.279 53.0222 108.45 52.1455 109.312C51.2688 110.174 50.0893 110.658 48.8599 110.66H47.9299V111.39H85.8599L89.2399 96.3901L88.5099 96.4401Z",
              fill: "#C1977F",
            }),
            s.jsx("path", {
              d: "M66.1728 30.9068L42.1589 108.82L42.7801 109.012L66.794 31.0983L66.1728 30.9068Z",
              fill: "#C1977F",
            }),
            s.jsx("path", {
              d: "M50.26 0C36.9351 0.0158788 24.1605 5.31621 14.7384 14.7384C5.31621 24.1605 0.0158788 36.9351 0 50.26L0 116.19C0 129.52 5.29523 142.304 14.7208 151.729C24.1464 161.155 36.9302 166.45 50.26 166.45C63.5898 166.45 76.3736 161.155 85.7992 151.729C95.2248 142.304 100.52 129.52 100.52 116.19V50.26C100.507 36.9343 95.2073 24.1581 85.7846 14.7354C76.3619 5.31272 63.5857 0.013237 50.26 0ZM78.91 140.41C75.608 141.015 72.363 141.898 69.21 143.05C67.2499 142.482 65.2413 142.097 63.21 141.9L63.85 141.62C68.9914 139.257 74.4537 137.666 80.06 136.9C84.5349 136.235 89.0564 135.934 93.58 136C93.03 137.2 92.44 138.36 91.79 139.5C87.4762 139.327 83.1566 139.632 78.91 140.41ZM90.78 141.24C90.06 142.4 89.3 143.54 88.48 144.63C84.6913 144.287 80.8767 144.892 77.38 146.39C75.6172 145.483 73.8004 144.685 71.94 144C78.0201 142.031 84.3915 141.115 90.78 141.29V141.24ZM79.78 135.19C74.0365 135.966 68.4394 137.587 63.17 140C61.5108 140.801 59.7798 141.444 58 141.92C57.43 141.98 56.87 142.05 56.31 142.14L55.88 142.23C54.9458 142.282 54.0089 142.252 53.08 142.14C47.54 141.49 44.08 138.76 40.47 135.86C36.47 132.66 32.28 129.36 25.21 129.1C21.262 129.016 17.3296 129.621 13.59 130.89C11.0103 131.85 8.57425 133.159 6.35 134.78C5.72291 133.303 5.17218 131.794 4.7 130.26C7.39477 128.656 10.2719 127.38 13.27 126.46C17.4156 125.281 21.7102 124.708 26.02 124.76C33.26 125.05 37.37 128.25 41.34 131.35C45.14 134.35 49.06 137.35 55.53 137.79C55.96 137.79 56.37 137.79 56.77 137.79C59.84 137.79 61.77 136.98 64.49 135.79C68.677 133.974 73.0309 132.571 77.49 131.6L78.49 131.39C84.2831 130.119 90.1749 129.35 96.1 129.09C95.6047 130.828 95.0139 132.537 94.33 134.21C89.4708 134.116 84.6125 134.444 79.81 135.19H79.78ZM22.78 136.89C27.7054 135.601 32.8372 135.298 37.88 136C38.39 136.39 38.88 136.8 39.41 137.2C42.69 139.81 46.08 142.5 51.06 143.54C49.42 144.12 47.83 144.8 46.26 145.54C40.9386 141.572 34.325 139.738 27.72 140.4C22.4919 140.993 17.5623 143.143 13.57 146.57C12.5001 145.27 11.4988 143.915 10.57 142.51C14.2962 139.94 18.4415 138.038 22.82 136.89H22.78ZM9.58 141.05C8.65898 139.544 7.82106 137.988 7.07 136.39C9.24533 134.771 11.6391 133.468 14.18 132.52C17.7278 131.353 21.4454 130.785 25.18 130.84C28.7058 130.938 32.1315 132.034 35.06 134C26.029 133.427 17.068 135.91 9.62 141.05H9.58ZM42 129.64C43.3263 129.823 44.6616 129.933 46 129.97C50.3154 129.997 54.6037 129.287 58.68 127.87C62.01 126.87 64.89 125.98 68.48 126.49C71.4818 126.975 74.3126 128.21 76.71 130.08C72.2865 131.075 67.9647 132.478 63.8 134.27C60.8 135.52 59.06 136.27 55.63 136.05C49.7 135.68 46.15 132.91 42.4 129.98L42 129.64ZM2.61 50.26C2.79136 37.7407 7.89193 25.7955 16.8093 17.0064C25.7266 8.21736 37.7444 3.29034 50.265 3.29034C62.7856 3.29034 74.8034 8.21736 83.7207 17.0064C92.6381 25.7955 97.7386 37.7407 97.92 50.26V116.19C97.9164 119.974 97.4632 123.743 96.57 127.42C90.6434 127.66 84.7467 128.39 78.94 129.6C76.069 127.07 72.5453 125.396 68.77 124.77C64.77 124.21 61.6 125.18 58.22 126.21C54.3201 127.576 50.2121 128.253 46.08 128.21C43.8007 128.16 41.5323 127.879 39.31 127.37L39.26 127.57C35.4515 124.737 30.8647 123.141 26.12 123C21.6152 122.934 17.1257 123.541 12.8 124.8C9.8142 125.718 6.94244 126.973 4.24 128.54C3.15665 124.513 2.6086 120.36 2.61 116.19V50.26ZM14.71 147.88C18.7934 144.351 23.9387 142.288 29.3287 142.018C34.7188 141.748 40.0445 143.287 44.46 146.39L43.46 146.88C41.98 147.59 40.52 148.28 39.06 148.88C35.924 147.205 32.4151 146.352 28.8603 146.399C25.3054 146.446 21.8204 147.393 18.73 149.15L17.36 149.93L18.75 150.68C20.1893 151.447 21.7084 152.054 23.28 152.49C24.9842 152.956 26.7432 153.191 28.51 153.19C34.19 153.19 39.26 150.77 44.2 148.41C48.03 146.58 51.98 144.7 56.2 143.91C56.8997 143.855 57.5947 143.752 58.28 143.6C65.6 142.88 73.69 145.49 82.35 151.36C81.1383 152.468 79.8699 153.513 78.55 154.49C72.93 150.3 67.29 148.17 61.76 148.17H61.7C57.01 148.17 53.49 149.68 49.4 151.4C44.6884 153.554 39.7218 155.1 34.62 156C31.5995 156.515 28.5437 156.796 25.48 156.84C21.4711 154.396 17.8425 151.377 14.71 147.88ZM36.85 149.8C32.69 151.36 28.46 152.15 23.7 150.8C22.8063 150.555 21.9308 150.247 21.08 149.88C23.5494 148.742 26.2323 148.143 28.951 148.12C31.6697 148.098 34.3622 148.653 36.85 149.75V149.8ZM77 155.59C75.5899 156.553 74.1277 157.438 72.62 158.24C69.3888 156.006 65.6331 154.648 61.72 154.3C57.8 154.02 54.93 155 51.29 156.25C48.6396 157.191 45.9428 157.995 43.21 158.66C39.5957 159.513 35.9161 160.062 32.21 160.3C30.8908 159.765 29.5991 159.164 28.34 158.5C30.5278 158.364 32.7072 158.117 34.87 157.76C40.1183 156.826 45.2261 155.226 50.07 153C54.14 151.28 57.36 149.92 61.7 149.91C66.75 150 71.88 151.85 77 155.59ZM50.22 163.85C45.4047 163.852 40.6169 163.124 36.02 161.69C38.5728 161.384 41.1067 160.936 43.61 160.35C46.3994 159.68 49.1501 158.859 51.85 157.89C55.44 156.66 58.03 155.78 61.59 156.03C64.8733 156.317 68.0392 157.391 70.82 159.16C64.394 162.254 57.3522 163.857 50.22 163.85ZM83.59 150.18C82.15 149.187 80.7267 148.287 79.32 147.48C81.8285 146.594 84.4817 146.191 87.14 146.29C86.041 147.649 84.8693 148.948 83.63 150.18H83.59Z",
              fill: "#C1977F",
            }),
            s.jsx("path", {
              d: "M142.9 47.5001H140.39V69.0001H142.7C149.613 69.0001 154.117 68.5701 156.21 67.7101H156.34V71.7101H156.21C153.937 70.6768 149.433 70.1601 142.7 70.1601H140.39V93.1601H133.82V46.3401H159.69L160.52 50.3401H160.4C154.762 48.4407 148.85 47.4813 142.9 47.5001Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M167.86 52.8999L163.48 48.5299L167.86 44.1499L172.23 48.5299L167.86 52.8999ZM164.86 93.1799V59.9999L170.65 58.2699H170.91V93.1799H164.86Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M198 58.76L196.2 63.52C195.088 63.0137 193.881 62.7512 192.66 62.75C190.969 62.7526 189.327 63.3153 187.99 64.35C186.518 65.4759 185.357 66.9595 184.62 68.66V93.18H178.5V60L184.23 58.27H184.49V66.8C185.475 64.3934 187.018 62.2548 188.99 60.56C190.668 59.1431 192.794 58.3671 194.99 58.37C196.006 58.3758 197.017 58.5068 198 58.76Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M198.74 90.0901L199.74 86.8101C201.174 88.5543 202.984 89.9521 205.034 90.8993C207.084 91.8464 209.322 92.3184 211.58 92.2801C213.758 92.3875 215.907 91.7373 217.66 90.4401C218.387 89.8876 218.973 89.1712 219.371 88.3493C219.769 87.5274 219.968 86.6231 219.95 85.7101C219.94 84.9198 219.766 84.1402 219.439 83.4207C219.112 82.7011 218.639 82.0574 218.05 81.5301C216.172 80.1809 214.129 79.0785 211.97 78.2501L209.33 77.1601C207.624 76.4522 205.955 75.6579 204.33 74.7801C201.07 72.7801 199.44 70.1701 199.44 66.8601C199.42 65.5525 199.71 64.2587 200.287 63.0852C200.864 61.9117 201.712 60.892 202.76 60.1101C205.253 58.2587 208.308 57.3261 211.41 57.4701C215.293 57.3717 219.133 58.3032 222.54 60.1701L221.64 63.1701C220.26 61.6736 218.59 60.4737 216.732 59.6434C214.873 58.813 212.865 58.3696 210.83 58.3401C208.898 58.2257 206.99 58.8154 205.46 60.0001C204.824 60.5015 204.312 61.1433 203.965 61.8754C203.618 62.6075 203.445 63.41 203.46 64.2201C203.438 65.3964 203.851 66.5393 204.62 67.4301C205.298 68.2067 206.103 68.8627 207 69.3701C208.473 70.136 209.985 70.8236 211.53 71.4301L214.11 72.5201C215.792 73.1782 217.426 73.9534 219 74.8401C222.333 76.8401 224 79.5634 224 83.0101C224.03 84.4249 223.726 85.8269 223.113 87.1022C222.499 88.3776 221.594 89.4903 220.47 90.3501C218.11 92.2301 214.913 93.1734 210.88 93.1801C208.634 93.1731 206.397 92.891 204.22 92.3401C202.28 91.9034 200.427 91.1427 198.74 90.0901Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M247.83 89.3801L248.34 90.1501C245.706 92.0246 242.572 93.0693 239.34 93.1501C233.76 93.1501 230.97 90.2101 230.97 84.3301V59.6601H226V58.5601L230.7 58.2401L236.81 47.3101H237.06V58.2401H248.06L247.22 59.6601H237.08V84.2301C237.058 85.8425 237.368 87.4424 237.99 88.9301C238.663 90.3101 240.1 91.0001 242.3 91.0001C244.255 90.961 246.163 90.4019 247.83 89.3801Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M286.38 85.24L289.97 88.24V93.15H289.8L284.2 88.41C281.533 91.2833 277.867 92.72 273.2 92.72C270.486 92.8316 267.812 92.0364 265.6 90.46C264.65 89.7791 263.88 88.8768 263.357 87.8313C262.835 86.7858 262.575 85.6286 262.6 84.46C262.6 80.7 264.933 77.8533 269.6 75.92C267.13 73.39 265.89 70.85 265.89 68.32C265.868 67.2898 266.068 66.2669 266.477 65.3212C266.886 64.3754 267.494 63.5291 268.26 62.84C269.823 61.3767 271.899 60.5865 274.04 60.64C276.076 60.5927 278.061 61.2815 279.63 62.58C280.366 63.1441 280.961 63.8711 281.369 64.7039C281.777 65.5367 281.986 66.4527 281.98 67.38C282.006 68.2293 281.84 69.0734 281.494 69.8493C281.147 70.6252 280.63 71.3126 279.98 71.86C278.596 73.0259 276.981 73.8848 275.24 74.38L274.77 73.96C277.67 72.6267 279.12 70.5333 279.12 67.68C279.205 65.9912 278.676 64.3288 277.63 63C277.172 62.4247 276.587 61.963 275.921 61.6508C275.255 61.3386 274.525 61.1843 273.79 61.2C273.068 61.1674 272.349 61.3053 271.691 61.6023C271.032 61.8994 270.453 62.3474 270 62.91C269.124 63.9804 268.656 65.327 268.68 66.71C268.676 68.151 269.139 69.5546 270 70.71C271.17 72.1974 272.513 73.5402 274 74.71L285.91 84.79C286.76 82.8069 287.182 80.6672 287.15 78.51C287.112 76.6875 286.628 74.902 285.74 73.31L287.83 72.49H288V77.66C288.049 80.2775 287.495 82.8711 286.38 85.24ZM283.69 88L272.38 78.44C271.55 77.76 270.76 77.06 269.99 76.35C268.806 77.0575 267.839 78.0753 267.192 79.2933C266.545 80.5113 266.243 81.883 266.32 83.26C266.274 84.3655 266.457 85.4686 266.858 86.4997C267.26 87.5307 267.871 88.4673 268.653 89.2501C269.435 90.033 270.37 90.6452 271.401 91.0479C272.432 91.4507 273.535 91.6352 274.64 91.59C276.314 91.6461 277.982 91.3563 279.539 90.7386C281.097 90.1209 282.51 89.1886 283.69 88Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M331.06 88.3501H331.18L330 93.1801H307.57V46.3401H314.14V92.0001H315.36C320.791 91.8935 326.139 90.6501 331.06 88.3501Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M364.32 90.9999V91.3799C362.738 92.4171 360.892 92.9793 359 92.9999C355.87 92.9999 354.17 91.4199 353.92 88.2399C350.756 91.3996 346.481 93.1944 342.01 93.2399C339.623 93.3436 337.284 92.5438 335.46 90.9999C334.65 90.2856 334.009 89.3999 333.583 88.4071C333.158 87.4143 332.959 86.3392 333 85.2599C332.993 83.8374 333.342 82.4358 334.017 81.1833C334.691 79.9307 335.669 78.8672 336.86 78.0899C339.43 76.2199 342.99 75.0899 347.54 74.5799L351.4 74.1999L353.84 73.9999V70.3399C353.84 66.7799 353.197 64.1132 351.91 62.3399C350.623 60.5666 348.523 59.6866 345.61 59.6999C342.046 59.8025 338.636 61.1791 336 63.5799L335.42 62.8699C337.136 61.2097 339.125 59.8567 341.3 58.8699C343.425 58.0013 345.704 57.5694 348 57.5999C356 57.5999 360 61.6532 360 69.7599V86.2299C359.897 87.5586 360.074 88.894 360.52 90.1499C360.86 90.7999 361.74 91.1499 363.16 91.1499C363.22 91.1199 363.63 91.0799 364.32 90.9999ZM353.83 86.9999V74.9999C348.81 75.5599 345.09 76.5366 342.67 77.9299C341.526 78.527 340.575 79.4354 339.926 80.5501C339.276 81.6649 338.955 82.9406 339 84.2299C338.943 85.1204 339.068 86.0131 339.367 86.8537C339.667 87.6944 340.134 88.4654 340.74 89.1199C341.343 89.706 342.059 90.1627 342.845 90.462C343.631 90.7612 344.47 90.8966 345.31 90.8599C348.33 90.8599 351.17 89.5732 353.83 86.9999Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M366.31 90.0901L367.31 86.8101C368.743 88.553 370.552 89.95 372.6 90.8971C374.648 91.8441 376.884 92.3169 379.14 92.2801C381.318 92.3875 383.467 91.7373 385.22 90.4401C385.949 89.8893 386.537 89.1732 386.935 88.3509C387.333 87.5286 387.53 86.6235 387.51 85.7101C387.502 84.9195 387.328 84.1393 387.001 83.4195C386.674 82.6997 386.2 82.0562 385.61 81.5301C383.732 80.1809 381.689 79.0785 379.53 78.2501L376.89 77.1601C375.31 76.5101 373.63 75.7201 371.89 74.7801C368.63 72.7801 367 70.1701 367 66.8601C366.98 65.5525 367.27 64.2587 367.847 63.0852C368.424 61.9117 369.272 60.892 370.32 60.1101C372.813 58.2587 375.869 57.3261 378.97 57.4701C382.853 57.3717 386.694 58.3032 390.1 60.1701L389.2 63.1701C387.82 61.6736 386.15 60.4737 384.292 59.6434C382.433 58.813 380.425 58.3696 378.39 58.3401C376.451 58.2207 374.536 58.8108 373 60.0001C372.365 60.503 371.855 61.1452 371.508 61.8769C371.161 62.6087 370.988 63.4104 371 64.2201C370.979 65.3964 371.392 66.5393 372.16 67.4301C372.83 68.2005 373.624 68.8529 374.51 69.3601C375.984 70.124 377.496 70.8116 379.04 71.4201L381.62 72.5101C383.302 73.1682 384.936 73.9434 386.51 74.8301C389.843 76.8301 391.51 79.5534 391.51 83.0001C391.539 84.4157 391.234 85.8183 390.618 87.0937C390.003 88.3691 389.096 89.4813 387.97 90.3401C385.61 92.2201 382.413 93.1634 378.38 93.1701C376.134 93.1631 373.897 92.881 371.72 92.3301C369.805 91.8891 367.976 91.1321 366.31 90.0901Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M415.4 89.3801L415.91 90.1501C413.276 92.0246 410.142 93.0693 406.91 93.1501C401.33 93.1501 398.54 90.2101 398.54 84.3301V59.6601H393.54V58.5601L398.24 58.2401L404.35 47.3101H404.61V58.2401H415.61L414.77 59.6601H404.66V84.2301C404.64 85.8414 404.946 87.4403 405.56 88.9301C406.227 90.2967 407.663 90.9834 409.87 90.9901C411.824 90.957 413.734 90.401 415.4 89.3801Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M133.84 107.06H135.24L138.63 120H138.75L142.14 107.11H143.72L147.12 120H147.23L150.63 107.11H152L147.89 122.11H146.43L143 109.34H142.91L139.43 122.05H138L133.84 107.06Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M159 107.06H167.69V108.29H160.37V113.93H167.23V115.16H160.37V120.82H167.84V122.05H159V107.06Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M175.64 107.06H177V120.82H184.14V122.05H175.63L175.64 107.06Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M191.69 107.06H193.06V120.82H200.2V122.05H191.69V107.06Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M219.41 122.05H218.07L209.22 109.5H209.1V122.05H207.74V107.05H209.06L217.94 119.61H218.06V107.06H219.41V122.05Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M227.84 107.06H236.53V108.29H229.21V113.93H236.07V115.16H229.21V120.82H236.68V122.05H227.84V107.06Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M249.09 108.08C247 108.08 245.56 109.26 245.56 110.87C245.56 112.48 247.09 113.19 248.56 113.6L250.14 114.05C252.04 114.58 254.21 115.58 254.21 118.05C254.21 120.52 252.26 122.28 249.01 122.28C245.96 122.28 244.01 120.65 243.86 118.28H245.27C245.41 120.06 247 121.03 249.01 121.03C251.25 121.03 252.89 119.82 252.89 118.03C252.89 116.5 251.61 115.81 249.75 115.27L247.96 114.74C245.61 114.05 244.25 112.84 244.25 110.91C244.25 108.5 246.38 106.84 249.15 106.84C251.92 106.84 253.9 108.52 254 110.84H252.68C252.49 109.14 251.07 108.08 249.09 108.08Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M266.51 108.08C264.42 108.08 262.98 109.26 262.98 110.87C262.98 112.48 264.51 113.19 265.98 113.6L267.56 114.05C269.47 114.58 271.63 115.58 271.63 118.05C271.63 120.52 269.69 122.28 266.44 122.28C263.38 122.28 261.44 120.65 261.29 118.28H262.69C262.84 120.06 264.42 121.03 266.44 121.03C268.68 121.03 270.31 119.82 270.31 118.03C270.31 116.5 269.03 115.81 267.18 115.27L265.38 114.74C263.03 114.05 261.67 112.84 261.67 110.91C261.67 108.5 263.8 106.84 266.57 106.84C269.34 106.84 271.32 108.52 271.43 110.84H270.1C269.91 109.14 268.49 108.08 266.51 108.08Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M300 111.74C299.781 110.702 299.204 109.773 298.371 109.115C297.538 108.458 296.501 108.113 295.44 108.14C292.6 108.14 290.29 110.4 290.29 114.55C290.29 118.7 292.6 120.96 295.44 120.96C296.502 120.992 297.541 120.648 298.375 119.99C299.209 119.331 299.784 118.4 300 117.36H301.37C301.141 118.755 300.413 120.019 299.323 120.918C298.232 121.817 296.853 122.291 295.44 122.25C291.65 122.25 288.96 119.25 288.96 114.55C288.96 109.85 291.65 106.86 295.44 106.86C296.851 106.819 298.23 107.291 299.32 108.188C300.41 109.085 301.138 110.347 301.37 111.74H300Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M314.84 122.25C311.05 122.25 308.36 119.25 308.36 114.55C308.36 109.85 311.05 106.86 314.84 106.86C318.63 106.86 321.32 109.86 321.32 114.55C321.32 119.24 318.63 122.25 314.84 122.25ZM314.84 108.14C311.9 108.14 309.69 110.51 309.69 114.55C309.69 118.59 311.87 120.96 314.84 120.96C317.81 120.96 320 118.58 319.99 114.55C319.98 110.52 317.79 108.14 314.84 108.14Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M330.66 107.06L336.1 120.06H336.23L341.67 107.06H343.25V122.06H342V110H341.88L336.88 122.1H335.63L330.49 110H330.37V122.1H329.08V107.1L330.66 107.06Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M351.68 107.06H356.52C359.71 107.06 361.34 109.06 361.34 111.69C361.34 114.32 359.71 116.32 356.54 116.32H353.05V122.05H351.68V107.06ZM356.5 115.06C357.402 115.06 358.266 114.702 358.904 114.064C359.542 113.427 359.9 112.562 359.9 111.66C359.9 110.758 359.542 109.894 358.904 109.256C358.266 108.618 357.402 108.26 356.5 108.26H353.07V115.06H356.5Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M366.09 122.05L371.54 107.05H373L378.45 122.05H377L375.4 117.53H369.1L367.5 122.05H366.09ZM375 116.3L372.34 108.84H372.24L369.58 116.3H375Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M397.15 122.05H395.82L387 109.5H386.89V122.05H385.52V107.05H386.84L395.72 119.61H395.84V107.06H397.19L397.15 122.05Z",
              fill: "#2B2B2B",
            }),
            s.jsx("path", {
              d: "M405.76 107.06L410.2 114.17H410.33L414.77 107.06H416.35L410.95 115.56V122.05H409.58V115.56L404.18 107.06H405.76Z",
              fill: "#2B2B2B",
            }),
          ],
        }),
        s.jsx("defs", {
          children: s.jsx("clipPath", {
            id: "clip0_16_370",
            children: s.jsx("rect", {
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
function cc({
  scrollToSection: j,
  aboutRef: V,
  serviceRef: m,
  contactRef: ae,
  homeRef: R,
}) {
  const [A, oe] = Rn.useState(!1);
  function ce() {
    oe(!0);
  }
  function D() {
    oe(!1);
  }
  return s.jsx("header", {
    className: ge.firstsection,
    children: s.jsxs("nav", {
      className: ge.nav,
      children: [
        s.jsx(Fo, {}),
        s.jsxs("ul", {
          className: ge.navul,
          children: [
            s.jsx("li", {
              className: ge.list,
              onClick: () => j(R),
              children: "Home",
            }),
            s.jsx("li", {
              className: ge.lists,
              onClick: () => j(V),
              children: "About Us",
            }),
            s.jsx("li", {
              className: ge.lists,
              onClick: () => j(m),
              children: "Our Services",
            }),
            s.jsx("li", {
              className: ge.listcontact,
              onClick: () => j(ae),
              children: "Contact Us",
            }),
            s.jsx("li", {
              className: ge.listmenu,
              onClick: ce,
              children: s.jsx("a", {
                className: "dropdown",
                children: s.jsxs("svg", {
                  width: "27",
                  height: "26",
                  viewBox: "0 0 27 26",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    s.jsx("path", {
                      d: "M5.41882 18.4188L20.5915 18.4188",
                      stroke: "#2B2B2B",
                      strokeWidth: "2.16753",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    s.jsx("path", {
                      d: "M5.41882 13H20.5915",
                      stroke: "#2B2B2B",
                      strokeWidth: "2.16753",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    s.jsx("path", {
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
        s.jsxs("div", {
          className: `${ge.sidebar} ${A ? ge.active : ge["fade-out"]}`,
          children: [
            s.jsxs("div", {
              className: ge.imageclose,
              children: [
                s.jsx(Fo, {}),
                s.jsx("a", {
                  className: "dropdown-close",
                  onClick: D,
                  children: s.jsx("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: s.jsx("path", {
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
            s.jsxs("ul", {
              className: ge.sidebarmenu,
              children: [
                s.jsx("li", {
                  className: ge.sidebarlist,
                  onClick: () => {
                    j(R), D();
                  },
                  children: "Home",
                }),
                s.jsx("hr", {}),
                s.jsx("li", {
                  className: ge.sidebarlist,
                  onClick: () => {
                    j(V), D();
                  },
                  children: "About Us",
                }),
                s.jsx("hr", {}),
                s.jsx("li", {
                  className: ge.sidebarlist,
                  onClick: () => {
                    j(m), D();
                  },
                  children: "Our Services",
                }),
                s.jsx("hr", {}),
                s.jsx("li", {
                  className: ge.sidebarcontact,
                  onClick: () => {
                    j(ae), D();
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
const fc = "./assets/image1-DEicDa6E.png",
  dc = "./assets/image1-BSMY6Ah8.png",
  pc = "_background_okd1d_9",
  hc = "_empower_okd1d_17",
  mc = "_mobileimg_okd1d_125",
  vc = "_desktopimg_okd1d_135",
  Vl = { background: pc, empower: hc, mobileimg: mc, desktopimg: vc };
function gc() {
  return s.jsx("section", {
    className: Vl.background,
    children: s.jsxs("div", {
      className: Vl.empower,
      children: [
        s.jsxs("div", {
          children: [
            s.jsx("div", {
              children: s.jsx("label", {
                children:
                  " Empowering People for Productivity through Wellness.",
              }),
            }),
            s.jsx("button", { children: "Get Started" }),
          ],
        }),
        s.jsx("img", { className: Vl.desktopimg, src: fc, alt: "image" }),
        s.jsx("img", { className: Vl.mobileimg, src: dc, alt: "image" }),
      ],
    }),
  });
}
const yc = "_about_1uwc6_9",
  Cc = "_mobileimg_1uwc6_63",
  wc = "_desktopimg_1uwc6_73",
  Bo = { about: yc, mobileimg: Cc, desktopimg: wc },
  kc = "./assets/aboutus-DFEXfrLs.png",
  xc = "./assets/about-BUXhcldZ.png";
function Sc() {
  return s.jsxs("section", {
    className: Bo.about,
    children: [
      s.jsx("img", { className: Bo.desktopimg, src: kc, alt: "" }),
      s.jsx("img", { className: Bo.mobileimg, src: xc, alt: "" }),
      s.jsxs("div", {
        children: [
          s.jsxs("h2", {
            children: ["About ", s.jsx("label", { children: "Us" })],
          }),
          s.jsx("span", {
            children:
              "First and Last Wellness is one of its kind committed to empowering systems for productivity, one life at a time. Our goal is to enlighten and equip organizations with best practices with promote employee welfare and in turn contribute to productivity.",
          }),
        ],
      }),
    ],
  });
}
const _c = "_background_1jlws_9",
  Ec = "_mission_1jlws_15",
  Us = { background: _c, mission: Ec },
  jc = "./assets/image1-BTa888uR.png";
function Lc() {
  return s.jsx("section", {
    className: Us.background,
    children: s.jsxs("div", {
      className: Us.mission,
      children: [
        s.jsxs("div", {
          children: [
            s.jsxs("h2", {
              children: ["Our ", s.jsx("label", { children: "Mission" })],
            }),
            s.jsxs("span", {
              children: [
                "Our mission is to bridge the gap between productivity and well-being by offering a wellness platform tailored especially to corporate clients through evidence-based practices, accessible resources, health plan auditing/consulting and real-time progress tracking.",
                s.jsx("br", {}),
                " This would place in the hands of people, the enablement to take control of their lives, manage their health, reduce stress, and live with a sense of greater purpose.",
              ],
            }),
          ],
        }),
        s.jsx("img", { src: jc, alt: "" }),
      ],
    }),
  });
}
const Nc = "_service_11bs5_9",
  Mc = "_servicecontainer_11bs5_53",
  Pc = "_container_11bs5_67",
  Hc = "_services_11bs5_91",
  Tl = { service: Nc, servicecontainer: Mc, container: Pc, services: Hc },
  zc = [
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
function Vc({ scrollToSection: j, contactRef: V }) {
  return s.jsxs("section", {
    className: Tl.service,
    children: [
      s.jsxs("h2", {
        children: ["Our ", s.jsx("label", { children: "Services" })],
      }),
      s.jsx("div", {
        className: Tl.servicecontainer,
        children: zc.map((m) =>
          s.jsxs("div", {
            className: Tl.container,
            children: [
              s.jsx("img", { src: m.image, alt: "" }),
              s.jsxs("div", {
                className: Tl.services,
                children: [
                  s.jsxs("div", {
                    children: [
                      " ",
                      s.jsx("h3", { children: m.Title }),
                      s.jsx("hr", {}),
                      s.jsx("span", { children: m.Text }),
                    ],
                  }),
                  s.jsx("button", { onClick: () => j(V), children: m.book }),
                ],
              }),
            ],
          })
        ),
      }),
    ],
  });
}
const Tc = "./assets/client1-BvlBikCh.png",
  Rc = "./assets/client2-D2WdRdTn.png",
  Bc = "./assets/client3-DBX-U6Ih.png",
  Fc = "_client_o6mvk_9",
  Dc = "_image1_o6mvk_93",
  Oc = "_image2_o6mvk_101",
  Rl = { client: Fc, image1: Dc, image2: Oc };
function Ac() {
  return s.jsxs("section", {
    className: Rl.client,
    children: [
      s.jsxs("h2", {
        children: ["Our ", s.jsx("label", { children: "Clientele" })],
      }),
      s.jsxs("div", {
        children: [
          s.jsx("img", { className: Rl.image1, src: Tc, alt: "" }),
          s.jsx("img", { className: Rl.image2, src: Rc, alt: "" }),
          s.jsx("img", { className: Rl.image1, src: Bc, alt: "" }),
        ],
      }),
    ],
  });
}
const Ic = "_background_ps3vd_9",
  Uc = "_unlock_ps3vd_17",
  Zc = "_mobile_ps3vd_75",
  Wc = "_desktopimg_ps3vd_85",
  Bl = { background: Ic, unlock: Uc, mobile: Zc, desktopimg: Wc },
  Qc = "./assets/Image-BjA3MDKW.png",
  $c = "./assets/image1-7asvHGuQ.png";
function Yc({ contactRef: j, scrollToSection: V }) {
  return s.jsx("section", {
    className: Bl.background,
    children: s.jsxs("div", {
      className: Bl.unlock,
      children: [
        s.jsxs("div", {
          children: [
            s.jsx("h2", {
              children: "Ready to Elevate Your Team's Health and Well-Being?",
            }),
            s.jsx("button", { onClick: () => V(j), children: "Contact Us" }),
          ],
        }),
        s.jsx("img", { className: Bl.desktopimg, src: Qc, alt: "" }),
        s.jsx("img", { className: Bl.mobile, src: $c, alt: "" }),
      ],
    }),
  });
}
const Kc = "./assets/image1-DeY1Fcku.png",
  Xc = "./assets/choose-u9hyaw1P.png",
  Gc = "_choose_19t4t_9",
  Jc = "_choosemobile_19t4t_21",
  qc = "_chooseimg_19t4t_103",
  bc = "_li_19t4t_137",
  e0 = "_standalone_19t4t_145",
  t0 = "_standalone3_19t4t_159",
  Kt = {
    choose: Gc,
    choosemobile: Jc,
    chooseimg: qc,
    li: bc,
    standalone: e0,
    standalone3: t0,
  };
function n0() {
  return s.jsxs("section", {
    className: Kt.choose,
    children: [
      s.jsx("img", { className: Kt.chooseimg, src: Kc, alt: "" }),
      s.jsx("img", { className: Kt.choosemobile, src: Xc, alt: "" }),
      s.jsxs("div", {
        children: [
          s.jsx("h2", { children: "Why You Should Choose Us:" }),
          s.jsxs("ul", {
            children: [
              s.jsxs("li", {
                className: Kt.li,
                children: [
                  s.jsx("span", {
                    children: "Health plan auditing and consulting",
                  }),
                  ": we consult for Human Resource teams, helping to conduct checks and audits on health plans/health insurance, for the purpose of accessing the best possible care for better outcomes. You could look at us as the “Man on the inside”.",
                ],
              }),
              s.jsxs("li", {
                className: Kt.li,
                children: [
                  s.jsx("span", { children: "Workplace Ergonomics" }),
                  ": we conduct assessment and provide needed information on best practices to promote a space that is safe and efficient to interact in.",
                ],
              }),
              s.jsxs("li", {
                className: Kt.standalone,
                children: [
                  s.jsx("span", {
                    children: "Comprehensive Wellness solutions",
                  }),
                  ": we offer personalized wellness strategies to individuals and teams looking to work smarter and healthier. This is done through wellness workshops, wellness retreats, mindset bootcamps, biometric screenings, etc.",
                ],
              }),
              s.jsxs("li", {
                className: Kt.standalone,
                children: [
                  s.jsx("span", { children: "Health Information" }),
                  ": we stay up to date on health trends and disseminate information via a newsletter to our clients.",
                ],
              }),
              s.jsxs("li", {
                className: Kt.standalone3,
                children: [
                  s.jsx("span", { children: "Point of Liaison" }),
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
const r0 = "_footer_16fhd_9",
  l0 = "_uppist_16fhd_29",
  i0 = "_logo_16fhd_37",
  o0 = "_details_16fhd_47",
  u0 = "_location_16fhd_69",
  s0 = "_days_16fhd_127",
  a0 = "_footer2_16fhd_175",
  c0 = "_quicks_16fhd_201",
  f0 = "_connect_16fhd_215",
  gt = {
    footer: r0,
    uppist: l0,
    logo: i0,
    details: o0,
    location: u0,
    days: s0,
    footer2: a0,
    quicks: c0,
    connect: f0,
  },
  d0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAOCAYAAACSJWqFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOZSURBVHgB7VdbThpRGD4gGqMvdAUdH0y8ptMVdFiBsAJxBeAKlBWoK1BWIKzAYQVM4vXN6QqcPpjIvd83/X9ynAIWiiZN+icn58z579cDxiRgZ2fH297efjQzwsbGhrO1tXXpum7WfCDA5ivoLSbvcXeMdW6mhLSZMywvL0fpdNq8vLx8aGDmDRkzZwiCIMJWMP84xIFBGZ6kUqkiz4PBoGYTsDUWFhbOgXeBi7Au7u7uKsSh7Y7wXQQuS77FxcVDBoat2O/3vfv7++/KD3JH6Bg4c3t7u4YSP8VdEyuP+zyuQ+wFyA9s3eQV24Y48LrgI87F8rHGVijoHLYajh51wLZD2FaTFmtA5oXSgq4JP3JpOofvfLfb/Xpzc/MJQn7YQmkYDGoQ1+v1csCXOT84i3Bffn5+Vr6qVItRR2x+BoI6NCjiKJ05xjrDHUSk6vKtQbmCE8Stie4r6iYO7UpHq+QD7sDWOQKYlAppqQu855QD+XXc7ysRfeJOP9LMOFbl4eEhFPywYpgVZgQRPeY3aWBovd1uM5Ax/crKCjNtEBx/nFHg8ZWf++bm5mdFQndVeUEXwNAvPCNr1B0ysxZviEQwYKywAI6eWrhgjH7q8FWH8rRaLQ9yeOci0J7Q7cOGKs9sJafT6YwUisiy9LNShkMAc0Rjdnd3D3AuAc+WqtglqcBKggF7OPqgi7PDFjNvAKrAhX43oTtCwLTSQjM7RGxrVgaqhBXkmV/tyC6IxwQDE2UyGceMiDgDAAERopwbJf36+prZrEnZN7GHCJhvXjsYQHFJHAzZEubPIJSq+I0esjxs38zskIVvIQ/Ya2xRBMiHvlCrmq1UpeHKge89PcugC9BSR3q3vr7OEo9ngJ5FWJyFpAXsYZkTOawDq2UnwtLSEoPuou3KekedIpN2edLqRlrBGSeLD4fyykyNNIHqI/w+YSyUJwOjTzkgwfDEF4Olz8gpAQeb4MvyooQYXAXMGFbJCbIXT33g6joPjFXmwDWwLkGnd3zZanzZWI1cSgt5kWaSZQ7Hc0gaeUsMusyqAucF7GHJN0VuXF364iWCQn0NDnLaSppk1ULHGWRf6ix8BY7jTPxBRvwomnH3Cny6NVsEZhl3g2l+GU/S8ZbdNth22MBfzMk5+q5AQ6DwyTYImS79zV+OeQKDKol6RMvmbdzcf/nawHnCqY8yZjvEZY5SNlMM4HeF1dXVIja+lGfWGPgPk+An+xRDqC9GHz4AAAAASUVORK5CYII=";
function p0() {
  return s.jsx(s.Fragment, {
    children: s.jsxs("svg", {
      className: gt.uppist,
      width: "472",
      height: "138",
      viewBox: "0 0 472 138",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        s.jsxs("g", {
          "clip-path": "url(#clip0_16_344)",
          children: [
            s.jsx("path", {
              d: "M429.67 103.51C453.048 103.51 472 85.8657 472 64.1002C472 42.3346 453.048 24.6902 429.67 24.6902C406.292 24.6902 387.34 42.3346 387.34 64.1002C387.34 85.8657 406.292 103.51 429.67 103.51Z",
              fill: "#F89A1C",
            }),
            s.jsx("path", {
              d: "M429.75 61.7402C427.661 62.4977 425.393 62.6092 423.24 62.0602C420.912 61.455 418.858 60.0806 417.41 58.1602C419.146 59.6568 421.197 60.7436 423.41 61.3402C425.475 61.8992 427.631 62.0352 429.75 61.7402Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M438.88 55.05L418.17 58.3301C421.771 60.4511 425.827 61.6819 430 61.92C428.783 65.7001 428.979 69.7931 430.55 73.4401L438.88 55.05Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M430 61.9202C428.609 63.693 427.871 65.8911 427.911 68.1443C427.951 70.3974 428.767 72.5679 430.22 74.2902C429.246 72.3805 428.72 70.2739 428.682 68.1306C428.644 65.9872 429.095 63.8633 430 61.9202Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M415.73 74.0002C413.641 74.7577 411.373 74.8692 409.22 74.3202C406.894 73.7169 404.84 72.3463 403.39 70.4302C405.077 71.8644 407.05 72.9242 409.177 73.5397C411.304 74.1551 413.538 74.312 415.73 74.0002Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M424.86 67.28L404.15 70.55C407.736 72.6735 411.779 73.9079 415.94 74.15C414.724 77.9302 414.92 82.0229 416.49 85.67L424.86 67.28Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M415.94 74.1501C414.549 75.923 413.811 78.1211 413.851 80.3743C413.891 82.6274 414.707 84.7979 416.16 86.5201C415.186 84.6104 414.66 82.5039 414.622 80.3605C414.584 78.2172 415.034 76.0933 415.94 74.1501Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M444.2 49.58C442.115 50.3398 439.849 50.4514 437.7 49.9C435.371 49.2926 433.313 47.9188 431.86 46C433.615 47.4961 435.682 48.5824 437.91 49.18C439.959 49.7291 442.097 49.865 444.2 49.58Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M453.33 42.9001L432.62 46.1701C434.555 47.3113 436.629 48.1986 438.79 48.8101C440.623 49.3416 442.507 49.6768 444.41 49.8101C443.217 53.5829 443.427 57.6596 445 61.2901L453.33 42.9001Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M444.41 49.77C443.018 51.5405 442.279 53.7373 442.319 55.9892C442.36 58.2411 443.176 60.4102 444.63 62.13C443.656 60.2221 443.13 58.1172 443.092 55.9754C443.054 53.8337 443.505 51.7114 444.41 49.77Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M64.251 85.4371C57.8783 91.0031 49.5697 93.7861 39.325 93.7861C29.0803 93.7861 20.7717 91.0031 14.399 85.4371C8.02633 79.8711 4.84 72.5708 4.84 63.5361V7.15009H29.04V60.8741C29.04 67.1661 32.4683 70.3121 39.325 70.3121C46.1817 70.3121 49.61 67.1661 49.61 60.8741V7.15009H73.81V63.5361C73.81 72.5708 70.6237 79.8711 64.251 85.4371ZM122.136 29.6561C130.284 29.6561 136.939 32.6811 142.101 38.7311C147.264 44.7811 149.845 52.4041 149.845 61.6001C149.845 70.7961 147.264 78.4191 142.101 84.4691C136.939 90.5191 130.284 93.5441 122.136 93.5441C115.199 93.5441 109.794 91.1644 105.922 86.4051V116.05H83.5373V31.3501H105.922V36.7951C109.794 32.0358 115.199 29.6561 122.136 29.6561ZM108.826 69.7071C110.843 71.8851 113.465 72.9741 116.691 72.9741C119.918 72.9741 122.499 71.8851 124.435 69.7071C126.452 67.5291 127.46 64.8268 127.46 61.6001C127.46 58.3734 126.452 55.6711 124.435 53.4931C122.499 51.3151 119.918 50.2261 116.691 50.2261C113.465 50.2261 110.843 51.3151 108.826 53.4931C106.89 55.6711 105.922 58.3734 105.922 61.6001C105.922 64.8268 106.89 67.5291 108.826 69.7071ZM195.516 29.6561C203.663 29.6561 210.318 32.6811 215.481 38.7311C220.644 44.7811 223.225 52.4041 223.225 61.6001C223.225 70.7961 220.644 78.4191 215.481 84.4691C210.318 90.5191 203.663 93.5441 195.516 93.5441C188.579 93.5441 183.174 91.1644 179.302 86.4051V116.05H156.917V31.3501H179.302V36.7951C183.174 32.0358 188.579 29.6561 195.516 29.6561ZM182.206 69.7071C184.223 71.8851 186.844 72.9741 190.071 72.9741C193.298 72.9741 195.879 71.8851 197.815 69.7071C199.832 67.5291 200.84 64.8268 200.84 61.6001C200.84 58.3734 199.832 55.6711 197.815 53.4931C195.879 51.3151 193.298 50.2261 190.071 50.2261C186.844 50.2261 184.223 51.3151 182.206 53.4931C180.27 55.6711 179.302 58.3734 179.302 61.6001C179.302 64.8268 180.27 67.5291 182.206 69.7071ZM241.55 26.7521C238.162 26.7521 235.218 25.5421 232.717 23.1221C230.297 20.6214 229.087 17.7174 229.087 14.4101C229.087 11.1028 230.297 8.23909 232.717 5.81909C235.218 3.31843 238.162 2.06809 241.55 2.06809C244.857 2.06809 247.721 3.31843 250.141 5.81909C252.642 8.23909 253.892 11.1028 253.892 14.4101C253.892 17.7174 252.642 20.6214 250.141 23.1221C247.721 25.5421 244.857 26.7521 241.55 26.7521ZM230.297 91.8501V31.3501H252.682V91.8501H230.297ZM283.978 49.1371C283.978 50.1051 284.704 50.8714 286.156 51.4361C287.689 52.0008 289.585 52.4444 291.843 52.7671C294.102 53.0091 296.522 53.5334 299.103 54.3401C301.685 55.1468 304.105 56.1551 306.363 57.3651C308.622 58.5751 310.477 60.5111 311.929 63.1731C313.462 65.7544 314.228 68.9004 314.228 72.6111C314.228 76.4831 313.341 79.8711 311.566 82.7751C309.872 85.6791 307.614 87.8571 304.79 89.3091C301.967 90.7611 299.063 91.8098 296.078 92.4551C293.174 93.1811 290.149 93.5441 287.003 93.5441C272.403 93.5441 262.965 88.7444 258.689 79.1451L278.17 70.4331C279.703 74.5471 282.567 76.6041 286.761 76.6041C289.504 76.6041 290.875 75.7168 290.875 73.9421C290.875 72.8934 289.867 72.0464 287.85 71.4011C285.834 70.7558 283.414 70.1104 280.59 69.4651C277.767 68.7391 274.903 67.8114 271.999 66.6821C269.176 65.4721 266.756 63.4958 264.739 60.7531C262.723 58.0104 261.714 54.5821 261.714 50.4681C261.714 43.8534 264.215 38.7311 269.216 35.1011C274.298 31.4711 280.147 29.6561 286.761 29.6561C299.991 29.6561 308.743 34.7784 313.018 45.0231L294.505 51.6781C293.053 48.2901 290.795 46.5961 287.729 46.5961C285.229 46.5961 283.978 47.4431 283.978 49.1371ZM359.086 52.6461H346.381V65.7141C346.381 67.7308 346.865 69.2231 347.833 70.1911C348.801 71.1591 350.213 71.7238 352.068 71.8851C354.004 71.9658 356.344 71.9254 359.086 71.7641V91.8501C346.422 93.6248 337.387 92.5358 331.982 88.5831C326.658 84.6304 323.996 77.4108 323.996 66.9241V52.6461H315.526V31.3501H323.996V21.0651L346.381 14.4101V31.3501H359.086V52.6461Z",
              fill: "#561D5E",
            }),
          ],
        }),
        s.jsx("defs", {
          children: s.jsx("clipPath", {
            id: "clip0_16_344",
            children: s.jsx("rect", {
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
function h0({ scrollToSection: j, aboutRef: V, serviceRef: m }) {
  return s.jsxs("footer", {
    className: gt.footer,
    children: [
      s.jsxs("div", {
        className: gt.details,
        children: [
          s.jsxs("div", {
            children: [
              s.jsxs("svg", {
                width: "24",
                height: "33",
                viewBox: "0 0 24 33",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  s.jsx("g", {
                    "clip-path": "url(#clip0_2_374)",
                    children: s.jsx("path", {
                      d: "M23.9993 12.5C23.9993 21.228 13.8455 31.482 13.4138 31.9142C13.0386 32.2892 12.5299 32.4999 11.9995 32.4999C11.4691 32.4999 10.9604 32.2892 10.5853 31.9142C10.153 31.4817 -0.000732422 21.228 -0.000732422 12.5C-0.000732422 9.3174 1.26355 6.26515 3.51399 4.01472C5.76442 1.76428 8.81667 0.5 11.9993 0.5C15.1819 0.5 18.2341 1.76428 20.4845 4.01472C22.735 6.26515 23.9993 9.3174 23.9993 12.5ZM11.9993 18.5C13.186 18.5 14.346 18.1481 15.3327 17.4888C16.3194 16.8295 17.0884 15.8925 17.5425 14.7961C17.9967 13.6997 18.1155 12.4933 17.884 11.3295C17.6525 10.1656 17.081 9.09647 16.2419 8.25736C15.4028 7.41824 14.3337 6.8468 13.1698 6.61529C12.0059 6.38378 10.7995 6.5026 9.70317 6.95672C8.60681 7.41085 7.66974 8.17988 7.01045 9.16658C6.35116 10.1533 5.99927 11.3133 5.99927 12.5C5.99923 13.2879 6.15441 14.0682 6.45592 14.7961C6.75744 15.5241 7.1994 16.1856 7.75655 16.7427C8.31371 17.2999 8.97516 17.7418 9.70313 18.0433C10.4311 18.3449 11.2113 18.5 11.9993 18.5Z",
                      fill: "#AE4C29",
                    }),
                  }),
                  s.jsx("defs", {
                    children: s.jsx("clipPath", {
                      id: "clip0_2_374",
                      children: s.jsx("rect", {
                        width: "24",
                        height: "32",
                        fill: "white",
                        transform: "translate(-0.000732422 0.5)",
                      }),
                    }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: gt.location,
                children: [
                  s.jsx("h2", { children: "Location" }),
                  s.jsx("span", { children: "Lagos,Nigeria" }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            children: [
              s.jsxs("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  s.jsxs("g", {
                    "clip-path": "url(#clip0_2_382)",
                    children: [
                      s.jsx("path", {
                        d: "M2.99927 8.25V9.75H1.49927C1.30036 9.75 1.10959 9.67098 0.968937 9.53033C0.828285 9.38968 0.749268 9.19891 0.749268 9C0.749268 8.80109 0.828285 8.61032 0.968937 8.46967C1.10959 8.32902 1.30036 8.25 1.49927 8.25H2.99927ZM2.99927 11.25V12.75H1.49927C1.30036 12.75 1.10959 12.671 0.968937 12.5303C0.828285 12.3897 0.749268 12.1989 0.749268 12C0.749268 11.8011 0.828285 11.6103 0.968937 11.4697C1.10959 11.329 1.30036 11.25 1.49927 11.25H2.99927ZM2.99927 14.25V15.75H1.49927C1.30036 15.75 1.10959 15.671 0.968937 15.5303C0.828285 15.3897 0.749268 15.1989 0.749268 15C0.749268 14.8011 0.828285 14.6103 0.968937 14.4697C1.10959 14.329 1.30036 14.25 1.49927 14.25H2.99927Z",
                        fill: "#F2F1F2",
                      }),
                      s.jsx("path", {
                        d: "M20.9993 0H4.49927C3.90253 0 3.33023 0.237053 2.90828 0.65901C2.48632 1.08097 2.24927 1.65326 2.24927 2.25V8.25H4.49927C4.69818 8.25 4.88895 8.32902 5.0296 8.46967C5.17025 8.61032 5.24927 8.80109 5.24927 9C5.24927 9.19891 5.17025 9.38968 5.0296 9.53033C4.88895 9.67098 4.69818 9.75 4.49927 9.75H2.24927V11.25H4.49927C4.69818 11.25 4.88895 11.329 5.0296 11.4697C5.17025 11.6103 5.24927 11.8011 5.24927 12C5.24927 12.1989 5.17025 12.3897 5.0296 12.5303C4.88895 12.671 4.69818 12.75 4.49927 12.75H2.24927V14.25H4.49927C4.69818 14.25 4.88895 14.329 5.0296 14.4697C5.17025 14.6103 5.24927 14.8011 5.24927 15C5.24927 15.1989 5.17025 15.3897 5.0296 15.5303C4.88895 15.671 4.69818 15.75 4.49927 15.75H2.24927V21.75C2.24927 22.3467 2.48632 22.919 2.90828 23.341C3.33023 23.7629 3.90253 24 4.49927 24H20.9993C21.596 24 22.1683 23.7629 22.5903 23.341C23.0122 22.919 23.2493 22.3467 23.2493 21.75V2.25C23.2493 1.65326 23.0122 1.08097 22.5903 0.65901C22.1683 0.237053 21.596 0 20.9993 0V0ZM12.7493 7.125C13.1201 7.125 13.4826 7.23497 13.791 7.44099C14.0993 7.64702 14.3396 7.93986 14.4815 8.28247C14.6235 8.62508 14.6606 9.00208 14.5882 9.3658C14.5159 9.72951 14.3373 10.0636 14.0751 10.3258C13.8129 10.588 13.4788 10.7666 13.1151 10.839C12.7513 10.9113 12.3743 10.8742 12.0317 10.7323C11.6891 10.5904 11.3963 10.35 11.1903 10.0417C10.9842 9.73335 10.8743 9.37084 10.8743 9C10.8743 8.50272 11.0718 8.02581 11.4234 7.67417C11.7751 7.32254 12.252 7.125 12.7493 7.125ZM16.8743 16.5C16.8743 16.5995 16.8348 16.6948 16.7644 16.7652C16.6941 16.8355 16.5987 16.875 16.4993 16.875H8.99927C8.89981 16.875 8.80443 16.8355 8.7341 16.7652C8.66378 16.6948 8.62427 16.5995 8.62427 16.5V15.75C8.62625 14.8555 8.98246 13.9982 9.61497 13.3657C10.2475 12.7332 11.1048 12.377 11.9993 12.375H13.4993C14.3938 12.377 15.2511 12.7332 15.8836 13.3657C16.5161 13.9982 16.8723 14.8555 16.8743 15.75V16.5Z",
                        fill: "#AE4C29",
                      }),
                    ],
                  }),
                  s.jsx("defs", {
                    children: s.jsx("clipPath", {
                      id: "clip0_2_382",
                      children: s.jsx("rect", {
                        width: "24",
                        height: "24",
                        fill: "white",
                        transform: "translate(-0.000732422)",
                      }),
                    }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: gt.location,
                children: [
                  s.jsx("h2", { children: "Contact" }),
                  s.jsxs("span", {
                    children: [
                      s.jsx("p", { children: "Email" }),
                      ": firstandlastwellness@gmail.com",
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            children: [
              s.jsx("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: s.jsx("path", {
                  d: "M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85383C4.07979 4.06253 2.66989 5.78049 1.83733 7.79048C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7886C11.9878 23.2131 14.1995 22.9952 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C23 9.08262 21.8411 6.28473 19.7782 4.22183C17.7153 2.15893 14.9174 1 12 1ZM16 13H12C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V6C11 5.73478 11.1054 5.48043 11.2929 5.29289C11.4804 5.10536 11.7348 5 12 5C12.2652 5 12.5196 5.10536 12.7071 5.29289C12.8946 5.48043 13 5.73478 13 6V11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13Z",
                  fill: "#AE4C29",
                }),
              }),
              s.jsxs("div", {
                className: gt.location,
                children: [
                  s.jsx("h2", { children: "Work hours" }),
                  s.jsxs("span", {
                    className: gt.days,
                    children: [
                      "Monday to Friday ",
                      s.jsx("label", { children: "8am - 4pm" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      s.jsx("hr", {}),
      s.jsxs("div", {
        className: gt.footer2,
        children: [
          s.jsxs("div", {
            children: [
              s.jsx(Fo, {}),
              s.jsx("h2", {
                children:
                  "Empowering organizations with holistic wellness solutions for a healthier, more productive workforce.",
              }),
            ],
          }),
          s.jsxs("div", {
            className: gt.quicks,
            children: [
              s.jsx("label", { children: "Quick Links" }),
              s.jsxs("ul", {
                children: [
                  s.jsx("li", { onClick: () => j(V), children: "About us" }),
                  s.jsx("li", {
                    onClick: () => j(m),
                    children: "Our Services",
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: gt.connect,
            children: [
              s.jsx("label", { children: "Connect with us" }),
              s.jsxs("div", {
                children: [
                  s.jsxs("svg", {
                    width: "36",
                    height: "36",
                    viewBox: "0 0 36 36",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      s.jsxs("g", {
                        "clip-path": "url(#clip0_2_399)",
                        children: [
                          s.jsx("path", {
                            d: "M31.4993 36H4.49927C2.01527 36 -0.000732422 33.984 -0.000732422 31.5V4.5C-0.000732422 2.016 2.01527 0 4.49927 0H31.4993C33.9833 0 35.9993 2.016 35.9993 4.5V31.5C35.9993 33.984 33.9833 36 31.4993 36Z",
                            fill: "#AE4C29",
                          }),
                          s.jsx("path", {
                            d: "M35.9993 17.9999C35.9993 8.05878 27.9404 -8.7738e-05 17.9993 -8.7738e-05C8.05814 -8.7738e-05 -0.000732422 8.05878 -0.000732422 17.9999C-0.000732422 26.9842 6.58161 34.4309 15.1868 35.7812V23.203H10.6165V17.9999H15.1868V14.0343C15.1868 9.52304 17.874 7.03116 21.9856 7.03116C23.955 7.03116 26.0149 7.38273 26.0149 7.38273V11.8124H23.7451C21.5091 11.8124 20.8118 13.1999 20.8118 14.6234V17.9999H25.804L25.0059 23.203H20.8118V35.7812C29.4169 34.4309 35.9993 26.9842 35.9993 17.9999Z",
                            fill: "#AE4C29",
                          }),
                          s.jsx("path", {
                            d: "M25.0059 23.2031L25.804 18H20.8118V14.6235C20.8118 13.2 21.5091 11.8125 23.7451 11.8125H26.0149V7.38281C26.0149 7.38281 23.955 7.03125 21.9856 7.03125C17.874 7.03125 15.1868 9.52313 15.1868 14.0344V18H10.6165V23.2031H15.1868V35.7813C16.1032 35.9251 17.0425 36 17.9993 36C18.9561 36 19.8954 35.9251 20.8118 35.7813V23.2031H25.0059Z",
                            fill: "white",
                          }),
                        ],
                      }),
                      s.jsx("defs", {
                        children: s.jsx("clipPath", {
                          id: "clip0_2_399",
                          children: s.jsx("rect", {
                            width: "36",
                            height: "36",
                            fill: "white",
                            transform: "translate(-0.000732422)",
                          }),
                        }),
                      }),
                    ],
                  }),
                  s.jsxs("svg", {
                    width: "36",
                    height: "36",
                    viewBox: "0 0 36 36",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      s.jsxs("g", {
                        "clip-path": "url(#clip0_2_405)",
                        children: [
                          s.jsx("path", {
                            d: "M31.4993 36H4.49927C2.01527 36 -0.000732422 33.984 -0.000732422 31.5V4.5C-0.000732422 2.016 2.01527 0 4.49927 0H31.4993C33.9833 0 35.9993 2.016 35.9993 4.5V31.5C35.9993 33.984 33.9833 36 31.4993 36Z",
                            fill: "#AE4C29",
                          }),
                          s.jsx("path", {
                            d: "M24.3808 8H27.753L20.3488 16.4871L28.9993 28H22.2109L16.896 21.0037L10.8113 28H7.43912L15.2832 18.9225L6.99927 8H13.9563L18.758 14.3911L24.3808 8ZM23.2005 26.0074H25.0699L12.9739 9.91882H10.9653L23.2005 26.0074Z",
                            fill: "white",
                          }),
                        ],
                      }),
                      s.jsx("defs", {
                        children: s.jsx("clipPath", {
                          id: "clip0_2_405",
                          children: s.jsx("rect", {
                            width: "36",
                            height: "36",
                            fill: "white",
                            transform: "translate(-0.000732422)",
                          }),
                        }),
                      }),
                    ],
                  }),
                  s.jsxs("svg", {
                    width: "36",
                    height: "36",
                    viewBox: "0 0 36 36",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      s.jsxs("g", {
                        "clip-path": "url(#clip0_2_410)",
                        children: [
                          s.jsx("rect", {
                            x: "-0.000732422",
                            width: "36",
                            height: "36",
                            rx: "5",
                            fill: "#561D5E",
                          }),
                          s.jsxs("g", {
                            "clip-path": "url(#clip1_2_410)",
                            children: [
                              s.jsx("rect", {
                                x: "-0.000732422",
                                width: "36",
                                height: "36",
                                rx: "5",
                                fill: "#AE4C29",
                              }),
                              s.jsx("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M28.9993 29H24.7993V21.651C24.7993 19.635 23.9099 18.5103 22.315 18.5103C20.5793 18.5103 19.5493 19.6823 19.5493 21.651V29H15.3493V15.35H19.5493V16.885C19.5493 16.885 20.867 14.5728 23.8364 14.5728C26.8069 14.5728 28.9993 16.3854 28.9993 20.136V29ZM10.5634 13.1669C9.14692 13.1669 7.99927 12.0099 7.99927 10.583C7.99927 9.15706 9.14692 8 10.5634 8C11.9788 8 13.1264 9.15706 13.1264 10.583C13.1275 12.0099 11.9788 13.1669 10.5634 13.1669ZM7.99927 29H13.2493V15.35H7.99927V29Z",
                                fill: "white",
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("defs", {
                        children: [
                          s.jsx("clipPath", {
                            id: "clip0_2_410",
                            children: s.jsx("rect", {
                              x: "-0.000732422",
                              width: "36",
                              height: "36",
                              rx: "5",
                              fill: "white",
                            }),
                          }),
                          s.jsx("clipPath", {
                            id: "clip1_2_410",
                            children: s.jsx("rect", {
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
                  s.jsxs("svg", {
                    width: "36",
                    height: "36",
                    viewBox: "0 0 36 36",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      s.jsx("rect", {
                        x: "-0.000732422",
                        width: "36",
                        height: "36",
                        rx: "5",
                        fill: "#AE4C29",
                      }),
                      s.jsx("path", {
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
      s.jsx("label", {
        children: "© First and Last Wellness Company 2024. All rights reserved",
      }),
      s.jsxs("span", {
        children: [s.jsx("img", { src: d0, alt: "" }), s.jsx(p0, {})],
      }),
    ],
  });
}
function m0() {
  const j = Rn.useRef(null),
    V = Rn.useRef(null),
    m = Rn.useRef(null),
    ae = Rn.useRef(null),
    R = (A) => {
      A != null &&
        A.current &&
        window.scrollTo({ top: A.current.offsetTop, behavior: "smooth" });
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(cc, {
        aboutRef: j,
        serviceRef: V,
        contactRef: m,
        homeRef: ae,
        scrollToSection: R,
      }),
      s.jsx("div", { ref: ae, children: s.jsx(gc, {}) }),
      s.jsx("div", { ref: j, children: s.jsx(Sc, {}) }),
      s.jsx(Lc, {}),
      s.jsx("div", {
        ref: V,
        children: s.jsx(Vc, { contactRef: m, scrollToSection: R }),
      }),
      s.jsx(Ac, {}),
      s.jsx(Yc, { contactRef: m, scrollToSection: R }),
      s.jsx(n0, {}),
      s.jsx("div", {
        ref: m,
        children: s.jsx(h0, { aboutRef: j, serviceRef: V, scrollToSection: R }),
      }),
    ],
  });
}
Y2.createRoot(document.getElementById("root")).render(
  s.jsx(Rn.StrictMode, { children: s.jsx(m0, {}) })
);
