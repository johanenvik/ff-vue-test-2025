<template>
  <table class="table-auto mx-auto my-10">
    <thead>
      <tr>
        <th
          class="px-4 py-2"
          v-text="'Namn'"
        />
        <th
          class="px-4 py-2"
          v-text="'Date of Birth'"
        />
        <th
          class="px-4 py-2"
          v-text="'Age'"
        />
        <th
          class="px-4 py-2"
          v-text="'Profession'"
        />
        <th
          class="px-4 py-2"
          v-text="'Country'"
        />
        <th
          class="px-4 py-2"
          v-text="'Favorite Quote'"
        />
        <th
          class="px-4 py-2"
          v-text="''"
        />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(user, key) in users"
        :key="key"
      >
        <td
          class="border px-4 py-2"
          v-text="user.firstName + ' ' + user.lastName"
        />
        <td
          class="border px-4 py-2"
          v-text="user.birthDate"
        />
        <td
          class="border px-4 py-2"
          v-text="userAge(user)"
        />
        <td
          class="border px-4 py-2"
          v-text="user.profession_id"
        />
        <td
          class="border px-4 py-2"
          v-text="user.country_id"
        />
        <td
          class="border px-4 py-2"
          v-text="user.quote"
        />
        <td
          class="px-4 py-2"
        >
          <button-component
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            :on-click="() => removeRow(user)"
            :button-text="'Remove'"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import User from './User';
import { mapState, mapActions } from 'vuex'
import ButtonComponent from './Button.vue';

export default {
  name: 'UserList',
  components: {
    ButtonComponent,
  },
  data() {
    return {
      selected: []
    };
  },
  computed: {
    ...mapState({
        users: state => state.userModule.users,
        professions: state => state.professionModule.professions,
    }),
  },
  methods: {
    ...mapActions([
      'removeUser',
    ]),
    removeRow(user) {
      this.removeUser(user);
    },
    userAge(user) {
      // Använder Date för att konvertera födelsedatumet till ett datumobjekt i stället för milli-sekunder.
      // Tar bort UTC och använder lokal tid då användaren förväntar sig detta.
      const birthDate = new Date(user.birthDate);
      const todaysDate = new Date();
      let age = todaysDate.getFullYear() - birthDate.getFullYear();
      const monthDiff = todaysDate.getMonth() - birthDate.getMonth();
      // Om födelsedagen inte har inträffat än i år, dra av ett år från åldern.
      if (monthDiff < 0 || (monthDiff === 0 && todaysDate.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
  },
}
</script>