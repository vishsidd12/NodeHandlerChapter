exports.home = function(req,res){
    res.render('home',{
          title: 'iLoveMyCity',
          heading: 'We believe every city has something to say'
        });
    }

exports.city = function(req,res){
    var cityname = req.params.city;
    var title,heading;
    var imagecount=[1,2,3,4];
    if(cityname==='berlin'){
      title="Berlin";
      heading="Berlin : where love is in the air";
    }else if(cityname==='paris'){
      title="Paris";
      heading="Paris : Good talkers are only found in Paris";
    }else if(cityname==='madrid'){
      title="Madrid";
      heading="Madrid : Buzz, beautiful architecture and football";
    }else if(cityname==='london'){
      title="London";
      heading="London : Sparkling ,Still, Food, Gorgeous";
    }else if(cityname==='newyork'){
      title="New York";
      heading="New York : Come to NewYork to become someone new";
      imagecount.push(5);
      imagecount.push(6);
    }

    res.render('city',{
      title:title,
      heading:heading,
      city:cityname,
      imagec:imagecount
    });

}