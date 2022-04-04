 
function PegaValores() {
   
  //Pega o valor que está na origem
  const val1 = document.getElementById('origem')
  var Val1 = val1.value;
 
  //Pega o valor que está no destino
  const val2 = document.getElementById('destino')
  var Val2 = val2.value;
  
  //Pega o valor que está no tempo
  const val3 = document.getElementById('tempo')
  var Val3 = val3.value;
 


  if(Val1=="") {
    alert('Faltando o valor de origem!')
        
   
  }
  if(Val2=="") {
    alert('Faltando o valor de destino!')
     

  }
  if(Val3=="") {
    alert('Faltando o valor de tempo em minutos!')
   

  }

  //Aqui começa os cálculos da ligação SEM PLANO e COM PLANO DO 011 PARA O 016//

  if(Val1 == "011" && Val2 =="016" && Val3 <=20){
    var SemPlano = Val3*1.90;
    parseInt(SemPlano);
   
   
   var Fale30 = SemPlano*0;
   var Fale60 = SemPlano*0;
   var Fale120 = SemPlano*0;
  } 

  if(Val1 == "011" && Val2 =="016" && (Val3 >20 && Val3 <=80)){
 
    var SemPlano = Val3*1.90;
    parseInt(SemPlano);
   
   
   var Fale30 = (Val3 - 20)*(1.9*(0.1));
   var Fale60 = 37.4;
   var Fale120 = SemPlano*0;

 }
 else if(Val1 == "011" && Val2 =="016" && (Val3 >80 && Val3 <=200)){

  var SemPlano = Val3*1.90;
  parseInt(SemPlano);
 
 
 var Fale30 = (Val3 - 20)*(1.9*(0.1));
 var Fale60 =(37.4+ (Val3 - 20)*(1.9*(0.1)));
 var Fale120 = 167.2;

 }
 
 else if(Val1 == "011" && Val2 =="016" && (Val3 >200 && Val3 <=300)){

  var SemPlano = Val3*1.90;
  parseInt(SemPlano);
 
 
 var Fale30 = (Val3 - 20)*(1.9*(0.1));
 var Fale60 =(37.4+ (Val3 - 20)*(1.9*(0.1)));
 var Fale120 = 167.2+ (Val3 - 200)*(1.9*(0.1));

 }



//AQUI COMECA DO 016 PARA 0 011




if(Val1 == "016" && Val2 =="011" && Val3 <=20){
  var SemPlano = Val3*2.90;
  parseInt(SemPlano);
 
 
 var Fale30 = SemPlano*0;
 var Fale60 = SemPlano*0;
 var Fale120 = SemPlano*0;
} 

if(Val1 == "016" && Val2 =="011" && (Val3 >20 && Val3 <=80)){

  var SemPlano = Val3*2.90;
  parseInt(SemPlano);
 
 
 var Fale30 = (Val3 - 20)*(2.90*(0.1));
 var Fale60 = 37.4;
 var Fale120 = SemPlano*0;

}
else if(Val1 == "016" && Val2 =="011" && (Val3 >80 && Val3 <=200)){

var SemPlano = Val3*2.90;
parseInt(SemPlano);


var Fale30 = (Val3 - 20)*(2.90*(0.1));
var Fale60 =(37.4+ (Val3 - 20)*(2.90*(0.1)));
var Fale120 = 167.2;

}

else if(Val1 == "016" && Val2 =="011" && (Val3 >200 && Val3 <=300)){

var SemPlano = Val3*2.90;
parseInt(SemPlano);
var Fale30 = (Val3 - 20)*(2.9*(0.1));
var Fale60 =(37.4+ (Val3 - 20)*(2.9*(0.1)));
var Fale120 = 167.2+ (Val3 - 200)*(2.9*(0.1));

}



//AQUI COMECA DO 011 PARA 0 017




if(Val1 == "011" && Val2 =="017" && Val3 <=20){
  var SemPlano = Val3*1.70;
  parseInt(SemPlano);
 
 
 var Fale30 = SemPlano*0;
 var Fale60 = SemPlano*0;
 var Fale120 = SemPlano*0;
} 

if(Val1 == "011" && Val2 =="017" && (Val3 >20 && Val3 <=80)){

  var SemPlano = Val3*1.70;
  parseInt(SemPlano);
 
 
 var Fale30 = (Val3 - 20)*(1.70*(0.1));
 var Fale60 = 37.4;
 var Fale120 = SemPlano*0;

}
else if(Val1 == "011" && Val2 =="017" && (Val3 >80 && Val3 <=200)){

var SemPlano = Val3*1.70;
parseInt(SemPlano);


var Fale30 = (Val3 - 20)*(1.70*(0.1));
var Fale60 =(37.4+ (Val3 - 20)*(1.70*(0.1)));
var Fale120 = 167.2;

}

else if(Val1 == "011" && Val2 =="017" && (Val3 >200 && Val3 <=300)){

var SemPlano = Val3*1.70;
parseInt(SemPlano);
var Fale30 = (Val3 - 20)*(1.70*(0.1));
var Fale60 =(37.4+ (Val3 - 20)*(1.70*(0.1)));
var Fale120 = 167.2+ (Val3 - 200)*(1.70*(0.1));

}



//AQUI COMECA DO 017 PARA 0 011




if(Val1 == "017" && Val2 =="011" && Val3 <=20){
  var SemPlano = Val3*2.70;
  parseInt(SemPlano);
 
 
 var Fale30 = SemPlano*0;
 var Fale60 = SemPlano*0;
 var Fale120 = SemPlano*0;
} 

if(Val1 == "017" && Val2 =="011" && (Val3 >20 && Val3 <=80)){

  var SemPlano = Val3*2.70;
  parseInt(SemPlano);
 
 
 var Fale30 = (Val3 - 20)*(2.70*(0.1));
 var Fale60 = 37.4;
 var Fale120 = SemPlano*0;

}
else if(Val1 == "017" && Val2 =="011" && (Val3 >80 && Val3 <=200)){

var SemPlano = Val3*2.70;
parseInt(SemPlano);


var Fale30 = (Val3 - 20)*(2.70*(0.1));
var Fale60 =(37.4+ (Val3 - 20)*(2.70*(0.1)));
var Fale120 = 167.2;

}

else if(Val1 == "017" && Val2 =="011" && (Val3 >200 && Val3 <=300)){

var SemPlano = Val3*2.70;
parseInt(SemPlano);
var Fale30 = (Val3 - 20)*2.70*(0.1);
var Fale60 =(37.4+ (Val3 - 20)*(2.70*(0.1)));
var Fale120 = 167.2+ (Val3 - 200)*(2.70*(0.1));

}



//AQUI COMECA DO 011 PARA 0 018




if(Val1 == "011" && Val2 =="018" && Val3 <=20){
  var SemPlano = Val3*0.9;
  parseInt(SemPlano);
 
 
 var Fale30 = SemPlano*0;
 var Fale60 = SemPlano*0;
 var Fale120 = SemPlano*0;
} 

if(Val1 == "011" && Val2 =="018" && (Val3 >20 && Val3 <=80)){

  var SemPlano = Val3*0.9;
  parseInt(SemPlano);
 
 
 var Fale30 = (Val3 - 20)*(0.9*(0.1));
 var Fale60 = 37.4;
 var Fale120 = SemPlano*0;

}
else if(Val1 == "011" && Val2 =="018" && (Val3 >80 && Val3 <=200)){

var SemPlano = Val3*0.9;
parseInt(SemPlano);


var Fale30 = (Val3 - 20)*(0.9*(0.1));
var Fale60 =(37.4+ (Val3 - 20)*(0.9*(0.1)));
var Fale120 = 167.2;

}

else if(Val1 == "011" && Val2 =="018" && (Val3 >200 && Val3 <=300)){

var SemPlano = Val3*0.9;
parseInt(SemPlano);
var Fale30 = ((Val3 - 20)*(0.9*(0.1)));
var Fale60 =(37.4+ (Val3 - 20)*(0.9*(0.1)));
var Fale120 = 167.2+ (Val3 - 200)*(0.9*(0.1));

}


//AQUI COMECA DO 018 PARA 0 011




if(Val1 == "018" && Val2 =="011" && Val3 <=20){
  var SemPlano = Val3*1.9;
  parseInt(SemPlano);
 
 
 var Fale30 = SemPlano*0;
 var Fale60 = SemPlano*0;
 var Fale120 = SemPlano*0;
} 

if(Val1 == "018" && Val2 =="011" && (Val3 >20 && Val3 <=80)){

  var SemPlano = Val3*1.9;
  parseInt(SemPlano);
 
 
 var Fale30 = (Val3 - 20)*(1.9*(0.1));
 var Fale60 = 37.4;
 var Fale120 = SemPlano*0;

}
else if(Val1 == "018" && Val2 =="011" && (Val3 >80 && Val3 <=200)){

var SemPlano = Val3*1.9;
parseInt(SemPlano);


var Fale30 = (Val3 - 20)*(1.9*(0.1));
var Fale60 =(37.4+ (Val3 - 20)*(1.9*(0.1)));
var Fale120 = 167.2;

}

else if(Val1 == "018" && Val2 =="011" && (Val3 >200 && Val3 <=300)){

var SemPlano = Val3*1.9;
parseInt(SemPlano);
var Fale30 = ((Val3 - 20)*(1.9*(0.1)));
var Fale60 =(37.4+ (Val3 - 20)*(1.9*(0.1)));
var Fale120 = 167.2+ (Val3 - 200)*(1.9*(0.1));

}




 document.getElementById('pl0').value = SemPlano;

  document.getElementById('pl1').value = Fale30;

  document.getElementById('pl2').value = Fale60;

  document.getElementById('pl3').value = Fale120;
 
 
  
  window.location.href='#l3';
 
}