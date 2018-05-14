<style scoped lang="less">
    .pagination{
        margin:20px auto;
    }
</style>
<template>
    <div>
        <el-table
          :data="$store.state.booksState.results"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="id">
          </el-table-column>
          <el-table-column
            prop="bookname"
            label="书名">
          </el-table-column>
          <el-table-column
            prop="price"
            label="价格">
          </el-table-column>
          <el-table-column
            prop="score"
            label="评分">
          </el-table-column>
          <el-table-column
            prop="type"
            label="类型">
          </el-table-column>
          <el-table-column
            prop="author"
            label="作者">
          </el-table-column>
          <el-table-column
            prop="discount"
            label="折扣">
          </el-table-column>
          <el-table-column
            prop="binding"
            label="装帧">
          </el-table-column>
          <el-table-column
            prop="olread"
            label="在线">
          </el-table-column>
          <el-table-column
            prop="store"
            label="库存">
          </el-table-column>
        </el-table>
        <div class="pagination">
            <!-- <el-pagination
              background
              layout="prev, pager, next"
              :total="$store.state.booksState.count"
              :current-page="$store.state.booksState.page"
              @current-change="changePage"
              @size-change="changePagesize"
              >
            </el-pagination> -->
            <el-pagination
              background
              @size-change="changePagesize"
              @current-change="changePage"
              :page-sizes="[10, 20,30, 50]"
              :page-size="20"
              layout="sizes, prev, pager, next"
              :total="$store.state.booksState.count">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default{
        created(){
            this.$store.dispatch("booksinit")
        },
        data(){
            return{

            }
        },
        methods:{
            changePage(page){
                console.log(page);
                this.$store.dispatch("changePage",{page})
            },
            changePagesize(pagesize){
                this.$store.dispatch("changePagesize",{pagesize})
            }
        }
    }
</script>