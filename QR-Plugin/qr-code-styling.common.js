exports.QRCodeStyling = (() => {
    var t = {
            192: (t, e) => {
                var r,
                    n,
                    o = (function () {
                        var t = function (t, e) {
                            var r = t,
                                n = a[e],
                                o = null,
                                i = 0,
                                u = null,
                                v = [],
                                w = {},
                                _ = function (t, e) {
                                    (o = (function (t) {
                                        for (var e = new Array(t), r = 0; r < t; r += 1) {
                                            e[r] = new Array(t);
                                            for (var n = 0; n < t; n += 1) e[r][n] = null;
                                        }
                                        return e;
                                    })((i = 4 * r + 17))),
                                        m(0, 0),
                                        m(i - 7, 0),
                                        m(0, i - 7),
                                        x(),
                                        b(),
                                        S(t, e),
                                        r >= 7 && M(t),
                                        null == u && (u = P(r, n, v)),
                                        C(u, e);
                                },
                                m = function (t, e) {
                                    for (var r = -1; r <= 7; r += 1)
                                        if (!(t + r <= -1 || i <= t + r))
                                            for (var n = -1; n <= 7; n += 1)
                                                e + n <= -1 || i <= e + n || (o[t + r][e + n] = (0 <= r && r <= 6 && (0 == n || 6 == n)) || (0 <= n && n <= 6 && (0 == r || 6 == r)) || (2 <= r && r <= 4 && 2 <= n && n <= 4));
                                },
                                b = function () {
                                    for (var t = 8; t < i - 8; t += 1) null == o[t][6] && (o[t][6] = t % 2 == 0);
                                    for (var e = 8; e < i - 8; e += 1) null == o[6][e] && (o[6][e] = e % 2 == 0);
                                },
                                x = function () {
                                    for (var t = s.getPatternPosition(r), e = 0; e < t.length; e += 1)
                                        for (var n = 0; n < t.length; n += 1) {
                                            var i = t[e],
                                                a = t[n];
                                            if (null == o[i][a]) for (var u = -2; u <= 2; u += 1) for (var h = -2; h <= 2; h += 1) o[i + u][a + h] = -2 == u || 2 == u || -2 == h || 2 == h || (0 == u && 0 == h);
                                        }
                                },
                                M = function (t) {
                                    for (var e = s.getBCHTypeNumber(r), n = 0; n < 18; n += 1) {
                                        var a = !t && 1 == ((e >> n) & 1);
                                        o[Math.floor(n / 3)][(n % 3) + i - 8 - 3] = a;
                                    }
                                    for (n = 0; n < 18; n += 1) (a = !t && 1 == ((e >> n) & 1)), (o[(n % 3) + i - 8 - 3][Math.floor(n / 3)] = a);
                                },
                                S = function (t, e) {
                                    for (var r = (n << 3) | e, a = s.getBCHTypeInfo(r), u = 0; u < 15; u += 1) {
                                        var h = !t && 1 == ((a >> u) & 1);
                                        u < 6 ? (o[u][8] = h) : u < 8 ? (o[u + 1][8] = h) : (o[i - 15 + u][8] = h);
                                    }
                                    for (u = 0; u < 15; u += 1) (h = !t && 1 == ((a >> u) & 1)), u < 8 ? (o[8][i - u - 1] = h) : u < 9 ? (o[8][15 - u - 1 + 1] = h) : (o[8][15 - u - 1] = h);
                                    o[i - 8][8] = !t;
                                },
                                C = function (t, e) {
                                    for (var r = -1, n = i - 1, a = 7, u = 0, h = s.getMaskFunction(e), c = i - 1; c > 0; c -= 2)
                                        for (6 == c && (c -= 1); ; ) {
                                            for (var d = 0; d < 2; d += 1)
                                                if (null == o[n][c - d]) {
                                                    var l = !1;
                                                    u < t.length && (l = 1 == ((t[u] >>> a) & 1)), h(n, c - d) && (l = !l), (o[n][c - d] = l), -1 == (a -= 1) && ((u += 1), (a = 7));
                                                }
                                            if ((n += r) < 0 || i <= n) {
                                                (n -= r), (r = -r);
                                                break;
                                            }
                                        }
                                },
                                P = function (t, e, r) {
                                    for (var n = c.getRSBlocks(t, e), o = d(), i = 0; i < r.length; i += 1) {
                                        var a = r[i];
                                        o.put(a.getMode(), 4), o.put(a.getLength(), s.getLengthInBits(a.getMode(), t)), a.write(o);
                                    }
                                    var u = 0;
                                    for (i = 0; i < n.length; i += 1) u += n[i].dataCount;
                                    if (o.getLengthInBits() > 8 * u) throw "code length overflow. (" + o.getLengthInBits() + ">" + 8 * u + ")";
                                    for (o.getLengthInBits() + 4 <= 8 * u && o.put(0, 4); o.getLengthInBits() % 8 != 0; ) o.putBit(!1);
                                    for (; !(o.getLengthInBits() >= 8 * u || (o.put(236, 8), o.getLengthInBits() >= 8 * u)); ) o.put(17, 8);
                                    return (function (t, e) {
                                        for (var r = 0, n = 0, o = 0, i = new Array(e.length), a = new Array(e.length), u = 0; u < e.length; u += 1) {
                                            var c = e[u].dataCount,
                                                d = e[u].totalCount - c;
                                            (n = Math.max(n, c)), (o = Math.max(o, d)), (i[u] = new Array(c));
                                            for (var l = 0; l < i[u].length; l += 1) i[u][l] = 255 & t.getBuffer()[l + r];
                                            r += c;
                                            var f = s.getErrorCorrectPolynomial(d),
                                                g = h(i[u], f.getLength() - 1).mod(f);
                                            for (a[u] = new Array(f.getLength() - 1), l = 0; l < a[u].length; l += 1) {
                                                var p = l + g.getLength() - a[u].length;
                                                a[u][l] = p >= 0 ? g.getAt(p) : 0;
                                            }
                                        }
                                        var v = 0;
                                        for (l = 0; l < e.length; l += 1) v += e[l].totalCount;
                                        var w = new Array(v),
                                            y = 0;
                                        for (l = 0; l < n; l += 1) for (u = 0; u < e.length; u += 1) l < i[u].length && ((w[y] = i[u][l]), (y += 1));
                                        for (l = 0; l < o; l += 1) for (u = 0; u < e.length; u += 1) l < a[u].length && ((w[y] = a[u][l]), (y += 1));
                                        return w;
                                    })(o, n);
                                };
                            (w.addData = function (t, e) {
                                var r = null;
                                switch ((e = e || "Byte")) {
                                    case "Numeric":
                                        r = l(t);
                                        break;
                                    case "Alphanumeric":
                                        r = f(t);
                                        break;
                                    case "Byte":
                                        r = g(t);
                                        break;
                                    case "Kanji":
                                        r = p(t);
                                        break;
                                    default:
                                        throw "mode:" + e;
                                }
                                v.push(r), (u = null);
                            }),
                                (w.isDark = function (t, e) {
                                    if (t < 0 || i <= t || e < 0 || i <= e) throw t + "," + e;
                                    return o[t][e];
                                }),
                                (w.getModuleCount = function () {
                                    return i;
                                }),
                                (w.make = function () {
                                    if (r < 1) {
                                        for (var t = 1; t < 40; t++) {
                                            for (var e = c.getRSBlocks(t, n), o = d(), i = 0; i < v.length; i++) {
                                                var a = v[i];
                                                o.put(a.getMode(), 4), o.put(a.getLength(), s.getLengthInBits(a.getMode(), t)), a.write(o);
                                            }
                                            var u = 0;
                                            for (i = 0; i < e.length; i++) u += e[i].dataCount;
                                            if (o.getLengthInBits() <= 8 * u) break;
                                        }
                                        r = t;
                                    }
                                    _(
                                        !1,
                                        (function () {
                                            for (var t = 0, e = 0, r = 0; r < 8; r += 1) {
                                                _(!0, r);
                                                var n = s.getLostPoint(w);
                                                (0 == r || t > n) && ((t = n), (e = r));
                                            }
                                            return e;
                                        })()
                                    );
                                }),
                                (w.createTableTag = function (t, e) {
                                    t = t || 2;
                                    var r = "";
                                    (r += '<table style="'),
                                        (r += " border-width: 0px; border-style: none;"),
                                        (r += " border-collapse: collapse;"),
                                        (r += " padding: 0px; margin: " + (e = void 0 === e ? 4 * t : e) + "px;"),
                                        (r += '">'),
                                        (r += "<tbody>");
                                    for (var n = 0; n < w.getModuleCount(); n += 1) {
                                        r += "<tr>";
                                        for (var o = 0; o < w.getModuleCount(); o += 1)
                                            (r += '<td style="'),
                                                (r += " border-width: 0px; border-style: none;"),
                                                (r += " border-collapse: collapse;"),
                                                (r += " padding: 0px; margin: 0px;"),
                                                (r += " width: " + t + "px;"),
                                                (r += " height: " + t + "px;"),
                                                (r += " background-color: "),
                                                (r += w.isDark(n, o) ? "#000000" : "#ffffff"),
                                                (r += ";"),
                                                (r += '"/>');
                                        r += "</tr>";
                                    }
                                    return (r += "</tbody>") + "</table>";
                                }),
                                (w.createSvgTag = function (t, e, r, n) {
                                    var o = {};
                                    "object" == typeof arguments[0] && ((t = (o = arguments[0]).cellSize), (e = o.margin), (r = o.alt), (n = o.title)),
                                        (t = t || 2),
                                        (e = void 0 === e ? 4 * t : e),
                                        ((r = "string" == typeof r ? { text: r } : r || {}).text = r.text || null),
                                        (r.id = r.text ? r.id || "qrcode-description" : null),
                                        ((n = "string" == typeof n ? { text: n } : n || {}).text = n.text || null),
                                        (n.id = n.text ? n.id || "qrcode-title" : null);
                                    var i,
                                        a,
                                        s,
                                        u,
                                        h = w.getModuleCount() * t + 2 * e,
                                        c = "";
                                    for (
                                        u = "l" + t + ",0 0," + t + " -" + t + ",0 0,-" + t + "z ",
                                            c += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',
                                            c += o.scalable ? "" : ' width="' + h + 'px" height="' + h + 'px"',
                                            c += ' viewBox="0 0 ' + h + " " + h + '" ',
                                            c += ' preserveAspectRatio="xMinYMin meet"',
                                            c += n.text || r.text ? ' role="img" aria-labelledby="' + O([n.id, r.id].join(" ").trim()) + '"' : "",
                                            c += ">",
                                            c += n.text ? '<title id="' + O(n.id) + '">' + O(n.text) + "</title>" : "",
                                            c += r.text ? '<description id="' + O(r.id) + '">' + O(r.text) + "</description>" : "",
                                            c += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',
                                            c += '<path d="',
                                            a = 0;
                                        a < w.getModuleCount();
                                        a += 1
                                    )
                                        for (s = a * t + e, i = 0; i < w.getModuleCount(); i += 1) w.isDark(a, i) && (c += "M" + (i * t + e) + "," + s + u);
                                    return (c += '" stroke="transparent" fill="black"/>') + "</svg>";
                                }),
                                (w.createDataURL = function (t, e) {
                                    (t = t || 2), (e = void 0 === e ? 4 * t : e);
                                    var r = w.getModuleCount() * t + 2 * e,
                                        n = e,
                                        o = r - e;
                                    return y(r, r, function (e, r) {
                                        if (n <= e && e < o && n <= r && r < o) {
                                            var i = Math.floor((e - n) / t),
                                                a = Math.floor((r - n) / t);
                                            return w.isDark(a, i) ? 0 : 1;
                                        }
                                        return 1;
                                    });
                                }),
                                (w.createImgTag = function (t, e, r) {
                                    (t = t || 2), (e = void 0 === e ? 4 * t : e);
                                    var n = w.getModuleCount() * t + 2 * e,
                                        o = "";
                                    return (
                                        (o += "<img"),
                                        (o += ' src="'),
                                        (o += w.createDataURL(t, e)),
                                        (o += '"'),
                                        (o += ' width="'),
                                        (o += n),
                                        (o += '"'),
                                        (o += ' height="'),
                                        (o += n),
                                        (o += '"'),
                                        r && ((o += ' alt="'), (o += O(r)), (o += '"')),
                                        o + "/>"
                                    );
                                });
                            var O = function (t) {
                                for (var e = "", r = 0; r < t.length; r += 1) {
                                    var n = t.charAt(r);
                                    switch (n) {
                                        case "<":
                                            e += "&lt;";
                                            break;
                                        case ">":
                                            e += "&gt;";
                                            break;
                                        case "&":
                                            e += "&amp;";
                                            break;
                                        case '"':
                                            e += "&quot;";
                                            break;
                                        default:
                                            e += n;
                                    }
                                }
                                return e;
                            };
                            return (
                                (w.createASCII = function (t, e) {
                                    if ((t = t || 1) < 2)
                                        return (function (t) {
                                            t = void 0 === t ? 2 : t;
                                            var e,
                                                r,
                                                n,
                                                o,
                                                i,
                                                a = 1 * w.getModuleCount() + 2 * t,
                                                s = t,
                                                u = a - t,
                                                h = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " },
                                                c = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " },
                                                d = "";
                                            for (e = 0; e < a; e += 2) {
                                                for (n = Math.floor((e - s) / 1), o = Math.floor((e + 1 - s) / 1), r = 0; r < a; r += 1)
                                                    (i = "█"),
                                                        s <= r && r < u && s <= e && e < u && w.isDark(n, Math.floor((r - s) / 1)) && (i = " "),
                                                        s <= r && r < u && s <= e + 1 && e + 1 < u && w.isDark(o, Math.floor((r - s) / 1)) ? (i += " ") : (i += "█"),
                                                        (d += t < 1 && e + 1 >= u ? c[i] : h[i]);
                                                d += "\n";
                                            }
                                            return a % 2 && t > 0 ? d.substring(0, d.length - a - 1) + Array(a + 1).join("▀") : d.substring(0, d.length - 1);
                                        })(e);
                                    (t -= 1), (e = void 0 === e ? 2 * t : e);
                                    var r,
                                        n,
                                        o,
                                        i,
                                        a = w.getModuleCount() * t + 2 * e,
                                        s = e,
                                        u = a - e,
                                        h = Array(t + 1).join("██"),
                                        c = Array(t + 1).join("  "),
                                        d = "",
                                        l = "";
                                    for (r = 0; r < a; r += 1) {
                                        for (o = Math.floor((r - s) / t), l = "", n = 0; n < a; n += 1) (i = 1), s <= n && n < u && s <= r && r < u && w.isDark(o, Math.floor((n - s) / t)) && (i = 0), (l += i ? h : c);
                                        for (o = 0; o < t; o += 1) d += l + "\n";
                                    }
                                    return d.substring(0, d.length - 1);
                                }),
                                (w.renderTo2dContext = function (t, e) {
                                    e = e || 2;
                                    for (var r = w.getModuleCount(), n = 0; n < r; n++) for (var o = 0; o < r; o++) (t.fillStyle = w.isDark(n, o) ? "black" : "white"), t.fillRect(n * e, o * e, e, e);
                                }),
                                w
                            );
                        };
                        (t.stringToBytes = (t.stringToBytesFuncs = {
                            default: function (t) {
                                for (var e = [], r = 0; r < t.length; r += 1) {
                                    var n = t.charCodeAt(r);
                                    e.push(255 & n);
                                }
                                return e;
                            },
                        }).default),
                            (t.createStringToBytes = function (t, e) {
                                var r = (function () {
                                        for (
                                            var r = w(t),
                                                n = function () {
                                                    var t = r.read();
                                                    if (-1 == t) throw "eof";
                                                    return t;
                                                },
                                                o = 0,
                                                i = {};
                                            ;

                                        ) {
                                            var a = r.read();
                                            if (-1 == a) break;
                                            var s = n(),
                                                u = (n() << 8) | n();
                                            (i[String.fromCharCode((a << 8) | s)] = u), (o += 1);
                                        }
                                        if (o != e) throw o + " != " + e;
                                        return i;
                                    })(),
                                    n = "?".charCodeAt(0);
                                return function (t) {
                                    for (var e = [], o = 0; o < t.length; o += 1) {
                                        var i = t.charCodeAt(o);
                                        if (i < 128) e.push(i);
                                        else {
                                            var a = r[t.charAt(o)];
                                            "number" == typeof a ? ((255 & a) == a ? e.push(a) : (e.push(a >>> 8), e.push(255 & a))) : e.push(n);
                                        }
                                    }
                                    return e;
                                };
                            });
                        var e,
                            r,
                            n,
                            o,
                            i,
                            a = { L: 1, M: 0, Q: 3, H: 2 },
                            s =
                                ((e = [
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
                                    [6, 30, 58, 86, 114, 142, 170],
                                ]),
                                (r = 1335),
                                (n = 7973),
                                (i = function (t) {
                                    for (var e = 0; 0 != t; ) (e += 1), (t >>>= 1);
                                    return e;
                                }),
                                ((o = {}).getBCHTypeInfo = function (t) {
                                    for (var e = t << 10; i(e) - i(r) >= 0; ) e ^= r << (i(e) - i(r));
                                    return 21522 ^ ((t << 10) | e);
                                }),
                                (o.getBCHTypeNumber = function (t) {
                                    for (var e = t << 12; i(e) - i(n) >= 0; ) e ^= n << (i(e) - i(n));
                                    return (t << 12) | e;
                                }),
                                (o.getPatternPosition = function (t) {
                                    return e[t - 1];
                                }),
                                (o.getMaskFunction = function (t) {
                                    switch (t) {
                                        case 0:
                                            return function (t, e) {
                                                return (t + e) % 2 == 0;
                                            };
                                        case 1:
                                            return function (t, e) {
                                                return t % 2 == 0;
                                            };
                                        case 2:
                                            return function (t, e) {
                                                return e % 3 == 0;
                                            };
                                        case 3:
                                            return function (t, e) {
                                                return (t + e) % 3 == 0;
                                            };
                                        case 4:
                                            return function (t, e) {
                                                return (Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0;
                                            };
                                        case 5:
                                            return function (t, e) {
                                                return ((t * e) % 2) + ((t * e) % 3) == 0;
                                            };
                                        case 6:
                                            return function (t, e) {
                                                return (((t * e) % 2) + ((t * e) % 3)) % 2 == 0;
                                            };
                                        case 7:
                                            return function (t, e) {
                                                return (((t * e) % 3) + ((t + e) % 2)) % 2 == 0;
                                            };
                                        default:
                                            throw "bad maskPattern:" + t;
                                    }
                                }),
                                (o.getErrorCorrectPolynomial = function (t) {
                                    for (var e = h([1], 0), r = 0; r < t; r += 1) e = e.multiply(h([1, u.gexp(r)], 0));
                                    return e;
                                }),
                                (o.getLengthInBits = function (t, e) {
                                    if (1 <= e && e < 10)
                                        switch (t) {
                                            case 1:
                                                return 10;
                                            case 2:
                                                return 9;
                                            case 4:
                                            case 8:
                                                return 8;
                                            default:
                                                throw "mode:" + t;
                                        }
                                    else if (e < 27)
                                        switch (t) {
                                            case 1:
                                                return 12;
                                            case 2:
                                                return 11;
                                            case 4:
                                                return 16;
                                            case 8:
                                                return 10;
                                            default:
                                                throw "mode:" + t;
                                        }
                                    else {
                                        if (!(e < 41)) throw "type:" + e;
                                        switch (t) {
                                            case 1:
                                                return 14;
                                            case 2:
                                                return 13;
                                            case 4:
                                                return 16;
                                            case 8:
                                                return 12;
                                            default:
                                                throw "mode:" + t;
                                        }
                                    }
                                }),
                                (o.getLostPoint = function (t) {
                                    for (var e = t.getModuleCount(), r = 0, n = 0; n < e; n += 1)
                                        for (var o = 0; o < e; o += 1) {
                                            for (var i = 0, a = t.isDark(n, o), s = -1; s <= 1; s += 1)
                                                if (!(n + s < 0 || e <= n + s)) for (var u = -1; u <= 1; u += 1) o + u < 0 || e <= o + u || (0 == s && 0 == u) || (a == t.isDark(n + s, o + u) && (i += 1));
                                            i > 5 && (r += 3 + i - 5);
                                        }
                                    for (n = 0; n < e - 1; n += 1)
                                        for (o = 0; o < e - 1; o += 1) {
                                            var h = 0;
                                            t.isDark(n, o) && (h += 1), t.isDark(n + 1, o) && (h += 1), t.isDark(n, o + 1) && (h += 1), t.isDark(n + 1, o + 1) && (h += 1), (0 != h && 4 != h) || (r += 3);
                                        }
                                    for (n = 0; n < e; n += 1)
                                        for (o = 0; o < e - 6; o += 1) t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (r += 40);
                                    for (o = 0; o < e; o += 1)
                                        for (n = 0; n < e - 6; n += 1) t.isDark(n, o) && !t.isDark(n + 1, o) && t.isDark(n + 2, o) && t.isDark(n + 3, o) && t.isDark(n + 4, o) && !t.isDark(n + 5, o) && t.isDark(n + 6, o) && (r += 40);
                                    var c = 0;
                                    for (o = 0; o < e; o += 1) for (n = 0; n < e; n += 1) t.isDark(n, o) && (c += 1);
                                    return r + (Math.abs((100 * c) / e / e - 50) / 5) * 10;
                                }),
                                o),
                            u = (function () {
                                for (var t = new Array(256), e = new Array(256), r = 0; r < 8; r += 1) t[r] = 1 << r;
                                for (r = 8; r < 256; r += 1) t[r] = t[r - 4] ^ t[r - 5] ^ t[r - 6] ^ t[r - 8];
                                for (r = 0; r < 255; r += 1) e[t[r]] = r;
                                return {
                                    glog: function (t) {
                                        if (t < 1) throw "glog(" + t + ")";
                                        return e[t];
                                    },
                                    gexp: function (e) {
                                        for (; e < 0; ) e += 255;
                                        for (; e >= 256; ) e -= 255;
                                        return t[e];
                                    },
                                };
                            })();
                        function h(t, e) {
                            if (void 0 === t.length) throw t.length + "/" + e;
                            var r = (function () {
                                    for (var r = 0; r < t.length && 0 == t[r]; ) r += 1;
                                    for (var n = new Array(t.length - r + e), o = 0; o < t.length - r; o += 1) n[o] = t[o + r];
                                    return n;
                                })(),
                                n = {
                                    getAt: function (t) {
                                        return r[t];
                                    },
                                    getLength: function () {
                                        return r.length;
                                    },
                                    multiply: function (t) {
                                        for (var e = new Array(n.getLength() + t.getLength() - 1), r = 0; r < n.getLength(); r += 1) for (var o = 0; o < t.getLength(); o += 1) e[r + o] ^= u.gexp(u.glog(n.getAt(r)) + u.glog(t.getAt(o)));
                                        return h(e, 0);
                                    },
                                    mod: function (t) {
                                        if (n.getLength() - t.getLength() < 0) return n;
                                        for (var e = u.glog(n.getAt(0)) - u.glog(t.getAt(0)), r = new Array(n.getLength()), o = 0; o < n.getLength(); o += 1) r[o] = n.getAt(o);
                                        for (o = 0; o < t.getLength(); o += 1) r[o] ^= u.gexp(u.glog(t.getAt(o)) + e);
                                        return h(r, 0).mod(t);
                                    },
                                };
                            return n;
                        }
                        var c = (function () {
                                var t = [
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
                                        [11, 36, 12, 7, 37, 13],
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
                                        [20, 45, 15, 61, 46, 16],
                                    ],
                                    e = function (t, e) {
                                        var r = {};
                                        return (r.totalCount = t), (r.dataCount = e), r;
                                    },
                                    r = {
                                        getRSBlocks: function (r, n) {
                                            var o = (function (e, r) {
                                                switch (r) {
                                                    case a.L:
                                                        return t[4 * (e - 1) + 0];
                                                    case a.M:
                                                        return t[4 * (e - 1) + 1];
                                                    case a.Q:
                                                        return t[4 * (e - 1) + 2];
                                                    case a.H:
                                                        return t[4 * (e - 1) + 3];
                                                    default:
                                                        return;
                                                }
                                            })(r, n);
                                            if (void 0 === o) throw "bad rs block @ typeNumber:" + r + "/errorCorrectionLevel:" + n;
                                            for (var i = o.length / 3, s = [], u = 0; u < i; u += 1) for (var h = o[3 * u + 0], c = o[3 * u + 1], d = o[3 * u + 2], l = 0; l < h; l += 1) s.push(e(c, d));
                                            return s;
                                        },
                                    };
                                return r;
                            })(),
                            d = function () {
                                var t = [],
                                    e = 0,
                                    r = {
                                        getBuffer: function () {
                                            return t;
                                        },
                                        getAt: function (e) {
                                            var r = Math.floor(e / 8);
                                            return 1 == ((t[r] >>> (7 - (e % 8))) & 1);
                                        },
                                        put: function (t, e) {
                                            for (var n = 0; n < e; n += 1) r.putBit(1 == ((t >>> (e - n - 1)) & 1));
                                        },
                                        getLengthInBits: function () {
                                            return e;
                                        },
                                        putBit: function (r) {
                                            var n = Math.floor(e / 8);
                                            t.length <= n && t.push(0), r && (t[n] |= 128 >>> e % 8), (e += 1);
                                        },
                                    };
                                return r;
                            },
                            l = function (t) {
                                var e = t,
                                    r = {
                                        getMode: function () {
                                            return 1;
                                        },
                                        getLength: function (t) {
                                            return e.length;
                                        },
                                        write: function (t) {
                                            for (var r = e, o = 0; o + 2 < r.length; ) t.put(n(r.substring(o, o + 3)), 10), (o += 3);
                                            o < r.length && (r.length - o == 1 ? t.put(n(r.substring(o, o + 1)), 4) : r.length - o == 2 && t.put(n(r.substring(o, o + 2)), 7));
                                        },
                                    },
                                    n = function (t) {
                                        for (var e = 0, r = 0; r < t.length; r += 1) e = 10 * e + o(t.charAt(r));
                                        return e;
                                    },
                                    o = function (t) {
                                        if ("0" <= t && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0);
                                        throw "illegal char :" + t;
                                    };
                                return r;
                            },
                            f = function (t) {
                                var e = t,
                                    r = {
                                        getMode: function () {
                                            return 2;
                                        },
                                        getLength: function (t) {
                                            return e.length;
                                        },
                                        write: function (t) {
                                            for (var r = e, o = 0; o + 1 < r.length; ) t.put(45 * n(r.charAt(o)) + n(r.charAt(o + 1)), 11), (o += 2);
                                            o < r.length && t.put(n(r.charAt(o)), 6);
                                        },
                                    },
                                    n = function (t) {
                                        if ("0" <= t && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0);
                                        if ("A" <= t && t <= "Z") return t.charCodeAt(0) - "A".charCodeAt(0) + 10;
                                        switch (t) {
                                            case " ":
                                                return 36;
                                            case "$":
                                                return 37;
                                            case "%":
                                                return 38;
                                            case "*":
                                                return 39;
                                            case "+":
                                                return 40;
                                            case "-":
                                                return 41;
                                            case ".":
                                                return 42;
                                            case "/":
                                                return 43;
                                            case ":":
                                                return 44;
                                            default:
                                                throw "illegal char :" + t;
                                        }
                                    };
                                return r;
                            },
                            g = function (e) {
                                var r = t.stringToBytes(e);
                                return {
                                    getMode: function () {
                                        return 4;
                                    },
                                    getLength: function (t) {
                                        return r.length;
                                    },
                                    write: function (t) {
                                        for (var e = 0; e < r.length; e += 1) t.put(r[e], 8);
                                    },
                                };
                            },
                            p = function (e) {
                                var r = t.stringToBytesFuncs.SJIS;
                                if (!r) throw "sjis not supported.";
                                !(function (t, e) {
                                    var n = r("友");
                                    if (2 != n.length || 38726 != ((n[0] << 8) | n[1])) throw "sjis not supported.";
                                })();
                                var n = r(e);
                                return {
                                    getMode: function () {
                                        return 8;
                                    },
                                    getLength: function (t) {
                                        return ~~(n.length / 2);
                                    },
                                    write: function (t) {
                                        for (var e = n, r = 0; r + 1 < e.length; ) {
                                            var o = ((255 & e[r]) << 8) | (255 & e[r + 1]);
                                            if (33088 <= o && o <= 40956) o -= 33088;
                                            else {
                                                if (!(57408 <= o && o <= 60351)) throw "illegal char at " + (r + 1) + "/" + o;
                                                o -= 49472;
                                            }
                                            (o = 192 * ((o >>> 8) & 255) + (255 & o)), t.put(o, 13), (r += 2);
                                        }
                                        if (r < e.length) throw "illegal char at " + (r + 1);
                                    },
                                };
                            },
                            v = function () {
                                var t = [],
                                    e = {
                                        writeByte: function (e) {
                                            t.push(255 & e);
                                        },
                                        writeShort: function (t) {
                                            e.writeByte(t), e.writeByte(t >>> 8);
                                        },
                                        writeBytes: function (t, r, n) {
                                            (r = r || 0), (n = n || t.length);
                                            for (var o = 0; o < n; o += 1) e.writeByte(t[o + r]);
                                        },
                                        writeString: function (t) {
                                            for (var r = 0; r < t.length; r += 1) e.writeByte(t.charCodeAt(r));
                                        },
                                        toByteArray: function () {
                                            return t;
                                        },
                                        toString: function () {
                                            var e = "";
                                            e += "[";
                                            for (var r = 0; r < t.length; r += 1) r > 0 && (e += ","), (e += t[r]);
                                            return e + "]";
                                        },
                                    };
                                return e;
                            },
                            w = function (t) {
                                var e = t,
                                    r = 0,
                                    n = 0,
                                    o = 0,
                                    i = {
                                        read: function () {
                                            for (; o < 8; ) {
                                                if (r >= e.length) {
                                                    if (0 == o) return -1;
                                                    throw "unexpected end of file./" + o;
                                                }
                                                var t = e.charAt(r);
                                                if (((r += 1), "=" == t)) return (o = 0), -1;
                                                t.match(/^\s$/) || ((n = (n << 6) | a(t.charCodeAt(0))), (o += 6));
                                            }
                                            var i = (n >>> (o - 8)) & 255;
                                            return (o -= 8), i;
                                        },
                                    },
                                    a = function (t) {
                                        if (65 <= t && t <= 90) return t - 65;
                                        if (97 <= t && t <= 122) return t - 97 + 26;
                                        if (48 <= t && t <= 57) return t - 48 + 52;
                                        if (43 == t) return 62;
                                        if (47 == t) return 63;
                                        throw "c:" + t;
                                    };
                                return i;
                            },
                            y = function (t, e, r) {
                                for (
                                    var n = (function (t, e) {
                                            var r = t,
                                                n = e,
                                                o = new Array(t * e),
                                                i = {
                                                    setPixel: function (t, e, n) {
                                                        o[e * r + t] = n;
                                                    },
                                                    write: function (t) {
                                                        t.writeString("GIF87a"),
                                                            t.writeShort(r),
                                                            t.writeShort(n),
                                                            t.writeByte(128),
                                                            t.writeByte(0),
                                                            t.writeByte(0),
                                                            t.writeByte(0),
                                                            t.writeByte(0),
                                                            t.writeByte(0),
                                                            t.writeByte(255),
                                                            t.writeByte(255),
                                                            t.writeByte(255),
                                                            t.writeString(","),
                                                            t.writeShort(0),
                                                            t.writeShort(0),
                                                            t.writeShort(r),
                                                            t.writeShort(n),
                                                            t.writeByte(0);
                                                        var e = a(2);
                                                        t.writeByte(2);
                                                        for (var o = 0; e.length - o > 255; ) t.writeByte(255), t.writeBytes(e, o, 255), (o += 255);
                                                        t.writeByte(e.length - o), t.writeBytes(e, o, e.length - o), t.writeByte(0), t.writeString(";");
                                                    },
                                                },
                                                a = function (t) {
                                                    for (var e = 1 << t, r = 1 + (1 << t), n = t + 1, i = s(), a = 0; a < e; a += 1) i.add(String.fromCharCode(a));
                                                    i.add(String.fromCharCode(e)), i.add(String.fromCharCode(r));
                                                    var u,
                                                        h,
                                                        c,
                                                        d = v(),
                                                        l =
                                                            ((u = d),
                                                            (h = 0),
                                                            (c = 0),
                                                            {
                                                                write: function (t, e) {
                                                                    if (t >>> e != 0) throw "length over";
                                                                    for (; h + e >= 8; ) u.writeByte(255 & ((t << h) | c)), (e -= 8 - h), (t >>>= 8 - h), (c = 0), (h = 0);
                                                                    (c |= t << h), (h += e);
                                                                },
                                                                flush: function () {
                                                                    h > 0 && u.writeByte(c);
                                                                },
                                                            });
                                                    l.write(e, n);
                                                    var f = 0,
                                                        g = String.fromCharCode(o[f]);
                                                    for (f += 1; f < o.length; ) {
                                                        var p = String.fromCharCode(o[f]);
                                                        (f += 1), i.contains(g + p) ? (g += p) : (l.write(i.indexOf(g), n), i.size() < 4095 && (i.size() == 1 << n && (n += 1), i.add(g + p)), (g = p));
                                                    }
                                                    return l.write(i.indexOf(g), n), l.write(r, n), l.flush(), d.toByteArray();
                                                },
                                                s = function () {
                                                    var t = {},
                                                        e = 0,
                                                        r = {
                                                            add: function (n) {
                                                                if (r.contains(n)) throw "dup key:" + n;
                                                                (t[n] = e), (e += 1);
                                                            },
                                                            size: function () {
                                                                return e;
                                                            },
                                                            indexOf: function (e) {
                                                                return t[e];
                                                            },
                                                            contains: function (e) {
                                                                return void 0 !== t[e];
                                                            },
                                                        };
                                                    return r;
                                                };
                                            return i;
                                        })(t, e),
                                        o = 0;
                                    o < e;
                                    o += 1
                                )
                                    for (var i = 0; i < t; i += 1) n.setPixel(i, o, r(i, o));
                                var a = v();
                                n.write(a);
                                for (
                                    var s = (function () {
                                            var t = 0,
                                                e = 0,
                                                r = 0,
                                                n = "",
                                                o = {},
                                                i = function (t) {
                                                    n += String.fromCharCode(a(63 & t));
                                                },
                                                a = function (t) {
                                                    if (t < 0);
                                                    else {
                                                        if (t < 26) return 65 + t;
                                                        if (t < 52) return t - 26 + 97;
                                                        if (t < 62) return t - 52 + 48;
                                                        if (62 == t) return 43;
                                                        if (63 == t) return 47;
                                                    }
                                                    throw "n:" + t;
                                                };
                                            return (
                                                (o.writeByte = function (n) {
                                                    for (t = (t << 8) | (255 & n), e += 8, r += 1; e >= 6; ) i(t >>> (e - 6)), (e -= 6);
                                                }),
                                                (o.flush = function () {
                                                    if ((e > 0 && (i(t << (6 - e)), (t = 0), (e = 0)), r % 3 != 0)) for (var o = 3 - (r % 3), a = 0; a < o; a += 1) n += "=";
                                                }),
                                                (o.toString = function () {
                                                    return n;
                                                }),
                                                o
                                            );
                                        })(),
                                        u = a.toByteArray(),
                                        h = 0;
                                    h < u.length;
                                    h += 1
                                )
                                    s.writeByte(u[h]);
                                return s.flush(), "data:image/gif;base64," + s;
                            };
                        return t;
                    })();
                (o.stringToBytesFuncs["UTF-8"] = function (t) {
                    return (function (t) {
                        for (var e = [], r = 0; r < t.length; r++) {
                            var n = t.charCodeAt(r);
                            n < 128
                                ? e.push(n)
                                : n < 2048
                                ? e.push(192 | (n >> 6), 128 | (63 & n))
                                : n < 55296 || n >= 57344
                                ? e.push(224 | (n >> 12), 128 | ((n >> 6) & 63), 128 | (63 & n))
                                : (r++, (n = 65536 + (((1023 & n) << 10) | (1023 & t.charCodeAt(r)))), e.push(240 | (n >> 18), 128 | ((n >> 12) & 63), 128 | ((n >> 6) & 63), 128 | (63 & n)));
                        }
                        return e;
                    })(t);
                }),
                    void 0 ===
                        (n =
                            "function" ==
                            typeof (r = function () {
                                return o;
                            })
                                ? r.apply(e, [])
                                : r) || (t.exports = n);
            },
            664: (t, e, r) => {
                "use strict";
                r.d(e, { default: () => Z });
                var n = function () {
                        return (n =
                            Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                    },
                    o = function () {
                        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
                        var n = Array(t),
                            o = 0;
                        for (e = 0; e < r; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) n[o] = i[a];
                        return n;
                    },
                    i = function (t) {
                        return !!t && "object" == typeof t && !Array.isArray(t);
                    };
                function a(t) {
                    for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                    if (!e.length) return t;
                    var s = e.shift();
                    return void 0 !== s && i(t) && i(s)
                        ? ((t = n({}, t)),
                          Object.keys(s).forEach(function (e) {
                              var r = t[e],
                                  n = s[e];
                              Array.isArray(r) && Array.isArray(n) ? (t[e] = n) : i(r) && i(n) ? (t[e] = a(Object.assign({}, r), n)) : (t[e] = n);
                          }),
                          a.apply(void 0, o([t], e)))
                        : t;
                }
                function s(t, e) {
                    var r = document.createElement("a");
                    (r.download = e), (r.href = t), document.body.appendChild(r), r.click(), document.body.removeChild(r);
                }
                function u(t) {
                    var e = t.originalHeight,
                        r = t.originalWidth,
                        n = t.maxHiddenDots,
                        o = t.maxHiddenAxisDots,
                        i = t.dotSize,
                        a = { x: 0, y: 0 },
                        s = { x: 0, y: 0 };
                    if (e <= 0 || r <= 0 || n <= 0 || i <= 0) return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 };
                    var u = e / r;
                    return (
                        (a.x = Math.floor(Math.sqrt(n / u))),
                        a.x <= 0 && (a.x = 1),
                        o && o < a.x && (a.x = o),
                        a.x % 2 == 0 && a.x--,
                        (s.x = a.x * i),
                        (a.y = 1 + 2 * Math.ceil((a.x * u - 1) / 2)),
                        (s.y = Math.round(s.x * u)),
                        (a.y * a.x > n || (o && o < a.y)) && (o && o < a.y ? ((a.y = o), a.y % 2 == 0 && a.x--) : (a.y -= 2), (s.y = a.y * i), (a.x = 1 + 2 * Math.ceil((a.y / u - 1) / 2)), (s.x = Math.round(s.y / u))),
                        { height: s.y, width: s.x, hideYDots: a.y, hideXDots: a.x }
                    );
                }
                const h = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 },
                    c = "dots",
                    d = "rounded",
                    l = "classy",
                    f = "classy-rounded",
                    g = "square",
                    p = "extra-rounded";
                var v = function () {
                    return (v =
                        Object.assign ||
                        function (t) {
                            for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return t;
                        }).apply(this, arguments);
                };
                const w = (function () {
                        function t(t) {
                            var e = t.context,
                                r = t.type;
                            (this._context = e), (this._type = r);
                        }
                        return (
                            (t.prototype.draw = function (t, e, r, n) {
                                var o,
                                    i = this._context;
                                switch (this._type) {
                                    case c:
                                        o = this._drawDot;
                                        break;
                                    case l:
                                        o = this._drawClassy;
                                        break;
                                    case f:
                                        o = this._drawClassyRounded;
                                        break;
                                    case d:
                                        o = this._drawRounded;
                                        break;
                                    case p:
                                        o = this._drawExtraRounded;
                                        break;
                                    case g:
                                    default:
                                        o = this._drawSquare;
                                }
                                o.call(this, { x: t, y: e, size: r, context: i, getNeighbor: n });
                            }),
                            (t.prototype._rotateFigure = function (t) {
                                var e = t.x,
                                    r = t.y,
                                    n = t.size,
                                    o = t.context,
                                    i = t.rotation,
                                    a = void 0 === i ? 0 : i,
                                    s = t.draw,
                                    u = e + n / 2,
                                    h = r + n / 2;
                                o.translate(u, h), a && o.rotate(a), s(), o.closePath(), a && o.rotate(-a), o.translate(-u, -h);
                            }),
                            (t.prototype._basicDot = function (t) {
                                var e = t.size,
                                    r = t.context;
                                this._rotateFigure(
                                    v(v({}, t), {
                                        draw: function () {
                                            r.arc(0, 0, e / 2, 0, 2 * Math.PI);
                                        },
                                    })
                                );
                            }),
                            (t.prototype._basicSquare = function (t) {
                                var e = t.size,
                                    r = t.context;
                                this._rotateFigure(
                                    v(v({}, t), {
                                        draw: function () {
                                            r.rect(-e / 2, -e / 2, e, e);
                                        },
                                    })
                                );
                            }),
                            (t.prototype._basicSideRounded = function (t) {
                                var e = t.size,
                                    r = t.context;
                                this._rotateFigure(
                                    v(v({}, t), {
                                        draw: function () {
                                            r.arc(0, 0, e / 2, -Math.PI / 2, Math.PI / 2), r.lineTo(-e / 2, e / 2), r.lineTo(-e / 2, -e / 2), r.lineTo(0, -e / 2);
                                        },
                                    })
                                );
                            }),
                            (t.prototype._basicCornerRounded = function (t) {
                                var e = t.size,
                                    r = t.context;
                                this._rotateFigure(
                                    v(v({}, t), {
                                        draw: function () {
                                            r.arc(0, 0, e / 2, -Math.PI / 2, 0), r.lineTo(e / 2, e / 2), r.lineTo(-e / 2, e / 2), r.lineTo(-e / 2, -e / 2), r.lineTo(0, -e / 2);
                                        },
                                    })
                                );
                            }),
                            (t.prototype._basicCornerExtraRounded = function (t) {
                                var e = t.size,
                                    r = t.context;
                                this._rotateFigure(
                                    v(v({}, t), {
                                        draw: function () {
                                            r.arc(-e / 2, e / 2, e, -Math.PI / 2, 0), r.lineTo(-e / 2, e / 2), r.lineTo(-e / 2, -e / 2);
                                        },
                                    })
                                );
                            }),
                            (t.prototype._basicCornersRounded = function (t) {
                                var e = t.size,
                                    r = t.context;
                                this._rotateFigure(
                                    v(v({}, t), {
                                        draw: function () {
                                            r.arc(0, 0, e / 2, -Math.PI / 2, 0), r.lineTo(e / 2, e / 2), r.lineTo(0, e / 2), r.arc(0, 0, e / 2, Math.PI / 2, Math.PI), r.lineTo(-e / 2, -e / 2), r.lineTo(0, -e / 2);
                                        },
                                    })
                                );
                            }),
                            (t.prototype._basicCornersExtraRounded = function (t) {
                                var e = t.size,
                                    r = t.context;
                                this._rotateFigure(
                                    v(v({}, t), {
                                        draw: function () {
                                            r.arc(-e / 2, e / 2, e, -Math.PI / 2, 0), r.arc(e / 2, -e / 2, e, Math.PI / 2, Math.PI);
                                        },
                                    })
                                );
                            }),
                            (t.prototype._drawDot = function (t) {
                                var e = t.x,
                                    r = t.y,
                                    n = t.size,
                                    o = t.context;
                                this._basicDot({ x: e, y: r, size: n, context: o, rotation: 0 });
                            }),
                            (t.prototype._drawSquare = function (t) {
                                var e = t.x,
                                    r = t.y,
                                    n = t.size,
                                    o = t.context;
                                this._basicSquare({ x: e, y: r, size: n, context: o, rotation: 0 });
                            }),
                            (t.prototype._drawRounded = function (t) {
                                var e = t.x,
                                    r = t.y,
                                    n = t.size,
                                    o = t.context,
                                    i = t.getNeighbor,
                                    a = i ? +i(-1, 0) : 0,
                                    s = i ? +i(1, 0) : 0,
                                    u = i ? +i(0, -1) : 0,
                                    h = i ? +i(0, 1) : 0,
                                    c = a + s + u + h;
                                if (0 !== c)
                                    if (c > 2 || (a && s) || (u && h)) this._basicSquare({ x: e, y: r, size: n, context: o, rotation: 0 });
                                    else {
                                        if (2 === c) {
                                            var d = 0;
                                            return a && u ? (d = Math.PI / 2) : u && s ? (d = Math.PI) : s && h && (d = -Math.PI / 2), void this._basicCornerRounded({ x: e, y: r, size: n, context: o, rotation: d });
                                        }
                                        if (1 === c) return (d = 0), u ? (d = Math.PI / 2) : s ? (d = Math.PI) : h && (d = -Math.PI / 2), void this._basicSideRounded({ x: e, y: r, size: n, context: o, rotation: d });
                                    }
                                else this._basicDot({ x: e, y: r, size: n, context: o, rotation: 0 });
                            }),
                            (t.prototype._drawExtraRounded = function (t) {
                                var e = t.x,
                                    r = t.y,
                                    n = t.size,
                                    o = t.context,
                                    i = t.getNeighbor,
                                    a = i ? +i(-1, 0) : 0,
                                    s = i ? +i(1, 0) : 0,
                                    u = i ? +i(0, -1) : 0,
                                    h = i ? +i(0, 1) : 0,
                                    c = a + s + u + h;
                                if (0 !== c)
                                    if (c > 2 || (a && s) || (u && h)) this._basicSquare({ x: e, y: r, size: n, context: o, rotation: 0 });
                                    else {
                                        if (2 === c) {
                                            var d = 0;
                                            return a && u ? (d = Math.PI / 2) : u && s ? (d = Math.PI) : s && h && (d = -Math.PI / 2), void this._basicCornerExtraRounded({ x: e, y: r, size: n, context: o, rotation: d });
                                        }
                                        if (1 === c) return (d = 0), u ? (d = Math.PI / 2) : s ? (d = Math.PI) : h && (d = -Math.PI / 2), void this._basicSideRounded({ x: e, y: r, size: n, context: o, rotation: d });
                                    }
                                else this._basicDot({ x: e, y: r, size: n, context: o, rotation: 0 });
                            }),
                            (t.prototype._drawClassy = function (t) {
                                var e = t.x,
                                    r = t.y,
                                    n = t.size,
                                    o = t.context,
                                    i = t.getNeighbor,
                                    a = i ? +i(-1, 0) : 0,
                                    s = i ? +i(1, 0) : 0,
                                    u = i ? +i(0, -1) : 0,
                                    h = i ? +i(0, 1) : 0;
                                0 !== a + s + u + h
                                    ? a || u
                                        ? s || h
                                            ? this._basicSquare({ x: e, y: r, size: n, context: o, rotation: 0 })
                                            : this._basicCornerRounded({ x: e, y: r, size: n, context: o, rotation: Math.PI / 2 })
                                        : this._basicCornerRounded({ x: e, y: r, size: n, context: o, rotation: -Math.PI / 2 })
                                    : this._basicCornersRounded({ x: e, y: r, size: n, context: o, rotation: Math.PI / 2 });
                            }),
                            (t.prototype._drawClassyRounded = function (t) {
                                var e = t.x,
                                    r = t.y,
                                    n = t.size,
                                    o = t.context,
                                    i = t.getNeighbor,
                                    a = i ? +i(-1, 0) : 0,
                                    s = i ? +i(1, 0) : 0,
                                    u = i ? +i(0, -1) : 0,
                                    h = i ? +i(0, 1) : 0;
                                0 !== a + s + u + h
                                    ? a || u
                                        ? s || h
                                            ? this._basicSquare({ x: e, y: r, size: n, context: o, rotation: 0 })
                                            : this._basicCornerExtraRounded({ x: e, y: r, size: n, context: o, rotation: Math.PI / 2 })
                                        : this._basicCornerExtraRounded({ x: e, y: r, size: n, context: o, rotation: -Math.PI / 2 })
                                    : this._basicCornersRounded({ x: e, y: r, size: n, context: o, rotation: Math.PI / 2 });
                            }),
                            t
                        );
                    })(),
                    y = "square",
                    _ = "extra-rounded";
                var m = function () {
                    return (m =
                        Object.assign ||
                        function (t) {
                            for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return t;
                        }).apply(this, arguments);
                };
                const b = (function () {
                        function t(t) {
                            var e = t.context,
                                r = t.type;
                            (this._context = e), (this._type = r);
                        }
                        return (
                            (t.prototype.draw = function (t, e, r, n) {
                                var o,
                                    i = this._context;
                                switch (this._type) {
                                    case y:
                                        o = this._drawSquare;
                                        break;
                                    case _:
                                        o = this._drawExtraRounded;
                                        break;
                                    case "dot":
                                    default:
                                        o = this._drawDot;
                                }
                                o.call(this, { x: t, y: e, size: r, context: i, rotation: n });
                            }),
                            (t.prototype._rotateFigure = function (t) {
                                var e = t.x,
                                    r = t.y,
                                    n = t.size,
                                    o = t.context,
                                    i = t.rotation,
                                    a = void 0 === i ? 0 : i,
                                    s = t.draw,
                                    u = e + n / 2,
                                    h = r + n / 2;
                                o.translate(u, h), a && o.rotate(a), s(), o.closePath(), a && o.rotate(-a), o.translate(-u, -h);
                            }),
                            (t.prototype._basicDot = function (t) {
                                var e = t.size,
                                    r = t.context,
                                    n = e / 7;
                                this._rotateFigure(
                                    m(m({}, t), {
                                        draw: function () {
                                            r.arc(0, 0, e / 2, 0, 2 * Math.PI), r.arc(0, 0, e / 2 - n, 0, 2 * Math.PI);
                                        },
                                    })
                                );
                            }),
                            (t.prototype._basicSquare = function (t) {
                                var e = t.size,
                                    r = t.context,
                                    n = e / 7;
                                this._rotateFigure(
                                    m(m({}, t), {
                                        draw: function () {
                                            r.rect(-e / 2, -e / 2, e, e), r.rect(-e / 2 + n, -e / 2 + n, e - 2 * n, e - 2 * n);
                                        },
                                    })
                                );
                            }),
                            (t.prototype._basicExtraRounded = function (t) {
                                var e = t.size,
                                    r = t.context,
                                    n = e / 7;
                                this._rotateFigure(
                                    m(m({}, t), {
                                        draw: function () {
                                            r.arc(-n, -n, 2.5 * n, Math.PI, -Math.PI / 2),
                                                r.lineTo(n, -3.5 * n),
                                                r.arc(n, -n, 2.5 * n, -Math.PI / 2, 0),
                                                r.lineTo(3.5 * n, -n),
                                                r.arc(n, n, 2.5 * n, 0, Math.PI / 2),
                                                r.lineTo(-n, 3.5 * n),
                                                r.arc(-n, n, 2.5 * n, Math.PI / 2, Math.PI),
                                                r.lineTo(-3.5 * n, -n),
                                                r.arc(-n, -n, 1.5 * n, Math.PI, -Math.PI / 2),
                                                r.lineTo(n, -2.5 * n),
                                                r.arc(n, -n, 1.5 * n, -Math.PI / 2, 0),
                                                r.lineTo(2.5 * n, -n),
                                                r.arc(n, n, 1.5 * n, 0, Math.PI / 2),
                                                r.lineTo(-n, 2.5 * n),
                                                r.arc(-n, n, 1.5 * n, Math.PI / 2, Math.PI),
                                                r.lineTo(-2.5 * n, -n);
                                        },
                                    })
                                );
                            }),
                            (t.prototype._drawDot = function (t) {
                                var e = t.x,
                                    r = t.y,
                                    n = t.size,
                                    o = t.context,
                                    i = t.rotation;
                                this._basicDot({ x: e, y: r, size: n, context: o, rotation: i });
                            }),
                            (t.prototype._drawSquare = function (t) {
                                var e = t.x,
                                    r = t.y,
                                    n = t.size,
                                    o = t.context,
                                    i = t.rotation;
                                this._basicSquare({ x: e, y: r, size: n, context: o, rotation: i });
                            }),
                            (t.prototype._drawExtraRounded = function (t) {
                                var e = t.x,
                                    r = t.y,
                                    n = t.size,
                                    o = t.context,
                                    i = t.rotation;
                                this._basicExtraRounded({ x: e, y: r, size: n, context: o, rotation: i });
                            }),
                            t
                        );
                    })(),
                    x = "square",
                    M = "extra-rounded";
                var S = function () {
                    return (S =
                        Object.assign ||
                        function (t) {
                            for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return t;
                        }).apply(this, arguments);
                };
                const C = (function () {
                        function t(t) {
                            var e = t.context,
                                r = t.type;
                            (this._context = e), (this._type = r);
                        }
                        return (
                            (t.prototype.draw = function (t, e, r, n) {
                                var o,
                                    i = this._context;
                                switch (this._type) {
                                    case x:
                                        o = this._drawSquare;
                                        break;
                                    case M:
                                        o = this._drawExtraRounded;
                                        break;
                                    case "dot":
                                    default:
                                        o = this._drawDot;
                                }
                                o.call(this, { x: t, y: e, size: r, context: i, rotation: n });
                            }),
                            (t.prototype._rotateFigure = function (t) {
                                var e = t.x,
                                    r = t.y,
                                    n = t.size,
                                    o = t.context,
                                    i = t.rotation,
                                    a = void 0 === i ? 0 : i,
                                    s = t.draw,
                                    u = e + n / 2,
                                    h = r + n / 2;
                                o.translate(u, h), a && o.rotate(a), s(), o.closePath(), a && o.rotate(-a), o.translate(-u, -h);
                            }),
                            (t.prototype._basicDot = function (t) {
                                var e = t.size,
                                    r = t.context;
                                this._rotateFigure(
                                    S(S({}, t), {
                                        draw: function () {
                                            r.arc(0, 0, e / 2, 0, 2 * Math.PI);
                                        },
                                    })
                                );
                            }),
                            (t.prototype._basicSquare = function (t) {
                                var e = t.size,
                                    r = t.context;
                                this._rotateFigure(
                                    S(S({}, t), {
                                        draw: function () {
                                            r.rect(-e / 2, -e / 2, e, e);
                                        },
                                    })
                                );
                            }),
                            (t.prototype._basicExtraRounded = function (t) {
                                var e = t.size,
                                    r = t.context,
                                    n = e / 3,
                                    o = e / 6,
                                    i = n + o;
                                this._rotateFigure(
                                    S(S({}, t), {
                                        draw: function () {
                                            r.arc(o, -o, n, -Math.PI / 2, 0),
                                                r.arc(-o, -o, n, Math.PI, (3 * Math.PI) / 2),
                                                r.arc(-o, o, n, Math.PI / 2, Math.PI),
                                                r.arc(o, o, n, 0, Math.PI / 2),
                                                r.rect(-o, -i, n, n),
                                                r.rect(-o, o, n, n),
                                                r.rect(-i, -o, n, n),
                                                r.rect(o, -o, n, n);
                                        },
                                    })
                                );
                            }),
                            (t.prototype._drawDot = function (t) {
                                var e = t.x,
                                    r = t.y,
                                    n = t.size,
                                    o = t.context,
                                    i = t.rotation;
                                this._basicDot({ x: e, y: r, size: n, context: o, rotation: i });
                            }),
                            (t.prototype._drawSquare = function (t) {
                                var e = t.x,
                                    r = t.y,
                                    n = t.size,
                                    o = t.context,
                                    i = t.rotation;
                                this._basicSquare({ x: e, y: r, size: n, context: o, rotation: i });
                            }),
                            (t.prototype._drawExtraRounded = function (t) {
                                var e = t.x,
                                    r = t.y,
                                    n = t.size,
                                    o = t.context,
                                    i = t.rotation;
                                this._basicExtraRounded({ x: e, y: r, size: n, context: o, rotation: i });
                            }),
                            t
                        );
                    })(),
                    P = "radial";
                var O = [
                        [1, 1, 1, 1, 1, 1, 1],
                        [1, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 0, 1],
                        [1, 1, 1, 1, 1, 1, 1],
                    ],
                    z = [
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                    ];
                const I = (function () {
                    function t(t) {
                        var e;
                        (null === (e = t.nodeCanvas) || void 0 === e ? void 0 : e.createCanvas) ? (this._canvas = t.nodeCanvas.createCanvas(t.width, t.height)) : (this._canvas = document.createElement("canvas")),
                            (this._canvas.width = t.width),
                            (this._canvas.height = t.height),
                            (this._options = t);
                    }
                    return (
                        Object.defineProperty(t.prototype, "context", {
                            get: function () {
                                return this._canvas.getContext("2d");
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "width", {
                            get: function () {
                                return this._canvas.width;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "height", {
                            get: function () {
                                return this._canvas.height;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getCanvas = function () {
                            return this._canvas;
                        }),
                        (t.prototype.clear = function () {
                            var t = this.context;
                            t && t.clearRect(0, 0, this._canvas.width, this._canvas.height);
                        }),
                        (t.prototype.drawQR = function (t) {
                            return (
                                (e = this),
                                (r = void 0),
                                (o = function () {
                                    var e,
                                        r,
                                        n,
                                        o,
                                        i,
                                        a,
                                        s,
                                        c,
                                        d,
                                        l = this;
                                    return (function (t, e) {
                                        var r,
                                            n,
                                            o,
                                            i,
                                            a = {
                                                label: 0,
                                                sent: function () {
                                                    if (1 & o[0]) throw o[1];
                                                    return o[1];
                                                },
                                                trys: [],
                                                ops: [],
                                            };
                                        return (
                                            (i = { next: s(0), throw: s(1), return: s(2) }),
                                            "function" == typeof Symbol &&
                                                (i[Symbol.iterator] = function () {
                                                    return this;
                                                }),
                                            i
                                        );
                                        function s(i) {
                                            return function (s) {
                                                return (function (i) {
                                                    if (r) throw new TypeError("Generator is already executing.");
                                                    for (; a; )
                                                        try {
                                                            if (((r = 1), n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done)) return o;
                                                            switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                                                case 0:
                                                                case 1:
                                                                    o = i;
                                                                    break;
                                                                case 4:
                                                                    return a.label++, { value: i[1], done: !1 };
                                                                case 5:
                                                                    a.label++, (n = i[1]), (i = [0]);
                                                                    continue;
                                                                case 7:
                                                                    (i = a.ops.pop()), a.trys.pop();
                                                                    continue;
                                                                default:
                                                                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                                                        a = 0;
                                                                        continue;
                                                                    }
                                                                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                                                        a.label = i[1];
                                                                        break;
                                                                    }
                                                                    if (6 === i[0] && a.label < o[1]) {
                                                                        (a.label = o[1]), (o = i);
                                                                        break;
                                                                    }
                                                                    if (o && a.label < o[2]) {
                                                                        (a.label = o[2]), a.ops.push(i);
                                                                        break;
                                                                    }
                                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                                    continue;
                                                            }
                                                            i = e.call(t, a);
                                                        } catch (t) {
                                                            (i = [6, t]), (n = 0);
                                                        } finally {
                                                            r = o = 0;
                                                        }
                                                    if (5 & i[0]) throw i[1];
                                                    return { value: i[0] ? i[1] : void 0, done: !0 };
                                                })([i, s]);
                                            };
                                        }
                                    })(this, function (f) {
                                        switch (f.label) {
                                            case 0:
                                                return (
                                                    (e = t.getModuleCount()),
                                                    (r = Math.min(this._options.width, this._options.height) - 2 * this._options.margin),
                                                    (n = Math.floor(r / e)),
                                                    (o = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 }),
                                                    (this._qr = t),
                                                    this._options.image ? [4, this.loadImage()] : [3, 2]
                                                );
                                            case 1:
                                                if ((f.sent(), !this._image)) return [2];
                                                (i = this._options),
                                                    (a = i.imageOptions),
                                                    (s = i.qrOptions),
                                                    (c = a.imageSize * h[s.errorCorrectionLevel]),
                                                    (d = Math.floor(c * e * e)),
                                                    (o = u({ originalWidth: this._image.width, originalHeight: this._image.height, maxHiddenDots: d, maxHiddenAxisDots: e - 14, dotSize: n })),
                                                    (f.label = 2);
                                            case 2:
                                                return (
                                                    this.clear(),
                                                    this.drawBackground(),
                                                    this.drawDots(function (t, r) {
                                                        var n, i, a, s, u, h;
                                                        return !(
                                                            (l._options.imageOptions.hideBackgroundDots && t >= (e - o.hideXDots) / 2 && t < (e + o.hideXDots) / 2 && r >= (e - o.hideYDots) / 2 && r < (e + o.hideYDots) / 2) ||
                                                            (null === (n = O[t]) || void 0 === n ? void 0 : n[r]) ||
                                                            (null === (i = O[t - e + 7]) || void 0 === i ? void 0 : i[r]) ||
                                                            (null === (a = O[t]) || void 0 === a ? void 0 : a[r - e + 7]) ||
                                                            (null === (s = z[t]) || void 0 === s ? void 0 : s[r]) ||
                                                            (null === (u = z[t - e + 7]) || void 0 === u ? void 0 : u[r]) ||
                                                            (null === (h = z[t]) || void 0 === h ? void 0 : h[r - e + 7])
                                                        );
                                                    }),
                                                    this.drawCorners(),
                                                    this._options.image && this.drawImage({ width: o.width, height: o.height, count: e, dotSize: n }),
                                                    [2]
                                                );
                                        }
                                    });
                                }),
                                new ((n = void 0) || (n = Promise))(function (t, i) {
                                    function a(t) {
                                        try {
                                            u(o.next(t));
                                        } catch (t) {
                                            i(t);
                                        }
                                    }
                                    function s(t) {
                                        try {
                                            u(o.throw(t));
                                        } catch (t) {
                                            i(t);
                                        }
                                    }
                                    function u(e) {
                                        var r;
                                        e.done
                                            ? t(e.value)
                                            : ((r = e.value),
                                              r instanceof n
                                                  ? r
                                                  : new n(function (t) {
                                                        t(r);
                                                    })).then(a, s);
                                    }
                                    u((o = o.apply(e, r || [])).next());
                                })
                            );
                            var e, r, n, o;
                        }),
                        (t.prototype.drawBackground = function () {
                            var t = this.context,
                                e = this._options;
                            if (t) {
                                if (e.backgroundOptions.gradient) {
                                    var r = e.backgroundOptions.gradient,
                                        n = this._createGradient({ context: t, options: r, additionalRotation: 0, x: 0, y: 0, size: this._canvas.width > this._canvas.height ? this._canvas.width : this._canvas.height });
                                    r.colorStops.forEach(function (t) {
                                        var e = t.offset,
                                            r = t.color;
                                        n.addColorStop(e, r);
                                    }),
                                        (t.fillStyle = n);
                                } else e.backgroundOptions.color && (t.fillStyle = e.backgroundOptions.color);
                                t.fillRect(0, 0, this._canvas.width, this._canvas.height);
                            }
                        }),
                        (t.prototype.drawDots = function (t) {
                            var e = this;
                            if (!this._qr) throw "QR code is not defined";
                            var r = this.context;
                            if (!r) throw "QR code is not defined";
                            var n = this._options,
                                o = this._qr.getModuleCount();
                            if (o > n.width || o > n.height) throw "The canvas is too small.";
                            var i = Math.min(n.width, n.height) - 2 * n.margin,
                                a = Math.floor(i / o),
                                s = Math.floor((n.width - o * a) / 2),
                                u = Math.floor((n.height - o * a) / 2),
                                h = new w({ context: r, type: n.dotsOptions.type });
                            r.beginPath();
                            for (
                                var c = function (r) {
                                        for (
                                            var n = function (n) {
                                                    return t && !t(r, n)
                                                        ? "continue"
                                                        : d._qr.isDark(r, n)
                                                        ? void h.draw(s + r * a, u + n * a, a, function (i, a) {
                                                              return !(r + i < 0 || n + a < 0 || r + i >= o || n + a >= o) && !(t && !t(r + i, n + a)) && !!e._qr && e._qr.isDark(r + i, n + a);
                                                          })
                                                        : "continue";
                                                },
                                                i = 0;
                                            i < o;
                                            i++
                                        )
                                            n(i);
                                    },
                                    d = this,
                                    l = 0;
                                l < o;
                                l++
                            )
                                c(l);
                            if (n.dotsOptions.gradient) {
                                var f = n.dotsOptions.gradient,
                                    g = this._createGradient({ context: r, options: f, additionalRotation: 0, x: s, y: u, size: o * a });
                                f.colorStops.forEach(function (t) {
                                    var e = t.offset,
                                        r = t.color;
                                    g.addColorStop(e, r);
                                }),
                                    (r.fillStyle = r.strokeStyle = g);
                            } else n.dotsOptions.color && (r.fillStyle = r.strokeStyle = n.dotsOptions.color);
                            r.fill("evenodd");
                        }),
                        (t.prototype.drawCorners = function (t) {
                            var e = this;
                            if (!this._qr) throw "QR code is not defined";
                            var r = this.context;
                            if (!r) throw "QR code is not defined";
                            var n = this._options,
                                o = this._qr.getModuleCount(),
                                i = Math.min(n.width, n.height) - 2 * n.margin,
                                a = Math.floor(i / o),
                                s = 7 * a,
                                u = 3 * a,
                                h = Math.floor((n.width - o * a) / 2),
                                c = Math.floor((n.height - o * a) / 2);
                            [
                                [0, 0, 0],
                                [1, 0, Math.PI / 2],
                                [0, 1, -Math.PI / 2],
                            ].forEach(function (i) {
                                var d,
                                    l,
                                    f,
                                    g,
                                    p,
                                    v,
                                    y,
                                    _,
                                    m,
                                    x,
                                    M = i[0],
                                    S = i[1],
                                    P = i[2];
                                if (!t || t(M, S)) {
                                    var I = h + M * a * (o - 7),
                                        A = c + S * a * (o - 7);
                                    if (null === (d = n.cornersSquareOptions) || void 0 === d ? void 0 : d.type) {
                                        var D = new b({ context: r, type: null === (l = n.cornersSquareOptions) || void 0 === l ? void 0 : l.type });
                                        r.beginPath(), D.draw(I, A, s, P);
                                    } else {
                                        var k = new w({ context: r, type: n.dotsOptions.type });
                                        r.beginPath();
                                        for (
                                            var R = function (t) {
                                                    for (
                                                        var e = function (e) {
                                                                if (!(null === (f = O[t]) || void 0 === f ? void 0 : f[e])) return "continue";
                                                                k.draw(I + t * a, A + e * a, a, function (r, n) {
                                                                    var o;
                                                                    return !!(null === (o = O[t + r]) || void 0 === o ? void 0 : o[e + n]);
                                                                });
                                                            },
                                                            r = 0;
                                                        r < O[t].length;
                                                        r++
                                                    )
                                                        e(r);
                                                },
                                                q = 0;
                                            q < O.length;
                                            q++
                                        )
                                            R(q);
                                    }
                                    if (null === (g = n.cornersSquareOptions) || void 0 === g ? void 0 : g.gradient) {
                                        var B = n.cornersSquareOptions.gradient,
                                            E = e._createGradient({ context: r, options: B, additionalRotation: P, x: I, y: A, size: s });
                                        B.colorStops.forEach(function (t) {
                                            var e = t.offset,
                                                r = t.color;
                                            E.addColorStop(e, r);
                                        }),
                                            (r.fillStyle = r.strokeStyle = E);
                                    } else (null === (p = n.cornersSquareOptions) || void 0 === p ? void 0 : p.color) && (r.fillStyle = r.strokeStyle = n.cornersSquareOptions.color);
                                    if ((r.fill("evenodd"), null === (v = n.cornersDotOptions) || void 0 === v ? void 0 : v.type)) {
                                        var L = new C({ context: r, type: null === (y = n.cornersDotOptions) || void 0 === y ? void 0 : y.type });
                                        r.beginPath(), L.draw(I + 2 * a, A + 2 * a, u, P);
                                    } else {
                                        (k = new w({ context: r, type: n.dotsOptions.type })), r.beginPath();
                                        var N = function (t) {
                                            for (
                                                var e = function (e) {
                                                        if (!(null === (_ = z[t]) || void 0 === _ ? void 0 : _[e])) return "continue";
                                                        k.draw(I + t * a, A + e * a, a, function (r, n) {
                                                            var o;
                                                            return !!(null === (o = z[t + r]) || void 0 === o ? void 0 : o[e + n]);
                                                        });
                                                    },
                                                    r = 0;
                                                r < z[t].length;
                                                r++
                                            )
                                                e(r);
                                        };
                                        for (q = 0; q < z.length; q++) N(q);
                                    }
                                    if (null === (m = n.cornersDotOptions) || void 0 === m ? void 0 : m.gradient) {
                                        B = n.cornersDotOptions.gradient;
                                        var T = e._createGradient({ context: r, options: B, additionalRotation: P, x: I + 2 * a, y: A + 2 * a, size: u });
                                        B.colorStops.forEach(function (t) {
                                            var e = t.offset,
                                                r = t.color;
                                            T.addColorStop(e, r);
                                        }),
                                            (r.fillStyle = r.strokeStyle = T);
                                    } else (null === (x = n.cornersDotOptions) || void 0 === x ? void 0 : x.color) && (r.fillStyle = r.strokeStyle = n.cornersDotOptions.color);
                                    r.fill("evenodd");
                                }
                            });
                        }),
                        (t.prototype.loadImage = function () {
                            var t = this;
                            return new Promise(function (e, r) {
                                var n,
                                    o = t._options;
                                if (!o.image) return r("Image is not defined");
                                if (null === (n = o.nodeCanvas) || void 0 === n ? void 0 : n.loadImage)
                                    o.nodeCanvas
                                        .loadImage(o.image)
                                        .then(function (r) {
                                            var n;
                                            /(\.svg$)|(^data:image\/svg)/.test(null !== (n = o.image) && void 0 !== n ? n : "") && ((r.width = t._options.width), (r.height = t._options.height)), (t._image = r), e();
                                        })
                                        .catch(r);
                                else {
                                    var i = new Image();
                                    "string" == typeof o.imageOptions.crossOrigin && (i.crossOrigin = o.imageOptions.crossOrigin),
                                        (t._image = i),
                                        (i.onload = function () {
                                            e();
                                        }),
                                        (i.src = o.image);
                                }
                            });
                        }),
                        (t.prototype.drawImage = function (t) {
                            var e = t.width,
                                r = t.height,
                                n = t.count,
                                o = t.dotSize,
                                i = this.context;
                            if (!i) throw "canvasContext is not defined";
                            if (!this._image) throw "image is not defined";
                            var a = this._options,
                                s = Math.floor((a.width - n * o) / 2),
                                u = Math.floor((a.height - n * o) / 2),
                                h = s + a.imageOptions.margin + (n * o - e) / 2,
                                c = u + a.imageOptions.margin + (n * o - r) / 2,
                                d = e - 2 * a.imageOptions.margin,
                                l = r - 2 * a.imageOptions.margin;
                            i.drawImage(this._image, h, c, d < 0 ? 0 : d, l < 0 ? 0 : l);
                        }),
                        (t.prototype._createGradient = function (t) {
                            var e,
                                r = t.context,
                                n = t.options,
                                o = t.additionalRotation,
                                i = t.x,
                                a = t.y,
                                s = t.size;
                            if (n.type === P) e = r.createRadialGradient(i + s / 2, a + s / 2, 0, i + s / 2, a + s / 2, s / 2);
                            else {
                                var u = ((n.rotation || 0) + o) % (2 * Math.PI),
                                    h = (u + 2 * Math.PI) % (2 * Math.PI),
                                    c = i + s / 2,
                                    d = a + s / 2,
                                    l = i + s / 2,
                                    f = a + s / 2;
                                (h >= 0 && h <= 0.25 * Math.PI) || (h > 1.75 * Math.PI && h <= 2 * Math.PI)
                                    ? ((c -= s / 2), (d -= (s / 2) * Math.tan(u)), (l += s / 2), (f += (s / 2) * Math.tan(u)))
                                    : h > 0.25 * Math.PI && h <= 0.75 * Math.PI
                                    ? ((d -= s / 2), (c -= s / 2 / Math.tan(u)), (f += s / 2), (l += s / 2 / Math.tan(u)))
                                    : h > 0.75 * Math.PI && h <= 1.25 * Math.PI
                                    ? ((c += s / 2), (d += (s / 2) * Math.tan(u)), (l -= s / 2), (f -= (s / 2) * Math.tan(u)))
                                    : h > 1.25 * Math.PI && h <= 1.75 * Math.PI && ((d += s / 2), (c += s / 2 / Math.tan(u)), (f -= s / 2), (l -= s / 2 / Math.tan(u))),
                                    (e = r.createLinearGradient(Math.round(c), Math.round(d), Math.round(l), Math.round(f)));
                            }
                            return e;
                        }),
                        t
                    );
                })();
                var A = function () {
                    return (A =
                        Object.assign ||
                        function (t) {
                            for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return t;
                        }).apply(this, arguments);
                };
                const D = (function () {
                    function t(t) {
                        var e = t.svg,
                            r = t.type,
                            n = t.window;
                        (this._svg = e), (this._type = r), (this._window = n);
                    }
                    return (
                        (t.prototype.draw = function (t, e, r, n) {
                            var o;
                            switch (this._type) {
                                case c:
                                    o = this._drawDot;
                                    break;
                                case l:
                                    o = this._drawClassy;
                                    break;
                                case f:
                                    o = this._drawClassyRounded;
                                    break;
                                case d:
                                    o = this._drawRounded;
                                    break;
                                case p:
                                    o = this._drawExtraRounded;
                                    break;
                                case g:
                                default:
                                    o = this._drawSquare;
                            }
                            o.call(this, { x: t, y: e, size: r, getNeighbor: n });
                        }),
                        (t.prototype._rotateFigure = function (t) {
                            var e,
                                r = t.x,
                                n = t.y,
                                o = t.size,
                                i = t.rotation,
                                a = void 0 === i ? 0 : i,
                                s = r + o / 2,
                                u = n + o / 2;
                            (0, t.draw)(), null === (e = this._element) || void 0 === e || e.setAttribute("transform", "rotate(" + (180 * a) / Math.PI + "," + s + "," + u + ")");
                        }),
                        (t.prototype._basicDot = function (t) {
                            var e = this,
                                r = t.size,
                                n = t.x,
                                o = t.y;
                            this._rotateFigure(
                                A(A({}, t), {
                                    draw: function () {
                                        (e._element = e._window.document.createElementNS("http://www.w3.org/2000/svg", "circle")),
                                            e._element.setAttribute("cx", String(n + r / 2)),
                                            e._element.setAttribute("cy", String(o + r / 2)),
                                            e._element.setAttribute("r", String(r / 2));
                                    },
                                })
                            );
                        }),
                        (t.prototype._basicSquare = function (t) {
                            var e = this,
                                r = t.size,
                                n = t.x,
                                o = t.y;
                            this._rotateFigure(
                                A(A({}, t), {
                                    draw: function () {
                                        (e._element = e._window.document.createElementNS("http://www.w3.org/2000/svg", "rect")),
                                            e._element.setAttribute("x", String(n)),
                                            e._element.setAttribute("y", String(o)),
                                            e._element.setAttribute("width", String(r)),
                                            e._element.setAttribute("height", String(r));
                                    },
                                })
                            );
                        }),
                        (t.prototype._basicSideRounded = function (t) {
                            var e = this,
                                r = t.size,
                                n = t.x,
                                o = t.y;
                            this._rotateFigure(
                                A(A({}, t), {
                                    draw: function () {
                                        (e._element = e._window.document.createElementNS("http://www.w3.org/2000/svg", "path")),
                                            e._element.setAttribute("d", "M " + n + " " + o + "v " + r + "h " + r / 2 + "a " + r / 2 + " " + r / 2 + ", 0, 0, 0, 0 " + -r);
                                    },
                                })
                            );
                        }),
                        (t.prototype._basicCornerRounded = function (t) {
                            var e = this,
                                r = t.size,
                                n = t.x,
                                o = t.y;
                            this._rotateFigure(
                                A(A({}, t), {
                                    draw: function () {
                                        (e._element = e._window.document.createElementNS("http://www.w3.org/2000/svg", "path")),
                                            e._element.setAttribute("d", "M " + n + " " + o + "v " + r + "h " + r + "v " + -r / 2 + "a " + r / 2 + " " + r / 2 + ", 0, 0, 0, " + -r / 2 + " " + -r / 2);
                                    },
                                })
                            );
                        }),
                        (t.prototype._basicCornerExtraRounded = function (t) {
                            var e = this,
                                r = t.size,
                                n = t.x,
                                o = t.y;
                            this._rotateFigure(
                                A(A({}, t), {
                                    draw: function () {
                                        (e._element = e._window.document.createElementNS("http://www.w3.org/2000/svg", "path")),
                                            e._element.setAttribute("d", "M " + n + " " + o + "v " + r + "h " + r + "a " + r + " " + r + ", 0, 0, 0, " + -r + " " + -r);
                                    },
                                })
                            );
                        }),
                        (t.prototype._basicCornersRounded = function (t) {
                            var e = this,
                                r = t.size,
                                n = t.x,
                                o = t.y;
                            this._rotateFigure(
                                A(A({}, t), {
                                    draw: function () {
                                        (e._element = e._window.document.createElementNS("http://www.w3.org/2000/svg", "path")),
                                            e._element.setAttribute(
                                                "d",
                                                "M " +
                                                    n +
                                                    " " +
                                                    o +
                                                    "v " +
                                                    r / 2 +
                                                    "a " +
                                                    r / 2 +
                                                    " " +
                                                    r / 2 +
                                                    ", 0, 0, 0, " +
                                                    r / 2 +
                                                    " " +
                                                    r / 2 +
                                                    "h " +
                                                    r / 2 +
                                                    "v " +
                                                    -r / 2 +
                                                    "a " +
                                                    r / 2 +
                                                    " " +
                                                    r / 2 +
                                                    ", 0, 0, 0, " +
                                                    -r / 2 +
                                                    " " +
                                                    -r / 2
                                            );
                                    },
                                })
                            );
                        }),
                        (t.prototype._drawDot = function (t) {
                            var e = t.x,
                                r = t.y,
                                n = t.size;
                            this._basicDot({ x: e, y: r, size: n, rotation: 0 });
                        }),
                        (t.prototype._drawSquare = function (t) {
                            var e = t.x,
                                r = t.y,
                                n = t.size;
                            this._basicSquare({ x: e, y: r, size: n, rotation: 0 });
                        }),
                        (t.prototype._drawRounded = function (t) {
                            var e = t.x,
                                r = t.y,
                                n = t.size,
                                o = t.getNeighbor,
                                i = o ? +o(-1, 0) : 0,
                                a = o ? +o(1, 0) : 0,
                                s = o ? +o(0, -1) : 0,
                                u = o ? +o(0, 1) : 0,
                                h = i + a + s + u;
                            if (0 !== h)
                                if (h > 2 || (i && a) || (s && u)) this._basicSquare({ x: e, y: r, size: n, rotation: 0 });
                                else {
                                    if (2 === h) {
                                        var c = 0;
                                        return i && s ? (c = Math.PI / 2) : s && a ? (c = Math.PI) : a && u && (c = -Math.PI / 2), void this._basicCornerRounded({ x: e, y: r, size: n, rotation: c });
                                    }
                                    if (1 === h) return (c = 0), s ? (c = Math.PI / 2) : a ? (c = Math.PI) : u && (c = -Math.PI / 2), void this._basicSideRounded({ x: e, y: r, size: n, rotation: c });
                                }
                            else this._basicDot({ x: e, y: r, size: n, rotation: 0 });
                        }),
                        (t.prototype._drawExtraRounded = function (t) {
                            var e = t.x,
                                r = t.y,
                                n = t.size,
                                o = t.getNeighbor,
                                i = o ? +o(-1, 0) : 0,
                                a = o ? +o(1, 0) : 0,
                                s = o ? +o(0, -1) : 0,
                                u = o ? +o(0, 1) : 0,
                                h = i + a + s + u;
                            if (0 !== h)
                                if (h > 2 || (i && a) || (s && u)) this._basicSquare({ x: e, y: r, size: n, rotation: 0 });
                                else {
                                    if (2 === h) {
                                        var c = 0;
                                        return i && s ? (c = Math.PI / 2) : s && a ? (c = Math.PI) : a && u && (c = -Math.PI / 2), void this._basicCornerExtraRounded({ x: e, y: r, size: n, rotation: c });
                                    }
                                    if (1 === h) return (c = 0), s ? (c = Math.PI / 2) : a ? (c = Math.PI) : u && (c = -Math.PI / 2), void this._basicSideRounded({ x: e, y: r, size: n, rotation: c });
                                }
                            else this._basicDot({ x: e, y: r, size: n, rotation: 0 });
                        }),
                        (t.prototype._drawClassy = function (t) {
                            var e = t.x,
                                r = t.y,
                                n = t.size,
                                o = t.getNeighbor,
                                i = o ? +o(-1, 0) : 0,
                                a = o ? +o(1, 0) : 0,
                                s = o ? +o(0, -1) : 0,
                                u = o ? +o(0, 1) : 0;
                            0 !== i + a + s + u
                                ? i || s
                                    ? a || u
                                        ? this._basicSquare({ x: e, y: r, size: n, rotation: 0 })
                                        : this._basicCornerRounded({ x: e, y: r, size: n, rotation: Math.PI / 2 })
                                    : this._basicCornerRounded({ x: e, y: r, size: n, rotation: -Math.PI / 2 })
                                : this._basicCornersRounded({ x: e, y: r, size: n, rotation: Math.PI / 2 });
                        }),
                        (t.prototype._drawClassyRounded = function (t) {
                            var e = t.x,
                                r = t.y,
                                n = t.size,
                                o = t.getNeighbor,
                                i = o ? +o(-1, 0) : 0,
                                a = o ? +o(1, 0) : 0,
                                s = o ? +o(0, -1) : 0,
                                u = o ? +o(0, 1) : 0;
                            0 !== i + a + s + u
                                ? i || s
                                    ? a || u
                                        ? this._basicSquare({ x: e, y: r, size: n, rotation: 0 })
                                        : this._basicCornerExtraRounded({ x: e, y: r, size: n, rotation: Math.PI / 2 })
                                    : this._basicCornerExtraRounded({ x: e, y: r, size: n, rotation: -Math.PI / 2 })
                                : this._basicCornersRounded({ x: e, y: r, size: n, rotation: Math.PI / 2 });
                        }),
                        t
                    );
                })();
                var k = function () {
                    return (k =
                        Object.assign ||
                        function (t) {
                            for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return t;
                        }).apply(this, arguments);
                };
                const R = (function () {
                    function t(t) {
                        var e = t.svg,
                            r = t.type,
                            n = t.window;
                        (this._svg = e), (this._type = r), (this._window = n);
                    }
                    return (
                        (t.prototype.draw = function (t, e, r, n) {
                            var o;
                            switch (this._type) {
                                case y:
                                    o = this._drawSquare;
                                    break;
                                case _:
                                    o = this._drawExtraRounded;
                                    break;
                                case "dot":
                                default:
                                    o = this._drawDot;
                            }
                            o.call(this, { x: t, y: e, size: r, rotation: n });
                        }),
                        (t.prototype._rotateFigure = function (t) {
                            var e,
                                r = t.x,
                                n = t.y,
                                o = t.size,
                                i = t.rotation,
                                a = void 0 === i ? 0 : i,
                                s = r + o / 2,
                                u = n + o / 2;
                            (0, t.draw)(), null === (e = this._element) || void 0 === e || e.setAttribute("transform", "rotate(" + (180 * a) / Math.PI + "," + s + "," + u + ")");
                        }),
                        (t.prototype._basicDot = function (t) {
                            var e = this,
                                r = t.size,
                                n = t.x,
                                o = t.y,
                                i = r / 7;
                            this._rotateFigure(
                                k(k({}, t), {
                                    draw: function () {
                                        (e._element = e._window.document.createElementNS("http://www.w3.org/2000/svg", "path")),
                                            e._element.setAttribute("clip-rule", "evenodd"),
                                            e._element.setAttribute("d", "M " + (n + r / 2) + " " + o + "a " + r / 2 + " " + r / 2 + " 0 1 0 0.1 0zm 0 " + i + "a " + (r / 2 - i) + " " + (r / 2 - i) + " 0 1 1 -0.1 0Z");
                                    },
                                })
                            );
                        }),
                        (t.prototype._basicSquare = function (t) {
                            var e = this,
                                r = t.size,
                                n = t.x,
                                o = t.y,
                                i = r / 7;
                            this._rotateFigure(
                                k(k({}, t), {
                                    draw: function () {
                                        (e._element = e._window.document.createElementNS("http://www.w3.org/2000/svg", "path")),
                                            e._element.setAttribute("clip-rule", "evenodd"),
                                            e._element.setAttribute("d", "M " + n + " " + o + "v " + r + "h " + r + "v " + -r + "zM " + (n + i) + " " + (o + i) + "h " + (r - 2 * i) + "v " + (r - 2 * i) + "h " + (2 * i - r) + "z");
                                    },
                                })
                            );
                        }),
                        (t.prototype._basicExtraRounded = function (t) {
                            var e = this,
                                r = t.size,
                                n = t.x,
                                o = t.y,
                                i = r / 7;
                            this._rotateFigure(
                                k(k({}, t), {
                                    draw: function () {
                                        (e._element = e._window.document.createElementNS("http://www.w3.org/2000/svg", "path")),
                                            e._element.setAttribute("clip-rule", "evenodd"),
                                            e._element.setAttribute(
                                                "d",
                                                "M " +
                                                    n +
                                                    " " +
                                                    (o + 2.5 * i) +
                                                    "v " +
                                                    2 * i +
                                                    "a " +
                                                    2.5 * i +
                                                    " " +
                                                    2.5 * i +
                                                    ", 0, 0, 0, " +
                                                    2.5 * i +
                                                    " " +
                                                    2.5 * i +
                                                    "h " +
                                                    2 * i +
                                                    "a " +
                                                    2.5 * i +
                                                    " " +
                                                    2.5 * i +
                                                    ", 0, 0, 0, " +
                                                    2.5 * i +
                                                    " " +
                                                    2.5 * -i +
                                                    "v " +
                                                    -2 * i +
                                                    "a " +
                                                    2.5 * i +
                                                    " " +
                                                    2.5 * i +
                                                    ", 0, 0, 0, " +
                                                    2.5 * -i +
                                                    " " +
                                                    2.5 * -i +
                                                    "h " +
                                                    -2 * i +
                                                    "a " +
                                                    2.5 * i +
                                                    " " +
                                                    2.5 * i +
                                                    ", 0, 0, 0, " +
                                                    2.5 * -i +
                                                    " " +
                                                    2.5 * i +
                                                    "M " +
                                                    (n + 2.5 * i) +
                                                    " " +
                                                    (o + i) +
                                                    "h " +
                                                    2 * i +
                                                    "a " +
                                                    1.5 * i +
                                                    " " +
                                                    1.5 * i +
                                                    ", 0, 0, 1, " +
                                                    1.5 * i +
                                                    " " +
                                                    1.5 * i +
                                                    "v " +
                                                    2 * i +
                                                    "a " +
                                                    1.5 * i +
                                                    " " +
                                                    1.5 * i +
                                                    ", 0, 0, 1, " +
                                                    1.5 * -i +
                                                    " " +
                                                    1.5 * i +
                                                    "h " +
                                                    -2 * i +
                                                    "a " +
                                                    1.5 * i +
                                                    " " +
                                                    1.5 * i +
                                                    ", 0, 0, 1, " +
                                                    1.5 * -i +
                                                    " " +
                                                    1.5 * -i +
                                                    "v " +
                                                    -2 * i +
                                                    "a " +
                                                    1.5 * i +
                                                    " " +
                                                    1.5 * i +
                                                    ", 0, 0, 1, " +
                                                    1.5 * i +
                                                    " " +
                                                    1.5 * -i
                                            );
                                    },
                                })
                            );
                        }),
                        (t.prototype._drawDot = function (t) {
                            var e = t.x,
                                r = t.y,
                                n = t.size,
                                o = t.rotation;
                            this._basicDot({ x: e, y: r, size: n, rotation: o });
                        }),
                        (t.prototype._drawSquare = function (t) {
                            var e = t.x,
                                r = t.y,
                                n = t.size,
                                o = t.rotation;
                            this._basicSquare({ x: e, y: r, size: n, rotation: o });
                        }),
                        (t.prototype._drawExtraRounded = function (t) {
                            var e = t.x,
                                r = t.y,
                                n = t.size,
                                o = t.rotation;
                            this._basicExtraRounded({ x: e, y: r, size: n, rotation: o });
                        }),
                        t
                    );
                })();
                var q = function () {
                    return (q =
                        Object.assign ||
                        function (t) {
                            for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return t;
                        }).apply(this, arguments);
                };
                const B = (function () {
                    function t(t) {
                        var e = t.svg,
                            r = t.type,
                            n = t.window;
                        (this._svg = e), (this._type = r), (this._window = n);
                    }
                    return (
                        (t.prototype.draw = function (t, e, r, n) {
                            var o;
                            switch (this._type) {
                                case x:
                                    o = this._drawSquare;
                                    break;
                                case M:
                                    o = this._drawExtraRounded;
                                    break;
                                case "dot":
                                default:
                                    o = this._drawDot;
                            }
                            o.call(this, { x: t, y: e, size: r, rotation: n });
                        }),
                        (t.prototype._rotateFigure = function (t) {
                            var e,
                                r = t.x,
                                n = t.y,
                                o = t.size,
                                i = t.rotation,
                                a = void 0 === i ? 0 : i,
                                s = r + o / 2,
                                u = n + o / 2;
                            (0, t.draw)(), null === (e = this._element) || void 0 === e || e.setAttribute("transform", "rotate(" + (180 * a) / Math.PI + "," + s + "," + u + ")");
                        }),
                        (t.prototype._basicDot = function (t) {
                            var e = this,
                                r = t.size,
                                n = t.x,
                                o = t.y;
                            this._rotateFigure(
                                q(q({}, t), {
                                    draw: function () {
                                        (e._element = e._window.document.createElementNS("http://www.w3.org/2000/svg", "circle")),
                                            e._element.setAttribute("cx", String(n + r / 2)),
                                            e._element.setAttribute("cy", String(o + r / 2)),
                                            e._element.setAttribute("r", String(r / 2));
                                    },
                                })
                            );
                        }),
                        (t.prototype._basicSquare = function (t) {
                            var e = this,
                                r = t.size,
                                n = t.x,
                                o = t.y;
                            this._rotateFigure(
                                q(q({}, t), {
                                    draw: function () {
                                        (e._element = e._window.document.createElementNS("http://www.w3.org/2000/svg", "rect")),
                                            e._element.setAttribute("x", String(n)),
                                            e._element.setAttribute("y", String(o)),
                                            e._element.setAttribute("width", String(r)),
                                            e._element.setAttribute("height", String(r));
                                    },
                                })
                            );
                        }),
                        (t.prototype._basicExtraRounded = function (t) {
                            var e = this,
                                r = t.size,
                                n = t.x,
                                o = t.y,
                                i = r / 3;
                            this._rotateFigure(
                                q(q({}, t), {
                                    draw: function () {
                                        (e._element = e._window.document.createElementNS("http://www.w3.org/2000/svg", "rect")),
                                            e._element.setAttribute("x", String(n)),
                                            e._element.setAttribute("y", String(o)),
                                            e._element.setAttribute("width", String(r)),
                                            e._element.setAttribute("height", String(r)),
                                            e._element.setAttribute("rx", String(i));
                                    },
                                })
                            );
                        }),
                        (t.prototype._drawDot = function (t) {
                            var e = t.x,
                                r = t.y,
                                n = t.size,
                                o = t.rotation;
                            this._basicDot({ x: e, y: r, size: n, rotation: o });
                        }),
                        (t.prototype._drawSquare = function (t) {
                            var e = t.x,
                                r = t.y,
                                n = t.size,
                                o = t.rotation;
                            this._basicSquare({ x: e, y: r, size: n, rotation: o });
                        }),
                        (t.prototype._drawExtraRounded = function (t) {
                            var e = t.x,
                                r = t.y,
                                n = t.size,
                                o = t.rotation;
                            this._basicExtraRounded({ x: e, y: r, size: n, rotation: o });
                        }),
                        t
                    );
                })();
                var E = [
                        [1, 1, 1, 1, 1, 1, 1],
                        [1, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 0, 1],
                        [1, 1, 1, 1, 1, 1, 1],
                    ],
                    L = [
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                    ];
                const N = (function () {
                        function t(t) {
                            var e;
                            t.jsdom ? (this._window = new t.jsdom("", { resources: "usable" }).window) : (this._window = window),
                                (this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "svg")),
                                this._element.setAttribute("width", String(t.width)),
                                this._element.setAttribute("height", String(t.height)),
                                (this._defs = this._window.document.createElementNS("http://www.w3.org/2000/svg", "defs")),
                                this._element.appendChild(this._defs),
                                t.imageOptions.saveAsBlob &&
                                    ((null === (e = t.nodeCanvas) || void 0 === e ? void 0 : e.createCanvas) ? (this._canvas = t.nodeCanvas.createCanvas(t.width, t.height)) : (this._canvas = document.createElement("canvas")),
                                    (this._canvas.width = t.width),
                                    (this._canvas.height = t.height)),
                                (this._imageUri = t.image),
                                (this._options = t);
                        }
                        return (
                            Object.defineProperty(t.prototype, "width", {
                                get: function () {
                                    return this._options.width;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "height", {
                                get: function () {
                                    return this._options.height;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.getElement = function () {
                                return this._element;
                            }),
                            (t.prototype.clear = function () {
                                var t,
                                    e = this._element;
                                (this._element = e.cloneNode(!1)),
                                    null === (t = null == e ? void 0 : e.parentNode) || void 0 === t || t.replaceChild(this._element, e),
                                    (this._defs = this._window.document.createElementNS("http://www.w3.org/2000/svg", "defs")),
                                    this._element.appendChild(this._defs);
                            }),
                            (t.prototype.drawQR = function (t) {
                                return (
                                    (e = this),
                                    (r = void 0),
                                    (o = function () {
                                        var e,
                                            r,
                                            n,
                                            o,
                                            i,
                                            a,
                                            s,
                                            c,
                                            d,
                                            l = this;
                                        return (function (t, e) {
                                            var r,
                                                n,
                                                o,
                                                i,
                                                a = {
                                                    label: 0,
                                                    sent: function () {
                                                        if (1 & o[0]) throw o[1];
                                                        return o[1];
                                                    },
                                                    trys: [],
                                                    ops: [],
                                                };
                                            return (
                                                (i = { next: s(0), throw: s(1), return: s(2) }),
                                                "function" == typeof Symbol &&
                                                    (i[Symbol.iterator] = function () {
                                                        return this;
                                                    }),
                                                i
                                            );
                                            function s(i) {
                                                return function (s) {
                                                    return (function (i) {
                                                        if (r) throw new TypeError("Generator is already executing.");
                                                        for (; a; )
                                                            try {
                                                                if (((r = 1), n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done)) return o;
                                                                switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                                                    case 0:
                                                                    case 1:
                                                                        o = i;
                                                                        break;
                                                                    case 4:
                                                                        return a.label++, { value: i[1], done: !1 };
                                                                    case 5:
                                                                        a.label++, (n = i[1]), (i = [0]);
                                                                        continue;
                                                                    case 7:
                                                                        (i = a.ops.pop()), a.trys.pop();
                                                                        continue;
                                                                    default:
                                                                        if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                                                            a = 0;
                                                                            continue;
                                                                        }
                                                                        if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                                                            a.label = i[1];
                                                                            break;
                                                                        }
                                                                        if (6 === i[0] && a.label < o[1]) {
                                                                            (a.label = o[1]), (o = i);
                                                                            break;
                                                                        }
                                                                        if (o && a.label < o[2]) {
                                                                            (a.label = o[2]), a.ops.push(i);
                                                                            break;
                                                                        }
                                                                        o[2] && a.ops.pop(), a.trys.pop();
                                                                        continue;
                                                                }
                                                                i = e.call(t, a);
                                                            } catch (t) {
                                                                (i = [6, t]), (n = 0);
                                                            } finally {
                                                                r = o = 0;
                                                            }
                                                        if (5 & i[0]) throw i[1];
                                                        return { value: i[0] ? i[1] : void 0, done: !0 };
                                                    })([i, s]);
                                                };
                                            }
                                        })(this, function (f) {
                                            switch (f.label) {
                                                case 0:
                                                    return (
                                                        (e = t.getModuleCount()),
                                                        (r = Math.min(this._options.width, this._options.height) - 2 * this._options.margin),
                                                        (n = Math.floor(r / e)),
                                                        (o = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 }),
                                                        (this._qr = t),
                                                        this._options.image ? [4, this.loadImage()] : [3, 2]
                                                    );
                                                case 1:
                                                    if ((f.sent(), !this._image)) return [2];
                                                    this.imageToBlob(),
                                                        (i = this._options),
                                                        (a = i.imageOptions),
                                                        (s = i.qrOptions),
                                                        (c = a.imageSize * h[s.errorCorrectionLevel]),
                                                        (d = Math.floor(c * e * e)),
                                                        (o = u({ originalWidth: this._image.width, originalHeight: this._image.height, maxHiddenDots: d, maxHiddenAxisDots: e - 14, dotSize: n })),
                                                        (f.label = 2);
                                                case 2:
                                                    return (
                                                        this.clear(),
                                                        this.drawBackground(),
                                                        this.drawDots(function (t, r) {
                                                            var n, i, a, s, u, h;
                                                            return !(
                                                                (l._options.imageOptions.hideBackgroundDots && t >= (e - o.hideXDots) / 2 && t < (e + o.hideXDots) / 2 && r >= (e - o.hideYDots) / 2 && r < (e + o.hideYDots) / 2) ||
                                                                (null === (n = E[t]) || void 0 === n ? void 0 : n[r]) ||
                                                                (null === (i = E[t - e + 7]) || void 0 === i ? void 0 : i[r]) ||
                                                                (null === (a = E[t]) || void 0 === a ? void 0 : a[r - e + 7]) ||
                                                                (null === (s = L[t]) || void 0 === s ? void 0 : s[r]) ||
                                                                (null === (u = L[t - e + 7]) || void 0 === u ? void 0 : u[r]) ||
                                                                (null === (h = L[t]) || void 0 === h ? void 0 : h[r - e + 7])
                                                            );
                                                        }),
                                                        this.drawCorners(),
                                                        this._options.image && this.drawImage({ width: o.width, height: o.height, count: e, dotSize: n }),
                                                        [2]
                                                    );
                                            }
                                        });
                                    }),
                                    new ((n = void 0) || (n = Promise))(function (t, i) {
                                        function a(t) {
                                            try {
                                                u(o.next(t));
                                            } catch (t) {
                                                i(t);
                                            }
                                        }
                                        function s(t) {
                                            try {
                                                u(o.throw(t));
                                            } catch (t) {
                                                i(t);
                                            }
                                        }
                                        function u(e) {
                                            var r;
                                            e.done
                                                ? t(e.value)
                                                : ((r = e.value),
                                                  r instanceof n
                                                      ? r
                                                      : new n(function (t) {
                                                            t(r);
                                                        })).then(a, s);
                                        }
                                        u((o = o.apply(e, r || [])).next());
                                    })
                                );
                                var e, r, n, o;
                            }),
                            (t.prototype.drawBackground = function () {
                                var t,
                                    e,
                                    r = this._element,
                                    n = this._options;
                                if (r) {
                                    var o = null === (t = n.backgroundOptions) || void 0 === t ? void 0 : t.gradient,
                                        i = null === (e = n.backgroundOptions) || void 0 === e ? void 0 : e.color;
                                    (o || i) && this._createColor({ options: o, color: i, additionalRotation: 0, x: 0, y: 0, height: n.height, width: n.width, name: "background-color" });
                                }
                            }),
                            (t.prototype.drawDots = function (t) {
                                var e,
                                    r,
                                    n = this;
                                if (!this._qr) throw "QR code is not defined";
                                var o = this._options,
                                    i = this._qr.getModuleCount();
                                if (i > o.width || i > o.height) throw "The canvas is too small.";
                                var a = Math.min(o.width, o.height) - 2 * o.margin,
                                    s = Math.floor(a / i),
                                    u = Math.floor((o.width - i * s) / 2),
                                    h = Math.floor((o.height - i * s) / 2),
                                    c = new D({ svg: this._element, type: o.dotsOptions.type, window: this._window });
                                (this._dotsClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath")),
                                    this._dotsClipPath.setAttribute("id", "clip-path-dot-color"),
                                    this._defs.appendChild(this._dotsClipPath),
                                    this._createColor({
                                        options: null === (e = o.dotsOptions) || void 0 === e ? void 0 : e.gradient,
                                        color: o.dotsOptions.color,
                                        additionalRotation: 0,
                                        x: u,
                                        y: h,
                                        height: i * s,
                                        width: i * s,
                                        name: "dot-color",
                                    });
                                for (
                                    var d = function (e) {
                                            for (
                                                var o = function (o) {
                                                        return t && !t(e, o)
                                                            ? "continue"
                                                            : (null === (r = l._qr) || void 0 === r ? void 0 : r.isDark(e, o))
                                                            ? (c.draw(u + e * s, h + o * s, s, function (r, a) {
                                                                  return !(e + r < 0 || o + a < 0 || e + r >= i || o + a >= i) && !(t && !t(e + r, o + a)) && !!n._qr && n._qr.isDark(e + r, o + a);
                                                              }),
                                                              void (c._element && l._dotsClipPath && l._dotsClipPath.appendChild(c._element)))
                                                            : "continue";
                                                    },
                                                    a = 0;
                                                a < i;
                                                a++
                                            )
                                                o(a);
                                        },
                                        l = this,
                                        f = 0;
                                    f < i;
                                    f++
                                )
                                    d(f);
                            }),
                            (t.prototype.drawCorners = function () {
                                var t = this;
                                if (!this._qr) throw "QR code is not defined";
                                var e = this._element,
                                    r = this._options;
                                if (!e) throw "Element code is not defined";
                                var n = this._qr.getModuleCount(),
                                    o = Math.min(r.width, r.height) - 2 * r.margin,
                                    i = Math.floor(o / n),
                                    a = 7 * i,
                                    s = 3 * i,
                                    u = Math.floor((r.width - n * i) / 2),
                                    h = Math.floor((r.height - n * i) / 2);
                                [
                                    [0, 0, 0],
                                    [1, 0, Math.PI / 2],
                                    [0, 1, -Math.PI / 2],
                                ].forEach(function (e) {
                                    var o,
                                        c,
                                        d,
                                        l,
                                        f,
                                        g,
                                        p,
                                        v,
                                        w,
                                        y,
                                        _,
                                        m,
                                        b = e[0],
                                        x = e[1],
                                        M = e[2],
                                        S = u + b * i * (n - 7),
                                        C = h + x * i * (n - 7),
                                        P = t._dotsClipPath,
                                        O = t._dotsClipPath;
                                    if (
                                        (((null === (o = r.cornersSquareOptions) || void 0 === o ? void 0 : o.gradient) || (null === (c = r.cornersSquareOptions) || void 0 === c ? void 0 : c.color)) &&
                                            ((P = t._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-square-color-" + b + "-" + x),
                                            t._defs.appendChild(P),
                                            (t._cornersSquareClipPath = t._cornersDotClipPath = O = P),
                                            t._createColor({
                                                options: null === (d = r.cornersSquareOptions) || void 0 === d ? void 0 : d.gradient,
                                                color: null === (l = r.cornersSquareOptions) || void 0 === l ? void 0 : l.color,
                                                additionalRotation: M,
                                                x: S,
                                                y: C,
                                                height: a,
                                                width: a,
                                                name: "corners-square-color-" + b + "-" + x,
                                            })),
                                        null === (f = r.cornersSquareOptions) || void 0 === f ? void 0 : f.type)
                                    ) {
                                        var z = new R({ svg: t._element, type: r.cornersSquareOptions.type, window: t._window });
                                        z.draw(S, C, a, M), z._element && P && P.appendChild(z._element);
                                    } else
                                        for (
                                            var I = new D({ svg: t._element, type: r.dotsOptions.type, window: t._window }),
                                                A = function (t) {
                                                    for (
                                                        var e = function (e) {
                                                                if (!(null === (g = E[t]) || void 0 === g ? void 0 : g[e])) return "continue";
                                                                I.draw(S + t * i, C + e * i, i, function (r, n) {
                                                                    var o;
                                                                    return !!(null === (o = E[t + r]) || void 0 === o ? void 0 : o[e + n]);
                                                                }),
                                                                    I._element && P && P.appendChild(I._element);
                                                            },
                                                            r = 0;
                                                        r < E[t].length;
                                                        r++
                                                    )
                                                        e(r);
                                                },
                                                k = 0;
                                            k < E.length;
                                            k++
                                        )
                                            A(k);
                                    if (
                                        (((null === (p = r.cornersDotOptions) || void 0 === p ? void 0 : p.gradient) || (null === (v = r.cornersDotOptions) || void 0 === v ? void 0 : v.color)) &&
                                            ((O = t._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-dot-color-" + b + "-" + x),
                                            t._defs.appendChild(O),
                                            (t._cornersDotClipPath = O),
                                            t._createColor({
                                                options: null === (w = r.cornersDotOptions) || void 0 === w ? void 0 : w.gradient,
                                                color: null === (y = r.cornersDotOptions) || void 0 === y ? void 0 : y.color,
                                                additionalRotation: M,
                                                x: S + 2 * i,
                                                y: C + 2 * i,
                                                height: s,
                                                width: s,
                                                name: "corners-dot-color-" + b + "-" + x,
                                            })),
                                        null === (_ = r.cornersDotOptions) || void 0 === _ ? void 0 : _.type)
                                    ) {
                                        var q = new B({ svg: t._element, type: r.cornersDotOptions.type, window: t._window });
                                        q.draw(S + 2 * i, C + 2 * i, s, M), q._element && O && O.appendChild(q._element);
                                    } else {
                                        I = new D({ svg: t._element, type: r.dotsOptions.type, window: t._window });
                                        var N = function (t) {
                                            for (
                                                var e = function (e) {
                                                        if (!(null === (m = L[t]) || void 0 === m ? void 0 : m[e])) return "continue";
                                                        I.draw(S + t * i, C + e * i, i, function (r, n) {
                                                            var o;
                                                            return !!(null === (o = L[t + r]) || void 0 === o ? void 0 : o[e + n]);
                                                        }),
                                                            I._element && O && O.appendChild(I._element);
                                                    },
                                                    r = 0;
                                                r < L[t].length;
                                                r++
                                            )
                                                e(r);
                                        };
                                        for (k = 0; k < L.length; k++) N(k);
                                    }
                                });
                            }),
                            (t.prototype.imageToBlob = function () {
                                var t;
                                if (
                                    this._image &&
                                    (/(\.svg$)|(^data:image\/svg)/.test(null !== (t = this._options.image) && void 0 !== t ? t : "") && ((this._image.width = this._options.width), (this._image.height = this._options.height)),
                                    this._options.imageOptions.saveAsBlob && this._canvas)
                                ) {
                                    var e = this._canvas.getContext("2d");
                                    e && (e.drawImage(this._image, 0, 0, this._canvas.width, this._canvas.height), (this._imageUri = this._canvas.toDataURL("image/png")));
                                }
                            }),
                            (t.prototype.loadImage = function () {
                                var t = this;
                                return new Promise(function (e, r) {
                                    var n,
                                        o = t._options;
                                    if ((null === (n = o.nodeCanvas) || void 0 === n ? void 0 : n.loadImage) && o.image)
                                        o.nodeCanvas
                                            .loadImage(o.image)
                                            .then(function (r) {
                                                (t._image = r), e();
                                            })
                                            .catch(r);
                                    else {
                                        var i = new t._window.Image();
                                        if (!o.image) return r("Image is not defined");
                                        "string" == typeof o.imageOptions.crossOrigin && (i.crossOrigin = o.imageOptions.crossOrigin),
                                            (t._image = i),
                                            (i.onload = function () {
                                                e();
                                            }),
                                            (i.src = o.image);
                                    }
                                });
                            }),
                            (t.prototype.drawImage = function (t) {
                                var e = t.width,
                                    r = t.height,
                                    n = t.count,
                                    o = t.dotSize,
                                    i = this._options,
                                    a = Math.floor((i.width - n * o) / 2),
                                    s = Math.floor((i.height - n * o) / 2),
                                    u = a + i.imageOptions.margin + (n * o - e) / 2,
                                    h = s + i.imageOptions.margin + (n * o - r) / 2,
                                    c = e - 2 * i.imageOptions.margin,
                                    d = r - 2 * i.imageOptions.margin,
                                    l = this._window.document.createElementNS("http://www.w3.org/2000/svg", "image");
                                l.setAttribute("href", this._imageUri || ""),
                                    l.setAttribute("x", String(u)),
                                    l.setAttribute("y", String(h)),
                                    l.setAttribute("width", c + "px"),
                                    l.setAttribute("height", d + "px"),
                                    this._element.appendChild(l);
                            }),
                            (t.prototype._createColor = function (t) {
                                var e = this,
                                    r = t.options,
                                    n = t.color,
                                    o = t.additionalRotation,
                                    i = t.x,
                                    a = t.y,
                                    s = t.height,
                                    u = t.width,
                                    h = t.name,
                                    c = u > s ? u : s,
                                    d = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
                                if ((d.setAttribute("x", String(i)), d.setAttribute("y", String(a)), d.setAttribute("height", String(s)), d.setAttribute("width", String(u)), d.setAttribute("clip-path", "url('#clip-path-" + h + "')"), r)) {
                                    var l;
                                    if (r.type === P)
                                        (l = this._window.document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")).setAttribute("id", h),
                                            l.setAttribute("gradientUnits", "userSpaceOnUse"),
                                            l.setAttribute("fx", String(i + u / 2)),
                                            l.setAttribute("fy", String(a + s / 2)),
                                            l.setAttribute("cx", String(i + u / 2)),
                                            l.setAttribute("cy", String(a + s / 2)),
                                            l.setAttribute("r", String(c / 2));
                                    else {
                                        var f = ((r.rotation || 0) + o) % (2 * Math.PI),
                                            g = (f + 2 * Math.PI) % (2 * Math.PI),
                                            p = i + u / 2,
                                            v = a + s / 2,
                                            w = i + u / 2,
                                            y = a + s / 2;
                                        (g >= 0 && g <= 0.25 * Math.PI) || (g > 1.75 * Math.PI && g <= 2 * Math.PI)
                                            ? ((p -= u / 2), (v -= (s / 2) * Math.tan(f)), (w += u / 2), (y += (s / 2) * Math.tan(f)))
                                            : g > 0.25 * Math.PI && g <= 0.75 * Math.PI
                                            ? ((v -= s / 2), (p -= u / 2 / Math.tan(f)), (y += s / 2), (w += u / 2 / Math.tan(f)))
                                            : g > 0.75 * Math.PI && g <= 1.25 * Math.PI
                                            ? ((p += u / 2), (v += (s / 2) * Math.tan(f)), (w -= u / 2), (y -= (s / 2) * Math.tan(f)))
                                            : g > 1.25 * Math.PI && g <= 1.75 * Math.PI && ((v += s / 2), (p += u / 2 / Math.tan(f)), (y -= s / 2), (w -= u / 2 / Math.tan(f))),
                                            (l = this._window.document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")).setAttribute("id", h),
                                            l.setAttribute("gradientUnits", "userSpaceOnUse"),
                                            l.setAttribute("x1", String(Math.round(p))),
                                            l.setAttribute("y1", String(Math.round(v))),
                                            l.setAttribute("x2", String(Math.round(w))),
                                            l.setAttribute("y2", String(Math.round(y)));
                                    }
                                    r.colorStops.forEach(function (t) {
                                        var r = t.offset,
                                            n = t.color,
                                            o = e._window.document.createElementNS("http://www.w3.org/2000/svg", "stop");
                                        o.setAttribute("offset", 100 * r + "%"), o.setAttribute("stop-color", n), l.appendChild(o);
                                    }),
                                        d.setAttribute("fill", "url('#" + h + "')"),
                                        this._defs.appendChild(l);
                                } else n && d.setAttribute("fill", n);
                                this._element.appendChild(d);
                            }),
                            t
                        );
                    })(),
                    T = "canvas";
                for (var j = {}, F = 0; F <= 40; F++) j[F] = F;
                const Q = {
                    type: T,
                    width: 300,
                    height: 300,
                    data: "",
                    margin: 0,
                    qrOptions: { typeNumber: j[0], mode: void 0, errorCorrectionLevel: "Q" },
                    imageOptions: { saveAsBlob: !1, hideBackgroundDots: !0, imageSize: 0.4, crossOrigin: void 0, margin: 0 },
                    dotsOptions: { type: "square", color: "#000" },
                    backgroundOptions: { color: "#fff" },
                };
                var H = function () {
                    return (H =
                        Object.assign ||
                        function (t) {
                            for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return t;
                        }).apply(this, arguments);
                };
                function U(t) {
                    var e = H({}, t);
                    if (!e.colorStops || !e.colorStops.length) throw "Field 'colorStops' is required in gradient";
                    return (
                        e.rotation ? (e.rotation = Number(e.rotation)) : (e.rotation = 0),
                        (e.colorStops = e.colorStops.map(function (t) {
                            return H(H({}, t), { offset: Number(t.offset) });
                        })),
                        e
                    );
                }
                function G(t) {
                    var e = H({}, t);
                    return (
                        (e.width = Number(e.width)),
                        (e.height = Number(e.height)),
                        (e.margin = Number(e.margin)),
                        (e.imageOptions = H(H({}, e.imageOptions), { hideBackgroundDots: Boolean(e.imageOptions.hideBackgroundDots), imageSize: Number(e.imageOptions.imageSize), margin: Number(e.imageOptions.margin) })),
                        e.margin > Math.min(e.width, e.height) && (e.margin = Math.min(e.width, e.height)),
                        (e.dotsOptions = H({}, e.dotsOptions)),
                        e.dotsOptions.gradient && (e.dotsOptions.gradient = U(e.dotsOptions.gradient)),
                        e.cornersSquareOptions && ((e.cornersSquareOptions = H({}, e.cornersSquareOptions)), e.cornersSquareOptions.gradient && (e.cornersSquareOptions.gradient = U(e.cornersSquareOptions.gradient))),
                        e.cornersDotOptions && ((e.cornersDotOptions = H({}, e.cornersDotOptions)), e.cornersDotOptions.gradient && (e.cornersDotOptions.gradient = U(e.cornersDotOptions.gradient))),
                        e.backgroundOptions && ((e.backgroundOptions = H({}, e.backgroundOptions)), e.backgroundOptions.gradient && (e.backgroundOptions.gradient = U(e.backgroundOptions.gradient))),
                        e
                    );
                }
                var X = r(192),
                    Y = r.n(X),
                    $ = function (t, e, r, n) {
                        return new (r || (r = Promise))(function (o, i) {
                            function a(t) {
                                try {
                                    u(n.next(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function s(t) {
                                try {
                                    u(n.throw(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function u(t) {
                                var e;
                                t.done
                                    ? o(t.value)
                                    : ((e = t.value),
                                      e instanceof r
                                          ? e
                                          : new r(function (t) {
                                                t(e);
                                            })).then(a, s);
                            }
                            u((n = n.apply(t, e || [])).next());
                        });
                    },
                    W = function (t, e) {
                        var r,
                            n,
                            o,
                            i,
                            a = {
                                label: 0,
                                sent: function () {
                                    if (1 & o[0]) throw o[1];
                                    return o[1];
                                },
                                trys: [],
                                ops: [],
                            };
                        return (
                            (i = { next: s(0), throw: s(1), return: s(2) }),
                            "function" == typeof Symbol &&
                                (i[Symbol.iterator] = function () {
                                    return this;
                                }),
                            i
                        );
                        function s(i) {
                            return function (s) {
                                return (function (i) {
                                    if (r) throw new TypeError("Generator is already executing.");
                                    for (; a; )
                                        try {
                                            if (((r = 1), n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done)) return o;
                                            switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return a.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    a.label++, (n = i[1]), (i = [0]);
                                                    continue;
                                                case 7:
                                                    (i = a.ops.pop()), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                                        a = 0;
                                                        continue;
                                                    }
                                                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                                        a.label = i[1];
                                                        break;
                                                    }
                                                    if (6 === i[0] && a.label < o[1]) {
                                                        (a.label = o[1]), (o = i);
                                                        break;
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        (a.label = o[2]), a.ops.push(i);
                                                        break;
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue;
                                            }
                                            i = e.call(t, a);
                                        } catch (t) {
                                            (i = [6, t]), (n = 0);
                                        } finally {
                                            r = o = 0;
                                        }
                                    if (5 & i[0]) throw i[1];
                                    return { value: i[0] ? i[1] : void 0, done: !0 };
                                })([i, s]);
                            };
                        }
                    };
                const Z = (function () {
                    function t(t) {
                        (this._options = t ? G(a(Q, t)) : Q), this.update();
                    }
                    return (
                        (t._clearContainer = function (t) {
                            t && (t.innerHTML = "");
                        }),
                        (t.prototype._getQRStylingElement = function (t) {
                            return (
                                void 0 === t && (t = "png"),
                                $(this, void 0, void 0, function () {
                                    var e, r, n;
                                    return W(this, function (o) {
                                        switch (o.label) {
                                            case 0:
                                                if (!this._qr) throw "QR code is empty";
                                                return "svg" !== t.toLowerCase()
                                                    ? [3, 2]
                                                    : ((r = void 0), (e = void 0), this._svg && this._svgDrawingPromise ? ((e = this._svg), (r = this._svgDrawingPromise)) : ((e = new N(this._options)), (r = e.drawQR(this._qr))), [4, r]);
                                            case 1:
                                                return o.sent(), [2, e];
                                            case 2:
                                                return (
                                                    (r = void 0),
                                                    (n = void 0),
                                                    this._canvas && this._canvasDrawingPromise ? ((n = this._canvas), (r = this._canvasDrawingPromise)) : ((n = new I(this._options)), (r = n.drawQR(this._qr))),
                                                    [4, r]
                                                );
                                            case 3:
                                                return o.sent(), [2, n];
                                        }
                                    });
                                })
                            );
                        }),
                        (t.prototype.update = function (e) {
                            t._clearContainer(this._container),
                                (this._options = e ? G(a(this._options, e)) : this._options),
                                this._options.data &&
                                    ((this._qr = Y()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel)),
                                    this._qr.addData(
                                        this._options.data,
                                        this._options.qrOptions.mode ||
                                            (function (t) {
                                                switch (!0) {
                                                    case /^[0-9]*$/.test(t):
                                                        return "Numeric";
                                                    case /^[0-9A-Z $%*+\-./:]*$/.test(t):
                                                        return "Alphanumeric";
                                                    default:
                                                        return "Byte";
                                                }
                                            })(this._options.data)
                                    ),
                                    this._qr.make(),
                                    this._options.type === T
                                        ? ((this._canvas = new I(this._options)), (this._canvasDrawingPromise = this._canvas.drawQR(this._qr)), (this._svgDrawingPromise = void 0), (this._svg = void 0))
                                        : ((this._svg = new N(this._options)), (this._svgDrawingPromise = this._svg.drawQR(this._qr)), (this._canvasDrawingPromise = void 0), (this._canvas = void 0)),
                                    this.append(this._container));
                        }),
                        (t.prototype.append = function (t) {
                            if (t) {
                                if ("function" != typeof t.appendChild) throw "Container should be a single DOM node";
                                this._options.type === T ? this._canvas && t.appendChild(this._canvas.getCanvas()) : this._svg && t.appendChild(this._svg.getElement()), (this._container = t);
                            }
                        }),
                        (t.prototype.getRawData = function (t) {
                            return (
                                void 0 === t && (t = "png"),
                                $(this, void 0, void 0, function () {
                                    var e, r, n, o;
                                    return W(this, function (i) {
                                        switch (i.label) {
                                            case 0:
                                                if (!this._qr) throw "QR code is empty";
                                                return [4, this._getQRStylingElement(t)];
                                            case 1:
                                                return (
                                                    (e = i.sent()),
                                                    "svg" === t.toLowerCase()
                                                        ? ((r = new e._window.XMLSerializer()),
                                                          (n = r.serializeToString(e.getElement())),
                                                          (o = '<?xml version="1.0" standalone="no"?>\r\n' + n),
                                                          "undefined" == typeof Blob || this._options.jsdom ? [2, Buffer.from(o)] : [2, new Blob([o], { type: "image/svg+xml" })])
                                                        : [
                                                              2,
                                                              new Promise(function (r) {
                                                                  var n = e.getCanvas();
                                                                  n.toBuffer ? r(n.toBuffer("image/" + t)) : n.toBlob(r, "image/" + t, 1);
                                                              }),
                                                          ]
                                                );
                                        }
                                    });
                                })
                            );
                        }),
                        (t.prototype.download = function (t) {
                            return $(this, void 0, void 0, function () {
                                var e, r, n, o, i;
                                return W(this, function (a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this._qr) throw "QR code is empty";
                                            if ("undefined" == typeof Blob) throw "Cannot download in Node.js, call getRawData instead.";
                                            return (
                                                (e = "png"),
                                                (r = "qr"),
                                                "string" == typeof t
                                                    ? ((e = t), console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument"))
                                                    : "object" == typeof t && null !== t && (t.name && (r = t.name), t.extension && (e = t.extension)),
                                                [4, this._getQRStylingElement(e)]
                                            );
                                        case 1:
                                            return (
                                                (n = a.sent()),
                                                "svg" === e.toLowerCase()
                                                    ? ((o = new XMLSerializer()),
                                                      (i = '<?xml version="1.0" standalone="no"?>\r\n' + (i = o.serializeToString(n.getElement()))),
                                                      s("data:image/svg+xml;charset=utf-8," + encodeURIComponent(i), r + ".svg"))
                                                    : s(n.getCanvas().toDataURL("image/" + e), r + "." + e),
                                                [2]
                                            );
                                    }
                                });
                            });
                        }),
                        t
                    );
                })();
            },
        },
        e = {};
    function r(n) {
        if (e[n]) return e[n].exports;
        var o = (e[n] = { exports: {} });
        return t[n](o, o.exports, r), o.exports;
    }
    return (
        (r.n = (t) => {
            var e = t && t.__esModule ? () => t.default : () => t;
            return r.d(e, { a: e }), e;
        }),
        (r.d = (t, e) => {
            for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        }),
        (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        r(664)
    );
})().default;
