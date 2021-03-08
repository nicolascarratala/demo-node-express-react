/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


    AFRAME.registerComponent('navigate-on-click', {
        schema: {
          url: {
            default: ''
          }
        },
        init: function () {
          console.log("hello")
          console.log(this.el)
          var data = this.data;
          var el = this.el;
          el.addEventListener('click', function () {
            //window.location.href = data.url;
            window.open(data.url, '_blank');
          });
        }
      });
      
      AFRAME.registerComponent('color-randomizer', {
        init: function () {
          let colors = ["red", "green", "blue", "black", "orange", "white"]
          var el = this.el;
          el.addEventListener('click', (e) => {     
            this.el.setAttribute('color', colors[Math.floor(Math.random() * colors.length)])
          });
        }
      });

     

      AFRAME.registerComponent('image-change', {
        init: function () {
          var el = this.el;
          el.addEventListener('click', (e) => { 
            
            var pos = el.getAttribute('position').x;

            // a
            if(pos == 0){
              el.setAttribute('position', "-400 0 -200" );
            }
            // b
            if(pos == -400){
              el.setAttribute('position', "-800 0 -200" );           
            }
            // c
            if(pos == -800){
              el.setAttribute('position', "-1200 0 -200" );
            }
            // d
            if(pos == -1200){
              el.setAttribute('position', "-1600 0 -200" );
            }
            // e
            if(pos == -1600){
              el.setAttribute('position', "-2000 0 -200" );
            }
            // f
            if(pos == -2000){
              el.setAttribute('position', "-2400 0 -200" );
            }
            // g
            if(pos == -2400){
              el.setAttribute('position', "-2800 0 -200" );
            }
            // h
            if(pos == -2800){
              el.setAttribute('position', "-3200 0 -200" );
            }
            // i
            if(pos == -3200){
              el.setAttribute('position', "-3600 0 -200" );
            }
            // j
            if(pos == -3600){
              el.setAttribute('position', "0 0 -200" );
            }
          });
        }
      });