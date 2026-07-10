let i = 0;

function taskOne() {
    console.log(++i, "taskOne() run");

    return new Promise((resolve) => {
        console.log(++i, "taskOne() promise callback run");

        setTimeout(() => {
            console.log(++i, "taskOne() timeout end");

            resolve("Task One");
        }, 1);
    });
}

function taskTwo() {
    console.log(++i, "taskTwo() run");

    return new Promise((resolve) => {
        const now = Date.now();

        console.log(++i, "taskTwo() promise callback run");

        while (true) {
            if (Date.now() - now >= 1000) {
                console.log(++i, "taskTwo() timeout end");

                resolve("Task Two");

                return;
            }
        }
    });
}

Promise.race([
    taskOne(),
    taskTwo(),
])
.then((r) => console.log(++i, "Result", r));

console.log(++i, "After promise");

// 1 taskOne() run
// 2 taskOne() promise callback run
// 3 taskTwo() run
// 4 taskTwo() promise callback run
// 5 taskTwo() timeout end
// 6 After promise
// 7 Result Task Two
// 8 taskOne() timeout end