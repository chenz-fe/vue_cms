<template>
    <div class="tmpl">
        <my-title title="图文介绍"></my-title>
        <div class="news-title">
            <p>{{news.title}}</p>
        </div>
        <div class="news-content" v-html="news.content"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                news:{}
            }
        },
        created() {
            let id = this.$route.params.id;
            this.axios.get('getnew/'+id)
            .then(res=>{
                this.news = res.data.message[0];
            })
            .catch(err=>{
                console.log('获取商品图文介绍失败');
            })
        }
    }

</script>
    <style scoped>
    .tmpl {
        margin-top: 84px;
    }

    .news-title p {
        color: #0a87f8;
        font-size: 16px;
        font-weight: bold;
        padding-top: 10px;
    }

    .news-msg {
        margin-bottom: 3px;
    }

    .news-title span {
        margin-right: 30px;
        
    }

    .news-title {
        margin-top: 5px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    /*主体文章的左右距离*/
    .news-content {
        padding: 10 5;
    }
</style>
