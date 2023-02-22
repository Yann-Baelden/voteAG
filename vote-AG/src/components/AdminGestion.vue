<template>
  <div class="mt-28">Module de gestions des membres</div>
  <div class="flex justify-center">
    <div class="mb-3 xl:w-96">
      <div class="relative mb-4 flex w-full flex-col items-stretch">
        <div class="flex flex-wrap items-stretch mt-4">
          <input
            v-model="userMail"
            type="search"
            class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3"
          />
          <button
            id="button-addon3"
            class="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            type="button"
            data-te-ripple-init
            @click="getUser"
          >
            Search
          </button>
        </div>
        <div class="flex flex-wrap items-stretch mt-4">
          <input
            v-model="user.nom"
            class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            :placeholder="user.nom"
          />
          <button
            id="button-addon3"
            class="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            type="button"
            data-te-ripple-init
            @click="getUser"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminGestion",
  data() {
    return {
      name: "",
      editing: false,
      editedName: "",
      user: {},
      userMail: "",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch(`http://localhost:8080/users/:${this.userMail}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resDatas = await res.json();
      this.user = resDatas;
      console.log(this.user);
    },
  },
};
</script>
