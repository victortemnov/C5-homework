// XML

let xmlDATA = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

let parser = new DOMParser();
let xmlDOM = parser.parseFromString(xmlDATA, "text/xml");
let list = xmlDOM.querySelector("list").children;
let arrObj = [];
for (let i = 0; i < list.length; i++) {
    let obj = {
        firstName: list[i].querySelector("first").textContent,
        lastName: list[i].querySelector("second").textContent,
        lang: list[i].querySelector("name").getAttribute("lang"),
        age: Number(list[i].querySelector("age").textContent),
        prof: list[i].querySelector("prof").textContent
    };
    arrObj.push(obj);
};

let result1 = {
    list: arrObj
};
console.log(result1);

// JSON

const jsonString = `
{
 "list": 
 [
              {
                   "name": "Petr",
                   "age": "20",
                   "prof": "mechanic"
              },
              { 
                  "name": "Vova",
                  "age": "60",
                  "prof": "pilot"
              }
 ]
}`;

const data = JSON.parse(jsonString);
const listData = data.list;
const first = listData[0];
const second = listData[1];
const result2 =
    {
        listData: [
            { name: first.name, age: Number(first.age), prof: first.prof },
            { name: second.name, age: Number(second.age), prof: second.prof },
        ]
    }
console.log(result2);
