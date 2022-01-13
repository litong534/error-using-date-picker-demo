<template>
  <div>
    <el-date-picker
        v-model="time"
        type="datetime"
        value-format="YYYY-MM-DD HH:mm:ss"
        placeholder="请选择"
    />
    <el-table>
      <el-table-column
          v-for="(item, index) in groupTabConfig"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          min-width="180"
      >
        <template #default="scope">
          <span v-if="item.label === '黄瓜'">{{
              scope.row[item.prop].price
            }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ref, nextTick } from "vue";
export default {
  setup() {
    const time = ref("");

    const groupTabConfig = ref([]);

    nextTick(() => {
      groupTabConfig.value = [
        {
          prop: "group",
          label: "黄瓜",
          price: -1,
        },
      ];
    });

    return {
      time,
      groupTabConfig,
    };
  },
};
</script>
