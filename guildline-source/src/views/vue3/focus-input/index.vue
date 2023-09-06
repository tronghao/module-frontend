<script setup>
import CodeMirror from "@/components/CodeMirror/";
import { code } from "./code.js";
</script>

<template>
  <div>
    <h4 class="text-center mb-4">Vue 3 - Focus Input</h4>
    <hr />
    <div class="mt-4">
      <el-row class="mt-4" :gutter="20">
        <el-col :span="12">
          <div class="mt-4">UI:</div>
          <div class="my-5">
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230821104256/focused-input.gif" />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="mt-4 font-bold">Info:</div>
          <div class="mt-4 leading-10">
            <div>
              <div>import ref and onMounted</div>
              <CodeMirror :code="code.importRef" />
            </div>
            <div class="mt-8">
              <div>Tạo ref</div>
              <CodeMirror :code="code.createRef" />
            </div>
            <div class="mt-8">
              <div>Sử dụng</div>
              <CodeMirror :code="code.howToUse" />
            </div>
            <div class="mt-8">
              <div>Thêm ref vào input</div>
              <CodeMirror :code="code.refInput" />
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
