const USD = 6.09;
const EUR = 6.44;
const GBP = 7.76;
const ETH = 24485.06;
const BTC = 610603.42;

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency =document.getElementById("currency")
const section = document.querySelector("main section")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
});


form.onsubmit = (event) => {
    event.preventDefault()

switch (currency.value){
    case "USD":
        convertCurrency(amount.value, USD, "US$")
        break
    case "EUR":
        convertCurrency(amount.value, EUR, "€")
        break
     case "GBP":
        convertCurrency(amount.value, GBP, "£")
        break    
     case "ETH":
         convertCurrency(amount.value, ETH, "Ξ")
        break
     case "BTC":
         convertCurrency(amount.value, BTC, "₿")
         break
  }
};

// função para converter moeda
function convertCurrency(amount, price, symbol){
    try {
      description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
     
      let total = amount * price
  
      if (isNaN(total)) {
        return alert("Por favor, digite o valor corretamente para converter.")
      }
  
      total = formatCurrencyBRL(total).replace("R$", "")
  
      result.textContent = `${total} Reais`
  
      section.classList.add("show-result")
    } catch {
      section.classList.remove("show-result")
      
      console.log(error)
      alert("Não foi possível converter. Tente novamente mais tarde.")
    }
  };
  
  // Formata a moeda em Real Brasileiro.
  function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  };