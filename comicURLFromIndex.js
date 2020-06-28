//var temp1=Array.from(document.getElementsByName("comic")[0].children, x=>x.innerText=="Select a comic..."||new Date(x.innerText.split(" -")[0]).toISOString().split("T")[0])
//running the previous line on egscomics.com/comic/archvie will give actual master list of comic dates (works in my timezone)
function everyDay(index,offset) {return Date.UTC(2002,0,index+offset)}
function everyDayExceptSun(index,inWeekShift,offset) {return Date.UTC(2002,0,offset+(Math.floor((index-inWeekShift)/6)*7)+((index-inWeekShift)%6))}
function MonWedFri(index,inWeekShift,offset) {return Date.UTC(2001,4,offset+(2*((index-inWeekShift)%3)+(7*Math.floor((index-inWeekShift)/3))))}

function comicURL(index) {
return "https://egscomics.com?date="+new Date(

index<162?everyDay(index,20):
index<171?everyDay(index,24):
index<193?everyDayExceptSun(index,3,0):
index<208?MonWedFri(index,1,21): //breaks on comic 208
null

).toISOString().split("T")[0]
}

//for (var i=1;i<temp1.length;i++) {if (comicURL(i)!="https://egscomics.com?date="+temp1[i]) break;} i;
//above code checks at which comic comicURL fails, assuming temp1 is already set to the master list of comics
