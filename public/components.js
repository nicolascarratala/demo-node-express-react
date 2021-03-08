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

            // alert(el.getAttribute('position').x);
            if(pos == 0){
              el.setAttribute('position', "-400 0 -200" );
            }
            if(pos == -400){
              el.setAttribute('position', "-800 0 -200" );           
            }
            if(pos == -800){
              el.setAttribute('position', "0 0 -200" );
            }
          });
        }
      });