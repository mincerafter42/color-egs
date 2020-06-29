function everyDay(I) {return Date.UTC(99,36,I)}
function MonWedFri(I,inWeekShift,offset) {return Date.UTC(99,23,offset+(2*((I-inWeekShift)%3)+(7*Math.floor((I-inWeekShift)/3))))}

function dateURL(dateUTC) {return "?date="+new Date(dateUTC).toISOString().split("T")[0]}
function idURL(I,offset) {return "?id="+(I-([13,16,16][I-1028]||[-1,1][I-1239]||[-1,1][I-1766]||[-4,-4,-1][I-2079]||offset))}
function slugURL(prefix,id,idLength) {return "/"+prefix+"-"+addLeadingZeros(id,idLength)}

function comicURL(I) {
return "https://egscomics.com/comic"+(
I<171?dateURL(everyDay(I+20)):
I<557?idURL(I,0):
I<584?dateURL(MonWedFri(I,2,4)):
I<815?idURL(I,6):
I<832?dateURL(MonWedFri(I,2,228)):
I<883?idURL(I,15):
I<893?idURL(I,-10):
I<918?idURL(I,25):
I<987?idURL(I,9):
I<993?idURL(I,84):
I<1051?idURL(I,15):
I<2004?idURL(I,0):
I<2010?idURL(I,-1):
I<2038?idURL(I,-2):
I<2139?idURL(I,-3):
I<2145?dateURL(MonWedFri(I,2,529)):
I<2189?idURL(I,-3):
I<2199?slugURL("question-mark",I-2188,2):
I<2243?idURL(I,7):
I<2436?idURL(I,-3):
I<2513?dateURL(MonWedFri(I,2,557)):
I<2527?slugURL("sister3",I-2216,3):
I<2560?dateURL(MonWedFri(I,1,578)):
I<2609?slugURL("tsos",I-2559,2):
I<2643?dateURL(MonWedFri(I,2,592)):
I<2706?slugURL("party",I-2624,3):
I<2708?"/party-083"+(I==2707?"b":""):
slugURL("party",I-2624,3) //will work until the party arc ends or has another inconsistent URL
//"/1969-12-31"
)
}
