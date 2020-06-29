function everyDay(I) {return Date.UTC(99,36,I)}
function MonWedFri(I,offset) {return Date.UTC(99,23,offset+(2*(I%3)+(7*Math.floor(I/3))))}

function dateURL(dateUTC) {return "?date="+new Date(dateUTC).toISOString().split("T")[0]}
function slugURL(prefix,id,idLength) {return "/"+prefix+"-"+addLeadingZeros(id,idLength)}
function idURL(I) {for (var i=0;i<28;i++) if ([584,832,883,893,918,987,993,1028,1029,1030,1031,1051,1239,1240,1241,1766,1767,1768,2005,2010,2037,2079,2080,2081,2082,2199,2243,2501][i]>I) return "?id="+(I-[0,6,15,-10,25,9,84,15,13,16,16,15,0,-1,1,0,-1,1,0,-1,-2,-3,-4,-4,-1,-3,7,-3][i])}

function comicURL(I) {
return "https://egscomics.com/comic"+(
I<171?dateURL(everyDay(I+20)):
I<557?idURL(I):
I<584?dateURL(MonWedFri(I-2,4)):
I<815?idURL(I):
I<832?dateURL(MonWedFri(I-2,228)):
I<2139?idURL(I):
I<2145?dateURL(MonWedFri(I-2,529)):
I<2189?idURL(I):
I<2199?slugURL("question-mark",I-2188,2):
I<2436?idURL(I):
I<2513?dateURL(MonWedFri(I-2,557)):
I<2527?slugURL("sister3",I-2216,3):
I<2560?dateURL(MonWedFri(I-1,578)):
I<2609?slugURL("tsos",I-2559,2):
I<2643?dateURL(MonWedFri(I-2,592)):
I<2706?slugURL("party",I-2624,3):
I<2708?"/party-083"+(I==2707?"b":""):
slugURL("party",I-2624,3) //will work until the party arc ends or has another inconsistent URL
//"/1969-12-31"
)
}
