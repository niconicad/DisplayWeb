<template>
 <div>普京将对中国进行国事访问热</div>
   <div>歌手导演洪啸：报名确认好档期呀热</div>
   <div>扫码可领个人劳动补贴？不实</div>
   <div>普京将对中国进行国事访问热</div>
   <div>歌手导演洪啸：报名确认好档期呀热</div>
   <div>扫码可领个人劳动补贴？不实</div>
   <div>普京将对中国进行国事访问热</div>
   <div>歌手导演洪啸：报名确认好档期呀热</div>
   <div>扫码可领个人劳动补贴？不实</div>
   <div>普京将对中国进行国事访问热</div>
   <div>歌手导演洪啸：报名确认好档期呀热</div>
   <div>扫码可领个人劳动补贴？不实</div>
   <div>普京将对中国进行国事访问热</div>
   <div>歌手导演洪啸：报名确认好档期呀热</div>
   <div>扫码可领个人劳动补贴？不实</div>
    <div>歌手导演洪啸：报名确认好档期呀热</div>
   <div>扫码可领个人劳动补贴？不实</div>
   <div>歌手导演洪啸：报名确认好档期呀热</div>
   <div>扫码可领个人劳动补贴？不实</div>

   <div id="translate">
        <span>2</span>
   </div>
  <el-dropdown placement="bottom">
    <span class="el-dropdown-link">
        <img src="@/assets/logo.png" />
    </span>
    <el-dropdown-menu>
        <el-dropdown-item>
            <span class="ignore" @click="window.translate.changeLanguage('zh-CN')">中文简体</span>
        </el-dropdown-item>
        <el-dropdown-item>
            <span class="ignore" @click="window.translate.changeLanguage('zh-TW')">中文繁體</span>
        </el-dropdown-item>
        <el-dropdown-item>
                <span class="ignore" @click="window.translate.changeLanguage('en')">English</span>
        </el-dropdown-item>
    </el-dropdown-menu>
</el-dropdown>

</template>

<script>


export default {
  name: 'HelloWorld',
  methods: {

    setLang(lang) {
      localStorage.setItem("current_lang", lang);
      // eslint-disable-next-line no-undef
      translate.changeLanguage(lang);  //不跳页面直接切换语言
        this.$nextTick(()=>{  //设置菜单下的选中状态的距离左侧的距离
        this.$refs.bgBarRef.style.width=this.$refs.navRefs[0].offsetWidth+"px";
        })
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style scoped>
/* Add your styles */
</style>
