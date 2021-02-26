import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/CompletedChallenges.module.css"

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)

  return(
    <div className={styles.completedChallangesContainer}>
      <span>
        Desfios Completos
      </span>
      <span>
        {challengesCompleted}
      </span>
    </div>
  );
}