


async function task1() {
  console.log('task 1 started')

  const response = await fetch('someUrl')
  console.log('task 1 get response')

  const json = await response.json()
  console.log('task 1 finished')
}

async function task2() {
  console.log('task 2 started')

  const response = await fetch('someUrl')
  console.log('task 2 get response')

  const json = await response.json()
  console.log('task 2 finished')
}

async function task3() {
  console.log('task 3 started')

  const response = await fetch('someUrl')
  console.log('task 3 get response')

  const json = await response.json()
  console.log('task 3 finished')
}

function main() {
  Promise.all([task1(), task2(), task3()])
}

main()