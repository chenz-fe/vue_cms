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
                <textarea></textarea>
            </li>
            <li>
                <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
            </li>
            <li class="photo-comment">
                <div>
                    <span>评论列表</span>
                    <span>44条评论</span>
                </div>
            </li>
        </ul>
        <ul class="comment-list">
            <li>
                匿名用户1：大家好 2014-01-04
            </li>
            <li>
                匿名用户1：大家好 2014-01-04
            </li>
            <li>
                匿名用户1：大家好 2014-01-04
            </li>
        </ul>
        <mt-button plain type="danger" size="large">加载更多</mt-button>
    </div>

</template>
<script>
    export default {
        data() {
            return {

            }
        },
        created() {
            
        },
        methods: {
            goback() {
                this.$router.go(-1);
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

    li {
        list-style: none;
    }

    ul {
        margin: 0;
        padding: 0;
    }


</style>
