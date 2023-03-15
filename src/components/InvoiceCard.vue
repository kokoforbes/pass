<template>
  <div class="invoice-card bg-white">
    <div class="invoice-card__seller">
      <div class="invoice-card__seller--details">
        <div class="seller-logo">
          <!-- <img :src="require('/src/assets/images/dipa.png')" alt="logo" /> -->
        </div>
        <div class="seller-details">
          <p class="text-bold text-primary">Dipa Inhouse</p>
          <p class="text-secondary">hello@dipainhouse.com</p>
        </div>
      </div>
      <div class="seller-address">
        <p class="text-secondary">Ijen Boulevard Street 101</p>
        <p class="text-secondary">Malang City, 65115</p>
        <p class="text-secondary">East Java, Indonesia</p>
      </div>
    </div>
    <div class="invoice-card__jumbotron">
      <div class="details-block">
        <p class="text-primary">Invoice Number</p>
        <p class="text-primary">inv-2022-010</p>
        <p class="text-secondary">Issued Date: <span>11 Jan 2022</span></p>
        <p class="text-secondary">Due Date: <span>18 Jan 2022</span></p>
      </div>
      <div class="billing-address">
        <p class="text-primary">Billed to</p>
        <p class="text-secondary">zaky grizzly</p>
        <p class="text-secondary">Monlight Agency LTD</p>
        <p class="text-secondary">New York, USA</p>
      </div>
    </div>
    <div class="invoice-card__details">
      <div class="invoice-card__details--top">
        <div>
          <p class="text-dark text-bold">Item Detail</p>
          <p class="text-secondary">
            Type Item for <span class="text-bold">Hours</span> item
          </p>
        </div>

        <button class="customize-btn">
          <customize-icon />
          <p>Customize</p>
        </button>
      </div>

      <div class="invoice-card__details--bottom">
        <!-- <item-row /> -->
      </div>
    </div>

    <!-- PAYMENT SECTION -->
    <section class="invoice-card__payment">
      <!-- PAYMENT METHOD -->
      <div class="invoice-card__payment__method">
        <div class="method-header">
          <p class="text-dark text-bold">Payment Method</p>
          <p class="text-primary text-medium">Select Payment</p>
        </div>

        <payment-card />
      </div>
      <!-- /PAYMENT METHOD -->

      <!-- PAYMENT TOTAL -->
      <div class="invoice-card__payment__total">
        <div class="subtotal">
          <div class="subtotal-row">
            <p class="text-dark text-bold">Sub Total</p>
            <p class="text-dark text-bold">$4,800.00</p>
          </div>
          <div class="subtotal-row">
            <p class="text-secondary text-medium">Discount</p>
            <p class="text-dark text-bold">$0.00</p>
          </div>
          <div class="subtotal-row">
            <p class="text-secondary text-medium">Total tax</p>
            <p class="text-dark text-bold">$0.00</p>
          </div>
        </div>

        <div class="total-amount subtotal-row">
          <p class="text-secondary text-bold">Total Amount</p>
          <p class="text-dark text-bold">$4,800.00</p>
        </div>
      </div>
      <!-- /PAYMENT TOTAL -->
    </section>
    <!-- /PAYMENT SECTION -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CustomizeIcon from "./Icons/CustomizeIcon.vue";
import PaymentCard from "./PaymentCard.vue";
// import ItemRow from "./ItemRow.vue";

export default defineComponent({
  components: { CustomizeIcon, PaymentCard },
  name: "InvoiceCard",
  props: {
    // invoice: {
    //   type: Object,
    //   required: true,
    // },
  },

  setup() {
    return {
      // essentialLinks: linksList,
    };
  },
});
</script>

<style lang="scss" scoped>
.invoice-card {
  border-radius: 1.125rem;
  width: 100%;
  margin: 2rem 0;
  padding: 1.5rem;

  &__seller,
  &__jumbotron {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__jumbotron {
    background-color: $violet-blue;
    color: $white;
    border-radius: 1.125rem;
    padding: 2.25rem 2rem;
    margin: 2.5rem 0 1.25rem 0;
  }

  &__details {
    &--top {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border-bottom: $border;
      padding: 0 0 2rem 0;

      .customize-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1.125rem;
        gap: 0.55rem;
        color: $primary;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        padding: 1rem;
        background-color: #f5f3fc;
        max-width: 10rem;

        svg {
          fill: $primary;
        }
      }
    }

    &--bottom {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border-bottom: $border;
      padding: 0 0 1.5rem 0;
    }
  }

  &__payment {
    padding: 2rem 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &__method {
      .method-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
      }
    }
    &__total {
      .subtotal {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .subtotal-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .total-amount {
        border-top: $border;
        margin-top: 4rem;
        padding-top: 2rem;
      }
    }
  }
}

@media (min-width: $breakpoint--md) {
  .invoice-card {
    &__seller,
    &__jumbotron {
      flex-direction: row;
      justify-content: space-between;
    }

    &__details {
      &--top {
        flex-direction: row;
        justify-content: space-between;
      }
    }

    &__payment {
      flex-direction: row;
      justify-content: space-between;

      &__method {
      }
      &__total {
        min-width: 16rem;
      }
    }
  }
}
</style>
