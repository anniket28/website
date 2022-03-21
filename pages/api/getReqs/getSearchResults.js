import * as fs from 'fs'

export default async function handler(req,res){
    let data=await fs.promises.readFile('allProducts/products.json','utf-8')
    let parsedData=await JSON.parse(data)
    let allProducts=parsedData.products
    let matchingProducts=[]
    allProducts.forEach(product => {
        if((product.product_description).includes(req.query.query)){
            matchingProducts.push(product)
        }
    });
    res.json(matchingProducts)
}