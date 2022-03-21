import * as fs from 'fs'

export default async function handler(req,res){
    let data=await fs.promises.readFile('allProducts/products.json','utf-8')
    let parsedData=await JSON.parse(data)
    let allProducts=parsedData.products
    let product={}
    for (let index = 0; index < allProducts.length; index++) {
        if(allProducts[index].product_id==req.query.id){
            product=allProducts[index]
        }
    }
    res.json(product)
}