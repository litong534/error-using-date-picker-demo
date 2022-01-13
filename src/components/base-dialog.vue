<template>
  <el-dialog
      :model-value="modelValue"
      :width="width"
      :close-on-click-modal="closeOnClickModal"
      @close="handleClose"
      @open="open"
      :append-to-body="appendToBody"
      custom-class="base-dialog"
  >
    <template #title>
      <div class="dialog-title">{{title}}</div>
    </template>
    <div class="dialog-body" v-loading="loading">
      <el-scrollbar :height="contentHeight">
        <slot/>
      </el-scrollbar>
    </div>
    <template #footer>
      <span class="dialog-footer" v-if="showFooter">
        <el-button type="primary" size="small" @click="handleConfirm" v-if="showConfirm">{{confirmBtnText}}</el-button>
        <el-button size="small" @click="handleCancel" v-if="showCancel">{{cancelBtnText}}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
// import {ref} from 'vue'
import {useVModel} from '@vueuse/core'

export default {
  name: "Dialog",
  emits: ['confirm', 'cancel', 'open', 'update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '525px'
    },
    title: {
      type: String,
      default: '标题'
    },
    contentHeight: {
      type: String,
      default: '400px',
    },
    cancelBtnText: {
      type: String,
      default: '取消',
    },
    confirmBtnText: {
      type: String,
      default: '确定',
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    showFooter: {
      type: Boolean,
      default: true,
    },
    showConfirm: {
      type: Boolean,
      default: true,
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {emit}) {
    const handleClose = () => {
      emit('cancel')
      modelValue.value = false
    }
    const modelValue = useVModel(props, 'modelValue', emit)
    const handleConfirm = () => {
      emit('confirm')
    }
    const handleCancel = () => {
      modelValue.value = false
    }
    const open = () => {
      emit('open')
    }
    return {
      handleClose,
      handleConfirm,
      handleCancel,
      open
    }
  },
}
</script>
