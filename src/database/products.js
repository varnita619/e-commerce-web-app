import { v4 as uuid } from "uuid";
import shoe from "./../assets/assets/shoe.jpg";
import shoe2 from "./../assets/assets/shoe2.png";
import shoe3 from "./../assets/assets/shoe3.webp";
import shoe4 from "./../assets/assets/shoe4.webp";
import shoe5 from "./../assets/assets/shoe5.webp";
import shoe7 from "./../assets/assets/shoe7.jpg";

export const products = [
  {
    _id: uuid(),
    name: "KSL 01",
    price: "2000",
    rating: "3",
    desc: "by KICKSUP and you",
    reviews: "80 reviews",
    category: "loafers",
    imageURL: shoe2,
  },
  {
    _id: uuid(),
    name: "KSW 01",
    price: "1500",
    rating: "3",
    desc: "by KICKSUP and you",
    reviews: "80 reviews",
    category: "loafers",
    imageURL: shoe3,
  },
  {
    _id: uuid(),
    name: "Royal S 01",
    price: "6000",
    rating: "3",
    desc: "by KICKSUP and you",
    reviews: "80 reviews",
    category: "sneakers",
    imageURL: shoe,
  },
  {
    _id: uuid(),
    name: "KSL 01",
    price: "5000",
    rating: "3",
    desc: "by KICKSUP and you",
    reviews: "80 reviews",
    category: "sneakers",
    imageURL: shoe4,
  },
  {
    _id: uuid(),
    name: "KSW 01",
    price: "8000",
    rating: "3",
    desc: "by KICKSUP and you",
    reviews: "80 reviews",
    category: "sneakers",
    imageURL: shoe5,
  },
  {
    _id: uuid(),
    name: "Royal S 01",
    price: "3500",
    rating: "3",
    desc: "by KICKSUP and you",
    reviews: "80 reviews",
    category: "loafers",
    imageURL: shoe7,
  },
];
