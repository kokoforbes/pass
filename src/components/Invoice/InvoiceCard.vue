<template>
  <div class="invoice-card bg-white">
    <!-- SELLER INFO SECTION -->
    <section class="invoice-card__seller">
      <div class="invoice-card__seller--detail">
        <!-- SELLER IMAGE -->
        <img
          src="../../assets/images/dipa.png"
          alt="seller logo"
          class="seller-img"
        />
        <!-- /SELLER IMAGE -->

        <div class="seller-details">
          <p class="text-bold text-primary seller-name">
            {{ invoice.seller.name }}
          </p>
          <p class="text-secondary text-medium">{{ invoice.seller.email }}</p>
        </div>
      </div>
      <div class="seller-address">
        <p class="text-secondary text-medium">
          {{ invoice.seller.address.street }}
        </p>
        <p class="text-secondary text-medium">
          {{ invoice.seller.address.city }}, {{ invoice.seller.address.zip }}
        </p>
        <p class="text-secondary text-medium">
          {{ invoice.seller.address.state }},
          {{ invoice.seller.address.country }}
        </p>
      </div>
    </section>
    <!-- /SELLER INFO SECTION -->

    <!-- JUMBOTRON SECTION -->
    <section class="invoice-card__jumbotron">
      <div class="invoice-detail">
        <p class="text-white text-bold">Invoice Number</p>
        <p class="text-white text-uppercase text-bold">{{ invoice.id }}</p>
        <p class="text-white">
          Issued Date: <span class="text-bold">{{ invoice.issuedDate }}</span>
        </p>
        <p class="text-white">
          Due Date: <span class="text-bold">{{ invoice.dueDate }}</span>
        </p>
      </div>
      <div class="billing-address">
        <p class="text-white text-bold">Billed to</p>
        <p class="text-white">{{ invoice.billedTo.name }}</p>
        <p class="text-white">{{ invoice.billedTo.company }}</p>
        <p class="text-white">
          {{ invoice.billedTo.state }}, {{ invoice.billedTo.country }}
        </p>
      </div>
    </section>
    <!-- /JUMBOTRON SECTION -->

    <!-- DETAILS SECTION -->
    <section class="invoice-card__details">
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
        <item-row v-for="item in invoice.items" :key="item.id" :item="item" />
      </div>
    </section>
    <!-- /DETAILS SECTION -->

    <!-- PAYMENT SECTION -->
    <section class="invoice-card__payment">
      <!-- PAYMENT METHOD -->
      <div class="invoice-card__payment__method">
        <div class="method-header">
          <p class="text-dark text-bold">Payment Method</p>
          <p class="text-primary text-medium">Select Payment</p>
        </div>

        <payment-card :payment="invoice.payment" />
      </div>
      <!-- /PAYMENT METHOD -->

      <!-- PAYMENT TOTAL -->
      <div class="invoice-card__payment__total">
        <div class="subtotal">
          <div class="subtotal-row">
            <p class="text-dark text-bold">Sub Total</p>
            <p class="text-dark text-bold">${{ invoice.subTotal }}</p>
          </div>
          <div class="subtotal-row">
            <p class="text-secondary text-medium">Discount</p>
            <p class="text-dark text-bold">${{ invoice.discount }}</p>
          </div>
          <div class="subtotal-row">
            <p class="text-secondary text-medium">Total tax</p>
            <p class="text-dark text-bold">${{ invoice.totalTax }}</p>
          </div>
        </div>

        <div class="total-amount subtotal-row">
          <p class="text-secondary text-bold">Total Amount</p>
          <p class="text-dark text-bold">${{ invoice.totalAmount }}</p>
        </div>
      </div>
      <!-- /PAYMENT TOTAL -->
    </section>
    <!-- /PAYMENT SECTION -->
  </div>
</template>

<script>
import CustomizeIcon from "../Icons/CustomizeIcon.vue";
import ItemRow from "./ItemRow.vue";
import PaymentCard from "./PaymentCard.vue";

export default {
  components: { CustomizeIcon, PaymentCard, ItemRow },
  name: "InvoiceCard",
  props: {
    invoice: {
      type: Object,
      required: true,
    },
  },
};
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

  &__seller {
    &--detail {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .seller-address {
      p {
        margin-bottom: 0.35rem;
      }
    }

    .seller-name {
      font-size: 1.25rem;
      margin-bottom: 0.55rem;
    }
    .seller-img {
      width: 50px;
      height: 50px;
      overflow: hidden;
      border-radius: 100%;
    }
  }

  &__jumbotron {
    background-color: $violet-blue;
    color: $white;
    border-radius: 1.125rem;
    padding: 2.25rem 2rem;
    margin: 2.5rem 0 1.25rem 0;

    .invoice-detail {
      display: flex;
      flex-direction: column;
      gap: 0.55rem;
    }

    .billing-address {
      p {
        margin-bottom: 0.55rem;
      }
    }
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
      width: 100%;
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

    &__jumbotron {
      .billing-address {
        p {
          text-align: right;
          margin-bottom: 0.35rem;
        }
      }
    }

    &__seller {
      .seller-address {
        p {
          text-align: right;
        }
      }
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

      &__total {
        min-width: 16rem;
        max-width: 40%;
      }
    }
  }
}
</style>
