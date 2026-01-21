// Import required modules
const os = require('os');
const fs = require('fs');

// Function to get system information
function getSystemInfo() {
  const cpuInfo = os.cpus()[0].model;
  const totalMemory = (os.totalmem() / 1024 / 1024).toFixed(2);
  const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);
  const platform = os.platform();

  return `
Time: ${new Date().toLocaleString()}
CPU: ${cpuInfo}
Total Memory: ${totalMemory} MB
Free Memory: ${freeMemory} MB
Platform: ${platform}
---------------------------
`;
}

// Log system info every 5 seconds
setInterval(() => {
  const info = getSystemInfo();

  fs.appendFile('system.log', info, (err) => {
    if (err) {
      console.log('Error writing file');
    } else {
      console.log('System info logged');
    }
  });
}, 5000);
