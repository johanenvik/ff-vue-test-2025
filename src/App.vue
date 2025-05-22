<template>
  <div class="mt-10">
    <add-user />
    <UserList />
  </div>
</template>

<script>
import AddUser from '@/components/AddUser.vue'
import UserList from '@/components/UserList.vue'

export default {
  name: 'App',
  components: {
    AddUser,
    UserList,
  },
}
</script>
