// useButtonDemo.js
import { ref, onUnmounted } from 'vue';

export function useButtonDemo() {
    let percent = ref(0);
    let loading = ref(false);
    let timer = null;

    function click() {
        loading.value = true;

        timer = setInterval(() => {
            percent.value += parseInt(Math.random() * 5 + 1);

            if (percent.value >= 100) {
                clearInterval(timer);
                loading.value = false;
                percent.value = 0;
            }
        }, 100);
    }

    onUnmounted(() => {
        if (timer) clearInterval(timer);
    });

    return {
        percent,
        loading,
        click,
    };
}