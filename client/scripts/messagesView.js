// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //MessagesView.$chats.on('click', MessagesView.handleClick);
    //App.fetch();
    //MessagesView.render();

    $('#refresh').on('click', () => {
      App.fetch();
      MessagesView.render(); ///////////////
    });

    //////anonymous function:
    /////App.fetch();
    //////MessagesView.render();

    // TODO: Perform any work which needs to be done when this view loads.
  },

  render: function() {
    // render feed of chats before rendering chats?
    // TODO: Render _all_ the messages.
    console.log(11111);
    MessagesView.$chats.text('');
    let allMessages = Messages.retrieve();
    allMessages.forEach(message => {
      MessagesView.renderMessage(message);
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var output = MessageView.render(message);
    MessagesView.$chats.append(output);

  },

  handleClick: function(event) {

    // TODO: handle a user clicking on a message (this should add the sender to the user's friend list).
  }
};