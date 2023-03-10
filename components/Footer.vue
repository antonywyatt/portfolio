<template>
    <div class="w-full my-10 text-center text-gray-600 dark:text-gray-500">
        <p>&copy; Designed & Built by Antony Ayansi</p>
        <p>{{ anio.getFullYear() }}</p>
        <div>

        </div>
    </div>
</template>

<script setup>

    const anio = useState('anio', () => new Date())

</script>