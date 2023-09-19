<template>
  <v-text-field
    clearable
    variant="outlined"
    density="compact"
    v-bind="$attrs"
  ></v-text-field>
</template>

<script>
export default {
  name: 'sams-input',
  inheritAttrs: true
}
</script>
