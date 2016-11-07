<template>
	<div class="page js_show">
	    <div class="page__hd">
	        <h1 class="page__title">订单</h1>
	        <p class="page__desc">请按要求输入信息</p>
	    </div>
	    <div class="page__bd">
	        <div class="weui-cells__title">个人信息</div>
	        <div class="weui-cells weui-cells_form">
	            <div class="weui-cell">
	                <div class="weui-cell__hd"><label class="weui-label">姓名</label></div>
	                <div class="weui-cell__bd">
	                    <input class="weui-input" type="name" placeholder="请输入姓名"/>
	                </div>
	            </div>
	            <div class="weui-cell">
	                <div class="weui-cell__hd">
	                    <label class="weui-label">手机号</label>
	                </div>
	                <div class="weui-cell__bd">
	                    <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号">
	                </div>
	            </div>
	        </div>
	        <!-- <div class="weui-cells__tips">必填信息，请如实填写</div> -->

	        <div class="weui-cells__title">装修信息</div>	        
	        <div class="weui-cells weui-cells_form">
	            <div class="weui-cell">
	                <div class="weui-cell__hd"><label for="" class="weui-label">装修时间</label></div>
	                <div class="weui-cell__bd">
	                    <input class="weui-input" type="datetime-local" value="" placeholder=""/>
	                </div>
	            </div>
	            <div class="weui-cell">
	                <div class="weui-cell__hd">
	                	<label class="weui-label">装修地址</label>
	                </div>
	                <div class="weui-cell__bd">
	                    <input class="weui-input" type="name" placeholder="请选择省"/>
	                </div>
	            </div>
	            <div class="weui-cell">
	                <div class="weui-cell__hd">
	                    <label class="weui-label"></label>
	                </div>
	                <div class="weui-cell__bd">
	                    <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请选择市">
	                </div>
	            </div>
	            <div class="weui-cell">
	                <div class="weui-cell__hd">
	                	<label for="" class="weui-label"></label>
	                </div>
	                <div class="weui-cell__bd">
	                    <input class="weui-input" type="number" value="" placeholder="请选择区"/>
	                </div>
	            </div>
	            <div class="weui-cell">
	                <div class="weui-cell__bd">
	                    <textarea class="weui-textarea" placeholder="请输入详细地址" rows="3"></textarea>
	                    <div class="weui-textarea-counter"><span>0</span>/200</div>
	                </div>
	            </div>
	        </div>

	        <div class="weui-cells__title">备注</div>
	        <div class="weui-cells weui-cells_form">
	            <div class="weui-cell">
	                <div class="weui-cell__bd">
	                    <textarea class="weui-textarea" placeholder="请输入备注" rows="3"></textarea>
	                    <div class="weui-textarea-counter"><span>0</span>/200</div>
	                </div>
	            </div>
	        </div>

	        <label for="weuiAgree" class="weui-agree">
	            <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox">
	            <span class="weui-agree__text">
	                阅读并同意<a href="javascript:void(0);">《相关条款》</a>
	            </span>
	        </label>

	        <div class="weui-btn-area">
	            <a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">确定</a>
	        </div>
	    </div>
	    <div class="page__ft">
	        <a href="javascript:home()"><img src="../assets/icon_footer_link.png" /></a>
	    </div>
	</div>
</template>

<script type="text/javascript">
</script>

<style>
</style>