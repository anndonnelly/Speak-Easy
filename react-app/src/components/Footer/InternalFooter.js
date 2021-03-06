import styles from "./InternalFooter.module.css";

function InternalFooter() {
    return (
        <div className={styles.internalFooterDiv}>
            <div className={styles.socialMedia}>
                <p>Created By: </p>
                <div className={styles.col}>
                    <label>Ann Donnelly</label>
                    <a href="https://github.com/anndonnelly">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="githubLogo"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/ann-donnelly/">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                            alt="linkedInLogo"
                        />
                    </a>
                </div>
                <div className={styles.col}>
                    <label>Brandon Mohan</label>
                    <a href="https://github.com/BrandonMohan">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="githubLogo"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/brandon-mohan-ba3282212/">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                            alt="linkedInLogo"
                        />
                    </a>
                </div>
                <div className={styles.col}>
                    <label>James Thompson</label>
                    <a href="https://github.com/jt989073">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="githubLogo"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/james-thompson-60174394/">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                            alt="linkedInLogo"
                        />
                    </a>
                </div>
                <div className={styles.col}>
                    <label>Robert Kauth</label>
                    <a href="https://github.com/Robert-Kauth">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="githubLogo"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/robert-kauth-043370133/">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                            alt="linkedInLogo"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default InternalFooter;
