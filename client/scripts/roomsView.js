// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $input: $('#roomsInput'), ///////////i added this

  initialize: function() {
    // TODO: Perform any work which needs to be donevwhen this view loads.
    /////////////// $button.on('click', handleClick)???
    this.$button.on('click', RoomsView.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    $('#roomSelect').empty();
    let allRooms = Rooms.retrieve();
    allRooms.forEach(room => {
      RoomsView.renderRoom(room);
    });
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    let $roomOption = $('<option>' + roomname + '</option>');
    this.$select.append($roomOption);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.'
    var room = $('#newRoom').val();
    Rooms.add(room);
    RoomsView.render();
    $('#newRoom').val('');
    //retrieve value of $input.val()
    //create element <option>  value(val)
    //$select.append($option) add to dropdown
    //$input.val('')
  }

};
