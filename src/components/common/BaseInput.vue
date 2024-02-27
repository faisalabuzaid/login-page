<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<'password' | 'text' | 'number' | 'email'>,
    default: 'text',
  },
  modelValue: {
    type: String,
    default: '',
  },
  label: String,
  id: String,
  error: String,
  required: {
    type: Boolean,
    default: false,
  },
})

// Generate a unique inputId
const inputId = props.id ?? (Math.random() + 1).toString(36).substring(7)
</script>

<template>
  <div class="field-holder">
    <!-- Input element -->
    <input
      :id="inputId"
      :value="modelValue"
      :type="type"
      :class="error ? 'error' : ''"
      @input="$emit('update:modelValue', ($event.target as any).value)"
      :required="required"
    />
    <!-- Label element -->
    <label v-if="label" :for="inputId" :class="modelValue ? 'focused-label' : 'label'">
      {{ label }}</label
    >
    <!-- Error message container -->
    <div class="error-container">
      <span v-if="error" class="error-message">{{ error }}</span>
    </div>
  </div>
</template>

<style scoped>
.field-holder {
  position: relative;
  width: 100%;
}

input {
  font: normal normal 400 14px/16px Roboto;
  color: #000000bc;
  width: 100%;
  margin-top: 6px;
  height: 56px;
  border: 1px solid #0000001f;
  border-radius: 4px;
  padding: 16px;
  caret-color: #b00020;
  outline: none;
}

.error {
  border: 2px solid #b00020;
}

.error-container {
  height: 16px;
}
.error-message {
  display: flex;
  padding-top: 1px;
  padding-left: 16.5px;
  text-align: left;
  font: normal normal normal 12px/16px Roboto;
  letter-spacing: 0.4px;
  color: #b00020;
}

.focused-label,
input:focus ~ label {
  font-size: 12px;
  letter-spacing: 0.4px;
  top: 0px;
  background-color: white;
  padding-right: 8px;
  padding-left: 8px;
}

label {
  position: absolute;
  font-size: 16px;
  color: #b00020;
  top: 22px;
  left: 16px;
  transition: 0.3s ease-in-out;
  letter-spacing: 0.15px;
}
</style>
