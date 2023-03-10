<template>
    <div class="container mx-auto md:px-48">
        <div class="flex justify-between py-4">
            <div class="">
                <div class="font-medium flex items-center space-x-2 text-zinc-800 dark:text-white transition-all duration-300">
                    <span v-if="emoji == 1" class="text-2xl">😁</span>
                    <span v-else-if="emoji == 2" class="text-2xl">😎</span>
                    <span v-else-if="emoji == 3" class="text-2xl">🤔</span>
                    <span v-else-if="emoji == 4" class="text-2xl">😉</span>
                    <span v-else class="text-2xl">🤪</span>
                    <h1>Antony Ayansi</h1>
                </div>
            </div>
            <div class="">
                <ul class="flex space-x-4 font-medium cursor-default">
                    <li class="text-zinc-800 dark:text-zinc-100 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-300">Home</li>
                    <li class="text-zinc-800 dark:text-zinc-100 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-300">Projects</li>
                    <li class="text-zinc-800 dark:text-zinc-100 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-300">Contact</li>
                </ul>
            </div>
            <div class="flex space-x-2 items-center justify-center">
                <div>
                    <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox"  v-model="darkMode" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600">
                        
                    </div>
                    </label>
                </div>
                <div>
                    <a href="https://github.com/antonywyatt" target="_blank">
                        <button class="bg-black dark:bg-white dark:text-gray-900 text-white px-4 py-1 rounded-md font-medium transition-all duration-300">GitHub</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useIndex } from '~~/composables/useIndex';

const emoji = useState('emoji', () => 1)

const {
    darkMode,
    setMode
} = useIndex()

onMounted(() => {
    setInterval(function() {
        emoji.value++;
    if (emoji.value > 5) {
        emoji.value = 1;
    }
    }, 1000);
})
</script>