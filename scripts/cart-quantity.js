let cartQuantity = 0;

      function updateCartQuantity(change) {
        if (cartQuantity + change > 10) {
          alert('The cart is full');
          return;
        } else{

        cartQuantity += change;
        console.log(`Cart quantity: ${cartQuantity}`)};
      }
      function checkCartQuantity(change){
        if(cartQuantity+ change<0){
          alert('Not enough items in cart');
          return;
        } else{
          cartQuantity+=change;
          console.log(`cart quantity: ${cartQuantity}`)
        };
      }