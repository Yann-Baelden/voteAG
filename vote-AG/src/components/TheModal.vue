<template>
  <div class="fixed inset-0 flex items-center justify-center">
    <div class="fixed inset-0 bg-black bg-opacity-25" @click="close"></div>
    <div
      class="bg-white p-4 rounded shadow-modal max-w-4xl max-h-4xl overflow-auto"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheModal",
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
