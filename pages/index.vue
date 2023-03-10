<template>
    <div class="my-10 flex flex-wrap items-center">
        <div class="space-y-6 w-full md:w-1/2">
            <h1 class="text-5xl font-extrabold dark:text-white transition-all duration-300">
                Antony Ayansi
            </h1>
            <p class="text-gray-700 dark:text-gray-400  transition-all duration-300">
                Hello! 🖐 My name is Antony Ayansi and I'm a JavaScript programmer with experience in frontend and backend. I'm passionate about creating innovative and efficient technological solutions that meet the needs of my clients.
            </p>
            <button class="px-4 py-2 rounded-md bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-700 hover:bg-teal-600 hover:shadow-md hover:shadow-teal-100 dark:hover:shadow-md dark:hover:shadow-teal-900 font-medium text-white transition-all duration-300">Download CV</button>
        </div>
        <div class="w-full md:w-1/2 flex justify-center">
            <img src="~/assets/img/antony.png"/>
        </div>
    </div>
    <div class="my-10">
        <div class="border-l-4 dark:border-gray-700 dark:text-white font-semibold px-2 transition-all duration-300">
            <h1>Projects</h1>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 my-4">
            <div class="bg-white dark:bg-gray-800 rounded-md border dark:border-gray-700 hover:-translate-y-2 transition-all duration-300">
                <img src="~/assets/img/1.jpg" alt="" class="rounded-t-md">
                <div class="p-2">
                    <h1 class="font-semibold dark:text-white transition-all duration-300">ERP SIADEG</h1>
                    <div class="flex overflow-x-auto space-x-2">
                        <h1 class="text-green-500 dark:text-green-400 transition-all duration-300">Vue3</h1>
                        <h1 class="text-teal-600 dark:text-teal-300 transition-all duration-300">Tailwidcss</h1>
                        <h1 class="text-rose-600 dark:text-red-400 transition-all duration-300">Laravel 9</h1>
                    </div>
                </div>
            </div>
            <div class="bg-white  dark:bg-gray-800 rounded-md border dark:border-gray-700 hover:-translate-y-2 transition-all duration-300">
                <img src="~/assets/img/2.jpg" alt="" class="rounded-t-md">
                <div class="p-2">
                    <h1 class="font-semibold dark:text-white transition-all duration-300">Chat Realtime</h1>
                    <div class="flex overflow-x-auto space-x-2">
                        <h1 class="text-green-500 dark:text-green-400 transition-all duration-300">Vue3</h1>
                        <h1 class="text-yellow-500 dark:text-yellow-400 transition-all duration-300">Pinia</h1>
                        <h1 class="text-lime-500 dark:text-lime-400 transition-all duration-300">Supabase</h1>
                    </div>
                </div>
            </div>
            <div class="bg-white  dark:bg-gray-800 rounded-md border dark:border-gray-700 hover:-translate-y-2 transition-all duration-300">
                <img src="~/assets/img/3.jpg" alt="" class="rounded-t-md">
                <div class="p-2">
                    <h1 class="font-semibold dark:text-white transition-all duration-300">E-commerce</h1>
                    <div class="flex overflow-x-auto space-x-2">
                        <h1 class="text-green-500 dark:text-green-400 transition-all duration-300">Nuxt3</h1>
                        <h1 class="text-blue-500 dark:text-blue-400 transition-all duration-300">Vuex</h1>
                        <h1 class="text-yellow-500 dark:text-yellow-400 transition-all duration-300">Firebase</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center my-8">
            <a href="https://github.com/antonywyatt?tab=repositories" target="_blank">
                <button class="bg-black dark:bg-white dark:text-gray-900 text-white px-4 py-1 rounded-md">More Projects</button>
            </a>
        </div>
    </div>
    <div class="my-10">

    </div>
</template>

<script setup>

</script>