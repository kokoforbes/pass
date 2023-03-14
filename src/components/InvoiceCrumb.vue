<template>
  <nav class="invoice-crumb" aria-label="breadcrumbs">
    <router-link to="/invoices" class="text-primary text-bold">
      Invoices
    </router-link>
    <span>/</span>
    <span
      >edit invoice
      <span class="text-bold">({{ invoiceId.toUpperCase() }})</span>
    </span>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InvoiceCrumb",
  props: {
    invoiceId: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.invoice-crumb {
  display: flex;
  align-items: center;
  gap: 0.25rem;

  a {
    font-size: 0.85rem;
  }

  span {
    color: $secondary;
  }
}
</style>
