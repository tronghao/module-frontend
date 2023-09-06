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
import { utilComponents } from './util-components';
import { vue3Components } from './vue-3-components';

export default {
  setup() {
    const state = reactive({
      form: {
        search: "",
      },
      modules: [
        {
          group: "Utils",
          components: utilComponents,
        },
        {
          group: "Vue 3",
          components: vue3Components,
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
