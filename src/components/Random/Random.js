import React from "react";

function Random() {
  //   const randomFacts = [
  //     "One Oyster can filter 50 gallons of water a day.",
  //     "Oysters absorb 76 to 93 percent of wave energy, which reduces erosion, and flooding during storms.",
  //     "Thanks to modern food safety, the 'R' policy no longer applies.",
  //   ];

  var myVar = setInterval(myTimer, 10000);
  const randomFacts = [
    "",
    "One Oyster can filter 50 gallons of water a day.",
    "Oysters absorb 76 to 93 percent of wave energy, which reduces erosion, and flooding during storms.",
    "Thanks to modern food safety, the 'R' policy no longer applies.",
  ];
  let randomNum = [Math.floor(Math.random() * Math.floor(4))];
  function myTimer() {
    document.getElementById("demo").innerHTML = console.log(
      randomFacts[randomNum]);
  }

  return (
    <section>
      <p></p>
      <p id="demo"></p>
    </section>
  );
}

export default Random;
