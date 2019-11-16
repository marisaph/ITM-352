// array of products to reference 
// modified from lab 13
products_array =
[ 
    {
        //product 1
        "model":"Nixon Kensington Milanese",
        "price": 175.00,
        "image": "./Images/Nixon.jpg"        
    },
    {
        //product 2
        "model":"Fossil Jacqueline Three-Hand Date Navy Leather Watch",
        "price": 119.00,
        "image": "./Images/Fossil.jpeg"  
    },
    {
        //product 3
        "model":"Daniel Wellington Classic Petite Mesh Strap Watch",
        "price": 169.00,
        "image": "./Images/DW.jpeg"  
    },
    {
        //product 4
        "model":"G-Shock Baby-G Pink Dial Digital Watch",
        "price": 89.00,
        "image": "./Images/Baby-G.jpeg"  
    },
    {
        //product 5
        "model":"MVMT Signature Bracelet Watch",
        "price": 150.00,
        "image": "./Images/MVMT.jpeg"  
    }
];
if(typeof module != 'undefined') {
    module.exports.products_array = products_array;
  }
  