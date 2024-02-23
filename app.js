// let userinput = prompt("Enter your email");
// let userinput2 = prompt("Enter your pass");

// if (userinput === "khushboo.com" && userinput2 === "1213") {
//   let balins = 400;
//   let prompt1 = prompt(
//     "Your account balins " + balins + " deposit or withdraw"
//   );

//   if (prompt1 == "deposit") {
//     let withd = parseInt(prompt("How much you want to deposit"));
//     let reult = balins + withd;
//     document.write(
//       "Your old balins is ",
//       balins,
//       "<br> Your now balins is ",
//       reult
//     );
//   } else if (prompt1 == "withdraw") {
//     let withd = parseInt(prompt("How much you want to withdraw"));
//     if (withd <= balins) {
//       let reult = balins - withd;
//       document.write(
//         "Your old balins is ",
//         balins,
//         "<br><br> Your now balins is ",
//         reult
//       );
//     } else {
//       document.write(" your  blnc is less thn ", withd);
//     }
//   } else {
//     document.write("Error");
//   }
// } else {
//   document.write(" your  account is not found");
// }

let words = prompt("Enter anything");
let balanse = 400;
switch (words == balanse) {
  case "deposit":
    let words = prompt("How much you want to deposit");
    document.write("Your account balins " + balanse + " deposit is it");

    break;

  default:
    break;
}
