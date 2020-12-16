<template>
  <div class="roulette-game">
    <div class="game">
      <div class="game-left">
        <Wheel /> 
        <History />
      </div>
      <div class="game-center">
        <BettingTable />
        <GameControl /> 
      </div>
      <div class="game-right">
        <ChipField />
      </div>
    </div>
    <Summary />
  </div>
</template>

<script>
import Wheel from './components/Wheel'
import BettingTable from './components/BettingTable'
import History from './components/History'
import ChipField from './components/ChipField'
import GameControl from './components/GameControl'
import Summary from './components/Summary'

export default {
  name: 'App',
  components: {
    Wheel,
    BettingTable,
    History,
    ChipField,
    GameControl,
    Summary
  }
}
</script>
