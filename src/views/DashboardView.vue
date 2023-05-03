<template>
    <div class="w-screen h-screen flex">
        <div class="w-[400px] h-full bg-gray-200 text-white">
            <div class="h-[50px] bg-gray-900 justify-start items-center">
                <div class="px-[20px]">
                    <RouterLink to="/" class="inline-flex relative items-center px-[10px] w-full">
                        <h3 class="font-bold text-xl">Runic Arena</h3>
                    </RouterLink>
                </div>
            </div>
            <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
                <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
                    <div class="flex flex-col justify-between space-y-[10px]">

                        <RouterLink to="/cards"
                            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-900">
                            <font-awesome-icon icon="fa-solid fa-book" class="mr-2 w-[25px] h-[25px] fill-current" />
                            Cards
                        </RouterLink>
                        <RouterLink to="/types"
                            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-900">
                            <font-awesome-icon icon="fa-solid fa-tornado" class="mr-2 w-[25px] h-[25px] fill-current" />
                            Types
                        </RouterLink>
                        <RouterLink to="/classes"
                            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-900">
                            <font-awesome-icon icon="fa-solid fa-user" class="mr-2 w-[25px] h-[25px] fill-current" />
                            Classes
                        </RouterLink>


                    </div>
                    <div class="h-[50px]">
                        <div class="">
                            <RouterLink to="/exit"
                                class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-900">
                                <font-awesome-icon icon="fa-solid fa-right-from-bracket"
                                    class="mr-2 w-[25px] h-[25px] fill-current" />
                                Exit
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-full bg-gray-400">
            <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b">
                Header Sidebar
            </div>
            <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
                <div class="border border-gray-300  rounded-md p-[20px] h-full">
                    <RouterView/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>

