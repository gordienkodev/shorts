
// Функция asyncAuth(callback) принимает callback (функцию обработчик), в который может быть передана ошибка (первым аргументом) и данные с бэкенда (вторым аргументом). 

asyncAuth((error, data) => {
    if (error) {
        console.log("Ошибка");
        return;
    }

    console.log("Пользователь вошёл", data);
});


// 1 часть. Вам нужно реализовать функцию auth(), которая вызывает asyncAuth(), но возвращает Promise. 


function auth() {
    return new Promise((resolve, reject) => {
        asyncAuth((error, data) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(data);
        });
    });
}








auth()
    .then(data => {
        console.log("Успех", data);
    })
    .catch(error => {
        console.log("Ошибка", error);
    });

try {
    const data = await auth();
    console.log("Успех", data);
} catch (error) {
    console.log("Ошибка", error);
}


// 2 часть На базе auth написать функцию tryAuth(n), которая при возниковении ошибок делает дополнительные N попыток. В случае, если все попытки провалились - вернуть последнюю ошибку.



async function tryAuth(N) {
    let lastErr;

    for (let i = 0; i <= N; i++) {
        try {
            const data = await auth();
            return data;
        } catch (error) {
            lastErr = error;
        }
    }

    throw lastErr;
}



tryAuth(3)
    .then(data => console.log("Успех", data))
    .catch(error => console.log("Ошибка после всех попыток", error));

try {
    const data = await tryAuth(3);
    console.log("Успех", data);
} catch (error) {
    console.log("Ошибка после всех попыток", error);
}