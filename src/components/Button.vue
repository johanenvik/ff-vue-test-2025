<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    v-text="buttonText"
    @click.prevent="onClick()"
  />
</template>

<script>

export default {
  props: {
    onClick: {
      type: Function,
      default: () => '',
    },
    buttonText: {
      type: String,
      default: 'Button',
    },
  },
}
</script>
