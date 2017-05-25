<template>
    <div class="photo-bottom">
        <ul>
            <li class="photo-comment">
                <div>
                    <span>提交评论</span>
                    <span>
                        <a @click="goback">返回</a>
                    </span>
                </div>
            </li>
            <li class="txt-comment">
                <textarea v-model="newComment"></textarea>
            </li>
            <li>
                <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
            </li>
            <li class="photo-comment">
                <div>
                    <span>评论列表</span>
                    <span>{{comments.length}}条评论</span>
                </div>
            </li>
        </ul>
        <ul class="comment-list">
            <li v-for="(item, index) in comments" :key="index">
                <span>{{item.user_name}}: {{item.content}} </span>
                <span>{{item.add_time | format_date}}</span>
            </li>
        </ul>
        <mt-button plain type="danger" size="large" @click="loadmore">加载更多</mt-button>
    </div>

</template>
<script>
    import { Indicator } from 'mint-ui';
    export default {
        data() {
            return {
                pageindex: 1,
                comments: [],
                newComment: ''
            }
        },
        props: ['cid'],
        created() {
            // 默认加载第一页的评论
            this.loadmore();
            // console.log(this.$props.cid);
            // let url = '/getcomments/'+this.$props.cid+'?pageindex=1';
            // this.axios.get(url)
            // .then(res=>{
            //     this.comments = res.data.message;
            //     console.log(res.data);
            // })
            // .catch(err=>{
            //     console.log('获取评论数据失败');
            // })

        },
        methods: {
            goback() {
                this.$router.go(-1);
            },
            loadmore() {
                let url = '/getcomments/'+this.$props.cid+'?pageindex='+this.pageindex;
                this.axios.get(url)
                .then(res=>{
                    this.pageindex++;
                    this.comments = this.comments.concat(res.data.message);
                })
                .catch(err=>{
                    console.log('加载更多评论失败');
                })
            },
            postComment() {
                // 数据加载样式
                Indicator.open({
                  text: '加载中...',
                  spinnerType: 'fading-circle'
                });

                this.axios({
                    method: 'post',
                    url: 'postcomment/'+this.$props.cid,
                    data: {content: this.newComment}
                })
                .then(res=>{
                    // console.log(res);
                    this.comments = [];
                    this.pageindex = 1;
                    this.loadmore();
                    Indicator.close();
                    // 清空输入框
                    this.newComment = '';
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
    }
</script>
<style scoped>
    .photo-comment > div span:nth-child(1) {
        float: left;
        font-weight: bold;
        margin-left: 5px;
    }

    .photo-comment > div span:nth-child(2) {
        float: right;
    }

    .photo-comment {
        height: 30px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
        line-height: 30px;
        margin-bottom: 5px;
    }

    .photo-comment span {
        margin-right: 10px;
    }

    .txt-comment {
        padding: 5 5;
    }

    .txt-comment textarea {
        margin-bottom: 5px;
    }

    .comment-list li {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding-bottom: 5px;
        margin-bottom: 5px;
        padding-left: 5px;
    }
    
    .comment-list li span:nth-child(2) {
        float: right;
        margin-right: 10px;
    }

    li {
        list-style: none;
    }

    ul {
        margin: 0;
        padding: 0;
    }


</style>
