$('button').on('click', () => {


  // Grab the inputs VALUE
  const $input = $('input').val();

  console.log($input);
  // First select the input
  createTodo($input)
  // Then maybe find its VALUEEEE
});


const createTodo = (inputVal) => {


  // Create a div with class of todos
  const $div = $('<div/>').addClass('todos');


  // Create an h5 with the todo's text, How do I get
  // the todo's text in this function?
  $div.append('<h5>' + inputVal + '</h5>');

  // Other way to do what was done right above this
  // const $h5 = $('<h5/>').text(inputVal);
  // $div.append($h5);
  // Create a button with the text of addTod
  const $button = $('<button/>').on('click', completedTodo)

  $button.text('completed')

  $div.append($button)

  // Append these in the correct order, and to the
  // correct place on the dom , LOOK at the HTML
  $('#col-1').append($div)
}


const completedTodo = (event) => {
  // console.log(event.currentTarget);

  // grabbing the whole todo
  const $currentTodo = $(event.currentTarget).parent()

  console.log($currentTodo)
  $('#col-2').append($currentTodo)

  $(event.currentTarget).text('delete')
  // button is event.currentTarget
  $(event.currentTarget).off('click').on('click', removeTodo)
}

const removeTodo = (e) => {
  // the button is e.currentTarget
  const $div = $(e.currentTarget).parent();
  $div.velocity("transition.fadeOut", 5000, (elem) => {
    $(elem).remove();
  });
}

// $('img').velocity({
//   perspective: [215, 50],
//   rotateX: 360,
//   translatex: 60,
//   opacity: [1, 0.55],
//   height: '+=350'
// }, {
//   duration: 4000,
//   loop: 5,
//   delay: 20
// })
