import $ from "./lib/lib";

$('#first').click(() => {
  $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').click(() => {
  $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).click(() => {
  $('.w-500').fadeToggle(800);
});

$('#trigger').click(() => $('#trigger').createModal(
  {
    textTitle: 'Modal Title',
    textBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!',
    btnCount: 3,
    btnSettings: [
      [
        'Close',
        ['btn-danger', 'mr-10'],
        true
      ],
      [
        'Save changes',
        ['btn-success'],
        false,
        () => {
          alert('Данные сохранены');
        }
      ],
      [
        'Another btn',
        ['btn-warning', 'ml-10'],
        false,
        () => {
          alert('Hello World');
        }
      ]
    ]
  }
));