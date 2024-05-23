"use client";
import { useChat } from "ai/react";
import starLogo from "./assets/starLogo.svg";

import Image from "next/image";
import LoadingBubble from "./components/LoadingBubble";

const Home = () => {
  const {
    append,
    isLoading,
    messages,
    input,
    handleInputChange,
    handleSubmit,
  } = useChat();

  const noMessages = !messages || messages.length === 0;
  //   const noMessages = false;

  return (
    <main>
      <div>
        <Image src={starLogo} width="80" height="60" alt="star" />
        <span
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            fontFamily: "monospace sans-serif",
            lineHeight: "140px",
          }}
        >
          StarWarsGPT
        </span>
      </div>
      <section className={noMessages ? "" : "populated"}>
        {noMessages ? (
          <>
            <p className="starter-text">
              The Ultimate place for Starwars fans, ask StarwarsGPT anything
              about Star wars and it will come back with most up to date
              answers.
            </p>
            <br />
            {/* <PromptSuggestionRow /> */}
          </>
        ) : (
          <>
            <LoadingBubble />
          </>
        )}
      </section>
      <form onSubmit={handleSubmit}>
        <input
          className="question-box"
          onChange={handleInputChange}
          value={input}
          placeholder="Enter your query here..."
        />
        <input type="submit" />
      </form>
    </main>
  );
};

export default Home;
