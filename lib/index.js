!(function(A, t) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = t(require('jquery'), require('echarts')))
		: 'function' == typeof define && define.amd
		? define(['jquery', 'echarts'], t)
		: 'object' == typeof exports
		? (exports['whdx-middle-ui'] = t(require('jquery'), require('echarts')))
		: (A['whdx-middle-ui'] = t(A.jquery, A.echarts))
})(window, function(A, t) {
	return (function(A) {
		var t = {}
		function e(g) {
			if (t[g]) return t[g].exports
			var C = (t[g] = { i: g, l: !1, exports: {} })
			return A[g].call(C.exports, C, C.exports, e), (C.l = !0), C.exports
		}
		return (
			(e.m = A),
			(e.c = t),
			(e.d = function(A, t, g) {
				e.o(A, t) ||
					Object.defineProperty(A, t, { enumerable: !0, get: g })
			}),
			(e.r = function(A) {
				'undefined' != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(A, Symbol.toStringTag, {
						value: 'Module'
					}),
					Object.defineProperty(A, '__esModule', { value: !0 })
			}),
			(e.t = function(A, t) {
				if ((1 & t && (A = e(A)), 8 & t)) return A
				if (4 & t && 'object' == typeof A && A && A.__esModule) return A
				var g = Object.create(null)
				if (
					(e.r(g),
					Object.defineProperty(g, 'default', {
						enumerable: !0,
						value: A
					}),
					2 & t && 'string' != typeof A)
				)
					for (var C in A)
						e.d(
							g,
							C,
							function(t) {
								return A[t]
							}.bind(null, C)
						)
				return g
			}),
			(e.n = function(A) {
				var t =
					A && A.__esModule
						? function() {
								return A.default
						  }
						: function() {
								return A
						  }
				return e.d(t, 'a', t), t
			}),
			(e.o = function(A, t) {
				return Object.prototype.hasOwnProperty.call(A, t)
			}),
			(e.p = ''),
			e((e.s = 223))
		)
	})([
		function(A, t, e) {
			'use strict'
			function g(A, t, e, g, C, n, I, r) {
				var o,
					i = 'function' == typeof A ? A.options : A
				if (
					(t &&
						((i.render = t),
						(i.staticRenderFns = e),
						(i._compiled = !0)),
					g && (i.functional = !0),
					n && (i._scopeId = 'data-v-' + n),
					I
						? ((o = function(A) {
								;(A =
									A ||
									(this.$vnode && this.$vnode.ssrContext) ||
									(this.parent &&
										this.parent.$vnode &&
										this.parent.$vnode.ssrContext)) ||
									'undefined' == typeof __VUE_SSR_CONTEXT__ ||
									(A = __VUE_SSR_CONTEXT__),
									C && C.call(this, A),
									A &&
										A._registeredComponents &&
										A._registeredComponents.add(I)
						  }),
						  (i._ssrRegister = o))
						: C &&
						  (o = r
								? function() {
										C.call(
											this,
											this.$root.$options.shadowRoot
										)
								  }
								: C),
					o)
				)
					if (i.functional) {
						i._injectStyles = o
						var s = i.render
						i.render = function(A, t) {
							return o.call(t), s(A, t)
						}
					} else {
						var a = i.beforeCreate
						i.beforeCreate = a ? [].concat(a, o) : [o]
					}
				return { exports: A, options: i }
			}
			e.d(t, 'a', function() {
				return g
			})
		},
		function(A, t) {
			var e = (A.exports =
				'undefined' != typeof window && window.Math == Math
					? window
					: 'undefined' != typeof self && self.Math == Math
					? self
					: Function('return this')())
			'number' == typeof __g && (__g = e)
		},
		function(A, t, e) {
			'use strict'
			A.exports = function(A) {
				var t = []
				return (
					(t.toString = function() {
						return this.map(function(t) {
							var e = (function(A, t) {
								var e = A[1] || '',
									g = A[3]
								if (!g) return e
								if (t && 'function' == typeof btoa) {
									var C =
											((I = g),
											'/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
												btoa(
													unescape(
														encodeURIComponent(
															JSON.stringify(I)
														)
													)
												) +
												' */'),
										n = g.sources.map(function(A) {
											return (
												'/*# sourceURL=' +
												g.sourceRoot +
												A +
												' */'
											)
										})
									return [e]
										.concat(n)
										.concat([C])
										.join('\n')
								}
								var I
								return [e].join('\n')
							})(t, A)
							return t[2] ? '@media ' + t[2] + '{' + e + '}' : e
						}).join('')
					}),
					(t.i = function(A, e) {
						'string' == typeof A && (A = [[null, A, '']])
						for (var g = {}, C = 0; C < this.length; C++) {
							var n = this[C][0]
							null != n && (g[n] = !0)
						}
						for (C = 0; C < A.length; C++) {
							var I = A[C]
							;(null != I[0] && g[I[0]]) ||
								(e && !I[2]
									? (I[2] = e)
									: e &&
									  (I[2] = '(' + I[2] + ') and (' + e + ')'),
								t.push(I))
						}
					}),
					t
				)
			}
		},
		function(A, t, e) {
			var g,
				C,
				n = {},
				I =
					((g = function() {
						return (
							window && document && document.all && !window.atob
						)
					}),
					function() {
						return void 0 === C && (C = g.apply(this, arguments)), C
					}),
				r = (function(A) {
					var t = {}
					return function(A, e) {
						if ('function' == typeof A) return A()
						if (void 0 === t[A]) {
							var g = function(A, t) {
								return t
									? t.querySelector(A)
									: document.querySelector(A)
							}.call(this, A, e)
							if (
								window.HTMLIFrameElement &&
								g instanceof window.HTMLIFrameElement
							)
								try {
									g = g.contentDocument.head
								} catch (A) {
									g = null
								}
							t[A] = g
						}
						return t[A]
					}
				})(),
				o = null,
				i = 0,
				s = [],
				a = e(38)
			function c(A, t) {
				for (var e = 0; e < A.length; e++) {
					var g = A[e],
						C = n[g.id]
					if (C) {
						C.refs++
						for (var I = 0; I < C.parts.length; I++)
							C.parts[I](g.parts[I])
						for (; I < g.parts.length; I++)
							C.parts.push(d(g.parts[I], t))
					} else {
						var r = []
						for (I = 0; I < g.parts.length; I++)
							r.push(d(g.parts[I], t))
						n[g.id] = { id: g.id, refs: 1, parts: r }
					}
				}
			}
			function l(A, t) {
				for (var e = [], g = {}, C = 0; C < A.length; C++) {
					var n = A[C],
						I = t.base ? n[0] + t.base : n[0],
						r = { css: n[1], media: n[2], sourceMap: n[3] }
					g[I]
						? g[I].parts.push(r)
						: e.push((g[I] = { id: I, parts: [r] }))
				}
				return e
			}
			function u(A, t) {
				var e = r(A.insertInto)
				if (!e)
					throw new Error(
						"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
					)
				var g = s[s.length - 1]
				if ('top' === A.insertAt)
					g
						? g.nextSibling
							? e.insertBefore(t, g.nextSibling)
							: e.appendChild(t)
						: e.insertBefore(t, e.firstChild),
						s.push(t)
				else if ('bottom' === A.insertAt) e.appendChild(t)
				else {
					if ('object' != typeof A.insertAt || !A.insertAt.before)
						throw new Error(
							"[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
						)
					var C = r(A.insertAt.before, e)
					e.insertBefore(t, C)
				}
			}
			function p(A) {
				if (null === A.parentNode) return !1
				A.parentNode.removeChild(A)
				var t = s.indexOf(A)
				t >= 0 && s.splice(t, 1)
			}
			function h(A) {
				var t = document.createElement('style')
				if (
					(void 0 === A.attrs.type && (A.attrs.type = 'text/css'),
					void 0 === A.attrs.nonce)
				) {
					var g = (function() {
						0
						return e.nc
					})()
					g && (A.attrs.nonce = g)
				}
				return B(t, A.attrs), u(A, t), t
			}
			function B(A, t) {
				Object.keys(t).forEach(function(e) {
					A.setAttribute(e, t[e])
				})
			}
			function d(A, t) {
				var e, g, C, n
				if (t.transform && A.css) {
					if (
						!(n =
							'function' == typeof t.transform
								? t.transform(A.css)
								: t.transform.default(A.css))
					)
						return function() {}
					A.css = n
				}
				if (t.singleton) {
					var I = i++
					;(e = o || (o = h(t))),
						(g = Q.bind(null, e, I, !1)),
						(C = Q.bind(null, e, I, !0))
				} else
					A.sourceMap &&
					'function' == typeof URL &&
					'function' == typeof URL.createObjectURL &&
					'function' == typeof URL.revokeObjectURL &&
					'function' == typeof Blob &&
					'function' == typeof btoa
						? ((e = (function(A) {
								var t = document.createElement('link')
								return (
									void 0 === A.attrs.type &&
										(A.attrs.type = 'text/css'),
									(A.attrs.rel = 'stylesheet'),
									B(t, A.attrs),
									u(A, t),
									t
								)
						  })(t)),
						  (g = function(A, t, e) {
								var g = e.css,
									C = e.sourceMap,
									n = void 0 === t.convertToAbsoluteUrls && C
								;(t.convertToAbsoluteUrls || n) && (g = a(g))
								C &&
									(g +=
										'\n/*# sourceMappingURL=data:application/json;base64,' +
										btoa(
											unescape(
												encodeURIComponent(
													JSON.stringify(C)
												)
											)
										) +
										' */')
								var I = new Blob([g], { type: 'text/css' }),
									r = A.href
								;(A.href = URL.createObjectURL(I)),
									r && URL.revokeObjectURL(r)
						  }.bind(null, e, t)),
						  (C = function() {
								p(e), e.href && URL.revokeObjectURL(e.href)
						  }))
						: ((e = h(t)),
						  (g = function(A, t) {
								var e = t.css,
									g = t.media
								g && A.setAttribute('media', g)
								if (A.styleSheet) A.styleSheet.cssText = e
								else {
									for (; A.firstChild; )
										A.removeChild(A.firstChild)
									A.appendChild(document.createTextNode(e))
								}
						  }.bind(null, e)),
						  (C = function() {
								p(e)
						  }))
				return (
					g(A),
					function(t) {
						if (t) {
							if (
								t.css === A.css &&
								t.media === A.media &&
								t.sourceMap === A.sourceMap
							)
								return
							g((A = t))
						} else C()
					}
				)
			}
			A.exports = function(A, t) {
				if (
					'undefined' != typeof DEBUG &&
					DEBUG &&
					'object' != typeof document
				)
					throw new Error(
						'The style-loader cannot be used in a non-browser environment'
					)
				;((t = t || {}).attrs =
					'object' == typeof t.attrs ? t.attrs : {}),
					t.singleton ||
						'boolean' == typeof t.singleton ||
						(t.singleton = I()),
					t.insertInto || (t.insertInto = 'head'),
					t.insertAt || (t.insertAt = 'bottom')
				var e = l(A, t)
				return (
					c(e, t),
					function(A) {
						for (var g = [], C = 0; C < e.length; C++) {
							var I = e[C]
							;(r = n[I.id]).refs--, g.push(r)
						}
						A && c(l(A, t), t)
						for (C = 0; C < g.length; C++) {
							var r
							if (0 === (r = g[C]).refs) {
								for (var o = 0; o < r.parts.length; o++)
									r.parts[o]()
								delete n[r.id]
							}
						}
					}
				)
			}
			var f,
				w =
					((f = []),
					function(A, t) {
						return (f[A] = t), f.filter(Boolean).join('\n')
					})
			function Q(A, t, e, g) {
				var C = e ? '' : g.css
				if (A.styleSheet) A.styleSheet.cssText = w(t, C)
				else {
					var n = document.createTextNode(C),
						I = A.childNodes
					I[t] && A.removeChild(I[t]),
						I.length ? A.insertBefore(n, I[t]) : A.appendChild(n)
				}
			}
		},
		function(A, t) {
			var e = (A.exports = { version: '2.6.2' })
			'number' == typeof __e && (__e = e)
		},
		function(A, t, e) {
			var g = e(65)
			A.exports = function(A, t, e) {
				return (
					t in A
						? g(A, t, {
								value: e,
								enumerable: !0,
								configurable: !0,
								writable: !0
						  })
						: (A[t] = e),
					A
				)
			}
		},
		function(A, t, e) {
			A.exports = !e(17)(function() {
				return (
					7 !=
					Object.defineProperty({}, 'a', {
						get: function() {
							return 7
						}
					}).a
				)
			})
		},
		function(A, t, e) {
			var g = e(11),
				C = e(40),
				n = e(34),
				I = Object.defineProperty
			t.f = e(6)
				? Object.defineProperty
				: function(A, t, e) {
						if ((g(A), (t = n(t, !0)), g(e), C))
							try {
								return I(A, t, e)
							} catch (A) {}
						if ('get' in e || 'set' in e)
							throw TypeError('Accessors not supported!')
						return 'value' in e && (A[t] = e.value), A
				  }
		},
		function(A, t, e) {
			var g = e(31)('wks'),
				C = e(26),
				n = e(1).Symbol,
				I = 'function' == typeof n
			;(A.exports = function(A) {
				return (
					g[A] || (g[A] = (I && n[A]) || (I ? n : C)('Symbol.' + A))
				)
			}).store = g
		},
		function(A, t) {
			A.exports = function(A) {
				return 'object' == typeof A
					? null !== A
					: 'function' == typeof A
			}
		},
		function(A, t) {
			var e = {}.hasOwnProperty
			A.exports = function(A, t) {
				return e.call(A, t)
			}
		},
		function(A, t, e) {
			var g = e(9)
			A.exports = function(A) {
				if (!g(A)) throw TypeError(A + ' is not an object!')
				return A
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(106),
				C = e(188),
				n = Object.prototype.toString
			function I(A) {
				return '[object Array]' === n.call(A)
			}
			function r(A) {
				return null !== A && 'object' == typeof A
			}
			function o(A) {
				return '[object Function]' === n.call(A)
			}
			function i(A, t) {
				if (null != A)
					if (('object' != typeof A && (A = [A]), I(A)))
						for (var e = 0, g = A.length; e < g; e++)
							t.call(null, A[e], e, A)
					else
						for (var C in A)
							Object.prototype.hasOwnProperty.call(A, C) &&
								t.call(null, A[C], C, A)
			}
			A.exports = {
				isArray: I,
				isArrayBuffer: function(A) {
					return '[object ArrayBuffer]' === n.call(A)
				},
				isBuffer: C,
				isFormData: function(A) {
					return (
						'undefined' != typeof FormData && A instanceof FormData
					)
				},
				isArrayBufferView: function(A) {
					return 'undefined' != typeof ArrayBuffer &&
						ArrayBuffer.isView
						? ArrayBuffer.isView(A)
						: A && A.buffer && A.buffer instanceof ArrayBuffer
				},
				isString: function(A) {
					return 'string' == typeof A
				},
				isNumber: function(A) {
					return 'number' == typeof A
				},
				isObject: r,
				isUndefined: function(A) {
					return void 0 === A
				},
				isDate: function(A) {
					return '[object Date]' === n.call(A)
				},
				isFile: function(A) {
					return '[object File]' === n.call(A)
				},
				isBlob: function(A) {
					return '[object Blob]' === n.call(A)
				},
				isFunction: o,
				isStream: function(A) {
					return r(A) && o(A.pipe)
				},
				isURLSearchParams: function(A) {
					return (
						'undefined' != typeof URLSearchParams &&
						A instanceof URLSearchParams
					)
				},
				isStandardBrowserEnv: function() {
					return (
						('undefined' == typeof navigator ||
							'ReactNative' !== navigator.product) &&
						'undefined' != typeof window &&
						'undefined' != typeof document
					)
				},
				forEach: i,
				merge: function A() {
					var t = {}
					function e(e, g) {
						'object' == typeof t[g] && 'object' == typeof e
							? (t[g] = A(t[g], e))
							: (t[g] = e)
					}
					for (var g = 0, C = arguments.length; g < C; g++)
						i(arguments[g], e)
					return t
				},
				extend: function(A, t, e) {
					return (
						i(t, function(t, C) {
							A[C] = e && 'function' == typeof t ? g(t, e) : t
						}),
						A
					)
				},
				trim: function(A) {
					return A.replace(/^\s*/, '').replace(/\s*$/, '')
				}
			}
		},
		function(A, t, e) {
			A.exports = e(66)
		},
		function(t, e) {
			t.exports = A
		},
		function(A, t, e) {
			var g = e(1),
				C = e(4),
				n = e(20),
				I = e(16),
				r = e(10),
				o = function(A, t, e) {
					var i,
						s,
						a,
						c = A & o.F,
						l = A & o.G,
						u = A & o.S,
						p = A & o.P,
						h = A & o.B,
						B = A & o.W,
						d = l ? C : C[t] || (C[t] = {}),
						f = d.prototype,
						w = l ? g : u ? g[t] : (g[t] || {}).prototype
					for (i in (l && (e = t), e))
						((s = !c && w && void 0 !== w[i]) && r(d, i)) ||
							((a = s ? w[i] : e[i]),
							(d[i] =
								l && 'function' != typeof w[i]
									? e[i]
									: h && s
									? n(a, g)
									: B && w[i] == a
									? (function(A) {
											var t = function(t, e, g) {
												if (this instanceof A) {
													switch (arguments.length) {
														case 0:
															return new A()
														case 1:
															return new A(t)
														case 2:
															return new A(t, e)
													}
													return new A(t, e, g)
												}
												return A.apply(this, arguments)
											}
											return (
												(t.prototype = A.prototype), t
											)
									  })(a)
									: p && 'function' == typeof a
									? n(Function.call, a)
									: a),
							p &&
								(((d.virtual || (d.virtual = {}))[i] = a),
								A & o.R && f && !f[i] && I(f, i, a)))
				}
			;(o.F = 1),
				(o.G = 2),
				(o.S = 4),
				(o.P = 8),
				(o.B = 16),
				(o.W = 32),
				(o.U = 64),
				(o.R = 128),
				(A.exports = o)
		},
		function(A, t, e) {
			var g = e(7),
				C = e(21)
			A.exports = e(6)
				? function(A, t, e) {
						return g.f(A, t, C(1, e))
				  }
				: function(A, t, e) {
						return (A[t] = e), A
				  }
		},
		function(A, t) {
			A.exports = function(A) {
				try {
					return !!A()
				} catch (A) {
					return !0
				}
			}
		},
		function(A, t, e) {
			var g = e(35),
				C = e(24)
			A.exports = function(A) {
				return g(C(A))
			}
		},
		function(A, t, e) {
			var g = e(13)
			function C() {
				return (
					(A.exports = C =
						g ||
						function(A) {
							for (var t = 1; t < arguments.length; t++) {
								var e = arguments[t]
								for (var g in e)
									Object.prototype.hasOwnProperty.call(
										e,
										g
									) && (A[g] = e[g])
							}
							return A
						}),
					C.apply(this, arguments)
				)
			}
			A.exports = C
		},
		function(A, t, e) {
			var g = e(27)
			A.exports = function(A, t, e) {
				if ((g(A), void 0 === t)) return A
				switch (e) {
					case 1:
						return function(e) {
							return A.call(t, e)
						}
					case 2:
						return function(e, g) {
							return A.call(t, e, g)
						}
					case 3:
						return function(e, g, C) {
							return A.call(t, e, g, C)
						}
				}
				return function() {
					return A.apply(t, arguments)
				}
			}
		},
		function(A, t) {
			A.exports = function(A, t) {
				return {
					enumerable: !(1 & A),
					configurable: !(2 & A),
					writable: !(4 & A),
					value: t
				}
			}
		},
		function(A, t) {
			var e = {}.toString
			A.exports = function(A) {
				return e.call(A).slice(8, -1)
			}
		},
		function(A, t) {
			A.exports = !0
		},
		function(A, t) {
			A.exports = function(A) {
				if (null == A) throw TypeError("Can't call method on  " + A)
				return A
			}
		},
		function(A, t) {
			var e = Math.ceil,
				g = Math.floor
			A.exports = function(A) {
				return isNaN((A = +A)) ? 0 : (A > 0 ? g : e)(A)
			}
		},
		function(A, t) {
			var e = 0,
				g = Math.random()
			A.exports = function(A) {
				return 'Symbol('.concat(
					void 0 === A ? '' : A,
					')_',
					(++e + g).toString(36)
				)
			}
		},
		function(A, t) {
			A.exports = function(A) {
				if ('function' != typeof A)
					throw TypeError(A + ' is not a function!')
				return A
			}
		},
		function(A, t, e) {
			var g = e(41),
				C = e(32)
			A.exports =
				Object.keys ||
				function(A) {
					return g(A, C)
				}
		},
		function(A, t, e) {
			var g = e(31)('keys'),
				C = e(26)
			A.exports = function(A) {
				return g[A] || (g[A] = C(A))
			}
		},
		function(A, t, e) {
			var g = e(9),
				C = e(1).document,
				n = g(C) && g(C.createElement)
			A.exports = function(A) {
				return n ? C.createElement(A) : {}
			}
		},
		function(A, t, e) {
			var g = e(4),
				C = e(1),
				n = C['__core-js_shared__'] || (C['__core-js_shared__'] = {})
			;(A.exports = function(A, t) {
				return n[A] || (n[A] = void 0 !== t ? t : {})
			})('versions', []).push({
				version: g.version,
				mode: e(23) ? 'pure' : 'global',
				copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
			})
		},
		function(A, t) {
			A.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
				','
			)
		},
		function(A, t) {
			t.f = {}.propertyIsEnumerable
		},
		function(A, t, e) {
			var g = e(9)
			A.exports = function(A, t) {
				if (!g(A)) return A
				var e, C
				if (
					t &&
					'function' == typeof (e = A.toString) &&
					!g((C = e.call(A)))
				)
					return C
				if ('function' == typeof (e = A.valueOf) && !g((C = e.call(A))))
					return C
				if (
					!t &&
					'function' == typeof (e = A.toString) &&
					!g((C = e.call(A)))
				)
					return C
				throw TypeError("Can't convert object to primitive value")
			}
		},
		function(A, t, e) {
			var g = e(22)
			A.exports = Object('z').propertyIsEnumerable(0)
				? Object
				: function(A) {
						return 'String' == g(A) ? A.split('') : Object(A)
				  }
		},
		function(A, t, e) {
			var g = e(25),
				C = Math.min
			A.exports = function(A) {
				return A > 0 ? C(g(A), 9007199254740991) : 0
			}
		},
		function(A, t, e) {
			var g = e(24)
			A.exports = function(A) {
				return Object(g(A))
			}
		},
		function(A, t) {
			A.exports = function(A) {
				var t = 'undefined' != typeof window && window.location
				if (!t) throw new Error('fixUrls requires window.location')
				if (!A || 'string' != typeof A) return A
				var e = t.protocol + '//' + t.host,
					g = e + t.pathname.replace(/\/[^\/]*$/, '/')
				return A.replace(
					/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
					function(A, t) {
						var C,
							n = t
								.trim()
								.replace(/^"(.*)"$/, function(A, t) {
									return t
								})
								.replace(/^'(.*)'$/, function(A, t) {
									return t
								})
						return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
							n
						)
							? A
							: ((C =
									0 === n.indexOf('//')
										? n
										: 0 === n.indexOf('/')
										? e + n
										: g + n.replace(/^\.\//, '')),
							  'url(' + JSON.stringify(C) + ')')
					}
				)
			}
		},
		function(A, t) {
			t.f = Object.getOwnPropertySymbols
		},
		function(A, t, e) {
			A.exports =
				!e(6) &&
				!e(17)(function() {
					return (
						7 !=
						Object.defineProperty(e(30)('div'), 'a', {
							get: function() {
								return 7
							}
						}).a
					)
				})
		},
		function(A, t, e) {
			var g = e(10),
				C = e(18),
				n = e(45)(!1),
				I = e(29)('IE_PROTO')
			A.exports = function(A, t) {
				var e,
					r = C(A),
					o = 0,
					i = []
				for (e in r) e != I && g(r, e) && i.push(e)
				for (; t.length > o; )
					g(r, (e = t[o++])) && (~n(i, e) || i.push(e))
				return i
			}
		},
		function(A, t) {
			A.exports = {}
		},
		function(A, t, e) {
			'use strict'
			A.exports = function(A, t) {
				return 'string' != typeof A
					? A
					: (/^['"].*['"]$/.test(A) && (A = A.slice(1, -1)),
					  /["'() \t\n]/.test(A) || t
							? '"' +
							  A.replace(/"/g, '\\"').replace(/\n/g, '\\n') +
							  '"'
							: A)
			}
		},
		function(A, t, e) {
			var g = e(7).f,
				C = e(10),
				n = e(8)('toStringTag')
			A.exports = function(A, t, e) {
				A &&
					!C((A = e ? A : A.prototype), n) &&
					g(A, n, { configurable: !0, value: t })
			}
		},
		function(A, t, e) {
			var g = e(18),
				C = e(36),
				n = e(46)
			A.exports = function(A) {
				return function(t, e, I) {
					var r,
						o = g(t),
						i = C(o.length),
						s = n(I, i)
					if (A && e != e) {
						for (; i > s; ) if ((r = o[s++]) != r) return !0
					} else
						for (; i > s; s++)
							if ((A || s in o) && o[s] === e) return A || s || 0
					return !A && -1
				}
			}
		},
		function(A, t, e) {
			var g = e(25),
				C = Math.max,
				n = Math.min
			A.exports = function(A, t) {
				return (A = g(A)) < 0 ? C(A + t, 0) : n(A, t)
			}
		},
		function(A, t, e) {
			var g = e(127)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(130)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(132)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(136)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(138)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(140)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(143)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(147)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(152)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(156)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(158)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(160)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(179)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(181)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(183)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(186)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(206)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			var g = e(208)
			'string' == typeof g && (g = [[A.i, g, '']])
			var C = { hmr: !0, transform: void 0, insertInto: void 0 }
			e(3)(g, C)
			g.locals && (A.exports = g.locals)
		},
		function(A, t, e) {
			A.exports = e(69)
		},
		function(A, t, e) {
			e(67), (A.exports = e(4).Object.assign)
		},
		function(A, t, e) {
			var g = e(15)
			g(g.S + g.F, 'Object', { assign: e(68) })
		},
		function(A, t, e) {
			'use strict'
			var g = e(28),
				C = e(39),
				n = e(33),
				I = e(37),
				r = e(35),
				o = Object.assign
			A.exports =
				!o ||
				e(17)(function() {
					var A = {},
						t = {},
						e = Symbol(),
						g = 'abcdefghijklmnopqrst'
					return (
						(A[e] = 7),
						g.split('').forEach(function(A) {
							t[A] = A
						}),
						7 != o({}, A)[e] || Object.keys(o({}, t)).join('') != g
					)
				})
					? function(A, t) {
							for (
								var e = I(A),
									o = arguments.length,
									i = 1,
									s = C.f,
									a = n.f;
								o > i;

							)
								for (
									var c,
										l = r(arguments[i++]),
										u = s ? g(l).concat(s(l)) : g(l),
										p = u.length,
										h = 0;
									p > h;

								)
									a.call(l, (c = u[h++])) && (e[c] = l[c])
							return e
					  }
					: o
		},
		function(A, t, e) {
			e(70)
			var g = e(4).Object
			A.exports = function(A, t, e) {
				return g.defineProperty(A, t, e)
			}
		},
		function(A, t, e) {
			var g = e(15)
			g(g.S + g.F * !e(6), 'Object', { defineProperty: e(7).f })
		},
		function(A, t, e) {
			var g = e(1).document
			A.exports = g && g.documentElement
		},
		function(A, t, e) {
			'use strict'
			var g = e(27)
			function C(A) {
				var t, e
				;(this.promise = new A(function(A, g) {
					if (void 0 !== t || void 0 !== e)
						throw TypeError('Bad Promise constructor')
					;(t = A), (e = g)
				})),
					(this.resolve = g(t)),
					(this.reject = g(e))
			}
			A.exports.f = function(A) {
				return new C(A)
			}
		},
		function(A, t, e) {
			'use strict'
			;(function(t) {
				var g = e(12),
					C = e(191),
					n = { 'Content-Type': 'application/x-www-form-urlencoded' }
				function I(A, t) {
					!g.isUndefined(A) &&
						g.isUndefined(A['Content-Type']) &&
						(A['Content-Type'] = t)
				}
				var r,
					o = {
						adapter:
							('undefined' != typeof XMLHttpRequest
								? (r = e(107))
								: void 0 !== t && (r = e(107)),
							r),
						transformRequest: [
							function(A, t) {
								return (
									C(t, 'Content-Type'),
									g.isFormData(A) ||
									g.isArrayBuffer(A) ||
									g.isBuffer(A) ||
									g.isStream(A) ||
									g.isFile(A) ||
									g.isBlob(A)
										? A
										: g.isArrayBufferView(A)
										? A.buffer
										: g.isURLSearchParams(A)
										? (I(
												t,
												'application/x-www-form-urlencoded;charset=utf-8'
										  ),
										  A.toString())
										: g.isObject(A)
										? (I(
												t,
												'application/json;charset=utf-8'
										  ),
										  JSON.stringify(A))
										: A
								)
							}
						],
						transformResponse: [
							function(A) {
								if ('string' == typeof A)
									try {
										A = JSON.parse(A)
									} catch (A) {}
								return A
							}
						],
						timeout: 0,
						xsrfCookieName: 'XSRF-TOKEN',
						xsrfHeaderName: 'X-XSRF-TOKEN',
						maxContentLength: -1,
						validateStatus: function(A) {
							return A >= 200 && A < 300
						}
					}
				;(o.headers = {
					common: { Accept: 'application/json, text/plain, */*' }
				}),
					g.forEach(['delete', 'get', 'head'], function(A) {
						o.headers[A] = {}
					}),
					g.forEach(['post', 'put', 'patch'], function(A) {
						o.headers[A] = g.merge(n)
					}),
					(A.exports = o)
			}.call(this, e(190)))
		},
		function(A, t, e) {
			t.f = e(8)
		},
		function(A, t, e) {
			var g = e(1),
				C = e(4),
				n = e(23),
				I = e(74),
				r = e(7).f
			A.exports = function(A) {
				var t = C.Symbol || (C.Symbol = n ? {} : g.Symbol || {})
				'_' == A.charAt(0) || A in t || r(t, A, { value: I.f(A) })
			}
		},
		function(A, t, e) {
			A.exports = e(163)
		},
		function(A, t, e) {
			'use strict'
			e.r(t),
				e.d(t, 'LoggerType', function() {
					return o
				}),
				e.d(t, 'default', function() {
					return i
				})
			var g = e(118),
				C = e.n(g),
				n = e(119),
				I = e.n(n),
				r = ['', 'info', 'debug', 'error'],
				o = { None: 0, Info: 1, Debug: 2, Error: 3 },
				i = (function() {
					function A(t) {
						C()(this, A), (this.label = t), this.init()
					}
					return (
						I()(A, [
							{
								key: 'init',
								value: function() {
									var A = this
									;+this.label
										? r.forEach(function(t, e) {
												e < +A.label
													? (A[r[e]] = window.console[
															r[e]
													  ] = function() {})
													: (A[r[e]] =
															window.console[
																r[e]
															])
										  })
										: r.forEach(function(t, e) {
												A[r[e]] = window.console[
													r[e]
												] = function() {}
										  })
								}
							}
						]),
						A
					)
				})()
		},
		function(A, t, e) {
			var g = e(120)
			A.exports = function(A) {
				if (Array.isArray(A)) {
					for (var t = 0, e = new Array(A.length); t < A.length; t++)
						e[t] = A[t]
					return e
				}
				return g(A)
			}
		},
		function(A, t, e) {
			A.exports = e(161)
		},
		function(A, t, e) {
			A.exports = e(16)
		},
		function(A, t, e) {
			var g = e(11),
				C = e(95),
				n = e(32),
				I = e(29)('IE_PROTO'),
				r = function() {},
				o = function() {
					var A,
						t = e(30)('iframe'),
						g = n.length
					for (
						t.style.display = 'none',
							e(71).appendChild(t),
							t.src = 'javascript:',
							(A = t.contentWindow.document).open(),
							A.write('<script>document.F=Object</script>'),
							A.close(),
							o = A.F;
						g--;

					)
						delete o.prototype[n[g]]
					return o()
				}
			A.exports =
				Object.create ||
				function(A, t) {
					var e
					return (
						null !== A
							? ((r.prototype = g(A)),
							  (e = new r()),
							  (r.prototype = null),
							  (e[I] = A))
							: (e = o()),
						void 0 === t ? e : C(e, t)
					)
				}
		},
		function(A, t, e) {
			var g = e(10),
				C = e(37),
				n = e(29)('IE_PROTO'),
				I = Object.prototype
			A.exports =
				Object.getPrototypeOf ||
				function(A) {
					return (
						(A = C(A)),
						g(A, n)
							? A[n]
							: 'function' == typeof A.constructor &&
							  A instanceof A.constructor
							? A.constructor.prototype
							: A instanceof Object
							? I
							: null
					)
				}
		},
		function(A, t) {},
		function(A, t, e) {
			'use strict'
			e.r(t)
			var g = {}
			e.r(g),
				e.d(g, 'calc', function() {
					return q
				}),
				e.d(g, 'getImgListFromStr', function() {
					return Z
				}),
				e.d(g, 'getAllObjectiveQuestionListFromPaper', function() {
					return AA
				}),
				e.d(g, 'transformPaperDataToPaperAnswerCardData', function() {
					return eA
				}),
				e.d(g, 'parseStrToNum', function() {
					return CA
				})
			var C = {}
			e.r(C),
				e.d(C, 'exec', function() {
					return Tt
				})
			var n,
				I,
				r = e(19),
				o = e.n(r),
				i = e(5),
				s = e.n(i),
				a = e(13),
				c = e.n(a),
				l = 300,
				u = 6,
				p = 535,
				h = 771,
				B = 30,
				d = 21,
				f = 18,
				w = 30,
				Q = 10,
				m = 10,
				U = { A3: 'A3', A4: 'A4' },
				E = { 1: 'A4', 2: 'A3' },
				v = { Left: 1, Right: 2 },
				b = {
					Text: 'text',
					Block: 'block',
					PaperTitle: 'paperTitle',
					PaperUserBaseInfo: 'paperUserBaseInfo',
					PaperAttentionAndUserNumber: 'paperAttentionAndUserNumber',
					PaperObjectiveQuestions: 'paperObjectiveQuestions',
					PaperFillInBlankQuestions: 'paperFillInBlankQuestions',
					EngPaperComposition: 'engPaperComposition',
					PaperComposition: 'paperComposition'
				},
				F = [
					b.Text,
					b.PaperTitle,
					b.PaperUserBaseInfo,
					b.PaperAttentionAndUserNumber
				],
				x = [
					b.Text,
					b.PaperAttentionAndUserNumber,
					b.PaperUserBaseInfo
				],
				H = [
					b.Text,
					b.PaperTitle,
					b.PaperUserBaseInfo,
					b.PaperAttentionAndUserNumber,
					b.PaperObjectiveQuestions
				],
				y = 1,
				N = 3,
				K = [
					'02',
					'31',
					'32',
					'33',
					'14',
					'15',
					'16',
					'17',
					'18',
					'19',
					'07',
					'42',
					'39'
				],
				T = '45',
				_ = '20',
				k = '01',
				R = '02',
				L = '03',
				S = '04',
				D = '05',
				O = '06',
				M = '07',
				P = '08',
				z = '09',
				G = '10',
				V =
					((n = {}),
					s()(n, k, '语文'),
					s()(n, R, '数学'),
					s()(n, L, '英语'),
					s()(n, S, '道德与法治'),
					s()(n, D, '历史'),
					s()(n, O, '物理'),
					s()(n, M, '生物'),
					s()(n, P, '化学'),
					s()(n, z, '地理'),
					s()(n, G, '科学'),
					n),
				X = d + Q,
				J = 2 * u + 2,
				W = 4 * h,
				j =
					((I = {
						common: {
							setBlockTotalSizeField: function(A, t) {
								A.index ||
									(A.totalSize =
										Math.ceil((t - A.height) / h) + 1)
							},
							getHighDprBlockHeight: function(A) {
								return (
									(t = A.type),
									b.PaperAttentionAndUserNumber === t
										? 736
										: 4 * A.height
								)
								var t
							},
							setBlockPosition: function(A) {
								var t = this
								A.forEach(function(e, g) {
									;(e._top = Math.round(
										0 === g ? 4 * u : A[g - 1]._bottom
									)),
										(e._bottom = Math.round(
											e._top + t.getHighDprBlockHeight(e)
										)),
										(e.leftTop = (e._top / W).toFixed(2)),
										(e.leftBottom = (e._bottom / W).toFixed(
											2
										))
								})
							}
						}
					}),
					s()(I, b.PaperFillInBlankQuestions, {
						setQuestion: function(A) {
							A.height =
								Math.ceil(
									A.list.length / A.questionCountInOneLine
								) *
									X +
								7
							var t = gA(
								A.list,
								A.questionCountInOneLine,
								A.height
							)
							A.list = t
						},
						resetQuestion: function(A, t, e, g) {
							var C = !1,
								n = Math.floor(A.height / X),
								I = A.list
							A.list = I.slice(0, n * A.questionCountInOneLine)
							var r = gA(
								A.list,
								A.questionCountInOneLine,
								A.height
							)
							;(A.list = r),
								j.common.setBlockTotalSizeField(A, e),
								0 === r.length && ((C = !0), g.pop()),
								0 !==
									I.slice(n * A.questionCountInOneLine)
										.length &&
									t.unshift(
										c()({}, A, {
											height: e - A.height,
											list: I.slice(
												n * A.questionCountInOneLine
											),
											index: C ? A.index : A.index + 1
										})
									)
						}
					}),
					s()(I, b.PaperAttentionAndUserNumber, {
						setQuestion: function(A) {
							var t =
								arguments.length > 1 &&
								void 0 !== arguments[1] &&
								arguments[1]
							A.height = t ? 184 : 220
						}
					}),
					s()(I, b.PaperComposition, {
						setQuestion: function(A, t, e) {
							A.totalSize = e || 1e3
							var g = Math.ceil(
								(A.totalSize - (A.beginSize || 0)) / 21
							)
							;(A.height = 34.84 * g + 36),
								(A.list = new Array(g))
						},
						resetQuestion: function(A, t) {
							A.index || ((A.index = 0), (A.beginSize = 0))
							var e = Math.ceil((A.totalSize - A.beginSize) / 21),
								g = Math.floor(
									(0 == A.index
										? A.height - 26.84
										: A.height) / 34.84
								),
								C = e - g
							;(A.list = new Array(g)),
								A.index ||
									(A.totalSize =
										Math.ceil((34.84 * C) / h) + 1),
								t.unshift(
									c()({}, A, {
										height: 34.84 * C,
										list: new Array(C),
										index: A.index + 1,
										beginSize: A.beginSize + 21 * g
									})
								)
						}
					}),
					s()(I, b.PaperObjectiveQuestions, {
						setQuestion: function(A) {
							A.height = 80 * Math.ceil(A.list.length / 5) + 16
						},
						resetQuestion: function(A, t, e) {
							var g = Math.floor(A.height / 5 / 16)
							if (g < Math.ceil(A.list.length / 5)) {
								var C = A.list
								;(A.list = C.slice(0, 5 * g)),
									j.common.setBlockTotalSizeField(A, e),
									t.unshift(
										c()({}, A, {
											height: e - A.height,
											list: C.slice(5 * g),
											index: A.index + 1
										})
									)
							}
						}
					}),
					s()(I, b.EngPaperComposition, {
						setQuestion: function(A) {
							A.height = 31 * A.lineCount + 36 + 10
						},
						resetQuestion: function(A, t, e) {
							var g = Math.floor((A.height - 36) / 31)
							g < 0 && (g = 0),
								(A.lineCount = g),
								j.common.setBlockTotalSizeField(A, e),
								t.unshift(
									c()({}, A, {
										height: e - A.height,
										lineCount: m - g,
										index: A.index + 1
									})
								)
						}
					}),
					I)
			function Y(A, t) {
				for (var e = A.length - 1; e > -1; e--) {
					var g = A[e]
					if ('block' == g.type) {
						g.height += t
						break
					}
				}
			}
			function q(A) {
				for (
					var t =
							arguments.length > 1 &&
							void 0 !== arguments[1] &&
							arguments[1],
						e = arguments.length > 2 ? arguments[2] : void 0,
						g = 0,
						C = [],
						n = (function(A) {
							var t,
								e = [],
								g = [{ blockList: e }]
							A.forEach(function(A) {
								Array.prototype.push.apply(e, A.blockList)
							})
							for (var C = e.length - 1; C > -1; C--) {
								var n = e[C],
									I = e[C - 1]
								if (
									((n.index = 0),
									(n.totalSize = 1),
									n.lineId &&
										n.type == b.Block &&
										n.lineId != t)
								)
									e.splice(C, 1), (t = null)
								else if (
									((t = n.relativeLineId),
									I &&
										I.relativeQuestionId ===
											n.relativeQuestionId &&
										-1 == F.indexOf(I.type))
								) {
									I.height += n.height
									var r = e.splice(C, 1)
									;[
										b.PaperFillInBlankQuestions,
										b.PaperObjectiveQuestions
									].indexOf(I.type) > -1
										? Array.prototype.push.apply(
												I.list,
												r[0].list
										  )
										: I.type == b.EngPaperComposition &&
										  (I.lineCount = m)
								}
							}
							return g
						})(A);
					C.length || g < n.length;

				) {
					var I = n[g],
						r = J
					I || ((I = { blockList: [] }), n.push(I)),
						Array.prototype.unshift.apply(I.blockList, C),
						(C.length = 0)
					for (
						var o = I.blockList || [],
							i = void 0,
							s = 0,
							a = o.length;
						s < a;
						s++
					) {
						var l = (i = o[s]).height,
							u = i.type == b.PaperFillInBlankQuestions
						if (
							(j[i.type] && j[i.type].setQuestion(i, t, e),
							(r += l = i.height) >= h)
						) {
							C = o.splice(s + 1, a - s + 1)
							var p = l,
								d = i.height
							if (
								((i.height = h - (r - l)), !u && i.height < B)
							) {
								o.splice(s, 1),
									Y(o, i.height),
									(i.height = d),
									C.unshift(i)
								break
							}
							j[i.type] && j[i.type].resetQuestion
								? j[i.type].resetQuestion(i, C, p, o)
								: p - i.height >= B &&
								  (j.common.setBlockTotalSizeField(i, p),
								  C.unshift(
										c()({}, i, {
											height: p - i.height,
											index: i.index + 1
										})
								  ))
							break
						}
						s > 0 && -1 == x.indexOf(i.type) && (i.height += 1)
					}
					g++
				}
				!(function(A) {
					A.forEach(function(A, t) {
						j.common.setBlockPosition(A.blockList)
					})
				})(n)
				var f = 0
				return n.map(function(A) {
					return (
						A.blockList.forEach(function(A) {
							switch (A.type) {
								case b.Block:
								case b.PaperComposition:
								case b.EngPaperComposition:
									f++, (A.blockNum = f)
									break
								case b.PaperFillInBlankQuestions:
									f++,
										A.list.forEach(function(A) {
											A.blockNum = f
										})
							}
						}),
						A
					)
				})
			}
			function Z(A) {
				var t = []
				return (
					$('<div >'.concat(A, '</div>'))
						.find('img')
						.each(function() {
							var A = this,
								e = $(this),
								g = {
									url: e.attr('src'),
									width: e.attr('width') || e.width() || 0
								}
							e.on('load', function(t) {
								g.width = g.width || A.width
							}),
								t.push(g)
						}),
					t
				)
			}
			function AA(A) {
				var t = [],
					e = [],
					g = 0,
					C = A.questionLines.length - 1
				return (
					A.questionLines.forEach(function(A, n) {
						var I = A.questionGroup.length - 1
						A.questionGroup.forEach(function(A, r) {
							var o = A.questions.length - 1
							A.questions.forEach(function(A, i) {
								;+A.selectable &&
									((g += +A.score),
									e.push({
										qId: A.questionId,
										order: A.__questionNum,
										score: A.score,
										selectableType: A.selectableType,
										question: { score: A.score }
									})),
									(5 == e.length ||
										(n == C && r == I && i == o)) &&
										(e.length && t.push(e), (e = []))
							})
						})
					}),
					{ objectiveGroupList: t, totalScore: g }
				)
			}
			function tA(A) {
				var t = 0
				return (
					A.questionGroup.forEach(function(A, e) {
						A.questions.forEach(function(A, e) {
							t += +A.score
						})
					}),
					t
				)
			}
			function eA(A) {
				var t = V[A.subjectId],
					e = {
						blockList: [
							{
								text: ''
									.concat(A.paperName)
									.concat(t, '答题卡'),
								type: 'paperTitle',
								height: 55
							},
							{ type: 'paperUserBaseInfo', height: 35 },
							{ type: 'paperAttentionAndUserNumber' }
						]
					},
					g = e.blockList,
					C = AA(A),
					n = C.objectiveGroupList,
					I = C.totalScore
				return (
					n.length &&
						(e.blockList.push({
							text: '填涂答题区(共'.concat(I, '分)'),
							type: 'text',
							height: 30
						}),
						e.blockList.push({
							type: 'paperObjectiveQuestions',
							relativeQuestionId: n[0][0].qId,
							list: n
						})),
					A.questionLines.forEach(function(A, t) {
						if (K.indexOf(A.questionType) > -1)
							!(function(A, t) {
								var e = [],
									g = tA(t)
								A.push({
									text: ''
										.concat(t.lineName, '(共')
										.concat(g, '分)'),
									type: 'text',
									height: 30,
									lineId: t.lineId
								}),
									t.questionGroup.forEach(function(A) {
										A.questions.forEach(function(A) {
											e.push({
												qId: A.questionId,
												order: A.__questionNum,
												question: {
													score: A.score,
													questionTypeId:
														A.questionTypeId
												}
											})
										})
									}),
									A.push({
										type: 'paperFillInBlankQuestions',
										height: 0,
										relativeLineId: t.lineId,
										relativeQuestionId: e[0].qId,
										questionCountInOneLine: 2,
										list: e
									})
							})(g, A)
						else {
							var e = tA(A)
							A.questionGroup.forEach(function(t, C) {
								for (
									var n = t.questions, I = 0, r = n.length;
									I < r;
									I++
								) {
									var i = n[I]
									if (+i.selectable) break
									0 == I &&
										0 == C &&
										g.push({
											text: ''
												.concat(A.lineName, '(共')
												.concat(e, '分)'),
											type: 'text',
											height: 30,
											lineId: A.lineId
										})
									var s = {
											order: i.__questionNum,
											score: i.score,
											questionTypeId: i.questionTypeId
										},
										a = {
											relativeQuestionId: i.questionId,
											relativeLineId: A.lineId,
											question: s
										}
									if (i.questionTypeId != T)
										if (i.questionTypeId != _) {
											var c =
												(t.content || '') +
												(i.questionTitle || '')
											g.push(
												o()(
													{
														type: 'block',
														height: l
													},
													a,
													{ imgList: Z(c) }
												)
											)
										} else
											g.push(
												o()(
													{
														type:
															'engPaperComposition',
														lineCount: 10
													},
													a
												)
											)
									else
										g.push(
											o()(
												{
													type: 'paperComposition',
													totalSize: 1e3,
													minSize: 800
												},
												a
											)
										)
								}
							})
						}
					}),
					[e]
				)
			}
			function gA(A, t, e) {
				var g = w,
					C = f,
					n = p - 2 * u - 2,
					I = e,
					r = (n - 2) * { 1: 0.97, 2: 0.47 }[t],
					o = d + Q,
					i = 0.02 * (n - 2)
				return A.map(function(A, e) {
					var s = 0,
						a = 0
					1 == t && ((s = 1), (a = e + 1)),
						2 == t &&
							((s = (e + 1) % 2 ? 1 : 2),
							(a = Math.ceil((e + 1) / 2)))
					var l = +((r * s + i * s - g) / n).toFixed(2),
						u = +((o * a - C) / I).toFixed(2)
					return c()({}, A, {
						correctLocation: { x: l, y: u, width: g, height: C }
					})
				})
			}
			function CA(A) {
				return parseInt(A) || 0
			}
			var nA = function() {
				var A = this,
					t = A.$createElement,
					e = A._self._c || t
				return e(
					'div',
					{
						staticClass: 'answer-paper-manager',
						class: [
							'1' == A.paperConfig.isPrintMode && 'print-mode'
						]
					},
					[
						e(
							'div',
							{
								ref: 'printDom',
								staticClass: 'answer-paper-manager-content'
							},
							A._l(A.paperData, function(t, g) {
								return e('answer-paper-package', {
									key: g,
									ref: 'printDom_' + g,
									refInFor: !0,
									attrs: {
										'paper-type': A.paperConfig.type,
										dpr: A.paperConfig.dpr,
										page: g + 1,
										'total-page': A.paperData.length,
										data: t,
										index: g
									}
								})
							}),
							1
						)
					]
				)
			}
			nA._withStripped = !0
			var IA = e(78),
				rA = e.n(IA),
				oA = function() {
					var A = this.$createElement,
						t = this._self._c || A
					return t(
						'div',
						{ staticClass: 'answer-paper', style: this.style },
						this._l(this.paper.blockList, function(A, e) {
							return t('AnswerBlock', {
								key: e,
								attrs: { index: e, data: A }
							})
						}),
						1
					)
				}
			oA._withStripped = !0
			var iA = function() {
				var A = this,
					t = A.$createElement,
					e = A._self._c || t
				return e(
					'div',
					{
						ref: 'block',
						staticClass: 'answer-block',
						class: A.className,
						style: A.styleObj,
						attrs: {
							'data-direction': A.direction,
							'data-type': A.data.type,
							'data-relativeId': A.data.relativeQuestionId
						},
						on: { click: A.toggle }
					},
					[
						e(A.componentNameByType, {
							tag: 'component',
							attrs: { data: A.data }
						})
					],
					1
				)
			}
			iA._withStripped = !0
			var sA = function() {
				var A = this,
					t = A.$createElement,
					e = A._self._c || t
				return A.data
					? e(
							'div',
							[
								A.data.index
									? A._e()
									: e(
											'span',
											{
												staticClass:
													'btn-group paper-fill-in-blank-question'
											},
											[
												e(
													'a',
													{
														staticClass:
															'paper-fill-in-blank-question-setting-button',
														attrs: {
															href:
																'javascript:void(0)'
														},
														on: {
															click:
																A.showFillInBlockQuestionSetting
														}
													},
													[A._v('设置')]
												)
											]
									  ),
								A._v(' '),
								e('div', { staticClass: 'text-content' }, [
									e(
										'ul',
										A._l(A.data.list, function(t) {
											return e(
												'li',
												{
													attrs: {
														'data-count':
															A.data
																.questionCountInOneLine,
														'data-check-mode':
															A.paperConfig
																.checkMode
													}
												},
												[
													e(
														'span',
														{
															staticClass:
																'write-block num'
														},
														[A._v(A._s(t.order))]
													),
													A._v(' '),
													e('span', {
														staticClass:
															'answer-paper-underline'
													}),
													A._v(' '),
													2 == A.paperConfig.checkMode
														? e('span', {
																staticClass:
																	'score-box'
														  })
														: A._e()
												]
											)
										}),
										0
									)
								]),
								A._v(' '),
								A.isShowFillInBlankQuestionSetting
									? e('fill-in-block-question-setting', {
											attrs: {
												value: +A.data
													.questionCountInOneLine
											},
											on: {
												close:
													A.closeFillInBlankQuestionSetting,
												submit:
													A.submitFillInBlankQuestionSetting
											}
									  })
									: A._e()
							],
							1
					  )
					: A._e()
			}
			sA._withStripped = !0
			var aA = function() {
				var A = this,
					t = A.$createElement,
					e = A._self._c || t
				return e(
					'div',
					{
						staticClass: 'fill-in-block-question-setting',
						on: {
							click: function(A) {
								A.stopPropagation()
							}
						}
					},
					[
						e(
							'div',
							{
								staticClass:
									'fill-in-block-question-setting-content'
							},
							[
								e(
									'header',
									{
										staticClass:
											'fill-in-block-question-setting-header'
									},
									[
										A._v(
											'\n            设置\n            '
										),
										e('a', {
											staticClass:
												'fill-in-block-question-setting-header-close',
											attrs: {
												href: 'javascript:void(0)'
											},
											on: { click: A.close }
										})
									]
								),
								A._v(' '),
								e(
									'div',
									{
										staticClass:
											'fill-in-block-question-setting-body'
									},
									[
										e('span', [A._v('每行展示')]),
										A._v(' '),
										e(
											'select',
											{
												directives: [
													{
														name: 'model',
														rawName: 'v-model',
														value: A.val,
														expression: 'val'
													}
												],
												staticClass:
													'fill-in-block-question-setting-body-selector',
												on: {
													change: function(t) {
														var e = Array.prototype.filter
															.call(
																t.target
																	.options,
																function(A) {
																	return A.selected
																}
															)
															.map(function(A) {
																return '_value' in
																	A
																	? A._value
																	: A.value
															})
														A.val = t.target
															.multiple
															? e
															: e[0]
													}
												}
											},
											[
												e(
													'option',
													{ attrs: { value: '1' } },
													[A._v('1')]
												),
												A._v(' '),
												e(
													'option',
													{ attrs: { value: '2' } },
													[A._v('2')]
												)
											]
										),
										A._v(' '),
										e('span', [A._v('题')])
									]
								),
								A._v(' '),
								e(
									'footer',
									{
										staticClass:
											'fill-in-block-question-setting-footer'
									},
									[
										e(
											'a',
											{
												staticClass:
													'fill-in-block-question-setting-footer-cancel',
												attrs: {
													href: 'javascript:void(0)'
												},
												on: { click: A.close }
											},
											[A._v('取消')]
										),
										A._v(' '),
										e(
											'a',
											{
												staticClass:
													'fill-in-block-question-setting-footer-confirm',
												attrs: {
													href: 'javascript:void(0)'
												},
												on: { click: A.submit }
											},
											[A._v('确定')]
										)
									]
								)
							]
						)
					]
				)
			}
			aA._withStripped = !0
			var cA = {
					props: { value: { type: Number, default: 2 } },
					data: function() {
						return { val: this.value }
					},
					watch: {
						value: function(A) {
							this.val = A
						}
					},
					mounted: function() {
						this.val = this.value
					},
					methods: {
						close: function(A) {
							this.$emit('close')
						},
						submit: function(A) {
							this.$emit('submit', this.val)
						}
					}
				},
				lA = (e(126), e(0)),
				uA = Object(lA.a)(cA, aA, [], !1, null, '5657130d', null)
			uA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/FillInBlockQuestionSetting.vue'
			var pA = {
					components: { FillInBlockQuestionSetting: uA.exports },
					props: { data: null },
					inject: ['calc', 'paperConfig'],
					data: function() {
						return { isShowFillInBlankQuestionSetting: !1 }
					},
					mounted: function() {},
					methods: {
						showFillInBlockQuestionSetting: function(A) {
							A.stopPropagation(),
								(this.isShowFillInBlankQuestionSetting = !0)
						},
						closeFillInBlankQuestionSetting: function() {
							this.isShowFillInBlankQuestionSetting = !1
						},
						submitFillInBlankQuestionSetting: function(A) {
							;(this.data.questionCountInOneLine = A),
								this.calc(),
								(this.isShowFillInBlankQuestionSetting = !1)
						}
					}
				},
				hA =
					(e(129),
					Object(lA.a)(pA, sA, [], !1, null, '48ff0e3a', null))
			hA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/FillInBlankQuestion.vue'
			var BA = hA.exports,
				dA = function() {
					var A = this,
						t = A.$createElement,
						e = A._self._c || t
					return e(
						'div',
						{
							staticClass: 'block-content',
							class: [
								A.isHighDpr() && 'high-dpr',
								'engComposition-block'
							]
						},
						[
							2 != A.paperConfig.checkMode || A.data.index
								? A._e()
								: e('div', {
										staticClass:
											'engComposition-block-score-box box-line-bottom'
								  }),
							A._v(' '),
							A.data.index
								? A._e()
								: e('p', { staticClass: 'question-num' }, [
										A._v(A._s(A.data.question.order) + '.')
								  ]),
							A._v(' '),
							e(
								'ul',
								A._l(A.data.lineCount, function(A, t) {
									return e('li', {
										key: t,
										staticClass: 'bottom-border-line'
									})
								}),
								0
							)
						]
					)
				}
			dA._withStripped = !0
			var fA = {
					props: { data: null },
					data: function() {
						return {
							rowHeight: 31 * (this.isHighDpr() ? 4 : 1),
							scoreBoxWidth: 30,
							scoreBoxRight: 10,
							scoreBoxSpacing: 2,
							AddImgButtonRight: 10,
							dpr: 4
						}
					},
					inject: ['calc', 'isHighDpr', 'paperConfig'],
					computed: {
						scoreBoxNum: function() {
							return 1
						}
					},
					methods: {
						scoreBoxNormalRight: function(A) {
							return ''.concat(
								this.scoreBoxWidth * A +
									this.scoreBoxRight +
									this.scoreBoxSpacing * A,
								'px'
							)
						},
						scoreBoxHighDprRight: function(A) {
							return ''.concat(
								this.dpr * this.scoreBoxWidth * A +
									this.dpr * this.scoreBoxRight +
									this.dpr * this.scoreBoxSpacing * A,
								'px'
							)
						}
					}
				},
				wA =
					(e(131),
					Object(lA.a)(fA, dA, [], !1, null, '948975cc', null))
			wA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/EngCompositionQuestion.vue'
			var QA = wA.exports,
				mA = function() {
					var A = this,
						t = A.$createElement,
						e = A._self._c || t
					return e(
						'div',
						{ staticClass: 'text-content' },
						[
							A._l(A.data.list, function(t, g) {
								return e(
									'ul',
									{ key: g },
									[
										A._l(t, function(t, g) {
											return [
												e(
													A.componentNameBySelectableType(
														+t.selectableType
													),
													{
														key: g,
														tag: 'component',
														attrs: { question: t }
													}
												)
											]
										})
									],
									2
								)
							}),
							A._v(' '),
							[
								e(
									'div',
									{
										staticClass:
											'objective-question-left-flag'
									},
									A._l(A.objectiveQuestionFlagList, function(
										A
									) {
										return e('span', {
											staticClass: 'write-block'
										})
									}),
									0
								),
								A._v(' '),
								e(
									'div',
									{
										staticClass:
											'objective-question-bottom-flag'
									},
									A._l(
										A.objectiveQuestionBottomFlagList,
										function(A) {
											return e('span', {
												staticClass: 'write-block'
											})
										}
									),
									0
								)
							]
						],
						2
					)
				}
			mA._withStripped = !0
			var UA = function() {
				var A = this,
					t = A.$createElement,
					e = A._self._c || t
				return e('li', [
					e('span', { staticClass: 'write-block num' }, [
						e('span', [A._v(A._s(A.question.order))])
					]),
					A._v(' '),
					A._m(0),
					A._v(' '),
					A._m(1),
					A._v(' '),
					A._m(2),
					A._v(' '),
					A._m(3)
				])
			}
			UA._withStripped = !0
			var EA = { name: 'SingleSelectQuestion', props: { question: {} } },
				vA = Object(lA.a)(
					EA,
					UA,
					[
						function() {
							var A = this.$createElement,
								t = this._self._c || A
							return t('span', { staticClass: 'write-block' }, [
								t('span', [this._v('A')])
							])
						},
						function() {
							var A = this.$createElement,
								t = this._self._c || A
							return t('span', { staticClass: 'write-block' }, [
								t('span', [this._v('B')])
							])
						},
						function() {
							var A = this.$createElement,
								t = this._self._c || A
							return t('span', { staticClass: 'write-block' }, [
								t('span', [this._v('C')])
							])
						},
						function() {
							var A = this.$createElement,
								t = this._self._c || A
							return t('span', { staticClass: 'write-block' }, [
								t('span', [this._v('D')])
							])
						}
					],
					!1,
					null,
					null,
					null
				)
			vA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/SingleSelectQuestion.vue'
			var bA = vA.exports,
				FA = function() {
					var A = this.$createElement,
						t = this._self._c || A
					return t('li', [
						t('span', { staticClass: 'write-block num' }, [
							t('span', [this._v(this._s(this.question.order))])
						]),
						this._v(' '),
						this._m(0),
						this._v(' '),
						this._m(1)
					])
				}
			FA._withStripped = !0
			var xA = { name: 'JudgementQuestion', props: { question: {} } },
				HA = Object(lA.a)(
					xA,
					FA,
					[
						function() {
							var A = this.$createElement,
								t = this._self._c || A
							return t('span', { staticClass: 'write-block' }, [
								t('span', [this._v('√')])
							])
						},
						function() {
							var A = this.$createElement,
								t = this._self._c || A
							return t('span', { staticClass: 'write-block' }, [
								t('span', [this._v('×')])
							])
						}
					],
					!1,
					null,
					null,
					null
				)
			HA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/JudgementQuestion.vue'
			var yA = {
					components: {
						SingleSelectQuestion: bA,
						JudgementQuestion: HA.exports
					},
					props: { data: null },
					data: function() {
						return {
							objectiveQuestionFlagList: [],
							objectiveQuestionBottomFlagList: []
						}
					},
					mounted: function() {
						;(this.objectiveQuestionFlagList = new Array(
							Math.ceil(this.data.list.length / 5)
						)),
							(this.objectiveQuestionBottomFlagList = new Array(
								5
							))
					},
					methods: {
						componentNameBySelectableType: function(A) {
							switch (A) {
								case y:
									return 'single-select-question'
								case N:
									return 'judgement-question'
								default:
									return 'single-select-question'
							}
						}
					}
				},
				NA = Object(lA.a)(yA, mA, [], !1, null, null, null)
			NA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/ObjectiveQuestion.vue'
			var KA = NA.exports,
				TA = function() {
					var A = this,
						t = A.$createElement,
						e = A._self._c || t
					return e(
						'div',
						{
							class: [
								A.isHighDpr() && 'high-dpr',
								'composition-block'
							]
						},
						[
							2 != A.paperConfig.checkMode || A.data.index
								? A._e()
								: e('div', {
										staticClass:
											'composition-block-score-box box-line-bottom'
								  }),
							A._v(' '),
							e('div', { staticClass: 'block-content' }, [
								A.data.index
									? A._e()
									: e('p', { staticClass: 'question-num' }, [
											A._v(
												A._s(A.data.question.order) +
													'.'
											)
									  ]),
								A._v(' '),
								e(
									'ul',
									A._l(A.data.list, function(t, g) {
										return e(
											'li',
											{
												key: g,
												staticClass:
													'bottom-border-line top-border-line'
											},
											A._l(
												A.compositionCellListInRow,
												function(t, C) {
													return e(
														'i',
														{
															key: t,
															staticClass:
																'right-border-line'
														},
														[
															(A.data.beginSize +
																g *
																	A.PaperCompositionCellCountInRow +
																C +
																1) %
																100 ==
															0
																? e('span', [
																		A._v(
																			'\n                        ' +
																				A._s(
																					A
																						.data
																						.beginSize +
																						g *
																							A.PaperCompositionCellCountInRow +
																						C +
																						1
																				) +
																				'\n                    '
																		)
																  ])
																: A._e()
														]
													)
												}
											),
											0
										)
									}),
									0
								)
							])
						]
					)
				}
			TA._withStripped = !0
			var _A = function() {
				var A = this,
					t = A.$createElement,
					e = A._self._c || t
				return e(
					'div',
					{
						staticClass: 'fill-in-block-question-setting',
						on: {
							click: function(A) {
								A.stopPropagation()
							}
						}
					},
					[
						e(
							'div',
							{
								staticClass:
									'fill-in-block-question-setting-content'
							},
							[
								e(
									'header',
									{
										staticClass:
											'fill-in-block-question-setting-header'
									},
									[
										A._v(
											'\n            设置\n            '
										),
										e(
											'a',
											{
												attrs: {
													href: 'javascript:void(0)'
												},
												on: { click: A.close }
											},
											[A._v('X')]
										)
									]
								),
								A._v(' '),
								e(
									'div',
									{
										staticClass:
											'fill-in-block-question-setting-body'
									},
									[
										e('p', [
											A._v('字数不少于'),
											e('input', {
												directives: [
													{
														name: 'model',
														rawName: 'v-model',
														value: A.min,
														expression: 'min'
													}
												],
												attrs: { type: 'text' },
												domProps: { value: A.min },
												on: {
													input: function(t) {
														t.target.composing ||
															(A.min =
																t.target.value)
													}
												}
											})
										]),
										A._v(' '),
										e('p', [
											A._v('总字数'),
											e('input', {
												directives: [
													{
														name: 'model',
														rawName: 'v-model',
														value: A.total,
														expression: 'total'
													}
												],
												attrs: { type: 'text' },
												domProps: { value: A.total },
												on: {
													input: function(t) {
														t.target.composing ||
															(A.total =
																t.target.value)
													}
												}
											})
										])
									]
								),
								A._v(' '),
								e(
									'footer',
									{
										staticClass:
											'fill-in-block-question-setting-footer'
									},
									[
										e(
											'a',
											{
												attrs: {
													href: 'javascript:void(0)'
												},
												on: { click: A.submit }
											},
											[A._v('保存')]
										)
									]
								)
							]
						)
					]
				)
			}
			_A._withStripped = !0
			var kA = {
					props: {
						minSize: { type: Number, default: 800 },
						totalSize: { type: Number, default: 1e3 }
					},
					data: function() {
						return { min: 0, total: 0 }
					},
					watch: {
						minSize: function(A) {
							this.min = A
						},
						totalSize: function(A) {
							this.total = A
						}
					},
					mounted: function() {
						;(this.total = this.totalSize),
							(this.min = this.minSize)
					},
					methods: {
						close: function(A) {
							A.stopPropagation(), this.$emit('close')
						},
						submit: function(A) {
							A.stopPropagation(),
								this.$emit('submit', +this.min, +this.total)
						}
					}
				},
				RA =
					(e(135),
					Object(lA.a)(kA, _A, [], !1, null, '4b9c7eb0', null))
			RA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/CompositionQuestionSetting.vue'
			var LA = {
					components: { CompositionQuestionSetting: RA.exports },
					props: { data: null },
					data: function() {
						return {
							compositionCellListInRow: [],
							PaperCompositionCellCountInRow: 21,
							isShowCompositionQuestionSetting: !1,
							scoreBoxWidth: 30,
							scoreBoxRight: 10,
							scoreBoxSpacing: 2,
							AddImgButtonRight: 10,
							dpr: 4
						}
					},
					inject: ['calc', 'isHighDpr', 'paperConfig'],
					computed: {
						scoreBoxNum: function() {
							return 1
						}
					},
					mounted: function() {
						this.compositionCellListInRow = new Array(21)
					},
					methods: {
						showCompositionQuestionSetting: function(A) {
							A.stopPropagation(),
								(this.isShowCompositionQuestionSetting = !0)
						},
						closeCompositionQuestionSetting: function(A) {
							A.stopPropagation(),
								(this.isShowCompositionQuestionSetting = !1)
						},
						submitCompositionQuestionSetting: function(A, t) {
							;(this.data.minSize = A),
								(this.data.totalSize = t),
								this.calc(),
								(this.isShowCompositionQuestionSetting = !1)
						},
						scoreBoxNormalRight: function(A) {
							return ''.concat(
								this.scoreBoxWidth * A +
									this.scoreBoxRight +
									this.scoreBoxSpacing * A,
								'px'
							)
						},
						scoreBoxHighDprRight: function(A) {
							return ''.concat(
								this.dpr * this.scoreBoxWidth * A +
									this.dpr * this.scoreBoxRight +
									this.dpr * this.scoreBoxSpacing * A,
								'px'
							)
						}
					}
				},
				SA =
					(e(137),
					Object(lA.a)(LA, TA, [], !1, null, '6d82ceb8', null))
			SA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/CompositionQuestion.vue'
			var DA = SA.exports,
				OA = function() {
					var A = this,
						t = A.$createElement,
						e = A._self._c || t
					return e(
						'div',
						{
							staticClass: 'text-content',
							class: [A.isHighDpr() && 'high-dpr']
						},
						[
							e('table', [
								A._m(0),
								A._v(' '),
								e('tr', [
									A._m(1),
									A._v(' '),
									e(
										'td',
										{
											staticClass:
												'user-number-content left-border-line',
											attrs: { rowspan: '2' }
										},
										[
											e(
												'ul',
												{
													staticClass:
														'top-border-line'
												},
												A._l(A.userNumberList, function(
													t
												) {
													return e(
														'li',
														{
															staticClass:
																'right-border-line'
														},
														A._l(
															A.userNumberList,
															function(t, g) {
																return e(
																	'span',
																	{
																		staticClass:
																			'write-block'
																	},
																	[
																		e(
																			'span',
																			[
																				A._v(
																					A._s(
																						g
																					)
																				)
																			]
																		)
																	]
																)
															}
														),
														0
													)
												}),
												0
											),
											A._v(' '),
											e(
												'div',
												{
													staticClass:
														'user-number-content-top-flag'
												},
												A._l(10, function(A) {
													return e('i')
												}),
												0
											)
										]
									)
								]),
								A._v(' '),
								A._m(2)
							])
						]
					)
				}
			OA._withStripped = !0
			var MA = {
					inject: ['isHighDpr'],
					data: function() {
						return { userNumberList: new Array(10) }
					}
				},
				PA =
					(e(139),
					Object(lA.a)(
						MA,
						OA,
						[
							function() {
								var A = this.$createElement,
									t = this._self._c || A
								return t('thead', [
									t('tr', [
										t(
											'td',
											{
												staticClass:
													'bottom-border-line'
											},
											[this._v('注意事项')]
										),
										this._v(' '),
										t(
											'td',
											{
												staticClass:
													'bottom-border-line user-number-title'
											},
											[this._v('学号')]
										)
									])
								])
							},
							function() {
								var A = this,
									t = A.$createElement,
									e = A._self._c || t
								return e(
									'td',
									{ staticClass: 'bottom-border-line' },
									[
										e(
											'div',
											{
												staticClass: 'attention-content'
											},
											[
												e('p', [
													A._v(
														'1.答题前请将姓名、班级、考场、座号和学号填写清楚。'
													)
												]),
												A._v(' '),
												e('p', [
													A._v(
														'2.客观题答题，必须使用2B铅笔填涂，修改时用橡皮擦干净。'
													)
												]),
												A._v(' '),
												e('p', [
													A._v(
														'3.主观题必须使用黑色签字笔书写。'
													)
												]),
												A._v(' '),
												e('p', [
													A._v(
														'4.必须在题号对应的答题区域内作答，超出答题区域书写无效。'
													)
												]),
												A._v(' '),
												e('p', [
													A._v('5.保持答卷清洁完整。')
												])
											]
										)
									]
								)
							},
							function() {
								var A = this.$createElement,
									t = this._self._c || A
								return t('tr', [
									t('td', { staticClass: 'sample-content' }, [
										this._v('\n                正确填涂'),
										t('span', {
											staticClass:
												'write-block sample-content-right'
										}),
										this._v('\n                缺考标记'),
										t('span', {
											staticClass:
												'write-block sample-content-miss'
										})
									])
								])
							}
						],
						!1,
						null,
						'7a1542e1',
						null
					))
			PA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/PaperAttentionAndUserNumber.vue'
			var zA = PA.exports,
				GA = function() {
					var A = this.$createElement
					this._self._c
					return this._m(0)
				}
			GA._withStripped = !0
			var VA = {},
				XA = Object(lA.a)(
					VA,
					GA,
					[
						function() {
							var A = this,
								t = A.$createElement,
								e = A._self._c || t
							return e('div', { staticClass: 'text-content' }, [
								A._v('\n    学号'),
								e(
									'span',
									{ staticClass: 'answer-paper-underline' },
									[A._v(':')]
								),
								A._v('\n    姓名'),
								e(
									'span',
									{ staticClass: 'answer-paper-underline' },
									[A._v(':')]
								),
								A._v('\n    班级'),
								e(
									'span',
									{ staticClass: 'answer-paper-underline' },
									[A._v(':')]
								),
								A._v('\n    考场'),
								e(
									'span',
									{ staticClass: 'answer-paper-underline' },
									[A._v(':')]
								),
								A._v('\n    座号'),
								e(
									'span',
									{ staticClass: 'answer-paper-underline' },
									[A._v(':')]
								)
							])
						}
					],
					!1,
					null,
					'3e942fbe',
					null
				)
			XA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/PaperUserBaseInfo.vue'
			var JA = XA.exports,
				WA = function() {
					var A = this,
						t = A.$createElement,
						g = A._self._c || t
					return g(
						'div',
						{
							staticClass: 'normal-block-container',
							class: [A.isHighDpr() && 'high-dpr']
						},
						[
							g(
								'div',
								{ staticClass: 'block-content normal-block' },
								[
									A.data.index
										? A._e()
										: g(
												'span',
												{
													staticClass:
														'write-block num'
												},
												[
													g('span', [
														A._v(
															A._s(
																A.data.question
																	.order
															)
														)
													]),
													A._v(' '),
													g(
														'span',
														{
															staticClass: 'score'
														},
														[
															A._v(
																'(' +
																	A._s(
																		A.data
																			.question
																			.score ||
																			0
																	) +
																	'分)'
															)
														]
													)
												]
										  ),
									A._v(' '),
									A.data.imgList &&
									A.data.imgList.length &&
									!A.data.index &&
									A.checkCanInsertImg()
										? g(
												'a',
												{
													staticClass: 'add-img-btn',
													style: {
														right:
															A.getAddImgButtonRight
													},
													attrs: {
														href:
															'javascript:void(0)'
													},
													on: { click: A.showImgList }
												},
												[
													g('i', {
														staticClass:
															'add-img-btn-icon'
													}),
													A._v(
														'\n                插入图片\n            '
													)
												]
										  )
										: A._e(),
									A._v(' '),
									2 != A.paperConfig.checkMode || A.data.index
										? A._e()
										: g('div', {
												staticClass:
													'normal-block-score-box box-line-bottom'
										  }),
									A._v(' '),
									g(
										'div',
										{
											ref: 'choosed-img-list',
											staticClass: 'choosed-img-list'
										},
										A._l(A.data.choosedImgList, function(
											t,
											e
										) {
											return t.relativeIndex ==
												A.data.index
												? g('span', { style: {} }, [
														g('img', {
															ref: 'images',
															refInFor: !0,
															attrs: {
																src: t.url,
																width: A.getImgWidth(
																	t
																)
															},
															on: {
																click: function(
																	A
																) {
																	A.stopPropagation()
																}
															}
														}),
														A._v(' '),
														g('a', {
															staticClass:
																'delete-img-btn',
															attrs: {
																href:
																	'javascript:void(0)'
															},
															on: {
																click: function(
																	g
																) {
																	A.deleteImg(
																		g,
																		t,
																		e
																	)
																}
															}
														})
												  ])
												: A._e()
										}),
										0
									)
								]
							),
							A._v(' '),
							g('div', {
								ref: 'scaleLayout',
								staticClass: 'scale-layout'
							}),
							A._v(' '),
							g('img', {
								ref: 'scaleBtn',
								staticClass: 'scale-btn',
								attrs: { src: e(141) },
								on: { mousedown: A.scaleBtnMousedownHandler }
							}),
							A._v(' '),
							A.isShowImgSelector
								? g('img-selector', {
										attrs: {
											list: A.data.imgList,
											checkedImageUrls: A.checkedImageUrls
										},
										on: {
											close: A.closeImgSelector,
											submit: A.chooseImg
										}
								  })
								: A._e()
						],
						1
					)
				}
			WA._withStripped = !0
			var jA = function() {
				var A = this,
					t = A.$createElement,
					e = A._self._c || t
				return e(
					'div',
					{
						staticClass: 'img-selector',
						on: {
							click: function(A) {
								A.stopPropagation()
							}
						}
					},
					[
						e('div', { staticClass: 'img-selector-content' }, [
							e('p', { staticClass: 'img-selector-title' }, [
								A._v('\n\t\t\t选择图片\n\t\t\t'),
								e('a', {
									staticClass: 'img-selector-title-close',
									attrs: { href: 'javascript:void(0)' },
									on: {
										click: function() {
											A.$emit('close')
										}
									}
								})
							]),
							A._v(' '),
							e('div', { staticClass: 'img-list' }, [
								e(
									'ul',
									A._l(A.imgList, function(t, g) {
										return e(
											'li',
											{
												style: {
													'background-image':
														'url(' + t.url + ')',
													marginRight: A.isRightmost(
														g
													)
														? '0px'
														: null,
													marginLeft: A.isLeftmost(g)
														? '0px'
														: null
												},
												on: {
													click: function(e) {
														A.checkImg(t, g)
													}
												}
											},
											[
												e('span', {
													class: [
														'img-list-checkbutton',
														t.checked
															? 'checked'
															: 'unchecked'
													]
												})
											]
										)
									}),
									0
								)
							]),
							A._v(' '),
							e(
								'footer',
								{ staticClass: 'img-selector-footer' },
								[
									e(
										'a',
										{
											staticClass:
												'img-selector-footer-cancel',
											attrs: {
												href: 'javascript:void(0)'
											},
											on: {
												click: function() {
													A.$emit('close')
												}
											}
										},
										[A._v('取消')]
									),
									A._v(' '),
									e(
										'a',
										{
											staticClass:
												'img-selector-footer-confirm',
											attrs: {
												href: 'javascript:void(0)'
											},
											on: { click: A.submit }
										},
										[A._v('确定')]
									)
								]
							)
						])
					]
				)
			}
			jA._withStripped = !0
			var YA = {
					props: {
						list: {
							type: Array,
							default: function() {
								return []
							}
						},
						checkedImageUrls: {
							type: Array,
							default: function() {
								return []
							}
						}
					},
					data: function() {
						return { imgList: [], checkedImgs: [] }
					},
					methods: {
						isRightmost: function(A) {
							var t =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: 4
							return A > 0 && (A + 1) % t == 0
						},
						isLeftmost: function(A) {
							var t =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: 4
							return 0 === A || (A + 1) % t == 1
						},
						checkImg: function(A, t) {
							if (A.checked) {
								var e = this.checkedImgs.findIndex(function(t) {
									return t.url === A.url
								})
								this.checkedImgs.splice(e, 1)
							} else this.checkedImgs.push(A)
							this.$set(
								this.imgList,
								t,
								c()({}, this.imgList[t], {
									checked: !this.imgList[t].checked
								})
							)
						},
						submit: function() {
							this.$emit('submit', this.checkedImgs)
						},
						setSelectableImages: function() {
							var A = this,
								t = []
							this.list.forEach(function(e, g) {
								A.checkedImageUrls.includes(e.url) || t.push(e)
							}),
								(this.imgList = t)
						}
					},
					mounted: function() {
						this.setSelectableImages()
					}
				},
				qA =
					(e(142),
					Object(lA.a)(YA, jA, [], !1, null, '734482ca', null))
			qA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/ImgSelector.vue'
			var ZA = {
					props: { data: null },
					components: { ImgSelector: qA.exports },
					inject: [
						'calc',
						'paperConfig',
						'isHighDpr',
						'addBlockCount',
						'addMountedBlockCount'
					],
					data: function() {
						return {
							isDraging: !1,
							isShowImgSelector: !1,
							startPos: null,
							scoreBoxWidth: 60,
							scoreBoxRight: 0,
							scoreBoxSpacing: 0,
							AddImgButtonRight: 10,
							dpr: 4,
							oriStartPosY: 0,
							hostReg: /(?<=:\/\/)(.+?)(?=\/)/,
							localhostReg: /localhost/
						}
					},
					created: function() {
						var A = this.data
						A.choosedImgList || this.$set(A, 'choosedImgList', []),
							this.addBlockCount()
					},
					computed: {
						scoreBoxNum: function() {
							return 1
						},
						checkedImageUrls: function() {
							return this.data.choosedImgList
								? this.data.choosedImgList.map(function(A) {
										return A.url
								  })
								: []
						},
						getAddImgButtonRight: function() {
							return 2 == this.paperConfig.checkMode
								? this.isHighDpr()
									? ''.concat(
											this.scoreBoxWidth * this.dpr +
												this.AddImgButtonRight *
													this.dpr,
											'px'
									  )
									: ''.concat(
											this.scoreBoxWidth +
												this.AddImgButtonRight,
											'px'
									  )
								: 1 == this.paperConfig.checkMode
								? ''.concat(this.AddImgButtonRight, 'px')
								: void 0
						}
					},
					mounted: function() {
						var A = this
						document.addEventListener(
							'mousemove',
							this.mouseMoveHandler,
							!1
						),
							document.addEventListener(
								'mouseup',
								this.mouseUpHandler,
								!1
							),
							this.data.choosedImgList.length
								? this.$nextTick(function(t) {
										A.addMountedBlockCount()
								  })
								: this.addMountedBlockCount()
					},
					methods: {
						isLocalhost: function() {
							return this.localhostReg.test(location.host)
						},
						isBaiduCloudHost: function(A) {
							return (
								'bos.bj.baidubce.com' ===
								A.match(this.hostReg)[1]
							)
						},
						replaceBaiduCloudUrl: function(A) {
							var t = location.host
							return A.replace(
								this.hostReg,
								this.isLocalhost() ? 'ms-stage.bcbook.cn' : t
							)
						},
						checkCanInsertImg: function() {
							var A = this,
								t = []
							return (
								this.data.imgList.forEach(function(e, g) {
									A.checkedImageUrls.includes(e.url) ||
										t.push(e)
								}),
								0 !== t.length
							)
						},
						showImgList: function(A) {
							this.checkCanInsertImg() &&
								(A.stopPropagation(),
								(this.isShowImgSelector = !0))
						},
						closeImgSelector: function() {
							this.isShowImgSelector = !1
						},
						chooseImg: function(A) {
							var t = this
							A.forEach(function(A) {
								t.isBaiduCloudHost(A.url) &&
									(A.url = t.replaceBaiduCloudUrl(A.url)),
									(A.relativeIndex = t.data.index),
									t.data.choosedImgList.unshift(A)
							}),
								(this.isShowImgSelector = !1)
						},
						deleteImg: function(A, t) {
							A.stopPropagation()
							for (
								var e = this.data.choosedImgList,
									g = 0,
									C = e.length;
								g < C;
								g++
							)
								if (e[g] == t) {
									e.splice(g, 1)
									break
								}
						},
						getImgWidth: function(A) {
							var t = this.isHighDpr() ? 4 : 1
							return A.width ? A.width * t + 'px' : 'auto'
						},
						scaleBtnMousedownHandler: function(A) {
							var t = this.$refs.scaleBtn,
								e = this.$refs.scaleLayout
							A.preventDefault(),
								(this.isDraging = !0),
								(this.startPos = {
									x: A.clientX,
									y: A.clientY
								}),
								(this.oriStartPosY = this.startPos.y),
								(t.style.top = this.data.height - 25 + 'px'),
								(e.style.height = this.data.height + 'px'),
								(e.style.display = 'block'),
								(this.mouseDownTimeStamp = +new Date())
						},
						mouseUpHandler: function(A) {
							if (this.isDraging) {
								var t = this.$refs.scaleLayout,
									e = CA(t.style.height)
								if (
									((t.style.display = 'none'),
									(this.isDraging = !1),
									A.clientY == this.oriStartPosY)
								)
									return
								;(this.data.height = e <= B ? B : e),
									this.calc()
							}
						},
						mouseMoveHandler: function(A) {
							if (this.isDraging) {
								var t = this.$refs.scaleBtn,
									e = this.$refs.scaleLayout,
									g = A.clientX,
									C = A.clientY,
									n = CA(t.style.top) + C - this.startPos.y
								n <= B && (n = B),
									(t.style.top = n + 'px'),
									(e.style.height = n + 'px'),
									(this.startPos.y = C),
									(this.startPos.x = g)
							}
						}
					},
					beforeDestroy: function() {
						document.removeEventListener(
							'mousemove',
							this.mouseMoveHandler,
							!1
						),
							document.removeEventListener(
								'mouseup',
								this.mouseMoveHandler,
								!1
							)
					}
				},
				$A =
					(e(146),
					Object(lA.a)(ZA, WA, [], !1, null, '1ed43824', null))
			$A.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/NormalBlock.vue'
			var At = $A.exports,
				tt = function() {
					var A = this.$createElement
					return (this._self._c || A)(
						'p',
						{ staticClass: 'text-content' },
						[this._v('\n    ' + this._s(this.data.text) + '\n')]
					)
				}
			tt._withStripped = !0
			var et = { props: { data: null } },
				gt = Object(lA.a)(et, tt, [], !1, null, null, null)
			gt.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/TextBlock.vue'
			var Ct = {
					props: ['data', 'index'],
					inject: [
						'direction',
						'paperConfig',
						'isHighDpr',
						'clickBlock'
					],
					components: {
						FillInBlockQuestion: BA,
						ObjectiveQuestion: KA,
						EngCompositionQuestion: QA,
						CompositionQuestion: DA,
						PaperAttentionAndUserNumber: zA,
						PaperUserBaseInfo: JA,
						NormalBlock: At,
						TextBlock: gt.exports
					},
					data: function() {
						return { BlockType: b }
					},
					computed: {
						className: function() {
							var A = (this.data.classList || []).concat()
							switch (this.data.type) {
								case b.Text:
								case b.PaperTitle:
								case b.PaperUserBaseInfo:
									A.push('text')
									break
								default:
									A.push('block')
							}
							return (
								this.isHighDpr() && A.push('high-dpr'),
								this.data.isActive && A.push('active'),
								A
							)
						},
						styleObj: function() {
							var A = {},
								t = this.isHighDpr() ? 4 : 1,
								e = this.data
							if ('auto' == e.height) A.height = 'auto'
							else {
								switch (e.type) {
									case b.PaperAttentionAndUserNumber:
										A.height = ''.concat(
											(this.isHighDpr() ? 184 : 220) * t,
											'px'
										)
										break
									default:
										A.height = e.height * t + 'px'
								}
								this.index &&
									-1 == x.indexOf(e.type) &&
									(A['margin-top'] = '-1px')
							}
							return A
						},
						componentNameByType: function() {
							switch (this.data.type) {
								case b.PaperTitle:
								case b.Text:
									return 'text-block'
								case b.PaperComposition:
									return 'composition-question'
								case b.EngPaperComposition:
									return 'eng-composition-question'
								case b.PaperFillInBlankQuestions:
									return 'fill-in-block-question'
								case b.PaperObjectiveQuestions:
									return 'objective-question'
								case b.PaperAttentionAndUserNumber:
									return 'paper-attention-and-user-number'
								case b.PaperUserBaseInfo:
									return 'paper-user-base-info'
								case b.Block:
									return 'normal-block'
							}
						}
					},
					created: function() {
						var A = this.data
						A &&
							void 0 === A.isActive &&
							this.$set(A, 'isActive', !1)
					},
					methods: {
						toggle: function() {
							if (this.paperConfig.canToggleBlock) {
								var A = this.data
								H.indexOf(A.type) > -1 ||
									this.clickBlock(this.data, this.$refs.block)
							}
						}
					}
				},
				nt = (e(151), Object(lA.a)(Ct, iA, [], !1, null, null, null))
			nt.options.__file =
				'src/package/answerCard/src/components/CardBlock/index.vue'
			var It = {
					components: { AnswerBlock: nt.exports },
					props: ['paper', 'isShowAccessibilityBlock', 'direction'],
					inject: ['paperConfig', 'isHighDpr'],
					provide: function() {
						return { direction: this.direction }
					},
					computed: {
						style: function() {
							var A = this.isHighDpr() ? 4 : 1
							return {
								padding: ''.concat(u * A, 'px'),
								width: ''.concat(p * A, 'px'),
								height: ''.concat(h * A, 'px')
							}
						}
					},
					data: function() {
						return { PaperPaddingSize: u }
					}
				},
				rt = (e(155), Object(lA.a)(It, oA, [], !1, null, null, null))
			rt.options.__file =
				'src/package/answerCard/src/components/AnswerCardPaper.vue'
			var ot = rt.exports,
				it = function() {
					var A = this,
						t = A.$createElement,
						e = A._self._c || t
					return e(
						'div',
						{
							staticClass: 'answer-paper-package',
							class: [
								A.paperConfig.type,
								A.isHighDpr() && 'high-dpr'
							],
							attrs: { 'data-page': A.page }
						},
						[
							A._l(A.data, function(t, g) {
								return t
									? e('answer-paper', {
											key: g,
											class: [
												g ? 'right-paper' : 'left-paper'
											],
											attrs: {
												paper: t,
												'is-show-accessibility-block':
													!g &&
													A.IsShowWriteBlockFlag,
												direction: g
													? A.DirectionType.Right
													: A.DirectionType.Left
											}
									  })
									: A._e()
							}),
							A._v(' '),
							e('span', { ref: 'qrcode', staticClass: 'qrcode' }),
							A._v(' '),
							e('span', { staticClass: 'page-bottom-flag' }),
							A._v(' '),
							e('p', { staticClass: 'page-des' }, [
								A._v(
									'第' +
										A._s(A.page) +
										'页 共' +
										A._s(A.totalPage) +
										'页'
								)
							])
						],
						2
					)
				}
			it._withStripped = !0
			var st = e(112),
				at = e.n(st),
				ct = {
					components: { AnswerPaper: ot },
					inject: ['paperConfig', 'isHighDpr'],
					props: {
						data: {
							type: Array,
							default: function() {
								return []
							}
						},
						page: 0,
						totalPage: 0,
						index: 0
					},
					watch: {
						'paperConfig.dpr': function() {
							this.createQRCode()
						}
					},
					data: function() {
						return { DirectionType: v, IsShowWriteBlockFlag: !0 }
					},
					mounted: function() {
						this.createQRCode()
					},
					methods: {
						createQRCode: function() {
							var A = this.isHighDpr()
							this.$refs.qrcode.innerHTML = ''
							var t = A ? 210 : 45
							this.index && (t *= 0.6),
								new at.a(this.$refs.qrcode, {
									width: t,
									height: t,
									text: this.paperConfig.qrCodeContent,
									colorDark: '#000',
									colorLight: '#fff'
								})
						}
					}
				},
				lt = (e(157), Object(lA.a)(ct, it, [], !1, null, null, null))
			lt.options.__file =
				'src/package/answerCard/src/components/AnswerCardPaperPackage.vue'
			var ut = lt.exports,
				pt = 1,
				ht = 2,
				Bt = {
					name: 'AnswerCardManager',
					components: { AnswerPaperPackage: ut, AnswerPaper: ot },
					watch: {
						compositionSize: function(A) {
							;(this.paperConfig.totalSize = A), this.calc()
						},
						type: function(A) {
							;(this.paperConfig.type = U[E[A]]), this.calc()
						},
						qrCodeContent: function(A) {
							;(this.paperConfig.qrCodeContent = A), this.calc()
						},
						canToggleBlock: function(A) {
							this.paperConfig.canToggleBlock = A
						},
						isPrintMode: function(A) {
							this.paperConfig.isPrintMode = A
						},
						checkMode: function(A) {
							this.paperConfig.checkMode = A
						},
						highDpr: function(A) {
							switch (((this.paperConfig.highDpr = A), +A)) {
								case 0:
									this.paperConfig.dpr = 1
									break
								case 1:
									this.paperConfig.dpr = 4
							}
						},
						pList: function(A) {
							;(this.paperList = this.pList.concat()), this.calc()
						}
					},
					provide: function() {
						return {
							calc: this.calc,
							removeBlock: this.removeBlock,
							paperConfig: this.paperConfig,
							isHighDpr: this.isHighDpr,
							clickBlock: this.clickBlock,
							addBlockCount: function() {},
							addMountedBlockCount: function() {}
						}
					},
					props: {
						compositionSize: { default: 1e3 },
						canToggleBlock: { type: Boolean, default: !1 },
						checkMode: { default: 1 },
						type: { default: 1 },
						highDpr: { default: 0 },
						isPrintMode: { default: 0 },
						pList: {
							type: Array,
							default: function() {
								return []
							}
						},
						qrCodeContent: { type: String, default: '' }
					},
					data: function() {
						return {
							isShowPrint: !1,
							paperConfig: {
								type: U[E[this.type]],
								highDpr: this.highDpr,
								isPrintMode: this.isPrintMode,
								dpr: 1,
								checkMode: this.checkMode,
								qrCodeContent: this.qrCodeContent,
								totalSize: this.compositionSize
							},
							paperList: this.pList.concat()
						}
					},
					computed: {
						paperData: function() {
							for (
								var A = [],
									t = this.paperList,
									e = 0,
									g = t.length;
								e < g;
								e++
							) {
								var C = t[e]
								switch (this.paperConfig.type) {
									case U.A4:
										A.push([C])
										break
									case U.A3:
										A.push(e < g - 1 ? [C, t[++e]] : [C])
								}
							}
							return A
						}
					},
					mounted: function() {
						;(this.paperConfig.canToggleBlock = this.canToggleBlock),
							this.calc()
					},
					methods: {
						isHighDpr: function() {
							return !!+this.paperConfig.highDpr
						},
						calc: function() {
							var A = this,
								t = this.paperList
							;(this.paperList = []),
								this.$nextTick(function(e) {
									A.paperList = q(
										t,
										A.isHighDpr(),
										A.paperConfig.totalSize
									)
								})
						},
						removeBlock: function(A) {
							this.paperList.forEach(function(t) {
								for (
									var e = t.blockList, g = e.length - 1;
									g > -1;
									g--
								) {
									e[g].relativeQuestionId ==
										A.relativeQuestionId && e.splice(g, 1)
								}
							}),
								this.calc()
						},
						clickBlock: function(A) {
							var t,
								e = A.relativeQuestionId,
								g = []
							this.paperList.forEach(function(A) {
								for (
									var C = A.blockList, n = C.length - 1;
									n > -1;
									n--
								) {
									var I = C[n]
									;-1 == H.indexOf(I.type) &&
										I.relativeQuestionId == e &&
										(function() {
											var A = I.index + 1,
												e = []
											switch (I.type) {
												case b.PaperFillInBlankQuestions:
													var C = '02'
													I.list.length &&
														(C =
															I.list[0].question
																.questionTypeId),
														(t = '02'),
														(e = I.list.map(
															function(t) {
																return {
																	imgOrderReal:
																		t.blockNum,
																	questionOrder:
																		t.order,
																	questionId:
																		t.qId,
																	score:
																		t
																			.question
																			.score,
																	imageOrder: A,
																	correctLocation:
																		t.correctLocation,
																	questionTypeId: C
																}
															}
														))
													break
												case b.Block:
												case b.PaperComposition:
												case b.EngPaperComposition:
													;(t =
														I.question
															.questionTypeId),
														e.push({
															imgOrderReal:
																I.blockNum,
															questionOrder:
																I.question
																	.order,
															questionId:
																I.relativeQuestionId,
															score:
																I.question
																	.score,
															imageOrder: A
														})
											}
											g = [].concat(rA()(g), rA()(e))
										})()
								}
							}),
								this.$emit('appendOrRemoveNodes', g, t)
						},
						toggleClass: function(A, t, e) {
							var g = this
							return (
								this.paperList.forEach(function(C) {
									for (
										var n = C.blockList, I = n.length - 1;
										I > -1;
										I--
									) {
										var r = n[I]
										if (
											A.indexOf(r.relativeQuestionId) > -1
										)
											switch (
												(r.classList ||
													g.$set(r, 'classList', []),
												e)
											) {
												case pt:
													;-1 ==
														r.classList.indexOf(
															t
														) && r.classList.push(t)
													break
												case ht:
													var o = r.classList.indexOf(
														t
													)
													o > -1 &&
														r.classList.splice(o, 1)
											}
									}
								}),
								this
							)
						},
						addClass: function(A, t) {
							return this.toggleClass(A, t, pt), this
						},
						removeClass: function(A, t) {
							return this.toggleClass(A, t, ht), this
						},
						toggleActive: function(A, t) {
							var e = this
							return (
								this.paperList.forEach(function(g) {
									for (
										var C = g.blockList, n = C.length - 1;
										n > -1;
										n--
									) {
										var I = C[n]
										A.indexOf(I.relativeQuestionId) > -1 &&
											e.$set(I, 'isActive', t)
									}
								}),
								this
							)
						},
						setUnActive: function(A) {
							return this.toggleActive(A, !1), this
						},
						setActive: function(A) {
							return this.toggleActive(A, !0), this
						},
						getUnActiveList: function() {
							var A = [],
								t = []
							return (
								this.paperList.forEach(function(e) {
									for (
										var g = e.blockList, C = g.length - 1;
										C > -1;
										C--
									) {
										var n = g[C]
										;-1 != H.indexOf(n.type) ||
											n.isActive ||
											-1 !=
												t.indexOf(
													n.relativeQuestionId
												) ||
											(A.push(n),
											t.push(n.relativeQuestionId))
									}
								}),
								A
							)
						}
					}
				},
				dt = (e(159), Object(lA.a)(Bt, nA, [], !1, null, null, null))
			dt.options.__file =
				'src/package/answerCard/src/components/AnswerCardPaperManager.vue'
			var ft = dt.exports,
				wt = e(79),
				Qt = e.n(wt),
				mt = e(113),
				Ut = e.n(mt),
				Et = e(76),
				vt = e.n(Et),
				bt = function() {
					var A = this,
						t = A.$createElement,
						e = A._self._c || t
					return e(
						'div',
						{ staticClass: 'answer-paper-print' },
						A._l(A.data, function(t, g) {
							return A.data
								? e('answer-paper-package', {
										key: g,
										ref: 'printDom_' + g,
										refInFor: !0,
										attrs: {
											'paper-type': A.paperType,
											dpr: A.HighDprScale,
											page: g + 1,
											'total-page': A.data.length,
											data: t,
											index: g
										}
								  })
								: A._e()
						}),
						1
					)
				}
			bt._withStripped = !0
			var Ft = {
					components: { AnswerPaperPackage: ut },
					provide: function() {
						var A = this
						return {
							isHighDpr: function() {
								return !0
							},
							paperConfig: {
								type: this.PaperType[this.paperType],
								checkMode: this.checkMode,
								qrCodeContent: this.qrCodeContent
							},
							clickBlock: function(A) {},
							calc: function() {},
							addBlockCount: function() {
								A.blockCount++
							},
							addMountedBlockCount: function() {
								if (
									(A.mountedBlockCount++,
									A.blockCount == A.mountedBlockCount)
								) {
									var t = $(A.$el).find(
										'.choosed-img-list img'
									)
									if (!t.length) return A.judge()
									A.imgCount = t.length
									for (var e = 0, g = t.length; e < g; e++) {
										var C = t[e]
										;(C.onload = C.onerror = function() {
											A.loadedImgCount++, A.judge()
										}),
											('complete' == C.readyState ||
												'loaded' == C.readyState ||
												C.complete) &&
												(A.loadedImgCount++, A.judge())
									}
								}
							}
						}
					},
					data: function() {
						return {
							blockCount: 0,
							mountedBlockCount: 0,
							loadedImgCount: 0,
							imgCount: 0,
							paperType: '',
							checkMode: 1,
							data: null,
							qrCodeContent: '',
							mountedFlag: !1,
							HighDprScale: 4,
							PaperType: E
						}
					},
					mounted: function() {
						;(this.mountedFlag = !0), this.judge()
					},
					methods: {
						judge: function() {
							var A = this
							console.log(this.imgCount, this.loadedImgCount),
								this.imgCount == this.loadedImgCount &&
									this.mountedFlag &&
									this.$nextTick(function(t) {
										A.onRendered()
									})
						}
					}
				},
				xt = (e(178), Object(lA.a)(Ft, bt, [], !1, null, null, null))
			xt.options.__file =
				'src/package/answerCard/src/components/AnswerCardPaperPrint.vue'
			var Ht = xt.exports,
				yt = e(114),
				Nt = e.n(yt),
				Kt = Vue.extend(Ht),
				Tt = function(A) {
					return new vt.a(function(t, e) {
						var g,
							C = new Kt({
								el: document.createElement('div'),
								data: A,
								methods: {
									onRendered:
										((g = Ut()(
											Qt.a.mark(function A() {
												var e, g, C, n, I, r, o
												return Qt.a.wrap(
													function(A) {
														for (;;)
															switch (
																(A.prev =
																	A.next)
															) {
																case 0:
																	;(e = []),
																		(g = $(
																			document
																		)),
																		(C = g.scrollTop()),
																		g.scrollTop(
																			0
																		),
																		Array.prototype.push.apply(
																			e,
																			this.$el.getElementsByClassName(
																				'answer-paper-package'
																			)
																		),
																		(n = []),
																		(I = 0),
																		(r =
																			e.length)
																case 7:
																	if (
																		!(I < r)
																	) {
																		A.next = 15
																		break
																	}
																	return (
																		(A.next = 10),
																		Nt()(
																			e[
																				I
																			],
																			{
																				useCORS: !0
																			}
																		)
																	)
																case 10:
																	;(o =
																		A.sent),
																		n.push(
																			o.toDataURL(
																				'image/jpeg'
																			)
																		)
																case 12:
																	I++,
																		(A.next = 7)
																	break
																case 15:
																	t(n),
																		g.scrollTop(
																			C
																		),
																		document.body.removeChild(
																			this
																				.$el
																		)
																case 18:
																case 'end':
																	return A.stop()
															}
													},
													A,
													this
												)
											})
										)),
										function() {
											return g.apply(this, arguments)
										})
								}
							})
						document.body.appendChild(C.$el)
					})
				}
			t.default = {
				install: function(A) {
					A.component(ft.name, ft)
				},
				util: g,
				PrintService: C
			}
		},
		function(A, t, e) {
			'use strict'
			e.r(t)
			var g = {}
			e.r(g),
				e.d(g, 'QuestionType', function() {
					return n
				}),
				e.d(g, 'PaperTriggerEventType', function() {
					return I
				}),
				e.d(g, 'PaperAnswerResult', function() {
					return r
				}),
				e.d(g, 'PaperType', function() {
					return o
				}),
				e.d(g, 'PaperStatus', function() {
					return i
				}),
				e.d(g, 'PlaceHolderOnComponent', function() {
					return s
				})
			var C = {}
			e.r(C),
				e.d(C, 'getFixedTitle', function() {
					return u
				}),
				e.d(C, 'fixPaperData', function() {
					return p
				}),
				e.d(C, 'EmptyFunction', function() {
					return h
				})
			var n = { ClozeTest: '12' },
				I = {
					ReportError: 1,
					ClickOption: 2,
					Delete: 3,
					Choose: 4,
					UnChoose: 5,
					ShowSimilar: 6,
					HideSimilar: 7,
					Correct: {
						Update: 81,
						Type: { Right: '0', Wrong: '1', Half: '2' }
					},
					ClickQuestion: 9,
					ClickGroup: 10
				},
				r = { Right: '0', Wrong: '1', Half: '2' },
				o = {
					UploadJob: '121',
					UploadTest: '221',
					EnglishListening: '203',
					GoOverEnglish: '403'
				},
				i = {
					Add: 0,
					Delete: 1,
					Preservation: 2,
					Arrangement: 3,
					Submit: 4,
					Correct: 5,
					Report: 6,
					Late: 7,
					Failure: 8
				},
				s = 'placeholder',
				a = e(14),
				c = e.n(a)
			function l(A) {
				var t = /\((\d+)\)/
				return (
					(A.questionLines || []).forEach(function(A) {
						A.questionGroup.forEach(function(A) {
							if (A.groupCode && A.questions.length) {
								A.content = A.content || ''
								var e = A.labels || [],
									g = A.questions[0].__questionNum
								;(A.content =
									((C = A.content),
									(n = g - 1),
									(I = c()(
										'<div >'.concat(C, '</div>')
									)).find('.whdx_qorder').length
										? (I.find('.whdx_qorder').each(function(
												A,
												t
										  ) {
												t.innerHTML =
													n + +t.getAttribute('name')
										  }),
										  I.html())
										: C)),
									A.questions.forEach(function(A) {
										var e = A.questionTitle || ''
										A.questionTitle = e.replace(t, '')
									}),
									e.forEach(function(A) {
										var t = A.content || '',
											e = c()(
												'<div >'.concat(t, '</div>')
											)
										if (e.find('.whdx_qorder').length)
											return (
												e
													.find('.whdx_qorder')
													.each(function(A, t) {
														t.innerHTML =
															g +
															+t.getAttribute(
																'name'
															) -
															1
													}),
												void (A.content = e.html())
											)
									})
							}
							var C, n, I
						})
					}),
					A
				)
			}
			var u = function(A) {
					return A
						? ((A = A.replace(
								/【[^【】]*题[^【】]*干[^【】]*】/,
								''
						  ).replace(/【[^【】]*材[^【】]*料[^【】]*】/, '')),
						  !/^((\<div)|(\<p))/g.test(A) || /^(\<span)/.test(A)
								? { content: A, hasBlockTag: !1 }
								: {
										content: c()(
											'<div>' + A + '</div>'
										).html(),
										hasBlockTag: !0
								  })
						: { content: '' }
				},
				p = function(A, t, e) {
					if (!A) return A
					for (
						var g = 0 + (e || 0),
							C = A.questionLines || [],
							I = 0,
							r = C.length;
						I < r;
						I++
					)
						for (
							var o = C[I].questionGroup || [],
								i = 0,
								s = o.length;
							i < s;
							i++
						) {
							var a = o[i],
								c = a.questions || []
							;(a.__isNotSplit =
								!a.questionTypeId ||
								t.join(',').indexOf(a.questionTypeId) > -1),
								(a.__isSpecial =
									!a.questionTypeId ||
									t.join(',').indexOf(a.questionTypeId) > -1),
								(a.__isChoosed = a.__isChoosed || !1)
							for (var u = 0, p = c.length; u < p; u++) {
								var h = c[u]
								h.paperUserAnswer ||
									Vue.set(h, 'paperUserAnswer', {
										userAnswer: ''
									}),
									h.paperUserAnswer.userAnswer ||
										Vue.set(
											h.paperUserAnswer,
											'userAnswer',
											''
										),
									(h.__isClozeTest =
										h.questionTypeId == n.ClozeTest),
									(h.__isChoosed = h.__isChoosed || !1),
									(h.__questionNum = ++g),
									a.groupCode &&
										-1 == e &&
										(h.__questionNum = u + 1)
							}
						}
					return l(A)
				},
				h = function() {},
				B = function() {
					var A = this,
						t = A.$createElement,
						e = A._self._c || t
					return A.paper
						? e(
								'div',
								{
									staticClass: 'paper',
									class: A.paperClass,
									attrs: { 'data-status': A.paperStatus }
								},
								A._l(A.paper.questionLines || [], function(t) {
									return e(
										'div',
										{
											staticClass: 'qline',
											attrs: { 'data-lineId': t.lineId }
										},
										[
											+t.isShow
												? e(
														'div',
														{
															staticClass:
																'qline-name'
														},
														[
															e('span', {
																domProps: {
																	innerHTML: A._s(
																		A.getQlineName(
																			t
																		)
																	)
																}
															}),
															A._v(' '),
															A._t(
																'lineName',
																null,
																{
																	onTrigger:
																		A.onTrigger,
																	qline: t
																}
															)
														],
														2
												  )
												: A._e(),
											A._v(' '),
											e(
												'div',
												{ staticClass: 'groups' },
												A._l(
													t.questionGroup || [],
													function(g) {
														return e(
															'Group',
															{
																key:
																	g.questionId,
																ref:
																	'group_' +
																	g.questionId,
																refInFor: !0,
																attrs: {
																	qline: t,
																	paper:
																		A.paper,
																	group: g,
																	'on-trigger':
																		A.onTrigger,
																	'is-show-num':
																		A.isShowNumInEnd,
																	'is-show-result':
																		A.isShowResult,
																	'is-show-choose-btn':
																		A.isShowChooseBtn,
																	'question-more-content-filter':
																		A.questionMoreContentFilter,
																	'group-more-content-filter':
																		A.groupMoreContentFilter
																}
															},
															[
																e(
																	'template',
																	{
																		slot:
																			'groupMoreContent'
																	},
																	[
																		A._t(
																			'groupMoreContent'
																		)
																	],
																	2
																),
																A._v(' '),
																e(
																	'template',
																	{
																		slot:
																			'questionMoreContent'
																	},
																	[
																		A._t(
																			'questionMoreContent'
																		)
																	],
																	2
																),
																A._v(' '),
																e(
																	'template',
																	{
																		slot:
																			'questionTitle'
																	},
																	[
																		A._t(
																			'questionTitle'
																		)
																	],
																	2
																),
																A._v(' '),
																e(
																	'template',
																	{
																		slot:
																			'groupContent'
																	},
																	[
																		A._t(
																			'groupContent'
																		)
																	],
																	2
																)
															],
															2
														)
													}
												),
												1
											)
										]
									)
								}),
								0
						  )
						: A._e()
				}
			B._withStripped = !0
			var d = e(19),
				f = e.n(d),
				w = {
					props: {
						isShowChooseBtn: { type: Boolean, default: !1 },
						isShowNum: void 0,
						isShowResult: { type: Boolean, default: !1 },
						questionMoreContentFilter: {
							type: Function,
							default: function(A, t) {
								return this.paper &&
									this.paper.type == o.EnglishListening
									? A.groupCode
										? ''
										: s
									: !A.groupCode ||
									  (A.groupCode && !A.__isSpecial)
									? s
									: void 0
							}
						},
						question: { type: Object, default: null },
						qline: { type: Object, default: null }
					}
				},
				Q = {
					props: f()({}, w.props, {
						paper: { type: Object, default: null },
						qline: { type: Object, default: null },
						group: { type: Object },
						onTrigger: { type: Function, default: h },
						groupMoreContentFilter: {
							type: Function,
							default: function(A) {
								return this.paper &&
									this.paper.type == o.EnglishListening
									? !!A.groupCode
									: !(!A.groupCode || !A.__isSpecial) ||
											void 0
							}
						}
					})
				},
				m = {
					props: f()({}, Q.props, {
						baseNum: { type: Number, default: 0 },
						paperStatus: { type: String, default: '' },
						isShowLineCoreDef: { type: Boolean, default: !1 },
						specialQuestionTypes: {
							type: Array,
							default: function() {
								return []
							}
						}
					})
				},
				U = function() {
					var A = this,
						t = A.$createElement,
						e = A._self._c || t
					return e(
						'div',
						{
							staticClass: 'group',
							class: [
								A.group.__isSpecial && 'special',
								!!+A.group.hideTitle && 'group-hide-title'
							],
							attrs: {
								'data-gCode': A.group.groupCode,
								'data-groupcode': A.group.groupCode,
								'data-qId': A.group.questionId
							},
							on: {
								click: function(t) {
									A.onClickGroup(t)
								}
							}
						},
						[
							A.group.groupCode && A.groupTitleData
								? e(
										'div',
										{ staticClass: 'group-title' },
										[
											A._t('groupContent', [
												e(
													'div',
													{
														staticClass:
															'group-content'
													},
													[
														A.isShowChooseBtn
															? e(
																	'span',
																	{
																		staticClass:
																			'choose-btn',
																		class: {
																			active:
																				A
																					.group
																					.__isChoosed
																		},
																		on: {
																			click: function(
																				t
																			) {
																				A.toggleChoose(
																					t
																				)
																			}
																		}
																	},
																	[
																		e(
																			'input',
																			{
																				attrs: {
																					type:
																						'checkbox'
																				}
																			}
																		)
																	]
															  )
															: A._e(),
														A._v(' '),
														e('span', {
															ref: 'groupTitle',
															domProps: {
																innerHTML: A._s(
																	A.group
																		.content
																)
															}
														})
													]
												)
											])
										],
										2
								  )
								: A._e(),
							A._v(' '),
							A._l(A.group.questions, function(t) {
								return e(
									'Question',
									{
										key: t.questionId,
										attrs: {
											'on-trigger': A.onTrigger,
											qline: A.qline,
											'is-show-num': A.isShowNum,
											'is-show-result': A.isShowResult,
											'is-show-choose-btn':
												A.isShowChooseBtn &&
												!A.group.groupCode,
											question: t,
											'question-more-content-filter':
												A.questionMoreContentFilter
										}
									},
									[
										e(
											'template',
											{ slot: 'questionMoreContent' },
											[A._t('questionMoreContent')],
											2
										),
										A._v(' '),
										e(
											'template',
											{ slot: 'questionTitle' },
											[A._t('questionTitle')],
											2
										)
									],
									2
								)
							}),
							A._v(' '),
							A.moreContentComponentValue
								? A._t('groupMoreContent')
								: A._e()
						],
						2
					)
				}
			U._withStripped = !0
			var E = function() {
				var A = this,
					t = A.$createElement,
					e = A._self._c || t
				return A.question
					? e(
							'div',
							{
								class: [
									'question',
									this.question.__isClozeTest && 'clozetest'
								],
								style: {
									'padding-bottom': A.moreContentComponentValue
										? '10px'
										: '5px'
								},
								attrs: {
									'data-qId': A.question.questionId,
									'data-gCode': A.group.groupCode
								},
								on: {
									click: function(t) {
										A.onClickQuestion(t)
									}
								}
							},
							[
								e(
									'div',
									{ staticClass: 'question-title' },
									[
										A.questionTitleData
											? e(
													'div',
													{
														staticClass:
															'question-content'
													},
													[
														A._t('questionTitle', [
															A.isShowChooseBtn
																? e(
																		'span',
																		{
																			class: [
																				'choose-btn',
																				A
																					.question
																					.__isChoosed &&
																					'active'
																			],
																			on: {
																				click: function(
																					t
																				) {
																					A.toggleChoose(
																						t
																					)
																				}
																			}
																		},
																		[
																			e(
																				'input',
																				{
																					attrs: {
																						type:
																							'checkbox'
																					}
																				}
																			)
																		]
																  )
																: A._e(),
															A._v(' '),
															A.isShowNumInEnd
																? e(
																		'label',
																		{
																			staticClass:
																				'question-num'
																		},
																		[
																			A._v(
																				A._s(
																					A
																						.question
																						.__questionNum
																				) +
																					'.'
																			)
																		]
																  )
																: A._e(),
															A._v(' '),
															e('span', {
																staticClass:
																	'question-content-text',
																domProps: {
																	innerHTML: A._s(
																		A
																			.questionTitleData
																			.content
																	)
																}
															})
														])
													],
													2
											  )
											: A._e(),
										A._v(' '),
										e('QuestionChoice', {
											attrs: {
												'on-trigger': A.onTrigger,
												question: A.question
											}
										})
									],
									1
								),
								A._v(' '),
								A.moreContentComponentValue
									? A._t('questionMoreContent')
									: A._e(),
								A._v(' '),
								A.isShowResult
									? e('span', {
											class: [
												'question-answer',
												A.answerResultClass
											]
									  })
									: A._e()
							],
							2
					  )
					: A._e()
			}
			E._withStripped = !0
			var v = function() {
				var A = this,
					t = A.$createElement,
					e = A._self._c || t
				return A.question.optionA
					? e(
							'div',
							{ staticClass: 'choise' },
							A._l(A.options, function(t) {
								return e('div', {
									class: A.classList(t.option),
									domProps: { innerHTML: A._s(t.text) },
									on: {
										click: function(e) {
											A.onClickOption(t.option, e)
										}
									}
								})
							}),
							0
					  )
					: A._e()
			}
			v._withStripped = !0
			var b = e(5),
				F = e.n(b),
				x = {
					name: 'vue-template-paper-question-choice',
					props: {
						question: { type: Object },
						onTrigger: { type: Function, default: h }
					},
					data: function() {
						return { optionActiveClass: 'active' }
					},
					computed: {
						tag: function() {
							return this.question.__isClozeTest ? 'span' : 'div'
						},
						userAnswer: function() {
							var A = this.question
							return (
								A.paperUserAnswer || (A.paperUserAnswer = {}),
								A.paperUserAnswer.userAnswer || ''
							)
						},
						options: function() {
							var A = this.question,
								t = [{ text: A.optionA, option: 'A' }]
							return (
								A.optionB &&
									t.push({ text: A.optionB, option: 'B' }),
								A.optionC &&
									t.push({ text: A.optionC, option: 'C' }),
								A.optionD &&
									t.push({ text: A.optionD, option: 'D' }),
								t
							)
						}
					},
					methods: {
						classList: function(A) {
							var t = this.userAnswer.indexOf(A) > -1,
								e = F()(
									{ 'choise-option': !0 },
									this.optionActiveClass,
									t
								)
							return (
								t &&
									((this.question.answer || '').indexOf(A) >
									-1
										? (e['right-option-answer'] = !0)
										: (e['wrong-option-answer'] = !0)),
								e
							)
						},
						onClickOption: function(A, t) {
							this.onTrigger &&
								this.onTrigger({
									type: I.ClickOption,
									question: this.question,
									option: A,
									event: t
								})
						}
					}
				},
				H = e(0),
				y = Object(H.a)(x, v, [], !1, null, null, null)
			y.options.__file =
				'src/package/paper/src/components/QuestionChoice.vue'
			var N = {
					name: 'vue-template-paper-question',
					mixins: [w],
					components: { QuestionChoice: y.exports },
					inject: ['paper', 'group', 'onTrigger'],
					provide: function() {
						return { question: this.question }
					},
					data: function(A) {
						return {
							config: g,
							questionTitleData: null,
							moreContentComponentValue: null
						}
					},
					mounted: function() {
						;(this.questionTitleData = u(
							this.question.questionTitle
						)),
							this.$set(
								this.question,
								'__questionTitle',
								this.questionTitleData.content
							),
							(this.moreContentComponentValue = this.questionMoreContentFilter(
								this.group,
								this.question
							))
					},
					methods: {
						onClickQuestion: function(A) {
							this.onTrigger &&
								this.onTrigger({
									type: I.ClickQuestion,
									question: this.question,
									group: this.group,
									event: A
								})
						},
						toggleChoose: function(A) {
							;(this.question.__isChoosed = !this.question
								.__isChoosed),
								this.onTrigger &&
									this.onTrigger({
										type: this.question.__isChoosed
											? I.Choose
											: I.UnChoose,
										question: this.question,
										group: this.group,
										event: A
									})
						}
					},
					computed: {
						answerResultClass: function() {
							var A = this.question,
								t = ''
							A.paperUserAnswer || (A.paperUserAnswer = {})
							A.paperUserAnswer.userAnswer
							switch (A.paperUserAnswer.result) {
								case r.Right:
									t = 'right'
									break
								case r.Wrong:
									t = 'wrong'
									break
								case r.Half:
									t = 'half'
							}
							return t
						},
						isShowNumInEnd: function() {
							var A = this.group,
								t = this.question,
								e = this.paper
							return (
								((!A.groupCode && this.isShowNum) ||
									(A.groupCode &&
										e.type !== o.EnglishListening)) &&
								t.__questionNum
							)
						}
					}
				},
				K = Object(H.a)(N, E, [], !1, null, null, null)
			K.options.__file = 'src/package/paper/src/components/Question.vue'
			var T = {
					name: 'vue-template-paper-group',
					components: { Question: K.exports },
					data: function() {
						return {
							moreContentComponentValue: '',
							groupTitleData: null,
							config: g
						}
					},
					mixins: [Q],
					provide: function() {
						var A = this.group,
							t = this.paper,
							e = this.onTrigger
						return {
							qline: this.qline,
							group: A,
							paper: t,
							onTrigger: e
						}
					},
					mounted: function() {
						;(this.groupTitleData = u(this.group.content || '')),
							this.groupTitleData ||
								(this.groupTitleData = { content: '' }),
							(this.group.content = this.groupTitleData.content),
							this.$set(
								this.group,
								'__content',
								this.groupTitleData.content
							),
							(this.moreContentComponentValue = this.groupMoreContentFilter(
								this.group
							))
					},
					methods: {
						onClickGroup: function(A) {
							this.onTrigger &&
								this.onTrigger({
									type: I.ClickGroup,
									group: this.group,
									event: A
								})
						},
						toggleChoose: function(A) {
							;(this.group.__isChoosed = !this.group.__isChoosed),
								this.onTrigger &&
									this.onTrigger({
										type: this.group.__isChoosed
											? I.Choose
											: I.UnChoose,
										group: this.group,
										event: A
									})
						},
						forceUpdate: function() {
							var A = this,
								t = this.group
							if (t.groupCode && t.__isSpecial) {
								var e = $(this.$refs.groupTitle),
									g = t.questions[0].__questionNum || 1
								e.find('.whdx_qorder').each(function(t, e) {
									var C = +A.getAttribute('name')
									e.innerHTML = ''.concat(g + C)
								})
							}
						}
					}
				},
				_ = Object(H.a)(T, U, [], !1, null, null, null)
			_.options.__file = 'src/package/paper/src/components/Group.vue'
			var k = _.exports,
				R = {
					name: 'vue-template-paper',
					mixins: [m],
					components: { Group: k },
					created: function() {
						if (!this.paper) throw new Error('no paper data')
						p(
							this.paper,
							this.specialQuestionTypes,
							this.isShowAbsolutedNum ? this.baseNum : -1
						)
					},
					watch: {
						paper: function(A) {
							A &&
								p(
									this.paper,
									this.specialQuestionTypes,
									this.isShowAbsolutedNum ? this.baseNum : -1
								)
						}
					},
					computed: {
						paperClass: function() {
							return {
								'show-result': this.isShowResult,
								'no-num': !this.isShowNumInEnd,
								'show-choose-btn': this.isShowChooseBtn
							}
						},
						isShowNumInEnd: function() {
							return void 0 === this.isShowNum
								? !!this.paper &&
										this.paper.type != o.EnglishListening
								: this.isShowNum
						},
						isShowAbsolutedNum: function() {
							return (
								this.isShowNum ||
								void 0 === this.isShowNum ||
								(!this.isShowNum &&
									!!this.paper &&
									this.paper.type == o.EnglishListening)
							)
						}
					},
					methods: {
						getQlineName: function(A) {
							var t = (A.lineName || '').replace('默认题行', ''),
								e = A.scoreDef || ''
							return t + (this.isShowLineCoreDef ? e : '')
						},
						forceUpdate: function() {
							var A = this.$refs
							this.paper.questionLines.forEach(function(t) {
								t.questionGroup.forEach(function(t) {
									var e = A['group_'.concat(t.questionId)]
									e &&
										e.length &&
										e[0].forceUpdate &&
										e[0].forceUpdate()
								})
							})
						}
					}
				},
				L = Object(H.a)(R, B, [], !1, null, null, null)
			L.options.__file = 'src/package/paper/src/components/Paper.vue'
			var S = L.exports
			t.default = {
				install: function(A) {
					A.component(S.name, S),
						A.component(k.name, k),
						(A.prototype.$paperConfig = g),
						(A.prototype.$paperUtil = C),
						(S.config = g),
						(S.util = C)
				}
			}
		},
		function(A, t, e) {
			'use strict'
			e.r(t)
			var g = function() {
				var A = this,
					t = A.$createElement,
					e = A._self._c || t
				return e(
					'el-dialog',
					{
						attrs: {
							lockScroll: !1,
							title: '分数段设置',
							width: '453px',
							visible: A.visible,
							center: '',
							'close-on-click-modal': !1
						},
						on: { close: A.closeBtn }
					},
					[
						e('div', { staticClass: 'set-box' }, [
							e('p', { staticClass: 'tip-text' }, [
								A._v('请从小到大设置分数段1-5')
							]),
							A._v(' '),
							e(
								'ul',
								{ staticClass: 'set-wrapper' },
								A._l(A.subsection, function(t, g) {
									return e(
										'li',
										{ staticClass: 'subsection-item' },
										[
											e('span', [
												A._v(
													'分数段' +
														A._s(g + 1) +
														'：['
												)
											]),
											A._v(' '),
											e('input', {
												directives: [
													{
														name: 'model',
														rawName: 'v-model',
														value: t[0],
														expression: 'item[0]'
													}
												],
												attrs: { disabled: A.disabled },
												domProps: { value: t[0] },
												on: {
													input: function(e) {
														e.target.composing ||
															A.$set(
																t,
																0,
																e.target.value
															)
													}
												}
											}),
											A._v(
												'\n                ，\n                '
											),
											e('input', {
												directives: [
													{
														name: 'model',
														rawName: 'v-model',
														value: t[1],
														expression: 'item[1]'
													}
												],
												attrs: { disabled: A.disabled },
												domProps: { value: t[1] },
												on: {
													input: function(e) {
														e.target.composing ||
															A.$set(
																t,
																1,
																e.target.value
															)
													}
												}
											}),
											A._v(' '),
											e('span', [
												A._v(
													A._s(
														g ==
															A.subsection
																.length -
																1
															? ']'
															: ')'
													)
												)
											])
										]
									)
								}),
								0
							)
						]),
						A._v(' '),
						e(
							'span',
							{ attrs: { slot: 'footer' }, slot: 'footer' },
							[
								e(
									'el-button',
									{
										attrs: { size: 'medium' },
										on: { click: A.closeBtn }
									},
									[A._v('取消')]
								),
								A._v(' '),
								e(
									'el-button',
									{
										attrs: {
											size: 'medium',
											type: 'primary'
										},
										on: { click: A.confirmSubsection }
									},
									[A._v('确定')]
								)
							],
							1
						)
					]
				)
			}
			g._withStripped = !0
			var C = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]],
				n = {
					XKZF: [
						[0, 0.6],
						[0.6, 0.7],
						[0.7, 0.8],
						[0.8, 0.9],
						[0.9, 1]
					],
					NJZF: [
						[0, 0.05],
						[0.05, 0.25],
						[0.25, 0.55],
						[0.55, 0.85],
						[0.85, 1]
					],
					LSBL: [
						[0, 0.05],
						[0.05, 0.25],
						[0.25, 0.55],
						[0.55, 0.75],
						[0.75, 1]
					]
				},
				I = e(14),
				r = e.n(I),
				o = {
					name: 'FragmentScore',
					props: {
						totalScore: { type: Number },
						fragmentType: { type: String, default: 'XKZF' },
						visible: { type: Boolean, default: !1 },
						confirm: {
							type: Function,
							default: function() {
								return ''
							}
						},
						close: {
							type: Function,
							default: function() {
								return ''
							}
						}
					},
					data: function() {
						return {
							subsection: [],
							disabled: !1,
							oldSubsection: []
						}
					},
					watch: {
						totalScore: {
							handler: function(A) {
								;(this.disabled = A < 10),
									this.initSubSection(A),
									this.confirm(this.subsection),
									(this.oldSubsection = r.a.extend(
										!0,
										[],
										this.subsection
									))
							},
							immediate: !0
						}
					},
					methods: {
						closeBtn: function() {
							;(this.subsection = r.a.extend(
								!0,
								[],
								this.oldSubsection
							)),
								this.close()
						},
						initSubSection: function(A) {
							if (A <= 5) this.subsection = C
							else {
								var t =
									A > 5 && A < 10
										? n.LSBL
										: n[this.fragmentType]
								this.subsection = t.map(function(t) {
									return t.map(function(t) {
										return Math.ceil((t * A).toFixed(2))
									})
								})
							}
						},
						confirmSubsection: function() {
							var A = this,
								t = /^[+]{0,1}(\d+)$/,
								e = !0
							this.subsection.forEach(function(g, C) {
								var n = A.subsection[C - 1] || [0, 0]
								t.test(Number(g[0])) && t.test(Number(g[1]))
									? (parseInt(g[0]) >= parseInt(g[1]) ||
											g[1] > A.totalScore ||
											parseInt(n[1]) > parseInt(g[0])) &&
									  (e = !1)
									: (e = !1)
							}),
								e
									? ((this.oldSubsection = r.a.extend(
											!0,
											[],
											this.subsection
									  )),
									  this.confirm(this.subsection))
									: this.$message.error('请输入正确的数据')
						}
					}
				},
				i = (e(182), e(0)),
				s = Object(i.a)(o, g, [], !1, null, '7da27963', null)
			s.options.__file =
				'src/package/fragmentScore/src/components/FragmentScore.vue'
			var a = s.exports
			t.default = {
				install: function(A) {
					A.component(a.name, a)
				}
			}
		},
		function(A, t, e) {
			'use strict'
			e.r(t)
			var g = function() {
				var A = this.$createElement
				this._self._c
				return this._m(0)
			}
			g._withStripped = !0
			var C = { name: 'seal-line' },
				n = (e(207), e(0)),
				I = Object(n.a)(
					C,
					g,
					[
						function() {
							var A = this,
								t = A.$createElement,
								e = A._self._c || t
							return e('div', { staticClass: 'seal-line' }, [
								e('span', [A._v('座号：__________')]),
								A._v(' '),
								e('span', [A._v('考场：__________')]),
								A._v(' '),
								e('span', [A._v('班级：__________')]),
								A._v(' '),
								e('span', [A._v('姓名：__________')]),
								A._v(' '),
								e('span', [A._v('学号：__________')])
							])
						}
					],
					!1,
					null,
					'54d9e42a',
					null
				)
			I.options.__file = 'src/package/sealLine/src/index.vue'
			var r = I.exports
			t.default = {
				install: function(A) {
					A.component(r.name, r)
				}
			}
		},
		function(A, t, e) {
			'use strict'
			e.r(t)
			var g = function() {
				var A = this,
					t = A.$createElement,
					e = A._self._c || t
				return e(
					'section',
					[
						e(
							'el-dialog',
							{
								directives: [
									{
										name: 'loading',
										rawName: 'v-loading',
										value: A.isLoading,
										expression: 'isLoading'
									}
								],
								attrs: {
									lockScroll: !1,
									title: A.title,
									width: A.width,
									visible: A.visible,
									center: '',
									'close-on-click-modal': !1
								},
								on: { close: A.closeBtn }
							},
							[
								A.isLoading
									? e('div')
									: A.examList.length > 0
									? e(
											'div',
											[
												A.isShowAllCompare
													? e(
															'el-checkbox',
															{
																staticClass:
																	'allContrast',
																model: {
																	value:
																		A.allCompare,
																	callback: function(
																		t
																	) {
																		A.allCompare = t
																	},
																	expression:
																		'allCompare'
																}
															},
															[
																A._v(
																	'应用于所有数据表'
																)
															]
													  )
													: A._e(),
												A._v(' '),
												e(
													'ul',
													{
														staticClass:
															'examination-list'
													},
													A._l(A.examList, function(
														t
													) {
														return e(
															'li',
															{
																key:
																	t.examInfoId,
																staticClass:
																	'examination-item',
																class: {
																	pcStyle:
																		A.pcStyle
																}
															},
															[
																e(
																	'el-radio',
																	{
																		attrs: {
																			label: t
																		},
																		model: {
																			value:
																				A.selectData,
																			callback: function(
																				t
																			) {
																				A.selectData = t
																			},
																			expression:
																				'selectData'
																		}
																	},
																	[
																		e(
																			'span',
																			{
																				staticClass:
																					'exam-name'
																			},
																			[
																				A._v(
																					A._s(
																						t.examName
																					)
																				)
																			]
																		),
																		A._v(
																			' '
																		),
																		e(
																			'span',
																			{
																				staticClass:
																					'exam-type'
																			},
																			[
																				A._v(
																					A._s(
																						t.examTypeName
																					)
																				)
																			]
																		),
																		A._v(
																			' '
																		),
																		e(
																			'span',
																			{
																				staticClass:
																					'exam-time'
																			},
																			[
																				A._v(
																					A._s(
																						t.beginDate
																					) +
																						'-' +
																						A._s(
																							t.endDate
																						)
																				)
																			]
																		)
																	]
																)
															],
															1
														)
													}),
													0
												),
												A._v(' '),
												e('el-pagination', {
													staticClass: 'page-box',
													attrs: {
														background: '',
														layout:
															'prev, pager, next',
														total: A.totalCount,
														'current-page':
															A.pageNum,
														'page-szie': A.pageSize
													},
													on: {
														'page-change':
															A.pageChange
													}
												})
											],
											1
									  )
									: A._t('default'),
								A._v(' '),
								e(
									'span',
									{
										attrs: { slot: 'footer' },
										slot: 'footer'
									},
									[
										e(
											'el-button',
											{
												attrs: { size: 'medium' },
												on: { click: A.closeBtn }
											},
											[A._v('取消')]
										),
										A._v(' '),
										e(
											'el-button',
											{
												attrs: {
													size: 'medium',
													type: 'primary'
												},
												on: { click: A.confirmBtn }
											},
											[A._v('确定')]
										)
									],
									1
								)
							],
							2
						)
					],
					1
				)
			}
			g._withStripped = !0
			var C = e(117),
				n = e.n(C),
				I = {
					name: 'ExamCompare',
					props: {
						examInfoId: { type: String },
						visible: { type: Boolean, default: !1 },
						width: { type: String, default: '900px' },
						title: { type: String, default: '请选择要对比的考试' },
						pcStyle: { type: Boolean, default: !1 },
						confirm: {
							type: Function,
							default: function() {
								return ''
							}
						},
						close: {
							type: Function,
							default: function() {
								return ''
							}
						},
						isShowAllCompare: { type: Boolean, default: !0 },
						classId: { type: String, default: '' }
					},
					data: function() {
						return {
							totalCount: 0,
							pageSize: 10,
							pageNum: 1,
							examList: [],
							isLoading: !0,
							selectData: null,
							allCompare: !1
						}
					},
					watch: {
						examInfoId: {
							handler: function() {
								this.getExamCompareList()
							},
							immediate: !0
						}
					},
					methods: {
						getExamCompareList: function() {
							var A = this,
								t = {
									classId: this.classId,
									examInfoId: this.examInfoId,
									pageSize: this.pageSize,
									pageNum: this.pageNum
								}
							;(this.isLoading = !0),
								(this.examList = []),
								n.a
									.get(
										this.$SERVER_HOST +
											'/exam/report/getSameTypeExamList',
										{ params: t }
									)
									.then(function(t) {
										A.isLoading = !1
										var e = t.data.retData
										;(A.examList = e.list),
											(A.totalCount = e.totalCount)
									})
									.catch(function(t) {
										A.isLoading = !1
									})
						},
						pageChange: function(A) {
							;(this.pageNum = A), this.getExamCompareList()
						},
						closeBtn: function() {
							this.close()
						},
						confirmBtn: function() {
							this.selectData
								? this.confirm({
										targetExam: this.selectData,
										isAllCompare: this.allCompare
								  })
								: this.$message.info('请选择一次考试')
						}
					}
				},
				r = (e(205), e(0)),
				o = Object(r.a)(I, g, [], !1, null, '2f8b8568', null)
			o.options.__file = 'src/package/examCompare/src/index.vue'
			var i = o.exports
			t.default = {
				install: function(A) {
					A.component(i.name, i)
				}
			}
		},
		function(A, t, e) {
			'use strict'
			e.r(t)
			var g = function() {
				var A = this,
					t = A.$createElement,
					e = A._self._c || t
				return e('div', { staticClass: 'box-screen' }, [
					e(
						'div',
						{
							staticClass: 'close-text',
							on: { click: A.closeBtn }
						},
						[A._v('关闭')]
					),
					A._v(' '),
					e(
						'ul',
						{ staticClass: 'list' },
						A._l(A.listData && A.listData.showData, function(t) {
							return e('li', { class: 'screen-' + A.type }, [
								A._v(
									'\n            ' +
										A._s(t.label) +
										'\n            '
								),
								e('span', {
									staticClass: 'el-icon-close',
									on: {
										click: function(e) {
											A.changeData('hide', t)
										}
									}
								})
							])
						}),
						0
					),
					A._v(' '),
					e('div', { staticClass: 'close-text close-box-title' }, [
						A._v('\n        已隐藏的数据表\n    ')
					]),
					A._v(' '),
					e(
						'ul',
						{ staticClass: 'list' },
						A._l(A.listData && A.listData.hideData, function(t) {
							return e('li', { class: 'screen-' + A.type }, [
								A._v(A._s(t.label) + '\n            '),
								e('span', {
									staticClass: 'el-icon-close',
									on: {
										click: function(e) {
											A.changeData('show', t)
										}
									}
								})
							])
						}),
						0
					)
				])
			}
			g._withStripped = !0
			var C = e(116),
				n = e.n(C),
				I = e(14),
				r = e.n(I),
				o = {
					name: 'ReportScreen',
					props: {
						screenData: {
							type: Object,
							default: function() {
								return null
							}
						},
						type: { type: String, default: 'before' },
						screenKey: { type: String, default: '' },
						confirm: {
							type: Function,
							default: function() {
								return ''
							}
						},
						close: {
							type: Function,
							default: function() {
								return ''
							}
						}
					},
					data: function() {
						return { listData: null }
					},
					mounted: function() {
						this.listData = r.a.extend(!0, {}, this.screenData)
					},
					methods: {
						changeData: function(A, t) {
							var e = this.listData.showData,
								g = this.listData.hideData
							switch (A) {
								case 'hide':
									e.length > 1 &&
										((t.isShow = !1),
										g.push(t),
										this.removeData(e, t.name))
									break
								case 'show':
									e.push(t),
										(e[0].isShow = !0),
										this.removeData(g, t.name)
							}
							this.updateStorage(), this.confirm(this.listData)
						},
						removeData: function(A, t) {
							A.forEach(function(e, g) {
								e.name == t && A.splice(g, 1)
							})
						},
						updateStorage: function() {
							var A = r.a.extend(!0, {}, this.listData)
							A.showData.length > 0 &&
								(A.showData[0].isShow = !0),
								A.showData.forEach(function(A, t) {
									t > 0 && (A.isShow = !1)
								}),
								localStorage.setItem(this.screenKey, n()(A))
						},
						closeBtn: function() {
							this.close()
						}
					}
				},
				i = (e(185), e(0)),
				s = Object(i.a)(o, g, [], !1, null, '27342c4c', null)
			s.options.__file = 'src/package/reportScreen/src/index.vue'
			var a = s.exports
			t.default = {
				install: function(A) {
					A.component(a.name, a)
				}
			}
		},
		function(A, t, e) {
			'use strict'
			e.r(t)
			var g = function() {
				var A = this.$createElement,
					t = this._self._c || A
				return t('section', [
					t('div', {
						style: { width: this.width, height: this.height },
						attrs: { id: 'charts_' + this.echartsId }
					})
				])
			}
			g._withStripped = !0
			var C = e(19),
				n = e.n(C),
				I = e(115),
				r = e.n(I),
				o = {
					name: 'ReportEcharts',
					props: {
						echartsId: { type: String, default: '' },
						chartsType: { type: String, default: 'bar' },
						xAxisData: {
							type: Array,
							default: function() {
								return []
							}
						},
						yAxisData: {
							type: Array,
							default: function() {
								return []
							}
						},
						seriesData: {
							type: Array,
							default: function() {
								return []
							}
						},
						yType: { type: String, default: '' },
						width: { type: String, default: '100%' },
						height: { type: String, default: '300px' },
						isDataZoom: { type: Boolean, default: !1 },
						zoomEnd: { type: Number, default: 100 },
						grid: {
							type: Object,
							default: function() {
								return {
									left: 40,
									right: 0,
									bottom: 0,
									containLabel: !0
								}
							}
						},
						legendLocation: { type: String, default: '40' },
						isShowAxisLabel: { type: Boolean, default: !0 },
						lineType: { type: String, default: 'solid' },
						yAxisUnit: {
							type: Object,
							default: function() {
								return {}
							}
						},
						isSeriesLabel: { type: Boolean, default: !0 },
						isInverse: { type: Boolean, default: !1 }
					},
					data: function() {
						return { chart: null, legendData: [] }
					},
					watch: {
						seriesData: function() {
							this.canvasCharts()
						}
					},
					methods: {
						canvasCharts: function() {
							for (
								var A = this,
									t = this.seriesData,
									e = [],
									g = function(g) {
										A.legendData.push(t[g].name)
										var C =
												t[g].color &&
												t[g].color.split(','),
											n = {}
										t[g].markLine &&
											(n = {
												symbol: 'none',
												data: [
													{
														yAxis:
															t[g].markLine.value,
														label: {
															normal: {
																show: !0,
																position:
																	'middle',
																formatter:
																	t[g]
																		.markLine
																		.name
															}
														},
														lineStyle: {
															normal: {
																color:
																	'#999999',
																type: 'dotted'
															}
														}
													}
												]
											})
										var I = {
											name: t[g].name,
											type: A.chartsType,
											data: t[g].data,
											barWidth: 30,
											lineStyle: { type: A.lineType },
											label: {
												normal: {
													show: A.isSeriesLabel
												}
											},
											markLine: n
										}
										'line' == A.chartsType
											? ((I.itemStyle = {
													normal: {
														color:
															C && C[0]
																? C[0]
																: '#0084ff'
													}
											  }),
											  t.length > 1 &&
													1 == g &&
													(I.label = {
														normal: {
															show:
																A.isSeriesLabel,
															position: 'bottom'
														}
													}))
											: (I.itemStyle = {
													color: function(A) {
														return A.data > 0
															? C && C[0]
																? C[0]
																: '#0084ff'
															: C &&
															  C[C.length - 1]
															? C[C.length - 1]
															: '#ff8383'
													}
											  }),
											e.push(I)
									},
									C = 0;
								C < t.length;
								C++
							)
								g(C)
							var I = {
								tooltip: {
									formatter: function(A) {
										return A.name
									}
								},
								legend: {
									data: this.legendData,
									align: 'left',
									right: this.legendLocation
								},
								dataZoom: [
									{
										type: 'slider',
										show: this.isDataZoom,
										filterMode: 'filter',
										start: 0,
										end: this.zoomEnd,
										zoomLock: !0
									}
								],
								grid: this.grid,
								xAxis: {
									data: this.xAxisData,
									axisLine: { show: !1 },
									axisTick: { show: !1 },
									axisLabel: {
										formatter: function(A) {
											return (
												A.length > 21 &&
													(A =
														A.substr(0, 21) +
														'...'),
												A
											)
										}
									}
								},
								yAxis: n()({ type: 'value' }, this.yAxisUnit, {
									inverse: this.isInverse,
									axisLine: { show: !1 },
									axisTick: { show: !1 },
									axisLabel: { show: this.isShowAxisLabel },
									splitLine: {
										show: !0,
										lineStyle: { color: '#eff0f2' }
									},
									minInterval: 1
								}),
								series: e
							}
							this.yType &&
								(I.yAxis.axisLabel = {
									show: !0,
									interval: 'auto',
									formatter: '{value}'.concat(this.yType)
								}),
								(this.chart = r.a.init(
									document.getElementById(
										'charts_' + this.echartsId
									)
								)),
								this.chart.setOption(I)
						},
						resizeDom: function() {
							this.chart.resize()
						}
					},
					mounted: function() {
						this.canvasCharts(),
							window.addEventListener('resize', this.resizeDom)
					},
					destroyed: function() {
						window.removeEventListener('resize', this.resizeDom)
					}
				},
				i = e(0),
				s = Object(i.a)(o, g, [], !1, null, '3646712c', null)
			s.options.__file = 'src/package/reportEcharts/src/index.vue'
			var a = s.exports
			t.default = {
				install: function(A) {
					A.component(a.name, a)
				}
			}
		},
		function(A, t, e) {
			'use strict'
			e.r(t)
			var g = function() {
				var A = this,
					t = A.$createElement,
					e = A._self._c || t
				return e(
					'el-dialog',
					{
						attrs: {
							lockScroll: !1,
							title: A.title,
							width: A.width,
							visible: A.visible,
							'close-on-click-modal': !1,
							center: ''
						},
						on: { close: A.closeBtn }
					},
					[
						A.tips
							? e('div', { staticClass: 'pc-tips' }, [
									A._v(A._s(A.tips))
							  ])
							: A._e(),
						A._v(' '),
						A.exportData.length
							? e(
									'div',
									{ staticClass: 'excel-table' },
									A._l(A.exportData, function(t, g) {
										return e(
											'div',
											{
												key: t.dataKey,
												staticClass: 'table-item'
											},
											[
												e(
													'div',
													{ staticClass: 'title' },
													[
														e(
															'el-checkbox',
															{
																attrs: {
																	value:
																		A
																			.chooseExportData[
																			g
																		]
																			.isAllChoose
																},
																on: {
																	change: function(
																		t
																	) {
																		A.checkExportAll(
																			g
																		)
																	}
																}
															},
															[
																e('span', [
																	A._v(
																		A._s(
																			t.dataValue
																		)
																	)
																])
															]
														)
													],
													1
												),
												A._v(' '),
												A._l(
													t.exportSubPartList,
													function(t, C) {
														return [
															e('p', [
																A._v(
																	A._s(
																		t.subPartHeaderStr
																	)
																)
															]),
															A._v(' '),
															e(
																'div',
																{
																	staticClass:
																		'checkbox-all'
																},
																[
																	e(
																		'el-checkbox-group',
																		{
																			on: {
																				change: function(
																					t
																				) {
																					A.checkGroupNum(
																						g
																					)
																				}
																			},
																			model: {
																				value:
																					A
																						.chooseExportData[
																						g
																					]
																						.exportCodeList[
																						C
																					],
																				callback: function(
																					t
																				) {
																					A.$set(
																						A
																							.chooseExportData[
																							g
																						]
																							.exportCodeList,
																						C,
																						t
																					)
																				},
																				expression:
																					'chooseExportData[index].exportCodeList[i]'
																			}
																		},
																		A._l(
																			t.exportCodeList,
																			function(
																				t
																			) {
																				return e(
																					'el-checkbox',
																					{
																						key:
																							t.dataKey,
																						staticClass:
																							'export-label',
																						attrs: {
																							label:
																								t.dataKey
																						}
																					},
																					[
																						A._v(
																							'\n                            ' +
																								A._s(
																									t.dataValue
																								) +
																								'\n                        '
																						)
																					]
																				)
																			}
																		),
																		1
																	)
																],
																1
															)
														]
													}
												)
											],
											2
										)
									}),
									0
							  )
							: A._e(),
						A._v(' '),
						e(
							'span',
							{ attrs: { slot: 'footer' }, slot: 'footer' },
							[
								e(
									'el-button',
									{
										attrs: { size: 'medium' },
										on: { click: A.closeBtn }
									},
									[A._v('取消')]
								),
								A._v(' '),
								e(
									'el-button',
									{
										attrs: {
											size: 'medium',
											type: 'primary'
										},
										on: { click: A.confirmBtn }
									},
									[A._v('确定')]
								)
							],
							1
						)
					]
				)
			}
			g._withStripped = !0
			var C = {
					name: 'ExportReport',
					props: {
						title: { type: String, default: '导出报表' },
						width: { type: String, default: '679px' },
						visible: { type: Boolean, default: !1 },
						confirm: {
							type: Function,
							default: function() {
								return ''
							}
						},
						exportData: {
							type: Array,
							default: function() {
								return []
							}
						},
						close: {
							type: Function,
							default: function() {
								return ''
							}
						},
						tips: { type: String, default: '' }
					},
					watch: {
						exportData: function() {
							var A = this
							this.exportData.forEach(function(t) {
								var e = {
									dataKey: t.dataKey,
									isAllChoose: !1,
									exportCodeList: []
								}
								t.exportSubPartList &&
									t.exportSubPartList.forEach(function(A, t) {
										e.exportCodeList[t] = []
									}),
									A.chooseExportData.push(e)
							})
						}
					},
					data: function() {
						return { chooseExportData: [] }
					},
					methods: {
						closeBtn: function() {
							this.close()
						},
						confirmBtn: function() {
							var A = this
							if (
								this.chooseExportData.find(function(A) {
									return 1 == A.isAllChoose
								})
							) {
								var t = []
								this.chooseExportData.forEach(function(e, g) {
									if (e.isAllChoose) {
										var C = { codeKeyList: [] },
											n =
												(A.exportData[g]
													.exportSubPartList &&
													A.exportData[g]
														.exportSubPartList
														.length) ||
												0
										C.headerCodeKey = e.dataKey
										var I =
											A.exportData[g].exportSubPartList
										0 == n && (C.codeKeyList = null),
											e.exportCodeList.forEach(function(
												A,
												t
											) {
												switch (I[t].subPartHeaderStr) {
													case '科目':
														C.subjectKeyList = A
														break
													case '班级':
														var e =
															I[t].exportCodeList
														;(C.classKeyList = []),
															A.forEach(function(
																A
															) {
																var t = e.find(
																	function(
																		t
																	) {
																		return (
																			t.dataKey ==
																			A
																		)
																	}
																)
																C.classKeyList.push(
																	t
																)
															})
														break
													default:
														C.codeKeyList = C.codeKeyList.concat(
															A
														)
												}
											}),
											t.push(C)
									}
								}),
									this.confirm(t)
							} else this.$message.info('请选择要导出的信息')
						},
						checkExportAll: function(A) {
							var t = this.exportData[A].exportSubPartList,
								e = this.chooseExportData[A]
							if (
								((e.isAllChoose = !e.isAllChoose),
								t && t.length)
							)
								if (e.isAllChoose)
									t.forEach(function(A, t) {
										A.exportCodeList.forEach(function(A) {
											e.exportCodeList[t].push(A.dataKey)
										})
									})
								else {
									var g = []
									e.exportCodeList.forEach(function(A, t) {
										g[t] = []
									}),
										this.$set(
											this.chooseExportData[A],
											'exportCodeList',
											g
										)
								}
						},
						checkGroupNum: function(A) {
							var t = this.chooseExportData[A],
								e = t.exportCodeList.find(function(A) {
									return A.length > 0
								})
							t.isAllChoose = !!e
						}
					}
				},
				n = (e(180), e(0)),
				I = Object(n.a)(C, g, [], !1, null, 'f69e01bc', null)
			I.options.__file = 'src/package/exportReport/src/index.vue'
			var r = I.exports
			t.default = {
				install: function(A) {
					A.component(r.name, r)
				}
			}
		},
		function(A, t, e) {
			'use strict'
			e.r(t)
			var g = function() {
				var A = this.$createElement
				return (this._self._c || A)('div')
			}
			g._withStripped = !0
			var C = {
					name: 'ElementUIDemo',
					mounted: function() {
						this.$message('xxx')
					}
				},
				n = e(0),
				I = Object(n.a)(C, g, [], !1, null, 'd337a44e', null)
			I.options.__file = 'src/package/elementUIDemo/src/index.vue'
			var r = I.exports
			t.default = {
				install: function(A) {
					A.component(r.name, r)
				}
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(122)(!0)
			e(94)(
				String,
				'String',
				function(A) {
					;(this._t = String(A)), (this._i = 0)
				},
				function() {
					var A,
						t = this._t,
						e = this._i
					return e >= t.length
						? { value: void 0, done: !0 }
						: ((A = g(t, e)),
						  (this._i += A.length),
						  { value: A, done: !1 })
				}
			)
		},
		function(A, t, e) {
			'use strict'
			var g = e(23),
				C = e(15),
				n = e(80),
				I = e(16),
				r = e(42),
				o = e(123),
				i = e(44),
				s = e(82),
				a = e(8)('iterator'),
				c = !([].keys && 'next' in [].keys()),
				l = function() {
					return this
				}
			A.exports = function(A, t, e, u, p, h, B) {
				o(e, t, u)
				var d,
					f,
					w,
					Q = function(A) {
						if (!c && A in v) return v[A]
						switch (A) {
							case 'keys':
							case 'values':
								return function() {
									return new e(this, A)
								}
						}
						return function() {
							return new e(this, A)
						}
					},
					m = t + ' Iterator',
					U = 'values' == p,
					E = !1,
					v = A.prototype,
					b = v[a] || v['@@iterator'] || (p && v[p]),
					F = b || Q(p),
					x = p ? (U ? Q('entries') : F) : void 0,
					H = ('Array' == t && v.entries) || b
				if (
					(H &&
						(w = s(H.call(new A()))) !== Object.prototype &&
						w.next &&
						(i(w, m, !0),
						g || 'function' == typeof w[a] || I(w, a, l)),
					U &&
						b &&
						'values' !== b.name &&
						((E = !0),
						(F = function() {
							return b.call(this)
						})),
					(g && !B) || (!c && !E && v[a]) || I(v, a, F),
					(r[t] = F),
					(r[m] = l),
					p)
				)
					if (
						((d = {
							values: U ? F : Q('values'),
							keys: h ? F : Q('keys'),
							entries: x
						}),
						B)
					)
						for (f in d) f in v || n(v, f, d[f])
					else C(C.P + C.F * (c || E), t, d)
				return d
			}
		},
		function(A, t, e) {
			var g = e(7),
				C = e(11),
				n = e(28)
			A.exports = e(6)
				? Object.defineProperties
				: function(A, t) {
						C(A)
						for (var e, I = n(t), r = I.length, o = 0; r > o; )
							g.f(A, (e = I[o++]), t[e])
						return A
				  }
		},
		function(A, t, e) {
			var g = e(11)
			A.exports = function(A, t, e, C) {
				try {
					return C ? t(g(e)[0], e[1]) : t(e)
				} catch (t) {
					var n = A.return
					throw (void 0 !== n && g(n.call(A)), t)
				}
			}
		},
		function(A, t, e) {
			var g = e(42),
				C = e(8)('iterator'),
				n = Array.prototype
			A.exports = function(A) {
				return void 0 !== A && (g.Array === A || n[C] === A)
			}
		},
		function(A, t, e) {
			var g = e(99),
				C = e(8)('iterator'),
				n = e(42)
			A.exports = e(4).getIteratorMethod = function(A) {
				if (null != A) return A[C] || A['@@iterator'] || n[g(A)]
			}
		},
		function(A, t, e) {
			var g = e(22),
				C = e(8)('toStringTag'),
				n =
					'Arguments' ==
					g(
						(function() {
							return arguments
						})()
					)
			A.exports = function(A) {
				var t, e, I
				return void 0 === A
					? 'Undefined'
					: null === A
					? 'Null'
					: 'string' ==
					  typeof (e = (function(A, t) {
							try {
								return A[t]
							} catch (A) {}
					  })((t = Object(A)), C))
					? e
					: n
					? g(t)
					: 'Object' == (I = g(t)) && 'function' == typeof t.callee
					? 'Arguments'
					: I
			}
		},
		function(A, t, e) {
			var g = e(8)('iterator'),
				C = !1
			try {
				var n = [7][g]()
				;(n.return = function() {
					C = !0
				}),
					Array.from(n, function() {
						throw 2
					})
			} catch (A) {}
			A.exports = function(A, t) {
				if (!t && !C) return !1
				var e = !1
				try {
					var n = [7],
						I = n[g]()
					;(I.next = function() {
						return { done: (e = !0) }
					}),
						(n[g] = function() {
							return I
						}),
						A(n)
				} catch (A) {}
				return e
			}
		},
		function(A, t) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtElEQVQ4T6WT0RECIQxENxV4fSU9qBWoHVwJ2sFdD6Sv6yBOdHC4g/Ah/DEkL8uyEAYXDfbjB1DV2cxOIvLoQVX1CWBj5tnrSoAf3AAszHxtQVJKCxGdAbyY+b4D+KYoqCD5zMxWEbnkAZUHLUjUXCnI1BJiZuSyj5NDBQ0IouZQwcEP34bGNnNQ3vkz5et8ExKaWMruvc4O0HM7glRB6hnWDZJHGcCUExbFOYzyv59q+De+AT+OghGassTjAAAAAElFTkSuQmCC'
		},
		function(A, t, e) {
			var g = e(11),
				C = e(27),
				n = e(8)('species')
			A.exports = function(A, t) {
				var e,
					I = g(A).constructor
				return void 0 === I || null == (e = g(I)[n]) ? t : C(e)
			}
		},
		function(A, t, e) {
			var g,
				C,
				n,
				I = e(20),
				r = e(171),
				o = e(71),
				i = e(30),
				s = e(1),
				a = s.process,
				c = s.setImmediate,
				l = s.clearImmediate,
				u = s.MessageChannel,
				p = s.Dispatch,
				h = 0,
				B = {},
				d = function() {
					var A = +this
					if (B.hasOwnProperty(A)) {
						var t = B[A]
						delete B[A], t()
					}
				},
				f = function(A) {
					d.call(A.data)
				}
			;(c && l) ||
				((c = function(A) {
					for (var t = [], e = 1; arguments.length > e; )
						t.push(arguments[e++])
					return (
						(B[++h] = function() {
							r('function' == typeof A ? A : Function(A), t)
						}),
						g(h),
						h
					)
				}),
				(l = function(A) {
					delete B[A]
				}),
				'process' == e(22)(a)
					? (g = function(A) {
							a.nextTick(I(d, A, 1))
					  })
					: p && p.now
					? (g = function(A) {
							p.now(I(d, A, 1))
					  })
					: u
					? ((n = (C = new u()).port2),
					  (C.port1.onmessage = f),
					  (g = I(n.postMessage, n, 1)))
					: s.addEventListener &&
					  'function' == typeof postMessage &&
					  !s.importScripts
					? ((g = function(A) {
							s.postMessage(A + '', '*')
					  }),
					  s.addEventListener('message', f, !1))
					: (g =
							'onreadystatechange' in i('script')
								? function(A) {
										o.appendChild(
											i('script')
										).onreadystatechange = function() {
											o.removeChild(this), d.call(A)
										}
								  }
								: function(A) {
										setTimeout(I(d, A, 1), 0)
								  })),
				(A.exports = { set: c, clear: l })
		},
		function(A, t) {
			A.exports = function(A) {
				try {
					return { e: !1, v: A() }
				} catch (A) {
					return { e: !0, v: A }
				}
			}
		},
		function(A, t, e) {
			var g = e(11),
				C = e(9),
				n = e(72)
			A.exports = function(A, t) {
				if ((g(A), C(t) && t.constructor === A)) return t
				var e = n.f(A)
				return (0, e.resolve)(t), e.promise
			}
		},
		function(A, t, e) {
			'use strict'
			A.exports = function(A, t) {
				return function() {
					for (
						var e = new Array(arguments.length), g = 0;
						g < e.length;
						g++
					)
						e[g] = arguments[g]
					return A.apply(t, e)
				}
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(12),
				C = e(192),
				n = e(194),
				I = e(195),
				r = e(196),
				o = e(108)
			A.exports = function(A) {
				return new Promise(function(t, i) {
					var s = A.data,
						a = A.headers
					g.isFormData(s) && delete a['Content-Type']
					var c = new XMLHttpRequest()
					if (A.auth) {
						var l = A.auth.username || '',
							u = A.auth.password || ''
						a.Authorization = 'Basic ' + btoa(l + ':' + u)
					}
					if (
						(c.open(
							A.method.toUpperCase(),
							n(A.url, A.params, A.paramsSerializer),
							!0
						),
						(c.timeout = A.timeout),
						(c.onreadystatechange = function() {
							if (
								c &&
								4 === c.readyState &&
								(0 !== c.status ||
									(c.responseURL &&
										0 === c.responseURL.indexOf('file:')))
							) {
								var e =
										'getAllResponseHeaders' in c
											? I(c.getAllResponseHeaders())
											: null,
									g = {
										data:
											A.responseType &&
											'text' !== A.responseType
												? c.response
												: c.responseText,
										status: c.status,
										statusText: c.statusText,
										headers: e,
										config: A,
										request: c
									}
								C(t, i, g), (c = null)
							}
						}),
						(c.onerror = function() {
							i(o('Network Error', A, null, c)), (c = null)
						}),
						(c.ontimeout = function() {
							i(
								o(
									'timeout of ' + A.timeout + 'ms exceeded',
									A,
									'ECONNABORTED',
									c
								)
							),
								(c = null)
						}),
						g.isStandardBrowserEnv())
					) {
						var p = e(197),
							h =
								(A.withCredentials || r(A.url)) &&
								A.xsrfCookieName
									? p.read(A.xsrfCookieName)
									: void 0
						h && (a[A.xsrfHeaderName] = h)
					}
					if (
						('setRequestHeader' in c &&
							g.forEach(a, function(A, t) {
								void 0 === s &&
								'content-type' === t.toLowerCase()
									? delete a[t]
									: c.setRequestHeader(t, A)
							}),
						A.withCredentials && (c.withCredentials = !0),
						A.responseType)
					)
						try {
							c.responseType = A.responseType
						} catch (t) {
							if ('json' !== A.responseType) throw t
						}
					'function' == typeof A.onDownloadProgress &&
						c.addEventListener('progress', A.onDownloadProgress),
						'function' == typeof A.onUploadProgress &&
							c.upload &&
							c.upload.addEventListener(
								'progress',
								A.onUploadProgress
							),
						A.cancelToken &&
							A.cancelToken.promise.then(function(A) {
								c && (c.abort(), i(A), (c = null))
							}),
						void 0 === s && (s = null),
						c.send(s)
				})
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(193)
			A.exports = function(A, t, e, C, n) {
				var I = new Error(A)
				return g(I, t, e, C, n)
			}
		},
		function(A, t, e) {
			'use strict'
			A.exports = function(A) {
				return !(!A || !A.__CANCEL__)
			}
		},
		function(A, t, e) {
			'use strict'
			function g(A) {
				this.message = A
			}
			;(g.prototype.toString = function() {
				return 'Cancel' + (this.message ? ': ' + this.message : '')
			}),
				(g.prototype.__CANCEL__ = !0),
				(A.exports = g)
		},
		function(A, t, e) {
			var g = e(41),
				C = e(32).concat('length', 'prototype')
			t.f =
				Object.getOwnPropertyNames ||
				function(A) {
					return g(A, C)
				}
		},
		function(A, t, e) {
			var g
			A.exports = (function() {
				function A(A) {
					;(this.mode = e.MODE_8BIT_BYTE),
						(this.data = A),
						(this.parsedData = [])
					for (var t = 0, g = this.data.length; t < g; t++) {
						var C = [],
							n = this.data.charCodeAt(t)
						n > 65536
							? ((C[0] = 240 | ((1835008 & n) >>> 18)),
							  (C[1] = 128 | ((258048 & n) >>> 12)),
							  (C[2] = 128 | ((4032 & n) >>> 6)),
							  (C[3] = 128 | (63 & n)))
							: n > 2048
							? ((C[0] = 224 | ((61440 & n) >>> 12)),
							  (C[1] = 128 | ((4032 & n) >>> 6)),
							  (C[2] = 128 | (63 & n)))
							: n > 128
							? ((C[0] = 192 | ((1984 & n) >>> 6)),
							  (C[1] = 128 | (63 & n)))
							: (C[0] = n),
							this.parsedData.push(C)
					}
					;(this.parsedData = Array.prototype.concat.apply(
						[],
						this.parsedData
					)),
						this.parsedData.length != this.data.length &&
							(this.parsedData.unshift(191),
							this.parsedData.unshift(187),
							this.parsedData.unshift(239))
				}
				function t(A, t) {
					;(this.typeNumber = A),
						(this.errorCorrectLevel = t),
						(this.modules = null),
						(this.moduleCount = 0),
						(this.dataCache = null),
						(this.dataList = [])
				}
				;(A.prototype = {
					getLength: function(A) {
						return this.parsedData.length
					},
					write: function(A) {
						for (var t = 0, e = this.parsedData.length; t < e; t++)
							A.put(this.parsedData[t], 8)
					}
				}),
					(t.prototype = {
						addData: function(t) {
							var e = new A(t)
							this.dataList.push(e), (this.dataCache = null)
						},
						isDark: function(A, t) {
							if (
								A < 0 ||
								this.moduleCount <= A ||
								t < 0 ||
								this.moduleCount <= t
							)
								throw new Error(A + ',' + t)
							return this.modules[A][t]
						},
						getModuleCount: function() {
							return this.moduleCount
						},
						make: function() {
							this.makeImpl(!1, this.getBestMaskPattern())
						},
						makeImpl: function(A, e) {
							;(this.moduleCount = 4 * this.typeNumber + 17),
								(this.modules = new Array(this.moduleCount))
							for (var g = 0; g < this.moduleCount; g++) {
								this.modules[g] = new Array(this.moduleCount)
								for (var C = 0; C < this.moduleCount; C++)
									this.modules[g][C] = null
							}
							this.setupPositionProbePattern(0, 0),
								this.setupPositionProbePattern(
									this.moduleCount - 7,
									0
								),
								this.setupPositionProbePattern(
									0,
									this.moduleCount - 7
								),
								this.setupPositionAdjustPattern(),
								this.setupTimingPattern(),
								this.setupTypeInfo(A, e),
								this.typeNumber >= 7 && this.setupTypeNumber(A),
								null == this.dataCache &&
									(this.dataCache = t.createData(
										this.typeNumber,
										this.errorCorrectLevel,
										this.dataList
									)),
								this.mapData(this.dataCache, e)
						},
						setupPositionProbePattern: function(A, t) {
							for (var e = -1; e <= 7; e++)
								if (!(A + e <= -1 || this.moduleCount <= A + e))
									for (var g = -1; g <= 7; g++)
										t + g <= -1 ||
											this.moduleCount <= t + g ||
											(this.modules[A + e][t + g] =
												(0 <= e &&
													e <= 6 &&
													(0 == g || 6 == g)) ||
												(0 <= g &&
													g <= 6 &&
													(0 == e || 6 == e)) ||
												(2 <= e &&
													e <= 4 &&
													2 <= g &&
													g <= 4))
						},
						getBestMaskPattern: function() {
							for (var A = 0, t = 0, e = 0; e < 8; e++) {
								this.makeImpl(!0, e)
								var g = I.getLostPoint(this)
								;(0 == e || A > g) && ((A = g), (t = e))
							}
							return t
						},
						createMovieClip: function(A, t, e) {
							var g = A.createEmptyMovieClip(t, e)
							this.make()
							for (var C = 0; C < this.modules.length; C++)
								for (
									var n = 1 * C, I = 0;
									I < this.modules[C].length;
									I++
								) {
									var r = 1 * I,
										o = this.modules[C][I]
									o &&
										(g.beginFill(0, 100),
										g.moveTo(r, n),
										g.lineTo(r + 1, n),
										g.lineTo(r + 1, n + 1),
										g.lineTo(r, n + 1),
										g.endFill())
								}
							return g
						},
						setupTimingPattern: function() {
							for (var A = 8; A < this.moduleCount - 8; A++)
								null == this.modules[A][6] &&
									(this.modules[A][6] = A % 2 == 0)
							for (var t = 8; t < this.moduleCount - 8; t++)
								null == this.modules[6][t] &&
									(this.modules[6][t] = t % 2 == 0)
						},
						setupPositionAdjustPattern: function() {
							for (
								var A = I.getPatternPosition(this.typeNumber),
									t = 0;
								t < A.length;
								t++
							)
								for (var e = 0; e < A.length; e++) {
									var g = A[t],
										C = A[e]
									if (null == this.modules[g][C])
										for (var n = -2; n <= 2; n++)
											for (var r = -2; r <= 2; r++)
												this.modules[g + n][C + r] =
													-2 == n ||
													2 == n ||
													-2 == r ||
													2 == r ||
													(0 == n && 0 == r)
								}
						},
						setupTypeNumber: function(A) {
							for (
								var t = I.getBCHTypeNumber(this.typeNumber),
									e = 0;
								e < 18;
								e++
							) {
								var g = !A && 1 == ((t >> e) & 1)
								this.modules[Math.floor(e / 3)][
									(e % 3) + this.moduleCount - 8 - 3
								] = g
							}
							for (var e = 0; e < 18; e++) {
								var g = !A && 1 == ((t >> e) & 1)
								this.modules[
									(e % 3) + this.moduleCount - 8 - 3
								][Math.floor(e / 3)] = g
							}
						},
						setupTypeInfo: function(A, t) {
							for (
								var e = (this.errorCorrectLevel << 3) | t,
									g = I.getBCHTypeInfo(e),
									C = 0;
								C < 15;
								C++
							) {
								var n = !A && 1 == ((g >> C) & 1)
								C < 6
									? (this.modules[C][8] = n)
									: C < 8
									? (this.modules[C + 1][8] = n)
									: (this.modules[
											this.moduleCount - 15 + C
									  ][8] = n)
							}
							for (var C = 0; C < 15; C++) {
								var n = !A && 1 == ((g >> C) & 1)
								C < 8
									? (this.modules[8][
											this.moduleCount - C - 1
									  ] = n)
									: C < 9
									? (this.modules[8][15 - C - 1 + 1] = n)
									: (this.modules[8][15 - C - 1] = n)
							}
							this.modules[this.moduleCount - 8][8] = !A
						},
						mapData: function(A, t) {
							for (
								var e = -1,
									g = this.moduleCount - 1,
									C = 7,
									n = 0,
									r = this.moduleCount - 1;
								r > 0;
								r -= 2
							)
								for (6 == r && r--; ; ) {
									for (var o = 0; o < 2; o++)
										if (null == this.modules[g][r - o]) {
											var i = !1
											n < A.length &&
												(i = 1 == ((A[n] >>> C) & 1))
											var s = I.getMask(t, g, r - o)
											s && (i = !i),
												(this.modules[g][r - o] = i),
												-1 == --C && (n++, (C = 7))
										}
									if ((g += e) < 0 || this.moduleCount <= g) {
										;(g -= e), (e = -e)
										break
									}
								}
						}
					}),
					(t.PAD0 = 236),
					(t.PAD1 = 17),
					(t.createData = function(A, e, g) {
						for (
							var C = s.getRSBlocks(A, e), n = new a(), r = 0;
							r < g.length;
							r++
						) {
							var o = g[r]
							n.put(o.mode, 4),
								n.put(
									o.getLength(),
									I.getLengthInBits(o.mode, A)
								),
								o.write(n)
						}
						for (var i = 0, r = 0; r < C.length; r++)
							i += C[r].dataCount
						if (n.getLengthInBits() > 8 * i)
							throw new Error(
								'code length overflow. (' +
									n.getLengthInBits() +
									'>' +
									8 * i +
									')'
							)
						for (
							n.getLengthInBits() + 4 <= 8 * i && n.put(0, 4);
							n.getLengthInBits() % 8 != 0;

						)
							n.putBit(!1)
						for (
							;
							!(
								n.getLengthInBits() >= 8 * i ||
								(n.put(t.PAD0, 8), n.getLengthInBits() >= 8 * i)
							);

						)
							n.put(t.PAD1, 8)
						return t.createBytes(n, C)
					}),
					(t.createBytes = function(A, t) {
						for (
							var e = 0,
								g = 0,
								C = 0,
								n = new Array(t.length),
								r = new Array(t.length),
								o = 0;
							o < t.length;
							o++
						) {
							var s = t[o].dataCount,
								a = t[o].totalCount - s
							;(g = Math.max(g, s)),
								(C = Math.max(C, a)),
								(n[o] = new Array(s))
							for (var c = 0; c < n[o].length; c++)
								n[o][c] = 255 & A.buffer[c + e]
							e += s
							var l = I.getErrorCorrectPolynomial(a),
								u = new i(n[o], l.getLength() - 1),
								p = u.mod(l)
							r[o] = new Array(l.getLength() - 1)
							for (var c = 0; c < r[o].length; c++) {
								var h = c + p.getLength() - r[o].length
								r[o][c] = h >= 0 ? p.get(h) : 0
							}
						}
						for (var B = 0, c = 0; c < t.length; c++)
							B += t[c].totalCount
						for (var d = new Array(B), f = 0, c = 0; c < g; c++)
							for (var o = 0; o < t.length; o++)
								c < n[o].length && (d[f++] = n[o][c])
						for (var c = 0; c < C; c++)
							for (var o = 0; o < t.length; o++)
								c < r[o].length && (d[f++] = r[o][c])
						return d
					})
				for (
					var e = {
							MODE_NUMBER: 1,
							MODE_ALPHA_NUM: 2,
							MODE_8BIT_BYTE: 4,
							MODE_KANJI: 8
						},
						C = { L: 1, M: 0, Q: 3, H: 2 },
						n = {
							PATTERN000: 0,
							PATTERN001: 1,
							PATTERN010: 2,
							PATTERN011: 3,
							PATTERN100: 4,
							PATTERN101: 5,
							PATTERN110: 6,
							PATTERN111: 7
						},
						I = {
							PATTERN_POSITION_TABLE: [
								[],
								[6, 18],
								[6, 22],
								[6, 26],
								[6, 30],
								[6, 34],
								[6, 22, 38],
								[6, 24, 42],
								[6, 26, 46],
								[6, 28, 50],
								[6, 30, 54],
								[6, 32, 58],
								[6, 34, 62],
								[6, 26, 46, 66],
								[6, 26, 48, 70],
								[6, 26, 50, 74],
								[6, 30, 54, 78],
								[6, 30, 56, 82],
								[6, 30, 58, 86],
								[6, 34, 62, 90],
								[6, 28, 50, 72, 94],
								[6, 26, 50, 74, 98],
								[6, 30, 54, 78, 102],
								[6, 28, 54, 80, 106],
								[6, 32, 58, 84, 110],
								[6, 30, 58, 86, 114],
								[6, 34, 62, 90, 118],
								[6, 26, 50, 74, 98, 122],
								[6, 30, 54, 78, 102, 126],
								[6, 26, 52, 78, 104, 130],
								[6, 30, 56, 82, 108, 134],
								[6, 34, 60, 86, 112, 138],
								[6, 30, 58, 86, 114, 142],
								[6, 34, 62, 90, 118, 146],
								[6, 30, 54, 78, 102, 126, 150],
								[6, 24, 50, 76, 102, 128, 154],
								[6, 28, 54, 80, 106, 132, 158],
								[6, 32, 58, 84, 110, 136, 162],
								[6, 26, 54, 82, 110, 138, 166],
								[6, 30, 58, 86, 114, 142, 170]
							],
							G15: 1335,
							G18: 7973,
							G15_MASK: 21522,
							getBCHTypeInfo: function(A) {
								for (
									var t = A << 10;
									I.getBCHDigit(t) - I.getBCHDigit(I.G15) >=
									0;

								)
									t ^=
										I.G15 <<
										(I.getBCHDigit(t) -
											I.getBCHDigit(I.G15))
								return ((A << 10) | t) ^ I.G15_MASK
							},
							getBCHTypeNumber: function(A) {
								for (
									var t = A << 12;
									I.getBCHDigit(t) - I.getBCHDigit(I.G18) >=
									0;

								)
									t ^=
										I.G18 <<
										(I.getBCHDigit(t) -
											I.getBCHDigit(I.G18))
								return (A << 12) | t
							},
							getBCHDigit: function(A) {
								for (var t = 0; 0 != A; ) t++, (A >>>= 1)
								return t
							},
							getPatternPosition: function(A) {
								return I.PATTERN_POSITION_TABLE[A - 1]
							},
							getMask: function(A, t, e) {
								switch (A) {
									case n.PATTERN000:
										return (t + e) % 2 == 0
									case n.PATTERN001:
										return t % 2 == 0
									case n.PATTERN010:
										return e % 3 == 0
									case n.PATTERN011:
										return (t + e) % 3 == 0
									case n.PATTERN100:
										return (
											(Math.floor(t / 2) +
												Math.floor(e / 3)) %
												2 ==
											0
										)
									case n.PATTERN101:
										return (
											((t * e) % 2) + ((t * e) % 3) == 0
										)
									case n.PATTERN110:
										return (
											(((t * e) % 2) + ((t * e) % 3)) %
												2 ==
											0
										)
									case n.PATTERN111:
										return (
											(((t * e) % 3) + ((t + e) % 2)) %
												2 ==
											0
										)
									default:
										throw new Error('bad maskPattern:' + A)
								}
							},
							getErrorCorrectPolynomial: function(A) {
								for (var t = new i([1], 0), e = 0; e < A; e++)
									t = t.multiply(new i([1, r.gexp(e)], 0))
								return t
							},
							getLengthInBits: function(A, t) {
								if (1 <= t && t < 10)
									switch (A) {
										case e.MODE_NUMBER:
											return 10
										case e.MODE_ALPHA_NUM:
											return 9
										case e.MODE_8BIT_BYTE:
										case e.MODE_KANJI:
											return 8
										default:
											throw new Error('mode:' + A)
									}
								else if (t < 27)
									switch (A) {
										case e.MODE_NUMBER:
											return 12
										case e.MODE_ALPHA_NUM:
											return 11
										case e.MODE_8BIT_BYTE:
											return 16
										case e.MODE_KANJI:
											return 10
										default:
											throw new Error('mode:' + A)
									}
								else {
									if (!(t < 41)) throw new Error('type:' + t)
									switch (A) {
										case e.MODE_NUMBER:
											return 14
										case e.MODE_ALPHA_NUM:
											return 13
										case e.MODE_8BIT_BYTE:
											return 16
										case e.MODE_KANJI:
											return 12
										default:
											throw new Error('mode:' + A)
									}
								}
							},
							getLostPoint: function(A) {
								for (
									var t = A.getModuleCount(), e = 0, g = 0;
									g < t;
									g++
								)
									for (var C = 0; C < t; C++) {
										for (
											var n = 0,
												I = A.isDark(g, C),
												r = -1;
											r <= 1;
											r++
										)
											if (!(g + r < 0 || t <= g + r))
												for (var o = -1; o <= 1; o++)
													C + o < 0 ||
														t <= C + o ||
														(0 == r && 0 == o) ||
														(I ==
															A.isDark(
																g + r,
																C + o
															) &&
															n++)
										n > 5 && (e += 3 + n - 5)
									}
								for (var g = 0; g < t - 1; g++)
									for (var C = 0; C < t - 1; C++) {
										var i = 0
										A.isDark(g, C) && i++,
											A.isDark(g + 1, C) && i++,
											A.isDark(g, C + 1) && i++,
											A.isDark(g + 1, C + 1) && i++,
											(0 != i && 4 != i) || (e += 3)
									}
								for (var g = 0; g < t; g++)
									for (var C = 0; C < t - 6; C++)
										A.isDark(g, C) &&
											!A.isDark(g, C + 1) &&
											A.isDark(g, C + 2) &&
											A.isDark(g, C + 3) &&
											A.isDark(g, C + 4) &&
											!A.isDark(g, C + 5) &&
											A.isDark(g, C + 6) &&
											(e += 40)
								for (var C = 0; C < t; C++)
									for (var g = 0; g < t - 6; g++)
										A.isDark(g, C) &&
											!A.isDark(g + 1, C) &&
											A.isDark(g + 2, C) &&
											A.isDark(g + 3, C) &&
											A.isDark(g + 4, C) &&
											!A.isDark(g + 5, C) &&
											A.isDark(g + 6, C) &&
											(e += 40)
								for (var s = 0, C = 0; C < t; C++)
									for (var g = 0; g < t; g++)
										A.isDark(g, C) && s++
								var a = Math.abs((100 * s) / t / t - 50) / 5
								return (e += 10 * a)
							}
						},
						r = {
							glog: function(A) {
								if (A < 1) throw new Error('glog(' + A + ')')
								return r.LOG_TABLE[A]
							},
							gexp: function(A) {
								for (; A < 0; ) A += 255
								for (; A >= 256; ) A -= 255
								return r.EXP_TABLE[A]
							},
							EXP_TABLE: new Array(256),
							LOG_TABLE: new Array(256)
						},
						o = 0;
					o < 8;
					o++
				)
					r.EXP_TABLE[o] = 1 << o
				for (var o = 8; o < 256; o++)
					r.EXP_TABLE[o] =
						r.EXP_TABLE[o - 4] ^
						r.EXP_TABLE[o - 5] ^
						r.EXP_TABLE[o - 6] ^
						r.EXP_TABLE[o - 8]
				for (var o = 0; o < 255; o++) r.LOG_TABLE[r.EXP_TABLE[o]] = o
				function i(A, t) {
					if (null == A.length) throw new Error(A.length + '/' + t)
					for (var e = 0; e < A.length && 0 == A[e]; ) e++
					this.num = new Array(A.length - e + t)
					for (var g = 0; g < A.length - e; g++)
						this.num[g] = A[g + e]
				}
				function s(A, t) {
					;(this.totalCount = A), (this.dataCount = t)
				}
				function a() {
					;(this.buffer = []), (this.length = 0)
				}
				;(i.prototype = {
					get: function(A) {
						return this.num[A]
					},
					getLength: function() {
						return this.num.length
					},
					multiply: function(A) {
						for (
							var t = new Array(
									this.getLength() + A.getLength() - 1
								),
								e = 0;
							e < this.getLength();
							e++
						)
							for (var g = 0; g < A.getLength(); g++)
								t[e + g] ^= r.gexp(
									r.glog(this.get(e)) + r.glog(A.get(g))
								)
						return new i(t, 0)
					},
					mod: function(A) {
						if (this.getLength() - A.getLength() < 0) return this
						for (
							var t = r.glog(this.get(0)) - r.glog(A.get(0)),
								e = new Array(this.getLength()),
								g = 0;
							g < this.getLength();
							g++
						)
							e[g] = this.get(g)
						for (var g = 0; g < A.getLength(); g++)
							e[g] ^= r.gexp(r.glog(A.get(g)) + t)
						return new i(e, 0).mod(A)
					}
				}),
					(s.RS_BLOCK_TABLE = [
						[1, 26, 19],
						[1, 26, 16],
						[1, 26, 13],
						[1, 26, 9],
						[1, 44, 34],
						[1, 44, 28],
						[1, 44, 22],
						[1, 44, 16],
						[1, 70, 55],
						[1, 70, 44],
						[2, 35, 17],
						[2, 35, 13],
						[1, 100, 80],
						[2, 50, 32],
						[2, 50, 24],
						[4, 25, 9],
						[1, 134, 108],
						[2, 67, 43],
						[2, 33, 15, 2, 34, 16],
						[2, 33, 11, 2, 34, 12],
						[2, 86, 68],
						[4, 43, 27],
						[4, 43, 19],
						[4, 43, 15],
						[2, 98, 78],
						[4, 49, 31],
						[2, 32, 14, 4, 33, 15],
						[4, 39, 13, 1, 40, 14],
						[2, 121, 97],
						[2, 60, 38, 2, 61, 39],
						[4, 40, 18, 2, 41, 19],
						[4, 40, 14, 2, 41, 15],
						[2, 146, 116],
						[3, 58, 36, 2, 59, 37],
						[4, 36, 16, 4, 37, 17],
						[4, 36, 12, 4, 37, 13],
						[2, 86, 68, 2, 87, 69],
						[4, 69, 43, 1, 70, 44],
						[6, 43, 19, 2, 44, 20],
						[6, 43, 15, 2, 44, 16],
						[4, 101, 81],
						[1, 80, 50, 4, 81, 51],
						[4, 50, 22, 4, 51, 23],
						[3, 36, 12, 8, 37, 13],
						[2, 116, 92, 2, 117, 93],
						[6, 58, 36, 2, 59, 37],
						[4, 46, 20, 6, 47, 21],
						[7, 42, 14, 4, 43, 15],
						[4, 133, 107],
						[8, 59, 37, 1, 60, 38],
						[8, 44, 20, 4, 45, 21],
						[12, 33, 11, 4, 34, 12],
						[3, 145, 115, 1, 146, 116],
						[4, 64, 40, 5, 65, 41],
						[11, 36, 16, 5, 37, 17],
						[11, 36, 12, 5, 37, 13],
						[5, 109, 87, 1, 110, 88],
						[5, 65, 41, 5, 66, 42],
						[5, 54, 24, 7, 55, 25],
						[11, 36, 12],
						[5, 122, 98, 1, 123, 99],
						[7, 73, 45, 3, 74, 46],
						[15, 43, 19, 2, 44, 20],
						[3, 45, 15, 13, 46, 16],
						[1, 135, 107, 5, 136, 108],
						[10, 74, 46, 1, 75, 47],
						[1, 50, 22, 15, 51, 23],
						[2, 42, 14, 17, 43, 15],
						[5, 150, 120, 1, 151, 121],
						[9, 69, 43, 4, 70, 44],
						[17, 50, 22, 1, 51, 23],
						[2, 42, 14, 19, 43, 15],
						[3, 141, 113, 4, 142, 114],
						[3, 70, 44, 11, 71, 45],
						[17, 47, 21, 4, 48, 22],
						[9, 39, 13, 16, 40, 14],
						[3, 135, 107, 5, 136, 108],
						[3, 67, 41, 13, 68, 42],
						[15, 54, 24, 5, 55, 25],
						[15, 43, 15, 10, 44, 16],
						[4, 144, 116, 4, 145, 117],
						[17, 68, 42],
						[17, 50, 22, 6, 51, 23],
						[19, 46, 16, 6, 47, 17],
						[2, 139, 111, 7, 140, 112],
						[17, 74, 46],
						[7, 54, 24, 16, 55, 25],
						[34, 37, 13],
						[4, 151, 121, 5, 152, 122],
						[4, 75, 47, 14, 76, 48],
						[11, 54, 24, 14, 55, 25],
						[16, 45, 15, 14, 46, 16],
						[6, 147, 117, 4, 148, 118],
						[6, 73, 45, 14, 74, 46],
						[11, 54, 24, 16, 55, 25],
						[30, 46, 16, 2, 47, 17],
						[8, 132, 106, 4, 133, 107],
						[8, 75, 47, 13, 76, 48],
						[7, 54, 24, 22, 55, 25],
						[22, 45, 15, 13, 46, 16],
						[10, 142, 114, 2, 143, 115],
						[19, 74, 46, 4, 75, 47],
						[28, 50, 22, 6, 51, 23],
						[33, 46, 16, 4, 47, 17],
						[8, 152, 122, 4, 153, 123],
						[22, 73, 45, 3, 74, 46],
						[8, 53, 23, 26, 54, 24],
						[12, 45, 15, 28, 46, 16],
						[3, 147, 117, 10, 148, 118],
						[3, 73, 45, 23, 74, 46],
						[4, 54, 24, 31, 55, 25],
						[11, 45, 15, 31, 46, 16],
						[7, 146, 116, 7, 147, 117],
						[21, 73, 45, 7, 74, 46],
						[1, 53, 23, 37, 54, 24],
						[19, 45, 15, 26, 46, 16],
						[5, 145, 115, 10, 146, 116],
						[19, 75, 47, 10, 76, 48],
						[15, 54, 24, 25, 55, 25],
						[23, 45, 15, 25, 46, 16],
						[13, 145, 115, 3, 146, 116],
						[2, 74, 46, 29, 75, 47],
						[42, 54, 24, 1, 55, 25],
						[23, 45, 15, 28, 46, 16],
						[17, 145, 115],
						[10, 74, 46, 23, 75, 47],
						[10, 54, 24, 35, 55, 25],
						[19, 45, 15, 35, 46, 16],
						[17, 145, 115, 1, 146, 116],
						[14, 74, 46, 21, 75, 47],
						[29, 54, 24, 19, 55, 25],
						[11, 45, 15, 46, 46, 16],
						[13, 145, 115, 6, 146, 116],
						[14, 74, 46, 23, 75, 47],
						[44, 54, 24, 7, 55, 25],
						[59, 46, 16, 1, 47, 17],
						[12, 151, 121, 7, 152, 122],
						[12, 75, 47, 26, 76, 48],
						[39, 54, 24, 14, 55, 25],
						[22, 45, 15, 41, 46, 16],
						[6, 151, 121, 14, 152, 122],
						[6, 75, 47, 34, 76, 48],
						[46, 54, 24, 10, 55, 25],
						[2, 45, 15, 64, 46, 16],
						[17, 152, 122, 4, 153, 123],
						[29, 74, 46, 14, 75, 47],
						[49, 54, 24, 10, 55, 25],
						[24, 45, 15, 46, 46, 16],
						[4, 152, 122, 18, 153, 123],
						[13, 74, 46, 32, 75, 47],
						[48, 54, 24, 14, 55, 25],
						[42, 45, 15, 32, 46, 16],
						[20, 147, 117, 4, 148, 118],
						[40, 75, 47, 7, 76, 48],
						[43, 54, 24, 22, 55, 25],
						[10, 45, 15, 67, 46, 16],
						[19, 148, 118, 6, 149, 119],
						[18, 75, 47, 31, 76, 48],
						[34, 54, 24, 34, 55, 25],
						[20, 45, 15, 61, 46, 16]
					]),
					(s.getRSBlocks = function(A, t) {
						var e = s.getRsBlockTable(A, t)
						if (null == e)
							throw new Error(
								'bad rs block @ typeNumber:' +
									A +
									'/errorCorrectLevel:' +
									t
							)
						for (var g = e.length / 3, C = [], n = 0; n < g; n++)
							for (
								var I = e[3 * n + 0],
									r = e[3 * n + 1],
									o = e[3 * n + 2],
									i = 0;
								i < I;
								i++
							)
								C.push(new s(r, o))
						return C
					}),
					(s.getRsBlockTable = function(A, t) {
						switch (t) {
							case C.L:
								return s.RS_BLOCK_TABLE[4 * (A - 1) + 0]
							case C.M:
								return s.RS_BLOCK_TABLE[4 * (A - 1) + 1]
							case C.Q:
								return s.RS_BLOCK_TABLE[4 * (A - 1) + 2]
							case C.H:
								return s.RS_BLOCK_TABLE[4 * (A - 1) + 3]
							default:
								return
						}
					}),
					(a.prototype = {
						get: function(A) {
							var t = Math.floor(A / 8)
							return 1 == ((this.buffer[t] >>> (7 - (A % 8))) & 1)
						},
						put: function(A, t) {
							for (var e = 0; e < t; e++)
								this.putBit(1 == ((A >>> (t - e - 1)) & 1))
						},
						getLengthInBits: function() {
							return this.length
						},
						putBit: function(A) {
							var t = Math.floor(this.length / 8)
							this.buffer.length <= t && this.buffer.push(0),
								A &&
									(this.buffer[t] |= 128 >>> this.length % 8),
								this.length++
						}
					})
				var c = [
					[17, 14, 11, 7],
					[32, 26, 20, 14],
					[53, 42, 32, 24],
					[78, 62, 46, 34],
					[106, 84, 60, 44],
					[134, 106, 74, 58],
					[154, 122, 86, 64],
					[192, 152, 108, 84],
					[230, 180, 130, 98],
					[271, 213, 151, 119],
					[321, 251, 177, 137],
					[367, 287, 203, 155],
					[425, 331, 241, 177],
					[458, 362, 258, 194],
					[520, 412, 292, 220],
					[586, 450, 322, 250],
					[644, 504, 364, 280],
					[718, 560, 394, 310],
					[792, 624, 442, 338],
					[858, 666, 482, 382],
					[929, 711, 509, 403],
					[1003, 779, 565, 439],
					[1091, 857, 611, 461],
					[1171, 911, 661, 511],
					[1273, 997, 715, 535],
					[1367, 1059, 751, 593],
					[1465, 1125, 805, 625],
					[1528, 1190, 868, 658],
					[1628, 1264, 908, 698],
					[1732, 1370, 982, 742],
					[1840, 1452, 1030, 790],
					[1952, 1538, 1112, 842],
					[2068, 1628, 1168, 898],
					[2188, 1722, 1228, 958],
					[2303, 1809, 1283, 983],
					[2431, 1911, 1351, 1051],
					[2563, 1989, 1423, 1093],
					[2699, 2099, 1499, 1139],
					[2809, 2213, 1579, 1219],
					[2953, 2331, 1663, 1273]
				]
				function l() {
					var A = !1,
						t = navigator.userAgent
					if (/android/i.test(t)) {
						A = !0
						var e = t.toString().match(/android ([0-9]\.[0-9])/i)
						e && e[1] && (A = parseFloat(e[1]))
					}
					return A
				}
				var u = (function() {
						var A = function(A, t) {
							;(this._el = A), (this._htOption = t)
						}
						return (
							(A.prototype.draw = function(A) {
								var t = this._htOption,
									e = this._el,
									g = A.getModuleCount()
								function C(A, t) {
									var e = document.createElementNS(
										'http://www.w3.org/2000/svg',
										A
									)
									for (var g in t)
										t.hasOwnProperty(g) &&
											e.setAttribute(g, t[g])
									return e
								}
								Math.floor(t.width / g),
									Math.floor(t.height / g),
									this.clear()
								var n = C('svg', {
									viewBox:
										'0 0 ' + String(g) + ' ' + String(g),
									width: '100%',
									height: '100%',
									fill: t.colorLight
								})
								n.setAttributeNS(
									'http://www.w3.org/2000/xmlns/',
									'xmlns:xlink',
									'http://www.w3.org/1999/xlink'
								),
									e.appendChild(n),
									n.appendChild(
										C('rect', {
											fill: t.colorLight,
											width: '100%',
											height: '100%'
										})
									),
									n.appendChild(
										C('rect', {
											fill: t.colorDark,
											width: '1',
											height: '1',
											id: 'template'
										})
									)
								for (var I = 0; I < g; I++)
									for (var r = 0; r < g; r++)
										if (A.isDark(I, r)) {
											var o = C('use', {
												x: String(r),
												y: String(I)
											})
											o.setAttributeNS(
												'http://www.w3.org/1999/xlink',
												'href',
												'#template'
											),
												n.appendChild(o)
										}
							}),
							(A.prototype.clear = function() {
								for (; this._el.hasChildNodes(); )
									this._el.removeChild(this._el.lastChild)
							}),
							A
						)
					})(),
					p =
						'svg' === document.documentElement.tagName.toLowerCase()
							? u
							: 'undefined' == typeof CanvasRenderingContext2D
							? (function() {
									var A = function(A, t) {
										;(this._el = A), (this._htOption = t)
									}
									return (
										(A.prototype.draw = function(A) {
											for (
												var t = this._htOption,
													e = this._el,
													g = A.getModuleCount(),
													C = Math.floor(t.width / g),
													n = Math.floor(
														t.height / g
													),
													I = [
														'<table style="border:0;border-collapse:collapse;">'
													],
													r = 0;
												r < g;
												r++
											) {
												I.push('<tr>')
												for (var o = 0; o < g; o++)
													I.push(
														'<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' +
															C +
															'px;height:' +
															n +
															'px;background-color:' +
															(A.isDark(r, o)
																? t.colorDark
																: t.colorLight) +
															';"></td>'
													)
												I.push('</tr>')
											}
											I.push('</table>'),
												(e.innerHTML = I.join(''))
											var i = e.childNodes[0],
												s =
													(t.width - i.offsetWidth) /
													2,
												a =
													(t.height -
														i.offsetHeight) /
													2
											s > 0 &&
												a > 0 &&
												(i.style.margin =
													a + 'px ' + s + 'px')
										}),
										(A.prototype.clear = function() {
											this._el.innerHTML = ''
										}),
										A
									)
							  })()
							: (function() {
									function A() {
										;(this._elImage.src = this._elCanvas.toDataURL(
											'image/png'
										)),
											(this._elImage.style.display =
												'block'),
											(this._elCanvas.style.display =
												'none')
									}
									if (this._android && this._android <= 2.1) {
										var t = 1 / window.devicePixelRatio,
											e =
												CanvasRenderingContext2D
													.prototype.drawImage
										CanvasRenderingContext2D.prototype.drawImage = function(
											A,
											g,
											C,
											n,
											I,
											r,
											o,
											i,
											s
										) {
											if (
												'nodeName' in A &&
												/img/i.test(A.nodeName)
											)
												for (
													var a =
														arguments.length - 1;
													a >= 1;
													a--
												)
													arguments[a] =
														arguments[a] * t
											else
												void 0 === i &&
													((arguments[1] *= t),
													(arguments[2] *= t),
													(arguments[3] *= t),
													(arguments[4] *= t))
											e.apply(this, arguments)
										}
									}
									var g = function(A, t) {
										;(this._bIsPainted = !1),
											(this._android = l()),
											(this._htOption = t),
											(this._elCanvas = document.createElement(
												'canvas'
											)),
											(this._elCanvas.width = t.width),
											(this._elCanvas.height = t.height),
											A.appendChild(this._elCanvas),
											(this._el = A),
											(this._oContext = this._elCanvas.getContext(
												'2d'
											)),
											(this._bIsPainted = !1),
											(this._elImage = document.createElement(
												'img'
											)),
											(this._elImage.alt = 'Scan me!'),
											(this._elImage.style.display =
												'none'),
											this._el.appendChild(this._elImage),
											(this._bSupportDataURI = null)
									}
									return (
										(g.prototype.draw = function(A) {
											var t = this._elImage,
												e = this._oContext,
												g = this._htOption,
												C = A.getModuleCount(),
												n = g.width / C,
												I = g.height / C,
												r = Math.round(n),
												o = Math.round(I)
											;(t.style.display = 'none'),
												this.clear()
											for (var i = 0; i < C; i++)
												for (var s = 0; s < C; s++) {
													var a = A.isDark(i, s),
														c = s * n,
														l = i * I
													;(e.strokeStyle = a
														? g.colorDark
														: g.colorLight),
														(e.lineWidth = 1),
														(e.fillStyle = a
															? g.colorDark
															: g.colorLight),
														e.fillRect(c, l, n, I),
														e.strokeRect(
															Math.floor(c) + 0.5,
															Math.floor(l) + 0.5,
															r,
															o
														),
														e.strokeRect(
															Math.ceil(c) - 0.5,
															Math.ceil(l) - 0.5,
															r,
															o
														)
												}
											this._bIsPainted = !0
										}),
										(g.prototype.makeImage = function() {
											this._bIsPainted &&
												function(A, t) {
													var e = this
													if (
														((e._fFail = t),
														(e._fSuccess = A),
														null ===
															e._bSupportDataURI)
													) {
														var g = document.createElement(
																'img'
															),
															C = function() {
																;(e._bSupportDataURI = !1),
																	e._fFail &&
																		e._fFail.call(
																			e
																		)
															}
														return (
															(g.onabort = C),
															(g.onerror = C),
															(g.onload = function() {
																;(e._bSupportDataURI = !0),
																	e._fSuccess &&
																		e._fSuccess.call(
																			e
																		)
															}),
															void (g.src =
																'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==')
														)
													}
													!0 === e._bSupportDataURI &&
													e._fSuccess
														? e._fSuccess.call(e)
														: !1 ===
																e._bSupportDataURI &&
														  e._fFail &&
														  e._fFail.call(e)
												}.call(this, A)
										}),
										(g.prototype.isPainted = function() {
											return this._bIsPainted
										}),
										(g.prototype.clear = function() {
											this._oContext.clearRect(
												0,
												0,
												this._elCanvas.width,
												this._elCanvas.height
											),
												(this._bIsPainted = !1)
										}),
										(g.prototype.round = function(A) {
											return A
												? Math.floor(1e3 * A) / 1e3
												: A
										}),
										g
									)
							  })()
				return (
					((g = function(A, t) {
						if (
							((this._htOption = {
								width: 256,
								height: 256,
								typeNumber: 4,
								colorDark: '#000000',
								colorLight: '#ffffff',
								correctLevel: C.H
							}),
							'string' == typeof t && (t = { text: t }),
							t)
						)
							for (var e in t) this._htOption[e] = t[e]
						'string' == typeof A &&
							(A = document.getElementById(A)),
							this._htOption.useSVG && (p = u),
							(this._android = l()),
							(this._el = A),
							(this._oQRCode = null),
							(this._oDrawing = new p(this._el, this._htOption)),
							this._htOption.text &&
								this.makeCode(this._htOption.text)
					}).prototype.makeCode = function(A) {
						;(this._oQRCode = new t(
							(function(A, t) {
								for (
									var e = 1,
										g = (function(A) {
											var t = encodeURI(A)
												.toString()
												.replace(
													/\%[0-9a-fA-F]{2}/g,
													'a'
												)
											return (
												t.length +
												(t.length != A ? 3 : 0)
											)
										})(A),
										n = 0,
										I = c.length;
									n <= I;
									n++
								) {
									var r = 0
									switch (t) {
										case C.L:
											r = c[n][0]
											break
										case C.M:
											r = c[n][1]
											break
										case C.Q:
											r = c[n][2]
											break
										case C.H:
											r = c[n][3]
									}
									if (g <= r) break
									e++
								}
								if (e > c.length)
									throw new Error('Too long data')
								return e
							})(A, this._htOption.correctLevel),
							this._htOption.correctLevel
						)),
							this._oQRCode.addData(A),
							this._oQRCode.make(),
							(this._el.title = A),
							this._oDrawing.draw(this._oQRCode),
							this.makeImage()
					}),
					(g.prototype.makeImage = function() {
						'function' == typeof this._oDrawing.makeImage &&
							(!this._android || this._android >= 3) &&
							this._oDrawing.makeImage()
					}),
					(g.prototype.clear = function() {
						this._oDrawing.clear()
					}),
					(g.CorrectLevel = C),
					g
				)
			})()
		},
		function(A, t, e) {
			var g = e(76)
			A.exports = function(A) {
				return function() {
					var t = this,
						e = arguments
					return new g(function(C, n) {
						var I = A.apply(t, e)
						function r(A, t) {
							try {
								var e = I[A](t),
									r = e.value
							} catch (A) {
								return void n(A)
							}
							e.done ? C(r) : g.resolve(r).then(o, i)
						}
						function o(A) {
							r('next', A)
						}
						function i(A) {
							r('throw', A)
						}
						o()
					})
				}
			}
		},
		function(A, t, e) {
			/*!
			 * html2canvas 1.0.0-rc.3 <https://html2canvas.hertzen.com>
			 * Copyright (c) 2019 Niklas von Hertzen <https://hertzen.com>
			 * Released under MIT License
			 */
			A.exports = (function() {
				'use strict'
				/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */ var A = function(
					t,
					e
				) {
					return (A =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function(A, t) {
								A.__proto__ = t
							}) ||
						function(A, t) {
							for (var e in t)
								t.hasOwnProperty(e) && (A[e] = t[e])
						})(t, e)
				}
				function t(t, e) {
					function g() {
						this.constructor = t
					}
					A(t, e),
						(t.prototype =
							null === e
								? Object.create(e)
								: ((g.prototype = e.prototype), new g()))
				}
				var e = function() {
					return (e =
						Object.assign ||
						function(A) {
							for (var t, e = 1, g = arguments.length; e < g; e++)
								for (var C in (t = arguments[e]))
									Object.prototype.hasOwnProperty.call(
										t,
										C
									) && (A[C] = t[C])
							return A
						}).apply(this, arguments)
				}
				function g(A, t, e, g) {
					return new (e || (e = Promise))(function(C, n) {
						function I(A) {
							try {
								o(g.next(A))
							} catch (A) {
								n(A)
							}
						}
						function r(A) {
							try {
								o(g.throw(A))
							} catch (A) {
								n(A)
							}
						}
						function o(A) {
							A.done
								? C(A.value)
								: new e(function(t) {
										t(A.value)
								  }).then(I, r)
						}
						o((g = g.apply(A, t || [])).next())
					})
				}
				function C(A, t) {
					var e,
						g,
						C,
						n,
						I = {
							label: 0,
							sent: function() {
								if (1 & C[0]) throw C[1]
								return C[1]
							},
							trys: [],
							ops: []
						}
					return (
						(n = { next: r(0), throw: r(1), return: r(2) }),
						'function' == typeof Symbol &&
							(n[Symbol.iterator] = function() {
								return this
							}),
						n
					)
					function r(n) {
						return function(r) {
							return (function(n) {
								if (e)
									throw new TypeError(
										'Generator is already executing.'
									)
								for (; I; )
									try {
										if (
											((e = 1),
											g &&
												(C =
													2 & n[0]
														? g.return
														: n[0]
														? g.throw ||
														  ((C = g.return) &&
																C.call(g),
														  0)
														: g.next) &&
												!(C = C.call(g, n[1])).done)
										)
											return C
										switch (
											((g = 0),
											C && (n = [2 & n[0], C.value]),
											n[0])
										) {
											case 0:
											case 1:
												C = n
												break
											case 4:
												return (
													I.label++,
													{ value: n[1], done: !1 }
												)
											case 5:
												I.label++, (g = n[1]), (n = [0])
												continue
											case 7:
												;(n = I.ops.pop()), I.trys.pop()
												continue
											default:
												if (
													!(C =
														(C = I.trys).length >
															0 &&
														C[C.length - 1]) &&
													(6 === n[0] || 2 === n[0])
												) {
													I = 0
													continue
												}
												if (
													3 === n[0] &&
													(!C ||
														(n[1] > C[0] &&
															n[1] < C[3]))
												) {
													I.label = n[1]
													break
												}
												if (
													6 === n[0] &&
													I.label < C[1]
												) {
													;(I.label = C[1]), (C = n)
													break
												}
												if (C && I.label < C[2]) {
													;(I.label = C[2]),
														I.ops.push(n)
													break
												}
												C[2] && I.ops.pop(),
													I.trys.pop()
												continue
										}
										n = t.call(A, I)
									} catch (A) {
										;(n = [6, A]), (g = 0)
									} finally {
										e = C = 0
									}
								if (5 & n[0]) throw n[1]
								return { value: n[0] ? n[1] : void 0, done: !0 }
							})([n, r])
						}
					}
				}
				for (
					var n = (function() {
							function A(A, t, e, g) {
								;(this.left = A),
									(this.top = t),
									(this.width = e),
									(this.height = g)
							}
							return (
								(A.prototype.add = function(t, e, g, C) {
									return new A(
										this.left + t,
										this.top + e,
										this.width + g,
										this.height + C
									)
								}),
								(A.fromClientRect = function(t) {
									return new A(
										t.left,
										t.top,
										t.width,
										t.height
									)
								}),
								A
							)
						})(),
						I = function(A) {
							return n.fromClientRect(A.getBoundingClientRect())
						},
						r = function(A) {
							for (var t = [], e = 0, g = A.length; e < g; ) {
								var C = A.charCodeAt(e++)
								if (C >= 55296 && C <= 56319 && e < g) {
									var n = A.charCodeAt(e++)
									56320 == (64512 & n)
										? t.push(
												((1023 & C) << 10) +
													(1023 & n) +
													65536
										  )
										: (t.push(C), e--)
								} else t.push(C)
							}
							return t
						},
						o = function() {
							for (var A = [], t = 0; t < arguments.length; t++)
								A[t] = arguments[t]
							if (String.fromCodePoint)
								return String.fromCodePoint.apply(String, A)
							var e = A.length
							if (!e) return ''
							for (var g = [], C = -1, n = ''; ++C < e; ) {
								var I = A[C]
								I <= 65535
									? g.push(I)
									: ((I -= 65536),
									  g.push(
											55296 + (I >> 10),
											(I % 1024) + 56320
									  )),
									(C + 1 === e || g.length > 16384) &&
										((n += String.fromCharCode.apply(
											String,
											g
										)),
										(g.length = 0))
							}
							return n
						},
						i =
							'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
						s =
							'undefined' == typeof Uint8Array
								? []
								: new Uint8Array(256),
						a = 0;
					a < i.length;
					a++
				)
					s[i.charCodeAt(a)] = a
				var c,
					l = function(A, t, e) {
						return A.slice
							? A.slice(t, e)
							: new Uint16Array(
									Array.prototype.slice.call(A, t, e)
							  )
					},
					u = (function() {
						function A(A, t, e, g, C, n) {
							;(this.initialValue = A),
								(this.errorValue = t),
								(this.highStart = e),
								(this.highValueIndex = g),
								(this.index = C),
								(this.data = n)
						}
						return (
							(A.prototype.get = function(A) {
								var t
								if (A >= 0) {
									if (A < 55296 || (A > 56319 && A <= 65535))
										return (
											(t =
												((t = this.index[A >> 5]) <<
													2) +
												(31 & A)),
											this.data[t]
										)
									if (A <= 65535)
										return (
											(t =
												((t = this.index[
													2048 + ((A - 55296) >> 5)
												]) <<
													2) +
												(31 & A)),
											this.data[t]
										)
									if (A < this.highStart)
										return (
											(t = 2080 + (A >> 11)),
											(t = this.index[t]),
											(t += (A >> 5) & 63),
											(t =
												((t = this.index[t]) << 2) +
												(31 & A)),
											this.data[t]
										)
									if (A <= 1114111)
										return this.data[this.highValueIndex]
								}
								return this.errorValue
							}),
							A
						)
					})(),
					p = 10,
					h = 13,
					B = 15,
					d = 17,
					f = 18,
					w = 19,
					Q = 20,
					m = 21,
					U = 22,
					E = 24,
					v = 25,
					b = 26,
					F = 27,
					x = 28,
					H = 30,
					y = 32,
					N = 33,
					K = 34,
					T = 35,
					_ = 37,
					k = 38,
					R = 39,
					L = 40,
					S = 42,
					D = '!',
					O = (function(A) {
						var t,
							e,
							g,
							C = (function(A) {
								var t,
									e,
									g,
									C,
									n,
									I = 0.75 * A.length,
									r = A.length,
									o = 0
								'=' === A[A.length - 1] &&
									(I--, '=' === A[A.length - 2] && I--)
								var i =
										'undefined' != typeof ArrayBuffer &&
										'undefined' != typeof Uint8Array &&
										void 0 !== Uint8Array.prototype.slice
											? new ArrayBuffer(I)
											: new Array(I),
									a = Array.isArray(i) ? i : new Uint8Array(i)
								for (t = 0; t < r; t += 4)
									(e = s[A.charCodeAt(t)]),
										(g = s[A.charCodeAt(t + 1)]),
										(C = s[A.charCodeAt(t + 2)]),
										(n = s[A.charCodeAt(t + 3)]),
										(a[o++] = (e << 2) | (g >> 4)),
										(a[o++] = ((15 & g) << 4) | (C >> 2)),
										(a[o++] = ((3 & C) << 6) | (63 & n))
								return i
							})(A),
							n = Array.isArray(C)
								? (function(A) {
										for (
											var t = A.length, e = [], g = 0;
											g < t;
											g += 4
										)
											e.push(
												(A[g + 3] << 24) |
													(A[g + 2] << 16) |
													(A[g + 1] << 8) |
													A[g]
											)
										return e
								  })(C)
								: new Uint32Array(C),
							I = Array.isArray(C)
								? (function(A) {
										for (
											var t = A.length, e = [], g = 0;
											g < t;
											g += 2
										)
											e.push((A[g + 1] << 8) | A[g])
										return e
								  })(C)
								: new Uint16Array(C),
							r = l(I, 12, n[4] / 2),
							o =
								2 === n[5]
									? l(I, (24 + n[4]) / 2)
									: ((t = n),
									  (e = Math.ceil((24 + n[4]) / 4)),
									  t.slice
											? t.slice(e, g)
											: new Uint32Array(
													Array.prototype.slice.call(
														t,
														e,
														g
													)
											  ))
						return new u(n[0], n[1], n[2], n[3], r, o)
					})(
						'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA'
					),
					M = [H, 36],
					P = [1, 2, 3, 5],
					z = [p, 8],
					G = [F, b],
					V = P.concat(z),
					X = [k, R, L, K, T],
					J = [B, h],
					W = function(A, t, e, g) {
						var C = g[e]
						if (Array.isArray(A) ? -1 !== A.indexOf(C) : A === C)
							for (var n = e; n <= g.length; ) {
								var I = g[++n]
								if (I === t) return !0
								if (I !== p) break
							}
						if (C === p)
							for (var n = e; n > 0; ) {
								var r = g[--n]
								if (
									Array.isArray(A)
										? -1 !== A.indexOf(r)
										: A === r
								)
									for (var o = e; o <= g.length; ) {
										var I = g[++o]
										if (I === t) return !0
										if (I !== p) break
									}
								if (r !== p) break
							}
						return !1
					},
					j = function(A, t) {
						for (var e = A; e >= 0; ) {
							var g = t[e]
							if (g !== p) return g
							e--
						}
						return 0
					},
					Y = function(A, t, e, g, C) {
						if (0 === e[g]) return '×'
						var n = g - 1
						if (Array.isArray(C) && !0 === C[n]) return '×'
						var I = n - 1,
							r = n + 1,
							o = t[n],
							i = I >= 0 ? t[I] : 0,
							s = t[r]
						if (2 === o && 3 === s) return '×'
						if (-1 !== P.indexOf(o)) return D
						if (-1 !== P.indexOf(s)) return '×'
						if (-1 !== z.indexOf(s)) return '×'
						if (8 === j(n, t)) return '÷'
						if (
							11 === O.get(A[n]) &&
							(s === _ || s === y || s === N)
						)
							return '×'
						if (7 === o || 7 === s) return '×'
						if (9 === o) return '×'
						if (-1 === [p, h, B].indexOf(o) && 9 === s) return '×'
						if (-1 !== [d, f, w, E, x].indexOf(s)) return '×'
						if (j(n, t) === U) return '×'
						if (W(23, U, n, t)) return '×'
						if (W([d, f], m, n, t)) return '×'
						if (W(12, 12, n, t)) return '×'
						if (o === p) return '÷'
						if (23 === o || 23 === s) return '×'
						if (16 === s || 16 === o) return '÷'
						if (-1 !== [h, B, m].indexOf(s) || 14 === o) return '×'
						if (36 === i && -1 !== J.indexOf(o)) return '×'
						if (o === x && 36 === s) return '×'
						if (
							s === Q &&
							-1 !== M.concat(Q, w, v, _, y, N).indexOf(o)
						)
							return '×'
						if (
							(-1 !== M.indexOf(s) && o === v) ||
							(-1 !== M.indexOf(o) && s === v)
						)
							return '×'
						if (
							(o === F && -1 !== [_, y, N].indexOf(s)) ||
							(-1 !== [_, y, N].indexOf(o) && s === b)
						)
							return '×'
						if (
							(-1 !== M.indexOf(o) && -1 !== G.indexOf(s)) ||
							(-1 !== G.indexOf(o) && -1 !== M.indexOf(s))
						)
							return '×'
						if (
							(-1 !== [F, b].indexOf(o) &&
								(s === v ||
									(-1 !== [U, B].indexOf(s) &&
										t[r + 1] === v))) ||
							(-1 !== [U, B].indexOf(o) && s === v) ||
							(o === v && -1 !== [v, x, E].indexOf(s))
						)
							return '×'
						if (-1 !== [v, x, E, d, f].indexOf(s))
							for (var a = n; a >= 0; ) {
								var c = t[a]
								if (c === v) return '×'
								if (-1 === [x, E].indexOf(c)) break
								a--
							}
						if (-1 !== [F, b].indexOf(s))
							for (
								var a = -1 !== [d, f].indexOf(o) ? I : n;
								a >= 0;

							) {
								var c = t[a]
								if (c === v) return '×'
								if (-1 === [x, E].indexOf(c)) break
								a--
							}
						if (
							(k === o && -1 !== [k, R, K, T].indexOf(s)) ||
							(-1 !== [R, K].indexOf(o) &&
								-1 !== [R, L].indexOf(s)) ||
							(-1 !== [L, T].indexOf(o) && s === L)
						)
							return '×'
						if (
							(-1 !== X.indexOf(o) && -1 !== [Q, b].indexOf(s)) ||
							(-1 !== X.indexOf(s) && o === F)
						)
							return '×'
						if (-1 !== M.indexOf(o) && -1 !== M.indexOf(s))
							return '×'
						if (o === E && -1 !== M.indexOf(s)) return '×'
						if (
							(-1 !== M.concat(v).indexOf(o) && s === U) ||
							(-1 !== M.concat(v).indexOf(s) && o === f)
						)
							return '×'
						if (41 === o && 41 === s) {
							for (var l = e[n], u = 1; l > 0 && 41 === t[--l]; )
								u++
							if (u % 2 != 0) return '×'
						}
						return o === y && s === N ? '×' : '÷'
					},
					q = function(A, t) {
						t || (t = { lineBreak: 'normal', wordBreak: 'normal' })
						var e = (function(A, t) {
								void 0 === t && (t = 'strict')
								var e = [],
									g = [],
									C = []
								return (
									A.forEach(function(A, n) {
										var I = O.get(A)
										if (
											(I > 50
												? (C.push(!0), (I -= 50))
												: C.push(!1),
											-1 !==
												[
													'normal',
													'auto',
													'loose'
												].indexOf(t) &&
												-1 !==
													[
														8208,
														8211,
														12316,
														12448
													].indexOf(A))
										)
											return g.push(n), e.push(16)
										if (4 === I || 11 === I) {
											if (0 === n)
												return g.push(n), e.push(H)
											var r = e[n - 1]
											return -1 === V.indexOf(r)
												? (g.push(g[n - 1]), e.push(r))
												: (g.push(n), e.push(H))
										}
										return (
											g.push(n),
											31 === I
												? e.push('strict' === t ? m : _)
												: I === S
												? e.push(H)
												: 29 === I
												? e.push(H)
												: 43 === I
												? (A >= 131072 &&
														A <= 196605) ||
												  (A >= 196608 && A <= 262141)
													? e.push(_)
													: e.push(H)
												: void e.push(I)
										)
									}),
									[g, e, C]
								)
							})(A, t.lineBreak),
							g = e[0],
							C = e[1],
							n = e[2]
						;('break-all' !== t.wordBreak &&
							'break-word' !== t.wordBreak) ||
							(C = C.map(function(A) {
								return -1 !== [v, H, S].indexOf(A) ? _ : A
							}))
						var I =
							'keep-all' === t.wordBreak
								? n.map(function(t, e) {
										return (
											t && A[e] >= 19968 && A[e] <= 40959
										)
								  })
								: void 0
						return [g, C, I]
					},
					Z = (function() {
						function A(A, t, e, g) {
							;(this.codePoints = A),
								(this.required = t === D),
								(this.start = e),
								(this.end = g)
						}
						return (
							(A.prototype.slice = function() {
								return o.apply(
									void 0,
									this.codePoints.slice(this.start, this.end)
								)
							}),
							A
						)
					})()
				!(function(A) {
					;(A[(A.STRING_TOKEN = 0)] = 'STRING_TOKEN'),
						(A[(A.BAD_STRING_TOKEN = 1)] = 'BAD_STRING_TOKEN'),
						(A[(A.LEFT_PARENTHESIS_TOKEN = 2)] =
							'LEFT_PARENTHESIS_TOKEN'),
						(A[(A.RIGHT_PARENTHESIS_TOKEN = 3)] =
							'RIGHT_PARENTHESIS_TOKEN'),
						(A[(A.COMMA_TOKEN = 4)] = 'COMMA_TOKEN'),
						(A[(A.HASH_TOKEN = 5)] = 'HASH_TOKEN'),
						(A[(A.DELIM_TOKEN = 6)] = 'DELIM_TOKEN'),
						(A[(A.AT_KEYWORD_TOKEN = 7)] = 'AT_KEYWORD_TOKEN'),
						(A[(A.PREFIX_MATCH_TOKEN = 8)] = 'PREFIX_MATCH_TOKEN'),
						(A[(A.DASH_MATCH_TOKEN = 9)] = 'DASH_MATCH_TOKEN'),
						(A[(A.INCLUDE_MATCH_TOKEN = 10)] =
							'INCLUDE_MATCH_TOKEN'),
						(A[(A.LEFT_CURLY_BRACKET_TOKEN = 11)] =
							'LEFT_CURLY_BRACKET_TOKEN'),
						(A[(A.RIGHT_CURLY_BRACKET_TOKEN = 12)] =
							'RIGHT_CURLY_BRACKET_TOKEN'),
						(A[(A.SUFFIX_MATCH_TOKEN = 13)] = 'SUFFIX_MATCH_TOKEN'),
						(A[(A.SUBSTRING_MATCH_TOKEN = 14)] =
							'SUBSTRING_MATCH_TOKEN'),
						(A[(A.DIMENSION_TOKEN = 15)] = 'DIMENSION_TOKEN'),
						(A[(A.PERCENTAGE_TOKEN = 16)] = 'PERCENTAGE_TOKEN'),
						(A[(A.NUMBER_TOKEN = 17)] = 'NUMBER_TOKEN'),
						(A[(A.FUNCTION = 18)] = 'FUNCTION'),
						(A[(A.FUNCTION_TOKEN = 19)] = 'FUNCTION_TOKEN'),
						(A[(A.IDENT_TOKEN = 20)] = 'IDENT_TOKEN'),
						(A[(A.COLUMN_TOKEN = 21)] = 'COLUMN_TOKEN'),
						(A[(A.URL_TOKEN = 22)] = 'URL_TOKEN'),
						(A[(A.BAD_URL_TOKEN = 23)] = 'BAD_URL_TOKEN'),
						(A[(A.CDC_TOKEN = 24)] = 'CDC_TOKEN'),
						(A[(A.CDO_TOKEN = 25)] = 'CDO_TOKEN'),
						(A[(A.COLON_TOKEN = 26)] = 'COLON_TOKEN'),
						(A[(A.SEMICOLON_TOKEN = 27)] = 'SEMICOLON_TOKEN'),
						(A[(A.LEFT_SQUARE_BRACKET_TOKEN = 28)] =
							'LEFT_SQUARE_BRACKET_TOKEN'),
						(A[(A.RIGHT_SQUARE_BRACKET_TOKEN = 29)] =
							'RIGHT_SQUARE_BRACKET_TOKEN'),
						(A[(A.UNICODE_RANGE_TOKEN = 30)] =
							'UNICODE_RANGE_TOKEN'),
						(A[(A.WHITESPACE_TOKEN = 31)] = 'WHITESPACE_TOKEN'),
						(A[(A.EOF_TOKEN = 32)] = 'EOF_TOKEN')
				})(c || (c = {}))
				var $ = function(A) {
						return A >= 48 && A <= 57
					},
					AA = function(A) {
						return (
							$(A) ||
							(A >= 65 && A <= 70) ||
							(A >= 97 && A <= 102)
						)
					},
					tA = function(A) {
						return (
							(function(A) {
								return A >= 97 && A <= 122
							})(A) ||
							(function(A) {
								return A >= 65 && A <= 90
							})(A)
						)
					},
					eA = function(A) {
						return 10 === A || 9 === A || 32 === A
					},
					gA = function(A) {
						return (
							tA(A) ||
							(function(A) {
								return A >= 128
							})(A) ||
							95 === A
						)
					},
					CA = function(A) {
						return gA(A) || $(A) || 45 === A
					},
					nA = function(A) {
						return (
							(A >= 0 && A <= 8) ||
							11 === A ||
							(A >= 14 && A <= 31) ||
							127 === A
						)
					},
					IA = function(A, t) {
						return 92 === A && 10 !== t
					},
					rA = function(A, t, e) {
						return 45 === A
							? gA(t) || IA(t, e)
							: !!gA(A) || !(92 !== A || !IA(A, t))
					},
					oA = function(A, t, e) {
						return 43 === A || 45 === A
							? !!$(t) || (46 === t && $(e))
							: $(46 === A ? t : A)
					},
					iA = function(A) {
						var t = 0,
							e = 1
						;(43 !== A[t] && 45 !== A[t]) ||
							(45 === A[t] && (e = -1), t++)
						for (var g = []; $(A[t]); ) g.push(A[t++])
						var C = g.length ? parseInt(o.apply(void 0, g), 10) : 0
						46 === A[t] && t++
						for (var n = []; $(A[t]); ) n.push(A[t++])
						var I = n.length,
							r = I ? parseInt(o.apply(void 0, n), 10) : 0
						;(69 !== A[t] && 101 !== A[t]) || t++
						var i = 1
						;(43 !== A[t] && 45 !== A[t]) ||
							(45 === A[t] && (i = -1), t++)
						for (var s = []; $(A[t]); ) s.push(A[t++])
						var a = s.length ? parseInt(o.apply(void 0, s), 10) : 0
						return (
							e * (C + r * Math.pow(10, -I)) * Math.pow(10, i * a)
						)
					},
					sA = { type: c.LEFT_PARENTHESIS_TOKEN },
					aA = { type: c.RIGHT_PARENTHESIS_TOKEN },
					cA = { type: c.COMMA_TOKEN },
					lA = { type: c.SUFFIX_MATCH_TOKEN },
					uA = { type: c.PREFIX_MATCH_TOKEN },
					pA = { type: c.COLUMN_TOKEN },
					hA = { type: c.DASH_MATCH_TOKEN },
					BA = { type: c.INCLUDE_MATCH_TOKEN },
					dA = { type: c.LEFT_CURLY_BRACKET_TOKEN },
					fA = { type: c.RIGHT_CURLY_BRACKET_TOKEN },
					wA = { type: c.SUBSTRING_MATCH_TOKEN },
					QA = { type: c.BAD_URL_TOKEN },
					mA = { type: c.BAD_STRING_TOKEN },
					UA = { type: c.CDO_TOKEN },
					EA = { type: c.CDC_TOKEN },
					vA = { type: c.COLON_TOKEN },
					bA = { type: c.SEMICOLON_TOKEN },
					FA = { type: c.LEFT_SQUARE_BRACKET_TOKEN },
					xA = { type: c.RIGHT_SQUARE_BRACKET_TOKEN },
					HA = { type: c.WHITESPACE_TOKEN },
					yA = { type: c.EOF_TOKEN },
					NA = (function() {
						function A() {
							this._value = []
						}
						return (
							(A.prototype.write = function(A) {
								this._value = this._value.concat(r(A))
							}),
							(A.prototype.read = function() {
								for (
									var A = [], t = this.consumeToken();
									t !== yA;

								)
									A.push(t), (t = this.consumeToken())
								return A
							}),
							(A.prototype.consumeToken = function() {
								var A = this.consumeCodePoint()
								switch (A) {
									case 34:
										return this.consumeStringToken(34)
									case 35:
										var t = this.peekCodePoint(0),
											e = this.peekCodePoint(1),
											g = this.peekCodePoint(2)
										if (CA(t) || IA(e, g)) {
											var C = rA(t, e, g) ? 2 : 1,
												n = this.consumeName()
											return {
												type: c.HASH_TOKEN,
												value: n,
												flags: C
											}
										}
										break
									case 36:
										if (61 === this.peekCodePoint(0))
											return this.consumeCodePoint(), lA
										break
									case 39:
										return this.consumeStringToken(39)
									case 40:
										return sA
									case 41:
										return aA
									case 42:
										if (61 === this.peekCodePoint(0))
											return this.consumeCodePoint(), wA
										break
									case 43:
										if (
											oA(
												A,
												this.peekCodePoint(0),
												this.peekCodePoint(1)
											)
										)
											return (
												this.reconsumeCodePoint(A),
												this.consumeNumericToken()
											)
										break
									case 44:
										return cA
									case 45:
										var I = A,
											r = this.peekCodePoint(0),
											i = this.peekCodePoint(1)
										if (oA(I, r, i))
											return (
												this.reconsumeCodePoint(A),
												this.consumeNumericToken()
											)
										if (rA(I, r, i))
											return (
												this.reconsumeCodePoint(A),
												this.consumeIdentLikeToken()
											)
										if (45 === r && 62 === i)
											return (
												this.consumeCodePoint(),
												this.consumeCodePoint(),
												EA
											)
										break
									case 46:
										if (
											oA(
												A,
												this.peekCodePoint(0),
												this.peekCodePoint(1)
											)
										)
											return (
												this.reconsumeCodePoint(A),
												this.consumeNumericToken()
											)
										break
									case 47:
										if (42 === this.peekCodePoint(0))
											for (this.consumeCodePoint(); ; ) {
												var s = this.consumeCodePoint()
												if (
													42 === s &&
													47 ===
														(s = this.consumeCodePoint())
												)
													return this.consumeToken()
												if (-1 === s)
													return this.consumeToken()
											}
										break
									case 58:
										return vA
									case 59:
										return bA
									case 60:
										if (
											33 === this.peekCodePoint(0) &&
											45 === this.peekCodePoint(1) &&
											45 === this.peekCodePoint(2)
										)
											return (
												this.consumeCodePoint(),
												this.consumeCodePoint(),
												UA
											)
										break
									case 64:
										var a = this.peekCodePoint(0),
											l = this.peekCodePoint(1),
											u = this.peekCodePoint(2)
										if (rA(a, l, u)) {
											var n = this.consumeName()
											return {
												type: c.AT_KEYWORD_TOKEN,
												value: n
											}
										}
										break
									case 91:
										return FA
									case 92:
										if (IA(A, this.peekCodePoint(0)))
											return (
												this.reconsumeCodePoint(A),
												this.consumeIdentLikeToken()
											)
										break
									case 93:
										return xA
									case 61:
										if (61 === this.peekCodePoint(0))
											return this.consumeCodePoint(), uA
										break
									case 123:
										return dA
									case 125:
										return fA
									case 117:
									case 85:
										var p = this.peekCodePoint(0),
											h = this.peekCodePoint(1)
										return (
											43 !== p ||
												(!AA(h) && 63 !== h) ||
												(this.consumeCodePoint(),
												this.consumeUnicodeRangeToken()),
											this.reconsumeCodePoint(A),
											this.consumeIdentLikeToken()
										)
									case 124:
										if (61 === this.peekCodePoint(0))
											return this.consumeCodePoint(), hA
										if (124 === this.peekCodePoint(0))
											return this.consumeCodePoint(), pA
										break
									case 126:
										if (61 === this.peekCodePoint(0))
											return this.consumeCodePoint(), BA
										break
									case -1:
										return yA
								}
								return eA(A)
									? (this.consumeWhiteSpace(), HA)
									: $(A)
									? (this.reconsumeCodePoint(A),
									  this.consumeNumericToken())
									: gA(A)
									? (this.reconsumeCodePoint(A),
									  this.consumeIdentLikeToken())
									: { type: c.DELIM_TOKEN, value: o(A) }
							}),
							(A.prototype.consumeCodePoint = function() {
								var A = this._value.shift()
								return void 0 === A ? -1 : A
							}),
							(A.prototype.reconsumeCodePoint = function(A) {
								this._value.unshift(A)
							}),
							(A.prototype.peekCodePoint = function(A) {
								return A >= this._value.length
									? -1
									: this._value[A]
							}),
							(A.prototype.consumeUnicodeRangeToken = function() {
								for (
									var A = [], t = this.consumeCodePoint();
									AA(t) && A.length < 6;

								)
									A.push(t), (t = this.consumeCodePoint())
								for (var e = !1; 63 === t && A.length < 6; )
									A.push(t),
										(t = this.consumeCodePoint()),
										(e = !0)
								if (e) {
									var g = parseInt(
											o.apply(
												void 0,
												A.map(function(A) {
													return 63 === A ? 48 : A
												})
											),
											16
										),
										C = parseInt(
											o.apply(
												void 0,
												A.map(function(A) {
													return 63 === A ? 70 : A
												})
											),
											16
										)
									return {
										type: c.UNICODE_RANGE_TOKEN,
										start: g,
										end: C
									}
								}
								var n = parseInt(o.apply(void 0, A), 16)
								if (
									45 === this.peekCodePoint(0) &&
									AA(this.peekCodePoint(1))
								) {
									this.consumeCodePoint(),
										(t = this.consumeCodePoint())
									for (var I = []; AA(t) && I.length < 6; )
										I.push(t), (t = this.consumeCodePoint())
									var C = parseInt(o.apply(void 0, I), 16)
									return {
										type: c.UNICODE_RANGE_TOKEN,
										start: n,
										end: C
									}
								}
								return {
									type: c.UNICODE_RANGE_TOKEN,
									start: n,
									end: n
								}
							}),
							(A.prototype.consumeIdentLikeToken = function() {
								var A = this.consumeName()
								return 'url' === A.toLowerCase() &&
									40 === this.peekCodePoint(0)
									? (this.consumeCodePoint(),
									  this.consumeUrlToken())
									: 40 === this.peekCodePoint(0)
									? (this.consumeCodePoint(),
									  { type: c.FUNCTION_TOKEN, value: A })
									: { type: c.IDENT_TOKEN, value: A }
							}),
							(A.prototype.consumeUrlToken = function() {
								var A = []
								if (
									(this.consumeWhiteSpace(),
									-1 === this.peekCodePoint(0))
								)
									return { type: c.URL_TOKEN, value: '' }
								var t = this.peekCodePoint(0)
								if (39 === t || 34 === t) {
									var e = this.consumeStringToken(
										this.consumeCodePoint()
									)
									return e.type === c.STRING_TOKEN &&
										(this.consumeWhiteSpace(),
										-1 === this.peekCodePoint(0) ||
											41 === this.peekCodePoint(0))
										? (this.consumeCodePoint(),
										  { type: c.URL_TOKEN, value: e.value })
										: (this.consumeBadUrlRemnants(), QA)
								}
								for (;;) {
									var g = this.consumeCodePoint()
									if (-1 === g || 41 === g)
										return {
											type: c.URL_TOKEN,
											value: o.apply(void 0, A)
										}
									if (eA(g))
										return (
											this.consumeWhiteSpace(),
											-1 === this.peekCodePoint(0) ||
											41 === this.peekCodePoint(0)
												? (this.consumeCodePoint(),
												  {
														type: c.URL_TOKEN,
														value: o.apply(
															void 0,
															A
														)
												  })
												: (this.consumeBadUrlRemnants(),
												  QA)
										)
									if (
										34 === g ||
										39 === g ||
										40 === g ||
										nA(g)
									)
										return this.consumeBadUrlRemnants(), QA
									if (92 === g) {
										if (!IA(g, this.peekCodePoint(0)))
											return (
												this.consumeBadUrlRemnants(), QA
											)
										A.push(this.consumeEscapedCodePoint())
									} else A.push(g)
								}
							}),
							(A.prototype.consumeWhiteSpace = function() {
								for (; eA(this.peekCodePoint(0)); )
									this.consumeCodePoint()
							}),
							(A.prototype.consumeBadUrlRemnants = function() {
								for (;;) {
									var A = this.consumeCodePoint()
									if (41 === A || -1 === A) return
									IA(A, this.peekCodePoint(0)) &&
										this.consumeEscapedCodePoint()
								}
							}),
							(A.prototype.consumeStringSlice = function(A) {
								for (var t = ''; A > 0; ) {
									var e = Math.min(6e4, A)
									;(t += o.apply(
										void 0,
										this._value.splice(0, e)
									)),
										(A -= e)
								}
								return this._value.shift(), t
							}),
							(A.prototype.consumeStringToken = function(A) {
								for (var t = '', e = 0; ; ) {
									var g = this._value[e]
									if (-1 === g || void 0 === g || g === A)
										return (
											(t += this.consumeStringSlice(e)),
											{ type: c.STRING_TOKEN, value: t }
										)
									if (10 === g)
										return this._value.splice(0, e), mA
									if (92 === g) {
										var C = this._value[e + 1]
										;-1 !== C &&
											void 0 !== C &&
											(10 === C
												? ((t += this.consumeStringSlice(
														e
												  )),
												  (e = -1),
												  this._value.shift())
												: IA(g, C) &&
												  ((t += this.consumeStringSlice(
														e
												  )),
												  (t += o(
														this.consumeEscapedCodePoint()
												  )),
												  (e = -1)))
									}
									e++
								}
							}),
							(A.prototype.consumeNumber = function() {
								var A = [],
									t = 4,
									e = this.peekCodePoint(0)
								for (
									(43 !== e && 45 !== e) ||
									A.push(this.consumeCodePoint());
									$(this.peekCodePoint(0));

								)
									A.push(this.consumeCodePoint())
								e = this.peekCodePoint(0)
								var g = this.peekCodePoint(1)
								if (46 === e && $(g))
									for (
										A.push(
											this.consumeCodePoint(),
											this.consumeCodePoint()
										),
											t = 8;
										$(this.peekCodePoint(0));

									)
										A.push(this.consumeCodePoint())
								;(e = this.peekCodePoint(0)),
									(g = this.peekCodePoint(1))
								var C = this.peekCodePoint(2)
								if (
									(69 === e || 101 === e) &&
									(((43 === g || 45 === g) && $(C)) || $(g))
								)
									for (
										A.push(
											this.consumeCodePoint(),
											this.consumeCodePoint()
										),
											t = 8;
										$(this.peekCodePoint(0));

									)
										A.push(this.consumeCodePoint())
								return [iA(A), t]
							}),
							(A.prototype.consumeNumericToken = function() {
								var A = this.consumeNumber(),
									t = A[0],
									e = A[1],
									g = this.peekCodePoint(0),
									C = this.peekCodePoint(1),
									n = this.peekCodePoint(2)
								if (rA(g, C, n)) {
									var I = this.consumeName()
									return {
										type: c.DIMENSION_TOKEN,
										number: t,
										flags: e,
										unit: I
									}
								}
								return 37 === g
									? (this.consumeCodePoint(),
									  {
											type: c.PERCENTAGE_TOKEN,
											number: t,
											flags: e
									  })
									: {
											type: c.NUMBER_TOKEN,
											number: t,
											flags: e
									  }
							}),
							(A.prototype.consumeEscapedCodePoint = function() {
								var A = this.consumeCodePoint()
								if (AA(A)) {
									for (
										var t = o(A);
										AA(this.peekCodePoint(0)) &&
										t.length < 6;

									)
										t += o(this.consumeCodePoint())
									eA(this.peekCodePoint(0)) &&
										this.consumeCodePoint()
									var e = parseInt(t, 16)
									return 0 === e ||
										(function(A) {
											return A >= 55296 && A <= 57343
										})(e) ||
										e > 1114111
										? 65533
										: e
								}
								return -1 === A ? 65533 : A
							}),
							(A.prototype.consumeName = function() {
								for (var A = ''; ; ) {
									var t = this.consumeCodePoint()
									if (CA(t)) A += o(t)
									else {
										if (!IA(t, this.peekCodePoint(0)))
											return this.reconsumeCodePoint(t), A
										A += o(this.consumeEscapedCodePoint())
									}
								}
							}),
							A
						)
					})(),
					KA = (function() {
						function A(A) {
							this._tokens = A
						}
						return (
							(A.create = function(t) {
								var e = new NA()
								return e.write(t), new A(e.read())
							}),
							(A.parseValue = function(t) {
								return A.create(t).parseComponentValue()
							}),
							(A.parseValues = function(t) {
								return A.create(t).parseComponentValues()
							}),
							(A.prototype.parseComponentValue = function() {
								for (
									var A = this.consumeToken();
									A.type === c.WHITESPACE_TOKEN;

								)
									A = this.consumeToken()
								if (A.type === c.EOF_TOKEN)
									throw new SyntaxError(
										'Error parsing CSS component value, unexpected EOF'
									)
								this.reconsumeToken(A)
								var t = this.consumeComponentValue()
								do {
									A = this.consumeToken()
								} while (A.type === c.WHITESPACE_TOKEN)
								if (A.type === c.EOF_TOKEN) return t
								throw new SyntaxError(
									'Error parsing CSS component value, multiple values found when expecting only one'
								)
							}),
							(A.prototype.parseComponentValues = function() {
								for (var A = []; ; ) {
									var t = this.consumeComponentValue()
									if (t.type === c.EOF_TOKEN) return A
									A.push(t), A.push()
								}
							}),
							(A.prototype.consumeComponentValue = function() {
								var A = this.consumeToken()
								switch (A.type) {
									case c.LEFT_CURLY_BRACKET_TOKEN:
									case c.LEFT_SQUARE_BRACKET_TOKEN:
									case c.LEFT_PARENTHESIS_TOKEN:
										return this.consumeSimpleBlock(A.type)
									case c.FUNCTION_TOKEN:
										return this.consumeFunction(A)
								}
								return A
							}),
							(A.prototype.consumeSimpleBlock = function(A) {
								for (
									var t = { type: A, values: [] },
										e = this.consumeToken();
									;

								) {
									if (e.type === c.EOF_TOKEN || MA(e, A))
										return t
									this.reconsumeToken(e),
										t.values.push(
											this.consumeComponentValue()
										),
										(e = this.consumeToken())
								}
							}),
							(A.prototype.consumeFunction = function(A) {
								for (
									var t = {
										name: A.value,
										values: [],
										type: c.FUNCTION
									};
									;

								) {
									var e = this.consumeToken()
									if (
										e.type === c.EOF_TOKEN ||
										e.type === c.RIGHT_PARENTHESIS_TOKEN
									)
										return t
									this.reconsumeToken(e),
										t.values.push(
											this.consumeComponentValue()
										)
								}
							}),
							(A.prototype.consumeToken = function() {
								var A = this._tokens.shift()
								return void 0 === A ? yA : A
							}),
							(A.prototype.reconsumeToken = function(A) {
								this._tokens.unshift(A)
							}),
							A
						)
					})(),
					TA = function(A) {
						return A.type === c.DIMENSION_TOKEN
					},
					_A = function(A) {
						return A.type === c.NUMBER_TOKEN
					},
					kA = function(A) {
						return A.type === c.IDENT_TOKEN
					},
					RA = function(A) {
						return A.type === c.STRING_TOKEN
					},
					LA = function(A, t) {
						return kA(A) && A.value === t
					},
					SA = function(A) {
						return A.type !== c.WHITESPACE_TOKEN
					},
					DA = function(A) {
						return (
							A.type !== c.WHITESPACE_TOKEN &&
							A.type !== c.COMMA_TOKEN
						)
					},
					OA = function(A) {
						var t = [],
							e = []
						return (
							A.forEach(function(A) {
								if (A.type === c.COMMA_TOKEN) {
									if (0 === e.length)
										throw new Error(
											'Error parsing function args, zero tokens for arg'
										)
									return t.push(e), void (e = [])
								}
								A.type !== c.WHITESPACE_TOKEN && e.push(A)
							}),
							e.length && t.push(e),
							t
						)
					},
					MA = function(A, t) {
						return (
							(t === c.LEFT_CURLY_BRACKET_TOKEN &&
								A.type === c.RIGHT_CURLY_BRACKET_TOKEN) ||
							(t === c.LEFT_SQUARE_BRACKET_TOKEN &&
								A.type === c.RIGHT_SQUARE_BRACKET_TOKEN) ||
							(t === c.LEFT_PARENTHESIS_TOKEN &&
								A.type === c.RIGHT_PARENTHESIS_TOKEN)
						)
					},
					PA = function(A) {
						return (
							A.type === c.NUMBER_TOKEN ||
							A.type === c.DIMENSION_TOKEN
						)
					},
					zA = function(A) {
						return A.type === c.PERCENTAGE_TOKEN || PA(A)
					},
					GA = function(A) {
						return A.length > 1 ? [A[0], A[1]] : [A[0]]
					},
					VA = { type: c.NUMBER_TOKEN, number: 0, flags: 4 },
					XA = { type: c.PERCENTAGE_TOKEN, number: 50, flags: 4 },
					JA = { type: c.PERCENTAGE_TOKEN, number: 100, flags: 4 },
					WA = function(A, t, e) {
						var g = A[0],
							C = A[1]
						return [jA(g, t), jA(void 0 !== C ? C : g, e)]
					},
					jA = function(A, t) {
						if (A.type === c.PERCENTAGE_TOKEN)
							return (A.number / 100) * t
						if (TA(A))
							switch (A.unit) {
								case 'rem':
								case 'em':
									return 16 * A.number
								case 'px':
								default:
									return A.number
							}
						return A.number
					},
					YA = {
						name: 'angle',
						parse: function(A) {
							if (A.type === c.DIMENSION_TOKEN)
								switch (A.unit) {
									case 'deg':
										return (Math.PI * A.number) / 180
									case 'grad':
										return (Math.PI / 200) * A.number
									case 'rad':
										return A.number
									case 'turn':
										return 2 * Math.PI * A.number
								}
							throw new Error('Unsupported angle type')
						}
					},
					qA = function(A) {
						return (
							A.type === c.DIMENSION_TOKEN &&
							('deg' === A.unit ||
								'grad' === A.unit ||
								'rad' === A.unit ||
								'turn' === A.unit)
						)
					},
					ZA = function(A) {
						var t = A.filter(kA)
							.map(function(A) {
								return A.value
							})
							.join(' ')
						switch (t) {
							case 'to bottom right':
							case 'to right bottom':
							case 'left top':
							case 'top left':
								return [VA, VA]
							case 'to top':
							case 'bottom':
								return $A(0)
							case 'to bottom left':
							case 'to left bottom':
							case 'right top':
							case 'top right':
								return [VA, JA]
							case 'to right':
							case 'left':
								return $A(90)
							case 'to top left':
							case 'to left top':
							case 'right bottom':
							case 'bottom right':
								return [JA, JA]
							case 'to bottom':
							case 'top':
								return $A(180)
							case 'to top right':
							case 'to right top':
							case 'left bottom':
							case 'bottom left':
								return [JA, VA]
							case 'to left':
							case 'right':
								return $A(270)
						}
						return 0
					},
					$A = function(A) {
						return (Math.PI * A) / 180
					},
					At = {
						name: 'color',
						parse: function(A) {
							if (A.type === c.FUNCTION) {
								var t = st[A.name]
								if (void 0 === t)
									throw new Error(
										'Attempting to parse an unsupported color function "' +
											A.name +
											'"'
									)
								return t(A.values)
							}
							if (A.type === c.HASH_TOKEN) {
								if (3 === A.value.length) {
									var e = A.value.substring(0, 1),
										g = A.value.substring(1, 2),
										C = A.value.substring(2, 3)
									return gt(
										parseInt(e + e, 16),
										parseInt(g + g, 16),
										parseInt(C + C, 16),
										1
									)
								}
								if (4 === A.value.length) {
									var e = A.value.substring(0, 1),
										g = A.value.substring(1, 2),
										C = A.value.substring(2, 3),
										n = A.value.substring(3, 4)
									return gt(
										parseInt(e + e, 16),
										parseInt(g + g, 16),
										parseInt(C + C, 16),
										parseInt(n + n, 16) / 255
									)
								}
								if (6 === A.value.length) {
									var e = A.value.substring(0, 2),
										g = A.value.substring(2, 4),
										C = A.value.substring(4, 6)
									return gt(
										parseInt(e, 16),
										parseInt(g, 16),
										parseInt(C, 16),
										1
									)
								}
								if (8 === A.value.length) {
									var e = A.value.substring(0, 2),
										g = A.value.substring(2, 4),
										C = A.value.substring(4, 6),
										n = A.value.substring(6, 8)
									return gt(
										parseInt(e, 16),
										parseInt(g, 16),
										parseInt(C, 16),
										parseInt(n, 16) / 255
									)
								}
							}
							if (A.type === c.IDENT_TOKEN) {
								var I = at[A.value.toUpperCase()]
								if (void 0 !== I) return I
							}
							return at.TRANSPARENT
						}
					},
					tt = function(A) {
						return 0 == (255 & A)
					},
					et = function(A) {
						var t = 255 & A,
							e = 255 & (A >> 8),
							g = 255 & (A >> 16),
							C = 255 & (A >> 24)
						return t < 255
							? 'rgba(' +
									C +
									',' +
									g +
									',' +
									e +
									',' +
									t / 255 +
									')'
							: 'rgb(' + C + ',' + g + ',' + e + ')'
					},
					gt = function(A, t, e, g) {
						return (
							((A << 24) |
								(t << 16) |
								(e << 8) |
								(Math.round(255 * g) << 0)) >>>
							0
						)
					},
					Ct = function(A, t) {
						if (A.type === c.NUMBER_TOKEN) return A.number
						if (A.type === c.PERCENTAGE_TOKEN) {
							var e = 3 === t ? 1 : 255
							return 3 === t
								? (A.number / 100) * e
								: Math.round((A.number / 100) * e)
						}
						return 0
					},
					nt = function(A) {
						var t = A.filter(DA)
						if (3 === t.length) {
							var e = t.map(Ct),
								g = e[0],
								C = e[1],
								n = e[2]
							return gt(g, C, n, 1)
						}
						if (4 === t.length) {
							var I = t.map(Ct),
								g = I[0],
								C = I[1],
								n = I[2],
								r = I[3]
							return gt(g, C, n, r)
						}
						return 0
					}
				function It(A, t, e) {
					return (
						e < 0 && (e += 1),
						e >= 1 && (e -= 1),
						e < 1 / 6
							? (t - A) * e * 6 + A
							: e < 0.5
							? t
							: e < 2 / 3
							? 6 * (t - A) * (2 / 3 - e) + A
							: A
					)
				}
				var rt,
					ot,
					it = function(A) {
						var t = A.filter(DA),
							e = t[0],
							g = t[1],
							C = t[2],
							n = t[3],
							I =
								(e.type === c.NUMBER_TOKEN
									? $A(e.number)
									: YA.parse(e)) /
								(2 * Math.PI),
							r = zA(g) ? g.number / 100 : 0,
							o = zA(C) ? C.number / 100 : 0,
							i = void 0 !== n && zA(n) ? jA(n, 1) : 1
						if (0 === r) return gt(255 * o, 255 * o, 255 * o, 1)
						var s = o <= 0.5 ? o * (r + 1) : o + r - o * r,
							a = 2 * o - s,
							l = It(a, s, I + 1 / 3),
							u = It(a, s, I),
							p = It(a, s, I - 1 / 3)
						return gt(255 * l, 255 * u, 255 * p, i)
					},
					st = { hsl: it, hsla: it, rgb: nt, rgba: nt },
					at = {
						ALICEBLUE: 4042850303,
						ANTIQUEWHITE: 4209760255,
						AQUA: 16777215,
						AQUAMARINE: 2147472639,
						AZURE: 4043309055,
						BEIGE: 4126530815,
						BISQUE: 4293182719,
						BLACK: 255,
						BLANCHEDALMOND: 4293643775,
						BLUE: 65535,
						BLUEVIOLET: 2318131967,
						BROWN: 2771004159,
						BURLYWOOD: 3736635391,
						CADETBLUE: 1604231423,
						CHARTREUSE: 2147418367,
						CHOCOLATE: 3530104575,
						CORAL: 4286533887,
						CORNFLOWERBLUE: 1687547391,
						CORNSILK: 4294499583,
						CRIMSON: 3692313855,
						CYAN: 16777215,
						DARKBLUE: 35839,
						DARKCYAN: 9145343,
						DARKGOLDENROD: 3095837695,
						DARKGRAY: 2846468607,
						DARKGREEN: 6553855,
						DARKGREY: 2846468607,
						DARKKHAKI: 3182914559,
						DARKMAGENTA: 2332068863,
						DARKOLIVEGREEN: 1433087999,
						DARKORANGE: 4287365375,
						DARKORCHID: 2570243327,
						DARKRED: 2332033279,
						DARKSALMON: 3918953215,
						DARKSEAGREEN: 2411499519,
						DARKSLATEBLUE: 1211993087,
						DARKSLATEGRAY: 793726975,
						DARKSLATEGREY: 793726975,
						DARKTURQUOISE: 13554175,
						DARKVIOLET: 2483082239,
						DEEPPINK: 4279538687,
						DEEPSKYBLUE: 12582911,
						DIMGRAY: 1768516095,
						DIMGREY: 1768516095,
						DODGERBLUE: 512819199,
						FIREBRICK: 2988581631,
						FLORALWHITE: 4294635775,
						FORESTGREEN: 579543807,
						FUCHSIA: 4278255615,
						GAINSBORO: 3705462015,
						GHOSTWHITE: 4177068031,
						GOLD: 4292280575,
						GOLDENROD: 3668254975,
						GRAY: 2155905279,
						GREEN: 8388863,
						GREENYELLOW: 2919182335,
						GREY: 2155905279,
						HONEYDEW: 4043305215,
						HOTPINK: 4285117695,
						INDIANRED: 3445382399,
						INDIGO: 1258324735,
						IVORY: 4294963455,
						KHAKI: 4041641215,
						LAVENDER: 3873897215,
						LAVENDERBLUSH: 4293981695,
						LAWNGREEN: 2096890111,
						LEMONCHIFFON: 4294626815,
						LIGHTBLUE: 2916673279,
						LIGHTCORAL: 4034953471,
						LIGHTCYAN: 3774873599,
						LIGHTGOLDENRODYELLOW: 4210742015,
						LIGHTGRAY: 3553874943,
						LIGHTGREEN: 2431553791,
						LIGHTGREY: 3553874943,
						LIGHTPINK: 4290167295,
						LIGHTSALMON: 4288707327,
						LIGHTSEAGREEN: 548580095,
						LIGHTSKYBLUE: 2278488831,
						LIGHTSLATEGRAY: 2005441023,
						LIGHTSLATEGREY: 2005441023,
						LIGHTSTEELBLUE: 2965692159,
						LIGHTYELLOW: 4294959359,
						LIME: 16711935,
						LIMEGREEN: 852308735,
						LINEN: 4210091775,
						MAGENTA: 4278255615,
						MAROON: 2147483903,
						MEDIUMAQUAMARINE: 1724754687,
						MEDIUMBLUE: 52735,
						MEDIUMORCHID: 3126187007,
						MEDIUMPURPLE: 2473647103,
						MEDIUMSEAGREEN: 1018393087,
						MEDIUMSLATEBLUE: 2070474495,
						MEDIUMSPRINGGREEN: 16423679,
						MEDIUMTURQUOISE: 1221709055,
						MEDIUMVIOLETRED: 3340076543,
						MIDNIGHTBLUE: 421097727,
						MINTCREAM: 4127193855,
						MISTYROSE: 4293190143,
						MOCCASIN: 4293178879,
						NAVAJOWHITE: 4292783615,
						NAVY: 33023,
						OLDLACE: 4260751103,
						OLIVE: 2155872511,
						OLIVEDRAB: 1804477439,
						ORANGE: 4289003775,
						ORANGERED: 4282712319,
						ORCHID: 3664828159,
						PALEGOLDENROD: 4008225535,
						PALEGREEN: 2566625535,
						PALETURQUOISE: 2951671551,
						PALEVIOLETRED: 3681588223,
						PAPAYAWHIP: 4293907967,
						PEACHPUFF: 4292524543,
						PERU: 3448061951,
						PINK: 4290825215,
						PLUM: 3718307327,
						POWDERBLUE: 2967529215,
						PURPLE: 2147516671,
						REBECCAPURPLE: 1714657791,
						RED: 4278190335,
						ROSYBROWN: 3163525119,
						ROYALBLUE: 1097458175,
						SADDLEBROWN: 2336560127,
						SALMON: 4202722047,
						SANDYBROWN: 4104413439,
						SEAGREEN: 780883967,
						SEASHELL: 4294307583,
						SIENNA: 2689740287,
						SILVER: 3233857791,
						SKYBLUE: 2278484991,
						SLATEBLUE: 1784335871,
						SLATEGRAY: 1887473919,
						SLATEGREY: 1887473919,
						SNOW: 4294638335,
						SPRINGGREEN: 16744447,
						STEELBLUE: 1182971135,
						TAN: 3535047935,
						TEAL: 8421631,
						THISTLE: 3636451583,
						TOMATO: 4284696575,
						TRANSPARENT: 0,
						TURQUOISE: 1088475391,
						VIOLET: 4001558271,
						WHEAT: 4125012991,
						WHITE: 4294967295,
						WHITESMOKE: 4126537215,
						YELLOW: 4294902015,
						YELLOWGREEN: 2597139199
					}
				;(function(A) {
					;(A[(A.VALUE = 0)] = 'VALUE'),
						(A[(A.LIST = 1)] = 'LIST'),
						(A[(A.IDENT_VALUE = 2)] = 'IDENT_VALUE'),
						(A[(A.TYPE_VALUE = 3)] = 'TYPE_VALUE'),
						(A[(A.TOKEN_VALUE = 4)] = 'TOKEN_VALUE')
				})(rt || (rt = {})),
					(function(A) {
						;(A[(A.BORDER_BOX = 0)] = 'BORDER_BOX'),
							(A[(A.PADDING_BOX = 1)] = 'PADDING_BOX'),
							(A[(A.CONTENT_BOX = 2)] = 'CONTENT_BOX')
					})(ot || (ot = {}))
				var ct,
					lt,
					ut,
					pt = {
						name: 'background-clip',
						initialValue: 'border-box',
						prefix: !1,
						type: rt.LIST,
						parse: function(A) {
							return A.map(function(A) {
								if (kA(A))
									switch (A.value) {
										case 'padding-box':
											return ot.PADDING_BOX
										case 'content-box':
											return ot.CONTENT_BOX
									}
								return ot.BORDER_BOX
							})
						}
					},
					ht = {
						name: 'background-color',
						initialValue: 'transparent',
						prefix: !1,
						type: rt.TYPE_VALUE,
						format: 'color'
					},
					Bt = function(A) {
						var t = At.parse(A[0]),
							e = A[1]
						return e && zA(e)
							? { color: t, stop: e }
							: { color: t, stop: null }
					},
					dt = function(A, t) {
						var e = A[0],
							g = A[A.length - 1]
						null === e.stop && (e.stop = VA),
							null === g.stop && (g.stop = JA)
						for (var C = [], n = 0, I = 0; I < A.length; I++) {
							var r = A[I].stop
							if (null !== r) {
								var o = jA(r, t)
								o > n ? C.push(o) : C.push(n), (n = o)
							} else C.push(null)
						}
						for (var i = null, I = 0; I < C.length; I++) {
							var s = C[I]
							if (null === s) null === i && (i = I)
							else if (null !== i) {
								for (
									var a = I - i,
										c = C[i - 1],
										l = (s - c) / (a + 1),
										u = 1;
									u <= a;
									u++
								)
									C[i + u - 1] = l * u
								i = null
							}
						}
						return A.map(function(A, e) {
							var g = A.color
							return {
								color: g,
								stop: Math.max(Math.min(1, C[e] / t), 0)
							}
						})
					},
					ft = function(A, t, e) {
						var g =
								'number' == typeof A
									? A
									: (function(A, t, e) {
											var g = t / 2,
												C = e / 2,
												n = jA(A[0], t) - g,
												I = C - jA(A[1], e)
											return (
												(Math.atan2(I, n) +
													2 * Math.PI) %
												(2 * Math.PI)
											)
									  })(A, t, e),
							C =
								Math.abs(t * Math.sin(g)) +
								Math.abs(e * Math.cos(g)),
							n = t / 2,
							I = e / 2,
							r = C / 2,
							o = Math.sin(g - Math.PI / 2) * r,
							i = Math.cos(g - Math.PI / 2) * r
						return [C, n - i, n + i, I - o, I + o]
					},
					wt = function(A, t) {
						return Math.sqrt(A * A + t * t)
					},
					Qt = function(A, t, e, g, C) {
						var n = [[0, 0], [0, t], [A, 0], [A, t]]
						return n.reduce(
							function(A, t) {
								var n = t[0],
									I = t[1],
									r = wt(e - n, g - I)
								return (C
								? r < A.optimumDistance
								: r > A.optimumDistance)
									? { optimumCorner: t, optimumDistance: r }
									: A
							},
							{
								optimumDistance: C ? 1 / 0 : -1 / 0,
								optimumCorner: null
							}
						).optimumCorner
					},
					mt = function(A) {
						var t = $A(180),
							e = []
						return (
							OA(A).forEach(function(A, g) {
								if (0 === g) {
									var C = A[0]
									if (
										C.type === c.IDENT_TOKEN &&
										-1 !==
											[
												'top',
												'left',
												'right',
												'bottom'
											].indexOf(C.value)
									)
										return void (t = ZA(A))
									if (qA(C))
										return void (t =
											(YA.parse(C) + $A(270)) % $A(360))
								}
								var n = Bt(A)
								e.push(n)
							}),
							{ angle: t, stops: e, type: ct.LINEAR_GRADIENT }
						)
					},
					Ut = function(A) {
						return (
							0 === A[0] &&
							255 === A[1] &&
							0 === A[2] &&
							255 === A[3]
						)
					},
					Et = function(A, t, e, g, C) {
						var n = 'http://www.w3.org/2000/svg',
							I = document.createElementNS(n, 'svg'),
							r = document.createElementNS(n, 'foreignObject')
						return (
							I.setAttributeNS(null, 'width', A.toString()),
							I.setAttributeNS(null, 'height', t.toString()),
							r.setAttributeNS(null, 'width', '100%'),
							r.setAttributeNS(null, 'height', '100%'),
							r.setAttributeNS(null, 'x', e.toString()),
							r.setAttributeNS(null, 'y', g.toString()),
							r.setAttributeNS(
								null,
								'externalResourcesRequired',
								'true'
							),
							I.appendChild(r),
							r.appendChild(C),
							I
						)
					},
					vt = function(A) {
						return new Promise(function(t, e) {
							var g = new Image()
							;(g.onload = function() {
								return t(g)
							}),
								(g.onerror = e),
								(g.src =
									'data:image/svg+xml;charset=utf-8,' +
									encodeURIComponent(
										new XMLSerializer().serializeToString(A)
									))
						})
					},
					bt = {
						get SUPPORT_RANGE_BOUNDS() {
							var A = (function(A) {
								if (A.createRange) {
									var t = A.createRange()
									if (t.getBoundingClientRect) {
										var e = A.createElement('boundtest')
										;(e.style.height = '123px'),
											(e.style.display = 'block'),
											A.body.appendChild(e),
											t.selectNode(e)
										var g = t.getBoundingClientRect(),
											C = Math.round(g.height)
										if ((A.body.removeChild(e), 123 === C))
											return !0
									}
								}
								return !1
							})(document)
							return (
								Object.defineProperty(
									bt,
									'SUPPORT_RANGE_BOUNDS',
									{ value: A }
								),
								A
							)
						},
						get SUPPORT_SVG_DRAWING() {
							var A = (function(A) {
								var t = new Image(),
									e = A.createElement('canvas'),
									g = e.getContext('2d')
								if (!g) return !1
								t.src =
									"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>"
								try {
									g.drawImage(t, 0, 0), e.toDataURL()
								} catch (A) {
									return !1
								}
								return !0
							})(document)
							return (
								Object.defineProperty(
									bt,
									'SUPPORT_SVG_DRAWING',
									{ value: A }
								),
								A
							)
						},
						get SUPPORT_FOREIGNOBJECT_DRAWING() {
							var A =
								'function' == typeof Array.from &&
								'function' == typeof window.fetch
									? (function(A) {
											var t = A.createElement('canvas')
											;(t.width = 100), (t.height = 100)
											var e = t.getContext('2d')
											if (!e) return Promise.reject(!1)
											;(e.fillStyle = 'rgb(0, 255, 0)'),
												e.fillRect(0, 0, 100, 100)
											var g = new Image(),
												C = t.toDataURL()
											g.src = C
											var n = Et(100, 100, 0, 0, g)
											return (
												(e.fillStyle = 'red'),
												e.fillRect(0, 0, 100, 100),
												vt(n)
													.then(function(t) {
														e.drawImage(t, 0, 0)
														var g = e.getImageData(
															0,
															0,
															100,
															100
														).data
														;(e.fillStyle = 'red'),
															e.fillRect(
																0,
																0,
																100,
																100
															)
														var n = A.createElement(
															'div'
														)
														return (
															(n.style.backgroundImage =
																'url(' +
																C +
																')'),
															(n.style.height =
																'100px'),
															Ut(g)
																? vt(
																		Et(
																			100,
																			100,
																			0,
																			0,
																			n
																		)
																  )
																: Promise.reject(
																		!1
																  )
														)
													})
													.then(function(A) {
														return (
															e.drawImage(
																A,
																0,
																0
															),
															Ut(
																e.getImageData(
																	0,
																	0,
																	100,
																	100
																).data
															)
														)
													})
													.catch(function() {
														return !1
													})
											)
									  })(document)
									: Promise.resolve(!1)
							return (
								Object.defineProperty(
									bt,
									'SUPPORT_FOREIGNOBJECT_DRAWING',
									{ value: A }
								),
								A
							)
						},
						get SUPPORT_CORS_IMAGES() {
							var A = void 0 !== new Image().crossOrigin
							return (
								Object.defineProperty(
									bt,
									'SUPPORT_CORS_IMAGES',
									{ value: A }
								),
								A
							)
						},
						get SUPPORT_RESPONSE_TYPE() {
							var A =
								'string' ==
								typeof new XMLHttpRequest().responseType
							return (
								Object.defineProperty(
									bt,
									'SUPPORT_RESPONSE_TYPE',
									{ value: A }
								),
								A
							)
						},
						get SUPPORT_CORS_XHR() {
							var A = 'withCredentials' in new XMLHttpRequest()
							return (
								Object.defineProperty(bt, 'SUPPORT_CORS_XHR', {
									value: A
								}),
								A
							)
						}
					},
					Ft = (function() {
						function A(A) {
							;(this.id = A), (this.start = Date.now())
						}
						return (
							(A.prototype.debug = function() {
								for (
									var A = [], t = 0;
									t < arguments.length;
									t++
								)
									A[t] = arguments[t]
								'undefined' != typeof window &&
								window.console &&
								'function' == typeof console.debug
									? console.debug.apply(
											console,
											[
												this.id,
												this.getTime() + 'ms'
											].concat(A)
									  )
									: this.info.apply(this, A)
							}),
							(A.prototype.getTime = function() {
								return Date.now() - this.start
							}),
							(A.create = function(t) {
								A.instances[t] = new A(t)
							}),
							(A.destroy = function(t) {
								delete A.instances[t]
							}),
							(A.getInstance = function(t) {
								var e = A.instances[t]
								if (void 0 === e)
									throw new Error(
										'No logger instance found with id ' + t
									)
								return e
							}),
							(A.prototype.info = function() {
								for (
									var A = [], t = 0;
									t < arguments.length;
									t++
								)
									A[t] = arguments[t]
								'undefined' != typeof window &&
									window.console &&
									'function' == typeof console.info &&
									console.info.apply(
										console,
										[this.id, this.getTime() + 'ms'].concat(
											A
										)
									)
							}),
							(A.prototype.error = function() {
								for (
									var A = [], t = 0;
									t < arguments.length;
									t++
								)
									A[t] = arguments[t]
								'undefined' != typeof window &&
								window.console &&
								'function' == typeof console.error
									? console.error.apply(
											console,
											[
												this.id,
												this.getTime() + 'ms'
											].concat(A)
									  )
									: this.info.apply(this, A)
							}),
							(A.instances = {}),
							A
						)
					})(),
					xt = (function() {
						function A() {}
						return (
							(A.create = function(t, e) {
								return (A._caches[t] = new Ht(t, e))
							}),
							(A.destroy = function(t) {
								delete A._caches[t]
							}),
							(A.open = function(t) {
								var e = A._caches[t]
								if (void 0 !== e) return e
								throw new Error(
									'Cache with key "' + t + '" not found'
								)
							}),
							(A.getOrigin = function(t) {
								var e = A._link
								return e
									? ((e.href = t),
									  (e.href = e.href),
									  e.protocol + e.hostname + e.port)
									: 'about:blank'
							}),
							(A.isSameOrigin = function(t) {
								return A.getOrigin(t) === A._origin
							}),
							(A.setContext = function(t) {
								;(A._link = t.document.createElement('a')),
									(A._origin = A.getOrigin(t.location.href))
							}),
							(A.getInstance = function() {
								var t = A._current
								if (null === t)
									throw new Error(
										'No cache instance attached'
									)
								return t
							}),
							(A.attachInstance = function(t) {
								A._current = t
							}),
							(A.detachInstance = function() {
								A._current = null
							}),
							(A._caches = {}),
							(A._origin = 'about:blank'),
							(A._current = null),
							A
						)
					})(),
					Ht = (function() {
						function A(A, t) {
							;(this.id = A),
								(this._options = t),
								(this._cache = {})
						}
						return (
							(A.prototype.addImage = function(A) {
								var t = Promise.resolve()
								return this.has(A)
									? t
									: Rt(A) || Tt(A)
									? ((this._cache[A] = this.loadImage(A)), t)
									: t
							}),
							(A.prototype.match = function(A) {
								return this._cache[A]
							}),
							(A.prototype.loadImage = function(A) {
								return g(this, void 0, void 0, function() {
									var t,
										e,
										g,
										n,
										I = this
									return C(this, function(C) {
										switch (C.label) {
											case 0:
												return (
													(t = xt.isSameOrigin(A)),
													(e =
														!_t(A) &&
														!0 ===
															this._options
																.useCORS &&
														bt.SUPPORT_CORS_IMAGES &&
														!t),
													(g =
														!_t(A) &&
														!t &&
														'string' ==
															typeof this._options
																.proxy &&
														bt.SUPPORT_CORS_XHR &&
														!e),
													t ||
													!1 !==
														this._options
															.allowTaint ||
													_t(A) ||
													g ||
													e
														? ((n = A),
														  g
																? [
																		4,
																		this.proxy(
																			n
																		)
																  ]
																: [3, 2])
														: [2]
												)
											case 1:
												;(n = C.sent()), (C.label = 2)
											case 2:
												return (
													Ft.getInstance(
														this.id
													).debug(
														'Added image ' +
															A.substring(0, 256)
													),
													[
														4,
														new Promise(function(
															A,
															t
														) {
															var g = new Image()
															;(g.onload = function() {
																return A(g)
															}),
																(g.onerror = t),
																(kt(n) || e) &&
																	(g.crossOrigin =
																		'anonymous'),
																(g.src = n),
																!0 ===
																	g.complete &&
																	setTimeout(
																		function() {
																			return A(
																				g
																			)
																		},
																		500
																	),
																I._options
																	.imageTimeout >
																	0 &&
																	setTimeout(
																		function() {
																			return t(
																				'Timed out (' +
																					I
																						._options
																						.imageTimeout +
																					'ms) loading image'
																			)
																		},
																		I
																			._options
																			.imageTimeout
																	)
														})
													]
												)
											case 3:
												return [2, C.sent()]
										}
									})
								})
							}),
							(A.prototype.has = function(A) {
								return void 0 !== this._cache[A]
							}),
							(A.prototype.keys = function() {
								return Promise.resolve(Object.keys(this._cache))
							}),
							(A.prototype.proxy = function(A) {
								var t = this,
									e = this._options.proxy
								if (!e) throw new Error('No proxy defined')
								var g = A.substring(0, 256)
								return new Promise(function(C, n) {
									var I = bt.SUPPORT_RESPONSE_TYPE
											? 'blob'
											: 'text',
										r = new XMLHttpRequest()
									if (
										((r.onload = function() {
											if (200 === r.status)
												if ('text' === I) C(r.response)
												else {
													var A = new FileReader()
													A.addEventListener(
														'load',
														function() {
															return C(A.result)
														},
														!1
													),
														A.addEventListener(
															'error',
															function(A) {
																return n(A)
															},
															!1
														),
														A.readAsDataURL(
															r.response
														)
												}
											else
												n(
													'Failed to proxy resource ' +
														g +
														' with status code ' +
														r.status
												)
										}),
										(r.onerror = n),
										r.open(
											'GET',
											e +
												'?url=' +
												encodeURIComponent(A) +
												'&responseType=' +
												I
										),
										'text' !== I &&
											r instanceof XMLHttpRequest &&
											(r.responseType = I),
										t._options.imageTimeout)
									) {
										var o = t._options.imageTimeout
										;(r.timeout = o),
											(r.ontimeout = function() {
												return n(
													'Timed out (' +
														o +
														'ms) proxying ' +
														g
												)
											})
									}
									r.send()
								})
							}),
							A
						)
					})(),
					yt = /^data:image\/svg\+xml/i,
					Nt = /^data:image\/.*;base64,/i,
					Kt = /^data:image\/.*/i,
					Tt = function(A) {
						return bt.SUPPORT_SVG_DRAWING || !Lt(A)
					},
					_t = function(A) {
						return Kt.test(A)
					},
					kt = function(A) {
						return Nt.test(A)
					},
					Rt = function(A) {
						return 'blob' === A.substr(0, 4)
					},
					Lt = function(A) {
						return (
							'svg' === A.substr(-3).toLowerCase() || yt.test(A)
						)
					},
					St = function(A) {
						var t = lt.CIRCLE,
							e = ut.FARTHEST_CORNER,
							g = [],
							C = []
						return (
							OA(A).forEach(function(A, n) {
								var I = !0
								if (
									(0 === n
										? (I = A.reduce(function(A, t) {
												if (kA(t))
													switch (t.value) {
														case 'center':
															return (
																C.push(XA), !1
															)
														case 'top':
														case 'left':
															return (
																C.push(VA), !1
															)
														case 'right':
														case 'bottom':
															return (
																C.push(JA), !1
															)
													}
												else if (zA(t) || PA(t))
													return C.push(t), !1
												return A
										  }, I))
										: 1 === n &&
										  (I = A.reduce(function(A, g) {
												if (kA(g))
													switch (g.value) {
														case 'circle':
															return (
																(t = lt.CIRCLE),
																!1
															)
														case 'ellipse':
															return (
																(t =
																	lt.ELLIPSE),
																!1
															)
														case 'contain':
														case 'closest-side':
															return (
																(e =
																	ut.CLOSEST_SIDE),
																!1
															)
														case 'farthest-side':
															return (
																(e =
																	ut.FARTHEST_SIDE),
																!1
															)
														case 'closest-corner':
															return (
																(e =
																	ut.CLOSEST_CORNER),
																!1
															)
														case 'cover':
														case 'farthest-corner':
															return (
																(e =
																	ut.FARTHEST_CORNER),
																!1
															)
													}
												else if (PA(g) || zA(g))
													return (
														Array.isArray(e) ||
															(e = []),
														e.push(g),
														!1
													)
												return A
										  }, I)),
									I)
								) {
									var r = Bt(A)
									g.push(r)
								}
							}),
							{
								size: e,
								shape: t,
								stops: g,
								position: C,
								type: ct.RADIAL_GRADIENT
							}
						)
					}
				!(function(A) {
					;(A[(A.URL = 0)] = 'URL'),
						(A[(A.LINEAR_GRADIENT = 1)] = 'LINEAR_GRADIENT'),
						(A[(A.RADIAL_GRADIENT = 2)] = 'RADIAL_GRADIENT')
				})(ct || (ct = {})),
					(function(A) {
						;(A[(A.CIRCLE = 0)] = 'CIRCLE'),
							(A[(A.ELLIPSE = 1)] = 'ELLIPSE')
					})(lt || (lt = {})),
					(function(A) {
						;(A[(A.CLOSEST_SIDE = 0)] = 'CLOSEST_SIDE'),
							(A[(A.FARTHEST_SIDE = 1)] = 'FARTHEST_SIDE'),
							(A[(A.CLOSEST_CORNER = 2)] = 'CLOSEST_CORNER'),
							(A[(A.FARTHEST_CORNER = 3)] = 'FARTHEST_CORNER')
					})(ut || (ut = {}))
				var Dt,
					Ot = {
						name: 'image',
						parse: function(A) {
							if (A.type === c.URL_TOKEN) {
								var t = { url: A.value, type: ct.URL }
								return xt.getInstance().addImage(A.value), t
							}
							if (A.type === c.FUNCTION) {
								var e = Mt[A.name]
								if (void 0 === e)
									throw new Error(
										'Attempting to parse an unsupported image function "' +
											A.name +
											'"'
									)
								return e(A.values)
							}
							throw new Error('Unsupported image type')
						}
					},
					Mt = {
						'linear-gradient': function(A) {
							var t = $A(180),
								e = []
							return (
								OA(A).forEach(function(A, g) {
									if (0 === g) {
										var C = A[0]
										if (
											C.type === c.IDENT_TOKEN &&
											'to' === C.value
										)
											return void (t = ZA(A))
										if (qA(C)) return void (t = YA.parse(C))
									}
									var n = Bt(A)
									e.push(n)
								}),
								{ angle: t, stops: e, type: ct.LINEAR_GRADIENT }
							)
						},
						'-moz-linear-gradient': mt,
						'-ms-linear-gradient': mt,
						'-o-linear-gradient': mt,
						'-webkit-linear-gradient': mt,
						'radial-gradient': function(A) {
							var t = lt.CIRCLE,
								e = ut.FARTHEST_CORNER,
								g = [],
								C = []
							return (
								OA(A).forEach(function(A, n) {
									var I = !0
									if (0 === n) {
										var r = !1
										I = A.reduce(function(A, g) {
											if (r)
												if (kA(g))
													switch (g.value) {
														case 'center':
															return C.push(XA), A
														case 'top':
														case 'left':
															return C.push(VA), A
														case 'right':
														case 'bottom':
															return C.push(JA), A
													}
												else
													(zA(g) || PA(g)) &&
														C.push(g)
											else if (kA(g))
												switch (g.value) {
													case 'circle':
														return (
															(t = lt.CIRCLE), !1
														)
													case 'ellipse':
														return (
															(t = lt.ELLIPSE), !1
														)
													case 'at':
														return (r = !0), !1
													case 'closest-side':
														return (
															(e =
																ut.CLOSEST_SIDE),
															!1
														)
													case 'cover':
													case 'farthest-side':
														return (
															(e =
																ut.FARTHEST_SIDE),
															!1
														)
													case 'contain':
													case 'closest-corner':
														return (
															(e =
																ut.CLOSEST_CORNER),
															!1
														)
													case 'farthest-corner':
														return (
															(e =
																ut.FARTHEST_CORNER),
															!1
														)
												}
											else if (PA(g) || zA(g))
												return (
													Array.isArray(e) ||
														(e = []),
													e.push(g),
													!1
												)
											return A
										}, I)
									}
									if (I) {
										var o = Bt(A)
										g.push(o)
									}
								}),
								{
									size: e,
									shape: t,
									stops: g,
									position: C,
									type: ct.RADIAL_GRADIENT
								}
							)
						},
						'-moz-radial-gradient': St,
						'-ms-radial-gradient': St,
						'-o-radial-gradient': St,
						'-webkit-radial-gradient': St,
						'-webkit-gradient': function(A) {
							var t = $A(180),
								e = [],
								g = ct.LINEAR_GRADIENT,
								C = lt.CIRCLE,
								n = ut.FARTHEST_CORNER
							return (
								OA(A).forEach(function(A, t) {
									var C = A[0]
									if (0 === t) {
										if (kA(C) && 'linear' === C.value)
											return void (g = ct.LINEAR_GRADIENT)
										if (kA(C) && 'radial' === C.value)
											return void (g = ct.RADIAL_GRADIENT)
									}
									if (C.type === c.FUNCTION)
										if ('from' === C.name) {
											var n = At.parse(C.values[0])
											e.push({ stop: VA, color: n })
										} else if ('to' === C.name)
											(n = At.parse(C.values[0])),
												e.push({ stop: JA, color: n })
										else if ('color-stop' === C.name) {
											var I = C.values.filter(DA)
											if (2 === I.length) {
												n = At.parse(I[1])
												var r = I[0]
												_A(r) &&
													e.push({
														stop: {
															type:
																c.PERCENTAGE_TOKEN,
															number:
																100 * r.number,
															flags: r.flags
														},
														color: n
													})
											}
										}
								}),
								g === ct.LINEAR_GRADIENT
									? {
											angle: (t + $A(180)) % $A(360),
											stops: e,
											type: g
									  }
									: {
											size: n,
											shape: C,
											stops: e,
											position: [],
											type: g
									  }
							)
						}
					},
					Pt = {
						name: 'background-image',
						initialValue: 'none',
						type: rt.LIST,
						prefix: !1,
						parse: function(A) {
							if (0 === A.length) return []
							var t = A[0]
							return t.type === c.IDENT_TOKEN &&
								'none' === t.value
								? []
								: A.filter(DA).map(Ot.parse)
						}
					},
					zt = {
						name: 'background-origin',
						initialValue: 'border-box',
						prefix: !1,
						type: rt.LIST,
						parse: function(A) {
							return A.map(function(A) {
								if (kA(A))
									switch (A.value) {
										case 'padding-box':
											return 1
										case 'content-box':
											return 2
									}
								return 0
							})
						}
					},
					Gt = {
						name: 'background-position',
						initialValue: '0% 0%',
						type: rt.LIST,
						prefix: !1,
						parse: function(A) {
							return OA(A)
								.map(function(A) {
									return A.filter(zA)
								})
								.map(GA)
						}
					}
				!(function(A) {
					;(A[(A.REPEAT = 0)] = 'REPEAT'),
						(A[(A.NO_REPEAT = 1)] = 'NO_REPEAT'),
						(A[(A.REPEAT_X = 2)] = 'REPEAT_X'),
						(A[(A.REPEAT_Y = 3)] = 'REPEAT_Y')
				})(Dt || (Dt = {}))
				var Vt,
					Xt = {
						name: 'background-repeat',
						initialValue: 'repeat',
						prefix: !1,
						type: rt.LIST,
						parse: function(A) {
							return OA(A)
								.map(function(A) {
									return A.filter(kA)
										.map(function(A) {
											return A.value
										})
										.join(' ')
								})
								.map(Jt)
						}
					},
					Jt = function(A) {
						switch (A) {
							case 'no-repeat':
								return Dt.NO_REPEAT
							case 'repeat-x':
							case 'repeat no-repeat':
								return Dt.REPEAT_X
							case 'repeat-y':
							case 'no-repeat repeat':
								return Dt.REPEAT_Y
							case 'repeat':
							default:
								return Dt.REPEAT
						}
					}
				!(function(A) {
					;(A.AUTO = 'auto'),
						(A.CONTAIN = 'contain'),
						(A.COVER = 'cover')
				})(Vt || (Vt = {}))
				var Wt,
					jt = {
						name: 'background-size',
						initialValue: '0',
						prefix: !1,
						type: rt.LIST,
						parse: function(A) {
							return OA(A).map(function(A) {
								return A.filter(Yt)
							})
						}
					},
					Yt = function(A) {
						return kA(A) || zA(A)
					},
					qt = function(A) {
						return {
							name: 'border-' + A + '-color',
							initialValue: 'transparent',
							prefix: !1,
							type: rt.TYPE_VALUE,
							format: 'color'
						}
					},
					Zt = qt('top'),
					$t = qt('right'),
					Ae = qt('bottom'),
					te = qt('left'),
					ee = function(A) {
						return {
							name: 'border-radius-' + A,
							initialValue: '0 0',
							prefix: !1,
							type: rt.LIST,
							parse: function(A) {
								return GA(A.filter(zA))
							}
						}
					},
					ge = ee('top-left'),
					Ce = ee('top-right'),
					ne = ee('bottom-right'),
					Ie = ee('bottom-left')
				!(function(A) {
					;(A[(A.NONE = 0)] = 'NONE'), (A[(A.SOLID = 1)] = 'SOLID')
				})(Wt || (Wt = {}))
				var re,
					oe = function(A) {
						return {
							name: 'border-' + A + '-style',
							initialValue: 'solid',
							prefix: !1,
							type: rt.IDENT_VALUE,
							parse: function(A) {
								switch (A) {
									case 'none':
										return Wt.NONE
								}
								return Wt.SOLID
							}
						}
					},
					ie = oe('top'),
					se = oe('right'),
					ae = oe('bottom'),
					ce = oe('left'),
					le = function(A) {
						return {
							name: 'border-' + A + '-width',
							initialValue: '0',
							type: rt.VALUE,
							prefix: !1,
							parse: function(A) {
								return TA(A) ? A.number : 0
							}
						}
					},
					ue = le('top'),
					pe = le('right'),
					he = le('bottom'),
					Be = le('left'),
					de = {
						name: 'color',
						initialValue: 'transparent',
						prefix: !1,
						type: rt.TYPE_VALUE,
						format: 'color'
					},
					fe = {
						name: 'display',
						initialValue: 'inline-block',
						prefix: !1,
						type: rt.LIST,
						parse: function(A) {
							return A.filter(kA).reduce(function(A, t) {
								return A | we(t.value)
							}, 0)
						}
					},
					we = function(A) {
						switch (A) {
							case 'block':
								return 2
							case 'inline':
								return 4
							case 'run-in':
								return 8
							case 'flow':
								return 16
							case 'flow-root':
								return 32
							case 'table':
								return 64
							case 'flex':
							case '-webkit-flex':
								return 128
							case 'grid':
								return 256
							case 'ruby':
								return 512
							case 'subgrid':
								return 1024
							case 'list-item':
								return 2048
							case 'table-row-group':
								return 4096
							case 'table-header-group':
								return 8192
							case 'table-footer-group':
								return 16384
							case 'table-row':
								return 32768
							case 'table-cell':
								return 65536
							case 'table-column-group':
								return 131072
							case 'table-column':
								return 262144
							case 'table-caption':
								return 524288
							case 'ruby-base':
								return 1048576
							case 'ruby-text':
								return 2097152
							case 'ruby-base-container':
								return 4194304
							case 'ruby-text-container':
								return 8388608
							case 'contents':
								return 16777216
							case 'inline-block':
								return 33554432
							case 'inline-list-item':
								return 67108864
							case 'inline-table':
								return 134217728
							case 'inline-flex':
								return 268435456
							case 'inline-grid':
								return 536870912
						}
						return 0
					}
				!(function(A) {
					;(A[(A.NONE = 0)] = 'NONE'),
						(A[(A.LEFT = 1)] = 'LEFT'),
						(A[(A.RIGHT = 2)] = 'RIGHT'),
						(A[(A.INLINE_START = 3)] = 'INLINE_START'),
						(A[(A.INLINE_END = 4)] = 'INLINE_END')
				})(re || (re = {}))
				var Qe,
					me = {
						name: 'float',
						initialValue: 'none',
						prefix: !1,
						type: rt.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'left':
									return re.LEFT
								case 'right':
									return re.RIGHT
								case 'inline-start':
									return re.INLINE_START
								case 'inline-end':
									return re.INLINE_END
							}
							return re.NONE
						}
					},
					Ue = {
						name: 'letter-spacing',
						initialValue: '0',
						prefix: !1,
						type: rt.VALUE,
						parse: function(A) {
							return A.type === c.IDENT_TOKEN &&
								'normal' === A.value
								? 0
								: A.type === c.NUMBER_TOKEN
								? A.number
								: A.type === c.DIMENSION_TOKEN
								? A.number
								: 0
						}
					}
				!(function(A) {
					;(A.NORMAL = 'normal'), (A.STRICT = 'strict')
				})(Qe || (Qe = {}))
				var Ee,
					ve = {
						name: 'line-break',
						initialValue: 'normal',
						prefix: !1,
						type: rt.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'strict':
									return Qe.STRICT
								case 'normal':
								default:
									return Qe.NORMAL
							}
						}
					},
					be = {
						name: 'line-height',
						initialValue: 'normal',
						prefix: !1,
						type: rt.TOKEN_VALUE
					},
					Fe = {
						name: 'list-style-image',
						initialValue: 'none',
						type: rt.VALUE,
						prefix: !1,
						parse: function(A) {
							return A.type === c.IDENT_TOKEN &&
								'none' === A.value
								? null
								: Ot.parse(A)
						}
					}
				!(function(A) {
					;(A[(A.INSIDE = 0)] = 'INSIDE'),
						(A[(A.OUTSIDE = 1)] = 'OUTSIDE')
				})(Ee || (Ee = {}))
				var xe,
					He = {
						name: 'list-style-position',
						initialValue: 'outside',
						prefix: !1,
						type: rt.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'inside':
									return Ee.INSIDE
								case 'outside':
								default:
									return Ee.OUTSIDE
							}
						}
					}
				!(function(A) {
					;(A[(A.NONE = -1)] = 'NONE'),
						(A[(A.DISC = 0)] = 'DISC'),
						(A[(A.CIRCLE = 1)] = 'CIRCLE'),
						(A[(A.SQUARE = 2)] = 'SQUARE'),
						(A[(A.DECIMAL = 3)] = 'DECIMAL'),
						(A[(A.CJK_DECIMAL = 4)] = 'CJK_DECIMAL'),
						(A[(A.DECIMAL_LEADING_ZERO = 5)] =
							'DECIMAL_LEADING_ZERO'),
						(A[(A.LOWER_ROMAN = 6)] = 'LOWER_ROMAN'),
						(A[(A.UPPER_ROMAN = 7)] = 'UPPER_ROMAN'),
						(A[(A.LOWER_GREEK = 8)] = 'LOWER_GREEK'),
						(A[(A.LOWER_ALPHA = 9)] = 'LOWER_ALPHA'),
						(A[(A.UPPER_ALPHA = 10)] = 'UPPER_ALPHA'),
						(A[(A.ARABIC_INDIC = 11)] = 'ARABIC_INDIC'),
						(A[(A.ARMENIAN = 12)] = 'ARMENIAN'),
						(A[(A.BENGALI = 13)] = 'BENGALI'),
						(A[(A.CAMBODIAN = 14)] = 'CAMBODIAN'),
						(A[(A.CJK_EARTHLY_BRANCH = 15)] = 'CJK_EARTHLY_BRANCH'),
						(A[(A.CJK_HEAVENLY_STEM = 16)] = 'CJK_HEAVENLY_STEM'),
						(A[(A.CJK_IDEOGRAPHIC = 17)] = 'CJK_IDEOGRAPHIC'),
						(A[(A.DEVANAGARI = 18)] = 'DEVANAGARI'),
						(A[(A.ETHIOPIC_NUMERIC = 19)] = 'ETHIOPIC_NUMERIC'),
						(A[(A.GEORGIAN = 20)] = 'GEORGIAN'),
						(A[(A.GUJARATI = 21)] = 'GUJARATI'),
						(A[(A.GURMUKHI = 22)] = 'GURMUKHI'),
						(A[(A.HEBREW = 22)] = 'HEBREW'),
						(A[(A.HIRAGANA = 23)] = 'HIRAGANA'),
						(A[(A.HIRAGANA_IROHA = 24)] = 'HIRAGANA_IROHA'),
						(A[(A.JAPANESE_FORMAL = 25)] = 'JAPANESE_FORMAL'),
						(A[(A.JAPANESE_INFORMAL = 26)] = 'JAPANESE_INFORMAL'),
						(A[(A.KANNADA = 27)] = 'KANNADA'),
						(A[(A.KATAKANA = 28)] = 'KATAKANA'),
						(A[(A.KATAKANA_IROHA = 29)] = 'KATAKANA_IROHA'),
						(A[(A.KHMER = 30)] = 'KHMER'),
						(A[(A.KOREAN_HANGUL_FORMAL = 31)] =
							'KOREAN_HANGUL_FORMAL'),
						(A[(A.KOREAN_HANJA_FORMAL = 32)] =
							'KOREAN_HANJA_FORMAL'),
						(A[(A.KOREAN_HANJA_INFORMAL = 33)] =
							'KOREAN_HANJA_INFORMAL'),
						(A[(A.LAO = 34)] = 'LAO'),
						(A[(A.LOWER_ARMENIAN = 35)] = 'LOWER_ARMENIAN'),
						(A[(A.MALAYALAM = 36)] = 'MALAYALAM'),
						(A[(A.MONGOLIAN = 37)] = 'MONGOLIAN'),
						(A[(A.MYANMAR = 38)] = 'MYANMAR'),
						(A[(A.ORIYA = 39)] = 'ORIYA'),
						(A[(A.PERSIAN = 40)] = 'PERSIAN'),
						(A[(A.SIMP_CHINESE_FORMAL = 41)] =
							'SIMP_CHINESE_FORMAL'),
						(A[(A.SIMP_CHINESE_INFORMAL = 42)] =
							'SIMP_CHINESE_INFORMAL'),
						(A[(A.TAMIL = 43)] = 'TAMIL'),
						(A[(A.TELUGU = 44)] = 'TELUGU'),
						(A[(A.THAI = 45)] = 'THAI'),
						(A[(A.TIBETAN = 46)] = 'TIBETAN'),
						(A[(A.TRAD_CHINESE_FORMAL = 47)] =
							'TRAD_CHINESE_FORMAL'),
						(A[(A.TRAD_CHINESE_INFORMAL = 48)] =
							'TRAD_CHINESE_INFORMAL'),
						(A[(A.UPPER_ARMENIAN = 49)] = 'UPPER_ARMENIAN'),
						(A[(A.DISCLOSURE_OPEN = 50)] = 'DISCLOSURE_OPEN'),
						(A[(A.DISCLOSURE_CLOSED = 51)] = 'DISCLOSURE_CLOSED')
				})(xe || (xe = {}))
				var ye,
					Ne = {
						name: 'list-style-type',
						initialValue: 'none',
						prefix: !1,
						type: rt.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'disc':
									return xe.DISC
								case 'circle':
									return xe.CIRCLE
								case 'square':
									return xe.SQUARE
								case 'decimal':
									return xe.DECIMAL
								case 'cjk-decimal':
									return xe.CJK_DECIMAL
								case 'decimal-leading-zero':
									return xe.DECIMAL_LEADING_ZERO
								case 'lower-roman':
									return xe.LOWER_ROMAN
								case 'upper-roman':
									return xe.UPPER_ROMAN
								case 'lower-greek':
									return xe.LOWER_GREEK
								case 'lower-alpha':
									return xe.LOWER_ALPHA
								case 'upper-alpha':
									return xe.UPPER_ALPHA
								case 'arabic-indic':
									return xe.ARABIC_INDIC
								case 'armenian':
									return xe.ARMENIAN
								case 'bengali':
									return xe.BENGALI
								case 'cambodian':
									return xe.CAMBODIAN
								case 'cjk-earthly-branch':
									return xe.CJK_EARTHLY_BRANCH
								case 'cjk-heavenly-stem':
									return xe.CJK_HEAVENLY_STEM
								case 'cjk-ideographic':
									return xe.CJK_IDEOGRAPHIC
								case 'devanagari':
									return xe.DEVANAGARI
								case 'ethiopic-numeric':
									return xe.ETHIOPIC_NUMERIC
								case 'georgian':
									return xe.GEORGIAN
								case 'gujarati':
									return xe.GUJARATI
								case 'gurmukhi':
									return xe.GURMUKHI
								case 'hebrew':
									return xe.HEBREW
								case 'hiragana':
									return xe.HIRAGANA
								case 'hiragana-iroha':
									return xe.HIRAGANA_IROHA
								case 'japanese-formal':
									return xe.JAPANESE_FORMAL
								case 'japanese-informal':
									return xe.JAPANESE_INFORMAL
								case 'kannada':
									return xe.KANNADA
								case 'katakana':
									return xe.KATAKANA
								case 'katakana-iroha':
									return xe.KATAKANA_IROHA
								case 'khmer':
									return xe.KHMER
								case 'korean-hangul-formal':
									return xe.KOREAN_HANGUL_FORMAL
								case 'korean-hanja-formal':
									return xe.KOREAN_HANJA_FORMAL
								case 'korean-hanja-informal':
									return xe.KOREAN_HANJA_INFORMAL
								case 'lao':
									return xe.LAO
								case 'lower-armenian':
									return xe.LOWER_ARMENIAN
								case 'malayalam':
									return xe.MALAYALAM
								case 'mongolian':
									return xe.MONGOLIAN
								case 'myanmar':
									return xe.MYANMAR
								case 'oriya':
									return xe.ORIYA
								case 'persian':
									return xe.PERSIAN
								case 'simp-chinese-formal':
									return xe.SIMP_CHINESE_FORMAL
								case 'simp-chinese-informal':
									return xe.SIMP_CHINESE_INFORMAL
								case 'tamil':
									return xe.TAMIL
								case 'telugu':
									return xe.TELUGU
								case 'thai':
									return xe.THAI
								case 'tibetan':
									return xe.TIBETAN
								case 'trad-chinese-formal':
									return xe.TRAD_CHINESE_FORMAL
								case 'trad-chinese-informal':
									return xe.TRAD_CHINESE_INFORMAL
								case 'upper-armenian':
									return xe.UPPER_ARMENIAN
								case 'disclosure-open':
									return xe.DISCLOSURE_OPEN
								case 'disclosure-closed':
									return xe.DISCLOSURE_CLOSED
								case 'none':
								default:
									return xe.NONE
							}
						}
					},
					Ke = function(A) {
						return {
							name: 'margin-' + A,
							initialValue: '0',
							prefix: !1,
							type: rt.TOKEN_VALUE
						}
					},
					Te = Ke('top'),
					_e = Ke('right'),
					ke = Ke('bottom'),
					Re = Ke('left')
				!(function(A) {
					;(A[(A.VISIBLE = 0)] = 'VISIBLE'),
						(A[(A.HIDDEN = 1)] = 'HIDDEN'),
						(A[(A.SCROLL = 2)] = 'SCROLL'),
						(A[(A.AUTO = 3)] = 'AUTO')
				})(ye || (ye = {}))
				var Le,
					Se = {
						name: 'overflow',
						initialValue: 'visible',
						prefix: !1,
						type: rt.LIST,
						parse: function(A) {
							return A.filter(kA).map(function(A) {
								switch (A.value) {
									case 'hidden':
										return ye.HIDDEN
									case 'scroll':
										return ye.SCROLL
									case 'auto':
										return ye.AUTO
									case 'visible':
									default:
										return ye.VISIBLE
								}
							})
						}
					}
				!(function(A) {
					;(A.NORMAL = 'normal'), (A.BREAK_WORD = 'break-word')
				})(Le || (Le = {}))
				var De,
					Oe = {
						name: 'overflow-wrap',
						initialValue: 'normal',
						prefix: !1,
						type: rt.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'break-word':
									return Le.BREAK_WORD
								case 'normal':
								default:
									return Le.NORMAL
							}
						}
					},
					Me = function(A) {
						return {
							name: 'padding-' + A,
							initialValue: '0',
							prefix: !1,
							type: rt.TYPE_VALUE,
							format: 'length-percentage'
						}
					},
					Pe = Me('top'),
					ze = Me('right'),
					Ge = Me('bottom'),
					Ve = Me('left')
				!(function(A) {
					;(A[(A.LEFT = 0)] = 'LEFT'),
						(A[(A.CENTER = 1)] = 'CENTER'),
						(A[(A.RIGHT = 2)] = 'RIGHT')
				})(De || (De = {}))
				var Xe,
					Je = {
						name: 'text-align',
						initialValue: 'left',
						prefix: !1,
						type: rt.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'right':
									return De.RIGHT
								case 'center':
								case 'justify':
									return De.CENTER
								case 'left':
								default:
									return De.LEFT
							}
						}
					}
				!(function(A) {
					;(A[(A.STATIC = 0)] = 'STATIC'),
						(A[(A.RELATIVE = 1)] = 'RELATIVE'),
						(A[(A.ABSOLUTE = 2)] = 'ABSOLUTE'),
						(A[(A.FIXED = 3)] = 'FIXED'),
						(A[(A.STICKY = 4)] = 'STICKY')
				})(Xe || (Xe = {}))
				var We,
					je = {
						name: 'position',
						initialValue: 'static',
						prefix: !1,
						type: rt.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'relative':
									return Xe.RELATIVE
								case 'absolute':
									return Xe.ABSOLUTE
								case 'fixed':
									return Xe.FIXED
								case 'sticky':
									return Xe.STICKY
							}
							return Xe.STATIC
						}
					},
					Ye = {
						name: 'text-shadow',
						initialValue: 'none',
						type: rt.LIST,
						prefix: !1,
						parse: function(A) {
							return 1 === A.length && LA(A[0], 'none')
								? []
								: OA(A).map(function(A) {
										for (
											var t = {
													color: at.TRANSPARENT,
													offsetX: VA,
													offsetY: VA,
													blur: VA
												},
												e = 0,
												g = 0;
											g < A.length;
											g++
										) {
											var C = A[g]
											PA(C)
												? (0 === e
														? (t.offsetX = C)
														: 1 === e
														? (t.offsetY = C)
														: (t.blur = C),
												  e++)
												: (t.color = At.parse(C))
										}
										return t
								  })
						}
					}
				!(function(A) {
					;(A[(A.NONE = 0)] = 'NONE'),
						(A[(A.LOWERCASE = 1)] = 'LOWERCASE'),
						(A[(A.UPPERCASE = 2)] = 'UPPERCASE'),
						(A[(A.CAPITALIZE = 3)] = 'CAPITALIZE')
				})(We || (We = {}))
				var qe,
					Ze = {
						name: 'text-transform',
						initialValue: 'none',
						prefix: !1,
						type: rt.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'uppercase':
									return We.UPPERCASE
								case 'lowercase':
									return We.LOWERCASE
								case 'capitalize':
									return We.CAPITALIZE
							}
							return We.NONE
						}
					},
					$e = {
						name: 'transform',
						initialValue: 'none',
						prefix: !0,
						type: rt.VALUE,
						parse: function(A) {
							if (A.type === c.IDENT_TOKEN && 'none' === A.value)
								return null
							if (A.type === c.FUNCTION) {
								var t = Ag[A.name]
								if (void 0 === t)
									throw new Error(
										'Attempting to parse an unsupported transform function "' +
											A.name +
											'"'
									)
								return t(A.values)
							}
							return null
						}
					},
					Ag = {
						matrix: function(A) {
							var t = A.filter(function(A) {
								return A.type === c.NUMBER_TOKEN
							}).map(function(A) {
								return A.number
							})
							return 6 === t.length ? t : null
						},
						matrix3d: function(A) {
							var t = A.filter(function(A) {
									return A.type === c.NUMBER_TOKEN
								}).map(function(A) {
									return A.number
								}),
								e = t[0],
								g = t[1],
								C = (t[2], t[3], t[4]),
								n = t[5],
								I =
									(t[6],
									t[7],
									t[8],
									t[9],
									t[10],
									t[11],
									t[12]),
								r = t[13]
							return (
								t[14],
								t[15],
								16 === t.length ? [e, g, C, n, I, r] : null
							)
						}
					},
					tg = { type: c.PERCENTAGE_TOKEN, number: 50, flags: 4 },
					eg = [tg, tg],
					gg = {
						name: 'transform-origin',
						initialValue: '50% 50%',
						prefix: !0,
						type: rt.LIST,
						parse: function(A) {
							var t = A.filter(zA)
							return 2 !== t.length ? eg : [t[0], t[1]]
						}
					}
				!(function(A) {
					;(A[(A.VISIBLE = 0)] = 'VISIBLE'),
						(A[(A.HIDDEN = 1)] = 'HIDDEN'),
						(A[(A.COLLAPSE = 2)] = 'COLLAPSE')
				})(qe || (qe = {}))
				var Cg,
					ng = {
						name: 'visible',
						initialValue: 'none',
						prefix: !1,
						type: rt.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'hidden':
									return qe.HIDDEN
								case 'collapse':
									return qe.COLLAPSE
								case 'visible':
								default:
									return qe.VISIBLE
							}
						}
					}
				!(function(A) {
					;(A.NORMAL = 'normal'),
						(A.BREAK_ALL = 'break-all'),
						(A.KEEP_ALL = 'keep-all')
				})(Cg || (Cg = {}))
				var Ig,
					rg = {
						name: 'word-break',
						initialValue: 'normal',
						prefix: !1,
						type: rt.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'break-all':
									return Cg.BREAK_ALL
								case 'keep-all':
									return Cg.KEEP_ALL
								case 'normal':
								default:
									return Cg.NORMAL
							}
						}
					},
					og = {
						name: 'z-index',
						initialValue: 'auto',
						prefix: !1,
						type: rt.VALUE,
						parse: function(A) {
							if (A.type === c.IDENT_TOKEN)
								return { auto: !0, order: 0 }
							if (_A(A)) return { auto: !1, order: A.number }
							throw new Error('Invalid z-index number parsed')
						}
					},
					ig = {
						name: 'opacity',
						initialValue: '1',
						type: rt.VALUE,
						prefix: !1,
						parse: function(A) {
							return _A(A) ? A.number : 1
						}
					},
					sg = {
						name: 'text-decoration-color',
						initialValue: 'transparent',
						prefix: !1,
						type: rt.TYPE_VALUE,
						format: 'color'
					},
					ag = {
						name: 'text-decoration-line',
						initialValue: 'none',
						prefix: !1,
						type: rt.LIST,
						parse: function(A) {
							return A.filter(kA)
								.map(function(A) {
									switch (A.value) {
										case 'underline':
											return 1
										case 'overline':
											return 2
										case 'line-through':
											return 3
										case 'none':
											return 4
									}
									return 0
								})
								.filter(function(A) {
									return 0 !== A
								})
						}
					},
					cg = {
						name: 'font-family',
						initialValue: '',
						prefix: !1,
						type: rt.LIST,
						parse: function(A) {
							return A.filter(lg).map(function(A) {
								return A.value
							})
						}
					},
					lg = function(A) {
						return (
							A.type === c.STRING_TOKEN ||
							A.type === c.IDENT_TOKEN
						)
					},
					ug = {
						name: 'font-size',
						initialValue: '0',
						prefix: !1,
						type: rt.TYPE_VALUE,
						format: 'length'
					},
					pg = {
						name: 'font-weight',
						initialValue: 'normal',
						type: rt.VALUE,
						prefix: !1,
						parse: function(A) {
							if (_A(A)) return A.number
							if (kA(A))
								switch (A.value) {
									case 'bold':
										return 700
									case 'normal':
									default:
										return 400
								}
							return 400
						}
					},
					hg = {
						name: 'font-variant',
						initialValue: 'none',
						type: rt.LIST,
						prefix: !1,
						parse: function(A) {
							return A.filter(kA).map(function(A) {
								return A.value
							})
						}
					}
				!(function(A) {
					;(A.NORMAL = 'normal'),
						(A.ITALIC = 'italic'),
						(A.OBLIQUE = 'oblique')
				})(Ig || (Ig = {}))
				var Bg,
					dg = {
						name: 'font-style',
						initialValue: 'normal',
						prefix: !1,
						type: rt.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'oblique':
									return Ig.OBLIQUE
								case 'italic':
									return Ig.ITALIC
								case 'normal':
								default:
									return Ig.NORMAL
							}
						}
					},
					fg = function(A, t) {
						return 0 != (A & t)
					},
					wg = {
						name: 'content',
						initialValue: 'none',
						type: rt.LIST,
						prefix: !1,
						parse: function(A) {
							if (0 === A.length) return []
							var t = A[0]
							return t.type === c.IDENT_TOKEN &&
								'none' === t.value
								? []
								: A
						}
					},
					Qg = {
						name: 'counter-increment',
						initialValue: 'none',
						prefix: !0,
						type: rt.LIST,
						parse: function(A) {
							if (0 === A.length) return null
							var t = A[0]
							if (t.type === c.IDENT_TOKEN && 'none' === t.value)
								return null
							for (
								var e = [], g = A.filter(SA), C = 0;
								C < g.length;
								C++
							) {
								var n = g[C],
									I = g[C + 1]
								if (n.type === c.IDENT_TOKEN) {
									var r = I && _A(I) ? I.number : 1
									e.push({ counter: n.value, increment: r })
								}
							}
							return e
						}
					},
					mg = {
						name: 'counter-reset',
						initialValue: 'none',
						prefix: !0,
						type: rt.LIST,
						parse: function(A) {
							if (0 === A.length) return []
							for (
								var t = [], e = A.filter(SA), g = 0;
								g < e.length;
								g++
							) {
								var C = e[g],
									n = e[g + 1]
								if (kA(C) && 'none' !== C.value) {
									var I = n && _A(n) ? n.number : 0
									t.push({ counter: C.value, reset: I })
								}
							}
							return t
						}
					},
					Ug = {
						name: 'quotes',
						initialValue: 'none',
						prefix: !0,
						type: rt.LIST,
						parse: function(A) {
							if (0 === A.length) return null
							var t = A[0]
							if (t.type === c.IDENT_TOKEN && 'none' === t.value)
								return null
							var e = [],
								g = A.filter(RA)
							if (g.length % 2 != 0) return null
							for (var C = 0; C < g.length; C += 2) {
								var n = g[C].value,
									I = g[C + 1].value
								e.push({ open: n, close: I })
							}
							return e
						}
					},
					Eg = function(A, t, e) {
						if (!A) return ''
						var g = A[Math.min(t, A.length - 1)]
						return g ? (e ? g.open : g.close) : ''
					},
					vg = {
						name: 'box-shadow',
						initialValue: 'none',
						type: rt.LIST,
						prefix: !1,
						parse: function(A) {
							return 1 === A.length && LA(A[0], 'none')
								? []
								: OA(A).map(function(A) {
										for (
											var t = {
													color: 255,
													offsetX: VA,
													offsetY: VA,
													blur: VA,
													spread: VA,
													inset: !1
												},
												e = 0,
												g = 0;
											g < A.length;
											g++
										) {
											var C = A[g]
											LA(C, 'inset')
												? (t.inset = !0)
												: PA(C)
												? (0 === e
														? (t.offsetX = C)
														: 1 === e
														? (t.offsetY = C)
														: 2 === e
														? (t.blur = C)
														: (t.spread = C),
												  e++)
												: (t.color = At.parse(C))
										}
										return t
								  })
						}
					},
					bg = (function() {
						function A(A) {
							;(this.backgroundClip = Hg(pt, A.backgroundClip)),
								(this.backgroundColor = Hg(
									ht,
									A.backgroundColor
								)),
								(this.backgroundImage = Hg(
									Pt,
									A.backgroundImage
								)),
								(this.backgroundOrigin = Hg(
									zt,
									A.backgroundOrigin
								)),
								(this.backgroundPosition = Hg(
									Gt,
									A.backgroundPosition
								)),
								(this.backgroundRepeat = Hg(
									Xt,
									A.backgroundRepeat
								)),
								(this.backgroundSize = Hg(
									jt,
									A.backgroundSize
								)),
								(this.borderTopColor = Hg(
									Zt,
									A.borderTopColor
								)),
								(this.borderRightColor = Hg(
									$t,
									A.borderRightColor
								)),
								(this.borderBottomColor = Hg(
									Ae,
									A.borderBottomColor
								)),
								(this.borderLeftColor = Hg(
									te,
									A.borderLeftColor
								)),
								(this.borderTopLeftRadius = Hg(
									ge,
									A.borderTopLeftRadius
								)),
								(this.borderTopRightRadius = Hg(
									Ce,
									A.borderTopRightRadius
								)),
								(this.borderBottomRightRadius = Hg(
									ne,
									A.borderBottomRightRadius
								)),
								(this.borderBottomLeftRadius = Hg(
									Ie,
									A.borderBottomLeftRadius
								)),
								(this.borderTopStyle = Hg(
									ie,
									A.borderTopStyle
								)),
								(this.borderRightStyle = Hg(
									se,
									A.borderRightStyle
								)),
								(this.borderBottomStyle = Hg(
									ae,
									A.borderBottomStyle
								)),
								(this.borderLeftStyle = Hg(
									ce,
									A.borderLeftStyle
								)),
								(this.borderTopWidth = Hg(
									ue,
									A.borderTopWidth
								)),
								(this.borderRightWidth = Hg(
									pe,
									A.borderRightWidth
								)),
								(this.borderBottomWidth = Hg(
									he,
									A.borderBottomWidth
								)),
								(this.borderLeftWidth = Hg(
									Be,
									A.borderLeftWidth
								)),
								(this.boxShadow = Hg(vg, A.boxShadow)),
								(this.color = Hg(de, A.color)),
								(this.display = Hg(fe, A.display)),
								(this.float = Hg(me, A.cssFloat)),
								(this.fontFamily = Hg(cg, A.fontFamily)),
								(this.fontSize = Hg(ug, A.fontSize)),
								(this.fontStyle = Hg(dg, A.fontStyle)),
								(this.fontVariant = Hg(hg, A.fontVariant)),
								(this.fontWeight = Hg(pg, A.fontWeight)),
								(this.letterSpacing = Hg(Ue, A.letterSpacing)),
								(this.lineBreak = Hg(ve, A.lineBreak)),
								(this.lineHeight = Hg(be, A.lineHeight)),
								(this.listStyleImage = Hg(
									Fe,
									A.listStyleImage
								)),
								(this.listStylePosition = Hg(
									He,
									A.listStylePosition
								)),
								(this.listStyleType = Hg(Ne, A.listStyleType)),
								(this.marginTop = Hg(Te, A.marginTop)),
								(this.marginRight = Hg(_e, A.marginRight)),
								(this.marginBottom = Hg(ke, A.marginBottom)),
								(this.marginLeft = Hg(Re, A.marginLeft)),
								(this.opacity = Hg(ig, A.opacity))
							var t = Hg(Se, A.overflow)
							;(this.overflowX = t[0]),
								(this.overflowY = t[t.length > 1 ? 1 : 0]),
								(this.overflowWrap = Hg(Oe, A.overflowWrap)),
								(this.paddingTop = Hg(Pe, A.paddingTop)),
								(this.paddingRight = Hg(ze, A.paddingRight)),
								(this.paddingBottom = Hg(Ge, A.paddingBottom)),
								(this.paddingLeft = Hg(Ve, A.paddingLeft)),
								(this.position = Hg(je, A.position)),
								(this.textAlign = Hg(Je, A.textAlign)),
								(this.textDecorationColor = Hg(
									sg,
									A.textDecorationColor || A.color
								)),
								(this.textDecorationLine = Hg(
									ag,
									A.textDecorationLine
								)),
								(this.textShadow = Hg(Ye, A.textShadow)),
								(this.textTransform = Hg(Ze, A.textTransform)),
								(this.transform = Hg($e, A.transform)),
								(this.transformOrigin = Hg(
									gg,
									A.transformOrigin
								)),
								(this.visibility = Hg(ng, A.visibility)),
								(this.wordBreak = Hg(rg, A.wordBreak)),
								(this.zIndex = Hg(og, A.zIndex))
						}
						return (
							(A.prototype.isVisible = function() {
								return (
									this.display > 0 &&
									this.opacity > 0 &&
									this.visibility === qe.VISIBLE
								)
							}),
							(A.prototype.isTransparent = function() {
								return tt(this.backgroundColor)
							}),
							(A.prototype.isTransformed = function() {
								return null !== this.transform
							}),
							(A.prototype.isPositioned = function() {
								return this.position !== Xe.STATIC
							}),
							(A.prototype.isPositionedWithZIndex = function() {
								return this.isPositioned() && !this.zIndex.auto
							}),
							(A.prototype.isFloating = function() {
								return this.float !== re.NONE
							}),
							(A.prototype.isInlineLevel = function() {
								return (
									fg(this.display, 4) ||
									fg(this.display, 33554432) ||
									fg(this.display, 268435456) ||
									fg(this.display, 536870912) ||
									fg(this.display, 67108864) ||
									fg(this.display, 134217728)
								)
							}),
							A
						)
					})(),
					Fg = function(A) {
						;(this.content = Hg(wg, A.content)),
							(this.quotes = Hg(Ug, A.quotes))
					},
					xg = function(A) {
						;(this.counterIncrement = Hg(Qg, A.counterIncrement)),
							(this.counterReset = Hg(mg, A.counterReset))
					},
					Hg = function(A, t) {
						var e = new NA(),
							g = null != t ? t.toString() : A.initialValue
						e.write(g)
						var C = new KA(e.read())
						switch (A.type) {
							case rt.IDENT_VALUE:
								var n = C.parseComponentValue()
								return A.parse(kA(n) ? n.value : A.initialValue)
							case rt.VALUE:
								return A.parse(C.parseComponentValue())
							case rt.LIST:
								return A.parse(C.parseComponentValues())
							case rt.TOKEN_VALUE:
								return C.parseComponentValue()
							case rt.TYPE_VALUE:
								switch (A.format) {
									case 'angle':
										return YA.parse(C.parseComponentValue())
									case 'color':
										return At.parse(C.parseComponentValue())
									case 'image':
										return Ot.parse(C.parseComponentValue())
									case 'length':
										var I = C.parseComponentValue()
										return PA(I) ? I : VA
									case 'length-percentage':
										var r = C.parseComponentValue()
										return zA(r) ? r : VA
								}
						}
						throw new Error(
							'Attempting to parse unsupported css format type ' +
								A.format
						)
					},
					yg = function(A) {
						;(this.styles = new bg(
							window.getComputedStyle(A, null)
						)),
							(this.textNodes = []),
							(this.elements = []),
							null !== this.styles.transform &&
								cC(A) &&
								(A.style.transform = 'none'),
							(this.bounds = I(A)),
							(this.flags = 0)
					},
					Ng = function(A, t) {
						;(this.text = A), (this.bounds = t)
					},
					Kg = function(A, t, e) {
						var g = kg(A, t),
							C = [],
							n = 0
						return (
							g.forEach(function(A) {
								if (
									t.textDecorationLine.length ||
									A.trim().length > 0
								)
									if (bt.SUPPORT_RANGE_BOUNDS)
										C.push(new Ng(A, _g(e, n, A.length)))
									else {
										var g = e.splitText(A.length)
										C.push(new Ng(A, Tg(e))), (e = g)
									}
								else
									bt.SUPPORT_RANGE_BOUNDS ||
										(e = e.splitText(A.length))
								n += A.length
							}),
							C
						)
					},
					Tg = function(A) {
						var t = A.ownerDocument
						if (t) {
							var e = t.createElement('html2canvaswrapper')
							e.appendChild(A.cloneNode(!0))
							var g = A.parentNode
							if (g) {
								g.replaceChild(e, A)
								var C = I(e)
								return (
									e.firstChild &&
										g.replaceChild(e.firstChild, e),
									C
								)
							}
						}
						return new n(0, 0, 0, 0)
					},
					_g = function(A, t, e) {
						var g = A.ownerDocument
						if (!g) throw new Error('Node has no owner document')
						var C = g.createRange()
						return (
							C.setStart(A, t),
							C.setEnd(A, t + e),
							n.fromClientRect(C.getBoundingClientRect())
						)
					},
					kg = function(A, t) {
						return 0 !== t.letterSpacing
							? r(A).map(function(A) {
									return o(A)
							  })
							: Rg(A, t)
					},
					Rg = function(A, t) {
						for (
							var e,
								g = (function(A, t) {
									var e = r(A),
										g = q(e, t),
										C = g[0],
										n = g[1],
										I = g[2],
										o = e.length,
										i = 0,
										s = 0
									return {
										next: function() {
											if (s >= o)
												return { done: !0, value: null }
											for (
												var A = '×';
												s < o &&
												'×' ===
													(A = Y(e, n, C, ++s, I));

											);
											if ('×' !== A || s === o) {
												var t = new Z(e, A, i, s)
												return (
													(i = s),
													{ value: t, done: !1 }
												)
											}
											return { done: !0, value: null }
										}
									}
								})(A, {
									lineBreak: t.lineBreak,
									wordBreak:
										t.overflowWrap === Le.BREAK_WORD
											? 'break-word'
											: t.wordBreak
								}),
								C = [];
							!(e = g.next()).done;

						)
							e.value && C.push(e.value.slice())
						return C
					},
					Lg = function(A, t) {
						;(this.text = Sg(A.data, t.textTransform)),
							(this.textBounds = Kg(this.text, t, A))
					},
					Sg = function(A, t) {
						switch (t) {
							case We.LOWERCASE:
								return A.toLowerCase()
							case We.CAPITALIZE:
								return A.replace(Dg, Og)
							case We.UPPERCASE:
								return A.toUpperCase()
							default:
								return A
						}
					},
					Dg = /(^|\s|:|-|\(|\))([a-z])/g,
					Og = function(A, t, e) {
						return A.length > 0 ? t + e.toUpperCase() : A
					},
					Mg = (function(A) {
						function e(t) {
							var e = A.call(this, t) || this
							return (
								(e.src = t.currentSrc || t.src),
								(e.intrinsicWidth = t.naturalWidth),
								(e.intrinsicHeight = t.naturalHeight),
								xt.getInstance().addImage(e.src),
								e
							)
						}
						return t(e, A), e
					})(yg),
					Pg = (function(A) {
						function e(t) {
							var e = A.call(this, t) || this
							return (
								(e.canvas = t),
								(e.intrinsicWidth = t.width),
								(e.intrinsicHeight = t.height),
								e
							)
						}
						return t(e, A), e
					})(yg),
					zg = (function(A) {
						function e(t) {
							var e = A.call(this, t) || this,
								g = new XMLSerializer()
							return (
								(e.svg =
									'data:image/svg+xml,' +
									encodeURIComponent(g.serializeToString(t))),
								(e.intrinsicWidth = t.width.baseVal.value),
								(e.intrinsicHeight = t.height.baseVal.value),
								xt.getInstance().addImage(e.svg),
								e
							)
						}
						return t(e, A), e
					})(yg),
					Gg = (function(A) {
						function e(t) {
							var e = A.call(this, t) || this
							return (e.value = t.value), e
						}
						return t(e, A), e
					})(yg),
					Vg = (function(A) {
						function e(t) {
							var e = A.call(this, t) || this
							return (
								(e.start = t.start),
								(e.reversed =
									'boolean' == typeof t.reversed &&
									!0 === t.reversed),
								e
							)
						}
						return t(e, A), e
					})(yg),
					Xg = [
						{
							type: c.DIMENSION_TOKEN,
							flags: 0,
							unit: 'px',
							number: 3
						}
					],
					Jg = [{ type: c.PERCENTAGE_TOKEN, flags: 0, number: 50 }],
					Wg = function(A) {
						return A.width > A.height
							? new n(
									A.left + (A.width - A.height) / 2,
									A.top,
									A.height,
									A.height
							  )
							: A.width < A.height
							? new n(
									A.left,
									A.top + (A.height - A.width) / 2,
									A.width,
									A.width
							  )
							: A
					},
					jg = function(A) {
						var t =
							A.type === Zg
								? new Array(A.value.length + 1).join('•')
								: A.value
						return 0 === t.length ? A.placeholder || '' : t
					},
					Yg = 'checkbox',
					qg = 'radio',
					Zg = 'password',
					$g = (function(A) {
						function e(t) {
							var e = A.call(this, t) || this
							switch (
								((e.type = t.type.toLowerCase()),
								(e.checked = t.checked),
								(e.value = jg(t)),
								(e.type !== Yg && e.type !== qg) ||
									((e.styles.backgroundColor = 3739148031),
									(e.styles.borderTopColor = e.styles.borderRightColor = e.styles.borderBottomColor = e.styles.borderLeftColor = 2779096575),
									(e.styles.borderTopWidth = e.styles.borderRightWidth = e.styles.borderBottomWidth = e.styles.borderLeftWidth = 1),
									(e.styles.borderTopStyle = e.styles.borderRightStyle = e.styles.borderBottomStyle = e.styles.borderLeftStyle =
										Wt.SOLID),
									(e.styles.backgroundClip = [ot.BORDER_BOX]),
									(e.styles.backgroundOrigin = [0]),
									(e.bounds = Wg(e.bounds))),
								e.type)
							) {
								case Yg:
									e.styles.borderTopRightRadius = e.styles.borderTopLeftRadius = e.styles.borderBottomRightRadius = e.styles.borderBottomLeftRadius = Xg
									break
								case qg:
									e.styles.borderTopRightRadius = e.styles.borderTopLeftRadius = e.styles.borderBottomRightRadius = e.styles.borderBottomLeftRadius = Jg
							}
							return e
						}
						return t(e, A), e
					})(yg),
					AC = (function(A) {
						function e(t) {
							var e = A.call(this, t) || this,
								g = t.options[t.selectedIndex || 0]
							return (e.value = (g && g.text) || ''), e
						}
						return t(e, A), e
					})(yg),
					tC = (function(A) {
						function e(t) {
							var e = A.call(this, t) || this
							return (e.value = t.value), e
						}
						return t(e, A), e
					})(yg),
					eC = function(A) {
						return At.parse(KA.create(A).parseComponentValue())
					},
					gC = (function(A) {
						function e(t) {
							var e = A.call(this, t) || this
							;(e.src = t.src),
								(e.width = parseInt(t.width, 10)),
								(e.height = parseInt(t.height, 10)),
								(e.backgroundColor = e.styles.backgroundColor)
							try {
								if (
									t.contentWindow &&
									t.contentWindow.document &&
									t.contentWindow.document.documentElement
								) {
									e.tree = rC(
										t.contentWindow.document.documentElement
									)
									var g = t.contentWindow.document
											.documentElement
											? eC(
													getComputedStyle(
														t.contentWindow.document
															.documentElement
													).backgroundColor
											  )
											: at.TRANSPARENT,
										C = t.contentWindow.document.body
											? eC(
													getComputedStyle(
														t.contentWindow.document
															.body
													).backgroundColor
											  )
											: at.TRANSPARENT
									e.backgroundColor = tt(g)
										? tt(C)
											? e.styles.backgroundColor
											: C
										: g
								}
							} catch (A) {}
							return e
						}
						return t(e, A), e
					})(yg),
					CC = ['OL', 'UL', 'MENU'],
					nC = function(A, t, e) {
						for (var g = A.firstChild, C = void 0; g; g = C)
							if (
								((C = g.nextSibling),
								sC(g) && g.data.trim().length > 0)
							)
								t.textNodes.push(new Lg(g, t.styles))
							else if (aC(g)) {
								var n = IC(g)
								n.styles.isVisible() &&
									(oC(g, n, e)
										? (n.flags |= 4)
										: iC(n.styles) && (n.flags |= 2),
									-1 !== CC.indexOf(g.tagName) &&
										(n.flags |= 8),
									t.elements.push(n),
									UC(g) || hC(g) || EC(g) || nC(g, n, e))
							}
					},
					IC = function(A) {
						return fC(A)
							? new Mg(A)
							: dC(A)
							? new Pg(A)
							: hC(A)
							? new zg(A)
							: lC(A)
							? new Gg(A)
							: uC(A)
							? new Vg(A)
							: pC(A)
							? new $g(A)
							: EC(A)
							? new AC(A)
							: UC(A)
							? new tC(A)
							: wC(A)
							? new gC(A)
							: new yg(A)
					},
					rC = function(A) {
						var t = IC(A)
						return (t.flags |= 4), nC(A, t, t), t
					},
					oC = function(A, t, e) {
						return (
							t.styles.isPositionedWithZIndex() ||
							t.styles.opacity < 1 ||
							t.styles.isTransformed() ||
							(BC(A) && e.styles.isTransparent())
						)
					},
					iC = function(A) {
						return A.isPositioned() || A.isFloating()
					},
					sC = function(A) {
						return A.nodeType === Node.TEXT_NODE
					},
					aC = function(A) {
						return A.nodeType === Node.ELEMENT_NODE
					},
					cC = function(A) {
						return void 0 !== A.style
					},
					lC = function(A) {
						return 'LI' === A.tagName
					},
					uC = function(A) {
						return 'OL' === A.tagName
					},
					pC = function(A) {
						return 'INPUT' === A.tagName
					},
					hC = function(A) {
						return 'svg' === A.tagName
					},
					BC = function(A) {
						return 'BODY' === A.tagName
					},
					dC = function(A) {
						return 'CANVAS' === A.tagName
					},
					fC = function(A) {
						return 'IMG' === A.tagName
					},
					wC = function(A) {
						return 'IFRAME' === A.tagName
					},
					QC = function(A) {
						return 'STYLE' === A.tagName
					},
					mC = function(A) {
						return 'SCRIPT' === A.tagName
					},
					UC = function(A) {
						return 'TEXTAREA' === A.tagName
					},
					EC = function(A) {
						return 'SELECT' === A.tagName
					},
					vC = (function() {
						function A() {
							this.counters = {}
						}
						return (
							(A.prototype.getCounterValue = function(A) {
								var t = this.counters[A]
								return t && t.length ? t[t.length - 1] : 1
							}),
							(A.prototype.getCounterValues = function(A) {
								var t = this.counters[A]
								return t || []
							}),
							(A.prototype.pop = function(A) {
								var t = this
								A.forEach(function(A) {
									return t.counters[A].pop()
								})
							}),
							(A.prototype.parse = function(A) {
								var t = this,
									e = A.counterIncrement,
									g = A.counterReset
								null !== e &&
									e.forEach(function(A) {
										var e = t.counters[A.counter]
										e &&
											(e[Math.max(0, e.length - 1)] +=
												A.increment)
									})
								var C = []
								return (
									g.forEach(function(A) {
										var e = t.counters[A.counter]
										C.push(A.counter),
											e ||
												(e = t.counters[
													A.counter
												] = []),
											e.push(A.reset)
									}),
									C
								)
							}),
							A
						)
					})(),
					bC = {
						integers: [
							1e3,
							900,
							500,
							400,
							100,
							90,
							50,
							40,
							10,
							9,
							5,
							4,
							1
						],
						values: [
							'M',
							'CM',
							'D',
							'CD',
							'C',
							'XC',
							'L',
							'XL',
							'X',
							'IX',
							'V',
							'IV',
							'I'
						]
					},
					FC = {
						integers: [
							9e3,
							8e3,
							7e3,
							6e3,
							5e3,
							4e3,
							3e3,
							2e3,
							1e3,
							900,
							800,
							700,
							600,
							500,
							400,
							300,
							200,
							100,
							90,
							80,
							70,
							60,
							50,
							40,
							30,
							20,
							10,
							9,
							8,
							7,
							6,
							5,
							4,
							3,
							2,
							1
						],
						values: [
							'Ք',
							'Փ',
							'Ւ',
							'Ց',
							'Ր',
							'Տ',
							'Վ',
							'Ս',
							'Ռ',
							'Ջ',
							'Պ',
							'Չ',
							'Ո',
							'Շ',
							'Ն',
							'Յ',
							'Մ',
							'Ճ',
							'Ղ',
							'Ձ',
							'Հ',
							'Կ',
							'Ծ',
							'Խ',
							'Լ',
							'Ի',
							'Ժ',
							'Թ',
							'Ը',
							'Է',
							'Զ',
							'Ե',
							'Դ',
							'Գ',
							'Բ',
							'Ա'
						]
					},
					xC = {
						integers: [
							1e4,
							9e3,
							8e3,
							7e3,
							6e3,
							5e3,
							4e3,
							3e3,
							2e3,
							1e3,
							400,
							300,
							200,
							100,
							90,
							80,
							70,
							60,
							50,
							40,
							30,
							20,
							19,
							18,
							17,
							16,
							15,
							10,
							9,
							8,
							7,
							6,
							5,
							4,
							3,
							2,
							1
						],
						values: [
							'י׳',
							'ט׳',
							'ח׳',
							'ז׳',
							'ו׳',
							'ה׳',
							'ד׳',
							'ג׳',
							'ב׳',
							'א׳',
							'ת',
							'ש',
							'ר',
							'ק',
							'צ',
							'פ',
							'ע',
							'ס',
							'נ',
							'מ',
							'ל',
							'כ',
							'יט',
							'יח',
							'יז',
							'טז',
							'טו',
							'י',
							'ט',
							'ח',
							'ז',
							'ו',
							'ה',
							'ד',
							'ג',
							'ב',
							'א'
						]
					},
					HC = {
						integers: [
							1e4,
							9e3,
							8e3,
							7e3,
							6e3,
							5e3,
							4e3,
							3e3,
							2e3,
							1e3,
							900,
							800,
							700,
							600,
							500,
							400,
							300,
							200,
							100,
							90,
							80,
							70,
							60,
							50,
							40,
							30,
							20,
							10,
							9,
							8,
							7,
							6,
							5,
							4,
							3,
							2,
							1
						],
						values: [
							'ჵ',
							'ჰ',
							'ჯ',
							'ჴ',
							'ხ',
							'ჭ',
							'წ',
							'ძ',
							'ც',
							'ჩ',
							'შ',
							'ყ',
							'ღ',
							'ქ',
							'ფ',
							'ჳ',
							'ტ',
							'ს',
							'რ',
							'ჟ',
							'პ',
							'ო',
							'ჲ',
							'ნ',
							'მ',
							'ლ',
							'კ',
							'ი',
							'თ',
							'ჱ',
							'ზ',
							'ვ',
							'ე',
							'დ',
							'გ',
							'ბ',
							'ა'
						]
					},
					yC = function(A, t, e, g, C, n) {
						return A < t || A > e
							? kC(A, C, n.length > 0)
							: g.integers.reduce(function(t, e, C) {
									for (; A >= e; )
										(A -= e), (t += g.values[C])
									return t
							  }, '') + n
					},
					NC = function(A, t, e, g) {
						var C = ''
						do {
							e || A--, (C = g(A) + C), (A /= t)
						} while (A * t >= t)
						return C
					},
					KC = function(A, t, e, g, C) {
						var n = e - t + 1
						return (
							(A < 0 ? '-' : '') +
							(NC(Math.abs(A), n, g, function(A) {
								return o(Math.floor(A % n) + t)
							}) +
								C)
						)
					},
					TC = function(A, t, e) {
						void 0 === e && (e = '. ')
						var g = t.length
						return (
							NC(Math.abs(A), g, !1, function(A) {
								return t[Math.floor(A % g)]
							}) + e
						)
					},
					_C = function(A, t, e, g, C, n) {
						if (A < -9999 || A > 9999)
							return kC(A, xe.CJK_DECIMAL, C.length > 0)
						var I = Math.abs(A),
							r = C
						if (0 === I) return t[0] + r
						for (var o = 0; I > 0 && o <= 4; o++) {
							var i = I % 10
							0 === i && fg(n, 1) && '' !== r
								? (r = t[i] + r)
								: i > 1 ||
								  (1 === i && 0 === o) ||
								  (1 === i && 1 === o && fg(n, 2)) ||
								  (1 === i && 1 === o && fg(n, 4) && A > 100) ||
								  (1 === i && o > 1 && fg(n, 8))
								? (r = t[i] + (o > 0 ? e[o - 1] : '') + r)
								: 1 === i && o > 0 && (r = e[o - 1] + r),
								(I = Math.floor(I / 10))
						}
						return (A < 0 ? g : '') + r
					},
					kC = function(A, t, e) {
						var g = e ? '. ' : '',
							C = e ? '、' : '',
							n = e ? ', ' : '',
							I = e ? ' ' : ''
						switch (t) {
							case xe.DISC:
								return '•' + I
							case xe.CIRCLE:
								return '◦' + I
							case xe.SQUARE:
								return '◾' + I
							case xe.DECIMAL_LEADING_ZERO:
								var r = KC(A, 48, 57, !0, g)
								return r.length < 4 ? '0' + r : r
							case xe.CJK_DECIMAL:
								return TC(A, '〇一二三四五六七八九', C)
							case xe.LOWER_ROMAN:
								return yC(
									A,
									1,
									3999,
									bC,
									xe.DECIMAL,
									g
								).toLowerCase()
							case xe.UPPER_ROMAN:
								return yC(A, 1, 3999, bC, xe.DECIMAL, g)
							case xe.LOWER_GREEK:
								return KC(A, 945, 969, !1, g)
							case xe.LOWER_ALPHA:
								return KC(A, 97, 122, !1, g)
							case xe.UPPER_ALPHA:
								return KC(A, 65, 90, !1, g)
							case xe.ARABIC_INDIC:
								return KC(A, 1632, 1641, !0, g)
							case xe.ARMENIAN:
							case xe.UPPER_ARMENIAN:
								return yC(A, 1, 9999, FC, xe.DECIMAL, g)
							case xe.LOWER_ARMENIAN:
								return yC(
									A,
									1,
									9999,
									FC,
									xe.DECIMAL,
									g
								).toLowerCase()
							case xe.BENGALI:
								return KC(A, 2534, 2543, !0, g)
							case xe.CAMBODIAN:
							case xe.KHMER:
								return KC(A, 6112, 6121, !0, g)
							case xe.CJK_EARTHLY_BRANCH:
								return TC(A, '子丑寅卯辰巳午未申酉戌亥', C)
							case xe.CJK_HEAVENLY_STEM:
								return TC(A, '甲乙丙丁戊己庚辛壬癸', C)
							case xe.CJK_IDEOGRAPHIC:
							case xe.TRAD_CHINESE_INFORMAL:
								return _C(
									A,
									'零一二三四五六七八九',
									'十百千萬',
									'負',
									C,
									14
								)
							case xe.TRAD_CHINESE_FORMAL:
								return _C(
									A,
									'零壹貳參肆伍陸柒捌玖',
									'拾佰仟萬',
									'負',
									C,
									15
								)
							case xe.SIMP_CHINESE_INFORMAL:
								return _C(
									A,
									'零一二三四五六七八九',
									'十百千萬',
									'负',
									C,
									14
								)
							case xe.SIMP_CHINESE_FORMAL:
								return _C(
									A,
									'零壹贰叁肆伍陆柒捌玖',
									'拾佰仟萬',
									'负',
									C,
									15
								)
							case xe.JAPANESE_INFORMAL:
								return _C(
									A,
									'〇一二三四五六七八九',
									'十百千万',
									'マイナス',
									C,
									0
								)
							case xe.JAPANESE_FORMAL:
								return _C(
									A,
									'零壱弐参四伍六七八九',
									'拾百千万',
									'マイナス',
									C,
									7
								)
							case xe.KOREAN_HANGUL_FORMAL:
								return _C(
									A,
									'영일이삼사오육칠팔구',
									'십백천만',
									'마이너스',
									n,
									7
								)
							case xe.KOREAN_HANJA_INFORMAL:
								return _C(
									A,
									'零一二三四五六七八九',
									'十百千萬',
									'마이너스',
									n,
									0
								)
							case xe.KOREAN_HANJA_FORMAL:
								return _C(
									A,
									'零壹貳參四五六七八九',
									'拾百千',
									'마이너스',
									n,
									7
								)
							case xe.DEVANAGARI:
								return KC(A, 2406, 2415, !0, g)
							case xe.GEORGIAN:
								return yC(A, 1, 19999, HC, xe.DECIMAL, g)
							case xe.GUJARATI:
								return KC(A, 2790, 2799, !0, g)
							case xe.GURMUKHI:
								return KC(A, 2662, 2671, !0, g)
							case xe.HEBREW:
								return yC(A, 1, 10999, xC, xe.DECIMAL, g)
							case xe.HIRAGANA:
								return TC(
									A,
									'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん'
								)
							case xe.HIRAGANA_IROHA:
								return TC(
									A,
									'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす'
								)
							case xe.KANNADA:
								return KC(A, 3302, 3311, !0, g)
							case xe.KATAKANA:
								return TC(
									A,
									'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン',
									C
								)
							case xe.KATAKANA_IROHA:
								return TC(
									A,
									'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス',
									C
								)
							case xe.LAO:
								return KC(A, 3792, 3801, !0, g)
							case xe.MONGOLIAN:
								return KC(A, 6160, 6169, !0, g)
							case xe.MYANMAR:
								return KC(A, 4160, 4169, !0, g)
							case xe.ORIYA:
								return KC(A, 2918, 2927, !0, g)
							case xe.PERSIAN:
								return KC(A, 1776, 1785, !0, g)
							case xe.TAMIL:
								return KC(A, 3046, 3055, !0, g)
							case xe.TELUGU:
								return KC(A, 3174, 3183, !0, g)
							case xe.THAI:
								return KC(A, 3664, 3673, !0, g)
							case xe.TIBETAN:
								return KC(A, 3872, 3881, !0, g)
							case xe.DECIMAL:
							default:
								return KC(A, 48, 57, !0, g)
						}
					},
					RC = (function() {
						function A(A, t) {
							if (
								((this.options = t),
								(this.scrolledElements = []),
								(this.referenceElement = A),
								(this.counters = new vC()),
								(this.quoteDepth = 0),
								!A.ownerDocument)
							)
								throw new Error(
									'Cloned element does not have an owner document'
								)
							this.documentElement = this.cloneNode(
								A.ownerDocument.documentElement
							)
						}
						return (
							(A.prototype.toIFrame = function(A, t) {
								var e = this,
									g = SC(A, t)
								if (!g.contentWindow)
									return Promise.reject(
										'Unable to find iframe window'
									)
								var C = A.defaultView.pageXOffset,
									n = A.defaultView.pageYOffset,
									I = g.contentWindow,
									r = I.document,
									o = DC(g).then(function() {
										e.scrolledElements.forEach(zC),
											I &&
												(I.scrollTo(t.left, t.top),
												!/(iPad|iPhone|iPod)/g.test(
													navigator.userAgent
												) ||
													(I.scrollY === t.top &&
														I.scrollX === t.left) ||
													((r.documentElement.style.top =
														-t.top + 'px'),
													(r.documentElement.style.left =
														-t.left + 'px'),
													(r.documentElement.style.position =
														'absolute')))
										var A = e.options.onclone
										return void 0 ===
											e.clonedReferenceElement
											? Promise.reject(
													'Error finding the ' +
														e.referenceElement
															.nodeName +
														' in the cloned document'
											  )
											: 'function' == typeof A
											? Promise.resolve()
													.then(function() {
														return A(r)
													})
													.then(function() {
														return g
													})
											: g
									})
								return (
									r.open(),
									r.write(
										MC(document.doctype) + '<html></html>'
									),
									PC(
										this.referenceElement.ownerDocument,
										C,
										n
									),
									r.replaceChild(
										r.adoptNode(this.documentElement),
										r.documentElement
									),
									r.close(),
									o
								)
							}),
							(A.prototype.createElementClone = function(A) {
								return dC(A)
									? this.createCanvasClone(A)
									: QC(A)
									? this.createStyleClone(A)
									: A.cloneNode(!1)
							}),
							(A.prototype.createStyleClone = function(A) {
								try {
									var t = A.sheet
									if (t && t.cssRules) {
										var e = [].slice
												.call(t.cssRules, 0)
												.reduce(function(A, t) {
													return t &&
														'string' ==
															typeof t.cssText
														? A + t.cssText
														: A
												}, ''),
											g = A.cloneNode(!1)
										return (g.textContent = e), g
									}
								} catch (A) {
									if (
										(Ft.getInstance(this.options.id).error(
											'Unable to access cssRules property',
											A
										),
										'SecurityError' !== A.name)
									)
										throw A
								}
								return A.cloneNode(!1)
							}),
							(A.prototype.createCanvasClone = function(A) {
								if (
									this.options.inlineImages &&
									A.ownerDocument
								) {
									var t = A.ownerDocument.createElement('img')
									try {
										return (t.src = A.toDataURL()), t
									} catch (A) {
										Ft.getInstance(this.options.id).info(
											'Unable to clone canvas contents, canvas is tainted'
										)
									}
								}
								var e = A.cloneNode(!1)
								try {
									;(e.width = A.width), (e.height = A.height)
									var g = A.getContext('2d'),
										C = e.getContext('2d')
									return (
										C &&
											(g
												? C.putImageData(
														g.getImageData(
															0,
															0,
															A.width,
															A.height
														),
														0,
														0
												  )
												: C.drawImage(A, 0, 0)),
										e
									)
								} catch (A) {}
								return e
							}),
							(A.prototype.cloneNode = function(A) {
								if (sC(A))
									return document.createTextNode(A.data)
								if (!A.ownerDocument) return A.cloneNode(!1)
								var t = A.ownerDocument.defaultView
								if (cC(A) && t) {
									var e = this.createElementClone(A),
										g = t.getComputedStyle(A),
										C = t.getComputedStyle(A, ':before'),
										n = t.getComputedStyle(A, ':after')
									this.referenceElement === A &&
										(this.clonedReferenceElement = e),
										BC(e) && XC(e)
									for (
										var I = this.counters.parse(new xg(g)),
											r = this.resolvePseudoContent(
												A,
												e,
												C,
												Bg.BEFORE
											),
											o = A.firstChild;
										o;
										o = o.nextSibling
									)
										(aC(o) &&
											(mC(o) ||
												o.hasAttribute(
													'data-html2canvas-ignore'
												) ||
												('function' ==
													typeof this.options
														.ignoreElements &&
													this.options.ignoreElements(
														o
													)))) ||
											(this.options.copyStyles &&
												aC(o) &&
												QC(o)) ||
											e.appendChild(this.cloneNode(o))
									r && e.insertBefore(r, e.firstChild)
									var i = this.resolvePseudoContent(
										A,
										e,
										n,
										Bg.AFTER
									)
									return (
										i && e.appendChild(i),
										this.counters.pop(I),
										g &&
											this.options.copyStyles &&
											!wC(A) &&
											OC(g, e),
										(0 === A.scrollTop &&
											0 === A.scrollLeft) ||
											this.scrolledElements.push([
												e,
												A.scrollLeft,
												A.scrollTop
											]),
										(UC(A) || EC(A)) &&
											(UC(e) || EC(e)) &&
											(e.value = A.value),
										e
									)
								}
								return A.cloneNode(!1)
							}),
							(A.prototype.resolvePseudoContent = function(
								A,
								t,
								e,
								g
							) {
								var C = this
								if (e) {
									var n = e.content,
										I = t.ownerDocument
									if (
										I &&
										n &&
										'none' !== n &&
										'-moz-alt-content' !== n &&
										'none' !== e.display
									) {
										this.counters.parse(new xg(e))
										var r = new Fg(e),
											o = I.createElement(
												'html2canvaspseudoelement'
											)
										return (
											OC(e, o),
											r.content.forEach(function(t) {
												if (t.type === c.STRING_TOKEN)
													o.appendChild(
														I.createTextNode(
															t.value
														)
													)
												else if (
													t.type === c.URL_TOKEN
												) {
													var e = I.createElement(
														'img'
													)
													;(e.src = t.value),
														(e.style.opacity = '1'),
														o.appendChild(e)
												} else if (
													t.type === c.FUNCTION
												) {
													if ('attr' === t.name) {
														var g = t.values.filter(
															kA
														)
														g.length &&
															o.appendChild(
																I.createTextNode(
																	A.getAttribute(
																		g[0]
																			.value
																	) || ''
																)
															)
													} else if (
														'counter' === t.name
													) {
														var n = t.values.filter(
																DA
															),
															i = n[0],
															s = n[1]
														if (i && kA(i)) {
															var a = C.counters.getCounterValue(
																	i.value
																),
																l =
																	s && kA(s)
																		? Ne.parse(
																				s.value
																		  )
																		: xe.DECIMAL
															o.appendChild(
																I.createTextNode(
																	kC(a, l, !1)
																)
															)
														}
													} else if (
														'counters' === t.name
													) {
														var u = t.values.filter(
																DA
															),
															i = u[0],
															p = u[1],
															s = u[2]
														if (i && kA(i)) {
															var h = C.counters.getCounterValues(
																	i.value
																),
																B =
																	s && kA(s)
																		? Ne.parse(
																				s.value
																		  )
																		: xe.DECIMAL,
																d =
																	p &&
																	p.type ===
																		c.STRING_TOKEN
																		? p.value
																		: '',
																f = h
																	.map(
																		function(
																			A
																		) {
																			return kC(
																				A,
																				B,
																				!1
																			)
																		}
																	)
																	.join(d)
															o.appendChild(
																I.createTextNode(
																	f
																)
															)
														}
													}
												} else if (
													t.type === c.IDENT_TOKEN
												)
													switch (t.value) {
														case 'open-quote':
															o.appendChild(
																I.createTextNode(
																	Eg(
																		r.quotes,
																		C.quoteDepth++,
																		!0
																	)
																)
															)
															break
														case 'close-quote':
															o.appendChild(
																I.createTextNode(
																	Eg(
																		r.quotes,
																		--C.quoteDepth,
																		!1
																	)
																)
															)
													}
											}),
											(o.className = GC + ' ' + VC),
											(t.className +=
												g === Bg.BEFORE
													? ' ' + GC
													: ' ' + VC),
											o
										)
									}
								}
							}),
							A
						)
					})()
				!(function(A) {
					;(A[(A.BEFORE = 0)] = 'BEFORE'),
						(A[(A.AFTER = 1)] = 'AFTER')
				})(Bg || (Bg = {}))
				var LC,
					SC = function(A, t) {
						var e = A.createElement('iframe')
						return (
							(e.className = 'html2canvas-container'),
							(e.style.visibility = 'hidden'),
							(e.style.position = 'fixed'),
							(e.style.left = '-10000px'),
							(e.style.top = '0px'),
							(e.style.border = '0'),
							(e.width = t.width.toString()),
							(e.height = t.height.toString()),
							(e.scrolling = 'no'),
							e.setAttribute('data-html2canvas-ignore', 'true'),
							A.body.appendChild(e),
							e
						)
					},
					DC = function(A) {
						return new Promise(function(t, e) {
							var g = A.contentWindow
							if (!g) return e('No window assigned for iframe')
							var C = g.document
							g.onload = A.onload = C.onreadystatechange = function() {
								g.onload = A.onload = C.onreadystatechange = null
								var e = setInterval(function() {
									C.body.childNodes.length > 0 &&
										'complete' === C.readyState &&
										(clearInterval(e), t(A))
								}, 50)
							}
						})
					},
					OC = function(A, t) {
						for (var e = A.length - 1; e >= 0; e--) {
							var g = A.item(e)
							'content' !== g &&
								t.style.setProperty(g, A.getPropertyValue(g))
						}
						return t
					},
					MC = function(A) {
						var t = ''
						return (
							A &&
								((t += '<!DOCTYPE '),
								A.name && (t += A.name),
								A.internalSubset && (t += A.internalSubset),
								A.publicId && (t += '"' + A.publicId + '"'),
								A.systemId && (t += '"' + A.systemId + '"'),
								(t += '>')),
							t
						)
					},
					PC = function(A, t, e) {
						A &&
							A.defaultView &&
							(t !== A.defaultView.pageXOffset ||
								e !== A.defaultView.pageYOffset) &&
							A.defaultView.scrollTo(t, e)
					},
					zC = function(A) {
						var t = A[0],
							e = A[1],
							g = A[2]
						;(t.scrollLeft = e), (t.scrollTop = g)
					},
					GC = '___html2canvas___pseudoelement_before',
					VC = '___html2canvas___pseudoelement_after',
					XC = function(A) {
						JC(
							A,
							'.' +
								GC +
								':before{\n    content: "" !important;\n    display: none !important;\n}\n         .' +
								VC +
								':after{\n    content: "" !important;\n    display: none !important;\n}'
						)
					},
					JC = function(A, t) {
						var e = A.ownerDocument
						if (e) {
							var g = e.createElement('style')
							;(g.textContent = t), A.appendChild(g)
						}
					}
				!(function(A) {
					;(A[(A.VECTOR = 0)] = 'VECTOR'),
						(A[(A.BEZIER_CURVE = 1)] = 'BEZIER_CURVE')
				})(LC || (LC = {}))
				var WC,
					jC = function(A, t) {
						return (
							A.length === t.length &&
							A.some(function(A, e) {
								return A === t[e]
							})
						)
					},
					YC = (function() {
						function A(A, t) {
							;(this.type = LC.VECTOR), (this.x = A), (this.y = t)
						}
						return (
							(A.prototype.add = function(t, e) {
								return new A(this.x + t, this.y + e)
							}),
							A
						)
					})(),
					qC = function(A, t, e) {
						return new YC(
							A.x + (t.x - A.x) * e,
							A.y + (t.y - A.y) * e
						)
					},
					ZC = (function() {
						function A(A, t, e, g) {
							;(this.type = LC.BEZIER_CURVE),
								(this.start = A),
								(this.startControl = t),
								(this.endControl = e),
								(this.end = g)
						}
						return (
							(A.prototype.subdivide = function(t, e) {
								var g = qC(this.start, this.startControl, t),
									C = qC(
										this.startControl,
										this.endControl,
										t
									),
									n = qC(this.endControl, this.end, t),
									I = qC(g, C, t),
									r = qC(C, n, t),
									o = qC(I, r, t)
								return e
									? new A(this.start, g, I, o)
									: new A(o, r, n, this.end)
							}),
							(A.prototype.add = function(t, e) {
								return new A(
									this.start.add(t, e),
									this.startControl.add(t, e),
									this.endControl.add(t, e),
									this.end.add(t, e)
								)
							}),
							(A.prototype.reverse = function() {
								return new A(
									this.end,
									this.endControl,
									this.startControl,
									this.start
								)
							}),
							A
						)
					})(),
					$C = function(A) {
						return A.type === LC.BEZIER_CURVE
					},
					An = function(A) {
						var t = A.styles,
							e = A.bounds,
							g = WA(t.borderTopLeftRadius, e.width, e.height),
							C = g[0],
							n = g[1],
							I = WA(t.borderTopRightRadius, e.width, e.height),
							r = I[0],
							o = I[1],
							i = WA(
								t.borderBottomRightRadius,
								e.width,
								e.height
							),
							s = i[0],
							a = i[1],
							c = WA(t.borderBottomLeftRadius, e.width, e.height),
							l = c[0],
							u = c[1],
							p = []
						p.push((C + r) / e.width),
							p.push((l + s) / e.width),
							p.push((n + u) / e.height),
							p.push((o + a) / e.height)
						var h = Math.max.apply(Math, p)
						h > 1 &&
							((C /= h),
							(n /= h),
							(r /= h),
							(o /= h),
							(s /= h),
							(a /= h),
							(l /= h),
							(u /= h))
						var B = e.width - r,
							d = e.height - a,
							f = e.width - s,
							w = e.height - u,
							Q = t.borderTopWidth,
							m = t.borderRightWidth,
							U = t.borderBottomWidth,
							E = t.borderLeftWidth,
							v = jA(t.paddingTop, A.bounds.width),
							b = jA(t.paddingRight, A.bounds.width),
							F = jA(t.paddingBottom, A.bounds.width),
							x = jA(t.paddingLeft, A.bounds.width)
						;(this.topLeftBorderBox =
							C > 0 || n > 0
								? tn(e.left, e.top, C, n, WC.TOP_LEFT)
								: new YC(e.left, e.top)),
							(this.topRightBorderBox =
								r > 0 || o > 0
									? tn(e.left + B, e.top, r, o, WC.TOP_RIGHT)
									: new YC(e.left + e.width, e.top)),
							(this.bottomRightBorderBox =
								s > 0 || a > 0
									? tn(
											e.left + f,
											e.top + d,
											s,
											a,
											WC.BOTTOM_RIGHT
									  )
									: new YC(
											e.left + e.width,
											e.top + e.height
									  )),
							(this.bottomLeftBorderBox =
								l > 0 || u > 0
									? tn(
											e.left,
											e.top + w,
											l,
											u,
											WC.BOTTOM_LEFT
									  )
									: new YC(e.left, e.top + e.height)),
							(this.topLeftPaddingBox =
								C > 0 || n > 0
									? tn(
											e.left + E,
											e.top + Q,
											Math.max(0, C - E),
											Math.max(0, n - Q),
											WC.TOP_LEFT
									  )
									: new YC(e.left + E, e.top + Q)),
							(this.topRightPaddingBox =
								r > 0 || o > 0
									? tn(
											e.left + Math.min(B, e.width + E),
											e.top + Q,
											B > e.width + E ? 0 : r - E,
											o - Q,
											WC.TOP_RIGHT
									  )
									: new YC(e.left + e.width - m, e.top + Q)),
							(this.bottomRightPaddingBox =
								s > 0 || a > 0
									? tn(
											e.left + Math.min(f, e.width - E),
											e.top + Math.min(d, e.height + Q),
											Math.max(0, s - m),
											a - U,
											WC.BOTTOM_RIGHT
									  )
									: new YC(
											e.left + e.width - m,
											e.top + e.height - U
									  )),
							(this.bottomLeftPaddingBox =
								l > 0 || u > 0
									? tn(
											e.left + E,
											e.top + w,
											Math.max(0, l - E),
											u - U,
											WC.BOTTOM_LEFT
									  )
									: new YC(e.left + E, e.top + e.height - U)),
							(this.topLeftContentBox =
								C > 0 || n > 0
									? tn(
											e.left + E + x,
											e.top + Q + v,
											Math.max(0, C - (E + x)),
											Math.max(0, n - (Q + v)),
											WC.TOP_LEFT
									  )
									: new YC(e.left + E + x, e.top + Q + v)),
							(this.topRightContentBox =
								r > 0 || o > 0
									? tn(
											e.left +
												Math.min(B, e.width + E + x),
											e.top + Q + v,
											B > e.width + E + x ? 0 : r - E + x,
											o - (Q + v),
											WC.TOP_RIGHT
									  )
									: new YC(
											e.left + e.width - (m + b),
											e.top + Q + v
									  )),
							(this.bottomRightContentBox =
								s > 0 || a > 0
									? tn(
											e.left +
												Math.min(f, e.width - (E + x)),
											e.top +
												Math.min(d, e.height + Q + v),
											Math.max(0, s - (m + b)),
											a - (U + F),
											WC.BOTTOM_RIGHT
									  )
									: new YC(
											e.left + e.width - (m + b),
											e.top + e.height - (U + F)
									  )),
							(this.bottomLeftContentBox =
								l > 0 || u > 0
									? tn(
											e.left + E + x,
											e.top + w,
											Math.max(0, l - (E + x)),
											u - (U + F),
											WC.BOTTOM_LEFT
									  )
									: new YC(
											e.left + E + x,
											e.top + e.height - (U + F)
									  ))
					}
				!(function(A) {
					;(A[(A.TOP_LEFT = 0)] = 'TOP_LEFT'),
						(A[(A.TOP_RIGHT = 1)] = 'TOP_RIGHT'),
						(A[(A.BOTTOM_RIGHT = 2)] = 'BOTTOM_RIGHT'),
						(A[(A.BOTTOM_LEFT = 3)] = 'BOTTOM_LEFT')
				})(WC || (WC = {}))
				var tn = function(A, t, e, g, C) {
						var n = ((Math.sqrt(2) - 1) / 3) * 4,
							I = e * n,
							r = g * n,
							o = A + e,
							i = t + g
						switch (C) {
							case WC.TOP_LEFT:
								return new ZC(
									new YC(A, i),
									new YC(A, i - r),
									new YC(o - I, t),
									new YC(o, t)
								)
							case WC.TOP_RIGHT:
								return new ZC(
									new YC(A, t),
									new YC(A + I, t),
									new YC(o, i - r),
									new YC(o, i)
								)
							case WC.BOTTOM_RIGHT:
								return new ZC(
									new YC(o, t),
									new YC(o, t + r),
									new YC(A + I, i),
									new YC(A, i)
								)
							case WC.BOTTOM_LEFT:
							default:
								return new ZC(
									new YC(o, i),
									new YC(o - I, i),
									new YC(A, t + r),
									new YC(A, t)
								)
						}
					},
					en = function(A) {
						return [
							A.topLeftBorderBox,
							A.topRightBorderBox,
							A.bottomRightBorderBox,
							A.bottomLeftBorderBox
						]
					},
					gn = function(A) {
						return [
							A.topLeftPaddingBox,
							A.topRightPaddingBox,
							A.bottomRightPaddingBox,
							A.bottomLeftPaddingBox
						]
					},
					Cn = function(A, t, e) {
						;(this.type = 0),
							(this.offsetX = A),
							(this.offsetY = t),
							(this.matrix = e),
							(this.target = 6)
					},
					nn = function(A, t) {
						;(this.type = 1), (this.target = t), (this.path = A)
					},
					In = function(A) {
						;(this.element = A),
							(this.inlineLevel = []),
							(this.nonInlineLevel = []),
							(this.negativeZIndex = []),
							(this.zeroOrAutoZIndexOrTransformedOrOpacity = []),
							(this.positiveZIndex = []),
							(this.nonPositionedFloats = []),
							(this.nonPositionedInlineLevel = [])
					},
					rn = (function() {
						function A(A, t) {
							if (
								((this.container = A),
								(this.effects = t.slice(0)),
								(this.curves = new An(A)),
								null !== A.styles.transform)
							) {
								var e =
										A.bounds.left +
										A.styles.transformOrigin[0].number,
									g =
										A.bounds.top +
										A.styles.transformOrigin[1].number,
									C = A.styles.transform
								this.effects.push(new Cn(e, g, C))
							}
							if (A.styles.overflowX !== ye.VISIBLE) {
								var n = en(this.curves),
									I = gn(this.curves)
								jC(n, I)
									? this.effects.push(new nn(n, 6))
									: (this.effects.push(new nn(n, 2)),
									  this.effects.push(new nn(I, 4)))
							}
						}
						return (
							(A.prototype.getParentEffects = function() {
								var A = this.effects.slice(0)
								if (
									this.container.styles.overflowX !==
									ye.VISIBLE
								) {
									var t = en(this.curves),
										e = gn(this.curves)
									jC(t, e) || A.push(new nn(e, 6))
								}
								return A
							}),
							A
						)
					})(),
					on = function(A, t, e, g) {
						A.container.elements.forEach(function(C) {
							var n = fg(C.flags, 4),
								I = fg(C.flags, 2),
								r = new rn(C, A.getParentEffects())
							fg(C.styles.display, 2048) && g.push(r)
							var o = fg(C.flags, 8) ? [] : g
							if (n || I) {
								var i = n || C.styles.isPositioned() ? e : t,
									s = new In(r)
								if (
									C.styles.isPositioned() ||
									C.styles.opacity < 1 ||
									C.styles.isTransformed()
								) {
									var a = C.styles.zIndex.order
									if (a < 0) {
										var c = 0
										i.negativeZIndex.some(function(A, t) {
											return (
												a >
													A.element.container.styles
														.zIndex.order &&
												((c = t), !0)
											)
										}),
											i.negativeZIndex.splice(c, 0, s)
									} else if (a > 0) {
										var l = 0
										i.positiveZIndex.some(function(A, t) {
											return (
												a >
													A.element.container.styles
														.zIndex.order &&
												((l = t + 1), !0)
											)
										}),
											i.positiveZIndex.splice(l, 0, s)
									} else
										i.zeroOrAutoZIndexOrTransformedOrOpacity.push(
											s
										)
								} else
									C.styles.isFloating()
										? i.nonPositionedFloats.push(s)
										: i.nonPositionedInlineLevel.push(s)
								on(r, s, n ? s : e, o)
							} else C.styles.isInlineLevel() ? t.inlineLevel.push(r) : t.nonInlineLevel.push(r), on(r, t, e, o)
							fg(C.flags, 8) && sn(C, o)
						})
					},
					sn = function(A, t) {
						for (
							var e = A instanceof Vg ? A.start : 1,
								g = A instanceof Vg && A.reversed,
								C = 0;
							C < t.length;
							C++
						) {
							var n = t[C]
							n.container instanceof Gg &&
								'number' == typeof n.container.value &&
								0 !== n.container.value &&
								(e = n.container.value),
								(n.listValue = kC(
									e,
									n.container.styles.listStyleType,
									!0
								)),
								(e += g ? -1 : 1)
						}
					},
					an = function(A, t, e, g) {
						var C = []
						return (
							$C(A) ? C.push(A.subdivide(0.5, !1)) : C.push(A),
							$C(e) ? C.push(e.subdivide(0.5, !0)) : C.push(e),
							$C(g)
								? C.push(g.subdivide(0.5, !0).reverse())
								: C.push(g),
							$C(t)
								? C.push(t.subdivide(0.5, !1).reverse())
								: C.push(t),
							C
						)
					},
					cn = function(A) {
						var t = A.bounds,
							e = A.styles
						return t.add(
							e.borderLeftWidth,
							e.borderTopWidth,
							-(e.borderRightWidth + e.borderLeftWidth),
							-(e.borderTopWidth + e.borderBottomWidth)
						)
					},
					ln = function(A) {
						var t = A.styles,
							e = A.bounds,
							g = jA(t.paddingLeft, e.width),
							C = jA(t.paddingRight, e.width),
							n = jA(t.paddingTop, e.width),
							I = jA(t.paddingBottom, e.width)
						return e.add(
							g + t.borderLeftWidth,
							n + t.borderTopWidth,
							-(t.borderRightWidth + t.borderLeftWidth + g + C),
							-(t.borderTopWidth + t.borderBottomWidth + n + I)
						)
					},
					un = function(A, t, e) {
						var g,
							C,
							n =
								((g = dn(A.styles.backgroundOrigin, t)),
								(C = A),
								0 === g ? C.bounds : 2 === g ? ln(C) : cn(C)),
							I = (function(A, t) {
								return A === ot.BORDER_BOX
									? t.bounds
									: A === ot.CONTENT_BOX
									? ln(t)
									: cn(t)
							})(dn(A.styles.backgroundClip, t), A),
							r = Bn(dn(A.styles.backgroundSize, t), e, n),
							o = r[0],
							i = r[1],
							s = WA(
								dn(A.styles.backgroundPosition, t),
								n.width - o,
								n.height - i
							),
							a = fn(
								dn(A.styles.backgroundRepeat, t),
								s,
								r,
								n,
								I
							),
							c = Math.round(n.left + s[0]),
							l = Math.round(n.top + s[1])
						return [a, c, l, o, i]
					},
					pn = function(A) {
						return kA(A) && A.value === Vt.AUTO
					},
					hn = function(A) {
						return 'number' == typeof A
					},
					Bn = function(A, t, e) {
						var g = t[0],
							C = t[1],
							n = t[2],
							I = A[0],
							r = A[1]
						if (zA(I) && r && zA(r))
							return [jA(I, e.width), jA(r, e.height)]
						var o = hn(n)
						if (
							kA(I) &&
							(I.value === Vt.CONTAIN || I.value === Vt.COVER)
						) {
							if (hn(n)) {
								var i = e.width / e.height
								return i < n != (I.value === Vt.COVER)
									? [e.width, e.width / n]
									: [e.height * n, e.height]
							}
							return [e.width, e.height]
						}
						var s = hn(g),
							a = hn(C),
							c = s || a
						if (pn(I) && (!r || pn(r))) {
							if (s && a) return [g, C]
							if (!o && !c) return [e.width, e.height]
							if (c && o) {
								var l = s ? g : C * n,
									u = a ? C : g / n
								return [l, u]
							}
							var p = s ? g : e.width,
								h = a ? C : e.height
							return [p, h]
						}
						if (o) {
							var B = 0,
								d = 0
							return (
								zA(I)
									? (B = jA(I, e.width))
									: zA(r) && (d = jA(r, e.height)),
								pn(I)
									? (B = d * n)
									: (r && !pn(r)) || (d = B / n),
								[B, d]
							)
						}
						var f = null,
							w = null
						if (
							(zA(I)
								? (f = jA(I, e.width))
								: r && zA(r) && (w = jA(r, e.height)),
							null === f ||
								(r && !pn(r)) ||
								(w = s && a ? (f / g) * C : e.height),
							null !== w &&
								pn(I) &&
								(f = s && a ? (w / C) * g : e.width),
							null !== f && null !== w)
						)
							return [f, w]
						throw new Error(
							'Unable to calculate background-size for element'
						)
					},
					dn = function(A, t) {
						var e = A[t]
						return void 0 === e ? A[0] : e
					},
					fn = function(A, t, e, g, C) {
						var n = t[0],
							I = t[1],
							r = e[0],
							o = e[1]
						switch (A) {
							case Dt.REPEAT_X:
								return [
									new YC(
										Math.round(g.left),
										Math.round(g.top + I)
									),
									new YC(
										Math.round(g.left + g.width),
										Math.round(g.top + I)
									),
									new YC(
										Math.round(g.left + g.width),
										Math.round(o + g.top + I)
									),
									new YC(
										Math.round(g.left),
										Math.round(o + g.top + I)
									)
								]
							case Dt.REPEAT_Y:
								return [
									new YC(
										Math.round(g.left + n),
										Math.round(g.top)
									),
									new YC(
										Math.round(g.left + n + r),
										Math.round(g.top)
									),
									new YC(
										Math.round(g.left + n + r),
										Math.round(g.height + g.top)
									),
									new YC(
										Math.round(g.left + n),
										Math.round(g.height + g.top)
									)
								]
							case Dt.NO_REPEAT:
								return [
									new YC(
										Math.round(g.left + n),
										Math.round(g.top + I)
									),
									new YC(
										Math.round(g.left + n + r),
										Math.round(g.top + I)
									),
									new YC(
										Math.round(g.left + n + r),
										Math.round(g.top + I + o)
									),
									new YC(
										Math.round(g.left + n),
										Math.round(g.top + I + o)
									)
								]
							default:
								return [
									new YC(
										Math.round(C.left),
										Math.round(C.top)
									),
									new YC(
										Math.round(C.left + C.width),
										Math.round(C.top)
									),
									new YC(
										Math.round(C.left + C.width),
										Math.round(C.height + C.top)
									),
									new YC(
										Math.round(C.left),
										Math.round(C.height + C.top)
									)
								]
						}
					},
					wn = (function() {
						function A(A) {
							;(this._data = {}), (this._document = A)
						}
						return (
							(A.prototype.parseMetrics = function(A, t) {
								var e = this._document.createElement('div'),
									g = this._document.createElement('img'),
									C = this._document.createElement('span'),
									n = this._document.body
								;(e.style.visibility = 'hidden'),
									(e.style.fontFamily = A),
									(e.style.fontSize = t),
									(e.style.margin = '0'),
									(e.style.padding = '0'),
									n.appendChild(e),
									(g.src =
										'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'),
									(g.width = 1),
									(g.height = 1),
									(g.style.margin = '0'),
									(g.style.padding = '0'),
									(g.style.verticalAlign = 'baseline'),
									(C.style.fontFamily = A),
									(C.style.fontSize = t),
									(C.style.margin = '0'),
									(C.style.padding = '0'),
									C.appendChild(
										this._document.createTextNode(
											'Hidden Text'
										)
									),
									e.appendChild(C),
									e.appendChild(g)
								var I = g.offsetTop - C.offsetTop + 2
								e.removeChild(C),
									e.appendChild(
										this._document.createTextNode(
											'Hidden Text'
										)
									),
									(e.style.lineHeight = 'normal'),
									(g.style.verticalAlign = 'super')
								var r = g.offsetTop - e.offsetTop + 2
								return (
									n.removeChild(e), { baseline: I, middle: r }
								)
							}),
							(A.prototype.getMetrics = function(A, t) {
								var e = A + ' ' + t
								return (
									void 0 === this._data[e] &&
										(this._data[e] = this.parseMetrics(
											A,
											t
										)),
									this._data[e]
								)
							}),
							A
						)
					})(),
					Qn = (function() {
						function A(A) {
							;(this._activeEffects = []),
								(this.canvas = A.canvas
									? A.canvas
									: document.createElement('canvas')),
								(this.ctx = this.canvas.getContext('2d')),
								(this.options = A),
								(this.canvas.width = Math.floor(
									A.width * A.scale
								)),
								(this.canvas.height = Math.floor(
									A.height * A.scale
								)),
								(this.canvas.style.width = A.width + 'px'),
								(this.canvas.style.height = A.height + 'px'),
								(this.fontMetrics = new wn(document)),
								this.ctx.scale(
									this.options.scale,
									this.options.scale
								),
								this.ctx.translate(
									-A.x + A.scrollX,
									-A.y + A.scrollY
								),
								(this.ctx.textBaseline = 'bottom'),
								(this._activeEffects = []),
								Ft.getInstance(A.id).debug(
									'Canvas renderer initialized (' +
										A.width +
										'x' +
										A.height +
										' at ' +
										A.x +
										',' +
										A.y +
										') with scale ' +
										A.scale
								)
						}
						return (
							(A.prototype.applyEffects = function(A, t) {
								for (var e = this; this._activeEffects.length; )
									this.popEffect()
								A.filter(function(A) {
									return fg(A.target, t)
								}).forEach(function(A) {
									return e.applyEffect(A)
								})
							}),
							(A.prototype.applyEffect = function(A) {
								this.ctx.save(),
									(function(A) {
										return 0 === A.type
									})(A) &&
										(this.ctx.translate(
											A.offsetX,
											A.offsetY
										),
										this.ctx.transform(
											A.matrix[0],
											A.matrix[1],
											A.matrix[2],
											A.matrix[3],
											A.matrix[4],
											A.matrix[5]
										),
										this.ctx.translate(
											-A.offsetX,
											-A.offsetY
										)),
									(function(A) {
										return 1 === A.type
									})(A) &&
										(this.path(A.path), this.ctx.clip()),
									this._activeEffects.push(A)
							}),
							(A.prototype.popEffect = function() {
								this._activeEffects.pop(), this.ctx.restore()
							}),
							(A.prototype.renderStack = function(A) {
								return g(this, void 0, void 0, function() {
									var t
									return C(this, function(e) {
										switch (e.label) {
											case 0:
												return (t =
													A.element.container
														.styles).isVisible()
													? ((this.ctx.globalAlpha =
															t.opacity),
													  [
															4,
															this.renderStackContent(
																A
															)
													  ])
													: [3, 2]
											case 1:
												e.sent(), (e.label = 2)
											case 2:
												return [2]
										}
									})
								})
							}),
							(A.prototype.renderNode = function(A) {
								return g(this, void 0, void 0, function() {
									return C(this, function(t) {
										switch (t.label) {
											case 0:
												return A.container.styles.isVisible()
													? [
															4,
															this.renderNodeBackgroundAndBorders(
																A
															)
													  ]
													: [3, 3]
											case 1:
												return (
													t.sent(),
													[
														4,
														this.renderNodeContent(
															A
														)
													]
												)
											case 2:
												t.sent(), (t.label = 3)
											case 3:
												return [2]
										}
									})
								})
							}),
							(A.prototype.renderTextWithLetterSpacing = function(
								A,
								t
							) {
								var e = this
								if (0 === t)
									this.ctx.fillText(
										A.text,
										A.bounds.left,
										A.bounds.top + A.bounds.height
									)
								else {
									var g = r(A.text).map(function(A) {
										return o(A)
									})
									g.reduce(function(t, g) {
										return (
											e.ctx.fillText(
												g,
												t,
												A.bounds.top + A.bounds.height
											),
											t + e.ctx.measureText(g).width
										)
									}, A.bounds.left)
								}
							}),
							(A.prototype.createFontStyle = function(A) {
								var t = A.fontVariant
										.filter(function(A) {
											return (
												'normal' === A ||
												'small-caps' === A
											)
										})
										.join(''),
									e = A.fontFamily.join(', '),
									g = TA(A.fontSize)
										? '' +
										  A.fontSize.number +
										  A.fontSize.unit
										: A.fontSize.number + 'px'
								return [
									[A.fontStyle, t, A.fontWeight, g, e].join(
										' '
									),
									e,
									g
								]
							}),
							(A.prototype.renderTextNode = function(A, t) {
								return g(this, void 0, void 0, function() {
									var e,
										g,
										n,
										I,
										r = this
									return C(this, function(C) {
										return (
											(e = this.createFontStyle(t)),
											(g = e[0]),
											(n = e[1]),
											(I = e[2]),
											(this.ctx.font = g),
											A.textBounds.forEach(function(A) {
												;(r.ctx.fillStyle = et(
													t.color
												)),
													r.renderTextWithLetterSpacing(
														A,
														t.letterSpacing
													)
												var e = t.textShadow
												e.length &&
													A.text.trim().length &&
													(e
														.slice(0)
														.reverse()
														.forEach(function(t) {
															;(r.ctx.shadowColor = et(
																t.color
															)),
																(r.ctx.shadowOffsetX =
																	t.offsetX
																		.number *
																	r.options
																		.scale),
																(r.ctx.shadowOffsetY =
																	t.offsetY
																		.number *
																	r.options
																		.scale),
																(r.ctx.shadowBlur =
																	t.blur.number),
																r.ctx.fillText(
																	A.text,
																	A.bounds
																		.left,
																	A.bounds
																		.top +
																		A.bounds
																			.height
																)
														}),
													(r.ctx.shadowColor = ''),
													(r.ctx.shadowOffsetX = 0),
													(r.ctx.shadowOffsetY = 0),
													(r.ctx.shadowBlur = 0)),
													t.textDecorationLine
														.length &&
														((r.ctx.fillStyle = et(
															t.textDecorationColor ||
																t.color
														)),
														t.textDecorationLine.forEach(
															function(t) {
																switch (t) {
																	case 1:
																		var e = r.fontMetrics.getMetrics(
																			n,
																			I
																		)
																			.baseline
																		r.ctx.fillRect(
																			A
																				.bounds
																				.left,
																			Math.round(
																				A
																					.bounds
																					.top +
																					e
																			),
																			A
																				.bounds
																				.width,
																			1
																		)
																		break
																	case 2:
																		r.ctx.fillRect(
																			A
																				.bounds
																				.left,
																			Math.round(
																				A
																					.bounds
																					.top
																			),
																			A
																				.bounds
																				.width,
																			1
																		)
																		break
																	case 3:
																		var g = r.fontMetrics.getMetrics(
																			n,
																			I
																		).middle
																		r.ctx.fillRect(
																			A
																				.bounds
																				.left,
																			Math.ceil(
																				A
																					.bounds
																					.top +
																					g
																			),
																			A
																				.bounds
																				.width,
																			1
																		)
																}
															}
														))
											}),
											[2]
										)
									})
								})
							}),
							(A.prototype.renderReplacedElement = function(
								A,
								t,
								e
							) {
								if (
									e &&
									A.intrinsicWidth > 0 &&
									A.intrinsicHeight > 0
								) {
									var g = ln(A),
										C = gn(t)
									this.path(C),
										this.ctx.save(),
										this.ctx.clip(),
										this.ctx.drawImage(
											e,
											0,
											0,
											A.intrinsicWidth,
											A.intrinsicHeight,
											g.left,
											g.top,
											g.width,
											g.height
										),
										this.ctx.restore()
								}
							}),
							(A.prototype.renderNodeContent = function(t) {
								return g(this, void 0, void 0, function() {
									var e, g, I, r, o, i, s, a, l, u, p, h, B, d
									return C(this, function(C) {
										switch (C.label) {
											case 0:
												this.applyEffects(t.effects, 4),
													(e = t.container),
													(g = t.curves),
													(I = e.styles),
													(r = 0),
													(o = e.textNodes),
													(C.label = 1)
											case 1:
												return r < o.length
													? ((i = o[r]),
													  [
															4,
															this.renderTextNode(
																i,
																I
															)
													  ])
													: [3, 4]
											case 2:
												C.sent(), (C.label = 3)
											case 3:
												return r++, [3, 1]
											case 4:
												if (!(e instanceof Mg))
													return [3, 8]
												C.label = 5
											case 5:
												return (
													C.trys.push([5, 7, , 8]),
													[
														4,
														this.options.cache.match(
															e.src
														)
													]
												)
											case 6:
												return (
													(h = C.sent()),
													this.renderReplacedElement(
														e,
														g,
														h
													),
													[3, 8]
												)
											case 7:
												return (
													C.sent(),
													Ft.getInstance(
														this.options.id
													).error(
														'Error loading image ' +
															e.src
													),
													[3, 8]
												)
											case 8:
												if (
													(e instanceof Pg &&
														this.renderReplacedElement(
															e,
															g,
															e.canvas
														),
													!(e instanceof zg))
												)
													return [3, 12]
												C.label = 9
											case 9:
												return (
													C.trys.push([9, 11, , 12]),
													[
														4,
														this.options.cache.match(
															e.svg
														)
													]
												)
											case 10:
												return (
													(h = C.sent()),
													this.renderReplacedElement(
														e,
														g,
														h
													),
													[3, 12]
												)
											case 11:
												return (
													C.sent(),
													Ft.getInstance(
														this.options.id
													).error(
														'Error loading svg ' +
															e.svg.substring(
																0,
																255
															)
													),
													[3, 12]
												)
											case 12:
												return e instanceof gC && e.tree
													? [
															4,
															new A({
																id: this.options
																	.id,
																scale: this
																	.options
																	.scale,
																backgroundColor:
																	e.backgroundColor,
																x: 0,
																y: 0,
																scrollX: 0,
																scrollY: 0,
																width: e.width,
																height:
																	e.height,
																cache: this
																	.options
																	.cache,
																windowWidth:
																	e.width,
																windowHeight:
																	e.height
															}).render(e.tree)
													  ]
													: [3, 14]
											case 13:
												;(s = C.sent()),
													this.ctx.drawImage(
														s,
														0,
														0,
														e.width,
														e.width,
														e.bounds.left,
														e.bounds.top,
														e.bounds.width,
														e.bounds.height
													),
													(C.label = 14)
											case 14:
												if (
													(e instanceof $g &&
														((a = Math.min(
															e.bounds.width,
															e.bounds.height
														)),
														e.type === Yg
															? e.checked &&
															  (this.ctx.save(),
															  this.path([
																	new YC(
																		e.bounds
																			.left +
																			0.39363 *
																				a,
																		e.bounds
																			.top +
																			0.79 *
																				a
																	),
																	new YC(
																		e.bounds
																			.left +
																			0.16 *
																				a,
																		e.bounds
																			.top +
																			0.5549 *
																				a
																	),
																	new YC(
																		e.bounds
																			.left +
																			0.27347 *
																				a,
																		e.bounds
																			.top +
																			0.44071 *
																				a
																	),
																	new YC(
																		e.bounds
																			.left +
																			0.39694 *
																				a,
																		e.bounds
																			.top +
																			0.5649 *
																				a
																	),
																	new YC(
																		e.bounds
																			.left +
																			0.72983 *
																				a,
																		e.bounds
																			.top +
																			0.23 *
																				a
																	),
																	new YC(
																		e.bounds
																			.left +
																			0.84 *
																				a,
																		e.bounds
																			.top +
																			0.34085 *
																				a
																	),
																	new YC(
																		e.bounds
																			.left +
																			0.39363 *
																				a,
																		e.bounds
																			.top +
																			0.79 *
																				a
																	)
															  ]),
															  (this.ctx.fillStyle = et(
																	707406591
															  )),
															  this.ctx.fill(),
															  this.ctx.restore())
															: e.type === qg &&
															  e.checked &&
															  (this.ctx.save(),
															  this.ctx.beginPath(),
															  this.ctx.arc(
																	e.bounds
																		.left +
																		a / 2,
																	e.bounds
																		.top +
																		a / 2,
																	a / 4,
																	0,
																	2 * Math.PI,
																	!0
															  ),
															  (this.ctx.fillStyle = et(
																	707406591
															  )),
															  this.ctx.fill(),
															  this.ctx.restore())),
													mn(e) && e.value.length)
												) {
													switch (
														((this.ctx.font = this.createFontStyle(
															I
														)[0]),
														(this.ctx.fillStyle = et(
															I.color
														)),
														(this.ctx.textBaseline =
															'middle'),
														(this.ctx.textAlign = En(
															e.styles.textAlign
														)),
														(d = ln(e)),
														(l = 0),
														e.styles.textAlign)
													) {
														case De.CENTER:
															l += d.width / 2
															break
														case De.RIGHT:
															l += d.width
													}
													;(u = d.add(
														l,
														0,
														0,
														-d.height / 2 + 1
													)),
														this.ctx.save(),
														this.path([
															new YC(
																d.left,
																d.top
															),
															new YC(
																d.left +
																	d.width,
																d.top
															),
															new YC(
																d.left +
																	d.width,
																d.top + d.height
															),
															new YC(
																d.left,
																d.top + d.height
															)
														]),
														this.ctx.clip(),
														this.renderTextWithLetterSpacing(
															new Ng(e.value, u),
															I.letterSpacing
														),
														this.ctx.restore(),
														(this.ctx.textBaseline =
															'bottom'),
														(this.ctx.textAlign =
															'left')
												}
												if (!fg(e.styles.display, 2048))
													return [3, 20]
												if (
													null ===
													e.styles.listStyleImage
												)
													return [3, 19]
												if (
													(p =
														e.styles.listStyleImage)
														.type !== ct.URL
												)
													return [3, 18]
												;(h = void 0),
													(B = p.url),
													(C.label = 15)
											case 15:
												return (
													C.trys.push([15, 17, , 18]),
													[
														4,
														this.options.cache.match(
															B
														)
													]
												)
											case 16:
												return (
													(h = C.sent()),
													this.ctx.drawImage(
														h,
														e.bounds.left -
															(h.width + 10),
														e.bounds.top
													),
													[3, 18]
												)
											case 17:
												return (
													C.sent(),
													Ft.getInstance(
														this.options.id
													).error(
														'Error loading list-style-image ' +
															B
													),
													[3, 18]
												)
											case 18:
												return [3, 20]
											case 19:
												t.listValue &&
													e.styles.listStyleType !==
														xe.NONE &&
													((this.ctx.font = this.createFontStyle(
														I
													)[0]),
													(this.ctx.fillStyle = et(
														I.color
													)),
													(this.ctx.textBaseline =
														'middle'),
													(this.ctx.textAlign =
														'right'),
													(d = new n(
														e.bounds.left,
														e.bounds.top +
															jA(
																e.styles
																	.paddingTop,
																e.bounds.width
															),
														e.bounds.width,
														((f = I.lineHeight),
														(w = I.fontSize.number),
														(kA(f) &&
														'normal' === f.value
															? 1.2 * w
															: f.type ===
															  c.NUMBER_TOKEN
															? w * f.number
															: zA(f)
															? jA(f, w)
															: w) /
															2 +
															1)
													)),
													this.renderTextWithLetterSpacing(
														new Ng(t.listValue, d),
														I.letterSpacing
													),
													(this.ctx.textBaseline =
														'bottom'),
													(this.ctx.textAlign =
														'left')),
													(C.label = 20)
											case 20:
												return [2]
										}
										var f, w
									})
								})
							}),
							(A.prototype.renderStackContent = function(A) {
								return g(this, void 0, void 0, function() {
									var t,
										e,
										g,
										n,
										I,
										r,
										o,
										i,
										s,
										a,
										c,
										l,
										u,
										p,
										h
									return C(this, function(C) {
										switch (C.label) {
											case 0:
												return [
													4,
													this.renderNodeBackgroundAndBorders(
														A.element
													)
												]
											case 1:
												C.sent(),
													(t = 0),
													(e = A.negativeZIndex),
													(C.label = 2)
											case 2:
												return t < e.length
													? ((h = e[t]),
													  [4, this.renderStack(h)])
													: [3, 5]
											case 3:
												C.sent(), (C.label = 4)
											case 4:
												return t++, [3, 2]
											case 5:
												return [
													4,
													this.renderNodeContent(
														A.element
													)
												]
											case 6:
												C.sent(),
													(g = 0),
													(n = A.nonInlineLevel),
													(C.label = 7)
											case 7:
												return g < n.length
													? ((h = n[g]),
													  [4, this.renderNode(h)])
													: [3, 10]
											case 8:
												C.sent(), (C.label = 9)
											case 9:
												return g++, [3, 7]
											case 10:
												;(I = 0),
													(r = A.nonPositionedFloats),
													(C.label = 11)
											case 11:
												return I < r.length
													? ((h = r[I]),
													  [4, this.renderStack(h)])
													: [3, 14]
											case 12:
												C.sent(), (C.label = 13)
											case 13:
												return I++, [3, 11]
											case 14:
												;(o = 0),
													(i =
														A.nonPositionedInlineLevel),
													(C.label = 15)
											case 15:
												return o < i.length
													? ((h = i[o]),
													  [4, this.renderStack(h)])
													: [3, 18]
											case 16:
												C.sent(), (C.label = 17)
											case 17:
												return o++, [3, 15]
											case 18:
												;(s = 0),
													(a = A.inlineLevel),
													(C.label = 19)
											case 19:
												return s < a.length
													? ((h = a[s]),
													  [4, this.renderNode(h)])
													: [3, 22]
											case 20:
												C.sent(), (C.label = 21)
											case 21:
												return s++, [3, 19]
											case 22:
												;(c = 0),
													(l =
														A.zeroOrAutoZIndexOrTransformedOrOpacity),
													(C.label = 23)
											case 23:
												return c < l.length
													? ((h = l[c]),
													  [4, this.renderStack(h)])
													: [3, 26]
											case 24:
												C.sent(), (C.label = 25)
											case 25:
												return c++, [3, 23]
											case 26:
												;(u = 0),
													(p = A.positiveZIndex),
													(C.label = 27)
											case 27:
												return u < p.length
													? ((h = p[u]),
													  [4, this.renderStack(h)])
													: [3, 30]
											case 28:
												C.sent(), (C.label = 29)
											case 29:
												return u++, [3, 27]
											case 30:
												return [2]
										}
									})
								})
							}),
							(A.prototype.mask = function(A) {
								this.ctx.beginPath(),
									this.ctx.moveTo(0, 0),
									this.ctx.lineTo(this.canvas.width, 0),
									this.ctx.lineTo(
										this.canvas.width,
										this.canvas.height
									),
									this.ctx.lineTo(0, this.canvas.height),
									this.ctx.lineTo(0, 0),
									this.formatPath(A.slice(0).reverse()),
									this.ctx.closePath()
							}),
							(A.prototype.path = function(A) {
								this.ctx.beginPath(),
									this.formatPath(A),
									this.ctx.closePath()
							}),
							(A.prototype.formatPath = function(A) {
								var t = this
								A.forEach(function(A, e) {
									var g = $C(A) ? A.start : A
									0 === e
										? t.ctx.moveTo(g.x, g.y)
										: t.ctx.lineTo(g.x, g.y),
										$C(A) &&
											t.ctx.bezierCurveTo(
												A.startControl.x,
												A.startControl.y,
												A.endControl.x,
												A.endControl.y,
												A.end.x,
												A.end.y
											)
								})
							}),
							(A.prototype.renderRepeat = function(A, t, e, g) {
								this.path(A),
									(this.ctx.fillStyle = t),
									this.ctx.translate(e, g),
									this.ctx.fill(),
									this.ctx.translate(-e, -g)
							}),
							(A.prototype.resizeImage = function(A, t, e) {
								if (A.width === t && A.height === e) return A
								var g = this.canvas.ownerDocument.createElement(
									'canvas'
								)
								;(g.width = t), (g.height = e)
								var C = g.getContext('2d')
								return (
									C.drawImage(
										A,
										0,
										0,
										A.width,
										A.height,
										0,
										0,
										t,
										e
									),
									g
								)
							}),
							(A.prototype.renderBackgroundImage = function(A) {
								return g(this, void 0, void 0, function() {
									var t, e, g, n, I, r
									return C(this, function(o) {
										switch (o.label) {
											case 0:
												;(t =
													A.styles.backgroundImage
														.length - 1),
													(e = function(e) {
														var n,
															I,
															r,
															o,
															i,
															s,
															a,
															c,
															l,
															u,
															p,
															h,
															B,
															d,
															f,
															w,
															Q,
															m,
															U,
															E,
															v,
															b,
															F,
															x,
															H,
															y,
															N,
															K,
															T,
															_,
															k
														return C(this, function(
															C
														) {
															switch (C.label) {
																case 0:
																	if (
																		e.type !==
																		ct.URL
																	)
																		return [
																			3,
																			5
																		]
																	;(n = void 0),
																		(I =
																			e.url),
																		(C.label = 1)
																case 1:
																	return (
																		C.trys.push(
																			[
																				1,
																				3,
																				,
																				4
																			]
																		),
																		[
																			4,
																			g.options.cache.match(
																				I
																			)
																		]
																	)
																case 2:
																	return (
																		(n = C.sent()),
																		[3, 4]
																	)
																case 3:
																	return (
																		C.sent(),
																		Ft.getInstance(
																			g
																				.options
																				.id
																		).error(
																			'Error loading background-image ' +
																				I
																		),
																		[3, 4]
																	)
																case 4:
																	return (
																		n &&
																			((r = un(
																				A,
																				t,
																				[
																					n.width,
																					n.height,
																					n.width /
																						n.height
																				]
																			)),
																			(w =
																				r[0]),
																			(b =
																				r[1]),
																			(F =
																				r[2]),
																			(U =
																				r[3]),
																			(E =
																				r[4]),
																			(d = g.ctx.createPattern(
																				g.resizeImage(
																					n,
																					U,
																					E
																				),
																				'repeat'
																			)),
																			g.renderRepeat(
																				w,
																				d,
																				b,
																				F
																			)),
																		[3, 6]
																	)
																case 5:
																	e.type ===
																	ct.LINEAR_GRADIENT
																		? ((o = un(
																				A,
																				t,
																				[
																					null,
																					null,
																					null
																				]
																		  )),
																		  (w =
																				o[0]),
																		  (b =
																				o[1]),
																		  (F =
																				o[2]),
																		  (U =
																				o[3]),
																		  (E =
																				o[4]),
																		  (i = ft(
																				e.angle,
																				U,
																				E
																		  )),
																		  (s =
																				i[0]),
																		  (a =
																				i[1]),
																		  (c =
																				i[2]),
																		  (l =
																				i[3]),
																		  (u =
																				i[4]),
																		  ((p = document.createElement(
																				'canvas'
																		  )).width = U),
																		  (p.height = E),
																		  (h = p.getContext(
																				'2d'
																		  )),
																		  (B = h.createLinearGradient(
																				a,
																				l,
																				c,
																				u
																		  )),
																		  dt(
																				e.stops,
																				s
																		  ).forEach(
																				function(
																					A
																				) {
																					return B.addColorStop(
																						A.stop,
																						et(
																							A.color
																						)
																					)
																				}
																		  ),
																		  (h.fillStyle = B),
																		  h.fillRect(
																				0,
																				0,
																				U,
																				E
																		  ),
																		  (d = g.ctx.createPattern(
																				p,
																				'repeat'
																		  )),
																		  g.renderRepeat(
																				w,
																				d,
																				b,
																				F
																		  ))
																		: (function(
																				A
																		  ) {
																				return (
																					A.type ===
																					ct.RADIAL_GRADIENT
																				)
																		  })(
																				e
																		  ) &&
																		  ((f = un(
																				A,
																				t,
																				[
																					null,
																					null,
																					null
																				]
																		  )),
																		  (w =
																				f[0]),
																		  (Q =
																				f[1]),
																		  (m =
																				f[2]),
																		  (U =
																				f[3]),
																		  (E =
																				f[4]),
																		  (v =
																				0 ===
																				e
																					.position
																					.length
																					? [
																							XA
																					  ]
																					: e.position),
																		  (b = jA(
																				v[0],
																				U
																		  )),
																		  (F = jA(
																				v[
																					v.length -
																						1
																				],
																				E
																		  )),
																		  (x = (function(
																				A,
																				t,
																				e,
																				g,
																				C
																		  ) {
																				var n = 0,
																					I = 0
																				switch (
																					A.size
																				) {
																					case ut.CLOSEST_SIDE:
																						A.shape ===
																						lt.CIRCLE
																							? (n = I = Math.min(
																									Math.abs(
																										t
																									),
																									Math.abs(
																										t -
																											g
																									),
																									Math.abs(
																										e
																									),
																									Math.abs(
																										e -
																											C
																									)
																							  ))
																							: A.shape ===
																									lt.ELLIPSE &&
																							  ((n = Math.min(
																									Math.abs(
																										t
																									),
																									Math.abs(
																										t -
																											g
																									)
																							  )),
																							  (I = Math.min(
																									Math.abs(
																										e
																									),
																									Math.abs(
																										e -
																											C
																									)
																							  )))
																						break
																					case ut.CLOSEST_CORNER:
																						if (
																							A.shape ===
																							lt.CIRCLE
																						)
																							n = I = Math.min(
																								wt(
																									t,
																									e
																								),
																								wt(
																									t,
																									e -
																										C
																								),
																								wt(
																									t -
																										g,
																									e
																								),
																								wt(
																									t -
																										g,
																									e -
																										C
																								)
																							)
																						else if (
																							A.shape ===
																							lt.ELLIPSE
																						) {
																							var r =
																									Math.min(
																										Math.abs(
																											e
																										),
																										Math.abs(
																											e -
																												C
																										)
																									) /
																									Math.min(
																										Math.abs(
																											t
																										),
																										Math.abs(
																											t -
																												g
																										)
																									),
																								o = Qt(
																									g,
																									C,
																									t,
																									e,
																									!0
																								),
																								i =
																									o[0],
																								s =
																									o[1]
																							;(n = wt(
																								i -
																									t,
																								(s -
																									e) /
																									r
																							)),
																								(I =
																									r *
																									n)
																						}
																						break
																					case ut.FARTHEST_SIDE:
																						A.shape ===
																						lt.CIRCLE
																							? (n = I = Math.max(
																									Math.abs(
																										t
																									),
																									Math.abs(
																										t -
																											g
																									),
																									Math.abs(
																										e
																									),
																									Math.abs(
																										e -
																											C
																									)
																							  ))
																							: A.shape ===
																									lt.ELLIPSE &&
																							  ((n = Math.max(
																									Math.abs(
																										t
																									),
																									Math.abs(
																										t -
																											g
																									)
																							  )),
																							  (I = Math.max(
																									Math.abs(
																										e
																									),
																									Math.abs(
																										e -
																											C
																									)
																							  )))
																						break
																					case ut.FARTHEST_CORNER:
																						if (
																							A.shape ===
																							lt.CIRCLE
																						)
																							n = I = Math.max(
																								wt(
																									t,
																									e
																								),
																								wt(
																									t,
																									e -
																										C
																								),
																								wt(
																									t -
																										g,
																									e
																								),
																								wt(
																									t -
																										g,
																									e -
																										C
																								)
																							)
																						else if (
																							A.shape ===
																							lt.ELLIPSE
																						) {
																							var r =
																									Math.max(
																										Math.abs(
																											e
																										),
																										Math.abs(
																											e -
																												C
																										)
																									) /
																									Math.max(
																										Math.abs(
																											t
																										),
																										Math.abs(
																											t -
																												g
																										)
																									),
																								a = Qt(
																									g,
																									C,
																									t,
																									e,
																									!1
																								),
																								i =
																									a[0],
																								s =
																									a[1]
																							;(n = wt(
																								i -
																									t,
																								(s -
																									e) /
																									r
																							)),
																								(I =
																									r *
																									n)
																						}
																				}
																				return (
																					Array.isArray(
																						A.size
																					) &&
																						((n = jA(
																							A
																								.size[0],
																							g
																						)),
																						(I =
																							2 ===
																							A
																								.size
																								.length
																								? jA(
																										A
																											.size[1],
																										C
																								  )
																								: n)),
																					[
																						n,
																						I
																					]
																				)
																		  })(
																				e,
																				b,
																				F,
																				U,
																				E
																		  )),
																		  (H =
																				x[0]),
																		  (y =
																				x[1]),
																		  H >
																				0 &&
																				H >
																					0 &&
																				((N = g.ctx.createRadialGradient(
																					Q +
																						b,
																					m +
																						F,
																					0,
																					Q +
																						b,
																					m +
																						F,
																					H
																				)),
																				dt(
																					e.stops,
																					2 *
																						H
																				).forEach(
																					function(
																						A
																					) {
																						return N.addColorStop(
																							A.stop,
																							et(
																								A.color
																							)
																						)
																					}
																				),
																				g.path(
																					w
																				),
																				(g.ctx.fillStyle = N),
																				H !==
																				y
																					? ((K =
																							A
																								.bounds
																								.left +
																							0.5 *
																								A
																									.bounds
																									.width),
																					  (T =
																							A
																								.bounds
																								.top +
																							0.5 *
																								A
																									.bounds
																									.height),
																					  (k =
																							1 /
																							(_ =
																								y /
																								H)),
																					  g.ctx.save(),
																					  g.ctx.translate(
																							K,
																							T
																					  ),
																					  g.ctx.transform(
																							1,
																							0,
																							0,
																							_,
																							0,
																							0
																					  ),
																					  g.ctx.translate(
																							-K,
																							-T
																					  ),
																					  g.ctx.fillRect(
																							Q,
																							k *
																								(m -
																									T) +
																								T,
																							U,
																							E *
																								k
																					  ),
																					  g.ctx.restore())
																					: g.ctx.fill())),
																		(C.label = 6)
																case 6:
																	return (
																		t--, [2]
																	)
															}
														})
													}),
													(g = this),
													(n = 0),
													(I = A.styles.backgroundImage
														.slice(0)
														.reverse()),
													(o.label = 1)
											case 1:
												return n < I.length
													? ((r = I[n]), [5, e(r)])
													: [3, 4]
											case 2:
												o.sent(), (o.label = 3)
											case 3:
												return n++, [3, 1]
											case 4:
												return [2]
										}
									})
								})
							}),
							(A.prototype.renderBorder = function(A, t, e) {
								return g(this, void 0, void 0, function() {
									return C(this, function(g) {
										return (
											this.path(
												(function(A, t) {
													switch (t) {
														case 0:
															return an(
																A.topLeftBorderBox,
																A.topLeftPaddingBox,
																A.topRightBorderBox,
																A.topRightPaddingBox
															)
														case 1:
															return an(
																A.topRightBorderBox,
																A.topRightPaddingBox,
																A.bottomRightBorderBox,
																A.bottomRightPaddingBox
															)
														case 2:
															return an(
																A.bottomRightBorderBox,
																A.bottomRightPaddingBox,
																A.bottomLeftBorderBox,
																A.bottomLeftPaddingBox
															)
														case 3:
														default:
															return an(
																A.bottomLeftBorderBox,
																A.bottomLeftPaddingBox,
																A.topLeftBorderBox,
																A.topLeftPaddingBox
															)
													}
												})(e, t)
											),
											(this.ctx.fillStyle = et(A)),
											this.ctx.fill(),
											[2]
										)
									})
								})
							}),
							(A.prototype.renderNodeBackgroundAndBorders = function(
								A
							) {
								return g(this, void 0, void 0, function() {
									var t,
										e,
										g,
										n,
										I,
										r,
										o,
										i,
										s = this
									return C(this, function(C) {
										switch (C.label) {
											case 0:
												return (
													this.applyEffects(
														A.effects,
														2
													),
													(t = A.container.styles),
													(e =
														!tt(
															t.backgroundColor
														) ||
														t.backgroundImage
															.length),
													(g = [
														{
															style:
																t.borderTopStyle,
															color:
																t.borderTopColor
														},
														{
															style:
																t.borderRightStyle,
															color:
																t.borderRightColor
														},
														{
															style:
																t.borderBottomStyle,
															color:
																t.borderBottomColor
														},
														{
															style:
																t.borderLeftStyle,
															color:
																t.borderLeftColor
														}
													]),
													(n = Un(
														dn(t.backgroundClip, 0),
														A.curves
													)),
													e || t.boxShadow.length
														? (this.ctx.save(),
														  this.path(n),
														  this.ctx.clip(),
														  tt(
																t.backgroundColor
														  ) ||
																((this.ctx.fillStyle = et(
																	t.backgroundColor
																)),
																this.ctx.fill()),
														  [
																4,
																this.renderBackgroundImage(
																	A.container
																)
														  ])
														: [3, 2]
												)
											case 1:
												C.sent(),
													this.ctx.restore(),
													t.boxShadow
														.slice(0)
														.reverse()
														.forEach(function(t) {
															s.ctx.save()
															var e,
																g,
																C,
																n,
																I,
																r = en(
																	A.curves
																),
																o = t.inset
																	? 0
																	: 1e4,
																i =
																	((e = r),
																	(g =
																		-o +
																		(t.inset
																			? 1
																			: -1) *
																			t
																				.spread
																				.number),
																	(C =
																		(t.inset
																			? 1
																			: -1) *
																		t.spread
																			.number),
																	(n =
																		t.spread
																			.number *
																		(t.inset
																			? -2
																			: 2)),
																	(I =
																		t.spread
																			.number *
																		(t.inset
																			? -2
																			: 2)),
																	e.map(
																		function(
																			A,
																			t
																		) {
																			switch (
																				t
																			) {
																				case 0:
																					return A.add(
																						g,
																						C
																					)
																				case 1:
																					return A.add(
																						g +
																							n,
																						C
																					)
																				case 2:
																					return A.add(
																						g +
																							n,
																						C +
																							I
																					)
																				case 3:
																					return A.add(
																						g,
																						C +
																							I
																					)
																			}
																			return A
																		}
																	))
															t.inset
																? (s.path(r),
																  s.ctx.clip(),
																  s.mask(i))
																: (s.mask(r),
																  s.ctx.clip(),
																  s.path(i)),
																(s.ctx.shadowOffsetX =
																	t.offsetX
																		.number +
																	o),
																(s.ctx.shadowOffsetY =
																	t.offsetY.number),
																(s.ctx.shadowColor = et(
																	t.color
																)),
																(s.ctx.shadowBlur =
																	t.blur.number),
																(s.ctx.fillStyle = t.inset
																	? et(
																			t.color
																	  )
																	: 'rgba(0,0,0,1)'),
																s.ctx.fill(),
																s.ctx.restore()
														}),
													(C.label = 2)
											case 2:
												;(I = 0),
													(r = 0),
													(o = g),
													(C.label = 3)
											case 3:
												return r < o.length
													? (i = o[r]).style ===
															Wt.NONE ||
													  tt(i.color)
														? [3, 5]
														: [
																4,
																this.renderBorder(
																	i.color,
																	I++,
																	A.curves
																)
														  ]
													: [3, 6]
											case 4:
												C.sent(), (C.label = 5)
											case 5:
												return r++, [3, 3]
											case 6:
												return [2]
										}
									})
								})
							}),
							(A.prototype.render = function(A) {
								return g(this, void 0, void 0, function() {
									var t
									return C(this, function(e) {
										switch (e.label) {
											case 0:
												return (
													this.options
														.backgroundColor &&
														((this.ctx.fillStyle = et(
															this.options
																.backgroundColor
														)),
														this.ctx.fillRect(
															this.options.x -
																this.options
																	.scrollX,
															this.options.y -
																this.options
																	.scrollY,
															this.options.width,
															this.options.height
														)),
													(g = new rn(A, [])),
													(C = new In(g)),
													on(g, C, C, (n = [])),
													sn(g.container, n),
													(t = C),
													[4, this.renderStack(t)]
												)
											case 1:
												return (
													e.sent(),
													this.applyEffects([], 2),
													[2, this.canvas]
												)
										}
										var g, C, n
									})
								})
							}),
							A
						)
					})(),
					mn = function(A) {
						return (
							A instanceof tC ||
							A instanceof AC ||
							(A instanceof $g && A.type !== qg && A.type !== Yg)
						)
					},
					Un = function(A, t) {
						switch (A) {
							case ot.BORDER_BOX:
								return en(t)
							case ot.CONTENT_BOX:
								return (function(A) {
									return [
										A.topLeftContentBox,
										A.topRightContentBox,
										A.bottomRightContentBox,
										A.bottomLeftContentBox
									]
								})(t)
							case ot.PADDING_BOX:
							default:
								return gn(t)
						}
					},
					En = function(A) {
						switch (A) {
							case De.CENTER:
								return 'center'
							case De.RIGHT:
								return 'right'
							case De.LEFT:
							default:
								return 'left'
						}
					},
					vn = (function() {
						function A(A) {
							;(this.canvas = A.canvas
								? A.canvas
								: document.createElement('canvas')),
								(this.ctx = this.canvas.getContext('2d')),
								(this.options = A),
								(this.canvas.width = Math.floor(
									A.width * A.scale
								)),
								(this.canvas.height = Math.floor(
									A.height * A.scale
								)),
								(this.canvas.style.width = A.width + 'px'),
								(this.canvas.style.height = A.height + 'px'),
								this.ctx.scale(
									this.options.scale,
									this.options.scale
								),
								this.ctx.translate(
									-A.x + A.scrollX,
									-A.y + A.scrollY
								),
								Ft.getInstance(A.id).debug(
									'EXPERIMENTAL ForeignObject renderer initialized (' +
										A.width +
										'x' +
										A.height +
										' at ' +
										A.x +
										',' +
										A.y +
										') with scale ' +
										A.scale
								)
						}
						return (
							(A.prototype.render = function(A) {
								return g(this, void 0, void 0, function() {
									var t, e
									return C(this, function(g) {
										switch (g.label) {
											case 0:
												return (
													(t = Et(
														Math.max(
															this.options
																.windowWidth,
															this.options.width
														) * this.options.scale,
														Math.max(
															this.options
																.windowHeight,
															this.options.height
														) * this.options.scale,
														this.options.scrollX *
															this.options.scale,
														this.options.scrollY *
															this.options.scale,
														A
													)),
													[4, bn(t)]
												)
											case 1:
												return (
													(e = g.sent()),
													this.options
														.backgroundColor &&
														((this.ctx.fillStyle = et(
															this.options
																.backgroundColor
														)),
														this.ctx.fillRect(
															0,
															0,
															this.options.width *
																this.options
																	.scale,
															this.options
																.height *
																this.options
																	.scale
														)),
													this.ctx.drawImage(
														e,
														-this.options.x *
															this.options.scale,
														-this.options.y *
															this.options.scale
													),
													[2, this.canvas]
												)
										}
									})
								})
							}),
							A
						)
					})(),
					bn = function(A) {
						return new Promise(function(t, e) {
							var g = new Image()
							;(g.onload = function() {
								t(g)
							}),
								(g.onerror = e),
								(g.src =
									'data:image/svg+xml;charset=utf-8,' +
									encodeURIComponent(
										new XMLSerializer().serializeToString(A)
									))
						})
					},
					Fn = void 0,
					xn = function(A) {
						return At.parse(KA.create(A).parseComponentValue())
					}
				xt.setContext(window)
				var Hn = function(A, t) {
						return g(Fn, void 0, void 0, function() {
							var g,
								r,
								o,
								i,
								s,
								a,
								c,
								l,
								u,
								p,
								h,
								B,
								d,
								f,
								w,
								Q,
								m,
								U,
								E,
								v,
								b,
								F,
								x
							return C(this, function(C) {
								switch (C.label) {
									case 0:
										if (!(g = A.ownerDocument))
											throw new Error(
												'Element is not attached to a Document'
											)
										if (!(r = g.defaultView))
											throw new Error(
												'Document is not attached to a Window'
											)
										return (
											(o = (
												Math.round(
													1e3 * Math.random()
												) + Date.now()
											).toString(16)),
											(i =
												BC(A) || 'HTML' === A.tagName
													? (function(A) {
															var t = A.body,
																e =
																	A.documentElement
															if (!t || !e)
																throw new Error(
																	'Unable to get document size'
																)
															var g = Math.max(
																	Math.max(
																		t.scrollWidth,
																		e.scrollWidth
																	),
																	Math.max(
																		t.offsetWidth,
																		e.offsetWidth
																	),
																	Math.max(
																		t.clientWidth,
																		e.clientWidth
																	)
																),
																C = Math.max(
																	Math.max(
																		t.scrollHeight,
																		e.scrollHeight
																	),
																	Math.max(
																		t.offsetHeight,
																		e.offsetHeight
																	),
																	Math.max(
																		t.clientHeight,
																		e.clientHeight
																	)
																)
															return new n(
																0,
																0,
																g,
																C
															)
													  })(g)
													: I(A)),
											(s = i.width),
											(a = i.height),
											(c = i.left),
											(l = i.top),
											(u = e(
												{},
												{
													allowTaint: !1,
													imageTimeout: 15e3,
													proxy: void 0,
													useCORS: !1
												},
												t
											)),
											(p = {
												backgroundColor: '#ffffff',
												cache: t.cache
													? t.cache
													: xt.create(o, u),
												logging: !0,
												removeContainer: !0,
												foreignObjectRendering: !1,
												scale: r.devicePixelRatio || 1,
												windowWidth: r.innerWidth,
												windowHeight: r.innerHeight,
												scrollX: r.pageXOffset,
												scrollY: r.pageYOffset,
												x: c,
												y: l,
												width: Math.ceil(s),
												height: Math.ceil(a),
												id: o
											}),
											(h = e({}, p, u, t)),
											(B = new n(
												h.scrollX,
												h.scrollY,
												h.windowWidth,
												h.windowHeight
											)),
											Ft.create(o),
											Ft.getInstance(o).debug(
												'Starting document clone'
											),
											(d = new RC(A, {
												id: o,
												onclone: h.onclone,
												ignoreElements:
													h.ignoreElements,
												inlineImages:
													h.foreignObjectRendering,
												copyStyles:
													h.foreignObjectRendering
											})),
											(f = d.clonedReferenceElement)
												? [4, d.toIFrame(g, B)]
												: [
														2,
														Promise.reject(
															'Unable to find element in cloned iframe'
														)
												  ]
										)
									case 1:
										return (
											(w = C.sent()),
											(Q = g.documentElement
												? xn(
														getComputedStyle(
															g.documentElement
														).backgroundColor
												  )
												: at.TRANSPARENT),
											(m = g.body
												? xn(
														getComputedStyle(g.body)
															.backgroundColor
												  )
												: at.TRANSPARENT),
											(U = t.backgroundColor),
											(E =
												'string' == typeof U
													? xn(U)
													: 4294967295),
											(v =
												A === g.documentElement
													? tt(Q)
														? tt(m)
															? E
															: m
														: Q
													: E),
											(b = {
												id: o,
												cache: h.cache,
												backgroundColor: v,
												scale: h.scale,
												x: h.x,
												y: h.y,
												scrollX: h.scrollX,
												scrollY: h.scrollY,
												width: h.width,
												height: h.height,
												windowWidth: h.windowWidth,
												windowHeight: h.windowHeight
											}),
											h.foreignObjectRendering
												? (Ft.getInstance(o).debug(
														'Document cloned, using foreign object rendering'
												  ),
												  [4, new vn(b).render(f)])
												: [3, 3]
										)
									case 2:
										return (F = C.sent()), [3, 5]
									case 3:
										return (
											Ft.getInstance(o).debug(
												'Document cloned, using computed rendering'
											),
											xt.attachInstance(h.cache),
											Ft.getInstance(o).debug(
												'Starting DOM parsing'
											),
											(x = rC(f)),
											xt.detachInstance(),
											v === x.styles.backgroundColor &&
												(x.styles.backgroundColor =
													at.TRANSPARENT),
											Ft.getInstance(o).debug(
												'Starting renderer'
											),
											[4, new Qn(b).render(x)]
										)
									case 4:
										;(F = C.sent()), (C.label = 5)
									case 5:
										return (
											!0 === h.removeContainer &&
												(yn(w) ||
													Ft.getInstance(o).error(
														'Cannot detach cloned iframe as it is not in the DOM anymore'
													)),
											Ft.getInstance(o).debug(
												'Finished rendering'
											),
											Ft.destroy(o),
											xt.destroy(o),
											[2, F]
										)
								}
							})
						})
					},
					yn = function(A) {
						return (
							!!A.parentNode && (A.parentNode.removeChild(A), !0)
						)
					}
				return function(A, t) {
					return void 0 === t && (t = {}), Hn(A, t)
				}
			})()
		},
		function(A, e) {
			A.exports = t
		},
		function(A, t, e) {
			A.exports = e(184)
		},
		function(A, t, e) {
			A.exports = e(187)
		},
		function(A, t, e) {
			var g = e(209)
			A.exports = function(A, t) {
				if (!g(A, t))
					throw new TypeError('Cannot call a class as a function')
			}
		},
		function(A, t, e) {
			var g = e(65)
			function C(A, t) {
				for (var e = 0; e < t.length; e++) {
					var C = t[e]
					;(C.enumerable = C.enumerable || !1),
						(C.configurable = !0),
						'value' in C && (C.writable = !0),
						g(A, C.key, C)
				}
			}
			A.exports = function(A, t, e) {
				return t && C(A.prototype, t), e && C(A, e), A
			}
		},
		function(A, t, e) {
			A.exports = e(121)
		},
		function(A, t, e) {
			e(93), e(124), (A.exports = e(4).Array.from)
		},
		function(A, t, e) {
			var g = e(25),
				C = e(24)
			A.exports = function(A) {
				return function(t, e) {
					var n,
						I,
						r = String(C(t)),
						o = g(e),
						i = r.length
					return o < 0 || o >= i
						? A
							? ''
							: void 0
						: (n = r.charCodeAt(o)) < 55296 ||
						  n > 56319 ||
						  o + 1 === i ||
						  (I = r.charCodeAt(o + 1)) < 56320 ||
						  I > 57343
						? A
							? r.charAt(o)
							: n
						: A
						? r.slice(o, o + 2)
						: I - 56320 + ((n - 55296) << 10) + 65536
				}
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(81),
				C = e(21),
				n = e(44),
				I = {}
			e(16)(I, e(8)('iterator'), function() {
				return this
			}),
				(A.exports = function(A, t, e) {
					;(A.prototype = g(I, { next: C(1, e) })),
						n(A, t + ' Iterator')
				})
		},
		function(A, t, e) {
			'use strict'
			var g = e(20),
				C = e(15),
				n = e(37),
				I = e(96),
				r = e(97),
				o = e(36),
				i = e(125),
				s = e(98)
			C(
				C.S +
					C.F *
						!e(100)(function(A) {
							Array.from(A)
						}),
				'Array',
				{
					from: function(A) {
						var t,
							e,
							C,
							a,
							c = n(A),
							l = 'function' == typeof this ? this : Array,
							u = arguments.length,
							p = u > 1 ? arguments[1] : void 0,
							h = void 0 !== p,
							B = 0,
							d = s(c)
						if (
							(h && (p = g(p, u > 2 ? arguments[2] : void 0, 2)),
							null == d || (l == Array && r(d)))
						)
							for (e = new l((t = o(c.length))); t > B; B++)
								i(e, B, h ? p(c[B], B) : c[B])
						else
							for (
								a = d.call(c), e = new l();
								!(C = a.next()).done;
								B++
							)
								i(e, B, h ? I(a, p, [C.value, B], !0) : C.value)
						return (e.length = B), e
					}
				}
			)
		},
		function(A, t, e) {
			'use strict'
			var g = e(7),
				C = e(21)
			A.exports = function(A, t, e) {
				t in A ? g.f(A, t, C(0, e)) : (A[t] = e)
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(47)
			e.n(g).a
		},
		function(A, t, e) {
			t = A.exports = e(2)(!1)
			var g = e(43),
				C = g(e(101)),
				n = g(e(128))
			t.push([
				A.i,
				'.fill-in-block-question-setting[data-v-5657130d] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10;\n}\n.fill-in-block-question-setting-content[data-v-5657130d] {\n  width: 448px;\n  height: 222px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -130px;\n  margin-top: -70px;\n  background: #fff;\n  border-radius: 4px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 30px;\n}\n.fill-in-block-question-setting-header[data-v-5657130d] {\n  height: 30px;\n  text-align: center;\n  position: relative;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  line-height: 30px;\n  font-size: 20px;\n  margin-bottom: 30px;\n  color: #333333;\n}\n.fill-in-block-question-setting-header-close[data-v-5657130d] {\n  position: absolute;\n  right: 0px;\n  top: 7px;\n  width: 16px;\n  height: 16px;\n  background-image: url(' +
					C +
					');\n  background-repeat: no-repeat;\n}\n.fill-in-block-question-setting-body[data-v-5657130d] {\n  height: 70px;\n  text-align: left;\n  color: #222222;\n  font-size: 14px;\n}\n.fill-in-block-question-setting-body-selector[data-v-5657130d] {\n  width: 72px;\n  height: 28px;\n  padding: 1% 1%;\n  outline: none;\n  margin-left: 10px;\n  margin-right: 10px;\n  border: solid 1px #dee1e5;\n  border-radius: 2px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url(' +
					n +
					') no-repeat;\n  background-position: 80% 50%;\n}\n.fill-in-block-question-setting-body-selector option[data-v-5657130d] {\n  text-align: center;\n}\n.fill-in-block-question-setting-footer[data-v-5657130d] {\n  text-align: center;\n  height: 30px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding-top: 5px;\n}\n.fill-in-block-question-setting-footer a[data-v-5657130d] {\n  display: inline-block;\n  width: 130px;\n  height: 40px;\n  line-height: 40px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.fill-in-block-question-setting-footer-cancel[data-v-5657130d] {\n  background-color: #ffffff;\n  color: #333;\n  border: solid 1px #dee1e5;\n  margin-right: 20px;\n}\n.fill-in-block-question-setting-footer-confirm[data-v-5657130d] {\n  background-color: #26cfa2;\n  color: #ffffff;\n}\n',
				''
			])
		},
		function(A, t) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAATElEQVQYV2XMUQ2AMBAD0DcHSEEKEiYBCUhAAhKQghQkkFsYuYx+ti8t2LDj9s+EWjC/aBlggDNOAkVG2MGKq6MMKw40EENGGX4gygdQnw62fdhZ2AAAAABJRU5ErkJggg=='
		},
		function(A, t, e) {
			'use strict'
			var g = e(48)
			e.n(g).a
		},
		function(A, t, e) {
			;(A.exports = e(2)(!1)).push([
				A.i,
				'.write-block[data-v-48ff0e3a] {\n  text-align: left!important;\n}\n',
				''
			])
		},
		function(A, t, e) {
			'use strict'
			var g = e(49)
			e.n(g).a
		},
		function(A, t, e) {
			t = A.exports = e(2)(!1)
			var g = e(43),
				C = g(e(133)),
				n = g(e(134))
			t.push([
				A.i,
				'.engComposition-block[data-v-948975cc] {\n  position: relative;\n}\n.engComposition-block[data-v-948975cc]:before {\n  content: "";\n  display: block;\n  position: absolute;\n  left: -18px;\n  top: 0px;\n  height: 80%;\n  width: 7px;\n  background: #000;\n}\n.engComposition-block.high-dpr[data-v-948975cc]:before {\n  width: 28px;\n  left: -88px;\n}\n.engComposition-block li[data-v-948975cc] {\n  width: 96%;\n  margin-left: 2%;\n  box-sizing: border-box;\n  height: 31px;\n}\n.engComposition-block .question-num[data-v-948975cc] {\n  line-height: 36px;\n  text-indent: 2%;\n}\n.engComposition-block-score-box[data-v-948975cc] {\n  width: 60px;\n  height: 36px;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0px;\n  right: 0;\n}\n.high-dpr[data-v-948975cc] {\n  padding-top: 0px !important;\n}\n.high-dpr .engComposition-block li[data-v-948975cc] {\n  height: 124px;\n}\n.high-dpr .engComposition-block .question-num[data-v-948975cc] {\n  line-height: 144px;\n}\n.high-dpr .engComposition-block-score-box[data-v-948975cc] {\n  width: 240px;\n  height: 144px;\n  position: absolute;\n  top: 0px;\n  right: 0;\n}\n.high-dpr .engComposition-block-score-box-left-line[data-v-948975cc] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 10px;\n  background-image: url(' +
					C +
					');\n  background-repeat: no-repeat;\n  background-position: left;\n  -webkit-background-size: 100% 100%;\n  background-size: 100% 100%;\n}\n.high-dpr .engComposition-block-score-box-right-line[data-v-948975cc] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 10px;\n  background-image: url(' +
					n +
					');\n  background-repeat: no-repeat;\n  background-position: right;\n  -webkit-background-size: 100% 100%;\n  background-size: 100% 100%;\n}\n',
				''
			])
		},
		function(A, t) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAABACAYAAAAj8ea3AAAARklEQVRIie3WMQoAMQhE0W/I/a/s1kkIGNby2wkPZboJICnMqKAnOLc92i8CkHnm6w8jFAqFQqFQ2AGDtZtdC9IO/78uww8O5gZ+jrlNwQAAAABJRU5ErkJggg=='
		},
		function(A, t) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAA+CAYAAAAS2YoGAAAAQklEQVRIiWNkYGD4z0AEYCJGEUkKGQnIw53F8v8/phMZGTH1U9+NowpHFY4qHFU4qnBU4ajCkaiQ6FYKSSYOUJMLAKC8B3df9C85AAAAAElFTkSuQmCC'
		},
		function(A, t, e) {
			'use strict'
			var g = e(50)
			e.n(g).a
		},
		function(A, t, e) {
			;(A.exports = e(2)(!1)).push([
				A.i,
				'.fill-in-block-question-setting[data-v-4b9c7eb0] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10;\n}\n.fill-in-block-question-setting-content[data-v-4b9c7eb0] {\n  width: 260px;\n  height: 140px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -130px;\n  margin-top: -70px;\n  background: #fff;\n  border-radius: 4px;\n}\n.fill-in-block-question-setting-header[data-v-4b9c7eb0] {\n  height: 30px;\n  text-align: center;\n  position: relative;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border-bottom: 1px solid #F2F2F2;\n  line-height: 30px;\n  font-size: 12px;\n}\n.fill-in-block-question-setting-header a[data-v-4b9c7eb0] {\n  position: absolute;\n  right: 10px;\n  top: 0px;\n}\n.fill-in-block-question-setting-body[data-v-4b9c7eb0] {\n  height: 70px;\n  text-align: right;\n  padding-right: 35px;\n}\n.fill-in-block-question-setting-body input[data-v-4b9c7eb0] {\n  width: 100px;\n  margin-left: 10px;\n}\n.fill-in-block-question-setting-body p[data-v-4b9c7eb0] {\n  padding-top: 8px;\n}\n.fill-in-block-question-setting-footer[data-v-4b9c7eb0] {\n  text-align: center;\n  height: 30px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border-top: 1px solid #F2F2F2;\n  padding-top: 5px;\n}\n.fill-in-block-question-setting-footer a[data-v-4b9c7eb0] {\n  display: inline-block;\n  width: 80px;\n  height: 30px;\n  line-height: 30px;\n  color: #fff;\n  background-color: #36BBA1;\n  font-size: 12px;\n  border-radius: 4px;\n}\n',
				''
			])
		},
		function(A, t, e) {
			'use strict'
			var g = e(51)
			e.n(g).a
		},
		function(A, t, e) {
			;(A.exports = e(2)(!1)).push([
				A.i,
				'.composition-block[data-v-6d82ceb8] {\n  position: relative;\n}\n.composition-block[data-v-6d82ceb8]:before {\n  content: "";\n  display: block;\n  position: absolute;\n  left: -18px;\n  top: 0px;\n  height: 80%;\n  width: 7px;\n  background: #000;\n}\n.composition-block.high-dpr[data-v-6d82ceb8]:before {\n  width: 28px;\n  left: -88px;\n}\n.composition-block .question-num[data-v-6d82ceb8] {\n  line-height: 36px;\n  text-indent: 2%;\n}\n.composition-block-score-box[data-v-6d82ceb8] {\n  width: 60px;\n  height: 36px;\n  box-sizing: border-box;\n  position: absolute;\n  top: -3px;\n  right: 0;\n}\n.high-dpr .block-content[data-v-6d82ceb8] {\n  padding-top: 0px !important;\n}\n.high-dpr .composition-block[data-v-6d82ceb8] {\n  position: relative;\n}\n.high-dpr .composition-block .question-num[data-v-6d82ceb8] {\n  line-height: 99.36px;\n}\n.high-dpr .composition-block-score-box[data-v-6d82ceb8] {\n  width: 80px;\n  height: 100px;\n  position: absolute;\n  top: -88px;\n  right: 0;\n}\n',
				''
			])
		},
		function(A, t, e) {
			'use strict'
			var g = e(52)
			e.n(g).a
		},
		function(A, t, e) {
			;(A.exports = e(2)(!1)).push([
				A.i,
				'.text-content[data-v-7a1542e1]:before {\n  content: "";\n  display: block;\n  width: 7px;\n  height: 160px;\n  position: absolute;\n  background: #000;\n  top: 39%;\n  right: 100%;\n  margin-top: -30px;\n  margin-right: 11px;\n}\n.text-content .user-number-title[data-v-7a1542e1]:before {\n  content: "";\n  display: block;\n  width: 203px;\n  height: 10px;\n  position: absolute;\n  background: #000;\n  top: -112px;\n  right: 0;\n}\n.text-content.high-dpr[data-v-7a1542e1]:before {\n  width: 28px;\n  height: 521px;\n  top: 43%;\n  margin-top: -111px;\n  margin-right: 62px;\n}\n.text-content.high-dpr .user-number-title[data-v-7a1542e1]:before {\n  content: "";\n  display: block;\n  width: 812px;\n  height: 28px;\n  position: absolute;\n  background: #000;\n  top: -450px;\n  right: 0;\n}\n',
				''
			])
		},
		function(A, t) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAPxJREFUOBFjYKAmSEtLCwBhUsxkhinOyMhI//fv30ImJqZQU1PTV2fOnDkLk8NHM4IkGxoa2J49e/aIkZHxIoj///9/fSkpKTktLa2/e/fubQcK8YPEkcBHZ2fnyrCwsL8sIEGgAb+AlER6evpMEH/WrFnuIHrVqlVwF4L42ADYAGwSIDGQDUCqDJv8zJlguxhQDAA6fQU2xfjEwGGASwHIC4TCgAmXZrLEgWnAEYRJ0YwSBsBojIBq3k+sISgGoGsiJgzABsASEtAAcEICeuMFKCEB+aBoxAvgsQBKysBonAJMzozMzMzZM2bMgEQ0Xu1okqCMBMJowrTlAgCCXF1BI8PsrwAAAABJRU5ErkJggg=='
		},
		function(A, t, e) {
			'use strict'
			var g = e(53)
			e.n(g).a
		},
		function(A, t, e) {
			t = A.exports = e(2)(!1)
			var g = e(43),
				C = g(e(101)),
				n = g(e(144)),
				I = g(e(145))
			t.push([
				A.i,
				'.img-selector[data-v-734482ca] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n}\n.img-selector-content[data-v-734482ca] {\n  width: 520px;\n  min-height: 150px;\n  position: absolute;\n  left: 50%;\n  margin-left: -200px;\n  margin-top: 150px;\n  background: #fff;\n  border-radius: 4px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 30px;\n}\n.img-selector-title[data-v-734482ca] {\n  position: relative;\n  text-align: center;\n  font-size: 20px;\n  color: #333333;\n}\n.img-selector-title-close[data-v-734482ca] {\n  position: absolute;\n  right: 0px;\n  top: 4px;\n  width: 16px;\n  height: 16px;\n  background-image: url(' +
					C +
					');\n  background-repeat: no-repeat;\n}\n.img-selector .img-list[data-v-734482ca] {\n  overflow: hidden;\n}\n.img-selector .img-list li[data-v-734482ca] {\n  width: 100px;\n  height: 100px;\n  float: left;\n  margin: 8px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: relative;\n}\n.img-selector .img-list li .img-list-checkbutton[data-v-734482ca] {\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  left: 8px;\n  top: 8px;\n}\n.img-selector .img-list li .unchecked[data-v-734482ca] {\n  background-image: url(' +
					n +
					');\n}\n.img-selector .img-list li .checked[data-v-734482ca] {\n  background-image: url(' +
					I +
					');\n}\n.img-selector-footer[data-v-734482ca] {\n  text-align: center;\n  height: 30px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding-top: 5px;\n}\n.img-selector-footer a[data-v-734482ca] {\n  display: inline-block;\n  width: 130px;\n  height: 40px;\n  line-height: 40px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.img-selector-footer-cancel[data-v-734482ca] {\n  background-color: #ffffff;\n  color: #333;\n  border: solid 1px #dee1e5;\n  margin-right: 20px;\n}\n.img-selector-footer-confirm[data-v-734482ca] {\n  background-color: #26cfa2;\n  color: #ffffff;\n}\n',
				''
			])
		},
		function(A, t) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAA5omlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMTAtMTdUMTQ6NDc6MDcrMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0xMC0xN1QxNDo0OToxOSswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTktMTAtMTdUMTQ6NDk6MTkrMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6OWYzZTJiMTAtZjdlNy00MjZiLTgzNmEtZDI4ZGQ0OWQ2MmJhPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjVBNjVGNTQ0RTgwMTExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjVBNjVGNTQxRTgwMTExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOjVBNjVGNTQyRTgwMTExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6NUE2NUY1NDRFODAxMTFFOUEzNzk4MTBDRDkwNTNDQzE8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjlmM2UyYjEwLWY3ZTctNDI2Yi04MzZhLWQyOGRkNDlkNjJiYTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOS0xMC0xN1QxNDo0OToxOSswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjE0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjE0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5JF/MMAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABfSURBVHja7MsxFcAgDAXATz0Q9qiItCjg4Qr2gBEQkVpIO/b19ktjDFdV7L0RQURorQEi4mbmUWbmIuJgZn+Kmf3CS3/8SCQizDnDYa2FnDNS791VFeecUCyloNaKewAruXxeIy7UHwAAAABJRU5ErkJggg=='
		},
		function(A, t) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAvUlEQVQ4T52S3QnCQBCEZ+/OtGEE3zUdaCGi6UArUrEBO0g6iAUIxjbMz8oGDmKIx5J7PPbbnRmGMPGR5+LiHDu289Cempp3maSlzHSgQBHsS3P8g2YhcAcui9vGgDMN2IK2z2SXq0AGXxnmIsvVoEAV2uMMJiPQehRsgZNhHEBYiewhJH+jIANpheYesc2Z+NG/5P3/lephGfTy+qEFPYpkAu/F0zBpdThBcHIBfHscXBysHOryp3KaxgxnvvKKfg8soahUAAAAAElFTkSuQmCC'
		},
		function(A, t, e) {
			'use strict'
			var g = e(54)
			e.n(g).a
		},
		function(A, t, e) {
			t = A.exports = e(2)(!1)
			var g = e(43),
				C = g(e(148)),
				n = g(e(149)),
				I = g(e(150))
			t.push([
				A.i,
				'.normal-block-container[data-v-1ed43824] {\n  width: 100%;\n  height: 100%;\n}\n.normal-block-container.high-dpr .normal-block[data-v-1ed43824]:before {\n  width: 28px;\n  left: -88px;\n}\n.write-block[data-v-1ed43824] {\n  position: relative;\n  font-size: 0px;\n}\n.write-block .score[data-v-1ed43824] {\n  position: absolute;\n  left: 100%;\n  top: 0px;\n  text-align: left;\n  width: 150px;\n}\n.scale-btn[data-v-1ed43824] {\n  position: absolute;\n  right: 0px;\n  top: calc(100% - 16px);\n  width: 16px;\n  height: 16px;\n  cursor: ns-resize;\n  z-index: 2;\n}\n.normal-block[data-v-1ed43824]:before {\n  content: "";\n  display: block;\n  position: absolute;\n  left: -18px;\n  top: 0px;\n  height: 80%;\n  width: 7px;\n  background: #000;\n}\n.normal-block .write-block span[data-v-1ed43824] {\n  text-align: left;\n}\n.normal-block .add-img-btn[data-v-1ed43824] {\n  font-size: 12px;\n  color: #666666;\n  position: relative;\n}\n.normal-block .add-img-btn-icon[data-v-1ed43824] {\n  position: absolute;\n  left: -20px;\n  width: 16px;\n  height: 16px;\n  background-image: url(' +
					C +
					');\n  background-repeat: no-repeat;\n}\n.normal-block .add-img-btn[data-v-1ed43824]:hover {\n  color: #26cfa2;\n}\n.normal-block .add-img-btn:hover .add-img-btn-icon[data-v-1ed43824] {\n  background-image: url(' +
					n +
					');\n}\n.normal-block-score-box[data-v-1ed43824] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 60px;\n  height: 36px;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.scale-layout[data-v-1ed43824] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  background: rgba(49, 176, 213, 0.4);\n  z-index: 1;\n  display: none;\n}\n.choosed-img-list[data-v-1ed43824] {\n  text-align: right;\n  height: calc(100% - 30px);\n  overflow: hidden;\n}\n.choosed-img-list span[data-v-1ed43824] {\n  display: inline-block;\n  margin-right: 10px;\n  margin-top: 10px;\n  vertical-align: top;\n  position: relative;\n}\n.choosed-img-list span img[data-v-1ed43824] {\n  max-width: 100%;\n}\n.choosed-img-list span .delete-img-btn[data-v-1ed43824] {\n  position: absolute;\n  right: 4px;\n  top: 4px;\n  width: 16px;\n  height: 16px;\n  background-image: url(' +
					I +
					');\n}\n',
				''
			])
		},
		function(A, t) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAWdJREFUOBHFks1Kw0AUhZuf+gPtzk36EOozpH0ELaIodZMWsnIjuguo4M5daIs7EWxfwXThQ0gR901XXYlVExO/O2BJSynddeBOzpx75t4zmcnlVj00MdBoNGppmp4C15YxhPZb13W/2Wx2TdmQJMmdaZrbhmF8LVmgEEXRC9qu0juOMxZQr9cviRNFLphwoKEbiUQ5yGh3wMXMWkEa5DVNu8Xhve/7/Wx+qkCr1TrIJgV7nmeGYdgBbsVxXHVdtwx+l5yMqQJC0O2CbrvYPK5UKkmv13uE/rUsyx4Oh3uc/Rn7NhqRTxfgNs7ZeET0EXSCIBjzXWe9j5MY/ROaPOuA0KWAmgSQOOM2amwol0qlQ6gIXKRztd1uR6KRwdU9wF8BNxUhE7Z/iDfCmpALAN0nt6AcUFHjYdh0Chfsm5v6/4mf2P/gnBtzVTMkP7EApd6OKoCla0y8DgaDpZ4yWnmxNzN1V7T8A0Uuj8x8MQMGAAAAAElFTkSuQmCC'
		},
		function(A, t) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAY5JREFUOBHFUstOwkAUvZfyMqmu3JDoxkUpRKWJfACBX1BiJBD8BDdG1+rSuPMDWonAL2iC7jW0qBAw0YVE48YNBHm112lJCRJC2NHF9My5556ZOTMA8/7Q3IBYlNMGOPYByT3LhpCgwyFclqVk3mk2GAgXbo7bdHm59iwGrVab7xPcM23e0guq/GsCUZOPA5qSssgpAxGhv6j8mBLHqI4IQrqB4ihn4i16cImqcr7+lA2M16wj2GRVSu3a2P5HqOD81Co5Nl/u6r24qGZjDL/a9X8GJimoV0cIhsSHgsk1eDNKWj3DQtN90kr0u/SxbRjdm43nXHSigb8oHwJQAggqDbZqicjMxsNLwZ07DPcZzgpqxtXTu7csBuv4wwxYkAcEkPYgxXzS6h673x4gLjrd3vgjhnv2ijUpobDoTlj7gs2BUJS7flWuBsqKb0hOAaO3MMgAEb3giWrB+NeUvomlgQFBy7kEzch7wTtRNUb6a9c8IlhvxzLgHHDabHRemlCf7SkDtYkcZ2O+c5r+Ab/6jY30YLu3AAAAAElFTkSuQmCC'
		},
		function(A, t) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAActJREFUOBGVUz1LglEU9iNIi7CoHPqYmqRBiNpsEzRaGwIHEYQ2Z/+AOLs4uTiJoAZGQ2JDEmiUDkUQRGgf5FckBi7R+749z5vX3sjAHnjuuefjHs4991y97jesMK2BK6Cl7+5C3oEVsNW3qUKvUcawd4HroNauCdEpUC7AI/CDDiMXgIc94Cr412G4VN8i5DJ4DcoiwRYUHh4VMwg0g7cGLLwzy1ZhMpn0LpdrTuhCOhyOabfbrbXzjJUVbIIsSYXdbp/K5XJ7BoPhtVAovNDIhNls1tdut1v5fF40kVeVmICNmwRV1Ov192az+RgOh3eYxGw261KplDeZTJ4GAgG+ghbjbJ54qoEjFos9QElEo1GPHojH48d+v/9sEPC9sbAHQ1Gr1XqyLCuowlitVjkHQ8EK6JzXep1O52wmk/EmEomTUqn0HIlEdukPhUI32jjsu+zBLLgkHDabbQKN8qfT6aLP5yuWy+UumvfEnvR6vQYSdkQs5BUTvIF8EnWAFKDT6TSCweAlbCqY5B6QJEmpVCriOpzKAzF121A2vsJHXs8RecgKiCrIWeCEjQLG74ODUZahcLY5ngugqAzbHxCfiYfVzzQs8F/f+ROYppvaWkCQxwAAAABJRU5ErkJggg=='
		},
		function(A, t, e) {
			'use strict'
			var g = e(55)
			e.n(g).a
		},
		function(A, t, e) {
			t = A.exports = e(2)(!1)
			var g = e(43),
				C = g(e(153)),
				n = g(e(154))
			t.push([
				A.i,
				".answer-block {\n  width: 100%;\n  clear: both;\n  position: relative;\n  /*识别框*/\n}\n.answer-block .bottom-border-line,\n.answer-block .right-border-line,\n.answer-block .left-border-line {\n  position: relative;\n}\n.answer-block .bottom-border-line:after,\n.answer-block .right-border-line:after,\n.answer-block .left-border-line:after {\n  content: '';\n  position: absolute;\n  background: gray;\n}\n.answer-block .top-border-line {\n  position: relative;\n}\n.answer-block .top-border-line:before {\n  content: \"\";\n  position: absolute;\n  background: gray;\n}\n.answer-block .bottom-border-line:after {\n  width: 100%;\n  height: 1px;\n  bottom: 0%;\n  left: 0%;\n}\n.answer-block .top-border-line:before {\n  width: 100%;\n  height: 1px;\n  top: 0%;\n  left: 0%;\n}\n.answer-block .right-border-line:after,\n.answer-block .left-border-line:after {\n  width: 1px;\n  height: 100%;\n  top: 0px;\n  right: 0px;\n}\n.answer-block .left-border-line:after {\n  left: 0px;\n}\n.answer-block .box-line-bottom:after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background-image: url(" +
					C +
					");\n  background-repeat: repeat-x;\n  background-position: left bottom;\n  bottom: 0%;\n  left: 0%;\n}\n.answer-block .box-line-left:after {\n  content: '';\n  position: absolute;\n  background: gray;\n  width: 1px;\n  height: 100%;\n  top: 0%;\n  left: 0%;\n}\n.answer-block.text {\n  line-height: 30px;\n  height: 30px;\n  font-size: 14px;\n}\n.answer-block.block {\n  border: 1px solid #000;\n  box-sizing: border-box;\n  position: relative;\n}\n.answer-block[data-type='paperFillInBlankQuestions']:before {\n  content: '';\n  display: block;\n  width: 7px;\n  height: 80%;\n  background: #000;\n  position: absolute;\n}\n.answer-block[data-type='paperFillInBlankQuestions'][data-direction='1']:before {\n  left: -18px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'][data-direction='1']:before {\n  top: 0px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'][data-direction='2']:before {\n  left: -18px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'][data-direction='2']:before {\n  top: 0px;\n}\n.answer-block[data-type='paperComposition'] ul {\n  margin-top: -1px;\n}\n.answer-block[data-type='paperComposition'] li {\n  height: 24.84px;\n  margin-bottom: 8px;\n}\n.answer-block[data-type='paperComposition'] li:last-child {\n  margin-bottom: 0px;\n}\n.answer-block[data-type='paperComposition'] li i {\n  display: block;\n  float: left;\n  width: 24.7px;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-style: normal;\n  position: relative;\n  line-height: 10px;\n}\n.answer-block[data-type='paperComposition'] li i:last-child:after {\n  display: none;\n}\n.answer-block[data-type='paperComposition'] li i span {\n  position: absolute;\n  top: 100%;\n  margin-top: -5%;\n}\n.answer-block[data-type='paperComposition'] li i:last-child {\n  border-right: none;\n}\n.answer-block[data-type='paperTitle'] {\n  text-align: center;\n  font-size: 14px;\n  line-height: 55px;\n}\n.answer-block[data-type='paperUserBaseInfo'] {\n  font-size: 12px;\n  line-height: 20px;\n}\n.answer-block[data-type='paperUserBaseInfo'] .answer-paper-underline {\n  width: 70px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'] li {\n  height: 21px;\n  width: 47%;\n  float: left;\n  margin-left: 2%;\n  margin-top: 10px;\n  font-size: 0px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'] li[data-count='1'] {\n  width: 97%;\n}\n.answer-block[data-type='paperFillInBlankQuestions'] li[data-check-mode='1'] .answer-paper-underline {\n  width: calc(100% - 30px);\n}\n.answer-block[data-type='paperFillInBlankQuestions'] li[data-check-mode='2'] .answer-paper-underline {\n  width: calc(100% - 60px);\n  margin-right: 2px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'] li[data-check-mode='2'] .score-box {\n  margin-left: 5px;\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 30px;\n  height: 18px;\n  background-image: url(" +
					C +
					");\n  background-repeat: repeat-x;\n  background-position: left bottom;\n  position: relative;\n}\n.answer-block[data-type='paperFillInBlankQuestions'] .num {\n  font-size: 10px;\n  line-height: 21px;\n  height: 100%;\n  text-align: right;\n  vertical-align: bottom;\n  margin-right: 3px;\n}\n.answer-block[data-type='paperObjectiveQuestions'] {\n  border: none;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .objective-question-left-flag {\n  position: absolute;\n  left: -21px;\n  top: 3px;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .objective-question-left-flag .write-block {\n  background: #000;\n  display: block;\n  margin-bottom: 10px;\n  height: 75px !important;\n  width: 7px;\n  float: none;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .objective-question-left-flag .write-block:nth-child(5n + 6) {\n  margin-top: 12px;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .objective-question-bottom-flag {\n  clear: both;\n  position: relative;\n  left: 6px;\n  top: -5px;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .objective-question-bottom-flag .write-block {\n  background: #000;\n  margin-left: 18px;\n  width: 72px;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .objective-question-bottom-flag .write-block:nth-child(n + 2) {\n  margin-left: 32.3px;\n}\n.answer-block[data-type='paperObjectiveQuestions'] ul {\n  float: left;\n  width: 100px;\n  height: 80px;\n  margin: 5px 2px;\n  margin-top: 0px;\n}\n.answer-block[data-type='paperObjectiveQuestions'] ul li {\n  height: 16px;\n  font-size: 0px;\n  overflow: hidden;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .write-block {\n  border: 1px solid #000;\n  margin-left: 4px;\n  display: block;\n  float: left;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .write-block span {\n  vertical-align: top;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .write-block.num {\n  border: none;\n  font-style: normal;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] {\n  font-size: 14px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .attention-content {\n  width: 100%;\n  height: 155px;\n  box-sizing: border-box;\n  padding: 16px 0px;\n  text-indent: 5px;\n  line-height: 25px;\n  font-size: 12px;\n  letter-spacing: -1px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .user-number-content {\n  width: 201px;\n  height: 100%;\n  border-bottom: none;\n  position: relative;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .user-number-content ul {\n  overflow: hidden;\n  height: 187px;\n  width: 201px;\n  text-align: center;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .user-number-content ul:before {\n  top: 20px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .user-number-content ul i {\n  display: block;\n  position: relative;\n  left: -0.5px;\n  font-style: normal;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .user-number-content ul li {\n  height: 100%;\n  width: 20px;\n  float: left;\n  box-sizing: border-box;\n  padding-top: 26px;\n  line-height: 16px;\n  position: relative;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .user-number-content ul li:last-child:after {\n  display: none;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .user-number-content ul li .write-block {\n  display: block;\n  margin: 0 auto;\n  border: 1px solid #000;\n  margin-bottom: 6.2px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .sample-content {\n  padding-left: 10px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .sample-content .sample-content-right {\n  background-color: #000;\n  margin-left: 10px;\n  margin-right: 50px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .sample-content .sample-content-miss {\n  border: 1px solid #000;\n  margin-left: 10px;\n}\n.answer-block .write-block {\n  width: 15px;\n  height: 10px;\n  display: inline-block;\n  box-sizing: border-box;\n}\n.answer-block .write-block span {\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  font-size: 12px;\n  display: block;\n  color: #000;\n  vertical-align: top;\n  font-style: normal;\n  line-height: 8px;\n}\n.answer-block .text-content,\n.answer-block .block-content {\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  box-sizing: border-box;\n}\n.answer-block .text-content.normal-block,\n.answer-block .block-content.normal-block {\n  padding-left: 2%;\n  padding-top: 15px;\n}\n.answer-block .text-content .add-img-btn,\n.answer-block .block-content .add-img-btn {\n  position: absolute;\n  right: 10px;\n  z-index: 2;\n}\n.answer-block table {\n  width: 100%;\n  border-collapse: collapse;\n  /*关键代码*/\n  border-spacing: 0px;\n}\n.answer-block table td {\n  box-sizing: border-box;\n}\n.answer-block table td:first-child {\n  border-left: none;\n}\n.answer-block table td:last-child {\n  border-right: none;\n}\n.answer-block table tr {\n  height: 30px;\n}\n.answer-block table tr:last-child td {\n  border-bottom: none;\n}\n.answer-block table thead {\n  text-align: center;\n  height: 28px;\n  line-height: 28px;\n}\n.answer-block table thead td {\n  border-top: 0px;\n}\n.answer-block .answer-paper-underline {\n  display: inline-block;\n  width: 80px;\n  height: 20px;\n  border-bottom: 1px solid #000;\n  margin-left: 5px;\n}\n.answer-block .btn-group {\n  position: absolute;\n  right: 0px;\n  top: 5px;\n  z-index: 5;\n}\n.answer-block .btn-group.paper-fill-in-blank-question,\n.answer-block .btn-group.paper-composition {\n  top: -27px;\n}\n.answer-block .btn-group a {\n  display: inline-block;\n  width: 48px;\n  height: 23px;\n  color: #fff;\n  text-align: center;\n  line-height: 20px;\n  background-color: #26cfa2;\n  font-size: 12px;\n  text-decoration: none;\n  -webkit-border-radius: 2px;\n  -moz-border-radius: 2px;\n  border-radius: 2px;\n}\n.answer-block .btn-group a.paper-fill-in-blank-question-setting-button {\n  line-height: 23px;\n}\n.answer-block {\n  /*识别框*/\n}\n.answer-block.text.high-dpr {\n  line-height: 120px;\n  height: 120px;\n  font-size: 44px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr:before {\n  width: 28px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr[data-direction='1']:before {\n  left: -88px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr[data-direction='2']:before {\n  left: -88px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr[data-direction='2']:before {\n  top: 0px;\n}\n.answer-block[data-type='paperComposition'].high-dpr li {\n  height: 99.36px;\n  margin-bottom: 32px;\n}\n.answer-block[data-type='paperComposition'].high-dpr li i {\n  width: 98.84px;\n  font-size: 40px;\n  line-height: 40px;\n}\n.answer-block[data-type='paperComposition'].high-dpr .block-content {\n  padding-top: 0px !important;\n}\n.answer-block[data-type='paperComposition'].high-dpr .composition-block {\n  position: relative;\n}\n.answer-block[data-type='paperComposition'].high-dpr .composition-block .question-num {\n  line-height: 144px;\n}\n.answer-block[data-type='paperComposition'].high-dpr .composition-block-score-box {\n  width: 240px;\n  height: 144px;\n  position: absolute;\n  top: -5px;\n  right: 0;\n}\n.answer-block[data-type='paperTitle'].high-dpr p {\n  font-size: 61px;\n  line-height: 220px;\n}\n.answer-block[data-type='paperUserBaseInfo'].high-dpr {\n  font-size: 48px;\n  line-height: 80px;\n}\n.answer-block[data-type='paperUserBaseInfo'].high-dpr .answer-paper-underline {\n  width: 282px;\n  border-bottom: none;\n  position: relative;\n}\n.answer-block[data-type='paperUserBaseInfo'].high-dpr .answer-paper-underline:after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #000;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr li {\n  height: 84px;\n  width: 47%;\n  float: left;\n  margin-left: 2%;\n  margin-top: 40px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr li[data-count='1'] {\n  width: 97%;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr li .answer-paper-underline {\n  position: relative;\n  border-bottom: none;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr li .answer-paper-underline:after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #000;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr li[data-check-mode='1'] .answer-paper-underline {\n  width: calc(100% - 120px);\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr li[data-check-mode='2'] .answer-paper-underline {\n  width: calc(100% - 210px);\n  margin-right: 8px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr li[data-check-mode='2'] .score-box {\n  margin-left: 11px;\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 120px;\n  height: 72px;\n  background-image: url(" +
					n +
					");\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr .num {\n  font-size: 44px;\n  line-height: 32px;\n  vertical-align: bottom;\n  position: relative;\n  top: -15px;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr ul {\n  float: left;\n  width: 400px;\n  height: 320px;\n  margin: 20px 9px;\n  margin-top: 0px;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr ul li {\n  height: 64px;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr .write-block {\n  margin-left: 16px;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr .objective-question-left-flag {\n  left: -104px;\n  top: 1px;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr .objective-question-left-flag .write-block {\n  display: block;\n  width: 28px !important;\n  height: 283px !important;\n  margin-bottom: 57px;\n  background-color: #000;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr .objective-question-left-flag .write-block:nth-child(5n + 6) {\n  margin-top: 57px;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr .objective-question-bottom-flag {\n  left: 24px;\n  top: -20px;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr .objective-question-bottom-flag .write-block {\n  background: #000;\n  width: 240px !important;\n  margin-left: 65px;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr .objective-question-bottom-flag .write-block:nth-child(n + 2) {\n  margin-left: 178px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr {\n  font-size: 44px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .attention-content {\n  font-size: 40px;\n  text-indent: 20px;\n  line-height: 80px;\n  padding: 0;\n  height: 388px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .sample-content {\n  padding-left: 40px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .sample-content .sample-content-right {\n  margin-left: 40px;\n  margin-right: 200px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .sample-content .sample-content-miss {\n  border: 1px solid #000;\n  margin-left: 40px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .user-number-content {\n  width: 804px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .user-number-content ul {\n  height: 620px;\n  width: 804px;\n  position: relative;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .user-number-content ul:before {\n  top: 80px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .user-number-content ul li {\n  height: 100%;\n  width: 80px;\n  padding-top: 96px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .user-number-content ul li .write-block {\n  font-size: 26px;\n  line-height: 1;\n  margin-bottom: 25.5px;\n}\n.answer-block.high-dpr .answer-paper-underline {\n  width: 320px;\n  height: 80px;\n  margin-left: 20px;\n}\n.answer-block.high-dpr table tr {\n  height: 112px;\n}\n.answer-block.high-dpr table thead {\n  height: 112px;\n  line-height: 112px;\n}\n.answer-block.high-dpr .write-block {\n  width: 48px !important;\n  height: 28px !important;\n}\n.answer-block.high-dpr .write-block span {\n  font-size: 32px;\n  line-height: 26px;\n}\n.answer-block.high-dpr .normal-block .write-block span {\n  font-size: 44px;\n}\n.answer-block.high-dpr .box-line-bottom:after {\n  background-image: url(" +
					n +
					');\n}\n.answer-block.high-dpr .block-content {\n  font-size: 40px;\n  padding-top: 30px;\n}\n.answer-block.high-dpr .normal-block-score-box {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 240px;\n  height: 144px;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.answer-block.high-dpr .normal-block .choosed-img-list {\n  height: calc(100% - 50px);\n  padding-right: 241px;\n  padding-top: 69px;\n}\n',
				''
			])
		},
		function(A, t) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAABCAYAAAD9yd/wAAAACXBIWXMAAAsTAAALEwEAmpwYAAA5oGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMTAtMTZUMDg6NDY6MzErMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0xMC0xNlQwODo0OTowNSswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTktMTAtMTZUMDg6NDk6MDUrMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6YWI2YjNhMjItMTU4ZS00YzhmLTk1M2ItZmEwNTZhZWYxY2Y3PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOkFBREE3NUY1RTdEMjExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOkFBREE3NUYyRTdEMjExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOkFBREE3NUYzRTdEMjExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6QUFEQTc1RjVFN0QyMTFFOUEzNzk4MTBDRDkwNTNDQzE8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmFiNmIzYTIyLTE1OGUtNGM4Zi05NTNiLWZhMDU2YWVmMWNmNzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOS0xMC0xNlQwODo0OTowNSswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjY8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+3gLddwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAHElEQVR42mJMS0v7zwAFM2fOZISxAQAAAP//AwBEXQP/6x3OOgAAAABJRU5ErkJggg=='
		},
		function(A, t) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAYAAADq6085AAAACXBIWXMAAAsTAAALEwEAmpwYAAA5oWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMTAtMTZUMDg6NDU6NTArMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0xMC0xNlQwODo0ODo1MCswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTktMTAtMTZUMDg6NDg6NTArMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6NDE2MmI5ZWUtNjdlZC00NWZhLWFkZDQtYzNhZTExNDQyY2RiPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOkFBREE3NUYxRTdEMjExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOkU4ODhDOTdERTc0QjExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOkU4ODhDOTdFRTc0QjExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6QUFEQTc1RjFFN0QyMTFFOUEzNzk4MTBDRDkwNTNDQzE8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjQxNjJiOWVlLTY3ZWQtNDVmYS1hZGQ0LWMzYWUxMTQ0MmNkYjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOS0xMC0xNlQwODo0ODo1MCswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjEyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjE8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PtkfuPkAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAABxJREFUeNpiTEtL+8+ABcycOZMRmzgAAAD//wMAjrUD/whY2XwAAAAASUVORK5CYII='
		},
		function(A, t, e) {
			'use strict'
			var g = e(56)
			e.n(g).a
		},
		function(A, t, e) {
			;(A.exports = e(2)(!1)).push([
				A.i,
				'.answer-paper {\n  margin: 0 auto;\n  box-sizing: border-box;\n  border: 1px solid #000;\n  border-radius: 7px;\n  position: relative;\n}\n',
				''
			])
		},
		function(A, t, e) {
			'use strict'
			var g = e(57)
			e.n(g).a
		},
		function(A, t, e) {
			;(A.exports = e(2)(!1)).push([
				A.i,
				'.answer-paper-package {\n  background: #fff;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  position: relative;\n  font-family: "宋体";\n}\n.answer-paper-package.high-dpr .qrcode {\n  top: 64px;\n  left: 120px;\n}\n.answer-paper-package.high-dpr .page-bottom-flag {\n  left: 120px;\n  width: 126px;\n  height: 126px;\n  bottom: 42px;\n}\n.answer-paper-package.high-dpr .page-des {\n  font-size: 36px;\n  bottom: 65px;\n}\n.answer-paper-package .page-des {\n  text-align: center;\n  position: absolute;\n  bottom: 15px;\n  left: 0px;\n  width: 100%;\n  font-size: 12px;\n}\n.answer-paper-package.A4 {\n  width: 595px;\n  height: 855px;\n  padding: 42px 30px;\n  padding-top: 42px;\n  padding-bottom: 22px;\n}\n.answer-paper-package.A4.high-dpr {\n  width: 2380px;\n  height: 3420px;\n  padding: 168px 120px;\n  padding-top: 168px;\n  padding-bottom: 88px;\n}\n.answer-paper-package.A3 {\n  padding: 42px 50px;\n  padding-top: 42px;\n  padding-bottom: 22px;\n  width: 1240px;\n  height: 855px;\n}\n.answer-paper-package.A3.high-dpr {\n  padding: 168px 200px;\n  width: 4960px;\n  height: 3420px;\n  padding-top: 168px;\n  padding-bottom: 88px;\n}\n.answer-paper-package.A3.high-dpr .qrcode,\n.answer-paper-package.A3.high-dpr .page-bottom-flag {\n  left: 200px;\n}\n.answer-paper-package.A3 .qrcode,\n.answer-paper-package.A3 .page-bottom-flag {\n  left: 50px;\n}\n.answer-paper-package .left-paper {\n  float: left;\n}\n.answer-paper-package .right-paper {\n  float: right;\n}\n.answer-paper-package .right-paper::after {\n  content: \'\';\n  position: absolute;\n  width: 27px;\n  height: 27px;\n  background: #000;\n  bottom: -27px;\n  left: 0;\n}\n.answer-paper-package .right-paper::before {\n  content: \'\';\n  position: absolute;\n  width: 27px;\n  height: 27px;\n  background: #000;\n  top: -27px;\n  left: 0;\n}\n.answer-paper-package.high-dpr .right-paper::after {\n  content: \'\';\n  position: absolute;\n  width: 126px;\n  height: 126px;\n  background: #000;\n  bottom: -126px;\n  left: 0;\n}\n.answer-paper-package.high-dpr .right-paper::before {\n  content: \'\';\n  position: absolute;\n  width: 126px;\n  height: 126px;\n  background: #000;\n  top: -126px;\n  left: 0;\n}\n.answer-paper-package:last-child {\n  margin-bottom: 0px;\n}\n.answer-paper-package .qrcode {\n  display: inline-block;\n  position: absolute;\n  top: 20px;\n  left: 30px;\n}\n.answer-paper-package .page-bottom-flag {\n  width: 27px;\n  height: 27px;\n  background: #000;\n  position: absolute;\n  bottom: 15px;\n  left: 30px;\n  display: inline-block;\n}\n.answer-paper-package:not([data-page="1"]) .qrcode:after {\n  content: "";\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.answer-paper-package:not([data-page="1"]) .qrcode {\n  top: 15px;\n}\n.answer-paper-package:not([data-page="1"]).high-dpr .qrcode {\n  top: 42px;\n}\n',
				''
			])
		},
		function(A, t, e) {
			'use strict'
			var g = e(58)
			e.n(g).a
		},
		function(A, t, e) {
			;(A.exports = e(2)(!1)).push([
				A.i,
				'.answer-paper-manager .answer-paper-manager-content {\n  display: inline-block;\n  margin: 0 auto;\n}\n.answer-paper-manager.print-mode .btn-group,\n.answer-paper-manager.print-mode .scale-btn,\n.answer-paper-manager.print-mode .add-img-btn,\n.answer-paper-manager.print-mode .delete-img-btn {\n  display: none;\n}\n.answer-paper-manager .objective-question-bottom-flag {\n  display: none;\n}\n.answer-paper-manager .objective-question-bottom-flag:last-of-type {\n  display: block;\n}\n',
				''
			])
		},
		function(A, t, e) {
			var g =
					(function() {
						return this
					})() || Function('return this')(),
				C =
					g.regeneratorRuntime &&
					Object.getOwnPropertyNames(g).indexOf(
						'regeneratorRuntime'
					) >= 0,
				n = C && g.regeneratorRuntime
			if (((g.regeneratorRuntime = void 0), (A.exports = e(162)), C))
				g.regeneratorRuntime = n
			else
				try {
					delete g.regeneratorRuntime
				} catch (A) {
					g.regeneratorRuntime = void 0
				}
		},
		function(A, t) {
			!(function(t) {
				'use strict'
				var e,
					g = Object.prototype,
					C = g.hasOwnProperty,
					n = 'function' == typeof Symbol ? Symbol : {},
					I = n.iterator || '@@iterator',
					r = n.asyncIterator || '@@asyncIterator',
					o = n.toStringTag || '@@toStringTag',
					i = 'object' == typeof A,
					s = t.regeneratorRuntime
				if (s) i && (A.exports = s)
				else {
					;(s = t.regeneratorRuntime = i ? A.exports : {}).wrap = w
					var a = 'suspendedStart',
						c = 'suspendedYield',
						l = 'executing',
						u = 'completed',
						p = {},
						h = {}
					h[I] = function() {
						return this
					}
					var B = Object.getPrototypeOf,
						d = B && B(B(N([])))
					d && d !== g && C.call(d, I) && (h = d)
					var f = (E.prototype = m.prototype = Object.create(h))
					;(U.prototype = f.constructor = E),
						(E.constructor = U),
						(E[o] = U.displayName = 'GeneratorFunction'),
						(s.isGeneratorFunction = function(A) {
							var t = 'function' == typeof A && A.constructor
							return (
								!!t &&
								(t === U ||
									'GeneratorFunction' ===
										(t.displayName || t.name))
							)
						}),
						(s.mark = function(A) {
							return (
								Object.setPrototypeOf
									? Object.setPrototypeOf(A, E)
									: ((A.__proto__ = E),
									  o in A || (A[o] = 'GeneratorFunction')),
								(A.prototype = Object.create(f)),
								A
							)
						}),
						(s.awrap = function(A) {
							return { __await: A }
						}),
						v(b.prototype),
						(b.prototype[r] = function() {
							return this
						}),
						(s.AsyncIterator = b),
						(s.async = function(A, t, e, g) {
							var C = new b(w(A, t, e, g))
							return s.isGeneratorFunction(t)
								? C
								: C.next().then(function(A) {
										return A.done ? A.value : C.next()
								  })
						}),
						v(f),
						(f[o] = 'Generator'),
						(f[I] = function() {
							return this
						}),
						(f.toString = function() {
							return '[object Generator]'
						}),
						(s.keys = function(A) {
							var t = []
							for (var e in A) t.push(e)
							return (
								t.reverse(),
								function e() {
									for (; t.length; ) {
										var g = t.pop()
										if (g in A)
											return (
												(e.value = g), (e.done = !1), e
											)
									}
									return (e.done = !0), e
								}
							)
						}),
						(s.values = N),
						(y.prototype = {
							constructor: y,
							reset: function(A) {
								if (
									((this.prev = 0),
									(this.next = 0),
									(this.sent = this._sent = e),
									(this.done = !1),
									(this.delegate = null),
									(this.method = 'next'),
									(this.arg = e),
									this.tryEntries.forEach(H),
									!A)
								)
									for (var t in this)
										't' === t.charAt(0) &&
											C.call(this, t) &&
											!isNaN(+t.slice(1)) &&
											(this[t] = e)
							},
							stop: function() {
								this.done = !0
								var A = this.tryEntries[0].completion
								if ('throw' === A.type) throw A.arg
								return this.rval
							},
							dispatchException: function(A) {
								if (this.done) throw A
								var t = this
								function g(g, C) {
									return (
										(r.type = 'throw'),
										(r.arg = A),
										(t.next = g),
										C && ((t.method = 'next'), (t.arg = e)),
										!!C
									)
								}
								for (
									var n = this.tryEntries.length - 1;
									n >= 0;
									--n
								) {
									var I = this.tryEntries[n],
										r = I.completion
									if ('root' === I.tryLoc) return g('end')
									if (I.tryLoc <= this.prev) {
										var o = C.call(I, 'catchLoc'),
											i = C.call(I, 'finallyLoc')
										if (o && i) {
											if (this.prev < I.catchLoc)
												return g(I.catchLoc, !0)
											if (this.prev < I.finallyLoc)
												return g(I.finallyLoc)
										} else if (o) {
											if (this.prev < I.catchLoc)
												return g(I.catchLoc, !0)
										} else {
											if (!i)
												throw new Error(
													'try statement without catch or finally'
												)
											if (this.prev < I.finallyLoc)
												return g(I.finallyLoc)
										}
									}
								}
							},
							abrupt: function(A, t) {
								for (
									var e = this.tryEntries.length - 1;
									e >= 0;
									--e
								) {
									var g = this.tryEntries[e]
									if (
										g.tryLoc <= this.prev &&
										C.call(g, 'finallyLoc') &&
										this.prev < g.finallyLoc
									) {
										var n = g
										break
									}
								}
								n &&
									('break' === A || 'continue' === A) &&
									n.tryLoc <= t &&
									t <= n.finallyLoc &&
									(n = null)
								var I = n ? n.completion : {}
								return (
									(I.type = A),
									(I.arg = t),
									n
										? ((this.method = 'next'),
										  (this.next = n.finallyLoc),
										  p)
										: this.complete(I)
								)
							},
							complete: function(A, t) {
								if ('throw' === A.type) throw A.arg
								return (
									'break' === A.type || 'continue' === A.type
										? (this.next = A.arg)
										: 'return' === A.type
										? ((this.rval = this.arg = A.arg),
										  (this.method = 'return'),
										  (this.next = 'end'))
										: 'normal' === A.type &&
										  t &&
										  (this.next = t),
									p
								)
							},
							finish: function(A) {
								for (
									var t = this.tryEntries.length - 1;
									t >= 0;
									--t
								) {
									var e = this.tryEntries[t]
									if (e.finallyLoc === A)
										return (
											this.complete(
												e.completion,
												e.afterLoc
											),
											H(e),
											p
										)
								}
							},
							catch: function(A) {
								for (
									var t = this.tryEntries.length - 1;
									t >= 0;
									--t
								) {
									var e = this.tryEntries[t]
									if (e.tryLoc === A) {
										var g = e.completion
										if ('throw' === g.type) {
											var C = g.arg
											H(e)
										}
										return C
									}
								}
								throw new Error('illegal catch attempt')
							},
							delegateYield: function(A, t, g) {
								return (
									(this.delegate = {
										iterator: N(A),
										resultName: t,
										nextLoc: g
									}),
									'next' === this.method && (this.arg = e),
									p
								)
							}
						})
				}
				function w(A, t, e, g) {
					var C = t && t.prototype instanceof m ? t : m,
						n = Object.create(C.prototype),
						I = new y(g || [])
					return (
						(n._invoke = (function(A, t, e) {
							var g = a
							return function(C, n) {
								if (g === l)
									throw new Error(
										'Generator is already running'
									)
								if (g === u) {
									if ('throw' === C) throw n
									return K()
								}
								for (e.method = C, e.arg = n; ; ) {
									var I = e.delegate
									if (I) {
										var r = F(I, e)
										if (r) {
											if (r === p) continue
											return r
										}
									}
									if ('next' === e.method)
										e.sent = e._sent = e.arg
									else if ('throw' === e.method) {
										if (g === a) throw ((g = u), e.arg)
										e.dispatchException(e.arg)
									} else
										'return' === e.method &&
											e.abrupt('return', e.arg)
									g = l
									var o = Q(A, t, e)
									if ('normal' === o.type) {
										if (((g = e.done ? u : c), o.arg === p))
											continue
										return { value: o.arg, done: e.done }
									}
									'throw' === o.type &&
										((g = u),
										(e.method = 'throw'),
										(e.arg = o.arg))
								}
							}
						})(A, e, I)),
						n
					)
				}
				function Q(A, t, e) {
					try {
						return { type: 'normal', arg: A.call(t, e) }
					} catch (A) {
						return { type: 'throw', arg: A }
					}
				}
				function m() {}
				function U() {}
				function E() {}
				function v(A) {
					;['next', 'throw', 'return'].forEach(function(t) {
						A[t] = function(A) {
							return this._invoke(t, A)
						}
					})
				}
				function b(A) {
					var t
					this._invoke = function(e, g) {
						function n() {
							return new Promise(function(t, n) {
								!(function t(e, g, n, I) {
									var r = Q(A[e], A, g)
									if ('throw' !== r.type) {
										var o = r.arg,
											i = o.value
										return i &&
											'object' == typeof i &&
											C.call(i, '__await')
											? Promise.resolve(i.__await).then(
													function(A) {
														t('next', A, n, I)
													},
													function(A) {
														t('throw', A, n, I)
													}
											  )
											: Promise.resolve(i).then(function(
													A
											  ) {
													;(o.value = A), n(o)
											  },
											  I)
									}
									I(r.arg)
								})(e, g, t, n)
							})
						}
						return (t = t ? t.then(n, n) : n())
					}
				}
				function F(A, t) {
					var g = A.iterator[t.method]
					if (g === e) {
						if (((t.delegate = null), 'throw' === t.method)) {
							if (
								A.iterator.return &&
								((t.method = 'return'),
								(t.arg = e),
								F(A, t),
								'throw' === t.method)
							)
								return p
							;(t.method = 'throw'),
								(t.arg = new TypeError(
									"The iterator does not provide a 'throw' method"
								))
						}
						return p
					}
					var C = Q(g, A.iterator, t.arg)
					if ('throw' === C.type)
						return (
							(t.method = 'throw'),
							(t.arg = C.arg),
							(t.delegate = null),
							p
						)
					var n = C.arg
					return n
						? n.done
							? ((t[A.resultName] = n.value),
							  (t.next = A.nextLoc),
							  'return' !== t.method &&
									((t.method = 'next'), (t.arg = e)),
							  (t.delegate = null),
							  p)
							: n
						: ((t.method = 'throw'),
						  (t.arg = new TypeError(
								'iterator result is not an object'
						  )),
						  (t.delegate = null),
						  p)
				}
				function x(A) {
					var t = { tryLoc: A[0] }
					1 in A && (t.catchLoc = A[1]),
						2 in A && ((t.finallyLoc = A[2]), (t.afterLoc = A[3])),
						this.tryEntries.push(t)
				}
				function H(A) {
					var t = A.completion || {}
					;(t.type = 'normal'), delete t.arg, (A.completion = t)
				}
				function y(A) {
					;(this.tryEntries = [{ tryLoc: 'root' }]),
						A.forEach(x, this),
						this.reset(!0)
				}
				function N(A) {
					if (A) {
						var t = A[I]
						if (t) return t.call(A)
						if ('function' == typeof A.next) return A
						if (!isNaN(A.length)) {
							var g = -1,
								n = function t() {
									for (; ++g < A.length; )
										if (C.call(A, g))
											return (
												(t.value = A[g]),
												(t.done = !1),
												t
											)
									return (t.value = e), (t.done = !0), t
								}
							return (n.next = n)
						}
					}
					return { next: K }
				}
				function K() {
					return { value: e, done: !0 }
				}
			})(
				(function() {
					return this
				})() || Function('return this')()
			)
		},
		function(A, t, e) {
			e(83),
				e(93),
				e(164),
				e(168),
				e(176),
				e(177),
				(A.exports = e(4).Promise)
		},
		function(A, t, e) {
			e(165)
			for (
				var g = e(1),
					C = e(16),
					n = e(42),
					I = e(8)('toStringTag'),
					r = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
						','
					),
					o = 0;
				o < r.length;
				o++
			) {
				var i = r[o],
					s = g[i],
					a = s && s.prototype
				a && !a[I] && C(a, I, i), (n[i] = n.Array)
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(166),
				C = e(167),
				n = e(42),
				I = e(18)
			;(A.exports = e(94)(
				Array,
				'Array',
				function(A, t) {
					;(this._t = I(A)), (this._i = 0), (this._k = t)
				},
				function() {
					var A = this._t,
						t = this._k,
						e = this._i++
					return !A || e >= A.length
						? ((this._t = void 0), C(1))
						: C(
								0,
								'keys' == t
									? e
									: 'values' == t
									? A[e]
									: [e, A[e]]
						  )
				},
				'values'
			)),
				(n.Arguments = n.Array),
				g('keys'),
				g('values'),
				g('entries')
		},
		function(A, t) {
			A.exports = function() {}
		},
		function(A, t) {
			A.exports = function(A, t) {
				return { value: t, done: !!A }
			}
		},
		function(A, t, e) {
			'use strict'
			var g,
				C,
				n,
				I,
				r = e(23),
				o = e(1),
				i = e(20),
				s = e(99),
				a = e(15),
				c = e(9),
				l = e(27),
				u = e(169),
				p = e(170),
				h = e(102),
				B = e(103).set,
				d = e(172)(),
				f = e(72),
				w = e(104),
				Q = e(173),
				m = e(105),
				U = o.TypeError,
				E = o.process,
				v = E && E.versions,
				b = (v && v.v8) || '',
				F = o.Promise,
				x = 'process' == s(E),
				H = function() {},
				y = (C = f.f),
				N = !!(function() {
					try {
						var A = F.resolve(1),
							t = ((A.constructor = {})[
								e(8)('species')
							] = function(A) {
								A(H, H)
							})
						return (
							(x || 'function' == typeof PromiseRejectionEvent) &&
							A.then(H) instanceof t &&
							0 !== b.indexOf('6.6') &&
							-1 === Q.indexOf('Chrome/66')
						)
					} catch (A) {}
				})(),
				K = function(A) {
					var t
					return !(!c(A) || 'function' != typeof (t = A.then)) && t
				},
				T = function(A, t) {
					if (!A._n) {
						A._n = !0
						var e = A._c
						d(function() {
							for (
								var g = A._v,
									C = 1 == A._s,
									n = 0,
									I = function(t) {
										var e,
											n,
											I,
											r = C ? t.ok : t.fail,
											o = t.resolve,
											i = t.reject,
											s = t.domain
										try {
											r
												? (C ||
														(2 == A._h && R(A),
														(A._h = 1)),
												  !0 === r
														? (e = g)
														: (s && s.enter(),
														  (e = r(g)),
														  s &&
																(s.exit(),
																(I = !0))),
												  e === t.promise
														? i(
																U(
																	'Promise-chain cycle'
																)
														  )
														: (n = K(e))
														? n.call(e, o, i)
														: o(e))
												: i(g)
										} catch (A) {
											s && !I && s.exit(), i(A)
										}
									};
								e.length > n;

							)
								I(e[n++])
							;(A._c = []), (A._n = !1), t && !A._h && _(A)
						})
					}
				},
				_ = function(A) {
					B.call(o, function() {
						var t,
							e,
							g,
							C = A._v,
							n = k(A)
						if (
							(n &&
								((t = w(function() {
									x
										? E.emit('unhandledRejection', C, A)
										: (e = o.onunhandledrejection)
										? e({ promise: A, reason: C })
										: (g = o.console) &&
										  g.error &&
										  g.error(
												'Unhandled promise rejection',
												C
										  )
								})),
								(A._h = x || k(A) ? 2 : 1)),
							(A._a = void 0),
							n && t.e)
						)
							throw t.v
					})
				},
				k = function(A) {
					return 1 !== A._h && 0 === (A._a || A._c).length
				},
				R = function(A) {
					B.call(o, function() {
						var t
						x
							? E.emit('rejectionHandled', A)
							: (t = o.onrejectionhandled) &&
							  t({ promise: A, reason: A._v })
					})
				},
				L = function(A) {
					var t = this
					t._d ||
						((t._d = !0),
						((t = t._w || t)._v = A),
						(t._s = 2),
						t._a || (t._a = t._c.slice()),
						T(t, !0))
				},
				S = function(A) {
					var t,
						e = this
					if (!e._d) {
						;(e._d = !0), (e = e._w || e)
						try {
							if (e === A)
								throw U("Promise can't be resolved itself")
							;(t = K(A))
								? d(function() {
										var g = { _w: e, _d: !1 }
										try {
											t.call(A, i(S, g, 1), i(L, g, 1))
										} catch (A) {
											L.call(g, A)
										}
								  })
								: ((e._v = A), (e._s = 1), T(e, !1))
						} catch (A) {
							L.call({ _w: e, _d: !1 }, A)
						}
					}
				}
			N ||
				((F = function(A) {
					u(this, F, 'Promise', '_h'), l(A), g.call(this)
					try {
						A(i(S, this, 1), i(L, this, 1))
					} catch (A) {
						L.call(this, A)
					}
				}),
				((g = function(A) {
					;(this._c = []),
						(this._a = void 0),
						(this._s = 0),
						(this._d = !1),
						(this._v = void 0),
						(this._h = 0),
						(this._n = !1)
				}).prototype = e(174)(F.prototype, {
					then: function(A, t) {
						var e = y(h(this, F))
						return (
							(e.ok = 'function' != typeof A || A),
							(e.fail = 'function' == typeof t && t),
							(e.domain = x ? E.domain : void 0),
							this._c.push(e),
							this._a && this._a.push(e),
							this._s && T(this, !1),
							e.promise
						)
					},
					catch: function(A) {
						return this.then(void 0, A)
					}
				})),
				(n = function() {
					var A = new g()
					;(this.promise = A),
						(this.resolve = i(S, A, 1)),
						(this.reject = i(L, A, 1))
				}),
				(f.f = y = function(A) {
					return A === F || A === I ? new n(A) : C(A)
				})),
				a(a.G + a.W + a.F * !N, { Promise: F }),
				e(44)(F, 'Promise'),
				e(175)('Promise'),
				(I = e(4).Promise),
				a(a.S + a.F * !N, 'Promise', {
					reject: function(A) {
						var t = y(this)
						return (0, t.reject)(A), t.promise
					}
				}),
				a(a.S + a.F * (r || !N), 'Promise', {
					resolve: function(A) {
						return m(r && this === I ? F : this, A)
					}
				}),
				a(
					a.S +
						a.F *
							!(
								N &&
								e(100)(function(A) {
									F.all(A).catch(H)
								})
							),
					'Promise',
					{
						all: function(A) {
							var t = this,
								e = y(t),
								g = e.resolve,
								C = e.reject,
								n = w(function() {
									var e = [],
										n = 0,
										I = 1
									p(A, !1, function(A) {
										var r = n++,
											o = !1
										e.push(void 0),
											I++,
											t.resolve(A).then(function(A) {
												o ||
													((o = !0),
													(e[r] = A),
													--I || g(e))
											}, C)
									}),
										--I || g(e)
								})
							return n.e && C(n.v), e.promise
						},
						race: function(A) {
							var t = this,
								e = y(t),
								g = e.reject,
								C = w(function() {
									p(A, !1, function(A) {
										t.resolve(A).then(e.resolve, g)
									})
								})
							return C.e && g(C.v), e.promise
						}
					}
				)
		},
		function(A, t) {
			A.exports = function(A, t, e, g) {
				if (!(A instanceof t) || (void 0 !== g && g in A))
					throw TypeError(e + ': incorrect invocation!')
				return A
			}
		},
		function(A, t, e) {
			var g = e(20),
				C = e(96),
				n = e(97),
				I = e(11),
				r = e(36),
				o = e(98),
				i = {},
				s = {}
			;((t = A.exports = function(A, t, e, a, c) {
				var l,
					u,
					p,
					h,
					B = c
						? function() {
								return A
						  }
						: o(A),
					d = g(e, a, t ? 2 : 1),
					f = 0
				if ('function' != typeof B)
					throw TypeError(A + ' is not iterable!')
				if (n(B)) {
					for (l = r(A.length); l > f; f++)
						if (
							(h = t ? d(I((u = A[f]))[0], u[1]) : d(A[f])) ===
								i ||
							h === s
						)
							return h
				} else
					for (p = B.call(A); !(u = p.next()).done; )
						if ((h = C(p, d, u.value, t)) === i || h === s) return h
			}).BREAK = i),
				(t.RETURN = s)
		},
		function(A, t) {
			A.exports = function(A, t, e) {
				var g = void 0 === e
				switch (t.length) {
					case 0:
						return g ? A() : A.call(e)
					case 1:
						return g ? A(t[0]) : A.call(e, t[0])
					case 2:
						return g ? A(t[0], t[1]) : A.call(e, t[0], t[1])
					case 3:
						return g
							? A(t[0], t[1], t[2])
							: A.call(e, t[0], t[1], t[2])
					case 4:
						return g
							? A(t[0], t[1], t[2], t[3])
							: A.call(e, t[0], t[1], t[2], t[3])
				}
				return A.apply(e, t)
			}
		},
		function(A, t, e) {
			var g = e(1),
				C = e(103).set,
				n = g.MutationObserver || g.WebKitMutationObserver,
				I = g.process,
				r = g.Promise,
				o = 'process' == e(22)(I)
			A.exports = function() {
				var A,
					t,
					e,
					i = function() {
						var g, C
						for (o && (g = I.domain) && g.exit(); A; ) {
							;(C = A.fn), (A = A.next)
							try {
								C()
							} catch (g) {
								throw (A ? e() : (t = void 0), g)
							}
						}
						;(t = void 0), g && g.enter()
					}
				if (o)
					e = function() {
						I.nextTick(i)
					}
				else if (!n || (g.navigator && g.navigator.standalone))
					if (r && r.resolve) {
						var s = r.resolve(void 0)
						e = function() {
							s.then(i)
						}
					} else
						e = function() {
							C.call(g, i)
						}
				else {
					var a = !0,
						c = document.createTextNode('')
					new n(i).observe(c, { characterData: !0 }),
						(e = function() {
							c.data = a = !a
						})
				}
				return function(g) {
					var C = { fn: g, next: void 0 }
					t && (t.next = C), A || ((A = C), e()), (t = C)
				}
			}
		},
		function(A, t, e) {
			var g = e(1).navigator
			A.exports = (g && g.userAgent) || ''
		},
		function(A, t, e) {
			var g = e(16)
			A.exports = function(A, t, e) {
				for (var C in t) e && A[C] ? (A[C] = t[C]) : g(A, C, t[C])
				return A
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(1),
				C = e(4),
				n = e(7),
				I = e(6),
				r = e(8)('species')
			A.exports = function(A) {
				var t = 'function' == typeof C[A] ? C[A] : g[A]
				I &&
					t &&
					!t[r] &&
					n.f(t, r, {
						configurable: !0,
						get: function() {
							return this
						}
					})
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(15),
				C = e(4),
				n = e(1),
				I = e(102),
				r = e(105)
			g(g.P + g.R, 'Promise', {
				finally: function(A) {
					var t = I(this, C.Promise || n.Promise),
						e = 'function' == typeof A
					return this.then(
						e
							? function(e) {
									return r(t, A()).then(function() {
										return e
									})
							  }
							: A,
						e
							? function(e) {
									return r(t, A()).then(function() {
										throw e
									})
							  }
							: A
					)
				}
			})
		},
		function(A, t, e) {
			'use strict'
			var g = e(15),
				C = e(72),
				n = e(104)
			g(g.S, 'Promise', {
				try: function(A) {
					var t = C.f(this),
						e = n(A)
					return (e.e ? t.reject : t.resolve)(e.v), t.promise
				}
			})
		},
		function(A, t, e) {
			'use strict'
			var g = e(59)
			e.n(g).a
		},
		function(A, t, e) {
			;(A.exports = e(2)(!1)).push([
				A.i,
				'.answer-paper-print {\n  display: inline-block;\n  position: fixed;\n  left: 200%;\n  top: 0%;\n}\n.answer-paper-print .btn-group,\n.answer-paper-print .scale-btn,\n.answer-paper-print .add-img-btn,\n.answer-paper-print .delete-img-btn {\n  display: none;\n}\n',
				''
			])
		},
		function(A, t, e) {
			'use strict'
			var g = e(60)
			e.n(g).a
		},
		function(A, t, e) {
			;(A.exports = e(2)(!1)).push([
				A.i,
				'.pc-tips[data-v-f69e01bc] {\n  color: red;\n  text-align: center;\n  margin-top: -30px;\n  margin-bottom: 20px;\n}\n.excel-table[data-v-f69e01bc] {\n  width: 630px;\n  height: auto;\n  overflow: hidden;\n  margin: 0px auto;\n  text-align: left;\n}\n.excel-table .table-item[data-v-f69e01bc] {\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n  margin-bottom: 8px;\n  border-radius: 4px;\n  background-color: #f4f7fc;\n  padding: 0px 15px;\n}\n.excel-table .table-item .title[data-v-f69e01bc] {\n  text-align: left;\n  padding: 16px 0px;\n}\n.excel-table .table-item .title span[data-v-f69e01bc] {\n  font-weight: bold;\n  color: #2d3039;\n}\n.excel-table .table-item p[data-v-f69e01bc] {\n  color: #90999e;\n  font-size: 12px;\n  margin-bottom: 8px;\n}\n.excel-table .table-item .checkbox-all[data-v-f69e01bc] {\n  line-height: 20px;\n}\n.excel-table .table-item .checkbox-all .export-label[data-v-f69e01bc] {\n  margin-left: 0px;\n  margin-right: 30px;\n  margin-bottom: 16px;\n}\n',
				''
			])
		},
		function(A, t, e) {
			'use strict'
			var g = e(61)
			e.n(g).a
		},
		function(A, t, e) {
			;(A.exports = e(2)(!1)).push([
				A.i,
				'.set-box[data-v-7da27963] {\n  text-align: left;\n}\n.set-box .tip-text[data-v-7da27963] {\n  color: #81868d;\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.set-box .set-wrapper[data-v-7da27963] {\n  height: auto;\n  overflow: hidden;\n}\n.set-box .set-wrapper .subsection-item[data-v-7da27963] {\n  float: left;\n  line-height: 36px;\n}\n.set-box .set-wrapper .subsection-item[data-v-7da27963]:nth-child(2n) {\n  float: right;\n}\n.set-box .set-wrapper .subsection-item span[data-v-7da27963] {\n  margin-right: 9px;\n}\n.set-box .set-wrapper .subsection-item span[data-v-7da27963]:last-child {\n  margin-left: 9px;\n}\n.set-box .set-wrapper .subsection-item input[data-v-7da27963] {\n  display: inline-block;\n  width: 32px;\n  height: 18px;\n  border-radius: 2px;\n  outline: none;\n  border: 1px solid #dee1e5;\n  text-align: center;\n  color: #81868d;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n',
				''
			])
		},
		function(A, t, e) {
			var g = e(4),
				C = g.JSON || (g.JSON = { stringify: JSON.stringify })
			A.exports = function(A) {
				return C.stringify.apply(C, arguments)
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(62)
			e.n(g).a
		},
		function(A, t, e) {
			;(A.exports = e(2)(!1)).push([
				A.i,
				'.box-screen[data-v-27342c4c] {\n  width: 192px;\n  height: auto;\n  overflow: hidden;\n  padding: 20px;\n  background-color: #ffffff;\n  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  border: solid 1px #eff0f2;\n  position: absolute;\n  right: 0px;\n  font-size: 12px;\n  z-index: 9;\n}\n.box-screen .close-text[data-v-27342c4c] {\n  text-align: right;\n  color: #999999;\n  line-height: 36px;\n  cursor: pointer;\n}\n.box-screen .close-text.close-box-title[data-v-27342c4c] {\n  text-align: left;\n}\n.box-screen .list li[data-v-27342c4c] {\n  height: 32px;\n  line-height: 32px;\n  background-color: #f8f8fa;\n  border-radius: 4px;\n  color: #333333;\n  padding: 0px 10px;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n.box-screen .list li.screen-before[data-v-27342c4c]:hover {\n  background-color: #e9faf6;\n}\n.box-screen .list li.screen-after[data-v-27342c4c]:hover {\n  background-color: #e5f3ff;\n}\n.box-screen .list li .el-icon-close[data-v-27342c4c] {\n  float: right;\n  font-size: 14px;\n  margin-top: 9px;\n}\n',
				''
			])
		},
		function(A, t, e) {
			'use strict'
			var g = e(12),
				C = e(106),
				n = e(189),
				I = e(73)
			function r(A) {
				var t = new n(A),
					e = C(n.prototype.request, t)
				return g.extend(e, n.prototype, t), g.extend(e, t), e
			}
			var o = r(I)
			;(o.Axios = n),
				(o.create = function(A) {
					return r(g.merge(I, A))
				}),
				(o.Cancel = e(110)),
				(o.CancelToken = e(203)),
				(o.isCancel = e(109)),
				(o.all = function(A) {
					return Promise.all(A)
				}),
				(o.spread = e(204)),
				(A.exports = o),
				(A.exports.default = o)
		},
		function(A, t) {
			/*!
			 * Determine if an object is a Buffer
			 *
			 * @author   Feross Aboukhadijeh <https://feross.org>
			 * @license  MIT
			 */
			A.exports = function(A) {
				return (
					null != A &&
					null != A.constructor &&
					'function' == typeof A.constructor.isBuffer &&
					A.constructor.isBuffer(A)
				)
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(73),
				C = e(12),
				n = e(198),
				I = e(199)
			function r(A) {
				;(this.defaults = A),
					(this.interceptors = {
						request: new n(),
						response: new n()
					})
			}
			;(r.prototype.request = function(A) {
				'string' == typeof A &&
					(A = C.merge({ url: arguments[0] }, arguments[1])),
					((A = C.merge(
						g,
						{ method: 'get' },
						this.defaults,
						A
					)).method = A.method.toLowerCase())
				var t = [I, void 0],
					e = Promise.resolve(A)
				for (
					this.interceptors.request.forEach(function(A) {
						t.unshift(A.fulfilled, A.rejected)
					}),
						this.interceptors.response.forEach(function(A) {
							t.push(A.fulfilled, A.rejected)
						});
					t.length;

				)
					e = e.then(t.shift(), t.shift())
				return e
			}),
				C.forEach(['delete', 'get', 'head', 'options'], function(A) {
					r.prototype[A] = function(t, e) {
						return this.request(
							C.merge(e || {}, { method: A, url: t })
						)
					}
				}),
				C.forEach(['post', 'put', 'patch'], function(A) {
					r.prototype[A] = function(t, e, g) {
						return this.request(
							C.merge(g || {}, { method: A, url: t, data: e })
						)
					}
				}),
				(A.exports = r)
		},
		function(A, t) {
			var e,
				g,
				C = (A.exports = {})
			function n() {
				throw new Error('setTimeout has not been defined')
			}
			function I() {
				throw new Error('clearTimeout has not been defined')
			}
			function r(A) {
				if (e === setTimeout) return setTimeout(A, 0)
				if ((e === n || !e) && setTimeout)
					return (e = setTimeout), setTimeout(A, 0)
				try {
					return e(A, 0)
				} catch (t) {
					try {
						return e.call(null, A, 0)
					} catch (t) {
						return e.call(this, A, 0)
					}
				}
			}
			!(function() {
				try {
					e = 'function' == typeof setTimeout ? setTimeout : n
				} catch (A) {
					e = n
				}
				try {
					g = 'function' == typeof clearTimeout ? clearTimeout : I
				} catch (A) {
					g = I
				}
			})()
			var o,
				i = [],
				s = !1,
				a = -1
			function c() {
				s &&
					o &&
					((s = !1),
					o.length ? (i = o.concat(i)) : (a = -1),
					i.length && l())
			}
			function l() {
				if (!s) {
					var A = r(c)
					s = !0
					for (var t = i.length; t; ) {
						for (o = i, i = []; ++a < t; ) o && o[a].run()
						;(a = -1), (t = i.length)
					}
					;(o = null),
						(s = !1),
						(function(A) {
							if (g === clearTimeout) return clearTimeout(A)
							if ((g === I || !g) && clearTimeout)
								return (g = clearTimeout), clearTimeout(A)
							try {
								g(A)
							} catch (t) {
								try {
									return g.call(null, A)
								} catch (t) {
									return g.call(this, A)
								}
							}
						})(A)
				}
			}
			function u(A, t) {
				;(this.fun = A), (this.array = t)
			}
			function p() {}
			;(C.nextTick = function(A) {
				var t = new Array(arguments.length - 1)
				if (arguments.length > 1)
					for (var e = 1; e < arguments.length; e++)
						t[e - 1] = arguments[e]
				i.push(new u(A, t)), 1 !== i.length || s || r(l)
			}),
				(u.prototype.run = function() {
					this.fun.apply(null, this.array)
				}),
				(C.title = 'browser'),
				(C.browser = !0),
				(C.env = {}),
				(C.argv = []),
				(C.version = ''),
				(C.versions = {}),
				(C.on = p),
				(C.addListener = p),
				(C.once = p),
				(C.off = p),
				(C.removeListener = p),
				(C.removeAllListeners = p),
				(C.emit = p),
				(C.prependListener = p),
				(C.prependOnceListener = p),
				(C.listeners = function(A) {
					return []
				}),
				(C.binding = function(A) {
					throw new Error('process.binding is not supported')
				}),
				(C.cwd = function() {
					return '/'
				}),
				(C.chdir = function(A) {
					throw new Error('process.chdir is not supported')
				}),
				(C.umask = function() {
					return 0
				})
		},
		function(A, t, e) {
			'use strict'
			var g = e(12)
			A.exports = function(A, t) {
				g.forEach(A, function(e, g) {
					g !== t &&
						g.toUpperCase() === t.toUpperCase() &&
						((A[t] = e), delete A[g])
				})
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(108)
			A.exports = function(A, t, e) {
				var C = e.config.validateStatus
				e.status && C && !C(e.status)
					? t(
							g(
								'Request failed with status code ' + e.status,
								e.config,
								null,
								e.request,
								e
							)
					  )
					: A(e)
			}
		},
		function(A, t, e) {
			'use strict'
			A.exports = function(A, t, e, g, C) {
				return (
					(A.config = t),
					e && (A.code = e),
					(A.request = g),
					(A.response = C),
					A
				)
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(12)
			function C(A) {
				return encodeURIComponent(A)
					.replace(/%40/gi, '@')
					.replace(/%3A/gi, ':')
					.replace(/%24/g, '$')
					.replace(/%2C/gi, ',')
					.replace(/%20/g, '+')
					.replace(/%5B/gi, '[')
					.replace(/%5D/gi, ']')
			}
			A.exports = function(A, t, e) {
				if (!t) return A
				var n
				if (e) n = e(t)
				else if (g.isURLSearchParams(t)) n = t.toString()
				else {
					var I = []
					g.forEach(t, function(A, t) {
						null != A &&
							(g.isArray(A) ? (t += '[]') : (A = [A]),
							g.forEach(A, function(A) {
								g.isDate(A)
									? (A = A.toISOString())
									: g.isObject(A) && (A = JSON.stringify(A)),
									I.push(C(t) + '=' + C(A))
							}))
					}),
						(n = I.join('&'))
				}
				return n && (A += (-1 === A.indexOf('?') ? '?' : '&') + n), A
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(12),
				C = [
					'age',
					'authorization',
					'content-length',
					'content-type',
					'etag',
					'expires',
					'from',
					'host',
					'if-modified-since',
					'if-unmodified-since',
					'last-modified',
					'location',
					'max-forwards',
					'proxy-authorization',
					'referer',
					'retry-after',
					'user-agent'
				]
			A.exports = function(A) {
				var t,
					e,
					n,
					I = {}
				return A
					? (g.forEach(A.split('\n'), function(A) {
							if (
								((n = A.indexOf(':')),
								(t = g.trim(A.substr(0, n)).toLowerCase()),
								(e = g.trim(A.substr(n + 1))),
								t)
							) {
								if (I[t] && C.indexOf(t) >= 0) return
								I[t] =
									'set-cookie' === t
										? (I[t] ? I[t] : []).concat([e])
										: I[t]
										? I[t] + ', ' + e
										: e
							}
					  }),
					  I)
					: I
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(12)
			A.exports = g.isStandardBrowserEnv()
				? (function() {
						var A,
							t = /(msie|trident)/i.test(navigator.userAgent),
							e = document.createElement('a')
						function C(A) {
							var g = A
							return (
								t && (e.setAttribute('href', g), (g = e.href)),
								e.setAttribute('href', g),
								{
									href: e.href,
									protocol: e.protocol
										? e.protocol.replace(/:$/, '')
										: '',
									host: e.host,
									search: e.search
										? e.search.replace(/^\?/, '')
										: '',
									hash: e.hash
										? e.hash.replace(/^#/, '')
										: '',
									hostname: e.hostname,
									port: e.port,
									pathname:
										'/' === e.pathname.charAt(0)
											? e.pathname
											: '/' + e.pathname
								}
							)
						}
						return (
							(A = C(window.location.href)),
							function(t) {
								var e = g.isString(t) ? C(t) : t
								return (
									e.protocol === A.protocol &&
									e.host === A.host
								)
							}
						)
				  })()
				: function() {
						return !0
				  }
		},
		function(A, t, e) {
			'use strict'
			var g = e(12)
			A.exports = g.isStandardBrowserEnv()
				? {
						write: function(A, t, e, C, n, I) {
							var r = []
							r.push(A + '=' + encodeURIComponent(t)),
								g.isNumber(e) &&
									r.push(
										'expires=' + new Date(e).toGMTString()
									),
								g.isString(C) && r.push('path=' + C),
								g.isString(n) && r.push('domain=' + n),
								!0 === I && r.push('secure'),
								(document.cookie = r.join('; '))
						},
						read: function(A) {
							var t = document.cookie.match(
								new RegExp('(^|;\\s*)(' + A + ')=([^;]*)')
							)
							return t ? decodeURIComponent(t[3]) : null
						},
						remove: function(A) {
							this.write(A, '', Date.now() - 864e5)
						}
				  }
				: {
						write: function() {},
						read: function() {
							return null
						},
						remove: function() {}
				  }
		},
		function(A, t, e) {
			'use strict'
			var g = e(12)
			function C() {
				this.handlers = []
			}
			;(C.prototype.use = function(A, t) {
				return (
					this.handlers.push({ fulfilled: A, rejected: t }),
					this.handlers.length - 1
				)
			}),
				(C.prototype.eject = function(A) {
					this.handlers[A] && (this.handlers[A] = null)
				}),
				(C.prototype.forEach = function(A) {
					g.forEach(this.handlers, function(t) {
						null !== t && A(t)
					})
				}),
				(A.exports = C)
		},
		function(A, t, e) {
			'use strict'
			var g = e(12),
				C = e(200),
				n = e(109),
				I = e(73),
				r = e(201),
				o = e(202)
			function i(A) {
				A.cancelToken && A.cancelToken.throwIfRequested()
			}
			A.exports = function(A) {
				return (
					i(A),
					A.baseURL && !r(A.url) && (A.url = o(A.baseURL, A.url)),
					(A.headers = A.headers || {}),
					(A.data = C(A.data, A.headers, A.transformRequest)),
					(A.headers = g.merge(
						A.headers.common || {},
						A.headers[A.method] || {},
						A.headers || {}
					)),
					g.forEach(
						[
							'delete',
							'get',
							'head',
							'post',
							'put',
							'patch',
							'common'
						],
						function(t) {
							delete A.headers[t]
						}
					),
					(A.adapter || I.adapter)(A).then(
						function(t) {
							return (
								i(A),
								(t.data = C(
									t.data,
									t.headers,
									A.transformResponse
								)),
								t
							)
						},
						function(t) {
							return (
								n(t) ||
									(i(A),
									t &&
										t.response &&
										(t.response.data = C(
											t.response.data,
											t.response.headers,
											A.transformResponse
										))),
								Promise.reject(t)
							)
						}
					)
				)
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(12)
			A.exports = function(A, t, e) {
				return (
					g.forEach(e, function(e) {
						A = e(A, t)
					}),
					A
				)
			}
		},
		function(A, t, e) {
			'use strict'
			A.exports = function(A) {
				return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(A)
			}
		},
		function(A, t, e) {
			'use strict'
			A.exports = function(A, t) {
				return t
					? A.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '')
					: A
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(110)
			function C(A) {
				if ('function' != typeof A)
					throw new TypeError('executor must be a function.')
				var t
				this.promise = new Promise(function(A) {
					t = A
				})
				var e = this
				A(function(A) {
					e.reason || ((e.reason = new g(A)), t(e.reason))
				})
			}
			;(C.prototype.throwIfRequested = function() {
				if (this.reason) throw this.reason
			}),
				(C.source = function() {
					var A
					return {
						token: new C(function(t) {
							A = t
						}),
						cancel: A
					}
				}),
				(A.exports = C)
		},
		function(A, t, e) {
			'use strict'
			A.exports = function(A) {
				return function(t) {
					return A.apply(null, t)
				}
			}
		},
		function(A, t, e) {
			'use strict'
			var g = e(63)
			e.n(g).a
		},
		function(A, t, e) {
			;(A.exports = e(2)(!1)).push([
				A.i,
				'.allContrast[data-v-2f8b8568] {\n  width: 100%;\n  margin-bottom: 6px;\n  padding-left: 8px;\n  text-align: left;\n}\n.page-box[data-v-2f8b8568] {\n  text-align: center;\n}\n.examination-list[data-v-2f8b8568] {\n  height: auto;\n  overflow: hidden;\n  width: 100%;\n  padding-bottom: 16px;\n}\n.examination-list .examination-item[data-v-2f8b8568] {\n  position: relative;\n  height: 53px;\n  line-height: 53px;\n  width: 100%;\n  cursor: pointer;\n  box-sizing: border-box;\n  border-bottom: 1px solid #ecedf2;\n  padding: 0px 8px;\n  text-align: left;\n}\n.examination-list .examination-item .el-radio[data-v-2f8b8568] {\n  margin-right: 0px;\n  width: 100%;\n  height: 53px;\n  line-height: 53px;\n}\n.examination-list .examination-item .el-radio .exam-type[data-v-2f8b8568] {\n  background-color: #f12b2c;\n  color: #ffffff;\n  display: inline-block;\n  width: 28px;\n  height: 16px;\n  text-align: center;\n  line-height: 16px;\n  border-radius: 4px;\n  font-size: 12px;\n  margin-left: 10px;\n}\n.examination-list .examination-item .el-radio .exam-time[data-v-2f8b8568] {\n  float: right;\n  color: #606266;\n}\n.examination-list .examination-item .exam-name[data-v-2f8b8568] {\n  color: #606266;\n  font-size: 14px !important;\n  font-weight: 500;\n}\n.examination-list .examination-item.pcStyle[data-v-2f8b8568]:hover {\n  background-color: #f4fdfa;\n}\n.examination-list .examination-item[data-v-2f8b8568]:hover {\n  background-color: #e5f3ff;\n}\n',
				''
			])
		},
		function(A, t, e) {
			'use strict'
			var g = e(64)
			e.n(g).a
		},
		function(A, t, e) {
			;(A.exports = e(2)(!1)).push([
				A.i,
				'.seal-line[data-v-54d9e42a] {\n  width: 70px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  min-height: 900px;\n  align-items: center;\n  border-right: 1px dashed #999999;\n}\n.seal-line > span[data-v-54d9e42a] {\n  display: inline-block;\n  transform: rotate(-90deg);\n  margin-top: 150px;\n  width: 150px;\n}\n.seal-line > span[data-v-54d9e42a]:nth-child(1) {\n  margin-top: 120px;\n}\n',
				''
			])
		},
		function(A, t, e) {
			var g = e(210),
				C = e(213)
			A.exports = function(A, t) {
				return null != t && void 0 !== C && t[g]
					? t[g](A)
					: (function(A, t) {
							return null != t && void 0 !== C && t[g]
								? t[g](A)
								: A instanceof t
					  })(A, t)
			}
		},
		function(A, t, e) {
			A.exports = e(211)
		},
		function(A, t, e) {
			e(212), (A.exports = e(74).f('hasInstance'))
		},
		function(A, t, e) {
			'use strict'
			var g = e(9),
				C = e(82),
				n = e(8)('hasInstance'),
				I = Function.prototype
			n in I ||
				e(7).f(I, n, {
					value: function(A) {
						if ('function' != typeof this || !g(A)) return !1
						if (!g(this.prototype)) return A instanceof this
						for (; (A = C(A)); ) if (this.prototype === A) return !0
						return !1
					}
				})
		},
		function(A, t, e) {
			A.exports = e(214)
		},
		function(A, t, e) {
			e(215), e(83), e(221), e(222), (A.exports = e(4).Symbol)
		},
		function(A, t, e) {
			'use strict'
			var g = e(1),
				C = e(10),
				n = e(6),
				I = e(15),
				r = e(80),
				o = e(216).KEY,
				i = e(17),
				s = e(31),
				a = e(44),
				c = e(26),
				l = e(8),
				u = e(74),
				p = e(75),
				h = e(217),
				B = e(218),
				d = e(11),
				f = e(9),
				w = e(18),
				Q = e(34),
				m = e(21),
				U = e(81),
				E = e(219),
				v = e(220),
				b = e(7),
				F = e(28),
				x = v.f,
				H = b.f,
				y = E.f,
				N = g.Symbol,
				K = g.JSON,
				T = K && K.stringify,
				_ = l('_hidden'),
				k = l('toPrimitive'),
				R = {}.propertyIsEnumerable,
				L = s('symbol-registry'),
				S = s('symbols'),
				D = s('op-symbols'),
				O = Object.prototype,
				M = 'function' == typeof N,
				P = g.QObject,
				z = !P || !P.prototype || !P.prototype.findChild,
				G =
					n &&
					i(function() {
						return (
							7 !=
							U(
								H({}, 'a', {
									get: function() {
										return H(this, 'a', { value: 7 }).a
									}
								})
							).a
						)
					})
						? function(A, t, e) {
								var g = x(O, t)
								g && delete O[t],
									H(A, t, e),
									g && A !== O && H(O, t, g)
						  }
						: H,
				V = function(A) {
					var t = (S[A] = U(N.prototype))
					return (t._k = A), t
				},
				X =
					M && 'symbol' == typeof N.iterator
						? function(A) {
								return 'symbol' == typeof A
						  }
						: function(A) {
								return A instanceof N
						  },
				J = function(A, t, e) {
					return (
						A === O && J(D, t, e),
						d(A),
						(t = Q(t, !0)),
						d(e),
						C(S, t)
							? (e.enumerable
									? (C(A, _) && A[_][t] && (A[_][t] = !1),
									  (e = U(e, { enumerable: m(0, !1) })))
									: (C(A, _) || H(A, _, m(1, {})),
									  (A[_][t] = !0)),
							  G(A, t, e))
							: H(A, t, e)
					)
				},
				W = function(A, t) {
					d(A)
					for (var e, g = h((t = w(t))), C = 0, n = g.length; n > C; )
						J(A, (e = g[C++]), t[e])
					return A
				},
				j = function(A) {
					var t = R.call(this, (A = Q(A, !0)))
					return (
						!(this === O && C(S, A) && !C(D, A)) &&
						(!(
							t ||
							!C(this, A) ||
							!C(S, A) ||
							(C(this, _) && this[_][A])
						) ||
							t)
					)
				},
				Y = function(A, t) {
					if (
						((A = w(A)),
						(t = Q(t, !0)),
						A !== O || !C(S, t) || C(D, t))
					) {
						var e = x(A, t)
						return (
							!e ||
								!C(S, t) ||
								(C(A, _) && A[_][t]) ||
								(e.enumerable = !0),
							e
						)
					}
				},
				q = function(A) {
					for (var t, e = y(w(A)), g = [], n = 0; e.length > n; )
						C(S, (t = e[n++])) || t == _ || t == o || g.push(t)
					return g
				},
				Z = function(A) {
					for (
						var t, e = A === O, g = y(e ? D : w(A)), n = [], I = 0;
						g.length > I;

					)
						!C(S, (t = g[I++])) || (e && !C(O, t)) || n.push(S[t])
					return n
				}
			M ||
				(r(
					(N = function() {
						if (this instanceof N)
							throw TypeError('Symbol is not a constructor!')
						var A = c(arguments.length > 0 ? arguments[0] : void 0),
							t = function(e) {
								this === O && t.call(D, e),
									C(this, _) &&
										C(this[_], A) &&
										(this[_][A] = !1),
									G(this, A, m(1, e))
							}
						return (
							n && z && G(O, A, { configurable: !0, set: t }),
							V(A)
						)
					}).prototype,
					'toString',
					function() {
						return this._k
					}
				),
				(v.f = Y),
				(b.f = J),
				(e(111).f = E.f = q),
				(e(33).f = j),
				(e(39).f = Z),
				n && !e(23) && r(O, 'propertyIsEnumerable', j, !0),
				(u.f = function(A) {
					return V(l(A))
				})),
				I(I.G + I.W + I.F * !M, { Symbol: N })
			for (
				var $ = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
						','
					),
					AA = 0;
				$.length > AA;

			)
				l($[AA++])
			for (var tA = F(l.store), eA = 0; tA.length > eA; ) p(tA[eA++])
			I(I.S + I.F * !M, 'Symbol', {
				for: function(A) {
					return C(L, (A += '')) ? L[A] : (L[A] = N(A))
				},
				keyFor: function(A) {
					if (!X(A)) throw TypeError(A + ' is not a symbol!')
					for (var t in L) if (L[t] === A) return t
				},
				useSetter: function() {
					z = !0
				},
				useSimple: function() {
					z = !1
				}
			}),
				I(I.S + I.F * !M, 'Object', {
					create: function(A, t) {
						return void 0 === t ? U(A) : W(U(A), t)
					},
					defineProperty: J,
					defineProperties: W,
					getOwnPropertyDescriptor: Y,
					getOwnPropertyNames: q,
					getOwnPropertySymbols: Z
				}),
				K &&
					I(
						I.S +
							I.F *
								(!M ||
									i(function() {
										var A = N()
										return (
											'[null]' != T([A]) ||
											'{}' != T({ a: A }) ||
											'{}' != T(Object(A))
										)
									})),
						'JSON',
						{
							stringify: function(A) {
								for (
									var t, e, g = [A], C = 1;
									arguments.length > C;

								)
									g.push(arguments[C++])
								if (
									((e = t = g[1]),
									(f(t) || void 0 !== A) && !X(A))
								)
									return (
										B(t) ||
											(t = function(A, t) {
												if (
													('function' == typeof e &&
														(t = e.call(
															this,
															A,
															t
														)),
													!X(t))
												)
													return t
											}),
										(g[1] = t),
										T.apply(K, g)
									)
							}
						}
					),
				N.prototype[k] || e(16)(N.prototype, k, N.prototype.valueOf),
				a(N, 'Symbol'),
				a(Math, 'Math', !0),
				a(g.JSON, 'JSON', !0)
		},
		function(A, t, e) {
			var g = e(26)('meta'),
				C = e(9),
				n = e(10),
				I = e(7).f,
				r = 0,
				o =
					Object.isExtensible ||
					function() {
						return !0
					},
				i = !e(17)(function() {
					return o(Object.preventExtensions({}))
				}),
				s = function(A) {
					I(A, g, { value: { i: 'O' + ++r, w: {} } })
				},
				a = (A.exports = {
					KEY: g,
					NEED: !1,
					fastKey: function(A, t) {
						if (!C(A))
							return 'symbol' == typeof A
								? A
								: ('string' == typeof A ? 'S' : 'P') + A
						if (!n(A, g)) {
							if (!o(A)) return 'F'
							if (!t) return 'E'
							s(A)
						}
						return A[g].i
					},
					getWeak: function(A, t) {
						if (!n(A, g)) {
							if (!o(A)) return !0
							if (!t) return !1
							s(A)
						}
						return A[g].w
					},
					onFreeze: function(A) {
						return i && a.NEED && o(A) && !n(A, g) && s(A), A
					}
				})
		},
		function(A, t, e) {
			var g = e(28),
				C = e(39),
				n = e(33)
			A.exports = function(A) {
				var t = g(A),
					e = C.f
				if (e)
					for (var I, r = e(A), o = n.f, i = 0; r.length > i; )
						o.call(A, (I = r[i++])) && t.push(I)
				return t
			}
		},
		function(A, t, e) {
			var g = e(22)
			A.exports =
				Array.isArray ||
				function(A) {
					return 'Array' == g(A)
				}
		},
		function(A, t, e) {
			var g = e(18),
				C = e(111).f,
				n = {}.toString,
				I =
					'object' == typeof window &&
					window &&
					Object.getOwnPropertyNames
						? Object.getOwnPropertyNames(window)
						: []
			A.exports.f = function(A) {
				return I && '[object Window]' == n.call(A)
					? (function(A) {
							try {
								return C(A)
							} catch (A) {
								return I.slice()
							}
					  })(A)
					: C(g(A))
			}
		},
		function(A, t, e) {
			var g = e(33),
				C = e(21),
				n = e(18),
				I = e(34),
				r = e(10),
				o = e(40),
				i = Object.getOwnPropertyDescriptor
			t.f = e(6)
				? i
				: function(A, t) {
						if (((A = n(A)), (t = I(t, !0)), o))
							try {
								return i(A, t)
							} catch (A) {}
						if (r(A, t)) return C(!g.f.call(A, t), A[t])
				  }
		},
		function(A, t, e) {
			e(75)('asyncIterator')
		},
		function(A, t, e) {
			e(75)('observable')
		},
		function(A, t, e) {
			'use strict'
			e.r(t),
				e.d(t, 'install', function() {
					return u
				})
			var g = e(85)
			e.d(t, 'Paper', function() {
				return g.default
			})
			var C = e(84)
			e.d(t, 'AnswerCard', function() {
				return C.default
			})
			var n = e(92)
			e.d(t, 'ElementUIDemo', function() {
				return n.default
			})
			var I = e(91)
			e.d(t, 'ExportReport', function() {
				return I.default
			})
			var r = e(86)
			e.d(t, 'FragmentScore', function() {
				return r.default
			})
			var o = e(90)
			e.d(t, 'ReportEcharts', function() {
				return o.default
			})
			var i = e(89)
			e.d(t, 'ReportScreen', function() {
				return i.default
			})
			var s = e(88)
			e.d(t, 'ExamCompare', function() {
				return s.default
			})
			var a = e(87)
			e.d(t, 'SealLine', function() {
				return a.default
			})
			var c = e(77)
			e.d(t, 'Logger', function() {
				return c.default
			}),
				e.d(t, 'LoggerType', function() {
					return c.LoggerType
				})
			var l = [
					g.default,
					C.default,
					n.default,
					I.default,
					r.default,
					o.default,
					i.default,
					s.default,
					a.default
				],
				u = function(A) {
					l.forEach(function(t) {
						t.install ? t.install(A) : A.component(t.name, t)
					})
				},
				p = {
					Paper: g.default,
					AnswerCard: C.default,
					ElementUIDemo: n.default,
					ExportReport: I.default,
					FragmentScore: r.default,
					ReportEcharts: o.default,
					ReportScreen: i.default,
					ExamCompare: s.default,
					SealLine: a.default,
					install: u,
					Logger: c.default,
					LoggerType: c.LoggerType
				}
			t.default = p
		}
	])
})
