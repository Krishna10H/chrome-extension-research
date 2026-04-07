🛡️ Extension Security Research PoC
Created by: Dasa Krishna Chaitanya

This project is a Proof-of-Concept (PoC) designed to demonstrate how Chrome Extension permissions can be leveraged to capture user input (Keylogging) and send it to a remote Node.js server.

⚠️ Legal & Ethical Disclaimer
FOR EDUCATIONAL AND RESEARCH PURPOSES ONLY.
This software is intended to help security researchers and developers understand "Form Grabbing" attacks. Using this tool against unauthorized targets is illegal. The author is not responsible for any misuse of this code.

🏗️ Project Architecture
The system consists of two parts:

The Client (Chrome Extension): Injected into the browser to capture keystrokes.

The Server (Node.js): A backend listener that receives, formats, and saves the captured data to a local file.

📋 Requirements
Before starting, ensure you have the following installed:

Google Chrome (or any Chromium-based browser like Brave/Edge).

Node.js (LTS Version recommended).

NPM (Included with Node.js).

🚀 Setup & Installation
1. Configure the Backend Server
Open your terminal (CMD/PowerShell on Windows or Terminal on Linux) and follow these steps:

Bash
# 1. Navigate to the project folder
cd your-project-folder

# 2. Initialize the project
npm init -y

# 3. Install required security/web dependencies
npm install express cors

# 4. Start the attacker base
node server.js
The server will now be listening on http://localhost:3000.

2. Load the Chrome Extension
Open Chrome and navigate to chrome://extensions/.

Enable Developer Mode (toggle in the top right corner).

Click Load Unpacked.

Select the folder containing the manifest.json and extension scripts.

Ensure the extension is enabled.

🛠️ Usage Instructions
On Windows:
Running: Use node server.js in PowerShell.

Viewing Logs: Open output.txt in Notepad or run type output.txt in the terminal.

Stopping: Press Ctrl + C in the terminal window.

On Linux (Kali/Ubuntu):
Running: Use nodejs server.js.

Viewing Logs: Run cat output.txt or tail -f output.txt to watch logs in real-time.

Permissions: If you encounter errors, ensure the directory is writable: chmod +777 .

📊 Log Format
The server saves data in the following format inside output.txt:
[TIMESTAMP] [SESSION_ID] [URL] -> KEY_PRESSED

🧪 Research Goals
Understand the risk of Manifest V3 permission sets.

Test browser-level defenses against unauthorized script injection.

Analyze how CORS policies can be bypassed or utilized in extension-to-server communication.
