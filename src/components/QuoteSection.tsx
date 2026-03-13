import styles from './QuoteSection.module.css';

const QuoteSection = () => {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.container}>
        <div className={styles.quoteHeader}>
           <div className={styles.quoteDiamond}>◆</div>
           <div className={styles.quoteLines}>
             <div className={styles.quoteLine}></div>
             <div className={styles.quoteLine}></div>
           </div>
        </div>
        
        <h2 className={styles.quoteText}>
          Fire is not a feature.<br />
          <span className={styles.accentText}>It is the soul of every room.</span>
        </h2>

        <p className={styles.quoteDescription}>
          Born from obsession with craft and light,<br />
          Bird fireplaces are architectural<br />
          statements that transform any space into a<br />
          living sanctuary — warmth elevated to<br />
          high design.
        </p>

        <div className={styles.quoteFooter}>
           <div className={styles.quoteLines}>
             <div className={styles.quoteLine}></div>
             <div className={styles.quoteLine}></div>
           </div>
           <div className={styles.quoteDiamond}>◆</div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
