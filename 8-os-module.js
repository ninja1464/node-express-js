const os = require("os");
//info about current user
const user = os.userInfo();
console.log(user);

//method returns the uptime system in seconds
console.log(`The sytem ${os.uptime()} in seconds`)

const curretOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(curretOS)
