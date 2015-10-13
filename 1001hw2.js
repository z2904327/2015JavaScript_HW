var log = console.log;

var dic = { "狗":"dog", "貓":"cat", "一隻":"a", "追":"chase", "吃":"eat" };

function mt(argv2) {
  if(typeof argv2 !== "undefined"){
  var array = [];
  for (var i=0; i<argv2.length;) {// i=i+Math.max(1,len);
    for (var len=4; len>0; len--) {
      var str = argv2.substr(i, len);//取出 from 長 len 的子字串
      var toWord = dic[str];
      if (typeof toWord !== "undefined") {//typeof用來顯示此值型態
        array.push(toWord);
        break;
      }
    }
    i=i+Math.max(1,len);//要配合len
  }
  return array;
}
else{
return "請輸入要查詢的中文";
}
}

var a = mt(process.argv[2]);
log(a);
