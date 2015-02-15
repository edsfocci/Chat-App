Messages = new Meteor.Collection('messages');

Meteor.methods({
  message: function(messageAttributes) {
    // ensure that user picked an alias
    if (messageAttributes.sender == "")
      throw new Meteor.Error(401, "You need to pick an alias to send messages");

    // ensure that 'text' isn't blank
    if (messageAttributes.text == "")
      throw new Meteor.Error(422, "Message text was left blank");

    // pick out the whitelisted keys
    var message = _.extend(_.pick(messageAttributes, 'sender', 'text'),{
      postTime: new Date().getTime()
    });

    var messageId = Messages.insert(message);

    return messageId;
  }
});
