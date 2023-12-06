

function add(id){
    let count=0;

    return function(){
        count++;
        document.getElementById(id).innerText=count;
    }
}


let btn1=add('btn1');
let btn2=add('btn2');


// function inp(input,output){
//     let text1='';

//     return function (){
//         text1 += '' + document.getElementById(input).value;
//         // document.getElementById(input).value='';
//         document.getElementById(output).innerText=text1;
//         setTimeout(()=>{
//             document.getElementById(input).value=''
//         },2000)
//     }  
// }

// let input1 = inp('inp1' ,'para1');
// let input2 = inp('inp2' ,'para2');

// const head = document.getElementById('head');



const Name="Lingesh";

for(let i=0 ; i <  Name.length; i++){

    for(let k=1;k<=7-i;k++){
        document.write('*');
    }

    // for(let a=0; a <=i ; a++){
    // document.write(`*`);
    // }

    // for(let b=Name.length-1;b >= i;b--){
    // document.write(Name[i]); 
    // }

document.write(Name[i]);
document.write('<br>');

}



// for(let x=0;x<=5;x++){

//     for(let a=0;a<10;a++){
//         document.write('&nbsp')
//     }
// }





for( let i=1;i<=5;i++){

                // L


    for(let a=0;a < 1;a++){
        document.write('*')
    }

if(i!==5){
    for(let a=0;a<=9;a++){
    document.write('&nbsp')
    }
}

else{
    for(let a=1;a <=5;a++){
    document.write('*')
    }
}

            //space between L

for(let a=0;a <=2;a++){
    document.write('&nbsp')
}

                //E

    for(let a=0;a < 1;a++){
    document.write('*')
    }

if(i%2!==0){
    for(let a=1;a <=6;a++){
    document.write('*')
    }
}

else{
    for(let a=1;a <=12;a++){
    document.write('&nbsp')
    }
}


            // space between E

for(let a=0;a <=1;a++){
    document.write('&nbsp')
}


            // E

for(let a=0;a < 1;a++){
    document.write('*')
}

if(i%2!==0){
    for(let a=1;a <=6;a++){
    document.write('*')
    }
}

else{
    for(let a=1;a <=6;a++){
    document.write('&nbsp')
    }
}


      document.write(' <br>')
    
    //   if(i===4){
    //     for(let a=1;a <=6;a++){
    //         document.write('*')
    //     }
    //     }

}






                //Object assign


let person={name:"lee",dob:14_06_2001}; 

let data=Object.assign({},person);

console.log(person);



                                //both are same

                    
// spread opreator

let data2={...person};

console.log(data2);

// person.me=person;

let data3=structuredClone(person);
console.log(data3);

person.me=person;