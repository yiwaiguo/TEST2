<style lang="less" scoped>
    ul,li{
        list-style:none;
    }
    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: pink;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    background-color: #f9fafc;
  }
  .contain{
    margin-top:20px;
  }
  .bg-white{
    background: #fff;
    height:36px;
    line-height:36px;
  }
  .bg-white a{
    text-decoration: none;
  }
</style>
<template>
    <el-container>
      <el-header>
          <div class="hello">
              <button @click="addServer">axios跨域获取数据</button>
            </div>
      </el-header>
      <el-main>
          <div class="searchbox">
              <el-row>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="14"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
              </el-row>
              <el-row>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="14"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                  <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content bg-white">
                      <router-link to="/">Home</router-link>
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-white">
                      <router-link to="/book">Book</router-link>
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-white">
                      <router-link to="/">Home</router-link>
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-white">
                      <router-link to="/">Home</router-link>
                    </div></el-col>
                  </el-row>
                </div></el-col>
              </el-row>
          </div>
          <div class="contain">
                <el-row>
                  <el-col :span="4"><div class="booktype">
                      <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                            <el-submenu index="1">
                              <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                              </template>
                              <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                              </el-menu-item-group>
                              <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                              </el-menu-item-group>
                              <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                              </el-submenu>
                            </el-submenu>
                            <el-menu-item index="2">
                              <i class="el-icon-menu"></i>
                              <span slot="title">导航二</span>
                            </el-menu-item>
                            <el-menu-item index="3" disabled>
                              <i class="el-icon-document"></i>
                              <span slot="title">导航三</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                              <i class="el-icon-setting"></i>
                              <span slot="title">导航四</span>
                            </el-menu-item>
                          </el-menu>
                  </div></el-col>
                  <el-col :span="20"><div class="grid-content bg-purple-light">
                      <router-view/>
                  </div></el-col>
                </el-row>
          </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
</template>
<script>
    export default {
        data() {
        return {

        }
      },
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          },
          addServer(){
                this.$store.dispatch("addServer");
            }
         }
      }
</script>