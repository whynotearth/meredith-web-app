<template>
  <div
    class="cell stripe-wrapper stripe">
    <form
      id="payment-form"
      @submit.prevent="onSubmit">
      <fieldset>
        <legend
          class="card-only"
          data-tid="stripe_elements.form.pay_with_card">Pay with card</legend>
        <legend
          class="payment-request-available"
          data-tid="elements_examples.form.enter_card_manually">Use your saved payment method.</legend>

        <div
          v-if="paymentMethod === 'default'"
          class="row">
          <div class="field">
            <label
              for="stripe-name"
              data-tid="stripe_elements.form.name_label">Name</label>
            <input
              id="stripe-name"
              v-model="additionalData.name"
              data-tid="stripe_elements.form.name_placeholder"
              class="input"
              type="text"
              placeholder="Jane Doe"
              required
              autocomplete="name">
          </div>
        </div>

        <div
          v-if="paymentMethod === 'default'"
          class="row">
          <div class="field">
            <label
              for="stripe-email"
              data-tid="stripe_elements.form.email_label">Email</label>
            <input
              id="stripe-email"
              v-model="additionalData.email"
              data-tid="stripe_elements.form.email_placeholder"
              class="input"
              type="email"
              placeholder="janedoe@gmail.com"
              required
              autocomplete="email">
          </div>
          <div class="field">
            <label
              for="stripe-phone"
              data-tid="stripe_elements.form.phone_label">Phone</label>
            <input
              id="stripe-phone"
              v-model="metadata.phone_number"
              data-tid="stripe_elements.form.phone_placeholder"
              class="input"
              type="text"
              placeholder="(941) 555-0123"
              required
              autocomplete="tel">
          </div>
        </div>

        <div data-locale-reversible="">
          <div class="row">
            <div class="field">
              <label
                for="stripe-address"
                data-tid="stripe_elements.form.address_label">Address</label>
              <input
                id="stripe-address"
                v-model="additionalData.address_line1"
                data-tid="stripe_elements.form.address_placeholder"
                class="input"
                type="text"
                placeholder="185 Berry St"
                required
                autocomplete="address-line1"
              >
            </div>
          </div>

          <div
            class="row"
            data-locale-reversible>
            <div class="field">
              <label
                for="stripe-city"
                data-tid="stripe_elements.form.city_label">City</label>
              <input
                id="stripe-city"
                v-model="additionalData.address_city"
                data-tid="stripe_elements.form.city_placeholder"
                class="input"
                type="text"
                placeholder="San Francisco"
                required
                autocomplete="address-level2"
              >
            </div>
            <div class="field">
              <label
                for="stripe-state"
                data-tid="stripe_elements.form.state_label">State</label>
              <input
                id="stripe-state"
                v-model="additionalData.address_state"
                data-tid="stripe_elements.form.state_placeholder"
                class="input empty"
                type="text"
                placeholder="CA"
                required
                autocomplete="address-level1"
              >
            </div>
            <div class="field">
              <label
                for="stripe-zip"
                data-tid="stripe_elements.form.postal_code_label">ZIP</label>
              <input
                id="stripe-zip"
                v-model="additionalData.address_zip"
                data-tid="stripe_elements.form.postal_code_placeholder"
                class="input empty"
                type="text"
                placeholder="94107"
                required
                autocomplete="postal-code"
              >
            </div>
          </div>
        </div>

        <div
          v-if="paymentMethod === 'default'"
          class="row">
          <div class="field">
            <label
              for="stripe-card"
              data-tid="stripe_elements.form.card_label">Card</label>
            <div
              ref="card"
              class="input"/>
          </div>
        </div>
        <div
          id="card-errors"
          role="alert" />
        <button
          id="default-payment-method"
          type="submit"
          data-tid="stripe_elements.form.pay_button">Donate ${{ amount }}</button>
        <div
          id="stripe-paymentRequest">
          <!--Stripe paymentRequestButton Element inserted here when available-->
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import config from '@/config'
import { mapActions } from 'vuex'
import cardElementConfig from './cardElementConfig'
import registerElements from './registerElements'

export default {
  name: 'StripeForm',
  data: () => ({
    additionalData: {
      name: null,
      email: null,
      address_line1: null,
      address_city: null,
      address_state: null,
      address_zip: null
    },
    stripeConfig: {
      stripe: null,
      elements: null
    },
    token: null,
    card: null,
    metadata: {
      phone_number: null
    },
    amount: config.DEFAULT_DONATION_AMOUNT,
    componentStatus: null,
    paymentMethod: 'default'
  }),
  mounted: function() {
    this.componentStatus = this.$machineStates.IDLE
    const stripe = Stripe(config.TEST_STRIPE_KEY);
    this.stripeConfig.stripe = stripe;
    this.stripeConfig.elements = stripe.elements();
    this.setupCardElement();
    this.setupPaymentRequest();

  },
  methods: {
    ...mapActions({ postStripeTransaction: 'stripe/postStripeTransaction' }),
    onSubmit: async function() {
      try {
        const token = await this.createToken(this.card, this.additionalData)
        this.postStripeTransaction({
          token,
          amount: this.amount,
          email: this.additionalData.email,
          metadata: this.metadata
        })
      } catch(e) {
        console.error(e)
      }
    },
    setupCardElement: function () {
      // TODO: extract below to own named method, e.g. setupStripeElements
      const card = this.stripeConfig.elements.create("card", cardElementConfig);
      this.card = card;
      card.mount(this.$refs.card);

      // listen to errors and display in DOM if any
      card.addEventListener('change', ({ error }) => {
        const displayError = document.getElementById('card-errors');
        if (error) {
          displayError.textContent = error.message;
        } else {
          displayError.textContent = '';
        }
      });
      registerElements([card], "stripe");

    },
    setupPaymentRequest: function () {
      var paymentRequest = this.stripeConfig.stripe.paymentRequest({
        country: "US",
        currency: "usd",
        total: {
          amount: this.amount * 100, // TODO: confirm that this calculation is accurate
          label: "Total"
        },
        requestPayerName: true,
        requestPayerEmail: true,
        requestPayerPhone: true
      });

      var paymentRequestElement = this.stripeConfig.elements.create("paymentRequestButton", {
        paymentRequest: paymentRequest,
        style: {
          paymentRequestButton: {
            theme: "light"
          }
        }
      });

      const self = this

      paymentRequest.canMakePayment().then(function(result) {
        alert(JSON.stringify(result))
        if (result) {
          document.querySelector(".stripe .card-only").style.display = "none";
          document.querySelector("#default-payment-method").style.display = "none";
          document.querySelector(
            ".stripe .payment-request-available"
          ).style.display =
            "block";
          paymentRequestElement.mount("#stripe-paymentRequest");
          self.paymentMethod = 'paymentRequest'
        }
        alert(self.paymentMethod)
      });

      paymentRequest.on("token", function(result) {
        this.token = result.token.id
        this.postStripeTransaction({
          token: this.token,
          amount: this.amount,
          email: this.additionalData.email,
          metadata: this.metadata
        })
        var example = document.querySelector(".stripe");
        example.querySelector(".token").innerText = result.token.id;
        example.classList.add("submitted");
        result.complete("success");
      });
    },
    createToken: async function (card, additionalData) {
      try {
        const result = await this.stripeConfig.stripe.createToken(card, additionalData)
        if (result.error) throw result.error
        return result.token.id
      } catch(e) {
        const errorElement = document.getElementById('card-errors');
        errorElement.textContent = e.message;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$primary-color: #17304A;
$secondary-color: #fbfbfb;

.container {
  position: relative;
}

.stripe-wrapper.stripe * {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.98em; // TODO: find out why this has to be so weird
  font-weight: 400;
}

#stripe-paymentRequest {
  max-width: 500px;
  width: 100%;
  margin-bottom: 10px;
}

.stripe-wrapper.stripe fieldset {
  border: 1px solid #b5a4ed;
  padding: 15px;
  border-radius: 6px;
}

.stripe-wrapper.stripe fieldset legend {
  margin: 0 auto;
  margin-right: 40%;
  padding: 0 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: $secondary-color;
  background-color: $primary-color;
}

.stripe-wrapper.stripe fieldset legend + * {
  clear: both;
}

.stripe-wrapper.stripe .card-only {
  display: block;
}
.stripe-wrapper.stripe .payment-request-available {
  display: none;
}

.stripe-wrapper.stripe .row {
  display: -ms-flexbox;
  display: flex;
  margin: 0 0 10px;
}

.stripe-wrapper.stripe .field {
  position: relative;
  width: 100%;
}

.stripe-wrapper.stripe .field + .field {
  margin-left: 10px;
}

.stripe-wrapper.stripe label {
  width: 100%;
  color: $secondary-color;
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.stripe-wrapper.stripe .input {
  width: 100%;
  color: #fff;
  background: transparent;
  padding: 5px 0 6px 0;
  border-bottom: 1px solid #a988ec;
  transition: border-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.stripe-wrapper.stripe .input::-webkit-input-placeholder {
  color: #bfaef6;
}

.stripe-wrapper.stripe .input::-moz-placeholder {
  color: #bfaef6;
}

.stripe-wrapper.stripe .input:-ms-input-placeholder {
  color: #bfaef6;
}

.stripe-wrapper.stripe .input.StripeElement--focus,
.stripe-wrapper.stripe .input:focus {
  border-color: #fff;
}
.stripe-wrapper.stripe .input.StripeElement--invalid {
  border-color: #ffc7ee;
}

.stripe-wrapper.stripe input:-webkit-autofill,
.stripe-wrapper.stripe select:-webkit-autofill {
  -webkit-text-fill-color: #fce883;
  transition: background-color 100000000s;
  animation: 1ms void-animation-out;
  -webkit-animation: 1ms void-animation-out;
}

.stripe-wrapper.stripe .StripeElement--webkit-autofill {
  background: transparent !important;
}

.stripe-wrapper.stripe input,
.stripe-wrapper.stripe button,
.stripe-wrapper.stripe select {
  animation: 1ms void-animation-out;
  -webkit-animation: 1ms void-animation-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-style: none;
  border-radius: 0;
}

.stripe-wrapper.stripe select.input,
.stripe-wrapper.stripe select:-webkit-autofill {
  background-image: url('data:image/svg+xml;utf8,<svg width="10px" height="5px" viewBox="0 0 10 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#fff" d="M5.35355339,4.64644661 L9.14644661,0.853553391 L9.14644661,0.853553391 C9.34170876,0.658291245 9.34170876,0.341708755 9.14644661,0.146446609 C9.05267842,0.0526784202 8.92550146,-2.43597394e-17 8.79289322,0 L1.20710678,0 L1.20710678,0 C0.930964406,5.07265313e-17 0.707106781,0.223857625 0.707106781,0.5 C0.707106781,0.632608245 0.759785201,0.759785201 0.853553391,0.853553391 L4.64644661,4.64644661 L4.64644661,4.64644661 C4.84170876,4.84170876 5.15829124,4.84170876 5.35355339,4.64644661 Z" id="shape"></path></svg>');
  background-position: 100%;
  background-size: 10px 5px;
  background-repeat: no-repeat;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 20px;
}

.stripe-wrapper.stripe button {
  display: block;
  width: 100%;
  height: 40px;
  margin: 20px 0 0;
  background-color: $secondary-color;
  border-radius: 6px;
  color: $primary-color;
  font-weight: 500;
  cursor: pointer;
}

.stripe-wrapper.stripe button:active {
  background-color: $secondary-color;
}

.stripe-wrapper.stripe .error svg .base {
  fill: #fff;
}

.stripe-wrapper.stripe .error svg .glyph {
  fill: $primary-color;
}

.stripe-wrapper.stripe .error .message {
  color: #fff;
}

.stripe-wrapper.stripe .success .icon .border {
  stroke: #bfaef6;
}

.stripe-wrapper.stripe .success .icon .checkmark {
  stroke: #fff;
}

.stripe-wrapper.stripe .success .title {
  color: #fff;
}

.stripe-wrapper.stripe .success .message {
  color: $secondary-color;
}

.stripe-wrapper.stripe .success .reset path {
  fill: #fff;
}
</style>
