import React, { useRef } from 'react';

function Form() {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Отримаємо значення форми
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const subject = subjectRef.current.value;
        const message = messageRef.current.value;

        // Перевірка дійсності електронної пошти
        if (!emailRef.current.checkValidity()) {
            alert('Please enter a valid email address');
            return;
        }

        console.log(`Name: ${name}; E-mail: ${email}; Subject: ${subject}; Message: ${message}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Ім'я:
                <input type="text" name="name" ref={nameRef} />
            </label>
            <br />
            <label>
                E-mail:
                <input type="email" name="email" required pattern={emailPattern} ref={emailRef} />
            </label>
            <br />
            <label>
                Тема:
                <input type="text" name="subject" required ref={subjectRef} />
            </label>
            <br />
            <label>
                Повідомлення:
                <textarea rows="20" cols="20" name="text" ref={messageRef} />
            </label>
            <br />
            <button className='button' type="submit">Submit</button>
        </form>
    );
}

export default Form;
