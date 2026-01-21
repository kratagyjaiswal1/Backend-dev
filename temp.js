const os = require("os");
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

const platform = os.platform()
const uptime = os.uptime()/(3600)
const model = os.cpus()[0].model


console.log(totalMemory,platform,uptime,model);