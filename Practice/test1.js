function onSubmit(e) {
    let formData = {}
    Array.from(e.children)
    .filter((el) => el.name)
    .forEach((el) => {
        formData[el.name] = el.value
    })
    console.log(formData)
}