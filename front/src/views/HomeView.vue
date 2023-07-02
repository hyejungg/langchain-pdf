<template>
    <div class="home">
        <div>
            <i class="my-4 fa-solid fa-circle-plus fa-4x" @click="goChatView" />
        </div>
        <div>
            <i
                class="my-4 fa-regular fa-comment-dots fa-4x"
                @click="goEmbeddingView"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    name: "HomeView",
    components: {},
    methods: {
        goChatView() {
            this.$router.push({ name: "chat" });
        },
        goEmbeddingView() {
            this.$router.push({ name: "documents" });
        },
    },
});
</script>
