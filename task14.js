/*
* !!! Ответ с помощью ChatGPT не принимается!!!
* - Объект связан с типом через object_type
* - Тип объекта имеет класс (class) "Устройства"
*/

//Объекты
const objects = [
{ id: 1, name: "Test 1", object_type: 1 },
{ id: 2, name: "Test 2", object_type: 1 },
{ id: 3, name: "Test 3", object_type: 2 },
{ id: 4, name: "Test 4", object_type: 3 },
]
//Типы
const object_types = [
{ id: 1, class: "Устройства" },
{ id: 2, class: "Устройства" },
{ id: 3, class: "Порты" },
{ id: 4, class: "Кабели" }
]

// Написать функцию вывода строкой через запятую названий (name) объектов. Брать только объекты связанные с типами у которых класс "Устройства". Желательно минимизировать использование дополнительных переменных.

function getDeviceNames(objects, object_types) {
    return objects
    .filter(obj => object_types.some(t => t.id === obj.object_type && t.class === 'Устройства'))
    .map(obj => obj.name)
    .join(", ");
  }

console.log(getDeviceNames(objects, object_types));