export const code = {
  importRef: `import { ref, onMounted } from 'vue';`,
  createRef: `const inputFirst = ref(null);`,
  howToUse: `onMounted(() => {
  inputFirst.value.focus();
});`,
  refInput: `<el-input ref="inputFirst"/>`,
};
