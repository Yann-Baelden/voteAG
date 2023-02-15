<template>
  <div class="flex flex-col mt-36">
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" />
      <input type="submit" value="log in" />
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
      console.log(email);
      console.log(JSON.stringify(email));
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });
      const data = await res.json();
      console.log(data);
    },
  },
};
</script>
