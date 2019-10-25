<template>
  <div class="home">
    <form action="#" class="join" @submit.prevent="join">
      <h1>Start Chatting</h1>
      <label for="room" class="label">Room ID</label>
      <input type="text" class="input" name="room" placeholder="contoh : abc" v-model.trim="room">
      <label for="room" class="label">Your Name</label>
      <input type="text" class="input" name="name" v-model.trim="name">
      <button type="submit" class="button button--primary">Join</button>
    </form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import uuid from 'uuid/v4'
import SimpleWebRTC from 'simplewebrtc'

export default {
  data(){
    return{
      room: this.$route.query.room || uuid(),
      name: null
    }
  },
  methods:{
    ...mapMutations({
      setName: 'setName'
    }),
    join(){
      this.setName(this.name)
      window.webrtc = new SimpleWebRTC({
        localVideoEl: '',
        remoteVideosEl: '',
        autoRequestMedia: true,
        nick: this.name
      })
      this.$router.push({name: 'room', params: {room: this.room}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

}
.join{
  width: 100%;
  max-width: 400px;
}
</style>
