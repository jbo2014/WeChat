<template>
	<div id="cmOrder">		
		<div class="page js_show">
		    <div class="page__hd">
		        <h1 class="page__title">订单</h1>
		        <!-- <p class="page__desc">请按要求输入信息</p> -->
		    </div>
		    <div class="page__bd">
				<validation name="validation1">

		        <div class="weui-cells__title">个人信息</div>
		        <div class="weui-cells weui-cells_form">
		            <div class="weui-cell">
		                <div class="weui-cell__hd"><label class="weui-label">姓名</label></div>
		                <div class="weui-cell__bd">
		                    <validity field="username" :validators="{minlength: 3, required:true}">
            					<input id="username" class="weui-input" type="text" placeholder="请输入姓名" @input="handleValidate">
          					</validity>
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
		        <div class="weui-cells__tips errors">
			        <p v-if="usernameInvalid">Required your name.</p>
			        <!-- <p v-if="$validation1.comment.maxlength">Your comment is too long.</p> -->
		      	</div>
	        	
		        <div class="weui-cells__title">服务信息</div>
		        <div class="weui-form-preview">
		            <div class="weui-form-preview__hd">
		                <label class="weui-form-preview__label">付款金额</label>
		                <em class="weui-form-preview__value">¥2400.00</em>
		            </div>
		            <div class="weui-form-preview__bd">
		                <div class="weui-form-preview__item">
		                    <label class="weui-form-preview__label">商品</label>
		                    <span class="weui-form-preview__value">电动打蛋机</span>
		                </div>
		                <div class="weui-form-preview__item">
		                    <label class="weui-form-preview__label">标题标题</label>
		                    <span class="weui-form-preview__value">名字名字名字</span>
		                </div>
		                <div class="weui-form-preview__item">
		                    <label class="weui-form-preview__label">标题标题</label>
		                    <span class="weui-form-preview__value">很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</span>
		                </div>
		            </div>
		            <div class="weui-form-preview__ft">
		                <button type="submit" class="weui-form-preview__btn weui-form-preview__btn_primary" href="javascript:">添加</button>
		                <a class="weui-form-preview__btn weui-form-preview__btn_default" href="javascript:">清空</a>
		            </div>
		        </div>

		        <div class="weui-cells__title">预约信息</div>	        
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
		            <input type="submit" class="weui-btn weui-btn_primary" title="确定" href="javascript:" id="showTooltips" v-if="valid">
		        </div>

		        </validation>
		    </div>
		    <div class="page__ft">
		        <a href="javascript:home()"><img src="../assets/icon_footer_link.png" /></a>
		    </div>
		</div>
	</div>
</template>

<script type="text/javascript">
// import Vue from 'vue'
import VueValidator from 'vue-validator'


export default{
	name: "cmOrder",
    data () {
        return {
        	result: {}
        } 
    },
	computed: VueValidator.mapValidation({
		valid: '$validation.validation1.valid',
		usernameInvalid: '$validation.validation1.username.invalid'
	}),
    methods: {
      handleValidate: function (e) {
        var self = this
        var $validity = e.target.$validity
        $validity.validate(function () {
          var result = $validity.result
          self.result = result
        })
      }
    }
}


</script>

<style>
</style>