Template.messageSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var message = {
      sender: $(e.target).find('[name=sender]').val(),
      text: $(e.target).find('[name=text]').val()
      //postDate: new Date()
    }

    //if (message.text == "") return;

    //message._id = Messages.insert(message);
    document.getElementById("text").value = "";
    Meteor.call('message', message, function(err, id) {
      if (err) return alert(err.reason);
    });

    var list = document.getElementById("message-list");
    list.scrollTop = list.scrollHeight;
  }
});
