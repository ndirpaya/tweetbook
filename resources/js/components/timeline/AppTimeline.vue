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
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                posts: 'posts'
            })
        },

        methods: {
            ...mapActions({
                getPosts: 'getPosts'
            })
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