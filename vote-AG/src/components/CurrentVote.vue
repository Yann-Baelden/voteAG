<template>
  <div class="pt-16">
    <h1 class="font-bold text-brand-blue-1 text-5xl text-center">
      Rapport Moral
    </h1>
    <div class="flex flex-col pt-14 w-full">
      <button
        class="block w-4/5 bg-brand-green-1 mx-auto mb-12 py-7 px-10 text-white text-3xl font-bold text-center rounded-full"
      >
        Pour
      </button>

      <button
        class="block w-4/5 bg-red-700 mx-auto mb-12 py-7 px-10 text-white text-3xl font-bold text-center rounded-full"
      >
        Contre
      </button>

      <button
        class="block w-4/5 bg-brand-blue-2 mx-auto mb-12 py-7 px-10 text-white text-3xl font-bold text-center rounded-full"
      >
        Abstention
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentVote",
};
</script>
