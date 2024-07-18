import { useState } from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
export function TwitterFollowCard({userName, name, initialIsFollow}) {
    const [isFollow, setIsFollow] = useState(initialIsFollow);

    const handleClick = () => setIsFollow(!isFollow);

    const text = isFollow ? 'Siguiendo' : 'Seguir';
    const classNameButton = isFollow ? 'tw-followCard-button is-following' : 
    'tw-followCard-button'

  return (
    <article
      style={{ display: "flex", alignItems: "center", color: "#fff" }}
      className="tw-followCard"
    >
      <header className="tw-followCard-header">
        <img
          src={`https://unavatar.io/${userName}`}
          alt={`${name}'s avatar`}
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">
            @{userName}
          </span>
        </div>
      </header>

      <aside>
        <button className={`${classNameButton}`} onClick={handleClick}>
          <span className="tw-folllowCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
