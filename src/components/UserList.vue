<template>
  <table class="table-auto mx-auto my-10">
    <thead>
      <tr>
        <th class="px-4 py-2" v-text="'Namn'" />
        <th class="px-4 py-2" v-text="'Date of Birth'" />
        <th class="px-4 py-2" v-text="'Age'" />
        <th class="px-4 py-2" v-text="'Profession'" />
        <th class="px-4 py-2" v-text="'Country'" />
        <th class="px-4 py-2" v-text="'Favorite Quote'" />
        <th class="px-4 py-2" v-text="''" />
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, key) in users" :key="key">
        <td class="border px-4 py-2" v-text="user.firstName + ' ' + user.lastName" />
        <td class="border px-4 py-2" v-text="user.birthDate" />
        <td class="border px-4 py-2" v-text="userAge(user)" />
        <td class="border px-4 py-2" v-text="userProfession(user)" />
        <td class="border px-4 py-2" v-text="userCountry(user)" />
        <td class="border px-4 py-2" v-text="user.quote" />
        <td class="px-4 py-2">
          <button-component
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            :on-click="() => removeRow(user)" :button-text="'Remove'" />
        </td>
      </tr>
    </tbody>
  </table>
  <confirmation-modal :visible="showConfirm" :message="confirmMessage" @confirm="confirmRemove"
    @cancel="cancelRemove" />
</template>

<script>
// import User from './User';
import { mapState, mapActions } from 'vuex'
import ButtonComponent from './Button.vue';
import ConfirmationModal from './ConfirmationModal.vue';

export default {
  name: 'UserList',
  components: {
    ButtonComponent,
    ConfirmationModal
  },
  data() {
    return {
      showConfirm: false,
      confirmMessage: '',
      selectedUser: null,
      selected: []
    };
  },
  computed: {
    ...mapState({
      users: state => state.userModule.users,
      professions: state => state.professionModule.professions,
      countries: state => state.countryModule.countries,
    }),
  },
  methods: {
    ...mapActions([
      'removeUser',
    ]),
    removeRow(user) {
      this.confirmMessage = `Are you sure you want to remove ${user.firstName} ${user.lastName}?`;
      this.selectedUser = user;
      this.showConfirm = true;
    },
    confirmRemove() {
      this.removeUser(this.selectedUser);
      this.showConfirm = false;
      this.selectedUser = null;
    },
    cancelRemove() {
      this.showConfirm = false;
      this.selectedUser = null;
    },
    userCountry(user) {
      const country = this.countries.find(c => c.value === user.country_id)
      return country ? country.text : 'Unknown'
    },
    userProfession(user) {
      const profession = this.professions.find(p => p.value === user.profession_id)
      return profession ? profession.text : 'Unknown'
    },
    userAge(user) {
      if (!user.birthDate) {
        return 'Unknown';
      }
      const birthDate = new Date(user.birthDate);
      if (isNaN(birthDate)) {
        return 'Unknown';
      }
      const todaysDate = new Date();
      let age = todaysDate.getFullYear() - birthDate.getFullYear();
      const monthDiff = todaysDate.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && todaysDate.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
  },
}
</script>