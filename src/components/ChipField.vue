<template>
  <div class="chipfield">
    <button class="chip"><img src="../assets/images/0,01_chip.png" alt="0,01"></button>
    <button class="chip"><img src="../assets/images/0,1_chip.png" alt="0,1"></button>
    <button class="chip"><img src="../assets/images/0,5_chip.png" alt="0,5"></button>
    <button class="chip"><img src="../assets/images/1_chip.png" alt="1"></button>
    <button class="chip"><img src="../assets/images/5_chip.png" alt="5"></button>
    <button class="chip"><img src="../assets/images/10_chip.png" alt="10"></button>
    <button class="chip"><img src="../assets/images/25_chip.png" alt="25"></button>
    <button class="chip"><img src="../assets/images/50_chip.png" alt="50"></button>
    <button class="chip"><img src="../assets/images/100_chip.png" alt="100"></button>
  </div>
</template>

<script>
export default {
  name: 'ChipField',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chipfield {
  padding: 20px;
  max-width: 140px;
  background-color: #104703;
  border-radius: 20px;
}
.chip {
  padding: 0;
  margin-bottom: 10px;
}

@media screen and (max-width: 1080px) {
  .chipfield {
    padding: 10px;
  }
}
</style>
