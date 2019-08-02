function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();





function BusinessTab(Businessevt, cityName) {
  var i, Tabscontent2, TabsLinks2;
  Tabscontent2 = document.getElementsByClassName("Tabcontent2");
  for (i = 0; i < Tabscontent2.length; i++) {
    Tabscontent2[i].style.display = "none";
  }
  TabsLinks2 = document.getElementsByClassName("TabsLinks2");
  for (i = 0; i < TabsLinks2.length; i++) {
    TabsLinks2[i].className = TabsLinks2[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  Businessevt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("BusinessOpen").click();





function MathsTab(Mathsevt, MathsSolution) {
  var i, MathsTabContent, MathsTabLinks;
  MathsTabContent = document.getElementsByClassName("MathsTabContent");
  for (i = 0; i < MathsTabContent.length; i++) {
    MathsTabContent[i].style.display = "none";
  }
  MathsTabLinks = document.getElementsByClassName("MathsTabLinks");
  for (i = 0; i < MathsTabLinks.length; i++) {
    MathsTabLinks[i].className = MathsTabLinks[i].className.replace(" active", "");
  }
  document.getElementById(MathsSolution).style.display = "block";
  Mathsevt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("MathsdefaultOpen").click();



function test1 () {
  document.getElementById("tablink-math").click();
}

function test2 () {
  document.getElementById("tablink-BS").click();
}







function PhysicsTab(Physicsevt, PhysicsSolution) {
  var i, PhysicsTabContent, PhysicsTabLinks;
  PhysicsTabContent = document.getElementsByClassName("PhysicsTabContent");
  for (i = 0; i < PhysicsTabContent.length; i++) {
    PhysicsTabContent[i].style.display = "none";
  }
  PhysicsTabLinks = document.getElementsByClassName("PhysicsTabLinks");
  for (i = 0; i < PhysicsTabLinks.length; i++) {
    PhysicsTabLinks[i].className = PhysicsTabLinks[i].className.replace(" active", "");
  }
  document.getElementById(PhysicsSolution).style.display = "block";
  Physicsevt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("PhysicsdefaultOpen").click();






















function Calculate1(){
                      var value1=document.getElementById("Quantity1").value;
                      var value2=document.getElementById("VariableP1").value;
                      var value3=document.getElementById("VariableC1").value;
                      var value4=document.getElementById("FixedC1").value;
                      var value5=document.getElementById("Profit2").value;
                      var value6=document.getElementById("Quantity2").value;
                      var value7=document.getElementById("VariableC2").value;
                      var value8=document.getElementById("FixedC2").value;
                      var value9=document.getElementById("Profit3").value;
                      var value10=document.getElementById("Quantity3").value;
                      var value11=document.getElementById("VariableP3").value;
                      var value12=document.getElementById("VariableC3").value;
                      var value13=document.getElementById("Profit4").value;
                      var value14=document.getElementById("TotalC4").value;
                      var value15=document.getElementById("OriginalV5").value;
                      var value16=document.getElementById("ChangedV5").value;
                      var value17=document.getElementById("Value5").value;
                      var value18=document.getElementById("Increase5").value;
                      var value19=document.getElementById("Value5.1").value;
                      var value20=document.getElementById("Decrease5").value;
                      var value21=document.getElementById("Quantity6").value;
                      var value22=document.getElementById("FixedC6").value;
                      var value23=document.getElementById("VariableC6").value;
                      var value24=document.getElementById("VariableP6").value;
                      var value25=document.getElementById("VariableCP6").value;
                      var value26=document.getElementById("VariablePP6").value;
                      var value27=document.getElementById("FixedC7").value;
                      var value28=document.getElementById("VariableP7").value;
                      var value29=document.getElementById("VariableC7").value;
                      var value30=document.getElementById("BreakEP8").value;
                      var value31=document.getElementById("VariableP8").value;
                      var value32=document.getElementById("VariableC8").value;
                      var value50=document.getElementById("Decimal1").value;
                      var value51=document.getElementById("Decimal2").value;
                      var value52=document.getElementById("Decimal3").value;
                      var value53=document.getElementById("Decimal4").value;
                      var value54=document.getElementById("Decimal5").value;
                      var value55=document.getElementById("Decimal6").value;
                      var value56=document.getElementById("Decimal7").value;
                      var value57=document.getElementById("Decimal8").value;





                      var result1=(parseFloat(value1)*parseFloat(value2)).toFixed(parseFloat(value50));
                      var result2=((parseFloat(value1)*parseFloat(value3))+parseFloat(value4)).toFixed(parseFloat(value50));
                      var result3=((parseFloat(value1)*parseFloat(value2))-((parseFloat(value1)*parseFloat(value3))+parseFloat(value4))).toFixed(parseFloat(value50));
                      var result4=(parseFloat(value5)+(parseFloat(value6)*parseFloat(value7)+parseFloat(value8))).toFixed(parseFloat(value51));
                      var result5=(((parseFloat(value10)*parseFloat(value11))-parseFloat(value9))-(parseFloat(value10)*parseFloat(value12))).toFixed(parseFloat(value52));
                      var result6=(parseFloat(value13)+parseFloat(value14)).toFixed(parseFloat(value53));
                      var result7=(((parseFloat(value16)-(parseFloat(value15)))/parseFloat(value15))*100).toFixed(parseFloat(value54));
                      var result8=(parseFloat(value17)*((parseFloat(value18)+100)/100)).toFixed(parseFloat(value54));
                      var result9=(parseFloat(value19)*((100-parseFloat(value20))/100)).toFixed(parseFloat(value54));
                      var result10=(parseFloat(value21)*(parseFloat(value24)*parseFloat(value26/100))).toFixed(parseFloat(value55));
                      var result11=((parseFloat(value21)*(parseFloat(value23)*parseFloat(value25/100)))+parseFloat(value22)).toFixed(parseFloat(value55));
                      var result12=((parseFloat(value21)*(parseFloat(value24)*parseFloat(value26/100)))-((parseFloat(value21)*(parseFloat(value23)*parseFloat(value25/100)))+parseFloat(value22))).toFixed(parseFloat(value55));
                      var result13=(parseFloat(value27)/(parseFloat(value28)-parseFloat(value29))).toFixed(parseFloat(value56));
                      var result14=(parseFloat(value30)*(parseFloat(value31)-parseFloat(value32))).toFixed(parseFloat(value57));






                      var Answer1="";
                      var Answer2="";
                      var Answer3="";
                      var Answer4="";
                      var Answer5="";
                      var answer5="";
                      var ANSWER5="";
                      var Answer6="";
                      var Answer7="";
                      var Answer8="";








                      
                      if(value1.length==0||value2.length==0||value3.length==0||value4.length==0){
                      Answer1=document.getElementById("Answer1").innerHTML=``;
                      }else if(!isFinite(result3)){
                      Answer1=document.getElementById("Answer1").innerHTML=`The answer is an infinite Number<br>Please check your numbers`;
                      }else if(isNaN(result3)){
                      Answer1=document.getElementById("Answer1").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }else if (!isNaN(result3)){
                      Answer1=document.getElementById("Answer1").innerHTML=`(${value1} x ${value2})=${result1}<br><br>((${value1} x ${value3})+ ${value4})=${result2}<br><br>(${value1} x ${value2})-((${value1} x ${value3})+ ${value4})=${result3}`;
                      }
                      if(value5.length==0||value6.length==0||value7.length==0||value8.length==0){
                      Answer2=document.getElementById("Answer2").innerHTML=``;
                      }else if(!isFinite(result4)){
                      Answer2=document.getElementById("Answer2").innerHTML=`The answer is an infinite Number<br>Please check your numbers`;
                      }else if(isNaN(result4)){
                      Answer2=document.getElementById("Answer2").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }else if (!isNaN(result4)){
                      Answer2=document.getElementById("Answer2").innerHTML=`(${value5}+((${value6} x ${value7}))+${value8})=${result4}`;
                      }
                      if(value9.length==0||value10.length==0||value11.length==0||value12.length==0){
                      Answer3=document.getElementById("Answer3").innerHTML=``;
                      }else if(!isFinite(result5)){
                      Answer3=document.getElementById("Answer3").innerHTML=`The answer is an infinite Number<br>Please check your numbers`;
                      }else if(isNaN(result5)){
                      Answer3=document.getElementById("Answer3").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }else if (!isNaN(result5)){
                      Answer3=document.getElementById("Answer3").innerHTML=`((${value10} x ${value11})-${value9})-(${value10} x ${value12})=${result5}`;
                      }
                      if(value13.length==0||value14.length==0){
                      Answer4=document.getElementById("Answer4").innerHTML=``;
                      }else if(!isFinite(result5)){
                      Answer4=document.getElementById("Answer4").innerHTML=`The answer is an infinite Number<br>Please check your numbers`;
                      }else if (!isNaN(result6)){
                      Answer4=document.getElementById("Answer4").innerHTML=`${value13} + ${value14}=${result6}`;
                      }else if(isNaN(result6)){
                      Answer4=document.getElementById("Answer4").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(value15.length==0||value16.length==0){
                      Answer5=document.getElementById("Answer5").innerHTML=``;
                      }else if(!isFinite(result7)){
                      Answer5=document.getElementById("Answer5").innerHTML=`The answer is an infinite Number<br>Please check your numbers`;
                      }else if (!isNaN(result7)){
                      Answer5=document.getElementById("Answer5").innerHTML=`((${value16} - ${value15}) ÷ ${value15}) x 100=${result7}%`;
                      }else if(isNaN(result7)){
                      Answer5=document.getElementById("Answer5").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(value17.length==0||value18.length==0){
                      answer5=document.getElementById("Answer5.1").innerHTML=``;
                      }else if(!isFinite(result8)){
                      answer5=document.getElementById("Answer5.1").innerHTML=`The answer is an infinite Number<br>Please check your numbers`;
                      }else if(!isNaN(result8)){
                      answer5=document.getElementById("Answer5.1").innerHTML=`(${value17} x ${(value18/100)+1})=${result8}`;
                      }else if(isNaN(result8)){
                      Answer5=document.getElementById("Answer5.1").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(value19.length==0||value20.length==0){
                      ANSWER5=document.getElementById("Answer5.2").innerHTML=``;
                      }else if(!isFinite(result4)){
                      ANSWER5=document.getElementById("Answer5.2").innerHTML=`The answer is an infinite Number<br>Please check your numbers`;
                      }else if(!isNaN(result9)){
                      ANSWER5=document.getElementById("Answer5.2").innerHTML=`(${value19} x ${1-(value20/100)})=${result9}`;
                      }else if(isNaN(result9)){
                      ANSWER5=document.getElementById("Answer5.2").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(value21.length==0||value22.length==0||value23.length==0||value24.length==0||value25.length==0||value26.length==0){
                      Answer6=document.getElementById("Answer6").innerHTML=``;
                      }else if(!isFinite(result12)){
                      Answer6=document.getElementById("Answer6").innerHTML=`The answer is an infinite Number<br>Please check your numbers`;
                      }else if(!isNaN(result12)){
                      Answer6=document.getElementById("Answer6").innerHTML=`(${value21} x (${value24} x ${value26/100}))=${result10}<br><br>((${value21} x (${value23} x ${value25/100}))+ ${value22})=${result11}<br><br>(${value21} x (${value24} x ${value26/100}))-((${value21} x (${value23} x ${value25/100}))+ ${value22})=${result12}`;
                      }else if(isNaN(result12)){
                      Answer6=document.getElementById("Answer6").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(value27.length==0||value28.length==0||value29.length==0){
                      Answer7=document.getElementById("Answer7").innerHTML=``;
                      }else if(!isFinite(result13)){
                      Answer7=document.getElementById("Answer7").innerHTML=`The answer is an infinite Number<br>Please check your numbers`;
                      }else if(!isNaN(result13)){
                      Answer7=document.getElementById("Answer7").innerHTML=`${value27} ÷ (${value28} - ${value29})=${result13}`;
                      }else if(isNaN(result13)){
                      Answer7=document.getElementById("Answer7").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(value30.length==0||value31.length==0||value32.length==0){
                      Answer8=document.getElementById("Answer8").innerHTML=``;
                      }else if(!isFinite(result14)){
                      Answer8=document.getElementById("Answer8").innerHTML=`The answer is an infinite Number<br>Please check your numbers`;
                      }else if(!isNaN(result14)){
                      Answer8=document.getElementById("Answer8").innerHTML=`${value30} x (${value31} - ${value32})=${result14}`;
                      }else if(isNaN(result14)){
                      Answer8=document.getElementById("Answer8").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
}






function Calculate2(){
                      var value100=document.getElementById("A100").value;
                      var value101=document.getElementById("B100").value;
                      var value102=document.getElementById("C100").value;
                      var value103=document.getElementById("X2").value;
                      var value104=document.getElementById("Y2").value;
                      var value105=document.getElementById("AnswerSE2").value;
                      var value106=document.getElementById("x2").value;
                      var value107=document.getElementById("y2").value;
                      var value108=document.getElementById("answerSE2").value;
                      var value109=document.getElementById("Value102").value;
                      var value110=document.getElementById("Interest102").value;
                      var value111=document.getElementById("Year102").value;
                      var value112=document.getElementById("Radius103").value;
                      var value113=document.getElementById("Radius104").value;
                      var value114=document.getElementById("Radius105").value;
                      var value115=document.getElementById("Height105").value;
                      var value116=document.getElementById("Radius106").value;
                      var value117=document.getElementById("Height106").value;
                      var value118=document.getElementById("Radius107").value;
                      var value119=document.getElementById("Radius108").value;
                      var value120=document.getElementById("Radius109").value;
                      var value121=document.getElementById("Height109").value;
                      var value122=document.getElementById("Radius110").value;
                      var value123=document.getElementById("Height110").value;
                      var value124=document.getElementById("A111").value;
                      var value125=document.getElementById("A112").value;
                      var value126=document.getElementById("S113").value;
                      var value127=document.getElementById("U113").value;
                      var value128=document.getElementById("V113").value;
                      var value129=document.getElementById("A113").value;
                      var value130=document.getElementById("T113").value;
                      var value200=document.getElementById("Decimal200").value;
                      var value201=document.getElementById("Decimal201").value;
                      var value202=document.getElementById("Decimal202").value;
                      var value203=document.getElementById("Decimal203").value;
                      var value204=document.getElementById("Decimal204").value;
                      var value205=document.getElementById("Decimal205").value;
                      var value206=document.getElementById("Decimal206").value;
                      var value207=document.getElementById("Decimal207").value;
                      var value208=document.getElementById("Decimal208").value;










                      var result100=((Math.pow(parseFloat(value100),2))+(Math.pow(parseFloat(value101),2)));//C2=
                      var result101=(Math.sqrt(result100)).toFixed(parseFloat(value200));//C=
                      var result102=Math.pow(parseFloat(value102),2)-Math.pow(parseFloat(value101),2);//A2
                      var result103=(Math.sqrt(result102)).toFixed(parseFloat(value200));//A=
                      var result104=Math.pow(parseFloat(value102),2)-Math.pow(parseFloat(value100),2);//B2
                      var result105=(Math.sqrt(result104)).toFixed(parseFloat(value200));//B=
                      var result106=parseFloat(value103)*parseFloat(value106);//X1,X2=
                      var result107=parseFloat(value104)*parseFloat(value106);//Y1=
                      var result108=parseFloat(value106)*parseFloat(value105);//Answer1=
                      var result109=parseFloat(value103)*parseFloat(value107);//Y2=
                      var result110=parseFloat(value103)*parseFloat(value108);//Answer2=
                      var result111=parseFloat(result107)-parseFloat(result109);//Y=
                      var result112=parseFloat(result108)-parseFloat(result110);//Answer=
                      var result113=(parseFloat(result112)/parseFloat(result111)).toFixed(parseFloat(value201));//Y=
                      var result114=((parseFloat(value105)-(parseFloat(value104)*parseFloat(result113)))/parseFloat(value103)).toFixed(parseFloat(value203));//X=
                      var result115=(parseFloat(value109)*Math.pow(parseFloat(value110/100),parseFloat(value111))).toFixed(parseFloat(value202));//Interest Rates
                      var result116=(Math.PI*Math.pow(parseFloat(value112),2)).toFixed(parseFloat(value203));//Area of PI
                      var result117=(Math.PI*2*parseFloat(value113)).toFixed(parseFloat(value203));//Circunference of pI
                      var result118=(Math.PI*parseFloat(value114)*(parseFloat(value114)+Math.sqrt(Math.pow(parseFloat(value114),2)+Math.pow(parseFloat(value115),2)))).toFixed(parseFloat(value204));//Area of Cone
                      var result119=((Math.PI*Math.pow(parseFloat(value116),2)*parseFloat(value117))/3).toFixed(parseFloat(value204));//Volume of Cone
                      var result120=((Math.PI*4)*Math.pow(parseFloat(value118),2)).toFixed(parseFloat(value205));//Area of Sphere
                      var result121=(Math.PI*(4/3)*Math.pow(parseFloat(value119),3)).toFixed(parseFloat(value205));//Volume of Sphere
                      var result122=((Math.PI*2*Math.pow(parseFloat(value120),2))+(2*Math.PI*parseFloat(value120)*parseFloat(value121))).toFixed(parseFloat(value206));//Area of Cylinder
                      var result123=(Math.PI*Math.pow(parseFloat(value122),2)*parseFloat(value123)).toFixed(parseFloat(value206));//Volume of Cylinder
                      var result124=(6*Math.pow(parseFloat(value124),2)).toFixed(parseFloat(value207));//Area of Cube
                      var result125=(Math.pow(parseFloat(value125),3)).toFixed(parseFloat(value207));//Volume of Cube
                      var result126=(parseFloat(value127)+(parseFloat(value129)*parseFloat(value130))).toFixed(parseFloat(value208));//V=U+AT
                      var result127=(parseFloat(value128)-(parseFloat(value129)*parseFloat(value130))).toFixed(parseFloat(value208));//U=V-AT
                      var result128=((parseFloat(value128)-parseFloat(value127))/parseFloat(value130)).toFixed(parseFloat(value208));//A=(V-U)÷T
                      var result129=((parseFloat(value128)-parseFloat(value127))/parseFloat(value129)).toFixed(parseFloat(value208));//T=(V-U)÷A
                      var result130=((parseFloat(value127)*parseFloat(value130))+(0.5*parseFloat(value129)*Math.pow(parseFloat(value130),2))).toFixed(parseFloat(value208));//S=UT+0.5AT2
                      var result131=((parseFloat(value126)-(0.5*parseFloat(value129)*Math.pow(parseFloat(value130),2)))/parseFloat(value130)).toFixed(parseFloat(value208));//U=(S-0.5AT2)÷T
                      var result132=((parseFloat(value126)-(parseFloat(value127)*parseFloat(value130)))/(0.5*Math.pow(parseFloat(value130),2))).toFixed(parseFloat(value208));//A=(S-UT)÷0.5T2
                      var result133=((0.5*(parseFloat(value127)+parseFloat(value128))*parseFloat(value130))).toFixed(parseFloat(value208));//S=0.5(U+V)T
                      var result134=((parseFloat(value126)/(0.5*parseFloat(value130)))-parseFloat(value128)).toFixed(parseFloat(value208));//U=(S÷0.5T)-V
                      var result135=((parseFloat(value126)/(0.5*parseFloat(value130)))-parseFloat(value127)).toFixed(parseFloat(value208));//V=(S÷0.5T)-U
                      var result136=(parseFloat(value126)/(0.5*(parseFloat(value127)+parseFloat(value128)))).toFixed(parseFloat(value208));//T=S÷(0.5(U+V))
                      var result137=(Math.pow(parseFloat(value127),2)+(2*parseFloat(value129)*parseFloat(value126))).toFixed(parseFloat(value208));//V2=U2+2AS
                      var result138=(Math.sqrt(Math.pow(parseFloat(value127),2)+(2*parseFloat(value129)*parseFloat(value126)))).toFixed(parseFloat(value208));
                      var result139=(Math.pow(parseFloat(value128),2)-(2*parseFloat(value129)*parseFloat(value126))).toFixed(parseFloat(value208));//U2=V2-2AS
                      var result140=(Math.sqrt(Math.pow(parseFloat(value128),2)-(2*parseFloat(value129)*parseFloat(value126)))).toFixed(parseFloat(value208));
                      var result141=((Math.pow(parseFloat(value128),2)-(Math.pow(parseFloat(value127),2)))/(2*parseFloat(value126))).toFixed(parseFloat(value208));//A=V2-U2÷2S
                      var result142=((Math.pow(parseFloat(value128),2)-(Math.pow(parseFloat(value127),2)))/(2*parseFloat(value129))).toFixed(parseFloat(value208));//S=V2-U2÷2A
                      var result143=((parseFloat(value128)*parseFloat(value130))-(0.5*parseFloat(value129)*Math.pow(parseFloat(value130),2))).toFixed(parseFloat(value208));//S=VT-(0.5AT2)
                      var result144=((parseFloat(value126)+(0.5*parseFloat(value129)*Math.pow(parseFloat(value130),2)))/parseFloat(value130)).toFixed(parseFloat(value208));//V=S+(0.5AT2)÷T
                      var result145=(((parseFloat(value128)*parseFloat(value130))-parseFloat(value126))/(0.5*Math.pow(parseFloat(value130),2))).toFixed(parseFloat(value208));//A=(VT-S)÷0.5T2






                      var Answer100="";
                      var answer100="";
                      var ANSWER100="";
                      var Answer101="";
                      var Answer102="";
                      var Answer103="";
                      var Answer104="";
                      var Answer105="";
                      var Answer106="";
                      var Answer107="";
                      var Answer108="";
                      var Answer109="";
                      var Answer110="";
                      var Answer111="";
                      var Answer112="";
                      var Answer113="";
                      var Answer114="";
                      var Answer115="";
                      var Answer116="";
                      var Answer117="";
                      var Answer118="";
                      var Answer119="";







                      if(value100.length==0||value101.length==0){
                        Answer100=document.getElementById("Answer100").innerHTML=``;
                      }else if(!isNaN(result100)){
                        Answer100=document.getElementById("Answer100").innerHTML=`${value100}<sup>2</sup> + ${value101}<sup>2</sup>=${result100}<br><br>C=${result101}`;
                      }else if(isNaN(result100)){
                        Answer100=document.getElementById("Answer100").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value102.length==0||value101.length==0){
                        answer100=document.getElementById("answer100").innerHTML=``;
                      }else if(!isNaN(result100)){
                        answer100=document.getElementById("answer100").innerHTML=`${value102}<sup>2</sup> - ${value101}<sup>2</sup>=${result102}<br><br>A=${result103}`;
                      }else if(isNaN(result100)){
                        answer100=document.getElementById("answer100").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value100.length==0||value102.length==0){
                        ANSWER100=document.getElementById("ANSWER100").innerHTML=``;
                      }else if(!isNaN(result100)){
                        ANSWER100=document.getElementById("ANSWER100").innerHTML=`${value102}<sup>2</sup> - ${value100}<sup>2</sup>=${result104}<br><br>B=${result105}`;
                      }else if(isNaN(result100)){
                        ANSWER100=document.getElementById("ANSWER100").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value103.length==0||value104.length==0||value105.length==0||value106.length==0){
                        Answer101=document.getElementById("Answer101").innerHTML=``;
                      }else if(!isNaN(result114)){
                        Answer101=document.getElementById("Answer101").innerHTML=`${value103}X+${value104}Y=${value105}<br>${value106}X+${value107}Y=${value108}<br><br>${result106}X+${result107}Y=${result108}<br>${result106}X+${result109}Y=${result110}<br><br>${result111}Y=${result112}<br><br>Y=${result113}<br>X=${result114}`;
                      }else if(isNaN(result114)){
                        Answer101=document.getElementById("Answer101").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value109.length==0||value110.length==0||value111.length==0){
                        Answer102=document.getElementById("Answer102").innerHTML=``;
                      }else if(!isNaN(result115)){
                        Answer102=document.getElementById("Answer102").innerHTML=`${value109} X ${value110/100}<sup>${value111}</sup>=${result115}`;
                      }else if(isNaN(result115)){
                        Answer102=document.getElementById("Answer102").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value112.length==0){
                        Answer103=document.getElementById("Answer103").innerHTML=``;
                      }else if(!isNaN(result116)){
                        Answer103=document.getElementById("Answer103").innerHTML=`&#960 x ${value112}<sup>2</sup>=${result116}`;
                      }else if(isNaN(result116)){
                        Answer103=document.getElementById("Answer103").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value113.length==0){
                        Answer104=document.getElementById("Answer104").innerHTML=``;
                      }else if(!isNaN(result117)){
                        Answer104=document.getElementById("Answer104").innerHTML=`2&#960 x ${value113}=${result117}`;
                      }else if(isNaN(result117)){
                        Answer104=document.getElementById("Answer104").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value114.length==0||value115==0){
                        Answer105=document.getElementById("Answer105").innerHTML=``;
                      }else if(!isNaN(result118)){
                        Answer105=document.getElementById("Answer105").innerHTML=`(&#960 x ${value114}) x Square root(${value114}<sup>2</sup>+${value115}<sup>2</sup>)=${result118}`;
                      }else if(isNaN(result118)){
                        Answer105=document.getElementById("Answer105").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value116.length==0||value117==0){
                        Answer106=document.getElementById("Answer106").innerHTML=``;
                      }else if(!isNaN(result119)){
                        Answer106=document.getElementById("Answer106").innerHTML=`(&#960 x ${value116}<sup>2</sup> x ${value117}) ÷ 3=${result119}`;
                      }else if(isNaN(result119)){
                        Answer106=document.getElementById("Answer106").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value118.length==0){
                        Answer107=document.getElementById("Answer107").innerHTML=``;
                      }else if(!isNaN(result120)){
                        Answer107=document.getElementById("Answer107").innerHTML=`(4 x &#960) x ${value118}<sup>2</sup>=${result120}`;
                      }else if(isNaN(result120)){
                        Answer107=document.getElementById("Answer107").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value119.length==0){
                        Answer108=document.getElementById("Answer108").innerHTML=``;
                      }else if(!isNaN(result121)){
                        Answer108=document.getElementById("Answer108").innerHTML=`((4/3) x &#960) x ${value119}<sup>3</sup>=${result121}`;
                      }else if(isNaN(result121)){
                        Answer108=document.getElementById("Answer108").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value120.length==0||value121==0){
                        Answer109=document.getElementById("Answer109").innerHTML=``;
                      }else if(!isNaN(result122)){
                        Answer109=document.getElementById("Answer109").innerHTML=`(2&#960 x ${value120}<sup>2</sup>)+(2&#960 x ${value120} x ${value121})=${result122}`;
                      }else if(isNaN(result122)){
                        Answer109=document.getElementById("Answer109").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value122.length==0||value123==0){
                        Answer110=document.getElementById("Answer110").innerHTML=``;
                      }else if(!isNaN(result123)){
                        Answer110=document.getElementById("Answer110").innerHTML=`&#960 x ${value122}<sup>2</sup> x ${value123}=${result123}`;
                      }else if(isNaN(result123)){
                        Answer110=document.getElementById("Answer110").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value124.length==0){
                        Answer111=document.getElementById("Answer111").innerHTML=``;
                      }else if(!isNaN(result124)){
                        Answer111=document.getElementById("Answer111").innerHTML=`6 x ${value124}<sup>2</sup>=${result124}`;
                      }else if(isNaN(result124)){
                        Answer111=document.getElementById("Answer111").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value125.length==0){
                        Answer112=document.getElementById("Answer112").innerHTML=``;
                      }else if(!isNaN(result125)){
                        Answer112=document.getElementById("Answer112").innerHTML=`${value125}<sup>3</sup>=${result125}`;
                      }else if(isNaN(result125)){
                        Answer112=document.getElementById("Answer112").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value127.length==0||value129.length==0||value130.length==0){
                        Answer113=document.getElementById("Answer113").innerHTML=``;
                      }else if(!isNaN(result126)){
                        Answer113=document.getElementById("Answer113").innerHTML=`V=U+AT<br>${value127}+(${value129} x ${value130})=${result126}`;
                      }else if(isNaN(result126)){
                        Answer113=document.getElementById("Answer113").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value128.length==0||value129.length==0||value130.length==0){
                        Answer114=document.getElementById("Answer113.1").innerHTML=``;
                      }else if(!isNaN(result127)){
                        Answer114=document.getElementById("Answer113.1").innerHTML=`U=V-AT<br>${value128}-(${value129} x ${value130})=${result127}`;
                      }else if(isNaN(result127)){
                        Answer114=document.getElementById("Answer113.1").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value128.length==0||value127.length==0||value130.length==0){
                        Answer115=document.getElementById("Answer113.2").innerHTML=``;
                      }else if(!isNaN(result128)){
                        Answer115=document.getElementById("Answer113.2").innerHTML=`A=(V-U)÷T<br>(${value128}-${value127}) ÷ ${value130}=${result128}`;
                      }else if(isNaN(result128)){
                        Answer115=document.getElementById("Answer113.2").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value128.length==0||value127.length==0||value129.length==0){
                        Answer116=document.getElementById("Answer113.3").innerHTML=``;
                      }else if(!isNaN(result129)){
                        Answer116=document.getElementById("Answer113.3").innerHTML=`T=(V-U)÷A<br>(${value128}-${value127}) ÷ ${value129}=${result129}`;
                      }else if(isNaN(result129)){
                        Answer116=document.getElementById("Answer113.3").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value127.length==0||value129.length==0||value130.length==0){
                        Answer117=document.getElementById("Answer114").innerHTML=``;
                      }else if(!isNaN(result130)){
                        Answer117=document.getElementById("Answer114").innerHTML=`S=UT+0.5AT<sup>2</sup><br>(${value127} x ${value130}) + (0.5 x ${value129} x ${value130}<sup>2</sup>)=${result130}`;
                      }else if(isNaN(result130)){
                        Answer117=document.getElementById("Answer114").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value126.length==0||value129.length==0||value130.length==0){
                        Answer118=document.getElementById("Answer114.1").innerHTML=``;
                      }else if(!isNaN(result131)){
                        Answer118=document.getElementById("Answer114.1").innerHTML=`U=(S-0.5AT<sup>2</sup>)÷T<br>(${value126} - (0.5 x ${value129} x ${value130}<sup>2</sup>)) ÷ ${value130}=${result131}`;
                      }else if(isNaN(result131)){
                        Answer118=document.getElementById("Answer114.1").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value126.length==0||value127.length==0||value130.length==0){
                        Answer119=document.getElementById("Answer114.2").innerHTML=``;
                      }else if(!isNaN(result132)){
                        Answer119=document.getElementById("Answer114.2").innerHTML=`A=(S-UT)÷0.5T<sup>2</sup><br>(${value126} - (${value127} x ${value130})) ÷ (0.5 x ${value130}<sup>2</sup>)=${result132}`;
                      }else if(isNaN(result132)){
                        Answer119=document.getElementById("Answer114.2").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }if(value127.length==0||value128.length==0||value130.length==0){
                        Answer120=document.getElementById("Answer115").innerHTML=``;
                      }else if(!isNaN(result132)){
                        Answer120=document.getElementById("Answer115").innerHTML=`S=0.5(U+V)T<br>(${value126} - (${value127} x ${value130})) ÷ (0.5 x ${value130}<sup>2</sup>)=${result132}`;
                      }else if(isNaN(result132)){
                        Answer120=document.getElementById("Answer115").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }







}



















function Calculate3(){
                      var Value501=document.getElementById("Voltage500").value;
                      var Value502=document.getElementById("Current500").value;
                      var Value503=document.getElementById("Power501").value;
                      var Value504=document.getElementById("Current501").value;
                      var Value505=document.getElementById("Power502").value;
                      var Value506=document.getElementById("Voltage502").value;
                      var Value507=document.getElementById("Current503").value;
                      var Value508=document.getElementById("Resistance503").value;
                      var Value509=document.getElementById("Voltage504").value;
                      var Value510=document.getElementById("Resistance504").value;
                      var Value511=document.getElementById("Voltage505").value;
                      var Value512=document.getElementById("Current505").value;
                      var Value513=document.getElementById("Current506").value;
                      var Value514=document.getElementById("Time506").value;
                      var Value515=document.getElementById("Charge507").value;
                      var Value516=document.getElementById("Time507").value;
                      var Value517=document.getElementById("Charge508").value;
                      var Value518=document.getElementById("Current508").value;
                      var Value519=document.getElementById("Voltage509").value;
                      var Value520=document.getElementById("Charge509").value;
                      var Value521=document.getElementById("Energy510").value;
                      var Value522=document.getElementById("Charge510").value;
                      var Value523=document.getElementById("Energy511").value;
                      var Value524=document.getElementById("Voltage511").value;
                      var Value525=document.getElementById("Voltage512").value;
                      var Value526=document.getElementById("Current512").value;
                      var Value527=document.getElementById("Time512").value;
                      var Value528=document.getElementById("Energy513").value;
                      var Value529=document.getElementById("Current513").value;
                      var Value530=document.getElementById("Time513").value;
                      var Value531=document.getElementById("Energy514").value;
                      var Value532=document.getElementById("Voltage514").value;
                      var Value533=document.getElementById("Time514").value;
                      var Value534=document.getElementById("Energy515").value;
                      var Value535=document.getElementById("Voltage515").value;
                      var Value536=document.getElementById("Current515").value;
                      var Value537=document.getElementById("NOU516").value;
                      var Value538=document.getElementById("CPU516").value;
                      var Value539=document.getElementById("TotalC517").value;
                      var Value540=document.getElementById("CPU517").value;
                      var Value541=document.getElementById("TotalC518").value;
                      var Value542=document.getElementById("NOU518").value;
                      var Value543=document.getElementById("UsefulE519").value;
                      var Value544=document.getElementById("TotalE519").value;
                      var Value545=document.getElementById("Efficiency520").value;
                      var Value546=document.getElementById("UsefulE520").value;
                      var Value547=document.getElementById("Efficiency521").value;
                      var Value548=document.getElementById("TotalE521").value;
                      var Value549=document.getElementById("Mass522").value;
                      var Value550=document.getElementById("Gravity522").value;
                      var Value551=document.getElementById("Height522").value;
                      var Value552=document.getElementById("GPE523").value;
                      var Value553=document.getElementById("Gravity523").value;
                      var Value554=document.getElementById("Height523").value;
                      var Value555=document.getElementById("GPE524").value;
                      var Value556=document.getElementById("Mass524").value;
                      var Value557=document.getElementById("Height524").value;
                      var Value558=document.getElementById("GPE525").value;
                      var Value559=document.getElementById("Mass525").value;
                      var Value560=document.getElementById("Gravity525").value;
                      var Value561=document.getElementById("Mass526").value;
                      var Value562=document.getElementById("Velocity526").value;
                      var Value563=document.getElementById("KE527").value;
                      var Value564=document.getElementById("Velocity527").value;
                      var Value565=document.getElementById("KE528").value;
                      var Value566=document.getElementById("Mass528").value;
                      var Value567=document.getElementById("Force529").value;
                      var Value568=document.getElementById("Distance529").value;
                      var Value569=document.getElementById("TransferredE530").value;
                      var Value570=document.getElementById("Distance530").value;
                      var Value571=document.getElementById("TransferredE531").value;
                      var Value572=document.getElementById("Force531").value;
                      var Value573=document.getElementById("Energy532").value;
                      var Value574=document.getElementById("Time532").value;
                      var Value575=document.getElementById("Power533").value;
                      var Value576=document.getElementById("Time533").value;
                      var Value577=document.getElementById("Energy534").value;
                      var Value578=document.getElementById("Power534").value;
                      var Value579=document.getElementById("SHC535").value;
                      var Value580=document.getElementById("Mass535").value;
                      var Value581=document.getElementById("TemperatureC535").value;
                      var Value582=document.getElementById("Energy536").value;
                      var Value583=document.getElementById("Mass536").value;
                      var Value584=document.getElementById("TemperatureC536").value;
                      var Value585=document.getElementById("Energy537").value;
                      var Value586=document.getElementById("TemperatureC537").value;
                      var Value587=document.getElementById("SHC537").value;
                      var Value588=document.getElementById("Energy538").value;
                      var Value589=document.getElementById("SHC538").value;
                      var Value590=document.getElementById("Mass538").value;
                      var Value591=document.getElementById("Distance539").value;
                      var Value592=document.getElementById("Time539").value;
                      var Value593=document.getElementById("Speed540").value;
                      var Value594=document.getElementById("Time540").value;
                      var Value595=document.getElementById("Distance541").value;
                      var Value596=document.getElementById("Speed541").value;
                      var Value597=document.getElementById("Distance542").value;
                      var Value598=document.getElementById("Time542").value;
                      var Value599=document.getElementById("Speed543").value;
                      var Value600=document.getElementById("Time543").value;
                      var Value601=document.getElementById("Distance544").value;
                      var Value602=document.getElementById("Speed544").value;
                      var Value603=document.getElementById("Distance545").value;
                      var Value604=document.getElementById("Time545").value;
                      var Value605=document.getElementById("Speed546").value;
                      var Value606=document.getElementById("Time546").value;
                      var Value607=document.getElementById("Distance547").value;
                      var Value608=document.getElementById("Speed547").value;
                      var Value609=document.getElementById("Distance548").value;
                      var Value610=document.getElementById("Time548").value;
                      var Value611=document.getElementById("Speed549").value;
                      var Value612=document.getElementById("Time549").value;
                      var Value613=document.getElementById("Distance550").value;
                      var Value614=document.getElementById("Speed550").value;
                      var Value615=document.getElementById("Distance551").value;
                      var Value616=document.getElementById("Time551").value;
                      var Value617=document.getElementById("Speed552").value;
                      var Value618=document.getElementById("Time552").value;
                      var Value619=document.getElementById("Distance553").value;
                      var Value620=document.getElementById("Speed553").value;
                      var Value621=document.getElementById("Distance554").value;
                      var Value622=document.getElementById("Time554").value;
                      var Value623=document.getElementById("Speed555").value;
                      var Value624=document.getElementById("Time555").value;
                      var Value625=document.getElementById("Distance556").value;
                      var Value626=document.getElementById("Speed556").value;
                      var Value627=document.getElementById("Distance557").value;
                      var Value628=document.getElementById("Time557").value;
                      var Value629=document.getElementById("Speed558").value;
                      var Value630=document.getElementById("Time558").value;
                      var Value631=document.getElementById("Speed559").value;
                      var Value632=document.getElementById("Distance559").value;
                      var Value633=document.getElementById("Distance560").value;
                      var Value634=document.getElementById("Time560").value;
                      var Value635=document.getElementById("Speed561").value;
                      var Value636=document.getElementById("Time561").value;
                      var Value637=document.getElementById("Distance562").value;
                      var Value638=document.getElementById("Speed562").value;
                      var Value639=document.getElementById("Distance563").value;
                      var Value640=document.getElementById("Time563").value;
                      var Value641=document.getElementById("Speed564").value;
                      var Value642=document.getElementById("Time564").value;
                      var Value643=document.getElementById("Distance565").value;
                      var Value644=document.getElementById("Speed565").value;
                      var Value800=document.getElementById("Decimal800").value;
                      var Value801=document.getElementById("Decimal801").value;
                      var Value802=document.getElementById("Decimal802").value;
                      var Value803=document.getElementById("Decimal803").value;
                      var Value804=document.getElementById("Decimal804").value;
                      var Value805=document.getElementById("Decimal805").value;
                      var Value806=document.getElementById("Decimal806").value;
                      var Value807=document.getElementById("Decimal807").value;
                      var Value808=document.getElementById("Decimal808").value;
                      var Value809=document.getElementById("Decimal809").value;
                      var Value810=document.getElementById("Decimal810").value;
                      var Value811=document.getElementById("Decimal811").value;
                      var Value812=document.getElementById("Decimal812").value;
                      var Value813=document.getElementById("Decimal813").value;
                      var Value814=document.getElementById("Decimal814").value;
                      var Value815=document.getElementById("Decimal815").value;
                      var Value816=document.getElementById("Decimal816").value;
                      var Value817=document.getElementById("Decimal817").value;
                      var Value818=document.getElementById("Decimal818").value;
                      var Value819=document.getElementById("Decimal819").value;
                      var Value820=document.getElementById("Decimal820").value;













                      var result501=(parseFloat(Value501)*parseFloat(Value502)).toFixed(parseFloat(Value800));
                      var result502=(parseFloat(Value503)/parseFloat(Value504)).toFixed(parseFloat(Value800));
                      var result503=(parseFloat(Value505)/parseFloat(Value506)).toFixed(parseFloat(Value800));
                      var result504=(parseFloat(Value507)*parseFloat(Value508)).toFixed(parseFloat(Value801));
                      var result505=(parseFloat(Value509)/parseFloat(Value510)).toFixed(parseFloat(Value801));
                      var result506=(parseFloat(Value511)/parseFloat(Value512)).toFixed(parseFloat(Value801));
                      var result507=(parseFloat(Value513)*parseFloat(Value514)).toFixed(parseFloat(Value802));
                      var result508=(parseFloat(Value515)/parseFloat(Value516)).toFixed(parseFloat(Value802));
                      var result509=(parseFloat(Value517)/parseFloat(Value518)).toFixed(parseFloat(Value802));
                      var result510=(parseFloat(Value519)*parseFloat(Value520)).toFixed(parseFloat(Value803));
                      var result511=(parseFloat(Value521)/parseFloat(Value522)).toFixed(parseFloat(Value803));
                      var result512=(parseFloat(Value523)/parseFloat(Value524)).toFixed(parseFloat(Value803));
                      var result513=(parseFloat(Value525)*parseFloat(Value526)*parseFloat(Value527)).toFixed(parseFloat(Value804));
                      var result514=(parseFloat(Value528)/(parseFloat(Value529)*parseFloat(Value530))).toFixed(parseFloat(Value804));
                      var result515=(parseFloat(Value531)/(parseFloat(Value532)*parseFloat(Value533))).toFixed(parseFloat(Value804));
                      var result516=(parseFloat(Value534)/(parseFloat(Value535)*parseFloat(Value536))).toFixed(parseFloat(Value804));
                      var result517=(parseFloat(Value537)*parseFloat(Value538)).toFixed(parseFloat(Value805));
                      var result518=(parseFloat(Value539)/parseFloat(Value540)).toFixed(parseFloat(Value805));
                      var result519=(parseFloat(Value541)/parseFloat(Value542)).toFixed(parseFloat(Value805));
                      var result520=((parseFloat(Value543)/parseFloat(Value544))*100).toFixed(parseFloat(Value806));
                      var result521=(parseFloat(Value546)/(parseFloat(Value545/100))).toFixed(parseFloat(Value806));
                      var result522=(parseFloat(Value547/100)*(parseFloat(Value548))).toFixed(parseFloat(Value806));
                      var result523=(parseFloat(Value549)*parseFloat(Value550)*parseFloat(Value551)).toFixed(parseFloat(Value807));
                      var result524=(parseFloat(Value552)/(parseFloat(Value553)*parseFloat(Value554))).toFixed(parseFloat(Value807));
                      var result525=(parseFloat(Value555)/(parseFloat(Value556)*parseFloat(Value557))).toFixed(parseFloat(Value807));
                      var result526=(parseFloat(Value558)/(parseFloat(Value559)*parseFloat(Value560))).toFixed(parseFloat(Value807));
                      var result527=((0.5*parseFloat(Value561))*(Math.pow(parseFloat(Value562),2))).toFixed(parseFloat(Value808));
                      var result528=((parseFloat(Value563))/parseFloat(Value564)).toFixed(parseFloat(Value808));
                      var result529=(Math.sqrt(parseFloat(Value565)/(0.5*parseFloat(Value566)))).toFixed(parseFloat(Value808));
                      var result530=(parseFloat(Value567)*parseFloat(Value568)).toFixed(parseFloat(Value809));
                      var result531=(parseFloat(Value569)/parseFloat(Value570)).toFixed(parseFloat(Value809));
                      var result532=(parseFloat(Value571)/parseFloat(Value572)).toFixed(parseFloat(Value809));
                      var result533=(parseFloat(Value573)/parseFloat(Value574)).toFixed(parseFloat(Value810));
                      var result534=(parseFloat(Value575)*parseFloat(Value576)).toFixed(parseFloat(Value810));
                      var result535=(parseFloat(Value577)/parseFloat(Value578)).toFixed(parseFloat(Value810));
                      var result536=(parseFloat(Value579)*parseFloat(Value580)*parseFloat(Value581)).toFixed(parseFloat(Value811));
                      var result537=(parseFloat(Value582)/(parseFloat(Value583)*parseFloat(Value584))).toFixed(parseFloat(Value811));
                      var result538=(parseFloat(Value585)/(parseFloat(Value586)*parseFloat(Value587))).toFixed(parseFloat(Value811));
                      var result539=(parseFloat(Value588)/(parseFloat(Value589)*parseFloat(Value590))).toFixed(parseFloat(Value811));
                      var result540=(parseFloat(Value591)/parseFloat(Value592)).toFixed(parseFloat(Value812));
                      var result541=(parseFloat(Value593)*parseFloat(Value594)).toFixed(parseFloat(Value812));
                      var result542=(parseFloat(Value595)/parseFloat(Value596)).toFixed(parseFloat(Value812));//
                      var result543=(parseFloat(Value597)/parseFloat(Value598)).toFixed(parseFloat(Value813));//
                      var result544=(parseFloat(Value599)/parseFloat(Value600)).toFixed(parseFloat(Value813));//
                      var result545=(parseFloat(Value601)*parseFloat(Value602)).toFixed(parseFloat(Value813));//
                      var result546=(parseFloat(Value603)*parseFloat(Value604)).toFixed(parseFloat(Value814));//
                      var result547=(parseFloat(Value605)/parseFloat(Value606)).toFixed(parseFloat(Value814));//
                      var result548=(parseFloat(Value607)/parseFloat(Value608)).toFixed(parseFloat(Value814));//
                      var result549=(parseFloat(Value609)*parseFloat(Value610)).toFixed(parseFloat(Value815));//
                      var result550=(parseFloat(Value611)/parseFloat(Value612)).toFixed(parseFloat(Value815));//
                      var result551=(parseFloat(Value613)/parseFloat(Value614)).toFixed(parseFloat(Value815));//
                      var result552=(parseFloat(Value615)*parseFloat(Value616)).toFixed(parseFloat(Value816));//
                      var result553=(parseFloat(Value617)/parseFloat(Value618)).toFixed(parseFloat(Value816));//
                      var result554=(parseFloat(Value619)/parseFloat(Value620)).toFixed(parseFloat(Value816));//
                      var result555=(parseFloat(Value621)*parseFloat(Value622)).toFixed(parseFloat(Value817));//
                      var result556=(parseFloat(Value623)/parseFloat(Value624)).toFixed(parseFloat(Value817));//
                      var result557=(parseFloat(Value625)/parseFloat(Value626)).toFixed(parseFloat(Value817));//
                      var result558=(parseFloat(Value627)/parseFloat(Value628)).toFixed(parseFloat(Value818));//
                      var result559=(parseFloat(Value629)*parseFloat(Value630)).toFixed(parseFloat(Value818));//
                      var result560=(parseFloat(Value631)/parseFloat(Value632)).toFixed(parseFloat(Value818));//
                      var result561=(parseFloat(Value633)/parseFloat(Value634)).toFixed(parseFloat(Value819));//
                      var result562=(parseFloat(Value635)*parseFloat(Value636)).toFixed(parseFloat(Value819));//
                      var result563=(parseFloat(Value637)/parseFloat(Value638)).toFixed(parseFloat(Value819));//
                      var result564=(parseFloat(Value639)*parseFloat(Value640)).toFixed(parseFloat(Value820));//
                      var result565=(parseFloat(Value641)/parseFloat(Value642)).toFixed(parseFloat(Value820));//
                      var result566=(parseFloat(Value643)/parseFloat(Value644)).toFixed(parseFloat(Value820));//





                      




                      var Answer500="";
                      var Answer501="";
                      var Answer502="";
                      var Answer503="";
                      var Answer504="";
                      var Answer505="";
                      var Answer506="";
                      var Answer507="";
                      var Answer508="";
                      var Answer509="";
                      var Answer510="";
                      var Answer511="";
                      var Answer512="";
                      var Answer513="";
                      var Answer514="";
                      var Answer515="";
                      var Answer516="";
                      var Answer517="";
                      var Answer518="";
                      var Answer519="";
                      var Answer520="";
                      var Answer521="";
                      var Answer522="";
                      var Answer523="";
                      var Answer524="";
                      var Answer525="";
                      var Answer526="";
                      var Answer527="";
                      var Answer528="";
                      var Answer529="";
                      var Answer530="";
                      var Answer531="";
                      var Answer532="";
                      var Answer533="";
                      var Answer534="";
                      var Answer535="";
                      var Answer536="";
                      var Answer537="";
                      var Answer538="";
                      var Answer539="";
                      var Answer540="";
                      var Answer541="";
                      var Answer542="";
                      var Answer543="";
                      var Answer544="";
                      var Answer545="";
                      var Answer546="";
                      var Answer547="";
                      var Answer548="";
                      var Answer549="";
                      var Answer550="";
                      var Answer551="";
                      var Answer552="";
                      var Answer553="";
                      var Answer554="";
                      var Answer555="";
                      var Answer556="";
                      var Answer557="";
                      var Answer558="";
                      var Answer559="";
                      var Answer560="";
                      var Answer561="";
                      var Answer562="";
                      var Answer563="";
                      var Answer564="";
                      var Answer565="";






                      if(Value501.length==0||Value502.length==0){
                      Answer500=document.getElementById("Answer500").innerHTML=``;
                      }else if(!isNaN(result501)){
                      Answer500=document.getElementById("Answer500").innerHTML=`Power=${Value501} x ${Value502}=${result501}W`;
                      }else if(isNaN(result501)){
                      Answer500=document.getElementById("Answer500").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value503.length==0||Value504.length==0){
                      Answer501=document.getElementById("Answer501").innerHTML=``;
                      }else if(!isNaN(result502)){
                      Answer501=document.getElementById("Answer501").innerHTML=`Voltage=${Value503} ÷ ${Value504}=${result502}V`;
                      }else if(isNaN(result502)){
                      Answer501=document.getElementById("Answer501").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value505.length==0||Value506.length==0){
                      Answer502=document.getElementById("Answer502").innerHTML=``;
                      }else if(!isNaN(result503)){
                      Answer502=document.getElementById("Answer502").innerHTML=`Current=${Value505} ÷ ${Value506}=${result503}A`;
                      }else if(isNaN(result503)){
                      Answer502=document.getElementById("Answer502").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value507.length==0||Value508.length==0){
                      Answer503=document.getElementById("Answer503").innerHTML=``;
                      }else if(!isNaN(result504)){
                      Answer503=document.getElementById("Answer503").innerHTML=`Voltage=${Value507} x ${Value508}=${result504}V`;
                      }else if(isNaN(result504)){
                      Answer503=document.getElementById("Answer503").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value509.length==0||Value510.length==0){
                      Answer504=document.getElementById("Answer504").innerHTML=``;
                      }else if(!isNaN(result505)){
                      Answer504=document.getElementById("Answer504").innerHTML=`Current=${Value509} ÷ ${Value510}=${result505}A`;
                      }else if(isNaN(result505)){
                      Answer504=document.getElementById("Answer504").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value511.length==0||Value512.length==0){
                      Answer505=document.getElementById("Answer505").innerHTML=``;
                      }else if(!isNaN(result506)){
                      Answer505=document.getElementById("Answer505").innerHTML=`Resistance=${Value511} ÷ ${Value512}=${result506}Ω`;
                      }else if(isNaN(result506)){
                      Answer505=document.getElementById("Answer505").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value513.length==0||Value514.length==0){
                      Answer506=document.getElementById("Answer506").innerHTML=``;
                      }else if(!isNaN(result507)){
                      Answer506=document.getElementById("Answer506").innerHTML=`Charge=${Value513} x ${Value514}=${result507}Q`;
                      }else if(isNaN(result507)){
                      Answer506=document.getElementById("Answer506").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value515.length==0||Value516.length==0){
                      Answer507=document.getElementById("Answer507").innerHTML=``;
                      }else if(!isNaN(result508)){
                      Answer507=document.getElementById("Answer507").innerHTML=`Current=${Value515} ÷ ${Value516}=${result508}A`;
                      }else if(isNaN(result508)){
                      Answer507=document.getElementById("Answer507").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value517.length==0||Value518.length==0){
                      Answer508=document.getElementById("Answer508").innerHTML=``;
                      }else if(!isNaN(result509)){
                      Answer508=document.getElementById("Answer508").innerHTML=`Time=${Value517} ÷ ${Value518}=${result509}S`;
                      }else if(isNaN(result509)){
                      Answer508=document.getElementById("Answer508").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value519.length==0||Value520.length==0){
                      Answer509=document.getElementById("Answer509").innerHTML=``;
                      }else if(!isNaN(result510)){
                      Answer509=document.getElementById("Answer509").innerHTML=`Energy=${Value519} x ${Value520}=${result510}J`;
                      }else if(isNaN(result510)){
                      Answer509=document.getElementById("Answer509").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value521.length==0||Value522.length==0){
                      Answer510=document.getElementById("Answer510").innerHTML=``;
                      }else if(!isNaN(result511)){
                      Answer510=document.getElementById("Answer510").innerHTML=`Voltage=${Value521} ÷ ${Value522}=${result511}V`;
                      }else if(isNaN(result511)){
                      Answer510=document.getElementById("Answer510").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value523.length==0||Value524.length==0){
                      Answer511=document.getElementById("Answer511").innerHTML=``;
                      }else if(!isNaN(result512)){
                      Answer511=document.getElementById("Answer511").innerHTML=`Charge=${Value523} ÷ ${Value524}=${result512}Q`;
                      }else if(isNaN(result512)){
                      Answer511=document.getElementById("Answer511").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value525.length==0||Value526.length==0||Value527.length==0){
                      Answer512=document.getElementById("Answer512").innerHTML=``;
                      }else if(!isNaN(result513)){
                      Answer512=document.getElementById("Answer512").innerHTML=`Energy=${Value525} x ${Value526} x ${Value527}=${result513}J`;
                      }else if(isNaN(result513)){
                      Answer512=document.getElementById("Answer512").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value528.length==0||Value529.length==0||Value530.length==0){
                      Answer513=document.getElementById("Answer513").innerHTML=``;
                      }else if(!isNaN(result514)){
                      Answer513=document.getElementById("Answer513").innerHTML=`Voltage=${Value528} ÷ (${Value529} x ${Value530})=${result514}V`;
                      }else if(isNaN(result514)){
                      Answer513=document.getElementById("Answer513").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value531.length==0||Value532.length==0||Value533.length==0){
                      Answer514=document.getElementById("Answer514").innerHTML=``;
                      }else if(!isNaN(result515)){
                      Answer514=document.getElementById("Answer514").innerHTML=`Current=${Value531} ÷ (${Value532} x ${Value533})=${result515}A`;
                      }else if(isNaN(result515)){
                      Answer514=document.getElementById("Answer514").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value534.length==0||Value535.length==0||Value536.length==0){
                      Answer515=document.getElementById("Answer515").innerHTML=``;
                      }else if(!isNaN(result516)){
                      Answer515=document.getElementById("Answer515").innerHTML=`Time=${Value534} ÷ (${Value535} x ${Value536})=${result516}S`;
                      }else if(isNaN(result516)){
                      Answer515=document.getElementById("Answer515").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value537.length==0||Value538.length==0){
                      Answer516=document.getElementById("Answer516").innerHTML=``;
                      }else if(!isNaN(result517)){
                      Answer516=document.getElementById("Answer516").innerHTML=`Total cost=${Value537} x ${Value538}=${result517}(Pence)`;
                      }else if(isNaN(result517)){
                      Answer516=document.getElementById("Answer516").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value539.length==0||Value540.length==0){
                      Answer517=document.getElementById("Answer517").innerHTML=``;
                      }else if(!isNaN(result518)){
                      Answer517=document.getElementById("Answer517").innerHTML=`Number of units=${Value539} ÷ ${Value540}=${result518}kWh`;
                      }else if(isNaN(result518)){
                      Answer517=document.getElementById("Answer517").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value541.length==0||Value542.length==0){
                      Answer518=document.getElementById("Answer518").innerHTML=``;
                      }else if(!isNaN(result519)){
                      Answer518=document.getElementById("Answer518").innerHTML=`Cost per unit (pence)=${Value541} ÷ ${Value542}=${result519}(Pence)`;
                      }else if(isNaN(result519)){
                      Answer518=document.getElementById("Answer518").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value543.length==0||Value544.length==0){
                      Answer519=document.getElementById("Answer519").innerHTML=``;
                      }else if(!isNaN(result520)){
                      Answer519=document.getElementById("Answer519").innerHTML=`Efficiency=(${Value543} ÷ ${Value544})x100=${result520}%`;
                      }else if(isNaN(result520)){
                      Answer519=document.getElementById("Answer519").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value545.length==0||Value546.length==0){
                      Answer520=document.getElementById("Answer520").innerHTML=``;
                      }else if(!isNaN(result521)){
                      Answer520=document.getElementById("Answer520").innerHTML=`Total Energy=${Value546} ÷ ${Value545/100}=${result521}J`;
                      }else if(isNaN(result521)){
                      Answer520=document.getElementById("Answer520").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value547.length==0||Value548.length==0){
                      Answer521=document.getElementById("Answer521").innerHTML=``;
                      }else if(!isNaN(result522)){
                      Answer521=document.getElementById("Answer521").innerHTML=`Useful Energy=${Value547/100} x ${Value548}=${result522}J`;
                      }else if(isNaN(result522)){
                      Answer521=document.getElementById("Answer521").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value549.length==0||Value550.length==0||Value551.length==0){
                      Answer522=document.getElementById("Answer522").innerHTML=``;
                      }else if(!isNaN(result523)){
                      Answer522=document.getElementById("Answer522").innerHTML=`GPE=${Value549} x ${Value550} x ${Value551}=${result523}J`;
                      }else if(isNaN(result523)){
                      Answer522=document.getElementById("Answer522").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value552.length==0||Value553.length==0||Value554.length==0){
                      Answer523=document.getElementById("Answer523").innerHTML=``;
                      }else if(!isNaN(result524)){
                      Answer523=document.getElementById("Answer523").innerHTML=`Mass=${Value552} ÷ (${Value553} x ${Value554})=${result524}KG`;
                      }else if(isNaN(result524)){
                      Answer523=document.getElementById("Answer523").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value555.length==0||Value556.length==0||Value557.length==0){
                      Answer524=document.getElementById("Answer524").innerHTML=``;
                      }else if(!isNaN(result525)){
                      Answer524=document.getElementById("Answer524").innerHTML=`Gravity=${Value555} ÷ (${Value556} x ${Value557})=${result525}M/s<sup>2</sup>`;
                      }else if(isNaN(result525)){
                      Answer524=document.getElementById("Answer524").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value558.length==0||Value559.length==0||Value560.length==0){
                      Answer525=document.getElementById("Answer525").innerHTML=``;
                      }else if(!isNaN(result526)){
                      Answer525=document.getElementById("Answer525").innerHTML=`Height=${Value558} ÷ (${Value559} x ${Value560})=${result526}M`;
                      }else if(isNaN(result526)){
                      Answer525=document.getElementById("Answer525").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value561.length==0||Value562.length==0){
                      Answer526=document.getElementById("Answer526").innerHTML=``;
                      }else if(!isNaN(result527)){
                      Answer526=document.getElementById("Answer526").innerHTML=`KE=0.5 x ${Value561} x ${Value562}<sup>2</sup>=${result527}J`;
                      }else if(isNaN(result527)){
                      Answer526=document.getElementById("Answer526").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value563.length==0||Value564.length==0){
                      Answer527=document.getElementById("Answer527").innerHTML=``;
                      }else if(!isNaN(result528)){
                      Answer527=document.getElementById("Answer527").innerHTML=`Mass=${Value563} ÷ ${Value564}<sup>2</sup>=${result528}KG`;
                      }else if(isNaN(result528)){
                      Answer527=document.getElementById("Answer527").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value565.length==0||Value566.length==0){
                      Answer528=document.getElementById("Answer528").innerHTML=``;
                      }else if(!isNaN(result529)){
                      Answer528=document.getElementById("Answer528").innerHTML=`Velocity=Square Root(${Value565} ÷ (0.5 x ${Value566}))=${result529}M/s<sup>2</sup>`;
                      }else if(isNaN(result529)){
                      Answer528=document.getElementById("Answer528").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value567.length==0||Value568.length==0){
                      Answer529=document.getElementById("Answer529").innerHTML=``;
                      }else if(!isNaN(result530)){
                      Answer529=document.getElementById("Answer529").innerHTML=`Energy Transferred=${Value567} x ${Value568}=${result530}E`;
                      }else if(isNaN(result530)){
                      Answer529=document.getElementById("Answer529").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value569.length==0||Value570.length==0){
                      Answer530=document.getElementById("Answer530").innerHTML=``;
                      }else if(!isNaN(result531)){
                      Answer530=document.getElementById("Answer530").innerHTML=`Force=${Value569} ÷ ${Value570}=${result531}N`;
                      }else if(isNaN(result531)){
                      Answer530=document.getElementById("Answer530").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value571.length==0||Value572.length==0){
                      Answer531=document.getElementById("Answer531").innerHTML=``;
                      }else if(!isNaN(result532)){
                      Answer531=document.getElementById("Answer531").innerHTML=`Distance=${Value571} ÷ ${Value572}=${result532}M`;
                      }else if(isNaN(result532)){
                      Answer531=document.getElementById("Answer531").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value573.length==0||Value574.length==0){
                      Answer532=document.getElementById("Answer532").innerHTML=``;
                      }else if(!isNaN(result533)){
                      Answer532=document.getElementById("Answer532").innerHTML=`Power=${Value573} ÷ ${Value574}=${result533}W`;
                      }else if(isNaN(result533)){
                      Answer532=document.getElementById("Answer532").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value575.length==0||Value576.length==0){
                      Answer533=document.getElementById("Answer533").innerHTML=``;
                      }else if(!isNaN(result534)){
                      Answer533=document.getElementById("Answer533").innerHTML=`Energy=${Value575} x ${Value576}=${result534}J`;
                      }else if(isNaN(result534)){
                      Answer533=document.getElementById("Answer533").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value577.length==0||Value578.length==0){
                      Answer534=document.getElementById("Answer534").innerHTML=``;
                      }else if(!isNaN(result535)){
                      Answer534=document.getElementById("Answer534").innerHTML=`Time=${Value577} ÷ ${Value578}=${result535}S`;
                      }else if(isNaN(result535)){
                      Answer534=document.getElementById("Answer534").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value579.length==0||Value580.length==0||Value580==0){
                      Answer535=document.getElementById("Answer535").innerHTML=``;
                      }else if(!isNaN(result536)){
                      Answer535=document.getElementById("Answer535").innerHTML=`Energy=${Value579} x ${Value580} x ${Value581}=${result536}J`;
                      }else if(isNaN(result536)){
                      Answer535=document.getElementById("Answer535").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value582.length==0||Value583.length==0||Value584==0){
                      Answer536=document.getElementById("Answer536").innerHTML=``;
                      }else if(!isNaN(result537)){
                      Answer536=document.getElementById("Answer536").innerHTML=`Specific Heat Capacity=${Value582} ÷ (${Value583} x ${Value584})=${result537}J/KG&#8451`;
                      }else if(isNaN(result537)){
                      Answer536=document.getElementById("Answer536").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value585.length==0||Value586.length==0||Value587==0){
                      Answer537=document.getElementById("Answer537").innerHTML=``;
                      }else if(!isNaN(result538)){
                      Answer537=document.getElementById("Answer537").innerHTML=`Mass=${Value585} ÷ (${Value586} x ${Value587})=${result538}KG`;
                      }else if(isNaN(result538)){
                      Answer537=document.getElementById("Answer537").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value588.length==0||Value589.length==0||Value590==0){
                      Answer538=document.getElementById("Answer538").innerHTML=``;
                      }else if(!isNaN(result539)){
                      Answer538=document.getElementById("Answer538").innerHTML=`Change in Temperature=${Value588} ÷ (${Value589} x ${Value590})=${result539}&#8451`;
                      }else if(isNaN(result539)){
                      Answer538=document.getElementById("Answer538").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value591.length==0||Value592.length==0||Value593==0){
                      Answer539=document.getElementById("Answer539").innerHTML=``;
                      }else if(!isNaN(result540)){
                      Answer539=document.getElementById("Answer539").innerHTML=`Speed=${Value591} ÷ ${Value592}=${result540}M/s`;
                      }else if(isNaN(result540)){
                      Answer539=document.getElementById("Answer539").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value593.length==0||Value594.length==0){
                      Answer540=document.getElementById("Answer540").innerHTML=``;
                      }else if(!isNaN(result541)){
                      Answer540=document.getElementById("Answer540").innerHTML=`Distance=${Value593} x ${Value594}=${result541}M`;
                      }else if(isNaN(result541)){
                      Answer540=document.getElementById("Answer540").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value595.length==0||Value596.length==0){
                      Answer541=document.getElementById("Answer541").innerHTML=``;
                      }else if(!isNaN(result542)){
                      Answer541=document.getElementById("Answer541").innerHTML=`Time=${Value595} ÷ ${Value596}=${result542}S`;
                      }else if(isNaN(result542)){
                      Answer541=document.getElementById("Answer541").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value597.length==0||Value598.length==0){
                      Answer542=document.getElementById("Answer542").innerHTML=``;
                      }else if(!isNaN(result543)){
                      Answer542=document.getElementById("Answer542").innerHTML=`Acceleration=${Value597} ÷ ${Value598}=${result543}M/s<sup>2</sup>`;
                      }else if(isNaN(result543)){
                      Answer542=document.getElementById("Answer542").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value599.length==0||Value600.length==0){
                      Answer543=document.getElementById("Answer543").innerHTML=``;
                      }else if(!isNaN(result544)){
                      Answer543=document.getElementById("Answer543").innerHTML=`Time=${Value599} ÷ ${Value600}=${result544}S`;
                      }else if(isNaN(result544)){
                      Answer543=document.getElementById("Answer543").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value601.length==0||Value602.length==0){
                      Answer544=document.getElementById("Answer544").innerHTML=``;
                      }else if(!isNaN(result545)){
                      Answer544=document.getElementById("Answer544").innerHTML=`Change in velocity=${Value601} x ${Value602}=${result545}M/s`;
                      }else if(isNaN(result545)){
                      Answer544=document.getElementById("Answer544").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value603.length==0||Value604.length==0){
                      Answer545=document.getElementById("Answer545").innerHTML=``;
                      }else if(!isNaN(result546)){
                      Answer545=document.getElementById("Answer545").innerHTML=`Force=${Value603} x ${Value604}=${result546}N`;
                      }else if(isNaN(result546)){
                      Answer545=document.getElementById("Answer545").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value605.length==0||Value606.length==0){
                      Answer546=document.getElementById("Answer546").innerHTML=``;
                      }else if(!isNaN(result547)){
                      Answer546=document.getElementById("Answer546").innerHTML=`Mass=${Value605} ÷ ${Value606}=${result547}KG`;
                      }else if(isNaN(result547)){
                      Answer546=document.getElementById("Answer546").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value607.length==0||Value608.length==0){
                      Answer547=document.getElementById("Answer547").innerHTML=``;
                      }else if(!isNaN(result548)){
                      Answer547=document.getElementById("Answer547").innerHTML=`Acceleration=${Value607} ÷ ${Value608}=${result548}M/s<sup>2</sup>`;
                      }else if(isNaN(result548)){
                      Answer547=document.getElementById("Answer547").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value609.length==0||Value610.length==0){
                      Answer548=document.getElementById("Answer548").innerHTML=``;
                      }else if(!isNaN(result549)){
                      Answer548=document.getElementById("Answer548").innerHTML=`Weight=${Value609} x ${Value610}=${result549}M/s<sup>2</sup>`;
                      }else if(isNaN(result549)){
                      Answer548=document.getElementById("Answer548").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value611.length==0||Value612.length==0){
                      Answer549=document.getElementById("Answer549").innerHTML=``;
                      }else if(!isNaN(result550)){
                      Answer549=document.getElementById("Answer549").innerHTML=`Mass=${Value611} ÷ ${Value612}=${result550}S`;
                      }else if(isNaN(result550)){
                      Answer549=document.getElementById("Answer549").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value613.length==0||Value614.length==0){
                      Answer550=document.getElementById("Answer550").innerHTML=``;
                      }else if(!isNaN(result551)){
                      Answer550=document.getElementById("Answer550").innerHTML=`Gravity=${Value613} ÷ ${Value614}=${result551}M/s`;
                      }else if(isNaN(result551)){
                      Answer550=document.getElementById("Answer550").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value615.length==0||Value616.length==0){
                      Answer551=document.getElementById("Answer551").innerHTML=``;
                      }else if(!isNaN(result552)){
                      Answer551=document.getElementById("Answer551").innerHTML=`Momentum=${Value615} x ${Value616}=${result552}kgm/s`;
                      }else if(isNaN(result552)){
                      Answer551=document.getElementById("Answer551").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value617.length==0||Value618.length==0){
                      Answer552=document.getElementById("Answer552").innerHTML=``;
                      }else if(!isNaN(result553)){
                      Answer552=document.getElementById("Answer552").innerHTML=`Mass=${Value617} ÷ ${Value618}=${result553}KG`;
                      }else if(isNaN(result553)){
                      Answer552=document.getElementById("Answer552").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value619.length==0||Value620.length==0){
                      Answer553=document.getElementById("Answer553").innerHTML=``;
                      }else if(!isNaN(result554)){
                      Answer553=document.getElementById("Answer553").innerHTML=`Velocity=${Value619} ÷ ${Value620}=${result554}M/s`;
                      }else if(isNaN(result554)){
                      Answer553=document.getElementById("Answer553").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value621.length==0||Value622.length==0){
                      Answer554=document.getElementById("Answer554").innerHTML=``;
                      }else if(!isNaN(result555)){
                      Answer554=document.getElementById("Answer554").innerHTML=`Change in Momentum=${Value621} x ${Value622}=${result555}kgm/s`;
                      }else if(isNaN(result555)){
                      Answer554=document.getElementById("Answer554").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value623.length==0||Value624.length==0){
                      Answer555=document.getElementById("Answer555").innerHTML=``;
                      }else if(!isNaN(result556)){
                      Answer555=document.getElementById("Answer555").innerHTML=`Force=${Value623} ÷ ${Value624}=${result556}N`;
                      }else if(isNaN(result556)){
                      Answer555=document.getElementById("Answer555").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value625.length==0||Value626.length==0){
                      Answer556=document.getElementById("Answer556").innerHTML=``;
                      }else if(!isNaN(result557)){
                      Answer556=document.getElementById("Answer556").innerHTML=`Time=${Value625} ÷ ${Value626}=${result557}S`;
                      }else if(isNaN(result557)){
                      Answer556=document.getElementById("Answer556").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value627.length==0||Value628.length==0){
                      Answer557=document.getElementById("Answer557").innerHTML=``;
                      }else if(!isNaN(result558)){
                      Answer557=document.getElementById("Answer557").innerHTML=`Density=${Value627} ÷ ${Value628}=${result558}&#9767`;
                      }else if(isNaN(result558)){
                      Answer557=document.getElementById("Answer557").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value629.length==0||Value630.length==0){
                      Answer558=document.getElementById("Answer558").innerHTML=``;
                      }else if(!isNaN(result559)){
                      Answer558=document.getElementById("Answer558").innerHTML=`Mass=${Value629} x ${Value630}=${result559}KG`;
                      }else if(isNaN(result559)){
                      Answer558=document.getElementById("Answer558").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value631.length==0||Value632.length==0){
                      Answer559=document.getElementById("Answer559").innerHTML=``;
                      }else if(!isNaN(result560)){
                      Answer559=document.getElementById("Answer559").innerHTML=`Volume=${Value631} ÷ ${Value632}=${result560}M<sup>3</sup>`;
                      }else if(isNaN(result560)){
                      Answer559=document.getElementById("Answer559").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value633.length==0||Value634.length==0){
                      Answer560=document.getElementById("Answer560").innerHTML=``;
                      }else if(!isNaN(result561)){
                      Answer560=document.getElementById("Answer560").innerHTML=`Pressure=${Value633} ÷ ${Value634}=${result561}P`;
                      }else if(isNaN(result561)){
                      Answer560=document.getElementById("Answer560").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value635.length==0||Value636.length==0){
                      Answer561=document.getElementById("Answer561").innerHTML=``;
                      }else if(!isNaN(result562)){
                      Answer561=document.getElementById("Answer561").innerHTML=`Force=${Value635} x ${Value636}=${result562}N`;
                      }else if(isNaN(result562)){
                      Answer561=document.getElementById("Answer561").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value637.length==0||Value638.length==0){
                      Answer562=document.getElementById("Answer562").innerHTML=``;
                      }else if(!isNaN(result563)){
                      Answer562=document.getElementById("Answer562").innerHTML=`Area=${Value637} ÷ ${Value638}=${result563}M<sup>2</sup>`;
                      }else if(isNaN(result563)){
                      Answer562=document.getElementById("Answer562").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value639.length==0||Value640.length==0){
                      Answer563=document.getElementById("Answer563").innerHTML=``;
                      }else if(!isNaN(result564)){
                      Answer563=document.getElementById("Answer563").innerHTML=`Moment=${Value639} x ${Value640}=${result564}N`;
                      }else if(isNaN(result564)){
                      Answer563=document.getElementById("Answer563").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value641.length==0||Value642.length==0){
                      Answer564=document.getElementById("Answer564").innerHTML=``;
                      }else if(!isNaN(result565)){
                      Answer564=document.getElementById("Answer564").innerHTML=`Force=${Value641} ÷ ${Value642}=${result565}N`;
                      }else if(isNaN(result565)){
                      Answer564=document.getElementById("Answer564").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
                      if(Value643.length==0||Value644.length==0){
                      Answer565=document.getElementById("Answer565").innerHTML=``;
                      }else if(!isNaN(result566)){
                      Answer565=document.getElementById("Answer565").innerHTML=`Perpendicular Distance From Pivot=${Value643} ÷ ${Value644}=${result566}NM`;
                      }else if(isNaN(result566)){
                      Answer565=document.getElementById("Answer565").innerHTML=`Please fill in all values with only Numbers in this row for Answer`;
                      }
}