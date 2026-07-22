import { useState } from 'react'
import './newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')/*This helps to rerender the  "you're subscribed text" */
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()/*This prevents the default feature of submit which reloads the page */
    if (!email) return/*This allows us to render without calling te setsubmitted usestate since we know there'll definitely be email and user won't click submit without an email so this triggers the text */
    setSubmitted(true)
  }

  return (
    <section className="newsletter">
      <div className="newsletter__content">
        <h2>Subscribe to your Newsletter</h2>
        <p>
          Stay informed ahead of the curve with the latest updates, insights,
          and tips from Aria by subscribing to our newsletter.
        </p>

        {submitted ? (
          <p className="newsletter__success">You're subscribed. Thank you!</p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email Address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  )
}