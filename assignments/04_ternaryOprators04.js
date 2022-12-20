var compare = function (value) {
    var comp = value ? true : false;
    console.log(`Comparison of ${value}`, comp);

//   var comp = value1 == value2 ? true : false;
//   console.log(`Comparison of ${value1} == ${value2} `, comp);


}
compare(`(0=='') :`, 0, "");
compare(`(0=='0') :`, 0 == "0");
compare(`(0==false) :`, 0 == false);
compare(`(null==undefined) :`, null == undefined);
compare(`(1==[1]) :`, 1 == [1]);
compare(`(1==true) :`, 1 == true);
compare(`(1=='1') :`, 1 == "1");
