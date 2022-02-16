const tab=[8 ,12,9,12 ,17,18, 15, 13];

    var nb=0;
    for ( el in tab ){
      if(el>9){nb+=1;}
      
    }
   // for(var i=0;i<8;i++)
    
  // { if(tab[i]>9){nb++}}
  
  console.log("Nombre de notes supérieures à 10:"+nb);

  var som=0;
  for ( el in tab ){
    som+=el;
  }
  console.log(som);
  var noteM=0;
  noteM=som/8;
  console.log(noteM);

tab.sort(function(a,b){return   a - b});
console.log(tab);
var tab2=[
{

  prenom : "tata",
  note : 8
},
{
  prenom : "tete",
  note : 12 
},
{
  prenom : "titi",
  note : 9
},
{
  prenom : "toto",
  note : 12
},
{
  prenom : "tutu",
  note : 17
},
{
  prenom : "tate",
  note : 18
},
{
  prenom : "tati",
  note : 15
},
{
  prenom : "tato",
  note : 13
}
]
