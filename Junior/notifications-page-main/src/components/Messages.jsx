import "../styles/Messages.css"

function Messages({ isMark }) {
  return (
    <div className="messages-container">
      <div className={`${isMark === true ? "message" : "message unread"}`}>
        <div className="avatar-container">
          <img src="/assets/images/avatar-mark-webber.webp" alt="avatar"></img>
        </div>
        <div className="message-content">
          <p className="message-text"><span className="name">Mark Webber</span> reacted to your recent post <span className="post-title">My first tournament today!</span> {!isMark &&(
            <div className="unread-mark"></div>
          )}
          </p>
          <p className="time">1m ago</p>
        </div>
      </div>

      <div className={`${isMark === true ? "message" : "message unread"}`}>
        <div className="avatar-container">
          <img src="/assets/images/avatar-angela-gray.webp" alt="avatar"></img>
        </div>
        <div className="message-content">
          <p className="message-text"><span className="name">Angela Gray</span> followed you{!isMark &&(
            <div className="unread-mark"></div>
          )}
          </p>
          <p className="time">5m ago</p>
        </div>
      </div>

      <div className={`${isMark === true ? "message" : "message unread"}`}>
        <div className="avatar-container">
          <img src="/assets/images/avatar-jacob-thompson.webp" alt="avatar"></img>
        </div>
        <div className="message-content">
          <p className="message-text"><span className="name">Jacob Thompson</span> has joined your group <span className="group-name">Chess Club</span>{!isMark &&(
            <div className="unread-mark"></div>
          )}
          </p>
          <p className="time">1 days ago</p>
        </div>
      </div>

      <div className="message">
        <div className="avatar-container">
          <img src="/assets/images/avatar-rizky-hasanuddin.webp" alt="avatar"></img>
        </div>
        <div className="message-content">
          <p className="message-text"><span className="name">Rizky Hasanuddin</span> sent you a private message</p>
          <p className="time">5 days ago</p>
          <div className="private-message-container">
            <p className="private-message">Hello, thanks for setting up the Chess Club. I've      been   a member for a few weeks now and 
              I'm already having lots of fun and improving my game.
            </p>
          </div>
        </div>
      </div>

      <div className="message">
        <div className="avatar-container">
          <img src="/assets/images/avatar-kimberly-smith.webp" alt="avatar"></img>
        </div>
        <div className="message-content">
          <p className="message-text"><span className="name">Kimberly Smith</span> commented on your picture</p>
          <p className="time">1 week ago</p>
        </div>
        <div className="picture"><img src="/assets/images/image-chess.webp" alt="post-img"></img></div>
      </div>

      <div className="message">
        <div className="avatar-container">
          <img src="/assets/images/avatar-nathan-peterson.webp" alt="avatar"></img>
        </div>
        <div className="message-content">
          <p className="message-text"><span className="name">Nathan Peterson</span> reacted to your recent post <span className="post-title">5 end-game strategies to increase your win rate</span></p>
          <p className="time">2 weeks ago</p>
        </div>
      </div>

      <div className="message">
        <div className="avatar-container">
          <img src="/assets/images/avatar-anna-kim.webp" alt="avatar"></img>
        </div>
        <div className="message-content">
          <p className="message-text"><span className="name">Anna Kim</span> left the group <span className="group-name">Chess Club</span></p>
          <p className="time">2 weeks ago</p>
        </div>
      </div>
    </div>
  )
}

export default Messages