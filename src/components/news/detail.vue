<template>
    <div class="tmpl">
        <my-title title="新闻详情"></my-title>
        <div class="news-title">
            <p>{{news.title}}</p>
            <div class="news-msg">
                <span>{{news.click}}次点击</span>
                <span>分类:民生经济</span>
                <span>添加时间:{{news.add_time | format_date}}</span>
            </div>
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
            let id = this.$route.query.id;
            this.axios.get('getnew/'+id)
            .then(res=>{
                this.news = res.data.message[0];
                console.log(this.news);
                
            })
            .catch(err=>{
                console.log('获取新闻详情失败');
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
