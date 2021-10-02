// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  retrieve: function (username, roomname) {
    var result = [];

    for (var i = 0; i < Messages._data.length; i ++) {
      var currentMessage = Messages._data[i];

      if (currentMessage[username] === username) {
        result.push(currentMessage);
      }

      if (currentMessage[roomname] === roomname) {
        result.push(currentMessage);
      }

      return result;
    }
  },

  add: function (text) {
    //FINISH THIS

  }
};