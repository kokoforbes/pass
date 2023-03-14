<template>
  <q-page class="flex flex-center">
    <invoice-card />
  </q-page>
</template>

<script>
import InvoiceCard from "src/components/InvoiceCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { InvoiceCard },
  name: "IndexPage",
});
</script>
