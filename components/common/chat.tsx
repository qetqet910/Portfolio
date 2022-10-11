import Link from "next/link"
import styles from '../../styles/Home.module.scss'

const Chat = () => {
    return (
      <div className={styles.chat}>
        <span>안녕하세요! 저는 우주비행사, Poetmweo에요 만나서 반가워요!<br></br>
        근데 여긴 어쩐 일로 오셨어요?</span> 
        <Link href={'#'}>다음</Link>
      </div>
    )
}
  
export default Chat