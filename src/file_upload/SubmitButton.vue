<template>
  <q-btn color="button" style="border-radius: 8px;" label="Submit" @click="onClick"/>
</template>

<script>

export default {
  name: "SubmitButton",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
}
</script>