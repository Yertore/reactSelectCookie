import React, { useState } from 'react';

const Select = () => {
    const [citySelectValue, setCitySelectValue] = useState('');
    const [shopSelectValue, setShopSelectValue] = useState('');
    const [employeeSelectValue, setEmployeeSelectValue] = useState('');
    const [teamSelectValue, setTeamSelectValue] = useState('');
    const [shiftSelectValue, setShiftSelectValue] = useState('');

    const optionsForSecondSelect = {
        'Almaty': ['Цех #1 Almaty', 'Цех #2 Almaty'],
        'Astana': ['Цех #1 Astana', 'Цех #2 Astana'],
        'Shymkent': ['Цех #1 Shymkent', 'Цех #2 Shymkent'],
    };

    const optionsForThirdSelect = {
        'Цех #1 Almaty': ["Marat", "Kanat", "Bauirjan"],
        'Цех #2 Almaty': ["Kaisar", "Bekzat"],
        'Цех #1 Astana': ["Aibek", "Zhandos", "Sauran"],
        'Цех #2 Astana': ["Kirill", "Shinar"],
        'Цех #1 Shymkent': ["Lyazzat", "Ilias", "Erbol"],
        'Цех #2 Shymkent': ["Askar", "Serik"],
    };

    const handleFirstSelectChange = (event) => {
        setCitySelectValue(event.target.value);
        setShopSelectValue('');
        setEmployeeSelectValue('');
        setTeamSelectValue('');
        setShiftSelectValue('');
    };

    const handleShopSelectChange = (event) => {
        setShopSelectValue(event.target.value);
        setEmployeeSelectValue('');
        setTeamSelectValue('');
        setShiftSelectValue('');
    };

    const handleEmployeeSelectChange = (event) => {
        setEmployeeSelectValue(event.target.value);
        setTeamSelectValue('');
        setShiftSelectValue('');
    };

    const handleTeamSelectChange = (event) => {
        setTeamSelectValue(event.target.value);
        setShiftSelectValue('');
    };

    const handleShiftSelectChange = (event) => {
        setShiftSelectValue(event.target.value);
    };

    function setCookie(name, data, days) {
        const expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = "expires=" + expireDate.toUTCString();
        document.cookie = name + "=" + encodeURIComponent(data) + ";" + expires + ";path=/";
      }

    const saveToCookie = () => {
        //version 1: when we can save fields without value (depends on tasks)
        /*let obj = {
            "Город": citySelectValue,
            "Цех": shopSelectValue,
            "Сотрудник": employeeSelectValue) : '',
            "Бригада": teamSelectValue,
            "Смена": shiftSelectValue
        }*/
        //version 2: when we can not save fields without value (depends on tasks)
        let obj = {};
        if(citySelectValue) obj["Город"] = citySelectValue;
        if(shopSelectValue) obj["Цех"] = shopSelectValue;
        if(employeeSelectValue) obj["Сотрудник"] = employeeSelectValue;
        if(teamSelectValue) obj["Бригада"] = teamSelectValue;
        if(shiftSelectValue) obj["Смена"] = shiftSelectValue;

        //Preparing for save cookie
        console.log(obj);
        const cookieName = "myCookie";
        const expireDays = 1;
        let jsonData = JSON.stringify(obj);
        setCookie(cookieName, jsonData, expireDays);
        console.log(document.cookie);
    }

    const styleSelect = {
        fontSize: '14px',
        padding: '5px',
     }

    return (
        <div>
            <label style={{margin: "0 5px 0 10px"}}>Город:</label>
            <select style={styleSelect} value={citySelectValue} onChange={handleFirstSelectChange}>
                <option value="">Выберите город</option>
                <option value="Almaty">Almaty</option>
                <option value="Astana">Astana</option>
                <option value="Shymkent">Shymkent</option>
            </select>

            <label style={{margin: "0 5px 0 20px"}}>Цех:</label>
            <select style={styleSelect} value={shopSelectValue} onChange={handleShopSelectChange}>
                <option value="">Выберите цех</option>
                {optionsForSecondSelect[citySelectValue]?.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
                ))}
            </select>

            <label style={{margin: "0 5px 0 20px"}}>Сотрудник:</label>
            <select style={styleSelect} value={employeeSelectValue} onChange={handleEmployeeSelectChange}>
                <option value="">Выберите сотрудника</option>
                {optionsForThirdSelect[shopSelectValue]?.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
                ))}
            </select>

            <label style={{margin: "0 5px 0 20px"}}>Бригада:</label>
            <select style={styleSelect} value={teamSelectValue} onChange={handleTeamSelectChange}>
                <option value="">Выберите бригаду</option>
                <option>Бригада #1</option>
                <option>Бригада #2</option>
                <option>Бригада #3</option>
            </select>

            <label style={{margin: "0 5px 0 20px"}}>Смена:</label>
            <select style={styleSelect} value={shiftSelectValue} onChange={handleShiftSelectChange}>
                <option value="">Выберите смену</option>
                <option value="Первая">Первая</option>
                <option value="Вторая">Вторая</option>
            </select>
            <button style={{margin: "10px 30px", padding: "5px", fontSize: "16px"}} onClick={saveToCookie}>Save Cookie</button>
        </div>
    );
};

export default Select;