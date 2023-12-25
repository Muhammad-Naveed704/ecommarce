// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async(resolve) =>{
    try {
      const response = await fetch('http://localhost:8080/products');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      resolve(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
      }
  );
}


