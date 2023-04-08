// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //MessagesView.$chats.on('click', MessagesView.handleClick);
    $('#refresh').on('click', MessagesView.render); ///????
    MessagesView.render(); //I DON'T THINK WE NEED THIS ANYMORE??

    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // render feed of chats before rendering chats?
    // TODO: Render _all_ the messages.
    //MessagesView.$chats.forEach( message => renderMessage(message))
    let allMessages = Messages.retrieve();
    allMessages.forEach(message => {
      this.renderMessage(message);
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var output = MessageView.render(message); //
    MessagesView.$chats.append(output);

  },

  handleClick: function(event) {

    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }
};