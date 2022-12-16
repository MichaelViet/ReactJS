import React, { useState } from 'react';
import styles from './Counter.module.css';
const Cart = () => {
    const [products, setProducts] = useState([ // Створюємо початковий стан для масиву товарів

        // Список товарів у кошику
        {
            name: 'LEGO: ',
            price: 300,
            min: 0,
            max: 10,
            quantity: 0,
        },
        {
            name: 'Train Station: ',
            price: 200,
            min: 0,
            max: 20,
            quantity: 0,
        },
        {
            name: 'Hot Wheels Track: ',
            price: 150,
            min: 0,
            max: 20,
            quantity: 0,
        },
    ]);

    const totalQuantity = products.reduce((total, product) => total + product.quantity, 0); // обчислюємо загальну КІЛЬКІСТЬ товарів у кошику
    const totalCost = products.reduce((total, product) => total + product.price * product.quantity, 0); // обчислюємо загальну ВАРТІСТЬ товарів у кошику

    // функція збільшення кількості товару в кошику
    const handleIncrement = (index) => {
        const productsCopy = [...products]; // створюємо копію масиву товарів
        const product = productsCopy[index]; // Отримуємо поточний товар
        const { min, max } = product;

        // Збільшуємо кількість товару, якщо це можливо
        if (product.quantity < max || !max) {
            product.quantity++;
        }

        setProducts(productsCopy);
    };

    // функція зменшення кількості товару в кошику
    const handleDecrement = (index) => {
        const productsCopy = [...products]; // створюємо копію масиву товарів
        const product = productsCopy[index]; // Отримуємо поточний товар
        const { min } = product;
        // Зменшуємо кількість товару, якщо це можливо
        if (product.quantity > min) {
            product.quantity--;
        }

        setProducts(productsCopy);
    };

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
            {products.map((product, index) => (
                <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <button className={styles.button} onClick={() => handleIncrement(index)}>+</button>
                        {product.quantity}
                        <button className={styles.button} onClick={() => handleDecrement(index)}>-</button>
                    </td>
                </tr>
            ))}
            <tr>
                <td>Total Quantity:</td>
                <td>{totalQuantity}</td>
            </tr>
            <tr>
                <td>Total Cost:</td>
                <td>{totalCost}</td>
            </tr>
        </table>
    );
};
export default Cart;