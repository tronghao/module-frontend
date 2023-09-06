<script setup>
import CodeMirror from "@/components/CodeMirror/";
import { code } from "./code.js";
</script>

<template>
  <div>
    <h4 class="text-center mb-4">Vue 3 - Enter Key</h4>
    <hr />
    <div class="mt-4">
      <el-row class="mt-4" :gutter="20">
        <el-col :span="12">
          <div class="mt-4">UI:</div>
          <div class="my-5">
            <img src="https://user-images.githubusercontent.com/8110371/41639648-9f2073e8-7499-11e8-95a8-3ab6c1397107.gif" />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="mt-4 font-bold">Info:</div>
          <div class="mt-4 leading-10">
            <div>
              <div>Sử dụng: <br />keyup.enter</div>
              <CodeMirror :code="code.howToUse" />
            </div>
            <div class="mt-8">
              <div>Nếu không được thì sử dụng: <br />keyup.enter.native</div>
              <CodeMirror :code="code.howToUse2" />
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
