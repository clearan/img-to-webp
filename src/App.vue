<template>
  <div id="app">
<!--    <div class="container">-->
<!--      <div class="box" v-for="item of imageData" :key="item.id">-->
<!--        <div class="img-box">-->
<!--&lt;!&ndash;          <img v-lazy="item.src" :alt="item.title">&ndash;&gt;-->
<!--          <img :src="item.src" :alt="item.title">-->
<!--        </div>-->
<!--        <div class="content-box">-->
<!--          <h1>{{item.title}}</h1>-->
<!--          <p>{{item.teacher}}</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <img v-webp src="./assets/1.jpg" alt="" style="width: 350px;height: 200px">
    <img v-webp src="./assets/2.jpg" alt="" style="width: 350px;height: 200px">
    <router-view></router-view>

  </div>
</template>

<script>
// import axios from 'axios';

// Vue.directive('cq', {
//   bind(el, bindings, vnode) {
//
//   }
// });

// const cq = {
//   // bind(el, bindings, vnode) {
//   // }
//   install(Vue, options) {
//     Vue.directive('cq', {
//       bind(el, bindings, vnode) {
//
//       }
//     })
//   }
// }
export default {
  name: 'App',
  directives: {
    // cq,
  },
  data() {
    return {
      imageData: [],
    }
  },
  watch: {
    imageData(val) {
      console.log(val);
    },
  },
  created() {
    console.log('created');
  },
  async mounted() {
    console.log('mounted')
    // const res = await axios.get('http://localhost:3000/getDataList');
    // this.imageData = res.data;
  }
}
</script>
<style lang="scss">
html,
body,
#app {
  margin: 0;
  .container {
    overflow: auto;
    .box {
      display: flex;
      padding: 5px 5px;
      box-sizing: border-box;
      border-bottom: 1px solid #ededed;
      .img-box {
       flex: 1;
        img {
          width: 100%;
        }
      }
      .content-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 180px;
       h1 {
         font-size: 16px;
       }
        p {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
}
</style>

