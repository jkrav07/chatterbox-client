// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    let message = $('#message').val();
    let roomName = $('#roomSelect option:selected').text();
    console.log(roomName);
    let messageObj = {
      username: 'jkrav07',
      text: message,
      roomname: roomName
    };
    Parse.create(messageObj, function (data) {
      console.log('chatterbox: Message sent');
    });
    $('#message').val('');
    console.log('click!');
    //App.fetch();
    //MessagesView.render();

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

