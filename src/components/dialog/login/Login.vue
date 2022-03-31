<template>
  <div class="login-main">
    <el-dialog v-model="dialogVisible" title="登录" destroy-on-close @close="handleCloseClick">
      <el-form :model="formData">
        <el-form-item label="手机号">
          <el-input v-model="formData.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.password" type="password" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleCloseClick">取消</el-button>
          <el-button type="primary" :loading="loadingState" @click="handleLoginClick"
            >登录</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useStore } from "@/store"
defineProps<{
  dialogVisible: boolean
}>()
const emit = defineEmits(["onCloseDialog"])

const formData = ref({
  phone: "",
  password: ""
})
const loadingState = ref<boolean>(false)
const handleCloseClick = () => {
  emit("onCloseDialog", false)
}

const store = useStore()
const handleLoginClick = async () => {
  loadingState.value = true
  store
    .dispatch("loginByCellPhoneAction", formData.value)
    .then(() => handleCloseClick())
    .catch((err) => console.log(err))
    .finally(() => (loadingState.value = false))
}
</script>

<style scoped lang="less"></style>
