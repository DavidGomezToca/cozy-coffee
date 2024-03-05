const products = [
    {
        name: "Caramel Coffee with Chocolate",
        price: 59.9,
        image: "Coffee_01",
        category_id: 1,
        id: 1
    },
    {
        name: "Cold Coffee with Large Chocolate",
        price: 49.9,
        image: "Coffee_02",
        category_id: 1,
        id: 2
    },
    {
        name: "Cold Latte with Extra Large Chocolate",
        price: 54.9,
        image: "Coffee_03",
        category_id: 1,
        id: 3
    },
    {
        name: "Cold Latte with Large Chocolate",
        price: 54.9,
        image: "Coffee_04",
        category_id: 1,
        id: 4
    },
    {
        name: "Cold Shake with Large Chocolate",
        price: 54.9,
        image: "Coffee_05",
        category_id: 1,
        id: 5
    },
    {
        name: "Hot Small Mocha Coffee",
        price: 39.9,
        image: "Coffee_06",
        category_id: 1,
        id: 6
    },
    {
        name: "Hot Mocha Coffee With Chocolate",
        price: 59.9,
        image: "Coffee_07",
        category_id: 1,
        id: 7
    },
    {
        name: "Hot Large Cappuccino",
        price: 59.9,
        image: "Coffee_08",
        category_id: 1,
        id: 8
    },
    {
        name: "Hot Medium Mocha Coffee",
        price: 49.9,
        image: "Coffee_09",
        category_id: 1,
        id: 9
    },
    {
        name: "Cold Medium Mocha Coffee With Caramel",
        price: 49.9,
        image: "Coffee_10",
        category_id: 1,
        id: 10
    },
    {
        name: "Cold Medium Mocha Coffee With Chocolate",
        price: 49.9,
        image: "Coffee_11",
        category_id: 1,
        id: 11
    },
    {
        name: "Espresso",
        price: 29.9,
        image: "Coffee_12",
        category_id: 1,
        id: 12
    },
    {
        name: "Large Cappuccino With Caramel",
        price: 59.9,
        image: "Coffee_13",
        category_id: 1,
        id: 13
    },
    {
        name: "Large Coffee With Caramel",
        price: 59.9,
        image: "Coffee_14",
        category_id: 1,
        id: 14
    },
    {
        name: "Burger",
        price: 59.9,
        image: "Burger_01",
        category_id: 2,
        id: 15
    },
    {
        name: "Chicken Burger",
        price: 59.9,
        image: "Burger_02",
        category_id: 2,
        id: 16
    },
    {
        name: "Chicken And Chilli Burger",
        price: 59.9,
        image: "Burger_03",
        category_id: 2,
        id: 17
    },
    {
        name: "Cheese And Pickles Burger",
        price: 59.9,
        image: "Burger_04",
        category_id: 2,
        id: 18
    },
    {
        name: "Quarter Pounder Burger",
        price: 59.9,
        image: "Burger_05",
        category_id: 2,
        id: 19
    },
    {
        name: "Double Cheese Burger",
        price: 69.9,
        image: "Burger_06",
        category_id: 2,
        id: 20
    },
    {
        name: "Special Hot Dog",
        price: 49.9,
        image: "Burger_07",
        category_id: 2,
        id: 21
    },
    {
        name: "2 Hot Dogs",
        price: 69.9,
        image: "Burger_08",
        category_id: 2,
        id: 22
    },
    {
        name: "Spicy Pizza With Double Cheese",
        price: 69.9,
        image: "Pizza_01",
        category_id: 3,
        id: 23
    },
    {
        name: "Ham And Cheese Pizza",
        price: 69.9,
        image: "Pizza_02",
        category_id: 3,
        id: 24
    },
    {
        name: "Double Cheese Pizza",
        price: 69.9,
        image: "Pizza_03",
        category_id: 3,
        id: 25
    },
    {
        name: "House Special Pizza",
        price: 69.9,
        image: "Pizza_04",
        category_id: 3,
        id: 26
    },
    {
        name: "Chorizo Pizza",
        price: 69.9,
        image: "Pizza_05",
        category_id: 3,
        id: 27
    },
    {
        name: "Hawaiian Pizza",
        price: 69.9,
        image: "Pizza_06",
        category_id: 3,
        id: 28
    },
    {
        name: "Bacon Pizza",
        price: 69.9,
        image: "Pizza_07",
        category_id: 3,
        id: 29
    },
    {
        name: "Vegetable and Cheese Pizza",
        price: 69.9,
        image: "Pizza_08",
        category_id: 3,
        id: 30
    },
    {
        name: "Pepperoni and Cheese Pizza",
        price: 69.9,
        image: "Pizza_09",
        category_id: 3,
        id: 31
    },
    {
        name: "Olives and Cheese Pizza",
        price: 69.9,
        image: "Pizza_10",
        category_id: 3,
        id: 32
    },
    {
        name: "Cheese, Ham, and Mushroom Pizza",
        price: 69.9,
        image: "Pizza_11",
        category_id: 3,
        id: 33
    },
    {
        name: "3 Chocolate Donuts",
        price: 39.9,
        image: "Donut_01",
        category_id: 4,
        id: 34
    },
    {
        name: "3 Glazed Donuts",
        price: 39.9,
        image: "Donut_02",
        category_id: 4,
        id: 35
    },
    {
        name: "Strawberry Donut",
        price: 19.9,
        image: "Donut_03",
        category_id: 4,
        id: 36
    },
    {
        name: "Donut With Chocolate Cookie",
        price: 19.9,
        image: "Donut_04",
        category_id: 4,
        id: 37
    },
    {
        name: "Glazed Donut With Strawberry Sprinkles",
        price: 19.9,
        image: "Donut_05",
        category_id: 4,
        id: 38
    },
    {
        name: "Glazed Donut With Chocolate",
        price: 19.9,
        image: "Donut_06",
        category_id: 4,
        id: 39
    },
    {
        name: "Chocolate Donut Extra Chocolate",
        price: 19.9,
        image: "Donut_07",
        category_id: 4,
        id: 40
    },
    {
        name: "3 Chocolate Donuts",
        price: 39.9,
        image: "Donut_08",
        category_id: 4,
        id: 41
    },
    {
        name: "3 Donuts With Vanilla And Chocolate",
        price: 39.9,
        image: "Donut_09",
        category_id: 4,
        id: 42
    },
    {
        name: "6 Donuts",
        price: 69.9,
        image: "Donut_10",
        category_id: 4,
        id: 43
    },
    {
        name: "3 Assorted Donuts",
        price: 39.9,
        image: "Donut_11",
        category_id: 4,
        id: 44
    },
    {
        name: "Natural Donut",
        price: 19.9,
        image: "Donut_12",
        category_id: 4,
        id: 45
    },
    {
        name: "3 Donuts With Chocolate Sprinkles",
        price: 39.9,
        image: "Donut_13",
        category_id: 4,
        id: 46
    },
    {
        name: "Donut With Chocolate And Coconut",
        price: 19.9,
        image: "Donut_14",
        category_id: 4,
        id: 47
    },
    {
        name: "4 Slices Of Cheesecake",
        price: 69.9,
        image: "Dessert_01",
        category_id: 5,
        id: 48
    },
    {
        name: "Waffle",
        price: 49.9,
        image: "Dessert_02",
        category_id: 5,
        id: 49
    },
    {
        name: "Croissants",
        price: 39.9,
        image: "Dessert_03",
        category_id: 5,
        id: 50
    },
    {
        name: "Cheesecake",
        price: 19.9,
        image: "Dessert_04",
        category_id: 5,
        id: 51
    },
    {
        name: "Chocolate Cake",
        price: 29.9,
        image: "Dessert_05",
        category_id: 5,
        id: 52
    },
    {
        name: "Slice Of Chocolate Cake",
        price: 29.9,
        image: "Dessert_06",
        category_id: 5,
        id: 53
    },
    {
        name: "Chocolate Cookies Pack",
        price: 29.9,
        image: "Cookie_01",
        category_id: 6,
        id: 54
    },
    {
        name: "Chocolate And Oatmeal Cookies Pack",
        price: 39.9,
        image: "Cookie_02",
        category_id: 6,
        id: 55
    },
    {
        name: "Vanilla Muffins Pack",
        price: 39.9,
        image: "Cookie_03",
        category_id: 6,
        id: 56
    },
    {
        name: "4 Oatmeal Cookies",
        price: 24.9,
        image: "Cookie_04",
        category_id: 6,
        id: 57
    },
    {
        name: "Assorted Butter Cookies",
        price: 39.9,
        image: "Cookie_05",
        category_id: 6,
        id: 58
    },
    {
        name: "Fruity Flavored Cookies",
        price: 39.9,
        image: "Cookie_06",
        category_id: 6,
        id: 59
    }
]

export {
    products as products
}