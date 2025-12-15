import Header from "~/components/Header";
import "./index.css";

function About() {
    return (
        <div class="about">
            <Header title="Sakura Sedaia" background="about" desc="Freelance Minecraft Artist and Rig Maker" />
            <div class="about-container">
                <div class="about-content">
                    <div class="section-header">
                        <h1>Who am I?</h1>
                    </div>
                    <p>
                        I am a 22 year old Freelance Artist who has a passion
                        for 3D Artistry and Website Development. I took an early interest in working with 3D
                        Rendering in early 2016 using Blender 2.75 with a friend of mine
                        during Middle School, where I begun working with making 3D Minecraft
                        Renders with Minecraft assets and skins.
                    </p>
                    <p>
                        I spent a few years only working in 3D until 2018 in my Freshman
                        year in high school where I started learning the basics of HTML and
                        CSS, and thus begun the infinite loop of reformatting my portfolio
                        site.
                    </p>
                    <p>
                        Following High School, I begun working as an automotive mechanic
                        after becoming burnt out on art and spending 2 years improving my
                        skills as a technician before leaving the auto industry and
                        beginning my degree towards Computer-Aided Design Technologies in
                        the manufacturing field. About the same time I begun experimenting
                        with the SolidJS Framework.
                    </p>
                    <p>
                        As of December 2025, I have taken a break from my studies to focus on
                        building a better, solid foundation for myself so that I may once again
                        return to College and work for my career end-goal
                    </p>
                </div>{{/* 
                <div class="summaries body-container">
                    <div class="main-summaries flex">
                        <div class="summary render-summary">

                        </div>
                        <div class="summary animation-summary"></div>
                        <div class="summary blend-assets"></div>
                    </div>
                </div> */}}
            </div>
        </div>
    );
}
export default About;