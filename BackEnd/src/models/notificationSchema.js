const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  
    notification: {
      type: String,
    },
   
  });


  const Notifications = mongoose.model("notification", NotificationSchema);
  