<template>
    <div class="mx-2 my-2">
        <div class="me-content px-2 py-1" v-if="this.type === 'me'">
            <i class="fa-solid fa-user" />
            <span> : {{ this.content }} </span>
        </div>
        <div class="computer-content px-2 py-1" v-if="this.type === 'computer'">
            <i class="fa-solid fa-robot" />
            <span> : {{ this.content }} </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChatComponent",
    props: {
        type: {
            type: String,
            require: true,
        },
        content: {
            type: String,
            require: true,
        },
    },
};
</script>

<style scoped lang="scss">
.me-content {
    border: 1px solid red;
    text-align: left;
    width: auto;
    height: auto;
    float: right;
}
.computer-content {
    border: 1px solid blue;
    text-align: left;
    width: auto;
    height: auto;
    float: left;
}

div::after {
    display: block;
    content: "";
    clear: both;
}
</style>
