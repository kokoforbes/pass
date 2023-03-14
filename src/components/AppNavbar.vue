<template>
  <nav class="bg-white nav">
    <div class="nav__content container-padding">
      <div class="brand">Paypay.</div>

      <ul v-if="width > 1000" class="nav__links">
        <li>
          <router-link to="/dashboard" exact-active-class="activeLink">
            <dashboard-icon />
            <p>Dashboard</p>
          </router-link>
        </li>
        <li>
          <router-link to="/" exact-active-class="activeLink">
            <invoice-icon />
            <p>Invoices</p>
          </router-link>
        </li>
        <li>
          <router-link to="/wallet" exact-active-class="activeLink">
            <wallet-icon />
            <p>Wallet</p>
          </router-link>
        </li>
        <li>
          <router-link to="/activity" exact-active-class="activeLink">
            <activity-icon />
            <p>Activity</p>
          </router-link>
        </li>
        <li>
          <router-link to="/help" exact-active-class="activeLink">
            <help-icon />
            <p>Help</p>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import { useWindowSize } from "src/composables/resize";
import DashboardIcon from "./Icons/DashboardIcon.vue";
import InvoiceIcon from "./Icons/InvoiceIcon.vue";
import ActivityIcon from "./Icons/ActivityIcon.vue";
import HelpIcon from "./Icons/HelpIcon.vue";
import WalletIcon from "./Icons/WalletIcon.vue";

export default defineComponent({
  name: "AppNavbar",
  components: {
    DashboardIcon,
    InvoiceIcon,
    ActivityIcon,
    HelpIcon,
    WalletIcon,
  },
  setup() {
    const { width, height } = useWindowSize();
    return { width, height };
  },
});
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;

  @media (max-width: 1000px) {
    padding-bottom: 1rem;
  }
  .brand {
    font-size: calc(min(4.7vw, 26px));
    font-weight: 700;
    color: $primary;
  }

  &__content {
    display: flex;
    align-items: center;
    width: 100%;
    /* min-height: 66px; */
    padding-top: 1rem;
    max-width: $max-width;
    gap: calc(max(5vw, 5vh, 5vmin));
  }

  &__links {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 30px;

    li {
      display: flex;
      font-weight: 500;

      a {
        gap: 16px;
        display: flex;
        font-size: 15px;
        flex-direction: row;
        align-items: center;
        padding: 20px 10px;

        p {
          font-weight: 600;
          font-size: 0.9rem;
        }

        svg {
          fill: #9ea6b9 !important;
        }

        &.activeLink {
          color: $primary;
          border-bottom: 2px solid $primary;
          svg {
            fill: $primary !important;
          }
        }
      }
    }
  }
}
</style>
