
    $(document).ready(function(){

      /*PART OF THE HEADER SECTION*/
        $("#welcome").addClass("animated hinge").css("color", "#008080");
        $("#intro").addClass("animated slideOutDown");

        /*Target the button in the header section
        $(".btn").addClass("animated bounce");*/

        /*Target the navbar brand to disable it*/
        $(".navbar-brand").hide();

        $("h4").css("color", "#008080"); /* picks all the h4 in the document*/

        /*Testing something on pricing */
        $('#banner').html('<h2>OUR PRICING</h2>');

        /*Target the Subscribe button SUMBIT*/
        $("#submit").addClass("animated rubberBand");

        $('.conversion tr:odd').css('color','#ff6600');
    

    }); //end ready

      $(document).ready(function(){
        reslide();
      });

      function reslide(){
      $("#bp").delay(5000).animate({width:'0'}, 600).delay(5000).animate({width:'100%'}, 600, function(){
      setTimeout(reslide, 2000);
      });
      }
