import $ from "./lib/lib";

$('button').click(function () {
  $('div').eq(1).toggleClass('active');
  $(this).setAttr('data-btn', 'push');
  setTimeout(() => {
    $(this).removeAttr('data-btn');
  }, 1000);
});

$('div').click(function () {
  console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findme'));
console.log($('.findme').siblings());