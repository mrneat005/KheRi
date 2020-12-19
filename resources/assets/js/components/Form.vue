<template>
    <div class="container">
         <form @submit.prevent="login" @keydown="form.onKeydown($event)">
    <div class="form-group">
      <label>Username</label>
      <input v-model="form.username" type="text" name="username"
        class="form-control" :class="{ 'is-invalid': form.errors.has('username') }">
      <has-error :form="form" field="username"></has-error>
    </div>

    <div class="form-group">
      <label>Password</label>
      <input v-model="form.password" type="password" name="password"
        class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
      <has-error :form="form" field="password"></has-error>
    </div>

    <button :disabled="form.busy" type="submit" class="btn btn-primary">Log In</button>
  </form>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
           return {
              form: new Form({
        username: '',
        password: '',
        remember: false
      })
           }
        },
    }
</script>
