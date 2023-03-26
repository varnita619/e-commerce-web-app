export const filterByPriceRange = (data, price) =>{
    return[
        ...data.filter((item)=> Number(item.price) <= price)
    ]
}

