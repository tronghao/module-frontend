<template>
  <div class="mt-5">
    <!-- time -->
    <div>
      <h4 class="font-bold">Time</h4>
      <div class="grid grid-cols-5 gap-5 gap-y-[10rem] p-10">
        <div>
          <div class="flex justify-between gap-3">
            <el-input v-model="inputFrom" placeholder="from"></el-input>
            <el-input v-model="inputTo" placeholder="to"></el-input>
          </div>
          <el-checkbox v-model="select">select</el-checkbox>
          <div>
            Response:
            {{ getYears(parseInt(inputFrom), parseInt(inputTo), select) }}
          </div>
          <div class="code mt-2 text-black">
            getYears(from, to, select = false)
          </div>
        </div>
        <div>
          <div class="flex justify-between gap-3">
            <el-input v-model="inputFrom" placeholder="from"></el-input>
            <el-input v-model="inputTo" placeholder="to"></el-input>
          </div>
          <el-checkbox v-model="select">select</el-checkbox>
          <div>
            Response:
            {{ getMonths(parseInt(inputFrom), parseInt(inputTo), select) }}
          </div>
          <div class="code mt-2 text-black">
            getMonths(from = 1, to = 12, select = false)
          </div>
        </div>
        <div>
          <div class="flex justify-between gap-3">
            <el-input v-model="inputFrom" placeholder="from"></el-input>
            <el-input v-model="inputTo" placeholder="to"></el-input>
          </div>
          <el-checkbox v-model="select">select</el-checkbox>
          <div>
            Response:
            {{ getHours(parseInt(inputFrom), parseInt(inputTo), select) }}
          </div>
          <div class="code mt-2 text-black">
            getHours(from = 0, to = 23, select = false)
          </div>
        </div>
        <div>
          <el-input v-model="input"></el-input>
          <el-checkbox v-model="select">select</el-checkbox>
          <div>
            Response: {{ getMinutes(input ? parseInt(input) : 5, select) }}
          </div>
          <div class="code mt-2 text-black">
            getMinutes(step = 5, select = false)
          </div>
        </div>
        <div>
          <el-input v-model="input"></el-input>
          <el-checkbox v-model="subName">subName</el-checkbox>
          <el-checkbox v-model="select">select</el-checkbox>
          <div>Response: {{ daysInMonth(input, subName, select) }}</div>
          <div class="code mt-2 text-black">
            daysInMonth(dateString, subName = true, select = false)
          </div>
          <div class="mt-2">Ex: 1990-01-01</div>
          <div>or New Date: {{ new Date() }}</div>
        </div>
        <div>
          <el-input v-model="input"></el-input>
          <div>Response: {{ formatDate(input) }}</div>
          <div class="code mt-2 text-black">formatDate(date)</div>
          <div class="mt-2">Ex: 1990-01-01</div>
          <div>or New Date: {{ new Date() }}</div>
        </div>
      </div>
    </div>
    <!-- validate -->
    <div class="mt-[5rem]">
      <h4 class="font-bold">Validate</h4>
      <div class="grid grid-cols-5 gap-5 gap-y-[10rem] p-10">
        <div>
          <el-input v-model="input"></el-input>
          <div>Response: {{ checkOnlyNumber(input) ? "true" : "false" }}</div>
          <div class="code mt-2 text-black">checkOnlyNumber(string)</div>
        </div>
      </div>
    </div>
    <!-- File -->
    <div class="mt-[5rem]">
      <h4 class="font-bold">File</h4>
      <div class="grid grid-cols-5 gap-5 gap-y-[10rem] p-10">
        <div>
          <el-input v-model="input" placeholder="base64"></el-input>
          <div>
            <el-button
              type="primary"
              class="bg-[#409eff] mt-3"
              @click="dataURLtoFileHandle"
              >Try</el-button
            >
          </div>
          <div class="code mt-2 text-black">
            dataURLtoFile(dataurl, filename)
          </div>
          <div class="mt-2">
            <a href="https://www.base64-image.de/" target="_blank">
              <el-link> Web convert base64:</el-link></a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- other -->
    <div>
      <h4 class="font-bold">Other</h4>
      <div class="grid grid-cols-5 gap-5 gap-y-[10rem] p-10">
        <div>
          <el-input v-model="input"></el-input>
          <div>Not Response</div>
          <div class="code mt-2 text-black">scrollToTop(top)</div>
          <div class="mt-2">
            <el-button
              type="primary"
              class="bg-[#409eff]"
              @click="scrollToTop(parseInt(input))"
              >Try</el-button
            >
          </div>
        </div>
        <div>
          <el-input v-model="input"></el-input>
          <div>Response: {{ stripHtml(input) }}</div>
          <div class="code mt-2 text-black">stripHtml(html)</div>
          <div class="mt-2">
            Ex: {{ `
            <div><p>123</p></div>
            ` }}
          </div>
        </div>
        <div>
          <el-input v-model="input"></el-input>
          <div>Response: {{ convertBase64(input) }}</div>
          <div class="code mt-2 text-black">convertBase64(val)</div>
        </div>
      </div>
    </div>
    <!-- Vue 3 - component -->
    <div class="mt-[5rem]">
      <h4 class="font-bold">Vue 3 - Component</h4>
      <div class="grid grid-cols-5 gap-5 gap-y-[10rem] p-10">
        <div>
          <el-checkbox v-model="loading">loading</el-checkbox>
          <div class="code mt-2 text-black">SpinnerV3</div>
          <SpinnerV3 :loading="loading"></SpinnerV3>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import { reactive, toRefs } from "vue";

import {
  convertBase64,
  checkOnlyNumber,
  stripHtml,
  formatDate,
  scrollToTop,
  daysInMonth,
  getMinutes,
  getYears,
  getMonths,
  getHours,
  dataURLtoFile,
} from "@/module";
import { SpinnerV3 } from "@/module";

export default {
  components: {
    SpinnerV3,
  },
  setup() {
    const state = reactive({
      input: "",
      inputFrom: "",
      inputTo: "",
      subName: false,
      select: false,
      loading: false,
    });

    /**
     * dataURLtoFileHandle dataURL to file handle
     * @author HaoDT
     */
    const dataURLtoFileHandle = () => {
      console.log(dataURLtoFile(state.input, "test.png"));
      alert("view console");
    };

    return {
      ...toRefs(state),
      convertBase64,
      checkOnlyNumber,
      stripHtml,
      formatDate,
      scrollToTop,
      daysInMonth,
      getMinutes,
      getYears,
      getMonths,
      getHours,
      dataURLtoFileHandle,
    };
  },
};
</script>

<style lang="scss">
.wrap-modules {
  overflow: hidden;
  img {
    transition: 0.3s;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}
.code {
  color: red;
}
</style>
