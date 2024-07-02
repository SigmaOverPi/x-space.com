function checkout() {
    const selectedFoods = [];
    const checkboxes = document.querySelectorAll('.checkbox');
    
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        const row = checkbox.closest('tr');
        const foodName = checkbox.value;
        const portion = row.querySelector('.portion-select').value;
        const price = 20;
        selectedFoods.push({ foodName, portion, price });
      }
    });
  
    const params = new URLSearchParams();
    selectedFoods.forEach(food => {
      params.append('food', food.foodName);
      params.append('portion', food.portion);
      params.append('price', food.price);
    });
  
    window.location.href = `/out.html?${params.toString()}`;
  }
