const { createApp } = Vue

createApp({
  data() {
    return {
      input: '',
      colorTheme: 'dark',
      buttons: [
        '1','2','3','4','5','6','7','8','9','0','+','-','/','*','.'
      ],
    }
  },
  methods: {
    add(item) {
      this.input += item
    },
    getResult() {
      try {
        result = eval(this.input)
        this.input = eval(this.input)
      } catch {
        alert('Error')
      }
    },
    clean() {
      this.input = ''
    },
    changeTheme() {
      if(this.colorTheme == 'dark') {
        this.colorTheme = 'light'
      } else {
        this.colorTheme = 'dark'
      }
    }
  }
}).mount('#app')