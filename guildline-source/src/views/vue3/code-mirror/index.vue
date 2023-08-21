<script setup>
import CodeMirrorIMG from "@/assets/images/code-mirror.jpg";
import CodeMirror from "@/components/CodeMirror/";
import { code } from "./code.js";
</script>

<template>
  <div>
    <h4 class="text-center mb-4">Vue 3 - Code Mirror</h4>
    <hr />
    <div class="mt-4">
      <el-row class="mt-4" :gutter="20">
        <el-col :span="12">
          <div class="mt-4">UI:</div>
          <div class="my-5">
            <img :src="CodeMirrorIMG" />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="mt-4 font-bold">Info:</div>
          <div class="mt-4 leading-10">
            <div>
              <div>Location:</div>
              <b class="text-red-500">module-frontend/vue/vue-3/CodeMirror</b>
            </div>
            <div class="mt-8">
              <div>How to use:</div>
              <CodeMirror :code="code.howToUse" />
            </div>
            <div class="mt-8">
              <div>Description:</div>
              <pre>
  - code: your code want display
              </pre>
            </div>
            <div class="mt-8">
              <div>Dependency:</div>
              <pre>
  - "@codemirror/lang-javascript": "^6.1.9",
  - "@codemirror/theme-one-dark": "^6.1.2",
  - "codemirror": "^6.0.1",
  - "vue-codemirror": "^6.1.1",
              </pre>
            </div>
            <div class="mt-8">
              <div>Example:</div>
              <CodeMirror :code="code.example" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style>
a {
  color: blue;
}
.whitespace-break-spaces {
  white-space: break-spaces;
}
</style>
