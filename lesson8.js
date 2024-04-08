/*ДЗ.1 BigBoss
Уявімо собі, що ми є власниками великої компанії, 
яка розробляє платформу для продажу квитків. Окрім того, наша 
компанія продає рішення для організації продажу цих квитків. 
Таким чином, у нас будуть клієнти, які придбають наше програмне забезпечення (ПО). 
По суті, ці клієнти будуть подібні до "дочірніх компаній" (subCompany), 
які вже використовують наше ПО для продажу квитків. Крім цього, 
ці "дочірні компанії" також можуть стати постачальниками цього рішення,
 і в цьому випадку вони вже будуть "внучатами компанії" (subSubCompany), і так далі і далі.
 Вам необхідно написати функцію findValueByKey(companyName), яка буде приймати значення у вигляді 
 companyName та надавати інформацію про цю subCompany.*/

const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [{
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [{
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [{
                        name: 'Клієнт 1.2.3',
                        type: 'subSubCompany',
                        uses: 'Рішення для продажу квитків',
                        sells: 'Рішення для продажу квитків',
                    }]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName) {
    if (this.name === companyName) {
        return this;
    }
    let subCompanies = this.clients || this.partners;
    if (subCompanies) {
        for (const company of subCompanies) {
            const foundChildCompany = findValueByKey.call(company, companyName)
            if (foundChildCompany) {
                return foundChildCompany;
            }
        }
    }
    return null;
}

const searchedCompanyDetails = findValueByKey.call(company, 'Клієнт 1.2.3.677');

function printCompanyDetails(searchedCompanyDetails) {
    if (!searchedCompanyDetails) {
        console.log('This company was\'t found!');
        return;
    }
    Object.entries(searchedCompanyDetails).forEach(keyValuePair => {
        if (keyValuePair[0] !== 'clients' && keyValuePair[0] !== 'partners') {
            console.log("  ", ...keyValuePair)
        }
    })
}
printCompanyDetails(searchedCompanyDetails);

/*ДЗ.2 Робота з обʼєктом
Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). 
Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта.

Наприклад так:

obj.getInfo(); // Правильна інформація про об'єкт
obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.
Умови виконання ДЗ.2 
Не використовувати методи keys, values, entries*/

const animal = {
    name: 'Tim',
    age: 7,
    weight: 6,
    getInfo: function () {
        for (let prop in this) {
            if (typeof this[prop] !== 'function') {
                console.log(`${prop}: ${this[prop]}`);
            }
        }
    }
};
animal.getInfo();
animal.loveToEat = true;
animal.getInfo();