"use client";
import { useChat } from "ai/react";
import starLogo from "./assets/starLogo.svg";
import Image from "next/image";
import LoadingBubble from "./components/LoadingBubble";
import PromptSuggestionRow from "./components/PromptSuggestionRow";
import { Message } from "ai";
import Bubble from "./components/Bubble";

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
        <Image src={starLogo} width="60" height="45" alt="star" />
        <span
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            fontFamily: "monospace sans-serif",
            lineHeight: "80px",
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
          <>
            {messages?.map((message, index) => (
              <Bubble key={index} message={message} />
            ))}
            {isLoading && <LoadingBubble />}
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
