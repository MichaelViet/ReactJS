import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

// Схема перевірки форми за допомогою yup
const schema = yup.object().shape({
    SenderCity: yup.string().required(),
    RecipientCity: yup.string().required(),
    Type: yup.string().required(),
    Quantity: yup.number().required(),
    Cost: yup.number().required(),
    Weight: yup.number().required(),
    Length: yup.number().required(),
    Width: yup.number().required(),
    Height: yup.number().required(),
    Packaging: yup.boolean(),
    NumberOfFloors: yup.number(),
    Elevator: yup.boolean(),
});

const PostForm = () => {
    // Ініціалізація форми схемою перевірки
    const { register, handleSubmit } = useForm({
        validationSchema: schema,
    });
    const [inputList, setInputList] = useState([]);
    const onSubmit = (data) => console.log(data);
    const cities = ["Львів", "Житомир", "Дніпро", "Миколаїв", "Київ"];

    const Input = () => (
        <div>
            <div>
                <label>Кількість</label>
                <input {...register("Кількість", { required: true, validate: (value) => value.length > 0 })} />
            </div>
            <div>
                <label>Вартість</label>
                <input {...register("Вартість", { required: true, validate: (value) => value.length > 0 })} />
            </div>
            <div>
                <label>Вага</label>
                <input {...register("Вага", { required: true, validate: (value) => value.length > 0 })} />
            </div>
            <div>
                <label>Довжина</label>
                <input {...register("Довжина", { required: true, validate: (value) => value.length > 0 })} />
            </div>
            <div>
                <label>Ширина</label>
                <input {...register("Ширина", { required: true, validate: (value) => value.length > 0 })} />
            </div>
            <div>
                <label>Висота</label>
                <input {...register("Висота", { required: true, validate: (value) => value.length > 0 })} />
            </div>
        </div>
    );
    // Функція обробки кнопки "Додати місце"
    const onAddBtnClick = () => {
        //Коли функція викликається, вона об'єднує новий Input компонент в кінець inputList масиву за допомогою concat методу
        setInputList(inputList.concat(<Input key={inputList.length} />));
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <label>Маршрут</label>
                    <div>
                        <label>Місто відправник </label>
                        <select {...register("Відправник", { required: true })}>
                            {cities.map((city) => (
                                <option value={city}>{city}</option>
                            ))}
                        </select>
                        <label>Місто отримувач </label>
                        <select {...register("Отримувач", { required: true })}>
                            {cities.map(city => (
                                <option value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                </section>
                <hr></hr>
                <section>
                    <label>Вид відправлення</label>
                    <select {...register("Вид відправлення", { required: true })}>
                        <option value="Вантажі">Вантажі</option>
                        <option value="Палети">Палети</option>
                    </select>
                </section>
                <hr></hr>
                <section>
                    <div>
                        <label>Характеристика місць</label>
                        <div>
                            {['Кількість', 'Вартість', 'Вага', 'Довжина', 'Ширина', 'Висота'].map(label => (
                                <div>
                                    <label>{label}</label>
                                    <input type="number" {...register(label, { required: true }, { validate: (value) => value.length > 0 })} />
                                </div>
                            ))}
                            <br />
                            <div>
                                <button className="button" onClick={onAddBtnClick}>Додати місце</button>
                                {inputList}
                            </div>
                        </div>
                    </div>
                </section>
                <hr></hr>
                <section>
                    <label>Послуга "Пакування"</label>
                    <div>
                        <input type="checkbox" {...register("Пакування")} />
                        <button className="button">Тарифи пакування</button>
                    </div>
                    <br />
                    <label>Послуга "Підйом на поверх"</label>
                    <div>
                        <label>Кількість поверхів</label>
                        <input type="number" {...register("Кількість поверхів")} />
                    </div>
                    <label>Ліфт</label>
                    <input type="checkbox" {...register("Ліфт")} />
                    <div>
                        <button className='button'> Розрахувати </button>&nbsp;
                        <button type='reset' className='button'>Очистити</button>
                    </div>
                </section>
            </form>
        </React.Fragment>
    );
};

export default PostForm;