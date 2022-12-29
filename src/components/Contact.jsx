import React from "react";

const Contact = () => {
    return (
        <div className="section" id="contact">
            <div className="  border-solid border-black border-b pb-8 flex justify-between items-end gap-4 flex-wrap">
                <div>
                    <div className="text-3xl font-bold">
                        Want to Reserve a table?
                    </div>
                </div>
                <div>
                    <button className="btn">
                        <a href="#">Contact us now</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
