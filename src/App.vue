<script>

</script>

<template>
    <div class="flex flex-row">
        <nav>
            <div class="w-2/3 h-screen bg-gray-100">
                <ul class="py-4 ">
                    <li class="px-4 py-2 border-b border-gray-200">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li class="px-4 py-2 border-b border-gray-200">
                        <RouterLink to="/cards"><font-awesome-icon icon="fa-solid fa-book" /> Cards</RouterLink>
                    </li>
                    <li class="px-4 py-2 border-b border-gray-200">
                        <RouterLink to="/types"> <font-awesome-icon icon="fa-solid fa-tornado" /> Types</RouterLink>
                    </li>
                    <li class="px-4 py-2 border-b border-gray-200">
                        <RouterLink to="/classes"><font-awesome-icon icon="fa-solid fa-user" /> Classes</RouterLink>
                    </li>
                </ul>
            </div>
    </nav>
    <RouterView />
</div></template>

<style scoped></style>
