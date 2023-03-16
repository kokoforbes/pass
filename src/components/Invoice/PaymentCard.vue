<template>
  <div class="payment-card">
    <div class="payment-card__type">
      <p class="text-dark text-bold">{{ payment.type }}</p>
      <wise-logo />
    </div>

    <div class="payment-card__detail">
      <div class="card-row">
        <p class="text-secondary text-medium">Account name:</p>
        <p class="text-dark text-bold">{{ payment.accounttName }}</p>
      </div>
      <div class="card-row">
        <p class="text-secondary text-medium">Account number:</p>
        <p class="text-dark text-bold">{{ payment.accountNumber }}</p>
      </div>
      <div class="card-row">
        <p class="text-secondary text-medium">Routing number:</p>
        <p class="text-dark text-bold">{{ payment.routingNo }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import WiseLogo from "../Icons/WiseLogo.vue";

export default {
  name: "PaymentCard",

  components: { WiseLogo },

  props: {
    payment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.payment-card {
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1.125rem;
  background-color: #f8f8f8;
  padding: 2rem;

  &__type {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__detail {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .card-row {
      display: flex;
      gap: 0.5rem;
    }
  }
}
</style>
