<template>
    <div :class="{'dark' : darkMode}">
        <div class="bg-white h-screen overflow-y-auto dark:bg-gray-900 transition-all duration-300">
            <div class="backdrop-blur-md sticky top-0">
                <Header />
            </div>
            <div 
                class="cotainer mx-auto md:px-48 overflow-y-auto">
                    <slot />
            </div>
                <Footer />
        </div>
    </div>
</template>

<script setup>
import { useIndex } from '~/composables/useIndex'

const {
    darkMode
} = useIndex()
</script>