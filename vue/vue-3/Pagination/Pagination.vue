<template>
  <div class="flex">
    <el-button class="pagination-btn-prev" :disabled="currentPage <= 1" @click="previous">
      <svg-icon class="text-[2rem]" name="icon-arrow-left" />
    </el-button>
    <el-pagination
      background
      layout="prev, pager, next"
      :pager-count="pagerCount"
      :page-size="pageSize"
      :total="total"
      :current-page="currentPage"
      @current-change="handleCurrentChange"
    />
    <!-- Ex: (total = 12, pagesize = 10) -->
    <!-- 12 / 10 ==> 1, remainder 2 => 2 is different from 0 so add 1  ====> currentPage >= 1 + 1 => disable -->
    <el-button
      class="pagination-btn-next"
      :disabled="currentPage >= Math.floor(total / pageSize) + (total % pageSize == 0 ? 0 : 1)"
      @click="next()"
    >
      <svg-icon class="text-[2rem]" name="icon-arrow-right" />
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pagerCount: {
      type: Number,
      default: 5,
    },
    pageSize: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  emits: ['changePage'],
  setup(props, context) {
    /**
     * handleCurrentChange handle current change page
     * @author DangLH
     */
    const handleCurrentChange = val => {
      context.emit('changePage', val);
    };

    const previous = () => {
      if (props.currentPage > 1) {
        context.emit('changePage', props.currentPage - 1);
      }
    };

    const next = () => {
      if (props.currentPage >= 1) {
        context.emit('changePage', props.currentPage + 1);
      }
    };

    return { handleCurrentChange, previous, next };
  },
};
</script>
