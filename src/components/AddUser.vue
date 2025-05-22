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
        :label="'Profession'"
        :options="professions"
        :defaultName="'Profession'"
        v-model="user.profession_id"
      />
      <drop-down
        :label="'Country'"
        :options="countries"
        :defaultName="'Country'"
        v-model="user.country_id"
      />
    </div>
    <button-component
      :on-click="addUser"
      :button-text="'Save User'"
    />
    <p v-if="Object.keys(errors).length > 0" class="text-red-500 text-xs mt-1">Please fill in the following: </p>
    <p v-if="errors.firstName" class="text-red-500 text-xs mt-1">{{ errors.firstName }}</p>
    <p v-if="errors.lastName" class="text-red-500 text-xs mt-1">{{ errors.lastName }}</p>
    <p v-if="errors.birthDate" class="text-red-500 text-xs mt-1">{{ errors.birthDate }}</p>
    <p v-if="errors.profession_id" class="text-red-500 text-xs mt-1">{{ errors.profession_id }}</p>
    <p v-if="errors.country_id" class="text-red-500 text-xs mt-1">{{ errors.country_id }}</p>
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
        profession_id: '',
        country_id: ''
      },
      errors: {}
    };
  },
  components: {
    DropDown,
    ButtonComponent,
  },
  computed: {
    ...mapState({
      professions: state => state.professionModule.professions,
      countries: state => state.countryModule.countries,
    }),
  },
  methods: {
    ...mapMutations({
      setProfession: 'SET_PROFESSION',
    }),
    ...mapActions([
      'addNewUser',
    ]),
    addUser() {

      // Validateion
      this.errors = {};
      if (!this.user.firstName) {
        this.errors.firstName = 'First Name is required';
      }
      if (!this.user.lastName) {
        this.errors.lastName = 'Last Name is required';
      }
      if (!this.user.birthDate) {
        this.errors.birthDate = 'Birth Date is required';
      }
      if (!this.user.profession_id) {
        this.errors.profession_id = 'Profession is required';
      }
      if (!this.user.country_id) {
        this.errors.country_id = 'Country is required';
      }
      if (Object.keys(this.errors).length > 0) {
        return;
      }

      this.addNewUser(this.user);
      this.user = {
        firstName: '',
        lastName: '',
        birthDate: null,
        quote: '',
        profession_id: '',
        country_id: ''
      };
    }
  },
}
</script>

<style scoped>
</style>