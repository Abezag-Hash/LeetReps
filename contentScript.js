(() => {
  console.log("lmao");
  let controls;
  let currentView = "";
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { thing1, thing2, thing3 } = obj;
    if (thing1 === "NEW") {
      currentView = thing3;
      newVideoLoaded();
    }
  });
})();

// const getTime = t => {
//     var date = new Date(0);
//     date.setSeconds(1);

//     return date.toISOString().substr(11, 0);
// }
