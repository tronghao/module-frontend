<template>
  <div class="mt-5 flex flex-wrap gap-10">
    <div class="flex justify-end w-full text-[blue]">
      <a href="https://github.com/tronghao/module-frontend/blob/main/module/utils-php" target="_blank">https://github.com/tronghao/module-frontend/blob/main/module/utils-php</a>
    </div>
    <el-input v-model="form.search" placeholder="Search module" />
    <div
      class="w-full bg-white p-5 rounded-lg"
      v-for="(group, index) in moduleList"
      :key="index"
    >
      <div class="font-bold text-[1.7rem] flex items-center">
        <div>
          <img
            class="w-[3rem] h-[3rem] mr-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAl43TCl7WwNbydwuJxTLGF4ZS75g-4Atk5w&usqp=CAU"
          />
        </div>
        <div>{{ group.group }} ({{ lengthComponent(group.components) }})</div>
      </div>
      <div class="mb-10">{{ group.note }}</div>
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
import { formats, times, validates, others } from "./helpers.js";
import { commons } from "./commons.js";
import { converts } from "./converts.js";
import { images } from "./images.js";
import { regexs } from "./regexs.js";
import { mails } from "./mails.js";
import { validateService } from "./validates.js";
import { exceptionService } from "./exceptions.js";
import { fileService } from "./files.js";
import { folderService } from "./folders.js";
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
          group: "Helper - format",
          components: formats,
          note: 'namespace App\\Helper',
        },
        {
          group: "Helper - times",
          components: times,
          note: 'namespace App\\Helper',
        },
        {
          group: "Helper - validates",
          components: validates,
          note: 'namespace App\\Helper',
        },
        {
          group: "Helper - other",
          components: others,
          note: 'namespace App\\Helper',
        },
        {
          group: "CommonService",
          components: commons,
          note: 'namespace App\\Services',
        },
        {
          group: "ConvertService",
          components: converts,
          note: 'namespace App\\Services',
        },
        {
          group: "ImageService",
          components: images,
          note: 'namespace App\\Services',
        },
        {
          group: "RegexService",
          components: regexs,
          note: 'namespace App\\Services',
        },
        {
          group: "SendMailService",
          components: mails,
          note: 'namespace App\\Services',
        },
        {
          group: "ValidateService",
          components: validateService,
          note: 'namespace App\\Services',
        },
        {
          group: "ExceptionService",
          components: exceptionService,
          note: 'namespace App\\Services',
        },
        {
          group: "FileService",
          components: fileService,
          note: 'namespace App\\Services',
        },
        {
          group: "FolderService",
          components: folderService,
          note: 'namespace App\\Services',
        },
      ],
    });

    const moduleList = computed(() => {
      const modules = [];
      state.modules.forEach((item) => {
        const module = {
          ...item,
          components: item.components?.filter(
            (component) =>
              component.name
                .toLowerCase()
                .includes(state.form.search.toLowerCase()) ||
              component.comment
                .toLowerCase()
                .includes(state.form.search.toLowerCase())
          ),
        };
        if (module.components?.length > 0) {
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

    /**
     * lengthComponent length component
     * @author HaoDT
     */
    const lengthComponent = (components) => {
      return components.filter(item => item.name !== '').length;
    }

    return {
      ...toRefs(state),
      moduleList,
      generateImageIcon,
      handleCopyToClipBoard,
      lengthComponent,
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
