<template>
  <div class="item-row">
    <div>
      <div>Item name</div>
      <div class="column-item">
        <div class="input-block">Payment Project - Monlight Mobile Design</div>
      </div>

      <div class="column-item header-item header-item-description">
        Description
      </div>
      <div class="column-item">
        <div class="input-block desc">
          <input type="text" placeholder="Description" />
        </div>
      </div>
    </div>

    <div class="item-info__column common-column">
      <div class="column-item header-item">Hours</div>
      <div class="column-item">
        <div class="input-block">
          <input type="number" placeholder="120" />
        </div>
      </div>
    </div>

    <div class="item-info__column common-column">
      <div class="column-item header-item">Rate/hr</div>
      <div class="column-item">
        <div class="input-block">
          <input type="number" placeholder="40.00" />
        </div>
      </div>
    </div>

    <div class="item-info__column common-column">
      <div class="column-item header-item">Tax</div>
      <div class="column-item">
        <div class="input-block">
          <p class="secondary-text">$</p>
          <input type="number" placeholder="0.00" />
        </div>
      </div>
    </div>

    <div class="item-info__column total-line-column">
      <div class="column-item header-item">Line Total</div>
      <div class="column-item">
        <div class="input-block">
          <p class="secondary-text">$</p>
          <input placeholder="4,800.00" />
        </div>
        <div><button>+</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemRow",

  setup() {},
});
</script>

<style lang="scss" scoped>
.item-row {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: $breakpoint--md) {
  .item-row {
    flex-direction: row;
    gap: 2rem;
  }
}
</style>
