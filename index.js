function scuberGreetingForFeet(ride){
  // Write your code here!
  let string = "string";
    if (ride > 2500) {
      string = "No can do."
    } else if (ride > 2000) {
      string = "I will gladly take your thirty bucks."
    } else if (ride <= 400) {
      string = "This one is on me!"
    } else {
      string = "invalid entry"
    };
  return string
};

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go."
};

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you."
    default :
      return "Bye.";
  };
};