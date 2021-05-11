function result6(inventory)
{
    let car=[]
    for(var j=0; j< inventory.length ; j++)
    {
        if(inventory[j].car_make=== "BMW" || inventory[j].car_make=== "Audi")
        
        {
            car.push(inventory[j])
        }
        
    }
    return car;
    
    
}
module.exports= result6
