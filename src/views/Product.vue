<template>
<div>
  <el-button type="primary" icon="el-icon-plus" @click="handleAdd">添加</el-button>
  <el-button type="danger" icon="el-icon-delete" @click="handleDeleteAll">删除多个</el-button>
  <el-table :default-sort = "{prop: 'date', order: 'descending'}" :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="修改" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="地址" :label-width="formLabelWidth">
        <el-input v-model="form.address" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="updateDate">确 定</el-button>
    </div>
  </el-dialog>
  </div>
</template>

<style>
.el-table .warning-row {
  background: rgb(248, 248, 248);
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>
import { log } from 'util';
export default {
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return "warning-row";
      } else {
        return "success-row";
      }
      return "";
    },
    handleAdd(){
      this.type="2"
      this.dialogFormVisible=true
      this.form.name=null
      this.form.address=null
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogFormVisible=true;
      this.form.name=row.name;
      this.form.address=row.address;
      this.currentIndex=index
    },
    handleDelete(index, row) {
      this.delete='1'
      this.open(index)
      console.log(index, row);
    },
    handleDeleteAll(){
      if (this.multipleSelection.length===0) {
        return
      }
      this.delete="all"
      this.open()
      
    },
    handleSelectionChange(val) {
      console.log(val);
      
        this.multipleSelection = val;
      },
    updateDate(e){
      console.log(this.form);
      if (this.type==='1') {
        this.tableData2[this.currentIndex].name=this.form.name
      this.tableData2[this.currentIndex].address=this.form.address
      }else{
        this.tableData2.push({date: "2019-04-02",'name':this.form.name,'address':this.form.address})
      }
      
      this.type='1'
      this.dialogFormVisible=false
    },
    open(index) {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if (this.delete==='1') {
            this.tableData2.splice(index,1)
          }else{
            for (let i = 0; i < this.multipleSelection.length; i++) {
        for (let j = 0; j < this.tableData2.length; j++) {
          if (this.multipleSelection[i].name===this.tableData2[j].name) {
            this.tableData2.splice(j,1)
          }
          
        }
        
      }
          }
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }

  },
  data() {
    return {
      multipleSelection:[],
      tableData2: [
        {
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎5",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎6",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      dialogFormVisible: false,
        form: {
          name: '',
          address: '',
          
        },
        formLabelWidth: '120px',
        currentIndex:0,
        type:'1',
        delete:'1'
    };
  }
};
</script>

