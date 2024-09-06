const products = [
    {

      seller_id: 1,
      store_name: "Tech Gadgets Co.",
      products:[
        {
          product_id: 1,
          name: 'Basic Tee',
          category: `Men's Apparel`,
          price:{
            amount: 199,
            currency: "PHP"
          },
          stock:{
            quantity: 999,
            location: "Warehouse A"
          },
          description: "Front of men's Basic Tee in black.",
          imagesUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          arrtibutes: {
            color: "Black",
            size: "Small",
            weight:"100g"
          },
          "variants": [
            {
              "variant_id": "v1",
              "name": "Standard",
              "price": 29.99,
              "stock": 100
            },
            {
              "variant_id": "v2",
              "name": "Extended",
              "price": 34.99,
              "stock": 50
            }
          ],
          "shipping_info": {
            "weight": "200g",
            "dimensions": "10x5x3 cm",
            "shipping_methods": ["Standard Shipping", "Express Shipping"]
          },
          "created_at": "2024-01-15T10:00:00Z",
          "updated_at": "2024-09-07T12:00:00Z"
        },
      ],
    }
  ]
  export default products