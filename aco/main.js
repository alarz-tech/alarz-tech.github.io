"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/client/node_modules/preact/dist/preact.module.js
  var preact_module_exports = {};
  __export(preact_module_exports, {
    Component: () => k,
    Fragment: () => _,
    cloneElement: () => E,
    createContext: () => F,
    createElement: () => y,
    createRef: () => d,
    h: () => y,
    hydrate: () => D,
    isValidElement: () => i,
    options: () => l,
    render: () => B,
    toChildArray: () => P
  });
  function h(n3, l5) {
    for (var u5 in l5)
      n3[u5] = l5[u5];
    return n3;
  }
  function v(n3) {
    var l5 = n3.parentNode;
    l5 && l5.removeChild(n3);
  }
  function y(l5, u5, i5) {
    var t4, r4, o6, f5 = {};
    for (o6 in u5)
      "key" == o6 ? t4 = u5[o6] : "ref" == o6 ? r4 = u5[o6] : f5[o6] = u5[o6];
    if (arguments.length > 2 && (f5.children = arguments.length > 3 ? n.call(arguments, 2) : i5), "function" == typeof l5 && null != l5.defaultProps)
      for (o6 in l5.defaultProps)
        void 0 === f5[o6] && (f5[o6] = l5.defaultProps[o6]);
    return p(l5, f5, t4, r4, null);
  }
  function p(n3, i5, t4, r4, o6) {
    var f5 = { type: n3, props: i5, key: t4, ref: r4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o6 ? ++u : o6 };
    return null == o6 && null != l.vnode && l.vnode(f5), f5;
  }
  function d() {
    return { current: null };
  }
  function _(n3) {
    return n3.children;
  }
  function k(n3, l5) {
    this.props = n3, this.context = l5;
  }
  function b(n3, l5) {
    if (null == l5)
      return n3.__ ? b(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
    for (var u5; l5 < n3.__k.length; l5++)
      if (null != (u5 = n3.__k[l5]) && null != u5.__e)
        return u5.__e;
    return "function" == typeof n3.type ? b(n3) : null;
  }
  function g(n3) {
    var l5, u5;
    if (null != (n3 = n3.__) && null != n3.__c) {
      for (n3.__e = n3.__c.base = null, l5 = 0; l5 < n3.__k.length; l5++)
        if (null != (u5 = n3.__k[l5]) && null != u5.__e) {
          n3.__e = n3.__c.base = u5.__e;
          break;
        }
      return g(n3);
    }
  }
  function m(n3) {
    (!n3.__d && (n3.__d = true) && t.push(n3) && !w.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(w);
  }
  function w() {
    var n3, l5, u5, i5, r4, o6, e3, c5;
    for (t.sort(f); n3 = t.shift(); )
      n3.__d && (l5 = t.length, i5 = void 0, r4 = void 0, e3 = (o6 = (u5 = n3).__v).__e, (c5 = u5.__P) && (i5 = [], (r4 = h({}, o6)).__v = o6.__v + 1, L(c5, o6, r4, u5.__n, void 0 !== c5.ownerSVGElement, null != o6.__h ? [e3] : null, i5, null == e3 ? b(o6) : e3, o6.__h), M(i5, o6), o6.__e != e3 && g(o6)), t.length > l5 && t.sort(f));
    w.__r = 0;
  }
  function x(n3, l5, u5, i5, t4, r4, o6, f5, e3, a5) {
    var h5, v5, y5, d5, k4, g4, m4, w4 = i5 && i5.__k || s, x4 = w4.length;
    for (u5.__k = [], h5 = 0; h5 < l5.length; h5++)
      if (null != (d5 = u5.__k[h5] = null == (d5 = l5[h5]) || "boolean" == typeof d5 || "function" == typeof d5 ? null : "string" == typeof d5 || "number" == typeof d5 || "bigint" == typeof d5 ? p(null, d5, null, null, d5) : Array.isArray(d5) ? p(_, { children: d5 }, null, null, null) : d5.__b > 0 ? p(d5.type, d5.props, d5.key, d5.ref ? d5.ref : null, d5.__v) : d5)) {
        if (d5.__ = u5, d5.__b = u5.__b + 1, null === (y5 = w4[h5]) || y5 && d5.key == y5.key && d5.type === y5.type)
          w4[h5] = void 0;
        else
          for (v5 = 0; v5 < x4; v5++) {
            if ((y5 = w4[v5]) && d5.key == y5.key && d5.type === y5.type) {
              w4[v5] = void 0;
              break;
            }
            y5 = null;
          }
        L(n3, d5, y5 = y5 || c, t4, r4, o6, f5, e3, a5), k4 = d5.__e, (v5 = d5.ref) && y5.ref != v5 && (m4 || (m4 = []), y5.ref && m4.push(y5.ref, null, d5), m4.push(v5, d5.__c || k4, d5)), null != k4 ? (null == g4 && (g4 = k4), "function" == typeof d5.type && d5.__k === y5.__k ? d5.__d = e3 = A(d5, e3, n3) : e3 = C(n3, d5, y5, w4, k4, e3), "function" == typeof u5.type && (u5.__d = e3)) : e3 && y5.__e == e3 && e3.parentNode != n3 && (e3 = b(y5));
      }
    for (u5.__e = g4, h5 = x4; h5--; )
      null != w4[h5] && ("function" == typeof u5.type && null != w4[h5].__e && w4[h5].__e == u5.__d && (u5.__d = $(i5).nextSibling), S(w4[h5], w4[h5]));
    if (m4)
      for (h5 = 0; h5 < m4.length; h5++)
        O(m4[h5], m4[++h5], m4[++h5]);
  }
  function A(n3, l5, u5) {
    for (var i5, t4 = n3.__k, r4 = 0; t4 && r4 < t4.length; r4++)
      (i5 = t4[r4]) && (i5.__ = n3, l5 = "function" == typeof i5.type ? A(i5, l5, u5) : C(u5, i5, i5, t4, i5.__e, l5));
    return l5;
  }
  function P(n3, l5) {
    return l5 = l5 || [], null == n3 || "boolean" == typeof n3 || (Array.isArray(n3) ? n3.some(function(n4) {
      P(n4, l5);
    }) : l5.push(n3)), l5;
  }
  function C(n3, l5, u5, i5, t4, r4) {
    var o6, f5, e3;
    if (void 0 !== l5.__d)
      o6 = l5.__d, l5.__d = void 0;
    else if (null == u5 || t4 != r4 || null == t4.parentNode)
      n:
        if (null == r4 || r4.parentNode !== n3)
          n3.appendChild(t4), o6 = null;
        else {
          for (f5 = r4, e3 = 0; (f5 = f5.nextSibling) && e3 < i5.length; e3 += 1)
            if (f5 == t4)
              break n;
          n3.insertBefore(t4, r4), o6 = r4;
        }
    return void 0 !== o6 ? o6 : t4.nextSibling;
  }
  function $(n3) {
    var l5, u5, i5;
    if (null == n3.type || "string" == typeof n3.type)
      return n3.__e;
    if (n3.__k) {
      for (l5 = n3.__k.length - 1; l5 >= 0; l5--)
        if ((u5 = n3.__k[l5]) && (i5 = $(u5)))
          return i5;
    }
    return null;
  }
  function H(n3, l5, u5, i5, t4) {
    var r4;
    for (r4 in u5)
      "children" === r4 || "key" === r4 || r4 in l5 || T(n3, r4, null, u5[r4], i5);
    for (r4 in l5)
      t4 && "function" != typeof l5[r4] || "children" === r4 || "key" === r4 || "value" === r4 || "checked" === r4 || u5[r4] === l5[r4] || T(n3, r4, l5[r4], u5[r4], i5);
  }
  function I(n3, l5, u5) {
    "-" === l5[0] ? n3.setProperty(l5, null == u5 ? "" : u5) : n3[l5] = null == u5 ? "" : "number" != typeof u5 || a.test(l5) ? u5 : u5 + "px";
  }
  function T(n3, l5, u5, i5, t4) {
    var r4;
    n:
      if ("style" === l5)
        if ("string" == typeof u5)
          n3.style.cssText = u5;
        else {
          if ("string" == typeof i5 && (n3.style.cssText = i5 = ""), i5)
            for (l5 in i5)
              u5 && l5 in u5 || I(n3.style, l5, "");
          if (u5)
            for (l5 in u5)
              i5 && u5[l5] === i5[l5] || I(n3.style, l5, u5[l5]);
        }
      else if ("o" === l5[0] && "n" === l5[1])
        r4 = l5 !== (l5 = l5.replace(/Capture$/, "")), l5 = l5.toLowerCase() in n3 ? l5.toLowerCase().slice(2) : l5.slice(2), n3.l || (n3.l = {}), n3.l[l5 + r4] = u5, u5 ? i5 || n3.addEventListener(l5, r4 ? z : j, r4) : n3.removeEventListener(l5, r4 ? z : j, r4);
      else if ("dangerouslySetInnerHTML" !== l5) {
        if (t4)
          l5 = l5.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l5 && "height" !== l5 && "href" !== l5 && "list" !== l5 && "form" !== l5 && "tabIndex" !== l5 && "download" !== l5 && l5 in n3)
          try {
            n3[l5] = null == u5 ? "" : u5;
            break n;
          } catch (n4) {
          }
        "function" == typeof u5 || (null == u5 || false === u5 && "-" !== l5[4] ? n3.removeAttribute(l5) : n3.setAttribute(l5, u5));
      }
  }
  function j(n3) {
    return this.l[n3.type + false](l.event ? l.event(n3) : n3);
  }
  function z(n3) {
    return this.l[n3.type + true](l.event ? l.event(n3) : n3);
  }
  function L(n3, u5, i5, t4, r4, o6, f5, e3, c5) {
    var s5, a5, v5, y5, p5, d5, b4, g4, m4, w4, A4, P4, C2, $2, H3, I3 = u5.type;
    if (void 0 !== u5.constructor)
      return null;
    null != i5.__h && (c5 = i5.__h, e3 = u5.__e = i5.__e, u5.__h = null, o6 = [e3]), (s5 = l.__b) && s5(u5);
    try {
      n:
        if ("function" == typeof I3) {
          if (g4 = u5.props, m4 = (s5 = I3.contextType) && t4[s5.__c], w4 = s5 ? m4 ? m4.props.value : s5.__ : t4, i5.__c ? b4 = (a5 = u5.__c = i5.__c).__ = a5.__E : ("prototype" in I3 && I3.prototype.render ? u5.__c = a5 = new I3(g4, w4) : (u5.__c = a5 = new k(g4, w4), a5.constructor = I3, a5.render = q), m4 && m4.sub(a5), a5.props = g4, a5.state || (a5.state = {}), a5.context = w4, a5.__n = t4, v5 = a5.__d = true, a5.__h = [], a5._sb = []), null == a5.__s && (a5.__s = a5.state), null != I3.getDerivedStateFromProps && (a5.__s == a5.state && (a5.__s = h({}, a5.__s)), h(a5.__s, I3.getDerivedStateFromProps(g4, a5.__s))), y5 = a5.props, p5 = a5.state, a5.__v = u5, v5)
            null == I3.getDerivedStateFromProps && null != a5.componentWillMount && a5.componentWillMount(), null != a5.componentDidMount && a5.__h.push(a5.componentDidMount);
          else {
            if (null == I3.getDerivedStateFromProps && g4 !== y5 && null != a5.componentWillReceiveProps && a5.componentWillReceiveProps(g4, w4), !a5.__e && null != a5.shouldComponentUpdate && false === a5.shouldComponentUpdate(g4, a5.__s, w4) || u5.__v === i5.__v) {
              for (u5.__v !== i5.__v && (a5.props = g4, a5.state = a5.__s, a5.__d = false), a5.__e = false, u5.__e = i5.__e, u5.__k = i5.__k, u5.__k.forEach(function(n4) {
                n4 && (n4.__ = u5);
              }), A4 = 0; A4 < a5._sb.length; A4++)
                a5.__h.push(a5._sb[A4]);
              a5._sb = [], a5.__h.length && f5.push(a5);
              break n;
            }
            null != a5.componentWillUpdate && a5.componentWillUpdate(g4, a5.__s, w4), null != a5.componentDidUpdate && a5.__h.push(function() {
              a5.componentDidUpdate(y5, p5, d5);
            });
          }
          if (a5.context = w4, a5.props = g4, a5.__P = n3, P4 = l.__r, C2 = 0, "prototype" in I3 && I3.prototype.render) {
            for (a5.state = a5.__s, a5.__d = false, P4 && P4(u5), s5 = a5.render(a5.props, a5.state, a5.context), $2 = 0; $2 < a5._sb.length; $2++)
              a5.__h.push(a5._sb[$2]);
            a5._sb = [];
          } else
            do {
              a5.__d = false, P4 && P4(u5), s5 = a5.render(a5.props, a5.state, a5.context), a5.state = a5.__s;
            } while (a5.__d && ++C2 < 25);
          a5.state = a5.__s, null != a5.getChildContext && (t4 = h(h({}, t4), a5.getChildContext())), v5 || null == a5.getSnapshotBeforeUpdate || (d5 = a5.getSnapshotBeforeUpdate(y5, p5)), H3 = null != s5 && s5.type === _ && null == s5.key ? s5.props.children : s5, x(n3, Array.isArray(H3) ? H3 : [H3], u5, i5, t4, r4, o6, f5, e3, c5), a5.base = u5.__e, u5.__h = null, a5.__h.length && f5.push(a5), b4 && (a5.__E = a5.__ = null), a5.__e = false;
        } else
          null == o6 && u5.__v === i5.__v ? (u5.__k = i5.__k, u5.__e = i5.__e) : u5.__e = N(i5.__e, u5, i5, t4, r4, o6, f5, c5);
      (s5 = l.diffed) && s5(u5);
    } catch (n4) {
      u5.__v = null, (c5 || null != o6) && (u5.__e = e3, u5.__h = !!c5, o6[o6.indexOf(e3)] = null), l.__e(n4, u5, i5);
    }
  }
  function M(n3, u5) {
    l.__c && l.__c(u5, n3), n3.some(function(u6) {
      try {
        n3 = u6.__h, u6.__h = [], n3.some(function(n4) {
          n4.call(u6);
        });
      } catch (n4) {
        l.__e(n4, u6.__v);
      }
    });
  }
  function N(l5, u5, i5, t4, r4, o6, f5, e3) {
    var s5, a5, h5, y5 = i5.props, p5 = u5.props, d5 = u5.type, _5 = 0;
    if ("svg" === d5 && (r4 = true), null != o6) {
      for (; _5 < o6.length; _5++)
        if ((s5 = o6[_5]) && "setAttribute" in s5 == !!d5 && (d5 ? s5.localName === d5 : 3 === s5.nodeType)) {
          l5 = s5, o6[_5] = null;
          break;
        }
    }
    if (null == l5) {
      if (null === d5)
        return document.createTextNode(p5);
      l5 = r4 ? document.createElementNS("http://www.w3.org/2000/svg", d5) : document.createElement(d5, p5.is && p5), o6 = null, e3 = false;
    }
    if (null === d5)
      y5 === p5 || e3 && l5.data === p5 || (l5.data = p5);
    else {
      if (o6 = o6 && n.call(l5.childNodes), a5 = (y5 = i5.props || c).dangerouslySetInnerHTML, h5 = p5.dangerouslySetInnerHTML, !e3) {
        if (null != o6)
          for (y5 = {}, _5 = 0; _5 < l5.attributes.length; _5++)
            y5[l5.attributes[_5].name] = l5.attributes[_5].value;
        (h5 || a5) && (h5 && (a5 && h5.__html == a5.__html || h5.__html === l5.innerHTML) || (l5.innerHTML = h5 && h5.__html || ""));
      }
      if (H(l5, p5, y5, r4, e3), h5)
        u5.__k = [];
      else if (_5 = u5.props.children, x(l5, Array.isArray(_5) ? _5 : [_5], u5, i5, t4, r4 && "foreignObject" !== d5, o6, f5, o6 ? o6[0] : i5.__k && b(i5, 0), e3), null != o6)
        for (_5 = o6.length; _5--; )
          null != o6[_5] && v(o6[_5]);
      e3 || ("value" in p5 && void 0 !== (_5 = p5.value) && (_5 !== l5.value || "progress" === d5 && !_5 || "option" === d5 && _5 !== y5.value) && T(l5, "value", _5, y5.value, false), "checked" in p5 && void 0 !== (_5 = p5.checked) && _5 !== l5.checked && T(l5, "checked", _5, y5.checked, false));
    }
    return l5;
  }
  function O(n3, u5, i5) {
    try {
      "function" == typeof n3 ? n3(u5) : n3.current = u5;
    } catch (n4) {
      l.__e(n4, i5);
    }
  }
  function S(n3, u5, i5) {
    var t4, r4;
    if (l.unmount && l.unmount(n3), (t4 = n3.ref) && (t4.current && t4.current !== n3.__e || O(t4, null, u5)), null != (t4 = n3.__c)) {
      if (t4.componentWillUnmount)
        try {
          t4.componentWillUnmount();
        } catch (n4) {
          l.__e(n4, u5);
        }
      t4.base = t4.__P = null, n3.__c = void 0;
    }
    if (t4 = n3.__k)
      for (r4 = 0; r4 < t4.length; r4++)
        t4[r4] && S(t4[r4], u5, i5 || "function" != typeof n3.type);
    i5 || null == n3.__e || v(n3.__e), n3.__ = n3.__e = n3.__d = void 0;
  }
  function q(n3, l5, u5) {
    return this.constructor(n3, u5);
  }
  function B(u5, i5, t4) {
    var r4, o6, f5;
    l.__ && l.__(u5, i5), o6 = (r4 = "function" == typeof t4) ? null : t4 && t4.__k || i5.__k, f5 = [], L(i5, u5 = (!r4 && t4 || i5).__k = y(_, null, [u5]), o6 || c, c, void 0 !== i5.ownerSVGElement, !r4 && t4 ? [t4] : o6 ? null : i5.firstChild ? n.call(i5.childNodes) : null, f5, !r4 && t4 ? t4 : o6 ? o6.__e : i5.firstChild, r4), M(f5, u5);
  }
  function D(n3, l5) {
    B(n3, l5, D);
  }
  function E(l5, u5, i5) {
    var t4, r4, o6, f5 = h({}, l5.props);
    for (o6 in u5)
      "key" == o6 ? t4 = u5[o6] : "ref" == o6 ? r4 = u5[o6] : f5[o6] = u5[o6];
    return arguments.length > 2 && (f5.children = arguments.length > 3 ? n.call(arguments, 2) : i5), p(l5.type, f5, t4 || l5.key, r4 || l5.ref, null);
  }
  function F(n3, l5) {
    var u5 = { __c: l5 = "__cC" + e++, __: n3, Consumer: function(n4, l6) {
      return n4.children(l6);
    }, Provider: function(n4) {
      var u6, i5;
      return this.getChildContext || (u6 = [], (i5 = {})[l5] = this, this.getChildContext = function() {
        return i5;
      }, this.shouldComponentUpdate = function(n5) {
        this.props.value !== n5.value && u6.some(function(n6) {
          n6.__e = true, m(n6);
        });
      }, this.sub = function(n5) {
        u6.push(n5);
        var l6 = n5.componentWillUnmount;
        n5.componentWillUnmount = function() {
          u6.splice(u6.indexOf(n5), 1), l6 && l6.call(n5);
        };
      }), n4.children;
    } };
    return u5.Provider.__ = u5.Consumer.contextType = u5;
  }
  var n, l, u, i, t, r, o, f, e, c, s, a;
  var init_preact_module = __esm({
    "src/client/node_modules/preact/dist/preact.module.js"() {
      c = {};
      s = [];
      a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = s.slice, l = { __e: function(n3, l5, u5, i5) {
        for (var t4, r4, o6; l5 = l5.__; )
          if ((t4 = l5.__c) && !t4.__)
            try {
              if ((r4 = t4.constructor) && null != r4.getDerivedStateFromError && (t4.setState(r4.getDerivedStateFromError(n3)), o6 = t4.__d), null != t4.componentDidCatch && (t4.componentDidCatch(n3, i5 || {}), o6 = t4.__d), o6)
                return t4.__E = t4;
            } catch (l6) {
              n3 = l6;
            }
        throw n3;
      } }, u = 0, i = function(n3) {
        return null != n3 && void 0 === n3.constructor;
      }, k.prototype.setState = function(n3, l5) {
        var u5;
        u5 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n3 && (n3 = n3(h({}, u5), this.props)), n3 && h(u5, n3), null != n3 && this.__v && (l5 && this._sb.push(l5), m(this));
      }, k.prototype.forceUpdate = function(n3) {
        this.__v && (this.__e = true, n3 && this.__h.push(n3), m(this));
      }, k.prototype.render = _, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n3, l5) {
        return n3.__v.__b - l5.__v.__b;
      }, w.__r = 0, e = 0;
    }
  });

  // src/client/node_modules/preact/hooks/dist/hooks.module.js
  var hooks_module_exports = {};
  __export(hooks_module_exports, {
    useCallback: () => T2,
    useContext: () => q3,
    useDebugValue: () => x3,
    useEffect: () => p4,
    useErrorBoundary: () => P3,
    useId: () => V,
    useImperativeHandle: () => A3,
    useLayoutEffect: () => y4,
    useMemo: () => F3,
    useReducer: () => s4,
    useRef: () => _3,
    useState: () => h4
  });
  function d4(t4, u5) {
    l.__h && l.__h(r3, t4, o4 || u5), o4 = 0;
    var i5 = r3.__H || (r3.__H = { __: [], __h: [] });
    return t4 >= i5.__.length && i5.__.push({ __V: c4 }), i5.__[t4];
  }
  function h4(n3) {
    return o4 = 1, s4(B3, n3);
  }
  function s4(n3, u5, i5) {
    var o6 = d4(t3++, 2);
    if (o6.t = n3, !o6.__c && (o6.__ = [i5 ? i5(u5) : B3(void 0, u5), function(n4) {
      var t4 = o6.__N ? o6.__N[0] : o6.__[0], r4 = o6.t(t4, n4);
      t4 !== r4 && (o6.__N = [r4, o6.__[1]], o6.__c.setState({}));
    }], o6.__c = r3, !r3.u)) {
      var f5 = function(n4, t4, r4) {
        if (!o6.__c.__H)
          return true;
        var u6 = o6.__c.__H.__.filter(function(n5) {
          return n5.__c;
        });
        if (u6.every(function(n5) {
          return !n5.__N;
        }))
          return !c5 || c5.call(this, n4, t4, r4);
        var i6 = false;
        return u6.forEach(function(n5) {
          if (n5.__N) {
            var t5 = n5.__[0];
            n5.__ = n5.__N, n5.__N = void 0, t5 !== n5.__[0] && (i6 = true);
          }
        }), !(!i6 && o6.__c.props === n4) && (!c5 || c5.call(this, n4, t4, r4));
      };
      r3.u = true;
      var c5 = r3.shouldComponentUpdate, e3 = r3.componentWillUpdate;
      r3.componentWillUpdate = function(n4, t4, r4) {
        if (this.__e) {
          var u6 = c5;
          c5 = void 0, f5(n4, t4, r4), c5 = u6;
        }
        e3 && e3.call(this, n4, t4, r4);
      }, r3.shouldComponentUpdate = f5;
    }
    return o6.__N || o6.__;
  }
  function p4(u5, i5) {
    var o6 = d4(t3++, 3);
    !l.__s && z3(o6.__H, i5) && (o6.__ = u5, o6.i = i5, r3.__H.__h.push(o6));
  }
  function y4(u5, i5) {
    var o6 = d4(t3++, 4);
    !l.__s && z3(o6.__H, i5) && (o6.__ = u5, o6.i = i5, r3.__h.push(o6));
  }
  function _3(n3) {
    return o4 = 5, F3(function() {
      return { current: n3 };
    }, []);
  }
  function A3(n3, t4, r4) {
    o4 = 6, y4(function() {
      return "function" == typeof n3 ? (n3(t4()), function() {
        return n3(null);
      }) : n3 ? (n3.current = t4(), function() {
        return n3.current = null;
      }) : void 0;
    }, null == r4 ? r4 : r4.concat(n3));
  }
  function F3(n3, r4) {
    var u5 = d4(t3++, 7);
    return z3(u5.__H, r4) ? (u5.__V = n3(), u5.i = r4, u5.__h = n3, u5.__V) : u5.__;
  }
  function T2(n3, t4) {
    return o4 = 8, F3(function() {
      return n3;
    }, t4);
  }
  function q3(n3) {
    var u5 = r3.context[n3.__c], i5 = d4(t3++, 9);
    return i5.c = n3, u5 ? (null == i5.__ && (i5.__ = true, u5.sub(r3)), u5.props.value) : n3.__;
  }
  function x3(t4, r4) {
    l.useDebugValue && l.useDebugValue(r4 ? r4(t4) : t4);
  }
  function P3(n3) {
    var u5 = d4(t3++, 10), i5 = h4();
    return u5.__ = n3, r3.componentDidCatch || (r3.componentDidCatch = function(n4, t4) {
      u5.__ && u5.__(n4, t4), i5[1](n4);
    }), [i5[0], function() {
      i5[1](void 0);
    }];
  }
  function V() {
    var n3 = d4(t3++, 11);
    if (!n3.__) {
      for (var u5 = r3.__v; null !== u5 && !u5.__m && null !== u5.__; )
        u5 = u5.__;
      var i5 = u5.__m || (u5.__m = [0, 0]);
      n3.__ = "P" + i5[0] + "-" + i5[1]++;
    }
    return n3.__;
  }
  function b3() {
    for (var t4; t4 = f4.shift(); )
      if (t4.__P && t4.__H)
        try {
          t4.__H.__h.forEach(k3), t4.__H.__h.forEach(w3), t4.__H.__h = [];
        } catch (r4) {
          t4.__H.__h = [], l.__e(r4, t4.__v);
        }
  }
  function j3(n3) {
    var t4, r4 = function() {
      clearTimeout(u5), g3 && cancelAnimationFrame(t4), setTimeout(n3);
    }, u5 = setTimeout(r4, 100);
    g3 && (t4 = requestAnimationFrame(r4));
  }
  function k3(n3) {
    var t4 = r3, u5 = n3.__c;
    "function" == typeof u5 && (n3.__c = void 0, u5()), r3 = t4;
  }
  function w3(n3) {
    var t4 = r3;
    n3.__c = n3.__(), r3 = t4;
  }
  function z3(n3, t4) {
    return !n3 || n3.length !== t4.length || t4.some(function(t5, r4) {
      return t5 !== n3[r4];
    });
  }
  function B3(n3, t4) {
    return "function" == typeof t4 ? t4(n3) : t4;
  }
  var t3, r3, u4, i4, o4, f4, c4, e2, a4, v4, l4, m3, g3;
  var init_hooks_module = __esm({
    "src/client/node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o4 = 0;
      f4 = [];
      c4 = [];
      e2 = l.__b;
      a4 = l.__r;
      v4 = l.diffed;
      l4 = l.__c;
      m3 = l.unmount;
      l.__b = function(n3) {
        r3 = null, e2 && e2(n3);
      }, l.__r = function(n3) {
        a4 && a4(n3), t3 = 0;
        var i5 = (r3 = n3.__c).__H;
        i5 && (u4 === r3 ? (i5.__h = [], r3.__h = [], i5.__.forEach(function(n4) {
          n4.__N && (n4.__ = n4.__N), n4.__V = c4, n4.__N = n4.i = void 0;
        })) : (i5.__h.forEach(k3), i5.__h.forEach(w3), i5.__h = [])), u4 = r3;
      }, l.diffed = function(t4) {
        v4 && v4(t4);
        var o6 = t4.__c;
        o6 && o6.__H && (o6.__H.__h.length && (1 !== f4.push(o6) && i4 === l.requestAnimationFrame || ((i4 = l.requestAnimationFrame) || j3)(b3)), o6.__H.__.forEach(function(n3) {
          n3.i && (n3.__H = n3.i), n3.__V !== c4 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c4;
        })), u4 = r3 = null;
      }, l.__c = function(t4, r4) {
        r4.some(function(t5) {
          try {
            t5.__h.forEach(k3), t5.__h = t5.__h.filter(function(n3) {
              return !n3.__ || w3(n3);
            });
          } catch (u5) {
            r4.some(function(n3) {
              n3.__h && (n3.__h = []);
            }), r4 = [], l.__e(u5, t5.__v);
          }
        }), l4 && l4(t4, r4);
      }, l.unmount = function(t4) {
        m3 && m3(t4);
        var r4, u5 = t4.__c;
        u5 && u5.__H && (u5.__H.__.forEach(function(n3) {
          try {
            k3(n3);
          } catch (n4) {
            r4 = n4;
          }
        }), u5.__H = void 0, r4 && l.__e(r4, u5.__v));
      };
      g3 = "function" == typeof requestAnimationFrame;
    }
  });

  // src/client/node_modules/preact/compat/dist/compat.js
  var require_compat = __commonJS({
    "src/client/node_modules/preact/compat/dist/compat.js"(exports) {
      var n3 = (init_preact_module(), __toCommonJS(preact_module_exports));
      var t4 = (init_hooks_module(), __toCommonJS(hooks_module_exports));
      function e3(n4, t5) {
        for (var e4 in t5)
          n4[e4] = t5[e4];
        return n4;
      }
      function r4(n4, t5) {
        for (var e4 in n4)
          if ("__source" !== e4 && !(e4 in t5))
            return true;
        for (var r5 in t5)
          if ("__source" !== r5 && n4[r5] !== t5[r5])
            return true;
        return false;
      }
      function u5(n4, t5) {
        return n4 === t5 && (0 !== n4 || 1 / n4 == 1 / t5) || n4 != n4 && t5 != t5;
      }
      function o6(n4) {
        this.props = n4;
      }
      function i5(t5, e4) {
        function u6(n4) {
          var t6 = this.props.ref, u7 = t6 == n4.ref;
          return !u7 && t6 && (t6.call ? t6(null) : t6.current = null), e4 ? !e4(this.props, n4) || !u7 : r4(this.props, n4);
        }
        function o7(e5) {
          return this.shouldComponentUpdate = u6, n3.createElement(t5, e5);
        }
        return o7.displayName = "Memo(" + (t5.displayName || t5.name) + ")", o7.prototype.isReactComponent = true, o7.__f = true, o7;
      }
      (o6.prototype = new n3.Component()).isPureReactComponent = true, o6.prototype.shouldComponentUpdate = function(n4, t5) {
        return r4(this.props, n4) || r4(this.state, t5);
      };
      var c5 = n3.options.__b;
      n3.options.__b = function(n4) {
        n4.type && n4.type.__f && n4.ref && (n4.props.ref = n4.ref, n4.ref = null), c5 && c5(n4);
      };
      var l5 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      function f5(n4) {
        function t5(t6) {
          var r5 = e3({}, t6);
          return delete r5.ref, n4(r5, t6.ref || null);
        }
        return t5.$$typeof = l5, t5.render = t5, t5.prototype.isReactComponent = t5.__f = true, t5.displayName = "ForwardRef(" + (n4.displayName || n4.name) + ")", t5;
      }
      var a5 = function(t5, e4) {
        return null == t5 ? null : n3.toChildArray(n3.toChildArray(t5).map(e4));
      };
      var s5 = { map: a5, forEach: a5, count: function(t5) {
        return t5 ? n3.toChildArray(t5).length : 0;
      }, only: function(t5) {
        var e4 = n3.toChildArray(t5);
        if (1 !== e4.length)
          throw "Children.only";
        return e4[0];
      }, toArray: n3.toChildArray };
      var p5 = n3.options.__e;
      n3.options.__e = function(n4, t5, e4, r5) {
        if (n4.then) {
          for (var u6, o7 = t5; o7 = o7.__; )
            if ((u6 = o7.__c) && u6.__c)
              return null == t5.__e && (t5.__e = e4.__e, t5.__k = e4.__k), u6.__c(n4, t5);
        }
        p5(n4, t5, e4, r5);
      };
      var h5 = n3.options.unmount;
      function v5(n4, t5, r5) {
        return n4 && (n4.__c && n4.__c.__H && (n4.__c.__H.__.forEach(function(n5) {
          "function" == typeof n5.__c && n5.__c();
        }), n4.__c.__H = null), null != (n4 = e3({}, n4)).__c && (n4.__c.__P === r5 && (n4.__c.__P = t5), n4.__c = null), n4.__k = n4.__k && n4.__k.map(function(n5) {
          return v5(n5, t5, r5);
        })), n4;
      }
      function d5(n4, t5, e4) {
        return n4 && (n4.__v = null, n4.__k = n4.__k && n4.__k.map(function(n5) {
          return d5(n5, t5, e4);
        }), n4.__c && n4.__c.__P === t5 && (n4.__e && e4.insertBefore(n4.__e, n4.__d), n4.__c.__e = true, n4.__c.__P = e4)), n4;
      }
      function m4() {
        this.__u = 0, this.t = null, this.__b = null;
      }
      function x4(n4) {
        var t5 = n4.__.__c;
        return t5 && t5.__a && t5.__a(n4);
      }
      function b4(t5) {
        var e4, r5, u6;
        function o7(o8) {
          if (e4 || (e4 = t5()).then(function(n4) {
            r5 = n4.default || n4;
          }, function(n4) {
            u6 = n4;
          }), u6)
            throw u6;
          if (!r5)
            throw e4;
          return n3.createElement(r5, o8);
        }
        return o7.displayName = "Lazy", o7.__f = true, o7;
      }
      function _5() {
        this.u = null, this.o = null;
      }
      n3.options.unmount = function(n4) {
        var t5 = n4.__c;
        t5 && t5.__R && t5.__R(), t5 && true === n4.__h && (n4.type = null), h5 && h5(n4);
      }, (m4.prototype = new n3.Component()).__c = function(n4, t5) {
        var e4 = t5.__c, r5 = this;
        null == r5.t && (r5.t = []), r5.t.push(e4);
        var u6 = x4(r5.__v), o7 = false, i6 = function() {
          o7 || (o7 = true, e4.__R = null, u6 ? u6(c6) : c6());
        };
        e4.__R = i6;
        var c6 = function() {
          if (!--r5.__u) {
            if (r5.state.__a) {
              var n5 = r5.state.__a;
              r5.__v.__k[0] = d5(n5, n5.__c.__P, n5.__c.__O);
            }
            var t6;
            for (r5.setState({ __a: r5.__b = null }); t6 = r5.t.pop(); )
              t6.forceUpdate();
          }
        }, l6 = true === t5.__h;
        r5.__u++ || l6 || r5.setState({ __a: r5.__b = r5.__v.__k[0] }), n4.then(i6, i6);
      }, m4.prototype.componentWillUnmount = function() {
        this.t = [];
      }, m4.prototype.render = function(t5, e4) {
        if (this.__b) {
          if (this.__v.__k) {
            var r5 = document.createElement("div"), u6 = this.__v.__k[0].__c;
            this.__v.__k[0] = v5(this.__b, r5, u6.__O = u6.__P);
          }
          this.__b = null;
        }
        var o7 = e4.__a && n3.createElement(n3.Fragment, null, t5.fallback);
        return o7 && (o7.__h = null), [n3.createElement(n3.Fragment, null, e4.__a ? null : t5.children), o7];
      };
      var y5 = function(n4, t5, e4) {
        if (++e4[1] === e4[0] && n4.o.delete(t5), n4.props.revealOrder && ("t" !== n4.props.revealOrder[0] || !n4.o.size))
          for (e4 = n4.u; e4; ) {
            for (; e4.length > 3; )
              e4.pop()();
            if (e4[1] < e4[0])
              break;
            n4.u = e4 = e4[2];
          }
      };
      function g4(n4) {
        return this.getChildContext = function() {
          return n4.context;
        }, n4.children;
      }
      function S3(t5) {
        var e4 = this, r5 = t5.i;
        e4.componentWillUnmount = function() {
          n3.render(null, e4.l), e4.l = null, e4.i = null;
        }, e4.i && e4.i !== r5 && e4.componentWillUnmount(), t5.__v ? (e4.l || (e4.i = r5, e4.l = { nodeType: 1, parentNode: r5, childNodes: [], appendChild: function(n4) {
          this.childNodes.push(n4), e4.i.appendChild(n4);
        }, insertBefore: function(n4, t6) {
          this.childNodes.push(n4), e4.i.appendChild(n4);
        }, removeChild: function(n4) {
          this.childNodes.splice(this.childNodes.indexOf(n4) >>> 1, 1), e4.i.removeChild(n4);
        } }), n3.render(n3.createElement(g4, { context: e4.context }, t5.__v), e4.l)) : e4.l && e4.componentWillUnmount();
      }
      function C2(t5, e4) {
        var r5 = n3.createElement(S3, { __v: t5, i: e4 });
        return r5.containerInfo = e4, r5;
      }
      (_5.prototype = new n3.Component()).__a = function(n4) {
        var t5 = this, e4 = x4(t5.__v), r5 = t5.o.get(n4);
        return r5[0]++, function(u6) {
          var o7 = function() {
            t5.props.revealOrder ? (r5.push(u6), y5(t5, n4, r5)) : u6();
          };
          e4 ? e4(o7) : o7();
        };
      }, _5.prototype.render = function(t5) {
        this.u = null, this.o = /* @__PURE__ */ new Map();
        var e4 = n3.toChildArray(t5.children);
        t5.revealOrder && "b" === t5.revealOrder[0] && e4.reverse();
        for (var r5 = e4.length; r5--; )
          this.o.set(e4[r5], this.u = [1, 0, this.u]);
        return t5.children;
      }, _5.prototype.componentDidUpdate = _5.prototype.componentDidMount = function() {
        var n4 = this;
        this.o.forEach(function(t5, e4) {
          y5(n4, e4, t5);
        });
      };
      var E3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      var O3 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      var w4 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
      var R2 = /[A-Z0-9]/g;
      var j4 = "undefined" != typeof document;
      var N3 = function(n4) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n4);
      };
      function k4(t5, e4, r5) {
        return null == e4.__k && (e4.textContent = ""), n3.render(t5, e4), "function" == typeof r5 && r5(), t5 ? t5.__c : null;
      }
      function A4(t5, e4, r5) {
        return n3.hydrate(t5, e4), "function" == typeof r5 && r5(), t5 ? t5.__c : null;
      }
      n3.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t5) {
        Object.defineProperty(n3.Component.prototype, t5, { configurable: true, get: function() {
          return this["UNSAFE_" + t5];
        }, set: function(n4) {
          Object.defineProperty(this, t5, { configurable: true, writable: true, value: n4 });
        } });
      });
      var T3 = n3.options.event;
      function I3() {
      }
      function L3() {
        return this.cancelBubble;
      }
      function U2() {
        return this.defaultPrevented;
      }
      n3.options.event = function(n4) {
        return T3 && (n4 = T3(n4)), n4.persist = I3, n4.isPropagationStopped = L3, n4.isDefaultPrevented = U2, n4.nativeEvent = n4;
      };
      var D3;
      var F4 = { enumerable: false, configurable: true, get: function() {
        return this.class;
      } };
      var M3 = n3.options.vnode;
      n3.options.vnode = function(t5) {
        "string" == typeof t5.type && function(t6) {
          var e4 = t6.props, r5 = t6.type, u6 = {};
          for (var o7 in e4) {
            var i6 = e4[o7];
            if (!("value" === o7 && "defaultValue" in e4 && null == i6 || j4 && "children" === o7 && "noscript" === r5 || "class" === o7 || "className" === o7)) {
              var c6 = o7.toLowerCase();
              "defaultValue" === o7 && "value" in e4 && null == e4.value ? o7 = "value" : "download" === o7 && true === i6 ? i6 = "" : "ondoubleclick" === c6 ? o7 = "ondblclick" : "onchange" !== c6 || "input" !== r5 && "textarea" !== r5 || N3(e4.type) ? "onfocus" === c6 ? o7 = "onfocusin" : "onblur" === c6 ? o7 = "onfocusout" : w4.test(o7) ? o7 = c6 : -1 === r5.indexOf("-") && O3.test(o7) ? o7 = o7.replace(R2, "-$&").toLowerCase() : null === i6 && (i6 = void 0) : c6 = o7 = "oninput", "oninput" === c6 && u6[o7 = c6] && (o7 = "oninputCapture"), u6[o7] = i6;
            }
          }
          "select" == r5 && u6.multiple && Array.isArray(u6.value) && (u6.value = n3.toChildArray(e4.children).forEach(function(n4) {
            n4.props.selected = -1 != u6.value.indexOf(n4.props.value);
          })), "select" == r5 && null != u6.defaultValue && (u6.value = n3.toChildArray(e4.children).forEach(function(n4) {
            n4.props.selected = u6.multiple ? -1 != u6.defaultValue.indexOf(n4.props.value) : u6.defaultValue == n4.props.value;
          })), e4.class && !e4.className ? (u6.class = e4.class, Object.defineProperty(u6, "className", F4)) : (e4.className && !e4.class || e4.class && e4.className) && (u6.class = u6.className = e4.className), t6.props = u6;
        }(t5), t5.$$typeof = E3, M3 && M3(t5);
      };
      var V2 = n3.options.__r;
      n3.options.__r = function(n4) {
        V2 && V2(n4), D3 = n4.__c;
      };
      var W2 = n3.options.diffed;
      n3.options.diffed = function(n4) {
        W2 && W2(n4);
        var t5 = n4.props, e4 = n4.__e;
        null != e4 && "textarea" === n4.type && "value" in t5 && t5.value !== e4.value && (e4.value = null == t5.value ? "" : t5.value), D3 = null;
      };
      var P4 = { ReactCurrentDispatcher: { current: { readContext: function(n4) {
        return D3.__n[n4.__c].props.value;
      } } } };
      function z4(t5) {
        return n3.createElement.bind(null, t5);
      }
      function B4(n4) {
        return !!n4 && n4.$$typeof === E3;
      }
      function q4(t5) {
        return B4(t5) ? n3.cloneElement.apply(null, arguments) : t5;
      }
      function H3(t5) {
        return !!t5.__k && (n3.render(null, t5), true);
      }
      function Z2(n4) {
        return n4 && (n4.base || 1 === n4.nodeType && n4) || null;
      }
      var Y2 = function(n4, t5) {
        return n4(t5);
      };
      var $2 = function(n4, t5) {
        return n4(t5);
      };
      var G2 = n3.Fragment;
      function J(n4) {
        n4();
      }
      function K(n4) {
        return n4;
      }
      function Q2() {
        return [false, J];
      }
      var X2 = t4.useLayoutEffect;
      function nn2(n4, e4) {
        var r5 = e4(), o7 = t4.useState({ p: { __: r5, h: e4 } }), i6 = o7[0].p, c6 = o7[1];
        return t4.useLayoutEffect(function() {
          i6.__ = r5, i6.h = e4, u5(i6.__, e4()) || c6({ p: i6 });
        }, [n4, r5, e4]), t4.useEffect(function() {
          return u5(i6.__, i6.h()) || c6({ p: i6 }), n4(function() {
            u5(i6.__, i6.h()) || c6({ p: i6 });
          });
        }, [n4]), r5;
      }
      var tn2 = { useState: t4.useState, useId: t4.useId, useReducer: t4.useReducer, useEffect: t4.useEffect, useLayoutEffect: t4.useLayoutEffect, useInsertionEffect: X2, useTransition: Q2, useDeferredValue: K, useSyncExternalStore: nn2, startTransition: J, useRef: t4.useRef, useImperativeHandle: t4.useImperativeHandle, useMemo: t4.useMemo, useCallback: t4.useCallback, useContext: t4.useContext, useDebugValue: t4.useDebugValue, version: "17.0.2", Children: s5, render: k4, hydrate: A4, unmountComponentAtNode: H3, createPortal: C2, createElement: n3.createElement, createContext: n3.createContext, createFactory: z4, cloneElement: q4, createRef: n3.createRef, Fragment: n3.Fragment, isValidElement: B4, findDOMNode: Z2, Component: n3.Component, PureComponent: o6, memo: i5, forwardRef: f5, flushSync: $2, unstable_batchedUpdates: Y2, StrictMode: G2, Suspense: m4, SuspenseList: _5, lazy: b4, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: P4 };
      Object.defineProperty(exports, "Component", { enumerable: true, get: function() {
        return n3.Component;
      } }), Object.defineProperty(exports, "Fragment", { enumerable: true, get: function() {
        return n3.Fragment;
      } }), Object.defineProperty(exports, "createContext", { enumerable: true, get: function() {
        return n3.createContext;
      } }), Object.defineProperty(exports, "createElement", { enumerable: true, get: function() {
        return n3.createElement;
      } }), Object.defineProperty(exports, "createRef", { enumerable: true, get: function() {
        return n3.createRef;
      } }), exports.Children = s5, exports.PureComponent = o6, exports.StrictMode = G2, exports.Suspense = m4, exports.SuspenseList = _5, exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P4, exports.cloneElement = q4, exports.createFactory = z4, exports.createPortal = C2, exports.default = tn2, exports.findDOMNode = Z2, exports.flushSync = $2, exports.forwardRef = f5, exports.hydrate = A4, exports.isValidElement = B4, exports.lazy = b4, exports.memo = i5, exports.render = k4, exports.startTransition = J, exports.unmountComponentAtNode = H3, exports.unstable_batchedUpdates = Y2, exports.useDeferredValue = K, exports.useInsertionEffect = X2, exports.useSyncExternalStore = nn2, exports.useTransition = Q2, exports.version = "17.0.2", Object.keys(t4).forEach(function(n4) {
        "default" === n4 || exports.hasOwnProperty(n4) || Object.defineProperty(exports, n4, { enumerable: true, get: function() {
          return t4[n4];
        } });
      });
    }
  });

  // src/client/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
  var require_use_sync_external_store_shim_development = __commonJS({
    "src/client/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var React3 = require_compat();
          var ReactSharedInternals = React3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          function is(x4, y5) {
            return x4 === y5 && (x4 !== 0 || 1 / x4 === 1 / y5) || x4 !== x4 && y5 !== y5;
          }
          var objectIs = typeof Object.is === "function" ? Object.is : is;
          var useState = React3.useState, useEffect2 = React3.useEffect, useLayoutEffect2 = React3.useLayoutEffect, useDebugValue2 = React3.useDebugValue;
          var didWarnOld18Alpha = false;
          var didWarnUncachedGetSnapshot = false;
          function useSyncExternalStore3(subscribe, getSnapshot, getServerSnapshot) {
            {
              if (!didWarnOld18Alpha) {
                if (React3.startTransition !== void 0) {
                  didWarnOld18Alpha = true;
                  error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
                }
              }
            }
            var value = getSnapshot();
            {
              if (!didWarnUncachedGetSnapshot) {
                var cachedValue = getSnapshot();
                if (!objectIs(value, cachedValue)) {
                  error("The result of getSnapshot should be cached to avoid an infinite loop");
                  didWarnUncachedGetSnapshot = true;
                }
              }
            }
            var _useState = useState({
              inst: {
                value,
                getSnapshot
              }
            }), inst = _useState[0].inst, forceUpdate = _useState[1];
            useLayoutEffect2(function() {
              inst.value = value;
              inst.getSnapshot = getSnapshot;
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            }, [subscribe, value, getSnapshot]);
            useEffect2(function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
              var handleStoreChange = function() {
                if (checkIfSnapshotChanged(inst)) {
                  forceUpdate({
                    inst
                  });
                }
              };
              return subscribe(handleStoreChange);
            }, [subscribe]);
            useDebugValue2(value);
            return value;
          }
          function checkIfSnapshotChanged(inst) {
            var latestGetSnapshot = inst.getSnapshot;
            var prevValue = inst.value;
            try {
              var nextValue = latestGetSnapshot();
              return !objectIs(prevValue, nextValue);
            } catch (error2) {
              return true;
            }
          }
          function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
            return getSnapshot();
          }
          var canUseDOM2 = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
          var isServerEnvironment = !canUseDOM2;
          var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore3;
          var useSyncExternalStore$2 = React3.useSyncExternalStore !== void 0 ? React3.useSyncExternalStore : shim;
          exports.useSyncExternalStore = useSyncExternalStore$2;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // src/client/node_modules/use-sync-external-store/shim/index.js
  var require_shim = __commonJS({
    "src/client/node_modules/use-sync-external-store/shim/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_use_sync_external_store_shim_development();
      }
    }
  });

  // src/client/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
  var require_with_selector_development = __commonJS({
    "src/client/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var React3 = require_compat();
          var shim = require_shim();
          function is(x4, y5) {
            return x4 === y5 && (x4 !== 0 || 1 / x4 === 1 / y5) || x4 !== x4 && y5 !== y5;
          }
          var objectIs = typeof Object.is === "function" ? Object.is : is;
          var useSyncExternalStore3 = shim.useSyncExternalStore;
          var useRef2 = React3.useRef, useEffect2 = React3.useEffect, useMemo3 = React3.useMemo, useDebugValue2 = React3.useDebugValue;
          function useSyncExternalStoreWithSelector3(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
            var instRef = useRef2(null);
            var inst;
            if (instRef.current === null) {
              inst = {
                hasValue: false,
                value: null
              };
              instRef.current = inst;
            } else {
              inst = instRef.current;
            }
            var _useMemo = useMemo3(function() {
              var hasMemo = false;
              var memoizedSnapshot;
              var memoizedSelection;
              var memoizedSelector = function(nextSnapshot) {
                if (!hasMemo) {
                  hasMemo = true;
                  memoizedSnapshot = nextSnapshot;
                  var _nextSelection = selector(nextSnapshot);
                  if (isEqual !== void 0) {
                    if (inst.hasValue) {
                      var currentSelection = inst.value;
                      if (isEqual(currentSelection, _nextSelection)) {
                        memoizedSelection = currentSelection;
                        return currentSelection;
                      }
                    }
                  }
                  memoizedSelection = _nextSelection;
                  return _nextSelection;
                }
                var prevSnapshot = memoizedSnapshot;
                var prevSelection = memoizedSelection;
                if (objectIs(prevSnapshot, nextSnapshot)) {
                  return prevSelection;
                }
                var nextSelection = selector(nextSnapshot);
                if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
                  return prevSelection;
                }
                memoizedSnapshot = nextSnapshot;
                memoizedSelection = nextSelection;
                return nextSelection;
              };
              var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
              var getSnapshotWithSelector = function() {
                return memoizedSelector(getSnapshot());
              };
              var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              };
              return [getSnapshotWithSelector, getServerSnapshotWithSelector];
            }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
            var value = useSyncExternalStore3(subscribe, getSelection, getServerSelection);
            useEffect2(function() {
              inst.hasValue = true;
              inst.value = value;
            }, [value]);
            useDebugValue2(value);
            return value;
          }
          exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector3;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // src/client/node_modules/use-sync-external-store/shim/with-selector.js
  var require_with_selector = __commonJS({
    "src/client/node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_with_selector_development();
      }
    }
  });

  // src/client/node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "src/client/node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType2(type) {
            return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer2(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.AsyncMode = AsyncMode;
          exports.ConcurrentMode = ConcurrentMode;
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer2;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType2;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // src/client/node_modules/hoist-non-react-statics/node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "src/client/node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development();
      }
    }
  });

  // src/client/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
  var require_hoist_non_react_statics_cjs = __commonJS({
    "src/client/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
      "use strict";
      var reactIs = require_react_is();
      var REACT_STATICS = {
        childContextTypes: true,
        contextType: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromError: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
      };
      var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
      };
      var FORWARD_REF_STATICS = {
        "$$typeof": true,
        render: true,
        defaultProps: true,
        displayName: true,
        propTypes: true
      };
      var MEMO_STATICS = {
        "$$typeof": true,
        compare: true,
        defaultProps: true,
        displayName: true,
        propTypes: true,
        type: true
      };
      var TYPE_STATICS = {};
      TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
      TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
      function getStatics(component) {
        if (reactIs.isMemo(component)) {
          return MEMO_STATICS;
        }
        return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
      }
      var defineProperty = Object.defineProperty;
      var getOwnPropertyNames = Object.getOwnPropertyNames;
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var getPrototypeOf = Object.getPrototypeOf;
      var objectPrototype = Object.prototype;
      function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== "string") {
          if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
              hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
          }
          var keys = getOwnPropertyNames(sourceComponent);
          if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
          }
          var targetStatics = getStatics(targetComponent);
          var sourceStatics = getStatics(sourceComponent);
          for (var i5 = 0; i5 < keys.length; ++i5) {
            var key = keys[i5];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
              var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
              try {
                defineProperty(targetComponent, key, descriptor);
              } catch (e3) {
              }
            }
          }
        }
        return targetComponent;
      }
      module.exports = hoistNonReactStatics;
    }
  });

  // src/client/node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development2 = __commonJS({
    "src/client/node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType2(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                    case REACT_SUSPENSE_LIST_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_SERVER_CONTEXT_TYPE:
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          var hasWarnedAboutDeprecatedIsConcurrentMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
              }
            }
            return false;
          }
          function isConcurrentMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
                hasWarnedAboutDeprecatedIsConcurrentMode = true;
                console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
              }
            }
            return false;
          }
          function isContextConsumer2(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          function isSuspenseList(object) {
            return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
          }
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.SuspenseList = SuspenseList;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer2;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isSuspenseList = isSuspenseList;
          exports.isValidElementType = isValidElementType2;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // src/client/node_modules/react-is/index.js
  var require_react_is2 = __commonJS({
    "src/client/node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development2();
      }
    }
  });

  // src/client/node_modules/preact/debug/dist/debug.module.js
  init_preact_module();

  // src/client/node_modules/preact/devtools/dist/devtools.module.js
  init_preact_module();
  "undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.13.2", l, { Fragment: _, Component: k });

  // src/client/node_modules/preact/debug/dist/debug.module.js
  var o2 = {};
  function a2(e3) {
    return e3.type === _ ? "Fragment" : "function" == typeof e3.type ? e3.type.displayName || e3.type.name : "string" == typeof e3.type ? e3.type : "#text";
  }
  var i2 = [];
  var c2 = [];
  function s2() {
    return i2.length > 0 ? i2[i2.length - 1] : null;
  }
  var u2 = false;
  function l2(e3) {
    return "function" == typeof e3.type && e3.type != _;
  }
  function f2(n3) {
    for (var e3 = [n3], t4 = n3; null != t4.__o; )
      e3.push(t4.__o), t4 = t4.__o;
    return e3.reduce(function(n4, e4) {
      n4 += "  in " + a2(e4);
      var t5 = e4.__source;
      return t5 ? n4 += " (at " + t5.fileName + ":" + t5.lineNumber + ")" : u2 || (u2 = true, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), n4 + "\n";
    }, "");
  }
  var p2 = "function" == typeof WeakMap;
  function d2(n3) {
    return n3 ? "function" == typeof n3.type ? d2(n3.__) : n3 : {};
  }
  var h2 = k.prototype.setState;
  k.prototype.setState = function(n3, e3) {
    return null == this.__v && null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + f2(s2())), h2.call(this, n3, e3);
  };
  var y2 = k.prototype.forceUpdate;
  function v2(n3) {
    var e3 = n3.props, t4 = a2(n3), o6 = "";
    for (var r4 in e3)
      if (e3.hasOwnProperty(r4) && "children" !== r4) {
        var i5 = e3[r4];
        "function" == typeof i5 && (i5 = "function " + (i5.displayName || i5.name) + "() {}"), i5 = Object(i5) !== i5 || i5.toString ? i5 + "" : Object.prototype.toString.call(i5), o6 += " " + r4 + "=" + JSON.stringify(i5);
      }
    var c5 = e3.children;
    return "<" + t4 + o6 + (c5 && c5.length ? ">..</" + t4 + ">" : " />");
  }
  k.prototype.forceUpdate = function(n3) {
    return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + f2(s2())) : null == this.__P && console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + f2(this.__v)), y2.call(this, n3);
  }, function() {
    !function() {
      var n4 = l.__b, t5 = l.diffed, o6 = l.__, r5 = l.vnode, a5 = l.__r;
      l.diffed = function(n5) {
        l2(n5) && c2.pop(), i2.pop(), t5 && t5(n5);
      }, l.__b = function(e3) {
        l2(e3) && i2.push(e3), n4 && n4(e3);
      }, l.__ = function(n5, e3) {
        c2 = [], o6 && o6(n5, e3);
      }, l.vnode = function(n5) {
        n5.__o = c2.length > 0 ? c2[c2.length - 1] : null, r5 && r5(n5);
      }, l.__r = function(n5) {
        l2(n5) && c2.push(n5), a5 && a5(n5);
      };
    }();
    var n3 = false, t4 = l.__b, r4 = l.diffed, s5 = l.vnode, u5 = l.__e, h5 = l.__, y5 = l.__h, m4 = p2 ? { useEffect: /* @__PURE__ */ new WeakMap(), useLayoutEffect: /* @__PURE__ */ new WeakMap(), lazyPropTypes: /* @__PURE__ */ new WeakMap() } : null, b4 = [];
    l.__e = function(n4, e3, t5, o6) {
      if (e3 && e3.__c && "function" == typeof n4.then) {
        var r5 = n4;
        n4 = new Error("Missing Suspense. The throwing component was: " + a2(e3));
        for (var i5 = e3; i5; i5 = i5.__)
          if (i5.__c && i5.__c.__c) {
            n4 = r5;
            break;
          }
        if (n4 instanceof Error)
          throw n4;
      }
      try {
        (o6 = o6 || {}).componentStack = f2(e3), u5(n4, e3, t5, o6), "function" != typeof n4.then && setTimeout(function() {
          throw n4;
        });
      } catch (n5) {
        throw n5;
      }
    }, l.__ = function(n4, e3) {
      if (!e3)
        throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
      var t5;
      switch (e3.nodeType) {
        case 1:
        case 11:
        case 9:
          t5 = true;
          break;
        default:
          t5 = false;
      }
      if (!t5) {
        var o6 = a2(n4);
        throw new Error("Expected a valid HTML node as a second argument to render.	Received " + e3 + " instead: render(<" + o6 + " />, " + e3 + ");");
      }
      h5 && h5(n4, e3);
    }, l.__b = function(e3) {
      var r5 = e3.type, i5 = d2(e3.__);
      if (n3 = true, void 0 === r5)
        throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + v2(e3) + "\n\n" + f2(e3));
      if (null != r5 && "object" == typeof r5) {
        if (void 0 !== r5.__k && void 0 !== r5.__e)
          throw new Error("Invalid type passed to createElement(): " + r5 + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + a2(e3) + " = " + v2(r5) + ";\n  let vnode = <My" + a2(e3) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + f2(e3));
        throw new Error("Invalid type passed to createElement(): " + (Array.isArray(r5) ? "array" : r5));
      }
      if ("thead" !== r5 && "tfoot" !== r5 && "tbody" !== r5 || "table" === i5.type ? "tr" === r5 && "thead" !== i5.type && "tfoot" !== i5.type && "tbody" !== i5.type && "table" !== i5.type ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + v2(e3) + "\n\n" + f2(e3)) : "td" === r5 && "tr" !== i5.type ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + v2(e3) + "\n\n" + f2(e3)) : "th" === r5 && "tr" !== i5.type && console.error("Improper nesting of table. Your <th> should have a <tr>." + v2(e3) + "\n\n" + f2(e3)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + v2(e3) + "\n\n" + f2(e3)), void 0 !== e3.ref && "function" != typeof e3.ref && "object" != typeof e3.ref && !("$$typeof" in e3))
        throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [` + typeof e3.ref + "] instead\n" + v2(e3) + "\n\n" + f2(e3));
      if ("string" == typeof e3.type) {
        for (var c5 in e3.props)
          if ("o" === c5[0] && "n" === c5[1] && "function" != typeof e3.props[c5] && null != e3.props[c5])
            throw new Error(`Component's "` + c5 + '" property should be a function, but got [' + typeof e3.props[c5] + "] instead\n" + v2(e3) + "\n\n" + f2(e3));
      }
      if ("function" == typeof e3.type && e3.type.propTypes) {
        if ("Lazy" === e3.type.displayName && m4 && !m4.lazyPropTypes.has(e3.type)) {
          var s6 = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
          try {
            var u6 = e3.type();
            m4.lazyPropTypes.set(e3.type, true), console.warn(s6 + "Component wrapped in lazy() is " + a2(u6));
          } catch (n4) {
            console.warn(s6 + "We will log the wrapped component's name once it is loaded.");
          }
        }
        var l5 = e3.props;
        e3.type.__f && delete (l5 = function(n4, e4) {
          for (var t5 in e4)
            n4[t5] = e4[t5];
          return n4;
        }({}, l5)).ref, function(n4, e4, t5, r6, a5) {
          Object.keys(n4).forEach(function(t6) {
            var i6;
            try {
              i6 = n4[t6](e4, t6, r6, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (n5) {
              i6 = n5;
            }
            i6 && !(i6.message in o2) && (o2[i6.message] = true, console.error("Failed prop type: " + i6.message + (a5 && "\n" + a5() || "")));
          });
        }(e3.type.propTypes, l5, 0, a2(e3), function() {
          return f2(e3);
        });
      }
      t4 && t4(e3);
    }, l.__h = function(e3, t5, o6) {
      if (!e3 || !n3)
        throw new Error("Hook can only be invoked from render methods.");
      y5 && y5(e3, t5, o6);
    };
    var w4 = function(n4, e3) {
      return { get: function() {
        var t5 = "get" + n4 + e3;
        b4 && b4.indexOf(t5) < 0 && (b4.push(t5), console.warn("getting vnode." + n4 + " is deprecated, " + e3));
      }, set: function() {
        var t5 = "set" + n4 + e3;
        b4 && b4.indexOf(t5) < 0 && (b4.push(t5), console.warn("setting vnode." + n4 + " is not allowed, " + e3));
      } };
    }, g4 = { nodeName: w4("nodeName", "use vnode.type"), attributes: w4("attributes", "use vnode.props"), children: w4("children", "use vnode.props.children") }, E3 = Object.create({}, g4);
    l.vnode = function(n4) {
      var e3 = n4.props;
      if (null !== n4.type && null != e3 && ("__source" in e3 || "__self" in e3)) {
        var t5 = n4.props = {};
        for (var o6 in e3) {
          var r5 = e3[o6];
          "__source" === o6 ? n4.__source = r5 : "__self" === o6 ? n4.__self = r5 : t5[o6] = r5;
        }
      }
      n4.__proto__ = E3, s5 && s5(n4);
    }, l.diffed = function(e3) {
      if (e3.__k && e3.__k.forEach(function(n4) {
        if ("object" == typeof n4 && n4 && void 0 === n4.type) {
          var t6 = Object.keys(n4).join(",");
          throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + t6 + "}.\n\n" + f2(e3));
        }
      }), n3 = false, r4 && r4(e3), null != e3.__k)
        for (var t5 = [], o6 = 0; o6 < e3.__k.length; o6++) {
          var a5 = e3.__k[o6];
          if (a5 && null != a5.key) {
            var i5 = a5.key;
            if (-1 !== t5.indexOf(i5)) {
              console.error('Following component has two or more children with the same key attribute: "' + i5 + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + v2(e3) + "\n\n" + f2(e3));
              break;
            }
            t5.push(i5);
          }
        }
    };
  }();

  // src/client/node_modules/immer/dist/immer.esm.mjs
  function n2(n3) {
    for (var r4 = arguments.length, t4 = Array(r4 > 1 ? r4 - 1 : 0), e3 = 1; e3 < r4; e3++)
      t4[e3 - 1] = arguments[e3];
    if (true) {
      var i5 = Y[n3], o6 = i5 ? "function" == typeof i5 ? i5.apply(null, t4) : i5 : "unknown error nr: " + n3;
      throw Error("[Immer] " + o6);
    }
    throw Error("[Immer] minified error nr: " + n3 + (t4.length ? " " + t4.map(function(n4) {
      return "'" + n4 + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
  }
  function r2(n3) {
    return !!n3 && !!n3[Q];
  }
  function t2(n3) {
    var r4;
    return !!n3 && (function(n4) {
      if (!n4 || "object" != typeof n4)
        return false;
      var r5 = Object.getPrototypeOf(n4);
      if (null === r5)
        return true;
      var t4 = Object.hasOwnProperty.call(r5, "constructor") && r5.constructor;
      return t4 === Object || "function" == typeof t4 && Function.toString.call(t4) === Z;
    }(n3) || Array.isArray(n3) || !!n3[L2] || !!(null === (r4 = n3.constructor) || void 0 === r4 ? void 0 : r4[L2]) || s3(n3) || v3(n3));
  }
  function i3(n3, r4, t4) {
    void 0 === t4 && (t4 = false), 0 === o3(n3) ? (t4 ? Object.keys : nn)(n3).forEach(function(e3) {
      t4 && "symbol" == typeof e3 || r4(e3, n3[e3], n3);
    }) : n3.forEach(function(t5, e3) {
      return r4(e3, t5, n3);
    });
  }
  function o3(n3) {
    var r4 = n3[Q];
    return r4 ? r4.i > 3 ? r4.i - 4 : r4.i : Array.isArray(n3) ? 1 : s3(n3) ? 2 : v3(n3) ? 3 : 0;
  }
  function u3(n3, r4) {
    return 2 === o3(n3) ? n3.has(r4) : Object.prototype.hasOwnProperty.call(n3, r4);
  }
  function a3(n3, r4) {
    return 2 === o3(n3) ? n3.get(r4) : n3[r4];
  }
  function f3(n3, r4, t4) {
    var e3 = o3(n3);
    2 === e3 ? n3.set(r4, t4) : 3 === e3 ? n3.add(t4) : n3[r4] = t4;
  }
  function c3(n3, r4) {
    return n3 === r4 ? 0 !== n3 || 1 / n3 == 1 / r4 : n3 != n3 && r4 != r4;
  }
  function s3(n3) {
    return X && n3 instanceof Map;
  }
  function v3(n3) {
    return q2 && n3 instanceof Set;
  }
  function p3(n3) {
    return n3.o || n3.t;
  }
  function l3(n3) {
    if (Array.isArray(n3))
      return Array.prototype.slice.call(n3);
    var r4 = rn(n3);
    delete r4[Q];
    for (var t4 = nn(r4), e3 = 0; e3 < t4.length; e3++) {
      var i5 = t4[e3], o6 = r4[i5];
      false === o6.writable && (o6.writable = true, o6.configurable = true), (o6.get || o6.set) && (r4[i5] = { configurable: true, writable: true, enumerable: o6.enumerable, value: n3[i5] });
    }
    return Object.create(Object.getPrototypeOf(n3), r4);
  }
  function d3(n3, e3) {
    return void 0 === e3 && (e3 = false), y3(n3) || r2(n3) || !t2(n3) || (o3(n3) > 1 && (n3.set = n3.add = n3.clear = n3.delete = h3), Object.freeze(n3), e3 && i3(n3, function(n4, r4) {
      return d3(r4, true);
    }, true)), n3;
  }
  function h3() {
    n2(2);
  }
  function y3(n3) {
    return null == n3 || "object" != typeof n3 || Object.isFrozen(n3);
  }
  function b2(r4) {
    var t4 = tn[r4];
    return t4 || n2(18, r4), t4;
  }
  function m2(n3, r4) {
    tn[n3] || (tn[n3] = r4);
  }
  function _2() {
    return U || n2(0), U;
  }
  function j2(n3, r4) {
    r4 && (b2("Patches"), n3.u = [], n3.s = [], n3.v = r4);
  }
  function g2(n3) {
    O2(n3), n3.p.forEach(S2), n3.p = null;
  }
  function O2(n3) {
    n3 === U && (U = n3.l);
  }
  function w2(n3) {
    return U = { p: [], l: U, h: n3, m: true, _: 0 };
  }
  function S2(n3) {
    var r4 = n3[Q];
    0 === r4.i || 1 === r4.i ? r4.j() : r4.g = true;
  }
  function P2(r4, e3) {
    e3._ = e3.p.length;
    var i5 = e3.p[0], o6 = void 0 !== r4 && r4 !== i5;
    return e3.h.O || b2("ES5").S(e3, r4, o6), o6 ? (i5[Q].P && (g2(e3), n2(4)), t2(r4) && (r4 = M2(e3, r4), e3.l || x2(e3, r4)), e3.u && b2("Patches").M(i5[Q].t, r4, e3.u, e3.s)) : r4 = M2(e3, i5, []), g2(e3), e3.u && e3.v(e3.u, e3.s), r4 !== H2 ? r4 : void 0;
  }
  function M2(n3, r4, t4) {
    if (y3(r4))
      return r4;
    var e3 = r4[Q];
    if (!e3)
      return i3(r4, function(i5, o7) {
        return A2(n3, e3, r4, i5, o7, t4);
      }, true), r4;
    if (e3.A !== n3)
      return r4;
    if (!e3.P)
      return x2(n3, e3.t, true), e3.t;
    if (!e3.I) {
      e3.I = true, e3.A._--;
      var o6 = 4 === e3.i || 5 === e3.i ? e3.o = l3(e3.k) : e3.o, u5 = o6, a5 = false;
      3 === e3.i && (u5 = new Set(o6), o6.clear(), a5 = true), i3(u5, function(r5, i5) {
        return A2(n3, e3, o6, r5, i5, t4, a5);
      }), x2(n3, o6, false), t4 && n3.u && b2("Patches").N(e3, t4, n3.u, n3.s);
    }
    return e3.o;
  }
  function A2(e3, i5, o6, a5, c5, s5, v5) {
    if (c5 === o6 && n2(5), r2(c5)) {
      var p5 = M2(e3, c5, s5 && i5 && 3 !== i5.i && !u3(i5.R, a5) ? s5.concat(a5) : void 0);
      if (f3(o6, a5, p5), !r2(p5))
        return;
      e3.m = false;
    } else
      v5 && o6.add(c5);
    if (t2(c5) && !y3(c5)) {
      if (!e3.h.D && e3._ < 1)
        return;
      M2(e3, c5), i5 && i5.A.l || x2(e3, c5);
    }
  }
  function x2(n3, r4, t4) {
    void 0 === t4 && (t4 = false), !n3.l && n3.h.D && n3.m && d3(r4, t4);
  }
  function z2(n3, r4) {
    var t4 = n3[Q];
    return (t4 ? p3(t4) : n3)[r4];
  }
  function I2(n3, r4) {
    if (r4 in n3)
      for (var t4 = Object.getPrototypeOf(n3); t4; ) {
        var e3 = Object.getOwnPropertyDescriptor(t4, r4);
        if (e3)
          return e3;
        t4 = Object.getPrototypeOf(t4);
      }
  }
  function k2(n3) {
    n3.P || (n3.P = true, n3.l && k2(n3.l));
  }
  function E2(n3) {
    n3.o || (n3.o = l3(n3.t));
  }
  function N2(n3, r4, t4) {
    var e3 = s3(r4) ? b2("MapSet").F(r4, t4) : v3(r4) ? b2("MapSet").T(r4, t4) : n3.O ? function(n4, r5) {
      var t5 = Array.isArray(n4), e4 = { i: t5 ? 1 : 0, A: r5 ? r5.A : _2(), P: false, I: false, R: {}, l: r5, t: n4, k: null, o: null, j: null, C: false }, i5 = e4, o6 = en;
      t5 && (i5 = [e4], o6 = on);
      var u5 = Proxy.revocable(i5, o6), a5 = u5.revoke, f5 = u5.proxy;
      return e4.k = f5, e4.j = a5, f5;
    }(r4, t4) : b2("ES5").J(r4, t4);
    return (t4 ? t4.A : _2()).p.push(e3), e3;
  }
  function R(e3) {
    return r2(e3) || n2(22, e3), function n3(r4) {
      if (!t2(r4))
        return r4;
      var e4, u5 = r4[Q], c5 = o3(r4);
      if (u5) {
        if (!u5.P && (u5.i < 4 || !b2("ES5").K(u5)))
          return u5.t;
        u5.I = true, e4 = D2(r4, c5), u5.I = false;
      } else
        e4 = D2(r4, c5);
      return i3(e4, function(r5, t4) {
        u5 && a3(u5.t, r5) === t4 || f3(e4, r5, n3(t4));
      }), 3 === c5 ? new Set(e4) : e4;
    }(e3);
  }
  function D2(n3, r4) {
    switch (r4) {
      case 2:
        return new Map(n3);
      case 3:
        return Array.from(n3);
    }
    return l3(n3);
  }
  function F2() {
    function t4(n3, r4) {
      var t5 = s5[n3];
      return t5 ? t5.enumerable = r4 : s5[n3] = t5 = { configurable: true, enumerable: r4, get: function() {
        var r5 = this[Q];
        return f5(r5), en.get(r5, n3);
      }, set: function(r5) {
        var t6 = this[Q];
        f5(t6), en.set(t6, n3, r5);
      } }, t5;
    }
    function e3(n3) {
      for (var r4 = n3.length - 1; r4 >= 0; r4--) {
        var t5 = n3[r4][Q];
        if (!t5.P)
          switch (t5.i) {
            case 5:
              a5(t5) && k2(t5);
              break;
            case 4:
              o6(t5) && k2(t5);
          }
      }
    }
    function o6(n3) {
      for (var r4 = n3.t, t5 = n3.k, e4 = nn(t5), i5 = e4.length - 1; i5 >= 0; i5--) {
        var o7 = e4[i5];
        if (o7 !== Q) {
          var a6 = r4[o7];
          if (void 0 === a6 && !u3(r4, o7))
            return true;
          var f6 = t5[o7], s6 = f6 && f6[Q];
          if (s6 ? s6.t !== a6 : !c3(f6, a6))
            return true;
        }
      }
      var v5 = !!r4[Q];
      return e4.length !== nn(r4).length + (v5 ? 0 : 1);
    }
    function a5(n3) {
      var r4 = n3.k;
      if (r4.length !== n3.t.length)
        return true;
      var t5 = Object.getOwnPropertyDescriptor(r4, r4.length - 1);
      if (t5 && !t5.get)
        return true;
      for (var e4 = 0; e4 < r4.length; e4++)
        if (!r4.hasOwnProperty(e4))
          return true;
      return false;
    }
    function f5(r4) {
      r4.g && n2(3, JSON.stringify(p3(r4)));
    }
    var s5 = {};
    m2("ES5", { J: function(n3, r4) {
      var e4 = Array.isArray(n3), i5 = function(n4, r5) {
        if (n4) {
          for (var e5 = Array(r5.length), i6 = 0; i6 < r5.length; i6++)
            Object.defineProperty(e5, "" + i6, t4(i6, true));
          return e5;
        }
        var o8 = rn(r5);
        delete o8[Q];
        for (var u5 = nn(o8), a6 = 0; a6 < u5.length; a6++) {
          var f6 = u5[a6];
          o8[f6] = t4(f6, n4 || !!o8[f6].enumerable);
        }
        return Object.create(Object.getPrototypeOf(r5), o8);
      }(e4, n3), o7 = { i: e4 ? 5 : 4, A: r4 ? r4.A : _2(), P: false, I: false, R: {}, l: r4, t: n3, k: i5, o: null, g: false, C: false };
      return Object.defineProperty(i5, Q, { value: o7, writable: true }), i5;
    }, S: function(n3, t5, o7) {
      o7 ? r2(t5) && t5[Q].A === n3 && e3(n3.p) : (n3.u && function n4(r4) {
        if (r4 && "object" == typeof r4) {
          var t6 = r4[Q];
          if (t6) {
            var e4 = t6.t, o8 = t6.k, f6 = t6.R, c5 = t6.i;
            if (4 === c5)
              i3(o8, function(r5) {
                r5 !== Q && (void 0 !== e4[r5] || u3(e4, r5) ? f6[r5] || n4(o8[r5]) : (f6[r5] = true, k2(t6)));
              }), i3(e4, function(n5) {
                void 0 !== o8[n5] || u3(o8, n5) || (f6[n5] = false, k2(t6));
              });
            else if (5 === c5) {
              if (a5(t6) && (k2(t6), f6.length = true), o8.length < e4.length)
                for (var s6 = o8.length; s6 < e4.length; s6++)
                  f6[s6] = false;
              else
                for (var v5 = e4.length; v5 < o8.length; v5++)
                  f6[v5] = true;
              for (var p5 = Math.min(o8.length, e4.length), l5 = 0; l5 < p5; l5++)
                o8.hasOwnProperty(l5) || (f6[l5] = true), void 0 === f6[l5] && n4(o8[l5]);
            }
          }
        }
      }(n3.p[0]), e3(n3.p));
    }, K: function(n3) {
      return 4 === n3.i ? o6(n3) : a5(n3);
    } });
  }
  var G;
  var U;
  var W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x");
  var X = "undefined" != typeof Map;
  var q2 = "undefined" != typeof Set;
  var B2 = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect;
  var H2 = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
  var L2 = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
  var Q = W ? Symbol.for("immer-state") : "__$immer_state";
  var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n3) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n3;
  }, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n3) {
    return "Cannot apply patch, path doesn't resolve: " + n3;
  }, 16: 'Sets cannot have "replace" patches.', 17: function(n3) {
    return "Unsupported patch operation: " + n3;
  }, 18: function(n3) {
    return "The plugin for '" + n3 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n3 + "()` when initializing your application.";
  }, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n3) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n3 + "'";
  }, 22: function(n3) {
    return "'current' expects a draft, got: " + n3;
  }, 23: function(n3) {
    return "'original' expects a draft, got: " + n3;
  }, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
  var Z = "" + Object.prototype.constructor;
  var nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n3) {
    return Object.getOwnPropertyNames(n3).concat(Object.getOwnPropertySymbols(n3));
  } : Object.getOwnPropertyNames;
  var rn = Object.getOwnPropertyDescriptors || function(n3) {
    var r4 = {};
    return nn(n3).forEach(function(t4) {
      r4[t4] = Object.getOwnPropertyDescriptor(n3, t4);
    }), r4;
  };
  var tn = {};
  var en = { get: function(n3, r4) {
    if (r4 === Q)
      return n3;
    var e3 = p3(n3);
    if (!u3(e3, r4))
      return function(n4, r5, t4) {
        var e4, i6 = I2(r5, t4);
        return i6 ? "value" in i6 ? i6.value : null === (e4 = i6.get) || void 0 === e4 ? void 0 : e4.call(n4.k) : void 0;
      }(n3, e3, r4);
    var i5 = e3[r4];
    return n3.I || !t2(i5) ? i5 : i5 === z2(n3.t, r4) ? (E2(n3), n3.o[r4] = N2(n3.A.h, i5, n3)) : i5;
  }, has: function(n3, r4) {
    return r4 in p3(n3);
  }, ownKeys: function(n3) {
    return Reflect.ownKeys(p3(n3));
  }, set: function(n3, r4, t4) {
    var e3 = I2(p3(n3), r4);
    if (null == e3 ? void 0 : e3.set)
      return e3.set.call(n3.k, t4), true;
    if (!n3.P) {
      var i5 = z2(p3(n3), r4), o6 = null == i5 ? void 0 : i5[Q];
      if (o6 && o6.t === t4)
        return n3.o[r4] = t4, n3.R[r4] = false, true;
      if (c3(t4, i5) && (void 0 !== t4 || u3(n3.t, r4)))
        return true;
      E2(n3), k2(n3);
    }
    return n3.o[r4] === t4 && (void 0 !== t4 || r4 in n3.o) || Number.isNaN(t4) && Number.isNaN(n3.o[r4]) || (n3.o[r4] = t4, n3.R[r4] = true), true;
  }, deleteProperty: function(n3, r4) {
    return void 0 !== z2(n3.t, r4) || r4 in n3.t ? (n3.R[r4] = false, E2(n3), k2(n3)) : delete n3.R[r4], n3.o && delete n3.o[r4], true;
  }, getOwnPropertyDescriptor: function(n3, r4) {
    var t4 = p3(n3), e3 = Reflect.getOwnPropertyDescriptor(t4, r4);
    return e3 ? { writable: true, configurable: 1 !== n3.i || "length" !== r4, enumerable: e3.enumerable, value: t4[r4] } : e3;
  }, defineProperty: function() {
    n2(11);
  }, getPrototypeOf: function(n3) {
    return Object.getPrototypeOf(n3.t);
  }, setPrototypeOf: function() {
    n2(12);
  } };
  var on = {};
  i3(en, function(n3, r4) {
    on[n3] = function() {
      return arguments[0] = arguments[0][0], r4.apply(this, arguments);
    };
  }), on.deleteProperty = function(r4, t4) {
    return isNaN(parseInt(t4)) && n2(13), on.set.call(this, r4, t4, void 0);
  }, on.set = function(r4, t4, e3) {
    return "length" !== t4 && isNaN(parseInt(t4)) && n2(14), en.set.call(this, r4[0], t4, e3, r4[0]);
  };
  var un = function() {
    function e3(r4) {
      var e4 = this;
      this.O = B2, this.D = true, this.produce = function(r5, i6, o6) {
        if ("function" == typeof r5 && "function" != typeof i6) {
          var u5 = i6;
          i6 = r5;
          var a5 = e4;
          return function(n3) {
            var r6 = this;
            void 0 === n3 && (n3 = u5);
            for (var t4 = arguments.length, e5 = Array(t4 > 1 ? t4 - 1 : 0), o7 = 1; o7 < t4; o7++)
              e5[o7 - 1] = arguments[o7];
            return a5.produce(n3, function(n4) {
              var t5;
              return (t5 = i6).call.apply(t5, [r6, n4].concat(e5));
            });
          };
        }
        var f5;
        if ("function" != typeof i6 && n2(6), void 0 !== o6 && "function" != typeof o6 && n2(7), t2(r5)) {
          var c5 = w2(e4), s5 = N2(e4, r5, void 0), v5 = true;
          try {
            f5 = i6(s5), v5 = false;
          } finally {
            v5 ? g2(c5) : O2(c5);
          }
          return "undefined" != typeof Promise && f5 instanceof Promise ? f5.then(function(n3) {
            return j2(c5, o6), P2(n3, c5);
          }, function(n3) {
            throw g2(c5), n3;
          }) : (j2(c5, o6), P2(f5, c5));
        }
        if (!r5 || "object" != typeof r5) {
          if (void 0 === (f5 = i6(r5)) && (f5 = r5), f5 === H2 && (f5 = void 0), e4.D && d3(f5, true), o6) {
            var p5 = [], l5 = [];
            b2("Patches").M(r5, f5, p5, l5), o6(p5, l5);
          }
          return f5;
        }
        n2(21, r5);
      }, this.produceWithPatches = function(n3, r5) {
        if ("function" == typeof n3)
          return function(r6) {
            for (var t5 = arguments.length, i7 = Array(t5 > 1 ? t5 - 1 : 0), o7 = 1; o7 < t5; o7++)
              i7[o7 - 1] = arguments[o7];
            return e4.produceWithPatches(r6, function(r7) {
              return n3.apply(void 0, [r7].concat(i7));
            });
          };
        var t4, i6, o6 = e4.produce(n3, r5, function(n4, r6) {
          t4 = n4, i6 = r6;
        });
        return "undefined" != typeof Promise && o6 instanceof Promise ? o6.then(function(n4) {
          return [n4, t4, i6];
        }) : [o6, t4, i6];
      }, "boolean" == typeof (null == r4 ? void 0 : r4.useProxies) && this.setUseProxies(r4.useProxies), "boolean" == typeof (null == r4 ? void 0 : r4.autoFreeze) && this.setAutoFreeze(r4.autoFreeze);
    }
    var i5 = e3.prototype;
    return i5.createDraft = function(e4) {
      t2(e4) || n2(8), r2(e4) && (e4 = R(e4));
      var i6 = w2(this), o6 = N2(this, e4, void 0);
      return o6[Q].C = true, O2(i6), o6;
    }, i5.finishDraft = function(r4, t4) {
      var e4 = r4 && r4[Q];
      e4 && e4.C || n2(9), e4.I && n2(10);
      var i6 = e4.A;
      return j2(i6, t4), P2(void 0, i6);
    }, i5.setAutoFreeze = function(n3) {
      this.D = n3;
    }, i5.setUseProxies = function(r4) {
      r4 && !B2 && n2(20), this.O = r4;
    }, i5.applyPatches = function(n3, t4) {
      var e4;
      for (e4 = t4.length - 1; e4 >= 0; e4--) {
        var i6 = t4[e4];
        if (0 === i6.path.length && "replace" === i6.op) {
          n3 = i6.value;
          break;
        }
      }
      e4 > -1 && (t4 = t4.slice(e4 + 1));
      var o6 = b2("Patches").$;
      return r2(n3) ? o6(n3, t4) : this.produce(n3, function(n4) {
        return o6(n4, t4);
      });
    }, e3;
  }();
  var an = new un();
  var fn = an.produce;
  var cn = an.produceWithPatches.bind(an);
  var sn = an.setAutoFreeze.bind(an);
  var vn = an.setUseProxies.bind(an);
  var pn = an.applyPatches.bind(an);
  var ln = an.createDraft.bind(an);
  var dn = an.finishDraft.bind(an);
  var immer_esm_default = fn;

  // src/client/node_modules/@babel/runtime/helpers/esm/typeof.js
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }

  // src/client/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  // src/client/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }

  // src/client/node_modules/@babel/runtime/helpers/esm/defineProperty.js
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  // src/client/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i5 = 1; i5 < arguments.length; i5++) {
      var source = null != arguments[i5] ? arguments[i5] : {};
      i5 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }

  // src/client/node_modules/redux/es/redux.js
  var $$observable = function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
  }();
  var randomString = function randomString2() {
    return Math.random().toString(36).substring(7).split("").join(".");
  };
  var ActionTypes = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
      return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    }
  };
  function isPlainObject(obj) {
    if (typeof obj !== "object" || obj === null)
      return false;
    var proto = obj;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
  }
  function miniKindOf(val) {
    if (val === void 0)
      return "undefined";
    if (val === null)
      return "null";
    var type = typeof val;
    switch (type) {
      case "boolean":
      case "string":
      case "number":
      case "symbol":
      case "function": {
        return type;
      }
    }
    if (Array.isArray(val))
      return "array";
    if (isDate(val))
      return "date";
    if (isError(val))
      return "error";
    var constructorName = ctorName(val);
    switch (constructorName) {
      case "Symbol":
      case "Promise":
      case "WeakMap":
      case "WeakSet":
      case "Map":
      case "Set":
        return constructorName;
    }
    return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
  }
  function ctorName(val) {
    return typeof val.constructor === "function" ? val.constructor.name : null;
  }
  function isError(val) {
    return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
  }
  function isDate(val) {
    if (val instanceof Date)
      return true;
    return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
  }
  function kindOf(val) {
    var typeOfVal = typeof val;
    if (true) {
      typeOfVal = miniKindOf(val);
    }
    return typeOfVal;
  }
  function createStore(reducer, preloadedState, enhancer) {
    var _ref2;
    if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
      throw new Error(false ? formatProdErrorMessage(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
    }
    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
      enhancer = preloadedState;
      preloadedState = void 0;
    }
    if (typeof enhancer !== "undefined") {
      if (typeof enhancer !== "function") {
        throw new Error(false ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
      }
      return enhancer(createStore)(reducer, preloadedState);
    }
    if (typeof reducer !== "function") {
      throw new Error(false ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
    }
    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    function ensureCanMutateNextListeners() {
      if (nextListeners === currentListeners) {
        nextListeners = currentListeners.slice();
      }
    }
    function getState() {
      if (isDispatching) {
        throw new Error(false ? formatProdErrorMessage(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
      }
      return currentState;
    }
    function subscribe(listener2) {
      if (typeof listener2 !== "function") {
        throw new Error(false ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener2) + "'");
      }
      if (isDispatching) {
        throw new Error(false ? formatProdErrorMessage(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      var isSubscribed = true;
      ensureCanMutateNextListeners();
      nextListeners.push(listener2);
      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }
        if (isDispatching) {
          throw new Error(false ? formatProdErrorMessage(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        }
        isSubscribed = false;
        ensureCanMutateNextListeners();
        var index = nextListeners.indexOf(listener2);
        nextListeners.splice(index, 1);
        currentListeners = null;
      };
    }
    function dispatch(action) {
      if (!isPlainObject(action)) {
        throw new Error(false ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
      }
      if (typeof action.type === "undefined") {
        throw new Error(false ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
      }
      if (isDispatching) {
        throw new Error(false ? formatProdErrorMessage(9) : "Reducers may not dispatch actions.");
      }
      try {
        isDispatching = true;
        currentState = currentReducer(currentState, action);
      } finally {
        isDispatching = false;
      }
      var listeners = currentListeners = nextListeners;
      for (var i5 = 0; i5 < listeners.length; i5++) {
        var listener2 = listeners[i5];
        listener2();
      }
      return action;
    }
    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== "function") {
        throw new Error(false ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
      }
      currentReducer = nextReducer;
      dispatch({
        type: ActionTypes.REPLACE
      });
    }
    function observable() {
      var _ref;
      var outerSubscribe = subscribe;
      return _ref = {
        /**
         * The minimal observable subscription method.
         * @param {Object} observer Any object that can be used as an observer.
         * The observer object should have a `next` method.
         * @returns {subscription} An object with an `unsubscribe` method that can
         * be used to unsubscribe the observable from the store, and prevent further
         * emission of values from the observable.
         */
        subscribe: function subscribe2(observer) {
          if (typeof observer !== "object" || observer === null) {
            throw new Error(false ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
          }
          function observeState() {
            if (observer.next) {
              observer.next(getState());
            }
          }
          observeState();
          var unsubscribe = outerSubscribe(observeState);
          return {
            unsubscribe
          };
        }
      }, _ref[$$observable] = function() {
        return this;
      }, _ref;
    }
    dispatch({
      type: ActionTypes.INIT
    });
    return _ref2 = {
      dispatch,
      subscribe,
      getState,
      replaceReducer
    }, _ref2[$$observable] = observable, _ref2;
  }
  function warning(message) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (e3) {
    }
  }
  function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    var reducerKeys = Object.keys(reducers);
    var argumentName = action && action.type === ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
    if (reducerKeys.length === 0) {
      return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
    }
    if (!isPlainObject(inputState)) {
      return "The " + argumentName + ' has unexpected type of "' + kindOf(inputState) + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
    }
    var unexpectedKeys = Object.keys(inputState).filter(function(key) {
      return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
    });
    unexpectedKeys.forEach(function(key) {
      unexpectedKeyCache[key] = true;
    });
    if (action && action.type === ActionTypes.REPLACE)
      return;
    if (unexpectedKeys.length > 0) {
      return "Unexpected " + (unexpectedKeys.length > 1 ? "keys" : "key") + " " + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
    }
  }
  function assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function(key) {
      var reducer = reducers[key];
      var initialState = reducer(void 0, {
        type: ActionTypes.INIT
      });
      if (typeof initialState === "undefined") {
        throw new Error(false ? formatProdErrorMessage(12) : 'The slice reducer for key "' + key + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
      }
      if (typeof reducer(void 0, {
        type: ActionTypes.PROBE_UNKNOWN_ACTION()
      }) === "undefined") {
        throw new Error(false ? formatProdErrorMessage(13) : 'The slice reducer for key "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + ActionTypes.INIT + `' or other actions in "redux/*" `) + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
      }
    });
  }
  function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for (var i5 = 0; i5 < reducerKeys.length; i5++) {
      var key = reducerKeys[i5];
      if (true) {
        if (typeof reducers[key] === "undefined") {
          warning('No reducer provided for key "' + key + '"');
        }
      }
      if (typeof reducers[key] === "function") {
        finalReducers[key] = reducers[key];
      }
    }
    var finalReducerKeys = Object.keys(finalReducers);
    var unexpectedKeyCache;
    if (true) {
      unexpectedKeyCache = {};
    }
    var shapeAssertionError;
    try {
      assertReducerShape(finalReducers);
    } catch (e3) {
      shapeAssertionError = e3;
    }
    return function combination(state2, action) {
      if (state2 === void 0) {
        state2 = {};
      }
      if (shapeAssertionError) {
        throw shapeAssertionError;
      }
      if (true) {
        var warningMessage = getUnexpectedStateShapeWarningMessage(state2, finalReducers, action, unexpectedKeyCache);
        if (warningMessage) {
          warning(warningMessage);
        }
      }
      var hasChanged = false;
      var nextState = {};
      for (var _i = 0; _i < finalReducerKeys.length; _i++) {
        var _key = finalReducerKeys[_i];
        var reducer = finalReducers[_key];
        var previousStateForKey = state2[_key];
        var nextStateForKey = reducer(previousStateForKey, action);
        if (typeof nextStateForKey === "undefined") {
          var actionType = action && action.type;
          throw new Error(false ? formatProdErrorMessage(14) : "When called with an action of type " + (actionType ? '"' + String(actionType) + '"' : "(unknown type)") + ', the slice reducer for key "' + _key + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
        }
        nextState[_key] = nextStateForKey;
        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
      }
      hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state2).length;
      return hasChanged ? nextState : state2;
    };
  }
  function compose() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }
    if (funcs.length === 0) {
      return function(arg) {
        return arg;
      };
    }
    if (funcs.length === 1) {
      return funcs[0];
    }
    return funcs.reduce(function(a5, b4) {
      return function() {
        return a5(b4.apply(void 0, arguments));
      };
    });
  }
  function applyMiddleware() {
    for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
      middlewares[_key] = arguments[_key];
    }
    return function(createStore2) {
      return function() {
        var store2 = createStore2.apply(void 0, arguments);
        var _dispatch = function dispatch() {
          throw new Error(false ? formatProdErrorMessage(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
        };
        var middlewareAPI = {
          getState: store2.getState,
          dispatch: function dispatch() {
            return _dispatch.apply(void 0, arguments);
          }
        };
        var chain = middlewares.map(function(middleware) {
          return middleware(middlewareAPI);
        });
        _dispatch = compose.apply(void 0, chain)(store2.dispatch);
        return _objectSpread2(_objectSpread2({}, store2), {}, {
          dispatch: _dispatch
        });
      };
    };
  }

  // src/client/node_modules/redux-thunk/es/index.js
  function createThunkMiddleware(extraArgument) {
    var middleware = function middleware2(_ref) {
      var dispatch = _ref.dispatch, getState = _ref.getState;
      return function(next) {
        return function(action) {
          if (typeof action === "function") {
            return action(dispatch, getState, extraArgument);
          }
          return next(action);
        };
      };
    };
    return middleware;
  }
  var thunk = createThunkMiddleware();
  thunk.withExtraArgument = createThunkMiddleware;
  var es_default = thunk;

  // src/client/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js
  var __extends = function() {
    var extendStatics = function(d5, b4) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d6, b5) {
        d6.__proto__ = b5;
      } || function(d6, b5) {
        for (var p5 in b5)
          if (Object.prototype.hasOwnProperty.call(b5, p5))
            d6[p5] = b5[p5];
      };
      return extendStatics(d5, b4);
    };
    return function(d5, b4) {
      if (typeof b4 !== "function" && b4 !== null)
        throw new TypeError("Class extends value " + String(b4) + " is not a constructor or null");
      extendStatics(d5, b4);
      function __() {
        this.constructor = d5;
      }
      d5.prototype = b4 === null ? Object.create(b4) : (__.prototype = b4.prototype, new __());
    };
  }();
  var __generator = function(thisArg, body) {
    var _5 = { label: 0, sent: function() {
      if (t4[0] & 1)
        throw t4[1];
      return t4[1];
    }, trys: [], ops: [] }, f5, y5, t4, g4;
    return g4 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g4[Symbol.iterator] = function() {
      return this;
    }), g4;
    function verb(n3) {
      return function(v5) {
        return step([n3, v5]);
      };
    }
    function step(op) {
      if (f5)
        throw new TypeError("Generator is already executing.");
      while (_5)
        try {
          if (f5 = 1, y5 && (t4 = op[0] & 2 ? y5["return"] : op[0] ? y5["throw"] || ((t4 = y5["return"]) && t4.call(y5), 0) : y5.next) && !(t4 = t4.call(y5, op[1])).done)
            return t4;
          if (y5 = 0, t4)
            op = [op[0] & 2, t4.value];
          switch (op[0]) {
            case 0:
            case 1:
              t4 = op;
              break;
            case 4:
              _5.label++;
              return { value: op[1], done: false };
            case 5:
              _5.label++;
              y5 = op[1];
              op = [0];
              continue;
            case 7:
              op = _5.ops.pop();
              _5.trys.pop();
              continue;
            default:
              if (!(t4 = _5.trys, t4 = t4.length > 0 && t4[t4.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _5 = 0;
                continue;
              }
              if (op[0] === 3 && (!t4 || op[1] > t4[0] && op[1] < t4[3])) {
                _5.label = op[1];
                break;
              }
              if (op[0] === 6 && _5.label < t4[1]) {
                _5.label = t4[1];
                t4 = op;
                break;
              }
              if (t4 && _5.label < t4[2]) {
                _5.label = t4[2];
                _5.ops.push(op);
                break;
              }
              if (t4[2])
                _5.ops.pop();
              _5.trys.pop();
              continue;
          }
          op = body.call(thisArg, _5);
        } catch (e3) {
          op = [6, e3];
          y5 = 0;
        } finally {
          f5 = t4 = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var __spreadArray = function(to, from) {
    for (var i5 = 0, il = from.length, j4 = to.length; i5 < il; i5++, j4++)
      to[j4] = from[i5];
    return to;
  };
  var __defProp2 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = function(obj, key, value) {
    return key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  };
  var __spreadValues = function(a5, b4) {
    for (var prop in b4 || (b4 = {}))
      if (__hasOwnProp2.call(b4, prop))
        __defNormalProp(a5, prop, b4[prop]);
    if (__getOwnPropSymbols)
      for (var _i = 0, _c = __getOwnPropSymbols(b4); _i < _c.length; _i++) {
        var prop = _c[_i];
        if (__propIsEnum.call(b4, prop))
          __defNormalProp(a5, prop, b4[prop]);
      }
    return a5;
  };
  var __spreadProps = function(a5, b4) {
    return __defProps(a5, __getOwnPropDescs(b4));
  };
  var __async = function(__this, __arguments, generator) {
    return new Promise(function(resolve, reject) {
      var fulfilled = function(value) {
        try {
          step(generator.next(value));
        } catch (e3) {
          reject(e3);
        }
      };
      var rejected = function(value) {
        try {
          step(generator.throw(value));
        } catch (e3) {
          reject(e3);
        }
      };
      var step = function(x4) {
        return x4.done ? resolve(x4.value) : Promise.resolve(x4.value).then(fulfilled, rejected);
      };
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
    if (arguments.length === 0)
      return void 0;
    if (typeof arguments[0] === "object")
      return compose;
    return compose.apply(null, arguments);
  };
  var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
    return function(noop2) {
      return noop2;
    };
  };
  function isPlainObject2(value) {
    if (typeof value !== "object" || value === null)
      return false;
    var proto = Object.getPrototypeOf(value);
    if (proto === null)
      return true;
    var baseProto = proto;
    while (Object.getPrototypeOf(baseProto) !== null) {
      baseProto = Object.getPrototypeOf(baseProto);
    }
    return proto === baseProto;
  }
  function getTimeMeasureUtils(maxDelay, fnName) {
    var elapsed = 0;
    return {
      measureTime: function(fn2) {
        var started = Date.now();
        try {
          return fn2();
        } finally {
          var finished = Date.now();
          elapsed += finished - started;
        }
      },
      warnIfExceeded: function() {
        if (elapsed > maxDelay) {
          console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
        }
      }
    };
  }
  var MiddlewareArray = (
    /** @class */
    function(_super) {
      __extends(MiddlewareArray2, _super);
      function MiddlewareArray2() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, MiddlewareArray2.prototype);
        return _this;
      }
      Object.defineProperty(MiddlewareArray2, Symbol.species, {
        get: function() {
          return MiddlewareArray2;
        },
        enumerable: false,
        configurable: true
      });
      MiddlewareArray2.prototype.concat = function() {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          arr[_i] = arguments[_i];
        }
        return _super.prototype.concat.apply(this, arr);
      };
      MiddlewareArray2.prototype.prepend = function() {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          arr[_i] = arguments[_i];
        }
        if (arr.length === 1 && Array.isArray(arr[0])) {
          return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr[0].concat(this))))();
        }
        return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr.concat(this))))();
      };
      return MiddlewareArray2;
    }(Array)
  );
  var EnhancerArray = (
    /** @class */
    function(_super) {
      __extends(EnhancerArray2, _super);
      function EnhancerArray2() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, EnhancerArray2.prototype);
        return _this;
      }
      Object.defineProperty(EnhancerArray2, Symbol.species, {
        get: function() {
          return EnhancerArray2;
        },
        enumerable: false,
        configurable: true
      });
      EnhancerArray2.prototype.concat = function() {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          arr[_i] = arguments[_i];
        }
        return _super.prototype.concat.apply(this, arr);
      };
      EnhancerArray2.prototype.prepend = function() {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          arr[_i] = arguments[_i];
        }
        if (arr.length === 1 && Array.isArray(arr[0])) {
          return new (EnhancerArray2.bind.apply(EnhancerArray2, __spreadArray([void 0], arr[0].concat(this))))();
        }
        return new (EnhancerArray2.bind.apply(EnhancerArray2, __spreadArray([void 0], arr.concat(this))))();
      };
      return EnhancerArray2;
    }(Array)
  );
  function freezeDraftable(val) {
    return t2(val) ? immer_esm_default(val, function() {
    }) : val;
  }
  var isProduction = false;
  var prefix = "Invariant failed";
  function invariant(condition, message) {
    if (condition) {
      return;
    }
    if (isProduction) {
      throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ""));
  }
  function stringify(obj, serializer, indent, decycler) {
    return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
  }
  function getSerialize(serializer, decycler) {
    var stack = [], keys = [];
    if (!decycler)
      decycler = function(_5, value) {
        if (stack[0] === value)
          return "[Circular ~]";
        return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
      };
    return function(key, value) {
      if (stack.length > 0) {
        var thisPos = stack.indexOf(this);
        ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
        ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
        if (~stack.indexOf(value))
          value = decycler.call(this, key, value);
      } else
        stack.push(value);
      return serializer == null ? value : serializer.call(this, key, value);
    };
  }
  function isImmutableDefault(value) {
    return typeof value !== "object" || value == null || Object.isFrozen(value);
  }
  function trackForMutations(isImmutable, ignorePaths, obj) {
    var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
    return {
      detectMutations: function() {
        return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
      }
    };
  }
  function trackProperties(isImmutable, ignorePaths, obj, path) {
    if (ignorePaths === void 0) {
      ignorePaths = [];
    }
    if (path === void 0) {
      path = "";
    }
    var tracked = { value: obj };
    if (!isImmutable(obj)) {
      tracked.children = {};
      for (var key in obj) {
        var childPath = path ? path + "." + key : key;
        if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
          continue;
        }
        tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
      }
    }
    return tracked;
  }
  function detectMutations(isImmutable, ignoredPaths, trackedProperty, obj, sameParentRef, path) {
    if (ignoredPaths === void 0) {
      ignoredPaths = [];
    }
    if (sameParentRef === void 0) {
      sameParentRef = false;
    }
    if (path === void 0) {
      path = "";
    }
    var prevObj = trackedProperty ? trackedProperty.value : void 0;
    var sameRef = prevObj === obj;
    if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
      return { wasMutated: true, path };
    }
    if (isImmutable(prevObj) || isImmutable(obj)) {
      return { wasMutated: false };
    }
    var keysToDetect = {};
    for (var key in trackedProperty.children) {
      keysToDetect[key] = true;
    }
    for (var key in obj) {
      keysToDetect[key] = true;
    }
    var hasIgnoredPaths = ignoredPaths.length > 0;
    var _loop_1 = function(key2) {
      var nestedPath = path ? path + "." + key2 : key2;
      if (hasIgnoredPaths) {
        var hasMatches = ignoredPaths.some(function(ignored) {
          if (ignored instanceof RegExp) {
            return ignored.test(nestedPath);
          }
          return nestedPath === ignored;
        });
        if (hasMatches) {
          return "continue";
        }
      }
      var result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key2], obj[key2], sameRef, nestedPath);
      if (result.wasMutated) {
        return { value: result };
      }
    };
    for (var key in keysToDetect) {
      var state_1 = _loop_1(key);
      if (typeof state_1 === "object")
        return state_1.value;
    }
    return { wasMutated: false };
  }
  function createImmutableStateInvariantMiddleware(options) {
    if (options === void 0) {
      options = {};
    }
    if (false) {
      return function() {
        return function(next) {
          return function(action) {
            return next(action);
          };
        };
      };
    }
    var _c = options.isImmutable, isImmutable = _c === void 0 ? isImmutableDefault : _c, ignoredPaths = options.ignoredPaths, _d = options.warnAfter, warnAfter = _d === void 0 ? 32 : _d, ignore = options.ignore;
    ignoredPaths = ignoredPaths || ignore;
    var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
    return function(_c2) {
      var getState = _c2.getState;
      var state2 = getState();
      var tracker = track(state2);
      var result;
      return function(next) {
        return function(action) {
          var measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
          measureUtils.measureTime(function() {
            state2 = getState();
            result = tracker.detectMutations();
            tracker = track(state2);
            invariant(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
          });
          var dispatchedAction = next(action);
          measureUtils.measureTime(function() {
            state2 = getState();
            result = tracker.detectMutations();
            tracker = track(state2);
            result.wasMutated && invariant(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
          });
          measureUtils.warnIfExceeded();
          return dispatchedAction;
        };
      };
    };
  }
  function isPlain(val) {
    var type = typeof val;
    return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject2(val);
  }
  function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths, cache) {
    if (path === void 0) {
      path = "";
    }
    if (isSerializable === void 0) {
      isSerializable = isPlain;
    }
    if (ignoredPaths === void 0) {
      ignoredPaths = [];
    }
    var foundNestedSerializable;
    if (!isSerializable(value)) {
      return {
        keyPath: path || "<root>",
        value
      };
    }
    if (typeof value !== "object" || value === null) {
      return false;
    }
    if (cache == null ? void 0 : cache.has(value))
      return false;
    var entries = getEntries != null ? getEntries(value) : Object.entries(value);
    var hasIgnoredPaths = ignoredPaths.length > 0;
    var _loop_2 = function(key2, nestedValue2) {
      var nestedPath = path ? path + "." + key2 : key2;
      if (hasIgnoredPaths) {
        var hasMatches = ignoredPaths.some(function(ignored) {
          if (ignored instanceof RegExp) {
            return ignored.test(nestedPath);
          }
          return nestedPath === ignored;
        });
        if (hasMatches) {
          return "continue";
        }
      }
      if (!isSerializable(nestedValue2)) {
        return { value: {
          keyPath: nestedPath,
          value: nestedValue2
        } };
      }
      if (typeof nestedValue2 === "object") {
        foundNestedSerializable = findNonSerializableValue(nestedValue2, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
        if (foundNestedSerializable) {
          return { value: foundNestedSerializable };
        }
      }
    };
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
      var _c = entries_1[_i], key = _c[0], nestedValue = _c[1];
      var state_2 = _loop_2(key, nestedValue);
      if (typeof state_2 === "object")
        return state_2.value;
    }
    if (cache && isNestedFrozen(value))
      cache.add(value);
    return false;
  }
  function isNestedFrozen(value) {
    if (!Object.isFrozen(value))
      return false;
    for (var _i = 0, _c = Object.values(value); _i < _c.length; _i++) {
      var nestedValue = _c[_i];
      if (typeof nestedValue !== "object" || nestedValue === null)
        continue;
      if (!isNestedFrozen(nestedValue))
        return false;
    }
    return true;
  }
  function createSerializableStateInvariantMiddleware(options) {
    if (options === void 0) {
      options = {};
    }
    if (false) {
      return function() {
        return function(next) {
          return function(action) {
            return next(action);
          };
        };
      };
    }
    var _c = options.isSerializable, isSerializable = _c === void 0 ? isPlain : _c, getEntries = options.getEntries, _d = options.ignoredActions, ignoredActions = _d === void 0 ? [] : _d, _e = options.ignoredActionPaths, ignoredActionPaths = _e === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : _e, _f = options.ignoredPaths, ignoredPaths = _f === void 0 ? [] : _f, _g = options.warnAfter, warnAfter = _g === void 0 ? 32 : _g, _h = options.ignoreState, ignoreState = _h === void 0 ? false : _h, _j = options.ignoreActions, ignoreActions = _j === void 0 ? false : _j, _k = options.disableCache, disableCache = _k === void 0 ? false : _k;
    var cache = !disableCache && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return function(storeAPI) {
      return function(next) {
        return function(action) {
          var result = next(action);
          var measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
          if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
            measureUtils.measureTime(function() {
              var foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths, cache);
              if (foundActionNonSerializableValue) {
                var keyPath = foundActionNonSerializableValue.keyPath, value = foundActionNonSerializableValue.value;
                console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
              }
            });
          }
          if (!ignoreState) {
            measureUtils.measureTime(function() {
              var state2 = storeAPI.getState();
              var foundStateNonSerializableValue = findNonSerializableValue(state2, "", isSerializable, getEntries, ignoredPaths, cache);
              if (foundStateNonSerializableValue) {
                var keyPath = foundStateNonSerializableValue.keyPath, value = foundStateNonSerializableValue.value;
                console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
              }
            });
            measureUtils.warnIfExceeded();
          }
          return result;
        };
      };
    };
  }
  function isBoolean(x4) {
    return typeof x4 === "boolean";
  }
  function curryGetDefaultMiddleware() {
    return function curriedGetDefaultMiddleware(options) {
      return getDefaultMiddleware(options);
    };
  }
  function getDefaultMiddleware(options) {
    if (options === void 0) {
      options = {};
    }
    var _c = options.thunk, thunk2 = _c === void 0 ? true : _c, _d = options.immutableCheck, immutableCheck = _d === void 0 ? true : _d, _e = options.serializableCheck, serializableCheck = _e === void 0 ? true : _e;
    var middlewareArray = new MiddlewareArray();
    if (thunk2) {
      if (isBoolean(thunk2)) {
        middlewareArray.push(es_default);
      } else {
        middlewareArray.push(es_default.withExtraArgument(thunk2.extraArgument));
      }
    }
    if (true) {
      if (immutableCheck) {
        var immutableOptions = {};
        if (!isBoolean(immutableCheck)) {
          immutableOptions = immutableCheck;
        }
        middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
      }
      if (serializableCheck) {
        var serializableOptions = {};
        if (!isBoolean(serializableCheck)) {
          serializableOptions = serializableCheck;
        }
        middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
      }
    }
    return middlewareArray;
  }
  var IS_PRODUCTION = false;
  function configureStore(options) {
    var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
    var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
    var rootReducer;
    if (typeof reducer === "function") {
      rootReducer = reducer;
    } else if (isPlainObject2(reducer)) {
      rootReducer = combineReducers(reducer);
    } else {
      throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    }
    var finalMiddleware = middleware;
    if (typeof finalMiddleware === "function") {
      finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
      if (!IS_PRODUCTION && !Array.isArray(finalMiddleware)) {
        throw new Error("when using a middleware builder function, an array of middleware must be returned");
      }
    }
    if (!IS_PRODUCTION && finalMiddleware.some(function(item) {
      return typeof item !== "function";
    })) {
      throw new Error("each middleware provided to configureStore must be a function");
    }
    var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
    var finalCompose = compose;
    if (devTools) {
      finalCompose = composeWithDevTools(__spreadValues({
        trace: !IS_PRODUCTION
      }, typeof devTools === "object" && devTools));
    }
    var defaultEnhancers = new EnhancerArray(middlewareEnhancer);
    var storeEnhancers = defaultEnhancers;
    if (Array.isArray(enhancers)) {
      storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
    } else if (typeof enhancers === "function") {
      storeEnhancers = enhancers(defaultEnhancers);
    }
    var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
    return createStore(rootReducer, preloadedState, composedEnhancer);
  }
  function createAction(type, prepareAction) {
    function actionCreator() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (prepareAction) {
        var prepared = prepareAction.apply(void 0, args);
        if (!prepared) {
          throw new Error("prepareAction did not return an object");
        }
        return __spreadValues(__spreadValues({
          type,
          payload: prepared.payload
        }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
      }
      return { type, payload: args[0] };
    }
    actionCreator.toString = function() {
      return "" + type;
    };
    actionCreator.type = type;
    actionCreator.match = function(action) {
      return action.type === type;
    };
    return actionCreator;
  }
  function executeReducerBuilderCallback(builderCallback) {
    var actionsMap = {};
    var actionMatchers = [];
    var defaultCaseReducer;
    var builder = {
      addCase: function(typeOrActionCreator, reducer) {
        if (true) {
          if (actionMatchers.length > 0) {
            throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
          }
          if (defaultCaseReducer) {
            throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
          }
        }
        var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
        if (type in actionsMap) {
          throw new Error("addCase cannot be called with two reducers for the same action type");
        }
        actionsMap[type] = reducer;
        return builder;
      },
      addMatcher: function(matcher, reducer) {
        if (true) {
          if (defaultCaseReducer) {
            throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
          }
        }
        actionMatchers.push({ matcher, reducer });
        return builder;
      },
      addDefaultCase: function(reducer) {
        if (true) {
          if (defaultCaseReducer) {
            throw new Error("`builder.addDefaultCase` can only be called once");
          }
        }
        defaultCaseReducer = reducer;
        return builder;
      }
    };
    builderCallback(builder);
    return [actionsMap, actionMatchers, defaultCaseReducer];
  }
  function isStateFunction(x4) {
    return typeof x4 === "function";
  }
  var hasWarnedAboutObjectNotation = false;
  function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
    if (actionMatchers === void 0) {
      actionMatchers = [];
    }
    if (true) {
      if (typeof mapOrBuilderCallback === "object") {
        if (!hasWarnedAboutObjectNotation) {
          hasWarnedAboutObjectNotation = true;
          console.warn("The object notation for `createReducer` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
        }
      }
    }
    var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
    var getInitialState;
    if (isStateFunction(initialState)) {
      getInitialState = function() {
        return freezeDraftable(initialState());
      };
    } else {
      var frozenInitialState_1 = freezeDraftable(initialState);
      getInitialState = function() {
        return frozenInitialState_1;
      };
    }
    function reducer(state2, action) {
      if (state2 === void 0) {
        state2 = getInitialState();
      }
      var caseReducers = __spreadArray([
        actionsMap[action.type]
      ], finalActionMatchers.filter(function(_c2) {
        var matcher = _c2.matcher;
        return matcher(action);
      }).map(function(_c2) {
        var reducer2 = _c2.reducer;
        return reducer2;
      }));
      if (caseReducers.filter(function(cr) {
        return !!cr;
      }).length === 0) {
        caseReducers = [finalDefaultCaseReducer];
      }
      return caseReducers.reduce(function(previousState, caseReducer) {
        if (caseReducer) {
          if (r2(previousState)) {
            var draft = previousState;
            var result = caseReducer(draft, action);
            if (result === void 0) {
              return previousState;
            }
            return result;
          } else if (!t2(previousState)) {
            var result = caseReducer(previousState, action);
            if (result === void 0) {
              if (previousState === null) {
                return previousState;
              }
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return result;
          } else {
            return immer_esm_default(previousState, function(draft2) {
              return caseReducer(draft2, action);
            });
          }
        }
        return previousState;
      }, state2);
    }
    reducer.getInitialState = getInitialState;
    return reducer;
  }
  var hasWarnedAboutObjectNotation2 = false;
  function getType2(slice, actionKey) {
    return slice + "/" + actionKey;
  }
  function createSlice(options) {
    var name = options.name;
    if (!name) {
      throw new Error("`name` is a required option for createSlice");
    }
    if (typeof process !== "undefined" && true) {
      if (options.initialState === void 0) {
        console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
      }
    }
    var initialState = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
    var reducers = options.reducers || {};
    var reducerNames = Object.keys(reducers);
    var sliceCaseReducersByName = {};
    var sliceCaseReducersByType = {};
    var actionCreators = {};
    reducerNames.forEach(function(reducerName) {
      var maybeReducerWithPrepare = reducers[reducerName];
      var type = getType2(name, reducerName);
      var caseReducer;
      var prepareCallback;
      if ("reducer" in maybeReducerWithPrepare) {
        caseReducer = maybeReducerWithPrepare.reducer;
        prepareCallback = maybeReducerWithPrepare.prepare;
      } else {
        caseReducer = maybeReducerWithPrepare;
      }
      sliceCaseReducersByName[reducerName] = caseReducer;
      sliceCaseReducersByType[type] = caseReducer;
      actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
    });
    function buildReducer() {
      if (true) {
        if (typeof options.extraReducers === "object") {
          if (!hasWarnedAboutObjectNotation2) {
            hasWarnedAboutObjectNotation2 = true;
            console.warn("The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
          }
        }
      }
      var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
      var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
      return createReducer(initialState, function(builder) {
        for (var key in finalCaseReducers) {
          builder.addCase(key, finalCaseReducers[key]);
        }
        for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
          var m4 = actionMatchers_1[_i];
          builder.addMatcher(m4.matcher, m4.reducer);
        }
        if (defaultCaseReducer) {
          builder.addDefaultCase(defaultCaseReducer);
        }
      });
    }
    var _reducer;
    return {
      name,
      reducer: function(state2, action) {
        if (!_reducer)
          _reducer = buildReducer();
        return _reducer(state2, action);
      },
      actions: actionCreators,
      caseReducers: sliceCaseReducersByName,
      getInitialState: function() {
        if (!_reducer)
          _reducer = buildReducer();
        return _reducer.getInitialState();
      }
    };
  }
  var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
  var nanoid = function(size) {
    if (size === void 0) {
      size = 21;
    }
    var id = "";
    var i5 = size;
    while (i5--) {
      id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
  };
  var commonProperties = [
    "name",
    "message",
    "stack",
    "code"
  ];
  var RejectWithValue = (
    /** @class */
    function() {
      function RejectWithValue2(payload, meta) {
        this.payload = payload;
        this.meta = meta;
      }
      return RejectWithValue2;
    }()
  );
  var FulfillWithMeta = (
    /** @class */
    function() {
      function FulfillWithMeta2(payload, meta) {
        this.payload = payload;
        this.meta = meta;
      }
      return FulfillWithMeta2;
    }()
  );
  var miniSerializeError = function(value) {
    if (typeof value === "object" && value !== null) {
      var simpleError = {};
      for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
        var property = commonProperties_1[_i];
        if (typeof value[property] === "string") {
          simpleError[property] = value[property];
        }
      }
      return simpleError;
    }
    return { message: String(value) };
  };
  var createAsyncThunk = function() {
    function createAsyncThunk2(typePrefix, payloadCreator, options) {
      var fulfilled = createAction(typePrefix + "/fulfilled", function(payload, requestId, arg, meta) {
        return {
          payload,
          meta: __spreadProps(__spreadValues({}, meta || {}), {
            arg,
            requestId,
            requestStatus: "fulfilled"
          })
        };
      });
      var pending = createAction(typePrefix + "/pending", function(requestId, arg, meta) {
        return {
          payload: void 0,
          meta: __spreadProps(__spreadValues({}, meta || {}), {
            arg,
            requestId,
            requestStatus: "pending"
          })
        };
      });
      var rejected = createAction(typePrefix + "/rejected", function(error, requestId, arg, payload, meta) {
        return {
          payload,
          error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
          meta: __spreadProps(__spreadValues({}, meta || {}), {
            arg,
            requestId,
            rejectedWithValue: !!payload,
            requestStatus: "rejected",
            aborted: (error == null ? void 0 : error.name) === "AbortError",
            condition: (error == null ? void 0 : error.name) === "ConditionError"
          })
        };
      });
      var displayedWarning = false;
      var AC = typeof AbortController !== "undefined" ? AbortController : (
        /** @class */
        function() {
          function class_1() {
            this.signal = {
              aborted: false,
              addEventListener: function() {
              },
              dispatchEvent: function() {
                return false;
              },
              onabort: function() {
              },
              removeEventListener: function() {
              },
              reason: void 0,
              throwIfAborted: function() {
              }
            };
          }
          class_1.prototype.abort = function() {
            if (true) {
              if (!displayedWarning) {
                displayedWarning = true;
                console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
              }
            }
          };
          return class_1;
        }()
      );
      function actionCreator(arg) {
        return function(dispatch, getState, extra) {
          var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
          var abortController = new AC();
          var abortReason;
          var started = false;
          function abort(reason) {
            abortReason = reason;
            abortController.abort();
          }
          var promise2 = function() {
            return __async(this, null, function() {
              var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
              return __generator(this, function(_c) {
                switch (_c.label) {
                  case 0:
                    _c.trys.push([0, 4, , 5]);
                    conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState, extra });
                    if (!isThenable(conditionResult))
                      return [3, 2];
                    return [4, conditionResult];
                  case 1:
                    conditionResult = _c.sent();
                    _c.label = 2;
                  case 2:
                    if (conditionResult === false || abortController.signal.aborted) {
                      throw {
                        name: "ConditionError",
                        message: "Aborted due to condition callback returning false."
                      };
                    }
                    started = true;
                    abortedPromise = new Promise(function(_5, reject) {
                      return abortController.signal.addEventListener("abort", function() {
                        return reject({
                          name: "AbortError",
                          message: abortReason || "Aborted"
                        });
                      });
                    });
                    dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId, arg }, { getState, extra })));
                    return [4, Promise.race([
                      abortedPromise,
                      Promise.resolve(payloadCreator(arg, {
                        dispatch,
                        getState,
                        extra,
                        requestId,
                        signal: abortController.signal,
                        abort,
                        rejectWithValue: function(value, meta) {
                          return new RejectWithValue(value, meta);
                        },
                        fulfillWithValue: function(value, meta) {
                          return new FulfillWithMeta(value, meta);
                        }
                      })).then(function(result) {
                        if (result instanceof RejectWithValue) {
                          throw result;
                        }
                        if (result instanceof FulfillWithMeta) {
                          return fulfilled(result.payload, requestId, arg, result.meta);
                        }
                        return fulfilled(result, requestId, arg);
                      })
                    ])];
                  case 3:
                    finalAction = _c.sent();
                    return [3, 5];
                  case 4:
                    err_1 = _c.sent();
                    finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                    return [3, 5];
                  case 5:
                    skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                    if (!skipDispatch) {
                      dispatch(finalAction);
                    }
                    return [2, finalAction];
                }
              });
            });
          }();
          return Object.assign(promise2, {
            abort,
            requestId,
            arg,
            unwrap: function() {
              return promise2.then(unwrapResult);
            }
          });
        };
      }
      return Object.assign(actionCreator, {
        pending,
        rejected,
        fulfilled,
        typePrefix
      });
    }
    createAsyncThunk2.withTypes = function() {
      return createAsyncThunk2;
    };
    return createAsyncThunk2;
  }();
  function unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) {
      throw action.payload;
    }
    if (action.error) {
      throw action.error;
    }
    return action.payload;
  }
  function isThenable(value) {
    return value !== null && typeof value === "object" && typeof value.then === "function";
  }
  var task = "task";
  var listener = "listener";
  var completed = "completed";
  var cancelled = "cancelled";
  var taskCancelled = "task-" + cancelled;
  var taskCompleted = "task-" + completed;
  var listenerCancelled = listener + "-" + cancelled;
  var listenerCompleted = listener + "-" + completed;
  var TaskAbortError = (
    /** @class */
    function() {
      function TaskAbortError2(code) {
        this.code = code;
        this.name = "TaskAbortError";
        this.message = task + " " + cancelled + " (reason: " + code + ")";
      }
      return TaskAbortError2;
    }()
  );
  var alm = "listenerMiddleware";
  var addListener = createAction(alm + "/add");
  var clearAllListeners = createAction(alm + "/removeAll");
  var removeListener = createAction(alm + "/remove");
  var promise;
  var queueMicrotaskShim = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis) : function(cb) {
    return (promise || (promise = Promise.resolve())).then(cb).catch(function(err) {
      return setTimeout(function() {
        throw err;
      }, 0);
    });
  };
  var createQueueWithTimer = function(timeout) {
    return function(notify) {
      setTimeout(notify, timeout);
    };
  };
  var rAF = typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10);
  F2();

  // src/client/store.ts
  var initEnemies = [];
  var initShells = [];
  var enemiesSlice = createSlice({
    name: "enemies",
    initialState: initEnemies,
    reducers: {
      updateEnemies: (state2, action) => {
        return action.payload;
      }
    }
  });
  var shellsSlice = createSlice({
    name: "shells",
    initialState: initShells,
    reducers: {
      updateShells: (state2, action) => {
        return action.payload;
      }
    }
  });
  var store = configureStore({
    reducer: combineReducers({
      enemies: enemiesSlice.reducer,
      shells: shellsSlice.reducer
    })
  });
  var { updateEnemies } = enemiesSlice.actions;
  var { updateShells } = shellsSlice.actions;

  // src/client/main.tsx
  init_preact_module();

  // src/client/node_modules/react-redux/es/index.js
  var import_shim = __toESM(require_shim());
  var import_with_selector = __toESM(require_with_selector());

  // src/client/node_modules/react-redux/es/utils/reactBatchedUpdates.js
  var import_react_dom = __toESM(require_compat());

  // src/client/node_modules/react-redux/es/utils/batch.js
  function defaultNoopBatch(callback) {
    callback();
  }
  var batch = defaultNoopBatch;
  var setBatch = (newBatch) => batch = newBatch;
  var getBatch = () => batch;

  // src/client/node_modules/react-redux/es/hooks/useSelector.js
  var import_react3 = __toESM(require_compat());

  // src/client/node_modules/react-redux/es/hooks/useReduxContext.js
  var import_react2 = __toESM(require_compat());

  // src/client/node_modules/react-redux/es/components/Context.js
  var import_react = __toESM(require_compat());
  var ReactReduxContext = /* @__PURE__ */ (0, import_react.createContext)(null);
  if (true) {
    ReactReduxContext.displayName = "ReactRedux";
  }

  // src/client/node_modules/react-redux/es/hooks/useReduxContext.js
  function useReduxContext() {
    const contextValue = (0, import_react2.useContext)(ReactReduxContext);
    if (!contextValue) {
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    }
    return contextValue;
  }

  // src/client/node_modules/react-redux/es/utils/useSyncExternalStore.js
  var notInitialized = () => {
    throw new Error("uSES not initialized!");
  };

  // src/client/node_modules/react-redux/es/hooks/useSelector.js
  var useSyncExternalStoreWithSelector = notInitialized;
  var initializeUseSelector = (fn2) => {
    useSyncExternalStoreWithSelector = fn2;
  };
  var refEquality = (a5, b4) => a5 === b4;
  function createSelectorHook(context = ReactReduxContext) {
    const useReduxContext2 = context === ReactReduxContext ? useReduxContext : () => (0, import_react3.useContext)(context);
    return function useSelector2(selector, equalityFn = refEquality) {
      if (true) {
        if (!selector) {
          throw new Error(`You must pass a selector to useSelector`);
        }
        if (typeof selector !== "function") {
          throw new Error(`You must pass a function as a selector to useSelector`);
        }
        if (typeof equalityFn !== "function") {
          throw new Error(`You must pass a function as an equality function to useSelector`);
        }
      }
      const {
        store: store2,
        subscription,
        getServerState
      } = useReduxContext2();
      const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store2.getState, getServerState || store2.getState, selector, equalityFn);
      (0, import_react3.useDebugValue)(selectedState);
      return selectedState;
    };
  }
  var useSelector = /* @__PURE__ */ createSelectorHook();

  // src/client/node_modules/react-redux/es/components/connect.js
  var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
  var import_react5 = __toESM(require_compat());
  var import_react_is = __toESM(require_react_is2());

  // src/client/node_modules/react-redux/es/utils/Subscription.js
  function createListenerCollection() {
    const batch2 = getBatch();
    let first = null;
    let last = null;
    return {
      clear() {
        first = null;
        last = null;
      },
      notify() {
        batch2(() => {
          let listener2 = first;
          while (listener2) {
            listener2.callback();
            listener2 = listener2.next;
          }
        });
      },
      get() {
        let listeners = [];
        let listener2 = first;
        while (listener2) {
          listeners.push(listener2);
          listener2 = listener2.next;
        }
        return listeners;
      },
      subscribe(callback) {
        let isSubscribed = true;
        let listener2 = last = {
          callback,
          next: null,
          prev: last
        };
        if (listener2.prev) {
          listener2.prev.next = listener2;
        } else {
          first = listener2;
        }
        return function unsubscribe() {
          if (!isSubscribed || first === null)
            return;
          isSubscribed = false;
          if (listener2.next) {
            listener2.next.prev = listener2.prev;
          } else {
            last = listener2.prev;
          }
          if (listener2.prev) {
            listener2.prev.next = listener2.next;
          } else {
            first = listener2.next;
          }
        };
      }
    };
  }
  var nullListeners = {
    notify() {
    },
    get: () => []
  };
  function createSubscription(store2, parentSub) {
    let unsubscribe;
    let listeners = nullListeners;
    function addNestedSub(listener2) {
      trySubscribe();
      return listeners.subscribe(listener2);
    }
    function notifyNestedSubs() {
      listeners.notify();
    }
    function handleChangeWrapper() {
      if (subscription.onStateChange) {
        subscription.onStateChange();
      }
    }
    function isSubscribed() {
      return Boolean(unsubscribe);
    }
    function trySubscribe() {
      if (!unsubscribe) {
        unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store2.subscribe(handleChangeWrapper);
        listeners = createListenerCollection();
      }
    }
    function tryUnsubscribe() {
      if (unsubscribe) {
        unsubscribe();
        unsubscribe = void 0;
        listeners.clear();
        listeners = nullListeners;
      }
    }
    const subscription = {
      addNestedSub,
      notifyNestedSubs,
      handleChangeWrapper,
      isSubscribed,
      trySubscribe,
      tryUnsubscribe,
      getListeners: () => listeners
    };
    return subscription;
  }

  // src/client/node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
  var import_react4 = __toESM(require_compat());
  var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
  var useIsomorphicLayoutEffect = canUseDOM ? import_react4.useLayoutEffect : import_react4.useEffect;

  // src/client/node_modules/react-redux/es/components/connect.js
  var useSyncExternalStore = notInitialized;
  var initializeConnect = (fn2) => {
    useSyncExternalStore = fn2;
  };

  // src/client/node_modules/react-redux/es/components/Provider.js
  var import_react6 = __toESM(require_compat());
  function Provider({
    store: store2,
    context,
    children,
    serverState
  }) {
    const contextValue = (0, import_react6.useMemo)(() => {
      const subscription = createSubscription(store2);
      return {
        store: store2,
        subscription,
        getServerState: serverState ? () => serverState : void 0
      };
    }, [store2, serverState]);
    const previousState = (0, import_react6.useMemo)(() => store2.getState(), [store2]);
    useIsomorphicLayoutEffect(() => {
      const {
        subscription
      } = contextValue;
      subscription.onStateChange = subscription.notifyNestedSubs;
      subscription.trySubscribe();
      if (previousState !== store2.getState()) {
        subscription.notifyNestedSubs();
      }
      return () => {
        subscription.tryUnsubscribe();
        subscription.onStateChange = void 0;
      };
    }, [contextValue, previousState]);
    const Context = context || ReactReduxContext;
    return /* @__PURE__ */ import_react6.default.createElement(Context.Provider, {
      value: contextValue
    }, children);
  }
  var Provider_default = Provider;

  // src/client/node_modules/react-redux/es/hooks/useStore.js
  var import_react7 = __toESM(require_compat());

  // src/client/node_modules/react-redux/es/index.js
  initializeUseSelector(import_with_selector.useSyncExternalStoreWithSelector);
  initializeConnect(import_shim.useSyncExternalStore);
  setBatch(import_react_dom.unstable_batchedUpdates);

  // src/client/hooks.ts
  var useAppSelector = useSelector;

  // src/client/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  init_preact_module();
  init_preact_module();
  var _4 = 0;
  function o5(o6, e3, n3, t4, f5, l5) {
    var s5, u5, a5 = {};
    for (u5 in e3)
      "ref" == u5 ? s5 = e3[u5] : a5[u5] = e3[u5];
    var i5 = { type: o6, props: a5, key: n3, ref: s5, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_4, __source: f5, __self: l5 };
    if ("function" == typeof o6 && (s5 = o6.defaultProps))
      for (u5 in s5)
        void 0 === a5[u5] && (a5[u5] = s5[u5]);
    return l.vnode && l.vnode(i5), i5;
  }

  // src/client/components/ShellsList.tsx
  function ShellsList() {
    const shells = useAppSelector((state2) => state2.shells);
    return /* @__PURE__ */ o5("div", { children: [
      /* @__PURE__ */ o5("p", { children: [
        "Shells: ",
        shells.length
      ] }),
      /* @__PURE__ */ o5("ul", { children: shells.map((s5) => /* @__PURE__ */ o5("li", { children: [
        s5.name,
        ", hp: ",
        s5.health,
        ", power: ",
        s5.power
      ] })) })
    ] });
  }

  // src/client/components/EnemiesList.tsx
  function EnemiesList() {
    const enemies = useAppSelector((state2) => state2.enemies);
    function capitalize(s5) {
      return s5.charAt(0).toUpperCase() + s5.slice(1, s5.length);
    }
    return /* @__PURE__ */ o5("div", { children: [
      /* @__PURE__ */ o5("p", { children: [
        "Enemies: ",
        enemies.length
      ] }),
      /* @__PURE__ */ o5("ul", { children: enemies.map((e3) => /* @__PURE__ */ o5("li", { children: [
        capitalize(e3.type),
        ", hp: ",
        e3.health
      ] })) })
    ] });
  }

  // src/client/App.tsx
  function App() {
    return /* @__PURE__ */ o5("div", { children: [
      /* @__PURE__ */ o5(EnemiesList, {}),
      /* @__PURE__ */ o5(ShellsList, {})
    ] });
  }

  // src/client/main.tsx
  var SERVER_URL = "ws://localhost:8080";
  var PROTOCOL = "liege";
  var attackBtn = document.getElementById("attack-btn");
  attackBtn.addEventListener("click", onAttack);
  var state = {
    manifested: false,
    shell: void 0
  };
  var enemyData = [];
  B(
    /* @__PURE__ */ o5(Provider_default, { store, children: /* @__PURE__ */ o5(App, {}) }),
    document.body
  );
  var ws = new WebSocket(SERVER_URL, PROTOCOL);
  ws.onopen = (event) => {
    ws.send("This is sent from the client to the server");
  };
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    console.log(typeof event.data, msg);
    if (msg.type == "manifestation") {
      const shellState = JSON.parse(msg.data);
      console.log("shellState", shellState);
      const data = shellState.shell;
      state.shell = data;
      state.manifested = true;
    }
    if (msg.type == "worldstate") {
      const worldState = JSON.parse(msg.data);
      console.log("worldState", worldState);
      enemyData = [worldState.monster];
      store.dispatch(updateEnemies(enemyData));
      const shells = worldState.shells;
      store.dispatch(updateShells(shells));
    }
  };
  function onAttack() {
    ws.send("attack");
  }
})();
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
