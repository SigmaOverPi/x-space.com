document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const orderSummaryDiv = document.getElementById('order-summary');
  
  let orderHTML = '<h2>Order Summary:</h2><ul>';
  const foods = params.getAll('food');
  const portions = params.getAll('portion');
  const prices = params.getAll('price');

  let totalPrice = 0;
  const onlineFee = 3;

  foods.forEach((food, index) => {
    const portion = portions[index];
    const price = prices[index];
    const itemTotal = portion * price;
    totalPrice += itemTotal;
    orderHTML += `<li>${food}: ${portion} portion(s) - GHC ${itemTotal}</li>`;
  });

  totalPrice += onlineFee;

  orderHTML += `</ul><h2>Total Price: GHC ${totalPrice}</h2>`;
  orderHTML += `<h2>Online Fee: GHC ${onlineFee}</h2>`;
  orderHTML += `<h2>Total: GHC ${totalPrice}</h2>`;
  orderSummaryDiv.innerHTML = orderHTML;
});