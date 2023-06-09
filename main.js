
// l'IA of trying

function lire(texto){ 
    var texto = document.getElementById('text').value;
    var syntheseVocale = window.speechSynthesis;
    var message = new SpeechSynthesisUtterance(texto);
    message.voiceURI ='native';
    message.lang = 'fr-FR';
    syntheseVocale.speak(message)
}
// //document.getElementById('formTask').addEventListener('submit', saveTask);

//  class chanter{ 
//   constructor(nombre,titre,durer) { 
// this.nombre= nombre.toUpperCase();
// this.titre = titre;
// this.durer = durer;
  
//   }
// }
// let nouveau = new chanter (' si jodia m vivan', 'bondye ou gran',44);
// console.log(nouveau);
  
// //console.log(chanter);
// //document.getElementById('result').innerHTML=nouveau;
// //nouveau.presentation()
// const input = document.querySelector("input");
// const addBtn = document.querySelector(".btn-add");
// const ul = document.querySelector("ul");
// const empty = document.querySelector(".empty");

    
     
//     switch(monJours){
//         // case 1:
//         //     return 'dimanche';
//         //     break;
//             case 2:
//                 return 'lundi';
//                 break;
//                 case 3:
//                     return 'mardi';
//                     break;
//                     case 4:
//                         return 'mercredi';
//                         break;
//                         case 5:
//                             return 'jeudi';
//                             break;
//                             case 6:
//                                 return 'vendri';
//                                 break;
//                                 case 7:
//                                     return 'samedi';
//                                     break;
    
//         default:
//             return'entrer un numero valide'
//             break;
//     }

// function resulta(jours){
    
//     document.getElementById('resulta').innerHTML=lesJours(jours);



  // export const  mme='scheltong president';
  // export let  userTry={
  //   prenom: 'scheltong henri',
  //   nom: 'Elisma'
  // }

 