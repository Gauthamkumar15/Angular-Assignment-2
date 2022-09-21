app.service("currencyService", function () {
  this.returningCurrencyArray = function () {
    return [
      "INR",
      "USD",
      "EUR",
      "JPY",
      "GBP",
      "AUD",
      "CAD",
      "CHF",
      "CNH",
      "HKD",
      "NZD",
    ];
  };

  this.changeCurrency = function (from) {
    console.log(from);
    switch (from) {
      case "INR":
        return "₹";
        break;
      case "USD":
        return "$";
        break;
      case "EUR":
        return "€";
        break;
      case "JPY":
        return "¥";
        break;
      case "GBP":
        return "£";
        break;
      case "AUD":
        return "A$";
        break;
      case "CAD":
        return "CA$";
        break;
      case "CHF":
        return "Fr.";
        break;
      case "CNH":
        return "CN¥";
        break;
      case "HKD":
        return "HK$";
        break;
      case "NZD":
        return "NZ$";
        break;
      default:
        return null;
    }
  };

  this.convertToInrOrInrToOthers = function (from, amount, mode) {
    switch (from) {
      case "INR":
        return amount;
        break;
      case "USD":
        if (mode === "toInr") {
          return parseInt(amount) * 79.92;
        } else if (mode === "toOthers") {
          return parseInt(amount) / 79.92;
        }

        break;
      case "EUR":
        if (mode === "toInr") {
          return parseInt(amount) * 79.16;
        } else if (mode === "toOthers") {
          return parseInt(amount) / 79.16;
        }

        break;

      case "JPY":
        if (mode === "toInr") {
          return parseInt(amount) * 0.56;
        } else if (mode === "toOthers") {
          return parseInt(amount) / 0.56;
        }

        break;

      case "GBP":
        if (mode === "toInr") {
          return parseInt(amount) * 90.59;
        } else if (mode === "toOthers") {
          return parseInt(amount) / 90.59;
        }

        break;

      case "AUD":
        if (mode === "toInr") {
          return parseInt(amount) * 53.25;
        } else if (mode === "toOthers") {
          return parseInt(amount) / 53.25;
        }

        break;

      case "CAD":
        if (mode === "toInr") {
          return parseInt(amount) * 59.71;
        } else if (mode === "toOthers") {
          return parseInt(amount) / 59.71;
        }

        break;
      case "CHF":
        if (mode === "toInr") {
          return parseInt(amount) * 82.74;
        } else if (mode === "toOthers") {
          return parseInt(amount) / 82.74;
        }

        break;

      case "CNH":
        if (mode === "toInr") {
          return parseInt(amount) * 11.3806;
        } else if (mode === "toOthers") {
          return parseInt(amount) / 11.3806;
        }

        break;

      case "HKD":
        if (mode === "toInr") {
          return parseInt(amount) * 10.18;
        } else if (mode === "toOthers") {
          return parseInt(amount) / 10.18;
        }

        break;
      case "NZD":
        if (mode === "toInr") {
          return parseInt(amount) * 47.01;
        } else if (mode === "toOthers") {
          return parseInt(amount) / 47.01;
        }

        break;
      default:
        return null;
    }
  };

  this.getEndResult = function (from, to, amount) {
    let indianRupee;
    switch (from) {
      case "INR":
        return this.convertToInrOrInrToOthers(to, amount, "toOthers");
        break;
      case "USD":
        indianRupee = this.convertToInrOrInrToOthers(from, amount, "toInr");
        console.log(indianRupee);

        return this.convertToInrOrInrToOthers(to, indianRupee, "toOthers");
        break;

      case "EUR":
        indianRupee = this.convertToInrOrInrToOthers(from, amount, "toInr");
        console.log(indianRupee);
        return this.convertToInrOrInrToOthers(to, indianRupee, "toOthers");
        break;

      case "JPY":
        indianRupee = this.convertToInrOrInrToOthers(from, amount, "toInr");
        console.log(indianRupee);
        return this.convertToInrOrInrToOthers(to, indianRupee, "toOthers");
        break;

      case "GBP":
        indianRupee = this.convertToInrOrInrToOthers(from, amount, "toInr");
        console.log(indianRupee);
        return this.convertToInrOrInrToOthers(to, indianRupee, "toOthers");
        break;

      case "AUD":
        indianRupee = this.convertToInrOrInrToOthers(from, amount, "toInr");
        console.log(indianRupee);
        return this.convertToInrOrInrToOthers(to, indianRupee, "toOthers");
        break;

      case "CAD":
        indianRupee = this.convertToInrOrInrToOthers(from, amount, "toInr");
        console.log(indianRupee);
        return this.convertToInrOrInrToOthers(to, indianRupee, "toOthers");
        break;

      case "CHF":
        indianRupee = this.convertToInrOrInrToOthers(from, amount, "toInr");
        console.log(indianRupee);
        return this.convertToInrOrInrToOthers(to, indianRupee, "toOthers");
        break;

      case "CNH":
        indianRupee = this.convertToInrOrInrToOthers(from, amount, "toInr");
        console.log(indianRupee);
        return this.convertToInrOrInrToOthers(to, indianRupee, "toOthers");
        break;

      case "HKD":
        indianRupee = this.convertToInrOrInrToOthers(from, amount, "toInr");
        console.log(indianRupee);
        return this.convertToInrOrInrToOthers(to, indianRupee, "toOthers");
        break;

      case "NZD":
        indianRupee = this.convertToInrOrInrToOthers(from, amount, "toInr");
        console.log(indianRupee);
        return this.convertToInrOrInrToOthers(to, indianRupee, "toOthers");
        break;

      default:
        return null;
    }
  };
});
