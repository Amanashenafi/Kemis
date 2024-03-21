/* global mixitup */
/* global jQuery */
import React, { useEffect } from 'react';
import mixitup from 'mixitup';
import CustomerList from './CustomerList';


function Home() {

    useEffect(() => {
'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.product__filter').length > 0) {
            var containerEl = document.querySelector('.product__filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Search Switch
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    /*-----------------------
        Hero Slider
    ------------------------*/
    $(".hero__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='arrow_left'><span/>", "<span class='arrow_right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*-------------------
		Radio Btn
	--------------------- */
    $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").on('click', function () {
        $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").removeClass('active');
        $(this).addClass('active');
    });

    /*-------------------
		Scroll
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#0d0d0d",
        cursorwidth: "5px",
        background: "#e5e5e5",
        cursorborder: "",
        autohidemode: true,
        horizrailenabled: false
    });

    /*------------------
        CountDown
    --------------------*/
    // For demo preview start
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end


    // Uncomment below and use your date //

    /* var timerdate = "2020/12/30" */

    $("#countdown").countdown(timerdate, function (event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hours</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>"));
    });

    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    var proQty = $('.pro-qty-2');
    proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    /*------------------
        Achieve Counter
    --------------------*/
    $('.cn_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);

    }, []);
  
  return (

    
  <div>

    
    {/* <!-- Page Preloder --> */}
    <div id="preloder">
        <div className="loader"></div>
    </div>

    {/* <!-- Offcanvas Menu Begin --> */}
    <div className="offcanvas-menu-overlay"></div>
    <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__option">
            <div className="offcanvas__links">
                <a href="#">Sign in</a>
                <a href="#">FAQs</a>
            </div>
            <div className="offcanvas__top__hover">
                <span>Usd <i className="arrow_carrot-down"></i></span>
                <ul>
                    <li>USD</li>
                    <li>EUR</li>
                    <li>USD</li>
                </ul>
            </div>
        </div>
        <div className="offcanvas__nav__option">
            <a href="#" className="search-switch"><img src="img/icon/search.png" alt=""/></a>
            <a href="#"><img src="img/icon/heart.png" alt=""/></a>
            <a href="#"><img src="img/icon/cart.png" alt=""/> <span>0</span></a>
            <div className="price">$0.00</div>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__text">
            <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
    </div>
    {/* <!-- Offcanvas Menu End --> */}

    {/* <!-- Header Section Begin --> */}
    <header className="header">
        
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3">
                    <div className="header__logo">
                        <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <nav className="header__menu mobile-menu">
                        <ul>
                            <li className="active"><a href="./index.html">Home</a></li>
                            <li><a href="./shop.html">Shop</a></li>
                            <li><a href="#">Pages</a>
                                <ul className="dropdown">
                                    <li><a href="./about.html">About Us</a></li>
                                    <li><a href="./shop-details.html">Shop Details</a></li>
                                    <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="./blog.html">Blog</a></li>
                            <li><a href="./contact.html">Contacts</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="header__nav__option">
                        <a href="#" className="search-switch"><img src="img/icon/search.png" alt=""/></a>
                        <a href="#"><img src="img/icon/heart.png" alt=""/></a>
                        <a href="#"><img src="img/icon/cart.png" alt=""/> <span>0</span></a>
                        <div className="price">$0.00</div>
                    </div>
                </div>
            </div>
            <div className="canvas__open"><i className="fa fa-bars"></i></div>
        </div>
    </header>
    {/* <!-- Header Section End --> */}

    {/* <!-- Hero Section Begin --> */}
    <section className="hero">
    
        <div className="hero__slider owl-carousel">
            <div className="hero__items set-bg" data-setbg="img/hero/1.png">
              
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-7 col-md-8">
                            <div className="hero__text">
                                <h6>Summer Collection</h6>
                                <h2>Fall - Winter Collections 2030</h2>
                                <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                commitment to exceptional quality.</p>
                                <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                                <div className="hero__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero__items set-bg" data-setbg="img/hero/2.png">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-7 col-md-8">
                            <div className="hero__text">
                                <h6>Summer Collection</h6>
                                <h2>Fall - Winter Collections 2030</h2>
                                <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                commitment to exceptional quality.</p>
                                <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                                <div className="hero__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Hero Section End --> */}

    {/* <!-- Banner Section Begin --> */}
    <section className="banner spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 offset-lg-4">
                    <div className="banner__item">
                        <div className="banner__item__pic">
                            <img src="img/banner/banner-1.jpg" alt=""/>
                        </div>
                        <div className="banner__item__text">
                            <h2>Clothing Collections 2030</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="banner__item banner__item--middle">
                        <div className="banner__item__pic">
                            <img src="img/banner/banner-2.jpg" alt=""/>
                        </div>
                        <div className="banner__item__text">
                            <h2>Accessories</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="banner__item banner__item--last">
                        <div className="banner__item__pic">
                            <img src="img/banner/banner-3.jpg" alt=""/>
                        </div>
                        <div className="banner__item__text">
                            <h2>Shoes Spring 2030</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Banner Section End --> */}

    {/* <!-- Product Section Begin --> */}
    <section className="product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="filter__controls">
                        <li className="active" data-filter="*">Best Sellers</li>
                        <li data-filter=".new-arrivals">New Arrivals</li>
                        <li data-filter=".hot-sales">Hot Sales</li>
                    </ul>
                </div>
            </div>
            <div className="row product__filter">
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/product/habesha/1.png">
                            <span className="label">New</span>
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Piqué Biker Jacket</h6>
                            <a href="#" className="add-cart">+ Add To Cart</a>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>$67.24</h5>
                            <div className="product__color__select">
                                <label for="pc-1">
                                    <input type="radio" id="pc-1"/>
                                </label>
                                <label className="active black" for="pc-2">
                                    <input type="radio" id="pc-2"/>
                                </label>
                                <label className="grey" for="pc-3">
                                    <input type="radio" id="pc-3"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/product/habesha/2.png">
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Piqué Biker Jacket</h6>
                            <a href="#" className="add-cart">+ Add To Cart</a>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>$67.24</h5>
                            <div className="product__color__select">
                                <label for="pc-4">
                                    <input type="radio" id="pc-4"/>
                                </label>
                                <label className="active black" for="pc-5">
                                    <input type="radio" id="pc-5"/>
                                </label>
                                <label className="grey" for="pc-6">
                                    <input type="radio" id="pc-6"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                    <div className="product__item sale">
                        <div className="product__item__pic set-bg" data-setbg="img/product/habesha/3.png">
                            <span className="label">Sale</span>
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Multi-pocket Chest Bag</h6>
                            <a href="#" className="add-cart">+ Add To Cart</a>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>$43.48</h5>
                            <div className="product__color__select">
                                <label for="pc-7">
                                    <input type="radio" id="pc-7"/>
                                </label>
                                <label className="active black" for="pc-8">
                                    <input type="radio" id="pc-8"/>
                                </label>
                                <label className="grey" for="pc-9">
                                    <input type="radio" id="pc-9"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/product/habesha/4.png">
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Diagonal Textured Cap</h6>
                            <a href="#" className="add-cart">+ Add To Cart</a>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>$60.9</h5>
                            <div className="product__color__select">
                                <label for="pc-10">
                                    <input type="radio" id="pc-10"/>
                                </label>
                                <label className="active black" for="pc-11">
                                    <input type="radio" id="pc-11"/>
                                </label>
                                <label className="grey" for="pc-12">
                                    <input type="radio" id="pc-12"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/product/habesha/5.png">
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Lether Backpack</h6>
                            <a href="#" className="add-cart">+ Add To Cart</a>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>$31.37</h5>
                            <div className="product__color__select">
                                <label for="pc-13">
                                    <input type="radio" id="pc-13"/>
                                </label>
                                <label className="active black" for="pc-14">
                                    <input type="radio" id="pc-14"/>
                                </label>
                                <label className="grey" for="pc-15">
                                    <input type="radio" id="pc-15"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                    <div className="product__item sale">
                        <div className="product__item__pic set-bg" data-setbg="img/product/habesha/6.png">
                            <span className="label">Sale</span>
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Ankle Boots</h6>
                            <a href="#" className="add-cart">+ Add To Cart</a>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>$98.49</h5>
                            <div className="product__color__select">
                                <label for="pc-16">
                                    <input type="radio" id="pc-16"/>
                                </label>
                                <label className="active black" for="pc-17">
                                    <input type="radio" id="pc-17"/>
                                </label>
                                <label className="grey" for="pc-18">
                                    <input type="radio" id="pc-18"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/product/habesha/7.png">
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>T-shirt Contrast Pocket</h6>
                            <a href="#" className="add-cart">+ Add To Cart</a>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>$49.66</h5>
                            <div className="product__color__select">
                                <label for="pc-19">
                                    <input type="radio" id="pc-19"/>
                                </label>
                                <label className="active black" for="pc-20">
                                    <input type="radio" id="pc-20"/>
                                </label>
                                <label className="grey" for="pc-21">
                                    <input type="radio" id="pc-21"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/product/product-8.jpg">
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Basic Flowing Scarf</h6>
                            <a href="#" className="add-cart">+ Add To Cart</a>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>$26.28</h5>
                            <div className="product__color__select">
                                <label for="pc-22">
                                    <input type="radio" id="pc-22"/>
                                </label>
                                <label className="active black" for="pc-23">
                                    <input type="radio" id="pc-23"/>
                                </label>
                                <label className="grey" for="pc-24">
                                    <input type="radio" id="pc-24"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Product Section End --> */}

    {/* <!-- Categories Section Begin --> */}
    <section className="categories spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="categories__text">
                        <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="categories__hot__deal">
                        <img src="img/product-sale.png" alt=""/>
                        <div className="hot__deal__sticker">
                            <span>Sale Of</span>
                            <h5>$29.99</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1">
                    <div className="categories__deal__countdown">
                        <span>Deal Of The Week</span>
                        <h2>Multi-pocket Chest Bag Black</h2>
                        <div className="categories__deal__countdown__timer" id="countdown">
                            <div className="cd-item">
                                <span>3</span>
                                <p>Days</p>
                            </div>
                            <div className="cd-item">
                                <span>1</span>
                                <p>Hours</p>
                            </div>
                            <div className="cd-item">
                                <span>50</span>
                                <p>Minutes</p>
                            </div>
                            <div className="cd-item">
                                <span>18</span>
                                <p>Seconds</p>
                            </div>
                        </div>
                        <a href="#" className="primary-btn">Shop now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Categories Section End --> */}

    {/* <!-- Instagram Section Begin --> */}
    <section className="instagram spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="instagram__pic">
                        <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-1.jpg"></div>
                        <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-2.jpg"></div>
                        <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-3.jpg"></div>
                        <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-4.jpg"></div>
                        <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-5.jpg"></div>
                        <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-6.jpg"></div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="instagram__text">
                        <h2>Instagram</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                        <h3>#Male_Fashion</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Instagram Section End --> */}

    {/* <!-- Latest Blog Section Begin --> */}
    <section className="latest spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <span>Latest News</span>
                        <h2>Fashion New Trends</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" data-setbg="img/blog/blog-1.jpg"></div>
                        <div className="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""/> 16 February 2020</span>
                            <h5>What Curling Irons Are The Best Ones</h5>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" data-setbg="img/blog/blog-2.jpg"></div>
                        <div className="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""/> 21 February 2020</span>
                            <h5>Eternity Bands Do Last Forever</h5>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" data-setbg="img/blog/blog-3.jpg"></div>
                        <div className="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""/> 28 February 2020</span>
                            <h5>The Health Benefits Of Sunglasses</h5>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Latest Blog Section End --> */}

    {/* <!-- Footer Section Begin --> */}
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__logo">
                            <a href="#"><img src="img/footer-logo.png" alt=""/></a>
                        </div>
                        <p>The customer is at the heart of our unique business model, which includes design.</p>
                        <a href="#"><img src="img/payment.png" alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h6>Shopping</h6>
                        <ul>
                            <li><a href="#">Clothing Store</a></li>
                            <li><a href="#">Trending Shoes</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Sale</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h6>Shopping</h6>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Payment Methods</a></li>
                            <li><a href="#">Delivary</a></li>
                            <li><a href="#">Return & Exchanges</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                    <div className="footer__widget">
                        <h6>NewLetter</h6>
                        <div className="footer__newslatter">
                            <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                            <form action="#">
                                <input type="text" placeholder="Your email"/>
                                <button type="submit"><span className="icon_mail_alt"></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="footer__copyright__text">
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        <p>Copyright ©
                            {/* <script>
                                document.write(new Date().getFullYear());
                            </script> */}
                            2024
                            All rights reserved | This template is made with <i className="fa fa-heart-o"
                            aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer Section End --> */}

    {/* <!-- Search Begin --> */}
    <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="search-close-switch">+</div>
            <form className="search-model-form">
                <input type="text" id="search-input" placeholder="Search here....."/>
            </form>
        </div>
    </div>
    {/* <!-- Search End --> */}

    
</div>
  )
}

export default Home
