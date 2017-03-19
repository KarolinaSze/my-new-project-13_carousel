// plik scripts.js

var carouselList = $("#carousel ul");

$(document).ready(function() {
    

    function changeSlide() {
        carouselList.animate({'marginLeft': -450}, 1000, moveFirstSlide);
    };

    setInterval(changeSlide, 2500);
    
    function moveFirstSlide() {

        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");

        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    };
});

