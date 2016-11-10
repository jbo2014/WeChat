<template>  
  <div id="abc">
    <validation name="validation1">
      <div class="username">
        <label for="username">username:</label>
        <!-- validity component wrapped with it -->
        <validity field="username" :validators="{minlength: 8, required:true}">
          <input id="username" type="text" @input="handleValidate">
        </validity>
      </div>
      <input type="submit" value="send" v-if="valid">
      <div class="errors">
        <p v-if="usernameInvalid">Invalid yourname inputting !!</p>
        <!-- <p v-if="passwordInvalid">Invalid password inputting !!</p>
        <p v-if="confirmInvalid">Invalid confirm password inputting !!</p> -->
      </div>
      <div class="debug">
        <p>validation result info</p>
        <pre>{{$validation}}</pre>
      </div>
    </validation>
  </div>
</template>


<script>
import VueValidator from 'vue-validator'

export default{
  name: "abc",
  computed: VueValidator.mapValidation({
    valid: '$validation.validation1.valid',
    usernameInvalid: '$validation.validation1.username.invalid'
  }),
  methods: {
    handleValidate: function (e) {
      e.target.$validity.validate()
    }
  }
}
</script>

<style>
  input.invalid { border-color: red; }
  .errors { color: red; }
</style>