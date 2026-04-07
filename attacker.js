// We add a listener that triggers EVERY time a user presses a key.
document.addEventListener('keydown', (event) => {
    
    // We build a "Data Package" to send back to our server.
    const packet = {
        key: event.key,               // Captures the letter (e.g., 'a', 'Enter', 'Shift').
        timestamp: Date.now(),        // Captures the exact millisecond for rhythm analysis.
        url: window.location.href,    // Records which website the user is typing on.
        type: "keystroke"
    };

    // Send this captured packet to the background.js "Brain."
    chrome.runtime.sendMessage({ action: "UPLOAD_DATA", data: packet });
});

// We also capture mouse clicks to track how the user navigates.
document.addEventListener('click', (event) => {
    const clickPacket = {
        x: event.clientX,             // The horizontal position of the mouse click.
        y: event.clientY,             // The vertical position of the mouse click.
        timestamp: Date.now(),
        type: "click"
    };

    // Send the click data to the background.js script.
    chrome.runtime.sendMessage({ action: "UPLOAD_DATA", data: clickPacket });
});
