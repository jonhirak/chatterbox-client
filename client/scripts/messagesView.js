// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // Messages.addAllMessages();
    MessagesView.render(Messages._data);
  },

  render: function(roomArgs) {
    // TODO: Render _all_ the messages.
    roomArgs.forEach(element => {
      var message = element.text;
      var username = element.username;
      MessagesView.renderMessage(message, username);
    });
  },

  renderMessage: function(message, username) {
    // TODO: Render a single message.

    var $message = MessageView.render({message: message, username: username});

    MessagesView.$chats.append($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};