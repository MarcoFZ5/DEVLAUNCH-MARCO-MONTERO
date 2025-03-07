/* 
Voy al supermercado GreenCenter para hacer mis compras habituales y 
planeo comprar manzanas y naranjas. Cuando estoy alli, veo qu eno hay
platanos ni uvas, asi que cambio un poco mi lista. Veo que 3 cajeros
estan trabajando, asi que me preparo para pagar.
mis cosas cuestan 150 total
Entrego 150 efectivo y recibo 50 de cambio
*/

const supermarketName = 'GreenCenter'

const shoppingList = ['Manzanas', 'Naranjas']

const areBananasAvailable = false
const areGrapesAvailabre = false

const totalActiveCashiers = 3

const currency = '$'
const cashInWallet = 150
const totalPrice = 100
const change = cashInWallet - totalPrice

console.log(`
    Supermarket: ${supermarketName}\n
    ShoppingList: ${shoppingList}\n
    Total: ${totalPrice}${currency}  \n
    CashGiven: ${cashInWallet}${currency}  \n
    ChangeReceived: ${change}${currency}  
    `)

    
