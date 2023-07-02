<template>
    <div class="chat">
        <h1>This is a chat page</h1>
        <div class="chat_info">
            <div class="chat_content">
                <b-overlay :show="isLoading" class="d-inline-block">
                    <div v-for="chat in chatHistory" :key="chat.num">
                        <chat-component
                            :type="chat.type"
                            :content="chat.content"
                        />
                    </div>
                </b-overlay>
            </div>
            <div class="chat_request mt-2 d-flex">
                <b-input v-model="question" class="mx-2 flex-fill" />
                <b-button
                    class="mx-2"
                    :disabled="isQuestionValid"
                    type="submit"
                    variant="primary"
                    @click="showQuestion"
                >
                    Enter
                </b-button>
            </div>
        </div>
        <div class="mt-4 go-to-home">
            <i class="fa-solid fa-house fa-2x" @click="goHomeView">
                홈으로 돌아가기
            </i>
        </div>
    </div>
</template>

<script>
import ChatApi from "@/api/ChatApi.ts";
import ChatComponent from "@/components/ChatComponent.vue";

export default {
    components: {
        ChatComponent,
    },
    data() {
        return {
            question: "",
            chatHistory: [],
            num: 0,
            isLoading: false,
        };
    },
    methods: {
        goHomeView() {
            this.$router.push({ name: "home" });
        },
        resetQuestion() {
            this.question = "";
        },
        showQuestion() {
            const requestDto = {
                question: this.question,
            };
            this.addChatHistory("me", this.question, ++this.num);
            this.getChat(requestDto);
            this.resetQuestion();
        },
        addChatHistory(type, content, num) {
            this.chatHistory.push({
                type: type,
                content: content,
                num: num,
            });
        },
        getChat(requestDto) {
            this.isLoading = true;
            ChatApi.chat(requestDto)
                .then((response) => {
                    console.log(response);
                    if (response.data.success) {
                        this.isLoading = false;
                        this.addChatHistory(
                            "computer",
                            response.data.data.content,
                            ++this.num
                        );
                        console.log("성공");
                    } else {
                        console.log("실패");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    computed: {
        isQuestionValid() {
            return this.question === "" || !this.question;
        },
    },
};
</script>

<style scoped lang="scss">
.chat_info {
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 25%;

    width: 50%;
    height: 800px;
    border: 2px solid #2c3e50;
}

.chat_content {
    height: 92%;
    overflow: scroll;
}
</style>
