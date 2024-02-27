import Head from "next/head";
import Layout from "../layout";
import { teamMembers } from "../../UI-data/UI-data";

// framer motion
import { motion } from "framer-motion";

// icons
import { FaQuoteRight } from "react-icons/fa";

const OurTeam = () => {
  return (
    <>
      <Head>
        <title>تیم ما</title>
        <meta name="description" content="به سایت رایا خوش اومدید!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="website icon" href="/imgs/logo-little.png" type="image/icon" />
      </Head>
      <Layout>
        <main>
          <ul className="team">
            {teamMembers.map((teamMember) => (
              <li className="team--member" key={teamMember.name}>
                <div className="team--member--img--container">
                  <img className="team--member--img" src={teamMember.image} alt={teamMember.name} />
                </div>
                <div className="team--member--info--container">
                  <div className="spacer-150"></div>
                  <h4 className="team--member--job--title">{teamMember.jobTitle}</h4>
                  <h2 className="team--member--name">{teamMember.name}</h2>
                  <div className="spacer-50"></div>
                  <blockquote className="team--member--quote--wrapper">
                    <p className="team--member--quote">
                      <FaQuoteRight className="team--member--quote--icon" />
                      {teamMember.quote}
                    </p>
                  </blockquote>
                  <div className="spacer-50"></div>
                  <p className="team--member--description">{teamMember.description}</p>
                  <div className="spacer-50"></div>
                  <ul className="team--member--knowledge">
                    <li className="team--member--knowledge--item">
                      <div className="team--member--knowledge--topic">
                        <span>{teamMember.knowledgeOne}</span>
                        <span>{teamMember.knowledgeOnePercentage}</span>
                      </div>
                      <div className="team--member--knowledge--progressbar">
                        <motion.span
                          initial={{ width: 0 }}
                          whileInView={{
                            width: teamMember.knowledgeOnePercentage,
                          }}
                          transition={{ duration: 1.5 }}
                          viewport={{ once: true }}
                          className="team--member--knowledge--progress"
                        ></motion.span>
                      </div>
                    </li>
                    <li className="team--member--knowledge--item">
                      <div className="team--member--knowledge--topic">
                        <span>{teamMember.knowledgeTwo}</span>
                        <span>{teamMember.knowledgeTwoPercentage}</span>
                      </div>
                      <div className="team--member--knowledge--progressbar">
                        <motion.span
                          initial={{ width: 0 }}
                          whileInView={{
                            width: teamMember.knowledgeTwoPercentage,
                          }}
                          transition={{ duration: 1.5 }}
                          viewport={{ once: true }}
                          className="team--member--knowledge--progress"
                        ></motion.span>
                      </div>
                    </li>
                  </ul>
                  <div className="spacer-150"></div>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </Layout>
    </>
  );
};

export default OurTeam;
