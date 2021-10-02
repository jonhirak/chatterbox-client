// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('click', RoomsView.handleChange);
    RoomsView.render();
  },

  render: function() {
    // TODO: Render out the list of rooms.
    Rooms._data.forEach(element => {

      var roomname = element.roomname;

      RoomsView.renderRoom(roomname);
    });
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    if (!Rooms.roomsList.includes(roomname)) {
      Rooms.roomsList.push(roomname);
      var $roomname = '<option>' + roomname + '</option>';
      RoomsView.$select.append($roomname);
    }
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.

    var selectedRoom = RoomsView.$select.find(':selected').text();
    // console.log('selectedRoom:', selectedRoom);
    // Rooms.currentRoom = selectedRoom;

    var filtered = [];
    //iterate over _.data
    for (var i = 0; i < Rooms._data.length; i ++) {
      // for each message check if room matches currently selected room
      var current = Rooms._data[i];
      if (current.roomname === selectedRoom) {
      //if so, puch into new filtered array
        filtered.push(current);
      }
      //set message filtered array as property of Messages
      Messages.filtered = filtered;
    }
    //<>.html('');
    MessagesView.$chats.html('');
    MessagesView.render(Messages.filtered);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var inputValue = document.getElementById('addRoomTextBox').value;

    if (inputValue) {
      RoomsView.renderRoom(inputValue);

      document.getElementById('addRoomTextBox').value = '';
    }
  }
};
