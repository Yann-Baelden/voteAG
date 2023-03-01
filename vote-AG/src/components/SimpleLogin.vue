<template>
  <div class="max-w-md mx-auto my-36">
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-34"
      @submit.prevent="login"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Email"
        />
      </div>
      <div class="flex items-center justify-between">
        <input
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          value="Sign In"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SimpleLogin",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async login() {
      const email = { email: this.email };
      const res = await fetch(import.meta.env.VITE_API_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });
      const data = await res.json();
      const user = data.user;
      localStorage.setItem("user", user);
      this.$router.push("/home");
    },
  },
};
</script>
