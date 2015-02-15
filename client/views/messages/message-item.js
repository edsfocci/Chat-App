Template.messageItem.helpers({
  postDate: function() {
    var date = new Date(0);
    date.setUTCMilliseconds(this.postTime);
    return date;
  }
});
