<template>
  <div class="invoice-page container-padding">
    <invoice-crumb :invoice-id="'inv-2022-010'" />
    <invoice-card />
  </div>
</template>

<script>
import InvoiceCard from "src/components/Invoice/InvoiceCard.vue";
import InvoiceCrumb from "src/components/Invoice/InvoiceCrumb.vue";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  components: { InvoiceCard, InvoiceCrumb },
  name: "IndexPage",

  setup() {
    const isLoading = ref(false);
    const invoiceId = ref("inv-2022-010");
    onMounted(() => {
      if (process.env.NODE_ENV === "development") {
        getInvoice();
      }
    });

    const getInvoice = async () => {
      try {
        isLoading.value = true;
        const response = await fetch(`api/invoice/${invoiceId.value}`);
        console.log(response);
        // response.json().then((data) => {
        //   console.log(data);
        // });
        isLoading.value = false;
      } catch (error) {
        console.log(error);
        isLoading.value = false;
      }
    };
  },
});
</script>

<style lang="scss" scoped>
.invoice-page {
  padding: 2rem 1rem 2rem 0;
  max-width: $max-width;
  gap: 3rem;
  width: 100%;
}
</style>
