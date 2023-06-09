import useTitle from "../../../hooks/useTitle";

const blogs = [
    {
        id: 1,
        ques: "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
        ans: "1. Access Token: An access token is a credential that is issued by an authentication server upon successful authentication of a user. It is a string of characters that represents the authorization granted to the user and is used to access protected resources or perform certain actions on behalf of the user. Access tokens typically have a limited lifespan, known as the token expiration time, after which they become invalid. 2. Refresh Token: A refresh token is also issued by the authentication server along with the access token. Unlike access tokens, refresh tokens have a longer lifespan. They are used to obtain a new access token once the current access token expires, without requiring the user to re-enter their credentials. Refresh tokens are usually securely stored on the client-side and are sent to the authentication server when requesting a new access token.(Access Token Usage: The client (e.g., a web browser) includes the access token in the headers or authorization header of each request to the server, indicating that the request is authorized. The server validates the access token to ensure the user is authenticated and has the necessary permissions to access the requested resource.) & (Refresh Token Usage: When the access token expires, the client sends a request to the authentication server with the refresh token. The server verifies the refresh token and, if valid, issues a new access token without requiring the user to re-authenticate.)"
    },
    {
        id: 2,
        ques: "Compare SQL and NoSQL database.",
        ans: "SQL Database: Structured and predefined schema. Relational data model with tables, rows, and columns. Support for complex relationships and data integrity. Well-suited for structured data applications like finance and e-commerce. NoSQL Database: Flexible or no schema. Different querying mechanisms based on data model. Emphasis on scalability and performance over strict consistency. Suitable for high scalability and performance needs, like real-time analytics and IoT data storage"
    },
    {
        id: 3,
        ques: "What is express js? What is Nest Js?",
        ans: "Express.js is a minimal and flexible web application framework for Node.js. It provides a set of features and middleware to build web applications and APIs quickly and easily. Express.js focuses on simplicity and allows developers to handle routes, HTTP requests, middleware, and views efficiently. Nest.js is a progressive and opinionated Node.js framework for building efficient and scalable server-side applications. It is built on top of Express.js and enhances it with features inspired by Angular, such as dependency injection, decorators, and modular architecture. Nest.js promotes the use of TypeScript, making it easier to write structured and maintainable code. It is designed for building robust, enterprise-grade applications with support for modules, controllers, providers, and much more."
    },
    {
        id: 4,
        ques: "What is MongoDB aggregate and how does it work?",
        ans: "MongoDB's aggregate function is used for performing advanced data aggregation operations on a collection. It takes an array of pipeline stages as input, where each stage represents a specific operation to be performed on the data. Operators are used within each stage to manipulate and transform the data. The aggregate function processes the pipeline stages sequentially and returns the aggregated results."
    }
]


const Blogs = () => {
    useTitle("Blogs")
    return (
        <div className="bg-blue-50 py-10">
            <div className="max-w-lg mx-auto">
                <h1 className="text-3xl font-bold mb-4">Blogs</h1>
                {blogs.map((blog, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
                        <h2 className="text-xl font-semibold mb-2">{blog.ques}</h2>
                        <p className="text-gray-600">{blog.ans}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;