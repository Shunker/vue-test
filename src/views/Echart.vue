<template>
<el-row>
  <el-col :span="8"><EchartBar /></el-col>
  <el-col :span="8"><EchartLine /></el-col>
  <el-col :span="8"><EchartPie /></el-col>
</el-row>
</template>

<script>
import EchartBar from '../components/EchartBar'
import EchartLine from '../components/EchartLine'
import EchartPie from '../components/EchartPie'
export default {
  components:{
    EchartBar,
    EchartLine,
    EchartPie,
  }
}
</script>
