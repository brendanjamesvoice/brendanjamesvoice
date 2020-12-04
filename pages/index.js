import { TwitterVideoEmbed } from "react-twitter-embed";

import Image from "next/image";
import styles from "../styles/styles.module.sass";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>
            Brendan
            <br />
            James<span>&nbsp;Voice</span>
          </h1>
          <Image
            src="/headshot.png"
            alt="Brendan James"
            width={200}
            height={187}
          />
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <section className={styles.aboutSection}>
            <h2 className={styles.sectionHeader}>About</h2>
            <p class={styles.aboutCopy}>
              With over ten years of experience, Brendan James has been the
              voice of multiple national and regional ad campaigns for radio and
              television as well as professional sporting events and countless
              corporate industrial and instructional videos. He has worked with{" "}
              <strong>
                Burger King, Audi, Kawasaki, Major League Soccer, Comcast
              </strong>
              , and many more. He has a professional home studio with full
              recording capabilities and can quickly deliver edited VO tracks.
            </p>
          </section>
          <section className={styles.bookingContactSection}>
            <h2 className={styles.sectionHeader}>Booking Contacts</h2>
            <div className={styles.bookingContactChips}>
              <div className={styles.bookingContactChip}>
                <strong>Allan Duncan</strong>
                <br />
                Innovative Artists
                <br />
                212-659-5126
                <br />
                allan.duncan@iany.com
              </div>
              <div className={styles.bookingContactChip}>
                <strong>Eileen Schellhorn</strong>
                <br />
                DDO Artists
                <br />
                212-379-6314
                <br />
                eileen@ddonyc.com
              </div>
            </div>
          </section>
        </div>

        <section className={styles.showcaseSection}>
          <h2 className={styles.sectionHeader}>TV • Radio • Internet</h2>
          <div className={styles.grid}>
            <article className={styles.gridCell}>
              <div className={styles.gridCellHeader}>
                Burger King | Delay Your Way
              </div>
              <iframe
                src="https://www.youtube.com/embed/-qyJyvcVcVM"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </article>
            <article className={`${styles.gridCell} ${styles.tweetCell}`}>
              <TwitterVideoEmbed id={"1008331138585251840"} />
            </article>
            <article className={styles.gridCell}>
              <div className={styles.gridCellHeader}>AudiBlog.nl Presents</div>
              <iframe
                src="https://www.youtube.com/embed/CN4MdqjjcWE"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </article>
            <article className={styles.gridCell}>
              <div className={styles.gridCellHeader}>Optimum</div>
              <iframe
                src="https://player.vimeo.com/video/117604935?title=0&byline=0&portrait=0"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
                style={{
                  transform: "translateX(-10px)",
                }}
              ></iframe>
            </article>
            <article className={styles.gridCell}>
              <div className={styles.gridCellHeader}>MLS | Stand As One</div>
              <iframe
                src="https://www.youtube.com/embed/w-lOJDXt7ag"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </article>
            <article className={styles.gridCell}>
              <div className={styles.gridCellHeader}>Kyocera</div>
              <iframe
                src="https://www.youtube.com/embed/DR5hprucYX0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </article>
            <article className={styles.gridCell}>
              <div className={styles.gridCellHeader}>EVE Online</div>
              <iframe
                src="https://www.youtube.com/embed/WG9W8e1CFGw"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </article>
            <article className={styles.gridCell}>
              <div className={styles.gridCellHeader}>
                MLS | 2015 Cup Playoffs
              </div>
              <iframe
                src="https://www.youtube.com/embed/sp8BnX_HK5E"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </article>
            <article className={styles.gridCell}>
              <div className={styles.gridCellHeader}>Commercials 1</div>
              <audio controls src="/commercials.mp3" />
            </article>
            <article className={styles.gridCell}>
              <div className={styles.gridCellHeader}>Commercials 2</div>
              <audio controls src="/commercials2.mp3" />
            </article>
            <article className={styles.gridCell}>
              <div className={styles.gridCellHeader}>Promos</div>
              <audio controls src="/promo.mp3" />
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
