<template>
<div>

  <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item><router-link to="options/commit" :append="true">commit</router-link></el-menu-item>
        <el-menu-item>branch</el-menu-item>
    </el-menu>
</div>
</template>

<script>
export default {
    beforeRouteLeave(to, from, next) {
        console.log('leave')
        next();
    }
}
</script>

<style>

</style>