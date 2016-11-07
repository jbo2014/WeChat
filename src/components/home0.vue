<template>
    <div class="page js_show home">
        <div class="page__hd">
            <!--        <h1 class="page__title">-->
            <!--            <img src="./images/logo.png" alt="WeUI" height="21px">-->
            <!--        </h1>-->
            <!--        <p class="page__desc">WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</p>-->
        </div>
        <div class="page__bd page__bd_spacing">
            <ul>
                <li class="js_show">
                    <div class="weui-flex js_category">
                        <p class="weui-flex__item">账户</p>
                        <!--                    <img src="./images/icon_nav_form.png" alt="">-->
                    </div>
                    <div class="page__category js_categoryInner" data-height="176">
                        <div class="weui-cells page__category-content">
                            <div class="weui-cell weui-cell_select weui-cell_select-before">
                                <div class="weui-cell__hd">
                                    <select class="weui-select" name="select2" v-model="selected">
                                        <option value="0">----</option>
                                        <option value="1">业主</option>
                                        <option value="2">工人</option>
                                    </select>
                                </div>
                                <div class="weui-cell__bd">
                                    <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号码">
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="js_show">
                    <div class="weui-flex js_category">
                        <p class="weui-flex__item">订单</p>
                        <!--                    <img src="./images/icon_nav_layout.png" alt="">-->
                    </div>
                    <div class="page__category js_categoryInner" data-height="440">
                        <div class="weui-cells page__category-content">
                            <a class="weui-cell weui-cell_access js_item" data-id="flex" href="javascript:;">
                                <div class="weui-cell__bd">
                                    <p>处理中</p>
                                </div>
                                <div class="weui-cell__ft"></div>
                            </a>
                            <a class="weui-cell weui-cell_access js_item" data-id="footer" href="javascript:;">
                                <div class="weui-cell__bd">
                                    <p>待评价</p>
                                </div>
                                <div class="weui-cell__ft"></div>
                            </a>
                            <a class="weui-cell weui-cell_access js_item" data-id="article" href="javascript:;">
                                <div class="weui-cell__bd">
                                    <p>历史信息</p>
                                </div>
                                <div class="weui-cell__ft"></div>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">{{ nextTxt }}</a>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    data () {
        return {
            nextTxt: '',
            selected: '0'
        }
    },
    mounted: function(){
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
          headers: {},
          emulateJSON: true
        }).then(function(response){
          this.articles = response.data.subjects
        },function(response){
          console.log(response)
        });
    },
    watch: {
        selected: function(val) {
            this.nextTxt = val == "0" ? "" : (val == "1" ? "我要下单" : "我要接单");
        }
    }
}
</script>

<style>
</style>