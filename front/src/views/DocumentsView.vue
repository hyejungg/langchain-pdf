<template>
    <div class="documents">
        <h1>This is a embedding page</h1>

        <b-overlay :show="isLoading" class="d-inline-block">
            <form
                class="mx-4 my-4 fileUpload-form"
                @submit.prevent="uploadFile"
            >
                <label class="mx-2 fileUpload-form__title"
                    >Select pdf to upload</label
                >
                <input
                    df-file
                    class="fileUpload-form__input"
                    type="file"
                    ref="selectFile"
                    @change.prevent="previewFile"
                />

                <b-card
                    no-body
                    class="my-4 fileUpload-form__info"
                    v-if="selectFile"
                >
                    <ul class="fileUpload-form__text" v-if="selectFile">
                        <li>name : {{ selectFile.name }}</li>
                        <li>size : {{ selectFile.size }}</li>
                        <li>type : {{ selectFile.type }}</li>
                    </ul>
                </b-card>
                <b-button
                    :disabled="!selectFile"
                    type="submit"
                    variant="primary"
                >
                    업로드
                </b-button>
            </form>
        </b-overlay>
        <div class="mt-4 go-to-home">
            <i class="fa-solid fa-house fa-2x" @click="goHomeView">
                홈으로 돌아가기
            </i>
        </div>
    </div>
</template>

<script>
import FileApi from "@/api/FileApi.ts";

export default {
    data() {
        return {
            selectFile: null,
            isLoading: false,
        };
    },
    methods: {
        previewFile() {
            if (this.$refs.selectFile.files.length > 0) {
                this.selectFile = this.$refs.selectFile.files[0];
            }
        },
        uploadFile() {
            this.isLoading = true;
            const form = new FormData();
            form.append("flie", this.selectFile);
            FileApi.uploadFile(form)
                .then((response) => {
                    if (response.success) {
                        this.isLoading = false;
                        alert("파일 업로드를 성공했습니다!");
                    } else {
                        this.isLoading = false;
                        alert("파일 업로드를 실패했습니다.");
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.isLoading = false;
                    alert("파일 업로드를 실패했습니다.");
                });
        },
        goHomeView() {
            this.$router.push({ name: "home" });
        },
    },
};
</script>

<style scoped lang="scss">
.fileUpload-form__text {
    margin-top: 1rem;
    text-align: left;
}
</style>
