async function 
    fetchProducts(url) {
        try {
          let att = 0; 
          console.log("Hello!!!");
          // after this line, our function will wait for the `fetch()` call to be settled
          // the `fetch()` call will either return a Response or throw an error
           const response = await fetch(url);
          if (!response.ok) {
            const cache = new Map(); 
            if (cache.has(url)){
              return cache.get(url);
            }
            throw new Error(`HTTP error: ${response.status}`);
          }
          // after this line, our function will wait for the `response.json()` call to be settled
          // the `response.json()` call will either return the parsed JSON object or throw an error
          const data = await response.json();
          console.log(data[3].name); 
        }
        catch (error) {
          att++; 
          console.error(`Could not get products: ${error}`);
        }
      }
      
      fetchProducts("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

      //Thanks to the JS Design patterns book!
