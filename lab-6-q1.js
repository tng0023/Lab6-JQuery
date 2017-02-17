$(document).ready(function(){

        <!--to update span elements to bold -->
        $("span").css({
            "font-weight" : "Bold"
            });

        <!--update H2 elements background color to green-->
        $("h2").click(function(){
          $(this).css({
            "background-color" : "green"
          });
        });

        <!--show/hide p elements-->
        $("p").hover(

        function(){
          $(this).hide();
        },

        function(){
          $(this).show();
      });

      <!--update h1 elements to blue when clicked on-->
      $("#h1_blue").click(function(){
        $("h1").css({
          "color" : "blue"
        });
      });

      <!--remove not_important text-->
      $("#remove_not_important").click(function(){
        $(".not_important").remove();
      });

      <!--make the unordered list fadeout-->
      $("ul").click(function(){
        $(this).fadeOut(2500);
      });
    });
