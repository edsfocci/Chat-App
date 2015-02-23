window.ChatUI = (function () {

  var chatUI = {
    messageListLengthLast: 0,
    messageHeightCalculated: 0,
    messageListHeightLastChange: 0,

    getWindowWidth: function() {
      return window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    },

    getWindowHeight: function() {
      return window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    },

    repositionTextInput: function() {
      var xPos = this.getWindowHeight() - 33 - 8;
      document.getElementById("text").style.top = xPos + "px";
    },

    setListDimensions: function() {
      // ExtraWidth_Scrollbar + LeftMargin + WidthNameList + NameListMargins
      // TotalWidth_Scrollbar = 14px
      var listWidth = this.getWindowWidth() - 8 - 8 - 156 - 16;
      var listHeight = this.getWindowHeight() - 45 - 8;
      var list = document.getElementById("message-list");
      list.style.width = listWidth + "px";
      list.style.height = listHeight + "px";
    },

    showModal: function() {
      document.getElementById("modal-wrapper").className = "overlay";
      var modalWindow = document.getElementById("modal-window");
      modalWindow.style.marginTop = (-modalWindow.offsetHeight)/2 + "px";
      modalWindow.style.marginLeft = (-modalWindow.offsetWidth)/2 + "px";
    },

    /* Debug functions */
    /*
    setWidthView: function() {
      var width = this.getWindowWidth();
      document.getElementById("width").innerHTML = "width: " + width;
    },

    setHeightView: function() {
      var height = this.getWindowHeight();
      document.getElementById("height").innerHTML = "height: " + height;
    }
    */
  };

  return chatUI;

}());

