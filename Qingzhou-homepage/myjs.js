//显示时间
function show_time() {

    var date = new Date();
    var year = date.getFullYear();
    var month = date .getMonth() + 1; //月份是0-11
    var day = date.getDate();
    var week = date.getDay(); //星期是0-6
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var week_change=["日","一","二","三","四","五","六"]; //星期转换

    return year+"年"+month+"月"+day+"日"+" "+"星期"+week_change[week]+" "+double_time(hour)+":"+double_time(min)+":"+double_time(sec);

}

//时分秒以两位数进行显示
function double_time(num) {
    if(num<10){
        return "0"+num;
    }else{
        return num;
    }
}

