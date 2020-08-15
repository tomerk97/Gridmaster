
let addButton = document.getElementsByClassName("add");
let First = document.getElementById("First");
let contentblock = document.getElementsByClassName("contentblock");
let firstwidth = document.getElementById("firstwidth");
let firstheighttop = document.getElementById("firstheighttop");
let firstheightbtm = document.getElementById("firstheightbtm");
let firstcontentblock= document.getElementById("firstcontentblock");
let generatedcode = document.getElementById("generatedcode");
let generatedhtml = document.getElementById("generatedhtml");
let CurrentGrid = {gridtemcol:"50fr 50fr;",gridtemrow:"33fr 33fr 33fr;"};
let CssCodeString =`#firstcontentblock{\ndisplay:grid;\n${CurrentGrid.gridtemcol}\n${CurrentGrid.gridtemrow}`;
let FirstCon = document.getElementById("FirstCon");
let secwidth = document.getElementById("secwidth");
let secheighttop = document.getElementById("secheighttop");
let secheightbtm = document.getElementById("secheightbtm");
let seccontentblock= document.getElementById("seccontentblock");
let SecCon = document.getElementById("SecCon");
let temone = document.getElementById("temone");
let thirdcon = document.getElementById("thirdcon");
let temtwo = document.getElementById("temtwo");
let fourthcon = document.getElementById("fourthcon");



function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
document.getElementById(cityName).style.display = "grid";
  // if(cityName==="First"||cityName==="Second"||cityName==="Third"){
  //     document.getElementById(cityName).style.display = "grid";
  // }
  evt.currentTarget.className += " active";
 }

function refreshstring(){
  CssCodeString =`#firstcontentblock{\ndisplay:grid;\ngrid-template-columns:${CurrentGrid.gridtemcol}\ngrid-template-rows:${CurrentGrid.gridtemrow}\n}\n\n#firsttop{\ngrid-row-start: 1;\ngrid-row-end: 2;\ngrid-column-start: 1;\ngrid-column-end: 3;\n}\n\n#firstleft{\ngrid-row-start: 2;\ngrid-row-end: 3;\ngrid-column-start: 1;\ngrid-column-end: 2;\n}\n#firstright{\ngrid-row-start: 2;\ngrid-row-end: 3;\ngrid-column-start: 2;\ngrid-column-end: 3;\n}\n\n#firstbtm{\ngrid-row-start: 3;\ngrid-row-end: 4;\ngrid-column-start: 1;\ngrid-column-end: 3;
  }`;
}
function refreshSecString(){
  CssCodeString =`#seccontentblock{\ndisplay:grid;\ngrid-template-columns:${CurrentGrid.gridtemcol}\ngrid-template-rows:${CurrentGrid.gridtemrow}\n}\n \n#secleft{\ngrid-row-start: 1;\ngrid-row-end: 4;\ngrid-column-start: 1;\ngrid-column-end: 2;\n}\n#sectop{\ngrid-row-start: 1;\ngrid-row-end: 2;\ngrid-column-start: 2;\ngrid-column-end: 3;\n}\n#secmid{\ngrid-row-start: 2;\ngrid-row-end: 3;\ngrid-column-start: 2;\ngrid-column-end: 3;\n}\n#secbtm{\ngrid-row-start: 3;\ngrid-row-end: 4;\ngrid-column-start: 2;\ngrid-column-end: 3;\n}
  `;
}


function refreshTemplate(){
  firstcontentblock.setAttribute("style",`grid-template-rows:${CurrentGrid.gridtemrow};grid-template-columns:${CurrentGrid.gridtemcol}`);
 }
 function refreshSecondTemplate(){
  seccontentblock.setAttribute("style",`grid-template-rows:${CurrentGrid.gridtemrow};grid-template-columns:${CurrentGrid.gridtemcol}`);
 }

function refreshGeneratedCode(a,b,c){
  refreshstring(); 
  generatedcode.innerHTML = CssCodeString;
  htmlstring = document.createElement("pre");
  htmlstring.textContent = "";
  htmlstring.textContent = FirstCon.innerHTML.trim();
  generatedhtml.innerHTML = htmlstring.innerHTML;
  // `<div id="firstcontentblock">\n${html}`
}
refreshGeneratedCode();

firstwidth.addEventListener("click", function(){
  var a =firstwidth.value;
  var b = 100-a;
CurrentGrid.gridtemcol=`${a}fr ${b}fr`;
refreshGeneratedCode();
refreshTemplate();
})

firstheighttop.addEventListener("click",function(){
  
  firstheighttop = document.getElementById("firstheighttop");
  firstheightbtm = document.getElementById("firstheightbtm");
  firstwidth = document.getElementById("firstwidth");
  var a =firstheighttop.value;
  var c = firstheightbtm.value;
  var b = 200-a-c;

  // firstheightbtm.value=100-b;
  CurrentGrid.gridtemrow = `${a/2}fr ${b/2}fr ${c/2}fr`;
  refreshGeneratedCode();
  refreshTemplate();})

  firstheightbtm.addEventListener("click",function(){ 
    firstheighttop = document.getElementById("firstheighttop");
    firstheightbtm = document.getElementById("firstheightbtm");
    firstwidth = document.getElementById("firstwidth");
     var a =firstheighttop.value;
    var c = 100-firstheightbtm.value;
    var b = 200-a-c;
    CurrentGrid.gridtemrow = `${a/2}fr ${b/2}fr ${c/2}fr`;
    refreshGeneratedCode();
    refreshTemplate();
  })


function copyToClipboard(id) {
    var text;
    if(id==="html")
      {copyToClipBoardFun(generatedhtml.textContent); alert("HTML Copied")}
    else if(id==="css")
      {copyToClipBoardFun(CssCodeString);alert("CSS Copied")}}



const copyToClipBoardFun = (str) =>
{
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    
};

function refreshSecondGeneratedCode(){
  refreshSecString();
  generatedcode.innerHTML = CssCodeString;
  htmlstring = document.createElement("pre");
  generatedhtml.innerHTML = "";
  htmlstring.innerHTML="";
  htmlstring.textContent = SecCon.innerHTML.trim();
  generatedhtml.innerHTML = htmlstring.innerHTML.trim();
}

secwidth.addEventListener("click", function(){
  var a =secwidth.value;
  var b = 100-a;
CurrentGrid.gridtemcol=`${a}fr ${b}fr`;
refreshSecondGeneratedCode();
refreshSecondTemplate();
})


secheighttop.addEventListener("click",function(){
  
  secheighttop = document.getElementById("secheighttop");
  secheightbtm = document.getElementById("secheightbtm");
  secwidth = document.getElementById("secwidth");
  var a =secheighttop.value;
  var c = secheightbtm.value;
  var b = 200-a-c;

  // firstheightbtm.value=100-b;
  CurrentGrid.gridtemrow = `${a/2}fr ${b/2}fr ${c/2}fr`;
  refreshSecondGeneratedCode();
  refreshSecondTemplate();})

secheightbtm.addEventListener("click",function(){ 
    secheighttop = document.getElementById("secheighttop");
    secheightbtm = document.getElementById("secheightbtm");
    secwidth = document.getElementById("secwidth");
    var a =secheighttop.value;
    var c = 100-secheightbtm.value;
    var b = 200-a-c;
    CurrentGrid.gridtemrow = `${a/2}fr ${b/2}fr ${c/2}fr`;
    refreshSecondGeneratedCode();
    refreshSecondTemplate();
  })



temone.addEventListener("click",function(){
  htmlstring = document.createElement("pre");
  htmlstring.textContent = "";
  htmlstring.textContent = thirdcon.innerHTML.trim();
  CssCodeString = `#template{\ndisplay:grid;\ngrid-template-columns:33fr 33fr 33fr;\n} \n#left{\ngrid-column-start: 1;\ngrid-column-end: 2;\n}\n#mid{\ngrid-column-start: 2;\ngrid-column-end: 3;\n}\n#right{\ngrid-column-start: 2;\ngrid-column-end: 3;\n}`;
  generatedcode.innerHTML = CssCodeString;
  generatedhtml.innerHTML = htmlstring.innerHTML;
})

temtwo.addEventListener("click",function(){
  htmlstring = document.createElement("pre");
  htmlstring.textContent = "";
  htmlstring.textContent = fourthcon.innerHTML.trim();
  CssCodeString = `#template{\ndisplay:grid;\ngrid-template-rows:33fr 33fr 33fr;\n} \n#left{\ngrid-row-start: 1;\ngrid-row-end: 2;\n}\n#mid{\ngrid-row-start: 2;\ngrid-row-end: 3;\n}\n#right{\ngrid-row-start: 2;\ngrid-row-end: 3;\n}`;
  generatedcode.innerHTML = CssCodeString;
  generatedhtml.innerHTML = htmlstring.innerHTML;
})



