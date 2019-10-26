<template>
    <u class="controls">
        <li class="controls__item">
            <a href="" class="controls__link" v-if="state.muted" @click.prevent="unmute">
                Unmute me
            </a>
            <a href="" class="controls__link" v-else @click.prevent="mute">
                Mute me
            </a>
        </li>
        <li class="controls__item">
            <a href="" class="controls__link">Pause Video</a>
        </li>
    </u>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    computed:{
        ...mapGetters({
            state:'getState'
        })
    },
    methods:{
        ...mapMutations({
            setMuted:'setMuted'
        }),
        mute(){
            window.webrtc.mute()
            this.setMuted(true)
        },
        unmute(){
            window.webrtc.unmute()
            this.setMuted(false)
        }
    }
}
</script>

<style lang="scss" scoped>
.controls{
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    background-color: #2b9cf2;
    margin:0;
    padding:0;
    list-style: none;

    &__item{
        flex:1;
        font-weight: 600;
        border-right: 1px solid #0e83dc;
    }

    &__link{
        display: block;
        color: #fff;
        text-decoration: none;
        padding: 15px 18px;
        height: 100%;
        width: 100%;
        text-align: center;

        &:hover{
            background-color: #0e83dc;
        }
    }
}
</style>