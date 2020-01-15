$(document).ready(function () {
    // preloader
    $('.preloader').fadeOut()
    // navBtn
    $('.navBtn').click(function(){
        $('.nav').toggleClass('nav--show')
    })
    // video Switch
    $('.video__switch-container').click(function(){
        const value = $('.video__switch-btn').hasClass('btnSlide')
        if(value){
            $('.video__switch-btn').removeClass('btnSlide')
            $('#video').get(0).play()
        }else{
            $('.video__switch-btn').addClass('btnSlide')
            $('#video').get(0).pause()
        }
    });
    // accordion
    // accordion
    $('.accordion__btn').click(function () {
        console.log(this);
        
        $('.accordion__btn').not(this).removeClass('rotate');
        $('.accordion__btn').not(this).parent().next().slideUp();

        
        $(this).toggleClass('rotate')
        $(this).parent().next().slideToggle();
        
    });

    // Team Member
    // iify -- instantly involed function expresstion
    /* what it means is that this is going to run the code that we're writing instantly but it's also going to protect the actual data that we're going to have within the function. And the reason for that is because I'm going to be actually copying based thing a big array. */
        // (function (){})();
    (function (){
    let data = [{
            id: 0,
            name: 'john doe',
            job: 'developer',
            text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
            favorites: ['eat', 'drink', 'sleep'],
            img: 'img/team-1.jpg'
        },
        {
            id: 1,
            name: 'tom orange',
            job: 'designer',
            text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?.`,
            favorites: ['paint', 'draw', 'run'],
            img: 'img/team-2.jpg'
        },
        {
            id: 2,
            name: 'albert cupid',
            job: 'accountant',
            text: `I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.`,
            favorites: ['math', 'physics', 'more math'],
            img: 'img/team-3.jpg'
        },
        {
            id: 4,
            name: 'dog hugo',
            job: 'intern',
            text: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.`,
            favorites: ['bark', 'run', 'bite'],
            img: 'img/team-4.jpg'
        }
    ]
    $('.team-img__item').click(function(){
        // adding/removing active class
        $('.team-img__item').not(this).removeClass('active')
        $(this).addClass('active')
        // change data
        let id = $(this).attr('data-id')
        // console.log(id);
        $('.team-info__member-name').text(data[id].name)
        $('.team-info__member-job').text(data[id].job)
        $('.team-info__member-text').text(data[id].text)
        $('.team-info__member-single-favorite-text').each(function(index){
            $(this).text(data[id].favorites[index])
        })
        $('.team-info__img').attr('src',data[id].img)

        
    })

    })();

    






});
