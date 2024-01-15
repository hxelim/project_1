$(function () {
    $('.potcolorgroup> p').css('visibility','hidden')
    $('.potcolorgroup> div:nth-of-type(1) div').css('visibility','hidden')
    $('.potcolorgroup> div:nth-of-type(2)').hide();
    $('.potcolorgroup> div:nth-of-type(3)').hide();
    $('.potcolorgroup> div:nth-of-type(4)').hide();
    $('.potcolorgroup> div:nth-of-type(5)').hide();
    $('.potcolorgroup> div:nth-of-type(6)').hide();
    // $('.like_textbox> div').hide();
    // $('.like_textbox> div:nth-of-type(1)').show();

    // 상품이미지
        $('.photos>img').on({
            "click" : function(){
            var imgSrc = $(this).attr('src');
            $('.photoBig>img').attr('src',imgSrc);
        }
        });



    // 주문창
    
        $('.pot').click(function(){
            let text = $(this).children().attr('alt');
            console.log(text)
            $('.potstyle p:nth-of-type(2) span').text(text);
            $('.potcolorgroup p span:nth-of-type(1)').text(text);
        });

        $('.potcolor div').click(function(){
            let text = $(this).attr('name');
            console.log(text)
            $('.potcolorgroup p span:nth-of-type(2)').text(text);
        });

        $('.potimagebox div').click(function(){
            let idx = $(this).index();
  
            let text = $('.potcolor').eq(idx).children('div:first').attr('name');
  
            $('.potcolorgroup p span:nth-of-type(2)').text(text);
        });



        // 화분 색상 선택
        
        $('.potimagebox div:nth-of-type(1)').click(function(){
            $('.pot').removeClass('active')
            $(this).addClass('active');
            $('.potcolorgroup> p').css('visibility','hidden')
            $('.potcolorgroup> div:nth-of-type(1)').show();
            $('.potcolorgroup> div:nth-of-type(1) div').css('visibility','hidden')
            $('.potcolorgroup> div:nth-of-type(2)').hide();
            $('.potcolorgroup> div:nth-of-type(3)').hide();
            $('.potcolorgroup> div:nth-of-type(4)').hide();
            $('.potcolorgroup> div:nth-of-type(5)').hide();
            $('.potcolorgroup> div:nth-of-type(6)').hide();
            
        });

        $('.potimagebox div:nth-of-type(2)').click(function(){
            $('.pot').removeClass('active')
            $(this).addClass('active');
            $('.potcolorgroup> p').css('visibility','visible')
            $('.potcolorgroup> div:nth-of-type(2)').show();
            $('.potcolorgroup> div:nth-of-type(1)').hide();
            $('.potcolorgroup> div:nth-of-type(3)').hide();
            $('.potcolorgroup> div:nth-of-type(4)').hide();
            $('.potcolorgroup> div:nth-of-type(5)').hide();
            $('.potcolorgroup> div:nth-of-type(6)').hide();
        });

        $('.potimagebox div:nth-of-type(3)').click(function(){
            $('.pot').removeClass('active')
            $(this).addClass('active');
            $('.potcolorgroup> p').css('visibility','visible')
            $('.potcolorgroup> div:nth-of-type(3)').show();
            $('.potcolorgroup> div:nth-of-type(1)').hide();
            $('.potcolorgroup> div:nth-of-type(2)').hide();
            $('.potcolorgroup> div:nth-of-type(4)').hide();
            $('.potcolorgroup> div:nth-of-type(5)').hide();
            $('.potcolorgroup> div:nth-of-type(6)').hide();
        });

        $('.potimagebox div:nth-of-type(4)').click(function(){
            $('.pot').removeClass('active')
            $(this).addClass('active');
            $('.potcolorgroup> p').css('visibility','visible')
            $('.potcolorgroup> div:nth-of-type(4)').show();
            $('.potcolorgroup> div:nth-of-type(1)').hide();
            $('.potcolorgroup> div:nth-of-type(2)').hide();
            $('.potcolorgroup> div:nth-of-type(3)').hide();
            $('.potcolorgroup> div:nth-of-type(5)').hide();
            $('.potcolorgroup> div:nth-of-type(6)').hide();
        });

        $('.potimagebox div:nth-of-type(5)').click(function(){
            $('.pot').removeClass('active')
            $(this).addClass('active');
            $('.potcolorgroup> p').css('visibility','visible')
            $('.potcolorgroup> div:nth-of-type(5)').show();
            $('.potcolorgroup> div:nth-of-type(1)').hide();
            $('.potcolorgroup> div:nth-of-type(2)').hide();
            $('.potcolorgroup> div:nth-of-type(3)').hide();
            $('.potcolorgroup> div:nth-of-type(4)').hide();
            $('.potcolorgroup> div:nth-of-type(6)').hide();
        });

        $('.potimagebox div:nth-of-type(6)').click(function(){
            $('.pot').removeClass('active')
            $(this).addClass('active');
            $('.potcolorgroup> p').css('visibility','visible')
            $('.potcolorgroup> div:nth-of-type(6)').show();
            $('.potcolorgroup> div:nth-of-type(1)').hide();
            $('.potcolorgroup> div:nth-of-type(2)').hide();
            $('.potcolorgroup> div:nth-of-type(3)').hide();
            $('.potcolorgroup> div:nth-of-type(4)').hide();
            $('.potcolorgroup> div:nth-of-type(5)').hide();
        });

    // 중간 네비게이션

        $('.navbox > div:nth-of-type(2)').hide();
        $('.navbox > div:nth-of-type(3)').hide();
        $('.navbox > div:nth-of-type(4)').hide();

        $('#middlenav ul li:nth-of-type(1)').click(function () {
            $('#middlenav ul li').removeClass('active')
            $(this).addClass('active');
            $('.navbox > div:nth-of-type(1)').fadeIn();
            $('.navbox > div:nth-of-type(2)').hide();
            $('.navbox > div:nth-of-type(3)').hide();
            $('.navbox > div:nth-of-type(4)').hide();
        });

        $('#middlenav ul li:nth-of-type(2)').click(function () {
            $('#middlenav ul li').removeClass('active')
            $(this).addClass('active');
            $('.navbox > div:nth-of-type(2)').fadeIn();
            $('.navbox > div:nth-of-type(1)').hide();
            $('.navbox > div:nth-of-type(3)').hide();
            $('.navbox > div:nth-of-type(4)').hide();
        });

        $('#middlenav ul li:nth-of-type(3)').click(function () {
            $('#middlenav ul li').removeClass('active')
            $(this).addClass('active');
            $('.navbox > div:nth-of-type(3)').fadeIn();
            $('.navbox > div:nth-of-type(1)').hide();
            $('.navbox > div:nth-of-type(2)').hide();
            $('.navbox > div:nth-of-type(4)').hide();
        });

        $('#middlenav ul li:nth-of-type(4)').click(function () {
            $('#middlenav ul li').removeClass('active')
            $(this).addClass('active');
            $('.navbox > div:nth-of-type(4)').fadeIn();
            $('.navbox > div:nth-of-type(1)').hide();
            $('.navbox > div:nth-of-type(2)').hide();
            $('.navbox > div:nth-of-type(3)').hide();
        });

        // also like

        // $('.arrowL').click(function(){
        //     $('.like_textbox> div').hide();
        //     $('.like_textbox> div:nth-of-type(2)').show();
        // });

        // $('.arrowL').click(function(){
        //     $('.like_textbox> div').hide();
        //     $('.like_textbox> div:nth-of-type(3)').show();
        // });




});