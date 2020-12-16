<template>
  <div class="history">
    <div class="history-items"> 
      <div class="history-item"><span class="history-item__value text-light_green">0</span></div>
      <div class="history-item"><span class="history-item__value text-gray">2</span></div>
      <div class="history-item"><span class="history-item__value text-red">8</span></div>
      <div class="history-item"><span class="history-item__value text-red">1</span></div>
      <div class="history-item"><span class="history-item__value"></span></div>
      <div class="history-item"><span class="history-item__value"></span></div>
      <div class="history-item"><span class="history-item__value"></span></div>
      <div class="history-item"><span class="history-item__value"></span></div>
      <div class="history-item"><span class="history-item__value"></span></div>
      <div class="history-item"><span class="history-item__value"></span></div>
      <div class="history-item"><span class="history-item__value"></span></div>
      <div class="history-item"><span class="history-item__value"></span></div>
    </div>
    <div class="history-tooltip">
      <p class="history-min">MIN €<span class="history-min__value">0.10</span></p>
      <p class="history-max">MAX €<span class="history-max__value">100</span></p>
      <p class="history-max-table">MAX TAVOLO €<span class="history-max-table__vale">1000</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .history {
    display: flex;
    margin-top: 20px;
    align-items: center;
  }
  .history-items {
    display: flex;
    flex-wrap: wrap;
    max-width: clamp(300px, 24.7vw, 475px);
    gap: 2px;
  }
  .history-item {
    display: flex;
    padding: 5px;
    width: clamp(40px, 3.6vw, 70px);
    height: clamp(40px, 3.6vw, 70px);
    align-items: center;
    background-color: var(--green-color);
    border-radius: 50%;
    font-size: clamp(20px, 2vw, 40px);
    text-align: center;
    justify-content: center;
  }
    .history-item:nth-child(7) {
      margin-left: clamp(10px, 1.5vw, 30px);
    }
  .history-tooltip {
    margin-left: clamp(10px, 1.5vw, 30px);
    color: white;
    font-size: clamp(16px, 1vw, 20px);
  }
    .history-tooltip p {
      margin: 0;
      line-height: 1.5;
    }

  @media screen and (max-width: 1080px) {
    .history {
      position: absolute;
      left: 9.2vw;
      flex-wrap: wrap;
    }
    .history-items {
      width: 100%;
      height: 100%;
      max-width: 14vw;
      max-height: 47vw;
      flex-direction: column;
    }
    .history-item {
      width: 6.9vw;
      height: 6.9vw;
      font-size: clamp(20px, 3.2vw, 35px);
    }
    .history-item:nth-child(7) {
      margin-left: 0;
      margin-top: 3.2vw;
    }
    .history-tooltip {
      margin-top: 1.8vw;
      margin-left: 0;
    }
  }
</style>
