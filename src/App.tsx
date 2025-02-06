import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const phrases = [
    "No",
    "Are you sure?",
    "Like fr fr??",
    "Wait like actually tho can u not",
    "cmon PLEASE!!!",
    "What a doozy :(",
    "PLEASE SAY YES",
    "IM BEGGING YOU PLEASE",
    "Pretty please????",
    "Pwetty Pwease Wit a Chewwy on top?",
    "PLEASEEEEEE",
    "You're making me cry rn...",
    "The yes box just gon keep gettin bigger...",
  ];

  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = Math.min(noCount * 20 + 16, 200);

  useEffect(() => {
    if (yesPressed) {
      // Initialize the Spotify Player after the iframe API has loaded
      window.onSpotifyIframeApiReady = () => {
        const iframe = document.createElement("iframe");
        iframe.src =
          "https://open.spotify.com/embed/track/3iBgrkexCzVuPy4O9vx7Mf?utm_source=generator&theme=0&autoplay=true";
        iframe.width = "400"; // Increased width
        iframe.height = "80";
        iframe.frameBorder = "0";
        iframe.allow = "autoplay; encrypted-media";
        iframe.allowFullscreen = true;

        // Embed the iframe into the div with id 'spotify-player'
        document.getElementById("spotify-player").appendChild(iframe);
      };

      // Load the Spotify iframe API script
      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [yesPressed]);

  function handleNoClick() {
    setNoCount((prevCount) => prevCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container hearts-background">
      {yesPressed ? (
        <>
          <div className="celebration">YAY! 🎉❤️</div>
          <div className="valentine-text">
            Thank you for saying yes hehe 💗. I just want to take a moment to
            thank you—not just for being my Valentine, but for choosing me every
            day. It means the world to me that I get to call you mine. You make
            my life brighter, my heart fuller, and every moment with you feels
            special. The little things we do make me the happiest. Even just
            seeing you for a brief moment in my day makes it better. I'm
            thankful to be blessed enough to spend full days with you most days
            nowadays. I've definitely gotten used to it quite a bit, and it'll
            be sad to have to go back to living life normally again when school
            starts, but that's just all a part of the boyfriend package. As much
            as I love all this time that I get with you, I'm grateful to have
            you by my side, even in the moments I'm not always with you. I'd
            never in a million years think that I'd be able to miss somebody the
            way I do with you when we do separate. When we have a little
            argument and I give you your time, it sucks so bad because I
            genuinely always want to be with you. I say this in every letter and
            I'll say it again. You are genuinely the funniest person I know, and
            you always have the most interesting things to talk about. Even when
            I'm half asleep you'll be telling me about something, and it always
            intrigues me I SWEAR. You teach me a lot. Even if you think you
            don't, even though I'm sure you know you do. you've taught me so
            much about life. You taught me shit my parents were meant to. You're
            just...such a good person...omg. Sorry I'll stop.
            <br />
            <br />
            I know I’m not perfect, and I probably talk too much sometimes LOL,
            but you still choose to be with me, and that’s something I’ll never
            take for granted. You’re patient, kind, and absolutely incredible in
            every way. You take everything to the next level. I mean that in the
            best way possible. Thank you for always keeping me motivated. <br />
            <br />
            Being with you makes me want to be better, not just for myself but
            for us. I love the way you understand me, even when I struggle to
            put things into words. And even when we don’t see eye to eye, I’d
            rather work through things with you than be with anyone else.
            <br />
            <br />
            So, thank you for being my Valentine, my love, and my best friend. I
            promise to keep making you smile, to listen more, and to love you
            even better every single day. <br />
            <br />
            I'll be forever yours, I love you 💗
          </div>
          {/* Embed the Spotify track with a larger width */}
          <div id="spotify-player">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/3iBgrkexCzVuPy4O9vx7Mf?utm_source=generator&theme=0&autoplay=true"
              width="400"
              height="80"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              loading="lazy"
            ></iframe>
          </div>
        </>
      ) : (
        <>
          <div className="valentine-text" style={{ textAlign: "center" }}>
            <img
              src="https://gifdb.com/images/high/cute-bear-couple-mocha-poke-milk-znd0rt5c8ymg97we.gif"
              alt="Cute bear couple"
              style={{
                width: "150px",
                marginBottom: "20px",
                display: "block",
                margin: "0 auto",
              }} // Centered and made larger
            />
            Will you be my Valentine? 💖💕
          </div>
          <div className="button-container">
            <button
              className="yesButton heart-button"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={() => setYesPressed(true)}
            >
              Yes ❤️
            </button>
            <button onClick={handleNoClick} className="noButton heart-button">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
