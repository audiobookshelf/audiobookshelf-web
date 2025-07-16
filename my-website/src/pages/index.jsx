import React, { useEffect, useState } from 'react';
import './homepage.css';

export default function HomePage() {
  const [shelves, setShelves] = useState([]);
  const [showBooks, setShowBooks] = useState(false);

  const covers = [
    '1984.jpg', 'anatomyofthestate.jpg', 'animalfarm.jpg', 'atlasshrugged.jpg',
    'democracythegodthatfailed.jpg', 'theroadtoserfdom.jpg', 'faithofthefallen.jpg',
    'endersgame.jpg', 'wealthofnations.jpg', 'hackers.jpg', 'foranewliberty.jpg',
    'bravenewworld.jpg', 'fahrenheit451.jpg', 'rulesforradicals.jpg', 'humanaction.jpg',
    'economicsinonelesson.jpg', 'thecommunistmanifesto.jpg', 'warandpeace.jpg',
    'anthem.jpg', 'anarchystateandutopia.jpg', 'theanarchisthandbook.jpg',
    'thecreaturefromjekyllisland.jpg', 'theidiot.jpg', 'thefountainhead.jpg',
    'themachineryoffreedom.jpg', 'endurance.jpg', 'thelaw.jpg', 'notreason.jpg',
    'endthefed.jpg', 'amanforallmarkets.jpg', 'thebookoffiverings.jpg', 'warisaracket.jpg',
    'theprince.jpg', 'maneconomyandstate.jpg', 'theoryofsocialismandcapitalism.jpg',
    'onliberty.jpg', 'themanversusthestate.png'
  ];

  const getCoverWidth = () => (window.innerWidth < 768 ? 108 : 184);
  const getShelfHeight = () => (window.innerWidth < 768 ? 128 : 192);

  const updateShelves = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const angle = Math.atan(height / width);
    const deg = angle * (180 / Math.PI) + 180;
    document.documentElement.style.setProperty('--angle', `-${deg}deg`);

    const coversPerShelf = Math.ceil(width / getCoverWidth());
    const shelfCount = Math.ceil(height / getShelfHeight());

    let index = 0;
    const newShelves = [];
    for (let i = 0; i < shelfCount; i++) {
      const shelf = [];
      for (let j = 0; j < coversPerShelf; j++) {
        shelf.push(covers[index++ % covers.length]);
      }
      newShelves.push(shelf);
    }
    setShelves(newShelves);
  };

  useEffect(() => {
    updateShelves();
    setShowBooks(true);
    window.addEventListener('resize', updateShelves);
    return () => window.removeEventListener('resize', updateShelves);
  }, []);

  return (
    <div className="wrapper">
      <div className="bookshelves">
        {shelves.map((shelf, i) => (
          <div key={i} className="bookshelfRow">
            {shelf.map((book, j) => (
              <div key={j} className={`book ${showBooks ? 'visible' : 'hidden'}`}>
                <div className="bookCover">
                  <img src={`/covers/${book}`} alt={book} />
                </div>
              </div>
            ))}
            <div className="bookshelfDivider" />
          </div>
        ))}
        <div className="overlay" />
      </div>

      <div className="foreground">
        <div className="center">
          <img src="/img/Logo.png" className="logo" alt="Logo" />
          <h1 className="title">audiobookshelf</h1>
          <p className="subtitle">Self-hosted audiobook and podcast server</p>
        </div>

        <div className="links">
          <a href="/docs/docker">Documentation</a>
          <a href="/guides">User Guides</a>
          <a href="/faq">Common Questions</a>
          <a href="/support">How to Support</a>
          <a href="/showcase">Showcase</a>

          <div className="socials">
            <a href="https://discord.gg/HQgCbd6E75"><img src="/discord.svg" alt="Discord" /></a>
            <a href="https://hub.docker.com/r/advplyr/audiobookshelf"><img src="/docker.svg" alt="Docker" /></a>
            <a href="https://github.com/advplyr/audiobookshelf"><img src="/github.svg" alt="GitHub" /></a>
            <a href="https://play.google.com/store/apps/details?id=com.audiobookshelf.app"><img src="/GetGooglePlayStore.png" alt="Google Play" /></a>
            <a href="https://testflight.apple.com/join/wiic7QIW"><img src="/AppleAppStoreDark.svg" alt="App Store" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
