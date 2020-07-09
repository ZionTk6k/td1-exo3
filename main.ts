input.onButtonPressed(Button.A, function () {
    if (nb < 0) {
        nb += 1
        basic.showNumber(nb)
    }
})
let nb = 0
nb = 1
basic.showNumber(nb)
