var app = new Vue(
  {
    el: '#root',
    data: {
      immagini: [
        "https://i.pinimg.com/originals/ac/06/97/ac06973185cd4fadb610946be716551c.jpg",
        "https://i.pinimg.com/originals/bc/e0/86/bce08609080aec878c01fa9bcabd9e49.jpg",
        "https://i.pinimg.com/originals/ae/57/16/ae5716879d01a56d0b976133d287d9f6.jpg",
        "https://i.pinimg.com/originals/c1/9f/2d/c19f2d8adce09046d86095ff30beb8da.jpg"
      ],
      imgIndex: 0
    },
    methods: {
      nextImg: function() {
        // this.imgIndex = (this.imgIndex == this.immagini.length) ? this.imgIndex = 0 : this.imgIndex++;
        this.imgIndex++;
        if (this.imgIndex == this.immagini.length) {
          this.imgIndex = 0;
        }
      },
      prevImg: function() {
        // this.imgIndex = (this.imgIndex < 0) ? this.immagini.length - 1 : this.imgIndex--;
        this.imgIndex--;
        if (this.imgIndex < 0) {
          this.imgIndex = this.immagini.length - 1;
        }
      }
    }
  }
);
