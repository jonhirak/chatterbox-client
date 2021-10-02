// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],
  filtered: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  retrieve: function (username, roomname) {
    var filtered = [];

    if (aruguments.length === 0) {
      return this._data;
    } else {
      for (var i = 0; i < this._data.length; i ++) {
        var currentMessage = this._data[i];

        if (currentMessage[username] === username) {
          filtered.push(currentMessage);
        }

        if (currentMessage[roomname] === roomname) {
          filtered.push(currentMessage);
        }

        return filtered;
      }
    }
  },

  addAllMessages: function () {
    var string = 'hi';
    this._data =
    console.log('this._data:' + this._data);
  }
};