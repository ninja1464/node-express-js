let stocks = {
  fruits: ["banana", "apple", "kiwi"],
  liquids: ["water", "tea"],
  holder: ["cone", "cup", "sticks"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruitname, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruitname]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("fuits has been chopped");

      setTimeout(() => {
        console.log(`${stocks.liquids[1]} is added`);

        setTimeout(() => {
          console.log("machine is started");

          setTimeout(() => {
            console.log(`${stocks.holder[1]} is selected`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} is added`);

              setTimeout(() => {
                console.log("serve the ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

order(0, production);
