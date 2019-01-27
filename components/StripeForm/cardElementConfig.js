const cardElementConfig = {
  hidePostalCode: true,
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#fff",
      color: "#fff",
      fontWeight: 300,
      fontFamily: "Montserrat, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",

      "::placeholder": {
        color: "#fff"
      },
      ":-webkit-autofill": {
        color: "#fff"
      }
    },
    invalid: {
      iconColor: "#a33b20",
      color: "#a33b20"
    }
  }
}

export default cardElementConfig
