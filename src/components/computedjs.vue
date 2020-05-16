<template>
  <div id="test">
    <h2>computed 学习</h2>
    <p>原始字符串: {{ msg }}</p>
     <p><input v-model="msggit " ></p>
    <p>计算后反转字符串: {{ reversedMessage }}</p>
  </div>
</template>
<script>
export default {
  name: "computed demo",
  props: {
    msg: String
  },
  data: function() {
    return {
      name: "ddddd"
    };
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 vm 实例
      return this.msg
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>