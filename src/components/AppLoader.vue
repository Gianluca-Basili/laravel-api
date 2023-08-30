<script>
export default {
    name:'AppLoader'
}
</script>
<template lang="">
    <div>
        <div class="loader"></div>
    </div>
</template>
<style lang="scss">
    .loader{
        border: 16px solid white;
        border-top: 16px solid blue;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s Linear infinite;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @keyframes spin{
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
</style>