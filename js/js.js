
const Calculate_for_area=document.querySelector('#Calculate_for_area')
const Area_select =document.querySelector('select[name="Area_select"]')
const rec=document.querySelector('.rec')
const Cir=document.querySelector('.Cir')
const tri=document.querySelector('.tri')
const squ=document.querySelector('.squ')
const msg=document.querySelector('.msg')

Area_select.onchange = ( ) =>{
   if(Area_select.value =="Rectangular"){
    rec.style.display= 'block';
   }else{
    rec.style.display= '';
   };


   if(Area_select.value =="Circle"){
    Cir.style.display= 'block';
   }else{
    Cir.style.display= '';
   };



   if(Area_select.value =="tringle"){
    tri.style.display= 'block';
   }else{
    tri.style.display= '';
   };



   if(Area_select.value =="squre"){
    squ.style.display= 'block';
   }else{
    squ.style.display= '';
   };
};

Calculate_for_area.onsubmit=(e)=>{
    
    e.preventDefault();
if(Area_select.value =="Rectangular"){

        let leangth =Calculate_for_area.querySelector('input[name="leangth"]') 
        let width =Calculate_for_area.querySelector('input[name="width"]') 

        msg.innerHTML= area_Calculate_for_area(Area_select.value,leangth.value, width.value)
       
}else if(Area_select.value =="Circle"){

    let leangth =Calculate_for_area.querySelector('input[name="redius"]') 

    msg.innerHTML= area_Calculate_for_area(Area_select.value,leangth.value)
   
}else if(Area_select.value =="tringle"){

    let base =Calculate_for_area.querySelector('input[name="base"]') 
    let heihgt =Calculate_for_area.querySelector('input[name="heihgt"]') 

    msg.innerHTML= area_Calculate_for_area(Area_select.value,base.value,heihgt.value)
   
}else if(Area_select.value =="squre"){

    let arms =Calculate_for_area.querySelector('input[name="arms"]') 

    msg.innerHTML= area_Calculate_for_area(Area_select.value,arms.value)
   
}
else{
    msg.innerHTML= "All filers require"
} 
    
}



