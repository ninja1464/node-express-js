let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject();
    }
  });
};

order(2000, () => {
  console.log("order food");
})
  .then(() => {
    return order(1000, () => {
      console.log("order is being prepared");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("order is on the way");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("order has reached at your door");
    });
  })

  .catch(() => {
    console.log("shop is closed");
  })

  .finally(() => {
    console.log("opened till 10 pm.");
  });
