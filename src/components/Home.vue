<template>
  <div class="home">
    <form action="#" class="join">
      <h1>Start Chatting</h1>
      <label for="room" class="label">Room ID</label>
      <input type="text" class="input" name="room" placeholder="contoh : abc">
      <label for="room" class="label">Your Name</label>
      <input type="text" class="input" name="name">
      <button type="submit" class="button button--primary">Join</button>
    </form>
  </div>
</template>

<script>
export default {
  
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
