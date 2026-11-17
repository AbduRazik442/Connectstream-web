import { personalAssistantHelpers } from "../../data/personalAssistantHelpers";

function PersonalAssistantHelpers() {
  return (
    <section className="assistant-helpers-section">
      <div className="container">
        <div className="assistant-helpers-heading">
          <span className="feature-small-label">
            EVERYTHING IT CAN DO
          </span>
          <h2>Nine helpers in one WhatsApp chat.</h2>
        </div>

        <div className="assistant-helpers-grid">
          {personalAssistantHelpers.map((helper) => (
            <article className="assistant-helper-card" key={helper.number}>
              <span className="assistant-helper-number">
                {helper.number}
              </span>

              <h3>{helper.title}</h3>
              <p className="assistant-helper-subtitle">
                {helper.subtitle}
              </p>

              <ul>
                {helper.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="assistant-love-panel">
          <span className="feature-small-label">
            WHY PEOPLE LOVE IT
          </span>
          <p>
            Everything starts with a voice note or a message.
            There is no app to install and nothing to learn,
            so people use it every day.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PersonalAssistantHelpers;