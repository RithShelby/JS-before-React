function stepOne(callback) {
  setTimeout(function () {
    console.log("Step One Completed");
    callback();
  }, 1000);
}

function stepTwo(callback) {
  setTimeout(function () {
    console.log("Step Two Completed");
    callback();
  }, 1000);
}

function stepThree(callback) {
  setTimeout(function () {
    console.log("Step Three Completed");
    callback();
  }, 1000);
}

stepOne(()=> {
  stepTwo(()=> {
    stepThree(()=>{
     setTimeout(() => {
      console.log("All step finished")
     },2000);
    });
  });
});
