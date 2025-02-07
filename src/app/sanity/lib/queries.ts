import { defineQuery } from "next-sanity";

export const fourPro = defineQuery(`
  *[_type == "product"] | order(_createdAt desc) [4..7] {
    _id,
    name,
    description,
    price,
    "imageUrl": image.asset->url,
    category,
    stockLevel,
  }
`);

    export const allProduct =defineQuery(`
    *[_type == "product"] {
      _id,
      name,
      description,
      price,
      "imageUrl": image.asset->url,
      category,
      stockLevel
    }
  `)
  
  export const productById =defineQuery(`
    *[_type == "product" && _id == $id][0] {
      _id,
      name,
      description,
      price,
      "imageUrl": image.asset->url,
      category,
      stockLevel
    }
  `)



  export const threePro = defineQuery(`
    *[_type == "product"] | order(_createdAt desc) [12..14] {
      _id,
      name,
      description,
      price,
      "imageUrl": image.asset->url,
      category,
      stockLevel,
    }
  `);