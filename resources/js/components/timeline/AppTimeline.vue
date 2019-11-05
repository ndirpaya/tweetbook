<template>
    <div>
        <app-timeline-create />

        <div class="timeline__posts">
            <app-timeline-post 
                v-for="post in posts"
                :key="post.id"
                :post="post"
            />
        </div>
    </div>
    
</template>

<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                posts: []
            }
        },

        methods: {
            async getPosts () {
                let posts = await axios.get('api/posts')

                this.posts = posts.data.data
            }
        },

        mounted () {
            this.getPosts()
        }        
    }
</script>

<style>
    .timeline__posts {
        margin-top: 40px;
    }
</style>