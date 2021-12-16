import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (

//   );
// }

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`}>
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-8 col-centered">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">OwlbearDM Staff</h4>
                  <p class="card-category">RPG tools</p>
                </div>
                <div class="card-body">
                  <ul>
                    <li>
                      Application for every-round initiative rules <a href="https://initiative.owlbeardm.com">
                        initiative.owlbeardm.com
                      </a>
                    </li>
                    <li>
                      <a href="pathfinder2ecritical">Automated tool</a> for Pathfinder 2E critical hits and dying rules. Based on
                      WARHAMMER FANTASY RPG Critical Hits Rolls by Josef Tham,
                      v2.0 from <a href="http://www.windsofchaos.com/">
                        www.windsofchaos.com
                      </a>
                    </li>
                    <li>
                      <a href="wfrpcritical">Automated tool</a> for WARHAMMER FANTASY RPG Critical Hits Rolls by Josef
                      Tham, v2.0 from <a href="http://www.windsofchaos.com/">
                        www.windsofchaos.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-8 col-centered">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Scrollbear Spellbook</h4>
                  <p class="card-category">
                    Pathfinder 1e spellbook application
                  </p>
                </div>
                <div class="card-body">
                  <ul>
                    <li>
                      Spellbook application <a href="https://scrollbear.com/">scrollbear.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-8 col-centered">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Kedôm</h4>
                  <p class="card-category">Campaing setting</p>
                </div>
                <div class="card-body">
                  <ul>
                    <li>
                      <a href="https://kedom.owlbeardm.com/">Kedôm</a> campaing setting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
