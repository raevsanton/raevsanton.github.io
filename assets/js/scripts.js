$(document).ready(function() {
    $(".content__left").click(function() {
        $(".content__right").css({
            display: "none"
        }), 

        $(".content__left").animate({
            width: "100%"
        }, 800, function() {   
            $(".glitch").css({
                    display: "none"
            }), 

            $(".content__left--list").fadeIn(1e3)
            })
        }), 

    $(".content__right").click(function() {
        $(".glitch").css({
            display: "none"
        }), $(".content__left").animate({
            overflow: "hidden",
            width: "0%"
        }, 800, function() {
            $(".content__right--text").css({
                display: "none"
            }), $(".content__right--list").fadeIn(1e3)
        }), 

    $(".content__right").animate({
            width: "100%"
        }, 1e3, function() {})
    }), 


    $(".content__right--st").click(function() {
        $.ajax({
            url: "/cases/stomservice.html",
            cache: !1,
            success: function(t) {
                $(".content__right--list").html(t)
            }
        });
        $(".content__close--design").css({
            display: "block"
        }), $(".content__close--black").css({
            display: "none"
        })
    }), 

    $(".content__right--af").click(function() {
        $.ajax({
            url: "/cases/alliance-francaise.html",
            cache: !1,
            success: function(t) {
                $(".content__right--list").html(t)
            }
        });
        $(".content__close--design").css({
            display: "block"
        }), $(".content__close--black").css({
            display: "none"
        })
    }), 

    $(".content__right--ui").click(function() {
        $.ajax({
            url: "/cases/ui.html",
            cache: !1,
            success: function(t) {
                $(".content__right--list").html(t)
            }
        });
        $(".content__close--design").css({
            display: "block"
        }), $(".content__close--black").css({
            display: "none"
        })
    }), 

    $(".content__right--dp").click(function() {
        $.ajax({
            url: "/cases/dplus.html",
            cache: !1,
            success: function(t) {
                $(".content__right--list").html(t)
            }
        });
        $(".content__close--design").css({
            display: "block"
        }), $(".content__close--black").css({
            display: "none"
        })
    }), 

    $(".content__right--lg").click(function() {
        $.ajax({
            url: "/cases/logotypes.html",
            cache: !1,
            success: function(t) {
                $(".content__right--list").html(t)
            }
        });
        $(".content__close--design").css({
            display: "block"
        }), $(".content__close--black").css({
            display: "none"
        })
    }), 

    $(".content__right--od").click(function() {
        $.ajax({
            url: "/cases/odri.html",
            cache: !1,
            success: function(t) {
                $(".content__right--list").html(t)
            }
        });
        $(".content__close--design").css({
            display: "block"
        }), $(".content__close--black").css({
            display: "none"
        })
    }), 

    $(".content__right--ot").click(function() {
        $.ajax({
            url: "/cases/others.html",
            cache: !1,
            success: function(t) {
                $(".content__right--list").html(t)
            }
        });
        $(".content__close--design").css({
            display: "block"
        }), $(".content__close--black").css({
            display: "none"
        })
    }), 


    $(".content__right--list").on("click", function() {
        return !1
    });
    var t = $(".content__close--white").hide();
    $(".content__left").click(function() {
        $(t).delay(800).animate({
            opacity: "show"
        }, 500)
    }), $(".content__left").click(function() {
        $(t).css({
            "z-index": "2"
        })
    }), $(t).click(function() {
        $(t).css({
            "z-index": "0"
        }), $(".content__right").show({
            display: "block"
        }), $(".content__left").animate({
            width: "50%"
        }, 800, function() {
            $(".glitch").css({
                display: "inline-block"
            }), $(".content__left--list").hide(20)
        })
    });
    var n = $(".content__close--black");
    $(".content__right").click(function() {
        $(n).delay(800).animate({
            opacity: "show"
        }, 500)
    }), $(".content__right").click(function() {
        $(n).css({
            "z-index": "2"
        })
    }), $(n).click(function() {
        $.ajax({
            url: "/cases/list.html",
            cache: !1,
            success: function(t) {
                $(".content__right--list").html(t)
            }
        }), $(n).css({
            "z-index": "0"
        }), $(".content__left").show({
            display: "block"
        }), $(".content__left").animate({
            width: "50%"
        }, 800), $(".content__right").animate({
            width: "50%"
        }, 800, function() {
            $(".glitch").css({
                display: "inline-block"
            }), $(".content__right--text").css({
                display: "block"
            }), $(".content__right--list").hide(200)
        })
    }), $(".content__close--design").click(function() {
        $(".content__close--black").css({
            display: "block"
        })
    }), $(".content__close--white").click(function() {
        $(".content__left--list").css({
            display: "none"
        })
    }), $(".content__close--black").click(function() {
        $(".content__right--list").css({
            display: "none"
        })
    })
});