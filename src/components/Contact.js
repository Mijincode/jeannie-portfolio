import React from "react";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Contact() {
  return (
    <section id="about">
      <div className="mt-10">
        <div id="contact" className=" p-20 py-20">
          <div className="container mx-auto flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 mt-8">
              Contact me
            </h1>
            <div className="max-w-md mx-auto flex flex-wrap justify-center">
              <p className="text-lg mb-4 mr-4">
                <a
                  href="mailto:mijindoig@hotmail.com"
                  className="text-indigo-600 hover:underline"
                >
                  <AiOutlineMail className="inline-block" /> Email
                </a>
              </p>
              <p className="text-lg mb-4 mr-4">
                <a
                  href="https://www.linkedin.com/in/mijin-lee-35b09b1b7/"
                  className="text-indigo-600 hover:underline"
                >
                  <AiFillLinkedin className="inline-block" /> LinkedIn
                </a>
              </p>
              <p className="text-lg mb-4">
                <a
                  href="https://github.com/Mijincode"
                  className="text-indigo-600 hover:underline"
                >
                  <AiFillGithub className="inline-block" /> GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
