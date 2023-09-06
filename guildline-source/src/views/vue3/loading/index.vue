<script setup>
import Vue3LoadingGif from "@/assets/images/vue-3-loading.gif";
import CodeMirror from "@/components/CodeMirror/";
import { code } from "./code.js";
</script>

<template>
  <div>
    <h4 class="text-center mb-4">Vue 3 - Loading</h4>
    <hr />
    <div class="mt-4">
      <el-row class="mt-4" :gutter="20">
        <el-col :span="12">
          <div class="mt-4">UI:</div>
          <div class="my-5">
            <img :src="Vue3LoadingGif" />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="mt-4 font-bold">Info:</div>
          <div class="mt-4 leading-10">
            <div>
              <div>Location:</div>
              <b>
                <a
                  class="text-red-500"
                  target="_blank"
                  href="https://github.com/tronghao/module-frontend/tree/main/module/vue/vue-3/SpinnerV3"
                  >module-frontend/vue/vue-3/SpinnerV3</a
                >
              </b>
            </div>
            <div class="mt-8">
              <div>How to use:</div>
              <CodeMirror :code="code.howToUse" />
            </div>
            <div class="mt-8">
              <div>Description:</div>
              <pre>
  - Loading: 
    + true: show loading
    + false: hide loading
              </pre>
            </div>
            <div class="mt-8">
              <div>Dependency:</div>
              <pre>
  - Element UI
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
