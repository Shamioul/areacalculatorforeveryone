



const area_Calculate_for_area = (type,val1,val2='') =>{

    if(type =="Rectangular"){
        return `your Rectangular is ${val1*val2},`
    }
    else if(type =="Circle"){
        return `your Circle is ${3.1416* val1*val1},`
    }
    else if(type =="tringle"){
        return `your tringle is ${.5*val1*val1},`
    }
    else if(type =="squre"){
        return `your tringle is ${(val1*val1)},`
    }

}