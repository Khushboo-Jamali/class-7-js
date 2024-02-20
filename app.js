let userinput = prompt("Enter your email");
let userinput2 = prompt("Enter your pass");

if (userinput === "khushboojamaligmail.com" && userinput2 === "1213") {
  let balins = 400;
  let prompt1 = prompt(
    "Your account balins " + balins + " deposit or withdraw"
  );

  if (prompt1 == "deposit") {
    let withd = parseInt(prompt("How much you want to deposit"));
    let reult = balins + withd;
    document.write(
      "Your old balins is ",
      balins,
      "<br> Your now balins is ",
      reult
    );
  } else {
    document.write("Error");
  }
} else {
  document.write(" your  account is not found");
}
