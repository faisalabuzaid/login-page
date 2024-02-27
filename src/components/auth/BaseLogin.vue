<script setup lang="ts">
import BaseInput from './../common/BaseInput.vue'
import useForm from './../../composables/useForm'

// Define initial form values
const initialFormValues = {
  email: { value: '', error: null },
  password: { value: '', error: null },
}

// Define form submission logic
const onSubmit = (values) => {
  console.log(values)
}

// Define form validation logic
const validate = (values) => {
  const errors: Record<string, string> = {}

  // Validate email
  if (!values.email.value) {
    errors.email = 'Email is required'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email.value)) {
    errors.email = 'Invalid email format'
  }

  // Validate password
  if (!values.password.value) {
    errors.password = 'Password is required'
  } else if (values.password.value.length < 6) {
    errors.password = 'Password must be at least 6 characters long'
  }

  return errors
}

// Use the useForm composable
const { formValues, formErrors, handleSubmit } = useForm({
  initialValues: initialFormValues,
  onSubmit,
  validate,
})
</script>

<template>
  <div class="centered-box">
    <div class="box">
      <img src="https://avatars.githubusercontent.com/u/124091983" alt="Logo" class="logo" />

      <!-- Render email input -->
      <BaseInput
        type="email"
        id="email"
        v-model="formValues.email.value"
        :error="formErrors.email"
        label="Email"
      />

      <!-- Render password input -->
      <BaseInput
        type="password"
        id="password"
        v-model="formValues.password.value"
        :error="formErrors.password"
        label="Password"
      />

      <!-- Render submit button -->
      <button type="submit" class="submit-button" @click="handleSubmit">Login</button>
    </div>
  </div>
</template>

<style scoped>
.centered-box {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 768px;
  height: 950px;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  margin: 65px 319px;
}

.box {
  text-align: center;
  max-width: 328px;
  max-height: 326px;
  height: 100%;
  width: 100%;
}

.logo {
  width: 128px;
  height: 128px;
  margin-bottom: 10px;
}

.submit-button {
  cursor: pointer;
  float: right;
  width: 98px;
  height: 36px;
  font: normal normal 500 14px/16px Roboto;
  background: #c3001e;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  border: none;
  letter-spacing: 1.25px;
  color: #ffffff;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .centered-box {
    height: 370px;
    width: 370px;
    margin: 281px 30px;
  }
}
</style>
