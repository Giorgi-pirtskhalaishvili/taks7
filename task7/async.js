const produceToys = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(`TOY HAS BEEN DONE`);
      } else {
        reject(`THE TOY IS DEFECTED`);
      }
    }, ms);
  });
};

function sellToys(ms, status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === "TOY HAS BEEN DONE") {
        if (Math.random() > 0.1) {
          resolve(`TOY HAS BEEN SOLD`);
        } else {
          reject(`THE TOY IS STILL ON SHELF`);
        }
      }
    }, ms);
  });
}

function delivery(ms, status2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status2 === "TOY HAS BEEN SOLD") {
        if (Math.random() > 0.5) {
          resolve(`WE WILL BRING THE TOYS ASAP`);
        } else {
          reject(`THE TOYS HAS BEEN LOST`);
        }
      }
    }, ms);
  });
}
// produceToys(3000)
//   .then((res1) => sellToys(2000, res1))
//   .then((res2) => delivery(1000, res2))
//   .then((res3) => console.log(res3))
//   .catch((err) => console.log(err));

async function run() {
  try {
    const produced = await produceToys(3000);
    const sold = await sellToys(2000, produced);
    const delivered = await delivery(1000, sold);
    console.log(delivered);
  } catch (error) {
    console.log(error);
  }
}

for (let i = 0; i < 10; i++) {
  run();
}
