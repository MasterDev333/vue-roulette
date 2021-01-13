<template>
  <div class="betting-table">
    <div class="betting-table__landscape">
      <div class="table-landscape">
        <div class="numbers">
          <div class="num green zero" v-bind:class="classBindHovering(0)">
            <span>0</span>
          </div>
          <div class="num red" v-bind:class="classBindHovering(3)">
            <span>3</span>
          </div>
          <div class="num black" v-bind:class="classBindHovering(6)">
            <span>6</span>
          </div>
          <div class="num red" v-bind:class="classBindHovering(9)">
            <span>9</span>
          </div>
          <div class="num black" v-bind:class="classBindHovering(12)">
            <span>12</span>
          </div>
          <div class="sector" data-sector="1"><span class="vt">2:1</span></div>
          <div class="num black" v-bind:class="classBindHovering(2)">
            <span>2</span>
          </div>
          <div class="num red" v-bind:class="classBindHovering(5)">
            <span>5</span>
          </div>
          <div class="num black" v-bind:class="classBindHovering(8)">
            <span>8</span>
          </div>
          <div class="num red" v-bind:class="classBindHovering(11)">
            <span>11</span>
          </div>
          <div class="sector" data-sector="2"><span class="vt">2:1</span></div>
          <div class="num red" v-bind:class="classBindHovering(1)">
            <span>1</span>
          </div>
          <div class="num black" v-bind:class="classBindHovering(4)">
            <span>4</span>
          </div>
          <div class="num red" v-bind:class="classBindHovering(7)">
            <span>7</span>
          </div>
          <div class="num black" v-bind:class="classBindHovering(10)">
            <span>10</span>
          </div>
          <div class="sector" data-sector="3"><span class="vt">2:1</span></div>
        </div>
        <div class="sectors">
          <div class="">
            <div class="sector" data-sector="4">1-6</div>
            <div class="sector" data-sector="5">4-9</div>
            <div class="sector" data-sector="6">7-12</div>
          </div>
          <div>
            <div class="sector num-type" data-sector="7">PARI</div>
            <div class="sector num-color" data-sector="8">
              <span class="red"></span>
            </div>
            <div class="sector num-color" data-sector="9">
              <span class="black"></span>
            </div>
            <div class="sector num-type" data-sector="10">DISPARI</div>
          </div>
        </div>
        <div class="controls">
          <CellButton
            :buttonData="buttonData[0]"
            :latestChip="getLatestChip(0)"
          />
          <div class="col1">
            <div class="row1">
              <CellButton
                :buttonData="buttonData[1]"
                :latestChip="getLatestChip(1)"
              />
              <CellButton
                :buttonData="buttonData[2]"
                :latestChip="getLatestChip(2)"
              />
            </div>
            <div class="row2">
              <CellButton
                :buttonData="buttonData[3]"
                :latestChip="getLatestChip(3)"
              />
              <CellButton
                :buttonData="buttonData[4]"
                :latestChip="getLatestChip(4)"
              />
              <CellButton
                :buttonData="buttonData[5]"
                :latestChip="getLatestChip(5)"
              />
              <CellButton
                :buttonData="buttonData[6]"
                :latestChip="getLatestChip(6)"
              />
            </div>
            <div class="row3">
              <CellButton
                :buttonData="buttonData[7]"
                :latestChip="getLatestChip(7)"
              />
              <CellButton
                :buttonData="buttonData[8]"
                :latestChip="getLatestChip(8)"
              />
              <CellButton
                :buttonData="buttonData[9]"
                :latestChip="getLatestChip(9)"
              />
              <CellButton
                :buttonData="buttonData[10]"
                :latestChip="getLatestChip(10)"
              />
            </div>
            <div class="row4">
              <CellButton
                :buttonData="buttonData[42]"
                :latestChip="getLatestChip(42)"
              />
            </div>
            <div class="row5">
              <CellButton
                :buttonData="buttonData[45]"
                :latestChip="getLatestChip(45)"
              />
            </div>
          </div>
          <div class="col2">
            <div class="row1">
              <CellButton
                :buttonData="buttonData[11]"
                :latestChip="getLatestChip(11)"
              />
              <CellButton
                :buttonData="buttonData[12]"
                :latestChip="getLatestChip(12)"
              />
              <CellButton
                :buttonData="buttonData[13]"
                :latestChip="getLatestChip(13)"
              />
            </div>
            <div class="row2">
              <CellButton
                :buttonData="buttonData[14]"
                :latestChip="getLatestChip(14)"
              />
              <CellButton
                :buttonData="buttonData[15]"
                :latestChip="getLatestChip(15)"
              />
              <CellButton
                :buttonData="buttonData[16]"
                :latestChip="getLatestChip(16)"
              />
              <CellButton
                :buttonData="buttonData[17]"
                :latestChip="getLatestChip(17)"
              />
            </div>
            <div class="row3">
              <CellButton
                :buttonData="buttonData[18]"
                :latestChip="getLatestChip(18)"
              />
              <CellButton
                :buttonData="buttonData[19]"
                :latestChip="getLatestChip(19)"
              />
              <CellButton
                :buttonData="buttonData[20]"
                :latestChip="getLatestChip(20)"
              />
              <CellButton
                :buttonData="buttonData[21]"
                :latestChip="getLatestChip(21)"
              />
            </div>
            <div class="row5">
              <CellButton
                :buttonData="buttonData[46]"
                :latestChip="getLatestChip(46)"
              />
            </div>
          </div>
          <div class="col3">
            <div class="row1">
              <CellButton
                :buttonData="buttonData[22]"
                :latestChip="getLatestChip(22)"
              />
              <CellButton
                :buttonData="buttonData[23]"
                :latestChip="getLatestChip(23)"
              />
            </div>
            <div class="row2">
              <CellButton
                :buttonData="buttonData[24]"
                :latestChip="getLatestChip(24)"
              />
              <CellButton
                :buttonData="buttonData[25]"
                :latestChip="getLatestChip(25)"
              />
              <CellButton
                :buttonData="buttonData[26]"
                :latestChip="getLatestChip(26)"
              />
              <CellButton
                :buttonData="buttonData[27]"
                :latestChip="getLatestChip(27)"
              />
            </div>
            <div class="row3">
              <CellButton
                :buttonData="buttonData[28]"
                :latestChip="getLatestChip(28)"
              />
              <CellButton
                :buttonData="buttonData[29]"
                :latestChip="getLatestChip(29)"
              />
              <CellButton
                :buttonData="buttonData[30]"
                :latestChip="getLatestChip(30)"
              />
              <CellButton
                :buttonData="buttonData[31]"
                :latestChip="getLatestChip(31)"
              />
            </div>
            <div class="row4">
              <CellButton
                :buttonData="buttonData[43]"
                :latestChip="getLatestChip(43)"
              />
            </div>
            <div class="row5">
              <CellButton
                :buttonData="buttonData[47]"
                :latestChip="getLatestChip(47)"
              />
            </div>
          </div>
          <div class="col4">
            <div class="row1">
              <CellButton
                :buttonData="buttonData[32]"
                :latestChip="getLatestChip(32)"
              />
              <CellButton
                :buttonData="buttonData[33]"
                :latestChip="getLatestChip(33)"
              />
            </div>
            <div class="row2">
              <CellButton
                :buttonData="buttonData[34]"
                :latestChip="getLatestChip(34)"
              />
              <CellButton
                :buttonData="buttonData[35]"
                :latestChip="getLatestChip(35)"
              />
              <CellButton
                :buttonData="buttonData[36]"
                :latestChip="getLatestChip(36)"
              />
              <CellButton
                :buttonData="buttonData[37]"
                :latestChip="getLatestChip(37)"
              />
            </div>
            <div class="row3">
              <CellButton
                :buttonData="buttonData[38]"
                :latestChip="getLatestChip(38)"
              />
              <CellButton
                :buttonData="buttonData[39]"
                :latestChip="getLatestChip(39)"
              />
              <CellButton
                :buttonData="buttonData[40]"
                :latestChip="getLatestChip(40)"
              />
              <CellButton
                :buttonData="buttonData[41]"
                :latestChip="getLatestChip(41)"
              />
            </div>
            <div class="row4">
              <CellButton
                :buttonData="buttonData[44]"
                :latestChip="getLatestChip(44)"
              />
            </div>
            <div class="row5">
              <CellButton
                :buttonData="buttonData[48]"
                :latestChip="getLatestChip(48)"
              />
            </div>
          </div>
          <div class="col5">
            <div class="row1">
              <CellButton
                :buttonData="buttonData[49]"
                :latestChip="getLatestChip(49)"
              />
            </div>
            <div class="row2">
              <CellButton
                :buttonData="buttonData[50]"
                :latestChip="getLatestChip(50)"
              />
            </div>
            <div class="row3">
              <CellButton
                :buttonData="buttonData[51]"
                :latestChip="getLatestChip(51)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="betting-table__portrait">
      <img src="../assets/images/betting_table_portrait.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CellButton from "../components/CellButton";

export default {
  name: "BettingTable",
  components: {
    CellButton,
  },
  data() {
    return {
      hoverNumbers: [], // current hovering cell
      buttonData: [
        { id: 0, cells: [0], buttonType: "btn-zero" },
        { id: 1, cells: [0, 3], buttonType: "vertical" },
        { id: 2, cells: [3], buttonType: "self" },
        { id: 3, cells: [0, 2, 3], buttonType: "center" },
        { id: 4, cells: [0, 2], buttonType: "vertical" },
        { id: 5, cells: [2, 3], buttonType: "horizontal" },
        { id: 6, cells: [2], buttonType: "self" },
        { id: 7, cells: [0, 1, 2], buttonType: "center" },
        { id: 8, cells: [0, 1], buttonType: "vertical" },
        { id: 9, cells: [1, 2], buttonType: "horizontal" },
        { id: 10, cells: [1], buttonType: "self" },
        { id: 11, cells: [3, 6], buttonType: "center" },
        { id: 12, cells: [3, 6], buttonType: "vertical" },
        { id: 13, cells: [6], buttonType: "self" },
        { id: 14, cells: [2, 3, 5, 6], buttonType: "center" },
        { id: 15, cells: [2, 5], buttonType: "vertical" },
        { id: 16, cells: [5, 6], buttonType: "horizontal" },
        { id: 17, cells: [5], buttonType: "self" },
        { id: 18, cells: [1, 2, 4, 5], buttonType: "center" },
        { id: 19, cells: [1, 4], buttonType: "vertical" },
        { id: 20, cells: [4, 5], buttonType: "horizontal" },
        { id: 21, cells: [4], buttonType: "self" },
        { id: 22, cells: [6, 9], buttonType: "vertical" },
        { id: 23, cells: [9], buttonType: "self" },
        { id: 24, cells: [5, 6, 8, 9], buttonType: "center" },
        { id: 25, cells: [5, 8], buttonType: "vertical" },
        { id: 26, cells: [8, 9], buttonType: "horizontal" },
        { id: 27, cells: [8], buttonType: "self" },
        { id: 28, cells: [4, 5, 7, 8], buttonType: "center" },
        { id: 29, cells: [4, 7], buttonType: "vertical" },
        { id: 30, cells: [7, 8], buttonType: "horizontal" },
        { id: 31, cells: [7], buttonType: "self" },
        { id: 32, cells: [9, 12], buttonType: "vertical" },
        { id: 33, cells: [12], buttonType: "self" },
        { id: 34, cells: [8, 9, 12, 11], buttonType: "center" },
        { id: 35, cells: [8, 11], buttonType: "vertical" },
        { id: 36, cells: [12, 11], buttonType: "horizontal" },
        { id: 37, cells: [11], buttonType: "self" },
        { id: 38, cells: [7, 8, 10, 11], buttonType: "center" },
        { id: 39, cells: [7, 10], buttonType: "vertical" },
        { id: 40, cells: [10, 11], buttonType: "horizontal" },
        { id: 41, cells: [10], buttonType: "self" },
        // bottom sectors
        { id: 42, cells: [1, 2, 3, 4, 5, 6], buttonType: "self" },
        { id: 43, cells: [4, 5, 6, 7, 8, 9], buttonType: "self" },
        { id: 44, cells: [7, 8, 9, 10, 12, 11], buttonType: "self" },
        { id: 45, cells: [2, 4, 6, 8, 10, 12], buttonType: "self" },
        { id: 46, cells: [1, 3, 5, 7, 9, 11], buttonType: "self" },
        { id: 47, cells: [2, 4, 6, 8, 10, 12], buttonType: "self" },
        { id: 48, cells: [1, 3, 5, 7, 9, 11], buttonType: "self" },

        // right sectors
        { id: 49, cells: [3, 6, 9, 12], buttonType: "self" },
        { id: 50, cells: [2, 5, 8, 11], buttonType: "self" },
        { id: 51, cells: [1, 4, 7, 10], buttonType: "self" },
      ], // chips for id: 0, cells
    };
  },
  computed: {
    ...mapState(["drag", "placedChips"]),
  },
  methods: {
    enterCell: function(numbers) {
      this.hoverNumbers = numbers;
    },
    leaveCell: function() {
      this.hoverNumbers = [];
    },
    clickCell: function(id, price) {
      this.$store.dispatch("placeChip", {
        place: id,
        price,
      });
    },
    classBindHovering: function(number) {
      return {
        "hover-number": this.isHovering(number),
      };
    },
    isHovering: function(number) {
      return (
        this.drag && this.hoverNumbers && this.hoverNumbers.includes(number)
      );
    },
    getLatestChip: function(placeToSearch) {
      const chips = this.placedChips.filter(
        (chipData) => chipData.place === placeToSearch
      );
      const isLastPlaced =
        this.placedChips[this.placedChips.length - 1] &&
        this.placedChips[this.placedChips.length - 1].place === placeToSearch;
      return {
        price: chips && chips.length ? chips[chips.length - 1].price : null,
        isLastPlaced,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.betting-table {
  position: relative;
  img {
    opacity: 0.2;
  }
  &__portrait {
    display: none;
  }
  .controls {
    .btn {
      position: absolute;
      display: flex;
      place-content: center;
      align-items: center;
    }
    .btn-zero {
      top: 0;
      left: 0;
      width: 5.5vw;
      height: 19.1vw;
    }
    .col1 .btn {
      left: 5.5vw;
    }
    .col2 .btn {
      left: 11.75vw;
    }
    .col3 {
      .btn {
        left: 18vw;
      }
      .row4 .btn {
        left: 14vw;
      }
    }
    .col4 {
      .btn {
        left: 24.25vw;
      }
      .row4 .btn {
        left: 22.3vw;
      }
    }
    .col5 {
      .btn {
        left: 30.5vw;
      }
      .self {
        width: 4.2vw;
      }
    }
    .row1 .btn {
      top: 0;
    }
    .row2 .btn {
      top: 6.3vw;
    }
    .row3 .btn {
      top: 12.6vw;
    }
    .row4 .btn {
      top: 18.9vw;
      width: calc(calc(100% - 9.7vw) / 3);
      height: 4.4vw;
    }
    .row5 .btn {
      top: 23.6vw;
      width: calc(calc(100% - 9.7vw) / 4);
      height: 4.4vw;
    }
  }
}

.table-landscape {
  width: 100%;
  height: 100%;
  .green {
    background-color: #199e20;
  }
  .red {
    background-color: #a1050d;
  }
  .black {
    background-color: #000;
  }
  .numbers {
    display: grid;
    width: 100%;
    grid-template-columns: 5.5vw repeat(4, 1fr) 4.2vw;
    border: 2px solid white;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 4vw;
    .num,
    .sector {
      display: flex;
      height: 6.3vw;
      align-items: center;
      border: 1px solid white;
      color: white;
      font-size: 3vw;
      justify-content: center;
    }
    .zero {
      border: none;
      border-right: 2px solid white;
      height: 100%;
      grid-row-start: 1;
      grid-row-end: 4;
    }
    .sector {
      border-right-width: 0;
      font-size: 2.5vw;
      span {
        transform: rotate(270deg);
      }
    }
    .hover-number {
      background-color: #4cbf77;
    }
  }
  .sectors {
    width: calc(100% - 9.7vw);
    margin-left: 5.5vw;
    border: 2px solid white;
    border-top: 0;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
    > div {
      display: flex;
      width: 100%;
    }
    .sector {
      display: flex;
      flex: 1 0;
      height: 4.4vw;
      align-items: center;
      border: 1px solid white;
      font-size: 2vw;
      color: white;
      justify-content: center;
      &.num-type {
        font-size: 1.3vw;
      }
      &.num-color {
        overflow: hidden;
        span {
          // width: 3vw;
          // height: 3vw;
          // transform: rotate(45deg);
          height: 100%;
          -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          width: 100%;
        }
      }
    }
  }
}
@media screen and (max-width: 1080px) {
  .betting-table__landscape {
    display: none;
  }
  .betting-table__portrait {
    display: block;
  }
  .numbers {
    margin-top: 0;
  }
}
</style>
