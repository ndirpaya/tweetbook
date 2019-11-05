<template>
    <div>
        <app-timeline-create />

        <div class="timeline__posts">
            <app-timeline-post 
                v-for="x in 10"
                :key="x"
            />
        </div>
    </div>
    
</template>

<style>
    .timeline__posts {
        margin-top: 40px;
    }
</style>