<script setup>
import { defineProps, computed } from "vue";
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const props = defineProps(["code"]);
const extensions = [javascript(), oneDark];

const code = computed(() => props.code);
</script>

<template>
  <div>
    <codemirror
      v-model="code"
      placeholder="Code goes here..."
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
    />
  </div>
</template>
