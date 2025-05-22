<template>
  <form class="md:w-8/12 mx-auto my-10">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
          v-text="'First Name'"
        />
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Enter First Name"
          v-model="user.firstName"
        >
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
          v-text="'Last Name'"
        />
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-last-name"
          type="text"
          placeholder="Enter Last Name"
          v-model="user.lastName"
        >
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-date"
          v-text="'Date of Birth'"
        />
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-date"
          type="date"
          v-model="user.birthDate"
          max="9999-12-31"
        >
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-quote"
          v-text="'Favorite Quote'"
        />
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-quote"
          type="text"
          placeholder="Enter Quote"
          v-model="user.quote"
        >
      </div>
      <drop-down
        :label="'Select Profession'"
        :options="professions"
        :changeSelect="user.selectProfession"
      />
      <drop-down
        :label="'Select Country'"
        :options="countries"
        :changeSelect="user.selectCountry"
      />
    </div>
    <button-component
      :on-click="addUser"
      :button-text="'Save User'"
    />
  </form>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import DropDown from './DropDown.vue';
import ButtonComponent from './Button.vue';

export default {
  name: 'AddUser',
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        birthDate: null,
        quote: '',
      },
    };
  },
  components: {
    DropDown,
    ButtonComponent,
  },
  computed: {
    ...mapState({
      professions: state => state.professionModule.professions,
    }),
  },
  methods: {
    ...mapMutations({
      setProfession: 'SET_PROFESSION',
    }),
    ...mapActions([
      'addNewUsers',
    ]),
    addUser() {
      this.addNewUser(this.user);
    }
  },
}
</script>

<style scoped>
</style>