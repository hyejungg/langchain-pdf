/**
 * JSX-style 의 typescript 코드를 작성하기 위해 jsx 구문 자원 화성화 시 사용하는 파일
 */

import Vue, { VNode } from "vue";

declare global {
    namespace JSX {
        interface Element extends VNode {}
        interface ElementClass extends Vue {}
        interface IntrinsicElements {
            [elem: string]: any;
        }
    }
}
