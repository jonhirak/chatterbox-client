// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],
  roomsList: [],
  currentRoom: null,
  // _data: ['testing'],


  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  add: function(roomName, ... members) {
    //method that creates new room
    var room = {};

    room.name = roomName;
    room.members = members;
    room.addMembers = function (...members) {
      this.members = this.memebers.concat(members);
    };

    if (this._data.length > 0) {
      var sorted = [];

      // for (var i = 0; i < this._data.length; i ++) {
      //   var current = this._data[i];

      //   current.

      // }
    }

    this._data.push(room);
  },

  select: function (roomName) {

  }

};