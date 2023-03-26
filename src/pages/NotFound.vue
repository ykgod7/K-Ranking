<template>
    <div class="container">
        <p>페이지를 찾을 수 없습니다!!</p>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        @include korContentFont();
        @include centerElement;
        position: relative;
        width: 100vw;
        height: 100vh;  
        background: $mainColor;
        color: white;
        font-size: 70px;
        font-weight: bold;
        background-image: url('@/assets/images/404_error.jpg');
        background-repeat: no-repeat;
        background-size: cover;

        p {
            position: absolute;
            top: 60%;
            left: 30%;
            transform: translate(-50%, -50%);
        }
    }
</style>