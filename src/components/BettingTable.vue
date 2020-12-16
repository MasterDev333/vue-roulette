<template>
  <div class="betting-table">
    <div class="betting-table__landscape">
      <img src="../assets/images/betting_table.png" alt="">
    </div>
    <div class="betting-table__portrait">
      <img src="../assets/images/betting_table_portrait.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BettingTable',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .betting-table__portrait {
    display: none;
  }
  @media screen and (max-width: 1080px) {
    .betting-table__landscape {
      display: none;
    }
    .betting-table__portrait {
      display: block;
    }
  }
</style>
