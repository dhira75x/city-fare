<template>
  <Header />
  <div class="landing-page">
   

    <!-- Privacy Policy and Terms Section -->
    <PrivacyPolicy />
    <TermsConditions />

    <!-- CTA Section -->
    <section class="cta-section bg-[#666565] text-white text-center p-4">
      <p class="">© All Right Reserved -  CityFare </p>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./molecules/Navigation.vue";
import PrivacyPolicy from "./PrivacyPolicy.vue";
import TermsConditions from "./TermsConditions.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const featuredpkgs = ref([
  {
    id: 1,
    name: "Corporate pkg",
    description: "Ensure your employees arrive on time with our tailored transport solutions. From daily commutes to large-scale shuttle services, Cityfare delivers reliability and comfort.",
  },
  {
    id: 2,
    name: "Event Transport Solutions",
    description: "Perfect for weddings, conferences, or private functions. Book safe, timely, and organized transport for your guests with Cityfare.",
  },
  {
    id: 3,
    name: "Daily Commute",
    description: "Affordable and Reliable Daily Transport to Get You to Work or Home on Time. Book a Ride or Subscribe to a customized pkg.",
  },
]);

const viewpkg = (id) => {
  const encodedId = encodeURIComponent(id);
  router.push({ name: "pkg-detail", params: { id: encodedId } });
};

const downloadApp = (store) => {
  if (store === 'google') {
    window.open("https://play.google.com/store", "_blank");
  } else {
    window.open("https://www.apple.com/app-store", "_blank");
  }
};
</script>

<style scoped>
.landing-page {
  font-family: Arial, sans-serif;
}

.hero-content img {
  max-width: 80%;
  height: auto;
}

.cta-button {
  padding: 10px 20px;
  background-color: #4285f4;
  border-radius: 8px;
}

.pkg-card:hover {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}
</style>
