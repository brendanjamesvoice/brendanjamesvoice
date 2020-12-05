import { TwitterVideoEmbed } from "react-twitter-embed";

import Image from "next/image";
import styles from "../styles/styles.module.sass";

function ClipContainer({ title = "", src = "" }) {
  return (
    <div className={styles.clip}>
      <div className={styles.clipHeader}>{title}</div>
      <div className={styles.clipFrame}>
        <iframe
          src={src}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>
            Brendan
            <br />
            James
            <span>Voice</span>
          </h1>
          <Image
            className={styles.headerImage}
            src="/headshot.png"
            alt="Brendan James"
            width={200}
            height={200}
          />
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <section className={styles.aboutSection}>
            <p>
              Brendan James is the voice of ad campaigns for internationally
              recognized brands including{" "}
              <strong>
                Burger King, Budweiser, Audi, Kawasaki, Comcast, Nestle
              </strong>{" "}
              and others. His decade-plus career features multiple seasons of
              promos for <strong>Major League Soccer</strong> as well as an
              eclectic portfolio including videos in the technology and gaming
              industries.
            </p>
            <p>
              Brendan produces edited voice-over tracks out of his professional
              home studio in upstate New York. To book his services for your
              next campaign, contact him at{" "}
              <a href="mailto:brendanjamesvo@gmail.com">
                brendanjamesvo@gmail.com
              </a>
              .
            </p>
          </section>
          <section className={styles.contactSection}>
            <div className={styles.contact}>
              <strong>Brendan James</strong>
              <br />
              845-270-9401
              <br />
              brendanjamesvo@gmail.com
            </div>
            <div style={{ marginTop: 40 }}>
              <ClipContainer
                title="Burger King | Delay Your Way"
                src="https://www.youtube.com/embed/-qyJyvcVcVM"
              />
            </div>
          </section>
        </div>

        <section className={styles.showcaseSection}>
          <div className={styles.grid}>
            <ClipContainer
              title="Kawasaki | We’re Back"
              src="https://www.youtube.com/embed/xmjfQEr4MCs"
            />
            <ClipContainer
              title="Audi | Winter Sports"
              src="https://www.youtube.com/embed/CN4MdqjjcWE"
            />
            <ClipContainer
              title="MLS | Stand As One"
              src="https://www.youtube.com/embed/w-lOJDXt7ag"
            />
            <ClipContainer
              title="Optimum"
              src="https://player.vimeo.com/video/117604935?title=0&byline=0&portrait=0"
            />
            <ClipContainer
              title="Kyocera"
              src="https://www.youtube.com/embed/DR5hprucYX0"
            />
            <ClipContainer
              title="EVE Online"
              src="https://www.youtube.com/embed/WG9W8e1CFGw"
            />
            <ClipContainer
              title="MLS | 2015 Cup Playoffs"
              src="https://www.youtube.com/embed/sp8BnX_HK5E"
            />
            <ClipContainer
              title="Nestle | Pure Life"
              src="https://www.ispot.tv/share/nuYn?start=15"
            />
            <ClipContainer
              title="EVE Online"
              src="https://www.youtube.com/embed/cYCNrTpsHLU"
            />
            <ClipContainer
              title="Comcast | Rico Roman: Medals"
              src="https://www.youtube.com/embed/fKw1jloEnrM?start=51"
            />
            <div>
              <div className={styles.clipHeader}>
                Budweiser | This Bud's For Dad
              </div>
              <TwitterVideoEmbed id={"1008331138585251840"} />
            </div>
            <div>
              <div className={styles.clipHeader}>MP3 | Commercials 1</div>
              <audio controls src="/commercials.mp3" />
              <div className={styles.clipHeader} style={{ marginTop: 20 }}>
                MP3 | Commercials 2
              </div>
              <audio controls src="/commercials2.mp3" />
              <div className={styles.clipHeader} style={{ marginTop: 20 }}>
                MP3 | Promos
              </div>
              <audio controls src="/promo.mp3" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
