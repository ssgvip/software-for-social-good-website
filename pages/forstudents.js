import Navbar from "../components/Navbar";
import ForStudentsLanding from "../components/ForStudentsLanding";
import StudentVoices from "../components/StudentVoices";
import PageDividerTitle from "../components/PageDividerTitle";
import styles from '../styles/ForStudents.module.css'
import CurrentProjects from "../components/CurrentProjects";
import Footer from "../components/Footer";

export default function forstudents()
{
    return(
        <div>
            <Navbar/>
            <div className= {styles.topSectionContainer}>
                <ForStudentsLanding/>
            </div>
            <div className={ styles.studentVoicesContainer }>
                <StudentVoices/>
            </div>
            <div className={ styles.currentProjectsContainer }>
                <CurrentProjects/>
            </div>
            <Footer/>
        </div>
    )
}