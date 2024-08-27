# **Data Visualization Dashboard**

### **Overview**

This project is a data visualization dashboard built using the MERN stack (MongoDB, Express, React, Node.js). It provides an interactive interface for analyzing and visualizing data from a JSON file. The dashboard features various charts and filters, making it easy to explore key metrics such as intensity, likelihood, relevance, and more.

### **Features**

- **Interactive Filters:** Dropdown filters for End Year, Topic, Sector, Region, PEST, Source, Country, and City. Filters adjust dynamically based on data.
- **Data Visualization:** Multiple chart types (bar, pie, line, radar) are used to visualize data. The dashboard organizes charts in a responsive grid layout.
- **Responsive Design:** Built with Bootstrap, the dashboard is fully responsive and adapts to various screen sizes.
- **Custom Styling:** Dropdowns are compact, charts are bordered, and pie/radar charts are reduced in size for better balance.

### **Technology Stack**

- **Frontend:** React.js, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Visualization:** Chart.js (or other visualization libraries)

### **Project Structure**

```
root/
│
├── server/                # Node.js/Express.js backend
│   ├── server.js           # Entry point for backend server
│
├── src/               # React.js frontend
│   │   ├── components/     # React components (charts, filters, etc.)
│   │   ├── App.js          # Main app component
│   │   ├── App.css         
│   │   ├── index.js        # React entry point
│   │   ├── index.css       
│
└── README.md               # Project documentation
```

### **Setup and Installation**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/pranshuthakur15/Data-Visualization-w.-MERN-Stack.git
   cd Assignment
   ```

2. **Backend Setup:**
   - Navigate to the `server` folder:
     ```bash
     cd sever
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `server` directory and add your MongoDB connection string:
     ```env
     MONGO_URI=your-mongodb-connection-string
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup:**
   - Navigate to the `src` folder:
     ```bash
     cd ../src
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```
   - The app will be available at `http://localhost:3000`.

### **Usage**

- The dashboard will automatically load data from the backend (running on `http://localhost:8080`).
- Use the dropdown filters to narrow down the data displayed in the charts.
- Explore various charts to gain insights from the data.

### **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push your changes to your fork:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request on the original repository.

### **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### **Acknowledgements**

- Thanks to the creators of React, Node.js, MongoDB, and Chart.js for making this project possible.
- Special thanks to anyone who contributes to this project.

---

This README should give potential collaborators and users a clear understanding of your project, how to set it up, and how they can contribute.
