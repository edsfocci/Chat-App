Template.messagesList.helpers({
  messages: function() {
    return Messages.find({}, {sort: {postTime: 1}});
  }
});
