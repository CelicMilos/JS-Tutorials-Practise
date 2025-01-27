const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: "John", age: 30 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});
// ono sto se returnijue u Promisu moze da se upotrebi u .then
// i tako mogu da se vezu vise .then .
//Bolje nego Callback hell!
promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((nameLength) => {
    console.log(nameLength);
  })
  .catch((error) => {
    console.log(error);
    return 123;
  })
  // .then moze da se veze i na .catch
  .then((x) => {
    console.log("This will run no matter what", x);
    // ako se nesto returnuje u .catch-u moze da se iskoristi u .then
    //ovo x je return iz .catch,ali se ne vidi ako se Promise ispuni,bice 'Undifined'.
    //Ne kosristi se cesto ali moze
  });
