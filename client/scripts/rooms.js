// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  add: function(room) {
    if (!this._data.includes(room)) {
      this._data.push(room);
    }
  },

  retrieve: function() {
    return this._data.map(room => {
      return room;
    });
  },

  updateList: function() {
    let messages = Messages.retrieve();

    let uniqueRooms = [];
    messages.forEach(message => {
      if (!uniqueRooms.includes(message.roomname)) {
        uniqueRooms.push(message.roomname);
      }
    });
    this._data = uniqueRooms;
  }


  //markSelectedRoom

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};