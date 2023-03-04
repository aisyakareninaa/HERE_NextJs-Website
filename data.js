const data = [
    {
      "id": 1,
      "name": "Fabric Bed",
      "price": 23000000,
      "image": "assets/bed-cozy.jpg",
      "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      "isDeleted": false,
      "category": "Best-Seller",
      "expiryDate": "2022-07-24"
    },
    {
        "id": 2,
        "name": "Blanket Flower Knit",
        "price": 110000,
        "image": "assets/blanket.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Pre-Order",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 3,
        "name": "Basic Mattres",
        "price": 3000000,
        "image": "assets/bed-basic.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Ready",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 4,
        "name": "Pillow Smiley Cloud",
        "price": 210000,
        "image": "assets/pillow-cloud.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Ready",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 5,
        "name": "Pattrened Pinky Rug",
        "price": 110000,
        "image": "assets/pattrened-rug.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Pre-Order",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 6,
        "name": "Polytress Fuffly Bed",
        "price": 11000000,
        "image": "assets/bed-polytress.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Ready",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 7,
        "name": "Snorlax Bean Bag",
        "price": 5500000,
        "image": "assets/beanbag-lucu.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Best-Seller",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 8,
        "name": "Basic White Bean Bag",
        "price": 200000,
        "image": "assets/beanbag-basic.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Ready",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 9,
        "name": "Warmer Cutie Duck Blanket",
        "price": 50000,
        "image": "assets/blanket-warmer.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Best-Seller",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 10,
        "name": "Faux Fur Blanket",
        "price": 700000,
        "image": "assets/blanket-fauxfur.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Ready",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 11,
        "name": "Teddy Blindfold",
        "price": 70000,
        "image": "assets/blindfold.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Ready",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 12,
        "name": "diffuser",
        "price": 123000,
        "image": "assets/diffuser.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Ready",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 13,
        "name": "Chubby Softie Seat",
        "price": 300000,
        "image": "assets/seat-chubby.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Pre-Order",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 14,
        "name": "Neck Pillow Animations",
        "price": 89000,
        "image": "assets/pillow-neckcute.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Ready",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 15,
        "name": "Cat Paw Rug",
        "price": 99000,
        "image": "assets/catpaw-rug.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Best-Seller",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 16,
        "name": "Arm Warmer Crocket Pattren",
        "price": 79000,
        "image": "assets/arm-warmer.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Ready",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 17,
        "name": "Hand Warmer Transparant",
        "price": 50000,
        "image": "assets/hand-warmer.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Ready",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 18,
        "name": "Bunny Cotton Slippers",
        "price": 99000,
        "image": "assets/cotton-slippers.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Best-Seller",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 19,
        "name": "Totoro Pillow Set",
        "price": 180000,
        "image": "assets/totoro-pillow.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Pre-Order",
        "expiryDate": "2022-07-24"
      },
      {
        "id": 20,
        "name": "Electric USB Warmer Foot",
        "price": 189000,
        "image": "assets/warmer-foot.jpg",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "isDeleted": false,
        "category": "Ready",
        "expiryDate": "2022-07-24"
      }
    
  ]

  export default data;