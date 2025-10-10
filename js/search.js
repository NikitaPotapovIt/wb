const search = function () {
    const input = document.querySelector('.search-bock > input')
    const searchBtn = document.querySelector('.search-bock > button')

    console.log(input)
    console.log(searchBtn)

    input.addEventListener('input', (event) => {
        console.log(event.target.value)
    })

}

search()