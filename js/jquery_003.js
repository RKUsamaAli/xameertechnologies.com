/**************************************************************************
 * $.themepunch.ShoBiz Pro.js - $ Plugin for ShowBiz Pro Teaser Rotator
 * @version: 1.1 (08.04.2012)
 * @requires $ v1.7 or later
 * @author ThemePunch
 **************************************************************************/ (function (e, t) {
    function n() {
        var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"];
        for (i in e) {
            if (navigator.userAgent.split(e[i]).length > 1) {
                return true
            }
        }
        return false
    }
    function r(n) {
        n.find(".show_on_hover, .hovercover").each(function () {
            var r = e(this).closest("li");
            if (n.data("ie9") || n.data("ie")) e(this).animate({
                    opacity: 0
                }, {
                    duration: 200,
                    queue: false
                });
            else e(this).transit({
                    opacity: 0
                }, {
                    duration: 200,
                    queue: false
                });
            r.hover(function () {
                e(this).find(".show_on_hover, .hovercover").each(function () {
                    var r = 1;
                    if (e(this).data("maxopacity") != t) r = e(this).data("maxopacity");
                    if (n.data("ie9") || n.data("ie")) e(this).animate({
                            opacity: r
                        }, {
                            duration: 200,
                            queue: false
                        });
                    else e(this).transit({
                            opacity: r
                        }, {
                            duration: 200,
                            queue: false
                        })
                })
            }, function () {
                e(this).find(".show_on_hover, .hovercover").each(function () {
                    if (n.data("ie9") || n.data("ie")) e(this).animate({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: false
                        });
                    else e(this).transit({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: false
                        })
                })
            })
        })
    }
    function s(t, n) {
        t.find(".reveal_opener").each(function () {
            var r = jQuery(this);
            r.click(function () {
                if (r.parent().hasClass("reveal_container")) var i = r.parent();
                else var i = r.parent().find(".reveal_container"); if (i.hasClass("revactive")) {
                    i.removeClass("revactive");
                    r.removeClass("revactive");
                    i.closest("li").removeClass("revactive");
                    if (t.data("ie9") || t.data("ie")) {
                        i.find(".reveal_wrapper").css({
                            visibility: "visible"
                        }).animate({
                            height: "0px",
                            opacity: 0
                        }, {
                            duration: 300
                        })
                    } else {
                        i.find(".reveal_wrapper").css({
                            visibility: "visible"
                        }).transit({
                            height: "0px",
                            opacity: 0
                        }, {
                            duration: 300
                        })
                    }
                    i.find(".sb-vimeo-markup, .sb-yt-markup").html("");
                    if (i.hasClass("tofullwidth")) {
                        setTimeout(function () {
                            i.appendTo(i.data("comefrom"));
                            f(200, t, n)
                        }, 300)
                    }
                } else {
                    if (i.hasClass("tofullwidth")) {
                        i.data("comefrom", i.parent());
                        i.data("indexli", i.closest("li").index());
                        i.appendTo(i.closest(".showbiz"))
                    }
                    setTimeout(function () {
                        if (t.data("coo") == "on") i.closest("ul").find(".reveal_opener").each(function (t) {
                                if (e(this).hasClass("revactive")) e(this).click()
                            });
                        i.addClass("revactive");
                        r.addClass("revactive");
                        i.closest("li").addClass("revactive");
                        if (t.data("ie9") || t.data("ie")) {
                            i.find(".reveal_wrapper").css({
                                visibility: "visible"
                            }).animate({
                                height: "100%",
                                opacity: 1
                            }, {
                                duration: 300
                            })
                        } else {
                            i.find(".reveal_wrapper").css({
                                visibility: "visible"
                            }).transit({
                                height: "100%",
                                opacity: 1
                            }, {
                                duration: 300
                            })
                        }
                        i.find(".sb-vimeo-markup, .sb-yt-markup").each(function () {
                            var n = e(this);
                            if (n.hasClass("sb-vimeo-markup")) var r = t.data("vimeomarkup");
                            else var r = t.data("ytmarkup");
                            var r = r.split("%%videoid%%")[0] + n.data("videoid") + r.split("%%videoid%%")[1];
                            n.append(r);
                            try {
                                n.fitVids()
                            } catch (i) {}
                        });
                        setTimeout(function () {
                            o(t, n)
                        }, 500)
                    }, 100)
                }
            })
        })
    }
    function o(e, n) {
        var r = e.find(".tofullwidth.revactive .heightadjuster");
        var i = n.find("ul");
        var s = parseInt(r.parent().css("paddingTop"), 0) + parseInt(r.parent().css("paddingBottom"), 0);
        var o = 0;
        if (e.data("hboffset") != t) o = e.data("hboffset");
        var u = o + s + r.outerHeight(true);
        if (e.data("ie9") || e.data("ie")) {
            i.animate({
                height: u + "px"
            }, {
                duration: 300,
                queue: false
            });
            i.parent().animate({
                height: u + "px"
            }, {
                duration: 300,
                queue: false
            })
        } else {
            i.transit({
                height: u + "px",
                duration: 300,
                queue: false
            });
            i.parent().transit({
                height: u + "px",
                duration: 300,
                queue: false
            })
        }
    }
    function u(t, n) {
        var r = t.data("carousel");
        var i = jQuery(n.data("left"));
        var s = jQuery(n.data("right"));
        var o = t.width();
        i.data("teaser", n);
        s.data("teaser", n);
        n.data("offset", 0);
        f(0, t, n);
        t.find("img").each(function () {
            jQuery(this).parent().waitForImages(function () {})
        });
        s.click(function () {
            if (t.find(".tofullwidth.revactive .heightadjuster").length > 0) {
                var n = t.find(".tofullwidth.revactive").data("indexli");
                var i = n + 2;
                if (i > t.find("ul:first-child li").length) i = 1;
                t.find(".tofullwidth.revactive").addClass("sb-removemesoon");
                setTimeout(function () {
                    t.find(".tofullwidth.revactive.sb-removemesoon .reveal_opener").click();
                    t.find(".sb-removemesoon").each(function () {
                        e(this).removeClass("sb-removemesoon")
                    })
                }, 350);
                t.find("ul:first-child li:nth-child(" + i + ")").find(".reveal_opener").click()
            } else {
                if (s.data("inmove") != 1) {
                    var o = jQuery(jQuery(this).data("teaser"));
                    var u = o.find("ul");
                    if (u.length > 1) u = u[0];
                    var l = u.find(">li").length;
                    if (t.data("das") == "on") {
                        a(t, 1)
                    } else {
                        var c = u.find(">li:first-child").offset().left;
                        if (r == 1 && c < 0) {
                            s.data("inmove", 1);
                            o.data("offset", o.data("offset") - 1);
                            f(0, t, o);
                            u.find(">li:first-child").appendTo(u);
                            o.data("offset", o.data("offset") + 1);
                            f(200, t, o);
                            setTimeout(function () {
                                s.data("inmove", 0)
                            }, 350)
                        } else {
                            s.data("inmove", 1);
                            var h = 1;
                            var p = t.width();
                            if (t.data("allentry") == "on") {
                                if (p > 980) {
                                    h = t.data("vea")[0]
                                }
                                if (p < 981 && p > 768) {
                                    h = t.data("vea")[1]
                                }
                                if (p < 769 && p > 420) {
                                    h = t.data("vea")[2]
                                }
                                if (p < 421) {
                                    h = t.data("vea")[3]
                                }
                            }
                            o.data("offset", o.data("offset") + h);
                            f(200, t, o);
                            setTimeout(function () {
                                s.data("inmove", 0)
                            }, 350)
                        }
                    }
                }
            }
            return false
        });
        i.click(function () {
            if (t.find(".tofullwidth.revactive .heightadjuster").length > 0) {
                var n = t.find(".tofullwidth.revactive").data("indexli");
                var s = n - 1;
                if (s <= 0) s = t.find("ul:first-child li").length;
                t.find(".tofullwidth.revactive").addClass("sb-removemesoon");
                setTimeout(function () {
                    t.find(".tofullwidth.revactive.sb-removemesoon .reveal_opener").click();
                    t.find(".sb-removemesoon").each(function () {
                        e(this).removeClass("sb-removemesoon")
                    })
                }, 350);
                t.find("ul:first-child li:nth-child(" + s + ")").find(".reveal_opener").click()
            } else {
                if (i.data("inmove") != 1) {
                    var o = jQuery(this).data("teaser");
                    var u = o.find("ul");
                    if (u.length > 1) u = u[0];
                    if (t.data("das") == "on") {
                        a(t, -1)
                    } else {
                        var l = u.find(">li:first-child").offset().left;
                        if (r == 1 && l >= 0) {
                            i.data("inmove", 1);
                            o.data("offset", o.data("offset") + 1);
                            f(0, t, o);
                            u.find(">li:last-child").prependTo(u);
                            o.data("offset", o.data("offset") - 1);
                            f(200, t, o);
                            setTimeout(function () {
                                i.data("inmove", 0)
                            }, 350)
                        } else {
                            i.data("inmove", 1);
                            var c = 1;
                            var h = t.width();
                            if (t.data("allentry") == "on") {
                                if (h > 980) {
                                    c = t.data("vea")[0]
                                }
                                if (h < 981 && h > 768) {
                                    c = t.data("vea")[1]
                                }
                                if (h < 769 && h > 420) {
                                    c = t.data("vea")[2]
                                }
                                if (h < 421) {
                                    c = t.data("vea")[3]
                                }
                            }
                            o.data("offset", o.data("offset") - c);
                            f(200, t, o);
                            setTimeout(function () {
                                i.data("inmove", 0)
                            }, 350)
                        }
                    }
                }
            }
            return false
        });
        if (t.data("das") != "on") t.swipe({
                data: t,
                swipeRight: function () {
                    i.click()
                },
                swipeLeft: function () {
                    s.click()
                },
                excludedElements: ".reveal_opener, a,  .linkicon, .notalone, .lupeicon, .hovercover, .showbiz-navigation, .sb-navigation-left, .sb-navigation-right",
                allowPageScroll: "auto"
            });
        var u;
        jQuery(window).resize(function () {
            clearTimeout(u);
            u = setTimeout(function () {
                n.data("offset", 0);
                f(0, t, n);
                if (t.data("das") == "on") {
                    setTimeout(function () {
                        a(t, 0)
                    }, 300)
                }
            }, 150)
        });
        if (r == 1) {
            s.data("inmove", 1);
            i.data("inmove", 1)
        }
        for (var l = 0; l < 3; l++) {
            jQuery(window).data("teaserreset", setTimeout(function () {
                f(200, t, n)
            }, l * 500));
            if (l == 2) setTimeout(function () {
                    s.data("inmove", 0);
                    i.data("inmove", 0)
                }, l * 500 + 200)
        }
    }
    function a(t, n) {
        var r = t;
        var i = t.width();
        var s = r.find("ul");
        if (s.length > 1) s = s[0];
        var o = s.find(">li").length;
        var u = 4;
        if (i > 980) u = t.data("vea")[0];
        if (i < 981 && i > 768) u = t.data("vea")[1];
        if (i < 769 && i > 420) u = t.data("vea")[2];
        if (i < 421) u = t.data("vea")[3];
        var a = o - u;
        var f = s.find(">li:first-child").outerWidth(true);
        var l = r.find(".overflowholder");
        var c = l.scrollLeft();
        var h = Math.round(c / f);
        var p = e(l.parent().data("right"));
        var d = e(l.parent().data("left"));
        var v = (h + n) * f;
        if (v >= a * f) {
            v = a * f;
            try {
                p.addClass("notclickable")
            } catch (m) {}
        } else {
            try {
                p.removeClass("notclickable")
            } catch (m) {}
        } if (v <= 0) {
            v = 0;
            try {
                d.addClass("notclickable")
            } catch (m) {}
        } else {
            try {
                d.removeClass("notclickable")
            } catch (m) {}
        }
        l.animate({
            scrollLeft: v + "px"
        }, {
            duration: 300,
            queue: false,
            complete: function () {
                l.removeClass("inmove")
            }
        })
    }
    function f(n, r, i) {
        var s = r.data("carousel");
        var u = i.find("ul");
        var a = i.data("offset");
        var f = r.width();
        var l = parseInt(i.css("paddingLeft"), 0) + parseInt(i.css("paddingRight"), 0);
        f = f - l;
        var u = i.find("ul:first");
        maxitem = u.find(">li").length;
        var c = e(i.data("right"));
        if (r.data("das") != "on") c.removeClass("notclickable");
        var h = e(i.data("left"));
        if (r.data("das") != "on") h.removeClass("notclickable");
        var p = r.data("vea")[0];
        var d = r.data("mediaMaxHeight");
        if (f > 980) {
            p = r.data("vea")[0];
            try {
                if (d[0] != 0) r.find(".mediaholder_innerwrap").each(function () {
                        e(this).css({
                            maxHeight: d[0] + "px"
                        })
                    })
            } catch (v) {}
        }
        if (f < 981 && f > 768) {
            p = r.data("vea")[1];
            try {
                if (d[1] != 0) r.find(".mediaholder_innerwrap").each(function () {
                        e(this).css({
                            maxHeight: d[1] + "px"
                        })
                    })
            } catch (v) {}
        }
        if (f < 769 && f > 420) {
            p = r.data("vea")[2];
            try {
                if (d[2] != 0) r.find(".mediaholder_innerwrap").each(function () {
                        e(this).css({
                            maxHeight: d[2] + "px"
                        })
                    })
            } catch (v) {}
        }
        if (f < 421) {
            p = r.data("vea")[3];
            try {
                if (d[3] != 0) r.find(".mediaholder_innerwrap").each(function () {
                        e(this).css({
                            maxHeight: d[3] + "px"
                        })
                    })
            } catch (v) {}
        }
        if (s != 1) {
            if (a >= maxitem - p) {
                a = maxitem - p;
                if (r.data("das") != "on") c.addClass("notclickable")
            }
            if (a <= 0) {
                a = 0;
                if (r.data("das") != "on") h.addClass("notclickable")
            }
        }
        var m = u.find(">li:first-child").outerWidth(true) - u.find(">li:first-child").width();
        var g = 0;
        if (r.data("eoffset") != t) g = r.data("eoffset") * (p - 1);
        var y = 0;
        if (r.data("croffset") != t) y = r.data("croffset");
        step = (f - (p - 1) * m) / p;
        step = step - g;
        i.data("offset", a);
        u.find(">li").each(function () {
            e(this).width(step)
        });
        step = u.find("li:first").outerWidth(true);
        i.data("step", step);
        u.css({
            width: "100000px"
        });
        if (n == 0) u.css({
                left: 0 - step * a + "px"
            });
        else {
            u.animate({
                left: 0 - step * a + "px"
            }, {
                duration: n,
                queue: false
            })
        }
        var b = 0;
        if (r.data("hboffset") != t) b = r.data("hboffset");
        setTimeout(function () {
            var t = 0;
            u.find("li").each(function () {
                if (e(this).outerHeight(true) > t) t = e(this).outerHeight(true)
            });
            setTimeout(function () {
                if (step > 100) {
                    var e = u.find(">li:last-child");
                    var t = e.position().left + e.outerWidth(true) + m;
                    u.css({
                        width: t + "px"
                    })
                }
            }, 200);
            if (r.find(".tofullwidth.revactive .heightadjuster").length > 0) {
                o(r, i)
            } else {
                if (r.data("ie9") || r.data("ie")) {
                    u.animate({
                        height: t + b + "px"
                    }, {
                        duration: 300,
                        queue: false
                    });
                    u.parent().animate({
                        height: t + b + "px"
                    }, {
                        duration: 300,
                        queue: false
                    })
                } else {
                    u.transit({
                        height: t + b + "px",
                        duration: 300,
                        queue: false
                    });
                    u.parent().transit({
                        height: t + b + "px",
                        duration: 300,
                        queue: false
                    })
                }
            }
        }, n + 210)
    }
    e.fn.extend({
        showbizpro: function (t) {
            e.fn.showbizpro.defaults = {
                entrySizeOffset: 0,
                containerOffsetRight: 0,
                heightOffsetBottom: 0,
                carousel: "off",
                visibleElementsArray: [4, 3, 2, 1],
                mediaMaxHeight: [0, 0, 0, 0],
                ytMarkup: "<iframe src='http://www.youtube.com/embed/%%videoid%%?hd=1&wmode=opaque&autohide=1&showinfo=0&autoplay=1'></iframe>",
                vimeoMarkup: "<iframe src='http://player.vimeo.com/video/29298709?title=0&byline=0&portrait=0;api=1&autoplay=1'></iframe>",
                closeOtherOverlays: "off",
                allEntryAtOnce: "off",
                dragAndScroll: "off"
            };
            t = e.extend({}, e.fn.showbizpro.defaults, t);
            return this.each(function () {
                var i = e(this);
                i.data("eoffset", t.entrySizeOffset);
                i.data("croffset", t.containerOffsetRight);
                i.data("hboffset", t.heightOffsetBottom);
                if (t.carousel == "on") i.data("carousel", 1);
                else i.data("carousel", 0);
                i.data("ytmarkup", t.ytMarkup);
                i.data("vimeomarkup", t.vimeoMarkup);
                i.data("vea", t.visibleElementsArray);
                i.data("coo", t.closeOtherOverlays);
                i.data("allentry", t.allEntryAtOnce);
                i.data("mediaMaxHeight", t.mediaMaxHeight);
                i.data("das", t.dragAndScroll);
                i.data("ie", !e.support.opacity);
                i.data("ie9", document.documentMode == 9);
                if (!e.support.transition) e.fn.transition = e.fn.animate;
                var o = i.find(".showbiz");
                o.attr("id", "sbiz" + Math.round(Math.random() * 1e4));
                var f;
                if (t.dragAndScroll == "on") {
                    o.find(".overflowholder").overscroll({
                        driftTimeout: 0
                    }).on("overscroll:dragstart", function () {
                        i.find(".overflowholder").stop(true)
                    }).on("overscroll:driftend", function () {
                        i.find(".overflowholder").data("drifting", 0);
                        a(i, 0)
                    }).on("overscroll:driftstart", function () {
                        clearTimeout(f);
                        i.find(".overflowholder").data("drifting", 1)
                    }).on("overscroll:dragend", function () {
                        if (!n()) {
                            clearTimeout(f);
                            f = setTimeout(function () {
                                if (i.find(".overflowholder").data("drifting") != 1) a(i, 0)
                            }, 50)
                        }
                    })
                }
                u(i, o);
                s(i, o);
                try {
                    i.find(".mediaholder_innerwrap").each(function () {
                        e(this).fitVids()
                    })
                } catch (l) {}
                r(i)
            })
        },
        showbizredraw: function (t) {
            return this.each(function () {
                var t = e(this);
                var n = t.find(".showbiz");
                f(200, t, n)
            })
        }
    });
})($)