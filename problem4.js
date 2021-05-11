function result4(inventory)
{
    let car=[]
    for(var j=0; j< inventory.length ; j++)
    {
        car.push(inventory[j].car_year)
        
    }
    return car.sort();
    
    
}
module.exports= result4
