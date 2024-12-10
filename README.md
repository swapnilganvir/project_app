<div id="readme-top" align="center">
  <h3 align="center">Food-Delivery-App</h3>
  <p align="center">
    <a href="https://food-del-frontend-nztl.onrender.com">View Demo</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li>
      <a href="#features">Features</a>
      <ul>
        <li><a href="#webapp-features">Webapp Features</a></li>
        <li><a href="#admin-panel-Features">Admin Panel Features</a></li>
      </ul>
    </li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#database-schema">Database Schema</a></li>
    <li><a href="#implementation-steps">Implementation Steps</a></li>
    <li><a href="#instructions">Instructions</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project
This full-stack web application allows users to explore food categories, add items to their cart, place orders, and track delivery statuses. The application includes an admin panel for managing menu items and processing orders, demonstrating proficiency in frontend, backend, and payment gateway integration.

Note: To use the demo please wait 1-2 minutes after opening the link, because the server gets down due to inactivity.


<!-- Tech Stack -->
## Tech Stack
  * <b>Frontend</b>: React.js (JavaScript, HTML, CSS, Bootstrap/Material-UI)
  * <b>Backend</b>: Node.js with Express.js
  * <b>Database</b>: MongoDB (NoSQL)
  * <b>Authentication</b>: JWT (JSON Web Token), Bcrypt
  * <b>Payment Gateway</b>: Stripe
  * <b>Deployment</b>: Render (frontend, backend)
  * <b>Version Control</b>: Git and GitHub


<!-- FEATURES -->
## Features
### Webapp Features
1. #### Home Page
    * View a menu with food categories and items.
    * Add items to the cart with a single click.
    * Fetch menu items from the database via backend APIs.

2. #### Cart Page
    * View selected items with quantity and price.
    * Modify quantities or remove items.
    * Apply promo codes for discounts.
    * Proceed to checkout if signed in.

3. #### Checkout Page
    * Fill in delivery details (name, address, phone, etc.).
    * Submit data to the database through backend API.

4. #### Payment Page
    * Enter payment details securely using Stripe’s payment gateway.
    * Process payments and handle success/failure responses.

5. #### My Orders Page
    * View all past orders with their status (e.g., Processing, Out for Delivery).
    * Track the progress of current orders.

### Admin Panel Features
1. #### Add Items Screen
    * Add new food items with details like name, category, price, image upload, etc.
    * Save food item to the database via backend API.

2. #### List Items Screen
    * View a list of all available menu items.
    * Fetch data from the backend API.

3. #### Orders Screen
    * View all user orders and their details.
    * Update order status (e.g., Processing → Out for Delivery → Delivered).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- API Endpoints -->
## API Endpoints
#### Authentication APIs
* `POST /api/user/register` – Register a new user.
* `POST /api/user/login` – Log in a user and return a JWT token.

#### Food Menu APIs
* `POST /api/food/add` – Admin can add new items to the menu.
* `GET /api/food/list` – Fetch all menu items.
* `POST /api/food/remove` – Delete menu items.

#### Cart APIs
* `POST /api/cart/add` – Add items to the cart.
* `POST /api/cart/get` – Fetch cart details for a user.
* `POST /api/cart/remove` – Remove an item from the cart.

#### Order APIs
* `POST /api/order/verify` – Verify details of the order.
* `POST /api/order/place` – The user can make an order.
* `GET /api/order/list` – Fetch all order details for admin.
* `POST /api/order/userorders` – Fetch orders details made by a user.
* `POST /api/order/status` – Update the status of an order.


<!-- Database Schema -->
## Database Schema
1. #### Users Collection
    * Fields: `name`, `email`, `password`, `cartData`.
  
2. #### Foods Collection
    * Fields: `name`, `description`, `price`, `image`, `category`.

3. #### Orders Collection
   * Fields: `userId`, `items`, `amount`, `address`, `status`, `date`, `payment`.


<!-- Implementation Steps -->
## Implementation Steps
#### Frontend
1. Use React.js with create-react-app.
2. Implement routing with React Router.
3. Manage state with Context API.
4. Use Axios to connect to backend APIs.
5. Style components with CSS.

#### Backend
1. Set up an Express server.
2. Define routes for food items, authentication, cart, orders, and payment.
3. Use MongoDB and Mongoose for data storage and schema definition.
4. Secure sensitive data with Bcrypt (passwords).

#### Integration
1. Configure Stripe for secure payment processing.
2. Implement JWT for secure user authentication and route protection.
3. Ensure smooth interaction between frontend and backend using Cors.

#### Testing
1. Use Postman for API testing.
2. Perform manual testing for frontend components and API connections.
3. Test payment flow and data security.

#### Deployment
1. Deploy the frontend and backend using render.
2. Use environment variables to configure API URLs and keys.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Instructions -->
## Instructions
Instructions on setting up this project locally. To get a local copy up and running follow these simple example steps.
#### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```

#### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/swapnilganvir/project_app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API keys in `.env`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<!-- Conclusion -->
## Conclusion
This project demonstrates my full-stack development skills, including creating responsive UIs, designing scalable backends, integrating third-party payment systems, and implementing authentication. I want to show my ability to handle end-to-end development and tackle real-world challenges effectively.


<!-- CONTACT -->
## Contact
Swapnil Ganvir  - [@LinkedIn](https://www.linkedin.com/in/swapnilganvir) - swapnilganvir54@gmail.com

Project Link: [https://github.com/swapnilganvir/project_app](https://github.com/swapnilganvir/project_app)

App Link: [Food-Delivery-App](https://food-del-frontend-nztl.onrender.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
