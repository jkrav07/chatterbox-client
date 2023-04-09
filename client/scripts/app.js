// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    App.startSpinner();
    // Fetch initial batch of messages
    App.fetch(App.stopSpinner);
    // ?????///// why not working?, but works with click handler

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    callback();
    Parse.readAll((data) => {
      Messages.clear();
      console.log(data);

      data.forEach(message => {
        let notMalicious = true;
        for (let prop in message) {
          let string = message[prop];
          if (typeof string === 'string') {
            if (string.includes('<') && string.includes('>')) {
              notMalicious = false;
              break;
            }
          }
        }
        if (notMalicious) {
          Messages.add(message);
        }
      });
      MessagesView.render();
      Rooms.updateList();
      RoomsView.render();
    });

  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
