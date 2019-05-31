  
// SAMLEDE PRIS - lommeregner

function totalIt()
{
   var input = document.getElementsByName("product");
   var total = 0;
   for (var i = 0; i < input.length; i++)
   {
      if (input[i].checked)
      {
         total += parseFloat(input[i].value);
      }
   }
   document.getElementById("total").value = "kr " + total.toFixed(2);
}

// PRIS

// Buketter

function buket1() {
  document.getElementById("kurvbuket").innerHTML = "<p>Bukettype: Den høje</p> <p>175 kr</p>";
}

function buket2() {
  document.getElementById("kurvbuket").innerHTML = "<p>Bukettype: Den tætte</p> <p>250 kr</p>";
}

function buket3() {
  document.getElementById("kurvbuket").innerHTML = "<p>Bukettype: Den vilde</p> <p>300 kr</p>";
}

function buket4() {
  document.getElementById("kurvbuket").innerHTML = "<p>Bukettype: Den løse</p> <p>250 kr</p>";
}

        // Nuancer

//Dekoratørens valg

function nuance1() {
  document.getElementById("kurvnuance").innerHTML = "<p>Nuance: Dekoratørens valg</p> <p>0 kr</p>";
}

//Blålilla/hvide

function nuance2() {
  document.getElementById("kurvnuance").innerHTML = "<p>Nuance: Blålilla/hvide</p> <p>0 kr</p>";
}

//Hvide/lyse

function nuance3() {
  document.getElementById("kurvnuance").innerHTML = "<p>Nuance:  Hvide/lyse</p> <p>0 kr</p>";
}

//Lyserøde

function nuance4() {
  document.getElementById("kurvnuance").innerHTML = "<p>Nuance:  Lyserøde</p> <p>0 kr</p>";
}

//Lime/rosa

function nuance5() {
  document.getElementById("kurvnuance").innerHTML = "<p>Nuance: Lime/rosa</p> <p>0 kr</p>";
}

//Orange

function nuance6() {
  document.getElementById("kurvnuance").innerHTML = "<p>Nuance: Orange</p> <p>0 kr</p>";
}

//Lys lilla/lime/hvide

function nuance7() {
  document.getElementById("kurvnuance").innerHTML = "<p>Nuance: Lys lilla/lime/hvide</p> <p>0 kr</p>";
}

//Røde

function nuance8() {
  document.getElementById("kurvnuance").innerHTML = "<p>Nuance: Røde</p> <p>0 kr</p>";
}

//Røde/hvide

function nuance9() {
  document.getElementById("kurvnuance").innerHTML = "<p>Nuance: Røde/hvide</p> <p>0 kr</p>";
}

        // --- Størrelser ---

//Lille

function størrelse1() {
  document.getElementById("kurvstørrelse").innerHTML = "<p>Størrelse: Lille</p> <p>0 kr</p>";
}

// Mellem

function størrelse2() {
  document.getElementById("kurvstørrelse").innerHTML = "<p>Størrelse: Mellem</p> <p>50 kr</p>";
}

// Stor

function størrelse3() {
  document.getElementById("kurvstørrelse").innerHTML = "<p>Størrelse: Stor</p> <p>100 kr</p>";
}

        // --- TILVALG ---

// FLAG

function tilvalg1() {
    
    // checkbox findes her
  var flag = document.getElementById("kurvflag");
    //Der hvor teksten skal ind findes her
  var text1 = document.getElementById("spanflag");
    //Tilføjer/fjerner stylingen block og none
  if (flag.checked == true){
    text1.style.display = "block";
  } else {
     text1.style.display = "none";
  }
}

// Kort

function tilvalg2() {
    
    // checkbox findes her
  var kort = document.getElementById("kurvkort");
    //Der hvor teksten skal ind findes her
  var text2 = document.getElementById("spankort");
    //Tilføjer/fjerner stylingen block og none
  if (kort.checked == true){
    text2.style.display = "block";
  } else {
     text2.style.display = "none";
  }
}

// Chokolade

function tilvalg3() {
    
    // checkbox findes her
  var chokolade = document.getElementById("kurvchokolade");
    //Der hvor teksten skal ind findes her
  var text3 = document.getElementById("spanchokolade");
    //Tilføjer/fjerner stylingen block og none
  if (chokolade.checked == true){
    text3.style.display = "block";
  } else {
     text3.style.display = "none";
  }
}

// Vin

function tilvalg4() {
    
    // checkbox findes her
  var vin = document.getElementById("kurvvin");
    //Der hvor teksten skal ind findes her
  var text4 = document.getElementById("spanvin");
    //Tilføjer/fjerner stylingen block og none
  if (vin.checked == true){
    text4.style.display = "block";
  } else {
     text4.style.display = "none";
  }
}

// Specialøl

function tilvalg5() {
    
    // checkbox findes her
  var specialøl = document.getElementById("kurvspecialøl");
    //Der hvor teksten skal ind findes her
  var text5 = document.getElementById("spanspecialøl");
    //Tilføjer/fjerner stylingen block og none
  if (specialøl.checked == true){
    text5.style.display = "block";
  } else {
     text5.style.display = "none";
  }
}