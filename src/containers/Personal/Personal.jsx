import React from 'react';
import classes from './Personal.css';
import formativeImg from '../../assets/personal/formative.JPG';
import travelImg from '../../assets/personal/travel.jpg';
import activitiesImg from '../../assets/personal/currentActivities.jpg';
import passionImg from '../../assets/personal/programming.jpg';
import posed from "react-pose/lib/index";

const TRANSITION_DURATION = 1000;
const SHOW_YOUNG_HEIGHT = window.innerWidth > 599 ? 130 : 140;
const SHOW_TRAVEL_HEIGHT = window.innerWidth > 599 ? 155 : 180;
const SHOW_ACTIVITIES_HEIGHT = window.innerWidth > 599 ? 180 : 220;
const SHOW_PASSION_HEIGHT = window.innerWidth > 599 ? 205 : 260;

/**
 * React-Pose poses for Personal sections [hidden, visible]
 */
const Section = posed.section({
    visible: { opacity: 1, x: 0, transition: {ease: 'easeIn', duration: TRANSITION_DURATION}},
    hiddenLeft: { opacity: 0, x: "-50vw"},
    hiddenRight: { opacity: 0, x: "50vw"},
});

/**
 * Display Personal component, a grid of infomration and photos about myself
 */
class Personal extends React.Component {
    state = {
        young: false,
        travel: false,
        activities: false,
        passion: false
    };

    /**
     * Render sections only when they are scrolled to
     */
    componentDidUpdate() {
        const scrollPercent = this.props.scrollPercent;
        if (scrollPercent > SHOW_YOUNG_HEIGHT) {
            if (!this.state.young) {
                this.setState({young: true});
            }
            else if (scrollPercent > SHOW_TRAVEL_HEIGHT && !this.state.travel) {
                this.setState({travel: true});
            }
            else if (scrollPercent > SHOW_ACTIVITIES_HEIGHT && !this.state.activities) {
                this.setState({activities: true});
            }
            else if (scrollPercent > SHOW_PASSION_HEIGHT && !this.state.passion) {
                this.setState({passion: true});
            }
        }
        else if (this.props.scrollPercent < SHOW_YOUNG_HEIGHT && this.state.young) {
            this.setState({ young: false, travel: false, activities: false, passion: false });
        }
    }

    render() {
        const {young, travel, activities, passion} = this.state;
        return (
            <section className={classes.Main}>
                <section className={classes.Grid} id={"view"}>
                    <Section  pose={young ? "visible" : "hiddenLeft"} className={classes.FlexRowReverse}>
                        <section className={classes.Text}>
                            <p className={classes.Topic}>Young'in</p>
                            <p className={classes.Text}><span className={classes.FirstLetter}>I</span> was born and raised in suburban Philadelphia and enjoyed a normal childhood of outdoor play,
                                sports, video games, and objectionable bedtimes. At age 13, my parents decided to retire from their accomplished careers and chose Beaufort, South Carolina from
                                one of those <em>"Best Places to Retire in 2004"</em> magazines. I attended Beaufort Academy until I began realizing my passion for programming,
                                which led to a transfer to Beaufort High School due to their superior education in technology. I decided to remain in South Carolina during my undergraduate university
                                years, completing the Bachelor of Science Computer Information Systems program with honors at the distinguished College of Charleston.</p></section>
                        <section className={classes.ImageDiv}>
                            <img className={classes.Image} src={formativeImg} alt="Formative Years" />
                        </section>
                    </Section>
                    <Section pose={travel ? "visible" : "hiddenRight"} className={classes.FlexRow}>
                        <section className={classes.ImageDiv}>
                            <img className={classes.Image} src={travelImg} alt="Travel" />
                        </section>
                        <section className={classes.Text}>
                            <p className={classes.Topic}>Travel</p>
                            <span className={classes.FirstLetter}>A</span> Study Abroad opportunity during the summer of 2012 was my first exposure to the extensive cultural diversity offered in this world.
                            From the moment I stepped on the airplane to Madrid, I've had an insatiable travel bug that is always open to new experiences, lifestyles, and perspectives.
                            Apart from living in Spain for five weeks, I took a post-graduation tour of Europe in the Summer of 2013.
                            The tour began in Ireland, and extended to include major cities in Italy, Switzerland, Germany, and the Netherlands.<br />
                            &emsp;In the Fall of 2015, I was given the opportunity to travel back to Germany and explore areas of the Czech Republic and Austria.
                            I stayed put in America until 2017, when I joined my girlfriend's bucket-list quest to visit the Seven Wonders of the World.
                            This trip was two weeks in Peru, capped off with a walk through Machu Picchu and a hike up the towering Wayna Picchu.
                            Although I have no current trips planned, traveling has become an important part of my life, and an integral piece of who I am today.
                            </section>
                    </Section>
                    <Section pose={activities ? "visible" : "hiddenLeft"} className={classes.FlexRowReverse}>
                        <section className={classes.Text}>
                            <p className={classes.Topic}>Current Activities</p>
                            <span className={classes.FirstLetter}>W</span>hen I'm not traveling or learning new technologies, I enjoy spending time with my girlfriend of 2.5 years, Ryan.
                            Her thirst for adventure and adrenaline nearly outweighs mine, and we take pleasure in facing new experiences together. I stay active by wakeboarding in the summer,
                            snowboarding in the winter, and running throughout the year. I make the best of the unique area I live in by frequenting the beach and the waterways whenever possible,
                            which has fostered an interest in fishing and fresh seafood.
                        </section>
                        <section className={classes.ImageDiv}>
                            <img className={classes.Image} src={activitiesImg} alt="Current Activities" />
                        </section>
                    </Section>
                    <Section pose={passion ? "visible" : "hiddenRight"} className={classes.FlexRow}>
                        <section className={classes.ImageDiv}>
                            <img className={classes.Image} src={passionImg} alt="Passion for Programming" />
                        </section>
                        <section className={classes.Text}>
                            <p className={classes.Topic}>Passion for Programming</p>
                            <span className={classes.FirstLetter}>M</span>y enjoyment of software development began in my early teens, when I would modify the HTML of my AOL Instant Messenger profile to make it stand out from the crowd.
                            This extended to making custom webpages for my beloved Philadelphia Eagles, a Harry Potter website (complete with a weekly newsletter), and endless hours perfecting MySpace profiles for myself and friends.
                            I taught myself Python to create small applications that helped automate processes, and wrote small interactive games.
                            <br />&emsp;I always found programming to be challenging in the most fun way possible, and it was something I enjoyed
                            spending my free time on. This enjoyment was compounded my sophomore year of high school, when I took a programming course with an incredible instructor. He became my mentor and helped prepare me with all the skills I would
                            need to be successful in a college-level Software Development program. I quickly learned that programming is not memorizing syntax, but understanding concepts and shifting to a computational mindset.
                            As soon as I started developing useful applications and participating in open-source projects, I was hooked. Now, my priority is continuing to learn and become a more efficient engineer, while helping others become the best coders they can.
                        </section>
                    </Section>
                </section>
            </section>
        );
    }
}

export default Personal;