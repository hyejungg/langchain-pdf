<template>
    <div class="documents">
        <h1>This is a embedding page</h1>
        <div class="mt-4 go-to-home">
            <i class="fa-solid fa-house fa-2x" @click="goHomeView">
                홈으로 돌아가기
            </i>
        </div>
</template>

<script>
export default {};
export default {
    methods: {
        goHomeView() {
            this.$router.push({ name: "home" });
        },
    },
};
</script>

<style scoped></style>
