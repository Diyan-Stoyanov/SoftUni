function carFactory(obj){
    let result = {};
    let model = obj.model;
    let power = obj.power;
    let color = obj.color;
    let carri = obj.carriage;
    let wheelS = obj.wheelsize;
    result.model = model;
    let engine = {};
    let carriage = {};
    let arr = [];
    
    result.engine = engine
    
    if(power <= 90){
        engine.power = 90,
        engine.volume = 1800
        result.engine = engine;
    }else if(power > 90 && power <= 120){
        engine.power = 120,
        engine.volume = 2400
        result.engine = engine;
    }else if(power > 120 && power <= 200){
        engine.power = 200,
        engine.volume = 3500
        result.engine = engine;
    }
    if(carri == 'hatchback'){
        carriage.type = 'hatchback',
        carriage.color = color
        result.carriage = carriage
    }else if(carri == 'coupe'){
        carriage.type = 'coupe',
        carriage.color = color
        result.carriage = carriage;
    }

    if(wheelS % 2 == 0){
        wheelS -= 1;
        arr.push(wheelS,wheelS,wheelS,wheelS);
        result.wheels = arr
    }else{
        arr.push(wheelS,wheelS,wheelS,wheelS);
        result.wheels = arr
    }
   return result;

}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }))
