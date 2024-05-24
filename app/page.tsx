"use client";
import { useChat } from "ai/react";
import starLogo from "./assets/starLogo.svg";
import Image from "next/image";
import LoadingBubble from "./components/LoadingBubble";
import PromptSuggestionRow from "./components/PromptSuggestionRow";
import { Message } from "ai";

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

  const handlePrompt = (prompt: string) => {
    const msg: Message = {
      id: crypto.randomUUID(),
      content: prompt,
      role: "user",
    };
    append(msg);
  };

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
            <PromptSuggestionRow onPromptClick={handlePrompt} />
          </>
        ) : (
          <>{isLoading && <LoadingBubble />}</>
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
