$(".homeBtn").click(function() {
    $(".homePage").show();
    $(".familyPage").hide();
    $(".lifePage").hide();
    $(".favoritesPage").hide();
    $(".hobbiesPage").hide();
});

$(".familyBtn").click(function() {
    $(".familyPage").show();
    $(".homePage").hide();
    $(".lifePage").hide();
    $(".favoritesPage").hide();
    $(".hobbiesPage").hide();
});

$(".lifeBtn").click(function() {
    $(".lifePage").show();
    $(".homePage").hide();
    $(".familyPage").hide();
    $(".favoritesPage").hide();
    $(".hobbiesPage").hide();
});

$(".favBtn").click(function() {
    $(".favoritesPage").show();
    $(".homePage").hide();
    $(".familyPage").hide();
    $(".lifePage").hide();
    $(".hobbiesPage").hide();
});

$(".hobbiesBtn").click(function() {
    $(".hobbiesPage").show();
    $(".homePage").hide();
    $(".familyPage").hide();
    $(".favoritesPage").hide();
    $(".lifePage").hide();
});
