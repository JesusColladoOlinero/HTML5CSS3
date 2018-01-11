var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(e){     

      var dataURL = e.target.result,
        c = document.querySelector('canvas'), // see Example 4
        ctx = c.getContext('2d'),
        img = new Image();

      img.onload = function() {
        c.width = img.width;
        c.height = img.height;
        ctx.drawImage(img, 0, 0);
      };

      img.src = dataURL;
    };
    reader.readAsDataURL(event.target.files[0]);
  };