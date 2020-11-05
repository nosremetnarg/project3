import React, { useEffect } from "react";

function Random() {
  //   const randomFacts = [
  //     "One Oyster can filter 50 gallons of water a day.",
  //     "Oysters absorb 76 to 93 percent of wave energy, which reduces erosion, and flooding during storms.",
  //     "Thanks to modern food safety, the 'R' policy no longer applies.",
  //   ];
  useEffect(( ) => {
    var myVar = setInterval(myTimer, 10000);
    return () => {
      clearInterval(myVar)
    }
  }, [])
  const randomFacts = [
    "Oysters contain a variety of vitamins and nutrients including zinc, calcium, magnesium, protein, selenium, and vitamin A.",
    "One Oyster can filter 50 gallons of water a day.",
    "Oysters absorb 76-93% of wave energy, which reduces erosion, and flooding during storms.",
    "Thanks to modern food safety, the 'R' policy no longer applies.",
    "Why don't oysters share their pearls? Because they are shellfish",
    "What is an oyster's favorite band? Pearl Jam",
    'An oyster can filter 1.3 gallons of water per hour.'
  ];
  function myTimer() {
    let randomNum = [Math.floor(Math.random() * Math.floor(6))];
    console.log(randomNum);
console.log(randomFacts[randomNum]);
    let randomQuote = (randomFacts[randomNum]);
    document.querySelector('#demo').textContent = randomQuote
  }

  return (
    <section>
      <p></p>
      <span id="demo"></span>
    </section>
  );
}

export default Random;
