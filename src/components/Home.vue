<template>
  <Header />
  <div class="landing-page">
    <!-- Hero Section -->
    <section
      class="hero flex flex-col items-center justify-between md:pb-6 md:pt-16"
    >
      <div class="hero-content w-full flex flex-row pl-4">
        <div class="sm:w-3/6">
          <h1 class="text-5xl font-bold mb-4 text-black font-sans">
            Reliable Intra City Transport for Your Daily Commute and Special
            Events
          </h1>
          <p class="text-xl mb-6 text-slate-600">
            Connecting Businesses and People with Efficient and Affordable
            Transport Solutions.
          </p>
        </div>

        <img
          src="/phones.svg"
          alt="Mobile Device"
          class="w-[1000px] h-[480px] pl-20"
        />
      </div>
      <div class="flex flex-row gap-4 md:pt-8 lg:pr-[600px]">
        <button @click="" class="cta-button text-white transition">
          <img src="/google.svg" alt="Google App" />
        </button>
        <button @click="" class="cta-button text-white transition">
          <img src="/apple.svg" alt="Google App" />
        </button>
      </div>
    </section>

    <section
      class="hero flex flex-col items-center justify-between md:pt-4 sm:w-full"
    >
      <div class="hero-content w-full flex flex-col">
        <img src="/howitworks.svg" alt="How it works" class="w-full h-full" />
      </div>
    </section>

    <section class="hero flex flex-col items-center justify-between sm:w-full">
      <div class="hero-content w-full flex flex-col">
        <img src="/ready.svg" alt="Ready" class="w-full h-full" />
      </div>
    </section>

    <section
      class="hero flex flex-col items-center justify-between md:pb-12 md:pt-16 bg-[#2B2626] text-slate-600"
    >
      <div class="hero-content w-full flex flex-col pl-4">
        <div class="sm:w-full text-center flex flex-col justify-center">
          <h1 class="text-5xl font-bold mb-4 text-white font-sans">
            Our Packages
          </h1>
          <p class="text-xl mb-6 text-slate-100">
            Curated Packages for Companies and Events
          </p>
        </div>

        <section class="featured-packages text-center p-10 grid grid-col-3">
          <div
            class="packages-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            <div
              class="package-card border border-gray-300 rounded-lg p-4 hover:shadow-md transition bg-white"
              v-for="pkg in featuredPackages"
              :key="pkg.id"
            >
              <h3 class="text-xl font-semibold mb-2">{{ pkg.name }}</h3>
              <p class="mb-4">{{ pkg.description }}</p>
              <button
                @click="viewPackage(pkg.id)"
                class="view-button text-Black border border-yellow-500 py-1 px-3 rounded transition hover:bg-yellow-500 hover:text-white"
              >
                View Package
              </button>
            </div>
          </div>
        </section>
      </div>
      <div class="flex flex-row gap-4 md:pt-12">
        <button @click="" class="cta-button text-white transition">
          <img src="/google.svg" alt="Google App" />
        </button>
        <button @click="" class="cta-button text-white transition">
          <img src="/apple.svg" alt="Google App" />
        </button>
      </div>
    </section>
    <section
      class="hero flex flex-col items-center justify-between md:pb-12 md:pt-16 bg-[#D7AE18] text-slate-600"
    >
      <div class="hero-content w-full flex flex-col pl-4">
        <div class="sm:w-full text-center flex flex-col justify-center">
          <h1 class="text-5xl font-bold mb-4 text-white font-sans">
            Contact Us
          </h1>
          <p class="text-xl mb-6 text-slate-100">
            Looking to book a ride tailored to your specific needs? Get in Touch
          </p>
        </div>

        <section
          class="text-center pl-56 pr-56 flex flex-col justify-center gap-4"
        >
          <div>
            <label class="text-sm font-semibold justify-start pr-[650px]"
              >Your Full Name:</label
            >
            <input
              class="ml-1 mt-2 w-full border border-gray-300 p-2 focus:outline-primary rounded-full"
              placeholder="Example Sample"
            />
          </div>
          <div class="pb-3">
            <label class="text-sm font-semibold justify-start pr-[650px]"
              >Email Address:</label
            >
            <input
              class="ml-1 mt-2 w-full border border-gray-300 p-2 focus:outline-primary rounded-full"
              placeholder="example@gmail.com"
            />
          </div>
          <button class="bg-[#2B2626] py-2 px-4 text-white rounded-full">
            Submit
          </button>
        </section>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section bg-[#2B2626] text-white text-center p-10">
      <h2 class="text-3xl font-semibold mb-4">
        Join Our Transportation Community
      </h2>
      <p class="mb-6">
        Sign up to view transportation routes and get personalized
        recommendations!
      </p>
      <button
        @click="signup"
        class="signup-button bg-white text-[#2B2626] py-2 px-4 rounded transition hover:bg-gray-100"
      >
        Sign Up Now
      </button>
    </section>
    <section class="cta-section bg-[#666565] text-white text-center p-2">
      <p class="">© Made With Love By CityFare All Right Reserved</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./molecules/Navigation.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const featuredPackages = ref([
  {
    id: 1,
    name: "Corporate Package",
    description:
      "Ensure your employees arrive on time with our tailored transport solutions. From daily commutes to large-scale shuttle services, Cityfare delivers reliability and comfort.",
  },
  {
    id: 2,
    name: "Event Transport Solutions",
    description:
      "Perfect for weddings, conferences, or private functions. Book safe, timely, and organized transport for your guests with Cityfare.",
  },
  {
    id: 3,
    name: "Daily Commute",
    description:
      "Affordable and Reliable Daily Transport to Get You to Work or Home on Time. Book a Ride or Subscribe to a customized Package.",
  },
]);

const viewPackage = (id) => {
  const encodedId = encodeURIComponent(id);
  router.push({ name: "package-detail", params: { id: encodedId } });
};

const signup = () => {
  router.push({ name: "sign up" });
  console.log("Signing up...");
};
</script>

<style scoped>
.bg-phone {
  background-image: url("/image-background.svg");
  background-size: cover;
}
</style>
