// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
        <div class="username"> <%- username %> </div>
        <div> <%- message %> </div>
      </div>
    `)
};

// campus: "hr-sfo"
// created_at: "2021-10-02T02:28:18.363Z"
// github_handle: "Thistleman"
// message_id: 35115
// roomname: null
// text: "WOOOOOOOOOOOOO!!!!"
// updated_at: "2021-10-02T02:28:18.363Z"
// username: "Duncan Ragsdale"
// [[Prototype]]: Object
