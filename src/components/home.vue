<template>
    <div class="page js_show">
        <div class="page__hd">
            <h1 class="page__title">TG</h1>
            <p class="page__desc">工作室</p>
        </div>
        <div class="page__bd">
            <div class="weui-panel">
                <div class="weui-panel__hd">账户</div>
                <div class="weui-panel__bd">
                    <div class="weui-media-box weui-media-box_small-appmsg">
                        <div class="weui-cells">
                            <a class="weui-cell weui-cell_select weui-cell_select-before" href="javascript:;">
                                <div class="weui-cell__hd">
                                    <select class="weui-select" name="select2" v-model="selected">
                                        <option value="0">----</option>
                                        <option value="1">业主</option>
                                        <option value="2">工人</option>
                                    </select>
                                </div>
                                <div class="weui-cell__bd weui-cell_primary">
                                    <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号码">
                                </div>
                                <span class="weui-cell__ft"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="weui-panel">
                <div class="weui-panel__hd">订单</div>
                <div class="weui-panel__bd">
                    <div class="weui-media-box weui-media-box_small-appmsg">
                        <div class="weui-cells">
                            <a class="weui-cell weui-cell_access" href="javascript:;">
                                <div class="weui-cell__hd"></div>
                                <div class="weui-cell__bd weui-cell_primary">
                                    <p>处理中</p>
                                </div>
                                <span class="weui-cell__ft"></span>
                            </a>
                            <!-- <a class="weui-cell weui-cell_access" href="javascript:;">
                                <div class="weui-cell__hd"></div>
                                <div class="weui-cell__bd weui-cell_primary">
                                    <p>待评价</p>
                                </div>
                                <span class="weui-cell__ft"></span>
                            </a> -->
                            <a class="weui-cell weui-cell_access" href="javascript:;">
                                <div class="weui-cell__hd"></div>
                                <div class="weui-cell__bd weui-cell_primary">
                                    <p>历史信息</p>
                                </div>
                                <span class="weui-cell__ft"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="weui-msg"> 
                <img src="../assets/logo.png" style="width:40%;" />
            </div>
            <div class="weui-btn-area">
            <router-link :to="{path: pathTo}" class="weui-btn weui-btn_primary" v-bind:class="[selected=='0' ? 'weui-btn_disabled' : '']" id="showTooltips">{{ nextTxt }}</router-link>
            </div>
        </div>
        <div class="page__ft">
            <a href="javascript:home()"><img src="../assets/icon_footer_link.png" /></a>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    data () {
        return {
            nextTxt: '',
            selected: '0',
            pathTo: ''
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
            this.nextTxt = (val == "1" ? "我要下单" : "我要接单");
            this.pathTo = (val == "1" ? "/cmOrder" : (val == "2" ? "/wkOrderList" : ""));
        }
    }
}
</script>

<style>
</style>