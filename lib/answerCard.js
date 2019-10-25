!(function(A, g) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = g())
		: 'function' == typeof define && define.amd
		? define([], g)
		: 'object' == typeof exports
		? (exports['whdx-middle-ui'] = g())
		: (A['whdx-middle-ui'] = g())
})(window, function() {
	return (function(A) {
		var g = {}
		function C(e) {
			if (g[e]) return g[e].exports
			var I = (g[e] = { i: e, l: !1, exports: {} })
			return A[e].call(I.exports, I, I.exports, C), (I.l = !0), I.exports
		}
		return (
			(C.m = A),
			(C.c = g),
			(C.d = function(A, g, e) {
				C.o(A, g) ||
					Object.defineProperty(A, g, { enumerable: !0, get: e })
			}),
			(C.r = function(A) {
				'undefined' != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(A, Symbol.toStringTag, {
						value: 'Module'
					}),
					Object.defineProperty(A, '__esModule', { value: !0 })
			}),
			(C.t = function(A, g) {
				if ((1 & g && (A = C(A)), 8 & g)) return A
				if (4 & g && 'object' == typeof A && A && A.__esModule) return A
				var e = Object.create(null)
				if (
					(C.r(e),
					Object.defineProperty(e, 'default', {
						enumerable: !0,
						value: A
					}),
					2 & g && 'string' != typeof A)
				)
					for (var I in A)
						C.d(
							e,
							I,
							function(g) {
								return A[g]
							}.bind(null, I)
						)
				return e
			}),
			(C.n = function(A) {
				var g =
					A && A.__esModule
						? function() {
								return A.default
						  }
						: function() {
								return A
						  }
				return C.d(g, 'a', g), g
			}),
			(C.o = function(A, g) {
				return Object.prototype.hasOwnProperty.call(A, g)
			}),
			(C.p = ''),
			C((C.s = 84))
		)
	})([
		function(A, g, C) {
			'use strict'
			function e(A, g, C, e, I, t, n, r) {
				var o,
					i = 'function' == typeof A ? A.options : A
				if (
					(g &&
						((i.render = g),
						(i.staticRenderFns = C),
						(i._compiled = !0)),
					e && (i.functional = !0),
					t && (i._scopeId = 'data-v-' + t),
					n
						? ((o = function(A) {
								;(A =
									A ||
									(this.$vnode && this.$vnode.ssrContext) ||
									(this.parent &&
										this.parent.$vnode &&
										this.parent.$vnode.ssrContext)) ||
									'undefined' == typeof __VUE_SSR_CONTEXT__ ||
									(A = __VUE_SSR_CONTEXT__),
									I && I.call(this, A),
									A &&
										A._registeredComponents &&
										A._registeredComponents.add(n)
						  }),
						  (i._ssrRegister = o))
						: I &&
						  (o = r
								? function() {
										I.call(
											this,
											this.$root.$options.shadowRoot
										)
								  }
								: I),
					o)
				)
					if (i.functional) {
						i._injectStyles = o
						var s = i.render
						i.render = function(A, g) {
							return o.call(g), s(A, g)
						}
					} else {
						var a = i.beforeCreate
						i.beforeCreate = a ? [].concat(a, o) : [o]
					}
				return { exports: A, options: i }
			}
			C.d(g, 'a', function() {
				return e
			})
		},
		function(A, g) {
			var C = (A.exports =
				'undefined' != typeof window && window.Math == Math
					? window
					: 'undefined' != typeof self && self.Math == Math
					? self
					: Function('return this')())
			'number' == typeof __g && (__g = C)
		},
		function(A, g, C) {
			'use strict'
			A.exports = function(A) {
				var g = []
				return (
					(g.toString = function() {
						return this.map(function(g) {
							var C = (function(A, g) {
								var C = A[1] || '',
									e = A[3]
								if (!e) return C
								if (g && 'function' == typeof btoa) {
									var I =
											((n = e),
											'/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
												btoa(
													unescape(
														encodeURIComponent(
															JSON.stringify(n)
														)
													)
												) +
												' */'),
										t = e.sources.map(function(A) {
											return (
												'/*# sourceURL=' +
												e.sourceRoot +
												A +
												' */'
											)
										})
									return [C]
										.concat(t)
										.concat([I])
										.join('\n')
								}
								var n
								return [C].join('\n')
							})(g, A)
							return g[2] ? '@media ' + g[2] + '{' + C + '}' : C
						}).join('')
					}),
					(g.i = function(A, C) {
						'string' == typeof A && (A = [[null, A, '']])
						for (var e = {}, I = 0; I < this.length; I++) {
							var t = this[I][0]
							null != t && (e[t] = !0)
						}
						for (I = 0; I < A.length; I++) {
							var n = A[I]
							;(null != n[0] && e[n[0]]) ||
								(C && !n[2]
									? (n[2] = C)
									: C &&
									  (n[2] = '(' + n[2] + ') and (' + C + ')'),
								g.push(n))
						}
					}),
					g
				)
			}
		},
		function(A, g, C) {
			var e,
				I,
				t = {},
				n =
					((e = function() {
						return (
							window && document && document.all && !window.atob
						)
					}),
					function() {
						return void 0 === I && (I = e.apply(this, arguments)), I
					}),
				r = (function(A) {
					var g = {}
					return function(A, C) {
						if ('function' == typeof A) return A()
						if (void 0 === g[A]) {
							var e = function(A, g) {
								return g
									? g.querySelector(A)
									: document.querySelector(A)
							}.call(this, A, C)
							if (
								window.HTMLIFrameElement &&
								e instanceof window.HTMLIFrameElement
							)
								try {
									e = e.contentDocument.head
								} catch (A) {
									e = null
								}
							g[A] = e
						}
						return g[A]
					}
				})(),
				o = null,
				i = 0,
				s = [],
				a = C(38)
			function c(A, g) {
				for (var C = 0; C < A.length; C++) {
					var e = A[C],
						I = t[e.id]
					if (I) {
						I.refs++
						for (var n = 0; n < I.parts.length; n++)
							I.parts[n](e.parts[n])
						for (; n < e.parts.length; n++)
							I.parts.push(d(e.parts[n], g))
					} else {
						var r = []
						for (n = 0; n < e.parts.length; n++)
							r.push(d(e.parts[n], g))
						t[e.id] = { id: e.id, refs: 1, parts: r }
					}
				}
			}
			function l(A, g) {
				for (var C = [], e = {}, I = 0; I < A.length; I++) {
					var t = A[I],
						n = g.base ? t[0] + g.base : t[0],
						r = { css: t[1], media: t[2], sourceMap: t[3] }
					e[n]
						? e[n].parts.push(r)
						: C.push((e[n] = { id: n, parts: [r] }))
				}
				return C
			}
			function u(A, g) {
				var C = r(A.insertInto)
				if (!C)
					throw new Error(
						"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
					)
				var e = s[s.length - 1]
				if ('top' === A.insertAt)
					e
						? e.nextSibling
							? C.insertBefore(g, e.nextSibling)
							: C.appendChild(g)
						: C.insertBefore(g, C.firstChild),
						s.push(g)
				else if ('bottom' === A.insertAt) C.appendChild(g)
				else {
					if ('object' != typeof A.insertAt || !A.insertAt.before)
						throw new Error(
							"[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
						)
					var I = r(A.insertAt.before, C)
					C.insertBefore(g, I)
				}
			}
			function B(A) {
				if (null === A.parentNode) return !1
				A.parentNode.removeChild(A)
				var g = s.indexOf(A)
				g >= 0 && s.splice(g, 1)
			}
			function p(A) {
				var g = document.createElement('style')
				if (
					(void 0 === A.attrs.type && (A.attrs.type = 'text/css'),
					void 0 === A.attrs.nonce)
				) {
					var e = (function() {
						0
						return C.nc
					})()
					e && (A.attrs.nonce = e)
				}
				return h(g, A.attrs), u(A, g), g
			}
			function h(A, g) {
				Object.keys(g).forEach(function(C) {
					A.setAttribute(C, g[C])
				})
			}
			function d(A, g) {
				var C, e, I, t
				if (g.transform && A.css) {
					if (
						!(t =
							'function' == typeof g.transform
								? g.transform(A.css)
								: g.transform.default(A.css))
					)
						return function() {}
					A.css = t
				}
				if (g.singleton) {
					var n = i++
					;(C = o || (o = p(g))),
						(e = Q.bind(null, C, n, !1)),
						(I = Q.bind(null, C, n, !0))
				} else
					A.sourceMap &&
					'function' == typeof URL &&
					'function' == typeof URL.createObjectURL &&
					'function' == typeof URL.revokeObjectURL &&
					'function' == typeof Blob &&
					'function' == typeof btoa
						? ((C = (function(A) {
								var g = document.createElement('link')
								return (
									void 0 === A.attrs.type &&
										(A.attrs.type = 'text/css'),
									(A.attrs.rel = 'stylesheet'),
									h(g, A.attrs),
									u(A, g),
									g
								)
						  })(g)),
						  (e = function(A, g, C) {
								var e = C.css,
									I = C.sourceMap,
									t = void 0 === g.convertToAbsoluteUrls && I
								;(g.convertToAbsoluteUrls || t) && (e = a(e))
								I &&
									(e +=
										'\n/*# sourceMappingURL=data:application/json;base64,' +
										btoa(
											unescape(
												encodeURIComponent(
													JSON.stringify(I)
												)
											)
										) +
										' */')
								var n = new Blob([e], { type: 'text/css' }),
									r = A.href
								;(A.href = URL.createObjectURL(n)),
									r && URL.revokeObjectURL(r)
						  }.bind(null, C, g)),
						  (I = function() {
								B(C), C.href && URL.revokeObjectURL(C.href)
						  }))
						: ((C = p(g)),
						  (e = function(A, g) {
								var C = g.css,
									e = g.media
								e && A.setAttribute('media', e)
								if (A.styleSheet) A.styleSheet.cssText = C
								else {
									for (; A.firstChild; )
										A.removeChild(A.firstChild)
									A.appendChild(document.createTextNode(C))
								}
						  }.bind(null, C)),
						  (I = function() {
								B(C)
						  }))
				return (
					e(A),
					function(g) {
						if (g) {
							if (
								g.css === A.css &&
								g.media === A.media &&
								g.sourceMap === A.sourceMap
							)
								return
							e((A = g))
						} else I()
					}
				)
			}
			A.exports = function(A, g) {
				if (
					'undefined' != typeof DEBUG &&
					DEBUG &&
					'object' != typeof document
				)
					throw new Error(
						'The style-loader cannot be used in a non-browser environment'
					)
				;((g = g || {}).attrs =
					'object' == typeof g.attrs ? g.attrs : {}),
					g.singleton ||
						'boolean' == typeof g.singleton ||
						(g.singleton = n()),
					g.insertInto || (g.insertInto = 'head'),
					g.insertAt || (g.insertAt = 'bottom')
				var C = l(A, g)
				return (
					c(C, g),
					function(A) {
						for (var e = [], I = 0; I < C.length; I++) {
							var n = C[I]
							;(r = t[n.id]).refs--, e.push(r)
						}
						A && c(l(A, g), g)
						for (I = 0; I < e.length; I++) {
							var r
							if (0 === (r = e[I]).refs) {
								for (var o = 0; o < r.parts.length; o++)
									r.parts[o]()
								delete t[r.id]
							}
						}
					}
				)
			}
			var f,
				w =
					((f = []),
					function(A, g) {
						return (f[A] = g), f.filter(Boolean).join('\n')
					})
			function Q(A, g, C, e) {
				var I = C ? '' : e.css
				if (A.styleSheet) A.styleSheet.cssText = w(g, I)
				else {
					var t = document.createTextNode(I),
						n = A.childNodes
					n[g] && A.removeChild(n[g]),
						n.length ? A.insertBefore(t, n[g]) : A.appendChild(t)
				}
			}
		},
		function(A, g) {
			var C = (A.exports = { version: '2.6.2' })
			'number' == typeof __e && (__e = C)
		},
		function(A, g, C) {
			var e = C(65)
			A.exports = function(A, g, C) {
				return (
					g in A
						? e(A, g, {
								value: C,
								enumerable: !0,
								configurable: !0,
								writable: !0
						  })
						: (A[g] = C),
					A
				)
			}
		},
		function(A, g, C) {
			A.exports = !C(17)(function() {
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
		function(A, g, C) {
			var e = C(11),
				I = C(40),
				t = C(34),
				n = Object.defineProperty
			g.f = C(6)
				? Object.defineProperty
				: function(A, g, C) {
						if ((e(A), (g = t(g, !0)), e(C), I))
							try {
								return n(A, g, C)
							} catch (A) {}
						if ('get' in C || 'set' in C)
							throw TypeError('Accessors not supported!')
						return 'value' in C && (A[g] = C.value), A
				  }
		},
		function(A, g, C) {
			var e = C(31)('wks'),
				I = C(26),
				t = C(1).Symbol,
				n = 'function' == typeof t
			;(A.exports = function(A) {
				return (
					e[A] || (e[A] = (n && t[A]) || (n ? t : I)('Symbol.' + A))
				)
			}).store = e
		},
		function(A, g) {
			A.exports = function(A) {
				return 'object' == typeof A
					? null !== A
					: 'function' == typeof A
			}
		},
		function(A, g) {
			var C = {}.hasOwnProperty
			A.exports = function(A, g) {
				return C.call(A, g)
			}
		},
		function(A, g, C) {
			var e = C(9)
			A.exports = function(A) {
				if (!e(A)) throw TypeError(A + ' is not an object!')
				return A
			}
		},
		,
		function(A, g, C) {
			A.exports = C(66)
		},
		,
		function(A, g, C) {
			var e = C(1),
				I = C(4),
				t = C(20),
				n = C(16),
				r = C(10),
				o = function(A, g, C) {
					var i,
						s,
						a,
						c = A & o.F,
						l = A & o.G,
						u = A & o.S,
						B = A & o.P,
						p = A & o.B,
						h = A & o.W,
						d = l ? I : I[g] || (I[g] = {}),
						f = d.prototype,
						w = l ? e : u ? e[g] : (e[g] || {}).prototype
					for (i in (l && (C = g), C))
						((s = !c && w && void 0 !== w[i]) && r(d, i)) ||
							((a = s ? w[i] : C[i]),
							(d[i] =
								l && 'function' != typeof w[i]
									? C[i]
									: p && s
									? t(a, e)
									: h && w[i] == a
									? (function(A) {
											var g = function(g, C, e) {
												if (this instanceof A) {
													switch (arguments.length) {
														case 0:
															return new A()
														case 1:
															return new A(g)
														case 2:
															return new A(g, C)
													}
													return new A(g, C, e)
												}
												return A.apply(this, arguments)
											}
											return (
												(g.prototype = A.prototype), g
											)
									  })(a)
									: B && 'function' == typeof a
									? t(Function.call, a)
									: a),
							B &&
								(((d.virtual || (d.virtual = {}))[i] = a),
								A & o.R && f && !f[i] && n(f, i, a)))
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
		function(A, g, C) {
			var e = C(7),
				I = C(21)
			A.exports = C(6)
				? function(A, g, C) {
						return e.f(A, g, I(1, C))
				  }
				: function(A, g, C) {
						return (A[g] = C), A
				  }
		},
		function(A, g) {
			A.exports = function(A) {
				try {
					return !!A()
				} catch (A) {
					return !0
				}
			}
		},
		function(A, g, C) {
			var e = C(35),
				I = C(24)
			A.exports = function(A) {
				return e(I(A))
			}
		},
		function(A, g, C) {
			var e = C(13)
			function I() {
				return (
					(A.exports = I =
						e ||
						function(A) {
							for (var g = 1; g < arguments.length; g++) {
								var C = arguments[g]
								for (var e in C)
									Object.prototype.hasOwnProperty.call(
										C,
										e
									) && (A[e] = C[e])
							}
							return A
						}),
					I.apply(this, arguments)
				)
			}
			A.exports = I
		},
		function(A, g, C) {
			var e = C(27)
			A.exports = function(A, g, C) {
				if ((e(A), void 0 === g)) return A
				switch (C) {
					case 1:
						return function(C) {
							return A.call(g, C)
						}
					case 2:
						return function(C, e) {
							return A.call(g, C, e)
						}
					case 3:
						return function(C, e, I) {
							return A.call(g, C, e, I)
						}
				}
				return function() {
					return A.apply(g, arguments)
				}
			}
		},
		function(A, g) {
			A.exports = function(A, g) {
				return {
					enumerable: !(1 & A),
					configurable: !(2 & A),
					writable: !(4 & A),
					value: g
				}
			}
		},
		function(A, g) {
			var C = {}.toString
			A.exports = function(A) {
				return C.call(A).slice(8, -1)
			}
		},
		function(A, g) {
			A.exports = !0
		},
		function(A, g) {
			A.exports = function(A) {
				if (null == A) throw TypeError("Can't call method on  " + A)
				return A
			}
		},
		function(A, g) {
			var C = Math.ceil,
				e = Math.floor
			A.exports = function(A) {
				return isNaN((A = +A)) ? 0 : (A > 0 ? e : C)(A)
			}
		},
		function(A, g) {
			var C = 0,
				e = Math.random()
			A.exports = function(A) {
				return 'Symbol('.concat(
					void 0 === A ? '' : A,
					')_',
					(++C + e).toString(36)
				)
			}
		},
		function(A, g) {
			A.exports = function(A) {
				if ('function' != typeof A)
					throw TypeError(A + ' is not a function!')
				return A
			}
		},
		function(A, g, C) {
			var e = C(41),
				I = C(32)
			A.exports =
				Object.keys ||
				function(A) {
					return e(A, I)
				}
		},
		function(A, g, C) {
			var e = C(31)('keys'),
				I = C(26)
			A.exports = function(A) {
				return e[A] || (e[A] = I(A))
			}
		},
		function(A, g, C) {
			var e = C(9),
				I = C(1).document,
				t = e(I) && e(I.createElement)
			A.exports = function(A) {
				return t ? I.createElement(A) : {}
			}
		},
		function(A, g, C) {
			var e = C(4),
				I = C(1),
				t = I['__core-js_shared__'] || (I['__core-js_shared__'] = {})
			;(A.exports = function(A, g) {
				return t[A] || (t[A] = void 0 !== g ? g : {})
			})('versions', []).push({
				version: e.version,
				mode: C(23) ? 'pure' : 'global',
				copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
			})
		},
		function(A, g) {
			A.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
				','
			)
		},
		function(A, g) {
			g.f = {}.propertyIsEnumerable
		},
		function(A, g, C) {
			var e = C(9)
			A.exports = function(A, g) {
				if (!e(A)) return A
				var C, I
				if (
					g &&
					'function' == typeof (C = A.toString) &&
					!e((I = C.call(A)))
				)
					return I
				if ('function' == typeof (C = A.valueOf) && !e((I = C.call(A))))
					return I
				if (
					!g &&
					'function' == typeof (C = A.toString) &&
					!e((I = C.call(A)))
				)
					return I
				throw TypeError("Can't convert object to primitive value")
			}
		},
		function(A, g, C) {
			var e = C(22)
			A.exports = Object('z').propertyIsEnumerable(0)
				? Object
				: function(A) {
						return 'String' == e(A) ? A.split('') : Object(A)
				  }
		},
		function(A, g, C) {
			var e = C(25),
				I = Math.min
			A.exports = function(A) {
				return A > 0 ? I(e(A), 9007199254740991) : 0
			}
		},
		function(A, g, C) {
			var e = C(24)
			A.exports = function(A) {
				return Object(e(A))
			}
		},
		function(A, g) {
			A.exports = function(A) {
				var g = 'undefined' != typeof window && window.location
				if (!g) throw new Error('fixUrls requires window.location')
				if (!A || 'string' != typeof A) return A
				var C = g.protocol + '//' + g.host,
					e = C + g.pathname.replace(/\/[^\/]*$/, '/')
				return A.replace(
					/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
					function(A, g) {
						var I,
							t = g
								.trim()
								.replace(/^"(.*)"$/, function(A, g) {
									return g
								})
								.replace(/^'(.*)'$/, function(A, g) {
									return g
								})
						return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
							t
						)
							? A
							: ((I =
									0 === t.indexOf('//')
										? t
										: 0 === t.indexOf('/')
										? C + t
										: e + t.replace(/^\.\//, '')),
							  'url(' + JSON.stringify(I) + ')')
					}
				)
			}
		},
		function(A, g) {
			g.f = Object.getOwnPropertySymbols
		},
		function(A, g, C) {
			A.exports =
				!C(6) &&
				!C(17)(function() {
					return (
						7 !=
						Object.defineProperty(C(30)('div'), 'a', {
							get: function() {
								return 7
							}
						}).a
					)
				})
		},
		function(A, g, C) {
			var e = C(10),
				I = C(18),
				t = C(45)(!1),
				n = C(29)('IE_PROTO')
			A.exports = function(A, g) {
				var C,
					r = I(A),
					o = 0,
					i = []
				for (C in r) C != n && e(r, C) && i.push(C)
				for (; g.length > o; )
					e(r, (C = g[o++])) && (~t(i, C) || i.push(C))
				return i
			}
		},
		function(A, g) {
			A.exports = {}
		},
		function(A, g, C) {
			'use strict'
			A.exports = function(A, g) {
				return 'string' != typeof A
					? A
					: (/^['"].*['"]$/.test(A) && (A = A.slice(1, -1)),
					  /["'() \t\n]/.test(A) || g
							? '"' +
							  A.replace(/"/g, '\\"').replace(/\n/g, '\\n') +
							  '"'
							: A)
			}
		},
		function(A, g, C) {
			var e = C(7).f,
				I = C(10),
				t = C(8)('toStringTag')
			A.exports = function(A, g, C) {
				A &&
					!I((A = C ? A : A.prototype), t) &&
					e(A, t, { configurable: !0, value: g })
			}
		},
		function(A, g, C) {
			var e = C(18),
				I = C(36),
				t = C(46)
			A.exports = function(A) {
				return function(g, C, n) {
					var r,
						o = e(g),
						i = I(o.length),
						s = t(n, i)
					if (A && C != C) {
						for (; i > s; ) if ((r = o[s++]) != r) return !0
					} else
						for (; i > s; s++)
							if ((A || s in o) && o[s] === C) return A || s || 0
					return !A && -1
				}
			}
		},
		function(A, g, C) {
			var e = C(25),
				I = Math.max,
				t = Math.min
			A.exports = function(A, g) {
				return (A = e(A)) < 0 ? I(A + g, 0) : t(A, g)
			}
		},
		function(A, g, C) {
			var e = C(127)
			'string' == typeof e && (e = [[A.i, e, '']])
			var I = { hmr: !0, transform: void 0, insertInto: void 0 }
			C(3)(e, I)
			e.locals && (A.exports = e.locals)
		},
		function(A, g, C) {
			var e = C(130)
			'string' == typeof e && (e = [[A.i, e, '']])
			var I = { hmr: !0, transform: void 0, insertInto: void 0 }
			C(3)(e, I)
			e.locals && (A.exports = e.locals)
		},
		function(A, g, C) {
			var e = C(132)
			'string' == typeof e && (e = [[A.i, e, '']])
			var I = { hmr: !0, transform: void 0, insertInto: void 0 }
			C(3)(e, I)
			e.locals && (A.exports = e.locals)
		},
		function(A, g, C) {
			var e = C(136)
			'string' == typeof e && (e = [[A.i, e, '']])
			var I = { hmr: !0, transform: void 0, insertInto: void 0 }
			C(3)(e, I)
			e.locals && (A.exports = e.locals)
		},
		function(A, g, C) {
			var e = C(138)
			'string' == typeof e && (e = [[A.i, e, '']])
			var I = { hmr: !0, transform: void 0, insertInto: void 0 }
			C(3)(e, I)
			e.locals && (A.exports = e.locals)
		},
		function(A, g, C) {
			var e = C(140)
			'string' == typeof e && (e = [[A.i, e, '']])
			var I = { hmr: !0, transform: void 0, insertInto: void 0 }
			C(3)(e, I)
			e.locals && (A.exports = e.locals)
		},
		function(A, g, C) {
			var e = C(143)
			'string' == typeof e && (e = [[A.i, e, '']])
			var I = { hmr: !0, transform: void 0, insertInto: void 0 }
			C(3)(e, I)
			e.locals && (A.exports = e.locals)
		},
		function(A, g, C) {
			var e = C(147)
			'string' == typeof e && (e = [[A.i, e, '']])
			var I = { hmr: !0, transform: void 0, insertInto: void 0 }
			C(3)(e, I)
			e.locals && (A.exports = e.locals)
		},
		function(A, g, C) {
			var e = C(152)
			'string' == typeof e && (e = [[A.i, e, '']])
			var I = { hmr: !0, transform: void 0, insertInto: void 0 }
			C(3)(e, I)
			e.locals && (A.exports = e.locals)
		},
		function(A, g, C) {
			var e = C(156)
			'string' == typeof e && (e = [[A.i, e, '']])
			var I = { hmr: !0, transform: void 0, insertInto: void 0 }
			C(3)(e, I)
			e.locals && (A.exports = e.locals)
		},
		function(A, g, C) {
			var e = C(158)
			'string' == typeof e && (e = [[A.i, e, '']])
			var I = { hmr: !0, transform: void 0, insertInto: void 0 }
			C(3)(e, I)
			e.locals && (A.exports = e.locals)
		},
		function(A, g, C) {
			var e = C(160)
			'string' == typeof e && (e = [[A.i, e, '']])
			var I = { hmr: !0, transform: void 0, insertInto: void 0 }
			C(3)(e, I)
			e.locals && (A.exports = e.locals)
		},
		function(A, g, C) {
			var e = C(179)
			'string' == typeof e && (e = [[A.i, e, '']])
			var I = { hmr: !0, transform: void 0, insertInto: void 0 }
			C(3)(e, I)
			e.locals && (A.exports = e.locals)
		},
		,
		,
		,
		,
		,
		function(A, g, C) {
			A.exports = C(69)
		},
		function(A, g, C) {
			C(67), (A.exports = C(4).Object.assign)
		},
		function(A, g, C) {
			var e = C(15)
			e(e.S + e.F, 'Object', { assign: C(68) })
		},
		function(A, g, C) {
			'use strict'
			var e = C(28),
				I = C(39),
				t = C(33),
				n = C(37),
				r = C(35),
				o = Object.assign
			A.exports =
				!o ||
				C(17)(function() {
					var A = {},
						g = {},
						C = Symbol(),
						e = 'abcdefghijklmnopqrst'
					return (
						(A[C] = 7),
						e.split('').forEach(function(A) {
							g[A] = A
						}),
						7 != o({}, A)[C] || Object.keys(o({}, g)).join('') != e
					)
				})
					? function(A, g) {
							for (
								var C = n(A),
									o = arguments.length,
									i = 1,
									s = I.f,
									a = t.f;
								o > i;

							)
								for (
									var c,
										l = r(arguments[i++]),
										u = s ? e(l).concat(s(l)) : e(l),
										B = u.length,
										p = 0;
									B > p;

								)
									a.call(l, (c = u[p++])) && (C[c] = l[c])
							return C
					  }
					: o
		},
		function(A, g, C) {
			C(70)
			var e = C(4).Object
			A.exports = function(A, g, C) {
				return e.defineProperty(A, g, C)
			}
		},
		function(A, g, C) {
			var e = C(15)
			e(e.S + e.F * !C(6), 'Object', { defineProperty: C(7).f })
		},
		function(A, g, C) {
			var e = C(1).document
			A.exports = e && e.documentElement
		},
		function(A, g, C) {
			'use strict'
			var e = C(27)
			function I(A) {
				var g, C
				;(this.promise = new A(function(A, e) {
					if (void 0 !== g || void 0 !== C)
						throw TypeError('Bad Promise constructor')
					;(g = A), (C = e)
				})),
					(this.resolve = e(g)),
					(this.reject = e(C))
			}
			A.exports.f = function(A) {
				return new I(A)
			}
		},
		,
		,
		,
		function(A, g, C) {
			A.exports = C(163)
		},
		,
		function(A, g, C) {
			var e = C(120)
			A.exports = function(A) {
				if (Array.isArray(A)) {
					for (var g = 0, C = new Array(A.length); g < A.length; g++)
						C[g] = A[g]
					return C
				}
				return e(A)
			}
		},
		function(A, g, C) {
			A.exports = C(161)
		},
		function(A, g, C) {
			A.exports = C(16)
		},
		function(A, g, C) {
			var e = C(11),
				I = C(95),
				t = C(32),
				n = C(29)('IE_PROTO'),
				r = function() {},
				o = function() {
					var A,
						g = C(30)('iframe'),
						e = t.length
					for (
						g.style.display = 'none',
							C(71).appendChild(g),
							g.src = 'javascript:',
							(A = g.contentWindow.document).open(),
							A.write('<script>document.F=Object</script>'),
							A.close(),
							o = A.F;
						e--;

					)
						delete o.prototype[t[e]]
					return o()
				}
			A.exports =
				Object.create ||
				function(A, g) {
					var C
					return (
						null !== A
							? ((r.prototype = e(A)),
							  (C = new r()),
							  (r.prototype = null),
							  (C[n] = A))
							: (C = o()),
						void 0 === g ? C : I(C, g)
					)
				}
		},
		function(A, g, C) {
			var e = C(10),
				I = C(37),
				t = C(29)('IE_PROTO'),
				n = Object.prototype
			A.exports =
				Object.getPrototypeOf ||
				function(A) {
					return (
						(A = I(A)),
						e(A, t)
							? A[t]
							: 'function' == typeof A.constructor &&
							  A instanceof A.constructor
							? A.constructor.prototype
							: A instanceof Object
							? n
							: null
					)
				}
		},
		function(A, g) {},
		function(A, g, C) {
			'use strict'
			C.r(g)
			var e = {}
			C.r(e),
				C.d(e, 'calc', function() {
					return Z
				}),
				C.d(e, 'getImgListFromStr', function() {
					return q
				}),
				C.d(e, 'getAllObjectiveQuestionListFromPaper', function() {
					return AA
				}),
				C.d(e, 'transformPaperDataToPaperAnswerCardData', function() {
					return CA
				}),
				C.d(e, 'parseStrToNum', function() {
					return IA
				})
			var I = {}
			C.r(I),
				C.d(I, 'exec', function() {
					return Tg
				})
			var t,
				n,
				r = C(19),
				o = C.n(r),
				i = C(5),
				s = C.n(i),
				a = C(13),
				c = C.n(a),
				l = 300,
				u = 6,
				B = 535,
				p = 771,
				h = 30,
				d = 21,
				f = 18,
				w = 30,
				Q = 10,
				U = 10,
				E = { A3: 'A3', A4: 'A4' },
				m = { 1: 'A4', 2: 'A3' },
				F = { Left: 1, Right: 2 },
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
				v = [
					b.Text,
					b.PaperTitle,
					b.PaperUserBaseInfo,
					b.PaperAttentionAndUserNumber
				],
				H = [
					b.Text,
					b.PaperAttentionAndUserNumber,
					b.PaperUserBaseInfo
				],
				N = [
					b.Text,
					b.PaperTitle,
					b.PaperUserBaseInfo,
					b.PaperAttentionAndUserNumber,
					b.PaperObjectiveQuestions
				],
				x = 1,
				y = 3,
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
				R = '20',
				k = '01',
				L = '02',
				O = '03',
				D = '04',
				_ = '05',
				M = '06',
				S = '07',
				P = '08',
				z = '09',
				G = '10',
				V =
					((t = {}),
					s()(t, k, '语文'),
					s()(t, L, '数学'),
					s()(t, O, '英语'),
					s()(t, D, '道德与法治'),
					s()(t, _, '历史'),
					s()(t, M, '物理'),
					s()(t, S, '生物'),
					s()(t, P, '化学'),
					s()(t, z, '地理'),
					s()(t, G, '科学'),
					t),
				X = d + Q,
				J = 2 * u + 2,
				W = 4 * p,
				Y =
					((n = {
						common: {
							setBlockTotalSizeField: function(A, g) {
								A.index ||
									(A.totalSize =
										Math.ceil((g - A.height) / p) + 1)
							},
							getHighDprBlockHeight: function(A) {
								return (
									(g = A.type),
									b.PaperAttentionAndUserNumber === g
										? 736
										: 4 * A.height
								)
								var g
							},
							setBlockPosition: function(A) {
								var g = this
								A.forEach(function(C, e) {
									;(C._top = Math.round(
										0 === e ? 4 * u : A[e - 1]._bottom
									)),
										(C._bottom = Math.round(
											C._top + g.getHighDprBlockHeight(C)
										)),
										(C.leftTop = (C._top / W).toFixed(2)),
										(C.leftBottom = (C._bottom / W).toFixed(
											2
										))
								})
							}
						}
					}),
					s()(n, b.PaperFillInBlankQuestions, {
						setQuestion: function(A) {
							A.height =
								Math.ceil(
									A.list.length / A.questionCountInOneLine
								) *
									X +
								7
							var g = eA(
								A.list,
								A.questionCountInOneLine,
								A.height
							)
							A.list = g
						},
						resetQuestion: function(A, g, C, e) {
							var I = !1,
								t = Math.floor(A.height / X),
								n = A.list
							A.list = n.slice(0, t * A.questionCountInOneLine)
							var r = eA(
								A.list,
								A.questionCountInOneLine,
								A.height
							)
							;(A.list = r),
								Y.common.setBlockTotalSizeField(A, C),
								0 === r.length && ((I = !0), e.pop()),
								0 !==
									n.slice(t * A.questionCountInOneLine)
										.length &&
									g.unshift(
										c()({}, A, {
											height: C - A.height,
											list: n.slice(
												t * A.questionCountInOneLine
											),
											index: I ? A.index : A.index + 1
										})
									)
						}
					}),
					s()(n, b.PaperAttentionAndUserNumber, {
						setQuestion: function(A) {
							var g =
								arguments.length > 1 &&
								void 0 !== arguments[1] &&
								arguments[1]
							A.height = g ? 184 : 220
						}
					}),
					s()(n, b.PaperComposition, {
						setQuestion: function(A, g, C) {
							A.totalSize = C || 1e3
							var e = Math.ceil(
								(A.totalSize - (A.beginSize || 0)) / 21
							)
							;(A.height = 34.84 * e + 36),
								(A.list = new Array(e))
						},
						resetQuestion: function(A, g) {
							A.index || ((A.index = 0), (A.beginSize = 0))
							var C = Math.ceil((A.totalSize - A.beginSize) / 21),
								e = Math.floor(
									(0 == A.index
										? A.height - 26.84
										: A.height) / 34.84
								),
								I = C - e
							;(A.list = new Array(e)),
								A.index ||
									(A.totalSize =
										Math.ceil((34.84 * I) / p) + 1),
								g.unshift(
									c()({}, A, {
										height: 34.84 * I,
										list: new Array(I),
										index: A.index + 1,
										beginSize: A.beginSize + 21 * e
									})
								)
						}
					}),
					s()(n, b.PaperObjectiveQuestions, {
						setQuestion: function(A) {
							A.height = 80 * Math.ceil(A.list.length / 5) + 0
						},
						resetQuestion: function(A, g, C) {
							var e = Math.floor(A.height / 5 / 16)
							if (e < Math.ceil(A.list.length / 5)) {
								var I = A.list
								;(A.list = I.slice(0, 5 * e)),
									Y.common.setBlockTotalSizeField(A, C),
									g.unshift(
										c()({}, A, {
											height: C - A.height,
											list: I.slice(5 * e),
											index: A.index + 1
										})
									)
							}
						}
					}),
					s()(n, b.EngPaperComposition, {
						setQuestion: function(A) {
							A.height = 31 * A.lineCount + 36 + 10
						},
						resetQuestion: function(A, g, C) {
							var e = Math.floor((A.height - 36) / 31)
							e < 0 && (e = 0),
								(A.lineCount = e),
								Y.common.setBlockTotalSizeField(A, C),
								g.unshift(
									c()({}, A, {
										height: C - A.height,
										lineCount: U - e,
										index: A.index + 1
									})
								)
						}
					}),
					n)
			function j(A, g) {
				for (var C = A.length - 1; C > -1; C--) {
					var e = A[C]
					if ('block' == e.type) {
						e.height += g
						break
					}
				}
			}
			function Z(A) {
				for (
					var g =
							arguments.length > 1 &&
							void 0 !== arguments[1] &&
							arguments[1],
						C = arguments.length > 2 ? arguments[2] : void 0,
						e = 0,
						I = [],
						t = (function(A) {
							var g,
								C = [],
								e = [{ blockList: C }]
							A.forEach(function(A) {
								Array.prototype.push.apply(C, A.blockList)
							})
							for (var I = C.length - 1; I > -1; I--) {
								var t = C[I],
									n = C[I - 1]
								if (
									((t.index = 0),
									(t.totalSize = 1),
									t.lineId &&
										t.type == b.Block &&
										t.lineId != g)
								)
									C.splice(I, 1), (g = null)
								else if (
									((g = t.relativeLineId),
									n &&
										n.relativeQuestionId ===
											t.relativeQuestionId &&
										-1 == v.indexOf(n.type))
								) {
									n.height += t.height
									var r = C.splice(I, 1)
									;[
										b.PaperFillInBlankQuestions,
										b.PaperObjectiveQuestions
									].indexOf(n.type) > -1
										? Array.prototype.push.apply(
												n.list,
												r[0].list
										  )
										: n.type == b.EngPaperComposition &&
										  (n.lineCount = U)
								}
							}
							return e
						})(A);
					I.length || e < t.length;

				) {
					var n = t[e],
						r = J
					n || ((n = { blockList: [] }), t.push(n)),
						Array.prototype.unshift.apply(n.blockList, I),
						(I.length = 0)
					for (
						var o = n.blockList || [],
							i = void 0,
							s = 0,
							a = o.length;
						s < a;
						s++
					) {
						var l = (i = o[s]).height,
							u = i.type == b.PaperFillInBlankQuestions
						if (
							(Y[i.type] && Y[i.type].setQuestion(i, g, C),
							(r += l = i.height) >= p)
						) {
							I = o.splice(s + 1, a - s + 1)
							var B = l,
								d = i.height
							if (
								((i.height = p - (r - l)), !u && i.height < h)
							) {
								o.splice(s, 1),
									j(o, i.height),
									(i.height = d),
									I.unshift(i)
								break
							}
							Y[i.type] && Y[i.type].resetQuestion
								? Y[i.type].resetQuestion(i, I, B, o)
								: B - i.height >= h &&
								  (Y.common.setBlockTotalSizeField(i, B),
								  I.unshift(
										c()({}, i, {
											height: B - i.height,
											index: i.index + 1
										})
								  ))
							break
						}
						s > 0 && -1 == H.indexOf(i.type) && (i.height += 1)
					}
					e++
				}
				!(function(A) {
					A.forEach(function(A, g) {
						Y.common.setBlockPosition(A.blockList)
					})
				})(t)
				var f = 0
				return t.map(function(A) {
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
			function q(A) {
				var g = []
				return (
					$('<div >'.concat(A, '</div>'))
						.find('img')
						.each(function() {
							var A = this,
								C = $(this),
								e = {
									url: C.attr('src'),
									width: C.attr('width') || C.width() || 0
								}
							C.on('load', function(g) {
								e.width = e.width || A.width
							}),
								g.push(e)
						}),
					g
				)
			}
			function AA(A) {
				var g = [],
					C = [],
					e = 0,
					I = A.questionLines.length - 1
				return (
					A.questionLines.forEach(function(A, t) {
						var n = A.questionGroup.length - 1
						A.questionGroup.forEach(function(A, r) {
							var o = A.questions.length - 1
							A.questions.forEach(function(A, i) {
								;+A.selectable &&
									((e += +A.score),
									C.push({
										qId: A.questionId,
										order: A.__questionNum,
										score: A.score,
										selectableType: A.selectableType,
										question: { score: A.score }
									})),
									(5 == C.length ||
										(t == I && r == n && i == o)) &&
										(C.length && g.push(C), (C = []))
							})
						})
					}),
					{ objectiveGroupList: g, totalScore: e }
				)
			}
			function gA(A) {
				var g = 0
				return (
					A.questionGroup.forEach(function(A, C) {
						A.questions.forEach(function(A, C) {
							g += +A.score
						})
					}),
					g
				)
			}
			function CA(A) {
				var g = V[A.subjectId],
					C = {
						blockList: [
							{
								text: ''
									.concat(A.paperName)
									.concat(g, '答题卡'),
								type: 'paperTitle',
								height: 55
							},
							{ type: 'paperUserBaseInfo', height: 35 },
							{ type: 'paperAttentionAndUserNumber' }
						]
					},
					e = C.blockList,
					I = AA(A),
					t = I.objectiveGroupList,
					n = I.totalScore
				return (
					t.length &&
						(C.blockList.push({
							text: '填涂答题区(共'.concat(n, '分)'),
							type: 'text',
							height: 30
						}),
						C.blockList.push({
							type: 'paperObjectiveQuestions',
							relativeQuestionId: t[0][0].qId,
							list: t
						})),
					A.questionLines.forEach(function(A, g) {
						if (K.indexOf(A.questionType) > -1)
							!(function(A, g) {
								var C = [],
									e = gA(g)
								A.push({
									text: ''
										.concat(g.lineName, '(共')
										.concat(e, '分)'),
									type: 'text',
									height: 30,
									lineId: g.lineId
								}),
									g.questionGroup.forEach(function(A) {
										A.questions.forEach(function(A) {
											C.push({
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
										relativeLineId: g.lineId,
										relativeQuestionId: C[0].qId,
										questionCountInOneLine: 2,
										list: C
									})
							})(e, A)
						else {
							var C = gA(A)
							A.questionGroup.forEach(function(g, I) {
								for (
									var t = g.questions, n = 0, r = t.length;
									n < r;
									n++
								) {
									var i = t[n]
									if (+i.selectable) break
									0 == n &&
										0 == I &&
										e.push({
											text: ''
												.concat(A.lineName, '(共')
												.concat(C, '分)'),
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
										if (i.questionTypeId != R) {
											var c =
												(g.content || '') +
												(i.questionTitle || '')
											e.push(
												o()(
													{
														type: 'block',
														height: l
													},
													a,
													{ imgList: q(c) }
												)
											)
										} else
											e.push(
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
										e.push(
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
					[C]
				)
			}
			function eA(A, g, C) {
				var e = w,
					I = f,
					t = B - 2 * u - 2,
					n = C,
					r = (t - 2) * { 1: 0.97, 2: 0.47 }[g],
					o = d + Q,
					i = 0.02 * (t - 2)
				return A.map(function(A, C) {
					var s = 0,
						a = 0
					1 == g && ((s = 1), (a = C + 1)),
						2 == g &&
							((s = (C + 1) % 2 ? 1 : 2),
							(a = Math.ceil((C + 1) / 2)))
					var l = +((r * s + i * s - e) / t).toFixed(2),
						u = +((o * a - I) / n).toFixed(2)
					return c()({}, A, {
						correctLocation: { x: l, y: u, width: e, height: I }
					})
				})
			}
			function IA(A) {
				return parseInt(A) || 0
			}
			var tA = function() {
				var A = this,
					g = A.$createElement,
					C = A._self._c || g
				return C(
					'div',
					{
						staticClass: 'answer-paper-manager',
						class: [
							'1' == A.paperConfig.isPrintMode && 'print-mode'
						]
					},
					[
						C(
							'div',
							{
								ref: 'printDom',
								staticClass: 'answer-paper-manager-content'
							},
							A._l(A.paperData, function(g, e) {
								return C('answer-paper-package', {
									key: e,
									ref: 'printDom_' + e,
									refInFor: !0,
									attrs: {
										'paper-type': A.paperConfig.type,
										dpr: A.paperConfig.dpr,
										page: e + 1,
										'total-page': A.paperData.length,
										data: g,
										index: e
									}
								})
							}),
							1
						)
					]
				)
			}
			tA._withStripped = !0
			var nA = C(78),
				rA = C.n(nA),
				oA = function() {
					var A = this.$createElement,
						g = this._self._c || A
					return g(
						'div',
						{ staticClass: 'answer-paper', style: this.style },
						this._l(this.paper.blockList, function(A, C) {
							return g('AnswerBlock', {
								key: C,
								attrs: { index: C, data: A }
							})
						}),
						1
					)
				}
			oA._withStripped = !0
			var iA = function() {
				var A = this,
					g = A.$createElement,
					C = A._self._c || g
				return C(
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
						C(A.componentNameByType, {
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
					g = A.$createElement,
					C = A._self._c || g
				return A.data
					? C(
							'div',
							[
								A.data.index
									? A._e()
									: C(
											'span',
											{
												staticClass:
													'btn-group paper-fill-in-blank-question'
											},
											[
												C(
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
								C('div', { staticClass: 'text-content' }, [
									C(
										'ul',
										A._l(A.data.list, function(g) {
											return C(
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
													C(
														'span',
														{
															staticClass:
																'write-block num'
														},
														[A._v(A._s(g.order))]
													),
													A._v(' '),
													C('span', {
														staticClass:
															'answer-paper-underline'
													}),
													A._v(' '),
													2 == A.paperConfig.checkMode
														? C('span', {
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
									? C('fill-in-block-question-setting', {
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
					g = A.$createElement,
					C = A._self._c || g
				return C(
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
						C(
							'div',
							{
								staticClass:
									'fill-in-block-question-setting-content'
							},
							[
								C(
									'header',
									{
										staticClass:
											'fill-in-block-question-setting-header'
									},
									[
										A._v(
											'\n            设置\n            '
										),
										C('a', {
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
								C(
									'div',
									{
										staticClass:
											'fill-in-block-question-setting-body'
									},
									[
										C('span', [A._v('每行展示')]),
										A._v(' '),
										C(
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
													change: function(g) {
														var C = Array.prototype.filter
															.call(
																g.target
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
														A.val = g.target
															.multiple
															? C
															: C[0]
													}
												}
											},
											[
												C(
													'option',
													{ attrs: { value: '1' } },
													[A._v('1')]
												),
												A._v(' '),
												C(
													'option',
													{ attrs: { value: '2' } },
													[A._v('2')]
												)
											]
										),
										A._v(' '),
										C('span', [A._v('题')])
									]
								),
								A._v(' '),
								C(
									'footer',
									{
										staticClass:
											'fill-in-block-question-setting-footer'
									},
									[
										C(
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
										C(
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
				lA = (C(126), C(0)),
				uA = Object(lA.a)(cA, aA, [], !1, null, '5657130d', null)
			uA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/FillInBlockQuestionSetting.vue'
			var BA = {
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
				pA =
					(C(129),
					Object(lA.a)(BA, sA, [], !1, null, '48ff0e3a', null))
			pA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/FillInBlankQuestion.vue'
			var hA = pA.exports,
				dA = function() {
					var A = this,
						g = A.$createElement,
						C = A._self._c || g
					return C(
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
								: C('div', {
										staticClass:
											'engComposition-block-score-box box-line-bottom'
								  }),
							A._v(' '),
							A.data.index
								? A._e()
								: C('p', { staticClass: 'question-num' }, [
										A._v(A._s(A.data.question.order) + '.')
								  ]),
							A._v(' '),
							C(
								'ul',
								A._l(A.data.lineCount, function(A, g) {
									return C('li', {
										key: g,
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
					(C(131),
					Object(lA.a)(fA, dA, [], !1, null, '948975cc', null))
			wA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/EngCompositionQuestion.vue'
			var QA = wA.exports,
				UA = function() {
					var A = this,
						g = A.$createElement,
						C = A._self._c || g
					return C(
						'div',
						{ staticClass: 'text-content' },
						[
							A._l(A.data.list, function(g, e) {
								return C(
									'ul',
									{ key: e },
									[
										A._l(g, function(g, e) {
											return [
												C(
													A.componentNameBySelectableType(
														+g.selectableType
													),
													{
														key: e,
														tag: 'component',
														attrs: { question: g }
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
								C(
									'div',
									{
										staticClass:
											'objective-question-left-flag'
									},
									A._l(A.objectiveQuestionFlagList, function(
										A
									) {
										return C('span', {
											staticClass: 'write-block'
										})
									}),
									0
								)
							]
						],
						2
					)
				}
			UA._withStripped = !0
			var EA = function() {
				var A = this,
					g = A.$createElement,
					C = A._self._c || g
				return C('li', [
					C('span', { staticClass: 'write-block num' }, [
						C('span', [A._v(A._s(A.question.order))])
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
			EA._withStripped = !0
			var mA = { name: 'SingleSelectQuestion', props: { question: {} } },
				FA = Object(lA.a)(
					mA,
					EA,
					[
						function() {
							var A = this.$createElement,
								g = this._self._c || A
							return g('span', { staticClass: 'write-block' }, [
								g('span', [this._v('A')])
							])
						},
						function() {
							var A = this.$createElement,
								g = this._self._c || A
							return g('span', { staticClass: 'write-block' }, [
								g('span', [this._v('B')])
							])
						},
						function() {
							var A = this.$createElement,
								g = this._self._c || A
							return g('span', { staticClass: 'write-block' }, [
								g('span', [this._v('C')])
							])
						},
						function() {
							var A = this.$createElement,
								g = this._self._c || A
							return g('span', { staticClass: 'write-block' }, [
								g('span', [this._v('D')])
							])
						}
					],
					!1,
					null,
					null,
					null
				)
			FA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/SingleSelectQuestion.vue'
			var bA = FA.exports,
				vA = function() {
					var A = this.$createElement,
						g = this._self._c || A
					return g('li', [
						g('span', { staticClass: 'write-block num' }, [
							g('span', [this._v(this._s(this.question.order))])
						]),
						this._v(' '),
						this._m(0),
						this._v(' '),
						this._m(1)
					])
				}
			vA._withStripped = !0
			var HA = { name: 'JudgementQuestion', props: { question: {} } },
				NA = Object(lA.a)(
					HA,
					vA,
					[
						function() {
							var A = this.$createElement,
								g = this._self._c || A
							return g('span', { staticClass: 'write-block' }, [
								g('span', [this._v('√')])
							])
						},
						function() {
							var A = this.$createElement,
								g = this._self._c || A
							return g('span', { staticClass: 'write-block' }, [
								g('span', [this._v('×')])
							])
						}
					],
					!1,
					null,
					null,
					null
				)
			NA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/JudgementQuestion.vue'
			var xA = {
					components: {
						SingleSelectQuestion: bA,
						JudgementQuestion: NA.exports
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
								case x:
									return 'single-select-question'
								case y:
									return 'judgement-question'
								default:
									return 'single-select-question'
							}
						}
					}
				},
				yA = Object(lA.a)(xA, UA, [], !1, null, null, null)
			yA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/ObjectiveQuestion.vue'
			var KA = yA.exports,
				TA = function() {
					var A = this,
						g = A.$createElement,
						C = A._self._c || g
					return C(
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
								: C('div', {
										staticClass:
											'composition-block-score-box box-line-bottom'
								  }),
							A._v(' '),
							C('div', { staticClass: 'block-content' }, [
								A.data.index
									? A._e()
									: C('p', { staticClass: 'question-num' }, [
											A._v(
												A._s(A.data.question.order) +
													'.'
											)
									  ]),
								A._v(' '),
								C(
									'ul',
									A._l(A.data.list, function(g, e) {
										return C(
											'li',
											{
												key: e,
												staticClass:
													'bottom-border-line top-border-line'
											},
											A._l(
												A.compositionCellListInRow,
												function(g, I) {
													return C(
														'i',
														{
															key: g,
															staticClass:
																'right-border-line'
														},
														[
															(A.data.beginSize +
																e *
																	A.PaperCompositionCellCountInRow +
																I +
																1) %
																100 ==
															0
																? C('span', [
																		A._v(
																			'\n                        ' +
																				A._s(
																					A
																						.data
																						.beginSize +
																						e *
																							A.PaperCompositionCellCountInRow +
																						I +
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
			var RA = function() {
				var A = this,
					g = A.$createElement,
					C = A._self._c || g
				return C(
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
						C(
							'div',
							{
								staticClass:
									'fill-in-block-question-setting-content'
							},
							[
								C(
									'header',
									{
										staticClass:
											'fill-in-block-question-setting-header'
									},
									[
										A._v(
											'\n            设置\n            '
										),
										C(
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
								C(
									'div',
									{
										staticClass:
											'fill-in-block-question-setting-body'
									},
									[
										C('p', [
											A._v('字数不少于'),
											C('input', {
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
													input: function(g) {
														g.target.composing ||
															(A.min =
																g.target.value)
													}
												}
											})
										]),
										A._v(' '),
										C('p', [
											A._v('总字数'),
											C('input', {
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
													input: function(g) {
														g.target.composing ||
															(A.total =
																g.target.value)
													}
												}
											})
										])
									]
								),
								A._v(' '),
								C(
									'footer',
									{
										staticClass:
											'fill-in-block-question-setting-footer'
									},
									[
										C(
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
			RA._withStripped = !0
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
				LA =
					(C(135),
					Object(lA.a)(kA, RA, [], !1, null, '4b9c7eb0', null))
			LA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/CompositionQuestionSetting.vue'
			var OA = {
					components: { CompositionQuestionSetting: LA.exports },
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
						submitCompositionQuestionSetting: function(A, g) {
							;(this.data.minSize = A),
								(this.data.totalSize = g),
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
				DA =
					(C(137),
					Object(lA.a)(OA, TA, [], !1, null, '6d82ceb8', null))
			DA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/CompositionQuestion.vue'
			var _A = DA.exports,
				MA = function() {
					var A = this,
						g = A.$createElement,
						C = A._self._c || g
					return C(
						'div',
						{
							staticClass: 'text-content',
							class: [A.isHighDpr() && 'high-dpr']
						},
						[
							C('table', [
								A._m(0),
								A._v(' '),
								C('tr', [
									A._m(1),
									A._v(' '),
									C(
										'td',
										{
											staticClass:
												'user-number-content left-border-line',
											attrs: { rowspan: '2' }
										},
										[
											C(
												'ul',
												{
													staticClass:
														'top-border-line'
												},
												A._l(A.userNumberList, function(
													g
												) {
													return C(
														'li',
														{
															staticClass:
																'right-border-line'
														},
														A._l(
															A.userNumberList,
															function(g, e) {
																return C(
																	'span',
																	{
																		staticClass:
																			'write-block'
																	},
																	[
																		C(
																			'span',
																			[
																				A._v(
																					A._s(
																						e
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
											C(
												'div',
												{
													staticClass:
														'user-number-content-top-flag'
												},
												A._l(10, function(A) {
													return C('i')
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
			MA._withStripped = !0
			var SA = {
					inject: ['isHighDpr'],
					data: function() {
						return { userNumberList: new Array(10) }
					}
				},
				PA =
					(C(139),
					Object(lA.a)(
						SA,
						MA,
						[
							function() {
								var A = this.$createElement,
									g = this._self._c || A
								return g('thead', [
									g('tr', [
										g(
											'td',
											{
												staticClass:
													'bottom-border-line'
											},
											[this._v('注意事项')]
										),
										this._v(' '),
										g(
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
									g = A.$createElement,
									C = A._self._c || g
								return C(
									'td',
									{ staticClass: 'bottom-border-line' },
									[
										C(
											'div',
											{
												staticClass: 'attention-content'
											},
											[
												C('p', [
													A._v(
														'1.答题前请将姓名、班级、考场、座号和学号填写清楚。'
													)
												]),
												A._v(' '),
												C('p', [
													A._v(
														'2.客观题答题，必须使用2B铅笔填涂，修改时用橡皮擦干净。'
													)
												]),
												A._v(' '),
												C('p', [
													A._v(
														'3.主观题必须使用黑色签字笔书写。'
													)
												]),
												A._v(' '),
												C('p', [
													A._v(
														'4.必须在题号对应的答题区域内作答，超出答题区域书写无效。'
													)
												]),
												A._v(' '),
												C('p', [
													A._v('5.保持答卷清洁完整。')
												])
											]
										)
									]
								)
							},
							function() {
								var A = this.$createElement,
									g = this._self._c || A
								return g('tr', [
									g('td', { staticClass: 'sample-content' }, [
										this._v('\n                正确填涂'),
										g('span', {
											staticClass:
												'write-block sample-content-right'
										}),
										this._v('\n                缺考标记'),
										g('span', {
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
								g = A.$createElement,
								C = A._self._c || g
							return C('div', { staticClass: 'text-content' }, [
								A._v('\n    学号'),
								C(
									'span',
									{ staticClass: 'answer-paper-underline' },
									[A._v(':')]
								),
								A._v('\n    姓名'),
								C(
									'span',
									{ staticClass: 'answer-paper-underline' },
									[A._v(':')]
								),
								A._v('\n    班级'),
								C(
									'span',
									{ staticClass: 'answer-paper-underline' },
									[A._v(':')]
								),
								A._v('\n    考场'),
								C(
									'span',
									{ staticClass: 'answer-paper-underline' },
									[A._v(':')]
								),
								A._v('\n    座号'),
								C(
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
						g = A.$createElement,
						e = A._self._c || g
					return e(
						'div',
						{
							staticClass: 'normal-block-container',
							class: [A.isHighDpr() && 'high-dpr']
						},
						[
							e(
								'div',
								{ staticClass: 'block-content normal-block' },
								[
									A.data.index
										? A._e()
										: e(
												'span',
												{
													staticClass:
														'write-block num'
												},
												[
													e('span', [
														A._v(
															A._s(
																A.data.question
																	.order
															)
														)
													]),
													A._v(' '),
													e(
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
										? e(
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
													e('i', {
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
										: e('div', {
												staticClass:
													'normal-block-score-box box-line-bottom'
										  }),
									A._v(' '),
									e(
										'div',
										{
											ref: 'choosed-img-list',
											staticClass: 'choosed-img-list'
										},
										A._l(A.data.choosedImgList, function(
											g,
											C
										) {
											return g.relativeIndex ==
												A.data.index
												? e('span', { style: {} }, [
														e('img', {
															ref: 'images',
															refInFor: !0,
															attrs: {
																src: g.url,
																width: A.getImgWidth(
																	g
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
														e('a', {
															staticClass:
																'delete-img-btn',
															attrs: {
																href:
																	'javascript:void(0)'
															},
															on: {
																click: function(
																	e
																) {
																	A.deleteImg(
																		e,
																		g,
																		C
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
							e('div', {
								ref: 'scaleLayout',
								staticClass: 'scale-layout'
							}),
							A._v(' '),
							e('img', {
								ref: 'scaleBtn',
								staticClass: 'scale-btn',
								attrs: { src: C(141) },
								on: { mousedown: A.scaleBtnMousedownHandler }
							}),
							A._v(' '),
							A.isShowImgSelector
								? e('img-selector', {
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
			var YA = function() {
				var A = this,
					g = A.$createElement,
					C = A._self._c || g
				return C(
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
						C('div', { staticClass: 'img-selector-content' }, [
							C('p', { staticClass: 'img-selector-title' }, [
								A._v('\n\t\t\t选择图片\n\t\t\t'),
								C('a', {
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
							C('div', { staticClass: 'img-list' }, [
								C(
									'ul',
									A._l(A.imgList, function(g, e) {
										return C(
											'li',
											{
												style: {
													'background-image':
														'url(' + g.url + ')',
													marginRight: A.isRightmost(
														e
													)
														? '0px'
														: null,
													marginLeft: A.isLeftmost(e)
														? '0px'
														: null
												},
												on: {
													click: function(C) {
														A.checkImg(g, e)
													}
												}
											},
											[
												C('span', {
													class: [
														'img-list-checkbutton',
														g.checked
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
							C(
								'footer',
								{ staticClass: 'img-selector-footer' },
								[
									C(
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
									C(
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
			YA._withStripped = !0
			var jA = {
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
							var g =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: 4
							return A > 0 && (A + 1) % g == 0
						},
						isLeftmost: function(A) {
							var g =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: 4
							return 0 === A || (A + 1) % g == 1
						},
						checkImg: function(A, g) {
							if (A.checked) {
								var C = this.checkedImgs.findIndex(function(g) {
									return g.url === A.url
								})
								this.checkedImgs.splice(C, 1)
							} else this.checkedImgs.push(A)
							this.$set(
								this.imgList,
								g,
								c()({}, this.imgList[g], {
									checked: !this.imgList[g].checked
								})
							)
						},
						submit: function() {
							this.$emit('submit', this.checkedImgs)
						},
						setSelectableImages: function() {
							var A = this,
								g = []
							this.list.forEach(function(C, e) {
								A.checkedImageUrls.includes(C.url) || g.push(C)
							}),
								(this.imgList = g)
						}
					},
					mounted: function() {
						this.setSelectableImages()
					}
				},
				ZA =
					(C(142),
					Object(lA.a)(jA, YA, [], !1, null, '734482ca', null))
			ZA.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/ImgSelector.vue'
			var qA = {
					props: { data: null },
					components: { ImgSelector: ZA.exports },
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
							hostReg: /(:\/\/)(.+?)(\/)/,
							localhostReg: /(localhost)|(192\.\d+\.\d+\.\d+:\d+)/
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
								? this.$nextTick(function(g) {
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
								A.match(this.hostReg)[2]
							)
						},
						replaceBaiduCloudUrl: function(A) {
							var g = location.host
							return A.replace(
								this.hostReg,
								this.isLocalhost()
									? '$1'.concat('ms-stage.bcbook.cn', '$3')
									: '$1'.concat(g, '$3')
							)
						},
						checkCanInsertImg: function() {
							var A = this,
								g = []
							return (
								this.data.imgList.forEach(function(C, e) {
									A.checkedImageUrls.includes(C.url) ||
										g.push(C)
								}),
								0 !== g.length
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
							var g = this
							A.forEach(function(A) {
								g.isBaiduCloudHost(A.url) &&
									(A.url = g.replaceBaiduCloudUrl(A.url)),
									(A.relativeIndex = g.data.index),
									g.data.choosedImgList.unshift(A)
							}),
								(this.isShowImgSelector = !1)
						},
						deleteImg: function(A, g) {
							A.stopPropagation()
							for (
								var C = this.data.choosedImgList,
									e = 0,
									I = C.length;
								e < I;
								e++
							)
								if (C[e] == g) {
									C.splice(e, 1)
									break
								}
						},
						getImgWidth: function(A) {
							var g = this.isHighDpr() ? 4 : 1
							return A.width ? A.width * g + 'px' : 'auto'
						},
						scaleBtnMousedownHandler: function(A) {
							var g = this.$refs.scaleBtn,
								C = this.$refs.scaleLayout
							A.preventDefault(),
								(this.isDraging = !0),
								(this.startPos = {
									x: A.clientX,
									y: A.clientY
								}),
								(this.oriStartPosY = this.startPos.y),
								(g.style.top = this.data.height - 25 + 'px'),
								(C.style.height = this.data.height + 'px'),
								(C.style.display = 'block'),
								(this.mouseDownTimeStamp = +new Date())
						},
						mouseUpHandler: function(A) {
							if (this.isDraging) {
								var g = this.$refs.scaleLayout,
									C = IA(g.style.height)
								if (
									((g.style.display = 'none'),
									(this.isDraging = !1),
									A.clientY == this.oriStartPosY)
								)
									return
								;(this.data.height = C <= h ? h : C),
									this.calc()
							}
						},
						mouseMoveHandler: function(A) {
							if (this.isDraging) {
								var g = this.$refs.scaleBtn,
									C = this.$refs.scaleLayout,
									e = A.clientX,
									I = A.clientY,
									t = IA(g.style.top) + I - this.startPos.y
								t <= h && (t = h),
									(g.style.top = t + 'px'),
									(C.style.height = t + 'px'),
									(this.startPos.y = I),
									(this.startPos.x = e)
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
					(C(146),
					Object(lA.a)(qA, WA, [], !1, null, '1ed43824', null))
			$A.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/NormalBlock.vue'
			var Ag = $A.exports,
				gg = function() {
					var A = this.$createElement
					return (this._self._c || A)(
						'p',
						{ staticClass: 'text-content' },
						[this._v('\n    ' + this._s(this.data.text) + '\n')]
					)
				}
			gg._withStripped = !0
			var Cg = { props: { data: null } },
				eg = Object(lA.a)(Cg, gg, [], !1, null, null, null)
			eg.options.__file =
				'src/package/answerCard/src/components/CardBlock/components/TextBlock.vue'
			var Ig = {
					props: ['data', 'index'],
					inject: [
						'direction',
						'paperConfig',
						'isHighDpr',
						'clickBlock'
					],
					components: {
						FillInBlockQuestion: hA,
						ObjectiveQuestion: KA,
						EngCompositionQuestion: QA,
						CompositionQuestion: _A,
						PaperAttentionAndUserNumber: zA,
						PaperUserBaseInfo: JA,
						NormalBlock: Ag,
						TextBlock: eg.exports
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
								g = this.isHighDpr() ? 4 : 1,
								C = this.data
							if ('auto' == C.height) A.height = 'auto'
							else {
								switch (C.type) {
									case b.PaperAttentionAndUserNumber:
										A.height = ''.concat(
											(this.isHighDpr() ? 184 : 220) * g,
											'px'
										)
										break
									default:
										A.height = C.height * g + 'px'
								}
								this.index &&
									-1 == H.indexOf(C.type) &&
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
								N.indexOf(A.type) > -1 ||
									this.clickBlock(this.data, this.$refs.block)
							}
						}
					}
				},
				tg = (C(151), Object(lA.a)(Ig, iA, [], !1, null, null, null))
			tg.options.__file =
				'src/package/answerCard/src/components/CardBlock/index.vue'
			var ng = {
					components: { AnswerBlock: tg.exports },
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
								width: ''.concat(B * A, 'px'),
								height: ''.concat(p * A, 'px')
							}
						}
					},
					data: function() {
						return { PaperPaddingSize: u }
					}
				},
				rg = (C(155), Object(lA.a)(ng, oA, [], !1, null, null, null))
			rg.options.__file =
				'src/package/answerCard/src/components/AnswerCardPaper.vue'
			var og = rg.exports,
				ig = function() {
					var A = this,
						g = A.$createElement,
						C = A._self._c || g
					return C(
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
							A._l(A.data, function(g, e) {
								return g
									? C('answer-paper', {
											key: e,
											class: [
												e ? 'right-paper' : 'left-paper'
											],
											attrs: {
												paper: g,
												'is-show-accessibility-block':
													!e &&
													A.IsShowWriteBlockFlag,
												direction: e
													? A.DirectionType.Right
													: A.DirectionType.Left
											}
									  })
									: A._e()
							}),
							A._v(' '),
							C('span', { ref: 'qrcode', staticClass: 'qrcode' }),
							A._v(' '),
							C('span', { staticClass: 'page-bottom-flag' }),
							A._v(' '),
							C('p', { staticClass: 'page-des' }, [
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
			ig._withStripped = !0
			var sg = C(112),
				ag = C.n(sg),
				cg = {
					components: { AnswerPaper: og },
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
						return { DirectionType: F, IsShowWriteBlockFlag: !1 }
					},
					mounted: function() {
						this.createQRCode()
					},
					methods: {
						createQRCode: function() {
							var A = this.isHighDpr()
							this.$refs.qrcode.innerHTML = ''
							var g = A ? 210 : 45
							this.index && (g *= 0.6),
								new ag.a(this.$refs.qrcode, {
									width: g,
									height: g,
									text: this.paperConfig.qrCodeContent,
									colorDark: '#000',
									colorLight: '#fff'
								})
						}
					}
				},
				lg = (C(157), Object(lA.a)(cg, ig, [], !1, null, null, null))
			lg.options.__file =
				'src/package/answerCard/src/components/AnswerCardPaperPackage.vue'
			var ug = lg.exports,
				Bg = 1,
				pg = 2,
				hg = {
					name: 'AnswerCardManager',
					components: { AnswerPaperPackage: ug, AnswerPaper: og },
					watch: {
						compositionSize: function(A) {
							;(this.paperConfig.totalSize = A), this.calc()
						},
						type: function(A) {
							;(this.paperConfig.type = E[m[A]]), this.calc()
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
								type: E[m[this.type]],
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
									g = this.paperList,
									C = 0,
									e = g.length;
								C < e;
								C++
							) {
								var I = g[C]
								switch (this.paperConfig.type) {
									case E.A4:
										A.push([I])
										break
									case E.A3:
										A.push(C < e - 1 ? [I, g[++C]] : [I])
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
								g = this.paperList
							;(this.paperList = []),
								this.$nextTick(function(C) {
									A.paperList = Z(
										g,
										A.isHighDpr(),
										A.paperConfig.totalSize
									)
								})
						},
						removeBlock: function(A) {
							this.paperList.forEach(function(g) {
								for (
									var C = g.blockList, e = C.length - 1;
									e > -1;
									e--
								) {
									C[e].relativeQuestionId ==
										A.relativeQuestionId && C.splice(e, 1)
								}
							}),
								this.calc()
						},
						clickBlock: function(A) {
							var g,
								C = A.relativeQuestionId,
								e = []
							this.paperList.forEach(function(A) {
								for (
									var I = A.blockList, t = I.length - 1;
									t > -1;
									t--
								) {
									var n = I[t]
									;-1 == N.indexOf(n.type) &&
										n.relativeQuestionId == C &&
										(function() {
											var A = n.index + 1,
												C = []
											switch (n.type) {
												case b.PaperFillInBlankQuestions:
													var I = '02'
													n.list.length &&
														(I =
															n.list[0].question
																.questionTypeId),
														(g = '02'),
														(C = n.list.map(
															function(g) {
																return {
																	imgOrderReal:
																		g.blockNum,
																	questionOrder:
																		g.order,
																	questionId:
																		g.qId,
																	score:
																		g
																			.question
																			.score,
																	imageOrder: A,
																	correctLocation:
																		g.correctLocation,
																	questionTypeId: I
																}
															}
														))
													break
												case b.Block:
												case b.PaperComposition:
												case b.EngPaperComposition:
													;(g =
														n.question
															.questionTypeId),
														C.push({
															imgOrderReal:
																n.blockNum,
															questionOrder:
																n.question
																	.order,
															questionId:
																n.relativeQuestionId,
															score:
																n.question
																	.score,
															imageOrder: A
														})
											}
											e = [].concat(rA()(e), rA()(C))
										})()
								}
							}),
								this.$emit('appendOrRemoveNodes', e, g)
						},
						toggleClass: function(A, g, C) {
							var e = this
							return (
								this.paperList.forEach(function(I) {
									for (
										var t = I.blockList, n = t.length - 1;
										n > -1;
										n--
									) {
										var r = t[n]
										if (
											A.indexOf(r.relativeQuestionId) > -1
										)
											switch (
												(r.classList ||
													e.$set(r, 'classList', []),
												C)
											) {
												case Bg:
													;-1 ==
														r.classList.indexOf(
															g
														) && r.classList.push(g)
													break
												case pg:
													var o = r.classList.indexOf(
														g
													)
													o > -1 &&
														r.classList.splice(o, 1)
											}
									}
								}),
								this
							)
						},
						addClass: function(A, g) {
							return this.toggleClass(A, g, Bg), this
						},
						removeClass: function(A, g) {
							return this.toggleClass(A, g, pg), this
						},
						toggleActive: function(A, g) {
							var C = this
							return (
								this.paperList.forEach(function(e) {
									for (
										var I = e.blockList, t = I.length - 1;
										t > -1;
										t--
									) {
										var n = I[t]
										A.indexOf(n.relativeQuestionId) > -1 &&
											C.$set(n, 'isActive', g)
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
								g = []
							return (
								this.paperList.forEach(function(C) {
									for (
										var e = C.blockList, I = e.length - 1;
										I > -1;
										I--
									) {
										var t = e[I]
										;-1 != N.indexOf(t.type) ||
											t.isActive ||
											-1 !=
												g.indexOf(
													t.relativeQuestionId
												) ||
											(A.push(t),
											g.push(t.relativeQuestionId))
									}
								}),
								A
							)
						}
					}
				},
				dg = (C(159), Object(lA.a)(hg, tA, [], !1, null, null, null))
			dg.options.__file =
				'src/package/answerCard/src/components/AnswerCardPaperManager.vue'
			var fg = dg.exports,
				wg = C(79),
				Qg = C.n(wg),
				Ug = C(113),
				Eg = C.n(Ug),
				mg = C(76),
				Fg = C.n(mg),
				bg = function() {
					var A = this,
						g = A.$createElement,
						C = A._self._c || g
					return C(
						'div',
						{ staticClass: 'answer-paper-print' },
						A._l(A.data, function(g, e) {
							return A.data
								? C('answer-paper-package', {
										key: e,
										ref: 'printDom_' + e,
										refInFor: !0,
										attrs: {
											'paper-type': A.paperType,
											dpr: A.HighDprScale,
											page: e + 1,
											'total-page': A.data.length,
											data: g,
											index: e
										}
								  })
								: A._e()
						}),
						1
					)
				}
			bg._withStripped = !0
			var vg = {
					components: { AnswerPaperPackage: ug },
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
									var g = $(A.$el).find(
										'.choosed-img-list img'
									)
									if (!g.length) return A.judge()
									A.imgCount = g.length
									for (var C = 0, e = g.length; C < e; C++) {
										var I = g[C]
										;(I.onload = I.onerror = function() {
											A.loadedImgCount++, A.judge()
										}),
											('complete' == I.readyState ||
												'loaded' == I.readyState ||
												I.complete) &&
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
							PaperType: m
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
									this.$nextTick(function(g) {
										A.onRendered()
									})
						}
					}
				},
				Hg = (C(178), Object(lA.a)(vg, bg, [], !1, null, null, null))
			Hg.options.__file =
				'src/package/answerCard/src/components/AnswerCardPaperPrint.vue'
			var Ng = Hg.exports,
				xg = C(114),
				yg = C.n(xg),
				Kg = Vue.extend(Ng),
				Tg = function(A) {
					return new Fg.a(function(g, C) {
						var e,
							I = new Kg({
								el: document.createElement('div'),
								data: A,
								methods: {
									onRendered:
										((e = Eg()(
											Qg.a.mark(function A() {
												var C, e, I, t, n, r, o
												return Qg.a.wrap(
													function(A) {
														for (;;)
															switch (
																(A.prev =
																	A.next)
															) {
																case 0:
																	;(C = []),
																		(e = $(
																			document
																		)),
																		(I = e.scrollTop()),
																		e.scrollTop(
																			0
																		),
																		Array.prototype.push.apply(
																			C,
																			this.$el.getElementsByClassName(
																				'answer-paper-package'
																			)
																		),
																		(t = []),
																		(n = 0),
																		(r =
																			C.length)
																case 7:
																	if (
																		!(n < r)
																	) {
																		A.next = 15
																		break
																	}
																	return (
																		(A.next = 10),
																		yg()(
																			C[
																				n
																			],
																			{
																				useCORS: !0
																			}
																		)
																	)
																case 10:
																	;(o =
																		A.sent),
																		t.push(
																			o.toDataURL(
																				'image/jpeg'
																			)
																		)
																case 12:
																	n++,
																		(A.next = 7)
																	break
																case 15:
																	g(t),
																		e.scrollTop(
																			I
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
											return e.apply(this, arguments)
										})
								}
							})
						document.body.appendChild(I.$el)
					})
				}
			g.default = {
				install: function(A) {
					A.component(fg.name, fg)
				},
				util: e,
				PrintService: I
			}
		},
		,
		,
		,
		,
		,
		,
		,
		,
		function(A, g, C) {
			'use strict'
			var e = C(122)(!0)
			C(94)(
				String,
				'String',
				function(A) {
					;(this._t = String(A)), (this._i = 0)
				},
				function() {
					var A,
						g = this._t,
						C = this._i
					return C >= g.length
						? { value: void 0, done: !0 }
						: ((A = e(g, C)),
						  (this._i += A.length),
						  { value: A, done: !1 })
				}
			)
		},
		function(A, g, C) {
			'use strict'
			var e = C(23),
				I = C(15),
				t = C(80),
				n = C(16),
				r = C(42),
				o = C(123),
				i = C(44),
				s = C(82),
				a = C(8)('iterator'),
				c = !([].keys && 'next' in [].keys()),
				l = function() {
					return this
				}
			A.exports = function(A, g, C, u, B, p, h) {
				o(C, g, u)
				var d,
					f,
					w,
					Q = function(A) {
						if (!c && A in F) return F[A]
						switch (A) {
							case 'keys':
							case 'values':
								return function() {
									return new C(this, A)
								}
						}
						return function() {
							return new C(this, A)
						}
					},
					U = g + ' Iterator',
					E = 'values' == B,
					m = !1,
					F = A.prototype,
					b = F[a] || F['@@iterator'] || (B && F[B]),
					v = b || Q(B),
					H = B ? (E ? Q('entries') : v) : void 0,
					N = ('Array' == g && F.entries) || b
				if (
					(N &&
						(w = s(N.call(new A()))) !== Object.prototype &&
						w.next &&
						(i(w, U, !0),
						e || 'function' == typeof w[a] || n(w, a, l)),
					E &&
						b &&
						'values' !== b.name &&
						((m = !0),
						(v = function() {
							return b.call(this)
						})),
					(e && !h) || (!c && !m && F[a]) || n(F, a, v),
					(r[g] = v),
					(r[U] = l),
					B)
				)
					if (
						((d = {
							values: E ? v : Q('values'),
							keys: p ? v : Q('keys'),
							entries: H
						}),
						h)
					)
						for (f in d) f in F || t(F, f, d[f])
					else I(I.P + I.F * (c || m), g, d)
				return d
			}
		},
		function(A, g, C) {
			var e = C(7),
				I = C(11),
				t = C(28)
			A.exports = C(6)
				? Object.defineProperties
				: function(A, g) {
						I(A)
						for (var C, n = t(g), r = n.length, o = 0; r > o; )
							e.f(A, (C = n[o++]), g[C])
						return A
				  }
		},
		function(A, g, C) {
			var e = C(11)
			A.exports = function(A, g, C, I) {
				try {
					return I ? g(e(C)[0], C[1]) : g(C)
				} catch (g) {
					var t = A.return
					throw (void 0 !== t && e(t.call(A)), g)
				}
			}
		},
		function(A, g, C) {
			var e = C(42),
				I = C(8)('iterator'),
				t = Array.prototype
			A.exports = function(A) {
				return void 0 !== A && (e.Array === A || t[I] === A)
			}
		},
		function(A, g, C) {
			var e = C(99),
				I = C(8)('iterator'),
				t = C(42)
			A.exports = C(4).getIteratorMethod = function(A) {
				if (null != A) return A[I] || A['@@iterator'] || t[e(A)]
			}
		},
		function(A, g, C) {
			var e = C(22),
				I = C(8)('toStringTag'),
				t =
					'Arguments' ==
					e(
						(function() {
							return arguments
						})()
					)
			A.exports = function(A) {
				var g, C, n
				return void 0 === A
					? 'Undefined'
					: null === A
					? 'Null'
					: 'string' ==
					  typeof (C = (function(A, g) {
							try {
								return A[g]
							} catch (A) {}
					  })((g = Object(A)), I))
					? C
					: t
					? e(g)
					: 'Object' == (n = e(g)) && 'function' == typeof g.callee
					? 'Arguments'
					: n
			}
		},
		function(A, g, C) {
			var e = C(8)('iterator'),
				I = !1
			try {
				var t = [7][e]()
				;(t.return = function() {
					I = !0
				}),
					Array.from(t, function() {
						throw 2
					})
			} catch (A) {}
			A.exports = function(A, g) {
				if (!g && !I) return !1
				var C = !1
				try {
					var t = [7],
						n = t[e]()
					;(n.next = function() {
						return { done: (C = !0) }
					}),
						(t[e] = function() {
							return n
						}),
						A(t)
				} catch (A) {}
				return C
			}
		},
		function(A, g) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtElEQVQ4T6WT0RECIQxENxV4fSU9qBWoHVwJ2sFdD6Sv6yBOdHC4g/Ah/DEkL8uyEAYXDfbjB1DV2cxOIvLoQVX1CWBj5tnrSoAf3AAszHxtQVJKCxGdAbyY+b4D+KYoqCD5zMxWEbnkAZUHLUjUXCnI1BJiZuSyj5NDBQ0IouZQwcEP34bGNnNQ3vkz5et8ExKaWMruvc4O0HM7glRB6hnWDZJHGcCUExbFOYzyv59q+De+AT+OghGassTjAAAAAElFTkSuQmCC'
		},
		function(A, g, C) {
			var e = C(11),
				I = C(27),
				t = C(8)('species')
			A.exports = function(A, g) {
				var C,
					n = e(A).constructor
				return void 0 === n || null == (C = e(n)[t]) ? g : I(C)
			}
		},
		function(A, g, C) {
			var e,
				I,
				t,
				n = C(20),
				r = C(171),
				o = C(71),
				i = C(30),
				s = C(1),
				a = s.process,
				c = s.setImmediate,
				l = s.clearImmediate,
				u = s.MessageChannel,
				B = s.Dispatch,
				p = 0,
				h = {},
				d = function() {
					var A = +this
					if (h.hasOwnProperty(A)) {
						var g = h[A]
						delete h[A], g()
					}
				},
				f = function(A) {
					d.call(A.data)
				}
			;(c && l) ||
				((c = function(A) {
					for (var g = [], C = 1; arguments.length > C; )
						g.push(arguments[C++])
					return (
						(h[++p] = function() {
							r('function' == typeof A ? A : Function(A), g)
						}),
						e(p),
						p
					)
				}),
				(l = function(A) {
					delete h[A]
				}),
				'process' == C(22)(a)
					? (e = function(A) {
							a.nextTick(n(d, A, 1))
					  })
					: B && B.now
					? (e = function(A) {
							B.now(n(d, A, 1))
					  })
					: u
					? ((t = (I = new u()).port2),
					  (I.port1.onmessage = f),
					  (e = n(t.postMessage, t, 1)))
					: s.addEventListener &&
					  'function' == typeof postMessage &&
					  !s.importScripts
					? ((e = function(A) {
							s.postMessage(A + '', '*')
					  }),
					  s.addEventListener('message', f, !1))
					: (e =
							'onreadystatechange' in i('script')
								? function(A) {
										o.appendChild(
											i('script')
										).onreadystatechange = function() {
											o.removeChild(this), d.call(A)
										}
								  }
								: function(A) {
										setTimeout(n(d, A, 1), 0)
								  })),
				(A.exports = { set: c, clear: l })
		},
		function(A, g) {
			A.exports = function(A) {
				try {
					return { e: !1, v: A() }
				} catch (A) {
					return { e: !0, v: A }
				}
			}
		},
		function(A, g, C) {
			var e = C(11),
				I = C(9),
				t = C(72)
			A.exports = function(A, g) {
				if ((e(A), I(g) && g.constructor === A)) return g
				var C = t.f(A)
				return (0, C.resolve)(g), C.promise
			}
		},
		,
		,
		,
		,
		,
		,
		function(A, g, C) {
			var e
			A.exports = (function() {
				function A(A) {
					;(this.mode = C.MODE_8BIT_BYTE),
						(this.data = A),
						(this.parsedData = [])
					for (var g = 0, e = this.data.length; g < e; g++) {
						var I = [],
							t = this.data.charCodeAt(g)
						t > 65536
							? ((I[0] = 240 | ((1835008 & t) >>> 18)),
							  (I[1] = 128 | ((258048 & t) >>> 12)),
							  (I[2] = 128 | ((4032 & t) >>> 6)),
							  (I[3] = 128 | (63 & t)))
							: t > 2048
							? ((I[0] = 224 | ((61440 & t) >>> 12)),
							  (I[1] = 128 | ((4032 & t) >>> 6)),
							  (I[2] = 128 | (63 & t)))
							: t > 128
							? ((I[0] = 192 | ((1984 & t) >>> 6)),
							  (I[1] = 128 | (63 & t)))
							: (I[0] = t),
							this.parsedData.push(I)
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
				function g(A, g) {
					;(this.typeNumber = A),
						(this.errorCorrectLevel = g),
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
						for (var g = 0, C = this.parsedData.length; g < C; g++)
							A.put(this.parsedData[g], 8)
					}
				}),
					(g.prototype = {
						addData: function(g) {
							var C = new A(g)
							this.dataList.push(C), (this.dataCache = null)
						},
						isDark: function(A, g) {
							if (
								A < 0 ||
								this.moduleCount <= A ||
								g < 0 ||
								this.moduleCount <= g
							)
								throw new Error(A + ',' + g)
							return this.modules[A][g]
						},
						getModuleCount: function() {
							return this.moduleCount
						},
						make: function() {
							this.makeImpl(!1, this.getBestMaskPattern())
						},
						makeImpl: function(A, C) {
							;(this.moduleCount = 4 * this.typeNumber + 17),
								(this.modules = new Array(this.moduleCount))
							for (var e = 0; e < this.moduleCount; e++) {
								this.modules[e] = new Array(this.moduleCount)
								for (var I = 0; I < this.moduleCount; I++)
									this.modules[e][I] = null
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
								this.setupTypeInfo(A, C),
								this.typeNumber >= 7 && this.setupTypeNumber(A),
								null == this.dataCache &&
									(this.dataCache = g.createData(
										this.typeNumber,
										this.errorCorrectLevel,
										this.dataList
									)),
								this.mapData(this.dataCache, C)
						},
						setupPositionProbePattern: function(A, g) {
							for (var C = -1; C <= 7; C++)
								if (!(A + C <= -1 || this.moduleCount <= A + C))
									for (var e = -1; e <= 7; e++)
										g + e <= -1 ||
											this.moduleCount <= g + e ||
											(this.modules[A + C][g + e] =
												(0 <= C &&
													C <= 6 &&
													(0 == e || 6 == e)) ||
												(0 <= e &&
													e <= 6 &&
													(0 == C || 6 == C)) ||
												(2 <= C &&
													C <= 4 &&
													2 <= e &&
													e <= 4))
						},
						getBestMaskPattern: function() {
							for (var A = 0, g = 0, C = 0; C < 8; C++) {
								this.makeImpl(!0, C)
								var e = n.getLostPoint(this)
								;(0 == C || A > e) && ((A = e), (g = C))
							}
							return g
						},
						createMovieClip: function(A, g, C) {
							var e = A.createEmptyMovieClip(g, C)
							this.make()
							for (var I = 0; I < this.modules.length; I++)
								for (
									var t = 1 * I, n = 0;
									n < this.modules[I].length;
									n++
								) {
									var r = 1 * n,
										o = this.modules[I][n]
									o &&
										(e.beginFill(0, 100),
										e.moveTo(r, t),
										e.lineTo(r + 1, t),
										e.lineTo(r + 1, t + 1),
										e.lineTo(r, t + 1),
										e.endFill())
								}
							return e
						},
						setupTimingPattern: function() {
							for (var A = 8; A < this.moduleCount - 8; A++)
								null == this.modules[A][6] &&
									(this.modules[A][6] = A % 2 == 0)
							for (var g = 8; g < this.moduleCount - 8; g++)
								null == this.modules[6][g] &&
									(this.modules[6][g] = g % 2 == 0)
						},
						setupPositionAdjustPattern: function() {
							for (
								var A = n.getPatternPosition(this.typeNumber),
									g = 0;
								g < A.length;
								g++
							)
								for (var C = 0; C < A.length; C++) {
									var e = A[g],
										I = A[C]
									if (null == this.modules[e][I])
										for (var t = -2; t <= 2; t++)
											for (var r = -2; r <= 2; r++)
												this.modules[e + t][I + r] =
													-2 == t ||
													2 == t ||
													-2 == r ||
													2 == r ||
													(0 == t && 0 == r)
								}
						},
						setupTypeNumber: function(A) {
							for (
								var g = n.getBCHTypeNumber(this.typeNumber),
									C = 0;
								C < 18;
								C++
							) {
								var e = !A && 1 == ((g >> C) & 1)
								this.modules[Math.floor(C / 3)][
									(C % 3) + this.moduleCount - 8 - 3
								] = e
							}
							for (var C = 0; C < 18; C++) {
								var e = !A && 1 == ((g >> C) & 1)
								this.modules[
									(C % 3) + this.moduleCount - 8 - 3
								][Math.floor(C / 3)] = e
							}
						},
						setupTypeInfo: function(A, g) {
							for (
								var C = (this.errorCorrectLevel << 3) | g,
									e = n.getBCHTypeInfo(C),
									I = 0;
								I < 15;
								I++
							) {
								var t = !A && 1 == ((e >> I) & 1)
								I < 6
									? (this.modules[I][8] = t)
									: I < 8
									? (this.modules[I + 1][8] = t)
									: (this.modules[
											this.moduleCount - 15 + I
									  ][8] = t)
							}
							for (var I = 0; I < 15; I++) {
								var t = !A && 1 == ((e >> I) & 1)
								I < 8
									? (this.modules[8][
											this.moduleCount - I - 1
									  ] = t)
									: I < 9
									? (this.modules[8][15 - I - 1 + 1] = t)
									: (this.modules[8][15 - I - 1] = t)
							}
							this.modules[this.moduleCount - 8][8] = !A
						},
						mapData: function(A, g) {
							for (
								var C = -1,
									e = this.moduleCount - 1,
									I = 7,
									t = 0,
									r = this.moduleCount - 1;
								r > 0;
								r -= 2
							)
								for (6 == r && r--; ; ) {
									for (var o = 0; o < 2; o++)
										if (null == this.modules[e][r - o]) {
											var i = !1
											t < A.length &&
												(i = 1 == ((A[t] >>> I) & 1))
											var s = n.getMask(g, e, r - o)
											s && (i = !i),
												(this.modules[e][r - o] = i),
												-1 == --I && (t++, (I = 7))
										}
									if ((e += C) < 0 || this.moduleCount <= e) {
										;(e -= C), (C = -C)
										break
									}
								}
						}
					}),
					(g.PAD0 = 236),
					(g.PAD1 = 17),
					(g.createData = function(A, C, e) {
						for (
							var I = s.getRSBlocks(A, C), t = new a(), r = 0;
							r < e.length;
							r++
						) {
							var o = e[r]
							t.put(o.mode, 4),
								t.put(
									o.getLength(),
									n.getLengthInBits(o.mode, A)
								),
								o.write(t)
						}
						for (var i = 0, r = 0; r < I.length; r++)
							i += I[r].dataCount
						if (t.getLengthInBits() > 8 * i)
							throw new Error(
								'code length overflow. (' +
									t.getLengthInBits() +
									'>' +
									8 * i +
									')'
							)
						for (
							t.getLengthInBits() + 4 <= 8 * i && t.put(0, 4);
							t.getLengthInBits() % 8 != 0;

						)
							t.putBit(!1)
						for (
							;
							!(
								t.getLengthInBits() >= 8 * i ||
								(t.put(g.PAD0, 8), t.getLengthInBits() >= 8 * i)
							);

						)
							t.put(g.PAD1, 8)
						return g.createBytes(t, I)
					}),
					(g.createBytes = function(A, g) {
						for (
							var C = 0,
								e = 0,
								I = 0,
								t = new Array(g.length),
								r = new Array(g.length),
								o = 0;
							o < g.length;
							o++
						) {
							var s = g[o].dataCount,
								a = g[o].totalCount - s
							;(e = Math.max(e, s)),
								(I = Math.max(I, a)),
								(t[o] = new Array(s))
							for (var c = 0; c < t[o].length; c++)
								t[o][c] = 255 & A.buffer[c + C]
							C += s
							var l = n.getErrorCorrectPolynomial(a),
								u = new i(t[o], l.getLength() - 1),
								B = u.mod(l)
							r[o] = new Array(l.getLength() - 1)
							for (var c = 0; c < r[o].length; c++) {
								var p = c + B.getLength() - r[o].length
								r[o][c] = p >= 0 ? B.get(p) : 0
							}
						}
						for (var h = 0, c = 0; c < g.length; c++)
							h += g[c].totalCount
						for (var d = new Array(h), f = 0, c = 0; c < e; c++)
							for (var o = 0; o < g.length; o++)
								c < t[o].length && (d[f++] = t[o][c])
						for (var c = 0; c < I; c++)
							for (var o = 0; o < g.length; o++)
								c < r[o].length && (d[f++] = r[o][c])
						return d
					})
				for (
					var C = {
							MODE_NUMBER: 1,
							MODE_ALPHA_NUM: 2,
							MODE_8BIT_BYTE: 4,
							MODE_KANJI: 8
						},
						I = { L: 1, M: 0, Q: 3, H: 2 },
						t = {
							PATTERN000: 0,
							PATTERN001: 1,
							PATTERN010: 2,
							PATTERN011: 3,
							PATTERN100: 4,
							PATTERN101: 5,
							PATTERN110: 6,
							PATTERN111: 7
						},
						n = {
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
									var g = A << 10;
									n.getBCHDigit(g) - n.getBCHDigit(n.G15) >=
									0;

								)
									g ^=
										n.G15 <<
										(n.getBCHDigit(g) -
											n.getBCHDigit(n.G15))
								return ((A << 10) | g) ^ n.G15_MASK
							},
							getBCHTypeNumber: function(A) {
								for (
									var g = A << 12;
									n.getBCHDigit(g) - n.getBCHDigit(n.G18) >=
									0;

								)
									g ^=
										n.G18 <<
										(n.getBCHDigit(g) -
											n.getBCHDigit(n.G18))
								return (A << 12) | g
							},
							getBCHDigit: function(A) {
								for (var g = 0; 0 != A; ) g++, (A >>>= 1)
								return g
							},
							getPatternPosition: function(A) {
								return n.PATTERN_POSITION_TABLE[A - 1]
							},
							getMask: function(A, g, C) {
								switch (A) {
									case t.PATTERN000:
										return (g + C) % 2 == 0
									case t.PATTERN001:
										return g % 2 == 0
									case t.PATTERN010:
										return C % 3 == 0
									case t.PATTERN011:
										return (g + C) % 3 == 0
									case t.PATTERN100:
										return (
											(Math.floor(g / 2) +
												Math.floor(C / 3)) %
												2 ==
											0
										)
									case t.PATTERN101:
										return (
											((g * C) % 2) + ((g * C) % 3) == 0
										)
									case t.PATTERN110:
										return (
											(((g * C) % 2) + ((g * C) % 3)) %
												2 ==
											0
										)
									case t.PATTERN111:
										return (
											(((g * C) % 3) + ((g + C) % 2)) %
												2 ==
											0
										)
									default:
										throw new Error('bad maskPattern:' + A)
								}
							},
							getErrorCorrectPolynomial: function(A) {
								for (var g = new i([1], 0), C = 0; C < A; C++)
									g = g.multiply(new i([1, r.gexp(C)], 0))
								return g
							},
							getLengthInBits: function(A, g) {
								if (1 <= g && g < 10)
									switch (A) {
										case C.MODE_NUMBER:
											return 10
										case C.MODE_ALPHA_NUM:
											return 9
										case C.MODE_8BIT_BYTE:
										case C.MODE_KANJI:
											return 8
										default:
											throw new Error('mode:' + A)
									}
								else if (g < 27)
									switch (A) {
										case C.MODE_NUMBER:
											return 12
										case C.MODE_ALPHA_NUM:
											return 11
										case C.MODE_8BIT_BYTE:
											return 16
										case C.MODE_KANJI:
											return 10
										default:
											throw new Error('mode:' + A)
									}
								else {
									if (!(g < 41)) throw new Error('type:' + g)
									switch (A) {
										case C.MODE_NUMBER:
											return 14
										case C.MODE_ALPHA_NUM:
											return 13
										case C.MODE_8BIT_BYTE:
											return 16
										case C.MODE_KANJI:
											return 12
										default:
											throw new Error('mode:' + A)
									}
								}
							},
							getLostPoint: function(A) {
								for (
									var g = A.getModuleCount(), C = 0, e = 0;
									e < g;
									e++
								)
									for (var I = 0; I < g; I++) {
										for (
											var t = 0,
												n = A.isDark(e, I),
												r = -1;
											r <= 1;
											r++
										)
											if (!(e + r < 0 || g <= e + r))
												for (var o = -1; o <= 1; o++)
													I + o < 0 ||
														g <= I + o ||
														(0 == r && 0 == o) ||
														(n ==
															A.isDark(
																e + r,
																I + o
															) &&
															t++)
										t > 5 && (C += 3 + t - 5)
									}
								for (var e = 0; e < g - 1; e++)
									for (var I = 0; I < g - 1; I++) {
										var i = 0
										A.isDark(e, I) && i++,
											A.isDark(e + 1, I) && i++,
											A.isDark(e, I + 1) && i++,
											A.isDark(e + 1, I + 1) && i++,
											(0 != i && 4 != i) || (C += 3)
									}
								for (var e = 0; e < g; e++)
									for (var I = 0; I < g - 6; I++)
										A.isDark(e, I) &&
											!A.isDark(e, I + 1) &&
											A.isDark(e, I + 2) &&
											A.isDark(e, I + 3) &&
											A.isDark(e, I + 4) &&
											!A.isDark(e, I + 5) &&
											A.isDark(e, I + 6) &&
											(C += 40)
								for (var I = 0; I < g; I++)
									for (var e = 0; e < g - 6; e++)
										A.isDark(e, I) &&
											!A.isDark(e + 1, I) &&
											A.isDark(e + 2, I) &&
											A.isDark(e + 3, I) &&
											A.isDark(e + 4, I) &&
											!A.isDark(e + 5, I) &&
											A.isDark(e + 6, I) &&
											(C += 40)
								for (var s = 0, I = 0; I < g; I++)
									for (var e = 0; e < g; e++)
										A.isDark(e, I) && s++
								var a = Math.abs((100 * s) / g / g - 50) / 5
								return (C += 10 * a)
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
				function i(A, g) {
					if (null == A.length) throw new Error(A.length + '/' + g)
					for (var C = 0; C < A.length && 0 == A[C]; ) C++
					this.num = new Array(A.length - C + g)
					for (var e = 0; e < A.length - C; e++)
						this.num[e] = A[e + C]
				}
				function s(A, g) {
					;(this.totalCount = A), (this.dataCount = g)
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
							var g = new Array(
									this.getLength() + A.getLength() - 1
								),
								C = 0;
							C < this.getLength();
							C++
						)
							for (var e = 0; e < A.getLength(); e++)
								g[C + e] ^= r.gexp(
									r.glog(this.get(C)) + r.glog(A.get(e))
								)
						return new i(g, 0)
					},
					mod: function(A) {
						if (this.getLength() - A.getLength() < 0) return this
						for (
							var g = r.glog(this.get(0)) - r.glog(A.get(0)),
								C = new Array(this.getLength()),
								e = 0;
							e < this.getLength();
							e++
						)
							C[e] = this.get(e)
						for (var e = 0; e < A.getLength(); e++)
							C[e] ^= r.gexp(r.glog(A.get(e)) + g)
						return new i(C, 0).mod(A)
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
					(s.getRSBlocks = function(A, g) {
						var C = s.getRsBlockTable(A, g)
						if (null == C)
							throw new Error(
								'bad rs block @ typeNumber:' +
									A +
									'/errorCorrectLevel:' +
									g
							)
						for (var e = C.length / 3, I = [], t = 0; t < e; t++)
							for (
								var n = C[3 * t + 0],
									r = C[3 * t + 1],
									o = C[3 * t + 2],
									i = 0;
								i < n;
								i++
							)
								I.push(new s(r, o))
						return I
					}),
					(s.getRsBlockTable = function(A, g) {
						switch (g) {
							case I.L:
								return s.RS_BLOCK_TABLE[4 * (A - 1) + 0]
							case I.M:
								return s.RS_BLOCK_TABLE[4 * (A - 1) + 1]
							case I.Q:
								return s.RS_BLOCK_TABLE[4 * (A - 1) + 2]
							case I.H:
								return s.RS_BLOCK_TABLE[4 * (A - 1) + 3]
							default:
								return
						}
					}),
					(a.prototype = {
						get: function(A) {
							var g = Math.floor(A / 8)
							return 1 == ((this.buffer[g] >>> (7 - (A % 8))) & 1)
						},
						put: function(A, g) {
							for (var C = 0; C < g; C++)
								this.putBit(1 == ((A >>> (g - C - 1)) & 1))
						},
						getLengthInBits: function() {
							return this.length
						},
						putBit: function(A) {
							var g = Math.floor(this.length / 8)
							this.buffer.length <= g && this.buffer.push(0),
								A &&
									(this.buffer[g] |= 128 >>> this.length % 8),
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
						g = navigator.userAgent
					if (/android/i.test(g)) {
						A = !0
						var C = g.toString().match(/android ([0-9]\.[0-9])/i)
						C && C[1] && (A = parseFloat(C[1]))
					}
					return A
				}
				var u = (function() {
						var A = function(A, g) {
							;(this._el = A), (this._htOption = g)
						}
						return (
							(A.prototype.draw = function(A) {
								var g = this._htOption,
									C = this._el,
									e = A.getModuleCount()
								function I(A, g) {
									var C = document.createElementNS(
										'http://www.w3.org/2000/svg',
										A
									)
									for (var e in g)
										g.hasOwnProperty(e) &&
											C.setAttribute(e, g[e])
									return C
								}
								Math.floor(g.width / e),
									Math.floor(g.height / e),
									this.clear()
								var t = I('svg', {
									viewBox:
										'0 0 ' + String(e) + ' ' + String(e),
									width: '100%',
									height: '100%',
									fill: g.colorLight
								})
								t.setAttributeNS(
									'http://www.w3.org/2000/xmlns/',
									'xmlns:xlink',
									'http://www.w3.org/1999/xlink'
								),
									C.appendChild(t),
									t.appendChild(
										I('rect', {
											fill: g.colorLight,
											width: '100%',
											height: '100%'
										})
									),
									t.appendChild(
										I('rect', {
											fill: g.colorDark,
											width: '1',
											height: '1',
											id: 'template'
										})
									)
								for (var n = 0; n < e; n++)
									for (var r = 0; r < e; r++)
										if (A.isDark(n, r)) {
											var o = I('use', {
												x: String(r),
												y: String(n)
											})
											o.setAttributeNS(
												'http://www.w3.org/1999/xlink',
												'href',
												'#template'
											),
												t.appendChild(o)
										}
							}),
							(A.prototype.clear = function() {
								for (; this._el.hasChildNodes(); )
									this._el.removeChild(this._el.lastChild)
							}),
							A
						)
					})(),
					B =
						'svg' === document.documentElement.tagName.toLowerCase()
							? u
							: 'undefined' == typeof CanvasRenderingContext2D
							? (function() {
									var A = function(A, g) {
										;(this._el = A), (this._htOption = g)
									}
									return (
										(A.prototype.draw = function(A) {
											for (
												var g = this._htOption,
													C = this._el,
													e = A.getModuleCount(),
													I = Math.floor(g.width / e),
													t = Math.floor(
														g.height / e
													),
													n = [
														'<table style="border:0;border-collapse:collapse;">'
													],
													r = 0;
												r < e;
												r++
											) {
												n.push('<tr>')
												for (var o = 0; o < e; o++)
													n.push(
														'<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' +
															I +
															'px;height:' +
															t +
															'px;background-color:' +
															(A.isDark(r, o)
																? g.colorDark
																: g.colorLight) +
															';"></td>'
													)
												n.push('</tr>')
											}
											n.push('</table>'),
												(C.innerHTML = n.join(''))
											var i = C.childNodes[0],
												s =
													(g.width - i.offsetWidth) /
													2,
												a =
													(g.height -
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
										var g = 1 / window.devicePixelRatio,
											C =
												CanvasRenderingContext2D
													.prototype.drawImage
										CanvasRenderingContext2D.prototype.drawImage = function(
											A,
											e,
											I,
											t,
											n,
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
														arguments[a] * g
											else
												void 0 === i &&
													((arguments[1] *= g),
													(arguments[2] *= g),
													(arguments[3] *= g),
													(arguments[4] *= g))
											C.apply(this, arguments)
										}
									}
									var e = function(A, g) {
										;(this._bIsPainted = !1),
											(this._android = l()),
											(this._htOption = g),
											(this._elCanvas = document.createElement(
												'canvas'
											)),
											(this._elCanvas.width = g.width),
											(this._elCanvas.height = g.height),
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
										(e.prototype.draw = function(A) {
											var g = this._elImage,
												C = this._oContext,
												e = this._htOption,
												I = A.getModuleCount(),
												t = e.width / I,
												n = e.height / I,
												r = Math.round(t),
												o = Math.round(n)
											;(g.style.display = 'none'),
												this.clear()
											for (var i = 0; i < I; i++)
												for (var s = 0; s < I; s++) {
													var a = A.isDark(i, s),
														c = s * t,
														l = i * n
													;(C.strokeStyle = a
														? e.colorDark
														: e.colorLight),
														(C.lineWidth = 1),
														(C.fillStyle = a
															? e.colorDark
															: e.colorLight),
														C.fillRect(c, l, t, n),
														C.strokeRect(
															Math.floor(c) + 0.5,
															Math.floor(l) + 0.5,
															r,
															o
														),
														C.strokeRect(
															Math.ceil(c) - 0.5,
															Math.ceil(l) - 0.5,
															r,
															o
														)
												}
											this._bIsPainted = !0
										}),
										(e.prototype.makeImage = function() {
											this._bIsPainted &&
												function(A, g) {
													var C = this
													if (
														((C._fFail = g),
														(C._fSuccess = A),
														null ===
															C._bSupportDataURI)
													) {
														var e = document.createElement(
																'img'
															),
															I = function() {
																;(C._bSupportDataURI = !1),
																	C._fFail &&
																		C._fFail.call(
																			C
																		)
															}
														return (
															(e.onabort = I),
															(e.onerror = I),
															(e.onload = function() {
																;(C._bSupportDataURI = !0),
																	C._fSuccess &&
																		C._fSuccess.call(
																			C
																		)
															}),
															void (e.src =
																'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==')
														)
													}
													!0 === C._bSupportDataURI &&
													C._fSuccess
														? C._fSuccess.call(C)
														: !1 ===
																C._bSupportDataURI &&
														  C._fFail &&
														  C._fFail.call(C)
												}.call(this, A)
										}),
										(e.prototype.isPainted = function() {
											return this._bIsPainted
										}),
										(e.prototype.clear = function() {
											this._oContext.clearRect(
												0,
												0,
												this._elCanvas.width,
												this._elCanvas.height
											),
												(this._bIsPainted = !1)
										}),
										(e.prototype.round = function(A) {
											return A
												? Math.floor(1e3 * A) / 1e3
												: A
										}),
										e
									)
							  })()
				return (
					((e = function(A, g) {
						if (
							((this._htOption = {
								width: 256,
								height: 256,
								typeNumber: 4,
								colorDark: '#000000',
								colorLight: '#ffffff',
								correctLevel: I.H
							}),
							'string' == typeof g && (g = { text: g }),
							g)
						)
							for (var C in g) this._htOption[C] = g[C]
						'string' == typeof A &&
							(A = document.getElementById(A)),
							this._htOption.useSVG && (B = u),
							(this._android = l()),
							(this._el = A),
							(this._oQRCode = null),
							(this._oDrawing = new B(this._el, this._htOption)),
							this._htOption.text &&
								this.makeCode(this._htOption.text)
					}).prototype.makeCode = function(A) {
						;(this._oQRCode = new g(
							(function(A, g) {
								for (
									var C = 1,
										e = (function(A) {
											var g = encodeURI(A)
												.toString()
												.replace(
													/\%[0-9a-fA-F]{2}/g,
													'a'
												)
											return (
												g.length +
												(g.length != A ? 3 : 0)
											)
										})(A),
										t = 0,
										n = c.length;
									t <= n;
									t++
								) {
									var r = 0
									switch (g) {
										case I.L:
											r = c[t][0]
											break
										case I.M:
											r = c[t][1]
											break
										case I.Q:
											r = c[t][2]
											break
										case I.H:
											r = c[t][3]
									}
									if (e <= r) break
									C++
								}
								if (C > c.length)
									throw new Error('Too long data')
								return C
							})(A, this._htOption.correctLevel),
							this._htOption.correctLevel
						)),
							this._oQRCode.addData(A),
							this._oQRCode.make(),
							(this._el.title = A),
							this._oDrawing.draw(this._oQRCode),
							this.makeImage()
					}),
					(e.prototype.makeImage = function() {
						'function' == typeof this._oDrawing.makeImage &&
							(!this._android || this._android >= 3) &&
							this._oDrawing.makeImage()
					}),
					(e.prototype.clear = function() {
						this._oDrawing.clear()
					}),
					(e.CorrectLevel = I),
					e
				)
			})()
		},
		function(A, g, C) {
			var e = C(76)
			A.exports = function(A) {
				return function() {
					var g = this,
						C = arguments
					return new e(function(I, t) {
						var n = A.apply(g, C)
						function r(A, g) {
							try {
								var C = n[A](g),
									r = C.value
							} catch (A) {
								return void t(A)
							}
							C.done ? I(r) : e.resolve(r).then(o, i)
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
		function(A, g, C) {
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
					g,
					C
				) {
					return (A =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function(A, g) {
								A.__proto__ = g
							}) ||
						function(A, g) {
							for (var C in g)
								g.hasOwnProperty(C) && (A[C] = g[C])
						})(g, C)
				}
				function g(g, C) {
					function e() {
						this.constructor = g
					}
					A(g, C),
						(g.prototype =
							null === C
								? Object.create(C)
								: ((e.prototype = C.prototype), new e()))
				}
				var C = function() {
					return (C =
						Object.assign ||
						function(A) {
							for (var g, C = 1, e = arguments.length; C < e; C++)
								for (var I in (g = arguments[C]))
									Object.prototype.hasOwnProperty.call(
										g,
										I
									) && (A[I] = g[I])
							return A
						}).apply(this, arguments)
				}
				function e(A, g, C, e) {
					return new (C || (C = Promise))(function(I, t) {
						function n(A) {
							try {
								o(e.next(A))
							} catch (A) {
								t(A)
							}
						}
						function r(A) {
							try {
								o(e.throw(A))
							} catch (A) {
								t(A)
							}
						}
						function o(A) {
							A.done
								? I(A.value)
								: new C(function(g) {
										g(A.value)
								  }).then(n, r)
						}
						o((e = e.apply(A, g || [])).next())
					})
				}
				function I(A, g) {
					var C,
						e,
						I,
						t,
						n = {
							label: 0,
							sent: function() {
								if (1 & I[0]) throw I[1]
								return I[1]
							},
							trys: [],
							ops: []
						}
					return (
						(t = { next: r(0), throw: r(1), return: r(2) }),
						'function' == typeof Symbol &&
							(t[Symbol.iterator] = function() {
								return this
							}),
						t
					)
					function r(t) {
						return function(r) {
							return (function(t) {
								if (C)
									throw new TypeError(
										'Generator is already executing.'
									)
								for (; n; )
									try {
										if (
											((C = 1),
											e &&
												(I =
													2 & t[0]
														? e.return
														: t[0]
														? e.throw ||
														  ((I = e.return) &&
																I.call(e),
														  0)
														: e.next) &&
												!(I = I.call(e, t[1])).done)
										)
											return I
										switch (
											((e = 0),
											I && (t = [2 & t[0], I.value]),
											t[0])
										) {
											case 0:
											case 1:
												I = t
												break
											case 4:
												return (
													n.label++,
													{ value: t[1], done: !1 }
												)
											case 5:
												n.label++, (e = t[1]), (t = [0])
												continue
											case 7:
												;(t = n.ops.pop()), n.trys.pop()
												continue
											default:
												if (
													!(I =
														(I = n.trys).length >
															0 &&
														I[I.length - 1]) &&
													(6 === t[0] || 2 === t[0])
												) {
													n = 0
													continue
												}
												if (
													3 === t[0] &&
													(!I ||
														(t[1] > I[0] &&
															t[1] < I[3]))
												) {
													n.label = t[1]
													break
												}
												if (
													6 === t[0] &&
													n.label < I[1]
												) {
													;(n.label = I[1]), (I = t)
													break
												}
												if (I && n.label < I[2]) {
													;(n.label = I[2]),
														n.ops.push(t)
													break
												}
												I[2] && n.ops.pop(),
													n.trys.pop()
												continue
										}
										t = g.call(A, n)
									} catch (A) {
										;(t = [6, A]), (e = 0)
									} finally {
										C = I = 0
									}
								if (5 & t[0]) throw t[1]
								return { value: t[0] ? t[1] : void 0, done: !0 }
							})([t, r])
						}
					}
				}
				for (
					var t = (function() {
							function A(A, g, C, e) {
								;(this.left = A),
									(this.top = g),
									(this.width = C),
									(this.height = e)
							}
							return (
								(A.prototype.add = function(g, C, e, I) {
									return new A(
										this.left + g,
										this.top + C,
										this.width + e,
										this.height + I
									)
								}),
								(A.fromClientRect = function(g) {
									return new A(
										g.left,
										g.top,
										g.width,
										g.height
									)
								}),
								A
							)
						})(),
						n = function(A) {
							return t.fromClientRect(A.getBoundingClientRect())
						},
						r = function(A) {
							for (var g = [], C = 0, e = A.length; C < e; ) {
								var I = A.charCodeAt(C++)
								if (I >= 55296 && I <= 56319 && C < e) {
									var t = A.charCodeAt(C++)
									56320 == (64512 & t)
										? g.push(
												((1023 & I) << 10) +
													(1023 & t) +
													65536
										  )
										: (g.push(I), C--)
								} else g.push(I)
							}
							return g
						},
						o = function() {
							for (var A = [], g = 0; g < arguments.length; g++)
								A[g] = arguments[g]
							if (String.fromCodePoint)
								return String.fromCodePoint.apply(String, A)
							var C = A.length
							if (!C) return ''
							for (var e = [], I = -1, t = ''; ++I < C; ) {
								var n = A[I]
								n <= 65535
									? e.push(n)
									: ((n -= 65536),
									  e.push(
											55296 + (n >> 10),
											(n % 1024) + 56320
									  )),
									(I + 1 === C || e.length > 16384) &&
										((t += String.fromCharCode.apply(
											String,
											e
										)),
										(e.length = 0))
							}
							return t
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
					l = function(A, g, C) {
						return A.slice
							? A.slice(g, C)
							: new Uint16Array(
									Array.prototype.slice.call(A, g, C)
							  )
					},
					u = (function() {
						function A(A, g, C, e, I, t) {
							;(this.initialValue = A),
								(this.errorValue = g),
								(this.highStart = C),
								(this.highValueIndex = e),
								(this.index = I),
								(this.data = t)
						}
						return (
							(A.prototype.get = function(A) {
								var g
								if (A >= 0) {
									if (A < 55296 || (A > 56319 && A <= 65535))
										return (
											(g =
												((g = this.index[A >> 5]) <<
													2) +
												(31 & A)),
											this.data[g]
										)
									if (A <= 65535)
										return (
											(g =
												((g = this.index[
													2048 + ((A - 55296) >> 5)
												]) <<
													2) +
												(31 & A)),
											this.data[g]
										)
									if (A < this.highStart)
										return (
											(g = 2080 + (A >> 11)),
											(g = this.index[g]),
											(g += (A >> 5) & 63),
											(g =
												((g = this.index[g]) << 2) +
												(31 & A)),
											this.data[g]
										)
									if (A <= 1114111)
										return this.data[this.highValueIndex]
								}
								return this.errorValue
							}),
							A
						)
					})(),
					B = 10,
					p = 13,
					h = 15,
					d = 17,
					f = 18,
					w = 19,
					Q = 20,
					U = 21,
					E = 22,
					m = 24,
					F = 25,
					b = 26,
					v = 27,
					H = 28,
					N = 30,
					x = 32,
					y = 33,
					K = 34,
					T = 35,
					R = 37,
					k = 38,
					L = 39,
					O = 40,
					D = 42,
					_ = '!',
					M = (function(A) {
						var g,
							C,
							e,
							I = (function(A) {
								var g,
									C,
									e,
									I,
									t,
									n = 0.75 * A.length,
									r = A.length,
									o = 0
								'=' === A[A.length - 1] &&
									(n--, '=' === A[A.length - 2] && n--)
								var i =
										'undefined' != typeof ArrayBuffer &&
										'undefined' != typeof Uint8Array &&
										void 0 !== Uint8Array.prototype.slice
											? new ArrayBuffer(n)
											: new Array(n),
									a = Array.isArray(i) ? i : new Uint8Array(i)
								for (g = 0; g < r; g += 4)
									(C = s[A.charCodeAt(g)]),
										(e = s[A.charCodeAt(g + 1)]),
										(I = s[A.charCodeAt(g + 2)]),
										(t = s[A.charCodeAt(g + 3)]),
										(a[o++] = (C << 2) | (e >> 4)),
										(a[o++] = ((15 & e) << 4) | (I >> 2)),
										(a[o++] = ((3 & I) << 6) | (63 & t))
								return i
							})(A),
							t = Array.isArray(I)
								? (function(A) {
										for (
											var g = A.length, C = [], e = 0;
											e < g;
											e += 4
										)
											C.push(
												(A[e + 3] << 24) |
													(A[e + 2] << 16) |
													(A[e + 1] << 8) |
													A[e]
											)
										return C
								  })(I)
								: new Uint32Array(I),
							n = Array.isArray(I)
								? (function(A) {
										for (
											var g = A.length, C = [], e = 0;
											e < g;
											e += 2
										)
											C.push((A[e + 1] << 8) | A[e])
										return C
								  })(I)
								: new Uint16Array(I),
							r = l(n, 12, t[4] / 2),
							o =
								2 === t[5]
									? l(n, (24 + t[4]) / 2)
									: ((g = t),
									  (C = Math.ceil((24 + t[4]) / 4)),
									  g.slice
											? g.slice(C, e)
											: new Uint32Array(
													Array.prototype.slice.call(
														g,
														C,
														e
													)
											  ))
						return new u(t[0], t[1], t[2], t[3], r, o)
					})(
						'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA'
					),
					S = [N, 36],
					P = [1, 2, 3, 5],
					z = [B, 8],
					G = [v, b],
					V = P.concat(z),
					X = [k, L, O, K, T],
					J = [h, p],
					W = function(A, g, C, e) {
						var I = e[C]
						if (Array.isArray(A) ? -1 !== A.indexOf(I) : A === I)
							for (var t = C; t <= e.length; ) {
								var n = e[++t]
								if (n === g) return !0
								if (n !== B) break
							}
						if (I === B)
							for (var t = C; t > 0; ) {
								var r = e[--t]
								if (
									Array.isArray(A)
										? -1 !== A.indexOf(r)
										: A === r
								)
									for (var o = C; o <= e.length; ) {
										var n = e[++o]
										if (n === g) return !0
										if (n !== B) break
									}
								if (r !== B) break
							}
						return !1
					},
					Y = function(A, g) {
						for (var C = A; C >= 0; ) {
							var e = g[C]
							if (e !== B) return e
							C--
						}
						return 0
					},
					j = function(A, g, C, e, I) {
						if (0 === C[e]) return '×'
						var t = e - 1
						if (Array.isArray(I) && !0 === I[t]) return '×'
						var n = t - 1,
							r = t + 1,
							o = g[t],
							i = n >= 0 ? g[n] : 0,
							s = g[r]
						if (2 === o && 3 === s) return '×'
						if (-1 !== P.indexOf(o)) return _
						if (-1 !== P.indexOf(s)) return '×'
						if (-1 !== z.indexOf(s)) return '×'
						if (8 === Y(t, g)) return '÷'
						if (
							11 === M.get(A[t]) &&
							(s === R || s === x || s === y)
						)
							return '×'
						if (7 === o || 7 === s) return '×'
						if (9 === o) return '×'
						if (-1 === [B, p, h].indexOf(o) && 9 === s) return '×'
						if (-1 !== [d, f, w, m, H].indexOf(s)) return '×'
						if (Y(t, g) === E) return '×'
						if (W(23, E, t, g)) return '×'
						if (W([d, f], U, t, g)) return '×'
						if (W(12, 12, t, g)) return '×'
						if (o === B) return '÷'
						if (23 === o || 23 === s) return '×'
						if (16 === s || 16 === o) return '÷'
						if (-1 !== [p, h, U].indexOf(s) || 14 === o) return '×'
						if (36 === i && -1 !== J.indexOf(o)) return '×'
						if (o === H && 36 === s) return '×'
						if (
							s === Q &&
							-1 !== S.concat(Q, w, F, R, x, y).indexOf(o)
						)
							return '×'
						if (
							(-1 !== S.indexOf(s) && o === F) ||
							(-1 !== S.indexOf(o) && s === F)
						)
							return '×'
						if (
							(o === v && -1 !== [R, x, y].indexOf(s)) ||
							(-1 !== [R, x, y].indexOf(o) && s === b)
						)
							return '×'
						if (
							(-1 !== S.indexOf(o) && -1 !== G.indexOf(s)) ||
							(-1 !== G.indexOf(o) && -1 !== S.indexOf(s))
						)
							return '×'
						if (
							(-1 !== [v, b].indexOf(o) &&
								(s === F ||
									(-1 !== [E, h].indexOf(s) &&
										g[r + 1] === F))) ||
							(-1 !== [E, h].indexOf(o) && s === F) ||
							(o === F && -1 !== [F, H, m].indexOf(s))
						)
							return '×'
						if (-1 !== [F, H, m, d, f].indexOf(s))
							for (var a = t; a >= 0; ) {
								var c = g[a]
								if (c === F) return '×'
								if (-1 === [H, m].indexOf(c)) break
								a--
							}
						if (-1 !== [v, b].indexOf(s))
							for (
								var a = -1 !== [d, f].indexOf(o) ? n : t;
								a >= 0;

							) {
								var c = g[a]
								if (c === F) return '×'
								if (-1 === [H, m].indexOf(c)) break
								a--
							}
						if (
							(k === o && -1 !== [k, L, K, T].indexOf(s)) ||
							(-1 !== [L, K].indexOf(o) &&
								-1 !== [L, O].indexOf(s)) ||
							(-1 !== [O, T].indexOf(o) && s === O)
						)
							return '×'
						if (
							(-1 !== X.indexOf(o) && -1 !== [Q, b].indexOf(s)) ||
							(-1 !== X.indexOf(s) && o === v)
						)
							return '×'
						if (-1 !== S.indexOf(o) && -1 !== S.indexOf(s))
							return '×'
						if (o === m && -1 !== S.indexOf(s)) return '×'
						if (
							(-1 !== S.concat(F).indexOf(o) && s === E) ||
							(-1 !== S.concat(F).indexOf(s) && o === f)
						)
							return '×'
						if (41 === o && 41 === s) {
							for (var l = C[t], u = 1; l > 0 && 41 === g[--l]; )
								u++
							if (u % 2 != 0) return '×'
						}
						return o === x && s === y ? '×' : '÷'
					},
					Z = function(A, g) {
						g || (g = { lineBreak: 'normal', wordBreak: 'normal' })
						var C = (function(A, g) {
								void 0 === g && (g = 'strict')
								var C = [],
									e = [],
									I = []
								return (
									A.forEach(function(A, t) {
										var n = M.get(A)
										if (
											(n > 50
												? (I.push(!0), (n -= 50))
												: I.push(!1),
											-1 !==
												[
													'normal',
													'auto',
													'loose'
												].indexOf(g) &&
												-1 !==
													[
														8208,
														8211,
														12316,
														12448
													].indexOf(A))
										)
											return e.push(t), C.push(16)
										if (4 === n || 11 === n) {
											if (0 === t)
												return e.push(t), C.push(N)
											var r = C[t - 1]
											return -1 === V.indexOf(r)
												? (e.push(e[t - 1]), C.push(r))
												: (e.push(t), C.push(N))
										}
										return (
											e.push(t),
											31 === n
												? C.push('strict' === g ? U : R)
												: n === D
												? C.push(N)
												: 29 === n
												? C.push(N)
												: 43 === n
												? (A >= 131072 &&
														A <= 196605) ||
												  (A >= 196608 && A <= 262141)
													? C.push(R)
													: C.push(N)
												: void C.push(n)
										)
									}),
									[e, C, I]
								)
							})(A, g.lineBreak),
							e = C[0],
							I = C[1],
							t = C[2]
						;('break-all' !== g.wordBreak &&
							'break-word' !== g.wordBreak) ||
							(I = I.map(function(A) {
								return -1 !== [F, N, D].indexOf(A) ? R : A
							}))
						var n =
							'keep-all' === g.wordBreak
								? t.map(function(g, C) {
										return (
											g && A[C] >= 19968 && A[C] <= 40959
										)
								  })
								: void 0
						return [e, I, n]
					},
					q = (function() {
						function A(A, g, C, e) {
							;(this.codePoints = A),
								(this.required = g === _),
								(this.start = C),
								(this.end = e)
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
					gA = function(A) {
						return (
							(function(A) {
								return A >= 97 && A <= 122
							})(A) ||
							(function(A) {
								return A >= 65 && A <= 90
							})(A)
						)
					},
					CA = function(A) {
						return 10 === A || 9 === A || 32 === A
					},
					eA = function(A) {
						return (
							gA(A) ||
							(function(A) {
								return A >= 128
							})(A) ||
							95 === A
						)
					},
					IA = function(A) {
						return eA(A) || $(A) || 45 === A
					},
					tA = function(A) {
						return (
							(A >= 0 && A <= 8) ||
							11 === A ||
							(A >= 14 && A <= 31) ||
							127 === A
						)
					},
					nA = function(A, g) {
						return 92 === A && 10 !== g
					},
					rA = function(A, g, C) {
						return 45 === A
							? eA(g) || nA(g, C)
							: !!eA(A) || !(92 !== A || !nA(A, g))
					},
					oA = function(A, g, C) {
						return 43 === A || 45 === A
							? !!$(g) || (46 === g && $(C))
							: $(46 === A ? g : A)
					},
					iA = function(A) {
						var g = 0,
							C = 1
						;(43 !== A[g] && 45 !== A[g]) ||
							(45 === A[g] && (C = -1), g++)
						for (var e = []; $(A[g]); ) e.push(A[g++])
						var I = e.length ? parseInt(o.apply(void 0, e), 10) : 0
						46 === A[g] && g++
						for (var t = []; $(A[g]); ) t.push(A[g++])
						var n = t.length,
							r = n ? parseInt(o.apply(void 0, t), 10) : 0
						;(69 !== A[g] && 101 !== A[g]) || g++
						var i = 1
						;(43 !== A[g] && 45 !== A[g]) ||
							(45 === A[g] && (i = -1), g++)
						for (var s = []; $(A[g]); ) s.push(A[g++])
						var a = s.length ? parseInt(o.apply(void 0, s), 10) : 0
						return (
							C * (I + r * Math.pow(10, -n)) * Math.pow(10, i * a)
						)
					},
					sA = { type: c.LEFT_PARENTHESIS_TOKEN },
					aA = { type: c.RIGHT_PARENTHESIS_TOKEN },
					cA = { type: c.COMMA_TOKEN },
					lA = { type: c.SUFFIX_MATCH_TOKEN },
					uA = { type: c.PREFIX_MATCH_TOKEN },
					BA = { type: c.COLUMN_TOKEN },
					pA = { type: c.DASH_MATCH_TOKEN },
					hA = { type: c.INCLUDE_MATCH_TOKEN },
					dA = { type: c.LEFT_CURLY_BRACKET_TOKEN },
					fA = { type: c.RIGHT_CURLY_BRACKET_TOKEN },
					wA = { type: c.SUBSTRING_MATCH_TOKEN },
					QA = { type: c.BAD_URL_TOKEN },
					UA = { type: c.BAD_STRING_TOKEN },
					EA = { type: c.CDO_TOKEN },
					mA = { type: c.CDC_TOKEN },
					FA = { type: c.COLON_TOKEN },
					bA = { type: c.SEMICOLON_TOKEN },
					vA = { type: c.LEFT_SQUARE_BRACKET_TOKEN },
					HA = { type: c.RIGHT_SQUARE_BRACKET_TOKEN },
					NA = { type: c.WHITESPACE_TOKEN },
					xA = { type: c.EOF_TOKEN },
					yA = (function() {
						function A() {
							this._value = []
						}
						return (
							(A.prototype.write = function(A) {
								this._value = this._value.concat(r(A))
							}),
							(A.prototype.read = function() {
								for (
									var A = [], g = this.consumeToken();
									g !== xA;

								)
									A.push(g), (g = this.consumeToken())
								return A
							}),
							(A.prototype.consumeToken = function() {
								var A = this.consumeCodePoint()
								switch (A) {
									case 34:
										return this.consumeStringToken(34)
									case 35:
										var g = this.peekCodePoint(0),
											C = this.peekCodePoint(1),
											e = this.peekCodePoint(2)
										if (IA(g) || nA(C, e)) {
											var I = rA(g, C, e) ? 2 : 1,
												t = this.consumeName()
											return {
												type: c.HASH_TOKEN,
												value: t,
												flags: I
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
										var n = A,
											r = this.peekCodePoint(0),
											i = this.peekCodePoint(1)
										if (oA(n, r, i))
											return (
												this.reconsumeCodePoint(A),
												this.consumeNumericToken()
											)
										if (rA(n, r, i))
											return (
												this.reconsumeCodePoint(A),
												this.consumeIdentLikeToken()
											)
										if (45 === r && 62 === i)
											return (
												this.consumeCodePoint(),
												this.consumeCodePoint(),
												mA
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
										return FA
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
												EA
											)
										break
									case 64:
										var a = this.peekCodePoint(0),
											l = this.peekCodePoint(1),
											u = this.peekCodePoint(2)
										if (rA(a, l, u)) {
											var t = this.consumeName()
											return {
												type: c.AT_KEYWORD_TOKEN,
												value: t
											}
										}
										break
									case 91:
										return vA
									case 92:
										if (nA(A, this.peekCodePoint(0)))
											return (
												this.reconsumeCodePoint(A),
												this.consumeIdentLikeToken()
											)
										break
									case 93:
										return HA
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
										var B = this.peekCodePoint(0),
											p = this.peekCodePoint(1)
										return (
											43 !== B ||
												(!AA(p) && 63 !== p) ||
												(this.consumeCodePoint(),
												this.consumeUnicodeRangeToken()),
											this.reconsumeCodePoint(A),
											this.consumeIdentLikeToken()
										)
									case 124:
										if (61 === this.peekCodePoint(0))
											return this.consumeCodePoint(), pA
										if (124 === this.peekCodePoint(0))
											return this.consumeCodePoint(), BA
										break
									case 126:
										if (61 === this.peekCodePoint(0))
											return this.consumeCodePoint(), hA
										break
									case -1:
										return xA
								}
								return CA(A)
									? (this.consumeWhiteSpace(), NA)
									: $(A)
									? (this.reconsumeCodePoint(A),
									  this.consumeNumericToken())
									: eA(A)
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
									var A = [], g = this.consumeCodePoint();
									AA(g) && A.length < 6;

								)
									A.push(g), (g = this.consumeCodePoint())
								for (var C = !1; 63 === g && A.length < 6; )
									A.push(g),
										(g = this.consumeCodePoint()),
										(C = !0)
								if (C) {
									var e = parseInt(
											o.apply(
												void 0,
												A.map(function(A) {
													return 63 === A ? 48 : A
												})
											),
											16
										),
										I = parseInt(
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
										start: e,
										end: I
									}
								}
								var t = parseInt(o.apply(void 0, A), 16)
								if (
									45 === this.peekCodePoint(0) &&
									AA(this.peekCodePoint(1))
								) {
									this.consumeCodePoint(),
										(g = this.consumeCodePoint())
									for (var n = []; AA(g) && n.length < 6; )
										n.push(g), (g = this.consumeCodePoint())
									var I = parseInt(o.apply(void 0, n), 16)
									return {
										type: c.UNICODE_RANGE_TOKEN,
										start: t,
										end: I
									}
								}
								return {
									type: c.UNICODE_RANGE_TOKEN,
									start: t,
									end: t
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
								var g = this.peekCodePoint(0)
								if (39 === g || 34 === g) {
									var C = this.consumeStringToken(
										this.consumeCodePoint()
									)
									return C.type === c.STRING_TOKEN &&
										(this.consumeWhiteSpace(),
										-1 === this.peekCodePoint(0) ||
											41 === this.peekCodePoint(0))
										? (this.consumeCodePoint(),
										  { type: c.URL_TOKEN, value: C.value })
										: (this.consumeBadUrlRemnants(), QA)
								}
								for (;;) {
									var e = this.consumeCodePoint()
									if (-1 === e || 41 === e)
										return {
											type: c.URL_TOKEN,
											value: o.apply(void 0, A)
										}
									if (CA(e))
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
										34 === e ||
										39 === e ||
										40 === e ||
										tA(e)
									)
										return this.consumeBadUrlRemnants(), QA
									if (92 === e) {
										if (!nA(e, this.peekCodePoint(0)))
											return (
												this.consumeBadUrlRemnants(), QA
											)
										A.push(this.consumeEscapedCodePoint())
									} else A.push(e)
								}
							}),
							(A.prototype.consumeWhiteSpace = function() {
								for (; CA(this.peekCodePoint(0)); )
									this.consumeCodePoint()
							}),
							(A.prototype.consumeBadUrlRemnants = function() {
								for (;;) {
									var A = this.consumeCodePoint()
									if (41 === A || -1 === A) return
									nA(A, this.peekCodePoint(0)) &&
										this.consumeEscapedCodePoint()
								}
							}),
							(A.prototype.consumeStringSlice = function(A) {
								for (var g = ''; A > 0; ) {
									var C = Math.min(6e4, A)
									;(g += o.apply(
										void 0,
										this._value.splice(0, C)
									)),
										(A -= C)
								}
								return this._value.shift(), g
							}),
							(A.prototype.consumeStringToken = function(A) {
								for (var g = '', C = 0; ; ) {
									var e = this._value[C]
									if (-1 === e || void 0 === e || e === A)
										return (
											(g += this.consumeStringSlice(C)),
											{ type: c.STRING_TOKEN, value: g }
										)
									if (10 === e)
										return this._value.splice(0, C), UA
									if (92 === e) {
										var I = this._value[C + 1]
										;-1 !== I &&
											void 0 !== I &&
											(10 === I
												? ((g += this.consumeStringSlice(
														C
												  )),
												  (C = -1),
												  this._value.shift())
												: nA(e, I) &&
												  ((g += this.consumeStringSlice(
														C
												  )),
												  (g += o(
														this.consumeEscapedCodePoint()
												  )),
												  (C = -1)))
									}
									C++
								}
							}),
							(A.prototype.consumeNumber = function() {
								var A = [],
									g = 4,
									C = this.peekCodePoint(0)
								for (
									(43 !== C && 45 !== C) ||
									A.push(this.consumeCodePoint());
									$(this.peekCodePoint(0));

								)
									A.push(this.consumeCodePoint())
								C = this.peekCodePoint(0)
								var e = this.peekCodePoint(1)
								if (46 === C && $(e))
									for (
										A.push(
											this.consumeCodePoint(),
											this.consumeCodePoint()
										),
											g = 8;
										$(this.peekCodePoint(0));

									)
										A.push(this.consumeCodePoint())
								;(C = this.peekCodePoint(0)),
									(e = this.peekCodePoint(1))
								var I = this.peekCodePoint(2)
								if (
									(69 === C || 101 === C) &&
									(((43 === e || 45 === e) && $(I)) || $(e))
								)
									for (
										A.push(
											this.consumeCodePoint(),
											this.consumeCodePoint()
										),
											g = 8;
										$(this.peekCodePoint(0));

									)
										A.push(this.consumeCodePoint())
								return [iA(A), g]
							}),
							(A.prototype.consumeNumericToken = function() {
								var A = this.consumeNumber(),
									g = A[0],
									C = A[1],
									e = this.peekCodePoint(0),
									I = this.peekCodePoint(1),
									t = this.peekCodePoint(2)
								if (rA(e, I, t)) {
									var n = this.consumeName()
									return {
										type: c.DIMENSION_TOKEN,
										number: g,
										flags: C,
										unit: n
									}
								}
								return 37 === e
									? (this.consumeCodePoint(),
									  {
											type: c.PERCENTAGE_TOKEN,
											number: g,
											flags: C
									  })
									: {
											type: c.NUMBER_TOKEN,
											number: g,
											flags: C
									  }
							}),
							(A.prototype.consumeEscapedCodePoint = function() {
								var A = this.consumeCodePoint()
								if (AA(A)) {
									for (
										var g = o(A);
										AA(this.peekCodePoint(0)) &&
										g.length < 6;

									)
										g += o(this.consumeCodePoint())
									CA(this.peekCodePoint(0)) &&
										this.consumeCodePoint()
									var C = parseInt(g, 16)
									return 0 === C ||
										(function(A) {
											return A >= 55296 && A <= 57343
										})(C) ||
										C > 1114111
										? 65533
										: C
								}
								return -1 === A ? 65533 : A
							}),
							(A.prototype.consumeName = function() {
								for (var A = ''; ; ) {
									var g = this.consumeCodePoint()
									if (IA(g)) A += o(g)
									else {
										if (!nA(g, this.peekCodePoint(0)))
											return this.reconsumeCodePoint(g), A
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
							(A.create = function(g) {
								var C = new yA()
								return C.write(g), new A(C.read())
							}),
							(A.parseValue = function(g) {
								return A.create(g).parseComponentValue()
							}),
							(A.parseValues = function(g) {
								return A.create(g).parseComponentValues()
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
								var g = this.consumeComponentValue()
								do {
									A = this.consumeToken()
								} while (A.type === c.WHITESPACE_TOKEN)
								if (A.type === c.EOF_TOKEN) return g
								throw new SyntaxError(
									'Error parsing CSS component value, multiple values found when expecting only one'
								)
							}),
							(A.prototype.parseComponentValues = function() {
								for (var A = []; ; ) {
									var g = this.consumeComponentValue()
									if (g.type === c.EOF_TOKEN) return A
									A.push(g), A.push()
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
									var g = { type: A, values: [] },
										C = this.consumeToken();
									;

								) {
									if (C.type === c.EOF_TOKEN || SA(C, A))
										return g
									this.reconsumeToken(C),
										g.values.push(
											this.consumeComponentValue()
										),
										(C = this.consumeToken())
								}
							}),
							(A.prototype.consumeFunction = function(A) {
								for (
									var g = {
										name: A.value,
										values: [],
										type: c.FUNCTION
									};
									;

								) {
									var C = this.consumeToken()
									if (
										C.type === c.EOF_TOKEN ||
										C.type === c.RIGHT_PARENTHESIS_TOKEN
									)
										return g
									this.reconsumeToken(C),
										g.values.push(
											this.consumeComponentValue()
										)
								}
							}),
							(A.prototype.consumeToken = function() {
								var A = this._tokens.shift()
								return void 0 === A ? xA : A
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
					RA = function(A) {
						return A.type === c.NUMBER_TOKEN
					},
					kA = function(A) {
						return A.type === c.IDENT_TOKEN
					},
					LA = function(A) {
						return A.type === c.STRING_TOKEN
					},
					OA = function(A, g) {
						return kA(A) && A.value === g
					},
					DA = function(A) {
						return A.type !== c.WHITESPACE_TOKEN
					},
					_A = function(A) {
						return (
							A.type !== c.WHITESPACE_TOKEN &&
							A.type !== c.COMMA_TOKEN
						)
					},
					MA = function(A) {
						var g = [],
							C = []
						return (
							A.forEach(function(A) {
								if (A.type === c.COMMA_TOKEN) {
									if (0 === C.length)
										throw new Error(
											'Error parsing function args, zero tokens for arg'
										)
									return g.push(C), void (C = [])
								}
								A.type !== c.WHITESPACE_TOKEN && C.push(A)
							}),
							C.length && g.push(C),
							g
						)
					},
					SA = function(A, g) {
						return (
							(g === c.LEFT_CURLY_BRACKET_TOKEN &&
								A.type === c.RIGHT_CURLY_BRACKET_TOKEN) ||
							(g === c.LEFT_SQUARE_BRACKET_TOKEN &&
								A.type === c.RIGHT_SQUARE_BRACKET_TOKEN) ||
							(g === c.LEFT_PARENTHESIS_TOKEN &&
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
					WA = function(A, g, C) {
						var e = A[0],
							I = A[1]
						return [YA(e, g), YA(void 0 !== I ? I : e, C)]
					},
					YA = function(A, g) {
						if (A.type === c.PERCENTAGE_TOKEN)
							return (A.number / 100) * g
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
					jA = {
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
					ZA = function(A) {
						return (
							A.type === c.DIMENSION_TOKEN &&
							('deg' === A.unit ||
								'grad' === A.unit ||
								'rad' === A.unit ||
								'turn' === A.unit)
						)
					},
					qA = function(A) {
						var g = A.filter(kA)
							.map(function(A) {
								return A.value
							})
							.join(' ')
						switch (g) {
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
					Ag = {
						name: 'color',
						parse: function(A) {
							if (A.type === c.FUNCTION) {
								var g = sg[A.name]
								if (void 0 === g)
									throw new Error(
										'Attempting to parse an unsupported color function "' +
											A.name +
											'"'
									)
								return g(A.values)
							}
							if (A.type === c.HASH_TOKEN) {
								if (3 === A.value.length) {
									var C = A.value.substring(0, 1),
										e = A.value.substring(1, 2),
										I = A.value.substring(2, 3)
									return eg(
										parseInt(C + C, 16),
										parseInt(e + e, 16),
										parseInt(I + I, 16),
										1
									)
								}
								if (4 === A.value.length) {
									var C = A.value.substring(0, 1),
										e = A.value.substring(1, 2),
										I = A.value.substring(2, 3),
										t = A.value.substring(3, 4)
									return eg(
										parseInt(C + C, 16),
										parseInt(e + e, 16),
										parseInt(I + I, 16),
										parseInt(t + t, 16) / 255
									)
								}
								if (6 === A.value.length) {
									var C = A.value.substring(0, 2),
										e = A.value.substring(2, 4),
										I = A.value.substring(4, 6)
									return eg(
										parseInt(C, 16),
										parseInt(e, 16),
										parseInt(I, 16),
										1
									)
								}
								if (8 === A.value.length) {
									var C = A.value.substring(0, 2),
										e = A.value.substring(2, 4),
										I = A.value.substring(4, 6),
										t = A.value.substring(6, 8)
									return eg(
										parseInt(C, 16),
										parseInt(e, 16),
										parseInt(I, 16),
										parseInt(t, 16) / 255
									)
								}
							}
							if (A.type === c.IDENT_TOKEN) {
								var n = ag[A.value.toUpperCase()]
								if (void 0 !== n) return n
							}
							return ag.TRANSPARENT
						}
					},
					gg = function(A) {
						return 0 == (255 & A)
					},
					Cg = function(A) {
						var g = 255 & A,
							C = 255 & (A >> 8),
							e = 255 & (A >> 16),
							I = 255 & (A >> 24)
						return g < 255
							? 'rgba(' +
									I +
									',' +
									e +
									',' +
									C +
									',' +
									g / 255 +
									')'
							: 'rgb(' + I + ',' + e + ',' + C + ')'
					},
					eg = function(A, g, C, e) {
						return (
							((A << 24) |
								(g << 16) |
								(C << 8) |
								(Math.round(255 * e) << 0)) >>>
							0
						)
					},
					Ig = function(A, g) {
						if (A.type === c.NUMBER_TOKEN) return A.number
						if (A.type === c.PERCENTAGE_TOKEN) {
							var C = 3 === g ? 1 : 255
							return 3 === g
								? (A.number / 100) * C
								: Math.round((A.number / 100) * C)
						}
						return 0
					},
					tg = function(A) {
						var g = A.filter(_A)
						if (3 === g.length) {
							var C = g.map(Ig),
								e = C[0],
								I = C[1],
								t = C[2]
							return eg(e, I, t, 1)
						}
						if (4 === g.length) {
							var n = g.map(Ig),
								e = n[0],
								I = n[1],
								t = n[2],
								r = n[3]
							return eg(e, I, t, r)
						}
						return 0
					}
				function ng(A, g, C) {
					return (
						C < 0 && (C += 1),
						C >= 1 && (C -= 1),
						C < 1 / 6
							? (g - A) * C * 6 + A
							: C < 0.5
							? g
							: C < 2 / 3
							? 6 * (g - A) * (2 / 3 - C) + A
							: A
					)
				}
				var rg,
					og,
					ig = function(A) {
						var g = A.filter(_A),
							C = g[0],
							e = g[1],
							I = g[2],
							t = g[3],
							n =
								(C.type === c.NUMBER_TOKEN
									? $A(C.number)
									: jA.parse(C)) /
								(2 * Math.PI),
							r = zA(e) ? e.number / 100 : 0,
							o = zA(I) ? I.number / 100 : 0,
							i = void 0 !== t && zA(t) ? YA(t, 1) : 1
						if (0 === r) return eg(255 * o, 255 * o, 255 * o, 1)
						var s = o <= 0.5 ? o * (r + 1) : o + r - o * r,
							a = 2 * o - s,
							l = ng(a, s, n + 1 / 3),
							u = ng(a, s, n),
							B = ng(a, s, n - 1 / 3)
						return eg(255 * l, 255 * u, 255 * B, i)
					},
					sg = { hsl: ig, hsla: ig, rgb: tg, rgba: tg },
					ag = {
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
				})(rg || (rg = {})),
					(function(A) {
						;(A[(A.BORDER_BOX = 0)] = 'BORDER_BOX'),
							(A[(A.PADDING_BOX = 1)] = 'PADDING_BOX'),
							(A[(A.CONTENT_BOX = 2)] = 'CONTENT_BOX')
					})(og || (og = {}))
				var cg,
					lg,
					ug,
					Bg = {
						name: 'background-clip',
						initialValue: 'border-box',
						prefix: !1,
						type: rg.LIST,
						parse: function(A) {
							return A.map(function(A) {
								if (kA(A))
									switch (A.value) {
										case 'padding-box':
											return og.PADDING_BOX
										case 'content-box':
											return og.CONTENT_BOX
									}
								return og.BORDER_BOX
							})
						}
					},
					pg = {
						name: 'background-color',
						initialValue: 'transparent',
						prefix: !1,
						type: rg.TYPE_VALUE,
						format: 'color'
					},
					hg = function(A) {
						var g = Ag.parse(A[0]),
							C = A[1]
						return C && zA(C)
							? { color: g, stop: C }
							: { color: g, stop: null }
					},
					dg = function(A, g) {
						var C = A[0],
							e = A[A.length - 1]
						null === C.stop && (C.stop = VA),
							null === e.stop && (e.stop = JA)
						for (var I = [], t = 0, n = 0; n < A.length; n++) {
							var r = A[n].stop
							if (null !== r) {
								var o = YA(r, g)
								o > t ? I.push(o) : I.push(t), (t = o)
							} else I.push(null)
						}
						for (var i = null, n = 0; n < I.length; n++) {
							var s = I[n]
							if (null === s) null === i && (i = n)
							else if (null !== i) {
								for (
									var a = n - i,
										c = I[i - 1],
										l = (s - c) / (a + 1),
										u = 1;
									u <= a;
									u++
								)
									I[i + u - 1] = l * u
								i = null
							}
						}
						return A.map(function(A, C) {
							var e = A.color
							return {
								color: e,
								stop: Math.max(Math.min(1, I[C] / g), 0)
							}
						})
					},
					fg = function(A, g, C) {
						var e =
								'number' == typeof A
									? A
									: (function(A, g, C) {
											var e = g / 2,
												I = C / 2,
												t = YA(A[0], g) - e,
												n = I - YA(A[1], C)
											return (
												(Math.atan2(n, t) +
													2 * Math.PI) %
												(2 * Math.PI)
											)
									  })(A, g, C),
							I =
								Math.abs(g * Math.sin(e)) +
								Math.abs(C * Math.cos(e)),
							t = g / 2,
							n = C / 2,
							r = I / 2,
							o = Math.sin(e - Math.PI / 2) * r,
							i = Math.cos(e - Math.PI / 2) * r
						return [I, t - i, t + i, n - o, n + o]
					},
					wg = function(A, g) {
						return Math.sqrt(A * A + g * g)
					},
					Qg = function(A, g, C, e, I) {
						var t = [[0, 0], [0, g], [A, 0], [A, g]]
						return t.reduce(
							function(A, g) {
								var t = g[0],
									n = g[1],
									r = wg(C - t, e - n)
								return (I
								? r < A.optimumDistance
								: r > A.optimumDistance)
									? { optimumCorner: g, optimumDistance: r }
									: A
							},
							{
								optimumDistance: I ? 1 / 0 : -1 / 0,
								optimumCorner: null
							}
						).optimumCorner
					},
					Ug = function(A) {
						var g = $A(180),
							C = []
						return (
							MA(A).forEach(function(A, e) {
								if (0 === e) {
									var I = A[0]
									if (
										I.type === c.IDENT_TOKEN &&
										-1 !==
											[
												'top',
												'left',
												'right',
												'bottom'
											].indexOf(I.value)
									)
										return void (g = qA(A))
									if (ZA(I))
										return void (g =
											(jA.parse(I) + $A(270)) % $A(360))
								}
								var t = hg(A)
								C.push(t)
							}),
							{ angle: g, stops: C, type: cg.LINEAR_GRADIENT }
						)
					},
					Eg = function(A) {
						return (
							0 === A[0] &&
							255 === A[1] &&
							0 === A[2] &&
							255 === A[3]
						)
					},
					mg = function(A, g, C, e, I) {
						var t = 'http://www.w3.org/2000/svg',
							n = document.createElementNS(t, 'svg'),
							r = document.createElementNS(t, 'foreignObject')
						return (
							n.setAttributeNS(null, 'width', A.toString()),
							n.setAttributeNS(null, 'height', g.toString()),
							r.setAttributeNS(null, 'width', '100%'),
							r.setAttributeNS(null, 'height', '100%'),
							r.setAttributeNS(null, 'x', C.toString()),
							r.setAttributeNS(null, 'y', e.toString()),
							r.setAttributeNS(
								null,
								'externalResourcesRequired',
								'true'
							),
							n.appendChild(r),
							r.appendChild(I),
							n
						)
					},
					Fg = function(A) {
						return new Promise(function(g, C) {
							var e = new Image()
							;(e.onload = function() {
								return g(e)
							}),
								(e.onerror = C),
								(e.src =
									'data:image/svg+xml;charset=utf-8,' +
									encodeURIComponent(
										new XMLSerializer().serializeToString(A)
									))
						})
					},
					bg = {
						get SUPPORT_RANGE_BOUNDS() {
							var A = (function(A) {
								if (A.createRange) {
									var g = A.createRange()
									if (g.getBoundingClientRect) {
										var C = A.createElement('boundtest')
										;(C.style.height = '123px'),
											(C.style.display = 'block'),
											A.body.appendChild(C),
											g.selectNode(C)
										var e = g.getBoundingClientRect(),
											I = Math.round(e.height)
										if ((A.body.removeChild(C), 123 === I))
											return !0
									}
								}
								return !1
							})(document)
							return (
								Object.defineProperty(
									bg,
									'SUPPORT_RANGE_BOUNDS',
									{ value: A }
								),
								A
							)
						},
						get SUPPORT_SVG_DRAWING() {
							var A = (function(A) {
								var g = new Image(),
									C = A.createElement('canvas'),
									e = C.getContext('2d')
								if (!e) return !1
								g.src =
									"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>"
								try {
									e.drawImage(g, 0, 0), C.toDataURL()
								} catch (A) {
									return !1
								}
								return !0
							})(document)
							return (
								Object.defineProperty(
									bg,
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
											var g = A.createElement('canvas')
											;(g.width = 100), (g.height = 100)
											var C = g.getContext('2d')
											if (!C) return Promise.reject(!1)
											;(C.fillStyle = 'rgb(0, 255, 0)'),
												C.fillRect(0, 0, 100, 100)
											var e = new Image(),
												I = g.toDataURL()
											e.src = I
											var t = mg(100, 100, 0, 0, e)
											return (
												(C.fillStyle = 'red'),
												C.fillRect(0, 0, 100, 100),
												Fg(t)
													.then(function(g) {
														C.drawImage(g, 0, 0)
														var e = C.getImageData(
															0,
															0,
															100,
															100
														).data
														;(C.fillStyle = 'red'),
															C.fillRect(
																0,
																0,
																100,
																100
															)
														var t = A.createElement(
															'div'
														)
														return (
															(t.style.backgroundImage =
																'url(' +
																I +
																')'),
															(t.style.height =
																'100px'),
															Eg(e)
																? Fg(
																		mg(
																			100,
																			100,
																			0,
																			0,
																			t
																		)
																  )
																: Promise.reject(
																		!1
																  )
														)
													})
													.then(function(A) {
														return (
															C.drawImage(
																A,
																0,
																0
															),
															Eg(
																C.getImageData(
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
									bg,
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
									bg,
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
									bg,
									'SUPPORT_RESPONSE_TYPE',
									{ value: A }
								),
								A
							)
						},
						get SUPPORT_CORS_XHR() {
							var A = 'withCredentials' in new XMLHttpRequest()
							return (
								Object.defineProperty(bg, 'SUPPORT_CORS_XHR', {
									value: A
								}),
								A
							)
						}
					},
					vg = (function() {
						function A(A) {
							;(this.id = A), (this.start = Date.now())
						}
						return (
							(A.prototype.debug = function() {
								for (
									var A = [], g = 0;
									g < arguments.length;
									g++
								)
									A[g] = arguments[g]
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
							(A.create = function(g) {
								A.instances[g] = new A(g)
							}),
							(A.destroy = function(g) {
								delete A.instances[g]
							}),
							(A.getInstance = function(g) {
								var C = A.instances[g]
								if (void 0 === C)
									throw new Error(
										'No logger instance found with id ' + g
									)
								return C
							}),
							(A.prototype.info = function() {
								for (
									var A = [], g = 0;
									g < arguments.length;
									g++
								)
									A[g] = arguments[g]
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
									var A = [], g = 0;
									g < arguments.length;
									g++
								)
									A[g] = arguments[g]
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
					Hg = (function() {
						function A() {}
						return (
							(A.create = function(g, C) {
								return (A._caches[g] = new Ng(g, C))
							}),
							(A.destroy = function(g) {
								delete A._caches[g]
							}),
							(A.open = function(g) {
								var C = A._caches[g]
								if (void 0 !== C) return C
								throw new Error(
									'Cache with key "' + g + '" not found'
								)
							}),
							(A.getOrigin = function(g) {
								var C = A._link
								return C
									? ((C.href = g),
									  (C.href = C.href),
									  C.protocol + C.hostname + C.port)
									: 'about:blank'
							}),
							(A.isSameOrigin = function(g) {
								return A.getOrigin(g) === A._origin
							}),
							(A.setContext = function(g) {
								;(A._link = g.document.createElement('a')),
									(A._origin = A.getOrigin(g.location.href))
							}),
							(A.getInstance = function() {
								var g = A._current
								if (null === g)
									throw new Error(
										'No cache instance attached'
									)
								return g
							}),
							(A.attachInstance = function(g) {
								A._current = g
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
					Ng = (function() {
						function A(A, g) {
							;(this.id = A),
								(this._options = g),
								(this._cache = {})
						}
						return (
							(A.prototype.addImage = function(A) {
								var g = Promise.resolve()
								return this.has(A)
									? g
									: Lg(A) || Tg(A)
									? ((this._cache[A] = this.loadImage(A)), g)
									: g
							}),
							(A.prototype.match = function(A) {
								return this._cache[A]
							}),
							(A.prototype.loadImage = function(A) {
								return e(this, void 0, void 0, function() {
									var g,
										C,
										e,
										t,
										n = this
									return I(this, function(I) {
										switch (I.label) {
											case 0:
												return (
													(g = Hg.isSameOrigin(A)),
													(C =
														!Rg(A) &&
														!0 ===
															this._options
																.useCORS &&
														bg.SUPPORT_CORS_IMAGES &&
														!g),
													(e =
														!Rg(A) &&
														!g &&
														'string' ==
															typeof this._options
																.proxy &&
														bg.SUPPORT_CORS_XHR &&
														!C),
													g ||
													!1 !==
														this._options
															.allowTaint ||
													Rg(A) ||
													e ||
													C
														? ((t = A),
														  e
																? [
																		4,
																		this.proxy(
																			t
																		)
																  ]
																: [3, 2])
														: [2]
												)
											case 1:
												;(t = I.sent()), (I.label = 2)
											case 2:
												return (
													vg
														.getInstance(this.id)
														.debug(
															'Added image ' +
																A.substring(
																	0,
																	256
																)
														),
													[
														4,
														new Promise(function(
															A,
															g
														) {
															var e = new Image()
															;(e.onload = function() {
																return A(e)
															}),
																(e.onerror = g),
																(kg(t) || C) &&
																	(e.crossOrigin =
																		'anonymous'),
																(e.src = t),
																!0 ===
																	e.complete &&
																	setTimeout(
																		function() {
																			return A(
																				e
																			)
																		},
																		500
																	),
																n._options
																	.imageTimeout >
																	0 &&
																	setTimeout(
																		function() {
																			return g(
																				'Timed out (' +
																					n
																						._options
																						.imageTimeout +
																					'ms) loading image'
																			)
																		},
																		n
																			._options
																			.imageTimeout
																	)
														})
													]
												)
											case 3:
												return [2, I.sent()]
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
								var g = this,
									C = this._options.proxy
								if (!C) throw new Error('No proxy defined')
								var e = A.substring(0, 256)
								return new Promise(function(I, t) {
									var n = bg.SUPPORT_RESPONSE_TYPE
											? 'blob'
											: 'text',
										r = new XMLHttpRequest()
									if (
										((r.onload = function() {
											if (200 === r.status)
												if ('text' === n) I(r.response)
												else {
													var A = new FileReader()
													A.addEventListener(
														'load',
														function() {
															return I(A.result)
														},
														!1
													),
														A.addEventListener(
															'error',
															function(A) {
																return t(A)
															},
															!1
														),
														A.readAsDataURL(
															r.response
														)
												}
											else
												t(
													'Failed to proxy resource ' +
														e +
														' with status code ' +
														r.status
												)
										}),
										(r.onerror = t),
										r.open(
											'GET',
											C +
												'?url=' +
												encodeURIComponent(A) +
												'&responseType=' +
												n
										),
										'text' !== n &&
											r instanceof XMLHttpRequest &&
											(r.responseType = n),
										g._options.imageTimeout)
									) {
										var o = g._options.imageTimeout
										;(r.timeout = o),
											(r.ontimeout = function() {
												return t(
													'Timed out (' +
														o +
														'ms) proxying ' +
														e
												)
											})
									}
									r.send()
								})
							}),
							A
						)
					})(),
					xg = /^data:image\/svg\+xml/i,
					yg = /^data:image\/.*;base64,/i,
					Kg = /^data:image\/.*/i,
					Tg = function(A) {
						return bg.SUPPORT_SVG_DRAWING || !Og(A)
					},
					Rg = function(A) {
						return Kg.test(A)
					},
					kg = function(A) {
						return yg.test(A)
					},
					Lg = function(A) {
						return 'blob' === A.substr(0, 4)
					},
					Og = function(A) {
						return (
							'svg' === A.substr(-3).toLowerCase() || xg.test(A)
						)
					},
					Dg = function(A) {
						var g = lg.CIRCLE,
							C = ug.FARTHEST_CORNER,
							e = [],
							I = []
						return (
							MA(A).forEach(function(A, t) {
								var n = !0
								if (
									(0 === t
										? (n = A.reduce(function(A, g) {
												if (kA(g))
													switch (g.value) {
														case 'center':
															return (
																I.push(XA), !1
															)
														case 'top':
														case 'left':
															return (
																I.push(VA), !1
															)
														case 'right':
														case 'bottom':
															return (
																I.push(JA), !1
															)
													}
												else if (zA(g) || PA(g))
													return I.push(g), !1
												return A
										  }, n))
										: 1 === t &&
										  (n = A.reduce(function(A, e) {
												if (kA(e))
													switch (e.value) {
														case 'circle':
															return (
																(g = lg.CIRCLE),
																!1
															)
														case 'ellipse':
															return (
																(g =
																	lg.ELLIPSE),
																!1
															)
														case 'contain':
														case 'closest-side':
															return (
																(C =
																	ug.CLOSEST_SIDE),
																!1
															)
														case 'farthest-side':
															return (
																(C =
																	ug.FARTHEST_SIDE),
																!1
															)
														case 'closest-corner':
															return (
																(C =
																	ug.CLOSEST_CORNER),
																!1
															)
														case 'cover':
														case 'farthest-corner':
															return (
																(C =
																	ug.FARTHEST_CORNER),
																!1
															)
													}
												else if (PA(e) || zA(e))
													return (
														Array.isArray(C) ||
															(C = []),
														C.push(e),
														!1
													)
												return A
										  }, n)),
									n)
								) {
									var r = hg(A)
									e.push(r)
								}
							}),
							{
								size: C,
								shape: g,
								stops: e,
								position: I,
								type: cg.RADIAL_GRADIENT
							}
						)
					}
				!(function(A) {
					;(A[(A.URL = 0)] = 'URL'),
						(A[(A.LINEAR_GRADIENT = 1)] = 'LINEAR_GRADIENT'),
						(A[(A.RADIAL_GRADIENT = 2)] = 'RADIAL_GRADIENT')
				})(cg || (cg = {})),
					(function(A) {
						;(A[(A.CIRCLE = 0)] = 'CIRCLE'),
							(A[(A.ELLIPSE = 1)] = 'ELLIPSE')
					})(lg || (lg = {})),
					(function(A) {
						;(A[(A.CLOSEST_SIDE = 0)] = 'CLOSEST_SIDE'),
							(A[(A.FARTHEST_SIDE = 1)] = 'FARTHEST_SIDE'),
							(A[(A.CLOSEST_CORNER = 2)] = 'CLOSEST_CORNER'),
							(A[(A.FARTHEST_CORNER = 3)] = 'FARTHEST_CORNER')
					})(ug || (ug = {}))
				var _g,
					Mg = {
						name: 'image',
						parse: function(A) {
							if (A.type === c.URL_TOKEN) {
								var g = { url: A.value, type: cg.URL }
								return Hg.getInstance().addImage(A.value), g
							}
							if (A.type === c.FUNCTION) {
								var C = Sg[A.name]
								if (void 0 === C)
									throw new Error(
										'Attempting to parse an unsupported image function "' +
											A.name +
											'"'
									)
								return C(A.values)
							}
							throw new Error('Unsupported image type')
						}
					},
					Sg = {
						'linear-gradient': function(A) {
							var g = $A(180),
								C = []
							return (
								MA(A).forEach(function(A, e) {
									if (0 === e) {
										var I = A[0]
										if (
											I.type === c.IDENT_TOKEN &&
											'to' === I.value
										)
											return void (g = qA(A))
										if (ZA(I)) return void (g = jA.parse(I))
									}
									var t = hg(A)
									C.push(t)
								}),
								{ angle: g, stops: C, type: cg.LINEAR_GRADIENT }
							)
						},
						'-moz-linear-gradient': Ug,
						'-ms-linear-gradient': Ug,
						'-o-linear-gradient': Ug,
						'-webkit-linear-gradient': Ug,
						'radial-gradient': function(A) {
							var g = lg.CIRCLE,
								C = ug.FARTHEST_CORNER,
								e = [],
								I = []
							return (
								MA(A).forEach(function(A, t) {
									var n = !0
									if (0 === t) {
										var r = !1
										n = A.reduce(function(A, e) {
											if (r)
												if (kA(e))
													switch (e.value) {
														case 'center':
															return I.push(XA), A
														case 'top':
														case 'left':
															return I.push(VA), A
														case 'right':
														case 'bottom':
															return I.push(JA), A
													}
												else
													(zA(e) || PA(e)) &&
														I.push(e)
											else if (kA(e))
												switch (e.value) {
													case 'circle':
														return (
															(g = lg.CIRCLE), !1
														)
													case 'ellipse':
														return (
															(g = lg.ELLIPSE), !1
														)
													case 'at':
														return (r = !0), !1
													case 'closest-side':
														return (
															(C =
																ug.CLOSEST_SIDE),
															!1
														)
													case 'cover':
													case 'farthest-side':
														return (
															(C =
																ug.FARTHEST_SIDE),
															!1
														)
													case 'contain':
													case 'closest-corner':
														return (
															(C =
																ug.CLOSEST_CORNER),
															!1
														)
													case 'farthest-corner':
														return (
															(C =
																ug.FARTHEST_CORNER),
															!1
														)
												}
											else if (PA(e) || zA(e))
												return (
													Array.isArray(C) ||
														(C = []),
													C.push(e),
													!1
												)
											return A
										}, n)
									}
									if (n) {
										var o = hg(A)
										e.push(o)
									}
								}),
								{
									size: C,
									shape: g,
									stops: e,
									position: I,
									type: cg.RADIAL_GRADIENT
								}
							)
						},
						'-moz-radial-gradient': Dg,
						'-ms-radial-gradient': Dg,
						'-o-radial-gradient': Dg,
						'-webkit-radial-gradient': Dg,
						'-webkit-gradient': function(A) {
							var g = $A(180),
								C = [],
								e = cg.LINEAR_GRADIENT,
								I = lg.CIRCLE,
								t = ug.FARTHEST_CORNER
							return (
								MA(A).forEach(function(A, g) {
									var I = A[0]
									if (0 === g) {
										if (kA(I) && 'linear' === I.value)
											return void (e = cg.LINEAR_GRADIENT)
										if (kA(I) && 'radial' === I.value)
											return void (e = cg.RADIAL_GRADIENT)
									}
									if (I.type === c.FUNCTION)
										if ('from' === I.name) {
											var t = Ag.parse(I.values[0])
											C.push({ stop: VA, color: t })
										} else if ('to' === I.name)
											(t = Ag.parse(I.values[0])),
												C.push({ stop: JA, color: t })
										else if ('color-stop' === I.name) {
											var n = I.values.filter(_A)
											if (2 === n.length) {
												t = Ag.parse(n[1])
												var r = n[0]
												RA(r) &&
													C.push({
														stop: {
															type:
																c.PERCENTAGE_TOKEN,
															number:
																100 * r.number,
															flags: r.flags
														},
														color: t
													})
											}
										}
								}),
								e === cg.LINEAR_GRADIENT
									? {
											angle: (g + $A(180)) % $A(360),
											stops: C,
											type: e
									  }
									: {
											size: t,
											shape: I,
											stops: C,
											position: [],
											type: e
									  }
							)
						}
					},
					Pg = {
						name: 'background-image',
						initialValue: 'none',
						type: rg.LIST,
						prefix: !1,
						parse: function(A) {
							if (0 === A.length) return []
							var g = A[0]
							return g.type === c.IDENT_TOKEN &&
								'none' === g.value
								? []
								: A.filter(_A).map(Mg.parse)
						}
					},
					zg = {
						name: 'background-origin',
						initialValue: 'border-box',
						prefix: !1,
						type: rg.LIST,
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
					Gg = {
						name: 'background-position',
						initialValue: '0% 0%',
						type: rg.LIST,
						prefix: !1,
						parse: function(A) {
							return MA(A)
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
				})(_g || (_g = {}))
				var Vg,
					Xg = {
						name: 'background-repeat',
						initialValue: 'repeat',
						prefix: !1,
						type: rg.LIST,
						parse: function(A) {
							return MA(A)
								.map(function(A) {
									return A.filter(kA)
										.map(function(A) {
											return A.value
										})
										.join(' ')
								})
								.map(Jg)
						}
					},
					Jg = function(A) {
						switch (A) {
							case 'no-repeat':
								return _g.NO_REPEAT
							case 'repeat-x':
							case 'repeat no-repeat':
								return _g.REPEAT_X
							case 'repeat-y':
							case 'no-repeat repeat':
								return _g.REPEAT_Y
							case 'repeat':
							default:
								return _g.REPEAT
						}
					}
				!(function(A) {
					;(A.AUTO = 'auto'),
						(A.CONTAIN = 'contain'),
						(A.COVER = 'cover')
				})(Vg || (Vg = {}))
				var Wg,
					Yg = {
						name: 'background-size',
						initialValue: '0',
						prefix: !1,
						type: rg.LIST,
						parse: function(A) {
							return MA(A).map(function(A) {
								return A.filter(jg)
							})
						}
					},
					jg = function(A) {
						return kA(A) || zA(A)
					},
					Zg = function(A) {
						return {
							name: 'border-' + A + '-color',
							initialValue: 'transparent',
							prefix: !1,
							type: rg.TYPE_VALUE,
							format: 'color'
						}
					},
					qg = Zg('top'),
					$g = Zg('right'),
					AC = Zg('bottom'),
					gC = Zg('left'),
					CC = function(A) {
						return {
							name: 'border-radius-' + A,
							initialValue: '0 0',
							prefix: !1,
							type: rg.LIST,
							parse: function(A) {
								return GA(A.filter(zA))
							}
						}
					},
					eC = CC('top-left'),
					IC = CC('top-right'),
					tC = CC('bottom-right'),
					nC = CC('bottom-left')
				!(function(A) {
					;(A[(A.NONE = 0)] = 'NONE'), (A[(A.SOLID = 1)] = 'SOLID')
				})(Wg || (Wg = {}))
				var rC,
					oC = function(A) {
						return {
							name: 'border-' + A + '-style',
							initialValue: 'solid',
							prefix: !1,
							type: rg.IDENT_VALUE,
							parse: function(A) {
								switch (A) {
									case 'none':
										return Wg.NONE
								}
								return Wg.SOLID
							}
						}
					},
					iC = oC('top'),
					sC = oC('right'),
					aC = oC('bottom'),
					cC = oC('left'),
					lC = function(A) {
						return {
							name: 'border-' + A + '-width',
							initialValue: '0',
							type: rg.VALUE,
							prefix: !1,
							parse: function(A) {
								return TA(A) ? A.number : 0
							}
						}
					},
					uC = lC('top'),
					BC = lC('right'),
					pC = lC('bottom'),
					hC = lC('left'),
					dC = {
						name: 'color',
						initialValue: 'transparent',
						prefix: !1,
						type: rg.TYPE_VALUE,
						format: 'color'
					},
					fC = {
						name: 'display',
						initialValue: 'inline-block',
						prefix: !1,
						type: rg.LIST,
						parse: function(A) {
							return A.filter(kA).reduce(function(A, g) {
								return A | wC(g.value)
							}, 0)
						}
					},
					wC = function(A) {
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
				})(rC || (rC = {}))
				var QC,
					UC = {
						name: 'float',
						initialValue: 'none',
						prefix: !1,
						type: rg.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'left':
									return rC.LEFT
								case 'right':
									return rC.RIGHT
								case 'inline-start':
									return rC.INLINE_START
								case 'inline-end':
									return rC.INLINE_END
							}
							return rC.NONE
						}
					},
					EC = {
						name: 'letter-spacing',
						initialValue: '0',
						prefix: !1,
						type: rg.VALUE,
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
				})(QC || (QC = {}))
				var mC,
					FC = {
						name: 'line-break',
						initialValue: 'normal',
						prefix: !1,
						type: rg.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'strict':
									return QC.STRICT
								case 'normal':
								default:
									return QC.NORMAL
							}
						}
					},
					bC = {
						name: 'line-height',
						initialValue: 'normal',
						prefix: !1,
						type: rg.TOKEN_VALUE
					},
					vC = {
						name: 'list-style-image',
						initialValue: 'none',
						type: rg.VALUE,
						prefix: !1,
						parse: function(A) {
							return A.type === c.IDENT_TOKEN &&
								'none' === A.value
								? null
								: Mg.parse(A)
						}
					}
				!(function(A) {
					;(A[(A.INSIDE = 0)] = 'INSIDE'),
						(A[(A.OUTSIDE = 1)] = 'OUTSIDE')
				})(mC || (mC = {}))
				var HC,
					NC = {
						name: 'list-style-position',
						initialValue: 'outside',
						prefix: !1,
						type: rg.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'inside':
									return mC.INSIDE
								case 'outside':
								default:
									return mC.OUTSIDE
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
				})(HC || (HC = {}))
				var xC,
					yC = {
						name: 'list-style-type',
						initialValue: 'none',
						prefix: !1,
						type: rg.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'disc':
									return HC.DISC
								case 'circle':
									return HC.CIRCLE
								case 'square':
									return HC.SQUARE
								case 'decimal':
									return HC.DECIMAL
								case 'cjk-decimal':
									return HC.CJK_DECIMAL
								case 'decimal-leading-zero':
									return HC.DECIMAL_LEADING_ZERO
								case 'lower-roman':
									return HC.LOWER_ROMAN
								case 'upper-roman':
									return HC.UPPER_ROMAN
								case 'lower-greek':
									return HC.LOWER_GREEK
								case 'lower-alpha':
									return HC.LOWER_ALPHA
								case 'upper-alpha':
									return HC.UPPER_ALPHA
								case 'arabic-indic':
									return HC.ARABIC_INDIC
								case 'armenian':
									return HC.ARMENIAN
								case 'bengali':
									return HC.BENGALI
								case 'cambodian':
									return HC.CAMBODIAN
								case 'cjk-earthly-branch':
									return HC.CJK_EARTHLY_BRANCH
								case 'cjk-heavenly-stem':
									return HC.CJK_HEAVENLY_STEM
								case 'cjk-ideographic':
									return HC.CJK_IDEOGRAPHIC
								case 'devanagari':
									return HC.DEVANAGARI
								case 'ethiopic-numeric':
									return HC.ETHIOPIC_NUMERIC
								case 'georgian':
									return HC.GEORGIAN
								case 'gujarati':
									return HC.GUJARATI
								case 'gurmukhi':
									return HC.GURMUKHI
								case 'hebrew':
									return HC.HEBREW
								case 'hiragana':
									return HC.HIRAGANA
								case 'hiragana-iroha':
									return HC.HIRAGANA_IROHA
								case 'japanese-formal':
									return HC.JAPANESE_FORMAL
								case 'japanese-informal':
									return HC.JAPANESE_INFORMAL
								case 'kannada':
									return HC.KANNADA
								case 'katakana':
									return HC.KATAKANA
								case 'katakana-iroha':
									return HC.KATAKANA_IROHA
								case 'khmer':
									return HC.KHMER
								case 'korean-hangul-formal':
									return HC.KOREAN_HANGUL_FORMAL
								case 'korean-hanja-formal':
									return HC.KOREAN_HANJA_FORMAL
								case 'korean-hanja-informal':
									return HC.KOREAN_HANJA_INFORMAL
								case 'lao':
									return HC.LAO
								case 'lower-armenian':
									return HC.LOWER_ARMENIAN
								case 'malayalam':
									return HC.MALAYALAM
								case 'mongolian':
									return HC.MONGOLIAN
								case 'myanmar':
									return HC.MYANMAR
								case 'oriya':
									return HC.ORIYA
								case 'persian':
									return HC.PERSIAN
								case 'simp-chinese-formal':
									return HC.SIMP_CHINESE_FORMAL
								case 'simp-chinese-informal':
									return HC.SIMP_CHINESE_INFORMAL
								case 'tamil':
									return HC.TAMIL
								case 'telugu':
									return HC.TELUGU
								case 'thai':
									return HC.THAI
								case 'tibetan':
									return HC.TIBETAN
								case 'trad-chinese-formal':
									return HC.TRAD_CHINESE_FORMAL
								case 'trad-chinese-informal':
									return HC.TRAD_CHINESE_INFORMAL
								case 'upper-armenian':
									return HC.UPPER_ARMENIAN
								case 'disclosure-open':
									return HC.DISCLOSURE_OPEN
								case 'disclosure-closed':
									return HC.DISCLOSURE_CLOSED
								case 'none':
								default:
									return HC.NONE
							}
						}
					},
					KC = function(A) {
						return {
							name: 'margin-' + A,
							initialValue: '0',
							prefix: !1,
							type: rg.TOKEN_VALUE
						}
					},
					TC = KC('top'),
					RC = KC('right'),
					kC = KC('bottom'),
					LC = KC('left')
				!(function(A) {
					;(A[(A.VISIBLE = 0)] = 'VISIBLE'),
						(A[(A.HIDDEN = 1)] = 'HIDDEN'),
						(A[(A.SCROLL = 2)] = 'SCROLL'),
						(A[(A.AUTO = 3)] = 'AUTO')
				})(xC || (xC = {}))
				var OC,
					DC = {
						name: 'overflow',
						initialValue: 'visible',
						prefix: !1,
						type: rg.LIST,
						parse: function(A) {
							return A.filter(kA).map(function(A) {
								switch (A.value) {
									case 'hidden':
										return xC.HIDDEN
									case 'scroll':
										return xC.SCROLL
									case 'auto':
										return xC.AUTO
									case 'visible':
									default:
										return xC.VISIBLE
								}
							})
						}
					}
				!(function(A) {
					;(A.NORMAL = 'normal'), (A.BREAK_WORD = 'break-word')
				})(OC || (OC = {}))
				var _C,
					MC = {
						name: 'overflow-wrap',
						initialValue: 'normal',
						prefix: !1,
						type: rg.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'break-word':
									return OC.BREAK_WORD
								case 'normal':
								default:
									return OC.NORMAL
							}
						}
					},
					SC = function(A) {
						return {
							name: 'padding-' + A,
							initialValue: '0',
							prefix: !1,
							type: rg.TYPE_VALUE,
							format: 'length-percentage'
						}
					},
					PC = SC('top'),
					zC = SC('right'),
					GC = SC('bottom'),
					VC = SC('left')
				!(function(A) {
					;(A[(A.LEFT = 0)] = 'LEFT'),
						(A[(A.CENTER = 1)] = 'CENTER'),
						(A[(A.RIGHT = 2)] = 'RIGHT')
				})(_C || (_C = {}))
				var XC,
					JC = {
						name: 'text-align',
						initialValue: 'left',
						prefix: !1,
						type: rg.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'right':
									return _C.RIGHT
								case 'center':
								case 'justify':
									return _C.CENTER
								case 'left':
								default:
									return _C.LEFT
							}
						}
					}
				!(function(A) {
					;(A[(A.STATIC = 0)] = 'STATIC'),
						(A[(A.RELATIVE = 1)] = 'RELATIVE'),
						(A[(A.ABSOLUTE = 2)] = 'ABSOLUTE'),
						(A[(A.FIXED = 3)] = 'FIXED'),
						(A[(A.STICKY = 4)] = 'STICKY')
				})(XC || (XC = {}))
				var WC,
					YC = {
						name: 'position',
						initialValue: 'static',
						prefix: !1,
						type: rg.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'relative':
									return XC.RELATIVE
								case 'absolute':
									return XC.ABSOLUTE
								case 'fixed':
									return XC.FIXED
								case 'sticky':
									return XC.STICKY
							}
							return XC.STATIC
						}
					},
					jC = {
						name: 'text-shadow',
						initialValue: 'none',
						type: rg.LIST,
						prefix: !1,
						parse: function(A) {
							return 1 === A.length && OA(A[0], 'none')
								? []
								: MA(A).map(function(A) {
										for (
											var g = {
													color: ag.TRANSPARENT,
													offsetX: VA,
													offsetY: VA,
													blur: VA
												},
												C = 0,
												e = 0;
											e < A.length;
											e++
										) {
											var I = A[e]
											PA(I)
												? (0 === C
														? (g.offsetX = I)
														: 1 === C
														? (g.offsetY = I)
														: (g.blur = I),
												  C++)
												: (g.color = Ag.parse(I))
										}
										return g
								  })
						}
					}
				!(function(A) {
					;(A[(A.NONE = 0)] = 'NONE'),
						(A[(A.LOWERCASE = 1)] = 'LOWERCASE'),
						(A[(A.UPPERCASE = 2)] = 'UPPERCASE'),
						(A[(A.CAPITALIZE = 3)] = 'CAPITALIZE')
				})(WC || (WC = {}))
				var ZC,
					qC = {
						name: 'text-transform',
						initialValue: 'none',
						prefix: !1,
						type: rg.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'uppercase':
									return WC.UPPERCASE
								case 'lowercase':
									return WC.LOWERCASE
								case 'capitalize':
									return WC.CAPITALIZE
							}
							return WC.NONE
						}
					},
					$C = {
						name: 'transform',
						initialValue: 'none',
						prefix: !0,
						type: rg.VALUE,
						parse: function(A) {
							if (A.type === c.IDENT_TOKEN && 'none' === A.value)
								return null
							if (A.type === c.FUNCTION) {
								var g = Ae[A.name]
								if (void 0 === g)
									throw new Error(
										'Attempting to parse an unsupported transform function "' +
											A.name +
											'"'
									)
								return g(A.values)
							}
							return null
						}
					},
					Ae = {
						matrix: function(A) {
							var g = A.filter(function(A) {
								return A.type === c.NUMBER_TOKEN
							}).map(function(A) {
								return A.number
							})
							return 6 === g.length ? g : null
						},
						matrix3d: function(A) {
							var g = A.filter(function(A) {
									return A.type === c.NUMBER_TOKEN
								}).map(function(A) {
									return A.number
								}),
								C = g[0],
								e = g[1],
								I = (g[2], g[3], g[4]),
								t = g[5],
								n =
									(g[6],
									g[7],
									g[8],
									g[9],
									g[10],
									g[11],
									g[12]),
								r = g[13]
							return (
								g[14],
								g[15],
								16 === g.length ? [C, e, I, t, n, r] : null
							)
						}
					},
					ge = { type: c.PERCENTAGE_TOKEN, number: 50, flags: 4 },
					Ce = [ge, ge],
					ee = {
						name: 'transform-origin',
						initialValue: '50% 50%',
						prefix: !0,
						type: rg.LIST,
						parse: function(A) {
							var g = A.filter(zA)
							return 2 !== g.length ? Ce : [g[0], g[1]]
						}
					}
				!(function(A) {
					;(A[(A.VISIBLE = 0)] = 'VISIBLE'),
						(A[(A.HIDDEN = 1)] = 'HIDDEN'),
						(A[(A.COLLAPSE = 2)] = 'COLLAPSE')
				})(ZC || (ZC = {}))
				var Ie,
					te = {
						name: 'visible',
						initialValue: 'none',
						prefix: !1,
						type: rg.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'hidden':
									return ZC.HIDDEN
								case 'collapse':
									return ZC.COLLAPSE
								case 'visible':
								default:
									return ZC.VISIBLE
							}
						}
					}
				!(function(A) {
					;(A.NORMAL = 'normal'),
						(A.BREAK_ALL = 'break-all'),
						(A.KEEP_ALL = 'keep-all')
				})(Ie || (Ie = {}))
				var ne,
					re = {
						name: 'word-break',
						initialValue: 'normal',
						prefix: !1,
						type: rg.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'break-all':
									return Ie.BREAK_ALL
								case 'keep-all':
									return Ie.KEEP_ALL
								case 'normal':
								default:
									return Ie.NORMAL
							}
						}
					},
					oe = {
						name: 'z-index',
						initialValue: 'auto',
						prefix: !1,
						type: rg.VALUE,
						parse: function(A) {
							if (A.type === c.IDENT_TOKEN)
								return { auto: !0, order: 0 }
							if (RA(A)) return { auto: !1, order: A.number }
							throw new Error('Invalid z-index number parsed')
						}
					},
					ie = {
						name: 'opacity',
						initialValue: '1',
						type: rg.VALUE,
						prefix: !1,
						parse: function(A) {
							return RA(A) ? A.number : 1
						}
					},
					se = {
						name: 'text-decoration-color',
						initialValue: 'transparent',
						prefix: !1,
						type: rg.TYPE_VALUE,
						format: 'color'
					},
					ae = {
						name: 'text-decoration-line',
						initialValue: 'none',
						prefix: !1,
						type: rg.LIST,
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
					ce = {
						name: 'font-family',
						initialValue: '',
						prefix: !1,
						type: rg.LIST,
						parse: function(A) {
							return A.filter(le).map(function(A) {
								return A.value
							})
						}
					},
					le = function(A) {
						return (
							A.type === c.STRING_TOKEN ||
							A.type === c.IDENT_TOKEN
						)
					},
					ue = {
						name: 'font-size',
						initialValue: '0',
						prefix: !1,
						type: rg.TYPE_VALUE,
						format: 'length'
					},
					Be = {
						name: 'font-weight',
						initialValue: 'normal',
						type: rg.VALUE,
						prefix: !1,
						parse: function(A) {
							if (RA(A)) return A.number
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
					pe = {
						name: 'font-variant',
						initialValue: 'none',
						type: rg.LIST,
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
				})(ne || (ne = {}))
				var he,
					de = {
						name: 'font-style',
						initialValue: 'normal',
						prefix: !1,
						type: rg.IDENT_VALUE,
						parse: function(A) {
							switch (A) {
								case 'oblique':
									return ne.OBLIQUE
								case 'italic':
									return ne.ITALIC
								case 'normal':
								default:
									return ne.NORMAL
							}
						}
					},
					fe = function(A, g) {
						return 0 != (A & g)
					},
					we = {
						name: 'content',
						initialValue: 'none',
						type: rg.LIST,
						prefix: !1,
						parse: function(A) {
							if (0 === A.length) return []
							var g = A[0]
							return g.type === c.IDENT_TOKEN &&
								'none' === g.value
								? []
								: A
						}
					},
					Qe = {
						name: 'counter-increment',
						initialValue: 'none',
						prefix: !0,
						type: rg.LIST,
						parse: function(A) {
							if (0 === A.length) return null
							var g = A[0]
							if (g.type === c.IDENT_TOKEN && 'none' === g.value)
								return null
							for (
								var C = [], e = A.filter(DA), I = 0;
								I < e.length;
								I++
							) {
								var t = e[I],
									n = e[I + 1]
								if (t.type === c.IDENT_TOKEN) {
									var r = n && RA(n) ? n.number : 1
									C.push({ counter: t.value, increment: r })
								}
							}
							return C
						}
					},
					Ue = {
						name: 'counter-reset',
						initialValue: 'none',
						prefix: !0,
						type: rg.LIST,
						parse: function(A) {
							if (0 === A.length) return []
							for (
								var g = [], C = A.filter(DA), e = 0;
								e < C.length;
								e++
							) {
								var I = C[e],
									t = C[e + 1]
								if (kA(I) && 'none' !== I.value) {
									var n = t && RA(t) ? t.number : 0
									g.push({ counter: I.value, reset: n })
								}
							}
							return g
						}
					},
					Ee = {
						name: 'quotes',
						initialValue: 'none',
						prefix: !0,
						type: rg.LIST,
						parse: function(A) {
							if (0 === A.length) return null
							var g = A[0]
							if (g.type === c.IDENT_TOKEN && 'none' === g.value)
								return null
							var C = [],
								e = A.filter(LA)
							if (e.length % 2 != 0) return null
							for (var I = 0; I < e.length; I += 2) {
								var t = e[I].value,
									n = e[I + 1].value
								C.push({ open: t, close: n })
							}
							return C
						}
					},
					me = function(A, g, C) {
						if (!A) return ''
						var e = A[Math.min(g, A.length - 1)]
						return e ? (C ? e.open : e.close) : ''
					},
					Fe = {
						name: 'box-shadow',
						initialValue: 'none',
						type: rg.LIST,
						prefix: !1,
						parse: function(A) {
							return 1 === A.length && OA(A[0], 'none')
								? []
								: MA(A).map(function(A) {
										for (
											var g = {
													color: 255,
													offsetX: VA,
													offsetY: VA,
													blur: VA,
													spread: VA,
													inset: !1
												},
												C = 0,
												e = 0;
											e < A.length;
											e++
										) {
											var I = A[e]
											OA(I, 'inset')
												? (g.inset = !0)
												: PA(I)
												? (0 === C
														? (g.offsetX = I)
														: 1 === C
														? (g.offsetY = I)
														: 2 === C
														? (g.blur = I)
														: (g.spread = I),
												  C++)
												: (g.color = Ag.parse(I))
										}
										return g
								  })
						}
					},
					be = (function() {
						function A(A) {
							;(this.backgroundClip = Ne(Bg, A.backgroundClip)),
								(this.backgroundColor = Ne(
									pg,
									A.backgroundColor
								)),
								(this.backgroundImage = Ne(
									Pg,
									A.backgroundImage
								)),
								(this.backgroundOrigin = Ne(
									zg,
									A.backgroundOrigin
								)),
								(this.backgroundPosition = Ne(
									Gg,
									A.backgroundPosition
								)),
								(this.backgroundRepeat = Ne(
									Xg,
									A.backgroundRepeat
								)),
								(this.backgroundSize = Ne(
									Yg,
									A.backgroundSize
								)),
								(this.borderTopColor = Ne(
									qg,
									A.borderTopColor
								)),
								(this.borderRightColor = Ne(
									$g,
									A.borderRightColor
								)),
								(this.borderBottomColor = Ne(
									AC,
									A.borderBottomColor
								)),
								(this.borderLeftColor = Ne(
									gC,
									A.borderLeftColor
								)),
								(this.borderTopLeftRadius = Ne(
									eC,
									A.borderTopLeftRadius
								)),
								(this.borderTopRightRadius = Ne(
									IC,
									A.borderTopRightRadius
								)),
								(this.borderBottomRightRadius = Ne(
									tC,
									A.borderBottomRightRadius
								)),
								(this.borderBottomLeftRadius = Ne(
									nC,
									A.borderBottomLeftRadius
								)),
								(this.borderTopStyle = Ne(
									iC,
									A.borderTopStyle
								)),
								(this.borderRightStyle = Ne(
									sC,
									A.borderRightStyle
								)),
								(this.borderBottomStyle = Ne(
									aC,
									A.borderBottomStyle
								)),
								(this.borderLeftStyle = Ne(
									cC,
									A.borderLeftStyle
								)),
								(this.borderTopWidth = Ne(
									uC,
									A.borderTopWidth
								)),
								(this.borderRightWidth = Ne(
									BC,
									A.borderRightWidth
								)),
								(this.borderBottomWidth = Ne(
									pC,
									A.borderBottomWidth
								)),
								(this.borderLeftWidth = Ne(
									hC,
									A.borderLeftWidth
								)),
								(this.boxShadow = Ne(Fe, A.boxShadow)),
								(this.color = Ne(dC, A.color)),
								(this.display = Ne(fC, A.display)),
								(this.float = Ne(UC, A.cssFloat)),
								(this.fontFamily = Ne(ce, A.fontFamily)),
								(this.fontSize = Ne(ue, A.fontSize)),
								(this.fontStyle = Ne(de, A.fontStyle)),
								(this.fontVariant = Ne(pe, A.fontVariant)),
								(this.fontWeight = Ne(Be, A.fontWeight)),
								(this.letterSpacing = Ne(EC, A.letterSpacing)),
								(this.lineBreak = Ne(FC, A.lineBreak)),
								(this.lineHeight = Ne(bC, A.lineHeight)),
								(this.listStyleImage = Ne(
									vC,
									A.listStyleImage
								)),
								(this.listStylePosition = Ne(
									NC,
									A.listStylePosition
								)),
								(this.listStyleType = Ne(yC, A.listStyleType)),
								(this.marginTop = Ne(TC, A.marginTop)),
								(this.marginRight = Ne(RC, A.marginRight)),
								(this.marginBottom = Ne(kC, A.marginBottom)),
								(this.marginLeft = Ne(LC, A.marginLeft)),
								(this.opacity = Ne(ie, A.opacity))
							var g = Ne(DC, A.overflow)
							;(this.overflowX = g[0]),
								(this.overflowY = g[g.length > 1 ? 1 : 0]),
								(this.overflowWrap = Ne(MC, A.overflowWrap)),
								(this.paddingTop = Ne(PC, A.paddingTop)),
								(this.paddingRight = Ne(zC, A.paddingRight)),
								(this.paddingBottom = Ne(GC, A.paddingBottom)),
								(this.paddingLeft = Ne(VC, A.paddingLeft)),
								(this.position = Ne(YC, A.position)),
								(this.textAlign = Ne(JC, A.textAlign)),
								(this.textDecorationColor = Ne(
									se,
									A.textDecorationColor || A.color
								)),
								(this.textDecorationLine = Ne(
									ae,
									A.textDecorationLine
								)),
								(this.textShadow = Ne(jC, A.textShadow)),
								(this.textTransform = Ne(qC, A.textTransform)),
								(this.transform = Ne($C, A.transform)),
								(this.transformOrigin = Ne(
									ee,
									A.transformOrigin
								)),
								(this.visibility = Ne(te, A.visibility)),
								(this.wordBreak = Ne(re, A.wordBreak)),
								(this.zIndex = Ne(oe, A.zIndex))
						}
						return (
							(A.prototype.isVisible = function() {
								return (
									this.display > 0 &&
									this.opacity > 0 &&
									this.visibility === ZC.VISIBLE
								)
							}),
							(A.prototype.isTransparent = function() {
								return gg(this.backgroundColor)
							}),
							(A.prototype.isTransformed = function() {
								return null !== this.transform
							}),
							(A.prototype.isPositioned = function() {
								return this.position !== XC.STATIC
							}),
							(A.prototype.isPositionedWithZIndex = function() {
								return this.isPositioned() && !this.zIndex.auto
							}),
							(A.prototype.isFloating = function() {
								return this.float !== rC.NONE
							}),
							(A.prototype.isInlineLevel = function() {
								return (
									fe(this.display, 4) ||
									fe(this.display, 33554432) ||
									fe(this.display, 268435456) ||
									fe(this.display, 536870912) ||
									fe(this.display, 67108864) ||
									fe(this.display, 134217728)
								)
							}),
							A
						)
					})(),
					ve = function(A) {
						;(this.content = Ne(we, A.content)),
							(this.quotes = Ne(Ee, A.quotes))
					},
					He = function(A) {
						;(this.counterIncrement = Ne(Qe, A.counterIncrement)),
							(this.counterReset = Ne(Ue, A.counterReset))
					},
					Ne = function(A, g) {
						var C = new yA(),
							e = null != g ? g.toString() : A.initialValue
						C.write(e)
						var I = new KA(C.read())
						switch (A.type) {
							case rg.IDENT_VALUE:
								var t = I.parseComponentValue()
								return A.parse(kA(t) ? t.value : A.initialValue)
							case rg.VALUE:
								return A.parse(I.parseComponentValue())
							case rg.LIST:
								return A.parse(I.parseComponentValues())
							case rg.TOKEN_VALUE:
								return I.parseComponentValue()
							case rg.TYPE_VALUE:
								switch (A.format) {
									case 'angle':
										return jA.parse(I.parseComponentValue())
									case 'color':
										return Ag.parse(I.parseComponentValue())
									case 'image':
										return Mg.parse(I.parseComponentValue())
									case 'length':
										var n = I.parseComponentValue()
										return PA(n) ? n : VA
									case 'length-percentage':
										var r = I.parseComponentValue()
										return zA(r) ? r : VA
								}
						}
						throw new Error(
							'Attempting to parse unsupported css format type ' +
								A.format
						)
					},
					xe = function(A) {
						;(this.styles = new be(
							window.getComputedStyle(A, null)
						)),
							(this.textNodes = []),
							(this.elements = []),
							null !== this.styles.transform &&
								cI(A) &&
								(A.style.transform = 'none'),
							(this.bounds = n(A)),
							(this.flags = 0)
					},
					ye = function(A, g) {
						;(this.text = A), (this.bounds = g)
					},
					Ke = function(A, g, C) {
						var e = ke(A, g),
							I = [],
							t = 0
						return (
							e.forEach(function(A) {
								if (
									g.textDecorationLine.length ||
									A.trim().length > 0
								)
									if (bg.SUPPORT_RANGE_BOUNDS)
										I.push(new ye(A, Re(C, t, A.length)))
									else {
										var e = C.splitText(A.length)
										I.push(new ye(A, Te(C))), (C = e)
									}
								else
									bg.SUPPORT_RANGE_BOUNDS ||
										(C = C.splitText(A.length))
								t += A.length
							}),
							I
						)
					},
					Te = function(A) {
						var g = A.ownerDocument
						if (g) {
							var C = g.createElement('html2canvaswrapper')
							C.appendChild(A.cloneNode(!0))
							var e = A.parentNode
							if (e) {
								e.replaceChild(C, A)
								var I = n(C)
								return (
									C.firstChild &&
										e.replaceChild(C.firstChild, C),
									I
								)
							}
						}
						return new t(0, 0, 0, 0)
					},
					Re = function(A, g, C) {
						var e = A.ownerDocument
						if (!e) throw new Error('Node has no owner document')
						var I = e.createRange()
						return (
							I.setStart(A, g),
							I.setEnd(A, g + C),
							t.fromClientRect(I.getBoundingClientRect())
						)
					},
					ke = function(A, g) {
						return 0 !== g.letterSpacing
							? r(A).map(function(A) {
									return o(A)
							  })
							: Le(A, g)
					},
					Le = function(A, g) {
						for (
							var C,
								e = (function(A, g) {
									var C = r(A),
										e = Z(C, g),
										I = e[0],
										t = e[1],
										n = e[2],
										o = C.length,
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
													(A = j(C, t, I, ++s, n));

											);
											if ('×' !== A || s === o) {
												var g = new q(C, A, i, s)
												return (
													(i = s),
													{ value: g, done: !1 }
												)
											}
											return { done: !0, value: null }
										}
									}
								})(A, {
									lineBreak: g.lineBreak,
									wordBreak:
										g.overflowWrap === OC.BREAK_WORD
											? 'break-word'
											: g.wordBreak
								}),
								I = [];
							!(C = e.next()).done;

						)
							C.value && I.push(C.value.slice())
						return I
					},
					Oe = function(A, g) {
						;(this.text = De(A.data, g.textTransform)),
							(this.textBounds = Ke(this.text, g, A))
					},
					De = function(A, g) {
						switch (g) {
							case WC.LOWERCASE:
								return A.toLowerCase()
							case WC.CAPITALIZE:
								return A.replace(_e, Me)
							case WC.UPPERCASE:
								return A.toUpperCase()
							default:
								return A
						}
					},
					_e = /(^|\s|:|-|\(|\))([a-z])/g,
					Me = function(A, g, C) {
						return A.length > 0 ? g + C.toUpperCase() : A
					},
					Se = (function(A) {
						function C(g) {
							var C = A.call(this, g) || this
							return (
								(C.src = g.currentSrc || g.src),
								(C.intrinsicWidth = g.naturalWidth),
								(C.intrinsicHeight = g.naturalHeight),
								Hg.getInstance().addImage(C.src),
								C
							)
						}
						return g(C, A), C
					})(xe),
					Pe = (function(A) {
						function C(g) {
							var C = A.call(this, g) || this
							return (
								(C.canvas = g),
								(C.intrinsicWidth = g.width),
								(C.intrinsicHeight = g.height),
								C
							)
						}
						return g(C, A), C
					})(xe),
					ze = (function(A) {
						function C(g) {
							var C = A.call(this, g) || this,
								e = new XMLSerializer()
							return (
								(C.svg =
									'data:image/svg+xml,' +
									encodeURIComponent(e.serializeToString(g))),
								(C.intrinsicWidth = g.width.baseVal.value),
								(C.intrinsicHeight = g.height.baseVal.value),
								Hg.getInstance().addImage(C.svg),
								C
							)
						}
						return g(C, A), C
					})(xe),
					Ge = (function(A) {
						function C(g) {
							var C = A.call(this, g) || this
							return (C.value = g.value), C
						}
						return g(C, A), C
					})(xe),
					Ve = (function(A) {
						function C(g) {
							var C = A.call(this, g) || this
							return (
								(C.start = g.start),
								(C.reversed =
									'boolean' == typeof g.reversed &&
									!0 === g.reversed),
								C
							)
						}
						return g(C, A), C
					})(xe),
					Xe = [
						{
							type: c.DIMENSION_TOKEN,
							flags: 0,
							unit: 'px',
							number: 3
						}
					],
					Je = [{ type: c.PERCENTAGE_TOKEN, flags: 0, number: 50 }],
					We = function(A) {
						return A.width > A.height
							? new t(
									A.left + (A.width - A.height) / 2,
									A.top,
									A.height,
									A.height
							  )
							: A.width < A.height
							? new t(
									A.left,
									A.top + (A.height - A.width) / 2,
									A.width,
									A.width
							  )
							: A
					},
					Ye = function(A) {
						var g =
							A.type === qe
								? new Array(A.value.length + 1).join('•')
								: A.value
						return 0 === g.length ? A.placeholder || '' : g
					},
					je = 'checkbox',
					Ze = 'radio',
					qe = 'password',
					$e = (function(A) {
						function C(g) {
							var C = A.call(this, g) || this
							switch (
								((C.type = g.type.toLowerCase()),
								(C.checked = g.checked),
								(C.value = Ye(g)),
								(C.type !== je && C.type !== Ze) ||
									((C.styles.backgroundColor = 3739148031),
									(C.styles.borderTopColor = C.styles.borderRightColor = C.styles.borderBottomColor = C.styles.borderLeftColor = 2779096575),
									(C.styles.borderTopWidth = C.styles.borderRightWidth = C.styles.borderBottomWidth = C.styles.borderLeftWidth = 1),
									(C.styles.borderTopStyle = C.styles.borderRightStyle = C.styles.borderBottomStyle = C.styles.borderLeftStyle =
										Wg.SOLID),
									(C.styles.backgroundClip = [og.BORDER_BOX]),
									(C.styles.backgroundOrigin = [0]),
									(C.bounds = We(C.bounds))),
								C.type)
							) {
								case je:
									C.styles.borderTopRightRadius = C.styles.borderTopLeftRadius = C.styles.borderBottomRightRadius = C.styles.borderBottomLeftRadius = Xe
									break
								case Ze:
									C.styles.borderTopRightRadius = C.styles.borderTopLeftRadius = C.styles.borderBottomRightRadius = C.styles.borderBottomLeftRadius = Je
							}
							return C
						}
						return g(C, A), C
					})(xe),
					AI = (function(A) {
						function C(g) {
							var C = A.call(this, g) || this,
								e = g.options[g.selectedIndex || 0]
							return (C.value = (e && e.text) || ''), C
						}
						return g(C, A), C
					})(xe),
					gI = (function(A) {
						function C(g) {
							var C = A.call(this, g) || this
							return (C.value = g.value), C
						}
						return g(C, A), C
					})(xe),
					CI = function(A) {
						return Ag.parse(KA.create(A).parseComponentValue())
					},
					eI = (function(A) {
						function C(g) {
							var C = A.call(this, g) || this
							;(C.src = g.src),
								(C.width = parseInt(g.width, 10)),
								(C.height = parseInt(g.height, 10)),
								(C.backgroundColor = C.styles.backgroundColor)
							try {
								if (
									g.contentWindow &&
									g.contentWindow.document &&
									g.contentWindow.document.documentElement
								) {
									C.tree = rI(
										g.contentWindow.document.documentElement
									)
									var e = g.contentWindow.document
											.documentElement
											? CI(
													getComputedStyle(
														g.contentWindow.document
															.documentElement
													).backgroundColor
											  )
											: ag.TRANSPARENT,
										I = g.contentWindow.document.body
											? CI(
													getComputedStyle(
														g.contentWindow.document
															.body
													).backgroundColor
											  )
											: ag.TRANSPARENT
									C.backgroundColor = gg(e)
										? gg(I)
											? C.styles.backgroundColor
											: I
										: e
								}
							} catch (A) {}
							return C
						}
						return g(C, A), C
					})(xe),
					II = ['OL', 'UL', 'MENU'],
					tI = function(A, g, C) {
						for (var e = A.firstChild, I = void 0; e; e = I)
							if (
								((I = e.nextSibling),
								sI(e) && e.data.trim().length > 0)
							)
								g.textNodes.push(new Oe(e, g.styles))
							else if (aI(e)) {
								var t = nI(e)
								t.styles.isVisible() &&
									(oI(e, t, C)
										? (t.flags |= 4)
										: iI(t.styles) && (t.flags |= 2),
									-1 !== II.indexOf(e.tagName) &&
										(t.flags |= 8),
									g.elements.push(t),
									EI(e) || pI(e) || mI(e) || tI(e, t, C))
							}
					},
					nI = function(A) {
						return fI(A)
							? new Se(A)
							: dI(A)
							? new Pe(A)
							: pI(A)
							? new ze(A)
							: lI(A)
							? new Ge(A)
							: uI(A)
							? new Ve(A)
							: BI(A)
							? new $e(A)
							: mI(A)
							? new AI(A)
							: EI(A)
							? new gI(A)
							: wI(A)
							? new eI(A)
							: new xe(A)
					},
					rI = function(A) {
						var g = nI(A)
						return (g.flags |= 4), tI(A, g, g), g
					},
					oI = function(A, g, C) {
						return (
							g.styles.isPositionedWithZIndex() ||
							g.styles.opacity < 1 ||
							g.styles.isTransformed() ||
							(hI(A) && C.styles.isTransparent())
						)
					},
					iI = function(A) {
						return A.isPositioned() || A.isFloating()
					},
					sI = function(A) {
						return A.nodeType === Node.TEXT_NODE
					},
					aI = function(A) {
						return A.nodeType === Node.ELEMENT_NODE
					},
					cI = function(A) {
						return void 0 !== A.style
					},
					lI = function(A) {
						return 'LI' === A.tagName
					},
					uI = function(A) {
						return 'OL' === A.tagName
					},
					BI = function(A) {
						return 'INPUT' === A.tagName
					},
					pI = function(A) {
						return 'svg' === A.tagName
					},
					hI = function(A) {
						return 'BODY' === A.tagName
					},
					dI = function(A) {
						return 'CANVAS' === A.tagName
					},
					fI = function(A) {
						return 'IMG' === A.tagName
					},
					wI = function(A) {
						return 'IFRAME' === A.tagName
					},
					QI = function(A) {
						return 'STYLE' === A.tagName
					},
					UI = function(A) {
						return 'SCRIPT' === A.tagName
					},
					EI = function(A) {
						return 'TEXTAREA' === A.tagName
					},
					mI = function(A) {
						return 'SELECT' === A.tagName
					},
					FI = (function() {
						function A() {
							this.counters = {}
						}
						return (
							(A.prototype.getCounterValue = function(A) {
								var g = this.counters[A]
								return g && g.length ? g[g.length - 1] : 1
							}),
							(A.prototype.getCounterValues = function(A) {
								var g = this.counters[A]
								return g || []
							}),
							(A.prototype.pop = function(A) {
								var g = this
								A.forEach(function(A) {
									return g.counters[A].pop()
								})
							}),
							(A.prototype.parse = function(A) {
								var g = this,
									C = A.counterIncrement,
									e = A.counterReset
								null !== C &&
									C.forEach(function(A) {
										var C = g.counters[A.counter]
										C &&
											(C[Math.max(0, C.length - 1)] +=
												A.increment)
									})
								var I = []
								return (
									e.forEach(function(A) {
										var C = g.counters[A.counter]
										I.push(A.counter),
											C ||
												(C = g.counters[
													A.counter
												] = []),
											C.push(A.reset)
									}),
									I
								)
							}),
							A
						)
					})(),
					bI = {
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
					vI = {
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
					HI = {
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
					NI = {
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
					xI = function(A, g, C, e, I, t) {
						return A < g || A > C
							? kI(A, I, t.length > 0)
							: e.integers.reduce(function(g, C, I) {
									for (; A >= C; )
										(A -= C), (g += e.values[I])
									return g
							  }, '') + t
					},
					yI = function(A, g, C, e) {
						var I = ''
						do {
							C || A--, (I = e(A) + I), (A /= g)
						} while (A * g >= g)
						return I
					},
					KI = function(A, g, C, e, I) {
						var t = C - g + 1
						return (
							(A < 0 ? '-' : '') +
							(yI(Math.abs(A), t, e, function(A) {
								return o(Math.floor(A % t) + g)
							}) +
								I)
						)
					},
					TI = function(A, g, C) {
						void 0 === C && (C = '. ')
						var e = g.length
						return (
							yI(Math.abs(A), e, !1, function(A) {
								return g[Math.floor(A % e)]
							}) + C
						)
					},
					RI = function(A, g, C, e, I, t) {
						if (A < -9999 || A > 9999)
							return kI(A, HC.CJK_DECIMAL, I.length > 0)
						var n = Math.abs(A),
							r = I
						if (0 === n) return g[0] + r
						for (var o = 0; n > 0 && o <= 4; o++) {
							var i = n % 10
							0 === i && fe(t, 1) && '' !== r
								? (r = g[i] + r)
								: i > 1 ||
								  (1 === i && 0 === o) ||
								  (1 === i && 1 === o && fe(t, 2)) ||
								  (1 === i && 1 === o && fe(t, 4) && A > 100) ||
								  (1 === i && o > 1 && fe(t, 8))
								? (r = g[i] + (o > 0 ? C[o - 1] : '') + r)
								: 1 === i && o > 0 && (r = C[o - 1] + r),
								(n = Math.floor(n / 10))
						}
						return (A < 0 ? e : '') + r
					},
					kI = function(A, g, C) {
						var e = C ? '. ' : '',
							I = C ? '、' : '',
							t = C ? ', ' : '',
							n = C ? ' ' : ''
						switch (g) {
							case HC.DISC:
								return '•' + n
							case HC.CIRCLE:
								return '◦' + n
							case HC.SQUARE:
								return '◾' + n
							case HC.DECIMAL_LEADING_ZERO:
								var r = KI(A, 48, 57, !0, e)
								return r.length < 4 ? '0' + r : r
							case HC.CJK_DECIMAL:
								return TI(A, '〇一二三四五六七八九', I)
							case HC.LOWER_ROMAN:
								return xI(
									A,
									1,
									3999,
									bI,
									HC.DECIMAL,
									e
								).toLowerCase()
							case HC.UPPER_ROMAN:
								return xI(A, 1, 3999, bI, HC.DECIMAL, e)
							case HC.LOWER_GREEK:
								return KI(A, 945, 969, !1, e)
							case HC.LOWER_ALPHA:
								return KI(A, 97, 122, !1, e)
							case HC.UPPER_ALPHA:
								return KI(A, 65, 90, !1, e)
							case HC.ARABIC_INDIC:
								return KI(A, 1632, 1641, !0, e)
							case HC.ARMENIAN:
							case HC.UPPER_ARMENIAN:
								return xI(A, 1, 9999, vI, HC.DECIMAL, e)
							case HC.LOWER_ARMENIAN:
								return xI(
									A,
									1,
									9999,
									vI,
									HC.DECIMAL,
									e
								).toLowerCase()
							case HC.BENGALI:
								return KI(A, 2534, 2543, !0, e)
							case HC.CAMBODIAN:
							case HC.KHMER:
								return KI(A, 6112, 6121, !0, e)
							case HC.CJK_EARTHLY_BRANCH:
								return TI(A, '子丑寅卯辰巳午未申酉戌亥', I)
							case HC.CJK_HEAVENLY_STEM:
								return TI(A, '甲乙丙丁戊己庚辛壬癸', I)
							case HC.CJK_IDEOGRAPHIC:
							case HC.TRAD_CHINESE_INFORMAL:
								return RI(
									A,
									'零一二三四五六七八九',
									'十百千萬',
									'負',
									I,
									14
								)
							case HC.TRAD_CHINESE_FORMAL:
								return RI(
									A,
									'零壹貳參肆伍陸柒捌玖',
									'拾佰仟萬',
									'負',
									I,
									15
								)
							case HC.SIMP_CHINESE_INFORMAL:
								return RI(
									A,
									'零一二三四五六七八九',
									'十百千萬',
									'负',
									I,
									14
								)
							case HC.SIMP_CHINESE_FORMAL:
								return RI(
									A,
									'零壹贰叁肆伍陆柒捌玖',
									'拾佰仟萬',
									'负',
									I,
									15
								)
							case HC.JAPANESE_INFORMAL:
								return RI(
									A,
									'〇一二三四五六七八九',
									'十百千万',
									'マイナス',
									I,
									0
								)
							case HC.JAPANESE_FORMAL:
								return RI(
									A,
									'零壱弐参四伍六七八九',
									'拾百千万',
									'マイナス',
									I,
									7
								)
							case HC.KOREAN_HANGUL_FORMAL:
								return RI(
									A,
									'영일이삼사오육칠팔구',
									'십백천만',
									'마이너스',
									t,
									7
								)
							case HC.KOREAN_HANJA_INFORMAL:
								return RI(
									A,
									'零一二三四五六七八九',
									'十百千萬',
									'마이너스',
									t,
									0
								)
							case HC.KOREAN_HANJA_FORMAL:
								return RI(
									A,
									'零壹貳參四五六七八九',
									'拾百千',
									'마이너스',
									t,
									7
								)
							case HC.DEVANAGARI:
								return KI(A, 2406, 2415, !0, e)
							case HC.GEORGIAN:
								return xI(A, 1, 19999, NI, HC.DECIMAL, e)
							case HC.GUJARATI:
								return KI(A, 2790, 2799, !0, e)
							case HC.GURMUKHI:
								return KI(A, 2662, 2671, !0, e)
							case HC.HEBREW:
								return xI(A, 1, 10999, HI, HC.DECIMAL, e)
							case HC.HIRAGANA:
								return TI(
									A,
									'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん'
								)
							case HC.HIRAGANA_IROHA:
								return TI(
									A,
									'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす'
								)
							case HC.KANNADA:
								return KI(A, 3302, 3311, !0, e)
							case HC.KATAKANA:
								return TI(
									A,
									'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン',
									I
								)
							case HC.KATAKANA_IROHA:
								return TI(
									A,
									'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス',
									I
								)
							case HC.LAO:
								return KI(A, 3792, 3801, !0, e)
							case HC.MONGOLIAN:
								return KI(A, 6160, 6169, !0, e)
							case HC.MYANMAR:
								return KI(A, 4160, 4169, !0, e)
							case HC.ORIYA:
								return KI(A, 2918, 2927, !0, e)
							case HC.PERSIAN:
								return KI(A, 1776, 1785, !0, e)
							case HC.TAMIL:
								return KI(A, 3046, 3055, !0, e)
							case HC.TELUGU:
								return KI(A, 3174, 3183, !0, e)
							case HC.THAI:
								return KI(A, 3664, 3673, !0, e)
							case HC.TIBETAN:
								return KI(A, 3872, 3881, !0, e)
							case HC.DECIMAL:
							default:
								return KI(A, 48, 57, !0, e)
						}
					},
					LI = (function() {
						function A(A, g) {
							if (
								((this.options = g),
								(this.scrolledElements = []),
								(this.referenceElement = A),
								(this.counters = new FI()),
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
							(A.prototype.toIFrame = function(A, g) {
								var C = this,
									e = DI(A, g)
								if (!e.contentWindow)
									return Promise.reject(
										'Unable to find iframe window'
									)
								var I = A.defaultView.pageXOffset,
									t = A.defaultView.pageYOffset,
									n = e.contentWindow,
									r = n.document,
									o = _I(e).then(function() {
										C.scrolledElements.forEach(zI),
											n &&
												(n.scrollTo(g.left, g.top),
												!/(iPad|iPhone|iPod)/g.test(
													navigator.userAgent
												) ||
													(n.scrollY === g.top &&
														n.scrollX === g.left) ||
													((r.documentElement.style.top =
														-g.top + 'px'),
													(r.documentElement.style.left =
														-g.left + 'px'),
													(r.documentElement.style.position =
														'absolute')))
										var A = C.options.onclone
										return void 0 ===
											C.clonedReferenceElement
											? Promise.reject(
													'Error finding the ' +
														C.referenceElement
															.nodeName +
														' in the cloned document'
											  )
											: 'function' == typeof A
											? Promise.resolve()
													.then(function() {
														return A(r)
													})
													.then(function() {
														return e
													})
											: e
									})
								return (
									r.open(),
									r.write(
										SI(document.doctype) + '<html></html>'
									),
									PI(
										this.referenceElement.ownerDocument,
										I,
										t
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
								return dI(A)
									? this.createCanvasClone(A)
									: QI(A)
									? this.createStyleClone(A)
									: A.cloneNode(!1)
							}),
							(A.prototype.createStyleClone = function(A) {
								try {
									var g = A.sheet
									if (g && g.cssRules) {
										var C = [].slice
												.call(g.cssRules, 0)
												.reduce(function(A, g) {
													return g &&
														'string' ==
															typeof g.cssText
														? A + g.cssText
														: A
												}, ''),
											e = A.cloneNode(!1)
										return (e.textContent = C), e
									}
								} catch (A) {
									if (
										(vg
											.getInstance(this.options.id)
											.error(
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
									var g = A.ownerDocument.createElement('img')
									try {
										return (g.src = A.toDataURL()), g
									} catch (A) {
										vg.getInstance(this.options.id).info(
											'Unable to clone canvas contents, canvas is tainted'
										)
									}
								}
								var C = A.cloneNode(!1)
								try {
									;(C.width = A.width), (C.height = A.height)
									var e = A.getContext('2d'),
										I = C.getContext('2d')
									return (
										I &&
											(e
												? I.putImageData(
														e.getImageData(
															0,
															0,
															A.width,
															A.height
														),
														0,
														0
												  )
												: I.drawImage(A, 0, 0)),
										C
									)
								} catch (A) {}
								return C
							}),
							(A.prototype.cloneNode = function(A) {
								if (sI(A))
									return document.createTextNode(A.data)
								if (!A.ownerDocument) return A.cloneNode(!1)
								var g = A.ownerDocument.defaultView
								if (cI(A) && g) {
									var C = this.createElementClone(A),
										e = g.getComputedStyle(A),
										I = g.getComputedStyle(A, ':before'),
										t = g.getComputedStyle(A, ':after')
									this.referenceElement === A &&
										(this.clonedReferenceElement = C),
										hI(C) && XI(C)
									for (
										var n = this.counters.parse(new He(e)),
											r = this.resolvePseudoContent(
												A,
												C,
												I,
												he.BEFORE
											),
											o = A.firstChild;
										o;
										o = o.nextSibling
									)
										(aI(o) &&
											(UI(o) ||
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
												aI(o) &&
												QI(o)) ||
											C.appendChild(this.cloneNode(o))
									r && C.insertBefore(r, C.firstChild)
									var i = this.resolvePseudoContent(
										A,
										C,
										t,
										he.AFTER
									)
									return (
										i && C.appendChild(i),
										this.counters.pop(n),
										e &&
											this.options.copyStyles &&
											!wI(A) &&
											MI(e, C),
										(0 === A.scrollTop &&
											0 === A.scrollLeft) ||
											this.scrolledElements.push([
												C,
												A.scrollLeft,
												A.scrollTop
											]),
										(EI(A) || mI(A)) &&
											(EI(C) || mI(C)) &&
											(C.value = A.value),
										C
									)
								}
								return A.cloneNode(!1)
							}),
							(A.prototype.resolvePseudoContent = function(
								A,
								g,
								C,
								e
							) {
								var I = this
								if (C) {
									var t = C.content,
										n = g.ownerDocument
									if (
										n &&
										t &&
										'none' !== t &&
										'-moz-alt-content' !== t &&
										'none' !== C.display
									) {
										this.counters.parse(new He(C))
										var r = new ve(C),
											o = n.createElement(
												'html2canvaspseudoelement'
											)
										return (
											MI(C, o),
											r.content.forEach(function(g) {
												if (g.type === c.STRING_TOKEN)
													o.appendChild(
														n.createTextNode(
															g.value
														)
													)
												else if (
													g.type === c.URL_TOKEN
												) {
													var C = n.createElement(
														'img'
													)
													;(C.src = g.value),
														(C.style.opacity = '1'),
														o.appendChild(C)
												} else if (
													g.type === c.FUNCTION
												) {
													if ('attr' === g.name) {
														var e = g.values.filter(
															kA
														)
														e.length &&
															o.appendChild(
																n.createTextNode(
																	A.getAttribute(
																		e[0]
																			.value
																	) || ''
																)
															)
													} else if (
														'counter' === g.name
													) {
														var t = g.values.filter(
																_A
															),
															i = t[0],
															s = t[1]
														if (i && kA(i)) {
															var a = I.counters.getCounterValue(
																	i.value
																),
																l =
																	s && kA(s)
																		? yC.parse(
																				s.value
																		  )
																		: HC.DECIMAL
															o.appendChild(
																n.createTextNode(
																	kI(a, l, !1)
																)
															)
														}
													} else if (
														'counters' === g.name
													) {
														var u = g.values.filter(
																_A
															),
															i = u[0],
															B = u[1],
															s = u[2]
														if (i && kA(i)) {
															var p = I.counters.getCounterValues(
																	i.value
																),
																h =
																	s && kA(s)
																		? yC.parse(
																				s.value
																		  )
																		: HC.DECIMAL,
																d =
																	B &&
																	B.type ===
																		c.STRING_TOKEN
																		? B.value
																		: '',
																f = p
																	.map(
																		function(
																			A
																		) {
																			return kI(
																				A,
																				h,
																				!1
																			)
																		}
																	)
																	.join(d)
															o.appendChild(
																n.createTextNode(
																	f
																)
															)
														}
													}
												} else if (
													g.type === c.IDENT_TOKEN
												)
													switch (g.value) {
														case 'open-quote':
															o.appendChild(
																n.createTextNode(
																	me(
																		r.quotes,
																		I.quoteDepth++,
																		!0
																	)
																)
															)
															break
														case 'close-quote':
															o.appendChild(
																n.createTextNode(
																	me(
																		r.quotes,
																		--I.quoteDepth,
																		!1
																	)
																)
															)
													}
											}),
											(o.className = GI + ' ' + VI),
											(g.className +=
												e === he.BEFORE
													? ' ' + GI
													: ' ' + VI),
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
				})(he || (he = {}))
				var OI,
					DI = function(A, g) {
						var C = A.createElement('iframe')
						return (
							(C.className = 'html2canvas-container'),
							(C.style.visibility = 'hidden'),
							(C.style.position = 'fixed'),
							(C.style.left = '-10000px'),
							(C.style.top = '0px'),
							(C.style.border = '0'),
							(C.width = g.width.toString()),
							(C.height = g.height.toString()),
							(C.scrolling = 'no'),
							C.setAttribute('data-html2canvas-ignore', 'true'),
							A.body.appendChild(C),
							C
						)
					},
					_I = function(A) {
						return new Promise(function(g, C) {
							var e = A.contentWindow
							if (!e) return C('No window assigned for iframe')
							var I = e.document
							e.onload = A.onload = I.onreadystatechange = function() {
								e.onload = A.onload = I.onreadystatechange = null
								var C = setInterval(function() {
									I.body.childNodes.length > 0 &&
										'complete' === I.readyState &&
										(clearInterval(C), g(A))
								}, 50)
							}
						})
					},
					MI = function(A, g) {
						for (var C = A.length - 1; C >= 0; C--) {
							var e = A.item(C)
							'content' !== e &&
								g.style.setProperty(e, A.getPropertyValue(e))
						}
						return g
					},
					SI = function(A) {
						var g = ''
						return (
							A &&
								((g += '<!DOCTYPE '),
								A.name && (g += A.name),
								A.internalSubset && (g += A.internalSubset),
								A.publicId && (g += '"' + A.publicId + '"'),
								A.systemId && (g += '"' + A.systemId + '"'),
								(g += '>')),
							g
						)
					},
					PI = function(A, g, C) {
						A &&
							A.defaultView &&
							(g !== A.defaultView.pageXOffset ||
								C !== A.defaultView.pageYOffset) &&
							A.defaultView.scrollTo(g, C)
					},
					zI = function(A) {
						var g = A[0],
							C = A[1],
							e = A[2]
						;(g.scrollLeft = C), (g.scrollTop = e)
					},
					GI = '___html2canvas___pseudoelement_before',
					VI = '___html2canvas___pseudoelement_after',
					XI = function(A) {
						JI(
							A,
							'.' +
								GI +
								':before{\n    content: "" !important;\n    display: none !important;\n}\n         .' +
								VI +
								':after{\n    content: "" !important;\n    display: none !important;\n}'
						)
					},
					JI = function(A, g) {
						var C = A.ownerDocument
						if (C) {
							var e = C.createElement('style')
							;(e.textContent = g), A.appendChild(e)
						}
					}
				!(function(A) {
					;(A[(A.VECTOR = 0)] = 'VECTOR'),
						(A[(A.BEZIER_CURVE = 1)] = 'BEZIER_CURVE')
				})(OI || (OI = {}))
				var WI,
					YI = function(A, g) {
						return (
							A.length === g.length &&
							A.some(function(A, C) {
								return A === g[C]
							})
						)
					},
					jI = (function() {
						function A(A, g) {
							;(this.type = OI.VECTOR), (this.x = A), (this.y = g)
						}
						return (
							(A.prototype.add = function(g, C) {
								return new A(this.x + g, this.y + C)
							}),
							A
						)
					})(),
					ZI = function(A, g, C) {
						return new jI(
							A.x + (g.x - A.x) * C,
							A.y + (g.y - A.y) * C
						)
					},
					qI = (function() {
						function A(A, g, C, e) {
							;(this.type = OI.BEZIER_CURVE),
								(this.start = A),
								(this.startControl = g),
								(this.endControl = C),
								(this.end = e)
						}
						return (
							(A.prototype.subdivide = function(g, C) {
								var e = ZI(this.start, this.startControl, g),
									I = ZI(
										this.startControl,
										this.endControl,
										g
									),
									t = ZI(this.endControl, this.end, g),
									n = ZI(e, I, g),
									r = ZI(I, t, g),
									o = ZI(n, r, g)
								return C
									? new A(this.start, e, n, o)
									: new A(o, r, t, this.end)
							}),
							(A.prototype.add = function(g, C) {
								return new A(
									this.start.add(g, C),
									this.startControl.add(g, C),
									this.endControl.add(g, C),
									this.end.add(g, C)
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
					$I = function(A) {
						return A.type === OI.BEZIER_CURVE
					},
					At = function(A) {
						var g = A.styles,
							C = A.bounds,
							e = WA(g.borderTopLeftRadius, C.width, C.height),
							I = e[0],
							t = e[1],
							n = WA(g.borderTopRightRadius, C.width, C.height),
							r = n[0],
							o = n[1],
							i = WA(
								g.borderBottomRightRadius,
								C.width,
								C.height
							),
							s = i[0],
							a = i[1],
							c = WA(g.borderBottomLeftRadius, C.width, C.height),
							l = c[0],
							u = c[1],
							B = []
						B.push((I + r) / C.width),
							B.push((l + s) / C.width),
							B.push((t + u) / C.height),
							B.push((o + a) / C.height)
						var p = Math.max.apply(Math, B)
						p > 1 &&
							((I /= p),
							(t /= p),
							(r /= p),
							(o /= p),
							(s /= p),
							(a /= p),
							(l /= p),
							(u /= p))
						var h = C.width - r,
							d = C.height - a,
							f = C.width - s,
							w = C.height - u,
							Q = g.borderTopWidth,
							U = g.borderRightWidth,
							E = g.borderBottomWidth,
							m = g.borderLeftWidth,
							F = YA(g.paddingTop, A.bounds.width),
							b = YA(g.paddingRight, A.bounds.width),
							v = YA(g.paddingBottom, A.bounds.width),
							H = YA(g.paddingLeft, A.bounds.width)
						;(this.topLeftBorderBox =
							I > 0 || t > 0
								? gt(C.left, C.top, I, t, WI.TOP_LEFT)
								: new jI(C.left, C.top)),
							(this.topRightBorderBox =
								r > 0 || o > 0
									? gt(C.left + h, C.top, r, o, WI.TOP_RIGHT)
									: new jI(C.left + C.width, C.top)),
							(this.bottomRightBorderBox =
								s > 0 || a > 0
									? gt(
											C.left + f,
											C.top + d,
											s,
											a,
											WI.BOTTOM_RIGHT
									  )
									: new jI(
											C.left + C.width,
											C.top + C.height
									  )),
							(this.bottomLeftBorderBox =
								l > 0 || u > 0
									? gt(
											C.left,
											C.top + w,
											l,
											u,
											WI.BOTTOM_LEFT
									  )
									: new jI(C.left, C.top + C.height)),
							(this.topLeftPaddingBox =
								I > 0 || t > 0
									? gt(
											C.left + m,
											C.top + Q,
											Math.max(0, I - m),
											Math.max(0, t - Q),
											WI.TOP_LEFT
									  )
									: new jI(C.left + m, C.top + Q)),
							(this.topRightPaddingBox =
								r > 0 || o > 0
									? gt(
											C.left + Math.min(h, C.width + m),
											C.top + Q,
											h > C.width + m ? 0 : r - m,
											o - Q,
											WI.TOP_RIGHT
									  )
									: new jI(C.left + C.width - U, C.top + Q)),
							(this.bottomRightPaddingBox =
								s > 0 || a > 0
									? gt(
											C.left + Math.min(f, C.width - m),
											C.top + Math.min(d, C.height + Q),
											Math.max(0, s - U),
											a - E,
											WI.BOTTOM_RIGHT
									  )
									: new jI(
											C.left + C.width - U,
											C.top + C.height - E
									  )),
							(this.bottomLeftPaddingBox =
								l > 0 || u > 0
									? gt(
											C.left + m,
											C.top + w,
											Math.max(0, l - m),
											u - E,
											WI.BOTTOM_LEFT
									  )
									: new jI(C.left + m, C.top + C.height - E)),
							(this.topLeftContentBox =
								I > 0 || t > 0
									? gt(
											C.left + m + H,
											C.top + Q + F,
											Math.max(0, I - (m + H)),
											Math.max(0, t - (Q + F)),
											WI.TOP_LEFT
									  )
									: new jI(C.left + m + H, C.top + Q + F)),
							(this.topRightContentBox =
								r > 0 || o > 0
									? gt(
											C.left +
												Math.min(h, C.width + m + H),
											C.top + Q + F,
											h > C.width + m + H ? 0 : r - m + H,
											o - (Q + F),
											WI.TOP_RIGHT
									  )
									: new jI(
											C.left + C.width - (U + b),
											C.top + Q + F
									  )),
							(this.bottomRightContentBox =
								s > 0 || a > 0
									? gt(
											C.left +
												Math.min(f, C.width - (m + H)),
											C.top +
												Math.min(d, C.height + Q + F),
											Math.max(0, s - (U + b)),
											a - (E + v),
											WI.BOTTOM_RIGHT
									  )
									: new jI(
											C.left + C.width - (U + b),
											C.top + C.height - (E + v)
									  )),
							(this.bottomLeftContentBox =
								l > 0 || u > 0
									? gt(
											C.left + m + H,
											C.top + w,
											Math.max(0, l - (m + H)),
											u - (E + v),
											WI.BOTTOM_LEFT
									  )
									: new jI(
											C.left + m + H,
											C.top + C.height - (E + v)
									  ))
					}
				!(function(A) {
					;(A[(A.TOP_LEFT = 0)] = 'TOP_LEFT'),
						(A[(A.TOP_RIGHT = 1)] = 'TOP_RIGHT'),
						(A[(A.BOTTOM_RIGHT = 2)] = 'BOTTOM_RIGHT'),
						(A[(A.BOTTOM_LEFT = 3)] = 'BOTTOM_LEFT')
				})(WI || (WI = {}))
				var gt = function(A, g, C, e, I) {
						var t = ((Math.sqrt(2) - 1) / 3) * 4,
							n = C * t,
							r = e * t,
							o = A + C,
							i = g + e
						switch (I) {
							case WI.TOP_LEFT:
								return new qI(
									new jI(A, i),
									new jI(A, i - r),
									new jI(o - n, g),
									new jI(o, g)
								)
							case WI.TOP_RIGHT:
								return new qI(
									new jI(A, g),
									new jI(A + n, g),
									new jI(o, i - r),
									new jI(o, i)
								)
							case WI.BOTTOM_RIGHT:
								return new qI(
									new jI(o, g),
									new jI(o, g + r),
									new jI(A + n, i),
									new jI(A, i)
								)
							case WI.BOTTOM_LEFT:
							default:
								return new qI(
									new jI(o, i),
									new jI(o - n, i),
									new jI(A, g + r),
									new jI(A, g)
								)
						}
					},
					Ct = function(A) {
						return [
							A.topLeftBorderBox,
							A.topRightBorderBox,
							A.bottomRightBorderBox,
							A.bottomLeftBorderBox
						]
					},
					et = function(A) {
						return [
							A.topLeftPaddingBox,
							A.topRightPaddingBox,
							A.bottomRightPaddingBox,
							A.bottomLeftPaddingBox
						]
					},
					It = function(A, g, C) {
						;(this.type = 0),
							(this.offsetX = A),
							(this.offsetY = g),
							(this.matrix = C),
							(this.target = 6)
					},
					tt = function(A, g) {
						;(this.type = 1), (this.target = g), (this.path = A)
					},
					nt = function(A) {
						;(this.element = A),
							(this.inlineLevel = []),
							(this.nonInlineLevel = []),
							(this.negativeZIndex = []),
							(this.zeroOrAutoZIndexOrTransformedOrOpacity = []),
							(this.positiveZIndex = []),
							(this.nonPositionedFloats = []),
							(this.nonPositionedInlineLevel = [])
					},
					rt = (function() {
						function A(A, g) {
							if (
								((this.container = A),
								(this.effects = g.slice(0)),
								(this.curves = new At(A)),
								null !== A.styles.transform)
							) {
								var C =
										A.bounds.left +
										A.styles.transformOrigin[0].number,
									e =
										A.bounds.top +
										A.styles.transformOrigin[1].number,
									I = A.styles.transform
								this.effects.push(new It(C, e, I))
							}
							if (A.styles.overflowX !== xC.VISIBLE) {
								var t = Ct(this.curves),
									n = et(this.curves)
								YI(t, n)
									? this.effects.push(new tt(t, 6))
									: (this.effects.push(new tt(t, 2)),
									  this.effects.push(new tt(n, 4)))
							}
						}
						return (
							(A.prototype.getParentEffects = function() {
								var A = this.effects.slice(0)
								if (
									this.container.styles.overflowX !==
									xC.VISIBLE
								) {
									var g = Ct(this.curves),
										C = et(this.curves)
									YI(g, C) || A.push(new tt(C, 6))
								}
								return A
							}),
							A
						)
					})(),
					ot = function(A, g, C, e) {
						A.container.elements.forEach(function(I) {
							var t = fe(I.flags, 4),
								n = fe(I.flags, 2),
								r = new rt(I, A.getParentEffects())
							fe(I.styles.display, 2048) && e.push(r)
							var o = fe(I.flags, 8) ? [] : e
							if (t || n) {
								var i = t || I.styles.isPositioned() ? C : g,
									s = new nt(r)
								if (
									I.styles.isPositioned() ||
									I.styles.opacity < 1 ||
									I.styles.isTransformed()
								) {
									var a = I.styles.zIndex.order
									if (a < 0) {
										var c = 0
										i.negativeZIndex.some(function(A, g) {
											return (
												a >
													A.element.container.styles
														.zIndex.order &&
												((c = g), !0)
											)
										}),
											i.negativeZIndex.splice(c, 0, s)
									} else if (a > 0) {
										var l = 0
										i.positiveZIndex.some(function(A, g) {
											return (
												a >
													A.element.container.styles
														.zIndex.order &&
												((l = g + 1), !0)
											)
										}),
											i.positiveZIndex.splice(l, 0, s)
									} else
										i.zeroOrAutoZIndexOrTransformedOrOpacity.push(
											s
										)
								} else
									I.styles.isFloating()
										? i.nonPositionedFloats.push(s)
										: i.nonPositionedInlineLevel.push(s)
								ot(r, s, t ? s : C, o)
							} else I.styles.isInlineLevel() ? g.inlineLevel.push(r) : g.nonInlineLevel.push(r), ot(r, g, C, o)
							fe(I.flags, 8) && it(I, o)
						})
					},
					it = function(A, g) {
						for (
							var C = A instanceof Ve ? A.start : 1,
								e = A instanceof Ve && A.reversed,
								I = 0;
							I < g.length;
							I++
						) {
							var t = g[I]
							t.container instanceof Ge &&
								'number' == typeof t.container.value &&
								0 !== t.container.value &&
								(C = t.container.value),
								(t.listValue = kI(
									C,
									t.container.styles.listStyleType,
									!0
								)),
								(C += e ? -1 : 1)
						}
					},
					st = function(A, g, C, e) {
						var I = []
						return (
							$I(A) ? I.push(A.subdivide(0.5, !1)) : I.push(A),
							$I(C) ? I.push(C.subdivide(0.5, !0)) : I.push(C),
							$I(e)
								? I.push(e.subdivide(0.5, !0).reverse())
								: I.push(e),
							$I(g)
								? I.push(g.subdivide(0.5, !1).reverse())
								: I.push(g),
							I
						)
					},
					at = function(A) {
						var g = A.bounds,
							C = A.styles
						return g.add(
							C.borderLeftWidth,
							C.borderTopWidth,
							-(C.borderRightWidth + C.borderLeftWidth),
							-(C.borderTopWidth + C.borderBottomWidth)
						)
					},
					ct = function(A) {
						var g = A.styles,
							C = A.bounds,
							e = YA(g.paddingLeft, C.width),
							I = YA(g.paddingRight, C.width),
							t = YA(g.paddingTop, C.width),
							n = YA(g.paddingBottom, C.width)
						return C.add(
							e + g.borderLeftWidth,
							t + g.borderTopWidth,
							-(g.borderRightWidth + g.borderLeftWidth + e + I),
							-(g.borderTopWidth + g.borderBottomWidth + t + n)
						)
					},
					lt = function(A, g, C) {
						var e,
							I,
							t =
								((e = ht(A.styles.backgroundOrigin, g)),
								(I = A),
								0 === e ? I.bounds : 2 === e ? ct(I) : at(I)),
							n = (function(A, g) {
								return A === og.BORDER_BOX
									? g.bounds
									: A === og.CONTENT_BOX
									? ct(g)
									: at(g)
							})(ht(A.styles.backgroundClip, g), A),
							r = pt(ht(A.styles.backgroundSize, g), C, t),
							o = r[0],
							i = r[1],
							s = WA(
								ht(A.styles.backgroundPosition, g),
								t.width - o,
								t.height - i
							),
							a = dt(
								ht(A.styles.backgroundRepeat, g),
								s,
								r,
								t,
								n
							),
							c = Math.round(t.left + s[0]),
							l = Math.round(t.top + s[1])
						return [a, c, l, o, i]
					},
					ut = function(A) {
						return kA(A) && A.value === Vg.AUTO
					},
					Bt = function(A) {
						return 'number' == typeof A
					},
					pt = function(A, g, C) {
						var e = g[0],
							I = g[1],
							t = g[2],
							n = A[0],
							r = A[1]
						if (zA(n) && r && zA(r))
							return [YA(n, C.width), YA(r, C.height)]
						var o = Bt(t)
						if (
							kA(n) &&
							(n.value === Vg.CONTAIN || n.value === Vg.COVER)
						) {
							if (Bt(t)) {
								var i = C.width / C.height
								return i < t != (n.value === Vg.COVER)
									? [C.width, C.width / t]
									: [C.height * t, C.height]
							}
							return [C.width, C.height]
						}
						var s = Bt(e),
							a = Bt(I),
							c = s || a
						if (ut(n) && (!r || ut(r))) {
							if (s && a) return [e, I]
							if (!o && !c) return [C.width, C.height]
							if (c && o) {
								var l = s ? e : I * t,
									u = a ? I : e / t
								return [l, u]
							}
							var B = s ? e : C.width,
								p = a ? I : C.height
							return [B, p]
						}
						if (o) {
							var h = 0,
								d = 0
							return (
								zA(n)
									? (h = YA(n, C.width))
									: zA(r) && (d = YA(r, C.height)),
								ut(n)
									? (h = d * t)
									: (r && !ut(r)) || (d = h / t),
								[h, d]
							)
						}
						var f = null,
							w = null
						if (
							(zA(n)
								? (f = YA(n, C.width))
								: r && zA(r) && (w = YA(r, C.height)),
							null === f ||
								(r && !ut(r)) ||
								(w = s && a ? (f / e) * I : C.height),
							null !== w &&
								ut(n) &&
								(f = s && a ? (w / I) * e : C.width),
							null !== f && null !== w)
						)
							return [f, w]
						throw new Error(
							'Unable to calculate background-size for element'
						)
					},
					ht = function(A, g) {
						var C = A[g]
						return void 0 === C ? A[0] : C
					},
					dt = function(A, g, C, e, I) {
						var t = g[0],
							n = g[1],
							r = C[0],
							o = C[1]
						switch (A) {
							case _g.REPEAT_X:
								return [
									new jI(
										Math.round(e.left),
										Math.round(e.top + n)
									),
									new jI(
										Math.round(e.left + e.width),
										Math.round(e.top + n)
									),
									new jI(
										Math.round(e.left + e.width),
										Math.round(o + e.top + n)
									),
									new jI(
										Math.round(e.left),
										Math.round(o + e.top + n)
									)
								]
							case _g.REPEAT_Y:
								return [
									new jI(
										Math.round(e.left + t),
										Math.round(e.top)
									),
									new jI(
										Math.round(e.left + t + r),
										Math.round(e.top)
									),
									new jI(
										Math.round(e.left + t + r),
										Math.round(e.height + e.top)
									),
									new jI(
										Math.round(e.left + t),
										Math.round(e.height + e.top)
									)
								]
							case _g.NO_REPEAT:
								return [
									new jI(
										Math.round(e.left + t),
										Math.round(e.top + n)
									),
									new jI(
										Math.round(e.left + t + r),
										Math.round(e.top + n)
									),
									new jI(
										Math.round(e.left + t + r),
										Math.round(e.top + n + o)
									),
									new jI(
										Math.round(e.left + t),
										Math.round(e.top + n + o)
									)
								]
							default:
								return [
									new jI(
										Math.round(I.left),
										Math.round(I.top)
									),
									new jI(
										Math.round(I.left + I.width),
										Math.round(I.top)
									),
									new jI(
										Math.round(I.left + I.width),
										Math.round(I.height + I.top)
									),
									new jI(
										Math.round(I.left),
										Math.round(I.height + I.top)
									)
								]
						}
					},
					ft = (function() {
						function A(A) {
							;(this._data = {}), (this._document = A)
						}
						return (
							(A.prototype.parseMetrics = function(A, g) {
								var C = this._document.createElement('div'),
									e = this._document.createElement('img'),
									I = this._document.createElement('span'),
									t = this._document.body
								;(C.style.visibility = 'hidden'),
									(C.style.fontFamily = A),
									(C.style.fontSize = g),
									(C.style.margin = '0'),
									(C.style.padding = '0'),
									t.appendChild(C),
									(e.src =
										'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'),
									(e.width = 1),
									(e.height = 1),
									(e.style.margin = '0'),
									(e.style.padding = '0'),
									(e.style.verticalAlign = 'baseline'),
									(I.style.fontFamily = A),
									(I.style.fontSize = g),
									(I.style.margin = '0'),
									(I.style.padding = '0'),
									I.appendChild(
										this._document.createTextNode(
											'Hidden Text'
										)
									),
									C.appendChild(I),
									C.appendChild(e)
								var n = e.offsetTop - I.offsetTop + 2
								C.removeChild(I),
									C.appendChild(
										this._document.createTextNode(
											'Hidden Text'
										)
									),
									(C.style.lineHeight = 'normal'),
									(e.style.verticalAlign = 'super')
								var r = e.offsetTop - C.offsetTop + 2
								return (
									t.removeChild(C), { baseline: n, middle: r }
								)
							}),
							(A.prototype.getMetrics = function(A, g) {
								var C = A + ' ' + g
								return (
									void 0 === this._data[C] &&
										(this._data[C] = this.parseMetrics(
											A,
											g
										)),
									this._data[C]
								)
							}),
							A
						)
					})(),
					wt = (function() {
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
								(this.fontMetrics = new ft(document)),
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
								vg
									.getInstance(A.id)
									.debug(
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
							(A.prototype.applyEffects = function(A, g) {
								for (var C = this; this._activeEffects.length; )
									this.popEffect()
								A.filter(function(A) {
									return fe(A.target, g)
								}).forEach(function(A) {
									return C.applyEffect(A)
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
								return e(this, void 0, void 0, function() {
									var g
									return I(this, function(C) {
										switch (C.label) {
											case 0:
												return (g =
													A.element.container
														.styles).isVisible()
													? ((this.ctx.globalAlpha =
															g.opacity),
													  [
															4,
															this.renderStackContent(
																A
															)
													  ])
													: [3, 2]
											case 1:
												C.sent(), (C.label = 2)
											case 2:
												return [2]
										}
									})
								})
							}),
							(A.prototype.renderNode = function(A) {
								return e(this, void 0, void 0, function() {
									return I(this, function(g) {
										switch (g.label) {
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
													g.sent(),
													[
														4,
														this.renderNodeContent(
															A
														)
													]
												)
											case 2:
												g.sent(), (g.label = 3)
											case 3:
												return [2]
										}
									})
								})
							}),
							(A.prototype.renderTextWithLetterSpacing = function(
								A,
								g
							) {
								var C = this
								if (0 === g)
									this.ctx.fillText(
										A.text,
										A.bounds.left,
										A.bounds.top + A.bounds.height
									)
								else {
									var e = r(A.text).map(function(A) {
										return o(A)
									})
									e.reduce(function(g, e) {
										return (
											C.ctx.fillText(
												e,
												g,
												A.bounds.top + A.bounds.height
											),
											g + C.ctx.measureText(e).width
										)
									}, A.bounds.left)
								}
							}),
							(A.prototype.createFontStyle = function(A) {
								var g = A.fontVariant
										.filter(function(A) {
											return (
												'normal' === A ||
												'small-caps' === A
											)
										})
										.join(''),
									C = A.fontFamily.join(', '),
									e = TA(A.fontSize)
										? '' +
										  A.fontSize.number +
										  A.fontSize.unit
										: A.fontSize.number + 'px'
								return [
									[A.fontStyle, g, A.fontWeight, e, C].join(
										' '
									),
									C,
									e
								]
							}),
							(A.prototype.renderTextNode = function(A, g) {
								return e(this, void 0, void 0, function() {
									var C,
										e,
										t,
										n,
										r = this
									return I(this, function(I) {
										return (
											(C = this.createFontStyle(g)),
											(e = C[0]),
											(t = C[1]),
											(n = C[2]),
											(this.ctx.font = e),
											A.textBounds.forEach(function(A) {
												;(r.ctx.fillStyle = Cg(
													g.color
												)),
													r.renderTextWithLetterSpacing(
														A,
														g.letterSpacing
													)
												var C = g.textShadow
												C.length &&
													A.text.trim().length &&
													(C.slice(0)
														.reverse()
														.forEach(function(g) {
															;(r.ctx.shadowColor = Cg(
																g.color
															)),
																(r.ctx.shadowOffsetX =
																	g.offsetX
																		.number *
																	r.options
																		.scale),
																(r.ctx.shadowOffsetY =
																	g.offsetY
																		.number *
																	r.options
																		.scale),
																(r.ctx.shadowBlur =
																	g.blur.number),
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
													g.textDecorationLine
														.length &&
														((r.ctx.fillStyle = Cg(
															g.textDecorationColor ||
																g.color
														)),
														g.textDecorationLine.forEach(
															function(g) {
																switch (g) {
																	case 1:
																		var C = r.fontMetrics.getMetrics(
																			t,
																			n
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
																					C
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
																		var e = r.fontMetrics.getMetrics(
																			t,
																			n
																		).middle
																		r.ctx.fillRect(
																			A
																				.bounds
																				.left,
																			Math.ceil(
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
								g,
								C
							) {
								if (
									C &&
									A.intrinsicWidth > 0 &&
									A.intrinsicHeight > 0
								) {
									var e = ct(A),
										I = et(g)
									this.path(I),
										this.ctx.save(),
										this.ctx.clip(),
										this.ctx.drawImage(
											C,
											0,
											0,
											A.intrinsicWidth,
											A.intrinsicHeight,
											e.left,
											e.top,
											e.width,
											e.height
										),
										this.ctx.restore()
								}
							}),
							(A.prototype.renderNodeContent = function(g) {
								return e(this, void 0, void 0, function() {
									var C, e, n, r, o, i, s, a, l, u, B, p, h, d
									return I(this, function(I) {
										switch (I.label) {
											case 0:
												this.applyEffects(g.effects, 4),
													(C = g.container),
													(e = g.curves),
													(n = C.styles),
													(r = 0),
													(o = C.textNodes),
													(I.label = 1)
											case 1:
												return r < o.length
													? ((i = o[r]),
													  [
															4,
															this.renderTextNode(
																i,
																n
															)
													  ])
													: [3, 4]
											case 2:
												I.sent(), (I.label = 3)
											case 3:
												return r++, [3, 1]
											case 4:
												if (!(C instanceof Se))
													return [3, 8]
												I.label = 5
											case 5:
												return (
													I.trys.push([5, 7, , 8]),
													[
														4,
														this.options.cache.match(
															C.src
														)
													]
												)
											case 6:
												return (
													(p = I.sent()),
													this.renderReplacedElement(
														C,
														e,
														p
													),
													[3, 8]
												)
											case 7:
												return (
													I.sent(),
													vg
														.getInstance(
															this.options.id
														)
														.error(
															'Error loading image ' +
																C.src
														),
													[3, 8]
												)
											case 8:
												if (
													(C instanceof Pe &&
														this.renderReplacedElement(
															C,
															e,
															C.canvas
														),
													!(C instanceof ze))
												)
													return [3, 12]
												I.label = 9
											case 9:
												return (
													I.trys.push([9, 11, , 12]),
													[
														4,
														this.options.cache.match(
															C.svg
														)
													]
												)
											case 10:
												return (
													(p = I.sent()),
													this.renderReplacedElement(
														C,
														e,
														p
													),
													[3, 12]
												)
											case 11:
												return (
													I.sent(),
													vg
														.getInstance(
															this.options.id
														)
														.error(
															'Error loading svg ' +
																C.svg.substring(
																	0,
																	255
																)
														),
													[3, 12]
												)
											case 12:
												return C instanceof eI && C.tree
													? [
															4,
															new A({
																id: this.options
																	.id,
																scale: this
																	.options
																	.scale,
																backgroundColor:
																	C.backgroundColor,
																x: 0,
																y: 0,
																scrollX: 0,
																scrollY: 0,
																width: C.width,
																height:
																	C.height,
																cache: this
																	.options
																	.cache,
																windowWidth:
																	C.width,
																windowHeight:
																	C.height
															}).render(C.tree)
													  ]
													: [3, 14]
											case 13:
												;(s = I.sent()),
													this.ctx.drawImage(
														s,
														0,
														0,
														C.width,
														C.width,
														C.bounds.left,
														C.bounds.top,
														C.bounds.width,
														C.bounds.height
													),
													(I.label = 14)
											case 14:
												if (
													(C instanceof $e &&
														((a = Math.min(
															C.bounds.width,
															C.bounds.height
														)),
														C.type === je
															? C.checked &&
															  (this.ctx.save(),
															  this.path([
																	new jI(
																		C.bounds
																			.left +
																			0.39363 *
																				a,
																		C.bounds
																			.top +
																			0.79 *
																				a
																	),
																	new jI(
																		C.bounds
																			.left +
																			0.16 *
																				a,
																		C.bounds
																			.top +
																			0.5549 *
																				a
																	),
																	new jI(
																		C.bounds
																			.left +
																			0.27347 *
																				a,
																		C.bounds
																			.top +
																			0.44071 *
																				a
																	),
																	new jI(
																		C.bounds
																			.left +
																			0.39694 *
																				a,
																		C.bounds
																			.top +
																			0.5649 *
																				a
																	),
																	new jI(
																		C.bounds
																			.left +
																			0.72983 *
																				a,
																		C.bounds
																			.top +
																			0.23 *
																				a
																	),
																	new jI(
																		C.bounds
																			.left +
																			0.84 *
																				a,
																		C.bounds
																			.top +
																			0.34085 *
																				a
																	),
																	new jI(
																		C.bounds
																			.left +
																			0.39363 *
																				a,
																		C.bounds
																			.top +
																			0.79 *
																				a
																	)
															  ]),
															  (this.ctx.fillStyle = Cg(
																	707406591
															  )),
															  this.ctx.fill(),
															  this.ctx.restore())
															: C.type === Ze &&
															  C.checked &&
															  (this.ctx.save(),
															  this.ctx.beginPath(),
															  this.ctx.arc(
																	C.bounds
																		.left +
																		a / 2,
																	C.bounds
																		.top +
																		a / 2,
																	a / 4,
																	0,
																	2 * Math.PI,
																	!0
															  ),
															  (this.ctx.fillStyle = Cg(
																	707406591
															  )),
															  this.ctx.fill(),
															  this.ctx.restore())),
													Qt(C) && C.value.length)
												) {
													switch (
														((this.ctx.font = this.createFontStyle(
															n
														)[0]),
														(this.ctx.fillStyle = Cg(
															n.color
														)),
														(this.ctx.textBaseline =
															'middle'),
														(this.ctx.textAlign = Et(
															C.styles.textAlign
														)),
														(d = ct(C)),
														(l = 0),
														C.styles.textAlign)
													) {
														case _C.CENTER:
															l += d.width / 2
															break
														case _C.RIGHT:
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
															new jI(
																d.left,
																d.top
															),
															new jI(
																d.left +
																	d.width,
																d.top
															),
															new jI(
																d.left +
																	d.width,
																d.top + d.height
															),
															new jI(
																d.left,
																d.top + d.height
															)
														]),
														this.ctx.clip(),
														this.renderTextWithLetterSpacing(
															new ye(C.value, u),
															n.letterSpacing
														),
														this.ctx.restore(),
														(this.ctx.textBaseline =
															'bottom'),
														(this.ctx.textAlign =
															'left')
												}
												if (!fe(C.styles.display, 2048))
													return [3, 20]
												if (
													null ===
													C.styles.listStyleImage
												)
													return [3, 19]
												if (
													(B =
														C.styles.listStyleImage)
														.type !== cg.URL
												)
													return [3, 18]
												;(p = void 0),
													(h = B.url),
													(I.label = 15)
											case 15:
												return (
													I.trys.push([15, 17, , 18]),
													[
														4,
														this.options.cache.match(
															h
														)
													]
												)
											case 16:
												return (
													(p = I.sent()),
													this.ctx.drawImage(
														p,
														C.bounds.left -
															(p.width + 10),
														C.bounds.top
													),
													[3, 18]
												)
											case 17:
												return (
													I.sent(),
													vg
														.getInstance(
															this.options.id
														)
														.error(
															'Error loading list-style-image ' +
																h
														),
													[3, 18]
												)
											case 18:
												return [3, 20]
											case 19:
												g.listValue &&
													C.styles.listStyleType !==
														HC.NONE &&
													((this.ctx.font = this.createFontStyle(
														n
													)[0]),
													(this.ctx.fillStyle = Cg(
														n.color
													)),
													(this.ctx.textBaseline =
														'middle'),
													(this.ctx.textAlign =
														'right'),
													(d = new t(
														C.bounds.left,
														C.bounds.top +
															YA(
																C.styles
																	.paddingTop,
																C.bounds.width
															),
														C.bounds.width,
														((f = n.lineHeight),
														(w = n.fontSize.number),
														(kA(f) &&
														'normal' === f.value
															? 1.2 * w
															: f.type ===
															  c.NUMBER_TOKEN
															? w * f.number
															: zA(f)
															? YA(f, w)
															: w) /
															2 +
															1)
													)),
													this.renderTextWithLetterSpacing(
														new ye(g.listValue, d),
														n.letterSpacing
													),
													(this.ctx.textBaseline =
														'bottom'),
													(this.ctx.textAlign =
														'left')),
													(I.label = 20)
											case 20:
												return [2]
										}
										var f, w
									})
								})
							}),
							(A.prototype.renderStackContent = function(A) {
								return e(this, void 0, void 0, function() {
									var g,
										C,
										e,
										t,
										n,
										r,
										o,
										i,
										s,
										a,
										c,
										l,
										u,
										B,
										p
									return I(this, function(I) {
										switch (I.label) {
											case 0:
												return [
													4,
													this.renderNodeBackgroundAndBorders(
														A.element
													)
												]
											case 1:
												I.sent(),
													(g = 0),
													(C = A.negativeZIndex),
													(I.label = 2)
											case 2:
												return g < C.length
													? ((p = C[g]),
													  [4, this.renderStack(p)])
													: [3, 5]
											case 3:
												I.sent(), (I.label = 4)
											case 4:
												return g++, [3, 2]
											case 5:
												return [
													4,
													this.renderNodeContent(
														A.element
													)
												]
											case 6:
												I.sent(),
													(e = 0),
													(t = A.nonInlineLevel),
													(I.label = 7)
											case 7:
												return e < t.length
													? ((p = t[e]),
													  [4, this.renderNode(p)])
													: [3, 10]
											case 8:
												I.sent(), (I.label = 9)
											case 9:
												return e++, [3, 7]
											case 10:
												;(n = 0),
													(r = A.nonPositionedFloats),
													(I.label = 11)
											case 11:
												return n < r.length
													? ((p = r[n]),
													  [4, this.renderStack(p)])
													: [3, 14]
											case 12:
												I.sent(), (I.label = 13)
											case 13:
												return n++, [3, 11]
											case 14:
												;(o = 0),
													(i =
														A.nonPositionedInlineLevel),
													(I.label = 15)
											case 15:
												return o < i.length
													? ((p = i[o]),
													  [4, this.renderStack(p)])
													: [3, 18]
											case 16:
												I.sent(), (I.label = 17)
											case 17:
												return o++, [3, 15]
											case 18:
												;(s = 0),
													(a = A.inlineLevel),
													(I.label = 19)
											case 19:
												return s < a.length
													? ((p = a[s]),
													  [4, this.renderNode(p)])
													: [3, 22]
											case 20:
												I.sent(), (I.label = 21)
											case 21:
												return s++, [3, 19]
											case 22:
												;(c = 0),
													(l =
														A.zeroOrAutoZIndexOrTransformedOrOpacity),
													(I.label = 23)
											case 23:
												return c < l.length
													? ((p = l[c]),
													  [4, this.renderStack(p)])
													: [3, 26]
											case 24:
												I.sent(), (I.label = 25)
											case 25:
												return c++, [3, 23]
											case 26:
												;(u = 0),
													(B = A.positiveZIndex),
													(I.label = 27)
											case 27:
												return u < B.length
													? ((p = B[u]),
													  [4, this.renderStack(p)])
													: [3, 30]
											case 28:
												I.sent(), (I.label = 29)
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
								var g = this
								A.forEach(function(A, C) {
									var e = $I(A) ? A.start : A
									0 === C
										? g.ctx.moveTo(e.x, e.y)
										: g.ctx.lineTo(e.x, e.y),
										$I(A) &&
											g.ctx.bezierCurveTo(
												A.startControl.x,
												A.startControl.y,
												A.endControl.x,
												A.endControl.y,
												A.end.x,
												A.end.y
											)
								})
							}),
							(A.prototype.renderRepeat = function(A, g, C, e) {
								this.path(A),
									(this.ctx.fillStyle = g),
									this.ctx.translate(C, e),
									this.ctx.fill(),
									this.ctx.translate(-C, -e)
							}),
							(A.prototype.resizeImage = function(A, g, C) {
								if (A.width === g && A.height === C) return A
								var e = this.canvas.ownerDocument.createElement(
									'canvas'
								)
								;(e.width = g), (e.height = C)
								var I = e.getContext('2d')
								return (
									I.drawImage(
										A,
										0,
										0,
										A.width,
										A.height,
										0,
										0,
										g,
										C
									),
									e
								)
							}),
							(A.prototype.renderBackgroundImage = function(A) {
								return e(this, void 0, void 0, function() {
									var g, C, e, t, n, r
									return I(this, function(o) {
										switch (o.label) {
											case 0:
												;(g =
													A.styles.backgroundImage
														.length - 1),
													(C = function(C) {
														var t,
															n,
															r,
															o,
															i,
															s,
															a,
															c,
															l,
															u,
															B,
															p,
															h,
															d,
															f,
															w,
															Q,
															U,
															E,
															m,
															F,
															b,
															v,
															H,
															N,
															x,
															y,
															K,
															T,
															R,
															k
														return I(this, function(
															I
														) {
															switch (I.label) {
																case 0:
																	if (
																		C.type !==
																		cg.URL
																	)
																		return [
																			3,
																			5
																		]
																	;(t = void 0),
																		(n =
																			C.url),
																		(I.label = 1)
																case 1:
																	return (
																		I.trys.push(
																			[
																				1,
																				3,
																				,
																				4
																			]
																		),
																		[
																			4,
																			e.options.cache.match(
																				n
																			)
																		]
																	)
																case 2:
																	return (
																		(t = I.sent()),
																		[3, 4]
																	)
																case 3:
																	return (
																		I.sent(),
																		vg
																			.getInstance(
																				e
																					.options
																					.id
																			)
																			.error(
																				'Error loading background-image ' +
																					n
																			),
																		[3, 4]
																	)
																case 4:
																	return (
																		t &&
																			((r = lt(
																				A,
																				g,
																				[
																					t.width,
																					t.height,
																					t.width /
																						t.height
																				]
																			)),
																			(w =
																				r[0]),
																			(b =
																				r[1]),
																			(v =
																				r[2]),
																			(E =
																				r[3]),
																			(m =
																				r[4]),
																			(d = e.ctx.createPattern(
																				e.resizeImage(
																					t,
																					E,
																					m
																				),
																				'repeat'
																			)),
																			e.renderRepeat(
																				w,
																				d,
																				b,
																				v
																			)),
																		[3, 6]
																	)
																case 5:
																	C.type ===
																	cg.LINEAR_GRADIENT
																		? ((o = lt(
																				A,
																				g,
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
																		  (v =
																				o[2]),
																		  (E =
																				o[3]),
																		  (m =
																				o[4]),
																		  (i = fg(
																				C.angle,
																				E,
																				m
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
																		  ((B = document.createElement(
																				'canvas'
																		  )).width = E),
																		  (B.height = m),
																		  (p = B.getContext(
																				'2d'
																		  )),
																		  (h = p.createLinearGradient(
																				a,
																				l,
																				c,
																				u
																		  )),
																		  dg(
																				C.stops,
																				s
																		  ).forEach(
																				function(
																					A
																				) {
																					return h.addColorStop(
																						A.stop,
																						Cg(
																							A.color
																						)
																					)
																				}
																		  ),
																		  (p.fillStyle = h),
																		  p.fillRect(
																				0,
																				0,
																				E,
																				m
																		  ),
																		  (d = e.ctx.createPattern(
																				B,
																				'repeat'
																		  )),
																		  e.renderRepeat(
																				w,
																				d,
																				b,
																				v
																		  ))
																		: (function(
																				A
																		  ) {
																				return (
																					A.type ===
																					cg.RADIAL_GRADIENT
																				)
																		  })(
																				C
																		  ) &&
																		  ((f = lt(
																				A,
																				g,
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
																		  (U =
																				f[2]),
																		  (E =
																				f[3]),
																		  (m =
																				f[4]),
																		  (F =
																				0 ===
																				C
																					.position
																					.length
																					? [
																							XA
																					  ]
																					: C.position),
																		  (b = YA(
																				F[0],
																				E
																		  )),
																		  (v = YA(
																				F[
																					F.length -
																						1
																				],
																				m
																		  )),
																		  (H = (function(
																				A,
																				g,
																				C,
																				e,
																				I
																		  ) {
																				var t = 0,
																					n = 0
																				switch (
																					A.size
																				) {
																					case ug.CLOSEST_SIDE:
																						A.shape ===
																						lg.CIRCLE
																							? (t = n = Math.min(
																									Math.abs(
																										g
																									),
																									Math.abs(
																										g -
																											e
																									),
																									Math.abs(
																										C
																									),
																									Math.abs(
																										C -
																											I
																									)
																							  ))
																							: A.shape ===
																									lg.ELLIPSE &&
																							  ((t = Math.min(
																									Math.abs(
																										g
																									),
																									Math.abs(
																										g -
																											e
																									)
																							  )),
																							  (n = Math.min(
																									Math.abs(
																										C
																									),
																									Math.abs(
																										C -
																											I
																									)
																							  )))
																						break
																					case ug.CLOSEST_CORNER:
																						if (
																							A.shape ===
																							lg.CIRCLE
																						)
																							t = n = Math.min(
																								wg(
																									g,
																									C
																								),
																								wg(
																									g,
																									C -
																										I
																								),
																								wg(
																									g -
																										e,
																									C
																								),
																								wg(
																									g -
																										e,
																									C -
																										I
																								)
																							)
																						else if (
																							A.shape ===
																							lg.ELLIPSE
																						) {
																							var r =
																									Math.min(
																										Math.abs(
																											C
																										),
																										Math.abs(
																											C -
																												I
																										)
																									) /
																									Math.min(
																										Math.abs(
																											g
																										),
																										Math.abs(
																											g -
																												e
																										)
																									),
																								o = Qg(
																									e,
																									I,
																									g,
																									C,
																									!0
																								),
																								i =
																									o[0],
																								s =
																									o[1]
																							;(t = wg(
																								i -
																									g,
																								(s -
																									C) /
																									r
																							)),
																								(n =
																									r *
																									t)
																						}
																						break
																					case ug.FARTHEST_SIDE:
																						A.shape ===
																						lg.CIRCLE
																							? (t = n = Math.max(
																									Math.abs(
																										g
																									),
																									Math.abs(
																										g -
																											e
																									),
																									Math.abs(
																										C
																									),
																									Math.abs(
																										C -
																											I
																									)
																							  ))
																							: A.shape ===
																									lg.ELLIPSE &&
																							  ((t = Math.max(
																									Math.abs(
																										g
																									),
																									Math.abs(
																										g -
																											e
																									)
																							  )),
																							  (n = Math.max(
																									Math.abs(
																										C
																									),
																									Math.abs(
																										C -
																											I
																									)
																							  )))
																						break
																					case ug.FARTHEST_CORNER:
																						if (
																							A.shape ===
																							lg.CIRCLE
																						)
																							t = n = Math.max(
																								wg(
																									g,
																									C
																								),
																								wg(
																									g,
																									C -
																										I
																								),
																								wg(
																									g -
																										e,
																									C
																								),
																								wg(
																									g -
																										e,
																									C -
																										I
																								)
																							)
																						else if (
																							A.shape ===
																							lg.ELLIPSE
																						) {
																							var r =
																									Math.max(
																										Math.abs(
																											C
																										),
																										Math.abs(
																											C -
																												I
																										)
																									) /
																									Math.max(
																										Math.abs(
																											g
																										),
																										Math.abs(
																											g -
																												e
																										)
																									),
																								a = Qg(
																									e,
																									I,
																									g,
																									C,
																									!1
																								),
																								i =
																									a[0],
																								s =
																									a[1]
																							;(t = wg(
																								i -
																									g,
																								(s -
																									C) /
																									r
																							)),
																								(n =
																									r *
																									t)
																						}
																				}
																				return (
																					Array.isArray(
																						A.size
																					) &&
																						((t = YA(
																							A
																								.size[0],
																							e
																						)),
																						(n =
																							2 ===
																							A
																								.size
																								.length
																								? YA(
																										A
																											.size[1],
																										I
																								  )
																								: t)),
																					[
																						t,
																						n
																					]
																				)
																		  })(
																				C,
																				b,
																				v,
																				E,
																				m
																		  )),
																		  (N =
																				H[0]),
																		  (x =
																				H[1]),
																		  N >
																				0 &&
																				N >
																					0 &&
																				((y = e.ctx.createRadialGradient(
																					Q +
																						b,
																					U +
																						v,
																					0,
																					Q +
																						b,
																					U +
																						v,
																					N
																				)),
																				dg(
																					C.stops,
																					2 *
																						N
																				).forEach(
																					function(
																						A
																					) {
																						return y.addColorStop(
																							A.stop,
																							Cg(
																								A.color
																							)
																						)
																					}
																				),
																				e.path(
																					w
																				),
																				(e.ctx.fillStyle = y),
																				N !==
																				x
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
																							(R =
																								x /
																								N)),
																					  e.ctx.save(),
																					  e.ctx.translate(
																							K,
																							T
																					  ),
																					  e.ctx.transform(
																							1,
																							0,
																							0,
																							R,
																							0,
																							0
																					  ),
																					  e.ctx.translate(
																							-K,
																							-T
																					  ),
																					  e.ctx.fillRect(
																							Q,
																							k *
																								(U -
																									T) +
																								T,
																							E,
																							m *
																								k
																					  ),
																					  e.ctx.restore())
																					: e.ctx.fill())),
																		(I.label = 6)
																case 6:
																	return (
																		g--, [2]
																	)
															}
														})
													}),
													(e = this),
													(t = 0),
													(n = A.styles.backgroundImage
														.slice(0)
														.reverse()),
													(o.label = 1)
											case 1:
												return t < n.length
													? ((r = n[t]), [5, C(r)])
													: [3, 4]
											case 2:
												o.sent(), (o.label = 3)
											case 3:
												return t++, [3, 1]
											case 4:
												return [2]
										}
									})
								})
							}),
							(A.prototype.renderBorder = function(A, g, C) {
								return e(this, void 0, void 0, function() {
									return I(this, function(e) {
										return (
											this.path(
												(function(A, g) {
													switch (g) {
														case 0:
															return st(
																A.topLeftBorderBox,
																A.topLeftPaddingBox,
																A.topRightBorderBox,
																A.topRightPaddingBox
															)
														case 1:
															return st(
																A.topRightBorderBox,
																A.topRightPaddingBox,
																A.bottomRightBorderBox,
																A.bottomRightPaddingBox
															)
														case 2:
															return st(
																A.bottomRightBorderBox,
																A.bottomRightPaddingBox,
																A.bottomLeftBorderBox,
																A.bottomLeftPaddingBox
															)
														case 3:
														default:
															return st(
																A.bottomLeftBorderBox,
																A.bottomLeftPaddingBox,
																A.topLeftBorderBox,
																A.topLeftPaddingBox
															)
													}
												})(C, g)
											),
											(this.ctx.fillStyle = Cg(A)),
											this.ctx.fill(),
											[2]
										)
									})
								})
							}),
							(A.prototype.renderNodeBackgroundAndBorders = function(
								A
							) {
								return e(this, void 0, void 0, function() {
									var g,
										C,
										e,
										t,
										n,
										r,
										o,
										i,
										s = this
									return I(this, function(I) {
										switch (I.label) {
											case 0:
												return (
													this.applyEffects(
														A.effects,
														2
													),
													(g = A.container.styles),
													(C =
														!gg(
															g.backgroundColor
														) ||
														g.backgroundImage
															.length),
													(e = [
														{
															style:
																g.borderTopStyle,
															color:
																g.borderTopColor
														},
														{
															style:
																g.borderRightStyle,
															color:
																g.borderRightColor
														},
														{
															style:
																g.borderBottomStyle,
															color:
																g.borderBottomColor
														},
														{
															style:
																g.borderLeftStyle,
															color:
																g.borderLeftColor
														}
													]),
													(t = Ut(
														ht(g.backgroundClip, 0),
														A.curves
													)),
													C || g.boxShadow.length
														? (this.ctx.save(),
														  this.path(t),
														  this.ctx.clip(),
														  gg(
																g.backgroundColor
														  ) ||
																((this.ctx.fillStyle = Cg(
																	g.backgroundColor
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
												I.sent(),
													this.ctx.restore(),
													g.boxShadow
														.slice(0)
														.reverse()
														.forEach(function(g) {
															s.ctx.save()
															var C,
																e,
																I,
																t,
																n,
																r = Ct(
																	A.curves
																),
																o = g.inset
																	? 0
																	: 1e4,
																i =
																	((C = r),
																	(e =
																		-o +
																		(g.inset
																			? 1
																			: -1) *
																			g
																				.spread
																				.number),
																	(I =
																		(g.inset
																			? 1
																			: -1) *
																		g.spread
																			.number),
																	(t =
																		g.spread
																			.number *
																		(g.inset
																			? -2
																			: 2)),
																	(n =
																		g.spread
																			.number *
																		(g.inset
																			? -2
																			: 2)),
																	C.map(
																		function(
																			A,
																			g
																		) {
																			switch (
																				g
																			) {
																				case 0:
																					return A.add(
																						e,
																						I
																					)
																				case 1:
																					return A.add(
																						e +
																							t,
																						I
																					)
																				case 2:
																					return A.add(
																						e +
																							t,
																						I +
																							n
																					)
																				case 3:
																					return A.add(
																						e,
																						I +
																							n
																					)
																			}
																			return A
																		}
																	))
															g.inset
																? (s.path(r),
																  s.ctx.clip(),
																  s.mask(i))
																: (s.mask(r),
																  s.ctx.clip(),
																  s.path(i)),
																(s.ctx.shadowOffsetX =
																	g.offsetX
																		.number +
																	o),
																(s.ctx.shadowOffsetY =
																	g.offsetY.number),
																(s.ctx.shadowColor = Cg(
																	g.color
																)),
																(s.ctx.shadowBlur =
																	g.blur.number),
																(s.ctx.fillStyle = g.inset
																	? Cg(
																			g.color
																	  )
																	: 'rgba(0,0,0,1)'),
																s.ctx.fill(),
																s.ctx.restore()
														}),
													(I.label = 2)
											case 2:
												;(n = 0),
													(r = 0),
													(o = e),
													(I.label = 3)
											case 3:
												return r < o.length
													? (i = o[r]).style ===
															Wg.NONE ||
													  gg(i.color)
														? [3, 5]
														: [
																4,
																this.renderBorder(
																	i.color,
																	n++,
																	A.curves
																)
														  ]
													: [3, 6]
											case 4:
												I.sent(), (I.label = 5)
											case 5:
												return r++, [3, 3]
											case 6:
												return [2]
										}
									})
								})
							}),
							(A.prototype.render = function(A) {
								return e(this, void 0, void 0, function() {
									var g
									return I(this, function(C) {
										switch (C.label) {
											case 0:
												return (
													this.options
														.backgroundColor &&
														((this.ctx.fillStyle = Cg(
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
													(e = new rt(A, [])),
													(I = new nt(e)),
													ot(e, I, I, (t = [])),
													it(e.container, t),
													(g = I),
													[4, this.renderStack(g)]
												)
											case 1:
												return (
													C.sent(),
													this.applyEffects([], 2),
													[2, this.canvas]
												)
										}
										var e, I, t
									})
								})
							}),
							A
						)
					})(),
					Qt = function(A) {
						return (
							A instanceof gI ||
							A instanceof AI ||
							(A instanceof $e && A.type !== Ze && A.type !== je)
						)
					},
					Ut = function(A, g) {
						switch (A) {
							case og.BORDER_BOX:
								return Ct(g)
							case og.CONTENT_BOX:
								return (function(A) {
									return [
										A.topLeftContentBox,
										A.topRightContentBox,
										A.bottomRightContentBox,
										A.bottomLeftContentBox
									]
								})(g)
							case og.PADDING_BOX:
							default:
								return et(g)
						}
					},
					Et = function(A) {
						switch (A) {
							case _C.CENTER:
								return 'center'
							case _C.RIGHT:
								return 'right'
							case _C.LEFT:
							default:
								return 'left'
						}
					},
					mt = (function() {
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
								vg
									.getInstance(A.id)
									.debug(
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
								return e(this, void 0, void 0, function() {
									var g, C
									return I(this, function(e) {
										switch (e.label) {
											case 0:
												return (
													(g = mg(
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
													[4, Ft(g)]
												)
											case 1:
												return (
													(C = e.sent()),
													this.options
														.backgroundColor &&
														((this.ctx.fillStyle = Cg(
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
														C,
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
					Ft = function(A) {
						return new Promise(function(g, C) {
							var e = new Image()
							;(e.onload = function() {
								g(e)
							}),
								(e.onerror = C),
								(e.src =
									'data:image/svg+xml;charset=utf-8,' +
									encodeURIComponent(
										new XMLSerializer().serializeToString(A)
									))
						})
					},
					bt = void 0,
					vt = function(A) {
						return Ag.parse(KA.create(A).parseComponentValue())
					}
				Hg.setContext(window)
				var Ht = function(A, g) {
						return e(bt, void 0, void 0, function() {
							var e,
								r,
								o,
								i,
								s,
								a,
								c,
								l,
								u,
								B,
								p,
								h,
								d,
								f,
								w,
								Q,
								U,
								E,
								m,
								F,
								b,
								v,
								H
							return I(this, function(I) {
								switch (I.label) {
									case 0:
										if (!(e = A.ownerDocument))
											throw new Error(
												'Element is not attached to a Document'
											)
										if (!(r = e.defaultView))
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
												hI(A) || 'HTML' === A.tagName
													? (function(A) {
															var g = A.body,
																C =
																	A.documentElement
															if (!g || !C)
																throw new Error(
																	'Unable to get document size'
																)
															var e = Math.max(
																	Math.max(
																		g.scrollWidth,
																		C.scrollWidth
																	),
																	Math.max(
																		g.offsetWidth,
																		C.offsetWidth
																	),
																	Math.max(
																		g.clientWidth,
																		C.clientWidth
																	)
																),
																I = Math.max(
																	Math.max(
																		g.scrollHeight,
																		C.scrollHeight
																	),
																	Math.max(
																		g.offsetHeight,
																		C.offsetHeight
																	),
																	Math.max(
																		g.clientHeight,
																		C.clientHeight
																	)
																)
															return new t(
																0,
																0,
																e,
																I
															)
													  })(e)
													: n(A)),
											(s = i.width),
											(a = i.height),
											(c = i.left),
											(l = i.top),
											(u = C(
												{},
												{
													allowTaint: !1,
													imageTimeout: 15e3,
													proxy: void 0,
													useCORS: !1
												},
												g
											)),
											(B = {
												backgroundColor: '#ffffff',
												cache: g.cache
													? g.cache
													: Hg.create(o, u),
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
											(p = C({}, B, u, g)),
											(h = new t(
												p.scrollX,
												p.scrollY,
												p.windowWidth,
												p.windowHeight
											)),
											vg.create(o),
											vg
												.getInstance(o)
												.debug(
													'Starting document clone'
												),
											(d = new LI(A, {
												id: o,
												onclone: p.onclone,
												ignoreElements:
													p.ignoreElements,
												inlineImages:
													p.foreignObjectRendering,
												copyStyles:
													p.foreignObjectRendering
											})),
											(f = d.clonedReferenceElement)
												? [4, d.toIFrame(e, h)]
												: [
														2,
														Promise.reject(
															'Unable to find element in cloned iframe'
														)
												  ]
										)
									case 1:
										return (
											(w = I.sent()),
											(Q = e.documentElement
												? vt(
														getComputedStyle(
															e.documentElement
														).backgroundColor
												  )
												: ag.TRANSPARENT),
											(U = e.body
												? vt(
														getComputedStyle(e.body)
															.backgroundColor
												  )
												: ag.TRANSPARENT),
											(E = g.backgroundColor),
											(m =
												'string' == typeof E
													? vt(E)
													: 4294967295),
											(F =
												A === e.documentElement
													? gg(Q)
														? gg(U)
															? m
															: U
														: Q
													: m),
											(b = {
												id: o,
												cache: p.cache,
												backgroundColor: F,
												scale: p.scale,
												x: p.x,
												y: p.y,
												scrollX: p.scrollX,
												scrollY: p.scrollY,
												width: p.width,
												height: p.height,
												windowWidth: p.windowWidth,
												windowHeight: p.windowHeight
											}),
											p.foreignObjectRendering
												? (vg
														.getInstance(o)
														.debug(
															'Document cloned, using foreign object rendering'
														),
												  [4, new mt(b).render(f)])
												: [3, 3]
										)
									case 2:
										return (v = I.sent()), [3, 5]
									case 3:
										return (
											vg
												.getInstance(o)
												.debug(
													'Document cloned, using computed rendering'
												),
											Hg.attachInstance(p.cache),
											vg
												.getInstance(o)
												.debug('Starting DOM parsing'),
											(H = rI(f)),
											Hg.detachInstance(),
											F === H.styles.backgroundColor &&
												(H.styles.backgroundColor =
													ag.TRANSPARENT),
											vg
												.getInstance(o)
												.debug('Starting renderer'),
											[4, new wt(b).render(H)]
										)
									case 4:
										;(v = I.sent()), (I.label = 5)
									case 5:
										return (
											!0 === p.removeContainer &&
												(Nt(w) ||
													vg
														.getInstance(o)
														.error(
															'Cannot detach cloned iframe as it is not in the DOM anymore'
														)),
											vg
												.getInstance(o)
												.debug('Finished rendering'),
											vg.destroy(o),
											Hg.destroy(o),
											[2, v]
										)
								}
							})
						})
					},
					Nt = function(A) {
						return (
							!!A.parentNode && (A.parentNode.removeChild(A), !0)
						)
					}
				return function(A, g) {
					return void 0 === g && (g = {}), Ht(A, g)
				}
			})()
		},
		,
		,
		,
		,
		,
		function(A, g, C) {
			A.exports = C(121)
		},
		function(A, g, C) {
			C(93), C(124), (A.exports = C(4).Array.from)
		},
		function(A, g, C) {
			var e = C(25),
				I = C(24)
			A.exports = function(A) {
				return function(g, C) {
					var t,
						n,
						r = String(I(g)),
						o = e(C),
						i = r.length
					return o < 0 || o >= i
						? A
							? ''
							: void 0
						: (t = r.charCodeAt(o)) < 55296 ||
						  t > 56319 ||
						  o + 1 === i ||
						  (n = r.charCodeAt(o + 1)) < 56320 ||
						  n > 57343
						? A
							? r.charAt(o)
							: t
						: A
						? r.slice(o, o + 2)
						: n - 56320 + ((t - 55296) << 10) + 65536
				}
			}
		},
		function(A, g, C) {
			'use strict'
			var e = C(81),
				I = C(21),
				t = C(44),
				n = {}
			C(16)(n, C(8)('iterator'), function() {
				return this
			}),
				(A.exports = function(A, g, C) {
					;(A.prototype = e(n, { next: I(1, C) })),
						t(A, g + ' Iterator')
				})
		},
		function(A, g, C) {
			'use strict'
			var e = C(20),
				I = C(15),
				t = C(37),
				n = C(96),
				r = C(97),
				o = C(36),
				i = C(125),
				s = C(98)
			I(
				I.S +
					I.F *
						!C(100)(function(A) {
							Array.from(A)
						}),
				'Array',
				{
					from: function(A) {
						var g,
							C,
							I,
							a,
							c = t(A),
							l = 'function' == typeof this ? this : Array,
							u = arguments.length,
							B = u > 1 ? arguments[1] : void 0,
							p = void 0 !== B,
							h = 0,
							d = s(c)
						if (
							(p && (B = e(B, u > 2 ? arguments[2] : void 0, 2)),
							null == d || (l == Array && r(d)))
						)
							for (C = new l((g = o(c.length))); g > h; h++)
								i(C, h, p ? B(c[h], h) : c[h])
						else
							for (
								a = d.call(c), C = new l();
								!(I = a.next()).done;
								h++
							)
								i(C, h, p ? n(a, B, [I.value, h], !0) : I.value)
						return (C.length = h), C
					}
				}
			)
		},
		function(A, g, C) {
			'use strict'
			var e = C(7),
				I = C(21)
			A.exports = function(A, g, C) {
				g in A ? e.f(A, g, I(0, C)) : (A[g] = C)
			}
		},
		function(A, g, C) {
			'use strict'
			var e = C(47)
			C.n(e).a
		},
		function(A, g, C) {
			g = A.exports = C(2)(!1)
			var e = C(43),
				I = e(C(101)),
				t = e(C(128))
			g.push([
				A.i,
				'.fill-in-block-question-setting[data-v-5657130d] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10;\n}\n.fill-in-block-question-setting-content[data-v-5657130d] {\n  width: 448px;\n  height: 222px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -130px;\n  margin-top: -70px;\n  background: #fff;\n  border-radius: 4px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 30px;\n}\n.fill-in-block-question-setting-header[data-v-5657130d] {\n  height: 30px;\n  text-align: center;\n  position: relative;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  line-height: 30px;\n  font-size: 20px;\n  margin-bottom: 30px;\n  color: #333333;\n}\n.fill-in-block-question-setting-header-close[data-v-5657130d] {\n  position: absolute;\n  right: 0px;\n  top: 7px;\n  width: 16px;\n  height: 16px;\n  background-image: url(' +
					I +
					');\n  background-repeat: no-repeat;\n}\n.fill-in-block-question-setting-body[data-v-5657130d] {\n  height: 70px;\n  text-align: left;\n  color: #222222;\n  font-size: 14px;\n}\n.fill-in-block-question-setting-body-selector[data-v-5657130d] {\n  width: 72px;\n  height: 28px;\n  padding: 1% 1%;\n  outline: none;\n  margin-left: 10px;\n  margin-right: 10px;\n  border: solid 1px #dee1e5;\n  border-radius: 2px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url(' +
					t +
					') no-repeat;\n  background-position: 80% 50%;\n}\n.fill-in-block-question-setting-body-selector option[data-v-5657130d] {\n  text-align: center;\n}\n.fill-in-block-question-setting-footer[data-v-5657130d] {\n  text-align: center;\n  height: 30px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding-top: 5px;\n}\n.fill-in-block-question-setting-footer a[data-v-5657130d] {\n  display: inline-block;\n  width: 130px;\n  height: 40px;\n  line-height: 40px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.fill-in-block-question-setting-footer-cancel[data-v-5657130d] {\n  background-color: #ffffff;\n  color: #333;\n  border: solid 1px #dee1e5;\n  margin-right: 20px;\n}\n.fill-in-block-question-setting-footer-confirm[data-v-5657130d] {\n  background-color: #26cfa2;\n  color: #ffffff;\n}\n',
				''
			])
		},
		function(A, g) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAATElEQVQYV2XMUQ2AMBAD0DcHSEEKEiYBCUhAAhKQghQkkFsYuYx+ti8t2LDj9s+EWjC/aBlggDNOAkVG2MGKq6MMKw40EENGGX4gygdQnw62fdhZ2AAAAABJRU5ErkJggg=='
		},
		function(A, g, C) {
			'use strict'
			var e = C(48)
			C.n(e).a
		},
		function(A, g, C) {
			;(A.exports = C(2)(!1)).push([
				A.i,
				'.write-block[data-v-48ff0e3a] {\n  text-align: left!important;\n}\n',
				''
			])
		},
		function(A, g, C) {
			'use strict'
			var e = C(49)
			C.n(e).a
		},
		function(A, g, C) {
			g = A.exports = C(2)(!1)
			var e = C(43),
				I = e(C(133)),
				t = e(C(134))
			g.push([
				A.i,
				'.engComposition-block[data-v-948975cc] {\n  position: relative;\n}\n.engComposition-block[data-v-948975cc]:before {\n  content: "";\n  display: block;\n  position: absolute;\n  left: -18px;\n  top: 0px;\n  height: 80%;\n  width: 7px;\n  background: #000;\n}\n.engComposition-block.high-dpr[data-v-948975cc]:before {\n  width: 28px;\n  left: -88px;\n}\n.engComposition-block li[data-v-948975cc] {\n  width: 96%;\n  margin-left: 2%;\n  box-sizing: border-box;\n  height: 31px;\n}\n.engComposition-block .question-num[data-v-948975cc] {\n  line-height: 36px;\n  text-indent: 2%;\n}\n.engComposition-block-score-box[data-v-948975cc] {\n  width: 60px;\n  height: 36px;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0px;\n  right: 0;\n}\n.high-dpr[data-v-948975cc] {\n  padding-top: 0px !important;\n}\n.high-dpr .engComposition-block li[data-v-948975cc] {\n  height: 124px;\n}\n.high-dpr .engComposition-block .question-num[data-v-948975cc] {\n  line-height: 144px;\n}\n.high-dpr .engComposition-block-score-box[data-v-948975cc] {\n  width: 240px;\n  height: 144px;\n  position: absolute;\n  top: 0px;\n  right: 0;\n}\n.high-dpr .engComposition-block-score-box-left-line[data-v-948975cc] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 10px;\n  background-image: url(' +
					I +
					');\n  background-repeat: no-repeat;\n  background-position: left;\n  -webkit-background-size: 100% 100%;\n  background-size: 100% 100%;\n}\n.high-dpr .engComposition-block-score-box-right-line[data-v-948975cc] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 10px;\n  background-image: url(' +
					t +
					');\n  background-repeat: no-repeat;\n  background-position: right;\n  -webkit-background-size: 100% 100%;\n  background-size: 100% 100%;\n}\n',
				''
			])
		},
		function(A, g) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAABACAYAAAAj8ea3AAAARklEQVRIie3WMQoAMQhE0W/I/a/s1kkIGNby2wkPZboJICnMqKAnOLc92i8CkHnm6w8jFAqFQqFQ2AGDtZtdC9IO/78uww8O5gZ+jrlNwQAAAABJRU5ErkJggg=='
		},
		function(A, g) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAA+CAYAAAAS2YoGAAAAQklEQVRIiWNkYGD4z0AEYCJGEUkKGQnIw53F8v8/phMZGTH1U9+NowpHFY4qHFU4qnBU4ajCkaiQ6FYKSSYOUJMLAKC8B3df9C85AAAAAElFTkSuQmCC'
		},
		function(A, g, C) {
			'use strict'
			var e = C(50)
			C.n(e).a
		},
		function(A, g, C) {
			;(A.exports = C(2)(!1)).push([
				A.i,
				'.fill-in-block-question-setting[data-v-4b9c7eb0] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10;\n}\n.fill-in-block-question-setting-content[data-v-4b9c7eb0] {\n  width: 260px;\n  height: 140px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -130px;\n  margin-top: -70px;\n  background: #fff;\n  border-radius: 4px;\n}\n.fill-in-block-question-setting-header[data-v-4b9c7eb0] {\n  height: 30px;\n  text-align: center;\n  position: relative;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border-bottom: 1px solid #F2F2F2;\n  line-height: 30px;\n  font-size: 12px;\n}\n.fill-in-block-question-setting-header a[data-v-4b9c7eb0] {\n  position: absolute;\n  right: 10px;\n  top: 0px;\n}\n.fill-in-block-question-setting-body[data-v-4b9c7eb0] {\n  height: 70px;\n  text-align: right;\n  padding-right: 35px;\n}\n.fill-in-block-question-setting-body input[data-v-4b9c7eb0] {\n  width: 100px;\n  margin-left: 10px;\n}\n.fill-in-block-question-setting-body p[data-v-4b9c7eb0] {\n  padding-top: 8px;\n}\n.fill-in-block-question-setting-footer[data-v-4b9c7eb0] {\n  text-align: center;\n  height: 30px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border-top: 1px solid #F2F2F2;\n  padding-top: 5px;\n}\n.fill-in-block-question-setting-footer a[data-v-4b9c7eb0] {\n  display: inline-block;\n  width: 80px;\n  height: 30px;\n  line-height: 30px;\n  color: #fff;\n  background-color: #36BBA1;\n  font-size: 12px;\n  border-radius: 4px;\n}\n',
				''
			])
		},
		function(A, g, C) {
			'use strict'
			var e = C(51)
			C.n(e).a
		},
		function(A, g, C) {
			;(A.exports = C(2)(!1)).push([
				A.i,
				'.composition-block[data-v-6d82ceb8] {\n  position: relative;\n}\n.composition-block[data-v-6d82ceb8]:before {\n  content: "";\n  display: block;\n  position: absolute;\n  left: -18px;\n  top: 0px;\n  height: 80%;\n  width: 7px;\n  background: #000;\n}\n.composition-block.high-dpr[data-v-6d82ceb8]:before {\n  width: 28px;\n  left: -88px;\n}\n.composition-block .question-num[data-v-6d82ceb8] {\n  line-height: 36px;\n  text-indent: 2%;\n}\n.composition-block-score-box[data-v-6d82ceb8] {\n  width: 60px;\n  height: 36px;\n  box-sizing: border-box;\n  position: absolute;\n  top: -3px;\n  right: 0;\n}\n.high-dpr .block-content[data-v-6d82ceb8] {\n  padding-top: 0px !important;\n}\n.high-dpr .composition-block[data-v-6d82ceb8] {\n  position: relative;\n}\n.high-dpr .composition-block .question-num[data-v-6d82ceb8] {\n  line-height: 99.36px;\n}\n.high-dpr .composition-block-score-box[data-v-6d82ceb8] {\n  width: 80px;\n  height: 100px;\n  position: absolute;\n  top: -88px;\n  right: 0;\n}\n',
				''
			])
		},
		function(A, g, C) {
			'use strict'
			var e = C(52)
			C.n(e).a
		},
		function(A, g, C) {
			;(A.exports = C(2)(!1)).push([
				A.i,
				'.text-content[data-v-7a1542e1]:before {\n  content: "";\n  display: block;\n  width: 7px;\n  height: 160px;\n  position: absolute;\n  background: #000;\n  top: 39%;\n  right: 100%;\n  margin-top: -30px;\n  margin-right: 11px;\n}\n.text-content .user-number-title[data-v-7a1542e1]:before {\n  content: "";\n  display: block;\n  width: 203px;\n  height: 10px;\n  position: absolute;\n  background: #000;\n  top: -112px;\n  right: 0;\n}\n.text-content.high-dpr[data-v-7a1542e1]:before {\n  width: 28px;\n  height: 521px;\n  top: 43%;\n  margin-top: -111px;\n  margin-right: 62px;\n}\n.text-content.high-dpr .user-number-title[data-v-7a1542e1]:before {\n  content: "";\n  display: block;\n  width: 812px;\n  height: 28px;\n  position: absolute;\n  background: #000;\n  top: -450px;\n  right: 0;\n}\n',
				''
			])
		},
		function(A, g) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAPxJREFUOBFjYKAmSEtLCwBhUsxkhinOyMhI//fv30ImJqZQU1PTV2fOnDkLk8NHM4IkGxoa2J49e/aIkZHxIoj///9/fSkpKTktLa2/e/fubQcK8YPEkcBHZ2fnyrCwsL8sIEGgAb+AlER6evpMEH/WrFnuIHrVqlVwF4L42ADYAGwSIDGQDUCqDJv8zJlguxhQDAA6fQU2xfjEwGGASwHIC4TCgAmXZrLEgWnAEYRJ0YwSBsBojIBq3k+sISgGoGsiJgzABsASEtAAcEICeuMFKCEB+aBoxAvgsQBKysBonAJMzozMzMzZM2bMgEQ0Xu1okqCMBMJowrTlAgCCXF1BI8PsrwAAAABJRU5ErkJggg=='
		},
		function(A, g, C) {
			'use strict'
			var e = C(53)
			C.n(e).a
		},
		function(A, g, C) {
			g = A.exports = C(2)(!1)
			var e = C(43),
				I = e(C(101)),
				t = e(C(144)),
				n = e(C(145))
			g.push([
				A.i,
				'.img-selector[data-v-734482ca] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n}\n.img-selector-content[data-v-734482ca] {\n  width: 520px;\n  min-height: 150px;\n  position: absolute;\n  left: 50%;\n  margin-left: -200px;\n  margin-top: 150px;\n  background: #fff;\n  border-radius: 4px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 30px;\n}\n.img-selector-title[data-v-734482ca] {\n  position: relative;\n  text-align: center;\n  font-size: 20px;\n  color: #333333;\n}\n.img-selector-title-close[data-v-734482ca] {\n  position: absolute;\n  right: 0px;\n  top: 4px;\n  width: 16px;\n  height: 16px;\n  background-image: url(' +
					I +
					');\n  background-repeat: no-repeat;\n}\n.img-selector .img-list[data-v-734482ca] {\n  overflow: hidden;\n}\n.img-selector .img-list li[data-v-734482ca] {\n  width: 100px;\n  height: 100px;\n  float: left;\n  margin: 8px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: relative;\n}\n.img-selector .img-list li .img-list-checkbutton[data-v-734482ca] {\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  left: 8px;\n  top: 8px;\n}\n.img-selector .img-list li .unchecked[data-v-734482ca] {\n  background-image: url(' +
					t +
					');\n}\n.img-selector .img-list li .checked[data-v-734482ca] {\n  background-image: url(' +
					n +
					');\n}\n.img-selector-footer[data-v-734482ca] {\n  text-align: center;\n  height: 30px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding-top: 5px;\n}\n.img-selector-footer a[data-v-734482ca] {\n  display: inline-block;\n  width: 130px;\n  height: 40px;\n  line-height: 40px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.img-selector-footer-cancel[data-v-734482ca] {\n  background-color: #ffffff;\n  color: #333;\n  border: solid 1px #dee1e5;\n  margin-right: 20px;\n}\n.img-selector-footer-confirm[data-v-734482ca] {\n  background-color: #26cfa2;\n  color: #ffffff;\n}\n',
				''
			])
		},
		function(A, g) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAA5omlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMTAtMTdUMTQ6NDc6MDcrMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0xMC0xN1QxNDo0OToxOSswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTktMTAtMTdUMTQ6NDk6MTkrMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6OWYzZTJiMTAtZjdlNy00MjZiLTgzNmEtZDI4ZGQ0OWQ2MmJhPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjVBNjVGNTQ0RTgwMTExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjVBNjVGNTQxRTgwMTExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOjVBNjVGNTQyRTgwMTExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6NUE2NUY1NDRFODAxMTFFOUEzNzk4MTBDRDkwNTNDQzE8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjlmM2UyYjEwLWY3ZTctNDI2Yi04MzZhLWQyOGRkNDlkNjJiYTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOS0xMC0xN1QxNDo0OToxOSswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjE0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjE0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5JF/MMAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABfSURBVHja7MsxFcAgDAXATz0Q9qiItCjg4Qr2gBEQkVpIO/b19ktjDFdV7L0RQURorQEi4mbmUWbmIuJgZn+Kmf3CS3/8SCQizDnDYa2FnDNS791VFeecUCyloNaKewAruXxeIy7UHwAAAABJRU5ErkJggg=='
		},
		function(A, g) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAvUlEQVQ4T52S3QnCQBCEZ+/OtGEE3zUdaCGi6UArUrEBO0g6iAUIxjbMz8oGDmKIx5J7PPbbnRmGMPGR5+LiHDu289Cempp3maSlzHSgQBHsS3P8g2YhcAcui9vGgDMN2IK2z2SXq0AGXxnmIsvVoEAV2uMMJiPQehRsgZNhHEBYiewhJH+jIANpheYesc2Z+NG/5P3/lephGfTy+qEFPYpkAu/F0zBpdThBcHIBfHscXBysHOryp3KaxgxnvvKKfg8soahUAAAAAElFTkSuQmCC'
		},
		function(A, g, C) {
			'use strict'
			var e = C(54)
			C.n(e).a
		},
		function(A, g, C) {
			g = A.exports = C(2)(!1)
			var e = C(43),
				I = e(C(148)),
				t = e(C(149)),
				n = e(C(150))
			g.push([
				A.i,
				'.normal-block-container[data-v-1ed43824] {\n  width: 100%;\n  height: 100%;\n}\n.normal-block-container.high-dpr .normal-block[data-v-1ed43824]:before {\n  width: 28px;\n  left: -88px;\n}\n.write-block[data-v-1ed43824] {\n  position: relative;\n  font-size: 0px;\n}\n.write-block .score[data-v-1ed43824] {\n  position: absolute;\n  left: 100%;\n  top: 0px;\n  text-align: left;\n  width: 150px;\n}\n.scale-btn[data-v-1ed43824] {\n  position: absolute;\n  right: 0px;\n  top: calc(100% - 16px);\n  width: 16px;\n  height: 16px;\n  cursor: ns-resize;\n  z-index: 2;\n}\n.normal-block[data-v-1ed43824]:before {\n  content: "";\n  display: block;\n  position: absolute;\n  left: -18px;\n  top: 0px;\n  height: 80%;\n  width: 7px;\n  background: #000;\n}\n.normal-block .write-block span[data-v-1ed43824] {\n  text-align: left;\n}\n.normal-block .add-img-btn[data-v-1ed43824] {\n  font-size: 12px;\n  color: #666666;\n  position: relative;\n}\n.normal-block .add-img-btn-icon[data-v-1ed43824] {\n  position: absolute;\n  left: -20px;\n  width: 16px;\n  height: 16px;\n  background-image: url(' +
					I +
					');\n  background-repeat: no-repeat;\n}\n.normal-block .add-img-btn[data-v-1ed43824]:hover {\n  color: #26cfa2;\n}\n.normal-block .add-img-btn:hover .add-img-btn-icon[data-v-1ed43824] {\n  background-image: url(' +
					t +
					');\n}\n.normal-block-score-box[data-v-1ed43824] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 60px;\n  height: 36px;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.scale-layout[data-v-1ed43824] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  background: rgba(49, 176, 213, 0.4);\n  z-index: 1;\n  display: none;\n}\n.choosed-img-list[data-v-1ed43824] {\n  text-align: right;\n  height: calc(100% - 30px);\n  overflow: hidden;\n}\n.choosed-img-list span[data-v-1ed43824] {\n  display: inline-block;\n  margin-right: 10px;\n  margin-top: 10px;\n  vertical-align: top;\n  position: relative;\n}\n.choosed-img-list span img[data-v-1ed43824] {\n  max-width: 100%;\n}\n.choosed-img-list span .delete-img-btn[data-v-1ed43824] {\n  position: absolute;\n  right: 4px;\n  top: 4px;\n  width: 16px;\n  height: 16px;\n  background-image: url(' +
					n +
					');\n}\n',
				''
			])
		},
		function(A, g) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAWdJREFUOBHFks1Kw0AUhZuf+gPtzk36EOozpH0ELaIodZMWsnIjuguo4M5daIs7EWxfwXThQ0gR901XXYlVExO/O2BJSynddeBOzpx75t4zmcnlVj00MdBoNGppmp4C15YxhPZb13W/2Wx2TdmQJMmdaZrbhmF8LVmgEEXRC9qu0juOMxZQr9cviRNFLphwoKEbiUQ5yGh3wMXMWkEa5DVNu8Xhve/7/Wx+qkCr1TrIJgV7nmeGYdgBbsVxXHVdtwx+l5yMqQJC0O2CbrvYPK5UKkmv13uE/rUsyx4Oh3uc/Rn7NhqRTxfgNs7ZeET0EXSCIBjzXWe9j5MY/ROaPOuA0KWAmgSQOOM2amwol0qlQ6gIXKRztd1uR6KRwdU9wF8BNxUhE7Z/iDfCmpALAN0nt6AcUFHjYdh0Chfsm5v6/4mf2P/gnBtzVTMkP7EApd6OKoCla0y8DgaDpZ4yWnmxNzN1V7T8A0Uuj8x8MQMGAAAAAElFTkSuQmCC'
		},
		function(A, g) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAY5JREFUOBHFUstOwkAUvZfyMqmu3JDoxkUpRKWJfACBX1BiJBD8BDdG1+rSuPMDWonAL2iC7jW0qBAw0YVE48YNBHm112lJCRJC2NHF9My5556ZOTMA8/7Q3IBYlNMGOPYByT3LhpCgwyFclqVk3mk2GAgXbo7bdHm59iwGrVab7xPcM23e0guq/GsCUZOPA5qSssgpAxGhv6j8mBLHqI4IQrqB4ihn4i16cImqcr7+lA2M16wj2GRVSu3a2P5HqOD81Co5Nl/u6r24qGZjDL/a9X8GJimoV0cIhsSHgsk1eDNKWj3DQtN90kr0u/SxbRjdm43nXHSigb8oHwJQAggqDbZqicjMxsNLwZ07DPcZzgpqxtXTu7csBuv4wwxYkAcEkPYgxXzS6h673x4gLjrd3vgjhnv2ijUpobDoTlj7gs2BUJS7flWuBsqKb0hOAaO3MMgAEb3giWrB+NeUvomlgQFBy7kEzch7wTtRNUb6a9c8IlhvxzLgHHDabHRemlCf7SkDtYkcZ2O+c5r+Ab/6jY30YLu3AAAAAElFTkSuQmCC'
		},
		function(A, g) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAActJREFUOBGVUz1LglEU9iNIi7CoHPqYmqRBiNpsEzRaGwIHEYQ2Z/+AOLs4uTiJoAZGQ2JDEmiUDkUQRGgf5FckBi7R+749z5vX3sjAHnjuuefjHs4991y97jesMK2BK6Cl7+5C3oEVsNW3qUKvUcawd4HroNauCdEpUC7AI/CDDiMXgIc94Cr412G4VN8i5DJ4DcoiwRYUHh4VMwg0g7cGLLwzy1ZhMpn0LpdrTuhCOhyOabfbrbXzjJUVbIIsSYXdbp/K5XJ7BoPhtVAovNDIhNls1tdut1v5fF40kVeVmICNmwRV1Ov192az+RgOh3eYxGw261KplDeZTJ4GAgG+ghbjbJ54qoEjFos9QElEo1GPHojH48d+v/9sEPC9sbAHQ1Gr1XqyLCuowlitVjkHQ8EK6JzXep1O52wmk/EmEomTUqn0HIlEdukPhUI32jjsu+zBLLgkHDabbQKN8qfT6aLP5yuWy+UumvfEnvR6vQYSdkQs5BUTvIF8EnWAFKDT6TSCweAlbCqY5B6QJEmpVCriOpzKAzF121A2vsJHXs8RecgKiCrIWeCEjQLG74ODUZahcLY5ngugqAzbHxCfiYfVzzQs8F/f+ROYppvaWkCQxwAAAABJRU5ErkJggg=='
		},
		function(A, g, C) {
			'use strict'
			var e = C(55)
			C.n(e).a
		},
		function(A, g, C) {
			g = A.exports = C(2)(!1)
			var e = C(43),
				I = e(C(153)),
				t = e(C(154))
			g.push([
				A.i,
				".answer-block {\n  width: 100%;\n  clear: both;\n  position: relative;\n  /*识别框*/\n}\n.answer-block .bottom-border-line,\n.answer-block .right-border-line,\n.answer-block .left-border-line {\n  position: relative;\n}\n.answer-block .bottom-border-line:after,\n.answer-block .right-border-line:after,\n.answer-block .left-border-line:after {\n  content: '';\n  position: absolute;\n  background: gray;\n}\n.answer-block .top-border-line {\n  position: relative;\n}\n.answer-block .top-border-line:before {\n  content: \"\";\n  position: absolute;\n  background: gray;\n}\n.answer-block .bottom-border-line:after {\n  width: 100%;\n  height: 1px;\n  bottom: 0%;\n  left: 0%;\n}\n.answer-block .top-border-line:before {\n  width: 100%;\n  height: 1px;\n  top: 0%;\n  left: 0%;\n}\n.answer-block .right-border-line:after,\n.answer-block .left-border-line:after {\n  width: 1px;\n  height: 100%;\n  top: 0px;\n  right: 0px;\n}\n.answer-block .left-border-line:after {\n  left: 0px;\n}\n.answer-block .box-line-bottom:after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background-image: url(" +
					I +
					");\n  background-repeat: repeat-x;\n  background-position: left bottom;\n  bottom: 0%;\n  left: 0%;\n}\n.answer-block .box-line-left:after {\n  content: '';\n  position: absolute;\n  background: gray;\n  width: 1px;\n  height: 100%;\n  top: 0%;\n  left: 0%;\n}\n.answer-block.text {\n  line-height: 30px;\n  height: 30px;\n  font-size: 14px;\n}\n.answer-block.block {\n  border: 1px solid #000;\n  box-sizing: border-box;\n  position: relative;\n}\n.answer-block[data-type='paperFillInBlankQuestions']:before {\n  content: '';\n  display: block;\n  width: 7px;\n  height: 80%;\n  background: #000;\n  position: absolute;\n}\n.answer-block[data-type='paperFillInBlankQuestions'][data-direction='1']:before {\n  left: -18px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'][data-direction='1']:before {\n  top: 0px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'][data-direction='2']:before {\n  left: -18px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'][data-direction='2']:before {\n  top: 0px;\n}\n.answer-block[data-type='paperComposition'] ul {\n  margin-top: -1px;\n}\n.answer-block[data-type='paperComposition'] li {\n  height: 24.84px;\n  margin-bottom: 8px;\n}\n.answer-block[data-type='paperComposition'] li:last-child {\n  margin-bottom: 0px;\n}\n.answer-block[data-type='paperComposition'] li i {\n  display: block;\n  float: left;\n  width: 24.7px;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-style: normal;\n  position: relative;\n  line-height: 10px;\n}\n.answer-block[data-type='paperComposition'] li i:last-child:after {\n  display: none;\n}\n.answer-block[data-type='paperComposition'] li i span {\n  position: absolute;\n  top: 100%;\n  margin-top: -5%;\n}\n.answer-block[data-type='paperComposition'] li i:last-child {\n  border-right: none;\n}\n.answer-block[data-type='paperTitle'] {\n  text-align: center;\n  font-size: 14px;\n  line-height: 55px;\n}\n.answer-block[data-type='paperUserBaseInfo'] {\n  font-size: 12px;\n  line-height: 20px;\n}\n.answer-block[data-type='paperUserBaseInfo'] .answer-paper-underline {\n  width: 70px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'] li {\n  height: 21px;\n  width: 47%;\n  float: left;\n  margin-left: 2%;\n  margin-top: 10px;\n  font-size: 0px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'] li[data-count='1'] {\n  width: 97%;\n}\n.answer-block[data-type='paperFillInBlankQuestions'] li[data-check-mode='1'] .answer-paper-underline {\n  width: calc(100% - 30px);\n}\n.answer-block[data-type='paperFillInBlankQuestions'] li[data-check-mode='2'] .answer-paper-underline {\n  width: calc(100% - 60px);\n  margin-right: 2px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'] li[data-check-mode='2'] .score-box {\n  margin-left: 5px;\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 30px;\n  height: 18px;\n  background-image: url(" +
					I +
					");\n  background-repeat: repeat-x;\n  background-position: left bottom;\n  position: relative;\n}\n.answer-block[data-type='paperFillInBlankQuestions'] .num {\n  font-size: 10px;\n  line-height: 21px;\n  height: 100%;\n  text-align: right;\n  vertical-align: bottom;\n  margin-right: 3px;\n}\n.answer-block[data-type='paperObjectiveQuestions'] {\n  border: none;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .objective-question-left-flag {\n  position: absolute;\n  left: -21px;\n  top: 3px;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .objective-question-left-flag .write-block {\n  background: #000;\n  display: block;\n  margin-bottom: 10px;\n  height: 75px !important;\n  width: 7px;\n  float: none;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .objective-question-left-flag .write-block:nth-child(5n + 6) {\n  margin-top: 12px;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .objective-question-bottom-flag {\n  clear: both;\n  position: relative;\n  left: 6px;\n  top: -5px;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .objective-question-bottom-flag .write-block {\n  background: #000;\n  margin-left: 18px;\n  width: 72px;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .objective-question-bottom-flag .write-block:nth-child(n + 2) {\n  margin-left: 32.3px;\n}\n.answer-block[data-type='paperObjectiveQuestions'] ul {\n  float: left;\n  width: 100px;\n  height: 80px;\n  margin: 5px 2px;\n  margin-top: 0px;\n}\n.answer-block[data-type='paperObjectiveQuestions'] ul li {\n  height: 16px;\n  font-size: 0px;\n  overflow: hidden;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .write-block {\n  border: 1px solid #000;\n  margin-left: 4px;\n  display: block;\n  float: left;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .write-block span {\n  vertical-align: top;\n}\n.answer-block[data-type='paperObjectiveQuestions'] .write-block.num {\n  border: none;\n  font-style: normal;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] {\n  font-size: 14px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .attention-content {\n  width: 100%;\n  height: 155px;\n  box-sizing: border-box;\n  padding: 16px 0px;\n  text-indent: 5px;\n  line-height: 25px;\n  font-size: 12px;\n  letter-spacing: -1px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .user-number-content {\n  width: 201px;\n  height: 100%;\n  border-bottom: none;\n  position: relative;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .user-number-content ul {\n  overflow: hidden;\n  height: 187px;\n  width: 201px;\n  text-align: center;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .user-number-content ul:before {\n  top: 20px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .user-number-content ul i {\n  display: block;\n  position: relative;\n  left: -0.5px;\n  font-style: normal;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .user-number-content ul li {\n  height: 100%;\n  width: 20px;\n  float: left;\n  box-sizing: border-box;\n  padding-top: 26px;\n  line-height: 16px;\n  position: relative;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .user-number-content ul li:last-child:after {\n  display: none;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .user-number-content ul li .write-block {\n  display: block;\n  margin: 0 auto;\n  border: 1px solid #000;\n  margin-bottom: 6.2px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .sample-content {\n  padding-left: 10px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .sample-content .sample-content-right {\n  background-color: #000;\n  margin-left: 10px;\n  margin-right: 50px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'] .sample-content .sample-content-miss {\n  border: 1px solid #000;\n  margin-left: 10px;\n}\n.answer-block .write-block {\n  width: 15px;\n  height: 10px;\n  display: inline-block;\n  box-sizing: border-box;\n}\n.answer-block .write-block span {\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  font-size: 12px;\n  display: block;\n  color: #000;\n  vertical-align: top;\n  font-style: normal;\n  line-height: 8px;\n}\n.answer-block .text-content,\n.answer-block .block-content {\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  box-sizing: border-box;\n}\n.answer-block .text-content.normal-block,\n.answer-block .block-content.normal-block {\n  padding-left: 2%;\n  padding-top: 15px;\n}\n.answer-block .text-content .add-img-btn,\n.answer-block .block-content .add-img-btn {\n  position: absolute;\n  right: 10px;\n  z-index: 2;\n}\n.answer-block table {\n  width: 100%;\n  border-collapse: collapse;\n  /*关键代码*/\n  border-spacing: 0px;\n}\n.answer-block table td {\n  box-sizing: border-box;\n}\n.answer-block table td:first-child {\n  border-left: none;\n}\n.answer-block table td:last-child {\n  border-right: none;\n}\n.answer-block table tr {\n  height: 30px;\n}\n.answer-block table tr:last-child td {\n  border-bottom: none;\n}\n.answer-block table thead {\n  text-align: center;\n  height: 28px;\n  line-height: 28px;\n}\n.answer-block table thead td {\n  border-top: 0px;\n}\n.answer-block .answer-paper-underline {\n  display: inline-block;\n  width: 80px;\n  height: 20px;\n  border-bottom: 1px solid #000;\n  margin-left: 5px;\n}\n.answer-block .btn-group {\n  position: absolute;\n  right: 0px;\n  top: 5px;\n  z-index: 5;\n}\n.answer-block .btn-group.paper-fill-in-blank-question,\n.answer-block .btn-group.paper-composition {\n  top: -27px;\n}\n.answer-block .btn-group a {\n  display: inline-block;\n  width: 48px;\n  height: 23px;\n  color: #fff;\n  text-align: center;\n  line-height: 20px;\n  background-color: #26cfa2;\n  font-size: 12px;\n  text-decoration: none;\n  -webkit-border-radius: 2px;\n  -moz-border-radius: 2px;\n  border-radius: 2px;\n}\n.answer-block .btn-group a.paper-fill-in-blank-question-setting-button {\n  line-height: 23px;\n}\n.answer-block {\n  /*识别框*/\n}\n.answer-block.text.high-dpr {\n  line-height: 120px;\n  height: 120px;\n  font-size: 44px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr:before {\n  width: 28px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr[data-direction='1']:before {\n  left: -88px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr[data-direction='2']:before {\n  left: -88px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr[data-direction='2']:before {\n  top: 0px;\n}\n.answer-block[data-type='paperComposition'].high-dpr li {\n  height: 99.36px;\n  margin-bottom: 32px;\n}\n.answer-block[data-type='paperComposition'].high-dpr li i {\n  width: 98.84px;\n  font-size: 40px;\n  line-height: 40px;\n}\n.answer-block[data-type='paperComposition'].high-dpr .block-content {\n  padding-top: 0px !important;\n}\n.answer-block[data-type='paperComposition'].high-dpr .composition-block {\n  position: relative;\n}\n.answer-block[data-type='paperComposition'].high-dpr .composition-block .question-num {\n  line-height: 144px;\n}\n.answer-block[data-type='paperComposition'].high-dpr .composition-block-score-box {\n  width: 240px;\n  height: 144px;\n  position: absolute;\n  top: -5px;\n  right: 0;\n}\n.answer-block[data-type='paperTitle'].high-dpr p {\n  font-size: 61px;\n  line-height: 220px;\n}\n.answer-block[data-type='paperUserBaseInfo'].high-dpr {\n  font-size: 48px;\n  line-height: 80px;\n}\n.answer-block[data-type='paperUserBaseInfo'].high-dpr .answer-paper-underline {\n  width: 282px;\n  border-bottom: none;\n  position: relative;\n}\n.answer-block[data-type='paperUserBaseInfo'].high-dpr .answer-paper-underline:after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #000;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr li {\n  height: 84px;\n  width: 47%;\n  float: left;\n  margin-left: 2%;\n  margin-top: 40px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr li[data-count='1'] {\n  width: 97%;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr li .answer-paper-underline {\n  position: relative;\n  border-bottom: none;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr li .answer-paper-underline:after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #000;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr li[data-check-mode='1'] .answer-paper-underline {\n  width: calc(100% - 120px);\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr li[data-check-mode='2'] .answer-paper-underline {\n  width: calc(100% - 210px);\n  margin-right: 8px;\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr li[data-check-mode='2'] .score-box {\n  margin-left: 11px;\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 120px;\n  height: 72px;\n  background-image: url(" +
					t +
					");\n}\n.answer-block[data-type='paperFillInBlankQuestions'].high-dpr .num {\n  font-size: 44px;\n  line-height: 32px;\n  vertical-align: bottom;\n  position: relative;\n  top: -15px;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr ul {\n  float: left;\n  width: 400px;\n  height: 320px;\n  margin: 20px 9px;\n  margin-top: 0px;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr ul li {\n  height: 64px;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr .write-block {\n  margin-left: 16px;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr .objective-question-left-flag {\n  left: -104px;\n  top: 1px;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr .objective-question-left-flag .write-block {\n  display: block;\n  width: 28px !important;\n  height: 283px !important;\n  margin-bottom: 57px;\n  background-color: #000;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr .objective-question-left-flag .write-block:nth-child(5n + 6) {\n  margin-top: 57px;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr .objective-question-bottom-flag {\n  left: 24px;\n  top: -20px;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr .objective-question-bottom-flag .write-block {\n  background: #000;\n  width: 240px !important;\n  margin-left: 65px;\n}\n.answer-block[data-type='paperObjectiveQuestions'].high-dpr .objective-question-bottom-flag .write-block:nth-child(n + 2) {\n  margin-left: 178px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr {\n  font-size: 44px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .attention-content {\n  font-size: 40px;\n  text-indent: 20px;\n  line-height: 80px;\n  padding: 0;\n  height: 388px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .sample-content {\n  padding-left: 40px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .sample-content .sample-content-right {\n  margin-left: 40px;\n  margin-right: 200px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .sample-content .sample-content-miss {\n  border: 1px solid #000;\n  margin-left: 40px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .user-number-content {\n  width: 804px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .user-number-content ul {\n  height: 620px;\n  width: 804px;\n  position: relative;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .user-number-content ul:before {\n  top: 80px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .user-number-content ul li {\n  height: 100%;\n  width: 80px;\n  padding-top: 96px;\n}\n.answer-block[data-type='paperAttentionAndUserNumber'].high-dpr .user-number-content ul li .write-block {\n  font-size: 26px;\n  line-height: 1;\n  margin-bottom: 25.5px;\n}\n.answer-block.high-dpr .answer-paper-underline {\n  width: 320px;\n  height: 80px;\n  margin-left: 20px;\n}\n.answer-block.high-dpr table tr {\n  height: 112px;\n}\n.answer-block.high-dpr table thead {\n  height: 112px;\n  line-height: 112px;\n}\n.answer-block.high-dpr .write-block {\n  width: 48px !important;\n  height: 28px !important;\n}\n.answer-block.high-dpr .write-block span {\n  font-size: 32px;\n  line-height: 26px;\n}\n.answer-block.high-dpr .normal-block .write-block span {\n  font-size: 44px;\n}\n.answer-block.high-dpr .box-line-bottom:after {\n  background-image: url(" +
					t +
					');\n}\n.answer-block.high-dpr .block-content {\n  font-size: 40px;\n  padding-top: 30px;\n}\n.answer-block.high-dpr .normal-block-score-box {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 240px;\n  height: 144px;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.answer-block.high-dpr .normal-block .choosed-img-list {\n  height: calc(100% - 50px);\n  padding-right: 241px;\n  padding-top: 69px;\n}\n',
				''
			])
		},
		function(A, g) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAABCAYAAAD9yd/wAAAACXBIWXMAAAsTAAALEwEAmpwYAAA5oGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMTAtMTZUMDg6NDY6MzErMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0xMC0xNlQwODo0OTowNSswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTktMTAtMTZUMDg6NDk6MDUrMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6YWI2YjNhMjItMTU4ZS00YzhmLTk1M2ItZmEwNTZhZWYxY2Y3PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOkFBREE3NUY1RTdEMjExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOkFBREE3NUYyRTdEMjExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOkFBREE3NUYzRTdEMjExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6QUFEQTc1RjVFN0QyMTFFOUEzNzk4MTBDRDkwNTNDQzE8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmFiNmIzYTIyLTE1OGUtNGM4Zi05NTNiLWZhMDU2YWVmMWNmNzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOS0xMC0xNlQwODo0OTowNSswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjY8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+3gLddwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAHElEQVR42mJMS0v7zwAFM2fOZISxAQAAAP//AwBEXQP/6x3OOgAAAABJRU5ErkJggg=='
		},
		function(A, g) {
			A.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAYAAADq6085AAAACXBIWXMAAAsTAAALEwEAmpwYAAA5oWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMTAtMTZUMDg6NDU6NTArMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0xMC0xNlQwODo0ODo1MCswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTktMTAtMTZUMDg6NDg6NTArMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6NDE2MmI5ZWUtNjdlZC00NWZhLWFkZDQtYzNhZTExNDQyY2RiPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOkFBREE3NUYxRTdEMjExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOkU4ODhDOTdERTc0QjExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOkU4ODhDOTdFRTc0QjExRTlBMzc5ODEwQ0Q5MDUzQ0MxPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6QUFEQTc1RjFFN0QyMTFFOUEzNzk4MTBDRDkwNTNDQzE8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjQxNjJiOWVlLTY3ZWQtNDVmYS1hZGQ0LWMzYWUxMTQ0MmNkYjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOS0xMC0xNlQwODo0ODo1MCswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjEyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjE8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PtkfuPkAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAABxJREFUeNpiTEtL+8+ABcycOZMRmzgAAAD//wMAjrUD/whY2XwAAAAASUVORK5CYII='
		},
		function(A, g, C) {
			'use strict'
			var e = C(56)
			C.n(e).a
		},
		function(A, g, C) {
			;(A.exports = C(2)(!1)).push([
				A.i,
				'.answer-paper {\n  margin: 0 auto;\n  box-sizing: border-box;\n  border: 1px solid #000;\n  border-radius: 7px;\n  position: relative;\n}\n',
				''
			])
		},
		function(A, g, C) {
			'use strict'
			var e = C(57)
			C.n(e).a
		},
		function(A, g, C) {
			;(A.exports = C(2)(!1)).push([
				A.i,
				'.answer-paper-package {\n  background: #fff;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  position: relative;\n  font-family: "宋体";\n}\n.answer-paper-package.high-dpr .qrcode {\n  top: 64px;\n  left: 120px;\n}\n.answer-paper-package.high-dpr .page-bottom-flag {\n  left: 120px;\n  width: 126px;\n  height: 126px;\n  bottom: 42px;\n}\n.answer-paper-package.high-dpr .page-des {\n  font-size: 36px;\n  bottom: 65px;\n}\n.answer-paper-package .page-des {\n  text-align: center;\n  position: absolute;\n  bottom: 15px;\n  left: 0px;\n  width: 100%;\n  font-size: 12px;\n}\n.answer-paper-package.A4 {\n  width: 595px;\n  height: 855px;\n  padding: 42px 30px;\n  padding-top: 42px;\n  padding-bottom: 22px;\n}\n.answer-paper-package.A4.high-dpr {\n  width: 2380px;\n  height: 3420px;\n  padding: 168px 120px;\n  padding-top: 168px;\n  padding-bottom: 88px;\n}\n.answer-paper-package.A3 {\n  padding: 42px 50px;\n  padding-top: 42px;\n  padding-bottom: 22px;\n  width: 1240px;\n  height: 855px;\n}\n.answer-paper-package.A3.high-dpr {\n  padding: 168px 200px;\n  width: 4960px;\n  height: 3420px;\n  padding-top: 168px;\n  padding-bottom: 88px;\n}\n.answer-paper-package.A3.high-dpr .qrcode,\n.answer-paper-package.A3.high-dpr .page-bottom-flag {\n  left: 200px;\n}\n.answer-paper-package.A3 .qrcode,\n.answer-paper-package.A3 .page-bottom-flag {\n  left: 50px;\n}\n.answer-paper-package .left-paper {\n  float: left;\n}\n.answer-paper-package .right-paper {\n  float: right;\n}\n.answer-paper-package .right-paper::after {\n  content: \'\';\n  position: absolute;\n  width: 27px;\n  height: 27px;\n  background: #000;\n  bottom: -27px;\n  left: 0;\n}\n.answer-paper-package .right-paper::before {\n  content: \'\';\n  position: absolute;\n  width: 27px;\n  height: 27px;\n  background: #000;\n  top: -27px;\n  left: 0;\n}\n.answer-paper-package.high-dpr .right-paper::after {\n  content: \'\';\n  position: absolute;\n  width: 126px;\n  height: 126px;\n  background: #000;\n  bottom: -126px;\n  left: 0;\n}\n.answer-paper-package.high-dpr .right-paper::before {\n  content: \'\';\n  position: absolute;\n  width: 126px;\n  height: 126px;\n  background: #000;\n  top: -126px;\n  left: 0;\n}\n.answer-paper-package:last-child {\n  margin-bottom: 0px;\n}\n.answer-paper-package .qrcode {\n  display: inline-block;\n  position: absolute;\n  top: 20px;\n  left: 30px;\n}\n.answer-paper-package .page-bottom-flag {\n  width: 27px;\n  height: 27px;\n  background: #000;\n  position: absolute;\n  bottom: 15px;\n  left: 30px;\n  display: inline-block;\n}\n.answer-paper-package:not([data-page="1"]) .qrcode:after {\n  content: "";\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.answer-paper-package:not([data-page="1"]) .qrcode {\n  top: 15px;\n}\n.answer-paper-package:not([data-page="1"]).high-dpr .qrcode {\n  top: 42px;\n}\n',
				''
			])
		},
		function(A, g, C) {
			'use strict'
			var e = C(58)
			C.n(e).a
		},
		function(A, g, C) {
			;(A.exports = C(2)(!1)).push([
				A.i,
				'.answer-paper-manager .answer-paper-manager-content {\n  display: inline-block;\n  margin: 0 auto;\n}\n.answer-paper-manager.print-mode .btn-group,\n.answer-paper-manager.print-mode .scale-btn,\n.answer-paper-manager.print-mode .add-img-btn,\n.answer-paper-manager.print-mode .delete-img-btn {\n  display: none;\n}\n.answer-paper-manager .objective-question-bottom-flag {\n  display: none;\n}\n.answer-paper-manager .objective-question-bottom-flag:last-of-type {\n  display: block;\n}\n',
				''
			])
		},
		function(A, g, C) {
			var e =
					(function() {
						return this
					})() || Function('return this')(),
				I =
					e.regeneratorRuntime &&
					Object.getOwnPropertyNames(e).indexOf(
						'regeneratorRuntime'
					) >= 0,
				t = I && e.regeneratorRuntime
			if (((e.regeneratorRuntime = void 0), (A.exports = C(162)), I))
				e.regeneratorRuntime = t
			else
				try {
					delete e.regeneratorRuntime
				} catch (A) {
					e.regeneratorRuntime = void 0
				}
		},
		function(A, g) {
			!(function(g) {
				'use strict'
				var C,
					e = Object.prototype,
					I = e.hasOwnProperty,
					t = 'function' == typeof Symbol ? Symbol : {},
					n = t.iterator || '@@iterator',
					r = t.asyncIterator || '@@asyncIterator',
					o = t.toStringTag || '@@toStringTag',
					i = 'object' == typeof A,
					s = g.regeneratorRuntime
				if (s) i && (A.exports = s)
				else {
					;(s = g.regeneratorRuntime = i ? A.exports : {}).wrap = w
					var a = 'suspendedStart',
						c = 'suspendedYield',
						l = 'executing',
						u = 'completed',
						B = {},
						p = {}
					p[n] = function() {
						return this
					}
					var h = Object.getPrototypeOf,
						d = h && h(h(y([])))
					d && d !== e && I.call(d, n) && (p = d)
					var f = (m.prototype = U.prototype = Object.create(p))
					;(E.prototype = f.constructor = m),
						(m.constructor = E),
						(m[o] = E.displayName = 'GeneratorFunction'),
						(s.isGeneratorFunction = function(A) {
							var g = 'function' == typeof A && A.constructor
							return (
								!!g &&
								(g === E ||
									'GeneratorFunction' ===
										(g.displayName || g.name))
							)
						}),
						(s.mark = function(A) {
							return (
								Object.setPrototypeOf
									? Object.setPrototypeOf(A, m)
									: ((A.__proto__ = m),
									  o in A || (A[o] = 'GeneratorFunction')),
								(A.prototype = Object.create(f)),
								A
							)
						}),
						(s.awrap = function(A) {
							return { __await: A }
						}),
						F(b.prototype),
						(b.prototype[r] = function() {
							return this
						}),
						(s.AsyncIterator = b),
						(s.async = function(A, g, C, e) {
							var I = new b(w(A, g, C, e))
							return s.isGeneratorFunction(g)
								? I
								: I.next().then(function(A) {
										return A.done ? A.value : I.next()
								  })
						}),
						F(f),
						(f[o] = 'Generator'),
						(f[n] = function() {
							return this
						}),
						(f.toString = function() {
							return '[object Generator]'
						}),
						(s.keys = function(A) {
							var g = []
							for (var C in A) g.push(C)
							return (
								g.reverse(),
								function C() {
									for (; g.length; ) {
										var e = g.pop()
										if (e in A)
											return (
												(C.value = e), (C.done = !1), C
											)
									}
									return (C.done = !0), C
								}
							)
						}),
						(s.values = y),
						(x.prototype = {
							constructor: x,
							reset: function(A) {
								if (
									((this.prev = 0),
									(this.next = 0),
									(this.sent = this._sent = C),
									(this.done = !1),
									(this.delegate = null),
									(this.method = 'next'),
									(this.arg = C),
									this.tryEntries.forEach(N),
									!A)
								)
									for (var g in this)
										't' === g.charAt(0) &&
											I.call(this, g) &&
											!isNaN(+g.slice(1)) &&
											(this[g] = C)
							},
							stop: function() {
								this.done = !0
								var A = this.tryEntries[0].completion
								if ('throw' === A.type) throw A.arg
								return this.rval
							},
							dispatchException: function(A) {
								if (this.done) throw A
								var g = this
								function e(e, I) {
									return (
										(r.type = 'throw'),
										(r.arg = A),
										(g.next = e),
										I && ((g.method = 'next'), (g.arg = C)),
										!!I
									)
								}
								for (
									var t = this.tryEntries.length - 1;
									t >= 0;
									--t
								) {
									var n = this.tryEntries[t],
										r = n.completion
									if ('root' === n.tryLoc) return e('end')
									if (n.tryLoc <= this.prev) {
										var o = I.call(n, 'catchLoc'),
											i = I.call(n, 'finallyLoc')
										if (o && i) {
											if (this.prev < n.catchLoc)
												return e(n.catchLoc, !0)
											if (this.prev < n.finallyLoc)
												return e(n.finallyLoc)
										} else if (o) {
											if (this.prev < n.catchLoc)
												return e(n.catchLoc, !0)
										} else {
											if (!i)
												throw new Error(
													'try statement without catch or finally'
												)
											if (this.prev < n.finallyLoc)
												return e(n.finallyLoc)
										}
									}
								}
							},
							abrupt: function(A, g) {
								for (
									var C = this.tryEntries.length - 1;
									C >= 0;
									--C
								) {
									var e = this.tryEntries[C]
									if (
										e.tryLoc <= this.prev &&
										I.call(e, 'finallyLoc') &&
										this.prev < e.finallyLoc
									) {
										var t = e
										break
									}
								}
								t &&
									('break' === A || 'continue' === A) &&
									t.tryLoc <= g &&
									g <= t.finallyLoc &&
									(t = null)
								var n = t ? t.completion : {}
								return (
									(n.type = A),
									(n.arg = g),
									t
										? ((this.method = 'next'),
										  (this.next = t.finallyLoc),
										  B)
										: this.complete(n)
								)
							},
							complete: function(A, g) {
								if ('throw' === A.type) throw A.arg
								return (
									'break' === A.type || 'continue' === A.type
										? (this.next = A.arg)
										: 'return' === A.type
										? ((this.rval = this.arg = A.arg),
										  (this.method = 'return'),
										  (this.next = 'end'))
										: 'normal' === A.type &&
										  g &&
										  (this.next = g),
									B
								)
							},
							finish: function(A) {
								for (
									var g = this.tryEntries.length - 1;
									g >= 0;
									--g
								) {
									var C = this.tryEntries[g]
									if (C.finallyLoc === A)
										return (
											this.complete(
												C.completion,
												C.afterLoc
											),
											N(C),
											B
										)
								}
							},
							catch: function(A) {
								for (
									var g = this.tryEntries.length - 1;
									g >= 0;
									--g
								) {
									var C = this.tryEntries[g]
									if (C.tryLoc === A) {
										var e = C.completion
										if ('throw' === e.type) {
											var I = e.arg
											N(C)
										}
										return I
									}
								}
								throw new Error('illegal catch attempt')
							},
							delegateYield: function(A, g, e) {
								return (
									(this.delegate = {
										iterator: y(A),
										resultName: g,
										nextLoc: e
									}),
									'next' === this.method && (this.arg = C),
									B
								)
							}
						})
				}
				function w(A, g, C, e) {
					var I = g && g.prototype instanceof U ? g : U,
						t = Object.create(I.prototype),
						n = new x(e || [])
					return (
						(t._invoke = (function(A, g, C) {
							var e = a
							return function(I, t) {
								if (e === l)
									throw new Error(
										'Generator is already running'
									)
								if (e === u) {
									if ('throw' === I) throw t
									return K()
								}
								for (C.method = I, C.arg = t; ; ) {
									var n = C.delegate
									if (n) {
										var r = v(n, C)
										if (r) {
											if (r === B) continue
											return r
										}
									}
									if ('next' === C.method)
										C.sent = C._sent = C.arg
									else if ('throw' === C.method) {
										if (e === a) throw ((e = u), C.arg)
										C.dispatchException(C.arg)
									} else
										'return' === C.method &&
											C.abrupt('return', C.arg)
									e = l
									var o = Q(A, g, C)
									if ('normal' === o.type) {
										if (((e = C.done ? u : c), o.arg === B))
											continue
										return { value: o.arg, done: C.done }
									}
									'throw' === o.type &&
										((e = u),
										(C.method = 'throw'),
										(C.arg = o.arg))
								}
							}
						})(A, C, n)),
						t
					)
				}
				function Q(A, g, C) {
					try {
						return { type: 'normal', arg: A.call(g, C) }
					} catch (A) {
						return { type: 'throw', arg: A }
					}
				}
				function U() {}
				function E() {}
				function m() {}
				function F(A) {
					;['next', 'throw', 'return'].forEach(function(g) {
						A[g] = function(A) {
							return this._invoke(g, A)
						}
					})
				}
				function b(A) {
					var g
					this._invoke = function(C, e) {
						function t() {
							return new Promise(function(g, t) {
								!(function g(C, e, t, n) {
									var r = Q(A[C], A, e)
									if ('throw' !== r.type) {
										var o = r.arg,
											i = o.value
										return i &&
											'object' == typeof i &&
											I.call(i, '__await')
											? Promise.resolve(i.__await).then(
													function(A) {
														g('next', A, t, n)
													},
													function(A) {
														g('throw', A, t, n)
													}
											  )
											: Promise.resolve(i).then(function(
													A
											  ) {
													;(o.value = A), t(o)
											  },
											  n)
									}
									n(r.arg)
								})(C, e, g, t)
							})
						}
						return (g = g ? g.then(t, t) : t())
					}
				}
				function v(A, g) {
					var e = A.iterator[g.method]
					if (e === C) {
						if (((g.delegate = null), 'throw' === g.method)) {
							if (
								A.iterator.return &&
								((g.method = 'return'),
								(g.arg = C),
								v(A, g),
								'throw' === g.method)
							)
								return B
							;(g.method = 'throw'),
								(g.arg = new TypeError(
									"The iterator does not provide a 'throw' method"
								))
						}
						return B
					}
					var I = Q(e, A.iterator, g.arg)
					if ('throw' === I.type)
						return (
							(g.method = 'throw'),
							(g.arg = I.arg),
							(g.delegate = null),
							B
						)
					var t = I.arg
					return t
						? t.done
							? ((g[A.resultName] = t.value),
							  (g.next = A.nextLoc),
							  'return' !== g.method &&
									((g.method = 'next'), (g.arg = C)),
							  (g.delegate = null),
							  B)
							: t
						: ((g.method = 'throw'),
						  (g.arg = new TypeError(
								'iterator result is not an object'
						  )),
						  (g.delegate = null),
						  B)
				}
				function H(A) {
					var g = { tryLoc: A[0] }
					1 in A && (g.catchLoc = A[1]),
						2 in A && ((g.finallyLoc = A[2]), (g.afterLoc = A[3])),
						this.tryEntries.push(g)
				}
				function N(A) {
					var g = A.completion || {}
					;(g.type = 'normal'), delete g.arg, (A.completion = g)
				}
				function x(A) {
					;(this.tryEntries = [{ tryLoc: 'root' }]),
						A.forEach(H, this),
						this.reset(!0)
				}
				function y(A) {
					if (A) {
						var g = A[n]
						if (g) return g.call(A)
						if ('function' == typeof A.next) return A
						if (!isNaN(A.length)) {
							var e = -1,
								t = function g() {
									for (; ++e < A.length; )
										if (I.call(A, e))
											return (
												(g.value = A[e]),
												(g.done = !1),
												g
											)
									return (g.value = C), (g.done = !0), g
								}
							return (t.next = t)
						}
					}
					return { next: K }
				}
				function K() {
					return { value: C, done: !0 }
				}
			})(
				(function() {
					return this
				})() || Function('return this')()
			)
		},
		function(A, g, C) {
			C(83),
				C(93),
				C(164),
				C(168),
				C(176),
				C(177),
				(A.exports = C(4).Promise)
		},
		function(A, g, C) {
			C(165)
			for (
				var e = C(1),
					I = C(16),
					t = C(42),
					n = C(8)('toStringTag'),
					r = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
						','
					),
					o = 0;
				o < r.length;
				o++
			) {
				var i = r[o],
					s = e[i],
					a = s && s.prototype
				a && !a[n] && I(a, n, i), (t[i] = t.Array)
			}
		},
		function(A, g, C) {
			'use strict'
			var e = C(166),
				I = C(167),
				t = C(42),
				n = C(18)
			;(A.exports = C(94)(
				Array,
				'Array',
				function(A, g) {
					;(this._t = n(A)), (this._i = 0), (this._k = g)
				},
				function() {
					var A = this._t,
						g = this._k,
						C = this._i++
					return !A || C >= A.length
						? ((this._t = void 0), I(1))
						: I(
								0,
								'keys' == g
									? C
									: 'values' == g
									? A[C]
									: [C, A[C]]
						  )
				},
				'values'
			)),
				(t.Arguments = t.Array),
				e('keys'),
				e('values'),
				e('entries')
		},
		function(A, g) {
			A.exports = function() {}
		},
		function(A, g) {
			A.exports = function(A, g) {
				return { value: g, done: !!A }
			}
		},
		function(A, g, C) {
			'use strict'
			var e,
				I,
				t,
				n,
				r = C(23),
				o = C(1),
				i = C(20),
				s = C(99),
				a = C(15),
				c = C(9),
				l = C(27),
				u = C(169),
				B = C(170),
				p = C(102),
				h = C(103).set,
				d = C(172)(),
				f = C(72),
				w = C(104),
				Q = C(173),
				U = C(105),
				E = o.TypeError,
				m = o.process,
				F = m && m.versions,
				b = (F && F.v8) || '',
				v = o.Promise,
				H = 'process' == s(m),
				N = function() {},
				x = (I = f.f),
				y = !!(function() {
					try {
						var A = v.resolve(1),
							g = ((A.constructor = {})[
								C(8)('species')
							] = function(A) {
								A(N, N)
							})
						return (
							(H || 'function' == typeof PromiseRejectionEvent) &&
							A.then(N) instanceof g &&
							0 !== b.indexOf('6.6') &&
							-1 === Q.indexOf('Chrome/66')
						)
					} catch (A) {}
				})(),
				K = function(A) {
					var g
					return !(!c(A) || 'function' != typeof (g = A.then)) && g
				},
				T = function(A, g) {
					if (!A._n) {
						A._n = !0
						var C = A._c
						d(function() {
							for (
								var e = A._v,
									I = 1 == A._s,
									t = 0,
									n = function(g) {
										var C,
											t,
											n,
											r = I ? g.ok : g.fail,
											o = g.resolve,
											i = g.reject,
											s = g.domain
										try {
											r
												? (I ||
														(2 == A._h && L(A),
														(A._h = 1)),
												  !0 === r
														? (C = e)
														: (s && s.enter(),
														  (C = r(e)),
														  s &&
																(s.exit(),
																(n = !0))),
												  C === g.promise
														? i(
																E(
																	'Promise-chain cycle'
																)
														  )
														: (t = K(C))
														? t.call(C, o, i)
														: o(C))
												: i(e)
										} catch (A) {
											s && !n && s.exit(), i(A)
										}
									};
								C.length > t;

							)
								n(C[t++])
							;(A._c = []), (A._n = !1), g && !A._h && R(A)
						})
					}
				},
				R = function(A) {
					h.call(o, function() {
						var g,
							C,
							e,
							I = A._v,
							t = k(A)
						if (
							(t &&
								((g = w(function() {
									H
										? m.emit('unhandledRejection', I, A)
										: (C = o.onunhandledrejection)
										? C({ promise: A, reason: I })
										: (e = o.console) &&
										  e.error &&
										  e.error(
												'Unhandled promise rejection',
												I
										  )
								})),
								(A._h = H || k(A) ? 2 : 1)),
							(A._a = void 0),
							t && g.e)
						)
							throw g.v
					})
				},
				k = function(A) {
					return 1 !== A._h && 0 === (A._a || A._c).length
				},
				L = function(A) {
					h.call(o, function() {
						var g
						H
							? m.emit('rejectionHandled', A)
							: (g = o.onrejectionhandled) &&
							  g({ promise: A, reason: A._v })
					})
				},
				O = function(A) {
					var g = this
					g._d ||
						((g._d = !0),
						((g = g._w || g)._v = A),
						(g._s = 2),
						g._a || (g._a = g._c.slice()),
						T(g, !0))
				},
				D = function(A) {
					var g,
						C = this
					if (!C._d) {
						;(C._d = !0), (C = C._w || C)
						try {
							if (C === A)
								throw E("Promise can't be resolved itself")
							;(g = K(A))
								? d(function() {
										var e = { _w: C, _d: !1 }
										try {
											g.call(A, i(D, e, 1), i(O, e, 1))
										} catch (A) {
											O.call(e, A)
										}
								  })
								: ((C._v = A), (C._s = 1), T(C, !1))
						} catch (A) {
							O.call({ _w: C, _d: !1 }, A)
						}
					}
				}
			y ||
				((v = function(A) {
					u(this, v, 'Promise', '_h'), l(A), e.call(this)
					try {
						A(i(D, this, 1), i(O, this, 1))
					} catch (A) {
						O.call(this, A)
					}
				}),
				((e = function(A) {
					;(this._c = []),
						(this._a = void 0),
						(this._s = 0),
						(this._d = !1),
						(this._v = void 0),
						(this._h = 0),
						(this._n = !1)
				}).prototype = C(174)(v.prototype, {
					then: function(A, g) {
						var C = x(p(this, v))
						return (
							(C.ok = 'function' != typeof A || A),
							(C.fail = 'function' == typeof g && g),
							(C.domain = H ? m.domain : void 0),
							this._c.push(C),
							this._a && this._a.push(C),
							this._s && T(this, !1),
							C.promise
						)
					},
					catch: function(A) {
						return this.then(void 0, A)
					}
				})),
				(t = function() {
					var A = new e()
					;(this.promise = A),
						(this.resolve = i(D, A, 1)),
						(this.reject = i(O, A, 1))
				}),
				(f.f = x = function(A) {
					return A === v || A === n ? new t(A) : I(A)
				})),
				a(a.G + a.W + a.F * !y, { Promise: v }),
				C(44)(v, 'Promise'),
				C(175)('Promise'),
				(n = C(4).Promise),
				a(a.S + a.F * !y, 'Promise', {
					reject: function(A) {
						var g = x(this)
						return (0, g.reject)(A), g.promise
					}
				}),
				a(a.S + a.F * (r || !y), 'Promise', {
					resolve: function(A) {
						return U(r && this === n ? v : this, A)
					}
				}),
				a(
					a.S +
						a.F *
							!(
								y &&
								C(100)(function(A) {
									v.all(A).catch(N)
								})
							),
					'Promise',
					{
						all: function(A) {
							var g = this,
								C = x(g),
								e = C.resolve,
								I = C.reject,
								t = w(function() {
									var C = [],
										t = 0,
										n = 1
									B(A, !1, function(A) {
										var r = t++,
											o = !1
										C.push(void 0),
											n++,
											g.resolve(A).then(function(A) {
												o ||
													((o = !0),
													(C[r] = A),
													--n || e(C))
											}, I)
									}),
										--n || e(C)
								})
							return t.e && I(t.v), C.promise
						},
						race: function(A) {
							var g = this,
								C = x(g),
								e = C.reject,
								I = w(function() {
									B(A, !1, function(A) {
										g.resolve(A).then(C.resolve, e)
									})
								})
							return I.e && e(I.v), C.promise
						}
					}
				)
		},
		function(A, g) {
			A.exports = function(A, g, C, e) {
				if (!(A instanceof g) || (void 0 !== e && e in A))
					throw TypeError(C + ': incorrect invocation!')
				return A
			}
		},
		function(A, g, C) {
			var e = C(20),
				I = C(96),
				t = C(97),
				n = C(11),
				r = C(36),
				o = C(98),
				i = {},
				s = {}
			;((g = A.exports = function(A, g, C, a, c) {
				var l,
					u,
					B,
					p,
					h = c
						? function() {
								return A
						  }
						: o(A),
					d = e(C, a, g ? 2 : 1),
					f = 0
				if ('function' != typeof h)
					throw TypeError(A + ' is not iterable!')
				if (t(h)) {
					for (l = r(A.length); l > f; f++)
						if (
							(p = g ? d(n((u = A[f]))[0], u[1]) : d(A[f])) ===
								i ||
							p === s
						)
							return p
				} else
					for (B = h.call(A); !(u = B.next()).done; )
						if ((p = I(B, d, u.value, g)) === i || p === s) return p
			}).BREAK = i),
				(g.RETURN = s)
		},
		function(A, g) {
			A.exports = function(A, g, C) {
				var e = void 0 === C
				switch (g.length) {
					case 0:
						return e ? A() : A.call(C)
					case 1:
						return e ? A(g[0]) : A.call(C, g[0])
					case 2:
						return e ? A(g[0], g[1]) : A.call(C, g[0], g[1])
					case 3:
						return e
							? A(g[0], g[1], g[2])
							: A.call(C, g[0], g[1], g[2])
					case 4:
						return e
							? A(g[0], g[1], g[2], g[3])
							: A.call(C, g[0], g[1], g[2], g[3])
				}
				return A.apply(C, g)
			}
		},
		function(A, g, C) {
			var e = C(1),
				I = C(103).set,
				t = e.MutationObserver || e.WebKitMutationObserver,
				n = e.process,
				r = e.Promise,
				o = 'process' == C(22)(n)
			A.exports = function() {
				var A,
					g,
					C,
					i = function() {
						var e, I
						for (o && (e = n.domain) && e.exit(); A; ) {
							;(I = A.fn), (A = A.next)
							try {
								I()
							} catch (e) {
								throw (A ? C() : (g = void 0), e)
							}
						}
						;(g = void 0), e && e.enter()
					}
				if (o)
					C = function() {
						n.nextTick(i)
					}
				else if (!t || (e.navigator && e.navigator.standalone))
					if (r && r.resolve) {
						var s = r.resolve(void 0)
						C = function() {
							s.then(i)
						}
					} else
						C = function() {
							I.call(e, i)
						}
				else {
					var a = !0,
						c = document.createTextNode('')
					new t(i).observe(c, { characterData: !0 }),
						(C = function() {
							c.data = a = !a
						})
				}
				return function(e) {
					var I = { fn: e, next: void 0 }
					g && (g.next = I), A || ((A = I), C()), (g = I)
				}
			}
		},
		function(A, g, C) {
			var e = C(1).navigator
			A.exports = (e && e.userAgent) || ''
		},
		function(A, g, C) {
			var e = C(16)
			A.exports = function(A, g, C) {
				for (var I in g) C && A[I] ? (A[I] = g[I]) : e(A, I, g[I])
				return A
			}
		},
		function(A, g, C) {
			'use strict'
			var e = C(1),
				I = C(4),
				t = C(7),
				n = C(6),
				r = C(8)('species')
			A.exports = function(A) {
				var g = 'function' == typeof I[A] ? I[A] : e[A]
				n &&
					g &&
					!g[r] &&
					t.f(g, r, {
						configurable: !0,
						get: function() {
							return this
						}
					})
			}
		},
		function(A, g, C) {
			'use strict'
			var e = C(15),
				I = C(4),
				t = C(1),
				n = C(102),
				r = C(105)
			e(e.P + e.R, 'Promise', {
				finally: function(A) {
					var g = n(this, I.Promise || t.Promise),
						C = 'function' == typeof A
					return this.then(
						C
							? function(C) {
									return r(g, A()).then(function() {
										return C
									})
							  }
							: A,
						C
							? function(C) {
									return r(g, A()).then(function() {
										throw C
									})
							  }
							: A
					)
				}
			})
		},
		function(A, g, C) {
			'use strict'
			var e = C(15),
				I = C(72),
				t = C(104)
			e(e.S, 'Promise', {
				try: function(A) {
					var g = I.f(this),
						C = t(A)
					return (C.e ? g.reject : g.resolve)(C.v), g.promise
				}
			})
		},
		function(A, g, C) {
			'use strict'
			var e = C(59)
			C.n(e).a
		},
		function(A, g, C) {
			;(A.exports = C(2)(!1)).push([
				A.i,
				'.answer-paper-print {\n  display: inline-block;\n  position: fixed;\n  left: 200%;\n  top: 0%;\n}\n.answer-paper-print .btn-group,\n.answer-paper-print .scale-btn,\n.answer-paper-print .add-img-btn,\n.answer-paper-print .delete-img-btn {\n  display: none;\n}\n',
				''
			])
		}
	])
})
