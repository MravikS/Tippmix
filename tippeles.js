var szam = Math.floor(Math.random() * 100) + 1;
var tippdb = 0;
var tippmin = 0;
var tippmax = 100;
s="\n";
s1=" és ";
s2=" közötti";
s3=". tipp = ";

function minosit(){
   tippdb++;
   x = document.myForm.tippsz.value;
   if (x < szam) {
      if (tippmin == 0) tippmin=x;
      if (tippmin < x ) tippmin=x;
      document.myForm.gensz.value=tippmin+s1+tippmax+s2;
      document.myForm.leiras.value=tippdb+s3+x+s+"A szám kisebb, mint amire gondoltam.";
   }
   if (x > szam) {
      if (tippmax == 100) tippmax=x;
      if (tippmax > x) tippmax=x;
      document.myForm.gensz.value=tippmin+s1+tippmax+s2;
      document.myForm.leiras.value=tippdb+s3+x+s+"A szám nagyobb, mint amire gondoltam.";
   }
   if (x == szam) {
      document.myForm.gensz.value=x;
      document.myForm.leiras.value=tippdb+s3+x+s+"Eltaláltad! Nagyon ügyes vagy! :)";
   }
}

function alap(){
   tippdb=0;
   tippmin=0;
   tippmax=100;
   document.myForm.gensz.value="0 és 100 között van";
   document.myForm.tippsz.value="";
   document.myForm.leiras.value="";
   szam = Math.floor(Math.random() * 100) + 1;
}
