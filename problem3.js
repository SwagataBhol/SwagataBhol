function result3(inventory)
{
    let car=[]
    for(var j=0; j< inventory.length ; j++)
    {
        car.push(inventory[j].car_model)
        
    }
    return car.sort();
    
    
}
module.exports= result3
