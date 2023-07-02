<template>
    <div class="chat">
        <h1>This is a chat page</h1>

        <div></div>

        <div class="mt-4 go-to-home">
            <i class="fa-solid fa-house fa-2x" @click="goHomeView">
                홈으로 돌아가기
            </i>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goHomeView() {
            this.$router.push({ name: "home" });
        },
    },
};
</script>

<style scoped></style>
