import React from 'react';

function Form() {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const handleSubmit = (event) => {
        event.preventDefault();

        // Отримання значень полів форми
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('subject');

        // Перевірка емайлу
        const emailInput = event.target.elements.email;
        if (!emailInput.checkValidity()) {

            alert('Please enter a valid email address');
            return;
        }

        console.log(`Ім'я: ${name}; E-mail: ${email}; Тема: ${subject}; Повідомлення: ${message}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Ім'я:
                <input type="text" name="name" />
            </label>
            <br />
            <label>
                E-mail:
                <input type="email" name="email" required pattern={emailPattern} />
            </label>
            <br />
            <label>
                Тема:
                <input type="text" name="subject" required />
            </label>
            <label>
                Повідомлення:
                <p><textarea rows="20" cols="20" name="text"></textarea></p>
            </label>
            <br />
            <button className='button' type="submit">Submit</button>
        </form>
    );
}

export default Form;
