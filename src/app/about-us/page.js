import Head from "next/head";


export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="Learn about JaipurWeddingPlanner.in – our mission is to connect couples with trusted wedding planners in Jaipur."
        />
      </Head>

      <main className="section">
        <div className="container">
          <h1>About JaipurWeddingPlanner.in</h1>

          <p>
            JaipurWeddingPlanner.in is a dedicated platform built to simplify
            wedding planning for couples and help professional wedding planners
            grow their business.
          </p>

          <p>
            Jaipur is known for royal palaces, destination weddings, and rich
            traditions. Finding the right wedding planner, however, can be
            confusing and time-consuming. Our platform bridges that gap.
          </p>

          <h2>Our Mission</h2>
          <p className="highlight">
            Our mission is to make wedding planning stress-free, transparent,
            and reliable by connecting couples with verified and experienced
            wedding planners in Jaipur and Rajasthan.
          </p>

          <h2>What We Do</h2>
          <ul className="list">
            <li>✔ Connect couples with trusted wedding planners</li>
            <li>✔ Help planners reach genuine wedding leads</li>
            <li>✔ Promote transparency, quality, and trust</li>
            <li>✔ Support destination & royal weddings in Rajasthan</li>
          </ul>
        </div>
      </main>
    </>
  );
}
