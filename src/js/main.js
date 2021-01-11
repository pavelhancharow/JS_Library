import $ from "./lib/lib";

$('button').click(function () {
  $(this).toggleClass('active');
  $(this).setAttr('data-btn', 'push');
  setTimeout(() => {
    $(this).removeAttr('data-btn');
  }, 1000);
});