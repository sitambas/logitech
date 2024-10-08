<h1>Logitech Frontend Product Browser</h1>

<h2>Description</h2>
    <p>This project is a Product Browser application that allows users to browse through a list of products, remove them from the product list. The application follows a mobile-first design approach and is built using React and Tailwind CSS. The state management is handled using React's useReducer hook, and an atomic design system is implemented for managing components.</p>


<h2>Features</h2>
<ul>
    <li>Product Listing: Display a list of products with options to view detailed information.</li>
    <li>Cart Display: Call api 'https://dummyjson.com/carts/1' and view the number of products currently in the cart.</li>
    <li>Remove Product: Remove a product from the list.</li>
    <li>Tabs: Navigate through the list of products using a tab component.</li>
    <li>Responsive Design: The application is optimized for both mobile and desktop views.</li>
    <li>Reset Products: Reset the product list to its original state.</li>
</ul>
<h2>Prerequisites</h2>
    Before you begin, ensure you have met the following requirements:
    <ul>
        <li>You have installed the latest version of Node.js and npm.</li>
    </ul>

<h2>Installation and Setup</h2>

    1. Clone the Repository
       git clone https://github.com/sitambas/logitech.git

    2. Install Dependencies
        cd logitech
        npm install

    3. Start the Application
        npm start   // http://localhost:3000

<h2>Project Structure</h2>
    <code>src
        > components</br>
            ProductBrowser.js       # Main component to display the product list and cart information
            > subComponents
                ProductList.js      # Displays the list of products
                Tabs.js             # Tab navigation for switching between products only for desktop
            > atoms
                ProductCard.js      # Card component for individual product details
                Button.js           # Reusable button component
            > common
                Shimmer.js          # Loading shimmer effect
        > services
            api.js                  # API service for fetching products and cart data
        > store
            reducer.js              # State management using useReducer
        App.js                      # Main app component
</code>
