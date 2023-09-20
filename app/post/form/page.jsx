"use client";

import { useState } from "react";
import { MoonLoader } from "react-spinners";

export default function NewPost() {
  const [currentImage, setCurrentImage] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleImage(e) {
    try {
      const readImage = new FileReader();
      readImage.readAsDataURL(e.target.files[0]);
      readImage.onload = (e) => {
        setCurrentImage(e.target.result);
      };
    } catch (error) {
      console.log("Failed to execute");
    }
  }

  function handleSend() {
    setLoading(true);
    fetch("/post/form/api", {
      method: "POST",
      body: JSON.stringify({ image: currentImage }),
    })
      .then(() => setLoading(false))
      .catch(() => {
        console.log("not submit");
        setLoading(false);
      });
    // .then((r) => r.json())
    // .then((r) => console.log("this =>", r));
  }

  return (
    <div>
      <div>
        <input
          className=" bg-orange-400 w-screen"
          type="file"
          name=""
          accept="image/*"
          multiple
          onChange={handleImage}
        />
      </div>
      <div>
        <img src={currentImage} alt="none-img-:/" />
      </div>
      {loading ? (
        <div className=" w-fit mx-auto my-8">
          <MoonLoader size={78} />
        </div>
      ) : (
        <div className="bg-indigo-600 py-2 px-3 w-fit mx-auto text-8xl font-mono text-white mt-3 rounded-md hover:bg-indigo-400">
          <button onClick={handleSend}>Save</button>
        </div>
      )}
    </div>
  );
}
