$(function () {
  $("#fullpage").fullpage({
    anchors: [
      "section1",
      "section2",
      "section3",
      "section4",
      "section5",
      "section6",
      "section7",
      "section8",
      "section9",
    ],
    navigation: true,
    navigationPosition: "right",
    scrollingSpeed: 1000,
    keyboardScrolling: true,

    onLeave(index, nextIndex, driection) {
      if (index == 3) {
        $(".standing_mario>img").animate(
          {
            bottom: "-100px",
          },
          1000, 'linear'
        );
      }

      if (index == 9) {
        // $('.castle_flag>img').animate({
        //     top: '5vh'
        // }, 1000);
      }
    },

    afterLoad: function (anchorLink, index) {
      if (index == 3) {
    


        $(".standing_mario>img").animate(
          {
            bottom: "0",
          },
          1400, 'linear'
        );

      }

      if (index == 9) {

        setTimeout(function () {
          $(".e_bm_wrap")
            .css("display", "block")
            .css("animation-play-state", "running");
        }, 1000);

        setTimeout(function () {
          $(".e_bm").animate(
            {
              animation: "none",
            },
            100
          ),
            $(".e_bm_run1").animate(
              {
                opacity: "0",
              },
              10
            ),
            $(".standing_bm").css("display", "block");
        }, 6000);

        setTimeout(function () {
          $(".castle_flag>img").animate(
            {
              top: "-8vh",
            },
            1000
          );
        }, 7000);

        setTimeout(function () {
          $(".fireworks>img:nth-child(1)").css(
            "animation-play-state",
            "running"
          ),
            $(".fireworks>img:nth-child(2)").css(
              "animation-play-state",
              "running"
            ),
            $(".fireworks>img:nth-child(3)").css(
              "animation-play-state",
              "running"
            ),
            $(".fireworks>img:nth-child(4)").css(
              "animation-play-state",
              "running"
            );
        }, 8000);

        setTimeout(function () {
          $(".jumping_bm").css("display", "block"),
            $(".jumping_bm")
              .css("animation-play-state", "running")
              .css("display", "block"),
            $(".standing_bm").css("animation-play-state", "running"),
            $(".left_peach").css("animation-play-state", "running"),
            $(".front_peach").css("animation-play-state", "running");
        }, 10000);
      }

    },
    
  });
});

// slider
$(function () {
  $(".bxslider").bxSlider({
    mode: "fade",
    pager: false,
    captions: true,
  });
});
// slider end

// mario jump
$(function () {
  $(".mario_wrap").click(function () {
    $("standing_mario").css("transition", "none");
    $(".mario").animate(
      {
        top: "-100px",
      },
      200
    ),
      $(".mario").animate(
        {
          top: "0px",
        },
        200
      ),
      $(".standing_mario>img").animate(
        {
          opacity: "0",
        },
        200
      ),
      $(".jumping_mario>img").animate(
        {
          opacity: "1",
        },
        200
      ),
      $(".jumping_mario>img").animate(
        {
          opacity: "0",
        },
        200
      ),
      $(".standing_mario>img").animate(
        {
          opacity: "1",
        },
        200
      );
  });
});

// // mario jump end