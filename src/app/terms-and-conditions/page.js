import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | JaipurWeddingPlanner.in</title>
      </Head>

      <main className="section">
        <div className="container">
          <h2>Terms & Conditions</h2>

          <p>
            By using JaipurWeddingPlanner.in, you agree to the following terms
            and conditions.
          </p>
          <br></br>
          <h2>For Couples</h2>
          <ul className="list">
            <li>We act as a discovery platform, not an event organizer</li>
            <li>Final agreements are between couples and planners</li>
            <li>We do not guarantee pricing or availability</li>
          </ul>
          <br></br>
          <h2>For Wedding Planners</h2>
          <ul className="list">
            <li>Information provided must be accurate and genuine</li>
            <li>Featured or paid listings do not guarantee bookings</li>
            <li>We reserve the right to approve or remove listings</li>
          </ul>
          <br></br>
          <h2>Liability</h2>
          <p>
            JaipurWeddingPlanner.in is not responsible for disputes, service
            quality, or agreements made between users and planners.
          </p>
          <br></br>
          <h2>Updates</h2>
          <p>
            These terms may be updated periodically without prior notice.
          </p>
        </div>
      </main>
    </>
  );
}
