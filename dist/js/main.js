$(document).ready(function() {
  $("#fullpage").fullpage({
    sectionsColor: ["#ccc", "#00f", "#f00", "#f0f", "#0ff"],
    autoscrolling: true,
    scrollHorizontally: true,
    navigation: true,
    anchors: ["section1", "section2", "section3", "section4", "section5"],
    navigationTooltips: ["TOP", "About Us", "Activity", "Member", "Contact"],
    showActiveTooltip: true,
    scrollingSpeed: 1200,
    loopTop: true,
    loopBottom: true,
    onLeave: function(origin, destination, direction) {
      console.log("onLeave", origin.index, destination.index);
      if (origin.index == 0) {
        $("a.contact-btn").fadeOut();
        menuReset();
        $("#btnScrollToTop").fadeIn();
        $(".nav-item.active").removeClass("active");
      } else if (origin.index == 1) {
        $(".content1").slideUp();
        $(".nav-item.active").removeClass("active");
        // $("#btnScrollToTop").fadeIn();
      } else if (origin.index == 2) {
        $(".content2").slideUp();
        $(".nav-item.active").removeClass("active");
      } else if (origin.index == 3) {
        $(".content3").slideUp();
        $(".nav-item.active").removeClass("active");
      } else if (origin.index == 4) {
        $(".content4").slideUp();
        $(".nav-item.active").removeClass("active");
        // $("#wrap").show();
        // $("header").show();
      }

      if (destination.index == 4) {
        // $("#wrap").hide();
      }

      if (destination.index == 0) {
        $("a.contact-btn").fadeIn();
        $("#btnScrollToTop").fadeOut();
      }
    },
    afterLoad: function(origin, destination, direction) {
      console.log("afterLoad", origin.index, destination.index);
      if (destination.index == 0) {
        // $(".menu").fadeIn();
        // $(".menu-btn").fadeIn();
        $("#btnScrollToTop").hide();
        $(".nav-item:nth-child(1)").addClass("active");
      } else if (destination.index == 1) {
        $(".content1").slideDown();
        $(".nav-item:nth-child(2)").addClass("active");
      } else if (destination.index == 2) {
        $(".content2").slideDown();
        $(".nav-item:nth-child(3)").addClass("active");
      } else if (destination.index == 3) {
        $(".content3").slideDown();
        $(".nav-item:nth-child(4)").addClass("active");
      } else if (destination.index == 4) {
        $(".content4").slideDown();
        $(".nav-item:nth-child(5)").addClass("active");
        // $("header").hide();
      }
    }
  });

  // リンクをクリックした時のリセット処理
  $fpNavLink = $("#fp-nav ul li a");

  $(".nav-link").click(function() {
    menuReset();
  });
  $fpNavLink.click(function() {
    menuReset();
  });

  setTimeout(function() {
    $("a.contact-btn").fadeIn();
  }, 3000);

  $(document).on("click", "#turnOff", function() {
    fullpage_api.setAutoScrolling(false);
  });

  $(document).on("click", "#turnOn", function() {
    fullpage_api.setAutoScrolling(true);
  });

  $(window).on("load resize", function() {
    responsive();
  });

  // fulllpage.js off for smartphone
  function responsive() {
    var w = $(window).width();
    if (w <= 768) {
      $.fn.fullpage.setResponsive(true);
    } else {
      $.fn.fullpage.setResponsive(false);
    }
  }
});

//
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuTitle = document.querySelector(".menu-title");
const navItem = document.querySelectorAll(".nav-item");
// const btnScrollToTop = querySelector("#btnScrollToTop");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
// btnScrollToTop.addEventListener("click", backToTop);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close-menu");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuTitle.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));
    $("a.contact-btn").hide();
    $(".menu").fadeIn();

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close-menu");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuTitle.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));
    $("a.contact-btn").show();
    $(".menu").fadeOut();

    // Set Menu State
    showMenu = false;
  }
}

function menuReset() {
  menuBtn.classList.remove("close-menu");
  menu.classList.remove("show");
  menuNav.classList.remove("show");
  menuTitle.classList.remove("show");
  navItem.forEach(item => item.classList.remove("show"));
  $(".menu").fadeOut();

  // Set Menu State
  showMenu = false;
}
