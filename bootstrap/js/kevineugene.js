//Sticky Navbar
var ch = $(".chapters");

$(window).scroll(function(){
    if($(this).scrollTop() > 40){
        ch.addClass("chapters-scrolled");
    }
    else {
        ch.removeClass("chapters-scrolled");
    }
});

//Scrollspy
var sections = [];
var id = false;

$(".chapters a").each(function(){
    sections.push($($(this).attr('href')));
});

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop()+35;
    for(var i in sections){
        var section = sections[i];
        if(scrollTop > section.offset().top){
            id = section.attr('id');
        }
    }
    $('a', ch).removeClass('current');
    $('a[href="#'+id+'"]', ch).addClass('current');
});

//Smooth Scroll
$(".chapters a").click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    
    $('html, body').animate({
        scrollTop: $(target).offset().top-34
    },'slow');
});

$(".chapters a").mouseup(function(){
    $(this).blur();
});

//Navbar Collapse
$('.handle').on('click',function(){
    $('nav ul').toggleClass("showing");
});

$('.chapters a').on('click', function(){
    $('nav ul').toggleClass("showing");
});

$('.handle').on('click', function(){
    $('.handle').toggleClass("dropped-down");
});

$('.chapters a').on('click', function(){
    $('.handle').toggleClass("dropped-down");
});

//Siri-Carousel
var panels = undefined;
var id = false;

var firstPanel = undefined;
var lastPanel = undefined;
var leftArrow = undefined;
var rightArrow = undefined;

$(".left-arrow").click(shiftToRight);
$(".right-arrow").click(shiftToLeft);

function arrow(event){
    if($(event.target).attr("id")=="siri-panel-arrow") {
        firstPanel=$(".siri-panel .first");
        lastPanel=$(".siri-panel .last");
        leftArrow=$(".siri-panel .left-arrow");
        rightArrow=$(".siri-panel .right-arrow");
    }
    else if($(event.target).attr("id")=="hey-siri-arrow") {
        firstPanel=$(".hey-siri .first");
        lastPanel=$(".hey-siri .last");
        leftArrow=$(".hey-siri .left-arrow");
        rightArrow=$(".hey-siri .right-arrow");
    }
     else if($(event.target).attr("id")=="single-sign-on-arrow") {
        firstPanel=$(".single-sign-on .first");
        lastPanel=$(".single-sign-on .last");
        leftArrow=$(".single-sign-on .left-arrow");
        rightArrow=$(".single-sign-on .right-arrow");
    }
    if(firstPanel.attr('id')!=="demo0" && lastPanel.attr('id')!=="demo0"){
        leftArrow.css("display","block");
        rightArrow.css("display","block");
    }
    else if(firstPanel.attr('id')==="demo0"){
        leftArrow.css("display","none");
        rightArrow.css("display","block");
    }
    else if(lastPanel.attr('id')==="demo0"){
        rightArrow.css("display","none");
        leftArrow.css("display","block");
    }
}

function shiftToRight(event){
    if($(event.target).attr("id")=="siri-panel-arrow") {
        panels=$(".siri-panel .demo");
    }
    else if($(event.target).attr("id")=="hey-siri-arrow") {
        panels=$(".hey-siri .demo");
    }
    else if($(event.target).attr("id")=="single-sign-on-arrow") {
        panels=$(".single-sign-on .demo");
    }
    panels.each(function(){
        id = +$(this).attr("id").match(/-*[\d]+$/)+1;
        if(id>1 || id<-1){
            $(this).css("display","none");
        }
        else if(id>=-1 && id<=1){
            $(this).css("display","block");
        }
        $(this).css("left",id*100+'%');
        $(this).attr("id", "demo"+id);
    });
    arrow(event);
}

function shiftToLeft(event){
    if($(event.target).attr("id")=="siri-panel-arrow") {
        panels=$(".siri-panel .demo");
    }
    else if($(event.target).attr("id")=="hey-siri-arrow") {
        panels=$(".hey-siri .demo");
    }
    else if($(event.target).attr("id")=="single-sign-on-arrow") {
        panels=$(".single-sign-on .demo");
    }
    panels.each(function(){
        id = +$(this).attr("id").match(/-*[\d]+$/)-1;
        if(id>1 || id<-1){
            $(this).css("display","none");
        }
        else if(id>=-1 && id<=1){
            $(this).css("display","block");
        }
        $(this).css("left",id*100+'%');
        $(this).attr("id", "demo"+id);
    });
    arrow(event);
}


















