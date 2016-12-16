<template>
	<div id="srvList">
		<div class="page js_show">
		    <div class="page__hd">
		        <h1 class="page__title"><icon name="list" scale="3"></icon></h1>
		        <!-- <p class="page__desc">请按要求输入信息</p> -->
		    </div>
		    <div class="page__bd">
		        <!--<a href="javascript:;" class="weui-btn weui-btn_primary">点击展现searchBar</a>-->
		        <div class="weui-search-bar weui-search-bar_focusing" id="searchBar">
		            <form class="weui-search-bar__form">
		                <div class="weui-search-bar__box">
		                    <i class="weui-icon-search"></i>
		                    <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
		                    <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
		                </div>
		                <label class="weui-search-bar__label" id="searchText">
		                    <i class="weui-icon-search"></i>
		                    <span>搜索</span>
		                </label>
		            </form>
		            <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchBtn">取消</a>
		        </div>
		        <div class="weui-cells weui-cells_checkbox" id="searchResult">
		            <!-- <div class="weui-cell weui-cell_access">
		                <div class="weui-cell__hd">
		                    <input type="checkbox" class="weui-check" name="checkbox1" id="s11">
		                    <i class="weui-icon-checked"></i>
		                </div>
		                <div class="weui-cell__bd">
		                    <p>standard is dealt for u.</p>
		                </div>
		            </div>
		            <div class="weui-cell weui-cell_access">
		                <div class="weui-cell__hd">
		                    <input type="checkbox" class="weui-check" name="checkbox1" id="s12">
		                    <i class="weui-icon-checked"></i>
		                </div>
		                <div class="weui-cell__bd">
		                    <p>standard is dealt for u.</p>
		                </div>
		            </div>
		            <div class="weui-cell weui-cell_access">
		                <div class="weui-cell__hd">
		                    <input type="checkbox" class="weui-check" name="checkbox1" id="s13">
		                    <i class="weui-icon-checked"></i>
		                </div>
		                <div class="weui-cell__bd">
		                    <p>standard is dealt for u.</p>
		                </div>
		            </div>
		            <div class="weui-cell weui-cell_access">
		                <div class="weui-cell__hd">
		                    <input type="checkbox" class="weui-check" name="checkbox1" id="s14">
		                    <i class="weui-icon-checked"></i>
		                </div>
		                <div class="weui-cell__bd">
		                    <p>standard is dealt for u.</p>
		                </div>
		            </div> -->
		            <p v-for="item in list">
		            	<div class="weui-cell weui-cell_access">
			                <div class="weui-cell__hd">
			                    <input type="checkbox" class="weui-check" name="checkbox1" id="s14">
			                    <i class="weui-icon-checked"></i>
			                </div>
			                <div class="weui-cell__bd">
			                    <p>{{ item.msg }}</p>
			                </div>
			            </div>
		            </p>
		        </div>
		    </div>
		    <div class="page__ft">
		        <a href="javascript:home()"><img src="../assets/icon_footer_link.png" /></a>
		    </div>
		</div>
	</div>	
</template>

<script>	
	// 拉动加载
	import InfiniteLoading from 'vue-infinite-loading'

	export default{
		name: "srvList",
	    data() {
	        return {
	        	list: [
	        		{id:1, msg:"1a"},
	        		{id:2, msg:"2a"},
	        		{id:3, msg:"3a"},
	        		{id:4, msg:"4a"},
	        		{id:5, msg:"5a"},
	        		{id:6, msg:"6a"},
	        		{id:7, msg:"7a"},
	        		{id:8, msg:"8a"},
	        		{id:9, msg:"9a"},
	        		{id:10, msg:"10a"},
	        		{id:11, msg:"11a"},
	        		{id:12, msg:"12a"},
	        		{id:13, msg:"13a"},
	        		{id:14, msg:"14a"}
	        	]
	        } 
	    },
		methods: {
			onInfinite() {
			  setTimeout(() => {
			    const temp = [];
			    for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
			      temp.push(i);
			    }
			    this.list = this.list.concat(temp);
			    this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
			  }, 1000);
			}
		},
		components: {
			InfiniteLoading,
		}
	}
</script>

<style>
	
</style>