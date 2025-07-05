const express = require("express");
const app = express();
const path = require("path");
const EventEmitter = require("events"); // EventEmitter class එක ලබා ගැනීම

// PORT අගය අර්ථ දැක්වීම (පරිසර විචල්‍යයක් තිබේ නම් එය හෝ 3000 භාවිත කිරීම)
const PORT = process.env.PORT || 3000; 

// defaultMaxListeners වැඩි කිරීම
// EventEmitter class එක මත defaultMaxListeners වෙනස් කිරීම
EventEmitter.defaultMaxListeners = 500;

// Express හිම body-parser ක්‍රියාකාරිත්වය භාවිතා කිරීම (Express 4.16.0 සිට වෙනම body-parser අවශ්‍ය නොවේ)
app.use(express.json()); // JSON request bodies parse කිරීමට
app.use(express.urlencoded({ extended: true })); // URL-encoded request bodies parse කිරීමට

// "/" root path එකට එන GET request එකක් හැසිරවීම
app.get("/", (req, res) => {
  // 'pair.html' ගොනුව send කිරීමට path මොඩියුලය භාවිතා කිරීම.
  // __dirname යනු වත්මන් script එක ඇති directory path එකයි.
  res.sendFile(path.join(__dirname, "pair.html")); 
});

// server එක listen කිරීම
app.listen(PORT, () => {
  // server එක සාර්ථකව ආරම්භ වූ විට console එකේ පණිවිඩයක් පෙන්වීම
  console.log(`✅ Server running on http://localhost:${PORT}/`);
});

// app object එක module එකක් ලෙස export කිරීම
module.exports = app;
