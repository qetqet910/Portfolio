import type { NextPage } from 'next';
import Styles from '../styles/common/components/About.module.scss';
import Layout from '../components/layout'

const About: NextPage = () => {
    return (
        <Layout>
            <div className={Styles.About}>
                    {/* Front-End Developer
                    안녕하세요! 새로움을 추구하는 개발자 김현민입니다.
                    어떤 기술이든 관심이 생기면 빠르게 탐구하고 실습합니다.
                    코드 한 줄을 쓸 때도 이 코드가 실무에서도 쓸 수 있는 효율적인 코드일까 항상 생각합
                    니다.
                    제가 경험한 무엇이든 제 것으로 만들려고 하기 때문에, 처음은 느려도 시간이 지나면
                    더 좋은 효율을 낸다고 생각합니다.
                    이전 버전의 단점을 보완해서 나오는 신기술 처럼 하루하루 발전해나가는 신기술같은 개발자가 되겠습니다 */}
                    {/* 커리어
                        - 부일중학교 졸업
                        - 인평자동차고 입학
                        - 펜타코드 입사
                        - 펜타코드 퇴사
                        - 한양대학교 에리카 캠퍼스 입학
                        - 아이퀘스트 입사 
                        - 아이퀘스트 퇴사
                        - ?????????????

                    */}

                    {/* 
                        
                    */}
            </div>
        </Layout>
    )
}
  
export default About