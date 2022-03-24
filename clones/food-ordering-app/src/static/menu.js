import burgerIcon from '../assets/images/foodCategories/burger.png'
import pizzaIcon from '../assets/images/foodCategories/pizza.png'
import hotdogIcon from '../assets/images/foodCategories/hotdog.png'
import snackIcon from '../assets/images/foodCategories/poutine.png'
import sodaIcon from '../assets/images/foodCategories/soda.png'
import tacoIcon from '../assets/images/foodCategories/taco.png'
import mushroomPizza from '../assets/images/food/mushroomPizza.jpg'
import italianPizza from '../assets/images/food/italianPizza.webp'
import pepperoniPizza from '../assets/images/food/pepperoniPizza.jpg'
import doubleMeatBurger from '../assets/images/food/doubleBurger.jpg'
import westernBurger from '../assets/images/food/westernBurger.jpg'
import cheeseBurger from '../assets/images/food/cheeseBurger.jpg'
import hotdogPickle from '../assets/images/food/hotdogPickle.jpg'
import bbqHotDog from '../assets/images/food/bbqHotDog.jpg'
import baconHotDog from '../assets/images/food/baconHotDog.jpg'
import poutine from '../assets/images/food/poutine.jpg'
import macNCheese from '../assets/images/food/macNCheese.jpg'
import tacos from '../assets/images/food/tacos.jpg'
import coke from '../assets/images/food/coke.jpg'

export const menu = [
  {
    title: 'Pizza',
    icon: pizzaIcon,
    items: [
      {
        name: 'Mushroom Pizza',
        price: 7.49,
        rating: 5,
        emoji: '🍄',
        image: mushroomPizza,
      },
      {
        name: 'Italian Pizza',
        price: 12.98,
        rating: 5,
        emoji: '🇮🇹',
        image: italianPizza,
      },
      {
        name: 'Pepperoni Pizza',
        price: 9.99,
        rating: 5,
        emoji: '🌶️',
        image: pepperoniPizza,
      },
    ],
  },
  {
    title: 'Burger',
    icon: burgerIcon,
    items: [
      {
        name: 'Cheese Burger',
        price: 11.78,
        rating: 5,
        emoji: '🧀',
        image: cheeseBurger,
      },
      {
        name: 'Western Burger',
        price: 13.95,
        rating: 5,
        emoji: '🥓',
        image: westernBurger,
      },
      {
        name: 'Double Meat Burger',
        price: 15.99,
        rating: 5,
        emoji: '🥩',
        image: doubleMeatBurger,
      },
    ],
  },
  {
    title: 'Hot Dog',
    icon: hotdogIcon,
    items: [
      {
        name: 'Hot Dog w/ Pickles',
        price: 5.99,
        rating: 4,
        emoji: '🌭',
        image: hotdogPickle,
      },
      {
        name: 'BBQ Dog',
        price: 15.99,
        rating: 5,
        emoji: '🍗',
        image: bbqHotDog,
      },
      {
        name: 'Bacon Hot Dog',
        price: 13.99,
        rating: 5,
        emoji: '🥓',
        image: baconHotDog,
      },
    ],
  },
  {
    title: 'Taco',
    icon: tacoIcon,
    items: [
      {
        name: 'Taco',
        price: 5.99,
        rating: 5,
        emoji: '🌮',
        image: tacos,
      },
    ],
  },
  {
    title: 'Snack',
    icon: snackIcon,
    items: [
      {
        name: 'Poutine',
        price: 3.99,
        rating: 5,
        emoji: '🥨',
        image: poutine,
      },
      {
        name: "Mac 'n' Cheese",
        price: 3.99,
        rating: 5,
        emoji: '🧀',
        image: macNCheese,
      },
    ],
  },
  {
    title: 'Soda',
    icon: sodaIcon,
    items: [
      {
        name: 'Coke',
        price: 1.99,
        rating: 5,
        emoji: '🥤',
        image: coke,
      },
    ],
  },
]