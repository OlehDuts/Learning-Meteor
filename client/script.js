Template.Images.helpers({
  images: function (limit) {
   var array = [];
    for (var i = 0; i < limit; i++) {
      array.push({
        _id: i + 1,
        src: 'img/RC_' + _.random(1,6)+ '.jpg',
        title: 'car #' + (i + 1)
        });
    } 
    return array;
  },
  im: "http://lorempixel.com/100/100"

});
