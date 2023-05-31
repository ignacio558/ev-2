use('ecommerce');
// Crceate new model for Category
const category_model = {
  _id: ObjectId("5f8b9a7b9b3b3b3b3b3b3b3b"),
  name: 'Electronics',
  description: 'Electronic Items',
  createdAt: ISODate("2020-10-17T00:00:00Z"),
  updatedAt: ISODate("2020-10-17T00:00:00Z"),
  is_active: true,
  owner: ObjectId("5f8b9a7b9b3b3b3b3b3b3b4a"),
  images: [
    {
      "kind": "thumbnail",
      "url": "images/products/iphone7-thumb.jpg",
      "description": "Image of iPhone 7"
    },
    {
      "kind": "catalog",
      "url": "images/products/iphone7-catalog.jpg",
      "description": "Image of iPhone 7"
    },
    {
      "kind": "banner",
      "url": "images/products/iphone7-banner.jpg",
      "description": "Image of iPhone 7"
    },
    {
      "kind": "icon",
      "url": "images/products/iphone7-icon.jpg",
      "description": "Image of iPhone 7"
    }
  ],
  tags: ['Smartphone', 'Computer', 'Laptop', 'Parts', 'Accessories'],
  parent: null
};
// Create a sub-category
const sub_category_model = {
  _id: ObjectId("5f8b9a7b9b3b3b3b3b3b3b3c"),
  name: 'Smartphone',
  description: 'Smartphone Items',
  createdAt: ISODate("2020-10-17T00:00:00Z"),
  updatedAt: ISODate("2020-10-17T00:00:00Z"),
  is_active: true,
  owner: ObjectId("5f8b9a7b9b3b3b3b3b3b3b4a"),
  images: [
    {
      "kind": "thumbnail",
      "url": "images/products/iphone7-thumb.jpg",
      "description": "Image of iPhone 7"
    },
  ],
  tags: ['iPhone', 'Samsung', 'Android', 'iOS'],
  parent: ObjectId("5f8b9a7b9b3b3b3b3b3b3b3b")
};
// Create a new model Product
const product_model = {
  name: 'iPhone 7',
  price: 699,
  stock: 10,
  description: 'The latest iPhone, 7-inch screen, 128GB storage',
  category: 'Electronics',
  tags: ['Apple', 'iPhone', 'Electronics', 'iOS', 'Smartphone'],
  owner: ObjectId("5f8b9a7b9b3b3b3b3b3b3b4a"),
  createdAt: ISODate("2020-10-17T00:00:00Z"),
  updatedAt: ISODate("2020-10-17T00:00:00Z"),
  is_active: true,
  physical: {
    dimensions: {
      length: 5.44,
      width: 2.64,
      height: 0.28,
      unit: 'inches'
    },
    weight: {
      value: 4.87,
      unit: 'ounces'
    },
    color: 'black',
    size: '7 inch',
    // more details      
  },
  features: [
    {
      "name": "Screen Size",
      "value": "7 inch"
    },
    {
      "name": "Storage",
      "value": "128GB"
    },
    {
      "name": "OS",
      "value": "iOS"
    }
  ],
  reviews: [
    {
      "userId": ObjectId("5f8b9a7b9b3b3b3b3b3b3b3b"),
      "comment": "This is a great phone!",
      "stars": 5,
      "createdAt": ISODate("2020-10-17T00:00:00Z")
    },
    {
      "userId": ObjectId("5f8b9a7b9b3b3b3b3b3b3b3b"),
      "comment": "I never knew a phone could be this good!",
      "stars": 4,
      "createdAt": ISODate("2020-10-18T00:00:00Z")
    }
  ],
  images: [
    {
      "kind": "thumbnail",
      "url": "images/products/iphone7-thumb.jpg",
      "description": "Image of iPhone 7"
    },
    {
      "kind": "catalog",
      "url": "images/products/iphone7-catalog.jpg",
      "description": "Image of iPhone 7"
    }
  ]
};
// Create a new model Product
const productos = db.productos.aggregate([
  {
    $lookup: {
      from: "categorias",
      localField: "categoriaId",
      foreignField: "_id",
      as: "categoria"
    }
  },
  {
    $project: {
      _id: 0,
      "nombreCategoria": { $arrayElemAt: ["$categoria.nombre", 0] },
      "nombreProducto": 1,
      "datoProducto": 1
    }
  }
]);

