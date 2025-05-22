<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center">
      <h2 class="text-lg font-semibold mb-4">{{ message }}</h2>
      <div class="flex justify-center gap-4">
        <button class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition" @click="$emit('confirm')">
          Yes
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded transition"
          @click="$emit('cancel')">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmationModal',
  props: {
    visible: Boolean,
    message: {
      type: String,
      default: 'Are you sure?',
    },
  },
};
</script>