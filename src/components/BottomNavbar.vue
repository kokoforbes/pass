<template>
  <nav class="bg-white nav">
    <div class="nav-content container-padding">
      <ul class="nav__links">
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
import ActivityIcon from "./Icons/ActivityIcon.vue";
import DashboardIcon from "./Icons/DashboardIcon.vue";
import HelpIcon from "./Icons/HelpIcon.vue";
import InvoiceIcon from "./Icons/InvoiceIcon.vue";
import WalletIcon from "./Icons/WalletIcon.vue";
import { useWindowSize } from "/src/composables/resize";

export default defineComponent({
  name: "BottomNavbar",
  components: {
    WalletIcon,
    ActivityIcon,
    HelpIcon,
    InvoiceIcon,
    DashboardIcon,
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
  bottom: 0;
  left: 0;
  position: fixed;
  border-top: $border;
  padding-bottom: 1rem;

  .nav-content {
    width: 100%;
    display: flex;
    padding-top: 0.5rem;
    align-items: center;
    max-width: $max-width;
    justify-content: center;
  }

  &__links {
    display: flex;
    flex: 1;
    gap: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 50rem;

    li {
      display: flex;

      a {
        gap: 0.625rem;
        display: flex;
        font-size: 15px;
        flex-direction: row;
        align-items: center;
        padding: 1rem 0.625rem;

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

        @media (max-width: 1000px) {
          p {
            display: none;
          }
        }
      }
    }
  }
}
</style>
