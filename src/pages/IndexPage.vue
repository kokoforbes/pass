<template>
  <div class="invoice-page container-padding">
    <invoice-crumb :invoice-id="'inv-2022-010'" />
    <div v-if="isLoading" class="loader">
      <q-circular-progress
        indeterminate
        size="5rem"
        color="primary"
        class="q-ma-md"
      />
    </div>
    <invoice-card v-else :invoice="data" />
  </div>
</template>

<script>
import InvoiceCard from "src/components/Invoice/InvoiceCard.vue";
import InvoiceCrumb from "src/components/Invoice/InvoiceCrumb.vue";

export default {
  components: { InvoiceCard, InvoiceCrumb },
  name: "IndexPage",

  data() {
    return {
      invoiceId: "inv-2022-010",
      data: null,
      isLoading: true,
    };
  },

  async created() {
    this.isLoading = true;
    await fetch("/api/invoice")
      .then((res) => res.json())
      .then((json) => {
        this.data = json.users[0];
        console.log(this.data);
      });
    this.isLoading = false;
  },
};
</script>

<style lang="scss" scoped>
.invoice-page {
  padding: 20px 20px 40px;
  max-width: $max-width;
  gap: 3rem;
  width: 100%;

  .loader {
    min-width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: $breakpoint--md) {
  .invoice-page {
    padding: 20px 26px 40px;
  }
}
</style>
