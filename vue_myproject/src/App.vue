<template>
  <div id="app">




        <el-row>
          <el-col :span="24"><div class="grid-content header">
            <el-row :gutter="20">
              <el-col :span="6"><div class="grid-content bg-purple"><a href="https://www.baidu.com">turn</a></div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple"><router-link to="/">to Home</router-link></div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple"><router-link to="/content">to Content</router-link></div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
          </div></el-col>
        </el-row>
        <el-row>
          <el-col :span="5"><div class="grid-content aside"></div></el-col>
          <el-col :span="19"><div class="grid-content main"><router-view/></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"><div class="grid-content footer"></div></el-col>
        </el-row>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{

  }
}
</script>

<style>
  .grid-content {
    border-radius: 4px;
    min-height: 50px;
  }
  .header,.footer{
    background: #99a9bf;
  }
  .aside{
    background-color:skyblue;
    min-height: 500px;
  }
  .main{
    background-color:pink;
    min-height: 500px;
  }
  .bg-purple{
    background: #fff;
  }
</style>
