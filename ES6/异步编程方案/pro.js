// const promise = new Promise((resolve, reject) => {
//     Request ({
//         url: 'http://xxx.com',
//         onSuccess(data) {
//             resolve(data)
//         },
//         onError(err) {
//             reject(err)
//         },
//     })
// })

//使用Promise
// Promise.then((data) => {
//     console.log(data)
// })
//     .catch((err) => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log('完成')
//     })

// var promise1,promise2 = new Promise()
// Promise.all({
//     promise1,
//     promise2,
// }).then(([res1, res2]) => {
//     console.log(res1.res2)
// })
// Promise.race({
//     promise1,
//     promise2
// }).then((res) => {
//     console.log(res)
// })

const getRes = async () => {
    try {
        let res = await fetch('http://xxx.json')
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}