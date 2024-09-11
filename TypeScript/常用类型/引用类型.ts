let num1: number[] = [1,2,3]
let num2: Array<number> = [4,5,6]

let arr1: (number | string)[] = [1,2,'3','4']
let arr2: any[] = [1,'2',true,null]

var date: object = new Date()
var fun: object = ()=> {}
var arr: object = ['object']

// var num:object = 2 //错误： 不能将number类型分配给object类型
// var str: object = "hello world" // 错误：不能将string 类型分配给object类型