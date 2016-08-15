/**
 * Created by Xue on 16-5-25.
 */
/**
 * Created by Xue on 16-4-27.
 */

//JavaScript学习指南 p82  Date对象
function clock(){
    var date=new Date();
    var year=date.getFullYear();
    var mouth=date.getMonth();
    mouth=mouth+1;
    var day=date.getDate();
    var weekday=date.getDay();
    var week=checkWeek(weekday);
    var h=date.getHours();
    var m=date.getMinutes();
    m=checkTime(m);
    var s=date.getSeconds();
    s=checkTime(s);
    //document.getElementById("time_display").innerHTML=h+":"+m+":"+s+" "+mouth+"/"+day+"/"+year+" "+week;
    document.getElementById("hour_de").innerHTML=Math.floor(h/10).toString();
    document.getElementById("hour_unit").innerHTML=(h-Math.floor(h/10)*10).toString();
    document.getElementById("colon1").innerHTML=":";
    document.getElementById("minute_de").innerHTML=Math.floor(m/10).toString();
    document.getElementById("minute_unit").innerHTML=(m-Math.floor(m/10)*10).toString();
    document.getElementById("colon2").innerHTML=":";
    document.getElementById("second_de").innerHTML=Math.floor(s/10).toString();
    document.getElementById("second_unit").innerHTML=(s-Math.floor(s/10)*10).toString();
    document.getElementById("week").innerHTML=week+" "+mouth+"/"+day+"/"+year;

    setTimeout("clock()",1000);
}

function checkTime(i){
    if(i<10)  i="0"+i;
    return i;
}

function checkWeek(j){
    var chinaWeekday;
    switch (j){
        case 1:chinaWeekday='Monday';break;
        case 2:chinaWeekday='Tuesday';break;
        case 3:chinaWeekday='Wednesday';break;
        case 4:chinaWeekday='Thursday';break;
        case 5:chinaWeekday='Friday';break;
        case 6:chinaWeekday='Saturday';break;
        case 0:chinaWeekday='Sunday';break;

    }
    return chinaWeekday;
}

