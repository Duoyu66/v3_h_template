<script setup lang="ts">

import home from './pages/home/index.vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-row class="tac outBox">
    <el-col :span="12">
      <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          style="width: 180px;height: 100%"
      >
        <el-sub-menu index="1">
<!--     <router-link to="/home">-->
       <template #title>
         <el-icon>
           <location/>
         </el-icon>
         <span>首页</span>
       </template>
<!--     </router-link>-->
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">选项一</el-menu-item>
            <el-menu-item index="1-2">选项二</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
<router-link  to="tourism">
  <el-menu-item index="2">
    <el-icon>
      <icon-menu/>
    </el-icon>
    <span>旅游必备</span>
  </el-menu-item>
</router-link>
  <router-link to="/message">
    <el-menu-item index="3">
      <el-icon>
        <document/>
      </el-icon>
      <span>面试宝典</span>
    </el-menu-item>
  </router-link>
        <el-menu-item index="4">
          <el-icon>
            <setting/>
          </el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  <!--  右侧展示区-->
  <div class="rightArea">
    <router-view></router-view>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.outBox {
  position: absolute;
  top: 0;
  left: 0;
  width: 180px;
  height: 100%;
  border: 1px solid red;
}

html, body {
  width: 100%;
  height: 100%;
}

.rightArea {
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - 190px);
  height: 100%;
  /*border:1px solid rebeccapurple;*/
  background-color: skyblue;
}
</style>
