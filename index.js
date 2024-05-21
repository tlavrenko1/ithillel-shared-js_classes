/*Task_1: Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент.
  Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд*/

function consoleLogTextInTime(text, time) {
    setTimeout(() => console.log(text), time);
}

consoleLogTextInTime('Hello', 3000);

/*Task_2_1: 
- Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
- Функція повинна повертати як результат Promise що повертає об’єкт todo*/

import fetch from 'node-fetch';

function getToDoFromServerInPromise() {
    return get('https://jsonplaceholder.typicode.com/todos/1');
}

function get(url){
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('There is an error:' + response.statusText);
            }
            return response.json();
        })
        .then(result => {
            console.log('Fetched successfully:', result);
            return result;
        })
        .catch(error => {
            console.error('There is a problem:', error);
        });

}

getToDoFromServerInPromise()
    .then(todo => {
        console.log('Fetched todo:', todo);
    })
    .catch(error => {
        console.error('Failed to fetch todo:', error);
    });

/*Task_2_2: 
- Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
- Функція повинна повертати як результат Promise що повертає об’єкт user;
- Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій
 з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних.*/

 function getUser() {
     return get('https://jsonplaceholder.typicode.com/users/1');
 }
 
 function main() {
     const allUsersPromise = Promise.all([getUser(), getUser(), getUser()]);
     allUsersPromise
         .then(allUsers => {
             console.log('All users fetched:', allUsers);
         })
         .catch(error => {
             console.error('Error fetching all users:', error);
         });
 
     const raceUserPromise = Promise.race([getUser(), getUser(), getUser()]);
     raceUserPromise
         .then(raceUser => {
             console.log('First user fetched:', raceUser);
         })
         .catch(error => {
             console.error('Error fetching race user:', error);
         });
 }
 
 main();

/*Task_3: 
import fetch from 'node-fetch';*/
async function getUserWithAwait() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const user = await response.json();
        console.log('User fetched successfully:', user);
        return user;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}

async function main() {
    try {
        const allUsersPromise = Promise.all([getUserWithAwait(), getUserWithAwait(), getUserWithAwait()]);
        const allUsers = await allUsersPromise;
        console.log('All users fetched:', allUsers);

        const raceUserPromise = Promise.race([getUserWithAwait(), getUserWithAwait(), getUserWithAwait()]);
        const raceUser = await raceUserPromise;
        console.log('First user fetched:', raceUser);

    } catch (error) {
        console.error('Error in main function:', error);
    }
}

main(); 

// Task_4
