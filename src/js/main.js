import '../scss/style.scss';
import '../index.html';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/autocomplete.js';

$(document).ready(function() {
    let searchItems = [
        "Витамины",
        "Витамин С",
        "Витаминные комплексы",
        "Витамины для повышения иммунитета",
        "Витамины в Витамины и бады",
        "Витамины в Витамины для женщин",
        "Витамины в Витамины для детей",
    ];
    $( "#search" ).autocomplete({
        source: searchItems
    });
    $(".header__search--dropdown").hide();
    $("input").click(function (){
        $(".header__search--dropdown").show();
    })
    $('form').mouseleave(function (){
        $('.header__search--dropdown').stop().hide();
    });
    $('input').keyup(function (){
        $('.header__search--dropdown').stop().hide();
    });
} );