function result5(inventory)
{
    let car=[]
    for(var j=0; j< inventory.length ; j++)
    {
        if(inventory[j].car_year < 2000)
        
        {
            car.push(inventory[j].car_year)
        }
        
    }
    return car;
    
    
}
module.exports= result5
