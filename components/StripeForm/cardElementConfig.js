const cardElementConfig = {
  hidePostalCode: true,
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#fff",
      color: "#fff",
      fontWeight: 400,
      fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
      fontSize: "1em",
      fontSmoothing: "antialiased",

      "::placeholder": {
        color: "#BFAEF6"
      },
      ":-webkit-autofill": {
        color: "#fce883"
      }
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "#FFC7EE"
    }
  }
}

export default cardElementConfig
