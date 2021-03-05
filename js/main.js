$(function (){
    $('#fullpage').fullpage({
        anchors: ['section1','section2','section3','section4','section5','section6','section7','section8','section9'],
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 1000,
        keyboardScrolling: true,
        
        onLeave (index, nextIndex, driection) {
            if(index==3) {
                $('.standing_mario>img').css("bottom","-100px").css("transition","all 1s linear");
                $('.typing>ul>li').html("");    
            }

            
            if(index==9) {
                // $('.castle_flag>img').animate({
                //     top: '5vh'
                // }, 1000);
            }
        },
       
        afterLoad: function(anchorLink,index){
            if (index==3) {

                let typingBool = false;
                let typingIdx = 0;
                let liIndex = 0;
                let liLength = $(".typing_txt>ul>li").length;
                // 타이필 될 텍스트를 가져온다.

                let typingTxt = $(".typing_txt>ul>li").eq(liIndex).text();
                typingTxt=typingTxt.split(""); // 한글자씩 자른다.
                if (typingBool==false) { // 타이핑이 진행되지 않았다면
                    typingBool=true;
                    tyInt = setInterval(typing,100); //반복동작
                }

                function typing() {
                    $(".typing ul li").removeClass("on");
                    $(".typing ul li").eq(liIndex).addClass("on");
                    if (typingIdx<typingTxt.length) {
                        // 타이핑 될 텍스트 길이만큼 반복
                        $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다.
                        typingIdx++;
                    } else {
                        if (liIndex<liLength-1) {
                        // 다음문장으로 가기 위해 인덱스를 1 증가
                        liIndex++;
                        // 다음문장을 타이핑 하기 위한 세팅
                        typingIdx=0;
                        typingBool = false;
                        typingTxt=$(".typing_txt ul li").eq(liIndex).text();

                        // 다음문장 타이핑 전 1초 쉰다.
                        clearInterval(tyInt);
                        // 타이핑종료

                        setTimeout(function(){
                            // 1초 후에 다시 타이핑 반복 시작
                            tyInt = setInterval(typing,100);
                        },1000);
                    } else if (liIndex==liLength-1) {
                        // 마지막 문장까지 써지면 반복종료
                        clearInterval(tyInt);
                        }
                    }
                }
                // section1 typing effect end

                $('.standing_mario>img').css('bottom','0').css('transition','all 1s linear');

 
            }

            if (index==9) {
                

                setTimeout(function(){

                    $('.e_bm_wrap').css('display','block').css('animation-play-state','running');
                }, 1000);

                setTimeout(function(){
                    $('.e_bm').animate({
                        animation: 'none'
                    }, 100),
                    $('.e_bm_run1').animate({
                        opacity: '0'
                    }, 10),
                    $('.standing_bm').css('display','block');
                }, 6000);

                setTimeout(function(){
                    $('.castle_flag>img').animate({
                        top: '-8vh'
                    }, 1000);
                }, 7000);

                
                setTimeout(function(){
                    $('.fireworks>img:nth-child(1)').css('animation-play-state','running'),
                    $('.fireworks>img:nth-child(2)').css('animation-play-state','running'),
                    $('.fireworks>img:nth-child(3)').css('animation-play-state','running'),
                    $('.fireworks>img:nth-child(4)').css('animation-play-state','running');
                }, 8000);

                setTimeout(function(){
                    $('.jumping_bm').css('display','block'),
                    $('.jumping_bm').css('animation-play-state','running').css('display','block'),
                    $('.standing_bm').css('animation-play-state','running'),
                    $('.left_peach').css('animation-play-state','running'),
                    $('.front_peach').css('animation-play-state','running');
                }, 10000);



                
            }
        }

    });
});







        $(function(){
            $('.mario_wrap').click(function(){
                $('.mario').animate({
                    top: '-100px'
                },200 ),
                $('.mario').animate({
                    top: '0px'
                },200),
                $('.standing_mario>img').animate({
                    opacity: '0'
                },200),
                $('.jumping_mario>img').animate({
                    opacity: '1'
                },200),
                $('.jumping_mario>img').animate({
                    opacity: '0'
                },200),
                $('.standing_mario>img').animate({
                    opacity: '1'
                },200);  
            });
        });

        // // mario jump end