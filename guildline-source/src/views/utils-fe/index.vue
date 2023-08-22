<template>
  <div class="mt-5 flex flex-wrap gap-10">
    <el-input v-model="form.search" placeholder="Search module" />
    <div
      class="w-full bg-white p-5 rounded-lg"
      v-for="(group, index) in moduleList"
      :key="index"
    >
      <div class="font-bold text-[1.7rem] flex items-center mb-10">
        <div>
          <img
            class="w-[3rem] h-[3rem] mr-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAl43TCl7WwNbydwuJxTLGF4ZS75g-4Atk5w&usqp=CAU"
          />
        </div>
        <div>{{ group.group }}</div>
      </div>
      <div class="mt-5 flex flex-wrap gap-10">
        <div
          class="max-w-[25rem]"
          v-for="(item, index) in group.components"
          :key="index"
        >
          <div
            v-if="item.name"
            class="w-[25rem] min-h-[15rem] wrap-modules rounded-xl"
          >
            <img
              class="w-[4rem] h-[4rem] rounded-xl mb-2"
              :src="generateImageIcon(index)"
            />

            <div>
              <span
                class="text-center mt-2 font-bold cursor-pointer text-[blue] mr-2 break-words"
                @click="handleCopyToClipBoard(item.name)"
              >
                {{ item.name }}
              </span>
              <span>
                <i>{{ item.param }}</i>
              </span>

              <div>{{ item.comment }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import { reactive, toRefs, computed, nextTick } from "vue";
import { ElMessage } from "element-plus";
import { files } from "./files.js";
import { formats } from "./formats.js";
import { times } from "./times.js";
import { validates } from "./validates.js";
import { others } from "./others.js";
import { copyToClipBoardNotInput } from "@/utils";

export default {
  setup() {
    const state = reactive({
      form: {
        search: "",
        textSelect: "",
      },
      modules: [
        {
          group: "File",
          components: files,
        },
        {
          group: "Format",
          components: formats,
        },
        {
          group: "Time",
          components: times,
        },
        {
          group: "Validate",
          components: validates,
        },
        {
          group: "Other",
          components: others,
        },
      ],
    });

    const moduleList = computed(() => {
      const modules = [];
      state.modules.forEach((item) => {
        const module = {
          ...item,
          components: item.components.filter(
            (component) =>
              component.name
                .toLowerCase()
                .includes(state.form.search.toLowerCase()) ||
              component.comment
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

    /**
     * generateImageIcon generate image icon
     * @author HaoDT
     */
    const generateImageIcon = (index) => {
      const arrayImage = [
        "https://cdn-icons-png.flaticon.com/512/2002/2002051.png",
        // "https://static-00.iconduck.com/assets.00/module-icon-1793x2048-sljgu24z.png",
      ];
      return arrayImage[index % arrayImage.length];
    };

    /**
     * handleCopyToClipBoard handle copy to clip board
     * @author HaoDT
     */
    const handleCopyToClipBoard = async (text) => {
      copyToClipBoardNotInput(text);
      ElMessage({
        message: "Copied to clipboard!",
        type: "success",
      });
    };

    return {
      ...toRefs(state),
      moduleList,
      generateImageIcon,
      handleCopyToClipBoard,
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
