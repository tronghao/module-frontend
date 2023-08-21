<template>
  <div class="mt-5 flex flex-wrap gap-10">
    <el-input v-model="form.search" placeholder="Search module" />
    <div class="w-full" v-for="(group, index) in moduleList" :key="index">
      <div class="font-bold">{{ group.group }}</div>
      <div class="mt-5 flex flex-wrap gap-10">
        <div
          class="max-w-[25rem]"
          v-for="(item, index) in group.components"
          :key="index"
        >
          <router-link :to="{ name: item.link }">
            <div class="w-[25rem] h-[25rem] wrap-modules rounded-xl">
              <img
                :src="item.image"
                class="w-full h-full object-cover cursor-pointer"
              />
            </div>
            <div class="text-center mt-2 font-bold cursor-pointer text-[blue]">
              {{ item.name }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import Vue3LoadingGif from "@/assets/images/vue-3-loading.gif";
import CodeMirrorIMG from "@/assets/images/code-mirror.jpg";

export default {
  setup() {
    const state = reactive({
      form: {
        search: "",
      },
      modules: [
        {
          group: "Utils",
          components: [
            {
              image:
                "data:image/png;base64,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",
              name: "Utils test",
              link: "UtilsTest",
            },
          ],
        },
        {
          group: "Vue 3",
          components: [
            {
              image: Vue3LoadingGif,
              name: "Loading",
              link: "Vue3Loading",
            },
            {
              image: CodeMirrorIMG,
              name: "CodeMirror",
              link: "CodeMirror",
            },
          ],
        },
      ],
    });

    const moduleList = computed(() => {
      const modules = [];
      state.modules.forEach((item) => {
        const module = {
          ...item,
          components: item.components.filter((component) =>
            component.name
              .toLowerCase()
              .includes(state.form.search.toLowerCase())
          ),
        };
        if (module.components.length > 0) {
          modules.push(module);
        }
      });
      return modules;
    });

    return {
      ...toRefs(state),
      moduleList,
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
</style>
