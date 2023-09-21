"use client";

import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

export default function NewPost() {
  const [refresh, setRefresh] = useState(0);
  const [currentImage, setCurrentImage] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleImage(e) {
    setLoading(true);
    for (const iterator of e.target.files) {
      const readImage = new FileReader();
      readImage.readAsDataURL(iterator);
      readImage.onload = (e) => {
        currentImage.push(e.target.result);
        setCurrentImage(currentImage);
      };
    }
    setRefresh(refresh + 1);
    setTimeout(() => {
      setRefresh(refresh + 1.81);
      setLoading(false);
    }, 891);
  }
  // console.log(currentImage);

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
  }

  useEffect(() => {}, [refresh]);

  return (
    <div>
      <div>
        <input
          className=" bg-orange-400 w-screen"
          onClick={() => setCurrentImage([])}
          type="file"
          name=""
          accept="image/*"
          multiple
          onChange={handleImage}
        />
      </div>
      {loading ? (
        <MoonLoader size={85} />
      ) : (
        <div>
          <div>
            {currentImage.map((aImage, index) => (
              <img key={index} src={aImage} alt="none-img-:/" />
            ))}
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
      )}
    </div>
  );
}
