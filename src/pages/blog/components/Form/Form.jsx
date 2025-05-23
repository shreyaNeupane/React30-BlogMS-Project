import React, { useState } from "react";

const Form = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting data:", data);
    onSubmit(data);
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />

      <section className="bg-blue-200 py-4 lg:py-6 overflow-hidden relative z-10">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
              <h2 className="text-dark mb-2 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                {type} BLOG
              </h2>
            </div>

            {/* ✅ SINGLE FORM */}
            <form
              onSubmit={handleSubmit}
              className="w-full lg:w-1/2 xl:w-5/12 px-4"
            >
              <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                <div className="mb-6">
                  <input
                    type="text"
                    name="title"
                    required
                    onChange={handleChange}
                    placeholder="Title *"
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="subtitle"
                    required
                    onChange={handleChange}
                    placeholder="SubTitle*"
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="category"
                    required
                    onChange={handleChange}
                    placeholder="Category*"
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows="6"
                    name="description"
                    onChange={handleChange}
                    required
                    placeholder="Description *"
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus:border-primary"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary rounded border border-primary p-3 transition hover:bg-opacity-90"
                  >
                    Submit
                  </button>
                </div>

                {/* Decoration */}
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
