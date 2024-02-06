function call_one(callback) {
  console.log("call function 1");

  setTimeout(() => {
    const data = "what else left to call";
    callback(data);
    setTimeout(() => {
      console.log("calling function 3");
    }, 2000);
  }, 5000);
}

function arg(data) {
  console.log("call function 2", data);
}

call_one(arg);
