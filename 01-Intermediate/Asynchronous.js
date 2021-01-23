const uno = () => {
  return "I am One.";
};

const dos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("I am Two");
    }, 3000);
  });
};

const tres = () => {
  return "I am three";
};

const caller = async () => {
  let valOne = uno();
  console.log(valOne);
  let valTwo = await dos();
  console.log(valTwo);
  let valThree = tres();
  console.log(valThree);
};

caller();
