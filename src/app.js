import Vue from 'vue';
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      object:{},
      selectedCurrency:0,
      convertTo:0,
      currencyToEuros:0
    },
    mounted(){
      this.getcurrency()
    },
    computed: {
      exchange: function() {
        return (this.selectedCurrency * this.convertTo).toFixed(2);
      },
      euros: function(){
        return (this.currencyToEuros / this.convertTo).toFixed(2);
      }
    },
    methods:{
      getcurrency: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(object => this.object = object)
      }
    }
  }
)
});












// index



// import Vue from 'vue';
// document.addEventListener("DOMContentLoaded", () => {
//   new Vue({
//     el: "#app",
//     data: {
//       object:[],
//       currencies: null,
//       amount: 0,
//       selectedCurrency: 0,
//       ConvertTo: 0,
//     },
//     mounted(){
//       this.fetchCurrencies();
//     },
//     methods: {
//       fetchCurrencies: function() {
//         fetch("https://api.exchangeratesapi.io/latest")
//         .then(response => response.json())
//         .then(object => this.object = object)
//       }
//     },
//
//
//   })
// });
