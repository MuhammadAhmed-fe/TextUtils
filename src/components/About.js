import React, { } from 'react'

export default function About(props) {

    return (
        <div className='container'>
            <div className="container text-center my-4" style={{ color: props.mode === 'dark' ? 'white' : '#212529' }}>
                <h1 className='my-4 '>About Us :</h1>
                <p><strong>Welcome to TextUtils</strong>, your go-to application for all your text analysis needs! Developed with the power and flexibility of React, TextUtils offers a suite of intuitive tools designed to help you analyze and manipulate your text effortlessly.</p>
                <p>Our application is crafted with the user in mind, providing a clean and easy-to-navigate interface. Whether you're a writer, editor, student, or just someone who frequently works with text, TextUtils is here to make your tasks simpler and more efficient.</p>
            </div>
            <div className="container my-4 mt-4" style={{ color: props.mode === 'dark' ? 'white' : '#212529' }}>
                <h3 className=''>Our Mission :</h3>
                <p>At <strong>TextUtils,</strong> our mission is to empower users with a robust set of tools that make text processing simple and effective. We strive to offer functionalities that save you time, enhance your productivity, and improve the quality of your work.</p>
            </div>
            <div className="container my-4 mt-4" style={{ color: props.mode === 'dark' ? 'white' : '#212529' }}>
                <h3 className=''>Our Philosophy :</h3>
                <p><strong>Simplicity :</strong> We believe in keeping things simple. Our user interface is designed to be intuitive and easy to navigate, ensuring a smooth user experience even for first-time users.</p>
                <p><strong>Efficiency :</strong> We value your time. TextUtils provides quick and accurate results, allowing you to accomplish your tasks faster and more efficiently.rweq</p>
                <p><strong>User-Centric Design :</strong> Your feedback drives our development. We continuously listen to our users and evolve our features to better serve your needs.</p>
                <p><strong>Security :</strong> Your data privacyQEWRPOR is our priority. TextUtils is designed to handle your text securely without storing any information.</p>
                <p><strong>Innovation :</strong> We are committed to staying at the forefront of technology, integrating the latest advancements to enhance our application's functionality.</p>
            </div>
            <div className="container my-4 mt-4" style={{ color: props.mode === 'dark' ? 'white' : '#212529' }}>
                <h3 className=''>Join Our Community :</h3>
                <p>We invite you to join our growing community of <strong>TextUtils</strong> users. Share your experiences, provide feedback, and help us shape the future of text analysis. Together, we can make TextUtils the ultimate tool for all your text-related needs.</p>
                <p>Thank you for choosing TextUtils. We look forward to supporting you in all your text analysis endeavors.</p>
            </div>
            <div className="container text-center my-4" style={{ color: props.mode === 'dark' ? 'white' : '#212529' }}>
                <h1 className='my-4 '>Created By :</h1>
                <p>TextUtils is created and maintained by <strong>Muhammad Ahmed</strong>.</p>
                <p><strong>GitHub :</strong><a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="https://github.com/MuhammadAhmed-fe"> MuhammadAhmed-GitHub</a></p>
                <p><strong>Linked In :</strong><a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="http://linkedin.com/in/muhammad-ahmed-828552321"> MuhammadAhmed-LinkedIn</a></p>
                <p><strong>Email :</strong> muhammadahmed.fe@gmail.com</p>
                <p>Feel free to reach out via GitHub, LinkedIn or email for any queries, feedback, or suggestions.</p>
            </div>
        </div>
    )
}
