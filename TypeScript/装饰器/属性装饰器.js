"use strict";
function DefaultValue(value) {
    return function (target, propertyKey) {
        target[propertyKey] = value;
    };
}
class TestClass {
}
const testClass = new TestClass();
console.log(testClass.greeting); // 输出: Hello, World!
