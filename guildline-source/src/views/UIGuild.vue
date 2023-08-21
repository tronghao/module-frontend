<template>
  <div>
    <div class="grid grid-cols-2 gap-y-2 p-10">
      <div class="flex flex-col gap-2">
        <button class="button-primary">Button</button>
        <button class="button-primary-outline">Button</button>
        <button class="button-danger">radius-10</button>
        <button class="button-danger disabled:cursor-not-allowed disabled:opacity-50" disabled>radius-10</button>
        <button class="button-danger rounded-[5px]">radius-5</button>
        <button class="button-danger-outline">radius-10</button>
        <button class="button-danger-outline rounded-[5px]">radius-5</button>
        <button
          class="flex h-[61px] w-[61px] cursor-pointer items-center justify-center rounded-full bg-site-primary text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20.218" height="12.419" viewBox="0 0 20.218 12.419">
            <path
              id="Path_35"
              data-name="Path 35"
              d="M10.83,0V5.488H0V6.932H10.83v5.486l9.388-6.209Z"
              transform="translate(20.218 12.418) rotate(180)"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          class="flex h-[61px] w-[61px] cursor-pointer items-center justify-center rounded-full border-[3px] border-site-primary bg-white text-site-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20.218" height="12.419" viewBox="0 0 20.218 12.419">
            <path
              id="Path_35"
              data-name="Path 35"
              d="M10.83,0V5.488H0V6.932H10.83v5.486l9.388-6.209Z"
              transform="translate(20.218 12.418) rotate(180)"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          class="flex h-[61px] w-[61px] cursor-pointer items-center justify-center rounded-full bg-site-primary text-white"
        >
          <svg-icon class="text-[20px]" name="icon-arrow-right" />
        </button>
        <button
          class="flex h-[61px] w-[61px] cursor-pointer items-center justify-center rounded-full border-[3px] border-site-primary bg-white text-site-primary"
        >
          <svg-icon class="text-[20px]" name="icon-arrow-right" />
        </button>
        <button
          class="flex h-[61px] w-[61px] rotate-90 cursor-pointer items-center justify-center rounded-full border-[3px] border-site-primary bg-white text-site-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20.218" height="12.419" viewBox="0 0 20.218 12.419">
            <path
              id="Path_34"
              data-name="Path 34"
              d="M10.83,0V5.488H0V6.932H10.83v5.486l9.388-6.209Z"
              transform="translate(0 0)"
              fill="#3f45d1"
            />
          </svg>
        </button>
        <button
          class="flex h-[61px] w-[61px] cursor-pointer items-center justify-center rounded-full border-[3px] border-site-primary bg-white font-TTNorms text-[30px] font-medium text-site-primary"
        >
          1
        </button>
        <button
          class="flex h-[61px] w-[61px] cursor-pointer items-center justify-center rounded-full bg-site-primary font-TTNorms text-[30px] font-medium text-white"
        >
          2
        </button>
      </div>
      <div class="">
        <div>
          <h1 class="mb-[1rem]">Popup</h1>
          <button class="button-primary w-[30rem]" @click="isOpenPopupNewBoard = true">Mypage myboard new</button>
          <NewBoard :is-open="isOpenPopupNewBoard" @close-popup="isOpenPopupNewBoard = false" />

          <button class="button-primary mt-[1rem] w-[30rem]" @click="isOpenPopupBusnessardEx = true">
            Businesscard Ex
          </button>
          <BusinesscardEx :is-open="isOpenPopupBusnessardEx" @close-popup="isOpenPopupBusnessardEx = false" />

          <button class="button-primary mt-[1rem] w-[30rem]" @click="isOpenPopupMyboardAccept = true">
            Mypage Myboard Accept
          </button>
          <MyboardAccept :is-open="isOpenPopupMyboardAccept" @close-popup="isOpenPopupMyboardAccept = false" />

          <button class="button-primary mt-[1rem] w-[30rem]" @click="isOpenPopupMyboardDe = true">
            Mypage Myboard De
          </button>
          <MyboardDe :is-open="isOpenPopupMyboardDe" @close-popup="isOpenPopupMyboardDe = false" />

          <button class="button-primary mt-[1rem] w-[30rem]" @click="isOpenPopupMyboardEd = true">
            Mypage Myboard Ed
          </button>
          <MyboardEd :is-open="isOpenPopupMyboardEd" @close-popup="isOpenPopupMyboardEd = false" />
        </div>
        <div class="mt-[2rem]">
          <span class="hover-underline-animation text-[3.2rem]">class: hover-underline-animation</span>
        </div>
        <div class="mt-[2rem]">
          <span class="hover-underline-animation hover-primary text-[3.2rem] text-site-primary">
            class: hover-underline-animation hover-primary
          </span>
        </div>
        <div class="mt-[25rem]">
          <h2 class="mb-[1rem]">Pagination</h2>
          <Pagination :total="30" />
        </div>
      </div>
    </div>
    <div class="my-[10rem] mx-[1rem] grid grid-cols-7 gap-[2rem]">
      <div v-for="(item, index) in listIcon" :key="index">
        <svg-icon class="text-[20px]" :name="item" />
        <span class="ml-[1rem]">{{ item }}</span>
      </div>
    </div>
    <div class="my-[10rem] mx-[1rem] flex gap-[2rem]">
      <div class="flex aspect-square w-[20rem] items-center justify-center border bg-site-error">site-error</div>
      <div class="flex aspect-square w-[20rem] items-center justify-center border bg-site-orange">site-orange</div>
      <div class="flex aspect-square w-[20rem] items-center justify-center border bg-site-primary">site-primary</div>
      <div class="flex aspect-square w-[20rem] items-center justify-center border bg-site-background">
        site-background
      </div>
      <div class="flex aspect-square w-[20rem] items-center justify-center border bg-site-water">site-water</div>
      <div class="flex aspect-square w-[20rem] items-center justify-center border bg-site-gray">site-gray</div>
    </div>
    <span>Layout 2 col</span>
    <div class="flex h-[200px] justify-between">
      <div class="w-[250px] min-w-[250px] bg-slate-500">Left</div>
      <div class="flex-1 bg-blue-200">Content</div>
    </div>
    <span>Layout 3 col</span>
    <div class="flex h-[200px] justify-between">
      <div class="w-[250px] min-w-[250px] bg-slate-500">Left</div>
      <div class="flex-1 bg-blue-200">Content</div>
      <div class="w-[240px] min-w-[240px] bg-emerald-200">Right</div>
    </div>
  </div>
</template>
<script>
import NewBoard from '@/components/popup/NewBoard';
import BusinesscardEx from '@/components/popup/BusinesscardEx';
import MyboardAccept from '@/components/popup/MyboardAccept';
import MyboardDe from '@/components/popup/MyboardDe';
import MyboardEd from '@/components/popup/MyboardEd';
import Pagination from '@/components/Pagination';
import { ref } from 'vue';

export default {
  components: {
    NewBoard,
    BusinesscardEx,
    MyboardAccept,
    MyboardDe,
    MyboardEd,
    Pagination,
  },
  setup() {
    const isOpenPopupNewBoard = ref(false);
    const isOpenPopupBusnessardEx = ref(false);
    const isOpenPopupMyboardAccept = ref(false);
    const isOpenPopupMyboardDe = ref(false);
    const isOpenPopupMyboardEd = ref(false);
    const listIcon = [
      'icon-arrow-left',
      'icon-arrow-right',
      'icon-plus',
      'icon-right-triangle',
      'icon-search',
      'icon-dropdown-right',
      'icon-person-bg',
      'icon-like-bg',
      'icon-building-bg',
      'icon-yen-bg',
      'icon-col-view',
      'icon-list-view',
      'icon-down-triangle',
      'icon-windows-circle',
      'icon-edit',
      'icon-lock',
      'arrow_down',
      'arrow_left',
      'arrow_right',
      'arrow_triangle_down',
      'arrow_triangle_up',
      'arrow_up',
      'board',
      'category_icon',
      'close',
      'closed_lock',
      'col_view',
      'edit',
      'estimate',
      'eye-off-thin',
      'eye-thin',
      'favorite',
      'instagram',
      'like',
      'link',
      'list_view',
      'lock',
      'logo',
      'mybox',
      'pdf',
      'plusn',
      'sansan-logo',
      'search',
      'system_arrow',
      'twitter',
      'user',
    ];
    return {
      listIcon,
      isOpenPopupNewBoard,
      isOpenPopupBusnessardEx,
      isOpenPopupMyboardAccept,
      isOpenPopupMyboardDe,
      isOpenPopupMyboardEd,
    };
  },
};
</script>
<style lang=""></style>
