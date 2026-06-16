// что будет в консоли и почему
function task1(callback) {
    return new Promise((resolve) => {
        console.log('task1 start');

        setTimeout(() => {
            console.log('task1 done');
            resolve();
            callback();
        }, 3000);
    });
}

function task2(callback) {
    callback();

    return new Promise((resolve) => {
        console.log('task2 start');

        setTimeout(() => {
            console.log('task2 done');
            resolve();
        }, 2000);
    });
}

function task3() {
    console.log('task3 start');
    console.log('task3 done');
}

async function runTasks() {
    await task1(async () => {
        await task2(task3);
    });
}

runTasks();