import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import GithubIcon from "../pages/icons/icons";
import Warning from "../pages/icons/warning";
import Cards from "../pages/components/cards";
export default function Home() {
  const Title = "QR Generator";

  const [width, setWidth] = React.useState("400");
  const [text, setText] = React.useState("");
  const [encode, setEncode] = React.useState("UTF-8");

  const uri = `https://chart.googleapis.com/chart?chs=${width}x${width}&cht=qr&chl=${
    text.length > 200 ? null : text
  }&choe=${encode}`;

  return (
    <>
      <Head>
        <title>{Title}</title>
        <link rel="icon" href="/favicon.ico" />
        <Cards />
      </Head>
      <h1
        className={styles.title}
        className=" font-sans font-black text-center text-6xl"
      >
        {Title}
      </h1>
      <p className="font-sans text-center"><GithubIcon/> </p>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className="mt-4 inline-block relative w-64">
            <select
              id="width"
              name="width"
              onChange={(e) => setWidth(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Choose a size</option>
              <option value="100">Small</option>
              <option value="200">Medium</option>
              <option value="400">Default</option>
              <option value="500">Large</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
            <br />
            <div className="inline-block relative w-64">
              <select
                id="encode"
                name="encode"
                onChange={(e) => setEncode(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Choose the encode</option>
                <option value="UTF-8">UTF-8 (Default) </option>
                <option value="Shift_JIS">Shift_JIS</option>
                <option value="ISO-8859-1">ISO-8859-1</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <br />
            <br />
            <label className="block text-sm leading-5 font-medium text-gray-700">
              Text:{" "}
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              onChange={(e) => setText(e.target.value)}
              placeholder="Write your any text"
              name="text"
              maxLength="200"
            ></input>
          </div>
          <a href="/">
            <button class="mt-20 float-left bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow">
              Reset
            </button>
          </a>
        </main>

        <div className={styles.gridItem}>
          {text.length > 199 ? <Warning /> : null}
          <img src={uri} alt={Title} />
          <a href={`${uri}`} title={Title}>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </a>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs mt-12 mb-12">
        &copy; <a href="mailto:hey@raufsamestone.com">hey@raufsamestone.com</a>
      </p>
    </>
  );
}
